import React from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({data}) => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'item',
    radius: 0.6,

    
    style: {fill:({ item }) => {
      if (item === 'Messages well handed') {
          return '#99ff99';
        } else if (item === 'NLU Fallback') {
          return '#0073FF';
        } else if (item === 'Functionnal Fallback'){
          return '#F4A79D';
        }
      },
    },
    
    label: {
      text: (d) => `${d.item}\n ${d.value}`,
      position: 'spider',
      fontSize: 10,
      textAlign: 'center',
      fontStyle: 'bold',
    },
    legend : false,
  };
  
  return <Pie {...config} />;
};

export default PieChart;

// legend: {
//   color: {
//     title: false,
//     position: 'right',
//     rowPadding: 100,
//   },
// },
