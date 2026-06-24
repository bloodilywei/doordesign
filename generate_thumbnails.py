from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent
SOURCE_DIR = ROOT / "doors"
THUMB_DIR = ROOT / "thumbs"
MAX_SIZE = (360, 720)
JPEG_QUALITY = 68


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

    print(f"created={created}")
    print(f"skipped={skipped}")


if __name__ == "__main__":
    main()
