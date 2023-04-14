import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
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
    document.title=`TextUtils-Dark Mode`;
    }else{
      setMode(`light`)
      document.body.style.backgroundColor=`white`;
      showAlert(`Light Mode Has Been Enabled`, `success`)
      document.title=`TextUtils-Light Mode`;
    }
  }

  return (
   <div className="App">
    <Router>
    <Navbar title="TextUtils" contact="About" mode={mode} toggelCheck={toggelCheck} />
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert}/>} />
        </Routes>
     

      {/* <About/> */}
      </div>
      </Router>
    </div>
  );
}
export default App;