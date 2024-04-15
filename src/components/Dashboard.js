import React, { useState, useEffect } from 'react'
import ApiData from './ApiData';
import CryptoTable from './CryptoTable';
import CryptoChart from './CryptoChart';

const Dashboard = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoins();
      setCryptoData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className='text-center text-4xl md:text-5xl lg:text-7xl'>Dashboard</h2>
      <CryptoTable data={cryptoData} />
      <CryptoChart data={cryptoData} />
    </div>
  )
}

export default Dashboard