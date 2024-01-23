import { useState } from "react";


function Modal() {
    const mode = "create";
    const editMode = mode === 'edit' ? true : false
    const [data, setData] = useState({
        task: "",
        tools: "",
    })

  const handleChange = (event) => {
    console.log("changing", event)
    const {name, value} = event.target

    setData(data => ({
        ...data,
        [name] : value

    }))
    console.log(data);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button>X</button>
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
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
