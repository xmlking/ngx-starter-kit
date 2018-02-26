import { Component, OnInit, Input } from '@angular/core';
import { D3ChartService, D3 } from '../../charts/nvD3/nvD3.service';

@Component({
  selector: 'nxtk-source-overview-widget',
  templateUrl: './source-overview-widget.component.html',
  styleUrls: ['./source-overview-widget.component.scss']
})
export class SourceOverviewWidgetComponent implements OnInit {
  @Input('chartDataArray') chartDataArray: Array<any>;

  @Input('options') options: any;

  chartOptions: any;

  d3: D3;

  constructor(nvD3Service: D3ChartService) {
    this.d3 = nvD3Service.getD3();
  }

  ngOnInit() {
    const d3 = this.d3;

    this.chartOptions = {
      chart: {
        type: 'lineChart',
        height: 40,
        margin: {
          top: 10,
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
        interpolate: 'cardinal',
        showLegend: false,
        useInteractiveGuideline: true
      }
    };
  }
}
