import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from '../../Components/SearchBar/SearchBar'
import TrendingStore from '../../Components/TrendingStore'


export default function Home() {
    
  
    

  return (
    <>
    
    <TrendingStore />
    <SearchBar />
    <div className="flex flex-col items-center justify-center ">
  <button className="bg-black px-6 py-3 rounded-md mt-4">
    <Link to={`/portfolio`} className="text-slate-100 hover:text-blue-500">
      Portfolio
    </Link>
  </button>
</div>  
      </>
)
}
