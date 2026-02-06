import React, { useState } from 'react';
import { login } from './api/auth';

function App() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

  try {
  const result = await login(form);
  console.log("Logged in:", result.user); // optional debug
  window.location.href = "https://www.callofduty.com/store/cod-points";
} catch (err) {
  setError(err.message);
}

  };

  return (
    <div className="app-root">
      <img
        className="background-image"
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80"
        alt=""
        aria-hidden="true"
      />
      <div className="background-overlay" />

      <div className="scanlines" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <main className="login-shell">
        <section className="hero-panel">
          <div className="hero-tagline">
            <p className="hero-kicker">BLACK OPS ACCESS</p>
            <h1 className="hero-title">
              <span>Deploy</span> your operator
            </h1>
            <p className="hero-subtitle">
              Secure strike network login. Dark, tactical interface inspired by modern shooters.
            </p>
          </div>

          <div className="hero-meta">
            <div className="hero-pill">LIVE OPS • ONLINE</div>
            <div className="hero-avatars">
              <span className="avatar-dot" />
              <span className="avatar-dot" />
              <span className="avatar-dot" />
              <span className="avatar-text">Fireteam active</span>
            </div>
          </div>
        </section>

        <section className="login-card">
          <header className="login-header">
            <p className="login-label">LOGIN CHANNEL</p>
            <h2 className="login-title">Operative Credentials</h2>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="email" className="field-label">
                Callsign / Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={isLoading}
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="demo@demo.com"
              />
            </div>

            <div className="field-group">
              <label htmlFor="password" className="field-label">
                Clearance Key
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                disabled={isLoading}
                value={form.password}
                onChange={handleChange}
                className="field-input"
                placeholder="password"
              />
            </div>

            <div className="form-meta">
              <label className="remember-toggle">
                <input type="checkbox" disabled={isLoading} />
                <span className="remember-label">Remember on this rig</span>
              </label>

              <button
                type="button"
                className="ghost-link"
                onClick={() => window.alert('Hook your password reset flow here.')}
              >
                Forgot key?
              </button>
            </div>

            {error && <p className="alert alert-error">{error}</p>}
            {success && <p className="alert alert-success">{success}</p>}

            <button type="submit" className="primary-button" disabled={isLoading}>
              <span className="primary-glow" aria-hidden="true" />
              <span>{isLoading ? 'Authorizing…' : 'Enter Warzone'}</span>
            </button>

            <p className="helper-text">
              This is front-end only. Replace the mock login in <code>src/api/auth.js</code> with your backend
              call.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;

