import React from 'react'
import NAVBAR from '../components/NAVBAR'
import "../styles/BOOK_TICKET.css"

import 'react-dropdown/style.css';
import { Link } from "react-router-dom";

const SIGNUP = () => {
  const formStyle={width:"50%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"};
  const formText={color:"#0C098F",fontWeight:"600",marginBottom:"0.2rem"};
  const formInput={padding:"0.5rem 1rem", border:"0.5px solid #00000060",width:"100%",outline:"none"};

  return (
    <div className="book_ticket" style={{backgroundColor:"#1D1AA7",minHeight:"100vh",width:"100vw"}}>
      <NAVBAR/>
      <div className='content' style={{display:"flex",justifyContent:"center",minHeight:"100vh",padding:"10% 0% 5% 0%"}}>
        <div className='mainContent' style={{background:"#ffffff",minWidth:"40%",padding:"2rem 0rem",margin:"2rem", display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}} >
          <h1 className='headingColor navbarHeading' style={{fontSize:"2rem",fontWeight:"700",marginBottom:"2rem"}}>SIGN UP</h1>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Name</p>
            <input style={formInput} type="text"/>
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Mobile Number</p>
            <input style={formInput} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Set Password</p>
            <input style={formInput} type="password"/>
          </div>
          <p style={{marginRight:"0px",fontSize:"0.9rem",color:"#000000",width:"50%"}}>Must have numbers, capital and small letters (8-15) characters</p>
          {/* <button style={{width:"50%",borderRadius:"69px"}}><Link to="/" style={{color:"#ffffff",textDecoration:"none"}}>SIGN UP</Link></button> */}
          <Link to="/" style={{color:"#ffffff",textDecoration:"none",width:"50%"}}>
            <button style={{width:"100%",borderRadius:"69px",marginLeft:"0px"}}>SIGN UP</button>
          </Link>
          <p>
            <span>Already have an account?</span> 
            <Link to="/login"><span style={{marginLeft:"5px",marginRight:"0px",fontSize:"1.1rem",fontWeight:"700",color:"#0C098F"}}>Login</span></Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SIGNUP;