
import '../styles/App.scss';

function App() {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio'
  ];

  const renderTasks = () => {
    return tasks.map(task => {
      if (task.completed === true) {
        return (<li key={tasks.id} className="tachado"> {task}</li >

        )

      } else {
        return (<li key={tasks.id}> {task}</ li>
        );
        return (
          <div><h1>
            <li>{renderTasks}</li></h1></div>

        )
      };








    }


      export default App;

