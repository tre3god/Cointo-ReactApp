import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrendingStore() {
    const [trending, setTrending] = useState([]);

    async function fetchTrending() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)

        // change their data to my desired array (only things i need)
        const extractedTrendingCoins = data.coins.map((coin) => ({
            id: coin.item.id,
            name: coin.item.name,
            priceBtc: coin.item.price_btc,
            symbol: coin.item.symbol,
            marketCapRank: coin.item.market_cap_rank,
            image: coin.item.large,
          }));
      
          setTrending(extractedTrendingCoins);
        // console.log(data) ;

      } catch (error) {
        console.error('Error fetching data from CoinGecko:', error);
        return [];
      }
    }

    useEffect(() => {
        async function fetchData() {
          const trendingData = await fetchTrending();
        //   console.log(trendingData); 
        }
        fetchData();
      }, []);
      console.log(trending)
  


  return (
  <>
    <div>TrendingStore</div>
    <div>
      {trending.map((coin) => (
        <span key={coin.id}>
            <Link to={`/trending/${coin.id}`}>
          {coin.name}
          </Link>
        </span>
      ))}
    </div>
  </>
);
}
