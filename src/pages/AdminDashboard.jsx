import { useNavigate } from 'react-router-dom'
import { AdminLayout } from '../components/AdminLayout'
import { AdminCard } from '../components/AdminCard'
import {
  getAllMovements,
  calculateTotals
} from '../utils/movements'
import '../styles/admin-dashboard.css'

export const AdminDashboard = () => {
  const navigate = useNavigate()

  const movements = getAllMovements()
  const totals = calculateTotals(movements)
  const tumpuneTotals = calculateTotals(
    movements.filter((movement) => movement.partner === 'Tumpune')
  )
  const cirinoTotals = calculateTotals(
    movements.filter((movement) => movement.partner === 'Cirino')
  )
  const stats = {
    totalIncome: totals.income,
    totalExpense: totals.expense,
    totalBalance: totals.balance,
    tumpuneIncome: tumpuneTotals.income,
    tumpuneExpense: tumpuneTotals.expense,
    tumpuneBalance: tumpuneTotals.balance,
    cirinoIncome: cirinoTotals.income,
    cirinoExpense: cirinoTotals.expense,
    cirinoBalance: cirinoTotals.balance
  }
  const recentMovements = [...movements]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount)
  }
  
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('it-IT').format(new Date(date))
  }
  
  return (
    <AdminLayout>
      <div className="dashboard">
        <h2>Dashboard</h2>
        
        {/* Totali generali */}
        <section className="stats-section">
          <h3>Riepilogo Generale</h3>
          <div className="stats-grid">
            <AdminCard
              title="Entrate totali"
              value={formatCurrency(stats.totalIncome)}
              icon="💰"
              color="success"
            />
            <AdminCard
              title="Uscite totali"
              value={formatCurrency(stats.totalExpense)}
              icon="📉"
              color="danger"
            />
            <AdminCard
              title="Saldo"
              value={formatCurrency(stats.totalBalance)}
              icon="📊"
              color="primary"
            />
          </div>
        </section>
        
        {/* Tumpune */}
        <section className="stats-section">
          <h3>Socio: Tumpune</h3>
          <div className="stats-grid">
            <AdminCard
              title="Entrate"
              value={formatCurrency(stats.tumpuneIncome)}
              icon="📥"
              color="success"
              onClick={() => navigate('/admin/movements/tumpune')}
            />
            <AdminCard
              title="Uscite"
              value={formatCurrency(stats.tumpuneExpense)}
              icon="📤"
              color="danger"
              onClick={() => navigate('/admin/movements/tumpune')}
            />
            <AdminCard
              title="Saldo"
              value={formatCurrency(stats.tumpuneBalance)}
              icon="💵"
              color="primary"
              onClick={() => navigate('/admin/movements/tumpune')}
            />
          </div>
        </section>
        
        {/* Cirino */}
        <section className="stats-section">
          <h3>Socio: Cirino</h3>
          <div className="stats-grid">
            <AdminCard
              title="Entrate"
              value={formatCurrency(stats.cirinoIncome)}
              icon="📥"
              color="success"
              onClick={() => navigate('/admin/movements/cirino')}
            />
            <AdminCard
              title="Uscite"
              value={formatCurrency(stats.cirinoExpense)}
              icon="📤"
              color="danger"
              onClick={() => navigate('/admin/movements/cirino')}
            />
            <AdminCard
              title="Saldo"
              value={formatCurrency(stats.cirinoBalance)}
              icon="💵"
              color="primary"
              onClick={() => navigate('/admin/movements/cirino')}
            />
          </div>
        </section>
        
        {/* Ultimi movimenti */}
        <section className="recent-section">
          <h3>Ultimi Movimenti</h3>
          {recentMovements.length === 0 ? (
            <p className="no-data">Nessun movimento registrato</p>
          ) : (
            <div className="recent-list">
              {recentMovements.map((movement) => (
                <div key={movement.id} className="recent-item">
                  <div className="item-info">
                    <p className="item-description">{movement.description}</p>
                    <p className="item-meta">
                      {movement.partner} • {formatDate(movement.date)}
                    </p>
                  </div>
                  <p className={`item-amount ${movement.type}`}>
                    {movement.type === 'income' ? '+' : '-'}{formatCurrency(movement.amount)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </AdminLayout>
  )
}
