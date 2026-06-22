import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminLayout } from '../components/AdminLayout'
import {
  BRAND_OWNER,
  PARTNERS,
  addMovement,
  getPaymentMethods,
  getProductTypes,
} from '../utils/movements'
import '../styles/admin-page.css'
import '../styles/admin-form.css'

export const SalesRevenuePage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    product: 'PocketMe',
    amount: '',
    quantity: '1',
    partner: BRAND_OWNER,
    date: new Date().toISOString().split('T')[0],
    paymentMethod: '',
    description: '',
  })
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState(null)
  const productTypes = getProductTypes()
  const paymentMethods = getPaymentMethods()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.product) {
      nextErrors.product = 'Prodotto obbligatorio'
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      nextErrors.amount = 'Importo non valido'
    }
    if (!formData.quantity || Number(formData.quantity) <= 0) {
      nextErrors.quantity = 'Quantita non valida'
    }
    if (!formData.date) {
      nextErrors.date = 'Data obbligatoria'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const description = formData.description.trim() ||
      `Vendita ${formData.product} - ${formData.quantity} pezzi`

    addMovement({
      type: 'income',
      partner: formData.partner,
      source: 'brand_sales',
      amount: formData.amount,
      date: formData.date,
      category: `Vendita ${formData.product}`,
      description,
      paymentMethod: formData.paymentMethod,
      product: formData.product,
      quantity: formData.quantity,
    })

    setMessage({
      type: 'success',
      text: `Ricavo vendita registrato da vendite brand e attribuito a ${formData.partner}`
    })
    setFormData({
      product: 'PocketMe',
      amount: '',
      quantity: '1',
      partner: BRAND_OWNER,
      date: new Date().toISOString().split('T')[0],
      paymentMethod: '',
      description: '',
    })
  }

  return (
    <AdminLayout>
      <div className="page-wrapper">
        <div className="admin-page-heading">
          <span>Vendite brand</span>
          <h2>Ricavi dalle vendite</h2>
        </div>

        {message && <div className={`message ${message.type}`}>{message.text}</div>}

        <div className="form-wrapper">
          <form className="movement-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="product">Prodotto venduto</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className={errors.product ? 'error' : ''}
                >
                  {productTypes.map(product => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
                {errors.product && <span className="error-text">{errors.product}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="amount">Ricavo EUR</label>
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
                <label htmlFor="quantity">Quantita</label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  min="1"
                  step="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={errors.quantity ? 'error' : ''}
                />
                {errors.quantity && <span className="error-text">{errors.quantity}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="date">Data vendita</label>
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
                <label htmlFor="partner">Attribuisci ricavo a</label>
                <select
                  id="partner"
                  name="partner"
                  value={formData.partner}
                  onChange={handleChange}
                >
                  <option value={BRAND_OWNER}>Brand</option>
                  {PARTNERS.map(partner => (
                    <option key={partner} value={partner}>{partner}</option>
                  ))}
                </select>
                <span className="field-help">
                  La fonte resta sempre Ricavi vendite brand.
                </span>
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
                  placeholder="Ordine, cliente o riferimento interno..."
                  rows="3"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Registra ricavo vendita
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate('/admin/dashboard')}
              >
                Torna alla dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}
