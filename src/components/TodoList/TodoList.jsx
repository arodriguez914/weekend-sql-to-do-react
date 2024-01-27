import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todoList, refreshTodos }) {
  return (
    <Grid>
      {todoList.map((taskData) => {
        return (
          <TodoItem
            key={taskData.id}
            taskData={taskData}
            refreshTodos={refreshTodos}
          />
        );
      })}
    </Grid>
  );
}

export default TodoList;
