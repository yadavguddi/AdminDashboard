"use client";
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SimpleGraph({ timestamps, counts ,label}) {
  const [chartData, setChartData] = useState(null); // Initialize state with null

  useEffect(() => {
    // Prepare the data for the chart using timestamps and counts
    const data = {
      labels: timestamps, // Use timestamps as the labels
      datasets: [
        {
          label: label, // Label for the dataset
          data: counts, // Use counts as the data
          borderColor: '#3e95cd',
          backgroundColor: '#7bb6dd',
          fill: false,
        },
      ],
    };

    setChartData(data); // Set chart data after processing
  }, [timestamps, counts]); // Re-run effect when timestamps or counts change

  // Check if chartData is available
  if (!chartData) {
    return <p>Loading...</p>; // Show loading until data is set
  }

  return (
    <div className="chart-container" style={{ width: '80%', margin: 'auto', paddingTop: '50px' }}>
      <h1>Simple Line Chart</h1>
      <div style={{ width: '100%', height: '400px' }}>
        <Line data={chartData} /> {/* Render the chart once chartData is available */}
      </div>
    </div>
  );
}
