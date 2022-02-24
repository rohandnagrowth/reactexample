import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

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
      document.body.style.backgroundColor='#03011c';
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
      
      <Navbar title="Rohan Dixit" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textform heading="TEXTUTILS | ROHAN DIXIT  " mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
