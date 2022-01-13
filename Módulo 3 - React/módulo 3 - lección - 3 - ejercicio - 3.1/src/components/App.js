import "../styles/App.scss";
import { useState } from "react";

function App() {


  const [ingredientes, setIngredientes] = useState(true);




  const handleTortilla = (event) => {
    setIngredientes(event.target.checked);

  }




  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor="macarrones">Macarrones</label>
        <input type="checkbox" name="gitWrap" id="macarrones" onChange={handleTortilla} />
        <label htmlFor="patatas">Patatas</label>
        <input type="checkbox" name="gitWrap" id="patatas" className="ingredientesCebollerosClass" onChange={handleTortilla} />
        <label htmlFor="nueces">Nueces</label>
        <input type="checkbox" name="gitWrap" id="nueces" onChange={handleTortilla} />
        <label htmlFor="huevos">Huevos</label>
        <input type="checkbox" name="gitWrap" id="huevos" className="ingredientesCebollerosClass" onChange={handleTortilla} />
        <label htmlFor="cebolla">Cebolla</label>
        <input type="checkbox" name="gitWrap" id="cebolla" className="ingredientesCebollerosClass" onChange={handleTortilla} />
        <label htmlFor="cerveza">Cerveza</label>
        <input type="checkbox" name="gitWrap" id="cerveza" onChange={handleTortilla} />

      </form>

    </div>
  );
}


export default App;
