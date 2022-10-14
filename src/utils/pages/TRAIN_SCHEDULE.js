import React,{useState,useEffect} from 'react'
import NAVBAR from "../components/NAVBAR"
import "../styles/TRAIN_SCHEDULE.css"

const TRAIN_SCHEDULE = () => {
  const [showTrain,setShowTrain]=useState(true);
  const [trainDetails,setTrainDetails]=useState({});
  const detail={
    trainNo:"12303",
    trainName:"POORVA EXPRESS",
    source:"HOWRA JN",
    days:['Y','Y','N','N','Y','Y','N'],
    stations:[
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"SOURCE",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"HWH",stationName:"HOWRAH JN",routeNo:"1",arrivalTime:"11:00",departureTime:"08:00",haltTime:"02:00",distance:0,day:1},
      {stationCode:"NDLS",stationName:"NEW DELHI",routeNo:"1",arrivalTime:"06:00",departureTime:"--",haltTime:"--",distance:1529,day:1}
    ]
  }
  useEffect(()=>{
    setTrainDetails(detail);
  },[]);
  return (
    <div style={{backgroundColor:"#1D1AA7",minHeight:"max-content",width:"100vw"}}>
      <NAVBAR/>
      <div className='content' style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
        {showTrain && <div className='mainContent' style={{background:"#ffffff",margin:"10% 2rem",flexDirection:"column"}} >
          <div style={{margin:"2rem"}}>
            <h1 className='headingColor navbarHeading' style={{fontSize:"2.5rem",fontWeight:"700"}}>Enter Train Number</h1>
            <p style={{fontSize:"0.9rem",color:"#00000090",fontWeight:"500"}}>Please enter few characters of Train Name OR few digits of Train Number.</p>
            <p style={{fontSize:"0.9rem",color:"#00000090",fontWeight:"500"}}>e.g. To get the train schedule for Himachal Express</p>
            <p style={{fontSize:"0.9rem",color:"#00000090",fontWeight:"500"}}> i.e. Train No. 14553 - either enter himachal or 145</p>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",margin:"1.5rem auto"}}>
              <input type={"text"} style={{padding:"0.5rem 1rem", border:"0.5px solid #00000060",outline:"none"}}/>
              <button onClick={()=>setShowTrain(false)} style={{borderRadius:"0px",width:"max-content"}}>Get Schedule</button>
            </div>
            <p style={{fontSize:"0.9rem",color:"#00000090"}}>*Train Schedule is shown only for reserved trains defined in the PRS system.</p>
          </div>
        </div>}
        {!showTrain && typeof trainDetails !== 'undefined' && typeof trainDetails.days !== 'undefined' && <div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>setShowTrain(true)}>&#8592;</p>
          <p style={{width:"100%", textAlign:"center",fontSize:"1.5rem",marginBottom:"2rem",fontWeight:"600"}}>TRAIN SCHEDULE</p>
          <div style={{width:"100%",marginBottom:"0.5rem",padding:"0.5rem 0rem 1rem 0rem",display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <table className='table1'>
              <thead>
                <tr style={{background:"#1D1AA7",color:"#ffffff"}}>
                  <th>Train Number</th>
                  <th>Train Name</th>
                  <th>Runs From Source</th>
                  <tr style={{borderTop:"1px solid #ffffff",borderRight:"1px solid #ffffff",color:"#212529",fontWeight:"700"}}>
                    <p style={{position:"relative",left:"300%",color:"#ffffff"}}>Runs on</p>
                  </tr>
                  <tr>
                    <th style={{borderBottom:"none",borderLeft:"none"}}>MON</th>
                    <th style={{borderBottom:"none"}}>TUE</th>
                    <th style={{borderBottom:"none"}}>WED</th>
                    <th style={{borderBottom:"none"}}>THU</th>
                    <th style={{borderBottom:"none"}}>FRI</th>
                    <th style={{borderBottom:"none"}}>SAT</th>
                    <th style={{borderBottom:"none"}}>SUN</th>
                  </tr>
                </tr>
                <tr className="tableRow2">
                  <th>{trainDetails.trainNo}</th>
                  <th>{trainDetails.trainName}</th>
                  <th>{trainDetails.source}</th>
                  {/* <th> */}
                    {/* <table> */}
                      <tr>
                        <th style={{borderLeft:"none"}}>{trainDetails.days[0]}</th>
                        <th>{trainDetails.days[1]}</th>
                        <th>{trainDetails.days[2]}</th>
                        <th>{trainDetails.days[3]}</th>
                        <th>{trainDetails.days[4]}</th>
                        <th>{trainDetails.days[5]}</th>
                        <th>{trainDetails.days[6]}</th>
                      </tr>
                    {/* </table> */}
                  {/* </th> */}
                  
                </tr>
              </thead>
            </table>

            <table className='table2'>
                <thead>
                  <tr style={{background:"#1D1AA7",color:"#ffffff"}} className="tableRow1">
                    <th>S.No</th>
                    <th>Station Code</th>
                    <th>Station Name</th>
                    <th>Route No.</th>
                    <th>Arrival Time</th>
                    <th>Departure Time</th>
                    <th>Halt Time (minutes)</th>
                    <th>Distance (km)</th>
                    <th>Day</th>
                  </tr>
                </thead>
                <tbody>
                  {typeof trainDetails.stations !== 'undefined' && trainDetails.stations.map((val, key) => {
                      return (
                        <tr key={key}>
                          <th>{key+1}</th>
                          <th>{val.stationCode}</th>
                          <th>{val.stationName}</th>
                          <th>{val.routeNo}</th>
                          <th>{val.arrivalTime}</th>
                          <th>{val.departureTime}</th>
                          <th>{val.haltTime}</th>
                          <th>{val.distance}</th>
                          <th>{val.day}</th>
                        </tr>
                      );
                  })}
                </tbody>
            </table>
          </div>
        </div>}
      </div>
      
    </div>
  )
}

export default TRAIN_SCHEDULE