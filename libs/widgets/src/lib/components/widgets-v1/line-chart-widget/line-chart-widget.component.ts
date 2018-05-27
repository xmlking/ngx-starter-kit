import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { D3, D3ChartService } from '../../charts/nvD3/nvD3.service';

@Component({
  selector: 'nxtk-line-chart-widget',
  templateUrl: './line-chart-widget.component.html',
  styleUrls: ['./line-chart-widget.component.scss']
})
export class LineChartWidgetComponent implements OnInit {
  @Input('data') data: any;

  @Input('options') options: any;

  chartOptions: any;

  d3: D3;

  revenueSum;
  taxSum;
  shippingSum;

  constructor(nvD3Service: D3ChartService) {
    this.d3 = nvD3Service.getD3();
  }

  ngOnInit() {
    this.revenueSum = this.data[0].values.reduce((a, b) => a + b.value, 0);
    this.taxSum = this.data[1].values.reduce((a, b) => a + b.value, 0);
    this.shippingSum = this.data[2].values.reduce((a, b) => a + b.value, 0);

    let d3 = this.d3;

    this.chartOptions = {
      chart: {
        type: 'stackedAreaChart',
        height: 400,
        margin: {
          top: 0,
          right: 60,
          bottom: 20,
          left: 0
        },
        x: d => {
          return d.date;
        },
        y: d => {
          return d.value;
        },
        xAxis: {
          tickFormat: d => {
            return d3.time.format('%B')(new Date(d));
          },
          showMaxMin: false
        },
        yAxis: {
          tickFormat: d3.format(',.2f')
        },
        rightAlignYAxis: true,
        useInteractiveGuideline: true,
        interpolate: 'cardinal'
      }
    };
  }
}
