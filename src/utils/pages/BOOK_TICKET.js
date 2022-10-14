import React from 'react'
import NAVBAR from '../components/NAVBAR'
import exchange_logo from "../assets/Images/exchange_logo.png"
import "../styles/BOOK_TICKET.css"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const BOOK_TICKET = () => {
  const formStyle={width:"50%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"};
  const formText={color:"#0C098F",fontWeight:"600",marginBottom:"0.2rem"};
  const formInput={padding:"0.5rem 1rem", border:"0.5px solid #00000060",width:"100%",outline:"none"};
  const checkbox_comp={display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",color:"#0C098F",fontWeight:"600"};
  const options = [
    'one', 'two', 'three'
  ]
  return (
    <div className="book_ticket" style={{backgroundColor:"#1D1AA7",minHeight:"100vh",width:"100vw"}}>
      <NAVBAR/>
      <div className='content' style={{display:"flex",justifyContent:"center",minHeight:"100vh",padding:"10% 0% 5% 0%"}}>
        <div className='mainContent' style={{background:"#ffffff",minWidth:"50%",padding:"2rem 0rem",margin:"2rem", display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}} >
          <h1 className='headingColor navbarHeading' style={{fontSize:"2rem",fontWeight:"700",marginBottom:"2rem"}}>BOOK TICKETS</h1>
          <div className='form_content' style={formStyle}>
            <p style={formText}>From</p>
            <Dropdown style={formInput} options={options} value={options[0]} placeholder="Select an option" />
          </div>
          <div className='form_content' style={{...formStyle,justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
            <p style={{borderTop: "1px solid #867DA0",width:"45%"}}></p>
            <img src={exchange_logo} alt="exchange_logo" style={{margin:"0rem 1rem"}}/>
            <p style={{borderTop: "1px solid #867DA0",width:"45%"}}></p>
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>To</p>
            <Dropdown style={formInput} options={options} value={options[0]} placeholder="Select an option" />
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Journey Date</p>
            <input type={"date"} style={formInput}/>
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>Seat Class</p>
            <Dropdown style={formInput} options={options} value={options[0]} placeholder="Select an option" />
          </div>
          <div className='form_content' style={formStyle}>
            <div style={checkbox_comp}>
              <input type="checkbox" style={{marginRight:"0.5rem"}}/>
              <label>Flexible With Date</label>
            </div>
            <div style={checkbox_comp}>
              <input type="checkbox" style={{marginRight:"0.5rem"}}/>
              <label>Person With Disability Concession</label>
            </div>
            <div style={checkbox_comp}>
              <input type="checkbox" style={{marginRight:"0.5rem"}}/>
              <label>Train with Available Berth</label>
            </div>
            <div style={checkbox_comp}>
              <input type="checkbox" style={{marginRight:"0.5rem"}}/>
              <label>Railway Pass Concession</label>
            </div>
          </div>
          <button style={{width:"50%",borderRadius:"69px"}}>FIND TRAINS</button>
        </div>
      </div>
    </div>
  )
}

export default BOOK_TICKET