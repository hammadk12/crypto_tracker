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
        {data.map(coin)}
     </tbody>
    </table>
  )
}

export default CryptoTable