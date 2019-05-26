import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable({
  providedIn: 'root',
})
export class HammerConfig extends HammerGestureConfig {
  overrides = {
    // override hammerjs default configuration
    pan: { direction: Hammer.DIRECTION_ALL },
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
