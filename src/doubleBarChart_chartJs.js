import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(...registerables, ChartDataLabels);

const BarChart = ({ labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

  const config = {
    type: 'bar',
    data: {
      labels: labels, //TODO -  weeks or months
      datasets: [
        {
          label: 'NLU Fallback',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: '#0073FF',
          stack: 'Stack 0',
        },
        
        {
          label: 'Dataset 3',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: '#F4A79D',
          stack: 'Stack 1',
        },
      ]
    },

    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked'
        },
      },
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  };
    
  const chart = new Chart(ctx, config);

  return () => {
    chart.destroy();
  };
}, [labels]);

  return <canvas ref={chartRef} />;
};