export type Category =
  | "Fiction"
  | "Education"
  | "Business"
  | "History"
  | "Self-Help"
  | "Children's"

export type Book = {
  id: string
  title: string
  author: string
  price: number
  rating: number
  reviews: string
  category: Category
  cover: string
  featured?: boolean
  bestSeller?: boolean
}

export const CATEGORIES: { name: Category; count: number; icon: string }[] = [
  { name: "Fiction", count: 84, icon: "book" },
  { name: "Education", count: 62, icon: "grad" },
  { name: "Business", count: 45, icon: "briefcase" },
  { name: "History", count: 38, icon: "landmark" },
  { name: "Self-Help", count: 51, icon: "leaf" },
  { name: "Children's", count: 29, icon: "kids" },
]

export const AUTHORS = [
  { name: "James Clear", count: 4 },
  { name: "Morgan Housel", count: 3 },
  { name: "Yuval Noah Harari", count: 5 },
  { name: "Cal Newport", count: 3 },
  { name: "Robert Kiyosaki", count: 2 },
  { name: "Paulo Coelho", count: 4 },
]

export const BOOKS: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    price: 14.99,
    rating: 4.8,
    reviews: "12.4k",
    category: "Self-Help",
    cover: "/images/covers/atomic-habits.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 16.5,
    rating: 4.7,
    reviews: "9.8k",
    category: "Business",
    cover: "/images/covers/psychology-of-money.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 12.99,
    rating: 4.6,
    reviews: "15.2k",
    category: "Business",
    cover: "/images/covers/think-grow-rich.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "Ikigai",
    author: "Héctor García",
    price: 13.5,
    rating: 4.5,
    reviews: "8.1k",
    category: "Self-Help",
    cover: "/images/covers/ikigai.jpg",
    featured: true,
  },
  {
    id: "5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 11.99,
    rating: 4.7,
    reviews: "22.3k",
    category: "Fiction",
    cover: "/images/covers/alchemist.jpg",
    featured: true,
  },
  {
    id: "6",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 18.99,
    rating: 4.8,
    reviews: "18.6k",
    category: "History",
    cover: "/images/covers/sapiens.jpg",
    bestSeller: true,
  },
  {
    id: "7",
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 15.99,
    rating: 4.5,
    reviews: "7.4k",
    category: "Business",
    cover: "/images/covers/lean-startup.jpg",
    bestSeller: true,
  },
  {
    id: "8",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.99,
    rating: 4.9,
    reviews: "30.1k",
    category: "Fiction",
    cover: "/images/covers/mockingbird.jpg",
    bestSeller: true,
  },
  {
    id: "9",
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    rating: 4.8,
    reviews: "25.7k",
    category: "Fiction",
    cover: "/images/covers/1984.jpg",
    bestSeller: true,
  },
  {
    id: "10",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 14.5,
    rating: 4.4,
    reviews: "14.9k",
    category: "Self-Help",
    cover: "/images/covers/subtle-art.jpg",
    bestSeller: true,
  },
  {
    id: "11",
    title: "Deep Work",
    author: "Cal Newport",
    price: 15.5,
    rating: 4.6,
    reviews: "6.2k",
    category: "Self-Help",
    cover: "/images/covers/deep-work.jpg",
  },
  {
    id: "12",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 13.99,
    rating: 4.5,
    reviews: "19.3k",
    category: "Business",
    cover: "/images/covers/rich-dad.jpg",
  },
  {
    id: "13",
    title: "Educated",
    author: "Tara Westover",
    price: 14.25,
    rating: 4.7,
    reviews: "11.1k",
    category: "Education",
    cover: "/images/covers/educated.jpg",
  },
  {
    id: "14",
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 17.99,
    rating: 4.8,
    reviews: "10.5k",
    category: "Self-Help",
    cover: "/images/covers/cant-hurt-me.jpg",
  },
  {
    id: "15",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 12.5,
    rating: 4.6,
    reviews: "9.2k",
    category: "Self-Help",
    cover: "/images/covers/power-of-now.jpg",
  },
  {
    id: "16",
    title: "Atomic Habits",
    author: "James Clear",
    price: 14.99,
    rating: 4.8,
    reviews: "12.4k",
    category: "Self-Help",
    cover: "/images/covers/atomic-habits-alt.jpg",
  },
]

export const CONTACT = {
  phone: "+92 21 3456 7890",
  email: "support@zahirbooks.com",
  address: "I.I. Chundrigar Road, Karachi, Pakistan",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM",
}

export const PROMO_ITEMS = [
  "Free Shipping on Orders Over $50",
  "New Arrivals Every Week",
  "Up to 30% Off on Best Sellers",
]

export const featuredBooks = () => BOOKS.filter((b) => b.featured)
export const bestSellerBooks = () => BOOKS.filter((b) => b.bestSeller)
