const defaultOptions = {
  container: null,
  startPosition: 50,
  data: null,
};

class Utils {
  static extend(target, objects, { clearEmpty }) {
    for (const object in objects) {
      if (objects.hasOwnProperty(object)) {
        recursiveMerge(target, objects[object]);
      }
    }

    function recursiveMerge(target2, object) {
      for (const property in object) {
        if (object.hasOwnProperty(property)) {
          const current = object[property];
          if (Utils.getConstructor(current) === 'Object') {
            if (!target2[property]) {
              target2[property] = {};
            }
            recursiveMerge(target2[property], current);
          } else {
            // clearEmpty
            if (clearEmpty) {
              if (current == null) {
                continue;
              }
            }
            target2[property] = current;
          }
        }
      }
    }

    return target;
  }

  static setMultiEvents(element, events, func) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(events[i], func);
    }
  }

  static getConstructor(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
  }
}

export class ImageComparison {
  options: any;
  container: any;
  images: any[];
  labels: any[];
  private animateInterval: any;
  private comparisonSeparator: any;
  private items: any[];
  constructor(options) {
    this.options = Utils.extend({}, [defaultOptions, options], {
      clearEmpty: true,
    });
    this.container = this.options.container;
    this.images = [this.options.data[0].image, this.options.data[1].image];
    this.labels = [this.options.data[0].label, this.options.data[1].label];
    this.animateInterval = null;
    this.comparisonSeparator = null;
    this.items = [];

    if (this.container == null) {
      console.error('Container element not found!');
    }

    if (!this.images[0] || !this.images[1]) {
      console.error('Need two images!');
    }

    this._build();
    this._setEvents();
  }

  _build() {
    this.options.container.classList.add('comparison-widget');
    for (let i = 0; i < 2; i++) {
      const item = document.createElement('div');
      item.classList.add('comparison-item');

      const content = document.createElement('div');
      content.classList.add('comparison-item__content');
      if (this.labels[i]) {
        content.innerHTML = `<div class="comparison-item__label">${this.labels[i]}</div>`;
      }
      this.images[i].classList.add('comparison-item__image');
      content.appendChild(this.images[i]);
      item.appendChild(content);

      if (i === 0) {
        item.classList.add('comparison-item--first');
        item.style.width = `${this.options.startPosition}%`;
        this.comparisonSeparator = document.createElement('div');
        this.comparisonSeparator.classList.add('comparison-separator');
        this.comparisonSeparator.innerHTML =
          '<div class="comparison-control"><div class="comparison-control__mask"></div></div>';
        item.appendChild(this.comparisonSeparator);
      }

      this.items.push(item);
      this.container.appendChild(item);
    }
  }

  _setEvents() {
    const comparison = this;

    comparison.container.addEventListener('click', event => {
      comparison._calcPosition(event);
    });

    Utils.setMultiEvents(comparison.comparisonSeparator, ['mousedown', 'touchstart'], () => {
      comparison.comparisonSeparator.classList.add('actived');
    });

    Utils.setMultiEvents(document.body, ['mouseup', 'touchend'], () => {
      comparison.comparisonSeparator.classList.remove('actived');
    });

    Utils.setMultiEvents(document.body, ['mousemove', 'touchmove'], event => {
      if (comparison.comparisonSeparator.classList.contains('actived')) {
        comparison._calcPosition(event);
        if (document.getSelection()) {
          document.getSelection().empty();
        }
      }
    });

    Utils.setMultiEvents(window, ['resize', 'load'], () => {
      comparison._setImageSize();
    });

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < comparison.images.length; i++) {
      comparison.images[i].addEventListener('dragstart', e => {
        e.preventDefault();
      });
    }
  }

  _calcPosition({ clientX, touches, type }) {
    const containerCoords = this.container.getBoundingClientRect();
    const containerWidth = containerCoords.width;
    const horizontalPositionForElement = (clientX || touches[0].pageX) - containerCoords.left;
    let positionInPercent = (horizontalPositionForElement * 100) / containerWidth;
    if (positionInPercent > 100) {
      positionInPercent = 100;
    } else if (positionInPercent < 0) {
      positionInPercent = 0;
    }
    this._controllerPosition(positionInPercent.toFixed(2), type);
  }

  _controllerPosition(positionInPercent, eventType) {
    switch (eventType) {
      case 'click':
        this._setPositionWithAnimate(positionInPercent);
        break;
      default:
        this._updatePosition(positionInPercent);
    }
  }

  _setPositionWithAnimate(newPositionInPercent) {
    const comparison = this;
    let currentPositionInPercent = parseFloat(comparison.items[0].style.width);
    clearInterval(comparison.animateInterval);

    if (newPositionInPercent === currentPositionInPercent) {
      return false;
    } else if (currentPositionInPercent > newPositionInPercent) {
      decrementPosition();
    } else {
      incrementPosition();
    }

    // Support animate functions
    function incrementPosition() {
      comparison.animateInterval = setInterval(() => {
        currentPositionInPercent++;
        comparison._updatePosition(currentPositionInPercent);
        if (currentPositionInPercent >= newPositionInPercent) {
          setFinalPositionAndClearInterval();
        }
      }, 10);
    }

    function decrementPosition() {
      comparison.animateInterval = setInterval(() => {
        currentPositionInPercent--;
        comparison._updatePosition(currentPositionInPercent);
        if (currentPositionInPercent <= newPositionInPercent) {
          setFinalPositionAndClearInterval();
        }
      }, 10);
    }

    function setFinalPositionAndClearInterval() {
      comparison._updatePosition(newPositionInPercent);
      clearInterval(comparison.animateInterval);
    }
  }

  _updatePosition(percent) {
    this.items[0].style.width = `${percent}%`;
  }

  _setImageSize() {
    this.images[0].style.width = `${this.container.offsetWidth}px`;
  }
}
