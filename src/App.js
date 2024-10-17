import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeMode = () => {
    if(setIsDarkMode(isDarkMode))
    {setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? 'white' : '#1a1a19';
    document.body.style.color = isDarkMode ? 'black' : 'white';}
    else{
      setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#1a1a19' :'white' ;
    document.body.style.color = isDarkMode ? 'white' : 'black';
    }
  };
    return (
      <>
      <BrowserRouter>
        <Navbar isDarkMode={isDarkMode} changeMode={changeMode}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route exact path="/" element = {<News isDarkMode={isDarkMode} setProgress = {setProgress} key="general" pageSize={pageSize}   category="general"/>} />
        < Route exact path="/business" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="business" pageSize={pageSize}   category="business"/>} />
        < Route exact path="/entertainment" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="entertainment" pageSize={pageSize}   category="entertainment"/>} />
        < Route exact path="/general" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="general" pageSize={pageSize}   category="general"/>} />
        < Route exact path="/health" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="health" pageSize={pageSize}   category="health"/>} />
        < Route exact path="/science" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="science" pageSize={pageSize}   category="science"/>} />
        < Route exact path="/sports" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="sports" pageSize={pageSize}   category="sports"/>} />
        < Route exact path="/technology" element ={<News isDarkMode={isDarkMode} setProgress = {setProgress} key="technology" pageSize={pageSize}   category="technology"/>} />  
        </Routes>
        </BrowserRouter>
      </>
    )
}
export default App
