import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HOME from "./utils/pages/HOME";
import PNR_STATUS from './utils/pages/PNR_STATUS';
import TRAIN_STATUS from "./utils/pages/TRAIN_STATUS";
import TRAIN_SCHEDULE from "./utils/pages/TRAIN_SCHEDULE";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HOME/>}/>
        <Route exact path="/pnr-status" element={<PNR_STATUS/>}/>
        <Route exact path="/train-status" element={<TRAIN_STATUS/>}/>
        <Route exact path="/train-schedule" element={<TRAIN_SCHEDULE/>}/>
      </Routes>
    </Router>
  );
}
export default App;
