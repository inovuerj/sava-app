import './Login.css';

function Login() {
  return (
    <div className="texto">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="login-box">
            <div className="login-box-header">
              <p>Entrar</p>
            </div>
            <div className="login-box-body">
              <form method="POST" action="/login">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    id="remember"
                    type="checkbox"
                    name="remember"
                    className="form-check-input"
                  />
                  <label htmlFor="remember" className="form-check-label">
                    Manter conectado
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: '0' }}>
                  <button type="submit">Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
