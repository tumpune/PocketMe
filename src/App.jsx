import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// PAGINE
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import QuotePage from './pages/QuotePage'
import PocketMeCollectionPage from './pages/PocketMeCollectionPage'
import PocketPetCollectionPage from './pages/PocketPetCollectionPage'

function App() {
  return (
    <>
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/prodotti" element={<ProductsPage />} />
        <Route path="/prodotti/pocketme" element={<PocketMeCollectionPage />} />
        <Route path="/prodotti/pocketpet" element={<PocketPetCollectionPage />} />
        <Route path="/servizi" element={<ServicesPage />} />
        <Route path="/come-funziona" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/richiedi-preventivo" element={<QuotePage />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
