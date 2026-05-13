import Hero from '../components/Hero'
import BeforeAfter from '../components/BeforeAfter'
import { Link } from 'react-router-dom'
import BeforeAfterSlider from '../components/BeforeAfterSlider'


function Home() {
  return (
    <>
      <Hero />

      <BeforeAfter />

      <section className="home-preview">
        <div className="container">
          <h2 className="section-title">Un prodotto. Infinite possibilità.</h2>

          <p className="section-subtitle">
            Scopri tutte le varianti di PocketMe e crea qualcosa di unico.
          </p>

          <Link to="/prodotti" className="btn btn-primary">
            Vai ai prodotti
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2>Pronto a creare il tuo PocketMe?</h2>

          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Richiedi un preventivo
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home