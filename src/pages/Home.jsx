import useScrollReveal from '../hooks/useScrollReveal.js'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import Brands from './sections/Brands.jsx'
import EcommerceForSellers from './sections/EcommerceForSellers.jsx'
import TrustStrip from './sections/TrustStrip.jsx'
import Restaurants from './sections/Restaurants.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import ContactCTA from './sections/ContactCTA.jsx'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <EcommerceForSellers />
      <TrustStrip />
      <Restaurants />
      <HowItWorks />
      <ContactCTA />
    </>
  )
}
