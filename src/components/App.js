import React from 'react';
import BarExcelReader from './BarExcelReader';
// import BarChart from './components/BarChart';

const App = () => {
  return (
    // <div className="App">
    //   <div style={width:700} >
    //     <BarChart ChartData={ok}/>
    //   </div>
    // </div>
    
  <div className="App">
    <h1>Data from excel file</h1>
    <BarExcelReader />
  </div>
  );
};

export default App;
