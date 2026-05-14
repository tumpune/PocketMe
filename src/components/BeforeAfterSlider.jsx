import { Link } from 'react-router-dom'
import jonny1 from '../assets/images/jonny1.png'
import jonny2 from '../assets/images/jonny2.png'

function BeforeAfterSlider() {
  return (
    <section className="home-showcase">
      <div className="container home-showcase-layout">
        <div className="home-showcase-copy">
          <p className="home-kicker">Dal ricordo all'oggetto</p>
          <h2>Non una semplice stampa: una mini figura che ti assomiglia.</h2>
          <p>
            Partiamo da una foto reale e ne trasformiamo i tratti più riconoscibili
            in un PocketMe compatto, curato e pensato per diventare un regalo
            personale.
          </p>

          <div className="home-showcase-points">
            <span>Volto riconoscibile</span>
            <span>Stile 3D pulito</span>
            <span>Formato portachiavi</span>
          </div>

          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Parti dalla tua foto
          </Link>
        </div>

        <div className="home-showcase-visual" aria-label="Esempio PocketMe personalizzato">
          <div className="showcase-photo-card showcase-photo-before">
            <span>Foto originale</span>
            <img src={jonny1} alt="Foto originale usata come riferimento" />
          </div>

          <div className="showcase-product-card">
            <div className="showcase-product-glow"></div>
            <img src={jonny2} alt="Mini figura PocketMe personalizzata" />
          </div>

          <div className="showcase-note">
            <strong>Risultato finale</strong>
            <span>Mini figura 3D personalizzata</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSlider
