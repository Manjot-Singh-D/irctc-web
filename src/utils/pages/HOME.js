import React from 'react'
import NAVBAR from '../components/NAVBAR';
import home_bg from "../assets/Images/homepage_bg.jpg";
import { Link } from "react-router-dom";

const HOME = () => {
  return (
    <div className='home' style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
      <NAVBAR/>
      <div className='content' style={{height:"100vh", display:"flex", justifyContent:"center",alignItems:"center"}}>
        <div className='bgCarousel'>
          <img src={home_bg} alt="home_bg"/>
        </div>
        <div className='mainContent'>
          <button>
          Book Tickets
          </button>
          <button>
          <Link to="/pnr-status">PNR Status</Link>
          </button>
          <button>
          Train Running Status
          </button>
          <button>
          Train Schedule
          </button>
        </div>
      </div>
    </div>
  )
}

export default HOME;