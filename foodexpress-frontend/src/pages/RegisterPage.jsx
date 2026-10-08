import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiRequest } from '../api'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
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
      await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      navigate('/login')
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="brand-mark">F</span>
          <h2>Create account</h2>
          <p>Join FoodExpress and enjoy delicious meals.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" name="fullName" placeholder="John Doe" value={form.fullName} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="Create a password" value={form.password} onChange={handleChange} required />
          </label>

          <label>
            Confirm password
            <input type="password" name="confirmPassword" placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange} required />
          </label>

          {error && (
            <p style={{ color: '#d93025', margin: '0 0 10px' }}>{error}</p>
          )}

          <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}
