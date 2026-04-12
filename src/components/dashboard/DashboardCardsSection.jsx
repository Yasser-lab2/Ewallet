export default function DashboardCardsSection() {
  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>Mes cartes</h2>
        <button className="btn btn-secondary" type="button">
          <i className="fas fa-plus" /> Ajouter une carte
        </button>
      </div>

      <div className="cards-grid">
        <div className="card-item">
          <div className="card-preview visa">
            <div className="card-chip" />
            <div className="card-number">**** **** **** 4021</div>
            <div className="card-holder">YASSER B.</div>
            <div className="card-expiry">09/29</div>
            <div className="card-type">VISA</div>
          </div>
          <div className="card-actions">
            <button className="card-action" title="Definir par defaut" type="button">
              <i className="fas fa-star" />
            </button>
            <button className="card-action" title="Geler la carte" type="button">
              <i className="fas fa-snowflake" />
            </button>
            <button className="card-action" title="Supprimer" type="button">
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
