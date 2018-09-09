import { ChartOptions } from 'chart.js';

export const defaultChartOptions: ChartOptions = {
  responsive: true,
  responsiveAnimationDuration: 1000,
  animation: {
    duration: 1000,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  tooltips: {
    /* tslint:disable */
    titleFontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
    bodyFontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
    footerFontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
};
