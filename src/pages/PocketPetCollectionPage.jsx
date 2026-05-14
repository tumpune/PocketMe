import { Link } from 'react-router-dom'

const petTypes = [
  {
    title: 'Cane',
    description: 'Per trasformare il tuo cane in una mini figura affettuosa e riconoscibile.',
  },
  {
    title: 'Gatto',
    description: 'Una piccola versione 3D del tuo gatto, pensata per restare con te.',
  },
  {
    title: 'Altro pet',
    description: 'Per richieste speciali dedicate ad altri animali domestici.',
  },
]

const steps = [
  'Invia la foto del tuo animale.',
  'Ricreiamo forma, postura e dettagli principali.',
  'Stampiamo la mini figura 3D.',
  'Ricevi il tuo PocketPet personalizzato.',
]

function PocketPetCollectionPage() {
  return (
    <section className="product-detail-page pet-detail-page">
      <div className="container">
        <div className="product-detail-hero">
          <div>
            <p className="page-label">PocketPet</p>
            <h1 className="page-title">Il tuo compagno speciale, in versione mini.</h1>
            <p className="page-description">
              PocketPet trasforma il tuo animale domestico in una mini figura 3D
              personalizzata, creata per portare sempre con te il tuo compagno
              speciale.
            </p>
            <div className="product-detail-actions">
              <Link to="/richiedi-preventivo" className="btn btn-primary">
                Crea il tuo PocketPet
              </Link>
              <Link to="/prodotti" className="btn btn-secondary">
                Torna ai prodotti
              </Link>
            </div>
          </div>

          <div className="pet-placeholder-visual" aria-label="PocketPet placeholder">
            <div className="pet-orbit"></div>
            <div className="pet-mark">PET</div>
            <span>Mini figura 3D personalizzata</span>
          </div>
        </div>

        <section className="detail-section">
          <p className="page-label">Cos'è PocketPet</p>
          <h2>Un ricordo affettuoso del tuo animale del cuore.</h2>
          <p>
            Partiamo da una foto reale e trasformiamo il tuo pet in un oggetto
            piccolo, curato e personale. È pensato per chi vuole portare con sé
            un legame speciale.
          </p>
        </section>

        <section className="detail-section">
          <p className="page-label">Collezione</p>
          <h2>Scegli il tipo di PocketPet</h2>
          <div className="collection-grid">
            {petTypes.map((item) => (
              <article className="collection-card pet-collection-card" key={item.title}>
                <span className="card-badge">PocketPet</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-split-section">
          <div>
            <p className="page-label">Come funziona</p>
            <h2>Dalla foto del tuo pet alla mini figura.</h2>
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

        <section className="detail-final-cta">
          <h2>Un regalo dedicato al tuo animale del cuore.</h2>
          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Richiedi preventivo
          </Link>
        </section>
      </div>
    </section>
  )
}

export default PocketPetCollectionPage
