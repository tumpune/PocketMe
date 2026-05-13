function About() {
  const values = [
    {
      title: 'Innovazione',
      description:
        'Uniamo intelligenza artificiale, creatività e stampa 3D per trasformare una semplice foto in qualcosa di unico.',
    },
    {
      title: 'Personalizzazione',
      description:
        'Ogni PocketMe nasce su misura, pensato per rappresentare persone, ricordi e momenti speciali in modo originale.',
    },
    {
      title: 'Qualità',
      description:
        'Curiamo ogni dettaglio del processo, dalla modellazione digitale fino alla rifinitura finale del prodotto.',
    },
  ];

  return (
    <section className="about" id="chi-siamo">
      <div className="container">
        <div className="about-top">
          <p className="about-label">Chi siamo</p>

          <h2 className="about-title">
            PocketMe trasforma ricordi e persone
            <br />
            in mini figure da portare sempre con te
          </h2>

          <p className="about-description">
            PocketMe è una realtà innovativa che crea mini figure personalizzate
            trasformate in portachiavi tramite stampa 3D. Partendo da una semplice
            foto, realizziamo un oggetto unico, originale e ricco di significato.
          </p>
        </div>

        <div className="about-grid">
          {values.map((value, index) => (
            <article className="about-card" key={index}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;