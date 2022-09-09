import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./Todonput.css";
import "./Todo";
import TODO from "./Todo";

function Input(props) {
  const [isChecked, setisChecked] = useState(false);
  const [status, setstatus] = useState("all");
  const [filteredtodos, setfilteredtodos] = useState([]);
  const [sortingAscending, setSortingAscending] = useState(true);
  const [input, setinput] = useState("");
  const [items, setitems] = useState([]);
  const item = (event) => {
    setinput(event.target.value);
  };
  const itemevent = (event) => {
    setitems([
      ...items,
      {
        text: input,
        completed: false,
        id: Math.random() * 100,
        Date: new Date().toISOString(),
      },
    ]);
    
   
    setinput("");
    event.preventDefault();
  };
  const handlekeypress = (event) => {
    if (event.key === "Enter" && input.trim()!=="" ) {
      setitems([
        ...items,
        {
          text: input,
          // disabled: !input,
          completed: false,
          id: Math.random() * 100,
          Date: new Date().toISOString(),
        }
      ]);
      // if (input === !input){
      //   (event.key === "Enter" && event.preventDefault() )
      // }
      // if (input===""){
      //   event.preventDefault()
      // }
      // if(input.trim() === ""){
      //   return input (false)
      // }
      setinput("");
    }
  };
  const filterhandler = () => {
    switch (status) {
      case "Completed":
        setfilteredtodos(items.filter((item) => item.completed === true));
        break;
      case "Active":
        setfilteredtodos(items.filter((item) => item.completed === false));
        break;
      case "Date":
        setfilteredtodos(
          items.sort((a, b) => {
            return new Date(a).getTime() - new Date(b).getTime();
          })
        );
        break;
      default:
        setfilteredtodos(items);
        break;
    }
  };
  useEffect(() => {
    filterhandler();
  }, [items, status]);

  function deletehandle() {
    setitems([]);
  }
  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    const copyArray = [...items];

    copyArray.sort((a, b) => {
      return sortDirection === "0" ? a.id - b.id : b.id - a.id;
    });
    setitems(copyArray);
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
                DateAndTime={item.Date}
              />
              <div className="valDate"> {item.Date}</div>
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
          <select  onChange={onSelectionChange}>
          <option>none</option>
          <option value={0}>Acending</option>
          <option value={1}>Decending</option>
        </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
