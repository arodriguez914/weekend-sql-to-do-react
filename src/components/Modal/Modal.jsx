import React from "react";

function Modal() {
  const mode = "edit";

  const handleChange = () => {
    console.log( 'changing');
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>

        <form>
          <input required maxLength={30} placeholder=" Enter new task" name="title" value={""} onChange={handleChange}/>
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
