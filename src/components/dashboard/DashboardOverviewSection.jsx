export default function DashboardOverviewSection({
  currentDate,
  summaryCards,
  recentTransactions,
  onTransferOpen,
  onRechargeOpen,
  onDemanderOpen,
}) {
  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>
          Bonjour, <span>Yasser</span> !
        </h2>
        <p className="date-display">{currentDate}</p>
      </div>

      <div className="summary-cards">
        {summaryCards.map((card) => (
          <div className="summary-card" key={card.label}>
            <div className={`card-icon ${card.color}`}>
              <i className={card.icon} />
            </div>
            <div className="card-details">
              <span className="card-label">{card.label}</span>
              <span className="card-value">{card.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h3>Actions rapides</h3>
        <div className="action-buttons">
          <button className="action-btn" type="button" onClick={onTransferOpen}>
            <i className="fas fa-paper-plane" />
            <span>Transférer</span>
          </button>
          <button className="action-btn" type="button" onClick={onRechargeOpen}>
            <i className="fas fa-plus-circle" />
            <span>Recharger</span>
          </button>
          <button className="action-btn" type="button" onClick={onDemanderOpen}>
            <i className="fas fa-hand-holding-usd" />
            <span>Demander</span>
          </button>
        </div>
      </div>

      <div className="recent-transactions">
        <div className="section-header">
          <h3>Transactions recentes</h3>
        </div>
        <div className="transactions-list">
          {recentTransactions.map((tx) => (
            <div className="transaction-item" key={tx.id}>
              <div className="transaction-details">
                <span className="transaction-name">{tx.title}</span>
                <span className="transaction-date">{tx.date}</span>
              </div>
              <p className={`transaction-amount ${tx.type}`}>{tx.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
