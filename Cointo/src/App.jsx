import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import TrendingStore from './Stores/TrendingStore';

export default function App() {


  return (
      <>
      <div>5173</div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/trending" element={<TrendingStore />}></Route>

      </Routes>
      </>
  )

}


