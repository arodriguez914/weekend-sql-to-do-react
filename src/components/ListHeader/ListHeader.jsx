import React from "react";
import Modal from "../Modal/Modal";

function ListHeader({ listName }) {
  
  return (
  <div>
    <h1 className="list-header">{listName}
        <button className="create">ADD NEW</button>
    </h1>
    <Modal />
  </div>
  )
}

export default ListHeader;
