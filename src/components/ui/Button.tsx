import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"
import "./Button.css"

type Variant = "primary" | "outline" | "ghost" | "dark"

type Common = {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
}

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
  }

type AsLink = Common & {
  to: string
  type?: never
  onClick?: () => void
}

export function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  ...rest
}: AsButton | AsLink) {
  const classes = `zb-btn zb-btn--${variant} ${className}`.trim()

  if ("to" in rest && rest.to) {
    const { to, onClick } = rest
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {icon}
        <span>{children}</span>
      </Link>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      <span>{children}</span>
    </button>
  )
}
