import { useMemo, useState } from 'react'
import Navbar from './Navbar'
import DashboardSidebar from './dashboard/DashboardSidebar'
import DashboardOverviewSection from './dashboard/DashboardOverviewSection'
import DashboardCardsSection from './dashboard/DashboardCardsSection'
import DashboardPlaceholderSection from './dashboard/DashboardPlaceholderSection'
import TransferPopup from './dashboard/TransferPopup'
import RechargePopup from './dashboard/RechargePopup'
import DemanderPopup from './dashboard/DemanderPopup'

const initialSummaryCards = [
  { icon: 'fas fa-wallet', color: 'blue', label: 'Solde disponible', value: '12 500.00 MAD' },
  { icon: 'fas fa-arrow-up', color: 'green', label: 'Revenus', value: '8 200.00 MAD' },
  { icon: 'fas fa-arrow-down', color: 'red', label: 'Dépenses', value: '3 400.00 MAD' },
  { icon: 'fas fa-credit-card', color: 'purple', label: 'Cartes actives', value: '2' },
]

const initialRecentTransactions = [
  { id: 1, title: 'Paiement abonnement', date: '10 avril 2026', amount: '-120.00 MAD', type: 'debit' },
  { id: 2, title: 'Virement reçu', date: '09 avril 2026', amount: '+1 850.00 MAD', type: 'credit' },
  { id: 3, title: 'Achat supermarché', date: '08 avril 2026', amount: '-340.00 MAD', type: 'debit' },
]

const initialCards = [
  {
    id: 'card-1',
    holder: 'YASSER B.',
    last4: '4021',
    expiry: '09/29',
    brand: 'VISA',
    previewClass: 'visa',
    isDefault: true,
    isFrozen: false,
  },
]

const sections = [
  { key: 'overview', icon: 'fas fa-home', label: "Vue d'ensemble" },
  { key: 'transactions', icon: 'fas fa-exchange-alt', label: 'Transactions' },
  { key: 'cards', icon: 'fas fa-credit-card', label: 'Mes cartes' },
  { key: 'transfers', icon: 'fas fa-paper-plane', label: 'Transferts' },
  { key: 'support', icon: 'fas fa-headset', label: 'Aide & Support' },
]

export default function DashboardPage() {
  const [userName] = useState('Yasser')
  const [activeSection, setActiveSection] = useState('overview')
  const [summaryCards, setSummaryCards] = useState(initialSummaryCards)
  const [recentTransactions, setRecentTransactions] = useState(initialRecentTransactions)
  const [cards, setCards] = useState(initialCards)
  const [isTransferOpen, setIsTransferOpen] = useState(false)
  const [isRechargeOpen, setIsRechargeOpen] = useState(false)
  const [isDemanderOpen, setIsDemanderOpen] = useState(false)

  const currentDate = useMemo(
    () =>
      new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    [],
  )

  const beneficiaryOptions = useMemo(
    () => [
      { value: '1', label: 'Meryem A.' },
      { value: '2', label: 'Karim R.' },
    ],
    [],
  )

  const sourceCardOptions = useMemo(
    () =>
      cards.map((card) => ({
        value: card.id,
        label: `${card.brand} **** ${card.last4}`,
      })),
    [cards],
  )

  const updateActiveCardsCount = (nextCards) => {
    setSummaryCards((prev) =>
      prev.map((card) =>
        card.label === 'Cartes actives' ? { ...card, value: String(nextCards.length) } : card,
      ),
    )
  }

  const addTransaction = (transaction) => {
    setRecentTransactions((prev) => [transaction, ...prev].slice(0, 6))
  }

  const handleAddCard = () => {
    const nextCard = {
      id: `card-${Date.now()}`,
      holder: 'YASSER B.',
      last4: String(Math.floor(1000 + Math.random() * 9000)),
      expiry: '11/30',
      brand: 'MASTERCARD',
      previewClass: 'visa',
      isDefault: false,
      isFrozen: false,
    }

    setCards((prev) => {
      const nextCards = [nextCard, ...prev]
      updateActiveCardsCount(nextCards)
      return nextCards
    })
  }

  const handleSetDefaultCard = (cardId) => {
    setCards((prev) => prev.map((card) => ({ ...card, isDefault: card.id === cardId })))
  }

  const handleToggleFreezeCard = (cardId) => {
    setCards((prev) =>
      prev.map((card) => (card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card)),
    )
  }

  const handleDeleteCard = (cardId) => {
    setCards((prev) => {
      const remainingCards = prev.filter((card) => card.id !== cardId)
      const nextCards =
        remainingCards.length > 0 && !remainingCards.some((card) => card.isDefault)
          ? remainingCards.map((card, index) => ({ ...card, isDefault: index === 0 }))
          : remainingCards
      updateActiveCardsCount(nextCards)
      return nextCards
    })
  }

  const handleTransferSubmit = (payload) => {
    addTransaction({
      id: Date.now(),
      title: 'Transfert envoye',
      date: currentDate,
      amount: `-${Number(payload.amount || 0).toFixed(2)} MAD`,
      type: 'debit',
    })
    setIsTransferOpen(false)
  }

  const handleRechargeSubmit = (payload) => {
    addTransaction({
      id: Date.now(),
      title: 'Recharge du compte',
      date: currentDate,
      amount: `+${Number(payload.amount || 0).toFixed(2)} MAD`,
      type: 'credit',
    })
    setIsRechargeOpen(false)
  }

  const handleDemanderSubmit = (payload) => {
    addTransaction({
      id: Date.now(),
      title: `Demande a ${payload.person || 'contact'}`,
      date: currentDate,
      amount: `+${Number(payload.amount || 0).toFixed(2)} MAD`,
      type: 'credit',
    })
    setIsDemanderOpen(false)
  }

  return (
    <>
      <Navbar showLinks={false} />

      <main className="dashboard-main">
        <div className="dashboard-container">
          <DashboardSidebar
            sections={sections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="dashboard-content">
            {activeSection === 'overview' && (
              <DashboardOverviewSection
                userName={userName}
                currentDate={currentDate}
                summaryCards={summaryCards}
                recentTransactions={recentTransactions}
                onTransferOpen={() => setIsTransferOpen(true)}
                onRechargeOpen={() => setIsRechargeOpen(true)}
                onDemanderOpen={() => setIsDemanderOpen(true)}
              />
            )}

            {activeSection === 'cards' && (
              <DashboardCardsSection
                cards={cards}
                onAddCard={handleAddCard}
                onSetDefaultCard={handleSetDefaultCard}
                onToggleFreezeCard={handleToggleFreezeCard}
                onDeleteCard={handleDeleteCard}
              />
            )}

            {(activeSection === 'transactions' || activeSection === 'transfers' || activeSection === 'support') && (
              <DashboardPlaceholderSection
                title={sections.find((section) => section.key === activeSection)?.label}
                description="Cette section est reliee au state et prete pour vos donnees metier."
              />
            )}
          </div>
        </div>
      </main>

      {isTransferOpen && (
        <TransferPopup
          onClose={() => setIsTransferOpen(false)}
          onSubmit={handleTransferSubmit}
          beneficiaries={beneficiaryOptions}
          sourceCards={sourceCardOptions}
        />
      )}

      {isRechargeOpen && (
        <RechargePopup
          onClose={() => setIsRechargeOpen(false)}
          onSubmit={handleRechargeSubmit}
          sourceCards={sourceCardOptions}
        />
      )}

      {isDemanderOpen && (
        <DemanderPopup
          onClose={() => setIsDemanderOpen(false)}
          onSubmit={handleDemanderSubmit}
        />
      )}

      <footer>
        <p>&copy; 2026 E-Wallet. Tous droits réservés.</p>
      </footer>
    </>
  )
}