import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartData } from 'chart.js';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

import {
  advancedPieChartDemoLabels,
  advancedPieChartDemoValues,
  audienceOverviewBounceRateDemoData,
  audienceOverviewBounceRateDemoDataLastWeek,
  audienceOverviewBounceRateDemoLabels,
  audienceOverviewSessionDurationDemoData,
  audienceOverviewSessionDurationDemoLabels,
  audienceOverviewSessionDurationDemoLastWeek,
  audienceOverviewSessionsDemoData,
  audienceOverviewSessionsDemoDataLastWeek,
  audienceOverviewSessionsDemoLabels,
  audienceOverviewUsersDemoData,
  audienceOverviewUsersDemoDataLastWeek,
  audienceOverviewUsersDemoLabels,
  clicksChartDemoLabels,
  clicksChartDemoValues,
  conversionsChartDemoLabels,
  conversionsChartDemoValues,
  recentSalesChartDemoLabels,
  recentSalesChartDemoValues,
  recentSalesTableDemoData,
  salesChartDemoLabels,
  salesChartDemoValues,
  salesSummaryDemoData,
  salesSummaryDemoLabels,
  top5CategoriesDemoData,
  visitsChartDemoLabels,
  visitsChartDemoValues,
} from '../../demo-data/widget-demo-data';

/**
 * This is just a demo service for populating the charts on the dashboard.
 * You will have to implement a similiar service for the data to be populated.
 * Examples are provided below :)
 */

@Injectable()
export class WizdashService {
  // url = environment.backend;

  constructor(private http: HttpClient) {}

  getSales() {
    /**
     * Example for real request

     return this.http.get(this.url + '/sales').pipe(
     map(response => this.toSalesChartData(response))
     );
     */

    // Simulating request from local data
    return of({ labels: salesChartDemoLabels(), data: salesChartDemoValues }).pipe(
      map(values => this.toSalesChartData(values)),
    );
  }

  /**
   * Converting Data from Server to Chart compatible format
   */
  toSalesChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Sales',
          data: chartData.data,
          backgroundColor: '#FFFFFF',
        },
      ],
    } as ChartData;
  }

  getVisits() {
    // Simulating request from local data
    return of({ labels: visitsChartDemoLabels(), data: visitsChartDemoValues }).pipe(
      map(values => this.toVisitsChartData(values)),
    );
  }

  toVisitsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Visits',
          data: chartData.data,
          backgroundColor: '#FFFFFF',
          fill: false,
          borderColor: '#FFFFFF',
          borderWidth: 2,
          lineTension: 0,
        },
      ],
    } as ChartData;
  }

  getClicks() {
    // Simulating request from local data
    return of({ labels: clicksChartDemoLabels(), data: clicksChartDemoValues }).pipe(
      map(values => this.toClicksChartData(values)),
    );
  }

  toClicksChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Clicks',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2,
        },
      ],
    } as ChartData;
  }

  getConversions() {
    // Simulating request from local data
    return of({ labels: conversionsChartDemoLabels(), data: conversionsChartDemoValues }).pipe(
      map(values => this.toConversionsChartData(values)),
    );
  }

  toConversionsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Conversions',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2,
          pointRadius: 0,
          lineTension: 0,
        },
      ],
    } as ChartData;
  }

  getSalesSummary() {
    // Simulating request from local data
    return of({ labels: salesSummaryDemoLabels(), data: salesSummaryDemoData }).pipe(
      map(values => this.toSalesSummaryChartData(values)),
    );
  }

  toSalesSummaryChartData(chartData: { labels: string[]; data: { [set: string]: number[] } }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: '#7cb342',
          data: chartData.data.revenue,
        },
        {
          label: 'Expenses',
          backgroundColor: '#EEEEEE',
          data: chartData.data.expenses,
        },
      ],
    } as ChartData;
  }

  getTop5Categories() {
    // Simulating request from local data
    return of(top5CategoriesDemoData).pipe(map(values => this.toTop5CategoriesChartData(values)));
  }

  toTop5CategoriesChartData(chartData: { label: string; value: number }[]) {
    return {
      labels: chartData.map(data => data.label),
      datasets: [
        {
          data: chartData.map(data => data.value),
          backgroundColor: ['#2196F3', '#009688', '#4CAF50', '#607D8B', '#E91E63'],
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewUsers() {
    // Simulating request from local data
    return of({
      labels: audienceOverviewUsersDemoLabels(),
      data: { thisWeek: audienceOverviewUsersDemoData, lastWeek: audienceOverviewUsersDemoDataLastWeek },
    }).pipe(map(values => this.toAudienceOverviewUsersChartData(values)));
  }

  toAudienceOverviewUsersChartData(chartData: { labels: string[]; data: { [set: string]: number[] } }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Users',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          borderColor: '#4285f4',
          pointRadius: 0,
        },
        {
          label: 'Users - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewSessions() {
    // Simulating request from local data
    return of({
      labels: audienceOverviewSessionsDemoLabels(),
      data: { thisWeek: audienceOverviewSessionsDemoData, lastWeek: audienceOverviewSessionsDemoDataLastWeek },
    }).pipe(map(values => this.toAudienceOverviewSessionsChartData(values)));
  }

  toAudienceOverviewSessionsChartData(chartData: { labels: string[]; data: { [set: string]: number[] } }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Sessions',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          backgroundColor: '#4285f4',
          borderColor: '#4285f4',
        },
        {
          label: 'Sessions - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewBounceRate() {
    // Simulating request from local data
    return of({
      labels: audienceOverviewBounceRateDemoLabels(),
      data: { thisWeek: audienceOverviewBounceRateDemoData, lastWeek: audienceOverviewBounceRateDemoDataLastWeek },
    }).pipe(map(values => this.toAudienceOverviewBounceRateChartData(values)));
  }

  toAudienceOverviewBounceRateChartData(chartData: { labels: string[]; data: { [set: string]: number[] } }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Bounce Rate',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          backgroundColor: '#4285f4',
          borderColor: '#4285f4',
        },
        {
          label: 'Bounce Rate - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewSessionDuration() {
    // Simulating request from local data
    return of({
      labels: audienceOverviewSessionDurationDemoLabels(),
      data: {
        thisWeek: audienceOverviewSessionDurationDemoData,
        lastWeek: audienceOverviewSessionDurationDemoLastWeek,
      },
    }).pipe(map(values => this.toAudienceOverviewSessionDurationChartData(values)));
  }

  toAudienceOverviewSessionDurationChartData(chartData: { labels: string[]; data: { [set: string]: number[] } }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Session Duration',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          backgroundColor: '#4285f4',
          borderColor: '#4285f4',
        },
        {
          label: 'Session Duration - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getRecentSalesTableData() {
    // Simulating request from local data
    return of(recentSalesTableDemoData);
  }

  getRecentSalesData() {
    return of({
      labels: recentSalesChartDemoLabels(),
      data: recentSalesChartDemoValues,
    }).pipe(map(values => this.toRecentSalesChartData(values)));
  }

  toRecentSalesChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#DBF6F9',
          borderColor: '#DBF6F9',
          data: chartData.data,
          lineTension: 0,
        },
      ],
    };
  }

  getAdvancedPieChartData() {
    return of({
      labels: advancedPieChartDemoLabels,
      data: advancedPieChartDemoValues,
    }).pipe(map(values => this.toAdvancedPieChartData(values)));
  }

  toAdvancedPieChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Sales',
          backgroundColor: ['#009688', '#2196F3', '#9C27B0', '#00BCD4', '#F44336', '#FF9800'],
          borderColor: 'transparent',
          data: chartData.data,
        },
      ],
    };
  }
}
