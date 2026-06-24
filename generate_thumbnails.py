import json
import re
from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent
SOURCE_DIR = ROOT / "doors"
THUMB_DIR = ROOT / "thumbs"
INDEX_PATH = ROOT / "doors.index.json"
INVALID_REPORT_PATH = ROOT / "doors.invalid.txt"
MAX_SIZE = (360, 720)
JPEG_QUALITY = 68
STANDARD_FILENAME_RE = re.compile(r"^(?P<design>\d{2,3})-(?P<material>\d{2})(?:-(?P<variant>\d{2}))?$")
DESIGN_PREFIX_RE = re.compile(r"^(?P<design>\d{2,3})-(?P<material>\d{2})(?P<rest>.*)$")
TEXT_EFFECT_RE = re.compile(r"^(?P<variant>[A-Za-z0-9]{1,2})?(?:[\-_]?)?(?:\((?P<label>[^)]+)\)|(?P<bare_label>[\u4e00-\u9fff]+.*))$")


def build_thumbnail(src_path: Path, dst_path: Path) -> bool:
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    if dst_path.exists() and dst_path.stat().st_mtime >= src_path.stat().st_mtime:
        return False

    with Image.open(src_path) as img:
        img = ImageOps.exif_transpose(img)
        has_alpha = "A" in img.getbands()
        thumb = img.copy()
        thumb.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)

        if src_path.suffix.lower() in {".jpg", ".jpeg"}:
            thumb = thumb.convert("RGB")
            thumb.save(
                dst_path,
                format="JPEG",
                quality=JPEG_QUALITY,
                optimize=True,
                progressive=True,
            )
        elif src_path.suffix.lower() == ".png":
            if has_alpha:
                thumb.save(dst_path, format="PNG", optimize=True)
            else:
                thumb = thumb.convert("RGB")
                thumb.save(
                    dst_path.with_suffix(".jpg"),
                    format="JPEG",
                    quality=JPEG_QUALITY,
                    optimize=True,
                    progressive=True,
                )
                if dst_path.exists():
                    dst_path.unlink()
        else:
            thumb.save(dst_path)

    return True


def parse_design_file(filename: str) -> dict | None:
    stem = Path(filename).stem
    match = DESIGN_PREFIX_RE.match(stem)
    if not match:
        return None

    rest = (match.group("rest") or "").strip()
    rest = rest.lstrip("-_")
    variant = ""
    effect = ""
    naming_mode = "base"

    if rest:
        variant_match = re.match(r"^(?P<variant>[A-Za-z0-9]{1,2})", rest)
        if variant_match:
            variant = variant_match.group("variant")
            naming_mode = "variant"

        text_effect_match = TEXT_EFFECT_RE.match(rest)
        if text_effect_match:
            effect = (text_effect_match.group("label") or text_effect_match.group("bare_label") or "").strip()
            if effect:
                naming_mode = "effect" if not variant else "variant-effect"
        elif rest and not variant:
            effect = rest
            naming_mode = "effect"

    return {
        "id": match.group("design"),
        "material": match.group("material"),
        "variant": variant,
        "effect": effect,
        "naming_mode": naming_mode,
        "is_standard": bool(STANDARD_FILENAME_RE.match(stem)) or bool(effect),
        "file": filename,
    }


def build_design_index() -> dict:
    grouped: dict[str, list[dict]] = {}

    for thumb_path in sorted(THUMB_DIR.iterdir()):
        if not thumb_path.is_file():
            continue
        if thumb_path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue

        parsed = parse_design_file(thumb_path.name)
        if not parsed:
            continue

        grouped.setdefault(parsed["id"], []).append(parsed)

    designs = []
    for design_id, items in sorted(grouped.items(), key=lambda item: int(item[0])):
        ordered_items = sorted(
            items,
            key=lambda item: (
                not item["is_standard"],
                item["variant"] != "",
                item["effect"] != "",
                item["material"] != "11",
                item["material"],
                item["variant"],
                item["effect"],
                item["file"],
            ),
        )

        designs.append({
            "id": design_id,
            "thumbs": [item["file"] for item in ordered_items],
            "items": [
                {
                    "file": item["file"],
                    "material": item["material"],
                    "variant": item["variant"],
                    "effect": item["effect"],
                    "namingMode": item["naming_mode"],
                    "isStandard": item["is_standard"],
                }
                for item in ordered_items
            ],
        })

    return {
        "generatedAt": __import__("datetime").datetime.now().isoformat(timespec="seconds"),
        "designs": designs,
    }


def main() -> None:
    THUMB_DIR.mkdir(parents=True, exist_ok=True)
    created = 0
    skipped = 0
    invalid_files: list[str] = []
    effect_files: list[str] = []

    for src_path in sorted(SOURCE_DIR.iterdir()):
        if not src_path.is_file():
            continue
        if src_path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue

        parsed = parse_design_file(src_path.name)
        if not parsed:
            invalid_files.append(src_path.name)
        elif parsed["effect"]:
            effect_files.append(src_path.name)

        dst_path = THUMB_DIR / src_path.name
        if build_thumbnail(src_path, dst_path):
            created += 1
        else:
            skipped += 1

    index_data = build_design_index()
    INDEX_PATH.write_text(
        json.dumps(index_data, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    report_lines = [
        "[effects]",
        *effect_files,
        "",
        "[invalid]",
        *invalid_files,
    ]
    INVALID_REPORT_PATH.write_text("\n".join(report_lines), encoding="utf-8")

    print(f"created={created}")
    print(f"skipped={skipped}")
    print(f"indexed={len(index_data['designs'])}")
    print(f"effects={len(effect_files)}")
    print(f"invalid={len(invalid_files)}")


if __name__ == "__main__":
    main()
