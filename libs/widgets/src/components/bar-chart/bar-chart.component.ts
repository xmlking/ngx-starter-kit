import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { D3ChartService, D3 } from '../charts/nvD3/nvD3.service';

@Component({
  selector: 'sumo-bar-chart',
  templateUrl: './bar-chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  @Input('data') data: any;
  @Input('chartOptions') chartOptions: any;

  d3: D3;
  @Input('widgetTitle') widgetTitle: string;
  @Input('bgColor') bgColor: string;
  @Input('textColor') textColor: string;
  @Input('chartColor') chartColor: string;
  @Input('gain') gain: number | string;
  @Input('comparedTo') comparedTo: string;

  isLoading = false;

  constructor(@Inject(D3ChartService) d3ChartService: D3ChartService) {
    this.d3 = d3ChartService.getD3();
  }

  ngOnInit() {
    const d3 = this.d3;

    if (!this.chartOptions) {
      this.chartOptions = {
        chart: {
          type: 'discreteBarChart',
          height: 120,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          x: d => {
            return d.date;
          },
          y: d => {
            return d.value;
          },
          showXAxis: false,
          showYAxis: false,
          xAxis: {
            ticks: d3.time.days,
            axisLabel: '',
            tickFormat: d => {
              return d3.time.format('%a %d.%m.%Y')(new Date(d));
            }
          },
          showLegend: false,
          useInteractiveGuideline: true,
          color: [this.chartColor],
          rectClass: 'bar-rect'
        }
      };
    }
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
