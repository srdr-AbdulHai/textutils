import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  const [mode,setMode]= useState('light'); 
    
  const darkMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2b3136';
      document.body.style.color = 'white';
      document.title = 'Textutiles - Dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'Textutiles - Light Mode';
    }
  }

   const redMode =()=>{
    if(mode==='light'){
      setMode('red')
      document.body.style.backgroundColor = '#592222ff';
      document.body.style.color = 'white';
      document.title = 'Textutiles - Red Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

   const blueMode =()=>{
    if(mode==='light'){
      setMode('blue')
      document.body.style.backgroundColor = '#232559ff';
      document.body.style.color = 'white';
      document.title = 'Textutiles - Blue Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    {/* // <Router> */}
    <Navbar title="Textutiles" mode={mode} darkMode={darkMode} redMode={redMode} blueMode={blueMode}/>
    <div className="container my-3">

    <TextForm heading="Enter a text" mode={mode}/>
        {/* <Route exact path="/about" render={() => <AboutUs mode={mode} />} /> */}
  {/* </Switch> */}
        </div>
{/* // </Router> */}
     </>
  );
}

export default App;
