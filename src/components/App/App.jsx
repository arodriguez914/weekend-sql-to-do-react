import { useState, useEffect } from "react";
import ListHeader from "../ListHeader/ListHeader";
import ListItem from "../ListItem/ListItem";
import { fetchTodo } from "../../todoApi/todo.api";

function App() {
  const [todos, setTodos] = useState([])
  

  const refreshTodos = () => {
    const todoPromise = fetchTodo();
    todoPromise
      .then((response) => {
        console.log(response.data)
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    refreshTodos()
  }, [])

return (
  <div className="app">
  <ListHeader listName={"To Do List"} />
  <ListItem todos={todos} refreshTodos={refreshTodos}/>
  </div>
  );
}

export default App;
