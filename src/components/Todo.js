import React from "react";
import "./Todo.css";
function TODO({ text, setitems, items }) {
  const completehandle = () => {
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
        {text}
        <input type="checkbox" onChange={completehandle} className="box" />
      </div>
    </div>
  );
}

export default TODO;
