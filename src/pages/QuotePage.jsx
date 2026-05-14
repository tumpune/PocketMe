import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_rrkclsy'
const EMAILJS_TEMPLATE_ID = 'template_b2wh41q'
const EMAILJS_PUBLIC_KEY = 'gcFZOY9GOjN_NrOLb'

function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const getValue = (name) => String(formData.get(name) || '').trim()

    const fromName = getValue('from_name')
    const fromSurname = getValue('from_surname')
    const fromEmail = getValue('from_email')
    const phone = getValue('phone')
    const productType = getValue('product_type')
    const subject = getValue('subject')
    const quantity = getValue('quantity')
    const customerMessage = getValue('customer_message')
    const submittedAt = new Date().toLocaleString('it-IT')

    const detailedMessage = [
      'Nuova richiesta preventivo dal sito PocketMe.',
      '',
      'DATI CLIENTE',
      `Nome: ${fromName}`,
      `Cognome: ${fromSurname}`,
      `Email: ${fromEmail}`,
      `Telefono: ${phone}`,
      '',
      'RICHIESTA',
      `Prodotto scelto: ${productType}`,
      `Soggetto da realizzare: ${subject}`,
      `Numero di figure: ${quantity}`,
      '',
      'MESSAGGIO',
      customerMessage,
      '',
      `Inviata il: ${submittedAt}`,
    ].join('\n')

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: `${fromName} ${fromSurname}`,
          from_name: fromName,
          from_surname: fromSurname,
          from_email: fromEmail,
          email: fromEmail,
          phone,
          product_type: productType,
          subject,
          quantity,
          customer_message: customerMessage,
          message: detailedMessage,
          time: submittedAt,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      )

      form.reset()
      setSubmitStatus({
        type: 'success',
        message: 'Richiesta inviata correttamente. Ti ricontatteremo al più presto.',
      })
    } catch (error) {
      console.error('Errore EmailJS:', error)
      setSubmitStatus({
        type: 'error',
        message:
          'Non siamo riusciti a inviare la richiesta. Controlla il template EmailJS o riprova tra poco.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="quote-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Preventivo</p>
          <h1 className="page-title">Richiedi la tua mini figura personalizzata</h1>
          <p className="page-description">
            Raccontaci chi vuoi trasformare in mini figura. Ti ricontatteremo
            con una proposta personalizzata.
          </p>
        </div>

        <div className="quote-layout">
          <div className="quote-info">
            <h2>Come funziona</h2>
            <p>
              Scegli il prodotto, descrivi il soggetto e aggiungi i dettagli più
              importanti. Il form invia la richiesta direttamente tramite EmailJS.
            </p>

            <div className="quote-info-list">
              <div className="quote-info-item">
                <span>1</span>
                <p>Scegli PocketMe, PocketPet o Altro</p>
              </div>
              <div className="quote-info-item">
                <span>2</span>
                <p>Raccontaci chi vuoi trasformare</p>
              </div>
              <div className="quote-info-item">
                <span>3</span>
                <p>Ricevi una proposta personalizzata</p>
              </div>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="from_name" type="text" placeholder="Nome" required />
              <input name="from_surname" type="text" placeholder="Cognome" required />
            </div>

            <div className="form-row">
              <input name="from_email" type="email" placeholder="Email" required />
              <input name="phone" type="tel" placeholder="Numero di telefono" required />
            </div>

            <select name="product_type" defaultValue="" required>
              <option value="" disabled>
                Scegli il prodotto
              </option>
              <option value="PocketMe">PocketMe</option>
              <option value="PocketLove">PocketLove</option>
              <option value="PocketPet">PocketPet</option>
              <option value="Altro">Altro</option>
            </select>

            <div className="form-row">
              <input
                name="subject"
                type="text"
                placeholder="Soggetto da realizzare"
                required
              />
              <input
                name="quantity"
                type="text"
                placeholder="Numero di figure"
                required
              />
            </div>

            <textarea
              name="customer_message"
              placeholder="Esempio: vorrei creare un PocketPet del mio cane."
              rows="7"
              required
            ></textarea>

            <p className="form-microcopy">
              Raccontaci chi vuoi trasformare in mini figura.
            </p>

            {submitStatus && (
              <p className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </p>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Invio in corso...' : 'Richiedi preventivo'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default QuotePage
