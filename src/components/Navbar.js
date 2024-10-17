import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({isDarkMode,changeMode}) => {
  
    return (
      <>
      <div>
                <nav className={`navbar fixed-top navbar-expand-lg`} 
  style={{ 
    backgroundColor: isDarkMode ? '#343432' : '#F8F8F8'  
  }}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src='/diviffairs.png' alt="diviffairs" className='divilogo'/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
               
                <li className="nav-item">
                <Link className="nav-link" to="/business" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>Business</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>Entertainment</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/general" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>General</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/health" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>Health</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/science" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>Science</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>Sports</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{ color: isDarkMode ? '#f5f5f5' : '#343432' }}>Technology</Link></li>
            </ul>
            <span><button type="button" className={` ${isDarkMode?'btn btn-outline-light':"btn btn-outline-dark" }`} onClick={changeMode}>{isDarkMode?'Dark Mode':'Light Mode'}</button></span>
            </div>
        </div>
        </nav>
      </div></>
    )
  
}
export default Navbar
