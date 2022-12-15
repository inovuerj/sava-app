import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-top"></div>

      <div className="header">
        <div className="container-header">
          <a href="/" className="logo">
            <img src="logo.gif" alt="SAVA3"></img>
          </a>
          <div className="header-right">
            <a className="active" href="/login">
              Acessar
            </a>
            <a href="#contact">Cadastre-se</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
