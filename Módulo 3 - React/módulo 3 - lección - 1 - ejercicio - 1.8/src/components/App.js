import logo from '../images/adalab-logo.png'
import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <a href="https://adalab.es/">
          <img src={logo} title="Adalab" alt="Logo de Adalab" /></a>
        <nav className="navigation">
          <ul className="list">
            <li><a className="menu-link" title="Blog" href="#">Blog</a></li>
            <li><a className="menu-link" title="Contacto" href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <h1 className="title">Creando Diversidad Digital</h1>
      </main>
    </div>

  );
}

export default App;
