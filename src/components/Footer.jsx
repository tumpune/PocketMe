import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>PocketMe</h3>
          <p>
            Mini figure 3D personalizzate da foto reali: persone, ricordi e
            animali trasformati in oggetti unici.
          </p>
        </div>

        <div className="footer-links">
          <h4>Prodotti</h4>
          <Link to="/prodotti">PocketLove</Link>
          <Link to="/prodotti/pocketme">PocketMe</Link>
          <Link to="/prodotti/pocketpet">PocketPet</Link>
        </div>

        <div className="footer-links">
          <h4>Link utili</h4>
          <Link to="/">Home</Link>
          <Link to="/prodotti">PocketLove</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contatti">Contatti</Link>
        </div>

        <div className="footer-contacts">
          <h4>Azioni rapide</h4>
          <Link to="/richiedi-preventivo">Richiedi preventivo</Link>
          <Link to="/contatti">Scrivici</Link>
          <p>Le foto di riferimento si inviano dopo il primo contatto.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PocketMe - Tutti i diritti riservati</p>
      </div>
    </footer>
  )
}

export default Footer
