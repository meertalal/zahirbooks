import { PROMO_ITEMS } from "../../data/catalog"
import "./PromoBar.css"

export function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-bar__inner">
        {PROMO_ITEMS.map((item, i) => (
          <span key={item}>
            {i > 0 ? <span className="promo-bar__sep">|</span> : null}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
