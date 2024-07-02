import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import userIcon from './icons/total_interaction_icon.png'; 


// import PieChart from './graphs/pieChart/PieChart_ant_design';
// import PieChart from './graphs/pieChart/PieChart_chartjs';
import PieChart from './graphs/pieChart/PieChart_apexChart.js';

import LineChart from './graphs/lineChart/LineChart_chartJs.js';

import Histogram from './graphs/barChart_apexChart.js';

import GroupedBarChart from './graphs/doubleBarChart/doubleBarChart_apexChart.js';

import DonutChart from './graphs/DonutChart_apexChart.js';

import FrameInfo from './graphs/frameInfo.js'


const dataPie = [
  { item: 'Messages well handed', value: 40 },
  { item: 'NLU Fallbacks', value: 5 },
  { item: 'Functional Fallbacks', value: 5 },
]

const dataLine = [
  { date: '2024-01-01', value: 10, category: 'Previous Period' },
  { date: '2024-01-02', value: 15, category: 'Previous Period' },
  { date: '2024-01-03', value: 20, category: 'Previous Period' },
  { date: '2024-01-04', value: 20, category: 'Previous Period' },
  { date: '2024-01-05', value: 10, category: 'Previous Period' },
  { date: '2024-01-06', value: 28, category: 'Previous Period' },
  { date: '2024-01-07', value:  0, category: 'Previous Period' },
  { date: '2024-01-01', value: 12, category: 'Current Period' },
  { date: '2024-01-02', value: 18, category: 'Current Period' },
  { date: '2024-01-03', value: 25, category: 'Current Period' },
  { date: '2024-01-04', value: 20, category: 'Current Period' },
  { date: '2024-01-05', value: 20, category: 'Current Period' },
  { date: '2024-01-06', value: 20, category: 'Current Period' },
  { date: '2024-01-07', value: 20, category: 'Current Period' },
];

const dataWeek = [
  {weekday : 'Sunday'   ,value: 10},
  {weekday : 'Monday'   ,value: 15},
  {weekday : 'Tuesday'  ,value: 18},
  {weekday : 'Wednesday',value: 0 },
  {weekday : 'Thursday' ,value: 10},
  {weekday : 'Friday'   ,value: 20},
  {weekday : 'Saturday' ,value: 13 }
]

const dataFallbacks = [
  { date: '01/01/2024', val_1: 30, val_2: 40 },
  { date: '02/01/2024', val_1: 20, val_2: 30 },
  { date: '03/01/2024', val_1: 40, val_2: 50 },
  { date: '04/01/2024', val_1: 10, val_2: 20 },
  { date: '01/01/2024', val_1: 30, val_2: 40 },
  { date: '02/01/2024', val_1: 20, val_2: 30 },
  { date: '03/01/2024', val_1: 40, val_2: 50 },
  { date: '04/01/2024', val_1: 10, val_2: 20 },
  { date: '01/01/2024', val_1: 30, val_2: 40 },
  { date: '02/01/2024', val_1: 20, val_2: 30 },
  { date: '03/01/2024', val_1: 40, val_2: 50 },
  { date: '04/01/2024', val_1: 10, val_2: 20 },
];

const dataCalls = [
  { item: 'One Call', value: 40 },
  { item: 'Two Calls', value: 25 },
  { item: 'Three Calls', value: 25 },
  { item: 'More Calls', value: 10 }
];

const labelsFallbacks = ["NLU Fallbacks","Functional Fallbacks"]
const colorsMap = {
  'Messages well handed': '#99ff99',
  'NLU Fallbacks': '#0073FF',
  'Functional Fallbacks': '#F4A79D',
  'One Call':'#CCE7FF',
  'Two Calls':'#99CFFF',
  'Three Calls':'#66B8FF',
  'More Calls':'#339FFF',
};

const infoTotalInteraction = {
  title:"Total Interactions",
  number: "50",
  percentage:"8.5%",
  positiveEvolution:"true",
  growing : "true",
}
const infoTotalSatisfaction = {
  title:"Total Satisfaction",
  number: "80%",
  percentage:"4.3%",
  positiveEvolution:"false",
  growing : "false",
}
const infoConversationDuration = {
  title:"Conversation Duration",
  number: "50s",
  percentage:"1.8%",
  positiveEvolution:"true",
  growing : "true",
}
const infoNumberOfTransfers = {
  title:"Number Of Transfers",
  number: "12",
  percentage:"4%",
  positiveEvolution:"false",
  growing : "true",
}

ReactDOM.render(
  <React.StrictMode>

    <div className='app'>
      <div className='frame'>

        <div className='info'>
          <FrameInfo  info = {infoTotalInteraction} icon= {userIcon}/>
          <FrameInfo  info = {infoConversationDuration} icon= {userIcon}/>
          <FrameInfo  info = {infoTotalSatisfaction} icon= {userIcon}/>
          <FrameInfo  info = {infoNumberOfTransfers} icon= {userIcon}/>
        </div>

        <div className='window lineChart center' >
          <LineChart data={dataLine} />
        </div>

        <div className='window pieChart' >
          {/* //title "Distribution of Message Handling Outcomes" */}
          <PieChart data={dataPie} title="Distribution of responses" colorsMap = {colorsMap}/>
        </div>

        
        <div className='window groupedBarChart' >
          <GroupedBarChart data={dataFallbacks} title ="Evolution of fallbacks" labels = {labelsFallbacks} colorsMap = {colorsMap}/>
          {/* //"Evolution of misunderstanding" */}
        </div>

        <div className='window donutChart' >
          <DonutChart data={dataCalls} colorsMap={colorsMap} title="Calls per User"/>
        </div>
        
        {/* <div className='window histo' >
          <Histogram data = {dataWeek} title="Weekly histogram"/>
        </div> */}

    </div>
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);
