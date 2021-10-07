//import "./App.css";
import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch/TodoSearch.jsx";
import { TodoList } from "../components/TodoList/TodoList.jsx";
import { TodoItem } from "../components/TodoItem/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../components/Modal/Modal.jsx";
import TodoForm from "../components/TodoForm/TodoForm.jsx";
import TodoLoader from "../Utils/TodosLoading.jsx";
import { TodosError } from "../Utils/TodosError.jsx";
import { EmptyTodos } from "../Utils/EmptyTodos.jsx";
import { TodoHeader } from "../components/TodoHeader/TodoHeader.jsx";
import { useTodos } from "./useTodos.jsx";
import { EmptySearchResult } from "../Utils/EmptySearchResults.jsx";
import { ChangeAlert } from "../components/ChangeAlert/changeAlert.jsx";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeATodo,
    deleteATodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    synchronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      {/* Todo header le comparte las props usando react.children y react cloneelement */}
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodoLoader />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptySearchResult searchValue={searchValue} />}
        //Usando las render Props
        render={(todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeATodo(index)}
            onDelete={() => deleteATodo(index)}
          />
        )}
      >
        {/* Usando render Function */}
        {/* {(todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeATodo(index)}
            onDelete={() => deleteATodo(index)}
          />
        )} */}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

      <ChangeAlert synchronize={synchronizeTodos} />
    </React.Fragment>
  );
}

export default App;
