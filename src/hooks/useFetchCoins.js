import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useFetchCoins = () => {
  const [data, setData] = useState({
    coins: [],
    isLoading: false,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      setData(prevData => ({ ...prevData, isLoading: true }));
      try {
        const response = await axios.get('http://localhost:5000/api/coins', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1
          }
        });
        setData({ coins: response.data, isLoading: false, error: null });
      } catch (error) {
        console.error("Error fetching data: ", error);
        setData(prevData => ({ ...prevData, isLoading: false, error: "Failed to fetch data" }));
        toast.error("Failed to fetch data: " + error.message);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 264000); // Update every 4.4 minutes
    return () => clearInterval(interval);
  }, []);

  return data;
};

export default useFetchCoins;
