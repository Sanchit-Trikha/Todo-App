import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./Todonput.css";
import "./Todo";
import TODO from "./Todo";

function Input(props) {
  const [input, setinput] = useState("");
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
    event.preventDefault();
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
  const [status, setstatus] = useState("all");
  const [filteredtodos, setfilteredtodos] = useState([]);
  console.log(filteredtodos,items,"filter and items")
  const filterhandler = () => {
    switch (status) {
      case "Completed":
        setfilteredtodos(items.filter((item) => item.completed === true));
        break;
      case "Active":
        setfilteredtodos(items.filter((item) => item.completed === false));
        break;
      default:
        setfilteredtodos(items);
        break;
    }
  };
  useEffect(() => {
    filterhandler();
  }, [items,status]);
  const [isChecked, setisChecked] = useState(false);
  function deletehandle() {
    setitems([]);
  }

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
        {filteredtodos.map((item) => {
          return (
            <ul key={item.id} className="map">
              <TODO
                text={item.text}
                setitems={setitems}
                uniqueKey={item.id}
                items={items}
                isChecked={item.completed}
                setisChecked={setisChecked}
              />
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
              You have {items.filter((item) => !item.completed).length} pending
              tasks
            </p>
          )}

          <Button deletehandle={deletehandle} setstatus={setstatus} />
        </div>
      </div>
    </div>
  );
}

export default Input;
