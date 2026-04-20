import { useState } from 'react'

export default function DashboardCardsSection({
  cards,
  onAddCard,
  onSetDefaultCard,
  onToggleFreezeCard,
  onDeleteCard,
}) {
  const [selectedCardId, setSelectedCardId] = useState(null)

  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>Mes cartes</h2>
        <button className="btn btn-secondary" type="button" onClick={onAddCard}>
          <i className="fas fa-plus" /> Ajouter une carte
        </button>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card-item" key={card.id}>
            <div
              className={`card-preview ${card.previewClass}`}
              onClick={() => setSelectedCardId(card.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  setSelectedCardId(card.id)
                }
              }}
            >
              <div className="card-chip" />
              <div className="card-number">**** **** **** {card.last4}</div>
              <div className="card-holder">{card.holder}</div>
              <div className="card-expiry">{card.expiry}</div>
              <div className="card-type">{card.brand}</div>
              {card.isFrozen ? <div className="card-state">Gelee</div> : null}
              {card.isDefault ? <div className="card-state">Par defaut</div> : null}
            </div>
            <div className="card-actions">
              <button
                className="card-action"
                title="Definir par defaut"
                type="button"
                onClick={() => onSetDefaultCard(card.id)}
              >
                <i className="fas fa-star" />
              </button>
              <button
                className="card-action"
                title="Geler la carte"
                type="button"
                onClick={() => onToggleFreezeCard(card.id)}
              >
                <i className="fas fa-snowflake" />
              </button>
              <button
                className="card-action"
                title="Supprimer"
                type="button"
                onClick={() => onDeleteCard(card.id)}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
            {selectedCardId === card.id ? <p>Carte selectionnee</p> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
