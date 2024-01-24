import React, {useState} from "react";

function ListHeader({ listName }) { 
  return (
  <div>
    <h1 className="list-header">
        {listName}
    </h1>
  </div>
  )
}

export default ListHeader;
