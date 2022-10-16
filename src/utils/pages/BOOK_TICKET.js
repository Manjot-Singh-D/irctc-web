import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import NAVBAR from '../components/NAVBAR'
import exchange_logo from "../assets/Images/exchange_logo.png"
import "../styles/BOOK_TICKET.css"
import stations from '../assets/data/stations';
import Select from 'react-select'
import "../styles/TRAIN_STATUS.css"
import {Link} from "react-router-dom"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const BOOK_TICKET = () => {

  const [loading,setLoading]=useState(false);
  const [fromTrain,setFromTrain]=useState("");
  const [toTrain,setToTrain]=useState("");
  const [view,setView]=useState(1);
  const [trainRoute,setTrainRoute]=useState({});
  const [showError,setShowError]=useState(false);
  const [bookedPrice,setBookedPrice]=useState(0);
  const [randomPNR,setRandomPNR]=useState(0);
  const formStyle={width:"50%",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"};
  const formText={color:"#0C098F",fontWeight:"600",marginBottom:"0.2rem"};
  const formInput={padding:"0.5rem 1rem", border:"0.5px solid #00000060",width:"100%",outline:"none"};
  const checkbox_comp={display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",color:"#0C098F",fontWeight:"600"};
  const options = stations.data.slice(0,300);

  const route_train={
    fromCode:"NDLS",
    from:"New Delhi",
    toCode:"ADI",
    to:"Ahmedabad",
    trains:[
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express",price:[1000,500,200]},
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express",price:[1000,500,200]},
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express",price:[1000,500,200]},
      {code:"12916",from:"OLD DELHI",to:"AHMEDABAD",name:"Ashram SF Express",price:[1000,500,200]}
    ]
  }
  useEffect(()=>{
    setTrainRoute(route_train);
  },[]);
  const exchangeValues=()=>{
    let temp=toTrain;
    setToTrain(fromTrain);
    setFromTrain(temp);
  }
  const findTrains=()=>{
    setShowError(false);
    if(!fromTrain || !toTrain || toTrain.label==="" || fromTrain.label===""){
      setShowError(true);
      return ;
    }
    route_train["from"]=fromTrain.label;
    route_train["to"]=toTrain.label;

    for(let i=0;i<route_train.trains.length;i++){
      route_train.trains[i]["from"]=fromTrain.label;
      route_train.trains[i]["to"]=toTrain.label;
    }

    setTrainRoute(route_train);
    setView(2);
    setLoading(true);
    let i=0;
    const interval = setInterval(() => {
      i=i+1;
      clearInterval(interval);
      setView(2);
      setLoading(false);
    }, 1000);
  }
  const generateRandomPNR=()=>{
    setRandomPNR(Math.floor(Math.random() * 10000000000));
  }
  return (
    <div className="book_ticket" style={{backgroundColor:"#1D1AA7",minHeight:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
      <NAVBAR/>
      {view===1 && (loading===true?<ReactLoading className='reactLoading' type={"spin"} color={"#ffffff"} height={50} width={50} />:<div className='content' style={{display:"flex",justifyContent:"center",minHeight:"100vh",width:"100%",padding:"10% 0% 5% 0%"}}>
        <div className='mainContent' style={{background:"#ffffff",minWidth:"50%",padding:"2rem 0rem",margin:"2rem", display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}} >
          <h1 className='headingColor navbarHeading' style={{fontSize:"2rem",fontWeight:"700",marginBottom:"2rem"}}>BOOK TICKETS</h1>
          <div className='form_content' style={formStyle}>
            <p style={formText}>From</p>
            {/* <Dropdown style={formInput} options={options} value={options[0]} placeholder="Select an option" /> */}
            <div style={{width:"100%"}}>
              <Select options={options} value={fromTrain} onChange={(e)=>setFromTrain(e)} />
            </div>
          </div>
          <div className='form_content' style={{...formStyle,justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
            <p style={{borderTop: "1px solid #867DA0",width:"45%"}}></p>
            <img src={exchange_logo} alt="exchange_logo" onClick={exchangeValues} style={{margin:"0rem 1rem"}}/>
            <p style={{borderTop: "1px solid #867DA0",width:"45%"}}></p>
          </div>
          <div className='form_content' style={formStyle}>
            <p style={formText}>To</p>
            <div style={{width:"100%"}}>
              <Select options={options} value={toTrain} onChange={(e)=>setToTrain(e)}/>
            </div>
          </div>
          {showError && <p style={{color:"red",fontWeight:"600",fontSize:"0.8rem",width:"50%",textAlign:"end"}}>*Enter Valid Input</p>}
          <div className='form_content' style={formStyle}>
            <p style={formText}>Journey Date</p>
            <input type={"date"} style={formInput}/>
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
          <button onClick={()=>findTrains()} style={{width:"50%",borderRadius:"69px"}}>FIND TRAINS</button>
        </div>
      </div>)}
      {view===2 && typeof trainRoute!=='undefined' && (loading===true?<ReactLoading className='reactLoading' type={"spin"} color={"#ffffff"} height={50} width={50} />: <div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>{setView(1);setLoading(false)}}>&#8592;</p>
          <div style={{width:"max-content",margin:"auto",fontWeight:"500",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 className='headingColor navbarHeading' style={{fontSize:"2.5rem",fontWeight:"700",marginBottom:"2rem"}}>({trainRoute.fromCode}) {trainRoute.from} - ({trainRoute.toCode}) {trainRoute.to}</h1>
            {
              trainRoute.trains.map((val,key)=>{
                return (
                  <div key={key} style={{boxShadow:"0px 0px 20px #00000030",width:"100%",padding:"0.5rem 1rem",margin:"1rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
                    <p>{val.code}-{val.from} - {val.to} {val.name}</p>
                    <div>
                      <button onClick={()=>{setView(3);setBookedPrice(val.price[0]);generateRandomPNR();}}>A-Class | &#8377;{val.price[0]}</button>
                      <button onClick={()=>{setView(3);setBookedPrice(val.price[1]);generateRandomPNR();}}>B-Class | &#8377;{val.price[1]}</button>
                      <button onClick={()=>{setView(3);setBookedPrice(val.price[2]);generateRandomPNR();}}>C-Class | &#8377;{val.price[2]}</button>
                    </div>
                    {/* <button onClick={()=>{setLoading(true);submitLiveStatus(val.code+"_"+val.name)}} style={{background:"transparent",border:"2px solid #0C098F",color:"#0C098F",fontWeight:"600"}}>Track Live Status</button> */}
                  </div>
                );
              })
            }
          </div>

        </div>)}
        {view===3 && (loading===true?<ReactLoading className='reactLoading' type={"spin"} color={"#ffffff"} height={50} width={50} />: <div className='mainContent' style={{background:"#ffffff",position:"relative",margin:"10% 2rem",padding:"2rem",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",minWidth:"70%"}} >
          <p style={{fontSize:"3rem",position:"absolute",top:"0%",cursor:"pointer"}} onClick={()=>{setView(1);setLoading(false)}}>&#8592;</p>
          <div style={{width:"max-content",margin:"auto",fontWeight:"500",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 className='headingColor navbarHeading' style={{fontSize:"1.8rem",fontWeight:"700",marginBottom:"2rem"}}>({trainRoute.fromCode}) {trainRoute.from} - ({trainRoute.toCode}) {trainRoute.to}</h1>
            <p style={{color:"green",fontSize:"1.2rem",margin:"0.5rem"}}>Ticket Booked Successfully!!</p>
            <p style={{fontSize:"1rem",margin:"0.5rem"}}>Received &#8377;{bookedPrice}</p>
            <p style={{fontSize:"1.2rem",margin:"0.5rem"}}>Generated PNR Number is : {randomPNR}</p>
            <Link to="/"><button>Back To Home</button></Link>
          </div>

        </div>)}
    </div>
  )
}

export default BOOK_TICKET