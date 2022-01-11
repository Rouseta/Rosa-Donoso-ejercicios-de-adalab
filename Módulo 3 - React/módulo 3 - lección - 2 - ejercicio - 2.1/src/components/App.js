import "../styles/App.scss";

function App() {
  const getHola = (text) => {
    return <p>{text}</p>
  }
  const name = "guapona";
  const divClass = "container";
  const greeting = "¿Cómo estás?";
  const pClass = "paragraph";
  return (
    <div className={divClass}>
      <h1>¡Hola, {name}!</h1>
      <p className={pClass}>{greeting}</p>
      {getHola('Cómo andamios')}
    </div>

  );
}

export default App;
