import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { JsonDiffNode, JsonDiffNodeType, JsonDiffNodeStatus } from './json-diff.interfaces';

@Component({
  selector: 'ngx-json-diff',
  templateUrl: './json-diff.component.html',
  styleUrls: ['./json-diff.component.scss'],
})
export class JsonDiffComponent implements OnInit, OnChanges {
  leftSide;
  rightSide;

  @Input()
  leftSideObject;

  @Input()
  rightSideObject;

  constructor() {}
  private generateNodeId() {
    const min = 1;
    const max = 10000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  private transformNodeToInternalStruction(node) {
    let result = node;
    if (node instanceof Array) {
      const children: JsonDiffNode[] = [];
      node.map((item, i) => {
        const jsonValue: any = this.transformNodeToInternalStruction(item);
        if (jsonValue instanceof Array) {
          children.push({
            id: this.generateNodeId(),
            index: i,
            name: '',
            value: '',
            parent: JsonDiffNodeType.array,
            type: JsonDiffNodeType.array,
            status: JsonDiffNodeStatus.default,
            children: jsonValue,
          });
        } else {
          children.push({
            id: this.generateNodeId(),
            index: i,
            name: '',
            value: jsonValue,
            parent: JsonDiffNodeType.array,
            type: JsonDiffNodeType.literal,
            status: JsonDiffNodeStatus.default,
            children: [],
          });
        }
      });
      result = children;
    } else if (node instanceof Object) {
      const list = Object.keys(node);
      const children: JsonDiffNode[] = [];
      list.map((item, i) => {
        const jsonValue: any = this.transformNodeToInternalStruction(node[item]);
        if (jsonValue instanceof Array) {
          children.push({
            id: this.generateNodeId(),
            index: i,
            name: item,
            value: '',
            parent: JsonDiffNodeType.json,
            type: JsonDiffNodeType.array,
            status: JsonDiffNodeStatus.default,
            children: jsonValue,
          });
        } else {
          children.push({
            id: this.generateNodeId(),
            index: i,
            name: item,
            value: jsonValue,
            parent: JsonDiffNodeType.json,
            type: JsonDiffNodeType.pair,
            status: JsonDiffNodeStatus.default,
            children: [],
          });
        }
      });
      result = children;
    }
    return result;
  }

  private itemInArray(side: JsonDiffNode[], node: JsonDiffNode) {
    let result: JsonDiffNode;
    const key = node.type === JsonDiffNodeType.literal ? node.value.toUpperCase() : node.name;

    side.map((item: JsonDiffNode) => {
      if (item.type === JsonDiffNodeType.literal) {
        if (item.value.toUpperCase() === key) {
          result = item;
        }
      } else {
        if (item.name === key) {
          result = item;
        }
      }
    });
    return result;
  }

  private leftItemFromRightItem(leftNode: JsonDiffNode, rightNode: JsonDiffNode) {
    let result: JsonDiffNode;
    if (!leftNode || !rightNode) {
      return result;
    }
    const key = rightNode.type === JsonDiffNodeType.literal ? rightNode.value.toUpperCase() : rightNode.name;

    if (leftNode.type === JsonDiffNodeType.literal) {
      if (leftNode.value.toUpperCase() === key) {
        result = leftNode;
      }
    } else {
      if (leftNode.name === key) {
        result = leftNode;
      }
    }
    return result;
  }

  private compare(leftNode: JsonDiffNode, rightNode: JsonDiffNode) {
    if (leftNode.type !== rightNode.type) {
      leftNode.status = JsonDiffNodeStatus.typeChanged;
      rightNode.status = JsonDiffNodeStatus.typeChanged;
    } else if (leftNode.type === JsonDiffNodeType.literal) {
      if (leftNode.value !== rightNode.value) {
        leftNode.status = JsonDiffNodeStatus.valueChanged;
        rightNode.status = JsonDiffNodeStatus.valueChanged;
      }
    } else if (leftNode.type === JsonDiffNodeType.pair) {
      if (leftNode.name !== rightNode.name) {
        leftNode.status = JsonDiffNodeStatus.nameChanged;
        rightNode.status = JsonDiffNodeStatus.nameChanged;
      }
      if (leftNode.value !== rightNode.value) {
        leftNode.status = JsonDiffNodeStatus.valueChanged;
        rightNode.status = JsonDiffNodeStatus.valueChanged;
      }
    } else {
      if (leftNode.name !== rightNode.name) {
        leftNode.status = JsonDiffNodeStatus.nameChanged;
        rightNode.status = JsonDiffNodeStatus.nameChanged;
      } else {
        this.unify(leftNode.children, rightNode.children);
      }
    }
  }
  private reIndex(list: JsonDiffNode[]) {
    list.map((item, i) => {
      item.index = i;
      this.reIndex(item.children);
    });
  }
  private copyInto(side: JsonDiffNode[], item: JsonDiffNode, index: number, status: JsonDiffNodeStatus) {
    const newItem = JSON.parse(JSON.stringify(item));
    side.splice(index, 0, newItem);
    this.reIndex(side);

    item.status = status;
    newItem.status = status;
  }
  private unify(leftSide: JsonDiffNode[], rightSide: JsonDiffNode[]) {
    let i = 0,
      j = 0,
      looping = true;

    while (looping) {
      let leftItemInRightSide: JsonDiffNode =
        i < leftSide.length ? this.itemInArray(rightSide, leftSide[i]) : undefined;
      let rightItemInLeftSide: JsonDiffNode =
        j < rightSide.length ? this.itemInArray(leftSide, rightSide[j]) : undefined;

      if (!leftItemInRightSide && i < leftSide.length) {
        if (!rightSide.length) {
          while (i < leftSide.length) {
            this.copyInto(rightSide, leftSide[i], i, JsonDiffNodeStatus.removed);
            j++;
            i++;
          }
        } else {
          this.copyInto(rightSide, leftSide[i], i, JsonDiffNodeStatus.removed);
          j++;
          i++;
        }
      }
      if (!rightItemInLeftSide && j < rightSide.length) {
        if (!leftSide.length) {
          while (j < rightSide.length) {
            this.copyInto(leftSide, rightSide[j], j, JsonDiffNodeStatus.added);
            j++;
            i++;
          }
        } else {
          this.copyInto(leftSide, rightSide[j], j, JsonDiffNodeStatus.added);
          j++;
          i++;
        }
      }
      if (!leftItemInRightSide) {
        leftItemInRightSide = j < rightSide.length ? rightSide[j] : undefined;
      }
      if (!rightItemInLeftSide) {
        rightItemInLeftSide = i < leftSide.length ? leftSide[i] : undefined;
      }
      if (leftItemInRightSide && leftItemInRightSide.index !== i) {
        while (i < leftSide.length) {
          leftItemInRightSide = this.leftItemFromRightItem(rightSide[i], leftSide[i]);
          if (leftItemInRightSide) {
            leftItemInRightSide = j < rightSide.length ? rightSide[j] : undefined;
            break;
          } else {
            this.copyInto(rightSide, leftSide[i], i, JsonDiffNodeStatus.removed);
            j++;
            i++;
          }
        }
      }
      if (rightItemInLeftSide && rightItemInLeftSide.index !== j) {
        while (j < rightSide.length) {
          rightItemInLeftSide = this.leftItemFromRightItem(leftSide[j], rightSide[j]);
          if (rightItemInLeftSide) {
            rightItemInLeftSide = i < leftSide.length ? leftSide[i] : undefined;
            break;
          } else {
            this.copyInto(leftSide, rightSide[j], j, JsonDiffNodeStatus.added);
            j++;
            i++;
          }
        }
      }
      if (leftItemInRightSide && i < leftSide.length) {
        const x = this.itemInArray(rightSide, leftSide[i]);
        if (x && x.index !== leftItemInRightSide.index) {
          this.copyInto(leftSide, rightSide[j], j, JsonDiffNodeStatus.added);
          j++;
          i++;
          leftItemInRightSide = j < rightSide.length ? rightSide[j] : undefined;
        }
      }
      if (rightItemInLeftSide && j < rightSide.length) {
        const x = this.itemInArray(leftSide, rightSide[j]);
        if (x && x.index !== rightItemInLeftSide.index) {
          this.copyInto(rightSide, leftSide[i], i, JsonDiffNodeStatus.removed);
          j++;
          i++;
          rightItemInLeftSide = i < leftSide.length ? leftSide[i] : undefined;
        }
      }
      if (leftItemInRightSide && rightItemInLeftSide) {
        this.compare(leftItemInRightSide, rightItemInLeftSide);
        j++;
        i++;
      }
      looping = i < leftSide.length || j < rightSide.length;
    }
  }
  private toInternalStruction(leftNode, rightNode) {
    const result = {
      leftSide: this.transformNodeToInternalStruction(leftNode),
      rightSide: this.transformNodeToInternalStruction(rightNode),
    };
    this.unify(result.leftSide, result.rightSide);

    return result;
  }

  ngOnChanges(changes) {
    if (changes.leftSideObject) {
      this.ngOnInit();
    }
    if (changes.rightSideObject) {
      this.ngOnInit();
    }
  }

  ngOnInit() {
    if (this.leftSideObject && this.rightSideObject) {
      const comparision = this.toInternalStruction(this.leftSideObject, this.rightSideObject);
      this.leftSide = [
        {
          id: this.generateNodeId(),
          name: '',
          value: 'Root Object',
          parent: JsonDiffNodeType.array,
          type: JsonDiffNodeType.array,
          expanded: true,
          isRoot: true,
          children: comparision.leftSide,
        },
      ];
      this.rightSide = [
        {
          id: this.generateNodeId(),
          name: '',
          value: 'Root Object',
          parent: JsonDiffNodeType.array,
          type: JsonDiffNodeType.array,
          expanded: true,
          isRoot: true,
          children: comparision.rightSide,
        },
      ];
    }
  }
  onhover(event) {
    let children;
    if (event.side === 'left-side') {
      children = this.rightSide[0].children;
    } else {
      children = this.leftSide[0].children;
    }
    if (children.length > event.index) {
      children[event.index].hover = event.hover;
    }
  }
}
