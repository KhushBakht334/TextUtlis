import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode]=useState('light');

 const toggelCheck =()=>{
    if(mode === `light`){
    setMode(`dark`)
    }else{
      setMode(`light`)
    }
  }
  return (
   <div className="App">
    <Navbar title="TextUtils" contact="About" mode={mode} toggelCheck={toggelCheck}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      {/* <About/> */}
      </div>
    </div>
  );
}
export default App;
