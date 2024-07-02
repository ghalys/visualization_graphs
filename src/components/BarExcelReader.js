import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarExcelReader = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const data_array = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data_array, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Extract column names
      const labels = jsonData.slice(1).map(row => {
        const cell = row[0];
        const date = XLSX.SSF.parse_date_code(cell);
        return moment(new Date(date.y, date.m - 1, date.d)).format('YYYY-MM-DD');
      });
      const dataSet1 = jsonData.slice(1).map(row => row[1]); // Second column for dataset 1
      console.log(jsonData);
      const data = {
        labels: labels,
        datasets: [
          {
            label: jsonData[0][1], // Label for dataset 1
            data: dataSet1,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h2>Data from Excel File</h2> */}
      {chartData && (
        <Bar
          data={chartData}
          // options={{
          //   responsive: true,
          //   scales: {
          //     y: {
          //       beginAtZero: true,
          //     },
          //   },
          // }}
        />
      )}
    </div>
  );
};

export default BarExcelReader;
