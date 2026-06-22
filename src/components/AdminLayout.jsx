import { useState } from 'react'
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Menu,
  Plus,
  X,
} from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../utils/auth'
import '../styles/admin-layout.css'

export const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard', Icon: LayoutDashboard },
    { label: 'Ricavi vendite', path: '/admin/sales-revenue', Icon: BarChart3 },
    { label: 'Aggiungi movimento', path: '/admin/add-movement', Icon: Plus },
    { label: 'Tutti i movimenti', path: '/admin/movements', Icon: ListChecks, matchPrefix: true },
    { label: 'Report', path: '/admin/report', Icon: FileText },
  ]

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const isActive = (item) => (
    item.matchPrefix
      ? location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
      : location.pathname === item.path
  )

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div>
            <span className="sidebar-kicker">Area riservata</span>
            <h2>Admin</h2>
          </div>
          <button
            className="sidebar-close"
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Chiudi sidebar"
          >
            <X size={18} strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Menu gestionale">
          {menuItems.map((item) => {
            const { Icon } = item

            return (
              <button
                key={item.path}
                className={`nav-link ${isActive(item) ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  navigate(item.path)
                  setSidebarOpen(false)
                }}
              >
                <span className="nav-icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={2.4} />
                </span>
                <span className="nav-label">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" type="button" onClick={handleLogout}>
            <LogOut size={17} strokeWidth={2.4} aria-hidden="true" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          className="sidebar-overlay"
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Chiudi menu gestionale"
        />
      )}

      <div className="admin-main">
        <header className="admin-header">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Apri menu gestionale"
          >
            <Menu size={18} strokeWidth={2.4} aria-hidden="true" />
            <span>Menu</span>
          </button>
          <div>
            <span className="admin-header-kicker">PocketMe</span>
            <h1>Gestione operativa</h1>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  )
}
