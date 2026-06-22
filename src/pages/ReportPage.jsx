import { AdminLayout } from '../components/AdminLayout'
import {
  calculateTotals,
  calculateTotalsByPartner,
  calculateBrandSalesTotals,
  getAllMovements,
  getMovementOwnerLabel,
  getMovementSourceLabel,
  getRecentMovements,
} from '../utils/movements'
import '../styles/admin-report.css'

export const ReportPage = () => {
  const allMovements = getAllMovements()
  const reportData = {
    generalTotals: calculateTotals(allMovements),
    brandSalesTotals: calculateBrandSalesTotals(),
    tumpuneTotals: calculateTotalsByPartner('Tumpune'),
    cirinoTotals: calculateTotalsByPartner('Cirino'),
    recentMovements: getRecentMovements(15),
    totalMovements: allMovements.length,
  }

  const formatCurrency = (amount = 0) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount)
  }

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('it-IT').format(new Date(date))
  }

  const calculateAverage = (type, partner = null) => {
    let movements = allMovements

    if (partner) {
      movements = movements.filter(movement => movement.partner === partner)
    }

    const filtered = movements.filter(movement => movement.type === type)
    if (filtered.length === 0) return 0

    const sum = filtered.reduce((acc, movement) => acc + movement.amount, 0)
    return sum / filtered.length
  }

  return (
    <AdminLayout>
      <div className="report-wrapper">
        <div className="admin-page-heading">
          <span>Analisi economica</span>
          <h2>Report finanziario</h2>
        </div>

        <section className="report-section">
          <h3>Riepilogo generale</h3>
          <div className="report-grid">
            <div className="report-card">
              <h4>Entrate totali</h4>
              <p className="amount income">
                {formatCurrency(reportData.generalTotals.income)}
              </p>
            </div>
            <div className="report-card">
              <h4>Uscite totali</h4>
              <p className="amount expense">
                {formatCurrency(reportData.generalTotals.expense)}
              </p>
            </div>
            <div className="report-card">
              <h4>Saldo totale</h4>
              <p className={`amount ${reportData.generalTotals.balance >= 0 ? 'income' : 'expense'}`}>
                {formatCurrency(reportData.generalTotals.balance)}
              </p>
            </div>
            <div className="report-card">
              <h4>Movimenti registrati</h4>
              <p className="amount">{reportData.totalMovements}</p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h3>Ricavi vendite brand</h3>
          <div className="report-grid">
            <div className="report-card">
              <h4>Ricavi da prodotti</h4>
              <p className="amount income">
                {formatCurrency(reportData.brandSalesTotals.revenue)}
              </p>
            </div>
            <div className="report-card">
              <h4>Vendite registrate</h4>
              <p className="amount">{reportData.brandSalesTotals.count}</p>
            </div>
            <div className="report-card">
              <h4>Pezzi venduti</h4>
              <p className="amount">{reportData.brandSalesTotals.quantity}</p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h3>Dati socio: Tumpune</h3>
          <div className="report-grid">
            <div className="report-card">
              <h4>Entrate</h4>
              <p className="amount income">
                {formatCurrency(reportData.tumpuneTotals.income)}
              </p>
              <p className="average">
                Media: {formatCurrency(calculateAverage('income', 'Tumpune'))}
              </p>
            </div>
            <div className="report-card">
              <h4>Uscite</h4>
              <p className="amount expense">
                {formatCurrency(reportData.tumpuneTotals.expense)}
              </p>
              <p className="average">
                Media: {formatCurrency(calculateAverage('expense', 'Tumpune'))}
              </p>
            </div>
            <div className="report-card">
              <h4>Saldo</h4>
              <p className={`amount ${reportData.tumpuneTotals.balance >= 0 ? 'income' : 'expense'}`}>
                {formatCurrency(reportData.tumpuneTotals.balance)}
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h3>Dati socio: Cirino</h3>
          <div className="report-grid">
            <div className="report-card">
              <h4>Entrate</h4>
              <p className="amount income">
                {formatCurrency(reportData.cirinoTotals.income)}
              </p>
              <p className="average">
                Media: {formatCurrency(calculateAverage('income', 'Cirino'))}
              </p>
            </div>
            <div className="report-card">
              <h4>Uscite</h4>
              <p className="amount expense">
                {formatCurrency(reportData.cirinoTotals.expense)}
              </p>
              <p className="average">
                Media: {formatCurrency(calculateAverage('expense', 'Cirino'))}
              </p>
            </div>
            <div className="report-card">
              <h4>Saldo</h4>
              <p className={`amount ${reportData.cirinoTotals.balance >= 0 ? 'income' : 'expense'}`}>
                {formatCurrency(reportData.cirinoTotals.balance)}
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h3>Ultimi 15 movimenti</h3>
          {reportData.recentMovements.length === 0 ? (
            <p className="no-data">Nessun movimento registrato</p>
          ) : (
            <div className="movements-list">
              {reportData.recentMovements.map((movement) => (
                <div key={movement.id} className="movement-item">
                  <div className="item-left">
                    <p className="item-desc">{movement.description}</p>
                    <p className="item-meta">
                      {getMovementOwnerLabel(movement)} | {getMovementSourceLabel(movement)} | {movement.category} | {formatDate(movement.date)}
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
