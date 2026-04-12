import { useState } from 'react'

export default function LoginForm() {

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
            placeholder="Adresse e-mail"
          />
        </div>

        <div className="input-group">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            👁
          </span>
        </div>

        <button type="button" className="btn btn-primary">
          Se connecter
        </button>

      </div>

      <p className="signup-prompt">
        Vous n'avez pas encore de compte ?{' '}
        <a href="#" className="signup-link">S'inscrire</a>
      </p>

    </div>
  )
}