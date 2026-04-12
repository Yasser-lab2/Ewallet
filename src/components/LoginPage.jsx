import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
import '../styles/LoginPage.css'

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">

          <LoginForm />

          <div className="hero-image">
            <img src="/assets/e-Wallet6.gif" alt="Illustration de connexion" />
          </div>

        </section>
      </main>

      <footer>
        <p>&copy; 2026 E-Wallet. Tous droits réservés.</p>
      </footer>
    </>
  )
}