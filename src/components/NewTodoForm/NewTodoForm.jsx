import React, { useState } from "react";
import axios from "axios";

function NewTodoForm() {
  const [newItem, setNewItem] = useState("");

  //called when submit is pressed
  const addItem = (newTodo) => {
    //POST todo to server
    axios({
      method: "POST",
      url: "/api/todo",
      data: { task: newTodo },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Called when submit button is pressed
  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row"></div>
      <label htmlFor="item">New Task</label>
      <input
        required
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        type="text"
        id=" item"
      />
      <input className="btn" value="Submit" type="submit" />
    </form>
  );
}

export default NewTodoForm;
