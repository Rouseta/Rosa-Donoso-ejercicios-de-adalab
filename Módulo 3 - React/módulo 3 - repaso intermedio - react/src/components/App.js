import { useState } from 'react'
import '../styles/App.scss';
// import callToApi from '../services/api'
import ls from '../services/localStorage';
import agendaData from '../data/contacts.json'



function App() {


  //Gestionar búsqueda
  const [search, setSearch] = useState("");
  const [data, setData] = useState(agendaData);
  const [newContact, setNewContact] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  })
  const handleChangeSearch = (event) => {
    setSearch(event.currentTarget.value)

  }

  const handleChangeName = (event) => {
    setNewContact({
      ...newContact,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };


  const handleClick = (event) => {
    event.preventDefault()
    setData([...data, newContact]);
    setNewContact({
      name: '',
      lastname: '',
      phone: '',
      email: '',

    })
  }



  //Filtrar los datos de búsqueda
  const filteredData = data.filter((oneContact) => oneContact.name.toLowerCase().includes(search.toLowerCase()) || oneContact.lastname.toLowerCase().includes(search.toLowerCase())

  )
  //Pintar resultados de búsqueda
  const renderData = filteredData.map((contact, index) => (
    <li key={index} className="contact__item">
      <p className="contact__name">
        <label className="contact__label">Nombre:</label>{contact.name} {contact.lastname}
      </p>
      <p className="contact__phone">
        <label className="contact__label">Teléfono:</label>
        <a href={`tel:${contact.phone}`} title="Pulsa aquí para llamar a Lola">
          {contact.phone}

        </a>
      </p>
      <p className="contact__mail">
        <label className="contact__label">Email:</label>
        <a href={'mailto:' + contact.email} title="Pulsa aquí para escribir a Lola">
          {contact.email}

        </a>
      </p>
    </li>



  ))




  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            value={search}
            onChange={handleChangeSearch}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">
          {renderData}
        </ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={newContact.name}
            onChange={handleChangeName}

          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            value={newContact.lastname}
            onChange={handleChangeName}

          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={newContact.phone}
            onChange={handleChangeName}

          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleChangeName}

          />
          <input className="new-contact__btn" type="submit" value="Añadir" onClick={handleClick} />
        </form>
      </main>
    </div>
  );
}

export default App;
