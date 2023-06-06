import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <div>
      <h1>Tasks</h1>
      {/* <TaskList /> */}
      <CreateTask />
    </div>
  );
}
