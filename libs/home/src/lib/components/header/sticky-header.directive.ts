import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';

import { AfterViewInit, Directive, ElementRef, Inject, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
import { untilDestroy } from '@ngx-starter-kit/ngx-utils';
import { WINDOW } from '@ngx-starter-kit/core';

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

/** @dynamic */
@Directive({
  selector: '[stickyHeader]',
})
export class StickyHeaderDirective implements AfterViewInit, OnDestroy {
  player: AnimationPlayer;

  set show(show: boolean) {
    if (this.player) {
      this.player.destroy();
    }

    const metadata = show ? this.fadeIn() : this.fadeOut();

    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef, @Inject(WINDOW) private window: Window) {}

  private fadeIn(): AnimationMetadata[] {
    return [style({ opacity: 0 }), animate('400ms ease-in', style({ opacity: 1 }))];
  }

  private fadeOut(): AnimationMetadata[] {
    return [style({ opacity: '*' }), animate('400ms ease-in', style({ opacity: 0 }))];
  }

  private fadeUp(): AnimationMetadata[] {
    return [style({ opacity: 0 }), animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))];
  }

  private fadeDown(): AnimationMetadata[] {
    return [style({ opacity: '*' }), animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-100%)' }))];
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(this.window, 'scroll').pipe(
      throttleTime(10),
      map(() => this.window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share(),
      untilDestroy(this),
    );

    const goingUp$ = scroll$.pipe(filter(direction => direction === Direction.Up));

    const goingDown$ = scroll$.pipe(filter(direction => direction === Direction.Down));

    goingUp$.subscribe(() => (this.show = true));
    goingDown$.subscribe(() => (this.show = false));
  }

  ngOnDestroy() {}
}
