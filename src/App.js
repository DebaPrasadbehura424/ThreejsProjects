import React from "react";
import './index.css';
import Loading from "./Components/LoadHome/Loading";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/LoadHome/Home";
import Maleyoga from "./Components/male30/maleyoga";
import Exer from "./Components/male30/Exer";
import LastExer from "./Components/male30/lastExer";
import Vedpost from "./Components/Post/vedpost";
import Myacc from "./Components/Profile/myacc";
import Mypost from "./Components/Post/mypost";
import Shop from "./shoppers/shop";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/yoga" element={<Maleyoga />} />
        <Route path="/excercise1" element={<Exer />} />
        <Route path="/Pratice1" element={<LastExer />} />
        <Route path="/Post" element={<Vedpost />} />
        <Route path="/myacc" element={<Myacc />} />
        <Route path="/mypost" element={<Mypost />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
