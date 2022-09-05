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

  return (
    <div className="list">
      <div className="TODO">
        <ul className="todo-item">{text}</ul>
        <input
          type="checkbox"
          value={isChecked}
          onChange={completehandle}
          className="box"
        />
      </div>
    </div>
  );
}

export default TODO;
