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

    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route exact path="/" element = {<News setProgress = {setProgress} key="general" pageSize={pageSize}   category="general"/>} />
        < Route exact path="/business" element ={<News setProgress = {setProgress} key="business" pageSize={pageSize}   category="business"/>} />
        < Route exact path="/entertainment" element ={<News setProgress = {setProgress} key="entertainment" pageSize={pageSize}   category="entertainment"/>} />
        < Route exact path="/general" element ={<News setProgress = {setProgress} key="general" pageSize={pageSize}   category="general"/>} />
        < Route exact path="/health" element ={<News setProgress = {setProgress} key="health" pageSize={pageSize}   category="health"/>} />
        < Route exact path="/science" element ={<News setProgress = {setProgress} key="science" pageSize={pageSize}   category="science"/>} />
        < Route exact path="/sports" element ={<News setProgress = {setProgress} key="sports" pageSize={pageSize}   category="sports"/>} />
        < Route exact path="/technology" element ={<News setProgress = {setProgress} key="technology" pageSize={pageSize}   category="technology"/>} />  
        </Routes>
        </BrowserRouter>
      </>
    )
}
export default App
