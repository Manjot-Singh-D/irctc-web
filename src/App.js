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
import BOOK_TICKET from "./utils/pages/BOOK_TICKET";
import LOGIN from "./utils/pages/LOGIN";
import SIGNUP from "./utils/pages/SIGNUP";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HOME/>}/>
        <Route exact path="/login" element={<LOGIN/>}/>
        <Route exact path="/signup" element={<SIGNUP/>}/>
        <Route exact path="/book-ticket" element={<BOOK_TICKET/>}/>
        <Route exact path="/pnr-status" element={<PNR_STATUS/>}/>
        <Route exact path="/train-status" element={<TRAIN_STATUS/>}/>
        <Route exact path="/train-schedule" element={<TRAIN_SCHEDULE/>}/>
      </Routes>
    </Router>
  );
}
export default App;
