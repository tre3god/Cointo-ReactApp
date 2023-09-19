import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from '../../Components/SearchBar/SearchBar'
import TrendingStore from '../../Components/TrendingStore'


export default function Home() {
    
  
    

  return (
    <>
    <h2 className="text-3xl font-bold underline" >Home</h2>  
    
    <TrendingStore />
    <SearchBar />
    <button><Link to={`/portfolio`}>Portfolio</Link></button>
    </>
)
}
