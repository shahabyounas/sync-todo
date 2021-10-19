import TodoList from './pages/todoList'
import { TodoContextProvider } from './context/todo-context'
import './App.css';
import './assets/styles/index.scss'

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
