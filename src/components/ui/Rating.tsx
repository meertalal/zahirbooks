import { Icon } from "./Icon"
import "./Rating.css"

type RatingProps = {
  value: number
  reviews?: string
  compact?: boolean
}

export function Rating({ value, reviews, compact }: RatingProps) {
  return (
    <div className={`zb-rating ${compact ? "zb-rating--compact" : ""}`}>
      <Icon name="star" size={14} className="zb-rating__star" />
      <span className="zb-rating__value">{value.toFixed(1)}</span>
      {reviews ? <span className="zb-rating__count">({reviews})</span> : null}
    </div>
  )
}
