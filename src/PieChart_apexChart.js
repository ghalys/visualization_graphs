import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data,title,colorsMap }) => {

  const labels = data.map(d => d.item);


  const options = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: labels,
    colors : labels.map(label => colorsMap[label]),
    title: {
      text: title,
      align: 'center'
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        return opts.w.config.series[opts.seriesIndex];
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['#000'] //TODO - or white, remove this line
      },
      dropShadow: {
        enabled: false
      }
    },
  };

  const series = data.map(item => item.value);

  return (
      <Chart options={options} series={series} type="pie" height={350} />
  );
};

export default PieChart;
