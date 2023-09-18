import React from 'react'
import { useEffect, useState } from 'react';
import CoinData from '../CoinData/CoinData';
import BuyButton from '../BuyButton/BuyButton';
import SellButton from '../SellButton/SellButton';

const TOKEN =
"patEMyFBP6XE9InEM.2410ce65903fe770f8d957aaeabe59c1e0a49983a6243c1d3de60551b15dddeb";
const BASE_URL = "https://api.airtable.com/v0/appIy9yfGUFojgmtx/Crypto";


export default function Watchlist() {
    const [portfolio, setPortfolio] = useState([])
    
    //pulling airtable data
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
          console.log(portfolioData)
          setPortfolio(portfolioData);
        
        };
        fetchAirTable();
      }, []);

      //pulling coindata
    //   useEffect(() => {
    //     const fetchSearch = async () => {
    //         try {
    //             const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=true`);
    //             if (!response.ok) {
    //               throw new Error('Network response was not ok');
    //             }

    //       const data = await response.json();
    //       setCoinDetails(data)
    //       console.log(data)


    //     } catch (error) {
    //         console.error('Error fetching coin data:', error);
    //       }
    //     }
    //     fetchSearch();
    //   }, [id]);


  return (
    <>
    <div>Existing Portfolio</div>
    <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Purchase Amount</th>
            <th>Number of Coins</th>
            <th>Average Entry Price</th>
            <th>Current Price</th>
            <th> PNL % </th>

          </tr>
        </thead>
        <tbody>
          {portfolio.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item['Purchase Amount']}</td>
              <td>{item['Number of Coins']}</td>
              <td>{item['Purchase Amount']/item['Number of Coins']}</td>
              {/* <td>{CoinData}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
   
   <div>
    <BuyButton />
    <SellButton />
   </div>
    </>
  )
}

