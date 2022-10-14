import React,{useState,useEffect} from 'react'
import NAVBAR from "../components/NAVBAR"
import "../styles/TRAIN_STATUS.css"
import exchange_logo from "../assets/Images/exchange_logo.png"
import train_logo from "../assets/Images/train_logo.png"

const TRAIN_STATUS = () => {
  const [view,setView]=useState(1);
  const [trainStatus,setTrainStatus]=useState({});
  const [trainRoute,setTrainRoute]=useState({});
  const details_train={
    trainNo:12958,
    trainName:"ADI SJ RAJDHANI",
    status:[
      {station:"New Delhi",sch_ActArrival:"Source",delayHour:"No Delay",sch_actDeparture:"19:55/19:55",delayDeparture:"No Delay"},
      {station:"Delhi Cantt",sch_ActArrival:"20:23/20:23",delayHour:"No Delay",sch_actDeparture:"20:25/20:25",delayDeparture:"No Delay"},
      {station:"Gurugram",sch_ActArrival:"00:00/00:00",delayHour:"00:00",sch_actDeparture:"08:45/08:45",delayDeparture:"00:00"},
      {station:"Jaipur",sch_ActArrival:"00:00/00:00",delayHour:"01:35",sch_actDeparture:"08:45/08:45",delayDeparture:"01:30"},
      {station:"Ajmer",sch_ActArrival:"00:00/00:00",delayHour:"00:00",sch_actDeparture:"08:45/08:45",delayDeparture:"01:15"},
      {station:"Ahmedabad",sch_ActArrival:"00:00/00:00",delayHour:"00:35",sch_actDeparture:"Destination",delayDeparture:"No Delay"},
    ]
  }
  const route_train={
    fromCode:"NDLS",
    from:"New Delhi",
    toCode:"ADI",
    to:"Ahmedabad",
    trains:[
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express"},
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express"},
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express"},
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express"}
    ]
  }
  useEffect(()=>{
    setTrainStatus(details_train);
    setTrainRoute(route_train);
  },[]);
  const formStyle={width:"50%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"};
  const formText={color:"#0C098F",fontWeight:"600",marginBottom:"0.2rem"};
  const formInput={padding:"0.5rem 1rem", border:"0.5px solid #00000060",width:"100%",outline:"none"};
  return (
    <div style={{backgroundColor:"#1D1AA7",minHeight:"max-content",width:"100vw"}}>
      <NAVBAR/>
      <div className='content' style={{display:"flex",justifyContent:"center",alignItems:"flex-start",minHeight:"100vh"}}>
        {view===1 && <div style={{display:"flex",margin:"10% 2rem",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",height:"100%",width:"100%"}}>
          <h1 className='headingColor navbarHeading' style={{width:"100%",textAlign:"center",fontSize:"2.5rem",fontWeight:"700",color:"#ffffff"}}>Check Train Status</h1>
          <div className='mainContent' style={{background:"#ffffff",minWidth:"50%",padding:"2rem 0rem",margin:"2rem auto", display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}}>
            <h2 style={{width:"50%"}}>Search By Train</h2>
            <div className='form_content' style={formStyle}>
              <p style={formText}>Train Number/Name</p>
              <input style={formInput} type="text"/>
            </div>
            <button onClick={()=>setView(2)} style={{width:"50%",borderRadius:"69px"}}>Check Status</button>
          </div>
          <div className='form_content' style={{...formStyle,justifyContent:"space-between",alignItems:"center",flexDirection:"row",margin:"auto"}}>
            <p style={{borderTop: "1px solid #867DA0",width:"45%"}}></p>
            <p style={{color:"#ffffff",fontSize:"1.5rem"}}>or</p>
            <p style={{borderTop: "1px solid #867DA0",width:"45%"}}></p>
          </div>
          <div className='mainContent' style={{background:"#ffffff",minWidth:"50%",padding:"2rem 0rem",margin:"2rem auto", display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}}>
            <h2 style={{width:"50%"}}>Search By Station</h2>
            <div className='form_content' style={formStyle}>
              <p style={formText}>From</p>
              <input style={formInput} type="text"/>
            </div>
            <img src={exchange_logo} alt="exchange_logo" style={{margin:"0rem 1rem"}}/>
            <div className='form_content' style={formStyle}>
              <p style={formText}>To</p>
              <input style={formInput} type="text"/>
            </div>
            <button onClick={()=>setView(3)} style={{width:"50%",borderRadius:"69px"}}>Check Trains</button>
          </div>
        </div>}
        {view===2 && typeof trainStatus!=='undefined' && <div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>setView(1)}>&#8592;</p>
          <div style={{width:"max-content",margin:"auto",fontWeight:"500",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",scale:"1.2"}}>
              <img src={train_logo} style={{margin:"0rem 0.5rem 0.2rem 0rem"}} alt="train_logo"/>
              <p>{trainStatus.trainNo} - {trainStatus.trainName}</p>
            </div>
          <div style={{width:"100%",marginBottom:"0.5rem",padding:"0.5rem 0rem 1rem 0rem",display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <table className='table1'>
                <thead>
                  <tr style={{background:"#1D1AA7",color:"#ffffff"}} className="tableRow1">
                    <th style={{borderLeft:"1px solid #000000"}}>S.No</th>
                    <th>Station</th>
                    <th>Sch/Act Arrival</th>
                    <th>Delay (Hour)</th>
                    <th>Sch/Act Departure</th>
                    <th style={{borderRight:"1px solid #000000"}}>Delay in Departure (Hour)</th>
                  </tr>
                </thead>
                <tbody>
                  {typeof trainStatus.status !== 'undefined' && trainStatus.status.map((val, key) => {
                      return (
                        <tr key={key}>
                          <th style={{borderLeft:"1px solid #000000"}}>{key+1}</th>
                          <th>{val.station}</th>
                          <th>{val.sch_ActArrival}</th>
                          <th>{val.delayHour}</th>
                          <th>{val.sch_actDeparture}</th>
                          <th style={{borderRight:"1px solid #000000"}}>{val.delayDeparture}</th>
                        </tr>
                      );
                  })}
                </tbody>
            </table>
          </div>
        </div>}
        {view===3 && typeof trainRoute!=='undefined' && <div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>setView(1)}>&#8592;</p>
          <div style={{width:"max-content",margin:"auto",fontWeight:"500",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 className='headingColor navbarHeading' style={{fontSize:"2.5rem",fontWeight:"700",marginBottom:"2rem"}}>({trainRoute.fromCode}) {trainRoute.from} - ({trainRoute.toCode}) {trainRoute.to}</h1>
            {
              trainRoute.trains.map((val,key)=>{
                return (
                  <div key={key} style={{boxShadow:"0px 0px 20px #00000030",width:"100%",padding:"0.5rem 1rem",margin:"1rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
                    <p>{val.code}-{val.from} - {val.to} {val.trainName}</p>
                    <button onClick={()=>setView(2)} style={{background:"transparent",border:"2px solid #0C098F",color:"#0C098F",fontWeight:"600"}}>Track Live Status</button>
                  </div>
                );
              })
            }
          </div>

        </div>}
      </div>
      
    </div>
  )
}

export default TRAIN_STATUS

// const TRAIN_STATUS = () => {
//   return (
//     <div>TRAIN_STATUS</div>
//   )
// }

// export default TRAIN_STATUS