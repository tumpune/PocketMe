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
        <p className="hero-subtitle">Innovazione • Personalizzazione • Qualità</p>

        <h1 className="hero-title">
          La tua mini versione,
          <br />
          sempre con te
        </h1>

        <p className="hero-description">
          PocketMe trasforma una semplice foto in un portachiavi 3D personalizzato,
          unico, creativo e ricco di significato.
        </p>

        <div className="hero-buttons">
          <Link to="/prodotti" className="btn btn-primary">
            Scopri di più
          </Link>

          <Link to="/contatti" className="btn btn-secondary">
            Richiedi informazioni
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero