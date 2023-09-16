import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function GraphPage() {
    const [graphData, setGraphData] = useState([]);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const fetchSearch = async () => {
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily`);
          const data = await response.json();

          // this shows timestamp vs price
          console.log(data)
          

          const graphPoint = data.prices.map((point) => {
            const [timestamp, p] = point
            const date = new Date(timestamp).toLocaleDateString("en-sg")
            return {
                    Date: date,
                    Price: p,
                    
            }
          })
            setGraphData(graphPoint)
        
        }
        fetchSearch();
      }, [id]);
      

  return (
    <>
    <div>
    <AreaChart
          width={1000}
          height={400}
          data={graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>

    </>
  )
}
