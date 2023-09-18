import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../Components/SearchBar/SearchBar'
import TrendingStore from '../../Components/TrendingStore'
import { Route, Routes } from "react-router-dom";


export default function Home() {
    
  
    

  return (
    <>
    <h2>Home</h2>  
    
    <TrendingStore />
    <SearchBar />
    </>
)
}
