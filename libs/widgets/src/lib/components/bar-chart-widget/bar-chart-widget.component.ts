import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartConfiguration, ChartData } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../chart-widget/chart-widget-defaults';
import { BarChartWidgetOptions } from './bar-chart-widget-options.interface';

@Component({
  selector: 'ngx-bar-chart-widget',
  templateUrl: './bar-chart-widget.component.html',
  styleUrls: ['./bar-chart-widget.component.scss'],
})
export class BarChartWidgetComponent implements AfterViewInit {
  @Input()
  data: ChartData;
  @Input()
  options: BarChartWidgetOptions;

  @ViewChild('canvas', { read: ElementRef, static: true})
  canvas: ElementRef;

  chart: Chart;

  isLoading: boolean;

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), <ChartConfiguration>{
      type: 'bar',
      data: this.data,
      options: defaultsDeep(
        {
          layout: {
            padding: {
              left: 24,
              right: 24,
              top: 16,
              bottom: 24,
            },
          },
          scales: {
            xAxes: [
              {
                barPercentage: 0.5,
              },
            ],
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            intersect: true,
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
