import React, { useState } from "react";
import Todolist from "./todolist";
import "./Todonput.css";
// import "./todolist";
import "./Todo"
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
  }
  const [items, setitems] = useState([]);
  const itemevent = (event) => {
    event.preventDefalit();

    setitems([
      ...items, { text: input, completed: false, id: Math.random() * 100 }

    ]);

    setinput("");

  };
  const handlekeypress = (event) => {
    if (event.key === 'Enter') {

      setitems([
        ...items, { text: input, completed: false, id: Math.random() * 100 }])
      setinput("");
    }

  }
  const Allhandle = (event) => {
    console.log(items)
    return [items]

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


  return (
    <div className='center'>


      <div className='full'  >
        <input type="text" className='todo' placeholder='Create new todo...' value={input} onChange={item} onKeyPress={handlekeypress} >
        </input>
        <button id='button1' onClick={itemevent} > + </button>
      </div>
      <ul className="itemvalue">

        {items.map(item => {
          return (
            <ul key={item.id} className="map"
            >

              <TODO text={item.text}  setitems={setitems} items={items} />
            </ul>
          )
        })}
      </ul>
      <div className='filter'>
        <div className='itemsleft'>
          {items.filter((item) => !item.items).length === 0 ? (
            <p >All tasks completed</p>
          ) : (
            <p >
              You have {items.filter((item) => !item.items).length} pending tasks
            </p>
          )}

          <div className='all'>
            <a class="filter-active" href="#/active" onClick={Allhandle}>All</a>
          </div>
          <div className='completed'>
            <a class="filter-active" href="#/active" >Completed</a>
          </div>
          <div className=' active'>
            <a class="filter-active" href="#/active">Active</a>
          </div>
          <div className='clear_all'><a class="filter-active" href="#/active">Clear all</a>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Input;


