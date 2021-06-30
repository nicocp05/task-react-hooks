import { useState, useEffect } from 'react';
import TaskRow from './components/TaskRow';
import TaskBanner from './components/TaskBanner';
import TaskCreator from './components/TaskCreator';
import VisibilityControl from './components/VisibilityControl';

function App() {

  const [taskItems, setTaskItems] = useState([]);

  const [taskCompleted, setTaskCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setTaskItems([
        { id: 1, name: 'Task One', done: false },
        { id: 2, name: 'Task Two', done: false },
        { id: 3, name: 'Task Three', done: true }
      ])
      setTaskCompleted(true);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems])

  const createNewTask = (taskName) => {
    if (!taskItems.find(t => t.id === taskName.id)) {
      setTaskItems([...taskItems, {id: (taskItems.length) + 1, name: taskName, done: false}])
    }
  }

  const toggleTask = (task) => {
    setTaskItems(taskItems.map(t => (t.id) === task.id ? {...t, done: !t.done } : t))
  }

  const taskTableRow = (doneValue) => (
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.id} toggleTask={toggleTask} />
  )))

  return (
    <div>
      <TaskBanner taskItems={taskItems}/>
      <TaskCreator callback={createNewTask} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRow(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl description="Completed task" isChecked={taskCompleted} callback={checked => setTaskCompleted(checked)} />
      </div>
      {
        taskCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRow(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
