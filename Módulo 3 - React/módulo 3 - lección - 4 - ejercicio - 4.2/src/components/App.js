import { useState } from 'react'
// import { render } from 'react-dom';
import '../styles/App.scss';


function App() {


  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const renderTitle = () => <h2>Mi lista de tareas</h2>;

  const handleTask = (event) => {
    const clickedTaskId = event.target.id;
    tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
    setTasks([...tasks]);
  };

  const renderTasks = () =>
    tasks.map((task, index) => (
      <li
        key={index}
        id={index}
        onClick={handleTask}
        className={`task ${task.completed ? 'task--completed' : ''}`}
      >
        {task.task}
      </li>
    ));

  return (


    <div>
      {renderTitle()}
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;