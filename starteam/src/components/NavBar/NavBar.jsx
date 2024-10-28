import React from 'react'
import logo from '../../assets/star-logo.png'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='landing-page'>
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} className='logo-image' />
                <h2 className='logo-text'>STARTEAM ENTERPRISES </h2>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
