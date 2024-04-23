import React from "react";
import { Routes, Route } from "react-router-dom";
import Sign_up from "./component/Sign_up";
import Sign_in from "./component/Sign_in";
import Home from "./component/home";
import Weatherforecast from "./component/Weatherforecast";
import Forgot from "./component/Forgot_password";

export default function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sign_up" element={<Sign_up/>} />
      <Route path="/Forgot" element={<Forgot/>}/>
      <Route path="/Sign_in" element={<Sign_in />} />
      <Route path="/Weatherforecast" element={<Weatherforecast />} />
    </Routes>
  );
}
