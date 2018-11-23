import { ChangeDetectionStrategy, Component, Directive, HostBinding, Input, ViewEncapsulation } from '@angular/core';

/* tslint:disable */
@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @HostBinding('class.ngx-card')
  bodyClass = true;
}

@Component({
  selector: 'ngx-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ngx-card-header-title-group">
      <ng-content select="ngx-card-header-title"></ng-content>
      <ng-content select="ngx-card-header-sub-title"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="ngx-card-header-actions"></ng-content>
  `,
})
export class CardHeader {
  @HostBinding('class.ngx-card-header')
  bodyClass = true;
}

@Component({
  selector: 'ngx-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class CardContent {
  @HostBinding('class.ngx-card-content')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-card-header-title',
})
export class CardHeaderTitle {
  @HostBinding('class.ngx-card-header-title')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-card-header-sub-title',
})
export class CardHeaderSubTitle {
  @HostBinding('class.ngx-card-header-sub-title')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-card-header-actions',
})
export class CardHeaderActions {
  @HostBinding('class.ngx-card-header-actions')
  bodyClass = true;
}

@Directive({
  selector: 'ngx-card-actions',
})
export class CardActions {
  /** Position of the actions inside the card. */
  @Input()
  align: 'start' | 'end' = 'start';
  @HostBinding('class.ngx-card-actions')
  bodyClass = true;
  @HostBinding('class.ngx-card-actions-align-end')
  isEnd2 = this.align === 'end';
}
