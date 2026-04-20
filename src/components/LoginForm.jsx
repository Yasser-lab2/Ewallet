import { useState } from 'react'

export default function LoginForm({
  email,
  password,
  isSubmitting,
  feedbackMessage,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="hero-content">

      <h1>Connexion</h1>
      <p className="hero-subtitle">
        Accédez à votre E-Wallet en toute sécurité et gérez vos transactions en toute confiance.
      </p>

      <div className="login-form">

        <div className="input-group">
          <input
            id="mail"
            type="email"
            value={email}
            placeholder="Adresse e-mail"
            onChange={(event) => onEmailChange(event.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => onPasswordChange(event.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            👁
          </span>
        </div>

        <button type="button" className="btn btn-primary" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Connexion...' : 'Se connecter'}
        </button>

        {feedbackMessage ? <p>{feedbackMessage}</p> : null}

      </div>

      <p className="signup-prompt">
        Vous n'avez pas encore de compte ?{' '}
        <a href="#" className="signup-link">S'inscrire</a>
      </p>

    </div>
  )
}