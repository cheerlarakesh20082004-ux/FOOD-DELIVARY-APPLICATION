export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="brand-mark">F</span>
          <h2>Create account</h2>
          <p>Join FoodExpress and enjoy delicious meals.</p>
        </div>

        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="John Doe" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Phone
            <input type="tel" placeholder="+91 98765 43210" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>

          <label>
            Confirm password
            <input type="password" placeholder="Repeat your password" />
          </label>

          <button type="submit" className="btn btn-primary auth-submit">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  )
}
