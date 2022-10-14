import React from 'react'
import "../styles/NAVBAR.css"
import irctc_logo from "../assets/Images/irctc_logo.png"
import railways_logo from "../assets/Images/railways_logo.png"
import { Link } from "react-router-dom";

const NAVBAR = () => {
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:"none"}}>
        <div className='left'>
            <img src={irctc_logo} alt="IRCTC LOGO"/>
            <p className='headingColor navbarHeading' style={{fontWeight:700,fontSize:"1rem"}}>Indian Railway Catering
            <br/>
            And Toursim Corporation Limited</p>
        </div>
      </Link>
        
        <div className='right'>
          <p className='headingColor navbarHeading'>CONTACT US</p>
          <Link style={{color:"#ffffff",textDecoration:"none"}} to="/login"><p className='navbarButton navbarHeading p-1 pl-3 pr-3'>LOGIN</p></Link>
          <Link to="/"><img src={railways_logo} alt="railways_logo"/></Link>
        </div>
    </div>
  )
}

export default NAVBAR;