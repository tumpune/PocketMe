import '../styles/admin-cards.css'

export const AdminCard = ({ title, value, icon, color = 'primary', onClick }) => {
  const content = (
    <>
      <div className="card-icon" aria-hidden="true">{icon}</div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value}</p>
      </div>
    </>
  )

  if (onClick) {
    return (
      <button
        className={`admin-card admin-card--${color} admin-card--button`}
        type="button"
        onClick={onClick}
      >
        {content}
      </button>
    )
  }

  return (
    <div className={`admin-card admin-card--${color}`}>
      {content}
    </div>
  )
}
