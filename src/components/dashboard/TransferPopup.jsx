import { useState } from 'react'

export default function TransferPopup({ onClose, onSubmit, beneficiaries, sourceCards }) {
  const [formData, setFormData] = useState({
    beneficiary: '',
    sourceCard: '',
    amount: '',
    saveBeneficiary: false,
    instantTransfer: false,
  })

  const handleChange = (field) => (event) => {
    const nextValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData((prev) => ({ ...prev, [field]: nextValue }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
    setFormData({
      beneficiary: '',
      sourceCard: '',
      amount: '',
      saveBeneficiary: false,
      instantTransfer: false,
    })
  }

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
          <form className="transfer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="beneficiary">
                <i className="fas fa-user" /> Beneficiaire
              </label>
              <select
                id="beneficiary"
                name="beneficiary"
                required
                value={formData.beneficiary}
                onChange={handleChange('beneficiary')}
              >
                <option value="" disabled>
                  Choisir un beneficiaire
                </option>
                {beneficiaries.map((beneficiary) => (
                  <option key={beneficiary.value} value={beneficiary.value}>
                    {beneficiary.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sourceCard">
                <i className="fas fa-credit-card" /> Depuis ma carte
              </label>
              <select
                id="sourceCard"
                name="sourceCard"
                required
                value={formData.sourceCard}
                onChange={handleChange('sourceCard')}
              >
                <option value="" disabled>
                  Selectionner une carte
                </option>
                {sourceCards.map((card) => (
                  <option key={card.value} value={card.value}>
                    {card.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Montant</label>
              <div className="amount-input">
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min="1"
                  step="0.01"
                  placeholder="0.00"
                  required
                  value={formData.amount}
                  onChange={handleChange('amount')}
                />
                <span className="currency">MAD</span>
              </div>
            </div>

            <div className="form-options">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="saveBeneficiary"
                  name="saveBeneficiary"
                  checked={formData.saveBeneficiary}
                  onChange={handleChange('saveBeneficiary')}
                />
                <label htmlFor="saveBeneficiary">Enregistrer ce beneficiaire</label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="instantTransfer"
                  name="instantTransfer"
                  checked={formData.instantTransfer}
                  onChange={handleChange('instantTransfer')}
                />
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
