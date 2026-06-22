import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

export const ProtectedRoute = ({ element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />
  }
  
  return element
}
