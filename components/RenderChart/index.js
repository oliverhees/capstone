import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeightChart = ({ dWeight }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Filtere Einträge ohne Datum und parse gültige Daten
    const validData = dWeight.filter(data => data.weight_date);
    const parsedData = validData.map(data => ({
      weight: parseFloat(data.weight),
      date: new Date(data.weight_date.split('.').reverse().join('-')),
    }));

    if (parsedData.length > 0) {
      const lastFiveDaysData = parsedData.slice(-5);

      const dates = lastFiveDaysData.map(data => {
        const day = data.date.getDate();
        const month = data.date.getMonth() + 1;

        return `${day}.${month}`;
      });

      const weights = lastFiveDaysData.map(data => data.weight);

      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              data: weights,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              text: 'Chart.js Line Chart',
            },
          },
        },
      });
    }
  }, [dWeight]);

  return <canvas ref={chartRef} />;
};

export default WeightChart;

