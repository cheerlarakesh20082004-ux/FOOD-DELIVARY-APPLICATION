import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiRequest } from '../api'

export default function LoginPage({ onLoginSuccess }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      localStorage.setItem('foodexpress_token', data.token)
      localStorage.setItem('foodexpress_user', JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        role: data.role
      }))

      if (onLoginSuccess) {
        onLoginSuccess({ fullName: data.fullName, email: data.email, role: data.role })
      }

      navigate('/')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="brand-mark">F</span>
          <h2>Welcome back</h2>
          <p>Sign in to continue your food journey.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} required />
          </label>

          <div className="form-row">
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          {error && (
            <p style={{ color: '#d93025', margin: '0 0 10px' }}>{error}</p>
          )}

          <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="auth-footer">
          New here? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  )
}
