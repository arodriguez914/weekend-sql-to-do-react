import React, {useState} from "react";
import TickIcon from "../TickIcon/TickIcon";
import Modal from "../Modal/Modal";
import { deleteTodo, updateTodo } from "../../todoApi/todo.api";

function ListItem( {todos, refreshTodos} ) {
    const [showModal, setShowModal] = useState(false)
    const handleClickDelete = (toDoId) => {
        console.log("DELETE ID: ", toDoId);
 
        deleteTodo(toDoId)
          .then((response) => {
            refreshToDoList();
          })
          .catch((error) => {
            console.log("Error in AXIOS Delete: ", error)
          });
      } 
    
      const updateTodo = (toDoId) => {
        updateTodo(toDoId)
          .then((response) => {
            refreshToDos();
          })
          .catch((error) => {
            console.error("Error in AXIOS Put: ", error);
          })
      }

  return (
    <div>
        
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{ }</p>
      </div>
      <div className="button-container">
      <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
      <button className="delete">DELETE</button>
      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal}/>}
    </li>
    </div>
  );
}

export default ListItem;
