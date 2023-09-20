import React, { useEffect, useState } from 'react';
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

    } catch (error) {
      console.error('Error fetching data from CoinGecko:', error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchTrending();
    }
    fetchData();
  }, []);

  return (
    <div className="bg-blue-300 flex flex-col items-center justify-start p-4">
      <div className="text-3xl font-bold p-1">Trending Store</div>
      <div className="grid md:grid-cols-7 gap-4">
        {trending.map((coin) => (
          <div
            key={coin.id}
            className="bg-white rounded-lg p-2 hover:scale-105"
          >
            <Link to={`/trending/${coin.id}`} className="text-xl font-bold">
              {coin.name}
            </Link>
            <div className="text-gray-600">Symbol: {coin.symbol}</div>
            <div className="text-gray-600">Market Cap Rank: {coin.marketCapRank}</div>
            <img src={coin.image} alt={coin.name} className="w-20 h-20 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
