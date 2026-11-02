import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { PromoBar } from "./PromoBar"
import "./Layout.css"

export function Layout() {
  return (
    <div className="app-shell">
      <PromoBar />
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
