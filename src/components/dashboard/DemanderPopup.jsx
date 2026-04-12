export default function DemanderPopup({ onClose }) {
  return (
    <div className="popup-overlay active">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Demander un paiement</h2>
          <button className="btn-close" type="button" onClick={onClose}>
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="popup-body">
          <form className="transfer-form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="requestPerson">
                <i className="fas fa-user" /> A qui demander
              </label>
              <input
                id="requestPerson"
                name="requestPerson"
                type="text"
                placeholder="Nom ou e-mail"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requestAmount">Montant</label>
              <div className="amount-input">
                <input
                  type="number"
                  id="requestAmount"
                  name="requestAmount"
                  min="1"
                  step="0.01"
                  placeholder="0.00"
                  required
                />
                <span className="currency">MAD</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="requestNote">Message (optionnel)</label>
              <input
                id="requestNote"
                name="requestNote"
                type="text"
                placeholder="Ex: partage de repas"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-hand-holding-usd" /> Envoyer la demande
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
