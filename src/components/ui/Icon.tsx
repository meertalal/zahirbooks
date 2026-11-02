type IconProps = {
  name: string
  size?: number
  className?: string
  strokeWidth?: number
}

export function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.75,
}: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  }

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      )
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" />
        </svg>
      )
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" />
        </svg>
      )
    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.2 11h10.3l2-8H7" />
          <circle cx="10" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="m12 2.5 2.7 5.5 6 .9-4.4 4.2 1 5.9L12 16.5 6.7 19l1-5.9L3.3 9l6-.9L12 2.5Z" />
        </svg>
      )
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      )
    case "home":
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      )
    case "book":
      return (
        <svg {...common}>
          <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v16H7.5A2.5 2.5 0 0 0 5 20.5V4.5Z" />
          <path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H19" />
        </svg>
      )
    case "grad":
      return (
        <svg {...common}>
          <path d="m3 10 9-5 9 5-9 5-9-5Z" />
          <path d="M7 12.5v4c2 2 8 2 10 0v-4" />
          <path d="M21 10v6" />
        </svg>
      )
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      )
    case "landmark":
      return (
        <svg {...common}>
          <path d="M4 20h16M6 20V10m4 10V10m4 10V10m4 10V10M4 10l8-6 8 6" />
        </svg>
      )
    case "leaf":
      return (
        <svg {...common}>
          <path d="M5 19c8-1 12-8 13-14-6 1-13 5-13 14Z" />
          <path d="M5 19c3-4 7-7 12-9" />
        </svg>
      )
    case "kids":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M3.5 19c.8-3 3-4.5 5.5-4.5S14 16 14.5 19" />
          <path d="M13 15.5c1.2-1.4 2.6-2 4-2 2 0 3.5 1.2 4 3.5" />
        </svg>
      )
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7v-7Z" />
          <circle cx="7" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      )
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
        </svg>
      )
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      )
    case "refresh":
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 0 1 13.5-5.5L20 9" />
          <path d="M20 4v5h-5" />
          <path d="M20 12a8 8 0 0 1-13.5 5.5L4 15" />
          <path d="M4 20v-5h5" />
        </svg>
      )
    case "headset":
      return (
        <svg {...common}>
          <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 13v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
          <path d="M20 13v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z" />
        </svg>
      )
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case "phone":
      return (
        <svg {...common}>
          <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L16 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 5 5a2 2 0 0 1 2-2Z" />
        </svg>
      )
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case "send":
      return (
        <svg {...common}>
          <path d="M4 11.5 20 4l-5.5 16-3-6.5L4 11.5Z" />
        </svg>
      )
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case "diamond":
      return (
        <svg {...common}>
          <path d="M6 8h12l-6 12L6 8Z" />
          <path d="M6 8 9.5 3h5L18 8" />
          <path d="M9.5 3 12 8l2.5-5" />
        </svg>
      )
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4.5 4.5L19 7" />
        </svg>
      )
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M3.5 19c1-3.5 3.5-5 5.5-5s4.5 1.5 5.5 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M14.5 19c.6-2 1.8-3.2 3.5-3.5 1.5.2 2.8 1.3 3.5 3.5" />
        </svg>
      )
    case "grid":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      )
    case "list":
      return (
        <svg {...common}>
          <path d="M9 7h11M9 12h11M9 17h11" />
          <circle cx="5" cy="7" r="1.2" fill="currentColor" />
          <circle cx="5" cy="12" r="1.2" fill="currentColor" />
          <circle cx="5" cy="17" r="1.2" fill="currentColor" />
        </svg>
      )
    case "facebook":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M14 9h2.5V6H14a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13v-1a1 1 0 0 1 1-1Z" />
        </svg>
      )
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case "x":
      return (
        <svg {...common}>
          <path d="m5 5 14 14M15.5 5H19l-7 8.2L19 19h-3.5L10 12.5 5 19h0l8-9.2L5 5h0Z" />
        </svg>
      )
    case "youtube":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="10" rx="3" />
          <path d="m11 10 4 2-4 2v-4Z" fill="currentColor" />
        </svg>
      )
    case "filter":
      return (
        <svg {...common}>
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
      )
    default:
      return null
  }
}
