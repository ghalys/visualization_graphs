import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(item => new Date(item.date)), 
        datasets: [
          {
            label: 'Current Period',
            data: data.filter(item => item.category === 'Current Period').map(item => item.value),
            borderColor: '#0073FF',
            backgroundColor: 'rgba(153, 255, 153, 0.2)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0, // Suppress points
          },
          {
            label: 'Previous Period',
            data: data.filter(item => item.category === 'Previous Period').map(item => item.value),
            borderColor: 'rgba(128, 128, 128, 0.5)',
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0, // Suppress points
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          datalabels: {
            display: false, // Disable data labels
          },
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'dd MMM yyyy',
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true, //TODO - adapt legend
              text: 'Value',
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
