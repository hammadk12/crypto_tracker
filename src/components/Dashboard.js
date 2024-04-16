import React from 'react'
import useFetchCoins from '../hooks/useFetchCoins';
import ApiData from './ApiData';
import CryptoTable from './CryptoTable';
import CryptoChart from './CryptoChart';
import ErrorBoundary from './ErrorBoundary';

const Dashboard = () => {
  const { coins, isLoading, error } = useFetchCoins();

 if (isLoading) {
  return <p className='text-center mt-5 text-lg'>Loading...</p>;
}
if (error) {
  // error handling fetching errors, not rendering errors
  return <p className='text-center mt-5 text-red-500 text-lg'>Error fetching data: {error}</p>;
}

  return (
    <ErrorBoundary>
    <div className='px-4 py-5 bg-black'>
      <h2 className='text-center text-4xl md:text-5xl lg:text-7xl'>Dashboard</h2>
      <ApiData coins={coins}/>
      <CryptoTable data={coins} />
      <CryptoChart data={coins} />
    </div>
    </ErrorBoundary>
  )
}

export default Dashboard