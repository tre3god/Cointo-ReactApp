import React from 'react'
import { useState, useEffect } from 'react';

export default function TrendingStore() {
    const [trending, setTrending] = useState([]);

    async function fetchTrending() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTrending(data) //set state to trending coins
        console.log(data) ;

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
  


  return (
    <>
    <div>TrendingStore</div>
    <div>
     
    </div>
    </>
  )
}
