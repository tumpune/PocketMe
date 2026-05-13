function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Contatti</p>
          <h1 className="page-title">Parliamo del tuo PocketMe</h1>
          <p className="page-description">
            Scrivici per ricevere informazioni, chiarire dubbi o iniziare a creare
            la tua mini figura personalizzata.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Contattaci</h2>
            <p>
              Siamo qui per aiutarti a trasformare una semplice foto in qualcosa di
              unico, personale e memorabile.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span>Email</span>
                <p>info@pocketme.it</p>
              </div>

              <div className="contact-info-item">
                <span>Telefono</span>
                <p>+39 000 000 0000</p>
              </div>

              <div className="contact-info-item">
                <span>WhatsApp</span>
                <p>Disponibile a breve</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Cognome" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Numero di telefono" />
            </div>

            <textarea placeholder="Messaggio" rows="7"></textarea>

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