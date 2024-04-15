import React from 'react'

const ApiData = ({ coins }) => {

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