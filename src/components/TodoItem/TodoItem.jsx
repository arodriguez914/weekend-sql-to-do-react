import { deleteTodo } from "../../todoApi/todo.api";
import { updateTodo } from "../../todoApi/todo.api";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function TodoItem({ taskData, refreshTodos }) {
  // DELETE
  const handleClickDelete = (id) => {
    // ID item
    console.log("DELETE - taskId:", id);
    // MAKE Axios Call
    deleteTodo(id)
      .then((response) => {
        refreshTodos();
      })
      .catch((err) => {
        console.error("ERROR:", err);
      });
  };

  // PUT
  const handleClickToggle = (id) => {
    updateTodo(id)
      .then((response) => {
        refreshTodos();
      })
      .catch((err) => {
        console.error("ERROR:", err);
      });
  };

  return (
    <Grid item xs={8} md={6} lg={3}>
      <div>
        <Box
          sx={{
            display: "listitem",
            borderColor: "primary.main",
          }}
        >
          <span>
            <input
              type="checkbox"       
              id="task"
              name="task"
              value={taskData.id}
              onChange={(e) => handleClickToggle(taskData.id, e.target.checked)} 
            />
            <label htmlFor="task"> {taskData.task}</label>
            <Button
              onClick={(event) => handleClickDelete(taskData.id)}
              className="btn btn-danger"
              variant="contained"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </span>
        </Box>
      </div>
    </Grid>
  );
}

export default TodoItem;
