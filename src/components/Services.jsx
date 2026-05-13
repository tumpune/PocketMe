function Services() {
  const services = [
    {
      number: '01',
      title: 'Trasformazione da foto',
      description:
        'Partiamo da una fotografia reale per dare vita alla base del tuo PocketMe. Ogni progetto nasce da un ricordo autentico e viene reinterpretato in chiave tridimensionale.',
    },
    {
      number: '02',
      title: 'Modellazione 3D personalizzata',
      description:
        'Lavoriamo digitalmente forme e proporzioni per ottenere una mini figura riconoscibile, equilibrata e coerente con lo stile PocketMe.',
    },
    {
      number: '03',
      title: 'Stampa 3D ad alta precisione',
      description:
        'Utilizziamo tecnologie di stampa 3D precise per trasformare il modello digitale in un oggetto reale, resistente e curato nei dettagli.',
    },
    {
      number: '04',
      title: 'Finitura e cura del dettaglio',
      description:
        'Ogni PocketMe viene completato con attenzione finale, per offrire un risultato pulito, originale e pronto da portare sempre con sé.',
    },
  ]

  return (
    <section className="services-page-section">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Servizi</p>
          <h1 className="page-title">Tecnologia, creatività e lavorazione su misura</h1>
          <p className="page-description">
            PocketMe unisce innovazione e personalizzazione per trasformare una semplice
            foto in un oggetto unico. Ogni fase del processo è studiata per offrire
            qualità, precisione e un risultato riconoscibile.
          </p>
        </div>

        <div className="services-premium-list">
          {services.map((service, index) => (
            <article
              className={`service-row ${index % 2 !== 0 ? 'service-row-reverse' : ''}`}
              key={service.number}
            >
              <div className="service-number-block">
                <span>{service.number}</span>
              </div>

              <div className="service-content-block">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services