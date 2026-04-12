export default function Navbar() {
  return (
    <header>
      <nav className="navbar">

        <a href="/" className="logo">
          <img src="/assets/e-wallet-logo.avif" alt="Logo E-Wallet" />
        </a>

        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Fonctionnalités</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </nav>
    </header>
  )
}