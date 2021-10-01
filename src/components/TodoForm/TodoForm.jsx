import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const changeValue = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nueva tarea:</label>
      <textarea
        onChange={changeValue}
        value={newTodoValue}
        placeholder="Escribe tu tarea..."
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={handleCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
