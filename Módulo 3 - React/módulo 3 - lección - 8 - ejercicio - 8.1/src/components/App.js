
import { Routes } from 'react-router-dom';
import '../styles/App.scss';
import { Route, } from 'react-router-dom';
const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/contacto">
          <h2>Este título solo aparece cuando la usuaria entra en la página de contacto</h2>
        </Route>
      </Routes>

      <nav>
        <ul>
          <li>
            <a href="/#/">Ir al inicio</a>
          </li>
          <li>
            <a href="/#/contacto">Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;


