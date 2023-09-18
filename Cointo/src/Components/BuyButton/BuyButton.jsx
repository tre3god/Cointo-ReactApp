import React, { useState, useEffect } from 'react'




export default function BuyButton({ input, setInput, setPortfolio, portfolio, BASE_URL, TOKEN }) {
    const [coin, setCoin] = useState("");
    const [purchaseAmount, setPurchaseAmount] = useState("");
    const [numberOfCoins, setNumberOfCoins] = useState("");

    // function for handlebuy
    const handleBuyButtonClick = async () => {
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
        // Data added successfully
        console.log('Data added to Airtable:', newPurchase);
      } else {
        // Handle the error here if the request fails
        console.error('Failed to add data to Airtable. Status:', response.status);
        const errorData = await response.json(); // Get error details from the response
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
    // useEffect(() => {
    //     const fetchSearch = async () => {
    //       const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${input}`);
    //       const data = await response.json();

    //       console.log(data.coins)

    //     }
    //     fetchSearch();
    //   }, [input]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Coin"
          value={coin}
          onChange={(event) => setCoin(event.target.value)}
        />
        <input
          type="text"
          placeholder="Purchase Amount"
          value={purchaseAmount}
          onChange={(event) => setPurchaseAmount(event.target.value)}
        />
        <input
          type="text"
          placeholder="Number of Coins"
          value={numberOfCoins}
          onChange={(event) => setNumberOfCoins(event.target.value)}
        />
        <button onClick={handleBuyButtonClick}>Buy</button>
      </div>
      </>
  )
}
