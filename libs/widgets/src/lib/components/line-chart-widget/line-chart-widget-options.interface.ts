import { ChartWidgetOptions } from '../chart-widget/chart-widget-options.interface';

export class LineChartWidgetOptions extends ChartWidgetOptions {
  gradientFill?: {
    from: string;
    to: string;
  };
}
