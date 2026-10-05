import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])

  return (
    <div className="app">
      {loading && <Preloader onDone={handleDone} />}
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Footer />
    </div>
  )
}
