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
        <div className="bg-white w-full max-w-screen-lg p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Coin Data</h2>
          <div>
            <h2 className="text-xl font-semibold">Name: {coinDetails.name}</h2>
            <p className="text-lg">Current Price: {coinDetails.market_data?.current_price?.sgd} SGD</p>
            <p className="text-lg">24Hrs Change: {coinDetails.market_data?.price_change_percentage_24h_in_currency?.sgd}%</p>
            <div className="flex flex-col items-center justify-center">
              <img src={coinDetails.image?.large} alt={coinDetails.name} className="w-16 h-16 mt-4" />
            </div>
            {/* <div className="mt-4 text-base">{coinDetails.description?.en}</div> */}
          </div>
        </div>
      );
    }
