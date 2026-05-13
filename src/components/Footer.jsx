import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <h3>PocketMe</h3>
          <p>
            Trasformiamo le tue foto in mini figure 3D personalizzate.
          </p>
        </div>

        <div className="footer-links">
          <h4>Link utili</h4>
          <Link to="/">Home</Link>
          <Link to="/prodotti">Prodotti</Link>
          <Link to="/servizi">Servizi</Link>
          <Link to="/contatti">Contatti</Link>
        </div>

        <div className="footer-contacts">
          <h4>Contatti</h4>
          <p>Email: info@pocketme.it</p>
          <p>Telefono: +39 000 000 0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 PocketMe - Tutti i diritti riservati</p>
      </div>
    </footer>
  )
}

export default Footer