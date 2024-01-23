import React from "react";
import TickIcon from "../TickIcon/TickIcon";

function ListItem( {} ) {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{ }</p>
      </div>
      <div className="button-container"></div>
      <button className="edit">EDIT</button>
      <button className="delete">DELETE</button>
    </li>
  );
}

export default ListItem;
