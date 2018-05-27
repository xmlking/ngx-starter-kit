import { Component, OnInit } from '@angular/core';
import { cardAnimation } from '@nx-starter-kit/animations';

@Component({
  selector: 'nxtk-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [cardAnimation]
})
export class AnimationsComponent implements OnInit {
  animationState: string;

  constructor() {}

  ngOnInit() {}

  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
