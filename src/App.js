import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import Tempapp from './components/Tempapp';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"; 



const App=()=>{
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress,setProgress]=useState(0);
  const [mode,darkmode]=useState('light');

  const togglemode=()=>{
    if(mode==='light')
    {
      darkmode('dark');
      document.body.style.backgroundColor='#020926';
      //showAlert("Dark mode has been Enabled!!");
    }
    else{
      darkmode('light');
      document.body.style.backgroundColor='white';
      //showAlert("White mode has been Enabled!!");
    }
  }
 
  

  
    return (
      <div>
        <Router>
        <Navbar mode={mode} togglemode={togglemode}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
        />
        
        
        <Switch>
          <Route exact path="/"><News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize}country="in" category="general" mode={mode}/></Route>
          <Route exact path="/general"><News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" mode={mode}/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" mode={mode}/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode}/></Route>
          <Route exact path="/health"><News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" mode={mode}/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" mode={mode}/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" mode={mode}/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" mode={mode}/></Route>
          <Route exact path="/Tempapp"><Tempapp setProgress={setProgress} mode={mode}/></Route>
          
          
          
        </Switch>
        </Router>
        
      </div>
    )
  }


export default App
