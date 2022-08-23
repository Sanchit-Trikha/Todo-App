import React from "react";
import "./Button.css";
function Button({Allhandle, deletehandle}) {
  console.log(deletehandle,"deleteHandle");
  return (
    <div className="button">
      <div className="all">
        <button class="filter-active" href="#/active" onClick={Allhandle}>
          All
        </button>
      </div>
      <div className="completed">
        <button class="filter-active" href="#/active">
          Completed
        </button>
      </div>
      <div className=" active">
        <button class="filter-active" href="#/active">
          Active
        </button>
      </div>
      <div className="clear_all">
        <button class="filter-active" onClick={deletehandle}>
          Clear all
        </button>
      </div>
    </div>
  );
}

export default Button;
