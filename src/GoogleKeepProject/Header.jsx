import React from 'react';
import logo from './logo.png';
import './Project.css';


const Header=()=>{
  return(
    <>
      <div className='header'>
        <img src={logo} alt="image" height="70" width="40"/>
        <h1>Google Keep Notes</h1>
      </div>
    </>
  );
}

export default Header;