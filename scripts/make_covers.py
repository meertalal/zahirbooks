"""Create crisp book-cover placeholders matching mockup titles/colors."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

out = Path(r"D:\talal-dev-data\laragon\www\zahirbooks\public\images\covers")
out.mkdir(parents=True, exist_ok=True)

# (filename, bg, accent, title lines, author)
BOOKS = [
    ("atomic-habits", "#1a1a1a", "#f5c542", ["ATOMIC", "HABITS"], "James Clear"),
    ("psychology-of-money", "#0d3b66", "#f4d35e", ["THE", "PSYCHOLOGY", "OF MONEY"], "Morgan Housel"),
    ("think-grow-rich", "#5c3317", "#e8c27a", ["THINK AND", "GROW RICH"], "Napoleon Hill"),
    ("ikigai", "#c45c26", "#fff5e6", ["IKIGAI"], "Garcia & Miralles"),
    ("alchemist", "#c9a227", "#2b2118", ["THE", "ALCHEMIST"], "Paulo Coelho"),
    ("sapiens", "#e8d5a3", "#2f2a24", ["SAPIENS"], "Yuval Noah Harari"),
    ("lean-startup", "#111111", "#ffffff", ["THE LEAN", "STARTUP"], "Eric Ries"),
    ("mockingbird", "#6b2d2d", "#f0e6d2", ["TO KILL A", "MOCKINGBIRD"], "Harper Lee"),
    ("1984", "#1c1c1c", "#e63946", ["1984"], "George Orwell"),
    ("subtle-art", "#f2f2f2", "#111111", ["THE SUBTLE", "ART OF NOT", "GIVING A F*CK"], "Mark Manson"),
    ("deep-work", "#102a43", "#d9e2ec", ["DEEP", "WORK"], "Cal Newport"),
    ("rich-dad", "#0b3d2e", "#f6c945", ["RICH DAD", "POOR DAD"], "Robert Kiyosaki"),
    ("educated", "#3d405b", "#f4f1de", ["EDUCATED"], "Tara Westover"),
    ("cant-hurt-me", "#222222", "#ef233c", ["CAN'T", "HURT ME"], "David Goggins"),
    ("atomic-habits-alt", "#1a1a1a", "#f5c542", ["ATOMIC", "HABITS"], "James Clear"),
    ("power-of-now", "#4a6741", "#f7f3e8", ["THE POWER", "OF NOW"], "Eckhart Tolle"),
]


def font(size: int):
    for name in (
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/times.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def wrap_draw(draw, lines, fill, y, W, size):
    f = font(size)
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=f)
        tw = bbox[2] - bbox[0]
        draw.text(((W - tw) / 2, y), line, fill=fill, font=f)
        y += int(size * 1.15)
    return y


for slug, bg, accent, title, author in BOOKS:
    W, H = 320, 480
    img = Image.new("RGB", (W, H), bg)
    d = ImageDraw.Draw(img)
    # top accent bar
    d.rectangle([0, 0, W, 18], fill=accent)
    d.rectangle([0, H - 18, W, H], fill=accent)
    # decorative frame
    d.rectangle([16, 40, W - 16, H - 70], outline=accent, width=2)
    y = wrap_draw(d, title, accent, 150 if len(title) < 3 else 120, W, 34 if len(title) < 3 else 28)
    af = font(16)
    bbox = d.textbbox((0, 0), author, font=af)
    tw = bbox[2] - bbox[0]
    d.text(((W - tw) / 2, H - 55), author, fill=accent, font=af)
    img.save(out / f"{slug}.jpg", quality=95)
    print("wrote", slug)

print("done")
