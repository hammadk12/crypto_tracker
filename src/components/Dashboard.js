import React from 'react'
import useFetchCoins from '../hooks/useFetchCoins';
import ApiData from './ApiData';
import CryptoTable from './CryptoTable';
import CryptoChart from './CryptoChart';
import ErrorBoundary from './ErrorBoundary';

const areEqual = (prevProps, nextProps) => {
  // Check if isLoading has changed
  if (prevProps.isLoading !== nextProps.isLoading) {
    return false;
  }

  // Check if error has changed
  if (prevProps.error !== nextProps.error) {
    return false;
  }

  // Check if coins array has changed
  if (prevProps.coins !== nextProps.coins) {
    return false;
  }

  return true;
}

const Dashboard = React.memo(() => {
  console.log('Dashboard mounted');
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
    <div className='flex flex-col rounded-xl shadow-xl bg-black p-20 lg:mx-40'>
      <h2 className='text-center text-4xl md:text-5xl lg:text-7xl mb-14'>Dashboard</h2>
      <ApiData coins={coins}/>
      <CryptoTable data={coins} />
      <CryptoChart data={coins} />
    </div>
    </ErrorBoundary>
  )
}, areEqual);

export default Dashboard