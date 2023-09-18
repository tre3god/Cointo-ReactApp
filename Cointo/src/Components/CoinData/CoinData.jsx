import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CoinData() {
    const { id } = useParams();
    const [coinDetails, setCoinDetails] = useState({})

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=true`);
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }

          const data = await response.json();
          setCoinDetails(data)
          console.log(data)


        } catch (error) {
            console.error('Error fetching coin data:', error);
          }
        }
        fetchSearch();
      }, [id]);


  return (
    <>
    <div>CoinData</div>
    <div>
    <h2> Name: {coinDetails.name}</h2>
    <p>Current Price {coinDetails.market_data?.current_price?.sgd} SGD</p> 
    <p>24Hrs change  {coinDetails.market_data?.price_change_percentage_24h_in_currency?.sgd}%</p>
    <p>{coinDetails.image?.large}  </p>
    <div>{coinDetails.description?.en}</div>

    </div>
    </>

  )
}
