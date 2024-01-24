import axios from "axios";

export const fetchTodo = () => {
    return axios.get("/api/todo");
  };

export const postTodo = (taskData) => {
  return axios.post("/api/todo", taskData);
};

export const deleteTodo = (taskId) => {
  return axios.delete(`/api/todo/${taskId}`);
};

export const updateTodo = (taskId) => {
  return axios.put(`/api/todo/${taskId}`);
};