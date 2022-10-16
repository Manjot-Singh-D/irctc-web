import React,{useState,useEffect,useRef} from 'react'
import ReactLoading from 'react-loading'
import NAVBAR from "../components/NAVBAR"
import "../styles/TRAIN_STATUS.css"
import exchange_logo from "../assets/Images/exchange_logo.png"
import train_logo from "../assets/Images/train_logo.png"

import stations from '../assets/data/stations';
import trains from "../assets/data/trains";
import Select from 'react-select'

const TRAIN_STATUS = () => {
  const [view,setView]=useState(1);
  const [trainStatus,setTrainStatus]=useState({});
  const [trainRoute,setTrainRoute]=useState({});
  const [loading,setLoading]=useState(true);

  const [trainName,setTrainName]=useState("");
  const [toTrain,setToTrain]=useState("");
  const [fromTrain,setFromTrain]=useState("");
  const [showError1,setShowError1]=useState(false);
  const [showError2,setShowError2]=useState(false);

  const train_number=useRef(null);
  const from_train=useRef(null);
  const to_train=useRef(null);
  const options = stations.data.slice(0,300);
  
  const getFormatTrain=()=>{
    let ans=[];
  
    trains.data.map((val,key)=>{
      ans.push({label:val.properties.number+"_"+val.properties.name,value:key});
    });
    return ans;
  }
  const trainOption=getFormatTrain();
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

  const submitCheckTrain=()=>{
    setShowError2(false);
    if(!fromTrain || !toTrain || toTrain.label==="" || fromTrain.label===""){
      setShowError2(true);
      return ;
    }
    route_train["from"]=fromTrain.label;
    route_train["to"]=toTrain.label;

    setTrainRoute(route_train);
    setView(3);
    let i=0;
    const interval = setInterval(() => {
      i=i+1;
      clearInterval(interval);
      setView(3);
      setLoading(false);
    }, 1000);
  }
  const submitLiveStatus=(tn="NULL")=>{
    setShowError1(false);

    if(tn==="NULL"){
      if(!trainName || trainName.label===""){
        setShowError1(true);
        return ;
      }
      details_train["trainNo"]=trainName.label.slice(0,5);
      details_train["trainName"]=trainName.label.slice(6);
    }
    else{
      setTrainName(tn);
      details_train["trainNo"]=tn.slice(0,5);
      details_train["trainName"]=tn.slice(6);
    }
    setTrainStatus(details_train);
    setView(2);
    let i=0;
    const interval = setInterval(() => {
      i=i+1;
      clearInterval(interval);
      setView(2);
      setLoading(false);
    }, 1000);
  }
  const exchangeValues=()=>{
    let temp=toTrain;
    setToTrain(fromTrain);
    setFromTrain(temp);
  }
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
              <p style={formText}>Train Number/Name  {showError1 && <p style={{color:"red",fontWeight:"600"}}>*Enter Valid Input</p>}
              </p>
              {/* <input style={formInput} id="train_number" ref={train_number} type="text"/> */}
              <div style={{width:"100%"}}>
                <Select value={trainName} onChange={(e)=>setTrainName(e)} options={trainOption}  />
              </div>
            </div>
            <button onClick={()=>submitLiveStatus()} style={{width:"50%",borderRadius:"69px"}}>Check Status</button>
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
              {/* <input style={formInput} id="from_train" value={fromVal} onChange={(e)=>setFromVal(e.target.value)} ref={from_train} type="text"/> */}
              <div style={{width:"100%"}}>
                <Select options={options} value={fromTrain} onChange={(e)=>setFromTrain(e)}/>
              </div>
            </div>
            <img src={exchange_logo} onClick={()=>exchangeValues()} alt="exchange_logo" style={{margin:"0rem 1rem"}}/>
            <div className='form_content' style={formStyle}>
              <p style={formText}>To</p>
              {/* <input style={formInput} id='to_train' value={toVal} onChange={(e)=>setToVal(e.target.value)} ref={to_train} type="text"/> */}
              <div style={{width:"100%"}}>
                <Select options={options} value={toTrain} onChange={(e)=>setToTrain(e)}/>
              </div>
            </div>
            {showError2 && <p style={{color:"red",fontWeight:"600"}}>*Enter Valid Input</p>}
            <button onClick={()=>submitCheckTrain()} style={{width:"50%",borderRadius:"69px"}}>Check Trains</button>
          </div>
        </div>}
        {view===2 && typeof trainStatus!=='undefined' && (loading===true?<ReactLoading className='reactLoading' type={"spin"} color={"#ffffff"} height={50} width={50} />:<div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>{setView(1);setLoading(true);}}>&#8592;</p>
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
                          <th style={{padding:"0.5rem",borderLeft:"1px solid #000000"}}>{key+1}</th>
                          <th>{val.station}</th>
                          <th style={{color:`${val.sch_ActArrival==="Source"?"green":""}`}}>{val.sch_ActArrival}</th>
                          <th style={{color:`${val.delayHour===("No Delay") || val.delayHour===("00:00")?"green":"red"}`}}>{val.delayHour}</th>
                          <th  style={{color:`${val.sch_actDeparture==="Destination"?"#A07D04C9":""}`}}>{val.sch_actDeparture}</th>
                          <th style={{borderRight:"1px solid #000000", color:`${val.delayDeparture===("No Delay")||val.delayDeparture===("00:00")?"green":"red"}`}}>{val.delayDeparture}</th>
                        </tr>
                      );
                  })}
                </tbody>
            </table>
          </div>
        </div>)}
        {view===3 && typeof trainRoute!=='undefined' && (loading===true?<ReactLoading className='reactLoading' type={"spin"} color={"#ffffff"} height={50} width={50} />: <div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>{setView(1);setLoading(true)}}>&#8592;</p>
          <div style={{width:"max-content",margin:"auto",fontWeight:"500",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 className='headingColor navbarHeading' style={{fontSize:"2.5rem",fontWeight:"700",marginBottom:"2rem"}}>({trainRoute.fromCode}) {trainRoute.from} - ({trainRoute.toCode}) {trainRoute.to}</h1>
            {
              trainRoute.trains.map((val,key)=>{
                return (
                  <div key={key} style={{boxShadow:"0px 0px 20px #00000030",width:"100%",padding:"0.5rem 1rem",margin:"1rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
                    <p>{val.code}-{val.from} - {val.to} {val.name}</p>
                    <button onClick={()=>{setLoading(true);submitLiveStatus(val.code+"_"+val.name)}} style={{background:"transparent",border:"2px solid #0C098F",color:"#0C098F",fontWeight:"600"}}>Track Live Status</button>
                  </div>
                );
              })
            }
          </div>

        </div>)}
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