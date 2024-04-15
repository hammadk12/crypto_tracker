import React from 'react'
import useFetchCoins from '../hooks/useFetchCoins';

const ApiData = () => {
  const { coins, isLoading, error } = useFetchCoins();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

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