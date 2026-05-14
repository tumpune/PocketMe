function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="contact-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Contatti</p>
          <h1 className="page-title">Parliamo della tua mini figura</h1>
          <p className="page-description">
            Scrivici per informazioni, dubbi o richieste prima di creare il tuo
            PocketMe o PocketPet.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Contattaci</h2>
            <p>
              Raccontaci chi vuoi trasformare in mini figura. I contatti reali
              verranno aggiunti qui appena disponibili.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span>Email</span>
                <p>Da aggiungere</p>
              </div>
              <div className="contact-info-item">
                <span>Telefono</span>
                <p>Da aggiungere</p>
              </div>
              <div className="contact-info-item">
                <span>WhatsApp</span>
                <p>Da aggiungere</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Cognome" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Numero di telefono" />
            </div>

            <textarea
              placeholder="Scrivici la tua domanda o raccontaci la tua idea."
              rows="7"
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Invia richiesta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
