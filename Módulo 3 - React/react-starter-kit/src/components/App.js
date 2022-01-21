
// import '../styles/App.scss';

// Fichero src/components/App.js

import { Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Switch>
        <Route path="/contacto">
          <h2>Este título solo aparece cuando la usuaria entra en la página de contacto</h2>
        </Route>
      </Switch>


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