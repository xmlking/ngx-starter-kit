import { ChangeDetectionStrategy, Component, Directive, HostBinding, ViewEncapsulation } from '@angular/core';
/* tslint:disable */
@Component({
  selector: 'ngx-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartWidget {
  @HostBinding('class.ngx-chart-widget')
  bodyClass = true;
}

@Component({
  selector: 'ngx-chart-widget-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ngx-chart-widget-header-title-group">
      <ng-content select="ngx-chart-widget-header-title"></ng-content>
      <ng-content select="ngx-chart-widget-header-sub-title"></ng-content>
    </div>
    <ng-content select="ngx-chart-widget-header-actions"></ng-content>
  `,
})
export class ChartWidgetHeader {
  @HostBinding('class.ngx-chart-widget-header')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-chart-widget-header-title',
})
export class ChartWidgetHeaderTitle {
  @HostBinding('class.ngx-chart-widget-header-title')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-chart-widget-header-sub-title',
})
export class ChartWidgetHeaderSubTitle {
  @HostBinding('class.ngx-chart-widget-header-sub-title')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-chart-widget-header-actions',
})
export class ChartWidgetHeaderActions {
  @HostBinding('class.ngx-chart-widget-header-actions')
  bodyClass = true;
}

@Component({
  selector: 'ngx-chart-widget-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class ChartWidgetContent {
  @HostBinding('class.ngx-chart-widget-content')
  bodyClass = true;
}
