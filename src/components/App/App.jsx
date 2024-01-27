import { useState, useEffect } from "react";
import ListHeader from "../ListHeader/ListHeader";
import TodoList from "../TodoList/TodoList";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import { fetchTodo } from "../../todoApi/todo.api";

function App() {
  let [todoList, setTodoList] = useState([{ task: "get haircut" }]);

  const refreshTodos = () => {
    const todoPromise = fetchTodo();
    todoPromise
      .then((response) => {
        console.log(response.data);
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("HI");
    refreshTodos();
  }, []);

  return (
    <div className="app">
      <NewTodoForm refreshTodos={refreshTodos} />
      <ListHeader className="header" listName={"To Do List"} />
      <TodoList todoList={todoList} refreshTodos={refreshTodos} />
    </div>
  );
}

export default App;
