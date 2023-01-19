//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const togglegroup=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      al("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      al("light mode has been enabled","success");
    }
  }
  //const [on,seton]=useState('off');
  const color=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#245a41';
      al("Changes has been applied","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }


  const [ale,setale]=useState("yo");
  const al=(message,type)=>{
    setale({
      msg:message,
      type:type}
    )
    setTimeout(() => {
      setale(null);
    }, 2000);
  };
  return (
    <>
    <Router>
        <Navbar title="texttutils" about="About" mode={mode} toggle={togglegroup} color={color}/>
        <Alert alert={ale}/>
        <div className="container">
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm al={al} heading="Enter text" mode={mode} color={color}/>
           
          </Route>
        </Switch>
        </div></Router>

    </>
  )
}

export default App;
