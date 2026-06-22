import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">404</p>
          <h1 className="page-title">Pagina non trovata</h1>
          <p className="page-description">
            Il contenuto che cerchi non esiste o è stato spostato.
          </p>
          <Link to="/" className="btn btn-primary">
            Torna alla home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
