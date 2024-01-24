import { useState } from "react";

function NewTodoForm( { addTodo }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(newItem)

    setNewItem("")
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
      <button className="btn">Submit</button>
    </form>
  );
}

export default NewTodoForm;
