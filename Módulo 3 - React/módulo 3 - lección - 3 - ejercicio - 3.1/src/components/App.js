import "../styles/App.scss";
import { useState } from "react";

function App() {

  const [ingredientesCebolleros, setIngredientesCebolleros] = useState(true);




  const handleTortilla = (event) => {
    setIngredientesCebolleros(event.target.checked);
    console.log(setIngredientesCebolleros);
  }
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor="macarrones">Macarrones</label>
        <input type="checkbox" name="gitWrap" id="macarrones" onChange={handleTortilla} />
        <label htmlFor="patatas">Patatas</label>
        <input type="checkbox" name="gitWrap" id="patatas" onChange={handleTortilla} />
        <label htmlFor="nueces">Nueces</label>
        <input type="checkbox" name="gitWrap" id="nueces" onChange={handleTortilla} />
        <label htmlFor="huevos">Huevos</label>
        <input type="checkbox" name="gitWrap" id="huevos" onChange={handleTortilla} />
        <label htmlFor="cebolla">Cebolla</label>
        <input type="checkbox" name="gitWrap" id="cebolla" onChange={handleTortilla} />
        <label htmlFor="cerveza">Cerveza</label>
        <input type="checkbox" name="gitWrap" id="cerveza" onChange={handleTortilla} />

      </form>

    </div>
  );
}

export default App;
