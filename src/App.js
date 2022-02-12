import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
 import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  const [mode , setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey';
      showAlert('Dark Mode Enabled','success');
      // setInterval(() => {
      //   document.title='Please Install'
      // }, 1500);
      // setInterval(() => {
      //   document.title='A virus detected in your browser'
      // }, 2500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled','success');
      // setInterval(() => {
      //   document.title='Please Install'
      // }, 1500);
      // setInterval(() => {
      //   document.title='A virus detected in your browser'
      // }, 2500);

    }
  }
  return (
    <>
      <Router>
        <Navbar title="Rohan Dixit" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          

            <Route exact path="/" element={<Textform heading="Enter the text to analyze With ReactJS " mode={mode} showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About/>}/>
          
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
