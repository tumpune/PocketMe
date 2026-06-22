import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { ProtectedRoute } from './components/ProtectedRoute'

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
import { AdminDashboard } from './pages/AdminDashboard'
import { AdminLogin } from './pages/AdminLogin'
import { AddMovement } from './pages/AddMovement'
import { MovementsPage } from './pages/MovementsPage'
import { ReportPage } from './pages/ReportPage'
import { SalesRevenuePage } from './pages/SalesRevenuePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      <ScrollToTop />

      {!isAdminRoute && <Navbar />}

      <main className={isAdminRoute ? 'admin-shell' : undefined}>
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
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute element={<AdminDashboard />} />}
          />
          <Route
            path="/admin/add-movement"
            element={<ProtectedRoute element={<AddMovement />} />}
          />
          <Route
            path="/admin/sales-revenue"
            element={<ProtectedRoute element={<SalesRevenuePage />} />}
          />
          <Route
            path="/admin/movements"
            element={<ProtectedRoute element={<MovementsPage />} />}
          />
          <Route
            path="/admin/movements/:filter"
            element={<ProtectedRoute element={<MovementsPage />} />}
          />
          <Route
            path="/admin/report"
            element={<ProtectedRoute element={<ReportPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
