import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartData } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../chart-widget/chart-widget-defaults';
import { ListColumn } from '../list/list-column.model';
import { RecentSalesWidgetOptions } from './recent-sales-widget-options.interface';

@Component({
  selector: 'ngx-recent-sales-widget',
  templateUrl: './recent-sales-widget.component.html',
  styleUrls: ['./recent-sales-widget.component.scss'],
})
export class RecentSalesWidgetComponent implements OnInit, AfterViewInit {
  @Input()
  tableOptions: {
    pageSize: number;
    columns: ListColumn[];
  };
  @Input()
  tableData: any[];
  @Input()
  chartData: ChartData;
  @Input()
  options: RecentSalesWidgetOptions;

  @ViewChild('canvas', { read: ElementRef , static: true}) canvas: ElementRef;

  chart: Chart;

  isLoading: boolean;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: this.chartData,
      options: defaultsDeep(
        {
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
