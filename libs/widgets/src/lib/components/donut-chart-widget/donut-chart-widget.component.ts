import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartConfiguration, ChartData } from 'chart.js';
import * as ChartJSPieceLabelPlugin from 'chart.piecelabel.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../chart-widget/chart-widget-defaults';
import { LineChartWidgetOptions } from '../line-chart-widget/line-chart-widget-options.interface';

@Component({
  selector: 'ngx-donut-chart-widget',
  templateUrl: './donut-chart-widget.component.html',
  styleUrls: ['./donut-chart-widget.component.scss'],
})
export class DonutChartWidgetComponent implements AfterViewInit {
  @Input()
  data: ChartData;
  @Input()
  options: LineChartWidgetOptions;

  @ViewChild('canvas', { read: ElementRef, static: true}) canvas: ElementRef;

  chart: Chart;

  isLoading: boolean;

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), <ChartConfiguration>{
      type: 'pie',
      data: this.data,
      options: defaultsDeep(
        {
          layout: {
            padding: {
              left: 5,
              right: 5,
              top: 5,
            },
          },
          plugins: [ChartJSPieceLabelPlugin],
          pieceLabel: {
            render: 'label',
            arc: true,
            position: 'border',
            fontColor: '#FFFFFF',
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
