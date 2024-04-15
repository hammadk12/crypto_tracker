import React from 'react'

const CryptoTable = ({ data }) => {
  return (
    <table>
     <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>24h Change</th>
      </tr>
     </thead>
     <tbody>
        {data.map(coin => (
            <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>${coin.current_price.toFixed(2)}</td>
                <td>{coin.market_cap ? coin.market_cap.toLocaleString() : 'N/A'}</td>
                <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            </tr>
        ))}
     </tbody>
    </table>
  )
}

export default CryptoTable