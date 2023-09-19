import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import CoinPage from './Pages/Coinpage/CoinPage';
import Watchlist from "./Components/Watchlist/Watchlist";
import { useState } from "react";


export default function App() {
  const [portfolio, setPortfolio] = useState([])


  return (
      <>
      <h1 className="text-xl font-bold text-red-500">Cointo</h1>
      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/trending/:id" element={<CoinPage />}></Route>
        <Route path="/portfolio" element={<Watchlist />}></Route>
      </Routes>
      </>
  )

}


