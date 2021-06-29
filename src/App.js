import { useState } from 'react';
import TaskRow from './components/TaskRow';

function App() {

  const [userName, setUserName] = useState('fazt');
  const [taskItems, setTaskItems] = useState([
    { id: 1, name: 'Task One', done: false },
    { id: 2, name: 'Task Two', done: false },
    { id: 3, name: 'Task Three', done: true }
  ]);

  const toggleTask = (task) => {
    setTaskItems(taskItems.map(t => (t.id) === task.id ? {...t, done: !t.done } : t))
  }

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          <TaskRow tasks={taskItems} toggleTask={toggleTask} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
