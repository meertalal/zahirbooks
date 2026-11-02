import { useMemo, useState } from "react"
import {
  AUTHORS,
  BOOKS,
  CATEGORIES,
  type Category,
} from "../data/catalog"
import { useStore } from "../context/StoreContext"
import { BookCard } from "../components/book/BookCard"
import { Breadcrumbs } from "../components/ui/Breadcrumbs"
import { Button } from "../components/ui/Button"
import { Icon } from "../components/ui/Icon"
import { PageHero } from "../components/ui/PageHero"
import "./ShopPage.css"

const PAGE_SIZE = 8

export function ShopPage() {
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const [minRating, setMinRating] = useState<number | null>(null)
  const [price, setPrice] = useState(50)
  const [sort, setSort] = useState("newest")
  const [view, setView] = useState<"grid" | "list">("grid")
  const [page, setPage] = useState(1)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...BOOKS]

    if (selectedCategories.length) {
      list = list.filter((b) => selectedCategories.includes(b.category))
    }
    if (selectedAuthors.length) {
      list = list.filter((b) => selectedAuthors.includes(b.author))
    }
    if (minRating) {
      list = list.filter((b) => b.rating >= minRating)
    }
    list = list.filter((b) => b.price <= price)

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price)
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating)

    return list
  }, [selectedCategories, selectedAuthors, minRating, price, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function toggleCategory(name: Category) {
    setPage(1)
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name],
    )
  }

  function toggleAuthor(name: string) {
    setPage(1)
    setSelectedAuthors((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name],
    )
  }

  function clearFilters() {
    setSelectedCategories([])
    setSelectedAuthors([])
    setMinRating(null)
    setPrice(50)
    setPage(1)
  }

  const filters = (
    <aside className="shop-filters">
      <div className="shop-filters__head">
        <h3>Filters</h3>
        <button
          type="button"
          className="shop-filters__close"
          onClick={() => setFiltersOpen(false)}
          aria-label="Close filters"
        >
          <Icon name="close" size={18} />
        </button>
      </div>

      <details open className="filter-block">
        <summary>Categories</summary>
        <div className="filter-block__body">
          {CATEGORIES.map((cat) => (
            <label key={cat.name}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.name)}
                onChange={() => toggleCategory(cat.name)}
              />
              <span>
                {cat.name} <em>({cat.count})</em>
              </span>
            </label>
          ))}
        </div>
      </details>

      <details open className="filter-block">
        <summary>Price Range</summary>
        <div className="filter-block__body">
          <input
            type="range"
            min={0}
            max={50}
            value={price}
            onChange={(e) => {
              setPrice(Number(e.target.value))
              setPage(1)
            }}
          />
          <div className="price-range-labels">
            <span>$0</span>
            <strong>${price}</strong>
          </div>
        </div>
      </details>

      <details open className="filter-block">
        <summary>Author</summary>
        <div className="filter-block__body">
          {AUTHORS.map((author) => (
            <label key={author.name}>
              <input
                type="checkbox"
                checked={selectedAuthors.includes(author.name)}
                onChange={() => toggleAuthor(author.name)}
              />
              <span>
                {author.name} <em>({author.count})</em>
              </span>
            </label>
          ))}
          <button type="button" className="linkish">
            View More
          </button>
        </div>
      </details>

      <details open className="filter-block">
        <summary>Rating</summary>
        <div className="filter-block__body">
          {[5, 4, 3, 2].map((stars) => (
            <label key={stars}>
              <input
                type="radio"
                name="rating"
                checked={minRating === stars}
                onChange={() => {
                  setMinRating(stars)
                  setPage(1)
                }}
              />
              <span className="rating-filter">
                {Array.from({ length: stars }).map((_, i) => (
                  <Icon key={i} name="star" size={13} />
                ))}
                <em>& up</em>
              </span>
            </label>
          ))}
        </div>
      </details>

      <Button type="button" variant="outline" onClick={clearFilters}>
        Clear Filters
      </Button>
    </aside>
  )

  return (
    <div className="shop">
      <PageHero
        title="Shop Our Collection"
        subtitle="Explore a wide range of books across different genres for every kind of reader."
        image="/images/heroes/shop-hero.jpg"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Shop" },
          ]}
        />

        <div className="shop-layout">
          <div
            className={`shop-filters-wrap ${filtersOpen ? "is-open" : ""}`}
            aria-hidden={!filtersOpen}
            inert={!filtersOpen}
          >
            <button
              type="button"
              className="shop-filters-backdrop"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              tabIndex={filtersOpen ? 0 : -1}
            />
            {filters}
          </div>

          <section className="shop-results">
            <div className="shop-toolbar">
              <h2>
                All Books <span>({filtered.length})</span>
              </h2>
              <div className="shop-toolbar__controls">
                <Button
                  type="button"
                  variant="outline"
                  className="shop-filters-toggle"
                  icon={<Icon name="filter" size={16} />}
                  onClick={() => setFiltersOpen(true)}
                >
                  Filters
                </Button>
                <label className="sort-field">
                  <span>Sort By</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </label>
                <div className="view-toggle" role="group" aria-label="View mode">
                  <button
                    type="button"
                    className={view === "grid" ? "is-active" : ""}
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                  >
                    <Icon name="grid" size={16} />
                  </button>
                  <button
                    type="button"
                    className={view === "list" ? "is-active" : ""}
                    onClick={() => setView("list")}
                    aria-label="List view"
                  >
                    <Icon name="list" size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className={`book-grid book-grid--shop ${view === "list" ? "is-list" : ""}`}>
              {pageItems.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  layout={view}
                  wished={wishlist.has(book.id)}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                />
              ))}
            </div>

            <div className="pagination">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={page === i + 1 ? "is-active" : ""}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
