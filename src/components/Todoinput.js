import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';

import "./Todoinput.css"
const Todoinput = () => {
const [input,setinput] = useState("");

const item = (event) =>{
        setinput(event.target.value);
}
const [items,setitems] = useState([]);
const itemevent = (event) =>{
        setitems((oldvalue)=>{
        return[...oldvalue, input]
});
setinput("");
};
const handlekeypress = (event) =>{
  if(event.key === 'Enter'){
    setinput("");
    setitems((oldvalue)=>{
      return[...oldvalue, input]
  })
  }
}

const Allhandle =(event) => {
  console.log(items)
  return [items]
  
}
// const [query,setquery] = useState('');
// const [FilteredTodos,setFilteredTodos] = useState([]);
// const visiblity_filter ={
// All: 'All',
// completed: 'Completed'
// }
// const counter = () => {
//   const items = items.filter(checkbox=>
//     !checkbox.checked)
//     const count = 
//     document.getElementById('todosleft');
//     const counterString = items.length
//     === 1 ? 'item' : 'items'
//     count.innerText = `${items.length}
//     ${counterString} left`

// }
// useEffect(() => {
//   (() => {
//     switch (query) {
//       case 'completed':
//         setFilteredTodos(items.filter(items => items.status === 1))
//         break 
//       case 'uncomplete':
//         setFilteredTodos(items.filter(items => items.status === 0))
//         break
//       default:
//         setFilteredTodos(items)
//         break;
//     }
//   })()
// })

// const [checked,setchecked] = useState(false)
// useEffect(() => {
// if (Todoinput.status === 'complete' ){
//   setchecked(true);
// } else 
// setchecked(false);
// }, [Todoinput.status])
// console.log(setchecked)
// const todoCtx = useContext(TodoContext);
//   const changeFilter = todoCtx.changeFilter;
//   const filterOrder = todoCtx.filter;
//   console.log(todoCtx);

//   const changeFilterOrder = (filter: filter) => {
//     changeFilter(filter);
//   };
return  <>

<div className='main'>
{/* <input type="checkbox" onChange={itemevent} value={setinput}></input> */}
        <div className='center'>
        <h1 className='heading'>TODO</h1>
      <div className='full'>
        <input type="text" className='todo' placeholder='Create new todo...'  value={input} onChange={item} onKeyPress={handlekeypress}>
        
        </input>
        <button id='button1' onClick={itemevent}> + </button>
      </div>
      
      {/* <div textAlign="center">
        no todos!
      </div> */}
     
       <div className='list'>
        <ol>

        {/* <li>{input}</li> */}
        
        { items.map( (itemvalue, index) =>{
          
      //   return (<li>{itemvalue} 
      //  <div >
      //   <input type="checkbox" className='checkbox'></input>
      //  </div>
      //   </li>
      //   )
   

        return(
       
        <div key={index} className='item'>
          <input value={itemvalue} type="checkbox" className='checkbox' ></input>
          <span>{itemvalue}</span>
        
        </div>
        
       //in different component
        )
}
       
        )
        
        }
        </ol>
      {/* {todofilter.filter((t) => !t.items).length === 0 ?(
        <p> All tast completed</p>
       )  (
        <p>you have {items.length} pending tasks</p>
       )
      } */}
      <div className='filter'>   
       <div className='itemsleft'>  
      {items.filter((t) => !t.items).length === 0 ? (
            <p >All tasks completed</p>
          ) : (
            <p >
              You have {items.filter((t) => !t.items).length} pending tasks
            </p>
          )}
          <div  className='all'>
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
     
          {/* <ul className={classes["task-filters"]}>
      <li onClick={changeFilterOrder.bind(null, filter.all)}>
        <a
          className={filterOrder === filter.all ? classes.active : ""}
          href="#"
        >
          View All
        </a>
      </li>
      <li onClick={changeFilterOrder.bind(null, filter.active)}>
        <a
          className={filterOrder === filter.active ? classes.active : ""}
          href="#"
        >
          Active
        </a>
      </li>
      <li onClick={changeFilterOrder.bind(null, filter.completed)}>
        <a
          className={filterOrder === filter.completed ? classes.active : ""}
          href="#"
        >
          Completed
        </a>
      </li>
    </ul>
  ); */}
          {/* <div className="col-xs-5">
                        <ul className="nav nav-pills todo-filter">
                            <li><a onClick={onFilter1} className={this.isActive('SHOW_ALL')} value="SHOW_ALL" href="#">All</a></li>
                            <li><a onClick={onFilter1} className={this.isActive('false')} value="false">Incomplete</a></li>
                             <li><a onClick={onFilter1} className={this.isActive('true')} value="true">Complete</a></li>
                        </ul>
                    </div> */}
        {/* <div className='items' >
        <p id='todosleft'>todos Completed  {items.length ===0 }</p>  */}
       
   
        {/* </div> */}
       
       </div>
      {/* <div className='checkbox'>
        <input type="checkbox" className='input'></input>
        <span> &nbsp;&nbsp;&nbsp;A todo app with light and dark mode with React</span>
      </div>

      <div className='checkbox1'>
        <input type="checkbox" className='input1'></input>
        <span> &nbsp;&nbsp;&nbsp;reactjsexample.com </span>
      </div>
      <div className='checkbox2'>
        <input type="checkbox" className='input2'></input>
        <span>&nbsp;&nbsp;&nbsp; A traditional todo app  </span>
      </div>
      <div className='checkbox3'>
        <input type="checkbox" className='input3'></input>
        <span>&nbsp;&nbsp;&nbsp; stirpe.jennifer@gmail.com</span>
      </div> */}
   
        </div>

</div>


</>;
   





};
export default Todoinput;