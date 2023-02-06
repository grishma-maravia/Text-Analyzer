import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Text Analyzer - Dark mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Text Analyzer - Light mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text here..." mode={mode} toggleMode={toggleMode}/>}/>
            <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
