//import "./App.css";
import React from "react";
import { TodoProvider } from "../TodoContext/index.jsx";
import AppUI from "./AppUI.jsx";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Pelar papas", completed: false },
//   { text: "Llorar ahi de vez en cuando", completed: true },
//   { text: "Ninguna xd", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
