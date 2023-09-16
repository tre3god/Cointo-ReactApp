import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GraphPage from '../../Components/Graph/GraphPage';



export default function CoinPage() {
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const fetchSearch = async () => {
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily`);
          const data = await response.json();

          // this shows timestamp vs price
          console.log(data)

        }
        fetchSearch();
      }, [id]);
      

  return (
    <>
    <div>CoinPage</div>
    <GraphPage />

    </>
  )
}
