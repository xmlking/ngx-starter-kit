import { trigger, animate, transition, keyframes } from '@angular/animations';

import * as kf from './keyframes';

export const cardAnimation = trigger('cardAnimator', [
  transition('* => wobble', animate(1000, keyframes(kf.wobble))),
  transition('* => swing', animate(1000, keyframes(kf.swing))),
  transition('* => jello', animate(1000, keyframes(kf.jello))),
  transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
  transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
  transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
  transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
]);
