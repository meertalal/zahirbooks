from PIL import Image
from pathlib import Path

assets = Path(r"C:\Users\Mir Talal AlBaloshi\.cursor\projects\d-talal-dev-data-laragon-www-zahirbooks\assets")
out = Path(r"D:\talal-dev-data\laragon\www\zahirbooks\public\images")

home = Image.open(assets / "ZahirBooks__Discover_Books_That_Inspire-75f13ffb-7049-46dd-93b2-102fc6d4ac48.jpg")
shop = Image.open(assets / "ZahirBooks_Shop_Collection-18be21e3-ca1f-45fa-be8b-086a753f2000.jpg")
about = Image.open(assets / "ZahirBooks_About_Us_Page-bd9575e8-8fb4-43eb-8958-87047244f848.jpg")
contact = Image.open(assets / "ZahirBooks_Contact_Page_Mockup-2e64f6a4-28e5-4601-8005-85cf1bdc36d6.jpg")

# Home: right-side lifestyle photo only
home.crop((350, 70, 670, 265)).resize((1000, 700), Image.Resampling.LANCZOS).save(
    out / "heroes" / "home-hero.jpg", quality=94
)

# Page banners: take right half photo area (avoid headline text on left)
for img, name in [
    (shop, "shop-hero.jpg"),
    (about, "about-hero.jpg"),
    (contact, "contact-hero.jpg"),
]:
    img.crop((420, 95, 910, 245)).resize((1100, 420), Image.Resampling.LANCZOS).save(
        out / "heroes" / name, quality=94
    )

# About story - bookstore interior left
about.crop((45, 275, 450, 465)).resize((980, 620), Image.Resampling.LANCZOS).save(
    out / "sections" / "our-story.jpg", quality=94
)

# Home about teaser
home.crop((35, 710, 330, 850)).resize((900, 520), Image.Resampling.LANCZOS).save(
    out / "sections" / "about-teaser.jpg", quality=94
)

# Quote books
home.crop((30, 545, 160, 630)).resize((420, 300), Image.Resampling.LANCZOS).save(
    out / "sections" / "quote-books.jpg", quality=94
)

# Map illustration area
contact.crop((50, 640, 620, 780)).resize((1100, 360), Image.Resampling.LANCZOS).save(
    out / "sections" / "map.jpg", quality=94
)

# CTA background blurry books
about.crop((50, 720, 900, 810)).resize((1400, 300), Image.Resampling.LANCZOS).save(
    out / "sections" / "about-cta.jpg", quality=94
)

print("refined heroes")
