import React from "react";
import "./Todo.css";
function TODO({ text, setitems, items, uniqueKey, isChecked, setisChecked }) {
  const completehandle = () => {
    setisChecked((rightValue) => !rightValue);
    items.forEach((item) => {
      if (item.id === uniqueKey) {
        item.completed = !item.completed;
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
  console.log(isChecked, "ischecked", uniqueKey);
  return (
    <div className="list"> 
      <div className="TODO">
        <ul className="todo-item">{text}</ul>
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onChange={completehandle}
          className="box"
        ></input>
      </div>
    </div>
  );
}

export default TODO;
