

// Fichero src/components/App.js
// Importamos useState desde React porque lo vamos a necesitar más abajo
import { useState } from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const handleClick = () => {
    setNumberOfClicks(numberOfClicks + 1);

  }




  return (
    <div>
      {/* <h1>Contador: {numberOfClicks}</h1>

      <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}>click
      </button> */}
      <h1>Contador: el número de clicks es de {numberOfClicks}</h1>
      <button onClick={handleClick}>click y suma</button>



    </div >
  )

}




// Retornamos todo el código HTML que queremos que React pinte en la página.



export default App;