import { useState } from "react";
import axios from 'axios';


function Modal( {mode, setShowModal, todo, props}) {
    const editMode = mode === 'edit' ? true : false
    const [data, setData] = useState({
        task: editMode ? todo.task : null,
        tools: editMode ? todo.tools : null,
    })

    const postData = (event) => {
        event.preventDefault();
        
        axios.post('/api/todo', {
            task: data.task,
            tools: data.tools
        }).then((response) => {
            // success!
            console.log("Data sent to data: ", response.data)
            // clear form after submit
            setData('');
            // fetch new data
            props.refreshTodos();
        }).catch((error) => {
            console.log("axios error:", error);
            alert("There is an error in the axios.POST!")
        })
    } 

    }

  const handleChange = (event) => {
    console.log("changing", event)
    const {name, value} = event.target

    setData(data => ({
        ...data,
        [name] : value

    }))
    console.log(data);
  

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=" Enter new task"
            name="task"
            value={data.task}
            onChange={handleChange}
          />
          <br />
          <input
            required
            maxLength={30}
            placeholder=" Enter required items"
            name="tools"
            value={data.tools}
            onChange={handleChange}
          />
          <input className={mode} type="submit" onSubmit={postData}/>
        </form>
      </div>
    </div>
  );
}

export default Modal;
