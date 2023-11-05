import {
  Chart as Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js/auto';

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  Title,
  Filler
);

import { Line } from 'react-chartjs-2';

function LineCharts() {
  const data = {
    labels: ['5', '10', '15', '18', '20', '25', '27', '31'],
    datasets: [
      {
        label: 'T-Shirt',
        data: [20, 40, 20, 50, 20, 40, 20, 50],
        backgroundColor: 'transparent',
        borderColor: '#6C60FF', //LINE
        tension: '0.4',
      },
      {
        label: 'Hoodie',
        data: [50, 20, 30, 10, 50, 20, 30, 10],
        backgroundColor: 'transparent',
        borderColor: '#CE2A96', //Line
        tension: '0.4',
      },
      {
        label: 'Caps',
        data: [60, 10, 50, 30, 60, 10, 50, 30],
        backgroundColor: 'transparent',
        borderColor: '#27AE60', //LINE
        tension: '0.4',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        align: 'end',
        labels: {
          boxWidth: 20,
          boxHeight: 0,
          color: '#333333',
          font: {
            size: '14px',
            style: 'bold',
          },
        },
        display: true,
      },
    },
    elements: {
      point: {
        radius: 5,
        hitRadius: 5,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    Tooltip: {
      enabled: true,
    },
  };

  return (
    <>
      <Line data={data} options={options}></Line>
    </>
  );
}
export default LineCharts;
