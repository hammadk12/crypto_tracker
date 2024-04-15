import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

// Separated fetch logic can be reused
const fetchCoins = async (setCoins, setError, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1
      }
    });
    setCoins(response.data);
    setError(null);  // clear any prior errors on successful fetch
  } catch (error) {
    console.error("Error fetching data: ", error);
    setError("An error occurred while fetching data.");
    toast.error("Failed to fetch data: " + error.message);
  }
  setLoading(false);
};

const ApiData = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCoins(setCoins, setError, setLoading);
    const interval = setInterval(() => fetchCoins(setCoins, setError, setLoading), 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Crypto Market</h1>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            <img src={coin.image} alt={coin.name} style={{ width: '25px', height: '25px' }} />
            {coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;