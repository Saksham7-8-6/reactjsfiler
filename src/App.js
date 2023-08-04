import React,{ useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
// import About from "./components/Abouter";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {



  const [darker,setdarker]=useState('light');
  const red=()=>{
    document.body.style.backgroundColor="red";
  }
  const yellow=()=>{
    document.body.style.backgroundColor="yellow";
  }
  const green=()=>{
    document.body.style.backgroundColor="green";
  }
  const [alerter,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const toggler=()=>{
    if(darker==='light'){
      setdarker('dark');
      document.body.style.backgroundColor="#05132a";
      showalert("Dark Mode has been enabled!","success");
      // setInterval(() => {
        document.title="Dark mode Enabled";
      // }, 1700);  
      //  setInterval(() => {
      
      // }, 1500);   
      }
      else{
        setdarker('light');
        document.body.style.backgroundColor="white";
        showalert("light Mode has been enabled!","success")     
        document.title="Light mode Enabled";
     
    }
    
  }
  return (
    <>
     {/* <BrowserRouter>    */}
    <Navbar title="TextUtils" Abouttext="About" mode={darker} toggle={toggler} red={red} yellow={yellow} green={green}/>
    <Alert alert={alerter}/>
    <div className="container my-3">
      {/* <About/> */}
      <TextForm heading="TextUtils" mode={darker} alertor={showalert}/>
    </div> 
   
     {/* <Routes> */}
          {/* <Route path="/about" element={}/> */}
          {/* <Route path="/" element={}/>    */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
 

</>
  );
}
export default App; 

