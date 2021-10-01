import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* && Es un short circuit evaluation
          if(condition){
            (this part will execute)
      } */}
      <FontAwesomeIcon
        icon={faCheck}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </FontAwesomeIcon>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        x
      </FontAwesomeIcon>
    </li>
  );
}

export { TodoItem };
