import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

const CryptoChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.time), 
    datasets: [{
      label: 'Price',
      data: data.map(d => d.value),
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    }],
  };

  return <Line data={chartData} options={options}/>;
};

export default CryptoChart