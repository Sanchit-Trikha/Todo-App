import React, { useState } from "react";
import Button from "./Button";
import "./Todonput.css";
// import "./Button";
import "./Todo";
import TODO from "./Todo";

function Input(props) {
  const [input, setinput] = useState("");
  // const handlesubmit = e => {
  //   e.preventdefalit();

  //   props.onsubmit({
  //     id: Math.floor(Math.random() * 100),
  //     text: input
  //   });
  //   setinput("");
  //   console.log(handlesubmit)
  // }
  const item = (event) => {
    setinput(event.target.value);
  };
  const [items, setitems] = useState([]);
  const itemevent = (event) => {
    setitems([
      ...items,
      { text: input, completed: false, id: Math.random() * 100 },
    ]);
    setinput("");
    event.preventDefalit();
  };
  const handlekeypress = (event) => {
    if (event.key === "Enter") {
      setitems([
        ...items,
        { text: input, completed: false, id: Math.random() * 100 },
      ]);
      setinput("");
    }
  };
  const Allhandle = (event) => {
    console.log(items);
    return [items];
  };
  function deletehandle() {
    // const removeitem = items.filter((item)=>{
    //   return item.id !== items.id;
    // })
    setitems([]);
  }

  // const completehandle = () => {
  //   setitems(
  //     items.map((item) => {
  //       if (item.id === items.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         };
  //       }
  //       return item;

  //     })
  //   )
  // }
  console.log(items,"items");

  return (
    <div className="center">
      <div className="full">
        <input
          type="text"
          className="todo"
          placeholder="Create new todo..."
          value={input}
          onChange={item}
          onKeyPress={handlekeypress}
        ></input>
        <button
          id="button1"
          onClick={itemevent}
          type="submit"
          disabled={!input}
        >
          +
        </button>
      </div>
      <ul className="itemvalue">
        {items.map((item) => {
          return (
            <ul key={item.id} className="map">
              <TODO text={item.text} setitems={setitems} uniqueKey={item.id} items={items} />
            </ul>
          );
        })}
      </ul>
      <div className="filter">
        <div className="itemsleft">
          {items.filter((item) => !item.items).length === 0 ? (
            <p>All tasks completed</p>
          ) : (
            <p>
              You have {items.filter((item) => !item.items).length} pending
              tasks
            </p>
          )}

          <Button allhandle={Allhandle} deletehandle={deletehandle} />
        </div>
      </div>
    </div>
  );
}

export default Input;
