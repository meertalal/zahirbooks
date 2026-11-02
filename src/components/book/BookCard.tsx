import type { Book } from "../../data/catalog"
import { Button } from "../ui/Button"
import { Icon } from "../ui/Icon"
import { Rating } from "../ui/Rating"
import "./BookCard.css"

type BookCardProps = {
  book: Book
  layout?: "grid" | "list" | "home"
  onAddToCart?: (book: Book) => void
  onToggleWishlist?: (book: Book) => void
  wished?: boolean
}

export function BookCard({
  book,
  layout = "grid",
  onAddToCart,
  onToggleWishlist,
  wished = false,
}: BookCardProps) {
  return (
    <article className={`book-card book-card--${layout}`}>
      <div className="book-card__media">
        <img src={book.cover} alt={book.title} loading="lazy" />
        <button
          type="button"
          className={`book-card__wish ${wished ? "is-active" : ""}`}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => onToggleWishlist?.(book)}
        >
          <Icon name="heart" size={16} />
        </button>
      </div>

      <div className="book-card__body">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <Rating value={book.rating} reviews={book.reviews} />

        <div className="book-card__footer">
          <span className="book-card__price">${book.price.toFixed(2)}</span>
          <Button
            type="button"
            className="book-card__cart"
            icon={<Icon name="cart" size={15} />}
            onClick={() => onAddToCart?.(book)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  )
}
