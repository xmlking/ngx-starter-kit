import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartConfiguration, ChartData, ChartDataSets } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../chart-widget/chart-widget-defaults';
import { LineChartWidgetOptions } from './line-chart-widget-options.interface';

@Component({
  selector: 'ngx-line-chart-widget',
  templateUrl: './line-chart-widget.component.html',
  styleUrls: ['./line-chart-widget.component.scss'],
})
export class LineChartWidgetComponent implements AfterViewInit {
  @Input()
  data: ChartData;
  @Input()
  options: LineChartWidgetOptions;

  @ViewChild('canvas', { read: ElementRef, static: true })
  canvas: ElementRef;
  chart: Chart;

  isLoading: boolean;

  constructor() {}

  ngAfterViewInit() {
    const that = this;
    const canvas = this.canvas.nativeElement.getContext('2d');

    const onResize = (chart, size) => {
      if (that.options && that.options.gradientFill) {
        const gradient = canvas.createLinearGradient(0, 0, 0, size.height);
        gradient.addColorStop(0, that.options.gradientFill.from);
        gradient.addColorStop(1, that.options.gradientFill.to);

        that.chart.data.datasets.forEach((dataset: ChartDataSets) => {
          dataset.fill = 'origin';
          dataset.pointBackgroundColor = dataset.backgroundColor;
          dataset.backgroundColor = gradient;
        });

        that.chart.update();
      }
    };

    this.chart = new Chart(canvas, <ChartConfiguration>{
      type: 'line',
      data: this.data,
      options: defaultsDeep(
        {
          onResize: onResize,
          layout: {
            padding: {
              left: 24,
              right: 24,
              top: 16,
              bottom: 24,
            },
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
