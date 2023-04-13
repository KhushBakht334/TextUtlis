import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode]=useState('light');
  const [modes, setModes]=useState('light');
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      message: message,
    type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

 const toggelCheck =()=>{
    if(mode === `light`){
    setMode(`dark`)
    document.body.style.backgroundColor=`black`;
    showAlert(`Dark Mode Has Been Enabled`, `success`)
    }else{
      setMode(`light`)
      document.body.style.backgroundColor=`white`;
      showAlert(`Light Mode Has Been Enabled`, `success`)
    }
  }
  const toggelsCheck =()=>{
    if(modes === `light`){
    setModes(`#065a6b`)
    document.body.style.backgroundColor=`#065a6b`;
    showAlert(`Dark blue Mode Has Been Enabled`, `success`)
    }else{
      setModes(`light`)
      document.body.style.backgroundColor=`white`;
      showAlert(`Light Mode Has Been Enabled`, `success`)
    }
  }
  return (
   <div className="App">
    <Navbar title="TextUtils" contact="About" mode={mode} modes={modes} toggelCheck={toggelCheck} toggelsCheck={toggelsCheck} />
    <Alert alert={alert}/>

    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>

      {/* <About/> */}
      </div>
    </div>
  );
}
export default App;
