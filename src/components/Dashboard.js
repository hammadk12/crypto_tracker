import React, { useState, useEffect } from 'react'
import ApiData from './ApiData';
import CryptoTable from './CryptoTable';
import CryptoChart from './CryptoChart';

const Dashboard = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ApiData();
      setCryptoData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        
      </h1>
    </div>
  )
}

export default Dashboard