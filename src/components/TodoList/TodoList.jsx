import React from "react";
import "./TodoList.css";

function TodoList(props) {
  //Independientemente venga desde render prop o render function
  const renderSource = props.children || props.render;

  return (
    <section className="todoList-container">
      {/* Hubo un errror */}
      {props.error && props.onError()}
      {/* Cargando */}
      {props.loading && props.onLoading()}
      {/* No hay todos */}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {/* No se han encontrado en la busqueda */}
      {props.totalTodos > 0 &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults()}
      {/* Mapeando los todos ya cuando cargan */}
      <ul>
        {!props.loading &&
          props.searchedTodos.map((todo, index) => renderSource(todo, index))}
      </ul>
    </section>
  );
}

export { TodoList };
