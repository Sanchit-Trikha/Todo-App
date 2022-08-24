import React from "react";
import "./Button.css";
function Button({ deletehandle, setstatus }) {
  // console.log(deletehandle,"deleteHandle");
  const statushandler = (e) => {
    setstatus(e.target.value);
  };
  return (
    <div className="button">
      <div className="all">
        <button class="filter-active" onClick={statushandler} value="All">
          All
        </button>
      </div>
      <div className="completed">
        <button class="filter-active" onClick={statushandler} value="Completed">
          Completed
        </button>
      </div>
      <div className=" active">
        <button class="filter-active" onClick={statushandler} value="Active">
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
