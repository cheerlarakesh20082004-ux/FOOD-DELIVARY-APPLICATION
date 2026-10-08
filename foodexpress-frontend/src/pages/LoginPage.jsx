export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="brand-mark">F</span>
          <h2>Welcome back</h2>
          <p>Sign in to continue your food journey.</p>
        </div>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>

          <div className="form-row">
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            Login
          </button>
        </form>

        <p className="auth-footer">
          New here? <a href="/register">Create account</a>
        </p>
      </div>
    </div>
  )
}
