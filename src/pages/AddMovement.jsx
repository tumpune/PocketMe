import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminLayout } from '../components/AdminLayout'
import { MovementForm } from '../components/MovementForm'
import { addMovement } from '../utils/movements'
import '../styles/admin-page.css'

export const AddMovement = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  
  const handleSubmit = (formData) => {
    try {
      addMovement(formData)
      setMessage('Movimento aggiunto con successo!')
      
      setTimeout(() => {
        navigate('/admin/dashboard')
      }, 1500)
    } catch {
      setMessage('Errore nell\'aggiunta del movimento')
    }
  }
  
  const handleCancel = () => {
    navigate('/admin/dashboard')
  }
  
  return (
    <AdminLayout>
      <div className="page-wrapper">
        <h2>Aggiungi Movimento</h2>
        
        {message && (
          <div className={`message ${message.includes('Errore') ? 'error' : 'success'}`}>
            {message}
          </div>
        )}
        
        <div className="form-wrapper">
          <MovementForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      </div>
    </AdminLayout>
  )
}
