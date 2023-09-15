import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  const [crypto, setCrypto] = useState([]);

  async function fetchCoinsFromCoinGecko() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from CoinGecko:', error);
      return [];
    }
  }

  useEffect(() => {
  async function fetchData() {
    const coinGeckoData = await fetchCoinsFromCoinGecko();
    console.log(coinGeckoData); // You can do something with the fetched data here
  }
  fetchData();
}, []);

  return (
      <>
      <h1>Cointo</h1>
      </>
  )

}


