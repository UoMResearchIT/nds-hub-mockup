import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ToDoList } from "./ToDoList";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setToDoList] = useState([]);

  const addTodo = () => {
    setToDoList([...todoList, todo]);
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
        <ToDoList todoList={todoList} />

        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        ></input>

        <button onClick={addTodo}>add</button>
      </div>
    </div>
  );
}

export default App;
