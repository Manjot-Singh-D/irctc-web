import React from 'react'
import NAVBAR from '../components/NAVBAR';
import home_bg from "../assets/Images/train_bg.webp";
import { Link } from "react-router-dom";

const HOME = () => {
  return (
    <div className='home' style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"flex-start",flexDirection:"column",overflowY:"hidden"}}>
      <NAVBAR/>
      <div className='content' style={{height:"115%", display:"flex", justifyContent:"center",alignItems:"center"}}>
        <div className='bgCarousel'>
          <img src={home_bg} alt="home_bg" loading="lazy"/>
        </div>
        <div className='mainContent' style={{position:"absolute"}}>
          <Link to="/book-ticket">
            <button>
            Book Tickets
            </button>
          </Link>
          <Link to="/pnr-status">
            <button>
            PNR Status
            </button>
          </Link>
          <Link to="/train-status">
            <button>
              Train Running Status
            </button>
          </Link>
          <Link to="/train-schedule">
            <button>
            Train Schedule
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HOME;