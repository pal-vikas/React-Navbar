import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg';


function Navbar() {
  return (
    <>
        <header className='header'>
          <nav className="navbar">
                <a href="/"><img src={logo} className='logo' alt="" /></a>
                <div className="search">
                  <input type="text" className="input" placeholder='Search about any country...' />
                </div>
              <div className="left-menu">
                <a  className="btn" href='/'>Home</a>
                <a className="btn" href='about'>About</a>
                <a className="btn" href='country'>Country</a>
              </div>
          </nav>
        </header>
    </>
  )
}

export default Navbar
