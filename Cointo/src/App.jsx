import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';


export default function App() {


  return (
      <>
      <h1>Cointo</h1>
      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        
        {/* <Route path="/trending" element={<TrendingStore />}></Route> */}

      </Routes>
      </>
  )

}


