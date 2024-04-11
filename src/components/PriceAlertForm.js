import React from 'react'

const PriceAlertForm = ({ coin }) => {
    const [price, setPrice] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Store the alert in local storage or state
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">Set Alert for {coin.name}</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          aria-label={`Set price alert for ${coin.name}`}
        />
        <button type="submit">Set Alert</button>
      </form>
    );
  };

export default PriceAlertForm