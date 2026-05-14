import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'PocketLove', path: '/prodotti' },
  { label: 'PocketMe', path: '/prodotti/pocketme' },
  { label: 'PocketPet', path: '/prodotti/pocketpet' },
  { label: 'Come funziona', path: '/come-funziona' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contatti', path: '/contatti' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          PocketMe
        </Link>

        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active-link' : undefined)}
              onClick={closeMenu}
              end={item.path === '/'}
              key={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-right">
          <Link to="/richiedi-preventivo" className="navbar-cta" onClick={closeMenu}>
            Crea il tuo PocketMe
          </Link>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Apri menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
