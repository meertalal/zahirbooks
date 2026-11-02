import { Link } from "react-router-dom"
import { CATEGORIES, bestSellerBooks, featuredBooks } from "../data/catalog"
import { useStore } from "../context/StoreContext"
import { BookCard } from "../components/book/BookCard"
import { Button } from "../components/ui/Button"
import { Icon } from "../components/ui/Icon"
import "./HomePage.css"

const TRUST = [
  { icon: "truck", title: "Free Shipping", text: "On orders over $50" },
  { icon: "lock", title: "Secure Payment", text: "100% protected checkout" },
  { icon: "refresh", title: "Easy Returns", text: "7-day hassle-free returns" },
  { icon: "headset", title: "Customer Support", text: "Friendly help when you need it" },
]

export function HomePage() {
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const featured = featuredBooks()
  const bestsellers = bestSellerBooks()

  return (
    <div className="home">
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">Your Online Bookstore —</p>
            <h1>
              Discover Books
              <br />
              That Inspire.
            </h1>
            <p className="home-hero__text">
              Explore fiction, education, business, history, and more — curated
              for every kind of reader.
            </p>
            <div className="home-hero__actions">
              <Button to="/shop">Shop Now →</Button>
              <Button to="/shop" variant="outline">
                Browse Categories
              </Button>
            </div>
          </div>
          <div className="home-hero__media">
            <img
              src="/images/heroes/home-hero.jpg"
              alt="Stack of books with coffee and plant"
            />
          </div>
        </div>
      </section>

      <section className="home-categories section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Shop by Category</h2>
            <div className="section-head__line" />
          </div>
          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} to="/shop" className="category-card">
                <Icon name={cat.icon} size={26} />
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Featured Books</h2>
            <Button to="/shop" variant="ghost">
              View All →
            </Button>
          </div>
          <div className="book-grid book-grid--5">
            {featured.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                layout="home"
                wished={wishlist.has(book.id)}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="quote-banner">
        <div className="container quote-banner__inner">
          <img
            src="/images/sections/quote-books.jpg"
            alt=""
            className="quote-banner__img"
          />
          <blockquote>“A Good Book is Always a Good Idea.”</blockquote>
          <Button to="/shop">Explore Collection →</Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Best Sellers</h2>
            <Button to="/shop" variant="ghost">
              View All →
            </Button>
          </div>
          <div className="book-grid book-grid--5">
            {bestsellers.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                layout="home"
                wished={wishlist.has(book.id)}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar__grid">
          {TRUST.map((item) => (
            <div key={item.title} className="trust-item">
              <Icon name={item.icon} size={24} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-teaser">
        <div className="container about-teaser__grid">
          <img
            src="/images/sections/about-teaser.jpg"
            alt="Cozy bookstore interior"
          />
          <div>
            <h2 className="section-title">About ZahirBooks</h2>
            <p>
              ZahirBooks is a place for book lovers. We bring together inspiring
              titles, trusted authors, and a smooth shopping experience so you
              can discover your next favourite read with confidence.
            </p>
            <Button to="/about">Learn More →</Button>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter__inner">
          <div className="newsletter__copy">
            <Icon name="mail" size={28} />
            <div>
              <h2>Stay in the Loop</h2>
              <p>Get updates on new arrivals, deals, and reading picks.</p>
            </div>
          </div>
          <form
            className="newsletter__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" required />
            <Button type="submit">Subscribe →</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
