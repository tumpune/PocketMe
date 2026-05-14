import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import BeforeAfter from '../components/BeforeAfter'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import daniele2 from '../assets/images/daniele2.png'
import jonny2 from '../assets/images/jonny2.png'

const steps = [
  {
    number: '01',
    title: 'Invii la foto',
    description: 'Scegli uno scatto chiaro della persona o del tuo animale.',
  },
  {
    number: '02',
    title: 'Creiamo il modello',
    description: 'Ricostruiamo forme e dettagli in una mini figura 3D.',
  },
  {
    number: '03',
    title: 'Ricevi il prodotto',
    description: 'Stampiamo, rifiniamo e prepariamo il tuo oggetto personalizzato.',
  },
]

const products = [
  {
    badge: 'Persone',
    title: 'PocketMe',
    description: 'Una mini versione di una persona, di un ricordo o di un momento speciale.',
    path: '/prodotti/pocketme',
    cta: 'Scopri PocketMe',
    image: daniele2,
  },
  {
    badge: 'Coppie',
    title: 'PocketLove',
    description: 'Una mini composizione romantica per raccontare una storia di coppia.',
    path: '/prodotti',
    cta: 'Scopri PocketLove',
    image: daniele2,
  },
  {
    badge: 'Animali',
    title: 'PocketPet',
    description: 'Il tuo animale del cuore trasformato in una mini figura 3D personalizzata.',
    path: '/prodotti/pocketpet',
    cta: 'Scopri PocketPet',
    image: jonny2,
  },
]

const reasons = [
  'Da una foto reale a una mini figura 3D',
  'PocketMe per le persone. PocketPet per gli animali del cuore.',
  'Un regalo piccolo, ma impossibile da dimenticare.',
  'Preventivo personalizzato prima di iniziare.',
]

function Home() {
  return (
    <>
      <Hero />

      <BeforeAfterSlider />

      <section className="home-products">
        <div className="container">
          <h2 className="section-title">Scegli il tuo prodotto</h2>
          <p className="section-subtitle">
            Una mini versione di ciò che ami, sempre con te.
          </p>

          <div className="featured-product-grid">
            {products.map((product) => (
              <Link to={product.path} className="featured-product-card" key={product.title}>
                <div className="featured-product-media">
                  <img src={product.image} alt={`${product.title} mini figura finale`} />
                </div>
                <span className="card-badge">{product.badge}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="card-link">{product.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-steps">
        <div className="container">
          <h2 className="section-title">Da foto a mini figura in 3 passaggi</h2>
          <p className="section-subtitle">
            Tu ci mandi l'idea. Noi la trasformiamo in un oggetto 3D personale.
          </p>

          <div className="home-steps-grid">
            {steps.map((step) => (
              <article className="home-step-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      <section className="home-trust">
        <div className="container home-trust-layout">
          <div className="home-trust-copy">
            <p className="page-label">Perché sceglierlo</p>
            <h2>Un piccolo oggetto, ma fatto su misura.</h2>
            <p>
              PocketMe trasforma persone e animali in mini figure 3D
              personalizzate da foto reali. Un prodotto compatto, emozionale e
              tecnologico, pensato per durare nel tempo.
            </p>
          </div>

          <div className="home-trust-list">
            {reasons.map((reason) => (
              <div className="home-trust-item" key={reason}>
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2>Hai già una foto in mente?</h2>
          <p>
            Raccontaci chi vuoi trasformare in mini figura e ti prepariamo una
            proposta personalizzata.
          </p>

          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Richiedi preventivo
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
