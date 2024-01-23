import { useState, useEffect } from "react";
import ListHeader from "../ListHeader/ListHeader";
import ListItem from "../ListItem/ListItem";
import { fetchTodo } from "../../todoApi/todo.api";

function App() {
  const [todos, setTodos] = useState([])
  

  const refreshTodos = () => {
    fetchTodo()
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
  <ListItem />
  </div>
);
}

export default App;
