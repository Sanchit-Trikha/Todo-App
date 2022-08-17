// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Input from "./components/Todonput";
// const [input, setinput] = useState([])
function App() {
  

  

 
  

 
  return (
    
    <div className="App">


      <div className='main'>

        <div className='center'>
          <h1 className='heading'>TODO</h1>
          {/* <Input  exampleValue="fjkdfkljdf"/> */}
          <Input />
                         </div>
      </div>
    </div>


  );
}

export default App;
