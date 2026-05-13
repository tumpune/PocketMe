import { useState } from 'react'

function FaqPage() {
  const faqs = [
    {
      question: 'Come funziona PocketMe?',
      answer:
        'Invii una foto, noi la trasformiamo in un modello 3D e realizziamo il tuo portachiavi personalizzato.',
    },
    {
      question: 'Quanto tempo ci vuole?',
      answer:
        'Il tempo varia in base alla complessità, ma generalmente pochi giorni per la realizzazione.',
    },
    {
      question: 'Posso creare più persone insieme?',
      answer:
        'Sì, puoi richiedere PocketMe con più soggetti come coppie, amici o famiglia.',
    },
    {
      question: 'Posso creare anche animali?',
      answer:
        'Certo, realizziamo anche versioni personalizzate di animali domestici.',
    },
    {
      question: 'Il prodotto è resistente?',
      answer:
        'Sì, utilizziamo materiali di qualità e tecnologie di stampa 3D avanzate.',
    },
  ]

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
            Tutto quello che devi sapere prima di creare il tuo PocketMe.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </div>

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