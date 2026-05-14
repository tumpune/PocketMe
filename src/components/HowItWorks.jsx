const paths = [
  {
    label: 'PocketMe',
    title: 'Per persone e ricordi speciali',
    steps: [
      'Invia la foto della persona',
      'Creiamo il modello 3D',
      'Stampiamo e rifiniamo',
      'Ricevi il tuo PocketMe',
    ],
  },
  {
    label: 'PocketPet',
    title: 'Per animali domestici',
    steps: [
      'Invia la foto del tuo animale',
      'Ricreiamo forma e dettagli',
      'Stampiamo la mini figura',
      'Ricevi il tuo PocketPet',
    ],
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="come-funziona">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Come funziona</p>
          <h1 className="page-title">Due percorsi, un processo semplice.</h1>
          <p className="page-description">
            Da una foto reale a una mini figura 3D personalizzata. Scegli
            PocketMe per le persone o PocketPet per gli animali del cuore.
          </p>
        </div>

        <div className="process-paths">
          {paths.map((path) => (
            <article className="process-path-card" key={path.label}>
              <span className="card-badge">{path.label}</span>
              <h2>{path.title}</h2>
              <div className="process-list">
                {path.steps.map((step, index) => (
                  <div className="process-list-item" key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
