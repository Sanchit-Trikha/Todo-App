import React, { useEffect, useState } from "react";
// import { useSort } from '@table-library/react-table-library/sort';
import Button from "./Button";
import "./Todonput.css";
import "./Todo";
import TODO from "./Todo";

function Input(props) {
//   const [order, setorder] = useState("ASC")
//   const sorting =(index)=>{
//     if(order === "ASC") {
//       const sorted = [...items].sort((a,b)=>
//       a[index].toLowerCase() > b[index].toLowerCase() ? 1: -1
//       );
//       setitems(sorted);
//       setorder("DSC")
//     }
//       if(order === "DSC") {
//         const sorted = [...items].sort((a,b)=>
//         a[index].toLowerCase() < b[index].toLowerCase() ? 1: -1
//         );
//         setitems(sorted);
//         setorder("ASC")
//       }
// }
  const [input, setinput] = useState("");
  const item = (event) => {
    setinput(event.target.value);
  };
  // eslint-disable-next-line no-use-before-define
  // const [Date, setDate] = useState(new Date());
  const [items, setitems] = useState([]);
  const itemevent = (event) => {
    setitems([
      ...items,
      { text: input, completed: false, id: Math.random() * 100, Date: new Date() },
    ]);
    setinput("");
    event.preventDefault();
  };
  const handlekeypress = (event) => {
    if (event.key === "Enter") {
      setitems([
        ...items,
        { text: input, completed: false, id: Math.random() * 100, Date: new Date().toISOString() },
      ]);
      setinput("");
    }
  };
  //set in acending and decending order todo items accorting to time
  
  const [status, setstatus] = useState("all");
  const [filteredtodos, setfilteredtodos] = useState([]);
  // console.log(filteredtodos,items,"filter and items")
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
        <button >sort</button>
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
        </div>
      </div>
    </div>
  );
}

export default Input;
