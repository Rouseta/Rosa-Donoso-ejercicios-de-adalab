// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');




  // useEffect

  useEffect(() => {

    callToApi(searchName).then(response => {

      setCharacters(response);
    });

  }, [searchName]);

  // Eventos

  const handleSubmit = ev => {

    ev.preventDefault();

  };
  const handleSearchName = ev => {

    setSearchName(ev.target.value);
  };


  // Renderizado

  const renderCharacters = () => {

    return characters.map((character, index) => {

      return <li key={index}>Nombre: {character.name}</li>;
    });
  };


  return (
    <div>
      <h1>Llamar al API de series:</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Busca por el nombre de tu serie favorita:</label>
        <input type="text" name="name" id="name" value={searchName} onChange={handleSearchName}
        />
        <input type="submit" value="Enviar" onClick={renderCharacters} />
      </form>

      <h2>Series con el nombre: {searchName}</h2>
      <ul>{renderCharacters()}</ul>
    </div>
  );
}
  ;

export default App;