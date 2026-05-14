import { Link } from 'react-router-dom'
import heroVideo from '../assets/videos/video_prova_4k.mp4'

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Il tuo browser non supporta il tag video.
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">
          Persone e animali trasformati in mini figure 3D
        </p>

        <h1 className="hero-title">
          Porta con te chi ami.
          <br />
          In versione mini.
        </h1>

        <p className="hero-description">
          Mini figure 3D personalizzate da foto reali: persone, ricordi e
          animali trasformati in oggetti unici.
        </p>

        <div className="hero-buttons">
          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Crea il tuo PocketMe
          </Link>

          <Link to="/prodotti/pocketpet" className="btn btn-secondary">
            Scopri PocketPet
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
