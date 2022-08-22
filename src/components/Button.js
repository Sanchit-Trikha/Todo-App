import React from "react";
import "./Button.css";
function Button(Allhandle, deletehandle) {
  return (
    <div className="button">
      <div className="all">
        <a class="filter-active" href="#/active" onClick={Allhandle}>
          All
        </a>
      </div>
      <div className="completed">
        <a class="filter-active" href="#/active">
          Completed
        </a>
      </div>
      <div className=" active">
        <a class="filter-active" href="#/active">
          Active
        </a>
      </div>
      <div className="clear_all">
        <a class="filter-active" href="#/active" onClick={deletehandle}>
          Clear all
        </a>
      </div>
    </div>
  );
}

export default Button;
