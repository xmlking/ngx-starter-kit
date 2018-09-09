import { Comparator, mergeSort } from './merge-sort';
import { findInsertIndex } from './find-insert-index';

export { Comparator } from './merge-sort';

/**
 * // Usage examples
 * this._tree.traverseDFS((node)=> {
 *    console.log(node);
 * });
 *
 * this._tree.traverseBFS((node)=> {
 *    console.log(node);
 * });
 *
 * const level4 = this._tree.findByPredicateBFS((node) => {
 *    return node.link === "/level1/level2/level3/level4"
 * });
 * console.log(level4);
 *
 * const level4Parents = this.getAllParents(level4);
 * console.log(level4Parents)
 *
 * for(const node of this._tree) {
 *   if(node.link ==="/admin/overview") {
 *     console.log("found");
 *     break;
 *   }
 * }
 */

export enum TraversalStrategy {
  PreOrder,
  PostOrder,
}

export interface TreeNode<T> {
  parent?: T;
  children?: T[];
  [key: string]: any;
}

export interface TreeConfig<T> {
  nodeComparatorFn?: Comparator<T>;
}

export class Tree<T extends TreeNode<T>> implements Iterable<T> {
  config: TreeConfig<T> = {};

  root: T;

  constructor(root: T, config?: TreeConfig<T>) {
    this.root = this.addParentLinks(root);
  }

  private addParentLinks(parent: T): T {
    if (parent.children) {
      // mergeSort children
      if (this.config && this.config.nodeComparatorFn) {
        parent.children = mergeSort<any>(parent.children, this.config.nodeComparatorFn);
      }

      // add a parent link to a child structure
      parent.children.forEach(d => {
        // each child gets marked with a parent
        d.parent = parent;
        // then marks its own children with itself
        this.addParentLinks(d);
      });
    } else {
      parent.children = [];
    }
    return parent;
  }

  isRoot(node: T) {
    return node.parent === undefined;
  }

  isLeaf(node: T) {
    return node.children.length === 0;
  }

  add(node: T, toNode: T) {
    const parent = toNode ? this.findBFS(toNode) : null;
    if (parent) {
      // TODO: Find the index to insert the child using findInsertIndex()
      parent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return 'Root node is already assigned';
      }
    }
  }

  remove(node: T) {
    if (this.root === node) {
      this.root = null;
    }

    const queue = [this.root];
    while (queue.length) {
      const _node = queue.shift();
      for (let i = 0; i < _node.children.length; i++) {
        if (_node.children[i] === node) {
          _node.children.splice(i, 1);
        } else {
          queue.push(_node.children[i]);
        }
      }
    }
  }

  contains(node: T) {
    return !!this.findBFS(node);
  }

  findBFS(node: T) {
    const queue = [this.root];
    while (queue.length) {
      // tslint:disable:no-non-null-assertion
      const _node = queue.shift()!;
      if (_node === node) {
        return _node;
      }
      for (const child of _node.children) {
        queue.push(child);
      }
    }
    return null;
  }

  findByPredicateBFS(predicate: (node: T) => boolean): T {
    const queue = [this.root];
    while (queue.length) {
      const _node = queue.shift()!;
      if (predicate(_node)) {
        return _node;
      }
      for (const child of _node.children) {
        queue.push(child);
      }
    }
    return null;
  }

  findByPredicateDFS(predicate: (node: T) => boolean, strategy: TraversalStrategy = TraversalStrategy.PreOrder): T {
    // TODO
    return null;
  }

  private _preOrder(node: T, fn: (node: T) => any) {
    if (node) {
      if (fn) {
        fn(node);
      }
      for (const child of node.children) {
        this._preOrder(child, fn);
      }
    }
  }

  private _postOrder(node: T, fn: (node: T) => any) {
    if (node) {
      for (const child of node.children) {
        this._postOrder(child, fn);
      }
      if (fn) {
        fn(node);
      }
    }
  }

  traverseDFS(fn: (node: T) => any, method: TraversalStrategy = TraversalStrategy.PreOrder) {
    const current = this.root;
    if ((method = TraversalStrategy.PreOrder)) {
      this._postOrder(current, fn);
    } else {
      this._preOrder(current, fn);
    }
  }

  traverseBFS(fn: (node: T) => any) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (fn) {
        fn(node);
      }
      for (const child of node.children) {
        queue.push(child);
      }
    }
  }

  *[Symbol.iterator](): IterableIterator<T> {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift()!;
      yield node;
      for (const child of node.children) {
        queue.push(child);
      }
    }
  }

  getAllParents(item: T): T[] {
    const parents: T[] = [];
    parents.unshift(item);
    let parent = item.parent;
    while (parent) {
      parents.unshift(parent);
      parent = parent.parent;
    }
    return parents;
  }
}
