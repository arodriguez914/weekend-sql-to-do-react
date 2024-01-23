import axios from "axios";

export const fetchTodo = () => {
    return axios.get("/todo");
  };

export const postTodo = (taskData) => {
  return axios.post("/todo", taskData);
};

export const deleteTodo = (taskId) => {
  return axios.delete(`/todo/${taskId}`);
};

export const updateTodo = (taskId) => {
  return axios.put(`/todo/${taskId}`);
};