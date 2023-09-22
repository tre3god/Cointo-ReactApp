import React from 'react';
import { useParams } from 'react-router-dom';
import GraphPage from '../../Components/Graph/GraphPage';
import CoinData from '../../Components/CoinData/CoinData';

export default function CoinPage() {
  const { id } = useParams();

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col items-center justify-start">
      <div className="text-3xl font-bold my-4"></div>

      <div className="w-full max-w-screen-lg p-4 bg-white rounded-lg shadow-md mb-4">
        <GraphPage />
      </div>

      <div className="w-full max-w-screen-lg p-4 bg-white rounded-lg shadow-md">
        <CoinData />
      </div>
    </div>
  );
}