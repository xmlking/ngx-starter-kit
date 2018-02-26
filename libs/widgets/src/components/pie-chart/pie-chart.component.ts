import { Component, OnInit, Input, Inject } from '@angular/core';
import { D3, D3ChartService } from '../charts/nvD3/nvD3.service';

@Component({
  selector: 'nxtk-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input('data') data: any;
  @Input('chartOptions') chartOptions: any;

  d3: D3;
  @Input('widgetTitle') widgetTitle: string;
  @Input('subTitle') subTitle: string;
  @Input('bgColor') bgColor: string;
  @Input('textColor') textColor: string;

  isLoading = false;

  constructor(@Inject(D3ChartService) d3ChartService: D3ChartService) {
    this.d3 = d3ChartService.getD3();
  }

  ngOnInit() {
    const d3 = this.d3;

    if (!this.chartOptions) {
      this.chartOptions = {
        chart: {
          type: 'pieChart',
          height: 400,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          x: d => {
            return d.label;
          },
          y: d => {
            return d.value;
          },
          showXAxis: false,
          showYAxis: false,
          showLegend: true,
          useInteractiveGuideline: true,
          donut: true,
          color: ['#1E88E5', '#D81B60', '#00897B', '#3949AB', '#e53935']
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
