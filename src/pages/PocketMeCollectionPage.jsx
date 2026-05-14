import { Link } from 'react-router-dom'
import daniele1 from '../assets/images/daniele1.png'
import daniele2 from '../assets/images/daniele2.png'
import jonny1 from '../assets/images/jonny1.png'
import jonny2 from '../assets/images/jonny2.png'
import fulvio1 from '../assets/images/fulvio1.png'
import fulvio2 from '../assets/images/fulvio2.png'

const examples = [
  { name: 'Daniele', before: daniele1, after: daniele2 },
  { name: 'Jonny', before: jonny1, after: jonny2 },
  { name: 'Fulvio', before: fulvio1, after: fulvio2 },
]

const steps = [
  'Invia una foto chiara della persona.',
  'Creiamo il modello 3D personalizzato.',
  'Stampiamo e rifiniamo la mini figura.',
  'Ricevi il tuo PocketMe pronto da regalare o portare con te.',
]

const benefits = [
  'Riconoscibile e personale',
  'Pensato per regali speciali',
  'Realizzato da foto reali',
  'Formato compatto e curato',
]

function PocketMeCollectionPage() {
  return (
    <section className="product-detail-page">
      <div className="container">
        <div className="product-detail-hero">
          <div>
            <p className="page-label">PocketMe</p>
            <h1 className="page-title">La mini figura 3D di una persona speciale</h1>
            <p className="page-description">
              PocketMe trasforma una foto reale in una mini figura 3D
              personalizzata, pensata per rappresentare una persona, un ricordo
              o un momento speciale.
            </p>
            <div className="product-detail-actions">
              <Link to="/richiedi-preventivo" className="btn btn-primary">
                Crea il tuo PocketMe
              </Link>
              <Link to="/prodotti" className="btn btn-secondary">
                Torna ai prodotti
              </Link>
            </div>
          </div>

          <div className="product-detail-visual">
            <img src={daniele2} alt="PocketMe personalizzato" />
          </div>
        </div>

        <section className="detail-section">
          <p className="page-label">Cos'è PocketMe</p>
          <h2>Da una foto reale a una mini figura 3D personalizzata.</h2>
          <p>
            Ogni PocketMe nasce da un riferimento fotografico e viene
            reinterpretato in una forma compatta, pulita e riconoscibile. È un
            regalo piccolo, ma impossibile da dimenticare.
          </p>
        </section>

        <section className="detail-section">
          <p className="page-label">Esempi reali</p>
          <h2>Prima e dopo</h2>
          <div className="detail-before-after-grid">
            {examples.map((item) => (
              <article className="detail-before-after-card" key={item.name}>
                <div className="detail-before-after-images">
                  <img src={item.before} alt={`${item.name} foto originale`} />
                  <img src={item.after} alt={`${item.name} PocketMe finale`} />
                </div>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-split-section">
          <div>
            <p className="page-label">Come funziona</p>
            <h2>Un percorso semplice e guidato.</h2>
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

        <section className="detail-section">
          <p className="page-label">Perché sceglierlo</p>
          <h2>Personale, tecnologico, memorabile.</h2>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <div className="benefit-card" key={benefit}>{benefit}</div>
            ))}
          </div>
        </section>

        <section className="detail-final-cta">
          <h2>Pronto a creare la tua mini versione?</h2>
          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Richiedi preventivo
          </Link>
        </section>
      </div>
    </section>
  )
}

export default PocketMeCollectionPage
