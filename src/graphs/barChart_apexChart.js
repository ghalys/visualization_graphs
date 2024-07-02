import React from 'react';
import Chart from 'react-apexcharts';

const Histogram = ({data,title}) => {

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: true, //TODO - to choose
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    xaxis: {
      categories:   data.map(item => item.weekday)
    },
    title: {
      text: title,
      align: 'center'
    }
  };

  const series = [{
    name: 'Values',
    data: data.map(item => item.value)
  }];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} width={400} />
    </div>
  );
};

export default Histogram;
