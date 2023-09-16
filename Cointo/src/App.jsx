import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import CoinPage from './Pages/Coinpage/CoinPage';


export default function App() {


  return (
      <>
      <h1>Cointo</h1>
      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        
        {/* <Route path="/trending" element={<TrendingStore />}></Route> */}
        {/* <Route path={`/trending/${coin.name}`} element={<CoinPage />}></Route> */}
        <Route path="/trending/:id" element={<CoinPage />}></Route>

      </Routes>
      </>
  )

}


