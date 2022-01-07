import '../styles/App.css';

function App() {
  return (

    <main className="page">
      <h1 className="title">Juego Piedra, Papel y Tijera</h1>

      <h2 className="title__second">Introduce aquí tu jugada</h2>

      <form>
        <select id="game" className="game js_game" name="game">
          <option className="js__piedra" value="piedra">Piedra</option>
          <option className="js__papel" value="papel">Papel</option>
          <option className="js__tijera" value="tijera">Tijera</option>
        </select>

        <input className="button js_button" value="Jugar" type="submit" />
        <input className="button js_button__reset" value="Reset" type="submit" />
        <p className="paragraph btn__js__generalresult">¡Vamos a jugar!</p>
        <p className="paragraph btn__js__playeresult">
          Jugador:
          <span className="counts__gamer js_counts__player">0</span>
        </p>
        <p className="paragraph js__computerresult">
          Computadora:
          <span className="counts__computer js-counts__computer">1</span>
        </p>

        <p className="paragraph js__totalplayed">
          Número de partidas:
          <span className="counts__computer js-counts__total">1</span>
        </p>
      </form>
    </main>



  );
}

export default App;
