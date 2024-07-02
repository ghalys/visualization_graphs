import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 350
    },
    series: [{
      name: 'Current Period',
      data: [10, 25, 15, 18, 20, 25, 18]
    }, {
      name: 'Previous Period',
      data: [15, 20, 18, 15, 17, 22, 5]
    }],
    xaxis: {
      categories: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7']
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 5
    },
    colors: ['#1E90FF', '#D3D3D3'],
    legend: {
      position: 'top'
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    grid: {
      borderColor: '#e7e7e7',
    }
  };

  return (
    <div className="window">
      <Chart options={options} series={options.series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
