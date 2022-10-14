import { useState } from "react";
import { TodoList } from "./TodoList";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, settodoList] = useState([1, 2, 3]);
  
  const addTodo = () => {
    settodoList([...todoList, todo]);
    setTodo("");
  };

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React To do App</h1>
      <div className="card">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyUp={(e) => { e.key === 'Enter' && addTodo() }}
        />

        <button onClick={addTodo}>Add to do</button>

        <TodoList todoList={todoList} msg="HELLO!"/>

      </div>
    </div>
  );
}

export default App;
