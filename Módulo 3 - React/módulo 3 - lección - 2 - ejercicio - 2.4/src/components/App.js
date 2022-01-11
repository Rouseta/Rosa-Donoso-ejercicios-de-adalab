import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(true);

  const handleDarkMode = () => {
    console.log("click");
    setDarkModeOn(!darkModeOn);
  };
  const renderParagraph = () => {
    if (darkModeOn === true) {
      return (
        <div>
          <p className="paragraph ">Tienes activado el dark mode</p>
          <p className="paragraph darkMode">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            modi expedita, minus, quas nesciunt eius optio facilis tenetur
            provident beatae, corporis non voluptas. Fugit nisi ex provident
            quasi vel eligendi.
          </p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div>
        <button className="onOff" onClick={handleDarkMode}>
          Activar/Desactivar Dark Mode
        </button>
        {renderParagraph()}
        {/* <p className="paragraph">Tienes activado el dark mode</p> */}
      </div>
    </div>
  );
}

export default App;
