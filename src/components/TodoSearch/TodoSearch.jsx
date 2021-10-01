import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const searchTodo = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      placeholder="Buscar..."
      onChange={searchTodo}
    ></input>
  );
}

export { TodoSearch };
