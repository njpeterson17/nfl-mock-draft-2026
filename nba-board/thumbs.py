"""Build portrait thumbnails for the board. Run: python3 thumbs.py

Originals in assets/headshots/ are kept untouched for provenance; the page loads
assets/headshots/thumbs/<id>.jpg and falls back to the original if one is missing.
Requires Pillow. Standard roster headshots use a top-centre crop; photos that are
wide or full-body get a reviewed crop box in CROPS (fractions of width/height).
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent
SRC = ROOT / 'assets' / 'headshots'
OUT = SRC / 'thumbs'
W, H = 240, 270  # 2x the 116x130 profile portrait; matches the 64x72 row aspect

# left, top, right, bottom as fractions of the original image. Reviewed by eye.
CROPS = {
    'brucebranch': (0.384, 0.088, 0.562, 0.398),       # 3000x1935 full-body studio shot
    'stefanjoksimovic': (0.1625, 0.033, 0.83, 0.528),  # national-team photo, head small in frame
    'arrintenpage': (0.29, 0.10, 0.724, 0.967),        # 533x300 landscape
}

def crop_box(name, im):
    iw, ih = im.size
    if name in CROPS:
        l, t, r, b = CROPS[name]
        return round(l * iw), round(t * ih), round(r * iw), round(b * ih)
    # Same framing the page used before (object-fit: cover, anchored to the top).
    scale = min(iw / W, ih / H)
    cw, ch = W * scale, H * scale
    left = (iw - cw) / 2
    return round(left), 0, round(left + cw), round(ch)

def main():
    OUT.mkdir(exist_ok=True)
    used = {Path(p['photo']).name for p in json.loads((ROOT / 'players.json').read_text())['players']
            if (p.get('photo') or '').startswith('assets/headshots/')}
    before = after = 0
    for name in sorted(used):
        src = SRC / name
        im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
        thumb = im.crop(crop_box(src.stem, im)).resize((W, H), Image.LANCZOS)
        dest = OUT / (src.stem + '.jpg')
        thumb.save(dest, 'JPEG', quality=84, optimize=True, progressive=True)
        before += src.stat().st_size; after += dest.stat().st_size
        print(f"{name:28} {'crop' if src.stem in CROPS else 'top '}  {src.stat().st_size // 1024:>5} KB -> {dest.stat().st_size // 1024} KB")
    print(f'{len(used)} thumbnails: {before / 1e6:.1f} MB -> {after / 1e6:.2f} MB')

if __name__ == '__main__':
    main()
