import React from 'react'
import { useEffect, useState } from 'react';

const TOKEN =
"patEMyFBP6XE9InEM.2410ce65903fe770f8d957aaeabe59c1e0a49983a6243c1d3de60551b15dddeb";
const BASE_URL = "https://api.airtable.com/v0/appIy9yfGUFojgmtx/Crypto";


export default function Watchlist() {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        const fetchAirTable = async () => {
          const response = await fetch(`${BASE_URL}/`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          const jsonData = await response.json();
          console.log(jsonData)

          const portfolioData = jsonData.records.map((data) => ({
            ...data.fields,
            id: data.id,
          }));
          setPortfolio(portfolioData);
        
        };
        fetchAirTable();
      }, []);


  return (
    <>
    <div>Existing Portfolio</div>
    <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Coins</th>
            <th>Purchase Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item['Number of Coins (4 Decimals)']}</td>
              <td>{item['Purchase Amount']}</td>
              <td>{item['Price (4 Decimals)']}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </>
  )
}

