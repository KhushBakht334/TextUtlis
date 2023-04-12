import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      message: message,
    type : type
    })
  }

 const toggelCheck =()=>{
    if(mode === `light`){
    setMode(`dark`)
    document.body.style.backgroundColor=`black`;
    showAlert("Dark mode has been enable", "success: ")
    }else{
      setMode(`light`)
      document.body.style.backgroundColor=`white`;
      showAlert("Light mode has been enable", "success: ")
    }
  }
  return (
   <div className="App">
    <Navbar title="TextUtils" contact="About" mode={mode} toggelCheck={toggelCheck}/>
    <Alert alert={alert}/>

    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} />

      {/* <About/> */}
      </div>
    </div>
  );
}
export default App;
