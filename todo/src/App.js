import React, { useReducer } from "react";
import { initialTasks, reducer } from "./reducers/todoReducer";
import List from "./components/List";
import './App.css';

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <List tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
