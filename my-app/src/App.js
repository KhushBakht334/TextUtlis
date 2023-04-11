import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
   <div className="App">
    <Navbar title="TextUtils" contact="About"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      </div>
    </div>
  );
}
export default App;
