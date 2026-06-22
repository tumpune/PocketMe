import { useState } from 'react'
import { getCategories, getMovementSources, getPaymentMethods } from '../utils/movements'
import '../styles/admin-form.css'

export const MovementForm = ({ movement, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    type: movement?.type || 'income',
    partner: movement?.partner || 'Brand',
    source: movement?.source || (movement?.partner && movement.partner !== 'Brand' ? 'partner' : 'brand'),
    amount: movement?.amount || '',
    date: movement?.date || new Date().toISOString().split('T')[0],
    category: movement?.category || '',
    description: movement?.description || '',
    paymentMethod: movement?.paymentMethod || '',
  })

  const [errors, setErrors] = useState({})
  const categories = getCategories()
  const sources = getMovementSources()
  const paymentMethods = getPaymentMethods()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.amount || Number(formData.amount) <= 0) {
      newErrors.amount = 'Importo non valido'
    }
    if (!formData.date) {
      newErrors.date = 'Data obbligatoria'
    }
    if (!formData.category) {
      newErrors.category = 'Categoria obbligatoria'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Descrizione obbligatoria'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <form className="movement-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="type">Tipo movimento</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="income">Entrata</option>
            <option value="expense">Uscita</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="partner">Origine</label>
          <select
            id="partner"
            name="partner"
            value={formData.partner}
            onChange={handleChange}
          >
            <option value="Brand">Brand</option>
            <option value="Tumpune">Tumpune</option>
            <option value="Cirino">Cirino</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="source">Fonte movimento</label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
          >
            {sources.map(source => (
              <option key={source.value} value={source.value}>{source.label}</option>
            ))}
          </select>
          <span className="field-help">
            Usa Ricavi vendite brand quando l'entrata arriva dalle vendite dei prodotti.
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Importo EUR</label>
          <input
            id="amount"
            type="number"
            name="amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            className={errors.amount ? 'error' : ''}
          />
          {errors.amount && <span className="error-text">{errors.amount}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Data</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && <span className="error-text">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Seleziona categoria</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && <span className="error-text">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Metodo pagamento</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="">Nessuno</option>
            {paymentMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Descrizione</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrivi il movimento..."
            rows="3"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-text">{errors.description}</span>}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {movement ? 'Salva modifiche' : 'Aggiungi movimento'}
        </button>
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Annulla
        </button>
      </div>
    </form>
  )
}
