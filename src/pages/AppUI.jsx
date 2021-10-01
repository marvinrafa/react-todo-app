import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch/TodoSearch.jsx";
import { TodoList } from "../components/TodoList/TodoList.jsx";
import { TodoItem } from "../components/TodoItem/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../components/Modal/Modal.jsx";
import { TodoContext } from "../TodoContext/index.jsx";
import TodoForm from "../components/TodoForm/TodoForm.jsx";
import TodoLoader from "../widgets/TodosLoading.jsx";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeATodo,
    deleteATodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodoLoader></TodoLoader>}
        {error && <p style={{ textAlign: "center" }}>Ha ocurrido un error</p>}
        {!loading && !searchedTodos.length && (
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Crea tus tareas haciendo clic en +
          </p>
        )}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeATodo(index)}
            onDelete={() => deleteATodo(index)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export default AppUI;
