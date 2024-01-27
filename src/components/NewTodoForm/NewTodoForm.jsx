import React, { useState } from "react";
import { postTodo } from "../../todoApi/todo.api";

function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  // Called when submit button is pressed
  const handleSubmit = (event) => {
    event.preventDefault();
    //POST todo to server
    postTodo({ task: newItem })
      .then((response) => {
        console.log(response);
        props.refreshTodos();
        setNewItem('')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
      <label htmlFor="item">New Task</label>
      <input
        required
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        type="text"
        id=" item"
      />
      <input className="btn" value="Submit" type="submit" />
      </div>
    </form>
  );
}

export default NewTodoForm;
