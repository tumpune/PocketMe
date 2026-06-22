import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AdminLayout } from '../components/AdminLayout'
import { MovementFilters } from '../components/MovementFilters'
import { MovementForm } from '../components/MovementForm'
import { MovementTable } from '../components/MovementTable'
import {
  filterMovements,
  isBrandSalesMovement,
  updateMovement,
} from '../utils/movements'
import '../styles/admin-page.css'

export const MovementsPage = () => {
  const { filter } = useParams()
  const [activeFilters, setActiveFilters] = useState({})
  const [editingMovement, setEditingMovement] = useState(null)
  const [message, setMessage] = useState(null)

  const applyRouteFilter = (movements) => {
    if (filter === 'income') {
      return movements.filter(movement => movement.type === 'income')
    }
    if (filter === 'expense') {
      return movements.filter(movement => movement.type === 'expense')
    }
    if (filter === 'sales') {
      return movements.filter(isBrandSalesMovement)
    }
    if (filter === 'tumpune' || filter === 'cirino') {
      const partner = filter === 'tumpune' ? 'Tumpune' : 'Cirino'
      return movements.filter(movement => movement.partner === partner)
    }

    return movements
  }

  const filteredMovements = applyRouteFilter(filterMovements(activeFilters))

  const handleFilter = (filters) => {
    setActiveFilters(filters)
  }

  const handleEditSubmit = (formData) => {
    const updated = updateMovement(editingMovement.id, formData)

    if (!updated) {
      setMessage({ type: 'error', text: 'Movimento non trovato' })
      return
    }

    setEditingMovement(null)
    setMessage({ type: 'success', text: 'Movimento aggiornato con successo' })
  }

  const handleDelete = () => {
    setEditingMovement(null)
    setMessage({ type: 'success', text: 'Movimento eliminato' })
  }

  const getPageTitle = () => {
    switch (filter) {
      case 'income':
        return 'Entrate'
      case 'expense':
        return 'Uscite'
      case 'sales':
        return 'Vendite brand'
      case 'tumpune':
        return 'Movimenti - Tumpune'
      case 'cirino':
        return 'Movimenti - Cirino'
      default:
        return 'Movimenti'
    }
  }

  return (
    <AdminLayout>
      <div className="page-wrapper">
        <div className="admin-page-heading">
          <span>Archivio movimenti</span>
          <h2>{getPageTitle()}</h2>
        </div>

        {message && <div className={`message ${message.type}`}>{message.text}</div>}

        {editingMovement && (
          <div className="form-wrapper edit-wrapper">
            <div className="edit-heading">
              <h3>Modifica movimento</h3>
              <button
                type="button"
                className="text-button"
                onClick={() => setEditingMovement(null)}
              >
                Chiudi
              </button>
            </div>
            <MovementForm
              movement={editingMovement}
              onSubmit={handleEditSubmit}
              onCancel={() => setEditingMovement(null)}
            />
          </div>
        )}

        <MovementFilters onFilter={handleFilter} />

        <MovementTable
          movements={filteredMovements}
          onEdit={setEditingMovement}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}
