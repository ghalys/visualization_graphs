import React from 'react';
import Chart from 'react-apexcharts';

const GroupedBarChart = ({ data,title, labels, colorsMap}) => {
  // Transform the data to get the dates and series data
  const categories = data.map(d => d.date);

  const series = [
    {
      name: labels[0],
      data: data.map(d => d.val_1)
    },
    {
      name: labels[1],
      data: data.map(d => d.val_2)
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
      zoom: {
        enabled: false 
      },
      toolbar: {
        show: true,
        tools: {
          download: false, //TODO - to choose
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    colors : labels.map(label => colorsMap[label]),
    xaxis: {
      categories: categories,
      type: 'datetime',
      labels: {
        format: 'dd MMM yyyy' // Adjust the format according to your needs
      }
    },
    title: {
      text: title,
      align: 'center'
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['#000'] // Set text color to black
        },
      dropShadow: {
        enabled: false
      }    
    },
    dropShadow: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: val => val
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    }
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" />
    </div>
  );
};

export default GroupedBarChart;
