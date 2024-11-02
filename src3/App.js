import React, { useContext } from "react";
import Home from "./Components/home/Home";
import './index.css';
import { Route, Routes } from "react-router-dom";
import Userdata from "./Components/Userdata/userdata";
import Navbar from "./Components/home/Navbar";
import Notes from "./Components/write/Notes";
import Storetheme from "./Components/Them/Storetheme";
import Storeclick from "./Components/Them/Storeclick";
import Loginup from "./Components/login/Loginup";
import Mymoo from "./Components/myacc/Mymoo";
import Abouthead from "./Components/about/Abouthead";
import Foot from "./Components/home/Foot";

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdata" element={<Userdata />} />
        <Route path="/write" element={<Notes />} />
        <Route path="/theme" element={<Storetheme />} />
        <Route path="/storeclick" element={<Storeclick />} />
        <Route path="/login" element={<Loginup />} />
        <Route path="/Account" element={<Mymoo />} />
        <Route path="/Abouthead" element={<Abouthead />} />
      </Routes>
     
    </React.Fragment>
  );
}

export default App;
