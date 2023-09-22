import React from 'react'
import { useEffect, useState } from 'react';

export default function WatchlistSummary({ BASE_URL, TOKEN, portfolio, setPortfolio }) {
    const [totalPurchaseAmount, setTotalPurchaseAmount] = useState(0);

    
    useEffect(() => {
        const fetchAirTable = async () => {
          const response = await fetch(`${BASE_URL}/`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          const data = await response.json();
          console.log(data);
      
          const portfolioData = data.records.map((data) => ({
            ...data.fields,
            id: data.id,
          }));
      
          // calculate the sum of "Purchase Amount"
          const purchaseAmountSum = portfolioData.reduce(
            (sum, item) => sum + item["Purchase Amount"],
            0
          );
      
          setPortfolio(portfolioData);

          // set total sum state
          setTotalPurchaseAmount(purchaseAmountSum); 
        };
        fetchAirTable();
      }, []);
      



  return (
    <div>
    <table>
    <thead className="flex flex-col items-center text-2xl font-bold my-4">
      <tr>
        <th>Total Purchase Amount</th>
      </tr>
    </thead>
    <tbody className="flex flex-col items-center text-2xl font-bold my-4">
        <tr >
            <td >${totalPurchaseAmount.toFixed(2)}</td>
        </tr>
    </tbody>
  </table>
  </div>
  )
}
