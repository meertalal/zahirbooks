import { Link } from "react-router-dom"
import { CATEGORIES, CONTACT } from "../../data/catalog"
import { Icon } from "../ui/Icon"
import { Logo } from "../ui/Logo"
import "./Footer.css"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main container-wide">
        <div className="site-footer__brand">
          <Logo />
          <p>
            Your trusted online bookstore for discovering inspiring reads across
            every genre — delivered across Pakistan.
          </p>
          <div className="site-footer__social">
            {["facebook", "instagram", "x", "youtube"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="site-footer__social-btn"
              >
                <Icon name={name} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Categories</h4>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.name}>
                <Link to="/shop">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Customer Support</h4>
          <ul className="site-footer__contact">
            <li>
              <Icon name="phone" size={16} />
              <span>{CONTACT.phone}</span>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <span>{CONTACT.email}</span>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>{CONTACT.address}</span>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container-wide site-footer__bottom-inner">
          <p>© 2026 ZahirBooks. All Rights Reserved.</p>
          <p>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms &amp; Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
