import React, { useState } from "react";
import "./Todonput.css";


function Input(props) {

  const [input, setinput] = useState("");
  // const handlesubmit = e =>  {
  //   e.preventdefault();

  //   props.onsubmit({
  //     id:Math.floor(Math.random() * 100),
  //      text: input
  //   });
  
  // }
  const item = (event) => {
    setinput(event.target.value);
  }
  const [items, setitems] = useState([]);
  const itemevent = (event) => {
    event.preventDefault();
    
    setitems((oldvalue) => {
      return [...oldvalue, input]

    });
    setinput("");

  };
  const handlekeypress = (event) => {
    if (event.key === 'Enter') {
      setinput("");
      setitems((oldvalue) => {
        return [...oldvalue, input]
      })
    }
  }
  const Allhandle = (event) => {
    console.log(items)
    return [items]

  }


  return (
    <div className='center'>


{/* onsubmit={handlesubmit} */}
      <form className='full' >
        <input type="text" className='todo' placeholder='Create new todo...' value={input} onChange={item} onKeyPress={handlekeypress}>
        </input>
        <button id='button1' onClick={itemevent}> + </button>
      </form>
      <div className="itemvalue">
      {/* <div className="map">      {items.map((items, index) => {
        key={index}
        
       return

        <span>{itemvalue} </span>
        
        

      })}
      </div> */}


       </div>
      <div className='filter'>
        <div className='itemsleft'>
          {items.filter((t) => !t.items).length === 0 ? (
            <p >All tasks completed</p>
          ) : (
            <p >
              You have {items.filter((t) => !t.items).length} pending tasks
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


