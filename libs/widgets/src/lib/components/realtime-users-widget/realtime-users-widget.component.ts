import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { Observable } from 'rxjs';
import { defaultChartOptions } from '../chart-widget/chart-widget-defaults';
import { RealtimeUsersWidgetData, RealtimeUsersWidgetPages } from './realtime-users-widget.interface';

@Component({
  selector: 'ngx-realtime-users-widget',
  templateUrl: './realtime-users-widget.component.html',
  styleUrls: ['./realtime-users-widget.component.scss'],
})
export class RealtimeUsersWidgetComponent implements AfterViewInit {
  @Input()
  pages$: Observable<RealtimeUsersWidgetPages>;
  @Input()
  data$: Observable<RealtimeUsersWidgetData>;

  @Input()
  maxLength = 30;

  @ViewChild('canvas', { read: ElementRef, static: true }) canvas: ElementRef;
  chart: Chart;

  currentUsers: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), <ChartConfiguration>{
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      options: defaultsDeep(
        {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            intersect: true,
          },
        } as ChartOptions,
        defaultChartOptions,
      ),
    });

    const first = true;
    this.data$.subscribe(newData => {
      const oldData = this.chart.data.datasets[0].data as any;
      this.addData(newData);

      setTimeout(() => {
        this.currentUsers = newData.value;
      }, 1);

      if (oldData.length > this.maxLength) {
        this.removeData();
      }

      this.cd.markForCheck();
      this.chart.update();
    });
  }

  addData(data: RealtimeUsersWidgetData) {
    this.chart.data.labels.push(data.label);
    const chartData = this.chart.data.datasets[0].data as any;
    chartData.push(data.value);
  }

  removeData() {
    this.chart.data.labels.shift();
    const data = this.chart.data.datasets[0].data as any;
    data.shift();
  }
}
