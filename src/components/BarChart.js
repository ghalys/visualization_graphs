import React from 'react'
import {Bar} from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto";


function BarChart({ChartData}){
  
  return <Bar data={ChartData} 
              options={{
                        responsive: true,
                        scales: {
                          y: {beginAtZero: true},
                        },
                      }}
                      />
}

export default BarChart;