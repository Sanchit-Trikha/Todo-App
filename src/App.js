// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>TODO</h1>
      <div className='full'>
        <input type="text" className='todo' placeholder='Create new todo...' >

        </input>


        <button id='button'> + </button>
      </div>

      <div className='checkbox'>
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
      </div>
   
    </div>
  );
}

export default App;
