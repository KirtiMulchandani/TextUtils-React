import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link
// }from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="textUtils" about="About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      {/* <Routes> */}
      {/* <Route exact path='/about' element={<About/>}>
          </Route>
          <Route exact path='/' element={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>}>
          </Route> */}
      {/* </Routes> */}
      <TextForm heading="Try TextUtils - Word Counter Character Counter" mode={mode} showAlert={showAlert}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
