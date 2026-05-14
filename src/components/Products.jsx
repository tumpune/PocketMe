import { Link } from 'react-router-dom'
import daniele2 from '../assets/images/daniele2.png'
import jonny2 from '../assets/images/jonny2.png'

const occasions = [
  {
    title: 'Anniversario',
    description: 'Un ricordo di coppia trasformato in una mini figura 3D da conservare.',
  },
  {
    title: 'San Valentino',
    description: 'Un regalo personale, romantico e diverso dai classici oggetti già visti.',
  },
  {
    title: 'Promessa speciale',
    description: 'Un piccolo simbolo per raccontare una storia, una data o un momento importante.',
  },
]

const steps = [
  'Invia una foto chiara della coppia.',
  'Ricreiamo le due persone in stile mini figura 3D.',
  'Stampiamo e rifiniamo il PocketLove.',
  'Ricevi un regalo romantico, pronto da consegnare.',
]

function Products() {
  return (
    <section className="pocketlove-page">
      <div className="container">
        <div className="pocketlove-hero">
          <div className="pocketlove-hero-copy">
            <p className="page-label">PocketLove</p>
            <h1 className="page-title">La vostra storia, in versione mini.</h1>
            <p className="page-description">
              PocketLove trasforma una foto di coppia in una mini figura 3D
              romantica e personalizzata: un regalo piccolo, ma impossibile da
              dimenticare.
            </p>
            <div className="product-detail-actions">
              <Link to="/richiedi-preventivo" className="btn btn-primary">
                Crea il tuo PocketLove
              </Link>
              <Link to="/come-funziona" className="btn btn-secondary">
                Scopri come funziona
              </Link>
            </div>
          </div>

          <div className="pocketlove-visual" aria-label="Esempio PocketLove di coppia">
            <div className="pocketlove-glow"></div>
            <img src={daniele2} alt="Prima mini figura PocketLove" />
            <img src={jonny2} alt="Seconda mini figura PocketLove" />
            <div className="pocketlove-badge">Couple edition</div>
          </div>
        </div>

        <section className="detail-section pocketlove-intro">
          <p className="page-label">Cos'è PocketLove</p>
          <h2>Un regalo romantico creato da una foto reale.</h2>
          <p>
            PocketLove nasce per coppie, anniversari e momenti speciali. Due
            persone vengono reinterpretate in una mini composizione 3D, pensata
            per rappresentare un legame in modo personale, moderno e curato.
          </p>
        </section>

        <section className="detail-section">
          <p className="page-label">Idee regalo</p>
          <h2>Perfetto per i momenti che contano.</h2>
          <div className="pocketlove-card-grid">
            {occasions.map((occasion) => (
              <article className="pocketlove-card" key={occasion.title}>
                <span className="card-badge">PocketLove</span>
                <h3>{occasion.title}</h3>
                <p>{occasion.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-split-section pocketlove-process">
          <div>
            <p className="page-label">Come funziona</p>
            <h2>Da una foto di coppia a un oggetto da regalare.</h2>
          </div>
          <div className="detail-timeline">
            {steps.map((step, index) => (
              <div className="detail-timeline-item" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pocketlove-quote">
          <p>Una mini versione del vostro amore, sempre con voi.</p>
          <h2>Un regalo piccolo, personale, memorabile.</h2>
          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Richiedi preventivo
          </Link>
        </section>
      </div>
    </section>
  )
}

export default Products
