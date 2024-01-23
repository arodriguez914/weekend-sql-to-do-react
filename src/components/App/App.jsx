import { useState, useEffect } from "react";
import ListHeader from "../ListHeader/ListHeader";
import ListItem from "../ListItem/ListItem";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState('')
  const [tools, setTools] = useState('')

  const fetchData = () => {
    axios({
      method: "GET",
      url: "/todo",
    })
      .then((response) => {
        console.log(response.data)
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  fetchData();

  useEffect(() => {
    fetchData()
  }, [])


return (
  <div className="app">
    <ListHeader listName={"To Do List"} />
    <ListItem />
  </div>
);
}

export default App;
