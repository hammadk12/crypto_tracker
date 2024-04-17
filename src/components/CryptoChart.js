import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true // This sets the y-axis to begin at zero
    }
  },
  plugins: {
    legend: {
      position: 'top', // Position the legend on top of the chart
    },
    title: {
      display: true,
      text: 'Crypto Price Chart' // Title of the chart
    }
  }
};

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

  return <Line data={chartData} options={options} />;
};

export default CryptoChart;