import React from 'react'
import { useEffect, useState } from 'react';
import CoinData from '../CoinData/CoinData';
import BuyButton from '../BuyButton/BuyButton';
import PriceDisplay from '../PriceDisplay/PriceDisplay';
import WatchlistSummary from './WatchlistSummary';
import Pnl from '../PNL/Pnl';

const TOKEN =
"patEMyFBP6XE9InEM.2410ce65903fe770f8d957aaeabe59c1e0a49983a6243c1d3de60551b15dddeb";
const BASE_URL = "https://api.airtable.com/v0/appIy9yfGUFojgmtx/Crypto";

// fetch airtable data
export default function Watchlist() {
    const [portfolio, setPortfolio] = useState([])
    const [input, setInput] = useState("")

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
          setPortfolio(portfolioData);
         
        };
        fetchAirTable();
    }, []);

   
console.log(portfolio)

    return (
      <div className="bg-blue-300 min-h-screen flex flex-col items-center justify-start"> 
        <div className="text-3xl font-bold my-4">Existing Portfolio</div>
        <table className="w-full table-fixed border-collapse border border-gray-300">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Purchase Amount</th>
              <th className="p-2">Number of Coins</th>
              <th className="p-2">Average Entry Price</th>
              <th className="p-2">Current Price</th>
              <th className="p-2">PNL %</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2 text-center">{item.Name}</td>
                <td className="p-2 text-center">${item["Purchase Amount"]}</td>
                <td className="p-2 text-center">{item["Number of Coins"]}</td>
                <td className="p-2 text-center">
                  ${(item["Purchase Amount"] / item["Number of Coins"]).toFixed(2)}
                </td>
                <td className="p-2 text-center">
                  <PriceDisplay coinName = {item.Name}/>
                </td>
                <td className="p-2 text-center">
                  <Pnl coinName = {item.Name} item = {item} BASE_URL={BASE_URL} TOKEN={TOKEN} portfolio={portfolio} itempurchase={item["Purchase Amount"]} itemnumber={item["Number of Coins"]}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <br></br>
        <BuyButton
          input={input}
          setInput={setInput}
          setPortfolio={setPortfolio}
          portfolio={portfolio}
          BASE_URL={BASE_URL}
          TOKEN={TOKEN}
        />
        <br></br>
        <WatchlistSummary 
          setPortfolio={setPortfolio}
          portfolio={portfolio}
          BASE_URL={BASE_URL}
          TOKEN={TOKEN}
        />
      </div>
    );
  }
  
  
  
  
  
  
