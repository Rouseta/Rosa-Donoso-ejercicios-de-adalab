import { useState } from 'react'
import { render } from 'react-dom';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ]);


  const handleTasks = (event) => {
    const taskSelected = event.currentTarget.index
    const taskStatus = tasks.find(task => task.index === taskSelected.index);
    taskStatus.completed = !taskStatus.completed
    setTasks([...tasks]);
    renderTasks();

  }



  const renderTasks = () => {

    return tasks.map((task, index) => {

      return (
        <li key={index} onClick={handleTasks}>

          <h2>{tasks.task}</h2>
          <p>Estas son mis tareas: {task.completed ? 'Sí' : 'No'}</p>

        </li>
      )

    })
  }

  return (
    <div>
      <h1>Lista de tareas:</h1>
      <ul>{renderTasks()}</ul>
    </div>

  );
}

export default App;
