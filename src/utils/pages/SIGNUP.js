import React, { useState } from 'react'
import NAVBAR from '../components/NAVBAR'
import "../styles/BOOK_TICKET.css"

import { Link } from "react-router-dom";

import show from "../assets/Images/show.png"
import hide from "../assets/Images/hide.png"

const SIGNUP = () => {

  const [name,setName]=useState("");
  const [mobile,setMobile]=useState("");
  const [pass,setPass]=useState("");

  const [mobileError,setMobileError]=useState(false);
  const [passError,setPassError]=useState(false);

  
  const [passVis,setPassVis]=useState(false);


  const formStyle={width:"50%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"};
  const formText={color:"#0C098F",fontWeight:"600",marginBottom:"0.2rem"};
  const formInput={padding:"0.5rem 1rem", border:"0.5px solid #00000060",width:"100%",outline:"none"};

  const validPassword=(pass)=>{
    // if(pass.length<8)return false;
    let isLengthEight=false;
    let isUpperCase=false;
    let isNumber=false;
    let isLowerCase=false;
    let isSpecialSymbol=false;

    if(pass.length>=8)isLengthEight=true;
    
    for(let i=0;i<pass.length;i++){
      let val=pass[i];
      if(val>='A' && val<='Z'){
        isUpperCase=true;
      }
      if(val>='a' && val<='z'){
        isLowerCase=true;
      }
      if(val>='0' && val<='9'){
        isNumber=true;
      }
      if("~`!@#$%^&*()-_{}[]|\;:<>,.".includes(val)){
        isSpecialSymbol=true;
      }
    }
    return isLengthEight && isUpperCase && isNumber && isLowerCase && isSpecialSymbol;
  }

  const signup=async()=>{
    setMobileError(false);
    setPassError(false);
    let mobileValid=true;
    let passValid=true;
    if(mobile.length<10){
      mobileValid=false;
      setMobileError(true);
    }
    if(mobile.length>13){
      mobileValid=false;
      setMobileError(true);
    }
    if(validPassword(pass)===false){
      passValid=false;
      setPassError(true);
    }
    
    if(mobileValid && passValid)
      window.location.href="/";
    return ;
  }

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
            <input style={formInput} type="tel" id="phone" name="phone" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </div>
          {mobileError && <p style={{fontWeight:"700",color:"red",width:"50%",fontSize:"0.8rem",textAlign:"end"}}>Invalid Mobile Number</p>}
          <div className='form_content' style={formStyle}>
            <p style={formText}>Set Password</p>
            <input style={formInput} type={passVis?"text":"password"} value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <img src={passVis?hide:show} style={{margin:"-1.8rem 1rem 0rem auto",cursor:"pointer"}} onClick={()=>setPassVis(!passVis)}/>
          </div>
          {passError && <p style={{fontWeight:"700",color:"red",width:"50%",fontSize:"0.8rem",textAlign:"end"}}>Invalid Password</p>}
          {/* <p style={{marginRight:"0px",fontSize:"0.9rem",color:"#000000",width:"50%"}}>Must have numbers, capital and small letters (8-15) characters</p> */}
          <label style={{fontSize:"0.8rem",width:"50%",marginTop:"1rem"}}>*password atleast 8 characters long <br/>*contain atleast one uppercase ,lowercase ,numbers and special character</label>
          {/* <button style={{width:"50%",borderRadius:"69px"}}><Link to="/" style={{color:"#ffffff",textDecoration:"none"}}>SIGN UP</Link></button> */}

          <button onClick={()=>signup()} style={{width:"50%",borderRadius:"69px",marginLeft:"0px",marginRight:"0px"}}>SIGN UP</button>
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