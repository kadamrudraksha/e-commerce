"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "./ProductCard"
import { SearchBox } from "./SearchBox"
import { Cart } from "./Cart"
import Link from "next/link"

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products")
  return res.json()
}

export default function Main() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts)
      setFilteredProducts(fetchedProducts)
    })
  }, [])

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredProducts(filtered)
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="flex">
      <header className="w-1/5 bg-blue-600 text-white p-4 h-screen fixed left-0 top-0">
        <h1 className="text-2xl font-bold mb-4">Our Store</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-4/5 ml-[20%]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Product Listing</h2>
            <button
              onClick={toggleCart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
          <SearchBox onSearch={handleSearch} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </main>
      {isCartOpen && <Cart cartItems={cartItems} onClose={toggleCart} />}
    </div>
  )
}

