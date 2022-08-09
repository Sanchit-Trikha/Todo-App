import { render } from '@testing-library/react';
import React, {useState} from 'react';
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
return  <>
<div className='main'>
        <div className='center'>
        <h1 className='heading'>TODO</h1>
      <div className='full'>
        <input type="text" className='todo' placeholder='Create new todo...'  value={input} onChange={item} >

        </input>
        <button id='button' onClick={itemevent}> + </button>
      </div>
      


      
       <div className='list'>
        <ol>

        {/* <li>{input}</li> */}
        
        { items.map( (itemvalue) =>{
        return <li>{itemvalue}</li>
        
        
}
       
        )
        
        }
        </ol>
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