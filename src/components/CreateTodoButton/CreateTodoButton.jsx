import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const toggleModal = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={() => toggleModal()}>
      {`${props.openModal ? "×" : "+"}`}
    </button>
  );
}

export { CreateTodoButton };
