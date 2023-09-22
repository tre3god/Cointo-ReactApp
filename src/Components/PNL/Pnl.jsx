import React from 'react'
import { useState, useEffect } from 'react';

export default function Pnl( {coinName, BASE_URL, TOKEN, portfolio, setPortfolio, item, itempurchase, itemnumber }) {
    const [coinPrice, setCoinPrice] = useState({});

    useEffect(() => {
      const fetchCoinData = async () => {
        try {
          // fetch coinID using coinname
          const searchResponse = await fetch(
            `https://api.coingecko.com/api/v3/search?query=${coinName}`
          );
          if (!searchResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const searchData = await searchResponse.json();
          const coinId = searchData.coins[0]?.id;
  
          if (!coinId) {
            console.error(`Coin ID not found for ${coinName}`);
            return;
          }
  
          // fetch coinprice using coinID
          const coinResponse = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}?localization=true`
          );
          if (!coinResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const coinData = await coinResponse.json();
  
          setCoinPrice(coinData);
          
        } catch (error) {
          console.error('Error fetching coin data:', error);
        }
      };
  
      fetchCoinData();
    }, [coinName]);
    console.log(coinName)

        
    
    return (
        <>
        <div>
        {(((coinPrice.market_data?.current_price?.sgd - (itempurchase / itemnumber)) / (itempurchase / itemnumber)) * 100).toFixed(2)}%

        </div>
        </>
    )
        }