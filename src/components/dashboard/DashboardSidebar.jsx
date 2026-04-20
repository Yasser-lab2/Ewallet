export default function DashboardSidebar({ sections, activeSection, onSectionChange }) {
  return (
    <aside className="dashboard-sidebar">
      <nav className="sidebar-nav">
        <ul>
          {sections.map((section, index) => {
            const isSupport = section.key === 'support'
            const isSeparatorBefore = index === 4

            return (
              <li key={section.key} className={activeSection === section.key ? 'active' : ''}>
                {isSeparatorBefore ? <div className="separator" /> : null}
                <button
                  type="button"
                  className="sidebar-link"
                  onClick={() => onSectionChange(section.key)}
                >
                  <i className={section.icon} />
                  <span>{isSupport ? 'Aide & Support' : section.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
