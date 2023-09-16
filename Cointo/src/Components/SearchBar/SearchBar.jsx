import React, { useState, useEffect } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchCoins, setSearchCoins] = useState([])
  // console.log(query);

  const updateQuery = (event) => {
    setQuery(event.target.value)
    console.log(query)
  }

  useEffect(() => {
    const fetchSearch = async () => {

      // do it doesnt search on empty or 1-2 letters
      if (query.length > 2) {
      const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
      const data = await response.json();
      // console.log(data)

      // transform data to my my desired array (only things i need)
      const extractedSearchCoins = data.coins.map((coin) => ({
        name: coin.name,
        id: coin.id,
        image: coin.large,
      }));

      console.log(extractedSearchCoins)
      setSearchCoins(extractedSearchCoins)
    } else {
      // if query.length < 2 will set state to empty array again
      setSearchCoins([])
    }

    };
    fetchSearch();
  }, [query]);
  

  return (
    <>
    <div>SearchBar</div>

    <input type='text' 
    placeholder='Search...'
    onChange={(event) => updateQuery(event)}/>

    <div>
      {searchCoins.map((coin) => (
        <div key={coin.id}>
          {coin.name}
          </div>
      ))}
    </div>
    </>
  )
}
