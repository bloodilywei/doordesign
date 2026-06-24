import json
from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent
SOURCE_DIR = ROOT / "doors"
THUMB_DIR = ROOT / "thumbs"
INDEX_PATH = ROOT / "doors.index.json"
MAX_SIZE = (360, 720)
JPEG_QUALITY = 68
SERIES_KEYS = {"1", "2", "3", "5", "6"}


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


def infer_design_id(filename: str) -> str | None:
    stem = Path(filename).stem.lower()
    for number in range(999, 0, -1):
        design_id = str(number).zfill(2)
        if not stem.startswith(design_id.lower()):
            continue

        remainder = stem[len(design_id):]
        if not remainder:
            continue

        next_char = remainder[0]
        if next_char in {"-", "_", "."} or next_char in SERIES_KEYS or next_char.isalpha():
            return design_id

    return None


def build_design_index() -> dict:
    grouped: dict[str, list[str]] = {}

    for thumb_path in sorted(THUMB_DIR.iterdir()):
        if not thumb_path.is_file():
            continue
        if thumb_path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue

        design_id = infer_design_id(thumb_path.name)
        if not design_id:
            continue

        grouped.setdefault(design_id, []).append(thumb_path.name)

    designs = []
    for design_id, files in sorted(grouped.items(), key=lambda item: int(item[0])):
        preferred = [
            f"{design_id}-11.jpg",
            f"{design_id}11.jpg",
            f"{design_id}-12.jpg",
            f"{design_id}12.jpg",
        ]
        ordered = [name for name in preferred if name in files]
        ordered.extend(name for name in files if name not in ordered)

        designs.append({
            "id": design_id,
            "thumbs": ordered,
        })

    return {
        "generatedAt": __import__("datetime").datetime.now().isoformat(timespec="seconds"),
        "designs": designs,
    }


def main() -> None:
    THUMB_DIR.mkdir(parents=True, exist_ok=True)
    created = 0
    skipped = 0

    for src_path in sorted(SOURCE_DIR.iterdir()):
        if not src_path.is_file():
            continue
        if src_path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue

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

    print(f"created={created}")
    print(f"skipped={skipped}")
    print(f"indexed={len(index_data['designs'])}")


if __name__ == "__main__":
    main()
