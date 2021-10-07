import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const searchTodo = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      placeholder="Buscar..."
      onChange={searchTodo}
      disabled={loading}
    ></input>
  );
}

export { TodoSearch };
