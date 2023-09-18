import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GraphPage from '../../Components/Graph/GraphPage';
import CoinData from '../../Components/CoinData/CoinData';



export default function CoinPage() {
    const { id } = useParams();
    // console.log(id)


  return (
    <>
    <div>CoinPage</div>
    <GraphPage />
    <CoinData />
    </>
  )
}
