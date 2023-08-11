// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  function alertFunc(type,msg,clr) {
    setAlert({message:msg, type:type,clr:clr});
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (mode==='light'){
      console.log('Toggled')
      setmode("dark");
      alertFunc('Success!','Dark mode enabled.','dark')
    }else{
      setmode("light");
      alertFunc('Success!','Light mode enabled.','primary')
    }
    
  }
  //----------------- return statement-------------------------------
  return (
  <div id='body' style={{background:mode==='dark'?'#000000c7':'white', color:mode==='dark'?'#ffffffcf':'black', height:'100vh'}}>
  <Navbar title='Web-Page' about='Contact Us' mode={mode} modeFunc={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-5" >
  <Form mode={mode} alertFunc={alertFunc}/></div>
  </div>
  )
}

export default App;
