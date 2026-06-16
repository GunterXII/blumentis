import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveAdminToken } from '../lib/adminAuth'

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .al-root {
    min-height: 100vh; background: #080808;
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Sans', sans-serif; padding: 24px;
  }

  .al-card {
    background: #0D0D0D; border: 1px solid #1A1A1A;
    border-radius: 16px; width: 100%; max-width: 420px;
    padding: 48px 40px;
  }

  .al-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px; letter-spacing: 3px;
    color: #F0EDE8; margin-bottom: 4px;
  }
  .al-logo span { color: #E63946; }

  .al-subtitle {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: #333; margin-bottom: 40px;
  }

  .al-label {
    font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: #555; margin-bottom: 8px; display: block;
  }

  .al-input {
    width: 100%; background: #0A0A0A; border: 1px solid #1A1A1A;
    border-radius: 8px; color: #F0EDE8;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
    padding: 14px 16px; outline: none;
    transition: border-color 0.2s; margin-bottom: 24px;
  }
  .al-input:focus { border-color: #E63946; }
  .al-input::placeholder { color: #333; }

  .al-btn {
    width: 100%; background: #E63946; color: #0D0D0D; border: none;
    padding: 15px; border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-size: 13px;
    letter-spacing: 2px; text-transform: uppercase; font-weight: 500;
    cursor: pointer; transition: opacity 0.2s;
  }
  .al-btn:hover { opacity: 0.88; }
  .al-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .al-error {
    background: #E6394611; border: 1px solid #E6394633;
    border-radius: 8px; padding: 12px 16px;
    font-size: 13px; color: #E63946; margin-bottom: 20px;
  }

  .al-back {
    display: block; text-align: center; margin-top: 20px;
    font-size: 12px; color: #333; text-decoration: none;
    transition: color 0.2s;
  }
  .al-back:hover { color: #888; }
`

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Accesso negato')
        return
      }

      saveAdminToken(data.token)
      navigate('/admin', { replace: true })
    } catch {
      setError('Errore di connessione. Riprova.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{css}</style>
      <div className="al-root">
        <div className="al-card">
          <div className="al-logo">Blu<span>Mentis</span></div>
          <div className="al-subtitle">Admin Dashboard</div>

          {error && <div className="al-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <label className="al-label" htmlFor="pwd">Password</label>
            <input
              id="pwd"
              className="al-input"
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button className="al-btn" type="submit" disabled={loading || !password}>
              {loading ? 'Accesso...' : 'Accedi →'}
            </button>
          </form>

          <a href="/" className="al-back">← Torna al sito</a>
        </div>
      </div>
    </>
  )
}
