import { Link } from "react-router-dom"
import "./Logo.css"

type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link to="/" className={`zb-logo ${compact ? "zb-logo--compact" : ""}`}>
      <span className="zb-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="6" width="24" height="28" rx="2" fill="#6b3a2a" />
          <path
            d="M10 8h20c1.5 0 2.5 1.2 2.5 2.5V32c0-2-1.2-3-2.5-3H10"
            fill="#8b5a3c"
          />
          <path
            d="M12 14h12M12 19h10M12 24h8"
            stroke="#f7f1e8"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="zb-logo__text">
        <strong>ZahirBooks</strong>
        {!compact ? <small>ONLINE BOOKSTORE</small> : null}
      </span>
    </Link>
  )
}
