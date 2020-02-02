import { Injectable } from '@angular/core';
import { StateDef } from '@ngx-starter-kit/utils';
import { IResizeState } from './resizable.store';

@Injectable()
export class ResizableState extends StateDef<IResizeState> {
  constructor() {
    super({
      currentSize: { width: 0, height: 0 },
      startSize: { width: 0, height: 0 },
      currentPosition: { x: 0, y: 0 },
      startPosition: { x: 0, y: 0 },
      isResizing: false,
      direction: null
    });
  }
}
