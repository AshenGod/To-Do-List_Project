import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
    <h1 id='title'>Tasks</h1>
    <TaskList/>
    <br/>
    <br/>
    <AddTask/>
    </>
  )
}
    

export default App;
