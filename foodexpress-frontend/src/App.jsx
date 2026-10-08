import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function AppLayout() {
  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">F</span>
          <span>FoodExpress</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>

        <div className="nav-actions">
          <NavLink className="btn btn-light" to="/login">
            Login
          </NavLink>
          <NavLink className="btn btn-primary" to="/register">
            Sign Up
          </NavLink>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
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
