import React, { useState } from "react";
import "./Todo.css";
function TODO({ text, setitems, items,uniqueKey }) {
  const [isChecked, setisChecked] = useState(false)
  const completehandle = () => {
    setisChecked((rightValue)=>!rightValue);
    //items traverse, unique match uniqueKey, if match item.completed = !item.completed; 
    items.forEach((item)=>{
      if(item.id===uniqueKey){
        item.completed=!item.completed;
      }
    });


    setitems(
      items.map((item) => {
        if (item.id === items.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  // ={`todo-item ${items.completed ? "completed": ""}`}
  return (
    <div className="list">
      <div className="TODO">
       <ul className="todo-item"> {text}</ul>
        <input type="checkbox" value={isChecked} onChange={completehandle} className="box" />
      </div>
    </div>
  );
}

export default TODO;
