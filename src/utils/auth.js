// Autenticazione demo - sostituire con API backend reale per produzione

const AUTH_KEY = 'pocketme_admin_auth'

// Demo credentials
const DEMO_CREDENTIALS = {
  email: 'admin@pocketme.com',
  password: 'admin123'
}

export const login = (email, password) => {
  if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    const authData = {
      email,
      loginTime: new Date().toISOString(),
      isAuthenticated: true
    }
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData))
    return { success: true, message: 'Login effettuato' }
  }
  return { success: false, message: 'Credenziali non valide' }
}

export const logout = () => {
  localStorage.removeItem(AUTH_KEY)
}

export const isAuthenticated = () => {
  try {
    const authData = localStorage.getItem(AUTH_KEY)
    if (!authData) return false
    
    const data = JSON.parse(authData)
    return data.isAuthenticated === true
  } catch {
    return false
  }
}

export const getAuthData = () => {
  try {
    const authData = localStorage.getItem(AUTH_KEY)
    if (!authData) return null
    
    return JSON.parse(authData)
  } catch {
    return null
  }
}
