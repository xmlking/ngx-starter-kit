import { ChartOptions } from 'chart.js';

export const defaultChartOptions: ChartOptions = {
  responsive: true,
  animations: {
    resize: {
      duration: 1000,
    },
  },
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      /* tslint:disable */
      titleFont: { family: "Roboto, 'Helvetica Neue', Arial, sans-serif" },
      bodyFont: { family: "Roboto, 'Helvetica Neue', Arial, sans-serif" },
      footerFont: { family: "Roboto, 'Helvetica Neue', Arial, sans-serif" },
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};
