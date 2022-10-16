import React,{useState,useEffect,useRef} from 'react'
import ReactLoading from 'react-loading'
import NAVBAR from "../components/NAVBAR"
import pnr_status from "../assets/Images/pnr_status.png"
import chart_logo from "../assets/Images/chart_logo.png"
import train_logo from "../assets/Images/train_logo.png"

import "../styles/PNR_STATUS.css"

const PNR_STATUS = () => {
  const [showPNR,setShowPNR]=useState(true);
  const [pnrDetails,setPnrDetails]=useState({});
  const [loading,setLoading]=useState(true);
  const [showError,setShowError]=useState(false);
  // const pnr_number=useRef(null);
  const [pnrNumber,setPnrNumber]=useState("");
  const detail={
    pnr:"1234567890",
    trainNo:"12958",
    name:"ADI SJ RAJDHANI",
    from:"Delhi",
    to:"Jaipur",
    date:"4 October,2022",
    class:"2A",
    report:[
      {
        name:"Name1",
        age:"21",
        gender:"M",
        bookingStatus:"CNF/B1/9/LOWER",
        currentStatus:"CNF/B1/9/LOWER"
      },
      {
        name:"Name2",
        age:"21",
        gender:"M",
        bookingStatus:"CNF/B1/9/LOWER",
        currentStatus:"CNF/B1/9/LOWER"
      },
      {
        name:"Name3",
        age:"21",
        gender:"M",
        bookingStatus:"CNF/B1/9/LOWER",
        currentStatus:"CNF/B1/9/LOWER"
      },
      {
        name:"Name4",
        age:"21",
        gender:"M",
        bookingStatus:"CNF/B1/9/LOWER",
        currentStatus:"CNF/B1/9/LOWER"
      },
    ]
}
  useEffect(()=>{
    setPnrDetails(detail);
  },[]);
  String.prototype.isNumber = function(){return /^\d+$/.test(this);}
  const submitPNR=()=>{
    setShowError(false);

    if(pnrNumber==="" || pnrNumber.length!=10 || !pnrNumber.isNumber()){
      setShowError(true);
      return ;
    }
    detail["pnr"]=pnrNumber;
    setPnrDetails(detail);
    setShowPNR(false);
    let i=0;
    const interval = setInterval(() => {
      i=i+1;
      clearInterval(interval);
      setShowPNR(false);
      setLoading(false);
    }, 1000);
  }
  return (
    <div className="pnr_status" style={{backgroundColor:"#1D1AA7",height:"100vh",width:"100vw"}}>
      <NAVBAR/>
      <div className='content' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        {showPNR && <div className='mainContent' style={{background:"#ffffff",margin:"2rem"}} >
          <div className='left' style={{padding:"2rem"}}>
            <h1 className='headingColor navbarHeading' style={{fontSize:"2.5rem",fontWeight:"700"}}>PNR STATUS</h1>
            {showError && <p style={{color:"red",fontWeight:"600",marginTop:"1rem",marginBottom:"-2rem"}}>*Enter Valid Input</p>}
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",margin:"1.5rem auto"}}>
              <input type={"text"} id="pnr_number" value={pnrNumber} onChange={(e)=>setPnrNumber(e.target.value)} style={{padding:"0.5rem 1rem", border:"0.5px solid black"}}/>
              <button onClick={()=> submitPNR()} style={{borderRadius:"0px",width:"max-content"}}>GO</button>
            </div>
            <p style={{fontSize:"0.9rem",color:"#00000090"}}>Enter your 10 digit PNR number to check IRCTC PNR Status of Indian Railways</p>
          </div>
          <div className='right' style={{padding:"2rem"}}>
            <img src={pnr_status} alt="pnr_status" loading="lazy"/>
          </div>
        </div>}
        {!showPNR && (loading===true?<ReactLoading className='reactLoading'  type={"spin"} color={"#ffffff"} height={50} width={50} />:<div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"2rem",padding:"2rem",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>{setShowPNR(true); setLoading(true)}}>&#8592;</p>
          <p style={{width:"100%", textAlign:"center",fontSize:"1.5rem",marginBottom:"2rem",fontWeight:"600"}}>PNR : {pnrDetails.pnr}</p>
          <div style={{marginTop:"1.5rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{width:"80%",fontWeight:"500",display:"flex",flexDirection:"row"}}>
              <img src={train_logo} style={{margin:"0rem 0.5rem 0.2rem 0rem"}} alt="train_logo"/>
              <p>{pnrDetails.trainNo} - {pnrDetails.name}</p>
            </div>
            <div style={{width:"80%",marginBottom:"1.5rem",padding:"0.5rem 0rem 2rem 0rem", borderTop:"1px solid #00000030",borderBottom:"1px solid #00000030"}}>
              <p style={{fontSize:"1.25rem",textAlign:"center",fontWeight:"600",marginTop:"0.5rem"}}>STATUS REPORT</p>

              <div style={{padding:"0.2rem 1rem",display:"flex",flexDirection:"row"}}>
                <img src={chart_logo} style={{margin:"0rem 0.5rem 0.2rem 0rem"}} alt="chart_logo"/>
                <p style={{fontWeight:"600",color:"#096C07"}}>CHART PREPARED</p>
              </div>
              <table className='chartReport'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Booking Status</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {typeof pnrDetails.report !== 'undefined' && pnrDetails.report.map((val, key) => {
                      return (
                        <tr key={key}>
                          <th>{key+1}</th>
                          <th>{val.name}</th>
                          <th>{val.age}</th>
                          <th>{val.gender}</th>
                          <th>{val.bookingStatus}</th>
                          <th>{val.currentStatus}</th>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{width:"80%",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column"}}>
              <p><span style={{fontWeight:"700"}}>From : </span> {pnrDetails.from} &#8594; <span style={{fontWeight:"700"}}>To : </span>{pnrDetails.to}</p>
              <p><span style={{fontWeight:"700"}}>Journey Date : </span>{pnrDetails.date}</p>
              <p><span style={{fontWeight:"700"}}>Class : </span>{pnrDetails.class}</p>
            </div>
            
          </div>
        </div>)}
      </div>
      
    </div>
  )
}

export default PNR_STATUS;