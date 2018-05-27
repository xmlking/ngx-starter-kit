/*
 * A comparision tree will layout each attribute of a json deep through its heirarchy with given visual queues
 * that represents a deletion, adition, or change of attribute from the other tree. The status of each node is
 * evaluated by the parent comparision tool.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JsonDiffComponent } from '@nx-starter-kit/json-diff/src/json-diff.component';

@Component({
  selector: 'nxtk-json-diff-tree',
  templateUrl: './json-diff-tree.component.html',
  styleUrls: ['./json-diff-tree.component.scss']
})
export class JsonDiffTreeComponent implements OnInit {
  depth: number;

  @Output('onhover') onhover = new EventEmitter();

  @Input('children') children;

  @Input('side') side;

  @Input('level') level = '0';

  ngOnInit() {
    this.depth = parseInt(this.level);
  }

  bubleup(event) {
    event.side = this.side;
    this.onhover.emit(event);
  }

  mouseOvered(flag, i) {
    if (this.depth === 1) {
      this.onhover.emit({
        hover: flag,
        index: i,
        side: this.side
      });
    }
  }
}
