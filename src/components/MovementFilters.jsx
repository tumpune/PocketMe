import { useState } from 'react'
import { getCategories, getMovementSources } from '../utils/movements'
import '../styles/admin-filters.css'

export const MovementFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    type: '',
    partner: '',
    source: '',
    category: '',
    search: '',
    startDate: '',
    endDate: ''
  })
  
  const categories = getCategories()
  const sources = getMovementSources()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...filters, [name]: value }
    setFilters(updated)
    onFilter(updated)
  }
  
  const handleReset = () => {
    const empty = {
      type: '',
      partner: '',
      source: '',
      category: '',
      search: '',
      startDate: '',
      endDate: ''
    }
    setFilters(empty)
    onFilter(empty)
  }
  
  return (
    <div className="filters-container">
      <div className="filters-grid">
        <div className="filter-group">
          <label htmlFor="type">Tipo</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
          >
            <option value="">Tutti</option>
            <option value="income">Entrate</option>
            <option value="expense">Uscite</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="partner">Origine</label>
          <select
            id="partner"
            name="partner"
            value={filters.partner}
            onChange={handleChange}
          >
            <option value="">Tutti</option>
            <option value="Brand">Brand</option>
            <option value="Tumpune">Tumpune</option>
            <option value="Cirino">Cirino</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">Tutte</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="source">Fonte</label>
          <select
            id="source"
            name="source"
            value={filters.source}
            onChange={handleChange}
          >
            <option value="">Tutte</option>
            {sources.map(source => (
              <option key={source.value} value={source.value}>{source.label}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="search">Ricerca</label>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Descrizione o categoria..."
            value={filters.search}
            onChange={handleChange}
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="startDate">Da</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="endDate">A</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <button className="reset-btn" type="button" onClick={handleReset}>
        Azzera filtri
      </button>
    </div>
  )
}
