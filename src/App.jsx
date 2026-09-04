import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import SpeedBackground from './components/SpeedBackground.jsx'
import Home from './pages/Home.jsx'
import RestaurantDetails from './pages/RestaurantDetails.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SpeedBackground />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:key" element={<RestaurantDetails />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
