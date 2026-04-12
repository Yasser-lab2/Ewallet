import { useMemo, useState } from 'react'
import DashboardSidebar from './dashboard/DashboardSidebar'
import DashboardOverviewSection from './dashboard/DashboardOverviewSection'
import DashboardCardsSection from './dashboard/DashboardCardsSection'
import DashboardPlaceholderSection from './dashboard/DashboardPlaceholderSection'
import TransferPopup from './dashboard/TransferPopup'
import RechargePopup from './dashboard/RechargePopup'
import DemanderPopup from './dashboard/DemanderPopup'

const summaryCards = [
  { icon: 'fas fa-wallet', color: 'blue', label: 'Solde disponible', value: '12 500.00 MAD' },
  { icon: 'fas fa-arrow-up', color: 'green', label: 'Revenus', value: '8 200.00 MAD' },
  { icon: 'fas fa-arrow-down', color: 'red', label: 'Dépenses', value: '3 400.00 MAD' },
  { icon: 'fas fa-credit-card', color: 'purple', label: 'Cartes actives', value: '2' },
]

const recentTransactions = [
  { id: 1, title: 'Paiement abonnement', date: '10 avril 2026', amount: '-120.00 MAD', type: 'debit' },
  { id: 2, title: 'Virement reçu', date: '09 avril 2026', amount: '+1 850.00 MAD', type: 'credit' },
  { id: 3, title: 'Achat supermarché', date: '08 avril 2026', amount: '-340.00 MAD', type: 'debit' },
]

const sections = [
  { key: 'overview', icon: 'fas fa-home', label: "Vue d'ensemble" },
  { key: 'transactions', icon: 'fas fa-exchange-alt', label: 'Transactions' },
  { key: 'cards', icon: 'fas fa-credit-card', label: 'Mes cartes' },
  { key: 'transfers', icon: 'fas fa-paper-plane', label: 'Transferts' },
  { key: 'support', icon: 'fas fa-headset', label: 'Aide & Support' },
]

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('overview')
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

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            <img src="/assets/e-wallet-logo.avif" alt="Logo E-Wallet" />
          </a>
          <ul className="nav-links" />
        </nav>
      </header>

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
                currentDate={currentDate}
                summaryCards={summaryCards}
                recentTransactions={recentTransactions}
                onTransferOpen={() => setIsTransferOpen(true)}
                onRechargeOpen={() => setIsRechargeOpen(true)}
                onDemanderOpen={() => setIsDemanderOpen(true)}
              />
            )}

            {activeSection === 'cards' && <DashboardCardsSection />}

            {(activeSection === 'transactions' || activeSection === 'transfers' || activeSection === 'support') && (
              <DashboardPlaceholderSection
                title={sections.find((section) => section.key === activeSection)?.label}
              />
            )}
          </div>
        </div>
      </main>

      {isTransferOpen && (
        <TransferPopup onClose={() => setIsTransferOpen(false)} />
      )}

      {isRechargeOpen && <RechargePopup onClose={() => setIsRechargeOpen(false)} />}

      {isDemanderOpen && <DemanderPopup onClose={() => setIsDemanderOpen(false)} />}

      <footer>
        <p>&copy; 2026 E-Wallet. Tous droits réservés.</p>
      </footer>
    </>
  )
}