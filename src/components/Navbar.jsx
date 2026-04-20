const defaultLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'A propos', href: '#' },
  { label: 'Fonctionnalites', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar({
  links = defaultLinks,
  logoHref = '/',
  logoSrc = '/assets/e-wallet-logo.avif',
  logoAlt = 'Logo E-Wallet',
  showLinks = true,
  onNavClick,
}) {
  return (
    <header>
      <nav className="navbar">

        <a href={logoHref} className="logo">
          <img src={logoSrc} alt={logoAlt} />
        </a>

        {showLinks ? (
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    if (onNavClick) {
                      onNavClick(event, link)
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="nav-links" />
        )}

      </nav>
    </header>
  )
}