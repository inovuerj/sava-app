import './Header.css';

function Header() {
  return (
    <header>
      <div class="header-top"></div>

      <div class="header">
        <div class="container-header">
          <a href="/" class="logo">
            <img src="logo.gif" alt="SAVA3"></img>
          </a>
          <div class="header-right">
            <a class="active" href="#home">
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
