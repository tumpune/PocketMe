import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">PocketMe</div>

        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/chi-siamo" onClick={() => setMenuOpen(false)}>Chi siamo</Link>
          <Link to="/prodotti" onClick={() => setMenuOpen(false)}>Prodotti</Link>
          <Link to="/servizi" onClick={() => setMenuOpen(false)}>Servizi</Link>
          <Link to="/come-funziona" onClick={() => setMenuOpen(false)}>Come funziona</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contatti" onClick={() => setMenuOpen(false)}>Contatti</Link>
        </nav>

        <div className="navbar-right">
          <div className="navbar-lang">
            <button>🇮🇹</button>
            <button>🇬🇧</button>
          </div>

          <div
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar