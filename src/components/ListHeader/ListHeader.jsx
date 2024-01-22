import React from "react";

function ListHeader({ listName }) {
  
  return (
  <div>
    <h1 className="list-header">{listName}</h1>
    <div className='button-container'>
        <button className="create">ADD NEW</button>
    </div>
  </div>
  )
}

export default ListHeader;
