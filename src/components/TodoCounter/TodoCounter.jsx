import React from "react";
import "./TodoCounter.css";

// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter  ${loading && "TodoCounter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  );
}

export { TodoCounter };
