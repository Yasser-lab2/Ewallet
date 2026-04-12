export default function RechargePopup({ onClose }) {
  return (
    <div className="popup-overlay active">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Recharger votre compte</h2>
          <button className="btn-close" type="button" onClick={onClose}>
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="popup-body">
          <form className="transfer-form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="rechargeSourceCard">
                <i className="fas fa-credit-card" /> Depuis ma carte
              </label>
              <select id="rechargeSourceCard" name="rechargeSourceCard" required defaultValue="">
                <option value="" disabled>
                  Selectionner une carte
                </option>
                <option value="visa">VISA **** 4021</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rechargeAmount">Montant</label>
              <div className="amount-input">
                <input
                  type="number"
                  id="rechargeAmount"
                  name="rechargeAmount"
                  min="10"
                  max="5000"
                  step="0.01"
                  placeholder="0.00"
                  required
                />
                <span className="currency">MAD</span>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane" /> Recharger
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
