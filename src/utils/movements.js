// Gestione movimenti - sostituire con API REST o database per produzione

const MOVEMENTS_KEY = 'pocketme_movements'
export const BRAND_OWNER = 'Brand'
export const PARTNERS = ['Tumpune', 'Cirino']
export const PRODUCT_TYPES = ['PocketMe', 'PocketPet', 'PocketLove']
export const MOVEMENT_SOURCES = [
  { value: 'brand', label: 'Movimento brand' },
  { value: 'brand_sales', label: 'Ricavi vendite brand' },
  { value: 'partner', label: 'Movimento socio' },
  { value: 'other', label: 'Altro' }
]

// Funzioni helper
const getMovements = () => {
  try {
    const data = localStorage.getItem(MOVEMENTS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveMovements = (movements) => {
  localStorage.setItem(MOVEMENTS_KEY, JSON.stringify(movements))
}

const generateId = () => {
  return `mov_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// API Movimenti
export const getAllMovements = () => {
  return getMovements()
}

export const addMovement = (movement) => {
  const movements = getMovements()
  const now = new Date().toISOString()
  const partner = movement.partner || BRAND_OWNER
  
  const newMovement = {
    id: generateId(),
    type: movement.type,
    partner,
    source: movement.source || (partner === BRAND_OWNER ? 'brand' : 'partner'),
    amount: Number(movement.amount),
    date: movement.date,
    category: movement.category,
    description: movement.description,
    paymentMethod: movement.paymentMethod || '',
    product: movement.product || '',
    quantity: movement.quantity ? Number(movement.quantity) : null,
    createdAt: now,
    updatedAt: now
  }
  
  movements.push(newMovement)
  saveMovements(movements)
  
  return newMovement
}

export const updateMovement = (id, updates) => {
  const movements = getMovements()
  const index = movements.findIndex(m => m.id === id)
  
  if (index === -1) return null
  
  const now = new Date().toISOString()
  const partner = updates.partner || movements[index].partner || BRAND_OWNER
  movements[index] = {
    ...movements[index],
    ...updates,
    id: movements[index].id,
    partner,
    source: updates.source || movements[index].source || (partner === BRAND_OWNER ? 'brand' : 'partner'),
    amount: updates.amount !== undefined ? Number(updates.amount) : movements[index].amount,
    quantity: updates.quantity ? Number(updates.quantity) : updates.quantity === '' ? null : movements[index].quantity,
    createdAt: movements[index].createdAt,
    updatedAt: now
  }
  
  saveMovements(movements)
  return movements[index]
}

export const deleteMovement = (id) => {
  const movements = getMovements()
  const filtered = movements.filter(m => m.id !== id)
  
  if (filtered.length === movements.length) return false
  
  saveMovements(filtered)
  return true
}

export const getMovementById = (id) => {
  const movements = getMovements()
  return movements.find(m => m.id === id) || null
}

export const filterMovements = (filters) => {
  let movements = getMovements()
  
  if (filters.type) {
    movements = movements.filter(m => m.type === filters.type)
  }
  
  if (filters.partner) {
    movements = movements.filter(m => m.partner === filters.partner)
  }

  if (filters.source) {
    movements = movements.filter(m => m.source === filters.source)
  }
  
  if (filters.category) {
    movements = movements.filter(m => m.category === filters.category)
  }
  
  if (filters.search) {
    const search = filters.search.toLowerCase()
    movements = movements.filter(m =>
      m.description.toLowerCase().includes(search) ||
      m.category.toLowerCase().includes(search) ||
      (m.product || '').toLowerCase().includes(search) ||
      (m.paymentMethod || '').toLowerCase().includes(search)
    )
  }
  
  if (filters.startDate) {
    movements = movements.filter(m => new Date(m.date) >= new Date(filters.startDate))
  }
  
  if (filters.endDate) {
    movements = movements.filter(m => new Date(m.date) <= new Date(filters.endDate))
  }
  
  return movements
}

export const calculateTotals = (movements = null) => {
  const data = movements || getMovements()
  
  let income = 0
  let expense = 0
  
  data.forEach(m => {
    if (m.type === 'income') {
      income += m.amount
    } else if (m.type === 'expense') {
      expense += m.amount
    }
  })
  
  return {
    income,
    expense,
    balance: income - expense
  }
}

export const getRecentMovements = (limit = 10) => {
  const movements = getMovements()
  return movements
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export const getMovementsByPartner = (partner) => {
  const movements = getMovements()
  return movements.filter(m => m.partner === partner)
}

export const calculateTotalsByPartner = (partner) => {
  const movements = getMovementsByPartner(partner)
  return calculateTotals(movements)
}

export const isBrandSalesMovement = (movement) => {
  return movement.source === 'brand_sales' ||
    (movement.partner === BRAND_OWNER && movement.type === 'income' && movement.category?.startsWith('Vendita'))
}

export const getBrandSalesMovements = () => {
  return getMovements().filter(isBrandSalesMovement)
}

export const calculateBrandSalesTotals = () => {
  const movements = getBrandSalesMovements()
  const revenue = movements.reduce((acc, movement) => acc + movement.amount, 0)
  const quantity = movements.reduce((acc, movement) => acc + (movement.quantity || 0), 0)

  return {
    revenue,
    quantity,
    count: movements.length
  }
}

export const getMovementOwnerLabel = (movement) => {
  if (!movement.partner || movement.partner === BRAND_OWNER) {
    return 'Brand'
  }

  return movement.partner
}

export const getMovementSourceLabel = (movement) => {
  return MOVEMENT_SOURCES.find(source => source.value === movement.source)?.label || 'Non specificata'
}

export const getCategories = () => {
  return [
    'Vendita PocketMe',
    'Vendita PocketPet',
    'Vendita PocketLove',
    'Materiali',
    'Produzione 3D',
    'Packaging',
    'Spedizioni',
    'Marketing',
    'Rimborsi',
    'Altro'
  ]
}

export const getPaymentMethods = () => {
  return ['Contanti', 'Bonifico', 'Carta', 'PayPal', 'Altro']
}

export const getProductTypes = () => {
  return PRODUCT_TYPES
}

export const getMovementSources = () => {
  return MOVEMENT_SOURCES
}

export const resetAllMovements = () => {
  localStorage.removeItem(MOVEMENTS_KEY)
}
