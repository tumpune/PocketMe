import { useState } from 'react'

const faqs = [
  {
    question: 'Che foto devo inviare?',
    answer:
      'Serve una foto chiara, luminosa e il più possibile frontale. Più il soggetto è leggibile, migliore sarà il risultato.',
  },
  {
    question: 'Posso creare un PocketMe da qualsiasi foto?',
    answer:
      'Possiamo partire da molte foto diverse, ma ti segnaleremo se l’immagine non è adatta e serve un riferimento migliore.',
  },
  {
    question: 'Posso creare un PocketPet del mio cane o gatto?',
    answer:
      'Sì. PocketPet è pensato per cani, gatti e altri animali domestici, partendo da una o più foto di riferimento.',
  },
  {
    question: 'Quanto tempo serve?',
    answer:
      'I tempi dipendono dalla complessità del progetto. Ti daremo una stima insieme al preventivo.',
  },
  {
    question: 'Il prodotto è resistente?',
    answer:
      'Il prodotto viene realizzato con attenzione a materiali, stampa e finitura. È pensato come oggetto da portare con cura.',
  },
  {
    question: 'Posso regalarlo?',
    answer:
      'Sì. PocketMe e PocketPet sono pensati anche come regali personali per compleanni, coppie, famiglia e ricordi speciali.',
  },
  {
    question: 'Come ricevo il preventivo?',
    answer:
      'Compila il modulo con prodotto, soggetto e dettagli. Ti ricontatteremo con una proposta personalizzata.',
  },
  {
    question: 'Posso chiedere modifiche?',
    answer:
      'Sì, puoi indicare preferenze e dettagli importanti. Valuteremo insieme cosa è possibile realizzare.',
  },
]

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">FAQ</p>
          <h1 className="page-title">Domande frequenti</h1>
          <p className="page-description">
            Tutto quello che devi sapere prima di creare il tuo PocketMe o
            PocketPet personalizzato.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={faq.question}
            >
              <button className="faq-question" type="button" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqPage
