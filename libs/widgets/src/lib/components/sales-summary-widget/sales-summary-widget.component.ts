import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartData } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../chart-widget/chart-widget-defaults';
import { SalesSummaryWidgetOptions } from './sales-summary-widget-options.interface';

@Component({
  selector: 'ngx-sales-summary-widget',
  templateUrl: './sales-summary-widget.component.html',
  styleUrls: ['./sales-summary-widget.component.scss'],
})
export class SalesSummaryWidgetComponent implements AfterViewInit {
  @Input()
  data: ChartData;
  @Input()
  options: SalesSummaryWidgetOptions;

  @ViewChild('canvas', { read: ElementRef, static: true })
  canvas: ElementRef;

  chart: Chart;

  isLoading: boolean;

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: this.data,
      options: defaultsDeep(
        {
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
        defaultChartOptions,
      ),
    });
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
