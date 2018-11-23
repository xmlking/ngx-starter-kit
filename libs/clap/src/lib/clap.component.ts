import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { debounceTime, mapTo } from 'rxjs/operators';

@Component({
  selector: 'ngx-clap',
  template: `
    <ngx-counter-bubble *ngIf="(showBubble$ | async)" [counter]="userCounter"> </ngx-counter-bubble>
    <ngx-total-counter *ngIf="!(showBubble$ | async)" [counter]="totalCounter"> </ngx-total-counter>
    <ngx-fab (click)="userCounterChange.emit()" [counter]="userCounter"> </ngx-fab>
  `,
  styles: [
    `
      :host {
        position: relative;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClapComponent implements OnInit {
  @Input()
  totalCounter: number;

  @Input()
  userCounter: number;

  @Output()
  userCounterChange = new EventEmitter<void>();

  showBubble$: Observable<boolean>;

  ngOnInit() {
    const change$ = this.userCounterChange.asObservable();

    const showBubble$ = change$.pipe(mapTo(true));
    const hideBubble$ = change$.pipe(
      debounceTime(400),
      mapTo(false),
    );

    this.showBubble$ = merge(showBubble$, hideBubble$);
  }
}
