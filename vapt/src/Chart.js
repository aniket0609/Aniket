import React, { useEffect, useRef } from 'react';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const ChartComponent = ({ chartData }) => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      if (chartRef.current) {
        // Destroy existing chart if it exists
        const existingChart = chartRef.current.chart;
        if (existingChart) {
          existingChart.destroy();
        }
  
        // Create new chart
        const newChart = new Chart(chartRef.current, {
          type: 'doughnut',
          data: {
            labels: chartData.labels,
            datasets: [
              {
                label: 'Language Popularity',
                data: chartData.data,
              },
            ],
          },
          options: {
            borderWidth: 10,
            borderRadius: 2,
            hoverBorderWidth: 0,
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
  
        // Update the chart reference
        chartRef.current.chart = newChart;
      }
    }, [chartData]);
  
    return <canvas ref={chartRef} />;
  };
  
  export default ChartComponent;
  