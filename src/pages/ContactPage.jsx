import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  EMAILJS_CONTACT_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
} from '../config/emailjs'

function ContactPage() {
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
    const customerMessage = getValue('customer_message')
    const submittedAt = new Date().toLocaleString('it-IT')

    const detailedMessage = [
      'Nuovo messaggio contatti dal sito PocketMe.',
      '',
      'DATI CLIENTE',
      `Nome: ${fromName}`,
      `Cognome: ${fromSurname}`,
      `Email: ${fromEmail}`,
      `Telefono: ${phone || 'Non indicato'}`,
      '',
      'MESSAGGIO',
      customerMessage,
      '',
      `Inviato il: ${submittedAt}`,
    ].join('\n')

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: `${fromName} ${fromSurname}`,
          from_name: fromName,
          from_surname: fromSurname,
          from_email: fromEmail,
          email: fromEmail,
          phone,
          product_type: 'Contatto generico',
          subject: 'Messaggio contatti',
          quantity: '-',
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
        message: 'Messaggio inviato correttamente. Ti ricontatteremo al più presto.',
      })
    } catch (error) {
      console.error('Errore EmailJS:', error)
      setSubmitStatus({
        type: 'error',
        message:
          'Non siamo riusciti a inviare il messaggio. Riprova tra poco o usa il modulo preventivo.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
              Raccontaci chi vuoi trasformare in mini figura. Se hai già una foto
              pronta, potrai inviarla dopo il primo contatto.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span>Informazioni</span>
                <p>Usa il modulo qui accanto</p>
              </div>
              <div className="contact-info-item">
                <span>Preventivo</span>
                <p>Modulo dedicato nella pagina preventivo</p>
              </div>
              <div className="contact-info-item">
                <span>Foto</span>
                <p>Da inviare dopo la prima risposta</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>

            <label className="form-field">
              <span>Messaggio</span>
              <textarea
                name="customer_message"
                placeholder="Scrivici la tua domanda o raccontaci la tua idea."
                rows="7"
                required
              ></textarea>
            </label>

            <label className="form-checkbox">
              <input name="privacy" type="checkbox" required />
              <span>Accetto di essere ricontattato per questo messaggio.</span>
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
              {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
