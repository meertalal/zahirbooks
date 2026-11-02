import { Breadcrumbs } from "../components/ui/Breadcrumbs"
import { Button } from "../components/ui/Button"
import { Icon } from "../components/ui/Icon"
import { PageHero } from "../components/ui/PageHero"
import "./AboutPage.css"

const STATS = [
  { icon: "book", value: "10,000+", label: "Books Available" },
  { icon: "users", value: "50,000+", label: "Happy Readers" },
  { icon: "truck", value: "Fast Delivery", label: "Across Pakistan" },
  { icon: "shield", value: "Trusted Store", label: "Secure & Reliable" },
]

const REASONS = [
  "Wide range of books across genres",
  "Affordable prices and weekly deals",
  "Fast delivery across Pakistan",
  "Easy ordering and secure checkout",
  "Friendly customer support",
]

export function AboutPage() {
  return (
    <div className="about">
      <PageHero
        title="About ZahirBooks"
        subtitle="A place for book lovers. Discover, read, and grow with a trusted online bookstore."
        image="/images/heroes/about-hero.jpg"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "About Us" },
          ]}
        />
      </div>

      <section className="section">
        <div className="container story-grid">
          <img
            src="/images/sections/our-story.jpg"
            alt="Bookstore interior with wooden shelves"
          />
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Our Story
            </h2>
            <p>
              ZahirBooks began with a simple idea: make great books easy to
              discover and delightful to buy. From bestsellers to hidden gems,
              we carefully curate titles that inspire learning, imagination, and
              growth.
            </p>
            <p>
              Today we serve readers across Pakistan with a warm shopping
              experience, reliable delivery, and a community that shares the
              love of reading.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-ribbon">
        <div className="container stats-ribbon__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item">
              <Icon name={stat.icon} size={26} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container values-grid">
          <article className="value-card">
            <Icon name="target" size={28} />
            <h3>Our Mission</h3>
            <p>
              To make books accessible through a wide selection, fair prices,
              and reliable delivery — so every reader can find their next
              favourite title.
            </p>
          </article>
          <article className="value-card">
            <Icon name="eye" size={28} />
            <h3>Our Vision</h3>
            <p>
              To become Pakistan’s leading online bookstore, inspiring a lasting
              love for reading in homes, schools, and communities.
            </p>
          </article>
          <article className="value-card">
            <Icon name="diamond" size={28} />
            <h3>Why Choose Us?</h3>
            <ul>
              {REASONS.map((reason) => (
                <li key={reason}>
                  <Icon name="check" size={16} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__bg" />
        <div className="container about-cta__inner">
          <div>
            <h2>Explore Our Collection Today</h2>
            <p>Find your next favourite book at ZahirBooks.</p>
          </div>
          <Button to="/shop">Shop Now →</Button>
        </div>
      </section>
    </div>
  )
}
