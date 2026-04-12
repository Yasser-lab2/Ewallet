export default function TransferPopup({ onClose }) {
  return (
    <div className="popup-overlay active">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Effectuer un transfert</h2>
          <button className="btn-close" type="button" onClick={onClose}>
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="popup-body">
          <form className="transfer-form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="beneficiary">
                <i className="fas fa-user" /> Beneficiaire
              </label>
              <select id="beneficiary" name="beneficiary" required defaultValue="">
                <option value="" disabled>
                  Choisir un beneficiaire
                </option>
                <option value="1">Meryem A.</option>
                <option value="2">Karim R.</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sourceCard">
                <i className="fas fa-credit-card" /> Depuis ma carte
              </label>
              <select id="sourceCard" name="sourceCard" required defaultValue="">
                <option value="" disabled>
                  Selectionner une carte
                </option>
                <option value="visa">VISA **** 4021</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Montant</label>
              <div className="amount-input">
                <input type="number" id="amount" name="amount" min="1" step="0.01" placeholder="0.00" required />
                <span className="currency">MAD</span>
              </div>
            </div>

            <div className="form-options">
              <div className="checkbox-group">
                <input type="checkbox" id="saveBeneficiary" name="saveBeneficiary" />
                <label htmlFor="saveBeneficiary">Enregistrer ce beneficiaire</label>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="instantTransfer" name="instantTransfer" />
                <label htmlFor="instantTransfer">
                  Transfert instantane <span className="fee-badge">+13.4 MAD</span>
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane" /> Transferer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
