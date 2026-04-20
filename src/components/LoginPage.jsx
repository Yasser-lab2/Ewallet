import { useState } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
import '../styles/LoginPage.css'

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleFieldChange = (field) => (value) => {
    setCredentials((prev) => ({ ...prev, [field]: value }))
  }

  const handleLoginSubmit = () => {
    setIsSubmitting(true)
    setFeedbackMessage('')

    const isComplete = credentials.email.trim() !== '' && credentials.password.trim() !== ''
    if (!isComplete) {
      setFeedbackMessage('Veuillez renseigner votre email et votre mot de passe.')
      setIsSubmitting(false)
      return
    }

    setFeedbackMessage('Connexion simulee avec succes.')
    setIsSubmitting(false)
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">

          <LoginForm
            email={credentials.email}
            password={credentials.password}
            isSubmitting={isSubmitting}
            feedbackMessage={feedbackMessage}
            onEmailChange={handleFieldChange('email')}
            onPasswordChange={handleFieldChange('password')}
            onSubmit={handleLoginSubmit}
          />

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