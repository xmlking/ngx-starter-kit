import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { D3, D3ChartService } from '../charts/nvD3/nvD3.service';
import { lineChartDemoValues } from '../../data/widgetDemoData.data';

@Component({
  selector: 'sumo-line-chart',
  templateUrl: './line-chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent implements OnInit {
  @Input('data') data: any;
  @Input('chartOptions') chartOptions: any;

  d3: D3;
  @Input('widgetTitle') widgetTitle: string;
  @Input('bgColor') bgColor: string;
  @Input('textColor') textColor: string;
  @Input('chartColor') chartColor: string;
  @Input('interpolate') interpolate = false;
  @Input('gain') gain: number | string;
  @Input('comparedTo') comparedTo: string;

  isLoading = false;

  constructor(@Inject(D3ChartService) d3ChartService: D3ChartService) {
    this.d3 = d3ChartService.getD3();
  }

  ngOnInit() {
    const d3 = this.d3;

    const interpolate = this.interpolate ? 'cardinal' : false;

    const min = d3.min(lineChartDemoValues) - 20;
    const max = d3.max(lineChartDemoValues) + 20;

    if (!this.chartOptions) {
      this.chartOptions = {
        chart: {
          type: 'lineChart',
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
          yDomain: [min, max],
          showLegend: false,
          useInteractiveGuideline: true,
          color: [this.chartColor],
          interpolate: interpolate
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
