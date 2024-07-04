import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ data, colorsMap, title}) => {
  const labels = data.map(d => d.item);

  const options = {
    chart: {
      type: 'donut',
      height: 350,
    },
    labels: labels,
    colors : labels.map(label => colorsMap[label]),
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        return opts.w.config.series[opts.seriesIndex] + '%';
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        colors: ['#000'] // Set text color to black
      },
      dropShadow: {
        enabled: false
      }
    },

    //TODO - to keep the title or to remove it and add it from outside the graph
    title: {
      text: title,
      align: 'center', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#263238'
      },
      floating: false, 
      offsetX: -55,
      offsetY: 115,
    },

    tooltip: {
      enabled: true,
      y: {
        formatter: val => val + '%'
      }
    }
  };

  const series = data.map(item => item.value);

  return (

      <Chart options={options} series={series} type="donut"  />
   
  );
};

export default DonutChart;
