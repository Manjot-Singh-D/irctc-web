import React from 'react'
import "../styles/NAVBAR.css"
import irctc_logo from "../assets/Images/irctc_logo.png"
import railways_logo from "../assets/Images/railways_logo.png"

const NAVBAR = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={irctc_logo} alt="IRCTC LOGO"/>
            <p className='headingColor navbarHeading' style={{fontWeight:700,fontSize:"1rem"}}>Indian Railway Catering
            <br/>
            And Toursim Corporation Limited</p>
        </div>
        <div className='right'>
          <p className='headingColor navbarHeading'>CONTACT US</p>
          <p className='navbarButton navbarHeading p-1 pl-3 pr-3'>LOGIN</p>
          <img src={railways_logo} alt="railways_logo"/>
        </div>
    </div>
  )
}

export default NAVBAR;