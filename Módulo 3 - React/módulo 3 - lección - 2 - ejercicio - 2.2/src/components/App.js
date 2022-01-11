import "../styles/App.scss";

const App = () => {
  const handleButton = (ev) => {
    console.log('El botón ha sido pulsado');
    console.log('El evento lanzado es: ', ev);
  };
  return (
    <div>
      <button onClick={handleButton}>Púlsame</button>
    </div>
  );
}

export default App;
