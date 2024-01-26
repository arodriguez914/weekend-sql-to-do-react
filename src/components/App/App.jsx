import { useState, useEffect } from "react";
import ListHeader from "../ListHeader/ListHeader";
import TodoList from "../TodoList/TodoList";
import { fetchTodo } from "../../todoApi/todo.api";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const refreshItems = () => {
    const newItemPromise = fetchTodo();
    newItemPromise
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    refreshItems();
  }, []);


  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="app">
      {/* <ListItem todos={todos} refreshTodos={refreshTodos}/> */}
      {/* <ListForm /> */}
      <NewTodoForm />
      <ListHeader className="header" listName={"To Do List"} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
