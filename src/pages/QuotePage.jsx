import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_QUOTE_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
} from '../config/emailjs'

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
        EMAILJS_QUOTE_TEMPLATE_ID,
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
                <p>Scegli PocketMe, PocketPet o PocketLove</p>
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
              <label className="form-field">
                <span>Nome</span>
                <input name="from_name" type="text" autoComplete="given-name" required />
              </label>
              <label className="form-field">
                <span>Cognome</span>
                <input name="from_surname" type="text" autoComplete="family-name" required />
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Email</span>
                <input name="from_email" type="email" autoComplete="email" required />
              </label>
              <label className="form-field">
                <span>Numero di telefono</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>

            <label className="form-field">
              <span>Prodotto</span>
              <select name="product_type" defaultValue="" required>
                <option value="" disabled>
                  Scegli il prodotto
                </option>
                <option value="PocketMe">PocketMe</option>
                <option value="PocketLove">PocketLove</option>
                <option value="PocketPet">PocketPet</option>
                <option value="Altro">Altro</option>
              </select>
            </label>

            <div className="form-row">
              <label className="form-field">
                <span>Soggetto da realizzare</span>
                <input name="subject" type="text" required />
              </label>
              <label className="form-field">
                <span>Numero di figure</span>
                <input name="quantity" type="number" min="1" inputMode="numeric" required />
              </label>
            </div>

            <label className="form-field">
              <span>Dettagli della richiesta</span>
              <textarea
                name="customer_message"
                placeholder="Esempio: vorrei creare un PocketPet del mio cane."
                rows="7"
                required
              ></textarea>
            </label>

            <p className="form-microcopy">
              Dopo il primo contatto potrai inviare le foto di riferimento.
            </p>

            <label className="form-checkbox">
              <input name="privacy" type="checkbox" required />
              <span>Accetto di essere ricontattato per questa richiesta.</span>
            </label>

            {submitStatus && (
              <p
                className={`form-status ${submitStatus.type}`}
                role={submitStatus.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
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
