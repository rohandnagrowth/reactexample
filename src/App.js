import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [darkMode , setDarkMode] = useState(false);
  return (
    <>
      <Navbar title="Textutils"/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze With ReactJS"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
