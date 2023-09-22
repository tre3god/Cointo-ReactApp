import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import CoinPage from './Pages/Coinpage/CoinPage';
import Watchlist from "./Components/Watchlist/Watchlist";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [portfolio, setPortfolio] = useState([])


  return (
      <>
      <Link to="/" className="text-center text-6xl font-bold text-slate-100 bg-black p-5 block">
        Cointo
      </Link>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending/:id" element={<CoinPage />}></Route>
        <Route path="/portfolio" element={<Watchlist />}></Route>
      </Routes>
      </>
  )

}

//https://www.youtube.com/watch?v=0sY4fUi5dMM


