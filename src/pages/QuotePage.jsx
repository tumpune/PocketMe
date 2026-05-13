function QuotePage() {
  return (
    <section className="quote-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Preventivo</p>
          <h1 className="page-title">Richiedi il tuo PocketMe</h1>
          <p className="page-description">
            Raccontaci cosa vuoi realizzare e inviaci le informazioni principali.
            Ti ricontatteremo con una proposta personalizzata.
          </p>
        </div>

        <div className="quote-layout">
          <div className="quote-info">
            <h2>Come funziona</h2>
            <p>
              Compila il modulo con i dettagli della tua richiesta. Più informazioni
              inserisci, più sarà facile preparare un preventivo preciso e veloce.
            </p>

            <div className="quote-info-list">
              <div className="quote-info-item">
                <span>1</span>
                <p>Inserisci i tuoi dati</p>
              </div>

              <div className="quote-info-item">
                <span>2</span>
                <p>Descrivi il PocketMe che vuoi realizzare</p>
              </div>

              <div className="quote-info-item">
                <span>3</span>
                <p>Ricevi una risposta personalizzata</p>
              </div>
            </div>
          </div>

          <form className="quote-form">
            <div className="form-row">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Cognome" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Numero di telefono" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Soggetto da realizzare" />
              <input type="text" placeholder="Numero di personaggi" />
            </div>

            <textarea
              placeholder="Descrivi la tua richiesta (es. stile, persone, animale, dettagli particolari...)"
              rows="7"
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Richiedi preventivo
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default QuotePage