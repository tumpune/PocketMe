function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Invia la tua foto',
      description:
        'Scegli una foto chiara della persona o del soggetto che vuoi trasformare in PocketMe.',
    },
    {
      number: '02',
      title: 'Creiamo il modello 3D',
      description:
        'Trasformiamo l’immagine in una mini figura digitale curata nei dettagli.',
    },
    {
      number: '03',
      title: 'Stampiamo e rifiniamo',
      description:
        'Realizziamo il PocketMe con stampa 3D di precisione e finiture di qualità.',
    },
    {
      number: '04',
      title: 'Ricevi il tuo PocketMe',
      description:
        'Ottieni un portachiavi personalizzato unico, pronto da portare sempre con te.',
    },
  ];

  return (
    <section className="how-it-works" id="come-funziona">
      <div className="container">
        <h2 className="section-title">Come funziona</h2>
        <p className="section-subtitle">
          Un processo semplice, creativo e innovativo per trasformare una foto in qualcosa di unico.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;