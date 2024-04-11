import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ApiData = () => {

    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                  params: { vs_currency: 'usd', order: 'market_cap_desc' }
                });
                setCoins(result.data);
              } catch (error) {
                console.error("Error fetching data: ", error);
                // Trigger toast notification here
              }
            };

            fetchData();
            const interval = setInterval(fetchData, 60000); // Update every minute
        
            return () => clearInterval(interval); // Cleanup interval on component unmount
          }, []);
        }

export default ApiData;