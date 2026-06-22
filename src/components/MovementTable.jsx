import { useState } from 'react'
import { deleteMovement, getMovementOwnerLabel, getMovementSourceLabel } from '../utils/movements'
import '../styles/admin-table.css'

export const MovementTable = ({ movements, onEdit, onDelete, onRefresh }) => {
  const [confirmDelete, setConfirmDelete] = useState(null)

  const handleDeleteConfirm = (id) => {
    if (deleteMovement(id)) {
      setConfirmDelete(null)
      if (onDelete) onDelete(id)
      if (onRefresh) onRefresh()
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount)
  }

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('it-IT').format(new Date(date))
  }

  if (movements.length === 0) {
    return (
      <div className="empty-state">
        <p>Nessun movimento trovato</p>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="movements-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Origine</th>
            <th>Fonte</th>
            <th>Categoria</th>
            <th>Descrizione</th>
            <th>Importo</th>
            <th>Tipo</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement) => (
            <tr key={movement.id}>
              <td data-label="Data">{formatDate(movement.date)}</td>
              <td data-label="Origine">{getMovementOwnerLabel(movement)}</td>
              <td data-label="Fonte">{getMovementSourceLabel(movement)}</td>
              <td data-label="Categoria">{movement.category}</td>
              <td data-label="Descrizione">{movement.description}</td>
              <td data-label="Importo" className="amount-cell">
                <span className={movement.type === 'income' ? 'income' : 'expense'}>
                  {movement.type === 'income' ? '+' : '-'}{formatCurrency(movement.amount)}
                </span>
              </td>
              <td data-label="Tipo">
                <span className={`badge badge--${movement.type}`}>
                  {movement.type === 'income' ? 'Entrata' : 'Uscita'}
                </span>
              </td>
              <td data-label="Azioni" className="actions-cell">
                <button
                  className="btn-icon btn-edit"
                  type="button"
                  onClick={() => onEdit && onEdit(movement)}
                  aria-label={`Modifica movimento ${movement.description}`}
                  title="Modifica"
                >
                  Modifica
                </button>
                <button
                  className="btn-icon btn-delete"
                  type="button"
                  onClick={() => setConfirmDelete(movement.id)}
                  aria-label={`Elimina movimento ${movement.description}`}
                  title="Elimina"
                >
                  Elimina
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {confirmDelete && (
        <div className="confirm-modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <p>Sei sicuro di voler eliminare questo movimento?</p>
            <div className="modal-actions">
              <button
                className="btn-danger"
                type="button"
                onClick={() => handleDeleteConfirm(confirmDelete)}
              >
                Elimina
              </button>
              <button
                className="btn-secondary"
                type="button"
                onClick={() => setConfirmDelete(null)}
              >
                Annulla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
