import './Login.css';

function Login() {
  return (
    <div className="texto">
      <div className="container">
        <h1>Login</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="login-box">
            <div className="login-box-header">
              <p>Entrar</p>
            </div>
            <div className="login-box-body">
              <form method="POST" action="/login">
                <div className="form-group">
                  <label htmlFor="email" style={{ textAlign: 'right' }}>
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email"
                    required
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="password" style={{ textAlign: 'right' }}>
                    Senha
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="current-password"
                    required
                  ></input>
                </div>

                <div className="form-group">
                  <button type="submit" style={{ padding: '10px 24px' }}>
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <a href="/">
          <button>Voltar</button>
        </a>
      </div>
    </div>
  );
}

export default Login;
