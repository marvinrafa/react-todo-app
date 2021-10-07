import React from "react";
import useLocalStorage from "./useLocalStorage";

//Otros custom hook. No usaremos context porque la app no lo necesita
function useTodos() {
  //Llamando custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    synchronizeItem: synchronizeTodos,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  // Para modal
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeATodo = (key) => {
    const newTodos = [...todos];
    newTodos[key].completed = true;
    //Causando rerender de componentes por el estado de react
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ completed: false, text: text });
    //Causando rerender de componentes por el estado de react
    saveTodos(newTodos);
  };

  const deleteATodo = (key) => {
    const newTodos = [...todos];
    newTodos.splice(key, 1);
    //Causando rerender de componentes por el estado de react
    saveTodos(newTodos);
  };

  //Hook Antes de renderizar. Si no se le pasa el array de parametro, se ejecuta
  //Cada vez que se va a renderizar un componente
  //Array vacio, solo se ejecuta una vez
  //Le pasamos un .lenght de todos para que se renderice cuando cambie
  // React.useEffect(() => {
  //   console.log("use effect");
  // }, [totalTodos]);

  //Hook inmediatamente despues de renderizado
  // React.useLayoutEffect

  return {
    loading: loading,
    error: error,
    totalTodos: totalTodos,
    completedTodos: completedTodos,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    searchedTodos: searchedTodos,
    completeATodo: completeATodo,
    deleteATodo: deleteATodo,
    addTodo,
    openModal,
    setOpenModal,
    synchronizeTodos,
  };
}

export { useTodos };
