import React,{useState} from 'react'
import NAVBAR from '../components/NAVBAR'
import "../styles/BOOK_TICKET.css"

import { Link } from "react-router-dom";
import show from "../assets/Images/show.png"
import hide from "../assets/Images/hide.png"

const LOGIN = () => {
  const [mobile,setMobile]=useState("");
  const [pass,setPass]=useState("");
  const [showError,setShowError]=useState(false);
  const [passVis,setPassVis]=useState(false);



  const formStyle={width:"50%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"};
  const formText={color:"#0C098F",fontWeight:"600",marginBottom:"0.2rem"};
  const formInput={padding:"0.5rem 1rem", border:"0.5px solid #00000060",width:"100%",outline:"none",paddingRight:"3rem"};

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

  const submitLogin=()=>{
    setShowError(false);
    if(mobile.length<10){
      setShowError(true);
      return;
    }
    if(mobile.length>13){
      setShowError(true);
      return;
    }
    if(validPassword(pass)===false){
      setShowError(true);
      return;
    }
    window.location.href="/";
  }

  return (
    <div className="book_ticket" style={{backgroundColor:"#1D1AA7",minHeight:"100vh",width:"100vw"}}>
      <NAVBAR/>
      <div className='content' style={{display:"flex",justifyContent:"center",minHeight:"100vh",padding:"10% 0% 5% 0%"}}>
        <div className='mainContent' style={{background:"#ffffff",minWidth:"40%",padding:"2rem 0rem",margin:"2rem", display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}} >
          <h1 className='headingColor navbarHeading' style={{fontSize:"2rem",fontWeight:"700",marginBottom:"2rem"}}>LOGIN</h1>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Mobile Number</p>
            <input style={formInput} type="tel" id="phone" name="phone" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Password</p>
            <input style={formInput} type={passVis?"text":"password"} value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <img src={passVis?hide:show} style={{margin:"-1.8rem 1rem 0rem auto",cursor:"pointer"}} onClick={()=>setPassVis(!passVis)}/>
          </div>
          {showError && <p style={{fontWeight:"700",color:"red",width:"50%",fontSize:"0.8rem",textAlign:"end"}}>*Invalid Mobile Number or Password</p>}
          <button onClick={()=>submitLogin()} style={{width:"50%",borderRadius:"69px",marginLeft:"0px",marginRight:"0px",marginTop:'3rem'}}>LOGIN</button>
          <p>
            <span>Don't have an account?</span> 
            <Link to="/signup"><span style={{marginLeft:"5px",marginRight:"0px",fontSize:"1.1rem",fontWeight:"700",color:"#0C098F"}}>Sign Up</span></Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LOGIN;