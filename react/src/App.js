// Importing modules
import Router from "./routes.js";
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import './styles/aboutus.css';
import Weatherforcast from "./component/Weatherforecast.js";

function App() {
	return (
		<BrowserRouter>
			<Router/>
		</BrowserRouter>
		
	);
}

export default App;
