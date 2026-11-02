import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Book } from "../data/catalog"

type StoreContextValue = {
  cartCount: number
  wishlist: Set<string>
  addToCart: (book: Book) => void
  toggleWishlist: (book: Book) => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0)
  const [wishlist, setWishlist] = useState<Set<string>>(() => new Set())

  const value = useMemo<StoreContextValue>(
    () => ({
      cartCount,
      wishlist,
      addToCart: () => setCartCount((c) => c + 1),
      toggleWishlist: (book) =>
        setWishlist((prev) => {
          const next = new Set(prev)
          if (next.has(book.id)) next.delete(book.id)
          else next.add(book.id)
          return next
        }),
    }),
    [cartCount, wishlist],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error("useStore must be used within StoreProvider")
  return ctx
}
