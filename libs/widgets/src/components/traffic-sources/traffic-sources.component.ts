import { Component, OnInit, Input } from '@angular/core';
import { D3ChartService, D3 } from '../charts/nvD3/nvD3.service';

@Component({
  selector: 'sumo-traffic-sources',
  templateUrl: './traffic-sources.component.html'
})
export class TrafficSourcesComponent implements OnInit {
  @Input('title') title = 'Traffic Sources';
  @Input('subTitle') subTitle = 'Total Visits over the last week';
  @Input('chartData') chartData: any[];
  @Input('chartOptions') chartOptions: any;
  @Input('textColor') textColor: any;

  d3: D3;
  isLoading = false;

  constructor(nvD3Service: D3ChartService) {
    this.d3 = nvD3Service.getD3();
  }

  ngOnInit() {
    const d3 = this.d3;

    this.chartOptions = {
      chart: {
        type: 'lineChart',
        height: 50,
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
        useInteractiveGuideline: true
      }
    };
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
