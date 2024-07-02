import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.map(item => item.item),
        datasets: [{
          data: data.map(item => item.value),
          backgroundColor: data.map(item => {
            if (item.item === 'Messages well handed') {
              return '#99ff99';
            } else if (item.item === 'NLU Fallback') {
              return '#0073FF';
            } else {
              return '#F4A79D';
            }
          }),
        }],
      },

      options: {
        plugins: {
          legend: {
            display: false, // Disable the default legend
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                const item = data[tooltipItem.dataIndex];
                return `${item.item}\n ${item.value}`;
              }
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value, context) => {
              const item = context.chart.data.labels[context.dataIndex];
              return `${item}\n${value}`;
            },
            color: '#000',
            font: {
              weight: 'bold',
              size: 12,
            },
            textAlign: 'center',
            offset: -100,
            // backgroundColor: (context) => {
            //   return context.dataset.backgroundColor[context.dataIndex];
            // },
            borderRadius: 4,
            padding: 6,
            connector: true, // Draw a line connecting the label to the slice
            connectorColor: (context) => {
              return context.dataset.backgroundColor[context.dataIndex];
            },
            connectorWidth: 1,
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

export default PieChart;
