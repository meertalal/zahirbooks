import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useStore } from "../../context/StoreContext"
import { Icon } from "../ui/Icon"
import { Logo } from "../ui/Logo"
import "./Header.css"

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
]

export function Header() {
  const { cartCount, wishlist } = useStore()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <header className="site-header">
      <div className="site-header__inner container-wide">
        <Logo />

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__tools">
          <form
            className="site-search"
            onSubmit={(e) => {
              e.preventDefault()
            }}
            role="search"
          >
            <Icon name="search" size={16} />
            <input
              type="search"
              placeholder="Search books, authors, or categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search books"
            />
          </form>

          <div className="site-actions">
            <button type="button" className="icon-btn" aria-label="Account">
              <Icon name="user" size={20} />
            </button>
            <button type="button" className="icon-btn" aria-label="Wishlist">
              <Icon name="heart" size={20} />
              {wishlist.size > 0 ? (
                <span className="icon-btn__badge">{wishlist.size}</span>
              ) : null}
            </button>
            <button type="button" className="icon-btn" aria-label="Cart">
              <Icon name="cart" size={20} />
              <span className="icon-btn__badge">{cartCount}</span>
            </button>
            <button
              type="button"
              className="icon-btn site-header__menu"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
