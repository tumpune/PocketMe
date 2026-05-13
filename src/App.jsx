import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// PAGINE
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import QuotePage from './pages/QuotePage'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/prodotti" element={<ProductsPage />} />
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