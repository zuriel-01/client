// import React from 'react'
import logo from '../assets/white-logo.png'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
      <a href="#" >
      <img src={logo} alt="mjrny logo" height={50} width={120}/>
      </a>

      <button className='button1'>Download App</button>
    </div>
    </div>
  )
}

export default Navbar
