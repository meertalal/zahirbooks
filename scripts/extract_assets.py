from PIL import Image
from pathlib import Path

assets = Path(r"C:\Users\Mir Talal AlBaloshi\.cursor\projects\d-talal-dev-data-laragon-www-zahirbooks\assets")
out = Path(r"D:\talal-dev-data\laragon\www\zahirbooks\public\images")
(out / "heroes").mkdir(parents=True, exist_ok=True)
(out / "covers").mkdir(parents=True, exist_ok=True)
(out / "sections").mkdir(parents=True, exist_ok=True)

home = Image.open(assets / "ZahirBooks__Discover_Books_That_Inspire-75f13ffb-7049-46dd-93b2-102fc6d4ac48.jpg")
shop = Image.open(assets / "ZahirBooks_Shop_Collection-18be21e3-ca1f-45fa-be8b-086a753f2000.jpg")
about = Image.open(assets / "ZahirBooks_About_Us_Page-bd9575e8-8fb4-43eb-8958-87047244f848.jpg")
contact = Image.open(assets / "ZahirBooks_Contact_Page_Mockup-2e64f6a4-28e5-4601-8005-85cf1bdc36d6.jpg")

print("home", home.size)
print("shop", shop.size)
print("about", about.size)
print("contact", contact.size)

home.crop((360, 85, 660, 290)).resize((900, 600), Image.Resampling.LANCZOS).save(
    out / "heroes" / "home-hero.jpg", quality=92
)
home.crop((40, 700, 340, 860)).resize((800, 480), Image.Resampling.LANCZOS).save(
    out / "sections" / "about-teaser.jpg", quality=92
)
home.crop((40, 560, 180, 640)).resize((400, 280), Image.Resampling.LANCZOS).save(
    out / "sections" / "quote-books.jpg", quality=92
)

shop.crop((40, 95, 900, 250)).resize((1400, 360), Image.Resampling.LANCZOS).save(
    out / "heroes" / "shop-hero.jpg", quality=92
)

about.crop((40, 95, 900, 250)).resize((1400, 360), Image.Resampling.LANCZOS).save(
    out / "heroes" / "about-hero.jpg", quality=92
)
about.crop((40, 270, 460, 470)).resize((900, 560), Image.Resampling.LANCZOS).save(
    out / "sections" / "our-story.jpg", quality=92
)
about.crop((40, 700, 900, 820)).resize((1400, 280), Image.Resampling.LANCZOS).save(
    out / "sections" / "about-cta.jpg", quality=92
)

contact.crop((40, 95, 900, 250)).resize((1400, 360), Image.Resampling.LANCZOS).save(
    out / "heroes" / "contact-hero.jpg", quality=92
)
contact.crop((40, 620, 900, 780)).resize((1400, 360), Image.Resampling.LANCZOS).save(
    out / "sections" / "map.jpg", quality=92
)

featured_ys = (330, 470)
featured_xs = [(35, 145), (155, 265), (275, 385), (395, 505), (515, 625)]
featured_names = [
    "atomic-habits",
    "psychology-of-money",
    "think-grow-rich",
    "ikigai",
    "alchemist",
]
for name, (x1, x2) in zip(featured_names, featured_xs):
    home.crop((x1, featured_ys[0], x2, featured_ys[1])).resize(
        (280, 400), Image.Resampling.LANCZOS
    ).save(out / "covers" / f"{name}.jpg", quality=92)

bs_ys = (590, 720)
bs_xs = [(35, 145), (155, 265), (275, 385), (395, 505), (515, 625)]
bs_names = ["sapiens", "lean-startup", "mockingbird", "1984", "subtle-art"]
for name, (x1, x2) in zip(bs_names, bs_xs):
    home.crop((x1, bs_ys[0], x2, bs_ys[1])).resize(
        (280, 400), Image.Resampling.LANCZOS
    ).save(out / "covers" / f"{name}.jpg", quality=92)

shop_ys = (360, 520)
shop_xs = [(250, 370), (380, 500), (510, 630), (640, 760)]
shop_extra = ["deep-work", "rich-dad", "educated", "atomic-habits-alt"]
for name, (x1, x2) in zip(shop_extra, shop_xs):
    shop.crop((x1, shop_ys[0], x2, shop_ys[1])).resize(
        (280, 400), Image.Resampling.LANCZOS
    ).save(out / "covers" / f"{name}.jpg", quality=92)

print("Extracted assets to", out)
for p in sorted(out.rglob("*.jpg")):
    im = Image.open(p)
    print(p.relative_to(out), im.size)
