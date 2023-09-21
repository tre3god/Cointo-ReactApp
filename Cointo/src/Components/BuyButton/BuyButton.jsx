import React, { useState, useEffect } from 'react'


export default function BuyButton({ input, setInput, setPortfolio, portfolio, BASE_URL, TOKEN }) {
    const [coin, setCoin] = useState("");
    const [purchaseAmount, setPurchaseAmount] = useState("");
    const [numberOfCoins, setNumberOfCoins] = useState("");
    
    // state for coins suggestions
    const [availableCoins, setAvailableCoins] = useState([]);

    // function for handlebuy for purchase
  const handleBuyButtonClick = async () => {

      // const lowercaseCoinName = coin.toLowerCase();

      // check input = available coins
      if (!availableCoins.includes(coin)) {
         alert('Invalid coin name. Please choose a coin from the list.');
         return;
      }

      const newPurchase = {
      Name: coin,
      // make sure return as number
      'Purchase Amount': parseFloat(purchaseAmount),
      'Number of Coins': parseFloat(numberOfCoins),
      };

    

     // post request to add newpurchase to airtable
      try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
         headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        records: [
          {
            fields: newPurchase,
           },
         ],
        }),
      });

      if (response.ok) {
        console.log('Data added to Airtable:', newPurchase);
      } else {
        console.error('Failed to add data to Airtable. Status:', response.status);
        const errorData = await response.json(); 
        console.error('Error details:', errorData);
      }
      
    } catch (error) {
    console.error('Error:', error);
     }

    // update portfolio to watchlist
    updatePortfolio(newPurchase);

    // reset the fields
    setCoin('');
    setPurchaseAmount('');
    setNumberOfCoins('');
  };

  // function to update portfolio
  const updatePortfolio = (newPurchase) => {
    setPortfolio([...portfolio, newPurchase]);
};

    // to add search suggestions when adding coin
    useEffect(() => {
        const fetchCoinSearch = async () => {
          const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${input}`);
          const data = await response.json();

          console.log(data.coins)
     
          const coinNames = data.coins.map((coin) => coin.name);
          setAvailableCoins(coinNames);

      }
        fetchCoinSearch();
      }, [input]);


    return (
      <div className="bg-gray-100 p-3 rounded-lg w-1/5">
        <input
          type="text"
          placeholder="Coin Name"
          value={coin}
          onChange={(event) => setCoin(event.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          list="availableCoins"
        />
      
        {/* suggestions for coinslist */}
        <datalist id="availableCoins">
        {availableCoins.map((coinName, index) => (
          <option key={index}  value={coinName} />
        ))}
      </datalist>

        <input
          type="text"
          placeholder="Purchase Amount"
          value={purchaseAmount}
          onChange={(event) => setPurchaseAmount(event.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Number of Coins"
          value={numberOfCoins}
          onChange={(event) => setNumberOfCoins(event.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleBuyButtonClick}
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
        >
          Buy
        </button>
      </div>
    );
  }
