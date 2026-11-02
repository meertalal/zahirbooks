import { Link } from "react-router-dom"
import { Icon } from "./Icon"
import "./Breadcrumbs.css"

type Crumb = { label: string; to?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const last = index === items.length - 1
        return (
          <span key={item.label} className="breadcrumbs__item">
            {index === 0 ? <Icon name="home" size={14} /> : null}
            {item.to && !last ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span className={last ? "is-current" : undefined}>{item.label}</span>
            )}
            {!last ? <Icon name="chevron-right" size={14} /> : null}
          </span>
        )
      })}
    </nav>
  )
}
