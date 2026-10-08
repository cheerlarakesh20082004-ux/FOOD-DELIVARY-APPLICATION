import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function AppLayout() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('foodexpress_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('foodexpress_token')
    localStorage.removeItem('foodexpress_user')
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">F</span>
          <span>FoodExpress</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          {!user && <NavLink to="/login">Login</NavLink>}
          {!user && <NavLink to="/register">Register</NavLink>}
          {user && <Link to="/">Hi, {user.fullName || user.email}</Link>}
        </nav>

        <div className="nav-actions">
          {!user ? (
            <>
              <NavLink className="btn btn-light" to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-primary" to="/register">
                Sign Up
              </NavLink>
            </>
          ) : (
            <button className="btn btn-light" type="button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
