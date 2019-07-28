(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "24yA":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginFileValidateType 1.2.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    // get quick reference to Type utils
    var Type = utils.Type,
      isString = utils.isString,
      replaceInString = utils.replaceInString,
      guesstimateMimeType = utils.guesstimateMimeType,
      getExtensionFromFilename = utils.getExtensionFromFilename,
      getFilenameFromURL = utils.getFilenameFromURL;

    var mimeTypeMatchesWildCard = function mimeTypeMatchesWildCard(
      mimeType,
      wildcard
    ) {
      var mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop(); // image/png -> image
      var wildcardGroup = wildcard.slice(0, -2); // image/* -> image
      return mimeTypeGroup === wildcardGroup;
    };

    var isValidMimeType = function isValidMimeType(
      acceptedTypes,
      userInputType
    ) {
      return acceptedTypes.some(function(acceptedType) {
        // accepted is wildcard mime type
        if (/\*$/.test(acceptedType)) {
          return mimeTypeMatchesWildCard(userInputType, acceptedType);
        }

        // is normal mime type
        return acceptedType === userInputType;
      });
    };

    var getItemType = function getItemType(item) {
      // if the item is a url we guess the mime type by the extension
      var type = '';
      if (isString(item)) {
        var filename = getFilenameFromURL(item);
        var extension = getExtensionFromFilename(filename);
        if (extension) {
          type = guesstimateMimeType(extension);
        }
      } else {
        type = item.type;
      }

      return type;
    };

    var validateFile = function validateFile(
      item,
      acceptedFileTypes,
      typeDetector
    ) {
      // no types defined, everything is allowed \o/
      if (acceptedFileTypes.length === 0) {
        return true;
      }

      // gets the item type
      var type = getItemType(item);

      // no type detector, test now
      if (!typeDetector) {
        return isValidMimeType(acceptedFileTypes, type);
      }

      // use type detector
      return new Promise(function(resolve, reject) {
        typeDetector(item, type)
          .then(function(detectedType) {
            if (isValidMimeType(acceptedFileTypes, detectedType)) {
              resolve();
            } else {
              reject();
            }
          })
          .catch(reject);
      });
    };

    var applyMimeTypeMap = function applyMimeTypeMap(map) {
      return function(acceptedFileType) {
        return map[acceptedFileType] === null
          ? false
          : map[acceptedFileType] || acceptedFileType;
      };
    };

    // setup attribute mapping for accept
    addFilter('SET_ATTRIBUTE_TO_OPTION_MAP', function(map) {
      return Object.assign(map, {
        accept: 'acceptedFileTypes'
      });
    });

    // filtering if an item is allowed in hopper
    addFilter('ALLOW_HOPPER_ITEM', function(file, _ref2) {
      var query = _ref2.query;
      // if we are not doing file type validation exit
      if (!query('GET_ALLOW_FILE_TYPE_VALIDATION')) {
        return true;
      }

      // we validate the file against the accepted file types
      return validateFile(file, query('GET_ACCEPTED_FILE_TYPES'));
    });

    // called for each file that is loaded
    // right before it is set to the item state
    // should return a promise
    addFilter('LOAD_FILE', function(file, _ref3) {
      var query = _ref3.query;
      return new Promise(function(resolve, reject) {
        if (!query('GET_ALLOW_FILE_TYPE_VALIDATION')) {
          resolve(file);
          return;
        }

        var acceptedFileTypes = query('GET_ACCEPTED_FILE_TYPES');

        // custom type detector method
        var typeDetector = query('GET_FILE_VALIDATE_TYPE_DETECT_TYPE');

        // if invalid, exit here
        var validationResult = validateFile(
          file,
          acceptedFileTypes,
          typeDetector
        );

        var handleRejection = function handleRejection() {
          var acceptedFileTypesMapped = acceptedFileTypes
            .map(
              applyMimeTypeMap(
                query('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP')
              )
            )
            .filter(function(label) {
              return label !== false;
            });

          reject({
            status: {
              main: query('GET_LABEL_FILE_TYPE_NOT_ALLOWED'),
              sub: replaceInString(
                query('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES'),
                {
                  allTypes: acceptedFileTypesMapped.join(', '),
                  allButLastType: acceptedFileTypesMapped
                    .slice(0, -1)
                    .join(', '),
                  lastType:
                    acceptedFileTypesMapped[acceptedFileTypesMapped.length - 1]
                }
              )
            }
          });
        };

        // has returned new filename immidiately
        if (typeof validationResult === 'boolean') {
          if (!validationResult) {
            return handleRejection();
          }
          return resolve(file);
        }

        // is promise
        validationResult
          .then(function() {
            resolve(file);
          })
          .catch(handleRejection);
      });
    });

    // expose plugin
    return {
      // default options
      options: {
        // Enable or disable file type validation
        allowFileTypeValidation: [true, Type.BOOLEAN],

        // What file types to accept
        acceptedFileTypes: [[], Type.ARRAY],
        // - must be comma separated
        // - mime types: image/png, image/jpeg, image/gif
        // - extensions: .png, .jpg, .jpeg ( not enabled yet )
        // - wildcards: image/*

        // label to show when a type is not allowed
        labelFileTypeNotAllowed: ['File is of invalid type', Type.STRING],

        // nicer label
        fileValidateTypeLabelExpectedTypes: [
          'Expects {allButLastType} or {lastType}',
          Type.STRING
        ],

        // map mime types to extensions
        fileValidateTypeLabelExpectedTypesMap: [{}, Type.OBJECT],

        // Custom function to detect type of file
        fileValidateTypeDetectType: [null, Type.FUNCTION]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "AxDC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FilePondModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ɵa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return View_ɵa_0; });
/* unused harmony export View_ɵa_Host_0 */
/* unused harmony export ɵaNgFactory */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kZht");
/* harmony import */ var ngx_filepond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("x/0c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("An66");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var FilePondModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "yb"](ngx_filepond__WEBPACK_IMPORTED_MODULE_1__[/* FilePondModule */ "a"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Kb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Lb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "jb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "B"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Lb"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* NgLocalization */ "p"], _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* NgLocaleLocalization */ "o"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_ID */ "x"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* ɵangular_packages_common_common_a */ "F"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Lb"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* CommonModule */ "c"], _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* CommonModule */ "c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Lb"](1073742336, ngx_filepond__WEBPACK_IMPORTED_MODULE_1__[/* FilePondModule */ "a"], ngx_filepond__WEBPACK_IMPORTED_MODULE_1__[/* FilePondModule */ "a"], [])]); });

var styles_ɵa = [""];
var RenderType_ɵa = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "zb"]({ encapsulation: 2, styles: styles_ɵa, data: {} });

function View_ɵa_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Xb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Bb"](0, 0, null, null, 1, "div", [["class", "filepond--wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Bb"](1, 0, null, null, 0, "input", [["type", "file"]], null, null, null, null, null))], null, null); }
function View_ɵa_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Xb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Bb"](0, 0, null, null, 1, "file-pond", [], null, null, null, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Ab"](1, 4898816, null, 0, ngx_filepond__WEBPACK_IMPORTED_MODULE_1__[/* ɵa */ "c"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgZone */ "D"]], null, null)], null, null); }
var ɵaNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "xb"]("file-pond", ngx_filepond__WEBPACK_IMPORTED_MODULE_1__[/* ɵa */ "c"], View_ɵa_Host_0, { options: "options", files: "files" }, { oninit: "oninit", onwarning: "onwarning", onerror: "onerror", onactivatefile: "onactivatefile", onaddfilestart: "onaddfilestart", onaddfileprogress: "onaddfileprogress", onaddfile: "onaddfile", onprocessfilestart: "onprocessfilestart", onprocessfileprogress: "onprocessfileprogress", onprocessfileabort: "onprocessfileabort", onprocessfilerevert: "onprocessfilerevert", onprocessfile: "onprocessfile", onprocessfiles: "onprocessfiles", onremovefile: "onremovefile", onpreparefile: "onpreparefile", onupdatefiles: "onupdatefiles" }, []);




/***/ }),

/***/ "HSX9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedModule; });
class LedModule {
}



/***/ }),

/***/ "QgGR":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginImageResize 2.0.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  // test if file is of type image
  var isImage = function isImage(file) {
    return /^image/.test(file.type);
  };

  var getImageSize = function getImageSize(url, cb) {
    var image = new Image();
    image.onload = function() {
      var width = image.naturalWidth;
      var height = image.naturalHeight;
      image = null;
      cb(width, height);
    };
    image.src = url;
  };

  /**
   * Image Auto Resize Plugin
   */
  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    var Type = utils.Type;

    // subscribe to file load and append required transformations
    addFilter('DID_LOAD_ITEM', function(item, _ref2) {
      var query = _ref2.query;
      return new Promise(function(resolve, reject) {
        // get file reference
        var file = item.file;

        // if this is not an image we do not have any business cropping it
        if (!isImage(file) || !query('GET_ALLOW_IMAGE_RESIZE')) {
          // continue with the unaltered dataset
          return resolve(item);
        }

        var mode = query('GET_IMAGE_RESIZE_MODE');
        var width = query('GET_IMAGE_RESIZE_TARGET_WIDTH');
        var height = query('GET_IMAGE_RESIZE_TARGET_HEIGHT');
        var upscale = query('GET_IMAGE_RESIZE_UPSCALE');

        // no resizing to be done
        if (width === null && height === null) {
          return resolve(item);
        }

        var targetWidth = width === null ? height : width;
        var targetHeight = height === null ? targetWidth : height;

        // if should not upscale, we need to determine the size of the file
        var fileURL = URL.createObjectURL(file);
        getImageSize(fileURL, function(imageWidth, imageHeight) {
          URL.revokeObjectURL(fileURL);

          // get exif orientation
          var orientation = (item.getMetadata('exif') || {}).orientation || -1;

          // swap width and height if orientation needs correcting
          if (orientation >= 5 && orientation <= 8) {
            var _ref3 = [imageHeight, imageWidth];
            imageWidth = _ref3[0];
            imageHeight = _ref3[1];
          }

          // image is already perfect size, no transformations required
          if (imageWidth === targetWidth && imageHeight === targetHeight) {
            return resolve(item);
          }

          // image is smaller than target size but no upscaling is allowed
          if (
            imageWidth <= targetWidth &&
            imageHeight <= targetHeight &&
            !upscale
          ) {
            return resolve(item);
          }

          // the image needs to be resized
          item.setMetadata('resize', {
            mode: mode,
            upscale: upscale,
            size: {
              width: targetWidth,
              height: targetHeight
            }
          });

          resolve(item);
        });
      });
    });

    // Expose plugin options
    return {
      options: {
        // Enable or disable image resizing
        allowImageResize: [true, Type.BOOLEAN],

        // the method of rescaling
        // - force => force set size
        // - cover => pick biggest dimension
        // - contain => pick smaller dimension
        imageResizeMode: ['cover', Type.STRING],

        // set to false to disable upscaling of image smaller than the target width / height
        imageResizeUpscale: [true, Type.BOOLEAN],

        // target width
        imageResizeTargetWidth: [null, Type.INT],

        // target height
        imageResizeTargetHeight: [null, Type.INT]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "VXmc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__("kZht");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-filepond/esm2015/ngx-filepond.js
var ngx_filepond = __webpack_require__("x/0c");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/button.js
var esm2015_button = __webpack_require__("8JnZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/icon.js
var icon = __webpack_require__("a+5/");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/card.js
var card = __webpack_require__("gX7W");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/divider.js
var divider = __webpack_require__("dFIu");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/radio.js
var esm2015_radio = __webpack_require__("7ywl");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/input.js
var input = __webpack_require__("S/D4");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/list.js
var list = __webpack_require__("uWIS");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/coercion.js
var coercion = __webpack_require__("WT5v");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/forms/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3kIJ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/core.js + 1 modules
var esm2015_core = __webpack_require__("ApNh");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/slide-toggle.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for `mat-slide-toggle`.
 * @type {?}
 */
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = /*@__PURE__*/ new core["s" /* InjectionToken */]('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: ( /**
     * @return {?}
     */() => ({ disableToggleValue: false, disableDragValue: false }))
});
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids for slide-toggle components.
/** @type {?} */
let nextUniqueId = 0;
/**
 * \@docs-private
 * @type {?}
 */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: fesm2015_forms["o" /* NG_VALUE_ACCESSOR */],
    useExisting: /*@__PURE__*/ Object(core["bb" /* forwardRef */])(( /**
     * @return {?}
     */() => slide_toggle_MatSlideToggle)),
    multi: true
};
/**
 * Change event object emitted by a MatSlideToggle.
 */
class MatSlideToggleChange {
    /**
     * @param {?} source
     * @param {?} checked
     */
    constructor(source, checked) {
        this.source = source;
        this.checked = checked;
    }
}
// Boilerplate for applying mixins to MatSlideToggle.
/**
 * \@docs-private
 */
class MatSlideToggleBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatSlideToggleMixinBase = /*@__PURE__*/ Object(esm2015_core["J" /* mixinTabIndex */])(/*@__PURE__*/ Object(esm2015_core["E" /* mixinColor */])(/*@__PURE__*/ Object(esm2015_core["F" /* mixinDisableRipple */])(/*@__PURE__*/ Object(esm2015_core["G" /* mixinDisabled */])(MatSlideToggleBase)), 'accent'));
let slide_toggle_MatSlideToggle = /*@__PURE__*/ (() => {
    class MatSlideToggle extends _MatSlideToggleMixinBase {
        /**
         * @param {?} elementRef
         * @param {?} _focusMonitor
         * @param {?} _changeDetectorRef
         * @param {?} tabIndex
         * @param {?} _ngZone
         * @param {?} defaults
         * @param {?=} _animationMode
         * @param {?=} _dir
         */
        constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, _ngZone, defaults, _animationMode, _dir) {
            super(elementRef);
            this._focusMonitor = _focusMonitor;
            this._changeDetectorRef = _changeDetectorRef;
            this._ngZone = _ngZone;
            this.defaults = defaults;
            this._animationMode = _animationMode;
            this._dir = _dir;
            this._onChange = ( /**
             * @param {?} _
             * @return {?}
             */(_) => { });
            this._onTouched = ( /**
             * @return {?}
             */() => { });
            this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
            this._required = false;
            this._checked = false;
            /**
             * Whether the thumb is currently being dragged.
             */
            this._dragging = false;
            /**
             * Name value will be applied to the input element if present.
             */
            this.name = null;
            /**
             * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
             */
            this.id = this._uniqueId;
            /**
             * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
             */
            this.labelPosition = 'after';
            /**
             * Used to set the aria-label attribute on the underlying input element.
             */
            this.ariaLabel = null;
            /**
             * Used to set the aria-labelledby attribute on the underlying input element.
             */
            this.ariaLabelledby = null;
            /**
             * An event will be dispatched each time the slide-toggle changes its value.
             */
            this.change = new core["o" /* EventEmitter */]();
            /**
             * An event will be dispatched each time the slide-toggle input is toggled.
             * This event is always emitted when the user toggles the slide toggle, but this does not mean
             * the slide toggle's value has changed. The event does not fire when the user drags to change
             * the slide toggle value.
             */
            this.toggleChange = new core["o" /* EventEmitter */]();
            /**
             * An event will be dispatched each time the slide-toggle is dragged.
             * This event is always emitted when the user drags the slide toggle to make a change greater
             * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
             * the user toggles the slide toggle to change its value.
             */
            this.dragChange = new core["o" /* EventEmitter */]();
            this.tabIndex = parseInt(tabIndex) || 0;
        }
        /**
         * Whether the slide-toggle is required.
         * @return {?}
         */
        get required() { return this._required; }
        /**
         * @param {?} value
         * @return {?}
         */
        set required(value) { this._required = Object(coercion["c" /* coerceBooleanProperty */])(value); }
        /**
         * Whether the slide-toggle element is checked or not.
         * @return {?}
         */
        get checked() { return this._checked; }
        /**
         * @param {?} value
         * @return {?}
         */
        set checked(value) {
            this._checked = Object(coercion["c" /* coerceBooleanProperty */])(value);
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */
        get inputId() { return `${this.id || this._uniqueId}-input`; }
        /**
         * @return {?}
         */
        ngAfterContentInit() {
            this._focusMonitor
                .monitor(this._elementRef, true)
                .subscribe(( /**
         * @param {?} focusOrigin
         * @return {?}
         *//**
         * @param {?} focusOrigin
         * @return {?}
         */ focusOrigin => {
                if (!focusOrigin) {
                    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                    // Angular does not expect events to be raised during change detection, so any state
                    // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                    // error. See https://github.com/angular/angular/issues/17793. To work around this,
                    // we defer telling the form control it has been touched until the next tick.
                    Promise.resolve().then(( /**
                     * @return {?}
                     */() => this._onTouched()));
                }
            }));
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Method being called whenever the underlying input emits a change event.
         * @param {?} event
         * @return {?}
         */
        _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            if (!this._dragging) {
                this.toggleChange.emit();
            }
            // Releasing the pointer over the `<label>` element while dragging triggers another
            // click event on the `<label>` element. This means that the checked state of the underlying
            // input changed unintentionally and needs to be changed back. Or when the slide toggle's config
            // disabled toggle change event by setting `disableToggleValue: true`, the slide toggle's value
            // does not change, and the checked state of the underlying input needs to be changed back.
            if (this._dragging || this.defaults.disableToggleValue) {
                this._inputElement.nativeElement.checked = this.checked;
                return;
            }
            // Sync the value from the underlying input element with the component instance.
            this.checked = this._inputElement.nativeElement.checked;
            // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.
            this._emitChangeEvent();
        }
        /**
         * Method being called whenever the slide-toggle has been clicked.
         * @param {?} event
         * @return {?}
         */
        _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            this.checked = !!value;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this._onTouched = fn;
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the slide-toggle.
         * @return {?}
         */
        focus() {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard');
        }
        /**
         * Toggles the checked state of the slide-toggle.
         * @return {?}
         */
        toggle() {
            this.checked = !this.checked;
            this._onChange(this.checked);
        }
        /**
         * Emits a change event on the `change` output. Also notifies the FormControl about the change.
         * @private
         * @return {?}
         */
        _emitChangeEvent() {
            this._onChange(this.checked);
            this.change.emit(new MatSlideToggleChange(this, this.checked));
        }
        /**
         * Retrieves the percentage of thumb from the moved distance. Percentage as fraction of 100.
         * @private
         * @param {?} distance
         * @return {?}
         */
        _getDragPercentage(distance) {
            /** @type {?} */
            let percentage = (distance / this._thumbBarWidth) * 100;
            // When the toggle was initially checked, then we have to start the drag at the end.
            if (this._previousChecked) {
                percentage += 100;
            }
            return Math.max(0, Math.min(percentage, 100));
        }
        /**
         * @return {?}
         */
        _onDragStart() {
            if (!this.disabled && !this._dragging) {
                /** @type {?} */
                const thumbEl = this._thumbEl.nativeElement;
                this._thumbBarWidth = this._thumbBarEl.nativeElement.clientWidth - thumbEl.clientWidth;
                thumbEl.classList.add('mat-dragging');
                this._previousChecked = this.checked;
                this._dragging = true;
            }
        }
        /**
         * @param {?} event
         * @return {?}
         */
        _onDrag(event) {
            if (this._dragging) {
                /** @type {?} */
                const direction = this._dir && this._dir.value === 'rtl' ? -1 : 1;
                this._dragPercentage = this._getDragPercentage(event.deltaX * direction);
                // Calculate the moved distance based on the thumb bar width.
                /** @type {?} */
                const dragX = (this._dragPercentage / 100) * this._thumbBarWidth * direction;
                this._thumbEl.nativeElement.style.transform = `translate3d(${dragX}px, 0, 0)`;
            }
        }
        /**
         * @return {?}
         */
        _onDragEnd() {
            if (this._dragging) {
                /** @type {?} */
                const newCheckedValue = this._dragPercentage > 50;
                if (newCheckedValue !== this.checked) {
                    this.dragChange.emit();
                    if (!this.defaults.disableDragValue) {
                        this.checked = newCheckedValue;
                        this._emitChangeEvent();
                    }
                }
                // The drag should be stopped outside of the current event handler, otherwise the
                // click event will be fired before it and will revert the drag change.
                this._ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */() => setTimeout(( /**
                 * @return {?}
                 */() => {
                    if (this._dragging) {
                        this._dragging = false;
                        this._thumbEl.nativeElement.classList.remove('mat-dragging');
                        // Reset the transform because the component will take care
                        // of the thumb position after drag.
                        this._thumbEl.nativeElement.style.transform = '';
                    }
                }))));
            }
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */
        _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and it's children.
            this._changeDetectorRef.detectChanges();
        }
    }
    return MatSlideToggle;
})();
let MatSlideToggleModule = /*@__PURE__*/ (() => {
    class MatSlideToggleModule {
    }
    return MatSlideToggleModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/select.js
var esm2015_select = __webpack_require__("5ohT");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/sidenav.js
var sidenav = __webpack_require__("yy4G");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-file-encode/dist/filepond-plugin-file-encode.js
var filepond_plugin_file_encode = __webpack_require__("e2cq");
var filepond_plugin_file_encode_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_encode);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js
var filepond_plugin_file_validate_type = __webpack_require__("24yA");
var filepond_plugin_file_validate_type_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js
var filepond_plugin_file_validate_size = __webpack_require__("eFs7");
var filepond_plugin_file_validate_size_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_size);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js
var filepond_plugin_image_preview = __webpack_require__("x32j");
var filepond_plugin_image_preview_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js
var filepond_plugin_image_crop = __webpack_require__("x6aL");
var filepond_plugin_image_crop_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_crop);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js
var filepond_plugin_image_resize = __webpack_require__("QgGR");
var filepond_plugin_image_resize_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_resize);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js
var filepond_plugin_image_transform = __webpack_require__("dcom");
var filepond_plugin_image_transform_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_transform);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js
var filepond_plugin_image_exif_orientation = __webpack_require__("hrFO");
var filepond_plugin_image_exif_orientation_default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation);

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/dashboard.module.ts











// Registering plugins








Object(ngx_filepond["b" /* registerPlugin */])(filepond_plugin_file_encode_default.a, filepond_plugin_file_validate_size_default.a, filepond_plugin_file_validate_type_default.a, filepond_plugin_image_exif_orientation_default.a, filepond_plugin_image_preview_default.a, filepond_plugin_image_crop_default.a, filepond_plugin_image_resize_default.a, filepond_plugin_image_transform_default.a);
const matModules = [
    sidenav["h" /* MatSidenavModule */],
    card["g" /* MatCardModule */],
    icon["c" /* MatIconModule */],
    esm2015_button["c" /* MatButtonModule */],
    input["c" /* MatInputModule */],
    esm2015_select["d" /* MatSelectModule */],
    divider["b" /* MatDividerModule */],
    list["e" /* MatListModule */],
    esm2015_radio["d" /* MatRadioModule */],
    MatSlideToggleModule,
];
const ɵ0 = { title: 'Dashboard', depth: 1, roles: [] }, ɵ1 = { title: 'Overview' }, ɵ2 = { title: 'Settings', depth: '2' }, ɵ3 = { title: 'Settings', depth: '2' }, ɵ4 = () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(2), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "Ob70")).then(module => module.GridModuleNgFactory), ɵ5 = { title: 'Grid', depth: 2, preload: false }, ɵ6 = () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(2), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "UkOw")).then(module => module.ExperimentsModuleNgFactory), ɵ7 = { title: 'Experiments', depth: 2, preload: false }, ɵ8 = () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "G+kx")).then(module => module.WidgetsModuleNgFactory), ɵ9 = { title: 'Widgets', depth: '2', preload: false };
class DashboardModule {
}



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/router/router.ngfactory.js
var router_ngfactory = __webpack_require__("C9Ky");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/tooltip/typings/index.ngfactory.js
var index_ngfactory = __webpack_require__("pLqg");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/dashboard-layout/dashboard-layout.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".dashboard-container[_ngcontent-%COMP%]{height:100%}mat-sidenav.quickpanel[_ngcontent-%COMP%]{z-index:100;width:330px;min-width:330px;max-width:330px}@media screen and (max-width:959px){mat-sidenav.quickpanel[_ngcontent-%COMP%]{width:250px;min-width:250px;max-width:250px}button.user-button[_ngcontent-%COMP%]{min-width:72px}}@media screen and (min-width:960px){[_nghost-%COMP%]     .mat-drawer-backdrop{z-index:50!important}}.main-container[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;height:calc(100% - 64px);position:relative}@media (max-width:599px){.main-container[_ngcontent-%COMP%]{height:calc(100% - 56px)}}.content-container[_ngcontent-%COMP%]{height:100%}"];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/sidenav/typings/index.ngfactory.js
var typings_index_ngfactory = __webpack_require__("qaoS");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/bidi.js
var bidi = __webpack_require__("pOQZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/scrolling.js + 1 modules
var scrolling = __webpack_require__("tBgR");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/platform-browser/fesm2015/animations.js
var animations = __webpack_require__("FxgA");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/a11y.js
var a11y = __webpack_require__("owzC");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/platform.js
var esm2015_platform = __webpack_require__("4rR8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__("An66");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/quickpanel/src/lib/quickpanel.component.ngfactory.js + 2 modules
var quickpanel_component_ngfactory = __webpack_require__("Cf7O");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/quickpanel/src/lib/quickpanel.component.ts
var quickpanel_component = __webpack_require__("5pe5");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/filter.js
var filter = __webpack_require__("xVbo");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__("YtkY");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/components/icon-sidenav/icon-sidenav.directive.ts

class icon_sidenav_directive_IconSidenavDirective {
    constructor(store, menuService, mediaObserver) {
        this.store = store;
        this.menuService = menuService;
        this.mediaObserver = mediaObserver;
        this.isMobile = false;
    }
    get isIconSidenav() {
        return this.menuService.isIconSidenav;
    }
    onMouseEnter() {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = false;
            this.menuService.currentlyOpen = this.currentlyOpen;
            // this.store.dispatch(new NextCurrentlyOpened(this.currentlyOpen));
            // this.store.dispatch(new SetIconMode(false));
        }
    }
    onMouseLeave() {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = true;
            this.currentlyOpen = this.menuService.currentlyOpen;
            this.menuService.currentlyOpen = [];
            // this.store.dispatch(new NextCurrentlyOpened([]));
            // this.store.dispatch(new SetIconMode(true));
        }
    }
    ngOnInit() {
        this.mediaSubscription = this.mediaObserver
            .asObservable()
            .pipe(Object(filter["a" /* filter */])((changes) => changes.length > 0), Object(map["a" /* map */])((changes) => changes[0]))
            .subscribe((change) => {
            this.isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
        });
    }
    ngOnDestroy() {
        this.mediaSubscription.unsubscribe();
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs/store/fesm2015/ngxs-store.js + 1 modules
var ngxs_store = __webpack_require__("Rhw3");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/navigator/src/lib/services/menu.service.ts + 3 modules
var menu_service = __webpack_require__("q486");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/core.js
var flex_layout_esm2015_core = __webpack_require__("76xf");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/sidenav.component.scss.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var sidenav_component_scss_ngstyle_styles = ["mat-toolbar.mat-toolbar.sidenav-toolbar{background:#272b35;padding:0 14px 0 24px;z-index:3}.sidenav-container,.sidenav-scrollbar-container{height:100%}.cdk-focus-trap-content,mat-sidenav{overflow-y:hidden!important;overflow-x:hidden}.icon-sidenav-toggle{color:#a7a9ae;transition:transform .25s}.icon-sidenav-toggle.rotate{transform:rotate(-180deg)}.sidenav{width:250px;max-width:250px;background:#2b303b;overflow-x:hidden;z-index:4}@-webkit-keyframes fadein{0%{opacity:0}100%{opacity:1}}@keyframes fadein{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeout{0%{opacity:1}100%{opacity:0}}@keyframes fadeout{0%{opacity:1}100%{opacity:0}}@media screen and (min-width:960px){.sidenav+.cdk-visually-hidden+.mat-drawer-content,.sidenav+.mat-drawer-content{transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform,max-width,margin-left,margin-right!important;margin-left:0!important;background:#eee;z-index:5;overflow:hidden;box-shadow:inset 7px 0 9px -7px rgba(0,0,0,.4);max-width:calc(100% - 250px);transform:translate3d(250px,0,0)!important}.sidenav.icon-sidenav.collapsed+.cdk-visually-hidden+.mat-drawer-content,.sidenav.icon-sidenav.collapsed+.mat-drawer-content{max-width:calc(100% - 68px);transform:translate3d(68px,0,0)!important}.sidenav.icon-sidenav+.cdk-visually-hidden+.mat-drawer-content,.sidenav.icon-sidenav+.mat-drawer-content{max-width:calc(100% - 68px)}.sidenav.collapsed .fade-in-on-icon-sidenav{-webkit-animation:.5s cubic-bezier(.25,.8,.25,1) forwards fadeout;animation:.5s cubic-bezier(.25,.8,.25,1) forwards fadeout}.sidenav:not(.collapsed) .fade-in-on-icon-sidenav{-webkit-animation:.5s cubic-bezier(.25,.8,.25,1) forwards fadein;animation:.5s cubic-bezier(.25,.8,.25,1) forwards fadein}}"];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/components/sidenav-item/sidenav-item.component.scss.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var sidenav_item_component_scss_ngstyle_styles = [":host{display:block}mat-nav-list a.sidenav-anchor.mat-list-item .mat-list-item-content{padding-left:24px;padding-right:24px}mat-nav-list a.sidenav-anchor .sidenav-item-name{margin-left:24px;font-size:14px}mat-nav-list a.sidenav-anchor mat-icon{width:18px;height:18px;font-size:18px;line-height:18px}.sidenav-list{transition:height .4s cubic-bezier(.35,0,.25,1)}.sidenav-list>ngx-sidenav-item.open>.sidenav-anchor .sidenav-item-dropdown-indicator{transform:rotate(180deg)}.sidenav-list>ngx-sidenav-item .sidenav-item-dropdown-indicator{transition:transform .25s}.sidenav-list>ngx-sidenav-item .badge{padding:4px 8px;font-size:12px;background:#2196f3;border-radius:5px;color:#fff}.sidenav-toplevel .sidenav-anchor{position:relative;cursor:pointer;color:#a7a9ae;transition:color .1s;outline:0}.sidenav-toplevel .sidenav-anchor.active,.sidenav-toplevel .sidenav-anchor:hover{color:#fff}.sidenav-toplevel>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-anchor:hover{background:#272b35}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item{background:#262a34}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor:hover{background:#22262f}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item{background:#20242c}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor{padding-left:10px}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor:hover{background:#1d2028}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item{background:#1b1e25}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor{padding-left:20px}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor:hover{background:#181a20}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item{background:#16181e}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor{padding-left:30px}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor:hover{background:#121419}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item{background:#101216}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor{padding-left:40px}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-anchor:hover{background:#0d0e12}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item .sidenav-list-nested>.sidenav-item>.sidenav-anchor{padding-left:40px}.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item .sidenav-list-nested>.sidenav-item>.sidenav-anchor.active,.sidenav-toplevel>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item>.sidenav-list-nested>.sidenav-item .sidenav-list-nested>.sidenav-item>.sidenav-anchor:hover{background:#08080a}.sidenav-toplevel .sidenav-item .sidenav-list-nested{position:relative;padding:0;overflow:hidden}.sidenav-toplevel .sidenav-item .sidenav-list-nested:after,.sidenav-toplevel .sidenav-item .sidenav-list-nested:before{content:\" \";left:0;position:absolute;width:100%;height:2px;z-index:3}.sidenav-toplevel .sidenav-item .sidenav-list-nested:before{background:linear-gradient(180deg,rgba(0,0,0,.3) 0,transparent);top:0}.sidenav-toplevel .sidenav-item .sidenav-list-nested:after{background:linear-gradient(-180deg,rgba(0,0,0,.3) 0,transparent);bottom:0}"];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/list/typings/index.ngfactory.js
var list_typings_index_ngfactory = __webpack_require__("yN5F");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/router/fesm2015/router.js + 3 modules
var fesm2015_router = __webpack_require__("1VvW");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/icon/typings/index.ngfactory.js
var icon_typings_index_ngfactory = __webpack_require__("Hc9t");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/flex.js
var flex = __webpack_require__("Sgnd");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/components/sidenav-item/sidenav-item.component.ts
class SidenavItemComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.sidenavItemClass = true;
    }
    get isOpen() {
        return this.menuService.isOpen(this.item);
    }
    ngOnInit() { }
    toggleDropdown() {
        if (this.item.children && this.item.children.length > 0) {
            this.menuService.toggleItemOpen(this.item);
        }
    }
    // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
    getSubItemsHeight() {
        return this.getOpenSubItemsCount(this.item) * 48 + 'px';
    }
    // Counts the amount of Sub Items there is and returns the count.
    getOpenSubItemsCount(item) {
        let count = 0;
        if (item.children && item.children.length > 0 && this.menuService.isOpen(item)) {
            count += item.children.length;
            item.children.forEach(subItem => {
                count += this.getOpenSubItemsCount(subItem);
            });
        }
        return count;
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/components/sidenav-item/sidenav-item.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */















var styles_SidenavItemComponent = [sidenav_item_component_scss_ngstyle_styles];
var RenderType_SidenavItemComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_SidenavItemComponent, data: {} });

function View_SidenavItemComponent_3(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "span", [["class", "badge fade-in-on-icon-sidenav"]], [[4, "background-color", null]], null, null, null, null)), (_l()(), core["Vb" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.badge.color; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.item.badge.value; _ck(_v, 1, 0, currVal_1); }); }
function View_SidenavItemComponent_2(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 20, "a", [["class", "sidenav-anchor mat-list-item mat-ripple"], ["mat-list-item", ""], ["matRipple", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [2, "mat-ripple-unbounded", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](1, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 2, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 3, { _icon: 0 }), core["Ab" /* ɵdid */](5, 212992, null, 0, esm2015_core["x" /* MatRipple */], [core["m" /* ElementRef */], core["D" /* NgZone */], esm2015_platform["a" /* Platform */], [2, esm2015_core["m" /* MAT_RIPPLE_GLOBAL_OPTIONS */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Ab" /* ɵdid */](6, 671744, [[5, 4]], 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["Ob" /* ɵpad */](7, 1), core["Ab" /* ɵdid */](8, 1720320, null, 2, fesm2015_router["s" /* RouterLinkActive */], [fesm2015_router["q" /* Router */], core["m" /* ElementRef */], core["I" /* Renderer2 */], [2, fesm2015_router["r" /* RouterLink */]], [2, fesm2015_router["t" /* RouterLinkWithHref */]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), core["Tb" /* ɵqud */](603979776, 4, { links: 1 }), core["Tb" /* ɵqud */](603979776, 5, { linksWithHrefs: 1 }), core["Qb" /* ɵpod */](11, { exact: 0 }), (_l()(), core["Bb" /* ɵeld */](12, 0, null, 2, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](13, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](14, 0, ["", ""])), (_l()(), core["Bb" /* ɵeld */](15, 0, null, 2, 1, "span", [["class", "sidenav-item-name fade-in-on-icon-sidenav"]], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](16, null, ["", ""])), (_l()(), core["Bb" /* ɵeld */](17, 0, null, 2, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), core["Ab" /* ɵdid */](18, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_SidenavItemComponent_3)), core["Ab" /* ɵdid */](20, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_5 = _ck(_v, 7, 0, _co.item.link); _ck(_v, 6, 0, currVal_5); var currVal_6 = _ck(_v, 11, 0, true); var currVal_7 = "active"; _ck(_v, 8, 0, currVal_6, currVal_7); _ck(_v, 13, 0); var currVal_12 = ""; _ck(_v, 18, 0, currVal_12); var currVal_13 = _co.item.badge; _ck(_v, 20, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_2 = core["Nb" /* ɵnov */](_v, 5).unbounded; var currVal_3 = core["Nb" /* ɵnov */](_v, 6).target; var currVal_4 = core["Nb" /* ɵnov */](_v, 6).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_8 = core["Nb" /* ɵnov */](_v, 13).inline; var currVal_9 = (((core["Nb" /* ɵnov */](_v, 13).color !== "primary") && (core["Nb" /* ɵnov */](_v, 13).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 13).color !== "warn")); _ck(_v, 12, 0, currVal_8, currVal_9); var currVal_10 = _co.item.icon; _ck(_v, 14, 0, currVal_10); var currVal_11 = _co.item.name; _ck(_v, 16, 0, currVal_11); });
}
function View_SidenavItemComponent_4(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "sidenav-anchor mat-list-item mat-ripple"], ["mat-list-item", ""], ["matRipple", ""]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [2, "mat-ripple-unbounded", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleDropdown() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](1, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 6, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 7, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 8, { _icon: 0 }), core["Ab" /* ɵdid */](5, 212992, null, 0, esm2015_core["x" /* MatRipple */], [core["m" /* ElementRef */], core["D" /* NgZone */], esm2015_platform["a" /* Platform */], [2, esm2015_core["m" /* MAT_RIPPLE_GLOBAL_OPTIONS */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](6, 0, null, 2, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](7, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](8, 0, ["", ""])), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 2, 1, "span", [["class", "sidenav-item-name fade-in-on-icon-sidenav"]], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](10, null, ["", ""])), (_l()(), core["Bb" /* ɵeld */](11, 0, null, 2, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), core["Ab" /* ɵdid */](12, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 2, 2, "mat-icon", [["class", "sidenav-item-dropdown-indicator rotate fade-in-on-icon-sidenav mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](14, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["expand_more"]))], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 7, 0); var currVal_7 = ""; _ck(_v, 12, 0, currVal_7); _ck(_v, 14, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_2 = core["Nb" /* ɵnov */](_v, 5).unbounded; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = core["Nb" /* ɵnov */](_v, 7).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 7).color !== "primary") && (core["Nb" /* ɵnov */](_v, 7).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 7).color !== "warn")); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_5 = _co.item.icon; _ck(_v, 8, 0, currVal_5); var currVal_6 = _co.item.name; _ck(_v, 10, 0, currVal_6); var currVal_8 = core["Nb" /* ɵnov */](_v, 14).inline; var currVal_9 = (((core["Nb" /* ɵnov */](_v, 14).color !== "primary") && (core["Nb" /* ɵnov */](_v, 14).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 14).color !== "warn")); _ck(_v, 13, 0, currVal_8, currVal_9); });
}
function View_SidenavItemComponent_5(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-sidenav-item", [], [[2, "open", null], [2, "sidenav-item", null]], null, null, View_SidenavItemComponent_0, RenderType_SidenavItemComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, SidenavItemComponent, [menu_service["a" /* MenuService */]], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).isOpen; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).sidenavItemClass; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_SidenavItemComponent_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SidenavItemComponent_2)), core["Ab" /* ɵdid */](2, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), core["qb" /* ɵand */](0, [["elseBlock", 2]], null, 0, null, View_SidenavItemComponent_4)), (_l()(), core["Bb" /* ɵeld */](4, 0, null, null, 4, "mat-nav-list", [["class", "sidenav-list sidenav-list-nested mat-nav-list mat-list-base"], ["fxLayout", "column"], ["role", "navigation"]], [[4, "height", null]], null, null, list_typings_index_ngfactory["f" /* View_MatNavList_0 */], list_typings_index_ngfactory["c" /* RenderType_MatNavList */])), core["Ab" /* ɵdid */](5, 704512, null, 0, list["h" /* MatNavList */], [], null, null), core["Ab" /* ɵdid */](6, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_SidenavItemComponent_5)), core["Ab" /* ɵdid */](8, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !(((_co.item.children == null) ? null : _co.item.children.length) > 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = "column"; _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.item.children; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.getSubItemsHeight(); _ck(_v, 4, 0, currVal_2); }); }
function View_SidenavItemComponent_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SidenavItemComponent_1)), core["Ab" /* ɵdid */](1, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.item.disabled !== true); _ck(_v, 1, 0, currVal_0); }, null); }
function View_SidenavItemComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-sidenav-item", [], [[2, "open", null], [2, "sidenav-item", null]], null, null, View_SidenavItemComponent_0, RenderType_SidenavItemComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, SidenavItemComponent, [menu_service["a" /* MenuService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).isOpen; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).sidenavItemClass; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var SidenavItemComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-sidenav-item", SidenavItemComponent, View_SidenavItemComponent_Host_0, { item: "item" }, {}, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/toolbar/typings/index.ngfactory.js
var toolbar_typings_index_ngfactory = __webpack_require__("RCJ2");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/toolbar.js
var toolbar = __webpack_require__("9qA3");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/extended.js
var extended = __webpack_require__("2ob+");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__("Gien");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.ngfactory.js
var ngx_perfect_scrollbar_ngfactory = __webpack_require__("7pFi");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js + 2 modules
var ngx_perfect_scrollbar_es5 = __webpack_require__("YEP7");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__("ZTXN");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/index.ts + 6 modules
var src = __webpack_require__("G6qe");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/sidenav.component.ts


// import { sidenavAnimation } from '@ngx-starter-kit/animations';
/** @dynamic */
class sidenav_component_SidenavComponent {
    constructor(router, menuService, snackBar, cd, window) {
        this.router = router;
        this.menuService = menuService;
        this.snackBar = snackBar;
        this.cd = cd;
        this.window = window;
        this.destroyed$ = new Subject["a" /* Subject */]();
    }
    ngOnInit() {
        this.menuService.items$.pipe(Object(src["a" /* untilDestroy */])(this)).subscribe((items) => {
            this.items = items;
        });
        // this.router.events.pipe(untilDestroy(this))
        //   .subscribe(event => {
        //   if (event instanceof NavigationEnd) {
        //     this.menuService.setCurrentlyOpenByRoute(event.url);
        //     // setTimeout(() => {
        //     //   window.dispatchEvent(new Event('resize'));
        //     // }, 400);
        //     this.cd.markForCheck();
        //   }
        // });
    }
    ngOnDestroy() { }
    toggleIconSidenav() {
        setTimeout(() => {
            this.window.dispatchEvent(new Event('resize'));
        }, 300);
        this.menuService.isIconSidenav = !this.menuService.isIconSidenav;
        const snackBarConfig = {
            duration: 10000,
        };
        if (this.menuService.isIconSidenav) {
            this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', snackBarConfig);
        }
    }
    isIconSidenav() {
        return this.menuService.isIconSidenav;
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/snack-bar.js
var snack_bar = __webpack_require__("ifl5");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/window.token.ts
var window_token = __webpack_require__("Bpi4");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/sidenav.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */


























var styles_SidenavComponent = [sidenav_component_scss_ngstyle_styles];
var RenderType_SidenavComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_SidenavComponent, data: {} });

function View_SidenavComponent_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-sidenav-item", [], [[2, "open", null], [2, "sidenav-item", null]], null, null, View_SidenavItemComponent_0, RenderType_SidenavItemComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, SidenavItemComponent, [menu_service["a" /* MenuService */]], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).isOpen; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).sidenavItemClass; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_SidenavComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 30, "div", [["class", "sidenav-container"], ["fxLayout", "column"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 19, "mat-toolbar", [["class", "sidenav-toolbar mat-elevation-z2 mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, toolbar_typings_index_ngfactory["b" /* View_MatToolbar_0 */], toolbar_typings_index_ngfactory["a" /* RenderType_MatToolbar */])), core["Ab" /* ɵdid */](3, 4243456, null, 1, toolbar["a" /* MatToolbar */], [core["m" /* ElementRef */], esm2015_platform["a" /* Platform */], common["d" /* DOCUMENT */]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _toolbarRows: 1 }), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 0, 16, "div", [["fxLayout", "row"], ["style", "width: 100%;"]], null, null, null, null, null)), core["Ab" /* ɵdid */](6, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 2, "span", [["fxFlexAlign", "center"], ["style", "width: 22px; text-align: center; margin-left: -3px;"]], null, null, null, null, null)), core["Ab" /* ɵdid */](8, 671744, null, 0, flex["a" /* DefaultFlexAlignDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["g" /* FlexAlignStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlexAlign: [0, "fxFlexAlign"] }, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, null, 0, "img", [["src", "assets/img/logo-icon2.png"], ["style", "width: 25px; vertical-align: text-top;"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](10, 0, null, null, 1, "img", [["class", "fade-in-on-icon-sidenav"], ["fxFlexAlign", "center"], ["src", "assets/img/logo_text.png"], ["style", "height: 35px; margin-left: 24px; margin-bottom: -5px;"]], null, null, null, null, null)), core["Ab" /* ɵdid */](11, 671744, null, 0, flex["a" /* DefaultFlexAlignDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["g" /* FlexAlignStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlexAlign: [0, "fxFlexAlign"] }, null), (_l()(), core["Bb" /* ɵeld */](12, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), core["Ab" /* ɵdid */](13, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](14, 0, null, null, 7, "div", [["fxFlexAlign", "center"], ["fxHide", "true"], ["fxHide.gt-sm", "false"]], null, null, null, null, null)), core["Ab" /* ɵdid */](15, 671744, null, 0, flex["a" /* DefaultFlexAlignDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["g" /* FlexAlignStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlexAlign: [0, "fxFlexAlign"] }, null), core["Ab" /* ɵdid */](16, 4866048, null, 0, extended["b" /* DefaultShowHideDirective */], [core["m" /* ElementRef */], extended["d" /* ShowHideStyleBuilder */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["f" /* MediaMarshaller */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], core["F" /* PLATFORM_ID */], [2, flex_layout_esm2015_core["h" /* SERVER_TOKEN */]]], { fxHide: [0, "fxHide"], "fxHide.gt-sm": [1, "fxHide.gt-sm"] }, null), (_l()(), core["Bb" /* ɵeld */](17, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleIconSidenav() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](18, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](19, 0, null, 0, 2, "mat-icon", [["class", "icon-sidenav-toggle fade-in-on-icon-sidenav mat-icon notranslate"], ["role", "img"]], [[2, "rotate", null], [2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](20, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["chevron_left"])), (_l()(), core["Bb" /* ɵeld */](22, 0, null, null, 8, "div", [["class", "sidenav-scrollbar-container"], ["fxLayout", "column"]], null, null, null, null, null)), core["Ab" /* ɵdid */](23, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["Bb" /* ɵeld */](24, 0, null, null, 6, "perfect-scrollbar", [], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, ngx_perfect_scrollbar_ngfactory["b" /* View_PerfectScrollbarComponent_0 */], ngx_perfect_scrollbar_ngfactory["a" /* RenderType_PerfectScrollbarComponent */])), core["Ab" /* ɵdid */](25, 507904, null, 0, ngx_perfect_scrollbar_es5["b" /* PerfectScrollbarComponent */], [core["D" /* NgZone */], core["i" /* ChangeDetectorRef */], core["F" /* PLATFORM_ID */]], null, null), (_l()(), core["Bb" /* ɵeld */](26, 0, null, 0, 4, "mat-nav-list", [["class", "sidenav-list sidenav-toplevel mat-nav-list mat-list-base"], ["fxLayout", "column"], ["role", "navigation"]], null, null, null, list_typings_index_ngfactory["f" /* View_MatNavList_0 */], list_typings_index_ngfactory["c" /* RenderType_MatNavList */])), core["Ab" /* ɵdid */](27, 704512, null, 0, list["h" /* MatNavList */], [], null, null), core["Ab" /* ɵdid */](28, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_SidenavComponent_1)), core["Ab" /* ɵdid */](30, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_3 = "row"; _ck(_v, 6, 0, currVal_3); var currVal_4 = "center"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "center"; _ck(_v, 11, 0, currVal_5); var currVal_6 = ""; _ck(_v, 13, 0, currVal_6); var currVal_7 = "center"; _ck(_v, 15, 0, currVal_7); var currVal_8 = "true"; var currVal_9 = "false"; _ck(_v, 16, 0, currVal_8, currVal_9); _ck(_v, 20, 0); var currVal_15 = "column"; _ck(_v, 23, 0, currVal_15); _ck(_v, 25, 0); var currVal_18 = "column"; _ck(_v, 28, 0, currVal_18); var currVal_19 = _co.items; _ck(_v, 30, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (core["Nb" /* ɵnov */](_v, 3)._toolbarRows.length > 0); var currVal_2 = (core["Nb" /* ɵnov */](_v, 3)._toolbarRows.length === 0); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_10 = (core["Nb" /* ɵnov */](_v, 18).disabled || null); var currVal_11 = (core["Nb" /* ɵnov */](_v, 18)._animationMode === "NoopAnimations"); _ck(_v, 17, 0, currVal_10, currVal_11); var currVal_12 = _co.isIconSidenav(); var currVal_13 = core["Nb" /* ɵnov */](_v, 20).inline; var currVal_14 = (((core["Nb" /* ɵnov */](_v, 20).color !== "primary") && (core["Nb" /* ɵnov */](_v, 20).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 20).color !== "warn")); _ck(_v, 19, 0, currVal_12, currVal_13, currVal_14); var currVal_16 = core["Nb" /* ɵnov */](_v, 25).autoPropagation; var currVal_17 = core["Nb" /* ɵnov */](_v, 25).scrollIndicators; _ck(_v, 24, 0, currVal_16, currVal_17); });
}
function View_SidenavComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-sidenav", [], null, null, null, View_SidenavComponent_0, RenderType_SidenavComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, sidenav_component_SidenavComponent, [fesm2015_router["q" /* Router */], menu_service["a" /* MenuService */], snack_bar["b" /* MatSnackBar */], core["i" /* ChangeDetectorRef */], window_token["a" /* WINDOW */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SidenavComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-sidenav", sidenav_component_SidenavComponent, View_SidenavComponent_Host_0, {}, {}, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/toolbar/src/lib/toolbar.component.ngfactory.js + 23 modules
var toolbar_component_ngfactory = __webpack_require__("i0ti");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/toolbar/src/lib/toolbar.component.ts
var toolbar_component = __webpack_require__("8LFz");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/chat-box.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var chat_box_component_scss_shim_ngstyle_styles = [".chat-button[_ngcontent-%COMP%]{position:fixed!important;bottom:25px;right:25px;z-index:5}.chat-box[_ngcontent-%COMP%]{background:#efefef;position:fixed;bottom:50px;right:30px;width:351px;height:60vh;min-width:350px;min-height:400px;max-width:85vw;max-height:85vh;border-radius:5px;z-index:10;box-shadow:0 5px 35px 9px #ccc}@media (min-width:768px){.chat-box[_ngcontent-%COMP%]{min-height:30vh;height:40vh}}@media (min-width:992px){.chat-box[_ngcontent-%COMP%]{height:60vh}}.chat-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{min-height:72px!important;border-top-left-radius:5px;border-top-right-radius:5px}.chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:15px;overflow-y:scroll}@media only screen and (max-width:500px){.chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{height:40vh}}.chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 16px;font-weight:400;text-transform:none;text-align:center;font-size:16px;letter-spacing:.5px;margin:0 0 2px;max-width:65%;float:none;clear:both;line-height:1.5em;transition:all .2s;box-sizing:content-box}.chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message.to[_ngcontent-%COMP%]{color:#212121;background:rgba(255,255,255,.84);border-radius:5px 15px 15px;text-align:left;word-break:break-all;transform-origin:left top}.chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message.from[_ngcontent-%COMP%]{color:#fff;background:rgba(44,44,44,.67);box-shadow:none;float:right;position:relative;transform-origin:right top;margin:8px 0 10px 2px;border-radius:15px 15px 5px;text-align:center;display:inline-block;text-decoration:none;word-break:normal;-webkit-animation-name:animate-reply;animation-name:animate-reply;-webkit-animation-play-state:paused;animation-play-state:paused;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;transform:translate3d(0,0,0);animation-delay:-3s;-webkit-animation-delay:-3s}.chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message.from[_ngcontent-%COMP%] + .chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message.from[_ngcontent-%COMP%], .chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message.to[_ngcontent-%COMP%] + .chat-box[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .message.to[_ngcontent-%COMP%]{margin-top:-10px}.card-content[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]     mat-form-field.mat-form-field-appearance-outline.custom-outline .mat-form-field-wrapper{padding-bottom:0;margin:0}"];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/components/text-to-speech-preferences/text-to-speech-preferences.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var text_to_speech_preferences_component_scss_shim_ngstyle_styles = [""];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/core/typings/index.ngfactory.js
var core_typings_index_ngfactory = __webpack_require__("QH8h");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/card/typings/index.ngfactory.js
var card_typings_index_ngfactory = __webpack_require__("1P7/");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs/form-plugin/fesm2015/ngxs-form-plugin.js
var ngxs_form_plugin = __webpack_require__("MVJQ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/form-field/typings/index.ngfactory.js
var form_field_typings_index_ngfactory = __webpack_require__("QsvA");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/form-field.js
var form_field = __webpack_require__("qBwE");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/select/typings/index.ngfactory.js
var select_typings_index_ngfactory = __webpack_require__("rW4h");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/keycodes.js
var keycodes = __webpack_require__("K5Xz");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__("bwdy");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/slider.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 * @type {?}
 */
const MIN_AUTO_TICK_SEPARATION = 30;
/**
 * The thumb gap size for a disabled slider.
 * @type {?}
 */
const DISABLED_THUMB_GAP = 7;
/**
 * The thumb gap size for a non-active slider at its minimum value.
 * @type {?}
 */
const MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
/**
 * The thumb gap size for an active slider at its minimum value.
 * @type {?}
 */
const MIN_VALUE_ACTIVE_THUMB_GAP = 10;
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * \@docs-private
 * @type {?}
 */
const MAT_SLIDER_VALUE_ACCESSOR = {
    provide: fesm2015_forms["o" /* NG_VALUE_ACCESSOR */],
    useExisting: /*@__PURE__*/ Object(core["bb" /* forwardRef */])(( /**
     * @return {?}
     */() => slider_MatSlider)),
    multi: true
};
/**
 * A simple change event emitted by the MatSlider component.
 */
class MatSliderChange {
}
// Boilerplate for applying mixins to MatSlider.
/**
 * \@docs-private
 */
class MatSliderBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatSliderMixinBase = /*@__PURE__*/ Object(esm2015_core["J" /* mixinTabIndex */])(/*@__PURE__*/ Object(esm2015_core["E" /* mixinColor */])(/*@__PURE__*/ Object(esm2015_core["G" /* mixinDisabled */])(MatSliderBase), 'accent'));
let slider_MatSlider = /*@__PURE__*/ (() => {
    class MatSlider extends _MatSliderMixinBase {
        /**
         * @param {?} elementRef
         * @param {?} _focusMonitor
         * @param {?} _changeDetectorRef
         * @param {?} _dir
         * @param {?} tabIndex
         * @param {?=} _animationMode
         */
        constructor(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode) {
            super(elementRef);
            this._focusMonitor = _focusMonitor;
            this._changeDetectorRef = _changeDetectorRef;
            this._dir = _dir;
            this._animationMode = _animationMode;
            this._invert = false;
            this._max = 100;
            this._min = 0;
            this._step = 1;
            this._thumbLabel = false;
            this._tickInterval = 0;
            this._value = null;
            this._vertical = false;
            /**
             * Event emitted when the slider value has changed.
             */
            this.change = new core["o" /* EventEmitter */]();
            /**
             * Event emitted when the slider thumb moves.
             */
            this.input = new core["o" /* EventEmitter */]();
            /**
             * Emits when the raw value of the slider changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             * \@docs-private
             */
            this.valueChange = new core["o" /* EventEmitter */]();
            /**
             * onTouch function registered via registerOnTouch (ControlValueAccessor).
             */
            this.onTouched = ( /**
             * @return {?}
             */() => { });
            this._percent = 0;
            /**
             * Whether or not the thumb is sliding.
             * Used to determine if there should be a transition for the thumb and fill track.
             */
            this._isSliding = false;
            /**
             * Whether or not the slider is active (clicked or sliding).
             * Used to shrink and grow the thumb as according to the Material Design spec.
             */
            this._isActive = false;
            /**
             * The size of a tick interval as a percentage of the size of the track.
             */
            this._tickIntervalPercent = 0;
            /**
             * The dimensions of the slider.
             */
            this._sliderDimensions = null;
            this._controlValueAccessorChangeFn = ( /**
             * @return {?}
             */() => { });
            /**
             * Subscription to the Directionality change EventEmitter.
             */
            this._dirChangeSubscription = Subscription["a" /* Subscription */].EMPTY;
            this.tabIndex = parseInt(tabIndex) || 0;
        }
        /**
         * Whether the slider is inverted.
         * @return {?}
         */
        get invert() { return this._invert; }
        /**
         * @param {?} value
         * @return {?}
         */
        set invert(value) {
            this._invert = Object(coercion["c" /* coerceBooleanProperty */])(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */
        get max() { return this._max; }
        /**
         * @param {?} v
         * @return {?}
         */
        set max(v) {
            this._max = Object(coercion["f" /* coerceNumberProperty */])(v, this._max);
            this._percent = this._calculatePercentage(this._value);
            // Since this also modifies the percentage, we need to let the change detection know.
            this._changeDetectorRef.markForCheck();
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */
        get min() { return this._min; }
        /**
         * @param {?} v
         * @return {?}
         */
        set min(v) {
            this._min = Object(coercion["f" /* coerceNumberProperty */])(v, this._min);
            // If the value wasn't explicitly set by the user, set it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            this._percent = this._calculatePercentage(this._value);
            // Since this also modifies the percentage, we need to let the change detection know.
            this._changeDetectorRef.markForCheck();
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */
        get step() { return this._step; }
        /**
         * @param {?} v
         * @return {?}
         */
        set step(v) {
            this._step = Object(coercion["f" /* coerceNumberProperty */])(v, this._step);
            if (this._step % 1 !== 0) {
                this._roundToDecimal = ( /** @type {?} */(this._step.toString().split('.').pop())).length;
            }
            // Since this could modify the label, we need to notify the change detection.
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */
        get thumbLabel() { return this._thumbLabel; }
        /**
         * @param {?} value
         * @return {?}
         */
        set thumbLabel(value) { this._thumbLabel = Object(coercion["c" /* coerceBooleanProperty */])(value); }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */
        get tickInterval() { return this._tickInterval; }
        /**
         * @param {?} value
         * @return {?}
         */
        set tickInterval(value) {
            if (value === 'auto') {
                this._tickInterval = 'auto';
            }
            else if (typeof value === 'number' || typeof value === 'string') {
                this._tickInterval = Object(coercion["f" /* coerceNumberProperty */])(value, ( /** @type {?} */(this._tickInterval)));
            }
            else {
                this._tickInterval = 0;
            }
        }
        /**
         * Value of the slider.
         * @return {?}
         */
        get value() {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        set value(v) {
            if (v !== this._value) {
                /** @type {?} */
                let value = Object(coercion["f" /* coerceNumberProperty */])(v);
                // While incrementing by a decimal we can end up with values like 33.300000000000004.
                // Truncate it to ensure that it matches the label and to make it easier to work with.
                if (this._roundToDecimal) {
                    value = parseFloat(value.toFixed(this._roundToDecimal));
                }
                this._value = value;
                this._percent = this._calculatePercentage(this._value);
                // Since this also modifies the percentage, we need to let the change detection know.
                this._changeDetectorRef.markForCheck();
            }
        }
        /**
         * Whether the slider is vertical.
         * @return {?}
         */
        get vertical() { return this._vertical; }
        /**
         * @param {?} value
         * @return {?}
         */
        set vertical(value) {
            this._vertical = Object(coercion["c" /* coerceBooleanProperty */])(value);
        }
        /**
         * The value to be used for display purposes.
         * @return {?}
         */
        get displayValue() {
            if (this.displayWith) {
                return this.displayWith(this.value);
            }
            // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.
            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
                return this.value.toFixed(this._roundToDecimal);
            }
            return this.value || 0;
        }
        /**
         * set focus to the host element
         * @return {?}
         */
        focus() {
            this._focusHostElement();
        }
        /**
         * blur the host element
         * @return {?}
         */
        blur() {
            this._blurHostElement();
        }
        /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */
        get percent() { return this._clamp(this._percent); }
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */
        get _invertAxis() {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
        }
        /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */
        get _isMinValue() {
            return this.percent === 0;
        }
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */
        get _thumbGap() {
            if (this.disabled) {
                return DISABLED_THUMB_GAP;
            }
            if (this._isMinValue && !this.thumbLabel) {
                return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }
            return 0;
        }
        /**
         * CSS styles for the track background element.
         * @return {?}
         */
        get _trackBackgroundStyles() {
            /** @type {?} */
            const axis = this.vertical ? 'Y' : 'X';
            /** @type {?} */
            const scale = this.vertical ? `1, ${1 - this.percent}, 1` : `${1 - this.percent}, 1, 1`;
            /** @type {?} */
            const sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
                // scale3d avoids some rendering issues in Chrome. See #12071.
                transform: `translate${axis}(${sign}${this._thumbGap}px) scale3d(${scale})`
            };
        }
        /**
         * CSS styles for the track fill element.
         * @return {?}
         */
        get _trackFillStyles() {
            /** @type {?} */
            const axis = this.vertical ? 'Y' : 'X';
            /** @type {?} */
            const scale = this.vertical ? `1, ${this.percent}, 1` : `${this.percent}, 1, 1`;
            /** @type {?} */
            const sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
                // scale3d avoids some rendering issues in Chrome. See #12071.
                transform: `translate${axis}(${sign}${this._thumbGap}px) scale3d(${scale})`
            };
        }
        /**
         * CSS styles for the ticks container element.
         * @return {?}
         */
        get _ticksContainerStyles() {
            /** @type {?} */
            let axis = this.vertical ? 'Y' : 'X';
            // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.
            /** @type {?} */
            let sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            /** @type {?} */
            let offset = this._tickIntervalPercent / 2 * 100;
            return {
                'transform': `translate${axis}(${sign}${offset}%)`
            };
        }
        /**
         * CSS styles for the ticks element.
         * @return {?}
         */
        get _ticksStyles() {
            /** @type {?} */
            let tickSize = this._tickIntervalPercent * 100;
            /** @type {?} */
            let backgroundSize = this.vertical ? `2px ${tickSize}%` : `${tickSize}% 2px`;
            /** @type {?} */
            let axis = this.vertical ? 'Y' : 'X';
            // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.
            /** @type {?} */
            let sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            /** @type {?} */
            let rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            /** @type {?} */
            let styles = {
                'backgroundSize': backgroundSize,
                // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
                'transform': `translateZ(0) translate${axis}(${sign}${tickSize / 2}%)${rotate}`
            };
            if (this._isMinValue && this._thumbGap) {
                /** @type {?} */
                let side = this.vertical ?
                    (this._invertAxis ? 'Bottom' : 'Top') :
                    (this._invertAxis ? 'Right' : 'Left');
                styles[`padding${side}`] = `${this._thumbGap}px`;
            }
            return styles;
        }
        /**
         * @return {?}
         */
        get _thumbContainerStyles() {
            /** @type {?} */
            let axis = this.vertical ? 'Y' : 'X';
            // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.
            /** @type {?} */
            let invertOffset = (this._getDirection() == 'rtl' && !this.vertical) ? !this._invertAxis : this._invertAxis;
            /** @type {?} */
            let offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
                'transform': `translate${axis}(-${offset}%)`
            };
        }
        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         * @private
         * @return {?}
         */
        _shouldInvertMouseCoords() {
            return (this._getDirection() == 'rtl' && !this.vertical) ? !this._invertAxis : this._invertAxis;
        }
        /**
         * The language direction for this slider element.
         * @private
         * @return {?}
         */
        _getDirection() {
            return (this._dir && this._dir.value == 'rtl') ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this._focusMonitor
                .monitor(this._elementRef, true)
                .subscribe(( /**
         * @param {?} origin
         * @return {?}
         */(origin) => {
                this._isActive = !!origin && origin !== 'keyboard';
                this._changeDetectorRef.detectChanges();
            }));
            if (this._dir) {
                this._dirChangeSubscription = this._dir.change.subscribe(( /**
                 * @return {?}
                 */() => {
                    this._changeDetectorRef.markForCheck();
                }));
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
            this._dirChangeSubscription.unsubscribe();
        }
        /**
         * @return {?}
         */
        _onMouseenter() {
            if (this.disabled) {
                return;
            }
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();
            this._updateTickIntervalPercent();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        _onMousedown(event) {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (this.disabled || event.button !== 0) {
                return;
            }
            /** @type {?} */
            const oldValue = this.value;
            this._isSliding = false;
            this._focusHostElement();
            this._updateValueFromPosition({ x: event.clientX, y: event.clientY });
            // Emit a change and input event if the value changed.
            if (oldValue != this.value) {
                this._emitInputEvent();
                this._emitChangeEvent();
            }
        }
        /**
         * @param {?} event
         * @return {?}
         */
        _onSlide(event) {
            if (this.disabled) {
                return;
            }
            // The slide start event sometimes fails to fire on iOS, so if we're not already in the sliding
            // state, call the slide start handler manually.
            if (!this._isSliding) {
                this._onSlideStart(null);
            }
            // Prevent the slide from selecting anything else.
            event.preventDefault();
            /** @type {?} */
            let oldValue = this.value;
            this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
            // Native range elements always emit `input` events when the value changed while sliding.
            if (oldValue != this.value) {
                this._emitInputEvent();
            }
        }
        /**
         * @param {?} event
         * @return {?}
         */
        _onSlideStart(event) {
            if (this.disabled || this._isSliding) {
                return;
            }
            // Simulate mouseenter in case this is a mobile device.
            this._onMouseenter();
            this._isSliding = true;
            this._focusHostElement();
            this._valueOnSlideStart = this.value;
            if (event) {
                this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
                event.preventDefault();
            }
        }
        /**
         * @return {?}
         */
        _onSlideEnd() {
            this._isSliding = false;
            if (this._valueOnSlideStart != this.value && !this.disabled) {
                this._emitChangeEvent();
            }
            this._valueOnSlideStart = null;
        }
        /**
         * @return {?}
         */
        _onFocus() {
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();
            this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */
        _onBlur() {
            this.onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        _onKeydown(event) {
            if (this.disabled || Object(keycodes["s" /* hasModifierKey */])(event)) {
                return;
            }
            /** @type {?} */
            const oldValue = this.value;
            switch (event.keyCode) {
                case keycodes["l" /* PAGE_UP */]:
                    this._increment(10);
                    break;
                case keycodes["k" /* PAGE_DOWN */]:
                    this._increment(-10);
                    break;
                case keycodes["e" /* END */]:
                    this.value = this.max;
                    break;
                case keycodes["h" /* HOME */]:
                    this.value = this.min;
                    break;
                case keycodes["i" /* LEFT_ARROW */]:
                    // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                    // inverted slider the thumb moves in that direction. However for a blind user, nothing
                    // about the slider indicates that it is inverted. They will expect left to be decrement,
                    // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                    // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                    // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                    // sighted users, therefore we do not swap the meaning.
                    this._increment(this._getDirection() == 'rtl' ? 1 : -1);
                    break;
                case keycodes["p" /* UP_ARROW */]:
                    this._increment(1);
                    break;
                case keycodes["m" /* RIGHT_ARROW */]:
                    // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                    this._increment(this._getDirection() == 'rtl' ? -1 : 1);
                    break;
                case keycodes["d" /* DOWN_ARROW */]:
                    this._increment(-1);
                    break;
                default:
                    // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                    // it.
                    return;
            }
            if (oldValue != this.value) {
                this._emitInputEvent();
                this._emitChangeEvent();
            }
            this._isSliding = true;
            event.preventDefault();
        }
        /**
         * @return {?}
         */
        _onKeyup() {
            this._isSliding = false;
        }
        /**
         * Increments the slider by the given number of steps (negative number decrements).
         * @private
         * @param {?} numSteps
         * @return {?}
         */
        _increment(numSteps) {
            this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
        }
        /**
         * Calculate the new value from the new physical location. The value will always be snapped.
         * @private
         * @param {?} pos
         * @return {?}
         */
        _updateValueFromPosition(pos) {
            if (!this._sliderDimensions) {
                return;
            }
            /** @type {?} */
            let offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
            /** @type {?} */
            let size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */
            let posComponent = this.vertical ? pos.y : pos.x;
            // The exact value is calculated from the event and used to find the closest snap value.
            /** @type {?} */
            let percent = this._clamp((posComponent - offset) / size);
            if (this._shouldInvertMouseCoords()) {
                percent = 1 - percent;
            }
            // Since the steps may not divide cleanly into the max value, if the user
            // slid to 0 or 100 percent, we jump to the min/max value. This approach
            // is slightly more intuitive than using `Math.ceil` below, because it
            // follows the user's pointer closer.
            if (percent === 0) {
                this.value = this.min;
            }
            else if (percent === 1) {
                this.value = this.max;
            }
            else {
                /** @type {?} */
                const exactValue = this._calculateValue(percent);
                // This calculation finds the closest step by finding the closest
                // whole number divisible by the step relative to the min.
                /** @type {?} */
                const closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
                // The value needs to snap to the min and max.
                this.value = this._clamp(closestValue, this.min, this.max);
            }
        }
        /**
         * Emits a change event if the current value is different from the last emitted value.
         * @private
         * @return {?}
         */
        _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value);
            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
        }
        /**
         * Emits an input event when the current value is different from the last emitted value.
         * @private
         * @return {?}
         */
        _emitInputEvent() {
            this.input.emit(this._createChangeEvent());
        }
        /**
         * Updates the amount of space between ticks as a percentage of the width of the slider.
         * @private
         * @return {?}
         */
        _updateTickIntervalPercent() {
            if (!this.tickInterval || !this._sliderDimensions) {
                return;
            }
            if (this.tickInterval == 'auto') {
                /** @type {?} */
                let trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
                /** @type {?} */
                let pixelsPerStep = trackSize * this.step / (this.max - this.min);
                /** @type {?} */
                let stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
                /** @type {?} */
                let pixelsPerTick = stepsPerTick * this.step;
                this._tickIntervalPercent = pixelsPerTick / trackSize;
            }
            else {
                this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
            }
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?=} value
         * @return {?}
         */
        _createChangeEvent(value = this.value) {
            /** @type {?} */
            let event = new MatSliderChange();
            event.source = this;
            event.value = value;
            return event;
        }
        /**
         * Calculates the percentage of the slider that a value is.
         * @private
         * @param {?} value
         * @return {?}
         */
        _calculatePercentage(value) {
            return ((value || 0) - this.min) / (this.max - this.min);
        }
        /**
         * Calculates the value a percentage of the slider corresponds to.
         * @private
         * @param {?} percentage
         * @return {?}
         */
        _calculateValue(percentage) {
            return this.min + percentage * (this.max - this.min);
        }
        /**
         * Return a number between two numbers.
         * @private
         * @param {?} value
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */
        _clamp(value, min = 0, max = 1) {
            return Math.max(min, Math.min(value, max));
        }
        /**
         * Get the bounding client rect of the slider track element.
         * The track is used rather than the native element to ignore the extra space that the thumb can
         * take up.
         * @private
         * @return {?}
         */
        _getSliderDimensions() {
            return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
        }
        /**
         * Focuses the native element.
         * Currently only used to allow a blur event to fire but will be used with keyboard input later.
         * @private
         * @return {?}
         */
        _focusHostElement() {
            this._elementRef.nativeElement.focus();
        }
        /**
         * Blurs the native element.
         * @private
         * @return {?}
         */
        _blurHostElement() {
            this._elementRef.nativeElement.blur();
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            this.value = value;
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
        }
    }
    return MatSlider;
})();
let MatSliderModule = /*@__PURE__*/ (() => {
    class MatSliderModule {
    }
    return MatSliderModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/platform-browser/fesm2015/platform-browser.js
var platform_browser = __webpack_require__("ENSU");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/slider/typings/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */









var MatSliderModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](MatSliderModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, []], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, platform_browser["e" /* HAMMER_GESTURE_CONFIG */], esm2015_core["e" /* GestureConfig */], [[2, esm2015_core["i" /* MAT_HAMMER_OPTIONS */]], [2, esm2015_core["n" /* MatCommonModule */]]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, MatSliderModule, MatSliderModule, [])]); });

var styles_MatSlider = [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label:active,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}@media (-ms-high-contrast:active){.mat-slider-thumb-label{outline:solid 1px}}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-track-fill{transition:none}"];
var RenderType_MatSlider = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_MatSlider, data: {} });

function View_MatSlider_0(_l) { return core["Xb" /* ɵvid */](2, [core["Tb" /* ɵqud */](671088640, 1, { _sliderWrapper: 0 }), (_l()(), core["Bb" /* ɵeld */](1, 0, [[1, 0], ["sliderWrapper", 1]], null, 21, "div", [["class", "mat-slider-wrapper"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 6, "div", [["class", "mat-slider-track-wrapper"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 2, "div", [["class", "mat-slider-track-background"]], null, null, null, null, null)), core["Sb" /* ɵprd */](512, null, common["C" /* ɵNgStyleImpl */], common["D" /* ɵNgStyleR2Impl */], [core["m" /* ElementRef */], core["w" /* KeyValueDiffers */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](5, 278528, null, 0, common["q" /* NgStyle */], [common["C" /* ɵNgStyleImpl */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), core["Bb" /* ɵeld */](6, 0, null, null, 2, "div", [["class", "mat-slider-track-fill"]], null, null, null, null, null)), core["Sb" /* ɵprd */](512, null, common["C" /* ɵNgStyleImpl */], common["D" /* ɵNgStyleR2Impl */], [core["m" /* ElementRef */], core["w" /* KeyValueDiffers */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](8, 278528, null, 0, common["q" /* NgStyle */], [common["C" /* ɵNgStyleImpl */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, null, 5, "div", [["class", "mat-slider-ticks-container"]], null, null, null, null, null)), core["Sb" /* ɵprd */](512, null, common["C" /* ɵNgStyleImpl */], common["D" /* ɵNgStyleR2Impl */], [core["m" /* ElementRef */], core["w" /* KeyValueDiffers */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](11, 278528, null, 0, common["q" /* NgStyle */], [common["C" /* ɵNgStyleImpl */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), core["Bb" /* ɵeld */](12, 0, null, null, 2, "div", [["class", "mat-slider-ticks"]], null, null, null, null, null)), core["Sb" /* ɵprd */](512, null, common["C" /* ɵNgStyleImpl */], common["D" /* ɵNgStyleR2Impl */], [core["m" /* ElementRef */], core["w" /* KeyValueDiffers */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](14, 278528, null, 0, common["q" /* NgStyle */], [common["C" /* ɵNgStyleImpl */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), core["Bb" /* ɵeld */](15, 0, null, null, 7, "div", [["class", "mat-slider-thumb-container"]], null, null, null, null, null)), core["Sb" /* ɵprd */](512, null, common["C" /* ɵNgStyleImpl */], common["D" /* ɵNgStyleR2Impl */], [core["m" /* ElementRef */], core["w" /* KeyValueDiffers */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](17, 278528, null, 0, common["q" /* NgStyle */], [common["C" /* ɵNgStyleImpl */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), core["Bb" /* ɵeld */](18, 0, null, null, 0, "div", [["class", "mat-slider-focus-ring"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](19, 0, null, null, 0, "div", [["class", "mat-slider-thumb"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](20, 0, null, null, 2, "div", [["class", "mat-slider-thumb-label"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](21, 0, null, null, 1, "span", [["class", "mat-slider-thumb-label-text"]], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](22, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._trackBackgroundStyles; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co._trackFillStyles; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co._ticksContainerStyles; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co._ticksStyles; _ck(_v, 14, 0, currVal_3); var currVal_4 = _co._thumbContainerStyles; _ck(_v, 17, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.displayValue; _ck(_v, 22, 0, currVal_5); }); }
function View_MatSlider_Host_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-slider", [["class", "mat-slider"], ["role", "slider"]], [[8, "tabIndex", 0], [1, "aria-disabled", 0], [1, "aria-valuemax", 0], [1, "aria-valuemin", 0], [1, "aria-valuenow", 0], [1, "aria-orientation", 0], [2, "mat-slider-disabled", null], [2, "mat-slider-has-ticks", null], [2, "mat-slider-horizontal", null], [2, "mat-slider-axis-inverted", null], [2, "mat-slider-sliding", null], [2, "mat-slider-thumb-label-showing", null], [2, "mat-slider-vertical", null], [2, "mat-slider-min-value", null], [2, "mat-slider-hide-last-tick", null], [2, "_mat-animation-noopable", null]], [[null, "focus"], [null, "blur"], [null, "mousedown"], [null, "keydown"], [null, "keyup"], [null, "mouseenter"], [null, "slide"], [null, "slideend"], [null, "slidestart"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2)._onFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 2)._onBlur() !== false);
                ad = (pd_1 && ad);
            }
            if (("mousedown" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 2)._onMousedown($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 2)._onKeydown($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("keyup" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 2)._onKeyup() !== false);
                ad = (pd_4 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 2)._onMouseenter() !== false);
                ad = (pd_5 && ad);
            }
            if (("slide" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 2)._onSlide($event) !== false);
                ad = (pd_6 && ad);
            }
            if (("slideend" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 2)._onSlideEnd() !== false);
                ad = (pd_7 && ad);
            }
            if (("slidestart" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 2)._onSlideStart($event) !== false);
                ad = (pd_8 && ad);
            }
            return ad;
        }, View_MatSlider_0, RenderType_MatSlider)), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [slider_MatSlider]), core["Ab" /* ɵdid */](2, 245760, null, 0, slider_MatSlider, [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, bidi["b" /* Directionality */]], [8, null], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 2).tabIndex; var currVal_1 = core["Nb" /* ɵnov */](_v, 2).disabled; var currVal_2 = core["Nb" /* ɵnov */](_v, 2).max; var currVal_3 = core["Nb" /* ɵnov */](_v, 2).min; var currVal_4 = core["Nb" /* ɵnov */](_v, 2).value; var currVal_5 = (core["Nb" /* ɵnov */](_v, 2).vertical ? "vertical" : "horizontal"); var currVal_6 = core["Nb" /* ɵnov */](_v, 2).disabled; var currVal_7 = core["Nb" /* ɵnov */](_v, 2).tickInterval; var currVal_8 = !core["Nb" /* ɵnov */](_v, 2).vertical; var currVal_9 = core["Nb" /* ɵnov */](_v, 2)._invertAxis; var currVal_10 = core["Nb" /* ɵnov */](_v, 2)._isSliding; var currVal_11 = core["Nb" /* ɵnov */](_v, 2).thumbLabel; var currVal_12 = core["Nb" /* ɵnov */](_v, 2).vertical; var currVal_13 = core["Nb" /* ɵnov */](_v, 2)._isMinValue; var currVal_14 = (core["Nb" /* ɵnov */](_v, 2).disabled || ((core["Nb" /* ɵnov */](_v, 2)._isMinValue && core["Nb" /* ɵnov */](_v, 2)._thumbGap) && core["Nb" /* ɵnov */](_v, 2)._invertAxis)); var currVal_15 = (core["Nb" /* ɵnov */](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]); });
}
var MatSliderNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("mat-slider", slider_MatSlider, View_MatSlider_Host_0, { disabled: "disabled", color: "color", tabIndex: "tabIndex", invert: "invert", max: "max", min: "min", step: "step", thumbLabel: "thumbLabel", tickInterval: "tickInterval", value: "value", displayWith: "displayWith", vertical: "vertical" }, { change: "change", input: "input", valueChange: "valueChange" }, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs-labs/immer-adapter/fesm2015/ngxs-labs-immer-adapter.js + 1 modules
var ngxs_labs_immer_adapter = __webpack_require__("w8XO");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/ApiAiConstants.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ApiAiConstants;
(function (ApiAiConstants) {
    let AVAILABLE_LANGUAGES;
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = "en"] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = "de"] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = "es"] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = "pt-BR"] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = "zh-HK"] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = "zh-CN"] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = "zh-TW"] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = "nl"] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = "fr"] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = "it"] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = "ja"] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = "ko"] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = "pt"] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = "ru"] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = "uk"] = "UK";
    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));
    ApiAiConstants.VERSION = "2.0.0-beta.20";
    ApiAiConstants.DEFAULT_BASE_URL = "https://api.api.ai/v1/";
    ApiAiConstants.DEFAULT_API_VERSION = "20150910";
    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;
})(ApiAiConstants || (ApiAiConstants = {}));

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/Errors.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ApiAiBaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = new Error().stack;
    }
}
class ApiAiClientConfigurationError extends ApiAiBaseError {
    constructor(message) {
        super(message);
        this.name = "ApiAiClientConfigurationError";
    }
}
class ApiAiRequestError extends ApiAiBaseError {
    constructor(message, code = null) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = "ApiAiRequestError";
    }
}

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/XhrRequest.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * quick ts implementation of example from
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * with some minor improvements
 * @todo: test (?)
 * @todo: add node.js implementation with node's http inside. Just to make SDK cross-platform
 */
class XhrRequest {
    // Method that performs the ajax request
    static ajax(method, url, args = null, headers = null, options = {}) {
        // Creating a promise
        return new Promise((resolve, reject) => {
            // Instantiates the XMLHttpRequest
            const client = XhrRequest.createXMLHTTPObject();
            let uri = url;
            let payload = null;
            // Add given payload to get request
            if (args && (method === XhrRequest.Method.GET)) {
                uri += "?";
                let argcount = 0;
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        if (argcount++) {
                            uri += "&";
                        }
                        uri += encodeURIComponent(key) + "=" + encodeURIComponent(args[key]);
                    }
                }
            }
            else if (args) {
                if (!headers) {
                    headers = {};
                }
                headers["Content-Type"] = "application/json; charset=utf-8";
                payload = JSON.stringify(args);
            }
            for (const key in options) {
                if (key in client) {
                    client[key] = options[key];
                }
            }
            // hack: method[method] is somewhat like .toString for enum Method
            // should be made in normal way
            client.open(XhrRequest.Method[method], uri, true);
            // Add given headers
            if (headers) {
                for (const key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        client.setRequestHeader(key, headers[key]);
                    }
                }
            }
            payload ? client.send(payload) : client.send();
            client.onload = () => {
                if (client.status >= 200 && client.status < 300) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(client);
                }
                else {
                    // Performs the function "reject" when this.status is different than 2xx
                    reject(client);
                }
            };
            client.onerror = () => {
                reject(client);
            };
        });
    }
    static get(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.GET, url, payload, headers, options);
    }
    static post(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.POST, url, payload, headers, options);
    }
    static put(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.PUT, url, payload, headers, options);
    }
    static delete(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.DELETE, url, payload, headers, options);
    }
    static createXMLHTTPObject() {
        let xmlhttp = null;
        for (const i of XhrRequest.XMLHttpFactories) {
            try {
                xmlhttp = i();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    }
}
XhrRequest.XMLHttpFactories = [
    () => new XMLHttpRequest(),
    () => new window["ActiveXObject"]("Msxml2.XMLHTTP"),
    () => new window["ActiveXObject"]("Msxml3.XMLHTTP"),
    () => new window["ActiveXObject"]("Microsoft.XMLHTTP")
];
(function (XhrRequest) {
    let Method;
    (function (Method) {
        Method[Method["GET"] = "GET"] = "GET";
        Method[Method["POST"] = "POST"] = "POST";
        Method[Method["PUT"] = "PUT"] = "PUT";
        Method[Method["DELETE"] = "DELETE"] = "DELETE";
    })(Method = XhrRequest.Method || (XhrRequest.Method = {}));
})(XhrRequest || (XhrRequest = {}));
/* harmony default export */ var es6_XhrRequest = (XhrRequest);

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/Request/Request.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class Request_Request {
    constructor(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        this.uri = this.apiAiClient.getApiBaseUrl() + "query?v=" + this.apiAiClient.getApiVersion();
        this.requestMethod = es6_XhrRequest.Method.POST;
        this.headers = {
            Authorization: "Bearer " + this.apiAiClient.getAccessToken(),
        };
        this.options.lang = this.apiAiClient.getApiLang();
        this.options.sessionId = this.apiAiClient.getSessionId();
    }
    static handleSuccess(xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    }
    static handleError(xhr) {
        let error = new ApiAiRequestError(null);
        try {
            const serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new ApiAiRequestError(serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new ApiAiRequestError(xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new ApiAiRequestError(xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    }
    perform(overrideOptions = null) {
        const options = overrideOptions ? overrideOptions : this.options;
        return es6_XhrRequest.ajax(this.requestMethod, this.uri, options, this.headers)
            .then(Request_Request.handleSuccess.bind(this))
            .catch(Request_Request.handleError.bind(this));
    }
}
/* harmony default export */ var es6_Request_Request = (Request_Request);

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/Request/EventRequest.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class EventRequest_EventRequest extends es6_Request_Request {
}

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/Request/TextRequest.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class TextRequest_TextRequest extends es6_Request_Request {
}

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/Interfaces.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IStreamClient;
(function (IStreamClient) {
    let ERROR;
    (function (ERROR) {
        ERROR[ERROR["ERR_NETWORK"] = 0] = "ERR_NETWORK";
        ERROR[ERROR["ERR_AUDIO"] = 1] = "ERR_AUDIO";
        ERROR[ERROR["ERR_SERVER"] = 2] = "ERR_SERVER";
        ERROR[ERROR["ERR_CLIENT"] = 3] = "ERR_CLIENT";
    })(ERROR = IStreamClient.ERROR || (IStreamClient.ERROR = {}));
    let EVENT;
    (function (EVENT) {
        EVENT[EVENT["MSG_WAITING_MICROPHONE"] = 0] = "MSG_WAITING_MICROPHONE";
        EVENT[EVENT["MSG_MEDIA_STREAM_CREATED"] = 1] = "MSG_MEDIA_STREAM_CREATED";
        EVENT[EVENT["MSG_INIT_RECORDER"] = 2] = "MSG_INIT_RECORDER";
        EVENT[EVENT["MSG_RECORDING"] = 3] = "MSG_RECORDING";
        EVENT[EVENT["MSG_SEND"] = 4] = "MSG_SEND";
        EVENT[EVENT["MSG_SEND_EMPTY"] = 5] = "MSG_SEND_EMPTY";
        EVENT[EVENT["MSG_SEND_EOS_OR_JSON"] = 6] = "MSG_SEND_EOS_OR_JSON";
        EVENT[EVENT["MSG_WEB_SOCKET"] = 7] = "MSG_WEB_SOCKET";
        EVENT[EVENT["MSG_WEB_SOCKET_OPEN"] = 8] = "MSG_WEB_SOCKET_OPEN";
        EVENT[EVENT["MSG_WEB_SOCKET_CLOSE"] = 9] = "MSG_WEB_SOCKET_CLOSE";
        EVENT[EVENT["MSG_STOP"] = 10] = "MSG_STOP";
        EVENT[EVENT["MSG_CONFIG_CHANGED"] = 11] = "MSG_CONFIG_CHANGED";
    })(EVENT = IStreamClient.EVENT || (IStreamClient.EVENT = {}));
})(IStreamClient || (IStreamClient = {}));

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/es6/ApiAiClient.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class ApiAiClient_ApiAiClient {
    constructor(options) {
        if (!options || !options.accessToken) {
            throw new ApiAiClientConfigurationError("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || ApiAiConstants.DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || ApiAiConstants.DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || ApiAiConstants.DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    textRequest(query, options = {}) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        options.query = query;
        return new TextRequest_TextRequest(this, options).perform();
    }
    eventRequest(eventName, eventData = {}, options = {}) {
        if (!eventName) {
            throw new ApiAiClientConfigurationError("Event name can not be empty");
        }
        options.event = { name: eventName, data: eventData };
        return new EventRequest_EventRequest(this, options).perform();
    }
    // @todo: implement local tts request
    /*public ttsRequest(query) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        return new TTSRequest(this).makeTTSRequest(query);
    }*/
    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {
        return new UserEntitiesRequest(this, options);
    }*/
    getAccessToken() {
        return this.accessToken;
    }
    getApiVersion() {
        return (this.apiVersion) ? this.apiVersion : ApiAiConstants.DEFAULT_API_VERSION;
    }
    getApiLang() {
        return (this.apiLang) ? this.apiLang : ApiAiConstants.DEFAULT_CLIENT_LANG;
    }
    getApiBaseUrl() {
        return (this.apiBaseUrl) ? this.apiBaseUrl : ApiAiConstants.DEFAULT_BASE_URL;
    }
    setSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    getSessionId() {
        return this.sessionId;
    }
    /**
     * generates new random UUID
     * @returns {string}
     */
    guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }
}

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@xmlking/api-ai-javascript/index.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/services/nlp.service.ts


class nlp_service_NlpService {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.client = new ApiAiClient_ApiAiClient({ accessToken });
    }
    process(message) {
        return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield this.client.textRequest(message);
                const speech = response.result.fulfillment.speech;
                return speech.replace(/<<(.*)>>/gi, ''); //
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    sanitize(speech) {
        return speech
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/[\n\r]+/g, '<br>');
    }
}


// EXTERNAL MODULE: ./src/environments/environment.ts + 1 modules
var environment = __webpack_require__("AytR");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/services/chat.service.ts

class chat_service_ChatService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiBaseUrl = environment["a" /* environment */].API_BASE_URL;
        this.entityPath = 'conversations';
    }
    saveConversation(conversation) { }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/index.ts + 2 modules
var core_src = __webpack_require__("LTOS");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/services/text-to-speech.service.ts


/** @dynamic */
class text_to_speech_service_TextToSpeechService {
    constructor(featureService, window) {
        this.featureService = featureService;
        this.window = window;
        this.canUseSpeechSynthesis = false;
        this.canUseSpeechSynthesis = this.featureService.detectFeature(core_src["a" /* BrowserFeatureKey */].SpeechSynthesis).supported;
        if (this.canUseSpeechSynthesis) {
            this.speechSynthesis = window.speechSynthesis;
        }
    }
    synthesisVoice(text, voice) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice.voice;
        utterance.text = text;
        utterance.volume = voice.volume; // 0 to 1
        utterance.rate = voice.rate; // 0.1 to 10
        utterance.pitch = voice.pitch; // 0 to 2
        this.speechSynthesis.speak(utterance);
    }
    getVoiceList() {
        return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
            if ('onvoiceschanged' in speechSynthesis) {
                yield new Promise((resolve, reject) => {
                    this.speechSynthesis.addEventListener('voiceschanged', resolve);
                });
            }
            return this.speechSynthesis.getVoices();
            // return new Promise((resolve: any, reject: any): void => {
            //   // With Chrome, we have to wait for onvoiceschanged event to fire before calling getVoices
            //   if (this.speechSynthesis.onvoiceschanged !== undefined) {
            //     this.speechSynthesis.onvoiceschanged = (): void => {
            //       resolve(this.speechSynthesis.getVoices());
            //     };
            //   } else {
            //     resolve(this.speechSynthesis.getVoices());
            //   }
            // });
        });
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/services/speech-to-text.service.ts

const SpeechRecognition = window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition ||
    window.SpeechRecognition;
/** @dynamic */
class speech_to_text_service_SpeechToTextService {
    constructor(featureService, window) {
        this.featureService = featureService;
        this.window = window;
        this.canUseSpeechRecognition = false;
        this.canUseSpeechRecognition = this.featureService.detectFeature(core_src["a" /* BrowserFeatureKey */].SpeechRecognition).supported;
        if (this.canUseSpeechRecognition) {
            this.speechRecognition = new SpeechRecognition();
            this.speechRecognition.continuous = false; // FIXME: Gecko?
            this.speechRecognition.lang = 'en-US';
            this.speechRecognition.interimResults = false;
            this.speechRecognition.maxAlternatives = 1;
            // recognition.grammars = new SpeechGrammarList();
        }
    }
    getVoiceMessage() {
        return new Promise((resolve, reject) => {
            this.speechRecognition.onresult = (speech) => {
                let sentence = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.1) {
                            console.log('Unrecognized result - Please try again');
                        }
                        else {
                            sentence = transcript.trim();
                            console.log(`Sentence: ${sentence}`);
                            console.log(`Confidence: ${result[0].confidence}`);
                            // console.log(`Did you said? -> ${sentence}, If not, try again...`);
                            resolve(sentence);
                        }
                    }
                }
            };
            this.speechRecognition.onspeechend = (ev) => {
                this.speechRecognition.stop();
            };
            this.speechRecognition.onnomatch = (err) => {
                console.log('No Match');
                // prettier-ignore
                reject('I didn\'t recognise your question.');
            };
            this.speechRecognition.onerror = (err) => {
                console.log('Error: ' + err.error);
                reject(err.error);
            };
            // [
            //     'onaudiostart',
            //     'onaudioend',
            //     'onend',
            //     'onerror',
            //     'onnomatch',
            //     'onresult',
            //     'onsoundstart',
            //     'onsoundend',
            //     'onspeechend',
            //     'onstart',
            // ].forEach((eventName: string): void  => {
            //     this.speechRecognition[eventName] = (e: Event): void => {
            //         console.log(eventName, e);
            //     };
            // });
            this.speechRecognition.start();
            // console.log("I'm listening...");
        });
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/tap.js
var tap = __webpack_require__("8j5Y");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/chat-message.model.ts
var SubjectType = /*@__PURE__*/ (function (SubjectType) {
    SubjectType[SubjectType["BOT"] = 0] = "BOT";
    SubjectType[SubjectType["USER"] = 1] = "USER";
    SubjectType[SubjectType["ADMIN"] = 2] = "ADMIN";
    SubjectType[SubjectType["GROUP"] = 3] = "GROUP";
    SubjectType[SubjectType["ALL"] = 4] = "ALL";
    return SubjectType;
})({});
var DirectionType = /*@__PURE__*/ (function (DirectionType) {
    DirectionType[DirectionType["INCOMING"] = 0] = "INCOMING";
    DirectionType[DirectionType["OUTGOING"] = 1] = "OUTGOING";
    return DirectionType;
})({});
var ModeType = /*@__PURE__*/ (function (ModeType) {
    ModeType[ModeType["SPEAK"] = 0] = "SPEAK";
    ModeType[ModeType["TYPE"] = 1] = "TYPE";
    return ModeType;
})({});
class chat_message_model_Subject {
    constructor(type, who) {
        this.type = type;
        if (who) {
            this.who = who;
        }
    }
}
class UiAction {
    constructor(init) {
        Object.assign(this, init);
    }
}
class ChatMessage {
    constructor(init) {
        Object.assign(this, init);
    }
    static fromBotMessage(content) {
        return new ChatMessage({
            direction: DirectionType.INCOMING,
            from: new chat_message_model_Subject(SubjectType.BOT),
            to: new chat_message_model_Subject(SubjectType.USER),
            content,
            timestamp: new Date(),
            isRead: false,
        });
    }
    static fromUserMessage(content, mode) {
        return new ChatMessage({
            direction: DirectionType.OUTGOING,
            from: new chat_message_model_Subject(SubjectType.USER),
            to: new chat_message_model_Subject(SubjectType.BOT),
            content,
            timestamp: new Date(),
            isRead: true,
            mode,
        });
    }
    get isIncoming() {
        return this.direction === DirectionType.INCOMING;
    }
    get isOutgoing() {
        return this.direction === DirectionType.OUTGOING;
    }
    render() {
        if (this.content instanceof UiAction) {
            return this.content.render();
        }
        else {
            return this.content; // FIXME
        }
    }
}
class Conversation {
    constructor(id, messages = []) {
        this.id = id;
        this.messages = messages;
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/state/chat-box.actions.ts
// Actions
let FetchConversations = /*@__PURE__*/ (() => {
    class FetchConversations {
    }
    FetchConversations.type = '[ChatBox] FetchConversations';
    return FetchConversations;
})();
let CreateNewConversation = /*@__PURE__*/ (() => {
    class CreateNewConversation {
    }
    CreateNewConversation.type = '[ChatBox] CreateNewConversation';
    return CreateNewConversation;
})();
let SwitchConversation = /*@__PURE__*/ (() => {
    class SwitchConversation {
        constructor(payload) {
            this.payload = payload;
        }
    }
    SwitchConversation.type = '[ChatBox] SwitchConversation';
    return SwitchConversation;
})();
let SaveConversation = /*@__PURE__*/ (() => {
    class SaveConversation {
        constructor(payload) {
            this.payload = payload;
        }
    }
    SaveConversation.type = '[ChatBox] SaveConversation';
    return SaveConversation;
})();
let CloseConversation = /*@__PURE__*/ (() => {
    class CloseConversation {
        constructor(payload) {
            this.payload = payload;
        }
    }
    CloseConversation.type = '[ChatBox] CloseConversation';
    return CloseConversation;
})();
let AddMessage = /*@__PURE__*/ (() => {
    class AddMessage {
        constructor(payload) {
            this.payload = payload;
        }
    }
    AddMessage.type = '[ChatBox] AddMessage';
    return AddMessage;
})();
let StartVoiceCommand = /*@__PURE__*/ (() => {
    class StartVoiceCommand {
    }
    StartVoiceCommand.type = '[ChatBox] StartVoiceCommand';
    return StartVoiceCommand;
})();
let SendMessage = /*@__PURE__*/ (() => {
    class SendMessage {
        constructor(payload) {
            this.payload = payload;
        }
    }
    SendMessage.type = '[ChatBox] SendMessage';
    return SendMessage;
})();
let SendTyping = /*@__PURE__*/ (() => {
    class SendTyping {
        constructor(payload) {
            this.payload = payload;
        }
    }
    SendTyping.type = '[ChatBox] Typing';
    return SendTyping;
})();
let MarkAsRead = /*@__PURE__*/ (() => {
    class MarkAsRead {
    }
    MarkAsRead.type = '[ChatBox] MarkAsRead';
    return MarkAsRead;
})();


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/state/chat-box.store.ts
var ChatBoxState_1;










class ChatBoxStateModel {
}
let chat_box_store_ChatBoxState = /*@__PURE__*/ (() => {
    /** @dynamic */
    let ChatBoxState = ChatBoxState_1 = class ChatBoxState {
        constructor(nlp, stt, tts, chat, store, actions$) {
            this.nlp = nlp;
            this.stt = stt;
            this.tts = tts;
            this.chat = chat;
            this.store = store;
            this.actions$ = actions$;
            this.actions$.pipe(Object(ngxs_store["p" /* ofActionDispatched */])(AddMessage)).subscribe((action) => {
                switch (action.payload.message.to.type) {
                    case SubjectType.BOT:
                        return this.nlp.process(action.payload.message.content).then(speech => {
                            store.dispatch(new AddMessage({
                                conversationId: action.payload.conversationId,
                                message: ChatMessage.fromBotMessage(speech),
                            }));
                            if (action.payload.message.mode === ModeType.SPEAK) {
                                this.tts.synthesisVoice(speech, this.store.selectSnapshot(ChatBoxState_1.getVoicePreference));
                            }
                        });
                    case SubjectType.USER:
                    case SubjectType.ADMIN:
                    case SubjectType.GROUP:
                    case SubjectType.ALL:
                        break;
                    default:
                        break;
                }
            });
        }
        static canUseSpeechRecognition(state) {
            return state.canUseSpeechRecognition;
        }
        static canUseSpeechSynthesis(state) {
            return state.canUseSpeechSynthesis;
        }
        static loading(state) {
            return state.loading;
        }
        static getConversations(state) {
            return state.conversations;
        }
        static getActiveConversation(state) {
            return state.conversations[state.conversations.findIndex(con => con.id === state.activeConversationId)];
        }
        static getConversationById(id) {
            return Object(ngxs_store["m" /* createSelector */])([ChatBoxState_1], (state) => {
                return state.conversations.find(con => con.id === id);
            });
        }
        static getVoices(state) {
            return state.voices;
        }
        static getVoicePreference(state) {
            return state.voiceForm.model;
        }
        ngxsAfterBootstrap({ patchState, dispatch }) {
            return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
                console.log('ChatBoxState initialized, setting defaults');
                if (this.tts.canUseSpeechSynthesis) {
                    const voices = yield this.tts.getVoiceList();
                    patchState({
                        canUseSpeechRecognition: this.stt.canUseSpeechRecognition,
                        canUseSpeechSynthesis: this.tts.canUseSpeechSynthesis,
                        voices,
                        voiceForm: {
                            model: {
                                voice: voices[48],
                                volume: 1,
                                rate: 1,
                                pitch: 1,
                            },
                            dirty: false,
                            status: 'VALID',
                            errors: {},
                        },
                    });
                }
                dispatch(new FetchConversations());
            });
        }
        fetchConversations(ctx) {
            console.log('fetching open conversations');
            // return this.chat.fetchInFlightConversations().pipe(
            //   tap((res: Conversation[]) =>
            //     produce(ctx, (draft: ChatBoxStateModel) => {
            //       draft.conversations = res;
            //     }),
            //   ),
            // );
        }
        createConversation(ctx) {
            const newConversation = new Conversation('payload.conversationId'); // TODO create with UUID. from server?
            ctx.setState((state) => {
                state.conversations.push(newConversation);
                state.activeConversationId = newConversation.id;
                return state;
            });
        }
        switchConversation(ctx, { payload }) {
            const state = ctx.getState();
            const switchedConversation = state.conversations[state.conversations.findIndex(con => con.id === state.activeConversationId)];
            if (switchedConversation) {
                ctx.setState((state2) => {
                    state2.activeConversationId = switchedConversation.id;
                    return state2;
                });
            }
        }
        saveConversation(ctx, { payload }) {
            console.log(`saving conversation ${payload.conversationId}`);
            // const conversation = ctx.getState().conversations[ctx.getState().conversations.findIndex(con => con.id === payload.conversationId)];
            // return this.chat.saveConversation(conversation);
        }
        closeConversation(ctx, { payload }) {
            console.log(`close conversation ${payload.conversationId}`);
            const closingConversation = ctx.getState().conversations.find(con => con.id === payload.conversationId);
            ctx.dispatch(new SaveConversation({ conversationId: payload.conversationId })).pipe(Object(tap["a" /* tap */])(_ => {
                ctx.setState((state) => {
                    state.conversations.splice(state.conversations.findIndex(con => con.id === payload.conversationId), 1);
                    state.activeConversationId = state.conversations[state.conversations.length - 1].id;
                    return state;
                });
            }));
        }
        addMessage(ctx, { payload }) {
            ctx.setState((state) => {
                // state.conversations[draft.conversations.findIndex(con => con.id === payload.conversationId)].messages.push(
                //   payload.message,
                // );
                const convIdx = state.conversations.findIndex(con => con.id === payload.conversationId);
                const conv = state.conversations[convIdx];
                state.conversations[convIdx] = new Conversation(conv.id, [...conv.messages, payload.message]);
                state.activeConversationId = state.conversations[convIdx].id;
                return state;
            });
        }
        sendMessage(ctx, { payload }) {
            return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
                ctx.dispatch(new AddMessage({
                    conversationId: ctx.getState().activeConversationId,
                    message: ChatMessage.fromUserMessage(payload.message, ModeType.TYPE),
                }));
            });
        }
        startVoiceCommand(ctx) {
            return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
                const message = yield this.stt.getVoiceMessage();
                ctx.dispatch(new AddMessage({
                    conversationId: ctx.getState().activeConversationId,
                    message: ChatMessage.fromUserMessage(message, ModeType.SPEAK),
                }));
            });
        }
    };
    tslib_es6["__decorate"]([
        Object(ngxs_store["a" /* Action */])(FetchConversations),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState.prototype, "fetchConversations", null);
    tslib_es6["__decorate"]([
        Object(ngxs_labs_immer_adapter["a" /* ImmutableContext */])(),
        Object(ngxs_store["a" /* Action */])(CreateNewConversation),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState.prototype, "createConversation", null);
    tslib_es6["__decorate"]([
        Object(ngxs_labs_immer_adapter["a" /* ImmutableContext */])(),
        Object(ngxs_store["a" /* Action */])(SwitchConversation),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object, SwitchConversation]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState.prototype, "switchConversation", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["a" /* Action */])(SaveConversation),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object, SaveConversation]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState.prototype, "saveConversation", null);
    tslib_es6["__decorate"]([
        Object(ngxs_labs_immer_adapter["a" /* ImmutableContext */])(),
        Object(ngxs_store["a" /* Action */])(CloseConversation),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object, CloseConversation]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState.prototype, "closeConversation", null);
    tslib_es6["__decorate"]([
        Object(ngxs_labs_immer_adapter["a" /* ImmutableContext */])(),
        Object(ngxs_store["a" /* Action */])(AddMessage, { cancelUncompleted: true }),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object, AddMessage]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState.prototype, "addMessage", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["a" /* Action */])(SendMessage, { cancelUncompleted: true }),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object, SendMessage]),
        tslib_es6["__metadata"]("design:returntype", Promise)
    ], ChatBoxState.prototype, "sendMessage", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["a" /* Action */])(StartVoiceCommand, { cancelUncompleted: true }),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [Object]),
        tslib_es6["__metadata"]("design:returntype", Promise)
    ], ChatBoxState.prototype, "startVoiceCommand", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "canUseSpeechRecognition", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "canUseSpeechSynthesis", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "loading", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "getConversations", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "getActiveConversation", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [String]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "getConversationById", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "getVoices", null);
    tslib_es6["__decorate"]([
        Object(ngxs_store["g" /* Selector */])(),
        tslib_es6["__metadata"]("design:type", Function),
        tslib_es6["__metadata"]("design:paramtypes", [ChatBoxStateModel]),
        tslib_es6["__metadata"]("design:returntype", void 0)
    ], ChatBoxState, "getVoicePreference", null);
    ChatBoxState = ChatBoxState_1 = tslib_es6["__decorate"]([
        Object(ngxs_store["h" /* State */])({
            name: 'chatbox',
            defaults: {
                conversations: [],
                activeConversationId: null,
                canUseSpeechRecognition: false,
                canUseSpeechSynthesis: false,
                voices: [],
                voiceForm: {
                    model: {
                        voice: null,
                        volume: 1,
                        rate: 1,
                        pitch: 1,
                    },
                    dirty: false,
                    status: 'VALID',
                    errors: {},
                },
                activeUsersBots: [],
                loading: false,
            },
        })
    ], ChatBoxState);
    return ChatBoxState;
})();



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/components/text-to-speech-preferences/text-to-speech-preferences.component.ts



class text_to_speech_preferences_component_TextToSpeechPreferencesComponent {
    constructor(store, fb) {
        this.store = store;
        this.fb = fb;
    }
    ngOnInit() {
        this.voices = this.store.selectSnapshot(chat_box_store_ChatBoxState.getVoices);
        this.buildForm();
    }
    buildForm() {
        this.voiceForm = this.fb.group({
            voice: [this.voices[48]],
            volume: [1, fesm2015_forms["w" /* Validators */].required],
            rate: [1, fesm2015_forms["w" /* Validators */].required],
            pitch: [1, fesm2015_forms["w" /* Validators */].required],
        });
    }
    reset() {
        this.store.dispatch(new ngxs_form_plugin["c" /* UpdateForm */]({
            path: 'chatbox.voiceForm',
            value: {
                voice: this.voices[48],
                volume: 1,
                rate: 1,
                pitch: 1,
            },
            dirty: false,
            status: 'VALID',
            errors: {},
        }));
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/components/text-to-speech-preferences/text-to-speech-preferences.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */


























var styles_TextToSpeechPreferencesComponent = [text_to_speech_preferences_component_scss_shim_ngstyle_styles];
var RenderType_TextToSpeechPreferencesComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_TextToSpeechPreferencesComponent, data: {} });

function View_TextToSpeechPreferencesComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._selectViaInteraction() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 1)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, core_typings_index_ngfactory["e" /* View_MatOption_0 */], core_typings_index_ngfactory["b" /* RenderType_MatOption */])), core["Ab" /* ɵdid */](1, 8568832, [[10, 4]], 0, esm2015_core["s" /* MatOption */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */]], [2, esm2015_core["r" /* MatOptgroup */]]], { value: [0, "value"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, [" ", "[", "] "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1)._getTabIndex(); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).selected; var currVal_2 = core["Nb" /* ɵnov */](_v, 1).multiple; var currVal_3 = core["Nb" /* ɵnov */](_v, 1).active; var currVal_4 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_5 = core["Nb" /* ɵnov */](_v, 1)._getAriaSelected(); var currVal_6 = core["Nb" /* ɵnov */](_v, 1).disabled.toString(); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.name; var currVal_10 = _v.context.$implicit.lang; _ck(_v, 2, 0, currVal_9, currVal_10); });
}
function View_TextToSpeechPreferencesComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 69, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](1, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 67, "form", [["fxLayout", "column"], ["ngxsForm", "chatbox.voiceForm"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](3, 16384, null, 0, fesm2015_forms["A" /* ɵangular_packages_forms_forms_z */], [], null, null), core["Ab" /* ɵdid */](4, 540672, null, 0, fesm2015_forms["l" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["d" /* ControlContainer */], null, [fesm2015_forms["l" /* FormGroupDirective */]]), core["Ab" /* ɵdid */](6, 16384, null, 0, fesm2015_forms["r" /* NgControlStatusGroup */], [[4, fesm2015_forms["d" /* ControlContainer */]]], null, null), core["Ab" /* ɵdid */](7, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), core["Ab" /* ɵdid */](8, 212992, null, 0, ngxs_form_plugin["d" /* ɵa */], [ngxs_store["j" /* Store */], fesm2015_forms["l" /* FormGroupDirective */], core["i" /* ChangeDetectorRef */]], { path: [0, "path"] }, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, null, 55, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), core["Ab" /* ɵdid */](10, 16384, null, 0, card["d" /* MatCardContent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](11, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](12, 0, null, null, 22, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](13, 7520256, null, 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 2, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 3, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 4, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 5, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 6, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 7, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 8, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 9, { _suffixChildren: 1 }), (_l()(), core["Bb" /* ɵeld */](23, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["formControlName", "voice"], ["placeholder", "Favorite Voice"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            if (("keydown" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 28)._handleKeydown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 28)._onFocus() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 28)._onBlur() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, select_typings_index_ngfactory["b" /* View_MatSelect_0 */], select_typings_index_ngfactory["a" /* RenderType_MatSelect */])), core["Sb" /* ɵprd */](6144, null, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */], null, [esm2015_select["c" /* MatSelect */]]), core["Ab" /* ɵdid */](25, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [8, null], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](27, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](28, 2080768, null, 3, esm2015_select["c" /* MatSelect */], [scrolling["j" /* ViewportRuler */], core["i" /* ChangeDetectorRef */], core["D" /* NgZone */], esm2015_core["d" /* ErrorStateMatcher */], core["m" /* ElementRef */], [2, bidi["b" /* Directionality */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], [2, form_field["c" /* MatFormField */]], [6, fesm2015_forms["p" /* NgControl */]], [8, null], esm2015_select["a" /* MAT_SELECT_SCROLL_STRATEGY */], a11y["j" /* LiveAnnouncer */]], { placeholder: [0, "placeholder"] }, null), core["Tb" /* ɵqud */](603979776, 10, { options: 1 }), core["Tb" /* ɵqud */](603979776, 11, { optionGroups: 1 }), core["Tb" /* ɵqud */](603979776, 12, { customTrigger: 0 }), core["Sb" /* ɵprd */](2048, [[1, 4], [2, 4]], form_field["d" /* MatFormFieldControl */], null, [esm2015_select["c" /* MatSelect */]]), (_l()(), core["qb" /* ɵand */](16777216, null, 1, 1, null, View_TextToSpeechPreferencesComponent_1)), core["Ab" /* ɵdid */](34, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["Bb" /* ɵeld */](35, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](36, 0, null, null, 2, "mat-label", [], null, null, null, null, null)), core["Ab" /* ɵdid */](37, 16384, null, 0, form_field["g" /* MatLabel */], [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Volume"])), (_l()(), core["Bb" /* ɵeld */](39, 0, null, null, 5, "mat-slider", [["class", "mat-slider"], ["formControlName", "volume"], ["matTooltip", "Volume"], ["max", "1"], ["min", "0"], ["role", "slider"], ["step", "0.1"], ["thumbLabel", ""]], [[8, "tabIndex", 0], [1, "aria-disabled", 0], [1, "aria-valuemax", 0], [1, "aria-valuemin", 0], [1, "aria-valuenow", 0], [1, "aria-orientation", 0], [2, "mat-slider-disabled", null], [2, "mat-slider-has-ticks", null], [2, "mat-slider-horizontal", null], [2, "mat-slider-axis-inverted", null], [2, "mat-slider-sliding", null], [2, "mat-slider-thumb-label-showing", null], [2, "mat-slider-vertical", null], [2, "mat-slider-min-value", null], [2, "mat-slider-hide-last-tick", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"], [null, "blur"], [null, "mousedown"], [null, "keydown"], [null, "keyup"], [null, "mouseenter"], [null, "slide"], [null, "slideend"], [null, "slidestart"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 40)._onFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 40)._onBlur() !== false);
                ad = (pd_1 && ad);
            }
            if (("mousedown" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 40)._onMousedown($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 40)._onKeydown($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("keyup" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 40)._onKeyup() !== false);
                ad = (pd_4 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 40)._onMouseenter() !== false);
                ad = (pd_5 && ad);
            }
            if (("slide" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 40)._onSlide($event) !== false);
                ad = (pd_6 && ad);
            }
            if (("slideend" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 40)._onSlideEnd() !== false);
                ad = (pd_7 && ad);
            }
            if (("slidestart" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 40)._onSlideStart($event) !== false);
                ad = (pd_8 && ad);
            }
            return ad;
        }, View_MatSlider_0, RenderType_MatSlider)), core["Ab" /* ɵdid */](40, 245760, null, 0, slider_MatSlider, [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, bidi["b" /* Directionality */]], [8, null], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { max: [0, "max"], min: [1, "min"], step: [2, "step"], thumbLabel: [3, "thumbLabel"] }, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [slider_MatSlider]), core["Ab" /* ɵdid */](42, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](44, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), (_l()(), core["Bb" /* ɵeld */](45, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](46, 0, null, null, 2, "mat-label", [["style", "margin-right: 20px"]], null, null, null, null, null)), core["Ab" /* ɵdid */](47, 16384, null, 0, form_field["g" /* MatLabel */], [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Rate"])), (_l()(), core["Bb" /* ɵeld */](49, 0, null, null, 5, "mat-slider", [["class", "mat-slider"], ["formControlName", "rate"], ["max", "10"], ["min", "0.1"], ["role", "slider"], ["step", "0.1"], ["thumbLabel", ""]], [[8, "tabIndex", 0], [1, "aria-disabled", 0], [1, "aria-valuemax", 0], [1, "aria-valuemin", 0], [1, "aria-valuenow", 0], [1, "aria-orientation", 0], [2, "mat-slider-disabled", null], [2, "mat-slider-has-ticks", null], [2, "mat-slider-horizontal", null], [2, "mat-slider-axis-inverted", null], [2, "mat-slider-sliding", null], [2, "mat-slider-thumb-label-showing", null], [2, "mat-slider-vertical", null], [2, "mat-slider-min-value", null], [2, "mat-slider-hide-last-tick", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"], [null, "blur"], [null, "mousedown"], [null, "keydown"], [null, "keyup"], [null, "mouseenter"], [null, "slide"], [null, "slideend"], [null, "slidestart"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 50)._onFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 50)._onBlur() !== false);
                ad = (pd_1 && ad);
            }
            if (("mousedown" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 50)._onMousedown($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 50)._onKeydown($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("keyup" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 50)._onKeyup() !== false);
                ad = (pd_4 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 50)._onMouseenter() !== false);
                ad = (pd_5 && ad);
            }
            if (("slide" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 50)._onSlide($event) !== false);
                ad = (pd_6 && ad);
            }
            if (("slideend" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 50)._onSlideEnd() !== false);
                ad = (pd_7 && ad);
            }
            if (("slidestart" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 50)._onSlideStart($event) !== false);
                ad = (pd_8 && ad);
            }
            return ad;
        }, View_MatSlider_0, RenderType_MatSlider)), core["Ab" /* ɵdid */](50, 245760, null, 0, slider_MatSlider, [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, bidi["b" /* Directionality */]], [8, null], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { max: [0, "max"], min: [1, "min"], step: [2, "step"], thumbLabel: [3, "thumbLabel"] }, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [slider_MatSlider]), core["Ab" /* ɵdid */](52, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](54, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), (_l()(), core["Bb" /* ɵeld */](55, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](56, 0, null, null, 2, "mat-label", [["style", "margin-right: 16px"]], null, null, null, null, null)), core["Ab" /* ɵdid */](57, 16384, null, 0, form_field["g" /* MatLabel */], [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Pitch"])), (_l()(), core["Bb" /* ɵeld */](59, 0, null, null, 5, "mat-slider", [["class", "mat-slider"], ["formControlName", "pitch"], ["max", "2"], ["min", "0"], ["role", "slider"], ["step", "0.1"], ["thumbLabel", ""]], [[8, "tabIndex", 0], [1, "aria-disabled", 0], [1, "aria-valuemax", 0], [1, "aria-valuemin", 0], [1, "aria-valuenow", 0], [1, "aria-orientation", 0], [2, "mat-slider-disabled", null], [2, "mat-slider-has-ticks", null], [2, "mat-slider-horizontal", null], [2, "mat-slider-axis-inverted", null], [2, "mat-slider-sliding", null], [2, "mat-slider-thumb-label-showing", null], [2, "mat-slider-vertical", null], [2, "mat-slider-min-value", null], [2, "mat-slider-hide-last-tick", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"], [null, "blur"], [null, "mousedown"], [null, "keydown"], [null, "keyup"], [null, "mouseenter"], [null, "slide"], [null, "slideend"], [null, "slidestart"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 60)._onFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 60)._onBlur() !== false);
                ad = (pd_1 && ad);
            }
            if (("mousedown" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 60)._onMousedown($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 60)._onKeydown($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("keyup" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 60)._onKeyup() !== false);
                ad = (pd_4 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 60)._onMouseenter() !== false);
                ad = (pd_5 && ad);
            }
            if (("slide" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 60)._onSlide($event) !== false);
                ad = (pd_6 && ad);
            }
            if (("slideend" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 60)._onSlideEnd() !== false);
                ad = (pd_7 && ad);
            }
            if (("slidestart" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 60)._onSlideStart($event) !== false);
                ad = (pd_8 && ad);
            }
            return ad;
        }, View_MatSlider_0, RenderType_MatSlider)), core["Ab" /* ɵdid */](60, 245760, null, 0, slider_MatSlider, [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, bidi["b" /* Directionality */]], [8, null], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { max: [0, "max"], min: [1, "min"], step: [2, "step"], thumbLabel: [3, "thumbLabel"] }, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [slider_MatSlider]), core["Ab" /* ɵdid */](62, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](64, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), (_l()(), core["Bb" /* ɵeld */](65, 0, null, null, 4, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), core["Ab" /* ɵdid */](66, 16384, null, 0, card["b" /* MatCardActions */], [], null, null), (_l()(), core["Bb" /* ɵeld */](67, 0, null, null, 2, "button", [["color", "warn"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.reset() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](68, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["Reset"]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.voiceForm; _ck(_v, 4, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 7, 0, currVal_9); var currVal_10 = "chatbox.voiceForm"; _ck(_v, 8, 0, currVal_10); var currVal_55 = "voice"; _ck(_v, 25, 0, currVal_55); var currVal_56 = "Favorite Voice"; _ck(_v, 28, 0, currVal_56); var currVal_57 = _co.voices; _ck(_v, 34, 0, currVal_57); var currVal_81 = "1"; var currVal_82 = "0"; var currVal_83 = "0.1"; var currVal_84 = ""; _ck(_v, 40, 0, currVal_81, currVal_82, currVal_83, currVal_84); var currVal_85 = "volume"; _ck(_v, 42, 0, currVal_85); var currVal_109 = "10"; var currVal_110 = "0.1"; var currVal_111 = "0.1"; var currVal_112 = ""; _ck(_v, 50, 0, currVal_109, currVal_110, currVal_111, currVal_112); var currVal_113 = "rate"; _ck(_v, 52, 0, currVal_113); var currVal_137 = "2"; var currVal_138 = "0"; var currVal_139 = "0.1"; var currVal_140 = ""; _ck(_v, 60, 0, currVal_137, currVal_138, currVal_139, currVal_140); var currVal_141 = "pitch"; _ck(_v, 62, 0, currVal_141); var currVal_145 = "warn"; _ck(_v, 68, 0, currVal_145); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["Nb" /* ɵnov */](_v, 6).ngClassUntouched; var currVal_2 = core["Nb" /* ɵnov */](_v, 6).ngClassTouched; var currVal_3 = core["Nb" /* ɵnov */](_v, 6).ngClassPristine; var currVal_4 = core["Nb" /* ɵnov */](_v, 6).ngClassDirty; var currVal_5 = core["Nb" /* ɵnov */](_v, 6).ngClassValid; var currVal_6 = core["Nb" /* ɵnov */](_v, 6).ngClassInvalid; var currVal_7 = core["Nb" /* ɵnov */](_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_11 = (core["Nb" /* ɵnov */](_v, 13).appearance == "standard"); var currVal_12 = (core["Nb" /* ɵnov */](_v, 13).appearance == "fill"); var currVal_13 = (core["Nb" /* ɵnov */](_v, 13).appearance == "outline"); var currVal_14 = (core["Nb" /* ɵnov */](_v, 13).appearance == "legacy"); var currVal_15 = core["Nb" /* ɵnov */](_v, 13)._control.errorState; var currVal_16 = core["Nb" /* ɵnov */](_v, 13)._canLabelFloat; var currVal_17 = core["Nb" /* ɵnov */](_v, 13)._shouldLabelFloat(); var currVal_18 = core["Nb" /* ɵnov */](_v, 13)._hasFloatingLabel(); var currVal_19 = core["Nb" /* ɵnov */](_v, 13)._hideControlPlaceholder(); var currVal_20 = core["Nb" /* ɵnov */](_v, 13)._control.disabled; var currVal_21 = core["Nb" /* ɵnov */](_v, 13)._control.autofilled; var currVal_22 = core["Nb" /* ɵnov */](_v, 13)._control.focused; var currVal_23 = (core["Nb" /* ɵnov */](_v, 13).color == "accent"); var currVal_24 = (core["Nb" /* ɵnov */](_v, 13).color == "warn"); var currVal_25 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("untouched"); var currVal_26 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("touched"); var currVal_27 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("pristine"); var currVal_28 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("dirty"); var currVal_29 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("valid"); var currVal_30 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("invalid"); var currVal_31 = core["Nb" /* ɵnov */](_v, 13)._shouldForward("pending"); var currVal_32 = !core["Nb" /* ɵnov */](_v, 13)._animationsEnabled; _ck(_v, 12, 1, [currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]); var currVal_33 = core["Nb" /* ɵnov */](_v, 27).ngClassUntouched; var currVal_34 = core["Nb" /* ɵnov */](_v, 27).ngClassTouched; var currVal_35 = core["Nb" /* ɵnov */](_v, 27).ngClassPristine; var currVal_36 = core["Nb" /* ɵnov */](_v, 27).ngClassDirty; var currVal_37 = core["Nb" /* ɵnov */](_v, 27).ngClassValid; var currVal_38 = core["Nb" /* ɵnov */](_v, 27).ngClassInvalid; var currVal_39 = core["Nb" /* ɵnov */](_v, 27).ngClassPending; var currVal_40 = core["Nb" /* ɵnov */](_v, 28).id; var currVal_41 = core["Nb" /* ɵnov */](_v, 28).tabIndex; var currVal_42 = core["Nb" /* ɵnov */](_v, 28)._getAriaLabel(); var currVal_43 = core["Nb" /* ɵnov */](_v, 28)._getAriaLabelledby(); var currVal_44 = core["Nb" /* ɵnov */](_v, 28).required.toString(); var currVal_45 = core["Nb" /* ɵnov */](_v, 28).disabled.toString(); var currVal_46 = core["Nb" /* ɵnov */](_v, 28).errorState; var currVal_47 = (core["Nb" /* ɵnov */](_v, 28).panelOpen ? core["Nb" /* ɵnov */](_v, 28)._optionIds : null); var currVal_48 = core["Nb" /* ɵnov */](_v, 28).multiple; var currVal_49 = (core["Nb" /* ɵnov */](_v, 28)._ariaDescribedby || null); var currVal_50 = core["Nb" /* ɵnov */](_v, 28)._getAriaActiveDescendant(); var currVal_51 = core["Nb" /* ɵnov */](_v, 28).disabled; var currVal_52 = core["Nb" /* ɵnov */](_v, 28).errorState; var currVal_53 = core["Nb" /* ɵnov */](_v, 28).required; var currVal_54 = core["Nb" /* ɵnov */](_v, 28).empty; _ck(_v, 23, 1, [currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54]); var currVal_58 = core["Nb" /* ɵnov */](_v, 40).tabIndex; var currVal_59 = core["Nb" /* ɵnov */](_v, 40).disabled; var currVal_60 = core["Nb" /* ɵnov */](_v, 40).max; var currVal_61 = core["Nb" /* ɵnov */](_v, 40).min; var currVal_62 = core["Nb" /* ɵnov */](_v, 40).value; var currVal_63 = (core["Nb" /* ɵnov */](_v, 40).vertical ? "vertical" : "horizontal"); var currVal_64 = core["Nb" /* ɵnov */](_v, 40).disabled; var currVal_65 = core["Nb" /* ɵnov */](_v, 40).tickInterval; var currVal_66 = !core["Nb" /* ɵnov */](_v, 40).vertical; var currVal_67 = core["Nb" /* ɵnov */](_v, 40)._invertAxis; var currVal_68 = core["Nb" /* ɵnov */](_v, 40)._isSliding; var currVal_69 = core["Nb" /* ɵnov */](_v, 40).thumbLabel; var currVal_70 = core["Nb" /* ɵnov */](_v, 40).vertical; var currVal_71 = core["Nb" /* ɵnov */](_v, 40)._isMinValue; var currVal_72 = (core["Nb" /* ɵnov */](_v, 40).disabled || ((core["Nb" /* ɵnov */](_v, 40)._isMinValue && core["Nb" /* ɵnov */](_v, 40)._thumbGap) && core["Nb" /* ɵnov */](_v, 40)._invertAxis)); var currVal_73 = (core["Nb" /* ɵnov */](_v, 40)._animationMode === "NoopAnimations"); var currVal_74 = core["Nb" /* ɵnov */](_v, 44).ngClassUntouched; var currVal_75 = core["Nb" /* ɵnov */](_v, 44).ngClassTouched; var currVal_76 = core["Nb" /* ɵnov */](_v, 44).ngClassPristine; var currVal_77 = core["Nb" /* ɵnov */](_v, 44).ngClassDirty; var currVal_78 = core["Nb" /* ɵnov */](_v, 44).ngClassValid; var currVal_79 = core["Nb" /* ɵnov */](_v, 44).ngClassInvalid; var currVal_80 = core["Nb" /* ɵnov */](_v, 44).ngClassPending; _ck(_v, 39, 1, [currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80]); var currVal_86 = core["Nb" /* ɵnov */](_v, 50).tabIndex; var currVal_87 = core["Nb" /* ɵnov */](_v, 50).disabled; var currVal_88 = core["Nb" /* ɵnov */](_v, 50).max; var currVal_89 = core["Nb" /* ɵnov */](_v, 50).min; var currVal_90 = core["Nb" /* ɵnov */](_v, 50).value; var currVal_91 = (core["Nb" /* ɵnov */](_v, 50).vertical ? "vertical" : "horizontal"); var currVal_92 = core["Nb" /* ɵnov */](_v, 50).disabled; var currVal_93 = core["Nb" /* ɵnov */](_v, 50).tickInterval; var currVal_94 = !core["Nb" /* ɵnov */](_v, 50).vertical; var currVal_95 = core["Nb" /* ɵnov */](_v, 50)._invertAxis; var currVal_96 = core["Nb" /* ɵnov */](_v, 50)._isSliding; var currVal_97 = core["Nb" /* ɵnov */](_v, 50).thumbLabel; var currVal_98 = core["Nb" /* ɵnov */](_v, 50).vertical; var currVal_99 = core["Nb" /* ɵnov */](_v, 50)._isMinValue; var currVal_100 = (core["Nb" /* ɵnov */](_v, 50).disabled || ((core["Nb" /* ɵnov */](_v, 50)._isMinValue && core["Nb" /* ɵnov */](_v, 50)._thumbGap) && core["Nb" /* ɵnov */](_v, 50)._invertAxis)); var currVal_101 = (core["Nb" /* ɵnov */](_v, 50)._animationMode === "NoopAnimations"); var currVal_102 = core["Nb" /* ɵnov */](_v, 54).ngClassUntouched; var currVal_103 = core["Nb" /* ɵnov */](_v, 54).ngClassTouched; var currVal_104 = core["Nb" /* ɵnov */](_v, 54).ngClassPristine; var currVal_105 = core["Nb" /* ɵnov */](_v, 54).ngClassDirty; var currVal_106 = core["Nb" /* ɵnov */](_v, 54).ngClassValid; var currVal_107 = core["Nb" /* ɵnov */](_v, 54).ngClassInvalid; var currVal_108 = core["Nb" /* ɵnov */](_v, 54).ngClassPending; _ck(_v, 49, 1, [currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108]); var currVal_114 = core["Nb" /* ɵnov */](_v, 60).tabIndex; var currVal_115 = core["Nb" /* ɵnov */](_v, 60).disabled; var currVal_116 = core["Nb" /* ɵnov */](_v, 60).max; var currVal_117 = core["Nb" /* ɵnov */](_v, 60).min; var currVal_118 = core["Nb" /* ɵnov */](_v, 60).value; var currVal_119 = (core["Nb" /* ɵnov */](_v, 60).vertical ? "vertical" : "horizontal"); var currVal_120 = core["Nb" /* ɵnov */](_v, 60).disabled; var currVal_121 = core["Nb" /* ɵnov */](_v, 60).tickInterval; var currVal_122 = !core["Nb" /* ɵnov */](_v, 60).vertical; var currVal_123 = core["Nb" /* ɵnov */](_v, 60)._invertAxis; var currVal_124 = core["Nb" /* ɵnov */](_v, 60)._isSliding; var currVal_125 = core["Nb" /* ɵnov */](_v, 60).thumbLabel; var currVal_126 = core["Nb" /* ɵnov */](_v, 60).vertical; var currVal_127 = core["Nb" /* ɵnov */](_v, 60)._isMinValue; var currVal_128 = (core["Nb" /* ɵnov */](_v, 60).disabled || ((core["Nb" /* ɵnov */](_v, 60)._isMinValue && core["Nb" /* ɵnov */](_v, 60)._thumbGap) && core["Nb" /* ɵnov */](_v, 60)._invertAxis)); var currVal_129 = (core["Nb" /* ɵnov */](_v, 60)._animationMode === "NoopAnimations"); var currVal_130 = core["Nb" /* ɵnov */](_v, 64).ngClassUntouched; var currVal_131 = core["Nb" /* ɵnov */](_v, 64).ngClassTouched; var currVal_132 = core["Nb" /* ɵnov */](_v, 64).ngClassPristine; var currVal_133 = core["Nb" /* ɵnov */](_v, 64).ngClassDirty; var currVal_134 = core["Nb" /* ɵnov */](_v, 64).ngClassValid; var currVal_135 = core["Nb" /* ɵnov */](_v, 64).ngClassInvalid; var currVal_136 = core["Nb" /* ɵnov */](_v, 64).ngClassPending; _ck(_v, 59, 1, [currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136]); var currVal_142 = (core["Nb" /* ɵnov */](_v, 66).align === "end"); _ck(_v, 65, 0, currVal_142); var currVal_143 = (core["Nb" /* ɵnov */](_v, 68).disabled || null); var currVal_144 = (core["Nb" /* ɵnov */](_v, 68)._animationMode === "NoopAnimations"); _ck(_v, 67, 0, currVal_143, currVal_144); });
}
function View_TextToSpeechPreferencesComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-text-to-speech-preferences", [], null, null, null, View_TextToSpeechPreferencesComponent_0, RenderType_TextToSpeechPreferencesComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, text_to_speech_preferences_component_TextToSpeechPreferencesComponent, [ngxs_store["j" /* Store */], fesm2015_forms["g" /* FormBuilder */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TextToSpeechPreferencesComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-text-to-speech-preferences", text_to_speech_preferences_component_TextToSpeechPreferencesComponent, View_TextToSpeechPreferencesComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/components/typing-indicator/typing-indicator.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var typing_indicator_component_scss_shim_ngstyle_styles = [".typing-indicator[_ngcontent-%COMP%]{background-color:#e6e7ed;will-change:transform;width:auto;border-radius:33px;padding:10px;display:inline-block;margin:5px auto 0;top:-10px;position:relative;-webkit-animation:2s ease-out infinite bulge;animation:2s ease-out infinite bulge}.typing-indicator[_ngcontent-%COMP%]::after, .typing-indicator[_ngcontent-%COMP%]::before{content:\"\";position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:40%;background-color:#e6e7ed}.typing-indicator[_ngcontent-%COMP%]::after{height:5px;width:5px;left:-5px;bottom:-5px}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:6px;width:6px;float:left;margin:0 1px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){-webkit-animation:1s .3333s infinite blink;animation:1s .3333s infinite blink}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){-webkit-animation:1s .6666s infinite blink;animation:1s .6666s infinite blink}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){-webkit-animation:1s .9999s infinite blink;animation:1s .9999s infinite blink}@-webkit-keyframes blink{50%{opacity:1}}@keyframes blink{50%{opacity:1}}@-webkit-keyframes bulge{50%{transform:scale(1.05)}}@keyframes bulge{50%{transform:scale(1.05)}}"];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/components/typing-indicator/typing-indicator.component.ts
class TypingIndicatorComponent {
    constructor() { }
    ngOnInit() { }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/components/typing-indicator/typing-indicator.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_TypingIndicatorComponent = [typing_indicator_component_scss_shim_ngstyle_styles];
var RenderType_TypingIndicatorComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_TypingIndicatorComponent, data: {} });

function View_TypingIndicatorComponent_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "typing-indicator"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
function View_TypingIndicatorComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "typing-indicator", [], null, null, null, View_TypingIndicatorComponent_0, RenderType_TypingIndicatorComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, TypingIndicatorComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TypingIndicatorComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("typing-indicator", TypingIndicatorComponent, View_TypingIndicatorComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.component.css.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var resizable_component_css_shim_ngstyle_styles = [".ngr-grabber[_ngcontent-%COMP%]{position:absolute}.ngr-grabber.ngr-bottom[_ngcontent-%COMP%], .ngr-grabber.ngr-top[_ngcontent-%COMP%]{cursor:ns-resize;width:100%;height:14px;left:0}.ngr-grabber.ngr-bottom[_ngcontent-%COMP%]::after, .ngr-grabber.ngr-bottom[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-left[_ngcontent-%COMP%]::after, .ngr-grabber.ngr-left[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-right[_ngcontent-%COMP%]::after, .ngr-grabber.ngr-right[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-top[_ngcontent-%COMP%]::after, .ngr-grabber.ngr-top[_ngcontent-%COMP%]::before{content:'';position:absolute;z-index:1}.ngr-grabber.ngr-bottom[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-left[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-right[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-top[_ngcontent-%COMP%]::before{border-radius:7px;width:7px;height:7px}.ngr-grabber.ngr-bottom[_ngcontent-%COMP%]::after, .ngr-grabber.ngr-top[_ngcontent-%COMP%]::after{width:100%;height:2px;top:50%;left:0}.ngr-grabber.ngr-left[_ngcontent-%COMP%]::after, .ngr-grabber.ngr-right[_ngcontent-%COMP%]::after{width:2px;height:100%;left:50%}.ngr-grabber.ngr-bottom[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-top[_ngcontent-%COMP%]::before{left:50%;top:4px;transform:translateX(-50%)}.ngr-grabber.ngr-left[_ngcontent-%COMP%]::before, .ngr-grabber.ngr-right[_ngcontent-%COMP%]::before{top:50%;left:4px;transform:translateY(-50%)}.ngr-grabber.ngr-top[_ngcontent-%COMP%]{top:-7px}.ngr-grabber.ngr-bottom[_ngcontent-%COMP%]{bottom:-7px}.ngr-grabber.ngr-left[_ngcontent-%COMP%], .ngr-grabber.ngr-right[_ngcontent-%COMP%]{cursor:ew-resize;width:14px;height:100%;top:0}.ngr-grabber.ngr-left[_ngcontent-%COMP%]{left:-7px}.ngr-grabber.ngr-right[_ngcontent-%COMP%]{right:-7px}.ngr-grabber.ngr-bottom-left[_ngcontent-%COMP%], .ngr-grabber.ngr-bottom-right[_ngcontent-%COMP%], .ngr-grabber.ngr-top-left[_ngcontent-%COMP%], .ngr-grabber.ngr-top-right[_ngcontent-%COMP%]{position:absolute;width:12px;height:12px;border-radius:4px;z-index:1}.ngr-grabber.ngr-top-left[_ngcontent-%COMP%]{cursor:nwse-resize;top:-5px;left:-5px}.ngr-grabber.ngr-top-right[_ngcontent-%COMP%]{cursor:nesw-resize;top:-5px;right:-5px}.ngr-grabber.ngr-bottom-left[_ngcontent-%COMP%]{cursor:nesw-resize;bottom:-5px;left:-5px}.ngr-grabber.ngr-bottom-right[_ngcontent-%COMP%]{cursor:nwse-resize;bottom:-5px;right:-5px}\n/*# sourceMappingURL=resizable.component.css.map*/"];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.store.ts
const defaultGrid = {
    width: 1,
    height: 1,
};
const defaultBound = {
    x: -Infinity,
    y: -Infinity,
    width: Infinity,
    height: Infinity,
};
class Store {
    constructor() {
        this.state = {
            currentSize: { width: 0, height: 0 },
            startSize: { width: 0, height: 0 },
            currentPosition: { x: 0, y: 0 },
            startPosition: { x: 0, y: 0 },
            isResizing: false,
            direction: null,
        };
        this.reducers = [];
    }
    addReducer(reducer) {
        this.reducers.push(reducer);
    }
    emitAction(action, ...params) {
        this.state = this.reducers.reduce((p, c) => {
            return c.apply(null, [p, action].concat(params));
        }, this.state);
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.actions.ts
const RESIZE = 'resize-resize';
const MOUSE_DOWN = 'resize-mouse-down';
const RESIZE_STOP = 'resize-stop';


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.utils.ts
const resizeRight = (nextWidth, options, currentElementPosition) => {
    if (nextWidth <= options.minSize.width) {
        nextWidth = options.minSize.width;
    }
    if (nextWidth >= options.maxSize.width) {
        nextWidth = options.maxSize.width;
    }
    if (nextWidth + currentElementPosition.x >= options.bound.x + options.bound.width) {
        nextWidth -= nextWidth + currentElementPosition.x - (options.bound.x + options.bound.width);
    }
    return { nextWidth, nextLeft: currentElementPosition.x };
};
const resizeBottom = (nextHeight, options, currentElementPosition) => {
    if (nextHeight <= options.minSize.height) {
        nextHeight = options.minSize.height;
    }
    if (nextHeight >= options.maxSize.height) {
        nextHeight = options.maxSize.height;
    }
    if (nextHeight + currentElementPosition.y >= options.bound.y + options.bound.height) {
        nextHeight -= nextHeight + currentElementPosition.y - (options.bound.y + options.bound.height);
    }
    return { nextHeight, nextTop: currentElementPosition.y };
};
const resizeTop = (nextHeight, currentPos, currentSize, options) => {
    let nextTop = currentPos.y + (currentSize.height - nextHeight);
    // Lower priorty compared to all others
    if (nextHeight <= options.minSize.height) {
        nextTop -= options.minSize.height - nextHeight;
        nextHeight = options.minSize.height;
    }
    if (nextHeight >= options.maxSize.height) {
        nextTop += nextHeight - options.maxSize.height;
        nextHeight = options.maxSize.height;
    }
    if (nextTop <= options.bound.y) {
        nextHeight -= options.bound.y - nextTop;
        nextTop = options.bound.y;
    }
    return { nextHeight, nextTop };
};
const resizeLeft = (nextWidth, currentPos, currentSize, options) => {
    let nextLeft = currentPos.x + (currentSize.width - nextWidth);
    // Lower priorty compared to all others
    if (nextWidth <= options.minSize.width) {
        nextLeft -= options.minSize.width - nextWidth;
        nextWidth = options.minSize.width;
    }
    if (nextWidth >= options.maxSize.width) {
        nextLeft += nextWidth - options.maxSize.width;
        nextWidth = options.maxSize.width;
    }
    if (nextLeft <= options.bound.x) {
        nextWidth -= options.bound.x - nextLeft;
        nextLeft = options.bound.x;
    }
    return { nextWidth, nextLeft };
};
const manageRatio = ({ nextWidth, nextHeight, nextTop, nextLeft, }, options, currentPos, currentSize, direction, currentElementPosition) => {
    let data;
    const bound = options.bound;
    bound.x = parseInt(bound.x.toFixed(), 10);
    bound.y = parseInt(bound.y.toFixed(), 10);
    bound.width = parseInt(bound.width.toFixed(), 10);
    bound.height = parseInt(bound.height.toFixed(), 10);
    switch (direction) {
        case 'left':
            nextHeight = resizeBottom(options.ratio * nextWidth, options, currentElementPosition).nextHeight;
            nextLeft += nextWidth - nextHeight / options.ratio;
            nextWidth = nextHeight / options.ratio;
            break;
        case 'right':
            nextHeight = resizeBottom(options.ratio * nextWidth, options, currentElementPosition).nextHeight;
            nextWidth = nextHeight / options.ratio;
            break;
        case 'top':
            nextWidth = resizeRight(nextHeight / options.ratio, options, currentElementPosition).nextWidth;
            nextTop += nextHeight - nextWidth * options.ratio;
            nextHeight = options.ratio * nextWidth;
            break;
        case 'bottom':
        case 'bottom-right':
            nextWidth = resizeRight(nextHeight / options.ratio, options, currentElementPosition).nextWidth;
            nextHeight = options.ratio * nextWidth;
            break;
        case 'top-left':
            data = resizeLeft(nextHeight / options.ratio, currentPos, currentSize, options);
            nextWidth = data.nextWidth;
            nextLeft = data.nextLeft;
            if (nextWidth < nextHeight / options.ratio) {
                nextTop += nextHeight - nextWidth * options.ratio;
                nextHeight = nextWidth * options.ratio;
            }
            break;
        case 'bottom-left':
            data = resizeLeft(nextHeight / options.ratio, currentPos, currentSize, options);
            nextWidth = data.nextWidth;
            nextLeft = data.nextLeft;
            if (nextWidth < nextHeight / options.ratio) {
                nextHeight = nextWidth * options.ratio;
            }
            break;
        case 'top-right':
            data = resizeRight(nextHeight / options.ratio, options, currentElementPosition);
            nextWidth = data.nextWidth;
            if (nextWidth < nextHeight / options.ratio) {
                nextTop += nextHeight - nextWidth * options.ratio;
                nextHeight = nextWidth * options.ratio;
            }
            break;
    }
    return { nextWidth, nextHeight, nextTop, nextLeft };
};


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.reducer.ts


// DANGER
// Mutates the state instead of creating
// a new one. This is not a traditional
// reducer and respectivly not a pure
// implementation of the redux pattern.
// This separation aims better testability,
// separation of concerns, less dependencies
// and higher performance.
const resizeReducer = (currentState, action, mousePosition, startPosition, options, initialSize, initialResizeDir) => {
    if (options.disabled) {
        return currentState;
    }
    const startPos = currentState.startPosition;
    const startSize = currentState.startSize;
    const currentSize = currentState.currentSize;
    const currentPos = currentState.currentPosition;
    switch (action) {
        case MOUSE_DOWN:
            if (!initialResizeDir) {
                throw new Error('Direction not provided');
            }
            currentState.direction = initialResizeDir;
            currentState.isResizing = true;
            startPos.x = mousePosition.x;
            startPos.y = mousePosition.y;
            currentPos.x = startPosition.x;
            currentPos.y = startPosition.y;
            currentSize.width = initialSize.width;
            currentSize.height = initialSize.height;
            startSize.width = initialSize.width;
            startSize.height = initialSize.height;
            break;
        case RESIZE:
            if (!currentState.isResizing) {
                return currentState;
            }
            let nextWidth = currentSize.width;
            let nextHeight = currentSize.height;
            let nextLeft = currentPos.x;
            let nextTop = currentPos.y;
            if (/right/.test(currentState.direction)) {
                nextWidth = resizeRight(mousePosition.x - startPos.x + startSize.width, options, currentState.currentPosition)
                    .nextWidth;
            }
            if (/bottom/.test(currentState.direction)) {
                nextHeight = resizeBottom(mousePosition.y - startPos.y + startSize.height, options, currentState.currentPosition).nextHeight;
            }
            if (/top/.test(currentState.direction)) {
                const data = resizeTop(startPos.y - mousePosition.y + startSize.height, currentPos, currentSize, options);
                nextTop = data.nextTop;
                nextHeight = data.nextHeight;
            }
            if (/left/.test(currentState.direction)) {
                const data = resizeLeft(startPos.x - mousePosition.x + startSize.width, currentPos, currentSize, options);
                nextLeft = data.nextLeft;
                nextWidth = data.nextWidth;
            }
            if (options.ratio) {
                const fixedSize = manageRatio({ nextTop, nextWidth, nextHeight, nextLeft }, options, currentPos, currentSize, currentState.direction, currentState.currentPosition);
                nextLeft = fixedSize.nextLeft;
                nextTop = fixedSize.nextTop;
                nextWidth = fixedSize.nextWidth;
                nextHeight = fixedSize.nextHeight;
            }
            currentPos.x = Math.round(nextLeft / options.grid.width) * options.grid.width;
            currentPos.y = Math.round(nextTop / options.grid.height) * options.grid.height;
            currentSize.width = Math.round(nextWidth / options.grid.width) * options.grid.width;
            currentSize.height = Math.round(nextHeight / options.grid.height) * options.grid.height;
            break;
        case RESIZE_STOP:
            currentState.isResizing = false;
            startSize.width = currentSize.width;
            startSize.height = currentSize.height;
            break;
    }
    return currentState;
};


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.component.ts




class resizable_component_ResizableComponent {
    constructor(el, store, renderer, rState) {
        this.el = el;
        this.store = store;
        this.renderer = renderer;
        this.rState = rState;
        // Resize start event.
        this.resizeStart = new core["o" /* EventEmitter */]();
        // Resizing event.
        this.resizing = new core["o" /* EventEmitter */]();
        // Resize end event.
        this.resizeEnd = new core["o" /* EventEmitter */]();
        // Minimum width.
        this.minWidth = 350;
        // Minimum height.
        this.minHeight = 400;
        // Maximum width.
        this.maxWidth = Infinity;
        // Maximum height.
        this.maxHeight = Infinity;
        // Disable the resize.
        this.disableResize = false;
        // An array which contains the resize directions.
        this.directions = ['bottom', 'right'];
        // Resize in a grid.
        this.grid = { width: 1, height: 1 };
        // Bound the resize.
        this.bound = null;
        // Resize ratio.
        this.ratio = null;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'ngresizable');
        const css = getComputedStyle(this.el.nativeElement);
        this.width = css.width ? parseInt(css.width, 10) : this.width;
        this.height = css.height ? parseInt(css.height, 10) : this.height;
        this.minWidth = css.minWidth ? parseInt(css.minWidth, 10) : this.minWidth;
        this.minHeight = css.minHeight ? parseInt(css.minHeight, 10) : this.minHeight;
        this.maxWidth = css.maxWidth ? parseInt(css.maxWidth, 10) : this.maxWidth;
        this.maxHeight = css.maxHeight ? parseInt(css.maxHeight, 10) : this.maxHeight;
        // console.log(this.width);
        // console.log(this.height);
        // console.log(this.minWidth);
        // console.log(this.minHeight);
        // console.log(this.maxWidth);
        // console.log(this.maxHeight);
        this.store.addReducer(resizeReducer);
        this.setSize({ width: this.width, height: this.height }, { x: this.x, y: this.y });
    }
    ngOnChanges(c) {
        this.setSize({ width: this.width, height: this.height }, { x: this.x, y: this.y });
    }
    onMouseMove(e) {
        if (e.touches) {
            e = e.touches[0];
        }
        if (this._state.isResizing) {
            this.emitAction(RESIZE, {
                x: e.clientX,
                y: e.clientY,
            });
            const csize = this._state.currentSize;
            const cpos = this._state.currentPosition;
            this.setSize(csize, cpos);
            this.emitEvent(this.resizing);
        }
    }
    onMouseDown(e, dir) {
        if (e.touches) {
            e = e.touches[0];
        }
        this.emitAction(MOUSE_DOWN, {
            x: e.clientX,
            y: e.clientY,
        }, {
            x: this.el.nativeElement.offsetLeft,
            y: this.el.nativeElement.offsetTop,
        }, {
            width: this.el.nativeElement.offsetWidth,
            height: this.el.nativeElement.offsetHeight,
        }, dir);
        this.emitEvent(this.resizeStart);
    }
    onMouseUp(e) {
        this.emitAction(RESIZE_STOP, { x: 0, y: 0 }, { x: 0, y: 0 });
        this.emitEvent(this.resizeEnd);
    }
    emitAction(action, mousePosition, startPosition, startSize, startDirection) {
        const options = {
            minSize: { width: this.minWidth, height: this.minHeight },
            maxSize: { width: this.maxWidth, height: this.maxHeight },
            grid: this.grid,
            ratio: this.ratio,
            disabled: this.disableResize,
            directions: this.directions,
            bound: this.bound || defaultBound,
        };
        this.store.emitAction(action, mousePosition, startPosition, options, startSize, startDirection);
    }
    emitEvent(output) {
        output.next({
            position: this._state.currentPosition,
            size: this._state.currentSize,
            direction: this._state.direction,
        });
    }
    get _state() {
        return this.store.state;
    }
    setSize(size, pos) {
        this.width = size.width;
        this.height = size.height;
        this.x = pos.x;
        this.y = pos.y;
        this.renderer.setStyle(this.el.nativeElement, 'width', this.width + 'px');
        this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
        this.renderer.setStyle(this.el.nativeElement, 'left', this.x + 'px');
        this.renderer.setStyle(this.el.nativeElement, 'top', this.y + 'px');
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/utils/src/index.ts + 8 modules
var utils_src = __webpack_require__("SKbq");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.state.ts

class resizable_state_ResizableState extends utils_src["a" /* StateDef */] {
    constructor() {
        super({
            currentSize: { width: 0, height: 0 },
            startSize: { width: 0, height: 0 },
            currentPosition: { x: 0, y: 0 },
            startPosition: { x: 0, y: 0 },
            isResizing: false,
            direction: null,
        });
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/directives/resizable/resizable.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */






var styles_ResizableComponent = [resizable_component_css_shim_ngstyle_styles];
var RenderType_ResizableComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_ResizableComponent, data: {} });

function View_ResizableComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "div", [["class", "ngr-grabber"]], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("mousedown" === en)) {
                var pd_0 = (_co.onMouseDown($event, _v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            if (("touchstart" === en)) {
                var pd_1 = (_co.onMouseDown($event, _v.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["Sb" /* ɵprd */](512, null, common["A" /* ɵNgClassImpl */], common["B" /* ɵNgClassR2Impl */], [core["v" /* IterableDiffers */], core["w" /* KeyValueDiffers */], core["m" /* ElementRef */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](2, 278528, null, 0, common["l" /* NgClass */], [common["A" /* ɵNgClassImpl */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var currVal_0 = "ngr-grabber"; var currVal_1 = ("ngr-" + _v.context.$implicit); _ck(_v, 2, 0, currVal_0, currVal_1); }, null);
}
function View_ResizableComponent_0(_l) { return core["Xb" /* ɵvid */](0, [core["Mb" /* ɵncd */](null, 0), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_ResizableComponent_1)), core["Ab" /* ɵdid */](2, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.directions; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ResizableComponent_Host_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "div", [["resizable", ""]], null, [["document", "mouseup"], ["document", "touchend"], ["document", "mousemove"], ["document", "touchmove"]], function (_v, en, $event) {
            var ad = true;
            if (("document:mouseup" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2).onMouseUp($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("document:touchend" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 2).onMouseUp($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("document:mousemove" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 2).onMouseMove($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("document:touchmove" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 2).onMouseMove($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, View_ResizableComponent_0, RenderType_ResizableComponent)), core["Sb" /* ɵprd */](512, null, Store, Store, []), core["Ab" /* ɵdid */](2, 638976, null, 0, resizable_component_ResizableComponent, [core["m" /* ElementRef */], Store, core["I" /* Renderer2 */], resizable_state_ResizableState], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null);
}
var ResizableComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("[resizable]", resizable_component_ResizableComponent, View_ResizableComponent_Host_0, { x: "x", y: "y", width: "width", height: "height", minWidth: "minWidth", minHeight: "minHeight", maxWidth: "maxWidth", maxHeight: "maxHeight", disableResize: "disableResize", directions: "directions", grid: "grid", bound: "bound", ratio: "ratio" }, { resizeStart: "resizeStart", resizing: "resizing", resizeEnd: "resizeEnd" }, ["*"]);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/drag-drop.js
var drag_drop = __webpack_require__("0o6U");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/animations/fesm2015/animations.js
var fesm2015_animations = __webpack_require__("+6xv");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/accordion.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion.
 * @type {?}
 */
let nextId = 0;
let accordion_CdkAccordion = /*@__PURE__*/ (() => {
    class CdkAccordion {
        constructor() {
            /**
             * Emits when the state of the accordion changes
             */
            this._stateChanges = new Subject["a" /* Subject */]();
            /**
             * Stream that emits true/false when openAll/closeAll is triggered.
             */
            this._openCloseAllActions = new Subject["a" /* Subject */]();
            /**
             * A readonly id value to use for unique selection coordination.
             */
            this.id = `cdk-accordion-${nextId++}`;
            this._multi = false;
        }
        /**
         * Whether the accordion should allow multiple expanded accordion items simultaneously.
         * @return {?}
         */
        get multi() { return this._multi; }
        /**
         * @param {?} multi
         * @return {?}
         */
        set multi(multi) { this._multi = Object(coercion["c" /* coerceBooleanProperty */])(multi); }
        /**
         * Opens all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */
        openAll() {
            this._openCloseAll(true);
        }
        /**
         * Closes all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */
        closeAll() {
            this._openCloseAll(false);
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            this._stateChanges.next(changes);
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._stateChanges.complete();
        }
        /**
         * @private
         * @param {?} expanded
         * @return {?}
         */
        _openCloseAll(expanded) {
            if (this.multi) {
                this._openCloseAllActions.next(expanded);
            }
        }
    }
    return CdkAccordion;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
let nextId$1 = 0;
const accordion_0 = undefined;
let accordion_CdkAccordionItem = /*@__PURE__*/ (() => {
    class CdkAccordionItem {
        /**
         * @param {?} accordion
         * @param {?} _changeDetectorRef
         * @param {?} _expansionDispatcher
         */
        constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
            this.accordion = accordion;
            this._changeDetectorRef = _changeDetectorRef;
            this._expansionDispatcher = _expansionDispatcher;
            /**
             * Subscription to openAll/closeAll events.
             */
            this._openCloseAllSubscription = Subscription["a" /* Subscription */].EMPTY;
            /**
             * Event emitted every time the AccordionItem is closed.
             */
            this.closed = new core["o" /* EventEmitter */]();
            /**
             * Event emitted every time the AccordionItem is opened.
             */
            this.opened = new core["o" /* EventEmitter */]();
            /**
             * Event emitted when the AccordionItem is destroyed.
             */
            this.destroyed = new core["o" /* EventEmitter */]();
            /**
             * Emits whenever the expanded state of the accordion changes.
             * Primarily used to facilitate two-way binding.
             * \@docs-private
             */
            this.expandedChange = new core["o" /* EventEmitter */]();
            /**
             * The unique AccordionItem id.
             */
            this.id = `cdk-accordion-child-${nextId$1++}`;
            this._expanded = false;
            this._disabled = false;
            /**
             * Unregister function for _expansionDispatcher.
             */
            this._removeUniqueSelectionListener = ( /**
             * @return {?}
             */() => { });
            this._removeUniqueSelectionListener =
                _expansionDispatcher.listen(( /**
                 * @param {?} id
                 * @param {?} accordionId
                 * @return {?}
                 */(id, accordionId) => {
                    if (this.accordion && !this.accordion.multi &&
                        this.accordion.id === accordionId && this.id !== id) {
                        this.expanded = false;
                    }
                }));
            // When an accordion item is hosted in an accordion, subscribe to open/close events.
            if (this.accordion) {
                this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
            }
        }
        /**
         * Whether the AccordionItem is expanded.
         * @return {?}
         */
        get expanded() { return this._expanded; }
        /**
         * @param {?} expanded
         * @return {?}
         */
        set expanded(expanded) {
            expanded = Object(coercion["c" /* coerceBooleanProperty */])(expanded);
            // Only emit events and update the internal value if the value changes.
            if (this._expanded !== expanded) {
                this._expanded = expanded;
                this.expandedChange.emit(expanded);
                if (expanded) {
                    this.opened.emit();
                    /**
                     * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                     * the name value is the id of the accordion.
                     * @type {?}
                     */
                    const accordionId = this.accordion ? this.accordion.id : this.id;
                    this._expansionDispatcher.notify(this.id, accordionId);
                }
                else {
                    this.closed.emit();
                }
                // Ensures that the animation will run when the value is set outside of an `@Input`.
                // This includes cases like the open, close and toggle methods.
                this._changeDetectorRef.markForCheck();
            }
        }
        /**
         * Whether the AccordionItem is disabled.
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} disabled
         * @return {?}
         */
        set disabled(disabled) { this._disabled = Object(coercion["c" /* coerceBooleanProperty */])(disabled); }
        /**
         * Emits an event for the accordion item being destroyed.
         * @return {?}
         */
        ngOnDestroy() {
            this.opened.complete();
            this.closed.complete();
            this.destroyed.emit();
            this.destroyed.complete();
            this._removeUniqueSelectionListener();
            this._openCloseAllSubscription.unsubscribe();
        }
        /**
         * Toggles the expanded state of the accordion item.
         * @return {?}
         */
        toggle() {
            if (!this.disabled) {
                this.expanded = !this.expanded;
            }
        }
        /**
         * Sets the expanded state of the accordion item to false.
         * @return {?}
         */
        close() {
            if (!this.disabled) {
                this.expanded = false;
            }
        }
        /**
         * Sets the expanded state of the accordion item to true.
         * @return {?}
         */
        open() {
            if (!this.disabled) {
                this.expanded = true;
            }
        }
        /**
         * @private
         * @return {?}
         */
        _subscribeToOpenCloseAllActions() {
            return this.accordion._openCloseAllActions.subscribe(( /**
             * @param {?} expanded
             * @return {?}
             *//**
             * @param {?} expanded
             * @return {?}
             */ expanded => {
                // Only change expanded state if item is enabled
                if (!this.disabled) {
                    this.expanded = expanded;
                }
            }));
        }
    }
    return CdkAccordionItem;
})();
let CdkAccordionModule = /*@__PURE__*/ (() => {
    class CdkAccordionModule {
    }
    return CdkAccordionModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/portal.js
var portal = __webpack_require__("DiCn");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/observable/empty.js
var empty = __webpack_require__("6Oco");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/observable/merge.js
var merge = __webpack_require__("g6G6");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__("Ohay");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__("jIqt");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/take.js
var take = __webpack_require__("J+dc");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/expansion.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 * @type {?}
 */
const MAT_ACCORDION = /*@__PURE__*/ new core["s" /* InjectionToken */]('MAT_ACCORDION');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time and timing curve for expansion panel animations.
 * @type {?}
 */
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * \@docs-private
 * @type {?}
 */
const matExpansionAnimations = {
    /**
     * Animation that rotates the indicator arrow.
     */
    indicatorRotate: /*@__PURE__*/ Object(fesm2015_animations["o" /* trigger */])('indicatorRotate', [
        /*@__PURE__*/ Object(fesm2015_animations["l" /* state */])('collapsed, void', /*@__PURE__*/ Object(fesm2015_animations["m" /* style */])({ transform: 'rotate(0deg)' })),
        /*@__PURE__*/ Object(fesm2015_animations["l" /* state */])('expanded', /*@__PURE__*/ Object(fesm2015_animations["m" /* style */])({ transform: 'rotate(180deg)' })),
        /*@__PURE__*/ Object(fesm2015_animations["n" /* transition */])('expanded <=> collapsed, void => collapsed', /*@__PURE__*/ Object(fesm2015_animations["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /**
     * Animation that expands and collapses the panel header height.
     */
    expansionHeaderHeight: /*@__PURE__*/ Object(fesm2015_animations["o" /* trigger */])('expansionHeight', [
        /*@__PURE__*/ Object(fesm2015_animations["l" /* state */])('collapsed, void', /*@__PURE__*/ Object(fesm2015_animations["m" /* style */])({
            height: '{{collapsedHeight}}',
        }), {
            params: { collapsedHeight: '48px' },
        }),
        /*@__PURE__*/ Object(fesm2015_animations["l" /* state */])('expanded', /*@__PURE__*/ Object(fesm2015_animations["m" /* style */])({
            height: '{{expandedHeight}}'
        }), {
            params: { expandedHeight: '64px' }
        }),
        /*@__PURE__*/ Object(fesm2015_animations["n" /* transition */])('expanded <=> collapsed, void => collapsed', /*@__PURE__*/ Object(fesm2015_animations["g" /* group */])([
            /*@__PURE__*/ Object(fesm2015_animations["i" /* query */])('@indicatorRotate', /*@__PURE__*/ Object(fesm2015_animations["f" /* animateChild */])(), { optional: true }),
            /*@__PURE__*/ Object(fesm2015_animations["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING),
        ])),
    ]),
    /**
     * Animation that expands and collapses the panel content.
     */
    bodyExpansion: /*@__PURE__*/ Object(fesm2015_animations["o" /* trigger */])('bodyExpansion', [
        /*@__PURE__*/ Object(fesm2015_animations["l" /* state */])('collapsed, void', /*@__PURE__*/ Object(fesm2015_animations["m" /* style */])({ height: '0px', visibility: 'hidden' })),
        /*@__PURE__*/ Object(fesm2015_animations["l" /* state */])('expanded', /*@__PURE__*/ Object(fesm2015_animations["m" /* style */])({ height: '*', visibility: 'visible' })),
        /*@__PURE__*/ Object(fesm2015_animations["n" /* transition */])('expanded <=> collapsed, void => collapsed', /*@__PURE__*/ Object(fesm2015_animations["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};
let MatExpansionPanelContent = /*@__PURE__*/ (() => {
    class MatExpansionPanelContent {
        /**
         * @param {?} _template
         */
        constructor(_template) {
            this._template = _template;
        }
    }
    return MatExpansionPanelContent;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter for generating unique element ids.
 * @type {?}
 */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 * @type {?}
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = /*@__PURE__*/ new core["s" /* InjectionToken */]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
const expansion_0 = undefined;
let expansion_MatExpansionPanel = /*@__PURE__*/ (() => {
    class MatExpansionPanel extends accordion_CdkAccordionItem {
        /**
         * @param {?} accordion
         * @param {?} _changeDetectorRef
         * @param {?} _uniqueSelectionDispatcher
         * @param {?} _viewContainerRef
         * @param {?} _document
         * @param {?} _animationMode
         * @param {?=} defaultOptions
         */
        constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
            super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
            this._viewContainerRef = _viewContainerRef;
            this._animationMode = _animationMode;
            this._hideToggle = false;
            /**
             * An event emitted after the body's expansion animation happens.
             */
            this.afterExpand = new core["o" /* EventEmitter */]();
            /**
             * An event emitted after the body's collapse animation happens.
             */
            this.afterCollapse = new core["o" /* EventEmitter */]();
            /**
             * Stream that emits for changes in `\@Input` properties.
             */
            this._inputChanges = new Subject["a" /* Subject */]();
            /**
             * ID for the associated header element. Used for a11y labelling.
             */
            this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
            /**
             * Stream of body animation done events.
             */
            this._bodyAnimationDone = new Subject["a" /* Subject */]();
            this.accordion = accordion;
            this._document = _document;
            // We need a Subject with distinctUntilChanged, because the `done` event
            // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
            this._bodyAnimationDone.pipe(Object(distinctUntilChanged["a" /* distinctUntilChanged */])(( /**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */(x, y) => {
                return x.fromState === y.fromState && x.toState === y.toState;
            }))).subscribe(( /**
             * @param {?} event
             * @return {?}
             *//**
             * @param {?} event
             * @return {?}
             */ event => {
                if (event.fromState !== 'void') {
                    if (event.toState === 'expanded') {
                        this.afterExpand.emit();
                    }
                    else if (event.toState === 'collapsed') {
                        this.afterCollapse.emit();
                    }
                }
            }));
            if (defaultOptions) {
                this.hideToggle = defaultOptions.hideToggle;
            }
        }
        /**
         * Whether the toggle indicator should be hidden.
         * @return {?}
         */
        get hideToggle() {
            return this._hideToggle || (this.accordion && this.accordion.hideToggle);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set hideToggle(value) {
            this._hideToggle = Object(coercion["c" /* coerceBooleanProperty */])(value);
        }
        /**
         * Whether the toggle indicator should be hidden.
         * @return {?}
         */
        get togglePosition() {
            return this._togglePosition || (this.accordion && this.accordion.togglePosition);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set togglePosition(value) {
            this._togglePosition = value;
        }
        /**
         * Determines whether the expansion panel should have spacing between it and its siblings.
         * @return {?}
         */
        _hasSpacing() {
            if (this.accordion) {
                // We don't need to subscribe to the `stateChanges` of the parent accordion because each time
                // the [displayMode] input changes, the change detection will also cover the host bindings
                // of this expansion panel.
                return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
            }
            return false;
        }
        /**
         * Gets the expanded state string.
         * @return {?}
         */
        _getExpandedState() {
            return this.expanded ? 'expanded' : 'collapsed';
        }
        /**
         * @return {?}
         */
        ngAfterContentInit() {
            if (this._lazyContent) {
                // Render the content as soon as the panel becomes open.
                this.opened.pipe(Object(startWith["a" /* startWith */])(( /** @type {?} */(null))), Object(filter["a" /* filter */])(( /**
                 * @return {?}
                 */() => this.expanded && !this._portal)), Object(take["a" /* take */])(1)).subscribe(( /**
                 * @return {?}
                 */() => {
                    this._portal = new portal["h" /* TemplatePortal */](this._lazyContent._template, this._viewContainerRef);
                }));
            }
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            this._inputChanges.next(changes);
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            super.ngOnDestroy();
            this._bodyAnimationDone.complete();
            this._inputChanges.complete();
        }
        /**
         * Checks whether the expansion panel's content contains the currently-focused element.
         * @return {?}
         */
        _containsFocus() {
            if (this._body) {
                /** @type {?} */
                const focusedElement = this._document.activeElement;
                /** @type {?} */
                const bodyElement = this._body.nativeElement;
                return focusedElement === bodyElement || bodyElement.contains(focusedElement);
            }
            return false;
        }
    }
    return MatExpansionPanel;
})();
let MatExpansionPanelActionRow = /*@__PURE__*/ (() => {
    class MatExpansionPanelActionRow {
    }
    return MatExpansionPanelActionRow;
})();
let expansion_MatExpansionPanelHeader = /*@__PURE__*/ (() => {
    class MatExpansionPanelHeader {
        /**
         * @param {?} panel
         * @param {?} _element
         * @param {?} _focusMonitor
         * @param {?} _changeDetectorRef
         * @param {?=} defaultOptions
         */
        constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
            this.panel = panel;
            this._element = _element;
            this._focusMonitor = _focusMonitor;
            this._changeDetectorRef = _changeDetectorRef;
            this._parentChangeSubscription = Subscription["a" /* Subscription */].EMPTY;
            /**
             * Whether Angular animations in the panel header should be disabled.
             */
            this._animationsDisabled = true;
            /** @type {?} */
            const accordionHideToggleChange = panel.accordion ?
                panel.accordion._stateChanges.pipe(Object(filter["a" /* filter */])(( /**
                 * @param {?} changes
                 * @return {?}
                 *//**
                 * @param {?} changes
                 * @return {?}
                 */ changes => !!(changes['hideToggle'] || changes['togglePosition'])))) :
                empty["a" /* EMPTY */];
            // Since the toggle state depends on an @Input on the panel, we
            // need to subscribe and trigger change detection manually.
            this._parentChangeSubscription =
                Object(merge["a" /* merge */])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(filter["a" /* filter */])(( /**
                 * @param {?} changes
                 * @return {?}
                 *//**
                 * @param {?} changes
                 * @return {?}
                 */ changes => {
                    return !!(changes['hideToggle'] ||
                        changes['disabled'] ||
                        changes['togglePosition']);
                }))))
                    .subscribe(( /**
             * @return {?}
             */() => this._changeDetectorRef.markForCheck()));
            // Avoids focus being lost if the panel contained the focused element and was closed.
            panel.closed
                .pipe(Object(filter["a" /* filter */])(( /**
         * @return {?}
         */() => panel._containsFocus())))
                .subscribe(( /**
         * @return {?}
         */() => _focusMonitor.focusVia(_element, 'program')));
            _focusMonitor.monitor(_element).subscribe(( /**
             * @param {?} origin
             * @return {?}
             *//**
             * @param {?} origin
             * @return {?}
             */ origin => {
                if (origin && panel.accordion) {
                    panel.accordion._handleHeaderFocus(this);
                }
            }));
            if (defaultOptions) {
                this.expandedHeight = defaultOptions.expandedHeight;
                this.collapsedHeight = defaultOptions.collapsedHeight;
            }
        }
        /**
         * @return {?}
         */
        _animationStarted() {
            // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
            // there to work around a bug in Angular (see #13088), however this introduces a different
            // issue. The new transition will cause the header to animate in on init (see #16067), if the
            // consumer has set a header height that is different from the default one. We work around it
            // by disabling animations on the header and re-enabling them after the first animation has run.
            // Note that Angular dispatches animation events even if animations are disabled. Ideally this
            // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
            // for https://github.com/angular/angular/issues/18847 to be resolved.
            this._animationsDisabled = false;
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @return {?}
         */
        get disabled() {
            return this.panel.disabled;
        }
        /**
         * Toggles the expanded state of the panel.
         * @return {?}
         */
        _toggle() {
            this.panel.toggle();
        }
        /**
         * Gets whether the panel is expanded.
         * @return {?}
         */
        _isExpanded() {
            return this.panel.expanded;
        }
        /**
         * Gets the expanded state string of the panel.
         * @return {?}
         */
        _getExpandedState() {
            return this.panel._getExpandedState();
        }
        /**
         * Gets the panel id.
         * @return {?}
         */
        _getPanelId() {
            return this.panel.id;
        }
        /**
         * Gets the toggle position for the header.
         * @return {?}
         */
        _getTogglePosition() {
            return this.panel.togglePosition;
        }
        /**
         * Gets whether the expand indicator should be shown.
         * @return {?}
         */
        _showToggle() {
            return !this.panel.hideToggle && !this.panel.disabled;
        }
        /**
         * Handle keydown event calling to toggle() if appropriate.
         * @param {?} event
         * @return {?}
         */
        _keydown(event) {
            switch (event.keyCode) {
                // Toggle for space and enter keys.
                case keycodes["n" /* SPACE */]:
                case keycodes["f" /* ENTER */]:
                    if (!Object(keycodes["s" /* hasModifierKey */])(event)) {
                        event.preventDefault();
                        this._toggle();
                    }
                    break;
                default:
                    if (this.panel.accordion) {
                        this.panel.accordion._handleHeaderKeydown(event);
                    }
                    return;
            }
        }
        /**
         * Focuses the panel header. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @param {?=} origin Origin of the action that triggered the focus.
         * @return {?}
         */
        focus(origin = 'program') {
            this._focusMonitor.focusVia(this._element, origin);
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._parentChangeSubscription.unsubscribe();
            this._focusMonitor.stopMonitoring(this._element);
        }
    }
    return MatExpansionPanelHeader;
})();
let MatExpansionPanelDescription = /*@__PURE__*/ (() => {
    class MatExpansionPanelDescription {
    }
    return MatExpansionPanelDescription;
})();
let MatExpansionPanelTitle = /*@__PURE__*/ (() => {
    class MatExpansionPanelTitle {
    }
    return MatExpansionPanelTitle;
})();
let expansion_MatAccordion = /*@__PURE__*/ (() => {
    class MatAccordion extends accordion_CdkAccordion {
        constructor() {
            super(...arguments);
            this._hideToggle = false;
            /**
             * Display mode used for all expansion panels in the accordion. Currently two display
             * modes exist:
             *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
             *     panel at a different elevation from the rest of the accordion.
             *  flat - no spacing is placed around expanded panels, showing all panels at the same
             *     elevation.
             */
            this.displayMode = 'default';
            /**
             * The position of the expansion indicator.
             */
            this.togglePosition = 'after';
        }
        /**
         * Whether the expansion indicator should be hidden.
         * @return {?}
         */
        get hideToggle() { return this._hideToggle; }
        /**
         * @param {?} show
         * @return {?}
         */
        set hideToggle(show) { this._hideToggle = Object(coercion["c" /* coerceBooleanProperty */])(show); }
        /**
         * @return {?}
         */
        ngAfterContentInit() {
            this._keyManager = new a11y["g" /* FocusKeyManager */](this._headers).withWrap();
        }
        /**
         * Handles keyboard events coming in from the panel headers.
         * @param {?} event
         * @return {?}
         */
        _handleHeaderKeydown(event) {
            const { keyCode } = event;
            /** @type {?} */
            const manager = this._keyManager;
            if (keyCode === keycodes["h" /* HOME */]) {
                if (!Object(keycodes["s" /* hasModifierKey */])(event)) {
                    manager.setFirstItemActive();
                    event.preventDefault();
                }
            }
            else if (keyCode === keycodes["e" /* END */]) {
                if (!Object(keycodes["s" /* hasModifierKey */])(event)) {
                    manager.setLastItemActive();
                    event.preventDefault();
                }
            }
            else {
                this._keyManager.onKeydown(event);
            }
        }
        /**
         * @param {?} header
         * @return {?}
         */
        _handleHeaderFocus(header) {
            this._keyManager.updateActiveItem(header);
        }
    }
    return MatAccordion;
})();
let MatExpansionModule = /*@__PURE__*/ (() => {
    class MatExpansionModule {
    }
    return MatExpansionModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/collections.js
var collections = __webpack_require__("JXpk");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/expansion/typings/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */








var MatExpansionModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](MatExpansionModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, []], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, CdkAccordionModule, CdkAccordionModule, []), core["Lb" /* ɵmpd */](1073742336, portal["g" /* PortalModule */], portal["g" /* PortalModule */], []), core["Lb" /* ɵmpd */](1073742336, MatExpansionModule, MatExpansionModule, [])]); });

var styles_MatExpansionPanel = [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button{margin-left:0;margin-right:8px}"];
var RenderType_MatExpansionPanel = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_MatExpansionPanel, data: { "animation": [{ type: 7, name: "bodyExpansion", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { height: "0px", visibility: "hidden" }, offset: null }, options: undefined }, { type: 0, name: "expanded", styles: { type: 6, styles: { height: "*", visibility: "visible" }, offset: null }, options: undefined }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }] } });

function View_MatExpansionPanel_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["qb" /* ɵand */](0, null, null, 0))], null, null); }
function View_MatExpansionPanel_0(_l) {
    return core["Xb" /* ɵvid */](2, [core["Tb" /* ɵqud */](671088640, 1, { _body: 0 }), core["Mb" /* ɵncd */](null, 0), (_l()(), core["Bb" /* ɵeld */](2, 0, [[1, 0], ["body", 1]], null, 5, "div", [["class", "mat-expansion-panel-content"], ["role", "region"]], [[24, "@bodyExpansion", 0], [1, "aria-labelledby", 0], [8, "id", 0]], [[null, "@bodyExpansion.done"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("@bodyExpansion.done" === en)) {
                var pd_0 = (_co._bodyAnimationDone.next($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 3, "div", [["class", "mat-expansion-panel-body"]], null, null, null, null, null)), core["Mb" /* ɵncd */](null, 1), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_MatExpansionPanel_1)), core["Ab" /* ɵdid */](6, 212992, null, 0, portal["c" /* CdkPortalOutlet */], [core["k" /* ComponentFactoryResolver */], core["V" /* ViewContainerRef */]], { portal: [0, "portal"] }, null), core["Mb" /* ɵncd */](null, 2)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co._portal; _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._getExpandedState(); var currVal_1 = _co._headerId; var currVal_2 = _co.id; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); });
}
function View_MatExpansionPanel_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 16777216, null, null, 3, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, View_MatExpansionPanel_0, RenderType_MatExpansionPanel)), core["Ab" /* ɵdid */](1, 1753088, null, 1, expansion_MatExpansionPanel, [[3, MAT_ACCORDION], core["i" /* ChangeDetectorRef */], collections["d" /* UniqueSelectionDispatcher */], core["V" /* ViewContainerRef */], common["d" /* DOCUMENT */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _lazyContent: 0 }), core["Sb" /* ɵprd */](256, null, MAT_ACCORDION, undefined, [])], null, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).expanded; var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); var currVal_2 = core["Nb" /* ɵnov */](_v, 1)._hasSpacing(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var MatExpansionPanelNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("mat-expansion-panel", expansion_MatExpansionPanel, View_MatExpansionPanel_Host_0, { expanded: "expanded", disabled: "disabled", hideToggle: "hideToggle", togglePosition: "togglePosition" }, { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange", afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, ["mat-expansion-panel-header", "*", "mat-action-row"]);

var styles_MatExpansionPanelHeader = [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"];
var RenderType_MatExpansionPanelHeader = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_MatExpansionPanelHeader, data: { "animation": [{ type: 7, name: "indicatorRotate", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { transform: "rotate(0deg)" }, offset: null }, options: undefined }, { type: 0, name: "expanded", styles: { type: 6, styles: { transform: "rotate(180deg)" }, offset: null }, options: undefined }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, { type: 7, name: "expansionHeight", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { height: "{{collapsedHeight}}" }, offset: null }, options: { params: { collapsedHeight: "48px" } } }, { type: 0, name: "expanded", styles: { type: 6, styles: { height: "{{expandedHeight}}" }, offset: null }, options: { params: { expandedHeight: "64px" } } }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 3, steps: [{ type: 11, selector: "@indicatorRotate", animation: { type: 9, options: null }, options: { optional: true } }, { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }], options: null }, options: null }], options: {} }] } });

function View_MatExpansionPanelHeader_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 0, "span", [["class", "mat-expansion-indicator"]], [[24, "@indicatorRotate", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._getExpandedState(); _ck(_v, 0, 0, currVal_0); }); }
function View_MatExpansionPanelHeader_0(_l) { return core["Xb" /* ɵvid */](2, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, "span", [["class", "mat-content"]], null, null, null, null, null)), core["Mb" /* ɵncd */](null, 0), core["Mb" /* ɵncd */](null, 1), core["Mb" /* ɵncd */](null, 2), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_MatExpansionPanelHeader_1)), core["Ab" /* ɵdid */](5, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._showToggle(); _ck(_v, 5, 0, currVal_0); }, null); }
function View_MatExpansionPanelHeader_Host_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._toggle() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 1)._keydown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("component:@expansionHeight.start" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 1)._animationStarted() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, View_MatExpansionPanelHeader_0, RenderType_MatExpansionPanelHeader)), core["Ab" /* ɵdid */](1, 180224, null, 0, expansion_MatExpansionPanelHeader, [expansion_MatExpansionPanel, core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]], null, null), core["Qb" /* ɵpod */](2, { collapsedHeight: 0, expandedHeight: 1 }), core["Qb" /* ɵpod */](3, { value: 0, params: 1 })], null, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).panel._headerId; var currVal_1 = (core["Nb" /* ɵnov */](_v, 1).disabled ? (0 - 1) : 0); var currVal_2 = core["Nb" /* ɵnov */](_v, 1)._getPanelId(); var currVal_3 = core["Nb" /* ɵnov */](_v, 1)._isExpanded(); var currVal_4 = core["Nb" /* ɵnov */](_v, 1).panel.disabled; var currVal_5 = core["Nb" /* ɵnov */](_v, 1)._isExpanded(); var currVal_6 = (core["Nb" /* ɵnov */](_v, 1)._getTogglePosition() === "after"); var currVal_7 = (core["Nb" /* ɵnov */](_v, 1)._getTogglePosition() === "before"); var currVal_8 = core["Nb" /* ɵnov */](_v, 1)._animationsDisabled; var currVal_9 = _ck(_v, 3, 0, core["Nb" /* ɵnov */](_v, 1)._getExpandedState(), _ck(_v, 2, 0, core["Nb" /* ɵnov */](_v, 1).collapsedHeight, core["Nb" /* ɵnov */](_v, 1).expandedHeight)); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
var MatExpansionPanelHeaderNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("mat-expansion-panel-header", expansion_MatExpansionPanelHeader, View_MatExpansionPanelHeader_Host_0, { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight" }, {}, ["mat-panel-title", "mat-panel-description", "*"]);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/divider/typings/index.ngfactory.js
var divider_typings_index_ngfactory = __webpack_require__("TCBR");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/text-field.js
var text_field = __webpack_require__("9Z2Q");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/observable/fromEvent.js
var fromEvent = __webpack_require__("KTx3");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/Observable.js + 2 modules
var Observable = __webpack_require__("IdLP");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__("kuMc");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/chat-box.component.ts






let chat_box_component_ChatBoxComponent = /*@__PURE__*/ (() => {
    class ChatBoxComponent {
        constructor(store) {
            this.store = store;
            this.showChatBox = false;
            this.typing = false;
            this.canUseSpeechRecognition = false;
            this.canUseSpeechSynthesis = false;
            this.canUseSpeechRecognition = this.store.selectSnapshot(chat_box_store_ChatBoxState.canUseSpeechRecognition);
            this.canUseSpeechSynthesis = this.store.selectSnapshot(chat_box_store_ChatBoxState.canUseSpeechSynthesis);
            this.voices = this.store.selectSnapshot(chat_box_store_ChatBoxState.getVoices);
        }
        ngOnInit() {
            this.store.dispatch(new FetchConversations());
            // TODO: only create new Conversation when user select one are more avatars and click +
            if (!this.store.selectSnapshot(chat_box_store_ChatBoxState.getActiveConversation)) {
                this.store.dispatch(new CreateNewConversation());
            }
        }
        ngOnDestroy() { }
        focus() {
            setTimeout(() => {
                this.input.nativeElement.focus();
                if (this.bottom !== undefined) {
                    this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }
                this.checkTyping();
            }, 100);
        }
        sendMessageToBot() {
            return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
                this.store.dispatch(new SendMessage({ message: this.input.nativeElement.value }));
                this.input.nativeElement.value = '';
                this.focus();
            });
        }
        startTalkingToBot() {
            return tslib_es6["__awaiter"](this, void 0, void 0, function* () {
                this.store.dispatch(new StartVoiceCommand());
            });
        }
        toggleChatBox() {
            this.showChatBox = !this.showChatBox;
            if (this.showChatBox) {
                this.focus();
            }
        }
        checkTyping() {
            console.log('in checkTyping');
            const keyDowns = Object(fromEvent["a" /* fromEvent */])(this.input.nativeElement, 'keydown');
            const enterUp = Object(fromEvent["a" /* fromEvent */])(this.input.nativeElement, 'keyup').pipe(Object(filter["a" /* filter */])((x) => x.key === 'Enter'), Object(take["a" /* take */])(1));
            const typing = keyDowns
                .pipe(
            // map(true),
            Object(takeUntil["a" /* takeUntil */])(enterUp))
                .subscribe(() => (this.typing = true), () => (this.typing = false), () => (this.typing = false));
        }
    }
    tslib_es6["__decorate"]([
        Object(ngxs_store["f" /* Select */])(chat_box_store_ChatBoxState.getConversations),
        tslib_es6["__metadata"]("design:type", Observable["a" /* Observable */])
    ], ChatBoxComponent.prototype, "conversations$", void 0);
    tslib_es6["__decorate"]([
        Object(ngxs_store["f" /* Select */])(chat_box_store_ChatBoxState.getActiveConversation),
        tslib_es6["__metadata"]("design:type", Observable["a" /* Observable */])
    ], ChatBoxComponent.prototype, "activeConversation$", void 0);
    return ChatBoxComponent;
})();


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/chat-box.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */









































var styles_ChatBoxComponent = [chat_box_component_scss_shim_ngstyle_styles];
var RenderType_ChatBoxComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_ChatBoxComponent, data: { "animation": [{ type: 7, name: "scrollAnimation", definitions: [{ type: 0, name: "show", styles: { type: 6, styles: { opacity: 1, transform: "scale(1)" }, offset: null }, options: undefined }, { type: 0, name: "hide", styles: { type: 6, styles: { opacity: 0, transform: "scale(0)" }, offset: null }, options: undefined }, { type: 1, expr: "show => hide", animation: { type: 4, styles: null, timings: "500ms ease-out" }, options: null }, { type: 1, expr: "hide => show", animation: { type: 4, styles: null, timings: "500ms ease-in" }, options: null }], options: {} }] } });

function View_ChatBoxComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v.parent, 42).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["settings"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_3 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_2, currVal_3); });
}
function View_ChatBoxComponent_2(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-text-to-speech-preferences", [], null, null, null, View_TextToSpeechPreferencesComponent_0, RenderType_TextToSpeechPreferencesComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, text_to_speech_preferences_component_TextToSpeechPreferencesComponent, [ngxs_store["j" /* Store */], fesm2015_forms["g" /* FormBuilder */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ChatBoxComponent_3(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 6, "div", [["class", "message"]], null, null, null, null, null)), core["Sb" /* ɵprd */](512, null, common["A" /* ɵNgClassImpl */], common["B" /* ɵNgClassR2Impl */], [core["v" /* IterableDiffers */], core["w" /* KeyValueDiffers */], core["m" /* ElementRef */], core["I" /* Renderer2 */]]), core["Ab" /* ɵdid */](2, 278528, null, 0, common["l" /* NgClass */], [common["A" /* ɵNgClassImpl */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), core["Qb" /* ɵpod */](3, { from: 0, to: 1 }), core["Ab" /* ɵdid */](4, 933888, null, 0, extended["a" /* DefaultClassDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["f" /* MediaMarshaller */], common["A" /* ɵNgClassImpl */], [6, common["l" /* NgClass */]]], { ngClass: [0, "ngClass"], klass: [1, "klass"] }, null), core["Qb" /* ɵpod */](5, { from: 0, to: 1 }), (_l()(), core["Vb" /* ɵted */](6, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = "message"; var currVal_1 = _ck(_v, 3, 0, _v.context.$implicit.isIncoming, _v.context.$implicit.isOutgoing); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 5, 0, _v.context.$implicit.isIncoming, _v.context.$implicit.isOutgoing); var currVal_3 = "message"; _ck(_v, 4, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_4 = _v.context.$implicit.render(); _ck(_v, 6, 0, currVal_4); }); }
function View_ChatBoxComponent_4(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "typing-indicator", [], null, null, null, View_TypingIndicatorComponent_0, RenderType_TypingIndicatorComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, TypingIndicatorComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ChatBoxComponent_5(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.startTalkingToBot() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](1, 16384, [[20, 4]], 0, form_field["h" /* MatPrefix */], [], null, null), core["Ab" /* ɵdid */](2, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["keyboard_voice"]))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 2).inline; var currVal_1 = (((core["Nb" /* ɵnov */](_v, 2).color !== "primary") && (core["Nb" /* ɵnov */](_v, 2).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 2).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_ChatBoxComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { bottom: 0 }), core["Tb" /* ɵqud */](402653184, 2, { input: 0 }), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 4, "button", [["class", "chat-button"], ["mat-fab", ""]], [[24, "@scrollAnimation", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleChatBox() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](3, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](5, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["chat_bubble"])), (_l()(), core["Bb" /* ɵeld */](7, 16777216, null, null, 106, "div", [["cdkDrag", ""], ["class", "chat-box cdk-drag"], ["fxLayout", "column"], ["resizable", ""]], [[24, "@scrollAnimation", 0], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], [["document", "mouseup"], ["document", "touchend"], ["document", "mousemove"], ["document", "touchmove"]], function (_v, en, $event) {
            var ad = true;
            if (("document:mouseup" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 9).onMouseUp($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("document:touchend" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 9).onMouseUp($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("document:mousemove" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 9).onMouseMove($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("document:touchmove" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 9).onMouseMove($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, View_ResizableComponent_0, RenderType_ResizableComponent)), core["Sb" /* ɵprd */](512, null, Store, Store, []), core["Ab" /* ɵdid */](9, 638976, null, 0, resizable_component_ResizableComponent, [core["m" /* ElementRef */], Store, core["I" /* Renderer2 */], resizable_state_ResizableState], { directions: [0, "directions"] }, null), core["Ob" /* ɵpad */](10, 8), core["Ab" /* ɵdid */](11, 4866048, null, 3, drag_drop["c" /* CdkDrag */], [core["m" /* ElementRef */], [3, drag_drop["b" /* CDK_DROP_LIST */]], common["d" /* DOCUMENT */], core["D" /* NgZone */], core["V" /* ViewContainerRef */], drag_drop["a" /* CDK_DRAG_CONFIG */], [2, bidi["b" /* Directionality */]], drag_drop["g" /* DragDrop */], core["i" /* ChangeDetectorRef */]], null, null), core["Tb" /* ɵqud */](603979776, 3, { _handles: 1 }), core["Tb" /* ɵqud */](603979776, 4, { _previewTemplate: 0 }), core["Tb" /* ɵqud */](603979776, 5, { _placeholderTemplate: 0 }), core["Ab" /* ɵdid */](15, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), core["Sb" /* ɵprd */](2048, null, drag_drop["k" /* ɵb */], null, [drag_drop["c" /* CdkDrag */]]), (_l()(), core["Bb" /* ɵeld */](17, 0, null, 0, 18, "mat-toolbar", [["cdkDragHandle", ""], ["class", "header mat-elevation-z2 cdk-drag-handle mat-toolbar"], ["color", "primary"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "cursor: move"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, toolbar_typings_index_ngfactory["b" /* View_MatToolbar_0 */], toolbar_typings_index_ngfactory["a" /* RenderType_MatToolbar */])), core["Ab" /* ɵdid */](18, 147456, [[3, 4]], 0, drag_drop["d" /* CdkDragHandle */], [core["m" /* ElementRef */], [2, drag_drop["k" /* ɵb */]]], null, null), core["Ab" /* ɵdid */](19, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), core["Ab" /* ɵdid */](20, 671744, null, 0, flex["d" /* DefaultLayoutAlignDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["m" /* LayoutAlignStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), core["Ab" /* ɵdid */](21, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](22, 4243456, null, 1, toolbar["a" /* MatToolbar */], [core["m" /* ElementRef */], esm2015_platform["a" /* Platform */], common["d" /* DOCUMENT */]], { color: [0, "color"] }, null), core["Tb" /* ɵqud */](603979776, 6, { _toolbarRows: 1 }), (_l()(), core["Bb" /* ɵeld */](24, 0, null, 0, 2, "span", [["fxFlex", ""]], null, null, null, null, null)), core["Ab" /* ɵdid */](25, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["ChatBox"])), (_l()(), core["Bb" /* ɵeld */](27, 0, null, 0, 1, "span", [["fxFlex", "grow"]], null, null, null, null, null)), core["Ab" /* ɵdid */](28, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_ChatBoxComponent_1)), core["Ab" /* ɵdid */](30, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](31, 0, null, 0, 4, "button", [["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](32, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](33, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleChatBox() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](34, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["close"])), (_l()(), core["Bb" /* ɵeld */](36, 0, null, 0, 54, "mat-drawer-container", [["class", "mat-drawer-container"], ["fxFlex", "grow"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, typings_index_ngfactory["g" /* View_MatDrawerContainer_0 */], typings_index_ngfactory["b" /* RenderType_MatDrawerContainer */])), core["Ab" /* ɵdid */](37, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](38, 1490944, null, 2, sidenav["c" /* MatDrawerContainer */], [[2, bidi["b" /* Directionality */]], core["m" /* ElementRef */], core["D" /* NgZone */], core["i" /* ChangeDetectorRef */], scrolling["j" /* ViewportRuler */], sidenav["a" /* MAT_DRAWER_DEFAULT_AUTOSIZE */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { hasBackdrop: [0, "hasBackdrop"] }, null), core["Tb" /* ɵqud */](603979776, 7, { _drawers: 1 }), core["Tb" /* ɵqud */](603979776, 8, { _content: 0 }), (_l()(), core["Bb" /* ɵeld */](41, 0, null, 0, 35, "mat-drawer", [["class", "mat-drawer"], ["mode", "over"], ["position", "end"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
            var ad = true;
            if (("component:@transform.start" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 42)._animationStartListener($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("component:@transform.done" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 42)._animationDoneListener($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, typings_index_ngfactory["i" /* View_MatDrawer_0 */], typings_index_ngfactory["a" /* RenderType_MatDrawer */])), core["Ab" /* ɵdid */](42, 3325952, [[7, 4], ["drawer", 4]], 0, sidenav["b" /* MatDrawer */], [core["m" /* ElementRef */], a11y["i" /* FocusTrapFactory */], a11y["h" /* FocusMonitor */], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, common["d" /* DOCUMENT */]]], { position: [0, "position"], mode: [1, "mode"] }, null), (_l()(), core["Bb" /* ɵeld */](43, 0, null, 0, 3, "mat-toolbar", [["class", "mat-toolbar"], ["color", "accent"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, toolbar_typings_index_ngfactory["b" /* View_MatToolbar_0 */], toolbar_typings_index_ngfactory["a" /* RenderType_MatToolbar */])), core["Ab" /* ɵdid */](44, 4243456, null, 1, toolbar["a" /* MatToolbar */], [core["m" /* ElementRef */], esm2015_platform["a" /* Platform */], common["d" /* DOCUMENT */]], { color: [0, "color"] }, null), core["Tb" /* ɵqud */](603979776, 9, { _toolbarRows: 1 }), (_l()(), core["Vb" /* ɵted */](-1, 0, ["Preferences"])), (_l()(), core["Bb" /* ɵeld */](47, 0, null, 0, 29, "mat-accordion", [["class", "mat-accordion"]], null, null, null, null, null)), core["Ab" /* ɵdid */](48, 1720320, null, 1, expansion_MatAccordion, [], null, null), core["Tb" /* ɵqud */](603979776, 10, { _headers: 1 }), core["Sb" /* ɵprd */](2048, null, MAT_ACCORDION, null, [expansion_MatAccordion]), (_l()(), core["Bb" /* ɵeld */](51, 16777216, null, null, 12, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, View_MatExpansionPanel_0, RenderType_MatExpansionPanel)), core["Ab" /* ɵdid */](52, 1753088, null, 1, expansion_MatExpansionPanel, [[3, MAT_ACCORDION], core["i" /* ChangeDetectorRef */], collections["d" /* UniqueSelectionDispatcher */], core["V" /* ViewContainerRef */], common["d" /* DOCUMENT */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]], { expanded: [0, "expanded"] }, null), core["Tb" /* ɵqud */](603979776, 11, { _lazyContent: 0 }), core["Sb" /* ɵprd */](256, null, MAT_ACCORDION, undefined, []), (_l()(), core["Bb" /* ɵeld */](55, 0, null, 0, 6, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 56)._toggle() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 56)._keydown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("component:@expansionHeight.start" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 56)._animationStarted() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, View_MatExpansionPanelHeader_0, RenderType_MatExpansionPanelHeader)), core["Ab" /* ɵdid */](56, 180224, [[10, 4]], 0, expansion_MatExpansionPanelHeader, [expansion_MatExpansionPanel, core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]], null, null), core["Qb" /* ɵpod */](57, { collapsedHeight: 0, expandedHeight: 1 }), core["Qb" /* ɵpod */](58, { value: 0, params: 1 }), (_l()(), core["Bb" /* ɵeld */](59, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), core["Ab" /* ɵdid */](60, 16384, null, 0, MatExpansionPanelTitle, [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Voice"])), (_l()(), core["qb" /* ɵand */](0, null, 1, 1, null, View_ChatBoxComponent_2)), core["Ab" /* ɵdid */](63, 16384, [[11, 4]], 0, MatExpansionPanelContent, [core["R" /* TemplateRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](64, 16777216, null, null, 12, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, View_MatExpansionPanel_0, RenderType_MatExpansionPanel)), core["Ab" /* ɵdid */](65, 1753088, null, 1, expansion_MatExpansionPanel, [[3, MAT_ACCORDION], core["i" /* ChangeDetectorRef */], collections["d" /* UniqueSelectionDispatcher */], core["V" /* ViewContainerRef */], common["d" /* DOCUMENT */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]], null, null), core["Tb" /* ɵqud */](603979776, 12, { _lazyContent: 0 }), core["Sb" /* ɵprd */](256, null, MAT_ACCORDION, undefined, []), (_l()(), core["Bb" /* ɵeld */](68, 0, null, 0, 6, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 69)._toggle() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 69)._keydown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("component:@expansionHeight.start" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 69)._animationStarted() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, View_MatExpansionPanelHeader_0, RenderType_MatExpansionPanelHeader)), core["Ab" /* ɵdid */](69, 180224, [[10, 4]], 0, expansion_MatExpansionPanelHeader, [expansion_MatExpansionPanel, core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [2, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]], null, null), core["Qb" /* ɵpod */](70, { collapsedHeight: 0, expandedHeight: 1 }), core["Qb" /* ɵpod */](71, { value: 0, params: 1 }), (_l()(), core["Bb" /* ɵeld */](72, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), core["Ab" /* ɵdid */](73, 16384, null, 0, MatExpansionPanelTitle, [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Other"])), (_l()(), core["Bb" /* ɵeld */](75, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](-1, null, ["TODO: Other Settings"])), (_l()(), core["Bb" /* ɵeld */](77, 0, null, 1, 13, "mat-drawer-content", [["class", "body mat-drawer-content"], ["fxFlex", "grow"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, typings_index_ngfactory["h" /* View_MatDrawerContent_0 */], typings_index_ngfactory["c" /* RenderType_MatDrawerContent */])), core["Ab" /* ɵdid */](78, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](79, 1294336, [[8, 4]], 0, sidenav["d" /* MatDrawerContent */], [core["i" /* ChangeDetectorRef */], sidenav["c" /* MatDrawerContainer */], core["m" /* ElementRef */], scrolling["f" /* ScrollDispatcher */], core["D" /* NgZone */]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 2, null, View_ChatBoxComponent_3)), core["Ab" /* ɵdid */](81, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](83, 0, null, 0, 2, "div", [["style", "position: fixed; bottom: 60px;"]], null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_ChatBoxComponent_4)), core["Ab" /* ɵdid */](85, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](86, 0, [[1, 0], ["bottom", 1]], 0, 0, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](87, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](88, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](89, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](90, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](91, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, divider_typings_index_ngfactory["b" /* View_MatDivider_0 */], divider_typings_index_ngfactory["a" /* RenderType_MatDivider */])), core["Ab" /* ɵdid */](92, 49152, null, 0, divider["a" /* MatDivider */], [], null, null), (_l()(), core["Bb" /* ɵeld */](93, 0, null, 0, 20, "mat-form-field", [["appearance", "outline"], ["class", "input custom-outline mat-form-field"], ["color", "primary"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](94, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](95, 7520256, null, 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"], appearance: [1, "appearance"] }, null), core["Tb" /* ɵqud */](603979776, 13, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 14, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 15, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 16, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 17, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 18, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 19, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 20, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 21, { _suffixChildren: 1 }), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_ChatBoxComponent_5)), core["Ab" /* ɵdid */](106, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](107, 0, [[2, 0], ["input", 1]], 1, 2, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Ask anything..."], ["type", "text"], ["x-webkit-speech", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "keyup.enter"], [null, "keyup.escape"], [null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("blur" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 108)._focusChanged(false) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 108)._focusChanged(true) !== false);
                ad = (pd_1 && ad);
            }
            if (("input" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 108)._onInput() !== false);
                ad = (pd_2 && ad);
            }
            if (("keyup.enter" === en)) {
                var pd_3 = (_co.sendMessageToBot() !== false);
                ad = (pd_3 && ad);
            }
            if (("keyup.escape" === en)) {
                var pd_4 = ((_co.showChatBox = false) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](108, 999424, null, 0, input["b" /* MatInput */], [core["m" /* ElementRef */], esm2015_platform["a" /* Platform */], [8, null], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["Sb" /* ɵprd */](2048, [[13, 4], [14, 4]], form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]]), (_l()(), core["Bb" /* ɵeld */](110, 0, null, 4, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.sendMessageToBot() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](111, 16384, [[21, 4]], 0, form_field["i" /* MatSuffix */], [], null, null), core["Ab" /* ɵdid */](112, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["send"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_8 = _ck(_v, 10, 0, "bottom", "top", "left", "right", "top-left", "bottom-left", "top-right", "bottom-right"); _ck(_v, 9, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 15, 0, currVal_9); var currVal_12 = "row"; _ck(_v, 19, 0, currVal_12); var currVal_13 = "start center"; _ck(_v, 20, 0, currVal_13); var currVal_14 = ""; _ck(_v, 21, 0, currVal_14); var currVal_15 = "primary"; _ck(_v, 22, 0, currVal_15); var currVal_16 = ""; _ck(_v, 25, 0, currVal_16); var currVal_17 = "grow"; _ck(_v, 28, 0, currVal_17); var currVal_18 = _co.canUseSpeechSynthesis; _ck(_v, 30, 0, currVal_18); _ck(_v, 34, 0); var currVal_24 = "grow"; _ck(_v, 37, 0, currVal_24); var currVal_25 = false; _ck(_v, 38, 0, currVal_25); var currVal_32 = "end"; var currVal_33 = "over"; _ck(_v, 42, 0, currVal_32, currVal_33); var currVal_36 = "accent"; _ck(_v, 44, 0, currVal_36); var currVal_40 = true; _ck(_v, 52, 0, currVal_40); var currVal_66 = "grow"; _ck(_v, 78, 0, currVal_66); _ck(_v, 79, 0); var currVal_67 = core["Wb" /* ɵunv */](_v, 81, 0, core["Nb" /* ɵnov */](_v, 82).transform(_co.activeConversation$)).messages; _ck(_v, 81, 0, currVal_67); var currVal_68 = _co.typing; _ck(_v, 85, 0, currVal_68); var currVal_95 = ""; _ck(_v, 94, 0, currVal_95); var currVal_96 = "primary"; var currVal_97 = "outline"; _ck(_v, 95, 0, currVal_96, currVal_97); var currVal_98 = _co.canUseSpeechRecognition; _ck(_v, 106, 0, currVal_98); var currVal_108 = "Ask anything..."; var currVal_109 = "text"; _ck(_v, 108, 0, currVal_108, currVal_109); _ck(_v, 112, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.showChatBox ? "hide" : "show"); var currVal_1 = (core["Nb" /* ɵnov */](_v, 3).disabled || null); var currVal_2 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = core["Nb" /* ɵnov */](_v, 5).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 5).color !== "primary") && (core["Nb" /* ɵnov */](_v, 5).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_3, currVal_4); var currVal_5 = (_co.showChatBox ? "show" : "hide"); var currVal_6 = core["Nb" /* ɵnov */](_v, 11).disabled; var currVal_7 = core["Nb" /* ɵnov */](_v, 11)._dragRef.isDragging(); _ck(_v, 7, 0, currVal_5, currVal_6, currVal_7); var currVal_10 = (core["Nb" /* ɵnov */](_v, 22)._toolbarRows.length > 0); var currVal_11 = (core["Nb" /* ɵnov */](_v, 22)._toolbarRows.length === 0); _ck(_v, 17, 0, currVal_10, currVal_11); var currVal_19 = (core["Nb" /* ɵnov */](_v, 32).disabled || null); var currVal_20 = (core["Nb" /* ɵnov */](_v, 32)._animationMode === "NoopAnimations"); _ck(_v, 31, 0, currVal_19, currVal_20); var currVal_21 = core["Nb" /* ɵnov */](_v, 34).inline; var currVal_22 = (((core["Nb" /* ɵnov */](_v, 34).color !== "primary") && (core["Nb" /* ɵnov */](_v, 34).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 34).color !== "warn")); _ck(_v, 33, 0, currVal_21, currVal_22); var currVal_23 = core["Nb" /* ɵnov */](_v, 38)._backdropOverride; _ck(_v, 36, 0, currVal_23); var currVal_26 = null; var currVal_27 = (core["Nb" /* ɵnov */](_v, 42).position === "end"); var currVal_28 = (core["Nb" /* ɵnov */](_v, 42).mode === "over"); var currVal_29 = (core["Nb" /* ɵnov */](_v, 42).mode === "push"); var currVal_30 = (core["Nb" /* ɵnov */](_v, 42).mode === "side"); var currVal_31 = core["Nb" /* ɵnov */](_v, 42)._animationState; _ck(_v, 41, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_34 = (core["Nb" /* ɵnov */](_v, 44)._toolbarRows.length > 0); var currVal_35 = (core["Nb" /* ɵnov */](_v, 44)._toolbarRows.length === 0); _ck(_v, 43, 0, currVal_34, currVal_35); var currVal_37 = core["Nb" /* ɵnov */](_v, 52).expanded; var currVal_38 = (core["Nb" /* ɵnov */](_v, 52)._animationMode === "NoopAnimations"); var currVal_39 = core["Nb" /* ɵnov */](_v, 52)._hasSpacing(); _ck(_v, 51, 0, currVal_37, currVal_38, currVal_39); var currVal_41 = core["Nb" /* ɵnov */](_v, 56).panel._headerId; var currVal_42 = (core["Nb" /* ɵnov */](_v, 56).disabled ? (0 - 1) : 0); var currVal_43 = core["Nb" /* ɵnov */](_v, 56)._getPanelId(); var currVal_44 = core["Nb" /* ɵnov */](_v, 56)._isExpanded(); var currVal_45 = core["Nb" /* ɵnov */](_v, 56).panel.disabled; var currVal_46 = core["Nb" /* ɵnov */](_v, 56)._isExpanded(); var currVal_47 = (core["Nb" /* ɵnov */](_v, 56)._getTogglePosition() === "after"); var currVal_48 = (core["Nb" /* ɵnov */](_v, 56)._getTogglePosition() === "before"); var currVal_49 = core["Nb" /* ɵnov */](_v, 56)._animationsDisabled; var currVal_50 = _ck(_v, 58, 0, core["Nb" /* ɵnov */](_v, 56)._getExpandedState(), _ck(_v, 57, 0, core["Nb" /* ɵnov */](_v, 56).collapsedHeight, core["Nb" /* ɵnov */](_v, 56).expandedHeight)); _ck(_v, 55, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_51 = core["Nb" /* ɵnov */](_v, 65).expanded; var currVal_52 = (core["Nb" /* ɵnov */](_v, 65)._animationMode === "NoopAnimations"); var currVal_53 = core["Nb" /* ɵnov */](_v, 65)._hasSpacing(); _ck(_v, 64, 0, currVal_51, currVal_52, currVal_53); var currVal_54 = core["Nb" /* ɵnov */](_v, 69).panel._headerId; var currVal_55 = (core["Nb" /* ɵnov */](_v, 69).disabled ? (0 - 1) : 0); var currVal_56 = core["Nb" /* ɵnov */](_v, 69)._getPanelId(); var currVal_57 = core["Nb" /* ɵnov */](_v, 69)._isExpanded(); var currVal_58 = core["Nb" /* ɵnov */](_v, 69).panel.disabled; var currVal_59 = core["Nb" /* ɵnov */](_v, 69)._isExpanded(); var currVal_60 = (core["Nb" /* ɵnov */](_v, 69)._getTogglePosition() === "after"); var currVal_61 = (core["Nb" /* ɵnov */](_v, 69)._getTogglePosition() === "before"); var currVal_62 = core["Nb" /* ɵnov */](_v, 69)._animationsDisabled; var currVal_63 = _ck(_v, 71, 0, core["Nb" /* ɵnov */](_v, 69)._getExpandedState(), _ck(_v, 70, 0, core["Nb" /* ɵnov */](_v, 69).collapsedHeight, core["Nb" /* ɵnov */](_v, 69).expandedHeight)); _ck(_v, 68, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63); var currVal_64 = core["Nb" /* ɵnov */](_v, 79)._container._contentMargins.left; var currVal_65 = core["Nb" /* ɵnov */](_v, 79)._container._contentMargins.right; _ck(_v, 77, 0, currVal_64, currVal_65); var currVal_69 = (core["Nb" /* ɵnov */](_v, 92).vertical ? "vertical" : "horizontal"); var currVal_70 = core["Nb" /* ɵnov */](_v, 92).vertical; var currVal_71 = !core["Nb" /* ɵnov */](_v, 92).vertical; var currVal_72 = core["Nb" /* ɵnov */](_v, 92).inset; _ck(_v, 91, 0, currVal_69, currVal_70, currVal_71, currVal_72); var currVal_73 = (core["Nb" /* ɵnov */](_v, 95).appearance == "standard"); var currVal_74 = (core["Nb" /* ɵnov */](_v, 95).appearance == "fill"); var currVal_75 = (core["Nb" /* ɵnov */](_v, 95).appearance == "outline"); var currVal_76 = (core["Nb" /* ɵnov */](_v, 95).appearance == "legacy"); var currVal_77 = core["Nb" /* ɵnov */](_v, 95)._control.errorState; var currVal_78 = core["Nb" /* ɵnov */](_v, 95)._canLabelFloat; var currVal_79 = core["Nb" /* ɵnov */](_v, 95)._shouldLabelFloat(); var currVal_80 = core["Nb" /* ɵnov */](_v, 95)._hasFloatingLabel(); var currVal_81 = core["Nb" /* ɵnov */](_v, 95)._hideControlPlaceholder(); var currVal_82 = core["Nb" /* ɵnov */](_v, 95)._control.disabled; var currVal_83 = core["Nb" /* ɵnov */](_v, 95)._control.autofilled; var currVal_84 = core["Nb" /* ɵnov */](_v, 95)._control.focused; var currVal_85 = (core["Nb" /* ɵnov */](_v, 95).color == "accent"); var currVal_86 = (core["Nb" /* ɵnov */](_v, 95).color == "warn"); var currVal_87 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("untouched"); var currVal_88 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("touched"); var currVal_89 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("pristine"); var currVal_90 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("dirty"); var currVal_91 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("valid"); var currVal_92 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("invalid"); var currVal_93 = core["Nb" /* ɵnov */](_v, 95)._shouldForward("pending"); var currVal_94 = !core["Nb" /* ɵnov */](_v, 95)._animationsEnabled; _ck(_v, 93, 1, [currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94]); var currVal_99 = core["Nb" /* ɵnov */](_v, 108)._isServer; var currVal_100 = core["Nb" /* ɵnov */](_v, 108).id; var currVal_101 = core["Nb" /* ɵnov */](_v, 108).placeholder; var currVal_102 = core["Nb" /* ɵnov */](_v, 108).disabled; var currVal_103 = core["Nb" /* ɵnov */](_v, 108).required; var currVal_104 = ((core["Nb" /* ɵnov */](_v, 108).readonly && !core["Nb" /* ɵnov */](_v, 108)._isNativeSelect) || null); var currVal_105 = (core["Nb" /* ɵnov */](_v, 108)._ariaDescribedby || null); var currVal_106 = core["Nb" /* ɵnov */](_v, 108).errorState; var currVal_107 = core["Nb" /* ɵnov */](_v, 108).required.toString(); _ck(_v, 107, 0, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107); var currVal_110 = core["Nb" /* ɵnov */](_v, 112).inline; var currVal_111 = (((core["Nb" /* ɵnov */](_v, 112).color !== "primary") && (core["Nb" /* ɵnov */](_v, 112).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 112).color !== "warn")); _ck(_v, 110, 0, currVal_110, currVal_111); });
}
function View_ChatBoxComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-chat-box", [], null, null, null, View_ChatBoxComponent_0, RenderType_ChatBoxComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, chat_box_component_ChatBoxComponent, [ngxs_store["j" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChatBoxComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-chat-box", chat_box_component_ChatBoxComponent, View_ChatBoxComponent_Host_0, {}, {}, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/socketio-plugin/src/index.ts
var socketio_plugin_src = __webpack_require__("evwg");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js
var ngxs_router_plugin = __webpack_require__("q5XA");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/dashboard-layout/dashboard-layout.component.ts






// import { AuthService } from '@ngx-starter-kit/oidc';
/** @dynamic */
class dashboard_layout_component_DashboardLayoutComponent {
    constructor(router, store, actions$, mediaObserver, oauthService, 
    // private authService: AuthService,
    window) {
        this.router = router;
        this.store = store;
        this.actions$ = actions$;
        this.mediaObserver = mediaObserver;
        this.oauthService = oauthService;
        this.window = window;
        this.quickpanelOpen = false;
        this.sidenavOpen = true;
        this.sidenavMode = 'side';
        this.isMobile = false;
    }
    ngOnInit() {
        this.crumbs$ = this.store.select(ngxs_router_plugin["d" /* RouterState */].state).pipe(Object(src["a" /* untilDestroy */])(this), Object(map["a" /* map */])(state => Array.from(state.breadcrumbs, ([key, value]) => ({ name: key, link: '/' + value }))));
        this.depth$ = this.store.select(ngxs_router_plugin["d" /* RouterState */].state).pipe(Object(map["a" /* map */])(state => state.data.depth));
        this.mediaObserver
            .asObservable()
            .pipe(Object(src["a" /* untilDestroy */])(this), Object(filter["a" /* filter */])((changes) => changes.length > 0), Object(map["a" /* map */])((changes) => changes[0]))
            .subscribe((change) => {
            const isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
            this.isMobile = isMobile;
            this.sidenavMode = isMobile ? 'over' : 'side';
            this.sidenavOpen = !isMobile;
        });
        this.router.events.pipe(Object(src["a" /* untilDestroy */])(this)).subscribe(event => {
            if (event instanceof fesm2015_router["f" /* NavigationEnd */] && this.isMobile) {
                this.sidenav.close();
            }
        });
        setTimeout(() => {
            this.window.dispatchEvent(new Event('resize'));
        }, 2000);
        // Disable WebSocket in mock mode
        if (environment["a" /* environment */].envName !== 'mock') {
            this.store.dispatch(new socketio_plugin_src["b" /* ConnectWebSocket */]({
                url: environment["a" /* environment */].WS_EVENT_BUS_URL,
                tokenFn: () => this.oauthService.getAccessToken(),
            }));
        }
    }
    ngOnDestroy() {
        this.store.dispatch(new socketio_plugin_src["c" /* DisconnectWebSocket */]());
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js + 4 modules
var angular_oauth2_oidc = __webpack_require__("cVWH");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/dashboard-layout/dashboard-layout.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */






























var styles_DashboardLayoutComponent = [styles];
var RenderType_DashboardLayoutComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_DashboardLayoutComponent, data: { "animation": [{ type: 7, name: "routeAnimation", definitions: [{ type: 1, expr: ":increment", animation: [{ type: 6, styles: { height: "!" }, offset: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: 0, left: 0, right: 0 }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, timings: "500ms ease-in-out" }], options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, timings: "500ms ease-in-out" }, options: { optional: true } }], options: null }], options: null }, { type: 1, expr: ":decrement", animation: [{ type: 6, styles: { height: "!" }, offset: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: 0, left: 0, right: 0 }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, timings: "500ms ease-in-out" }], options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, timings: "500ms ease-in-out" }, options: { optional: true } }], options: null }], options: null }], options: {} }] } });

function View_DashboardLayoutComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { sidenav: 0 }), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 25, "mat-sidenav-container", [["class", "dashboard-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, typings_index_ngfactory["j" /* View_MatSidenavContainer_0 */], typings_index_ngfactory["e" /* RenderType_MatSidenavContainer */])), core["Ab" /* ɵdid */](2, 1490944, null, 2, sidenav["f" /* MatSidenavContainer */], [[2, bidi["b" /* Directionality */]], core["m" /* ElementRef */], core["D" /* NgZone */], core["i" /* ChangeDetectorRef */], scrolling["j" /* ViewportRuler */], sidenav["a" /* MAT_DRAWER_DEFAULT_AUTOSIZE */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Tb" /* ɵqud */](603979776, 2, { _drawers: 1 }), core["Tb" /* ɵqud */](603979776, 3, { _content: 0 }), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 0, 3, "mat-sidenav", [["align", "end"], ["class", "quickpanel mat-drawer mat-sidenav"], ["mode", "over"], ["position", "end"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
            var ad = true;
            if (("component:@transform.start" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 6)._animationStartListener($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("component:@transform.done" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 6)._animationDoneListener($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, typings_index_ngfactory["l" /* View_MatSidenav_0 */], typings_index_ngfactory["d" /* RenderType_MatSidenav */])), core["Ab" /* ɵdid */](6, 3325952, [[2, 4], ["quickpanel", 4]], 0, sidenav["e" /* MatSidenav */], [core["m" /* ElementRef */], a11y["i" /* FocusTrapFactory */], a11y["h" /* FocusMonitor */], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, common["d" /* DOCUMENT */]]], { position: [0, "position"], mode: [1, "mode"], opened: [2, "opened"] }, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, 0, 1, "ngx-quickpanel", [], null, null, null, quickpanel_component_ngfactory["b" /* View_QuickpanelComponent_0 */], quickpanel_component_ngfactory["a" /* RenderType_QuickpanelComponent */])), core["Ab" /* ɵdid */](8, 114688, null, 0, quickpanel_component["a" /* QuickpanelComponent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 0, 4, "mat-sidenav", [["align", "start"], ["class", "sidenav mat-drawer mat-sidenav"], ["ngxIconSidenav", ""], ["role", "navigation"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0], [2, "icon-sidenav", null], [2, "collapsed", null]], [["component", "@transform.start"], ["component", "@transform.done"], [null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) {
            var ad = true;
            if (("component:@transform.start" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 10)._animationStartListener($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("component:@transform.done" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 10)._animationDoneListener($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("mouseenter" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 11).onMouseEnter() !== false);
                ad = (pd_2 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 11).onMouseLeave() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, typings_index_ngfactory["l" /* View_MatSidenav_0 */], typings_index_ngfactory["d" /* RenderType_MatSidenav */])), core["Ab" /* ɵdid */](10, 3325952, [[2, 4], [1, 4], ["sidenav", 4]], 0, sidenav["e" /* MatSidenav */], [core["m" /* ElementRef */], a11y["i" /* FocusTrapFactory */], a11y["h" /* FocusMonitor */], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, common["d" /* DOCUMENT */]]], { mode: [0, "mode"], opened: [1, "opened"] }, null), core["Ab" /* ɵdid */](11, 212992, null, 0, icon_sidenav_directive_IconSidenavDirective, [ngxs_store["j" /* Store */], menu_service["a" /* MenuService */], flex_layout_esm2015_core["g" /* MediaObserver */]], null, null), (_l()(), core["Bb" /* ɵeld */](12, 0, null, 0, 1, "ngx-sidenav", [], null, null, null, View_SidenavComponent_0, RenderType_SidenavComponent)), core["Ab" /* ɵdid */](13, 245760, null, 0, sidenav_component_SidenavComponent, [fesm2015_router["q" /* Router */], menu_service["a" /* MenuService */], snack_bar["b" /* MatSnackBar */], core["i" /* ChangeDetectorRef */], window_token["a" /* WINDOW */]], null, null), (_l()(), core["Bb" /* ɵeld */](14, 0, null, 1, 12, "mat-sidenav-content", [["class", "content-container mat-drawer-content mat-sidenav-content"], ["fxLayout", "column"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, typings_index_ngfactory["k" /* View_MatSidenavContent_0 */], typings_index_ngfactory["f" /* RenderType_MatSidenavContent */])), core["Ab" /* ɵdid */](15, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), core["Ab" /* ɵdid */](16, 1294336, [[3, 4]], 0, sidenav["g" /* MatSidenavContent */], [core["i" /* ChangeDetectorRef */], sidenav["f" /* MatSidenavContainer */], core["m" /* ElementRef */], scrolling["f" /* ScrollDispatcher */], core["D" /* NgZone */]], null, null), (_l()(), core["Bb" /* ɵeld */](17, 0, null, 0, 1, "ngx-toolbar", [], null, null, null, toolbar_component_ngfactory["b" /* View_ToolbarComponent_0 */], toolbar_component_ngfactory["a" /* RenderType_ToolbarComponent */])), core["Ab" /* ɵdid */](18, 114688, null, 0, toolbar_component["a" /* ToolbarComponent */], [], { quickpanel: [0, "quickpanel"], sidenav: [1, "sidenav"] }, null), (_l()(), core["Bb" /* ɵeld */](19, 0, null, 0, 7, "perfect-scrollbar", [], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, ngx_perfect_scrollbar_ngfactory["b" /* View_PerfectScrollbarComponent_0 */], ngx_perfect_scrollbar_ngfactory["a" /* RenderType_PerfectScrollbarComponent */])), core["Ab" /* ɵdid */](20, 507904, null, 0, ngx_perfect_scrollbar_es5["b" /* PerfectScrollbarComponent */], [core["D" /* NgZone */], core["i" /* ChangeDetectorRef */], core["F" /* PLATFORM_ID */]], null, null), (_l()(), core["Bb" /* ɵeld */](21, 0, null, 0, 5, "div", [["class", "route-container"]], [[24, "@routeAnimation", 0]], null, null, null, null)), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](23, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["Ab" /* ɵdid */](24, 212992, null, 0, fesm2015_router["v" /* RouterOutlet */], [fesm2015_router["b" /* ChildrenOutletContexts */], core["V" /* ViewContainerRef */], core["k" /* ComponentFactoryResolver */], [8, null], core["i" /* ChangeDetectorRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](25, 0, null, null, 1, "ngx-chat-box", [], null, null, null, View_ChatBoxComponent_0, RenderType_ChatBoxComponent)), core["Ab" /* ɵdid */](26, 245760, null, 0, chat_box_component_ChatBoxComponent, [ngxs_store["j" /* Store */]], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_10 = "end"; var currVal_11 = "over"; var currVal_12 = _co.quickpanelOpen; _ck(_v, 6, 0, currVal_10, currVal_11, currVal_12); _ck(_v, 8, 0); var currVal_24 = _co.sidenavMode; var currVal_25 = _co.sidenavOpen; _ck(_v, 10, 0, currVal_24, currVal_25); _ck(_v, 11, 0); _ck(_v, 13, 0); var currVal_28 = "column"; _ck(_v, 15, 0, currVal_28); _ck(_v, 16, 0); var currVal_29 = core["Nb" /* ɵnov */](_v, 6); var currVal_30 = core["Nb" /* ɵnov */](_v, 10); _ck(_v, 18, 0, currVal_29, currVal_30); _ck(_v, 20, 0); _ck(_v, 24, 0); _ck(_v, 26, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Nb" /* ɵnov */](_v, 2)._backdropOverride; _ck(_v, 1, 0, currVal_0); var currVal_1 = null; var currVal_2 = (core["Nb" /* ɵnov */](_v, 6).position === "end"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 6).mode === "over"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 6).mode === "push"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 6).mode === "side"); var currVal_6 = core["Nb" /* ɵnov */](_v, 6).fixedInViewport; var currVal_7 = (core["Nb" /* ɵnov */](_v, 6).fixedInViewport ? core["Nb" /* ɵnov */](_v, 6).fixedTopGap : null); var currVal_8 = (core["Nb" /* ɵnov */](_v, 6).fixedInViewport ? core["Nb" /* ɵnov */](_v, 6).fixedBottomGap : null); var currVal_9 = core["Nb" /* ɵnov */](_v, 6)._animationState; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = null; var currVal_14 = (core["Nb" /* ɵnov */](_v, 10).position === "end"); var currVal_15 = (core["Nb" /* ɵnov */](_v, 10).mode === "over"); var currVal_16 = (core["Nb" /* ɵnov */](_v, 10).mode === "push"); var currVal_17 = (core["Nb" /* ɵnov */](_v, 10).mode === "side"); var currVal_18 = core["Nb" /* ɵnov */](_v, 10).fixedInViewport; var currVal_19 = (core["Nb" /* ɵnov */](_v, 10).fixedInViewport ? core["Nb" /* ɵnov */](_v, 10).fixedTopGap : null); var currVal_20 = (core["Nb" /* ɵnov */](_v, 10).fixedInViewport ? core["Nb" /* ɵnov */](_v, 10).fixedBottomGap : null); var currVal_21 = core["Nb" /* ɵnov */](_v, 10)._animationState; var currVal_22 = core["Nb" /* ɵnov */](_v, 11).isIconSidenav; var currVal_23 = core["Nb" /* ɵnov */](_v, 11).collapsed; _ck(_v, 9, 1, [currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]); var currVal_26 = core["Nb" /* ɵnov */](_v, 16)._container._contentMargins.left; var currVal_27 = core["Nb" /* ɵnov */](_v, 16)._container._contentMargins.right; _ck(_v, 14, 0, currVal_26, currVal_27); var currVal_31 = core["Nb" /* ɵnov */](_v, 20).autoPropagation; var currVal_32 = core["Nb" /* ɵnov */](_v, 20).scrollIndicators; _ck(_v, 19, 0, currVal_31, currVal_32); var currVal_33 = core["Wb" /* ɵunv */](_v, 21, 0, core["Nb" /* ɵnov */](_v, 22).transform(_co.depth$)); _ck(_v, 21, 0, currVal_33); });
}
function View_DashboardLayoutComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-dashboard-layout", [], null, null, null, View_DashboardLayoutComponent_0, RenderType_DashboardLayoutComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, dashboard_layout_component_DashboardLayoutComponent, [fesm2015_router["q" /* Router */], ngxs_store["j" /* Store */], ngxs_store["b" /* Actions */], flex_layout_esm2015_core["g" /* MediaObserver */], angular_oauth2_oidc["i" /* OAuthService */], window_token["a" /* WINDOW */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardLayoutComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-dashboard-layout", dashboard_layout_component_DashboardLayoutComponent, View_DashboardLayoutComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/overview/overview.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var overview_component_scss_shim_ngstyle_styles = ["[_nghost-%COMP%]{display:block;padding:1.5%;position:relative}"];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/breadcrumbs/src/lib/breadcrumbs.component.ngfactory.js + 1 modules
var breadcrumbs_component_ngfactory = __webpack_require__("qv2O");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/breadcrumbs/src/lib/breadcrumbs.component.ts
var breadcrumbs_component = __webpack_require__("AxBZ");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/overview/overview.component.ts
class OverviewComponent {
    constructor() {
        this.crumbs = [{ name: 'Dashboard', link: '/dashboard' }];
    }
    ngOnInit() { }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/overview/overview.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */













var styles_OverviewComponent = [overview_component_scss_shim_ngstyle_styles];
var RenderType_OverviewComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_OverviewComponent, data: {} });

function View_OverviewComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-breadcrumbs", [["title", "Overview"]], null, null, null, breadcrumbs_component_ngfactory["b" /* View_BreadcrumbsComponent_0 */], breadcrumbs_component_ngfactory["a" /* RenderType_BreadcrumbsComponent */])), core["Ab" /* ɵdid */](1, 114688, null, 0, breadcrumbs_component["a" /* BreadcrumbsComponent */], [], { title: [0, "title"], crumbs: [1, "crumbs"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 72, "div", [["fxLayout", "row wrap"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "32px grid"]], null, null, null, null, null)), core["Ab" /* ɵdid */](3, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"], "fxLayout.lt-sm": [1, "fxLayout.lt-sm"] }, null), core["Ab" /* ɵdid */](4, 1720320, null, 0, flex["f" /* DefaultLayoutGapDirective */], [core["m" /* ElementRef */], core["D" /* NgZone */], bidi["b" /* Directionality */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["n" /* LayoutGapStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), (_l()(), core["Bb" /* ɵeld */](5, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](6, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](8, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 0, 2, "a", [["routerLink", "/dashboard/grid/grid-list"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](10, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Grid List"])), (_l()(), core["Bb" /* ɵeld */](12, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](13, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](14, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](15, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](16, 0, null, 0, 2, "a", [["routerLink", "/dashboard/grid/crud-table"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](17, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["CRUD Table"])), (_l()(), core["Bb" /* ɵeld */](19, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](20, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](21, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](22, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](23, 0, null, 0, 2, "a", [["routerLink", "/dashboard/experiments/layout"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](24, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Layout"])), (_l()(), core["Bb" /* ɵeld */](26, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](27, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](28, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](29, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](30, 0, null, 0, 2, "a", [["routerLink", "/dashboard/experiments/animations"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](31, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Animations"])), (_l()(), core["Bb" /* ɵeld */](33, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](34, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](35, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](36, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](37, 0, null, 0, 2, "a", [["routerLink", "/dashboard/experiments/viewport"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 38).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](38, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Viewport"])), (_l()(), core["Bb" /* ɵeld */](40, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](41, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](42, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](43, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](44, 0, null, 0, 2, "a", [["routerLink", "/dashboard/experiments/knob"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 45).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](45, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Knob"])), (_l()(), core["Bb" /* ɵeld */](47, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](48, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](49, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](50, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](51, 0, null, 0, 2, "a", [["routerLink", "/dashboard/experiments/clap"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 52).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](52, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Micro Interactions"])), (_l()(), core["Bb" /* ɵeld */](54, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](55, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](56, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](57, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](58, 0, null, 0, 2, "a", [["routerLink", "/dashboard/widgets"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 59).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](59, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Widgets"])), (_l()(), core["Bb" /* ɵeld */](61, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](62, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](63, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](64, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](65, 0, null, 0, 2, "a", [["routerLink", "/dashboard/settings"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 66).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](66, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Settings"])), (_l()(), core["Bb" /* ɵeld */](68, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](69, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](70, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](71, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](72, 0, null, 0, 2, "a", [["routerLink", "/dashboard/experiments/dashing"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 73).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](73, 671744, null, 0, fesm2015_router["t" /* RouterLinkWithHref */], [fesm2015_router["q" /* Router */], fesm2015_router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Dashing"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Overview"; var currVal_1 = _co.crumbs; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "row wrap"; var currVal_3 = "column"; _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = "32px grid"; _ck(_v, 4, 0, currVal_4); var currVal_5 = "0 1 calc(33.3% - 32px)"; var currVal_6 = "100%"; var currVal_7 = "0 1 calc(50% - 32px)"; _ck(_v, 6, 0, currVal_5, currVal_6, currVal_7); var currVal_11 = "/dashboard/grid/grid-list"; _ck(_v, 10, 0, currVal_11); var currVal_12 = "0 1 calc(33.3% - 32px)"; var currVal_13 = "100%"; var currVal_14 = "0 1 calc(50% - 32px)"; _ck(_v, 13, 0, currVal_12, currVal_13, currVal_14); var currVal_18 = "/dashboard/grid/crud-table"; _ck(_v, 17, 0, currVal_18); var currVal_19 = "0 1 calc(33.3% - 32px)"; var currVal_20 = "100%"; var currVal_21 = "0 1 calc(50% - 32px)"; _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21); var currVal_25 = "/dashboard/experiments/layout"; _ck(_v, 24, 0, currVal_25); var currVal_26 = "0 1 calc(33.3% - 32px)"; var currVal_27 = "100%"; var currVal_28 = "0 1 calc(50% - 32px)"; _ck(_v, 27, 0, currVal_26, currVal_27, currVal_28); var currVal_32 = "/dashboard/experiments/animations"; _ck(_v, 31, 0, currVal_32); var currVal_33 = "0 1 calc(33.3% - 32px)"; var currVal_34 = "100%"; var currVal_35 = "0 1 calc(50% - 32px)"; _ck(_v, 34, 0, currVal_33, currVal_34, currVal_35); var currVal_39 = "/dashboard/experiments/viewport"; _ck(_v, 38, 0, currVal_39); var currVal_40 = "0 1 calc(33.3% - 32px)"; var currVal_41 = "100%"; var currVal_42 = "0 1 calc(50% - 32px)"; _ck(_v, 41, 0, currVal_40, currVal_41, currVal_42); var currVal_46 = "/dashboard/experiments/knob"; _ck(_v, 45, 0, currVal_46); var currVal_47 = "0 1 calc(33.3% - 32px)"; var currVal_48 = "100%"; var currVal_49 = "0 1 calc(50% - 32px)"; _ck(_v, 48, 0, currVal_47, currVal_48, currVal_49); var currVal_53 = "/dashboard/experiments/clap"; _ck(_v, 52, 0, currVal_53); var currVal_54 = "0 1 calc(33.3% - 32px)"; var currVal_55 = "100%"; var currVal_56 = "0 1 calc(50% - 32px)"; _ck(_v, 55, 0, currVal_54, currVal_55, currVal_56); var currVal_60 = "/dashboard/widgets"; _ck(_v, 59, 0, currVal_60); var currVal_61 = "0 1 calc(33.3% - 32px)"; var currVal_62 = "100%"; var currVal_63 = "0 1 calc(50% - 32px)"; _ck(_v, 62, 0, currVal_61, currVal_62, currVal_63); var currVal_67 = "/dashboard/settings"; _ck(_v, 66, 0, currVal_67); var currVal_68 = "0 1 calc(33.3% - 32px)"; var currVal_69 = "100%"; var currVal_70 = "0 1 calc(50% - 32px)"; _ck(_v, 69, 0, currVal_68, currVal_69, currVal_70); var currVal_74 = "/dashboard/experiments/dashing"; _ck(_v, 73, 0, currVal_74); }, function (_ck, _v) { var currVal_8 = (core["Nb" /* ɵnov */](_v, 8)._animationMode === "NoopAnimations"); _ck(_v, 7, 0, currVal_8); var currVal_9 = core["Nb" /* ɵnov */](_v, 10).target; var currVal_10 = core["Nb" /* ɵnov */](_v, 10).href; _ck(_v, 9, 0, currVal_9, currVal_10); var currVal_15 = (core["Nb" /* ɵnov */](_v, 15)._animationMode === "NoopAnimations"); _ck(_v, 14, 0, currVal_15); var currVal_16 = core["Nb" /* ɵnov */](_v, 17).target; var currVal_17 = core["Nb" /* ɵnov */](_v, 17).href; _ck(_v, 16, 0, currVal_16, currVal_17); var currVal_22 = (core["Nb" /* ɵnov */](_v, 22)._animationMode === "NoopAnimations"); _ck(_v, 21, 0, currVal_22); var currVal_23 = core["Nb" /* ɵnov */](_v, 24).target; var currVal_24 = core["Nb" /* ɵnov */](_v, 24).href; _ck(_v, 23, 0, currVal_23, currVal_24); var currVal_29 = (core["Nb" /* ɵnov */](_v, 29)._animationMode === "NoopAnimations"); _ck(_v, 28, 0, currVal_29); var currVal_30 = core["Nb" /* ɵnov */](_v, 31).target; var currVal_31 = core["Nb" /* ɵnov */](_v, 31).href; _ck(_v, 30, 0, currVal_30, currVal_31); var currVal_36 = (core["Nb" /* ɵnov */](_v, 36)._animationMode === "NoopAnimations"); _ck(_v, 35, 0, currVal_36); var currVal_37 = core["Nb" /* ɵnov */](_v, 38).target; var currVal_38 = core["Nb" /* ɵnov */](_v, 38).href; _ck(_v, 37, 0, currVal_37, currVal_38); var currVal_43 = (core["Nb" /* ɵnov */](_v, 43)._animationMode === "NoopAnimations"); _ck(_v, 42, 0, currVal_43); var currVal_44 = core["Nb" /* ɵnov */](_v, 45).target; var currVal_45 = core["Nb" /* ɵnov */](_v, 45).href; _ck(_v, 44, 0, currVal_44, currVal_45); var currVal_50 = (core["Nb" /* ɵnov */](_v, 50)._animationMode === "NoopAnimations"); _ck(_v, 49, 0, currVal_50); var currVal_51 = core["Nb" /* ɵnov */](_v, 52).target; var currVal_52 = core["Nb" /* ɵnov */](_v, 52).href; _ck(_v, 51, 0, currVal_51, currVal_52); var currVal_57 = (core["Nb" /* ɵnov */](_v, 57)._animationMode === "NoopAnimations"); _ck(_v, 56, 0, currVal_57); var currVal_58 = core["Nb" /* ɵnov */](_v, 59).target; var currVal_59 = core["Nb" /* ɵnov */](_v, 59).href; _ck(_v, 58, 0, currVal_58, currVal_59); var currVal_64 = (core["Nb" /* ɵnov */](_v, 64)._animationMode === "NoopAnimations"); _ck(_v, 63, 0, currVal_64); var currVal_65 = core["Nb" /* ɵnov */](_v, 66).target; var currVal_66 = core["Nb" /* ɵnov */](_v, 66).href; _ck(_v, 65, 0, currVal_65, currVal_66); var currVal_71 = (core["Nb" /* ɵnov */](_v, 71)._animationMode === "NoopAnimations"); _ck(_v, 70, 0, currVal_71); var currVal_72 = core["Nb" /* ɵnov */](_v, 73).target; var currVal_73 = core["Nb" /* ɵnov */](_v, 73).href; _ck(_v, 72, 0, currVal_72, currVal_73); });
}
function View_OverviewComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-overview", [], null, null, null, View_OverviewComponent_0, RenderType_OverviewComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, OverviewComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OverviewComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-overview", OverviewComponent, View_OverviewComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/profile/profile.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var profile_component_scss_shim_ngstyle_styles = ["[_nghost-%COMP%]{display:block;padding:1.5%;position:relative}"];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/components/app-profile/app-profile.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var app_profile_component_scss_shim_ngstyle_styles = [".thick[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     .filepond--drop-label{color:#4c4e53}[_nghost-%COMP%]     .filepond--label-action{-webkit-text-decoration-color:#babdc0;text-decoration-color:#babdc0}[_nghost-%COMP%]     .filepond--panel-root{background-color:#edf0f4}[_nghost-%COMP%]     .filepond--root{width:170px;margin:0 auto}"];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/mask/mask-helper.ts
const MASK_FLAGS = ['C', '&', 'a', 'A', '?', 'L', '9', '0', '#'];
const KEYS = {
    Ctrl: 17,
    Z: 90,
    Y: 89,
    X: 88,
    BACKSPACE: 8,
    DELETE: 46,
};
class MaskHelper {
    get cursor() {
        return this.cursorPrivate;
    }
    parseValueByMask(value, maskOptions, cursor) {
        let inputValue = value;
        const mask = maskOptions.format;
        const literals = this.getMaskLiterals(mask);
        const literalKeys = Array.from(literals.keys());
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        if (inputValue.length < mask.length) {
            // BACKSPACE, DELETE
            if (inputValue === '' && cursor === -1) {
                this.cursorPrivate = 0;
                return this.parseValueByMaskOnInit(value, maskOptions);
            } // workaround for IE 'x' button
            if (nonLiteralIndeces.indexOf(cursor + 1) !== -1) {
                inputValue = this.insertCharAt(inputValue, cursor + 1, maskOptions.promptChar);
                this.cursorPrivate = cursor + 1;
            }
            else {
                inputValue = this.insertCharAt(inputValue, cursor + 1, mask[cursor + 1]);
                this.cursorPrivate = cursor + 1;
                for (let i = this.cursorPrivate; i < 0; i--) {
                    if (literalKeys.indexOf(this.cursorPrivate) !== -1) {
                        this.cursorPrivate--;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        else {
            const char = inputValue[cursor];
            let isCharValid = this.validateCharOnPostion(char, cursor, mask);
            if (nonLiteralIndeces.indexOf(cursor) !== -1) {
                inputValue = this.replaceCharAt(inputValue, cursor, '');
                if (isCharValid) {
                    inputValue = this.replaceCharAt(inputValue, cursor, char);
                    this.cursorPrivate = cursor + 1;
                }
                else {
                    this.cursorPrivate = cursor;
                }
            }
            else {
                inputValue = this.replaceCharAt(inputValue, cursor, '');
                this.cursorPrivate = ++cursor;
                for (let i = cursor; i < mask.length; i++) {
                    if (literalKeys.indexOf(this.cursorPrivate) !== -1) {
                        this.cursorPrivate = ++cursor;
                    }
                    else {
                        isCharValid = this.validateCharOnPostion(char, cursor, mask);
                        if (isCharValid) {
                            inputValue = this.replaceCharAt(inputValue, cursor, char);
                            this.cursorPrivate = ++cursor;
                            break;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        return inputValue;
    }
    parseMask(maskOptions) {
        let outputVal = '';
        const mask = maskOptions.format;
        const literals = this.getMaskLiterals(mask);
        for (const maskSym of mask) {
            outputVal += maskOptions.promptChar;
        }
        literals.forEach((val, key) => {
            outputVal = this.replaceCharAt(outputVal, key, val);
        });
        return outputVal;
    }
    parseValueByMaskOnInit(inputVal, maskOptions) {
        let outputVal = '';
        let value = '';
        const mask = maskOptions.format;
        const literals = this.getMaskLiterals(mask);
        const literalKeys = Array.from(literals.keys());
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        const literalValues = Array.from(literals.values());
        if (inputVal != null) {
            value = inputVal.toString();
        }
        for (const maskSym of mask) {
            outputVal += maskOptions.promptChar;
        }
        literals.forEach((val, key) => {
            outputVal = this.replaceCharAt(outputVal, key, val);
        });
        if (!value) {
            return outputVal;
        }
        const nonLiteralValues = this.getNonLiteralValues(value, literalValues);
        for (let i = 0; i < nonLiteralValues.length; i++) {
            const char = nonLiteralValues[i];
            const isCharValid = this.validateCharOnPostion(char, nonLiteralIndeces[i], mask);
            if (!isCharValid && char !== maskOptions.promptChar) {
                nonLiteralValues[i] = maskOptions.promptChar;
            }
        }
        if (nonLiteralValues.length > nonLiteralIndeces.length) {
            nonLiteralValues.splice(nonLiteralIndeces.length);
        }
        let pos = 0;
        for (const nonLiteralValue of nonLiteralValues) {
            const char = nonLiteralValue;
            outputVal = this.replaceCharAt(outputVal, nonLiteralIndeces[pos++], char);
        }
        return outputVal;
    }
    restoreValueFromMask(value, maskOptions) {
        let outputVal = '';
        const mask = maskOptions.format;
        const literals = this.getMaskLiterals(mask);
        const literalValues = Array.from(literals.values());
        for (const val of value) {
            if (literalValues.indexOf(val) === -1) {
                if (val !== maskOptions.promptChar) {
                    outputVal += val;
                }
            }
        }
        return outputVal;
    }
    parseValueByMaskUponSelection(value, maskOptions, cursor, selection) {
        let isCharValid;
        let inputValue = value;
        const char = inputValue[cursor];
        const mask = maskOptions.format;
        const literals = this.getMaskLiterals(mask);
        const literalKeys = Array.from(literals.keys());
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        if (!this.data) {
            this.cursorPrivate = cursor < 0 ? ++cursor : cursor;
            if (nonLiteralIndeces.indexOf(this.cursorPrivate) !== -1) {
                isCharValid = this.validateCharOnPostion(char, this.cursorPrivate, mask);
                inputValue = isCharValid
                    ? this.replaceCharAt(inputValue, this.cursorPrivate++, char)
                    : (inputValue = this.replaceCharAt(inputValue, this.cursorPrivate++, maskOptions.promptChar));
                selection--;
                if (selection > 0) {
                    for (let i = 0; i < selection; i++) {
                        cursor++;
                        inputValue =
                            nonLiteralIndeces.indexOf(cursor) !== -1
                                ? this.insertCharAt(inputValue, cursor, maskOptions.promptChar)
                                : this.insertCharAt(inputValue, cursor, mask[cursor]);
                    }
                }
            }
            else {
                inputValue = this.replaceCharAt(inputValue, this.cursorPrivate, mask[this.cursorPrivate]);
                this.cursorPrivate++;
                selection--;
                let isMarked = false;
                if (selection > 0) {
                    cursor = this.cursorPrivate;
                    for (let i = 0; i < selection; i++) {
                        if (nonLiteralIndeces.indexOf(cursor) !== -1) {
                            isCharValid = this.validateCharOnPostion(char, cursor, mask);
                            if (isCharValid && !isMarked) {
                                inputValue = this.insertCharAt(inputValue, cursor, char);
                                cursor++;
                                this.cursorPrivate++;
                                isMarked = true;
                            }
                            else {
                                inputValue = this.insertCharAt(inputValue, cursor, maskOptions.promptChar);
                                cursor++;
                            }
                        }
                        else {
                            inputValue = this.insertCharAt(inputValue, cursor, mask[cursor]);
                            if (cursor === this.cursorPrivate) {
                                this.cursorPrivate++;
                            }
                            cursor++;
                        }
                    }
                }
            }
        }
        else {
            if (inputValue === '' && cursor === -1) {
                this.cursorPrivate = 0;
                return this.parseValueByMaskOnInit(value, maskOptions);
            } // workaround for IE 'x' button
            if (this.cursorPrivate < 0) {
                this.cursorPrivate++;
                cursor++;
            }
            cursor++;
            this.cursorPrivate = cursor;
            for (let i = 0; i < selection; i++) {
                if (nonLiteralIndeces.indexOf(cursor) !== -1) {
                    inputValue = this.insertCharAt(inputValue, cursor, maskOptions.promptChar);
                    cursor++;
                }
                else {
                    inputValue = this.insertCharAt(inputValue, cursor, mask[cursor]);
                    cursor++;
                }
            }
        }
        return inputValue;
    }
    parseValueByMaskUponCopyPaste(value, maskOptions, cursor, clipboardData, selection) {
        let inputValue = value;
        const mask = maskOptions.format;
        const literals = this.getMaskLiterals(mask);
        const literalKeys = Array.from(literals.keys());
        const nonLiteralIndeces = this.getNonLiteralIndeces(mask, literalKeys);
        const selectionEnd = cursor + selection;
        this.cursorPrivate = cursor;
        for (const clipboardSym of clipboardData) {
            const char = clipboardSym;
            if (this.cursorPrivate > mask.length) {
                return inputValue;
            }
            if (nonLiteralIndeces.indexOf(this.cursorPrivate) !== -1) {
                const isCharValid = this.validateCharOnPostion(char, this.cursorPrivate, mask);
                if (isCharValid) {
                    inputValue = this.replaceCharAt(inputValue, this.cursorPrivate++, char);
                }
            }
            else {
                for (let i = cursor; i < mask.length; i++) {
                    if (literalKeys.indexOf(this.cursorPrivate) !== -1) {
                        this.cursorPrivate++;
                    }
                    else {
                        const isCharValid = this.validateCharOnPostion(char, this.cursorPrivate, mask);
                        if (isCharValid) {
                            inputValue = this.replaceCharAt(inputValue, this.cursorPrivate++, char);
                        }
                        break;
                    }
                }
            }
            selection--;
        }
        if (selection > 0) {
            for (let i = this.cursorPrivate; i < selectionEnd; i++) {
                if (literalKeys.indexOf(this.cursorPrivate) !== -1) {
                    this.cursorPrivate++;
                }
                else {
                    inputValue = this.replaceCharAt(inputValue, this.cursorPrivate++, maskOptions.promptChar);
                }
            }
        }
        return inputValue;
    }
    validateCharOnPostion(inputChar, position, mask) {
        let regex;
        let isValid;
        const letterOrDigitRegEx = '[\\d\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z]';
        const letterDigitOrSpaceRegEx = '[\\d\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z\\u0020]';
        const letterRegEx = '[\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z]';
        const letteSpaceRegEx = '[\\u00C0-\\u1FFF\\u2C00-\\uD7FFa-zA-Z\\u0020]';
        const digitRegEx = '[\\d]';
        const digitSpaceRegEx = '[\\d\\u0020]';
        const digitSpecialRegEx = '[\\d-\\+]';
        switch (mask.charAt(position)) {
            case 'C':
                isValid = inputChar !== '';
                break;
            case '&':
                regex = new RegExp('[\\u0020]');
                isValid = !regex.test(inputChar);
                break;
            case 'a':
                regex = new RegExp(letterDigitOrSpaceRegEx);
                isValid = regex.test(inputChar);
                break;
            case 'A':
                regex = new RegExp(letterOrDigitRegEx);
                isValid = regex.test(inputChar);
                break;
            case '?':
                regex = new RegExp(letteSpaceRegEx);
                isValid = regex.test(inputChar);
                break;
            case 'L':
                regex = new RegExp(letterRegEx);
                isValid = regex.test(inputChar);
                break;
            case '0':
                regex = new RegExp(digitRegEx);
                isValid = regex.test(inputChar);
                break;
            case '9':
                regex = new RegExp(digitSpaceRegEx);
                isValid = regex.test(inputChar);
                break;
            case '#':
                regex = new RegExp(digitSpecialRegEx);
                isValid = regex.test(inputChar);
                break;
            default: {
                isValid = null;
            }
        }
        return isValid;
    }
    replaceCharAt(strValue, index, char) {
        if (strValue !== undefined) {
            return strValue.substring(0, index) + char + strValue.substring(index + 1);
        }
    }
    insertCharAt(strValue, index, char) {
        if (strValue !== undefined) {
            return strValue.substring(0, index) + char + strValue.substring(index);
        }
    }
    getMaskLiterals(mask) {
        const literals = new Map();
        for (let i = 0; i < mask.length; i++) {
            const char = mask.charAt(i);
            if (MASK_FLAGS.indexOf(char) === -1) {
                literals.set(i, char);
            }
        }
        return literals;
    }
    getNonLiteralIndeces(mask, literalKeys) {
        const nonLiteralsIndeces = new Array();
        for (let i = 0; i < mask.length; i++) {
            if (literalKeys.indexOf(i) === -1) {
                nonLiteralsIndeces.push(i);
            }
        }
        return nonLiteralsIndeces;
    }
    getNonLiteralValues(value, literalValues) {
        const nonLiteralValues = new Array();
        for (const val of value) {
            if (literalValues.indexOf(val) === -1) {
                nonLiteralValues.push(val);
            }
        }
        return nonLiteralValues;
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/mask/mask.directive.ts


function isIE() {
    return navigator.appVersion.indexOf('Trident/') > 0;
}
const noop = () => { };
const mask_directive_0 = noop;
class mask_directive_MaskDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.valueChange = new core["o" /* EventEmitter */]();
        this.maskOptions = {
            format: '',
            promptChar: '',
        };
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.maskHelper = new MaskHelper();
    }
    get value() {
        return this.nativeElement.value;
    }
    set value(val) {
        this.nativeElement.value = val;
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    get selectionStart() {
        return this.nativeElement.selectionStart;
    }
    get selectionEnd() {
        return this.nativeElement.selectionEnd;
    }
    ngOnInit() {
        if (this.promptChar && this.promptChar.length > 1) {
            this.maskOptions.promptChar = this.promptChar = this.promptChar.substring(0, 1);
        }
        this.maskOptions.format = this.mask ? this.mask : 'CCCCCCCCCC';
        this.maskOptions.promptChar = this.promptChar ? this.promptChar : '_';
        this.nativeElement.setAttribute('placeholder', this.placeholder ? this.placeholder : this.maskOptions.format);
    }
    onKeydown(event) {
        const key = event.keyCode || event.charCode;
        if (isIE() && this.stopPropagation) {
            this.stopPropagation = false;
        }
        if (key === KEYS.Ctrl) {
            this.ctrlDown = true;
        }
        if ((this.ctrlDown && key === KEYS.Z) || (this.ctrlDown && key === KEYS.Y)) {
            event.preventDefault();
        }
        this.key = key;
        this.selection = Math.abs(this.selectionEnd - this.selectionStart);
    }
    onKeyup(event) {
        const key = event.keyCode || event.charCode;
        if (key === KEYS.Ctrl) {
            this.ctrlDown = false;
        }
    }
    onPaste(event) {
        this.paste = true;
        this.valOnPaste = this.value;
        this.cursorOnPaste = this.getCursorPosition();
    }
    onInputChanged(event) {
        if (isIE() && this.stopPropagation) {
            this.stopPropagation = false;
            return;
        }
        if (this.paste) {
            this.paste = false;
            const clipboardData = this.value.substring(this.cursorOnPaste, this.getCursorPosition());
            this.value = this.maskHelper.parseValueByMaskUponCopyPaste(this.valOnPaste, this.maskOptions, this.cursorOnPaste, clipboardData, this.selection);
            this.setCursorPosition(this.maskHelper.cursor);
        }
        else {
            const currentCursorPos = this.getCursorPosition();
            this.maskHelper.data = this.key === KEYS.BACKSPACE || this.key === KEYS.DELETE;
            this.value =
                this.selection && this.selection !== 0
                    ? this.maskHelper.parseValueByMaskUponSelection(this.value, this.maskOptions, currentCursorPos - 1, this.selection)
                    : this.maskHelper.parseValueByMask(this.value, this.maskOptions, currentCursorPos - 1);
            this.setCursorPosition(this.maskHelper.cursor);
        }
        const rawVal = this.maskHelper.restoreValueFromMask(this.value, this.maskOptions);
        this.dataValue = this.includeLiterals ? this.value : rawVal;
        this.onChangeCallback(this.dataValue);
        this.valueChange.emit({ rawValue: rawVal, formattedValue: this.value });
    }
    onFocus(value) {
        if (this.focusedValuePipe) {
            if (isIE()) {
                this.stopPropagation = true;
            }
            this.value = this.focusedValuePipe.transform(value);
        }
        else {
            this.value = this.maskHelper.parseValueByMaskOnInit(this.value, this.maskOptions);
        }
    }
    onBlur(value) {
        if (this.displayValuePipe) {
            this.value = this.displayValuePipe.transform(value);
        }
        else if (value === this.maskHelper.parseMask(this.maskOptions)) {
            this.value = '';
        }
    }
    getCursorPosition() {
        return this.nativeElement.selectionStart;
    }
    setCursorPosition(start, end = start) {
        this.nativeElement.setSelectionRange(start, end);
    }
    writeValue(value) {
        if (this.promptChar && this.promptChar.length > 1) {
            this.maskOptions.promptChar = this.promptChar.substring(0, 1);
        }
        this.value = value ? this.maskHelper.parseValueByMaskOnInit(value, this.maskOptions) : '';
        if (this.displayValuePipe) {
            this.value = this.displayValuePipe.transform(this.value);
        }
        this.dataValue = this.includeLiterals ? this.value : value;
        this.onChangeCallback(this.dataValue);
        this.valueChange.emit({ rawValue: value, formattedValue: this.value });
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-filepond/ngx-filepond.ngfactory.js
var ngx_filepond_ngfactory = __webpack_require__("AxDC");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/date-fns/format-time-in-words.pipe.ts + 4 modules
var format_time_in_words_pipe = __webpack_require__("GJk9");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/lib/gender.enum.ts
var Gender = /*@__PURE__*/ (function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["UNKNOW"] = "unknow";
    return Gender;
})({});


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/lib/image-type.enum.ts
var ImageType = /*@__PURE__*/ (function (ImageType) {
    ImageType["Profile"] = "profile";
    ImageType["Icon"] = "icon";
    ImageType["Avatar"] = "avatar";
    return ImageType;
})({});


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/lib/account-source-type.enum.ts
var AccountSourceType = /*@__PURE__*/ (function (AccountSourceType) {
    AccountSourceType[AccountSourceType["bsId"] = 0] = "bsId";
    AccountSourceType[AccountSourceType["hsId"] = 1] = "hsId";
    AccountSourceType[AccountSourceType["gitHub"] = 2] = "gitHub";
    return AccountSourceType;
})({});


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/lib/zone-type.enum.ts
var ZoneType = /*@__PURE__*/ (function (ZoneType) {
    ZoneType["DMZ"] = "DMZ";
    ZoneType["Core"] = "Core";
    return ZoneType;
})({});


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/lib/environment-type.enum.ts
var EnvironmentType = /*@__PURE__*/ (function (EnvironmentType) {
    EnvironmentType["Prod"] = "Prod";
    EnvironmentType["NonProd"] = "NonProd";
    return EnvironmentType;
})({});


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/lib/membership.model.ts
var RoleType = /*@__PURE__*/ (function (RoleType) {
    RoleType["Admin"] = "Admin";
    RoleType["Developer"] = "Developer";
    return RoleType;
})({});
var MembershipType = /*@__PURE__*/ (function (MembershipType) {
    MembershipType["User"] = "User";
    MembershipType["Group"] = "Group";
    return MembershipType;
})({});


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/models/src/index.ts








// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/components/app-profile/app-profile.component.ts

// TODO: https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03
class app_profile_component_AppProfileComponent {
    constructor(fb, cd, sanitizer) {
        this.fb = fb;
        this.cd = cd;
        this.sanitizer = sanitizer;
        this.genderOptions = Gender;
        this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/avatars/noavatar.png');
        this.editing = false;
        this.hasAvatar = true;
        this.files = [];
        // files = [
        //   {
        //     source: '12345',
        //     options: {
        //       type: 'limbo', // `local` or `limbo`
        //     },
        //   },
        // ];
        this.server = {
            timeout: 7000,
            fetch: (url, load, error, progress, abort, headers) => { },
            restore: (uniqueFileId, load, error, progress, abort, headers) => { },
            load: (source, load, error, progress, abort, headers) => {
                fetch(`data:${this.appProfile.avatar.mimeType};base64,${this.appProfile.avatar.data}`)
                    .then(r => r.blob())
                    .then(load)
                    .catch(error);
                return { abort };
            },
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                // Create data object containing the file and the file metadata
                console.log('test');
                const formData = new FormData();
                formData.append(fieldName, file, file.name);
                const request = new XMLHttpRequest();
                request.open('POST', '/ajax/image-upload/xxxxxx');
                // request.setRequestHeader('X-CSRF-TOKEN' , $('meta[name="csrf-token"]').attr('content'));
                request.upload.onprogress = e => {
                    progress(e.lengthComputable, e.loaded, e.total);
                };
                request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
                        load(request.responseText);
                    }
                    else {
                        error('Error');
                    }
                };
                request.send(formData);
                return {
                    abort: () => {
                        request.abort();
                        abort();
                    },
                };
            },
            revert: (uniqueFileId, load, error) => {
                const formData = new FormData();
                formData.append('unique', uniqueFileId);
                formData.append('_method', 'DELETE');
                const request = new XMLHttpRequest();
                request.open('POST', '/ajax/image-delete');
                // request.setRequestHeader('X-CSRF-TOKEN' , $('meta[name="csrf-token"]').attr('content'));
                request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
                        load(request.responseText);
                    }
                    else {
                        error('Error');
                    }
                };
                request.send(formData);
                return {
                    abort: () => {
                        request.abort();
                        // abort();
                    },
                };
            },
        };
        this.pondOptions = {
            name: 'app-profile-avatar',
            maxFileSize: '1MB',
            dropOnPage: true,
            instantUpload: false,
            dropValidation: true,
            acceptedFileTypes: 'image/*',
            server: {
                timeout: 7000,
                load: this.loadHandler.bind(this),
                process: this.processHandler.bind(this),
            },
            imagePreviewHeight: 170,
            imageCropAspectRatio: '1:1',
            imageResizeTargetWidth: 200,
            imageResizeTargetHeight: 200,
            stylePanelLayout: 'compact circle',
            styleLoadIndicatorPosition: 'center bottom',
            styleProgressIndicatorPosition: 'right bottom',
            styleButtonRemoveItemPosition: 'left bottom',
            styleButtonProcessItemPosition: 'right bottom',
        };
    }
    ngOnInit() {
        if (this.appProfile) {
            this.formGroup = this.fb.group({
                file: [],
                gender: [this.appProfile.gender],
                mobilePhone: [this.appProfile.mobilePhone],
            });
        }
        else {
            this.formGroup = this.fb.group({
                file: [],
                gender: [],
                mobilePhone: [],
            });
        }
        if (this.appProfile && this.appProfile.avatar) {
            this.files = [
                {
                    source: this.appProfile.avatar.title,
                    options: {
                        type: 'local',
                    },
                },
            ];
            this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(`data:${this.appProfile.avatar.mimeType};base64,${this.appProfile.avatar.data}`);
        }
        else {
            this.hasAvatar = false;
        }
    }
    loadHandler(source, load, error, progress, abort, headers) {
        if (this.appProfile && this.appProfile.avatar) {
            fetch(`data:${this.appProfile.avatar.mimeType};base64,${this.appProfile.avatar.data}`)
                .then(r => r.blob())
                .then(load)
                .catch(error);
            return { abort };
        }
        else {
            return {
                abort,
            };
        }
    }
    processHandler(fieldName, file, metadata, load, error, progress, abort) {
        // Create data object containing the file and the file metadata
        console.log('test');
        const formData = new FormData();
        formData.append(fieldName, file, file.name);
        const request = new XMLHttpRequest();
        request.open('POST', '/ajax/image-upload/xxxxxx');
        // request.setRequestHeader('X-CSRF-TOKEN' , $('meta[name="csrf-token"]').attr('content'));
        request.upload.onprogress = e => {
            progress(e.lengthComputable, e.loaded, e.total);
        };
        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                load(request.responseText);
            }
            else {
                error('Error');
            }
        };
        request.send(formData);
        return {
            abort: () => {
                request.abort();
                abort();
            },
        };
    }
    save() {
        this.editing = false;
        console.log(this.formGroup);
        // const uploadData = new FormData();
        // uploadData.append('email', this.formGroup.get('email').value);
        // uploadData.append('file', this.formGroup.get('file').value);
    }
    pondHandleInit() {
        console.log('FilePond has initialised', this.myPond);
    }
    pondHandleAddFile(event) {
        // console.log('A file was added', event);
        console.log('A file was added', event.file);
    }
    pondHandleRemoveFile(event) {
        console.log('A file was removed', event.file);
        console.log('A file was removed1111', this.files);
    }
    createProfile() {
        console.log(this.myPond.server);
        this.myPond.processFile().then(file => {
            // File has been processed
        });
    }
    updateProfile() {
        // const files = this.myPond.getFile();
        this.myPond.processFile( /* id */).then(file => {
            // File has been processed
        });
    }
    deleteProfile() { }
    ngOnDestroy() { }
    emitUpload(event) {
        // this.myPond.emit();
        console.log('emitUpload', event);
    }
    removeAll() {
        this.myPond.removeFiles();
    }
}
// TODO: https://www.joshmorony.com/displaying-upload-download-progress-in-an-ionic-application/
// https://github.com/ErazerBrecht/ErazerCQRS/blob/master/Erazer.Web.Angular/src/app/components/image-uploader/image-uploader.component.ts


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/components/app-profile/app-profile.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



































var styles_AppProfileComponent = [app_profile_component_scss_shim_ngstyle_styles];
var RenderType_AppProfileComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_AppProfileComponent, data: {} });

function View_AppProfileComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 4, "button", [["aria-label", "save"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](2, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](4, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["save"]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 2).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = core["Nb" /* ɵnov */](_v, 4).inline; var currVal_3 = (((core["Nb" /* ɵnov */](_v, 4).color !== "primary") && (core["Nb" /* ɵnov */](_v, 4).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_2, currVal_3); });
}
function View_AppProfileComponent_2(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["aria-label", "edit"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.editing = true) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["edit"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_3 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_2, currVal_3); });
}
function View_AppProfileComponent_3(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 11, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](1, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 2, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 3, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 4, { _icon: 0 }), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 2, 2, "div", [["class", "thick"], ["fxFlex", "40"]], null, null, null, null, null)), core["Ab" /* ɵdid */](6, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](7, null, [" ", " "])), (_l()(), core["Bb" /* ɵeld */](8, 0, null, 2, 3, "div", [["fxFlex", "60"]], null, null, null, null, null)), core["Ab" /* ɵdid */](9, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](10, null, [" ", " "])), core["Pb" /* ɵpid */](0, common["g" /* JsonPipe */], [])], function (_ck, _v) { var currVal_2 = "40"; _ck(_v, 6, 0, currVal_2); var currVal_4 = "60"; _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.key; _ck(_v, 7, 0, currVal_3); var currVal_5 = core["Wb" /* ɵunv */](_v, 10, 0, core["Nb" /* ɵnov */](_v, 11).transform(_v.context.$implicit.value)); _ck(_v, 10, 0, currVal_5); }); }
function View_AppProfileComponent_5(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._selectViaInteraction() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 1)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, core_typings_index_ngfactory["e" /* View_MatOption_0 */], core_typings_index_ngfactory["b" /* RenderType_MatOption */])), core["Ab" /* ɵdid */](1, 8568832, [[17, 4]], 0, esm2015_core["s" /* MatOption */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */]], [2, esm2015_core["r" /* MatOptgroup */]]], { value: [0, "value"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1)._getTabIndex(); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).selected; var currVal_2 = core["Nb" /* ɵnov */](_v, 1).multiple; var currVal_3 = core["Nb" /* ɵnov */](_v, 1).active; var currVal_4 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_5 = core["Nb" /* ɵnov */](_v, 1)._getAriaSelected(); var currVal_6 = core["Nb" /* ɵnov */](_v, 1).disabled.toString(); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.key; _ck(_v, 2, 0, currVal_9); });
}
function View_AppProfileComponent_4(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 25, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 24, "mat-form-field", [["class", "mat-form-field"], ["floatLabel", "never"], ["fxFlex", "40"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](2, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](3, 7520256, null, 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { floatLabel: [0, "floatLabel"] }, null), core["Tb" /* ɵqud */](603979776, 8, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 9, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 10, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 11, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 12, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 13, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 14, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 15, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 16, { _suffixChildren: 1 }), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 1, 12, "mat-select", [["class", "mat-select"], ["formControlName", "gender"], ["name", "gender"], ["placeholder", "Gender"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            if (("keydown" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 18)._handleKeydown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 18)._onFocus() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 18)._onBlur() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, select_typings_index_ngfactory["b" /* View_MatSelect_0 */], select_typings_index_ngfactory["a" /* RenderType_MatSelect */])), core["Sb" /* ɵprd */](6144, null, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */], null, [esm2015_select["c" /* MatSelect */]]), core["Ab" /* ɵdid */](15, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [8, null], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](17, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](18, 2080768, null, 3, esm2015_select["c" /* MatSelect */], [scrolling["j" /* ViewportRuler */], core["i" /* ChangeDetectorRef */], core["D" /* NgZone */], esm2015_core["d" /* ErrorStateMatcher */], core["m" /* ElementRef */], [2, bidi["b" /* Directionality */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], [2, form_field["c" /* MatFormField */]], [6, fesm2015_forms["p" /* NgControl */]], [8, null], esm2015_select["a" /* MAT_SELECT_SCROLL_STRATEGY */], a11y["j" /* LiveAnnouncer */]], { placeholder: [0, "placeholder"] }, null), core["Tb" /* ɵqud */](603979776, 17, { options: 1 }), core["Tb" /* ɵqud */](603979776, 18, { optionGroups: 1 }), core["Tb" /* ɵqud */](603979776, 19, { customTrigger: 0 }), core["Sb" /* ɵprd */](2048, [[8, 4], [9, 4]], form_field["d" /* MatFormFieldControl */], null, [esm2015_select["c" /* MatSelect */]]), (_l()(), core["qb" /* ɵand */](16777216, null, 1, 2, null, View_AppProfileComponent_5)), core["Ab" /* ɵdid */](24, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Pb" /* ɵpid */](0, common["h" /* KeyValuePipe */], [core["w" /* KeyValueDiffers */]])], function (_ck, _v) { var _co = _v.component; var currVal_22 = "40"; _ck(_v, 2, 0, currVal_22); var currVal_23 = "never"; _ck(_v, 3, 0, currVal_23); var currVal_46 = "gender"; _ck(_v, 15, 0, currVal_46); var currVal_47 = "Gender"; _ck(_v, 18, 0, currVal_47); var currVal_48 = core["Wb" /* ɵunv */](_v, 24, 0, core["Nb" /* ɵnov */](_v, 25).transform(_co.genderOptions)); _ck(_v, 24, 0, currVal_48); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 3).appearance == "standard"); var currVal_1 = (core["Nb" /* ɵnov */](_v, 3).appearance == "fill"); var currVal_2 = (core["Nb" /* ɵnov */](_v, 3).appearance == "outline"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 3).appearance == "legacy"); var currVal_4 = core["Nb" /* ɵnov */](_v, 3)._control.errorState; var currVal_5 = core["Nb" /* ɵnov */](_v, 3)._canLabelFloat; var currVal_6 = core["Nb" /* ɵnov */](_v, 3)._shouldLabelFloat(); var currVal_7 = core["Nb" /* ɵnov */](_v, 3)._hasFloatingLabel(); var currVal_8 = core["Nb" /* ɵnov */](_v, 3)._hideControlPlaceholder(); var currVal_9 = core["Nb" /* ɵnov */](_v, 3)._control.disabled; var currVal_10 = core["Nb" /* ɵnov */](_v, 3)._control.autofilled; var currVal_11 = core["Nb" /* ɵnov */](_v, 3)._control.focused; var currVal_12 = (core["Nb" /* ɵnov */](_v, 3).color == "accent"); var currVal_13 = (core["Nb" /* ɵnov */](_v, 3).color == "warn"); var currVal_14 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("untouched"); var currVal_15 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("touched"); var currVal_16 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("pristine"); var currVal_17 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("dirty"); var currVal_18 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("valid"); var currVal_19 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("invalid"); var currVal_20 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("pending"); var currVal_21 = !core["Nb" /* ɵnov */](_v, 3)._animationsEnabled; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_24 = core["Nb" /* ɵnov */](_v, 17).ngClassUntouched; var currVal_25 = core["Nb" /* ɵnov */](_v, 17).ngClassTouched; var currVal_26 = core["Nb" /* ɵnov */](_v, 17).ngClassPristine; var currVal_27 = core["Nb" /* ɵnov */](_v, 17).ngClassDirty; var currVal_28 = core["Nb" /* ɵnov */](_v, 17).ngClassValid; var currVal_29 = core["Nb" /* ɵnov */](_v, 17).ngClassInvalid; var currVal_30 = core["Nb" /* ɵnov */](_v, 17).ngClassPending; var currVal_31 = core["Nb" /* ɵnov */](_v, 18).id; var currVal_32 = core["Nb" /* ɵnov */](_v, 18).tabIndex; var currVal_33 = core["Nb" /* ɵnov */](_v, 18)._getAriaLabel(); var currVal_34 = core["Nb" /* ɵnov */](_v, 18)._getAriaLabelledby(); var currVal_35 = core["Nb" /* ɵnov */](_v, 18).required.toString(); var currVal_36 = core["Nb" /* ɵnov */](_v, 18).disabled.toString(); var currVal_37 = core["Nb" /* ɵnov */](_v, 18).errorState; var currVal_38 = (core["Nb" /* ɵnov */](_v, 18).panelOpen ? core["Nb" /* ɵnov */](_v, 18)._optionIds : null); var currVal_39 = core["Nb" /* ɵnov */](_v, 18).multiple; var currVal_40 = (core["Nb" /* ɵnov */](_v, 18)._ariaDescribedby || null); var currVal_41 = core["Nb" /* ɵnov */](_v, 18)._getAriaActiveDescendant(); var currVal_42 = core["Nb" /* ɵnov */](_v, 18).disabled; var currVal_43 = core["Nb" /* ɵnov */](_v, 18).errorState; var currVal_44 = core["Nb" /* ɵnov */](_v, 18).required; var currVal_45 = core["Nb" /* ɵnov */](_v, 18).empty; _ck(_v, 13, 1, [currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45]); });
}
function View_AppProfileComponent_6(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 2, "div", [["fxFlex", "60"]], null, null, null, null, null)), core["Ab" /* ɵdid */](2, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "60"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.formGroup.controls["gender"].value; _ck(_v, 3, 0, currVal_1); }); }
function View_AppProfileComponent_7(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 21, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["floatLabel", "never"], ["fxFlex", "40"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](2, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](3, 7520256, null, 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], esm2015_platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { floatLabel: [0, "floatLabel"] }, null), core["Tb" /* ɵqud */](603979776, 23, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 24, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 25, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 26, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 27, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 28, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 29, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 30, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 31, { _suffixChildren: 1 }), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 1, 8, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "mobilePhone"], ["matInput", ""], ["name", "mobilePhone"], ["placeholder", "Mobile Phone"], ["type", "tel"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "keydown"], [null, "keyup"], [null, "paste"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 14)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 14).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 14)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 14)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("keydown" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 15).onKeydown($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("keyup" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 15).onKeyup($event) !== false);
                ad = (pd_5 && ad);
            }
            if (("paste" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 15).onPaste($event) !== false);
                ad = (pd_6 && ad);
            }
            if (("input" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 15).onInputChanged($event) !== false);
                ad = (pd_7 && ad);
            }
            if (("focus" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 15).onFocus($event.target.value) !== false);
                ad = (pd_8 && ad);
            }
            if (("blur" === en)) {
                var pd_9 = (core["Nb" /* ɵnov */](_v, 15).onBlur($event.target.value) !== false);
                ad = (pd_9 && ad);
            }
            if (("blur" === en)) {
                var pd_10 = (core["Nb" /* ɵnov */](_v, 20)._focusChanged(false) !== false);
                ad = (pd_10 && ad);
            }
            if (("focus" === en)) {
                var pd_11 = (core["Nb" /* ɵnov */](_v, 20)._focusChanged(true) !== false);
                ad = (pd_11 && ad);
            }
            if (("input" === en)) {
                var pd_12 = (core["Nb" /* ɵnov */](_v, 20)._onInput() !== false);
                ad = (pd_12 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](14, 16384, null, 0, fesm2015_forms["e" /* DefaultValueAccessor */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], [2, fesm2015_forms["b" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Ab" /* ɵdid */](15, 81920, null, 0, mask_directive_MaskDirective, [core["m" /* ElementRef */]], { mask: [0, "mask"], placeholder: [1, "placeholder"] }, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [fesm2015_forms["e" /* DefaultValueAccessor */], mask_directive_MaskDirective]), core["Ab" /* ɵdid */](17, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](19, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](20, 999424, null, 0, input["b" /* MatInput */], [core["m" /* ElementRef */], esm2015_platform["a" /* Platform */], [6, fesm2015_forms["p" /* NgControl */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["Sb" /* ɵprd */](2048, [[23, 4], [24, 4]], form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]])], function (_ck, _v) { var currVal_22 = "40"; _ck(_v, 2, 0, currVal_22); var currVal_23 = "never"; _ck(_v, 3, 0, currVal_23); var currVal_40 = "(###) 000-0000"; var currVal_41 = "Mobile Phone"; _ck(_v, 15, 0, currVal_40, currVal_41); var currVal_42 = "mobilePhone"; _ck(_v, 17, 0, currVal_42); var currVal_43 = "Mobile Phone"; var currVal_44 = "tel"; _ck(_v, 20, 0, currVal_43, currVal_44); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 3).appearance == "standard"); var currVal_1 = (core["Nb" /* ɵnov */](_v, 3).appearance == "fill"); var currVal_2 = (core["Nb" /* ɵnov */](_v, 3).appearance == "outline"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 3).appearance == "legacy"); var currVal_4 = core["Nb" /* ɵnov */](_v, 3)._control.errorState; var currVal_5 = core["Nb" /* ɵnov */](_v, 3)._canLabelFloat; var currVal_6 = core["Nb" /* ɵnov */](_v, 3)._shouldLabelFloat(); var currVal_7 = core["Nb" /* ɵnov */](_v, 3)._hasFloatingLabel(); var currVal_8 = core["Nb" /* ɵnov */](_v, 3)._hideControlPlaceholder(); var currVal_9 = core["Nb" /* ɵnov */](_v, 3)._control.disabled; var currVal_10 = core["Nb" /* ɵnov */](_v, 3)._control.autofilled; var currVal_11 = core["Nb" /* ɵnov */](_v, 3)._control.focused; var currVal_12 = (core["Nb" /* ɵnov */](_v, 3).color == "accent"); var currVal_13 = (core["Nb" /* ɵnov */](_v, 3).color == "warn"); var currVal_14 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("untouched"); var currVal_15 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("touched"); var currVal_16 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("pristine"); var currVal_17 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("dirty"); var currVal_18 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("valid"); var currVal_19 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("invalid"); var currVal_20 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("pending"); var currVal_21 = !core["Nb" /* ɵnov */](_v, 3)._animationsEnabled; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_24 = core["Nb" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_25 = core["Nb" /* ɵnov */](_v, 19).ngClassTouched; var currVal_26 = core["Nb" /* ɵnov */](_v, 19).ngClassPristine; var currVal_27 = core["Nb" /* ɵnov */](_v, 19).ngClassDirty; var currVal_28 = core["Nb" /* ɵnov */](_v, 19).ngClassValid; var currVal_29 = core["Nb" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_30 = core["Nb" /* ɵnov */](_v, 19).ngClassPending; var currVal_31 = core["Nb" /* ɵnov */](_v, 20)._isServer; var currVal_32 = core["Nb" /* ɵnov */](_v, 20).id; var currVal_33 = core["Nb" /* ɵnov */](_v, 20).placeholder; var currVal_34 = core["Nb" /* ɵnov */](_v, 20).disabled; var currVal_35 = core["Nb" /* ɵnov */](_v, 20).required; var currVal_36 = ((core["Nb" /* ɵnov */](_v, 20).readonly && !core["Nb" /* ɵnov */](_v, 20)._isNativeSelect) || null); var currVal_37 = (core["Nb" /* ɵnov */](_v, 20)._ariaDescribedby || null); var currVal_38 = core["Nb" /* ɵnov */](_v, 20).errorState; var currVal_39 = core["Nb" /* ɵnov */](_v, 20).required.toString(); _ck(_v, 13, 1, [currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]); });
}
function View_AppProfileComponent_8(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 2, "div", [["fxFlex", "60"]], null, null, null, null, null)), core["Ab" /* ɵdid */](2, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "60"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.formGroup.controls["mobilePhone"].value; _ck(_v, 3, 0, currVal_1); }); }
function View_AppProfileComponent_9(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 1, "file-pond", [], null, [[null, "oninit"], [null, "onaddfile"], [null, "onremovefile"], [null, "onprocessfile"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("oninit" === en)) {
                var pd_0 = (_co.pondHandleInit() !== false);
                ad = (pd_0 && ad);
            }
            if (("onaddfile" === en)) {
                var pd_1 = (_co.pondHandleAddFile($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("onremovefile" === en)) {
                var pd_2 = (_co.pondHandleRemoveFile($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("onprocessfile" === en)) {
                var pd_3 = (_co.emitUpload($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, ngx_filepond_ngfactory["b" /* View_ɵa_0 */], ngx_filepond_ngfactory["a" /* RenderType_ɵa */])), core["Ab" /* ɵdid */](2, 4898816, [[1, 4], ["myPond", 4]], 0, ngx_filepond["c" /* ɵa */], [core["m" /* ElementRef */], core["D" /* NgZone */]], { options: [0, "options"], files: [1, "files"] }, { oninit: "oninit", onaddfile: "onaddfile", onprocessfile: "onprocessfile", onremovefile: "onremovefile" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pondOptions; var currVal_1 = _co.files; _ck(_v, 2, 0, currVal_0, currVal_1); }, null);
}
function View_AppProfileComponent_10(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 3, "div", [["fxFlex", "60"]], null, null, null, null, null)), core["Ab" /* ɵdid */](2, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 1, "img", [["alt", "User Avatar"], ["class", "mat-card-avatar"], ["mat-card-avatar", ""]], [[8, "src", 4]], null, null, null, null)), core["Ab" /* ɵdid */](4, 16384, null, 0, card["c" /* MatCardAvatar */], [], null, null)], function (_ck, _v) { var currVal_0 = "60"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.imagePath; _ck(_v, 3, 0, currVal_1); }); }
function View_AppProfileComponent_11(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](1, null, ["Updated ", ""])), core["Pb" /* ɵpid */](131072, format_time_in_words_pipe["a" /* FormatTimeInWordsPipe */], [core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Wb" /* ɵunv */](_v, 1, 0, core["Nb" /* ɵnov */](_v, 2).transform(_co.appProfile.updatedAt)); _ck(_v, 1, 0, currVal_0); }); }
function View_AppProfileComponent_0(_l) {
    return core["Xb" /* ɵvid */](2, [core["Tb" /* ɵqud */](402653184, 1, { myPond: 0 }), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 85, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](2, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 14, "mat-card-header", [["class", "mat-card-header"]], null, null, null, card_typings_index_ngfactory["c" /* View_MatCardHeader_0 */], card_typings_index_ngfactory["b" /* RenderType_MatCardHeader */])), core["Ab" /* ɵdid */](4, 49152, null, 0, card["e" /* MatCardHeader */], [], null, null), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 0, 1, "img", [["alt", "User Avatar"], ["class", "mat-card-avatar"], ["mat-card-avatar", ""]], [[8, "src", 4]], null, null, null, null)), core["Ab" /* ɵdid */](6, 16384, null, 0, card["c" /* MatCardAvatar */], [], null, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), core["Ab" /* ɵdid */](8, 16384, null, 0, card["i" /* MatCardTitle */], [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["App Profile"])), (_l()(), core["Bb" /* ɵeld */](10, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), core["Ab" /* ɵdid */](11, 16384, null, 0, card["h" /* MatCardSubtitle */], [], null, null), (_l()(), core["Vb" /* ɵted */](12, null, ["", " ", ""])), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 2, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), core["Ab" /* ɵdid */](14, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_1)), core["Ab" /* ɵdid */](16, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), core["qb" /* ɵand */](0, [["otherwise", 2]], 2, 0, null, View_AppProfileComponent_2)), (_l()(), core["Bb" /* ɵeld */](18, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, divider_typings_index_ngfactory["b" /* View_MatDivider_0 */], divider_typings_index_ngfactory["a" /* RenderType_MatDivider */])), core["Ab" /* ɵdid */](19, 49152, null, 0, divider["a" /* MatDivider */], [], null, null), (_l()(), core["Bb" /* ɵeld */](20, 0, null, 0, 49, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), core["Ab" /* ɵdid */](21, 16384, null, 0, card["d" /* MatCardContent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](22, 0, null, null, 47, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 24).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 24).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.save() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](23, 16384, null, 0, fesm2015_forms["A" /* ɵangular_packages_forms_forms_z */], [], null, null), core["Ab" /* ɵdid */](24, 540672, null, 0, fesm2015_forms["l" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["d" /* ControlContainer */], null, [fesm2015_forms["l" /* FormGroupDirective */]]), core["Ab" /* ɵdid */](26, 16384, null, 0, fesm2015_forms["r" /* NgControlStatusGroup */], [[4, fesm2015_forms["d" /* ControlContainer */]]], null, null), (_l()(), core["Bb" /* ɵeld */](27, 0, null, null, 42, "mat-list", [["class", "mat-list mat-list-base"], ["role", "list"]], null, null, null, list_typings_index_ngfactory["e" /* View_MatList_0 */], list_typings_index_ngfactory["a" /* RenderType_MatList */])), core["Ab" /* ɵdid */](28, 704512, null, 0, list["a" /* MatList */], [core["m" /* ElementRef */]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 2, null, View_AppProfileComponent_3)), core["Ab" /* ɵdid */](30, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Pb" /* ɵpid */](0, common["h" /* KeyValuePipe */], [core["w" /* KeyValueDiffers */]]), (_l()(), core["Bb" /* ɵeld */](32, 0, null, 0, 37, null, null, null, null, null, null, null)), core["Ab" /* ɵdid */](33, 16384, null, 0, common["r" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), core["Bb" /* ɵeld */](34, 0, null, null, 11, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](35, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 5, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 6, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 7, { _icon: 0 }), (_l()(), core["Bb" /* ɵeld */](39, 0, null, 2, 2, "div", [["class", "thick"], ["fxFlex", "40"]], null, null, null, null, null)), core["Ab" /* ɵdid */](40, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Gender"])), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_4)), core["Ab" /* ɵdid */](43, 278528, null, 0, common["s" /* NgSwitchCase */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], common["r" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_6)), core["Ab" /* ɵdid */](45, 278528, null, 0, common["s" /* NgSwitchCase */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], common["r" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["Bb" /* ɵeld */](46, 0, null, null, 11, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](47, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 20, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 21, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 22, { _icon: 0 }), (_l()(), core["Bb" /* ɵeld */](51, 0, null, 2, 2, "div", [["class", "thick"], ["fxFlex", "40"]], null, null, null, null, null)), core["Ab" /* ɵdid */](52, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Phone"])), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_7)), core["Ab" /* ɵdid */](55, 278528, null, 0, common["s" /* NgSwitchCase */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], common["r" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_8)), core["Ab" /* ɵdid */](57, 278528, null, 0, common["s" /* NgSwitchCase */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], common["r" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["Bb" /* ɵeld */](58, 0, null, null, 11, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"], ["style", "height: auto;"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](59, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 32, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 33, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 34, { _icon: 0 }), (_l()(), core["Bb" /* ɵeld */](63, 0, null, 2, 2, "div", [["class", "thick"], ["fxFlex", "40"]], null, null, null, null, null)), core["Ab" /* ɵdid */](64, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Avatar"])), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_9)), core["Ab" /* ɵdid */](67, 278528, null, 0, common["s" /* NgSwitchCase */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], common["r" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 2, 1, null, View_AppProfileComponent_10)), core["Ab" /* ɵdid */](69, 278528, null, 0, common["s" /* NgSwitchCase */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], common["r" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["Bb" /* ɵeld */](70, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, divider_typings_index_ngfactory["b" /* View_MatDivider_0 */], divider_typings_index_ngfactory["a" /* RenderType_MatDivider */])), core["Ab" /* ɵdid */](71, 49152, null, 0, divider["a" /* MatDivider */], [], null, null), (_l()(), core["Bb" /* ɵeld */](72, 0, null, 0, 14, "mat-card-actions", [["align", "end"], ["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), core["Ab" /* ɵdid */](73, 16384, null, 0, card["b" /* MatCardActions */], [], { align: [0, "align"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_AppProfileComponent_11)), core["Ab" /* ɵdid */](75, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](76, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), core["Ab" /* ɵdid */](77, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](78, 0, null, null, 2, "button", [["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.createProfile() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](79, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["CREATE"])), (_l()(), core["Bb" /* ɵeld */](81, 0, null, null, 2, "button", [["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.updateProfile() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](82, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["UPDATE"])), (_l()(), core["Bb" /* ɵeld */](84, 0, null, null, 2, "button", [["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.removeAll() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](85, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["DELETE"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = ""; _ck(_v, 14, 0, currVal_4); var currVal_5 = _co.editing; var currVal_6 = core["Nb" /* ɵnov */](_v, 17); _ck(_v, 16, 0, currVal_5, currVal_6); var currVal_18 = _co.formGroup; _ck(_v, 24, 0, currVal_18); var currVal_19 = core["Wb" /* ɵunv */](_v, 30, 0, core["Nb" /* ɵnov */](_v, 31).transform(_co.oidcProfile)); _ck(_v, 30, 0, currVal_19); var currVal_20 = _co.editing; _ck(_v, 33, 0, currVal_20); var currVal_23 = "40"; _ck(_v, 40, 0, currVal_23); var currVal_24 = true; _ck(_v, 43, 0, currVal_24); var currVal_25 = false; _ck(_v, 45, 0, currVal_25); var currVal_28 = "40"; _ck(_v, 52, 0, currVal_28); var currVal_29 = true; _ck(_v, 55, 0, currVal_29); var currVal_30 = false; _ck(_v, 57, 0, currVal_30); var currVal_33 = "40"; _ck(_v, 64, 0, currVal_33); var currVal_34 = true; _ck(_v, 67, 0, currVal_34); var currVal_35 = false; _ck(_v, 69, 0, currVal_35); var currVal_41 = "end"; _ck(_v, 73, 0, currVal_41); var currVal_42 = _co.appProfile; _ck(_v, 75, 0, currVal_42); var currVal_43 = ""; _ck(_v, 77, 0, currVal_43); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (core["Nb" /* ɵnov */](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.imagePath; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.oidcProfile.firstName; var currVal_3 = _co.oidcProfile.lastName; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_7 = (core["Nb" /* ɵnov */](_v, 19).vertical ? "vertical" : "horizontal"); var currVal_8 = core["Nb" /* ɵnov */](_v, 19).vertical; var currVal_9 = !core["Nb" /* ɵnov */](_v, 19).vertical; var currVal_10 = core["Nb" /* ɵnov */](_v, 19).inset; _ck(_v, 18, 0, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = core["Nb" /* ɵnov */](_v, 26).ngClassUntouched; var currVal_12 = core["Nb" /* ɵnov */](_v, 26).ngClassTouched; var currVal_13 = core["Nb" /* ɵnov */](_v, 26).ngClassPristine; var currVal_14 = core["Nb" /* ɵnov */](_v, 26).ngClassDirty; var currVal_15 = core["Nb" /* ɵnov */](_v, 26).ngClassValid; var currVal_16 = core["Nb" /* ɵnov */](_v, 26).ngClassInvalid; var currVal_17 = core["Nb" /* ɵnov */](_v, 26).ngClassPending; _ck(_v, 22, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_21 = (core["Nb" /* ɵnov */](_v, 35)._avatar || core["Nb" /* ɵnov */](_v, 35)._icon); var currVal_22 = (core["Nb" /* ɵnov */](_v, 35)._avatar || core["Nb" /* ɵnov */](_v, 35)._icon); _ck(_v, 34, 0, currVal_21, currVal_22); var currVal_26 = (core["Nb" /* ɵnov */](_v, 47)._avatar || core["Nb" /* ɵnov */](_v, 47)._icon); var currVal_27 = (core["Nb" /* ɵnov */](_v, 47)._avatar || core["Nb" /* ɵnov */](_v, 47)._icon); _ck(_v, 46, 0, currVal_26, currVal_27); var currVal_31 = (core["Nb" /* ɵnov */](_v, 59)._avatar || core["Nb" /* ɵnov */](_v, 59)._icon); var currVal_32 = (core["Nb" /* ɵnov */](_v, 59)._avatar || core["Nb" /* ɵnov */](_v, 59)._icon); _ck(_v, 58, 0, currVal_31, currVal_32); var currVal_36 = (core["Nb" /* ɵnov */](_v, 71).vertical ? "vertical" : "horizontal"); var currVal_37 = core["Nb" /* ɵnov */](_v, 71).vertical; var currVal_38 = !core["Nb" /* ɵnov */](_v, 71).vertical; var currVal_39 = core["Nb" /* ɵnov */](_v, 71).inset; _ck(_v, 70, 0, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_40 = (core["Nb" /* ɵnov */](_v, 73).align === "end"); _ck(_v, 72, 0, currVal_40); var currVal_44 = (core["Nb" /* ɵnov */](_v, 79).disabled || null); var currVal_45 = (core["Nb" /* ɵnov */](_v, 79)._animationMode === "NoopAnimations"); _ck(_v, 78, 0, currVal_44, currVal_45); var currVal_46 = (core["Nb" /* ɵnov */](_v, 82).disabled || null); var currVal_47 = (core["Nb" /* ɵnov */](_v, 82)._animationMode === "NoopAnimations"); _ck(_v, 81, 0, currVal_46, currVal_47); var currVal_48 = (core["Nb" /* ɵnov */](_v, 85).disabled || null); var currVal_49 = (core["Nb" /* ɵnov */](_v, 85)._animationMode === "NoopAnimations"); _ck(_v, 84, 0, currVal_48, currVal_49); });
}
function View_AppProfileComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-app-profile", [], null, null, null, View_AppProfileComponent_0, RenderType_AppProfileComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, app_profile_component_AppProfileComponent, [fesm2015_forms["g" /* FormBuilder */], core["i" /* ChangeDetectorRef */], platform_browser["b" /* DomSanitizer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppProfileComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-app-profile", app_profile_component_AppProfileComponent, View_AppProfileComponent_Host_0, { oidcProfile: "oidcProfile", appProfile: "appProfile" }, {}, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/auth/src/index.ts
var auth_src = __webpack_require__("wxdu");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/profile/profile.component.ts



// import { AuthState } from '@ngx-starter-kit/oidc';



let profile_component_ProfileComponent = /*@__PURE__*/ (() => {
    class ProfileComponent {
        constructor(snackBar) {
            this.snackBar = snackBar;
            this.crumbs = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' }];
        }
        ngOnInit() {
            this.error$
                .pipe(Object(src["a" /* untilDestroy */])(this))
                .subscribe(err => this.snackBar.open(`Profile Error: ${err}`, '', { duration: 3000 }));
        }
        ngOnDestroy() { }
    }
    tslib_es6["__decorate"]([
        Object(ngxs_store["f" /* Select */])(auth_src["a" /* AuthState */].profile),
        tslib_es6["__metadata"]("design:type", Observable["a" /* Observable */])
    ], ProfileComponent.prototype, "oidcProfile$", void 0);
    tslib_es6["__decorate"]([
        Object(ngxs_store["f" /* Select */])(core_src["g" /* ProfileState */].profile),
        tslib_es6["__metadata"]("design:type", Observable["a" /* Observable */])
    ], ProfileComponent.prototype, "appProfile$", void 0);
    tslib_es6["__decorate"]([
        Object(ngxs_store["f" /* Select */])(core_src["g" /* ProfileState */].loading),
        tslib_es6["__metadata"]("design:type", Observable["a" /* Observable */])
    ], ProfileComponent.prototype, "loading$", void 0);
    tslib_es6["__decorate"]([
        Object(ngxs_store["f" /* Select */])(core_src["g" /* ProfileState */].error),
        tslib_es6["__metadata"]("design:type", Observable["a" /* Observable */])
    ], ProfileComponent.prototype, "error$", void 0);
    return ProfileComponent;
})();


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/profile/profile.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */














var styles_ProfileComponent = [profile_component_scss_shim_ngstyle_styles];
var RenderType_ProfileComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_ProfileComponent, data: {} });

function View_ProfileComponent_0(_l) { return core["Xb" /* ɵvid */](2, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-breadcrumbs", [["title", "Overview"]], null, null, null, breadcrumbs_component_ngfactory["b" /* View_BreadcrumbsComponent_0 */], breadcrumbs_component_ngfactory["a" /* RenderType_BreadcrumbsComponent */])), core["Ab" /* ɵdid */](1, 114688, null, 0, breadcrumbs_component["a" /* BreadcrumbsComponent */], [], { title: [0, "title"], crumbs: [1, "crumbs"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 7, "div", [["fxLayout.gt-xs", "row"], ["fxLayout.xs", "column"], ["fxLayoutGap", "60px grid"]], null, null, null, null, null)), core["Ab" /* ɵdid */](3, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { "fxLayout.xs": [0, "fxLayout.xs"], "fxLayout.gt-xs": [1, "fxLayout.gt-xs"] }, null), core["Ab" /* ɵdid */](4, 1720320, null, 0, flex["f" /* DefaultLayoutGapDirective */], [core["m" /* ElementRef */], core["D" /* NgZone */], bidi["b" /* Directionality */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["n" /* LayoutGapStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), (_l()(), core["Bb" /* ɵeld */](5, 0, null, null, 4, "ngx-app-profile", [["fxFlex", "60%"]], null, null, null, View_AppProfileComponent_0, RenderType_AppProfileComponent)), core["Ab" /* ɵdid */](6, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](7, 245760, null, 0, app_profile_component_AppProfileComponent, [fesm2015_forms["g" /* FormBuilder */], core["i" /* ChangeDetectorRef */], platform_browser["b" /* DomSanitizer */]], { oidcProfile: [0, "oidcProfile"], appProfile: [1, "appProfile"] }, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Overview"; var currVal_1 = _co.crumbs; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "column"; var currVal_3 = "row"; _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = "60px grid"; _ck(_v, 4, 0, currVal_4); var currVal_5 = "60%"; _ck(_v, 6, 0, currVal_5); var currVal_6 = core["Wb" /* ɵunv */](_v, 7, 0, core["Nb" /* ɵnov */](_v, 8).transform(_co.oidcProfile$)); var currVal_7 = core["Wb" /* ɵunv */](_v, 7, 1, core["Nb" /* ɵnov */](_v, 9).transform(_co.appProfile$)); _ck(_v, 7, 0, currVal_6, currVal_7); }, null); }
function View_ProfileComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, profile_component_ProfileComponent, [snack_bar["b" /* MatSnackBar */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProfileComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-profile", profile_component_ProfileComponent, View_ProfileComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/settings/settings.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var settings_component_scss_shim_ngstyle_styles = ["[_nghost-%COMP%]{display:block;padding:1.5%;position:relative}.mat-table[_ngcontent-%COMP%]{display:block}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{display:flex;border-bottom-width:1px;border-bottom-style:solid;align-items:center;min-height:60px;padding:0 24px}.add-padding-right[_ngcontent-%COMP%]{padding-right:8px}"];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/radio/typings/index.ngfactory.js
var radio_typings_index_ngfactory = __webpack_require__("wX4V");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/observers.js
var observers = __webpack_require__("OcC5");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/slide-toggle/typings/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */










var MatSlideToggleModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](MatSlideToggleModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, []], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, platform_browser["e" /* HAMMER_GESTURE_CONFIG */], esm2015_core["e" /* GestureConfig */], [[2, esm2015_core["i" /* MAT_HAMMER_OPTIONS */]], [2, esm2015_core["n" /* MatCommonModule */]]]), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, esm2015_platform["b" /* PlatformModule */], esm2015_platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, MatSlideToggleModule, MatSlideToggleModule, [])]); });

var styles_MatSlideToggle = [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px,0,0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging{transition-duration:0s}.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media (hover:none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}@media (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}}@media (-ms-high-contrast:black-on-white){.mat-slide-toggle-bar{border:1px solid #000}}"];
var RenderType_MatSlideToggle = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_MatSlideToggle, data: {} });

function View_MatSlideToggle_0(_l) {
    return core["Xb" /* ɵvid */](2, [core["Tb" /* ɵqud */](671088640, 1, { _thumbEl: 0 }), core["Tb" /* ɵqud */](671088640, 2, { _thumbBarEl: 0 }), core["Tb" /* ɵqud */](671088640, 3, { _inputElement: 0 }), (_l()(), core["Bb" /* ɵeld */](3, 0, [["label", 1]], null, 13, "label", [["class", "mat-slide-toggle-label"]], [[1, "for", 0]], null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](4, 0, [[2, 0], ["toggleBar", 1]], null, 7, "div", [["class", "mat-slide-toggle-bar"]], [[2, "mat-slide-toggle-bar-no-side-margin", null]], null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](5, 0, [[3, 0], ["input", 1]], null, 0, "input", [["class", "mat-slide-toggle-input cdk-visually-hidden"], ["role", "switch"], ["type", "checkbox"]], [[8, "id", 0], [8, "required", 0], [8, "tabIndex", 0], [8, "checked", 0], [8, "disabled", 0], [1, "name", 0], [1, "aria-checked", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0]], [[null, "change"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co._onChangeEvent($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co._onInputClick($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["Bb" /* ɵeld */](6, 0, [[1, 0], ["thumbContainer", 1]], null, 5, "div", [["class", "mat-slide-toggle-thumb-container"]], null, [[null, "slidestart"], [null, "slide"], [null, "slideend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("slidestart" === en)) {
                var pd_0 = (_co._onDragStart() !== false);
                ad = (pd_0 && ad);
            }
            if (("slide" === en)) {
                var pd_1 = (_co._onDrag($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("slideend" === en)) {
                var pd_2 = (_co._onDragEnd() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 0, "div", [["class", "mat-slide-toggle-thumb"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](8, 0, null, null, 3, "div", [["class", "mat-slide-toggle-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), core["Ab" /* ɵdid */](9, 212992, null, 0, esm2015_core["x" /* MatRipple */], [core["m" /* ElementRef */], core["D" /* NgZone */], esm2015_platform["a" /* Platform */], [2, esm2015_core["m" /* MAT_RIPPLE_GLOBAL_OPTIONS */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { centered: [0, "centered"], radius: [1, "radius"], animation: [2, "animation"], disabled: [3, "disabled"], trigger: [4, "trigger"] }, null), core["Qb" /* ɵpod */](10, { enterDuration: 0 }), (_l()(), core["Bb" /* ɵeld */](11, 0, null, null, 0, "div", [["class", "mat-ripple-element mat-slide-toggle-persistent-ripple"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](12, 0, [["labelContent", 1]], null, 4, "span", [["class", "mat-slide-toggle-content"]], null, [[null, "cdkObserveContent"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("cdkObserveContent" === en)) {
                var pd_0 = (_co._onLabelTextChange() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](13, 1196032, null, 0, observers["a" /* CdkObserveContent */], [observers["b" /* ContentObserver */], core["m" /* ElementRef */], core["D" /* NgZone */]], null, { event: "cdkObserveContent" }), (_l()(), core["Bb" /* ɵeld */](14, 0, null, null, 1, "span", [["style", "display:none"]], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](-1, null, ["\u00A0"])), core["Mb" /* ɵncd */](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_12 = true; var currVal_13 = 20; var currVal_14 = _ck(_v, 10, 0, 150); var currVal_15 = (_co.disableRipple || _co.disabled); var currVal_16 = core["Nb" /* ɵnov */](_v, 3); _ck(_v, 9, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputId; _ck(_v, 3, 0, currVal_0); var currVal_1 = (!core["Nb" /* ɵnov */](_v, 12).textContent || !core["Nb" /* ɵnov */](_v, 12).textContent.trim()); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.inputId; var currVal_3 = _co.required; var currVal_4 = _co.tabIndex; var currVal_5 = _co.checked; var currVal_6 = _co.disabled; var currVal_7 = _co.name; var currVal_8 = _co.checked.toString(); var currVal_9 = _co.ariaLabel; var currVal_10 = _co.ariaLabelledby; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = core["Nb" /* ɵnov */](_v, 9).unbounded; _ck(_v, 8, 0, currVal_11); });
}
function View_MatSlideToggle_Host_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2)._inputElement.nativeElement.focus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_MatSlideToggle_0, RenderType_MatSlideToggle)), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [slide_toggle_MatSlideToggle]), core["Ab" /* ɵdid */](2, 1228800, null, 0, slide_toggle_MatSlideToggle, [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [8, null], core["D" /* NgZone */], MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, bidi["b" /* Directionality */]]], null, null)], null, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 2).id; var currVal_1 = (core["Nb" /* ɵnov */](_v, 2).disabled ? null : (0 - 1)); var currVal_2 = core["Nb" /* ɵnov */](_v, 2).checked; var currVal_3 = core["Nb" /* ɵnov */](_v, 2).disabled; var currVal_4 = (core["Nb" /* ɵnov */](_v, 2).labelPosition == "before"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); });
}
var MatSlideToggleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("mat-slide-toggle", slide_toggle_MatSlideToggle, View_MatSlideToggle_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: "aria-label", ariaLabelledby: "aria-labelledby", required: "required", checked: "checked" }, { change: "change", toggleChange: "toggleChange", dragChange: "dragChange" }, ["*"]);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/settings/settings.component.ts



class settings_component_SettingsComponent {
    constructor(fb, store, pnServ) {
        this.fb = fb;
        this.store = store;
        this.pnServ = pnServ;
        this.crumbs = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Settings' }];
        this.languages = ['en', 'es', 'de', 'fr', 'cn'];
        this.themes = [
            core_src["h" /* ThemeName */].DEEPPURPLE_AMBER,
            core_src["h" /* ThemeName */].INDIGO_PINK,
            core_src["h" /* ThemeName */].PINK_BLUEGREY,
            core_src["h" /* ThemeName */].PURPLE_GREEN,
        ];
    }
    ngOnInit() {
        this.preferences = this.store.selectSnapshot(core_src["f" /* PreferenceState */]);
        this.buildForm();
        this.settingsForm
            .get('selectedLanguage')
            .valueChanges.pipe(Object(src["a" /* untilDestroy */])(this))
            .subscribe(selectedLanguage => this.store.dispatch(new core_src["b" /* ChangeLanguage */](selectedLanguage)));
        this.settingsForm
            .get('selectedTheme')
            .valueChanges.pipe(Object(src["a" /* untilDestroy */])(this))
            .subscribe(selectedTheme => this.store.dispatch(new core_src["c" /* ChangeTheme */](selectedTheme)));
        this.settingsForm
            .get('enableNotifications')
            .valueChanges.pipe(Object(src["a" /* untilDestroy */])(this))
            .subscribe((enableNotifications) => tslib_es6["__awaiter"](this, void 0, void 0, function* () {
            if (enableNotifications) {
                yield this.pnServ.register();
                this.store.dispatch(new core_src["e" /* EnableNotifications */]());
            }
            else {
                yield this.pnServ.unregister();
                this.store.dispatch(new core_src["d" /* DisableNotifications */]());
            }
        }));
    }
    ngOnDestroy() { }
    buildForm() {
        this.settingsForm = this.fb.group({
            selectedLanguage: [this.preferences.language],
            selectedTheme: [this.preferences.activeThemeName],
            enableNotifications: this.preferences.enableNotifications,
        });
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/push-notification.service.ts
var push_notification_service = __webpack_require__("ycqS");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/containers/settings/settings.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */





















var styles_SettingsComponent = [settings_component_scss_shim_ngstyle_styles];
var RenderType_SettingsComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_SettingsComponent, data: {} });

function View_SettingsComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-radio-button", [["class", "add-padding-right mat-radio-button"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [2, "_mat-animation-noopable", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [1, "tabindex", 0], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._inputElement.nativeElement.focus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, radio_typings_index_ngfactory["b" /* View_MatRadioButton_0 */], radio_typings_index_ngfactory["a" /* RenderType_MatRadioButton */])), core["Ab" /* ɵdid */](1, 4440064, [[1, 4]], 0, esm2015_radio["b" /* MatRadioButton */], [[2, esm2015_radio["c" /* MatRadioGroup */]], core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], collections["d" /* UniqueSelectionDispatcher */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, esm2015_radio["a" /* MAT_RADIO_DEFAULT_OPTIONS */]]], { value: [0, "value"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).checked; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).disabled; var currVal_2 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 1).color === "primary"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 1).color === "accent"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 1).color === "warn"); var currVal_6 = (0 - 1); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit; _ck(_v, 2, 0, currVal_9); });
}
function View_SettingsComponent_2(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-radio-button", [["class", "add-padding-right mat-radio-button"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [2, "_mat-animation-noopable", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [1, "tabindex", 0], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._inputElement.nativeElement.focus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, radio_typings_index_ngfactory["b" /* View_MatRadioButton_0 */], radio_typings_index_ngfactory["a" /* RenderType_MatRadioButton */])), core["Ab" /* ɵdid */](1, 4440064, [[2, 4]], 0, esm2015_radio["b" /* MatRadioButton */], [[2, esm2015_radio["c" /* MatRadioGroup */]], core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], collections["d" /* UniqueSelectionDispatcher */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, esm2015_radio["a" /* MAT_RADIO_DEFAULT_OPTIONS */]]], { value: [0, "value"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).checked; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).disabled; var currVal_2 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 1).color === "primary"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 1).color === "accent"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 1).color === "warn"); var currVal_6 = (0 - 1); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit; _ck(_v, 2, 0, currVal_9); });
}
function View_SettingsComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-breadcrumbs", [["title", "Overview"]], null, null, null, breadcrumbs_component_ngfactory["b" /* View_BreadcrumbsComponent_0 */], breadcrumbs_component_ngfactory["a" /* RenderType_BreadcrumbsComponent */])), core["Ab" /* ɵdid */](1, 114688, null, 0, breadcrumbs_component["a" /* BreadcrumbsComponent */], [], { title: [0, "title"], crumbs: [1, "crumbs"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 67, "form", [["fxLayout", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](3, 16384, null, 0, fesm2015_forms["A" /* ɵangular_packages_forms_forms_z */], [], null, null), core["Ab" /* ɵdid */](4, 540672, null, 0, fesm2015_forms["l" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["d" /* ControlContainer */], null, [fesm2015_forms["l" /* FormGroupDirective */]]), core["Ab" /* ɵdid */](6, 16384, null, 0, fesm2015_forms["r" /* NgControlStatusGroup */], [[4, fesm2015_forms["d" /* ControlContainer */]]], null, null), core["Ab" /* ɵdid */](7, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["Bb" /* ɵeld */](8, 0, null, null, 61, "mat-card", [["class", "scrolling mat-card"], ["fxFlex", "60"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](9, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](10, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](11, 0, null, 0, 4, "mat-card-header", [["class", "mat-card-header"]], null, null, null, card_typings_index_ngfactory["c" /* View_MatCardHeader_0 */], card_typings_index_ngfactory["b" /* RenderType_MatCardHeader */])), core["Ab" /* ɵdid */](12, 49152, null, 0, card["e" /* MatCardHeader */], [], null, null), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), core["Ab" /* ɵdid */](14, 16384, null, 0, card["i" /* MatCardTitle */], [], null, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Preferences"])), (_l()(), core["Bb" /* ɵeld */](16, 0, null, 0, 51, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), core["Ab" /* ɵdid */](17, 16384, null, 0, card["d" /* MatCardContent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](18, 0, null, null, 49, "div", [["class", "mat-table"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](19, 0, null, null, 6, "div", [["class", "mat-header-row"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](20, 0, null, null, 2, "div", [["class", "mat-header-cell"], ["fxFlex", "30"]], null, null, null, null, null)), core["Ab" /* ɵdid */](21, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Setting"])), (_l()(), core["Bb" /* ɵeld */](23, 0, null, null, 2, "div", [["class", "mat-header-cell"], ["fxFlex", "70"]], null, null, null, null, null)), core["Ab" /* ɵdid */](24, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Options"])), (_l()(), core["Bb" /* ɵeld */](26, 0, null, null, 14, "div", [["class", "mat-row"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](27, 0, null, null, 2, "div", [["class", "mat-cell"], ["fxFlex", "30"]], null, null, null, null, null)), core["Ab" /* ɵdid */](28, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Language"])), (_l()(), core["Bb" /* ɵeld */](30, 0, null, null, 10, "div", [["class", "mat-cell"], ["fxFlex", "30"]], null, null, null, null, null)), core["Ab" /* ɵdid */](31, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](32, 0, null, null, 8, "mat-radio-group", [["class", "mat-radio-group"], ["formControlName", "selectedLanguage"], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), core["Ab" /* ɵdid */](33, 1064960, null, 1, esm2015_radio["c" /* MatRadioGroup */], [core["i" /* ChangeDetectorRef */]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _radios: 1 }), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_radio["c" /* MatRadioGroup */]]), core["Ab" /* ɵdid */](36, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](38, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SettingsComponent_1)), core["Ab" /* ɵdid */](40, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["Bb" /* ɵeld */](41, 0, null, null, 14, "div", [["class", "mat-row"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](42, 0, null, null, 2, "div", [["class", "mat-cell"], ["fxFlex", "30"]], null, null, null, null, null)), core["Ab" /* ɵdid */](43, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Theme"])), (_l()(), core["Bb" /* ɵeld */](45, 0, null, null, 10, "div", [["class", "mat-cell"], ["fxFlex", "70"]], null, null, null, null, null)), core["Ab" /* ɵdid */](46, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](47, 0, null, null, 8, "mat-radio-group", [["class", "mat-radio-group"], ["formControlName", "selectedTheme"], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), core["Ab" /* ɵdid */](48, 1064960, null, 1, esm2015_radio["c" /* MatRadioGroup */], [core["i" /* ChangeDetectorRef */]], null, null), core["Tb" /* ɵqud */](603979776, 2, { _radios: 1 }), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_radio["c" /* MatRadioGroup */]]), core["Ab" /* ɵdid */](51, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](53, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SettingsComponent_2)), core["Ab" /* ɵdid */](55, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["Bb" /* ɵeld */](56, 0, null, null, 11, "div", [["class", "mat-row"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](57, 0, null, null, 2, "div", [["class", "mat-cell"], ["fxFlex", "30"]], null, null, null, null, null)), core["Ab" /* ɵdid */](58, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Push Notifications"])), (_l()(), core["Bb" /* ɵeld */](60, 0, null, null, 7, "div", [["class", "mat-cell"], ["fxFlex", "70"]], null, null, null, null, null)), core["Ab" /* ɵdid */](61, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), core["Bb" /* ɵeld */](62, 0, null, null, 5, "mat-slide-toggle", [["aria-label", "enableNotifications"], ["class", "add-padding-right mat-slide-toggle"], ["formControlName", "enableNotifications"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 63)._inputElement.nativeElement.focus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_MatSlideToggle_0, RenderType_MatSlideToggle)), core["Ab" /* ɵdid */](63, 1228800, null, 0, slide_toggle_MatSlideToggle, [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], core["i" /* ChangeDetectorRef */], [8, null], core["D" /* NgZone */], MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, bidi["b" /* Directionality */]]], { ariaLabel: [0, "ariaLabel"] }, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [slide_toggle_MatSlideToggle]), core["Ab" /* ɵdid */](65, 671744, null, 0, fesm2015_forms["j" /* FormControlName */], [[3, fesm2015_forms["d" /* ControlContainer */]], [8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { name: [0, "name"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["j" /* FormControlName */]]), core["Ab" /* ɵdid */](67, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), (_l()(), core["Bb" /* ɵeld */](68, 0, null, 0, 1, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), core["Ab" /* ɵdid */](69, 16384, null, 0, card["b" /* MatCardActions */], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Overview"; var currVal_1 = _co.crumbs; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_9 = _co.settingsForm; _ck(_v, 4, 0, currVal_9); var currVal_10 = "row"; _ck(_v, 7, 0, currVal_10); var currVal_12 = "60"; _ck(_v, 9, 0, currVal_12); var currVal_13 = "30"; _ck(_v, 21, 0, currVal_13); var currVal_14 = "70"; _ck(_v, 24, 0, currVal_14); var currVal_15 = "30"; _ck(_v, 28, 0, currVal_15); var currVal_16 = "30"; _ck(_v, 31, 0, currVal_16); var currVal_24 = "selectedLanguage"; _ck(_v, 36, 0, currVal_24); var currVal_25 = _co.languages; _ck(_v, 40, 0, currVal_25); var currVal_26 = "30"; _ck(_v, 43, 0, currVal_26); var currVal_27 = "70"; _ck(_v, 46, 0, currVal_27); var currVal_35 = "selectedTheme"; _ck(_v, 51, 0, currVal_35); var currVal_36 = _co.themes; _ck(_v, 55, 0, currVal_36); var currVal_37 = "30"; _ck(_v, 58, 0, currVal_37); var currVal_38 = "70"; _ck(_v, 61, 0, currVal_38); var currVal_52 = "enableNotifications"; _ck(_v, 63, 0, currVal_52); var currVal_53 = "enableNotifications"; _ck(_v, 65, 0, currVal_53); }, function (_ck, _v) { var currVal_2 = core["Nb" /* ɵnov */](_v, 6).ngClassUntouched; var currVal_3 = core["Nb" /* ɵnov */](_v, 6).ngClassTouched; var currVal_4 = core["Nb" /* ɵnov */](_v, 6).ngClassPristine; var currVal_5 = core["Nb" /* ɵnov */](_v, 6).ngClassDirty; var currVal_6 = core["Nb" /* ɵnov */](_v, 6).ngClassValid; var currVal_7 = core["Nb" /* ɵnov */](_v, 6).ngClassInvalid; var currVal_8 = core["Nb" /* ɵnov */](_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_11 = (core["Nb" /* ɵnov */](_v, 10)._animationMode === "NoopAnimations"); _ck(_v, 8, 0, currVal_11); var currVal_17 = core["Nb" /* ɵnov */](_v, 38).ngClassUntouched; var currVal_18 = core["Nb" /* ɵnov */](_v, 38).ngClassTouched; var currVal_19 = core["Nb" /* ɵnov */](_v, 38).ngClassPristine; var currVal_20 = core["Nb" /* ɵnov */](_v, 38).ngClassDirty; var currVal_21 = core["Nb" /* ɵnov */](_v, 38).ngClassValid; var currVal_22 = core["Nb" /* ɵnov */](_v, 38).ngClassInvalid; var currVal_23 = core["Nb" /* ɵnov */](_v, 38).ngClassPending; _ck(_v, 32, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_28 = core["Nb" /* ɵnov */](_v, 53).ngClassUntouched; var currVal_29 = core["Nb" /* ɵnov */](_v, 53).ngClassTouched; var currVal_30 = core["Nb" /* ɵnov */](_v, 53).ngClassPristine; var currVal_31 = core["Nb" /* ɵnov */](_v, 53).ngClassDirty; var currVal_32 = core["Nb" /* ɵnov */](_v, 53).ngClassValid; var currVal_33 = core["Nb" /* ɵnov */](_v, 53).ngClassInvalid; var currVal_34 = core["Nb" /* ɵnov */](_v, 53).ngClassPending; _ck(_v, 47, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_39 = core["Nb" /* ɵnov */](_v, 63).id; var currVal_40 = (core["Nb" /* ɵnov */](_v, 63).disabled ? null : (0 - 1)); var currVal_41 = core["Nb" /* ɵnov */](_v, 63).checked; var currVal_42 = core["Nb" /* ɵnov */](_v, 63).disabled; var currVal_43 = (core["Nb" /* ɵnov */](_v, 63).labelPosition == "before"); var currVal_44 = (core["Nb" /* ɵnov */](_v, 63)._animationMode === "NoopAnimations"); var currVal_45 = core["Nb" /* ɵnov */](_v, 67).ngClassUntouched; var currVal_46 = core["Nb" /* ɵnov */](_v, 67).ngClassTouched; var currVal_47 = core["Nb" /* ɵnov */](_v, 67).ngClassPristine; var currVal_48 = core["Nb" /* ɵnov */](_v, 67).ngClassDirty; var currVal_49 = core["Nb" /* ɵnov */](_v, 67).ngClassValid; var currVal_50 = core["Nb" /* ɵnov */](_v, 67).ngClassInvalid; var currVal_51 = core["Nb" /* ɵnov */](_v, 67).ngClassPending; _ck(_v, 62, 1, [currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51]); var currVal_54 = (core["Nb" /* ɵnov */](_v, 69).align === "end"); _ck(_v, 68, 0, currVal_54); });
}
function View_SettingsComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-settings", [], null, null, null, View_SettingsComponent_0, RenderType_SettingsComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, settings_component_SettingsComponent, [fesm2015_forms["g" /* FormBuilder */], ngxs_store["j" /* Store */], push_notification_service["a" /* PushNotificationService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SettingsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-settings", settings_component_SettingsComponent, View_SettingsComponent_Host_0, {}, {}, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/overlay.js
var overlay = __webpack_require__("D4FV");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/menu.js
var menu = __webpack_require__("aFla");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/tooltip.js
var tooltip = __webpack_require__("zab8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.state.ts
var notifications_state = __webpack_require__("klo5");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.service.ts
var notifications_service = __webpack_require__("OeRc");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/services/inject-tokens.ts

const DIALOGFLOW_TOKEN = new core["s" /* InjectionToken */]('DIALOGFLOW_TOKEN');


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/feature.service.ts
var feature_service = __webpack_require__("kyl8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/common/fesm2015/http.js
var http = __webpack_require__("6uGs");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/ng-let/ng-let.module.ts
var ng_let_module = __webpack_require__("elFF");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/router-link-match/router-link-match.module.ts
var router_link_match_module = __webpack_require__("hBHQ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/grid.js
var grid = __webpack_require__("aLyt");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/flex-layout.js
var flex_layout = __webpack_require__("CBf0");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/shared/src/lib/shared-flex-layout.module.ts
var shared_flex_layout_module = __webpack_require__("6SNH");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/shared/src/lib/shared-perfect-scrollbar.module.ts
var shared_perfect_scrollbar_module = __webpack_require__("c5IV");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/shared/src/lib/shared.module.ts
var shared_module = __webpack_require__("b2y2");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/breadcrumbs/src/lib/breadcrumbs.module.ts
var breadcrumbs_module = __webpack_require__("0PoK");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/chips.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event object emitted by MatChip when selected or deselected.
 */
class MatChipSelectionChange {
    /**
     * @param {?} source
     * @param {?} selected
     * @param {?=} isUserInput
     */
    constructor(source, selected, isUserInput = false) {
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
}
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
class MatChipBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatChipMixinBase = /*@__PURE__*/ Object(esm2015_core["E" /* mixinColor */])(/*@__PURE__*/ Object(esm2015_core["F" /* mixinDisableRipple */])(/*@__PURE__*/ Object(esm2015_core["G" /* mixinDisabled */])(MatChipBase)), 'primary');
let MatChipAvatar = /*@__PURE__*/ (() => {
    class MatChipAvatar {
    }
    return MatChipAvatar;
})();
let MatChipTrailingIcon = /*@__PURE__*/ (() => {
    class MatChipTrailingIcon {
    }
    return MatChipTrailingIcon;
})();
let chips_MatChip = /*@__PURE__*/ (() => {
    class MatChip extends _MatChipMixinBase {
        /**
         * @param {?} _elementRef
         * @param {?} _ngZone
         * @param {?} platform
         * @param {?} globalRippleOptions
         * @param {?=} animationMode
         */
        constructor(_elementRef, _ngZone, platform, globalRippleOptions, 
        // @breaking-change 8.0.0 `animationMode` parameter to become required.
        animationMode) {
            super(_elementRef);
            this._elementRef = _elementRef;
            this._ngZone = _ngZone;
            /**
             * Whether the chip has focus.
             */
            this._hasFocus = false;
            /**
             * Whether the chip list is selectable
             */
            this.chipListSelectable = true;
            /**
             * Whether the chip list is in multi-selection mode.
             */
            this._chipListMultiple = false;
            this._selected = false;
            this._selectable = true;
            this._removable = true;
            /**
             * Emits when the chip is focused.
             */
            this._onFocus = new Subject["a" /* Subject */]();
            /**
             * Emits when the chip is blured.
             */
            this._onBlur = new Subject["a" /* Subject */]();
            /**
             * Emitted when the chip is selected or deselected.
             */
            this.selectionChange = new core["o" /* EventEmitter */]();
            /**
             * Emitted when the chip is destroyed.
             */
            this.destroyed = new core["o" /* EventEmitter */]();
            /**
             * Emitted when a chip is to be removed.
             */
            this.removed = new core["o" /* EventEmitter */]();
            this._addHostClassName();
            this._chipRipple = new esm2015_core["B" /* RippleRenderer */](this, _ngZone, _elementRef, platform);
            this._chipRipple.setupTriggerEvents(_elementRef.nativeElement);
            this.rippleConfig = globalRippleOptions || {};
            this._animationsDisabled = animationMode === 'NoopAnimations';
        }
        /**
         * Whether ripples are disabled on interaction
         * \@docs-private
         * @return {?}
         */
        get rippleDisabled() {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        }
        /**
         * Whether the chip is selected.
         * @return {?}
         */
        get selected() { return this._selected; }
        /**
         * @param {?} value
         * @return {?}
         */
        set selected(value) {
            /** @type {?} */
            const coercedValue = Object(coercion["c" /* coerceBooleanProperty */])(value);
            if (coercedValue !== this._selected) {
                this._selected = coercedValue;
                this._dispatchSelectionChange();
            }
        }
        /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */
        get value() {
            return this._value != undefined
                ? this._value
                : this._elementRef.nativeElement.textContent;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set value(value) { this._value = value; }
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         * @return {?}
         */
        get selectable() { return this._selectable && this.chipListSelectable; }
        /**
         * @param {?} value
         * @return {?}
         */
        set selectable(value) {
            this._selectable = Object(coercion["c" /* coerceBooleanProperty */])(value);
        }
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */
        get removable() { return this._removable; }
        /**
         * @param {?} value
         * @return {?}
         */
        set removable(value) {
            this._removable = Object(coercion["c" /* coerceBooleanProperty */])(value);
        }
        /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */
        get ariaSelected() {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ?
                this.selected.toString() : null;
        }
        /**
         * @return {?}
         */
        _addHostClassName() {
            /** @type {?} */
            const basicChipAttrName = 'mat-basic-chip';
            /** @type {?} */
            const element = ( /** @type {?} */(this._elementRef.nativeElement));
            if (element.hasAttribute(basicChipAttrName) ||
                element.tagName.toLowerCase() === basicChipAttrName) {
                element.classList.add(basicChipAttrName);
                return;
            }
            else {
                element.classList.add('mat-standard-chip');
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.destroyed.emit({ chip: this });
            this._chipRipple._removeTriggerEvents();
        }
        /**
         * Selects the chip.
         * @return {?}
         */
        select() {
            if (!this._selected) {
                this._selected = true;
                this._dispatchSelectionChange();
            }
        }
        /**
         * Deselects the chip.
         * @return {?}
         */
        deselect() {
            if (this._selected) {
                this._selected = false;
                this._dispatchSelectionChange();
            }
        }
        /**
         * Select this chip and emit selected event
         * @return {?}
         */
        selectViaInteraction() {
            if (!this._selected) {
                this._selected = true;
                this._dispatchSelectionChange(true);
            }
        }
        /**
         * Toggles the current selected state of this chip.
         * @param {?=} isUserInput
         * @return {?}
         */
        toggleSelected(isUserInput = false) {
            this._selected = !this.selected;
            this._dispatchSelectionChange(isUserInput);
            return this.selected;
        }
        /**
         * Allows for programmatic focusing of the chip.
         * @return {?}
         */
        focus() {
            if (!this._hasFocus) {
                this._elementRef.nativeElement.focus();
                this._onFocus.next({ chip: this });
            }
            this._hasFocus = true;
        }
        /**
         * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
         * BACKSPACE keys are pressed.
         *
         * Informs any listeners of the removal request. Does not remove the chip from the DOM.
         * @return {?}
         */
        remove() {
            if (this.removable) {
                this.removed.emit({ chip: this });
            }
        }
        /**
         * Handles click events on the chip.
         * @param {?} event
         * @return {?}
         */
        _handleClick(event) {
            if (this.disabled) {
                event.preventDefault();
            }
            else {
                event.stopPropagation();
            }
        }
        /**
         * Handle custom key presses.
         * @param {?} event
         * @return {?}
         */
        _handleKeydown(event) {
            if (this.disabled) {
                return;
            }
            switch (event.keyCode) {
                case keycodes["c" /* DELETE */]:
                case keycodes["b" /* BACKSPACE */]:
                    // If we are removable, remove the focused chip
                    this.remove();
                    // Always prevent so page navigation does not occur
                    event.preventDefault();
                    break;
                case keycodes["n" /* SPACE */]:
                    // If we are selectable, toggle the focused chip
                    if (this.selectable) {
                        this.toggleSelected(true);
                    }
                    // Always prevent space from scrolling the page since the list has focus
                    event.preventDefault();
                    break;
            }
        }
        /**
         * @return {?}
         */
        _blur() {
            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable
                .asObservable()
                .pipe(Object(take["a" /* take */])(1))
                .subscribe(( /**
         * @return {?}
         */() => {
                this._ngZone.run(( /**
                 * @return {?}
                 */() => {
                    this._hasFocus = false;
                    this._onBlur.next({ chip: this });
                }));
            }));
        }
        /**
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */
        _dispatchSelectionChange(isUserInput = false) {
            this.selectionChange.emit({
                source: this,
                isUserInput,
                selected: this._selected
            });
        }
    }
    return MatChip;
})();
let MatChipRemove = /*@__PURE__*/ (() => {
    class MatChipRemove {
        /**
         * @param {?} _parentChip
         */
        constructor(_parentChip) {
            this._parentChip = _parentChip;
        }
        /**
         * Calls the parent chip's public `remove()` method if applicable.
         * @param {?} event
         * @return {?}
         */
        _handleClick(event) {
            /** @type {?} */
            const parentChip = this._parentChip;
            if (parentChip.removable && !parentChip.disabled) {
                parentChip.remove();
            }
            // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.
            event.stopPropagation();
        }
    }
    return MatChipRemove;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for the chips module.
 * @type {?}
 */
const MAT_CHIPS_DEFAULT_OPTIONS = /*@__PURE__*/ new core["s" /* InjectionToken */]('mat-chips-default-options');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
class MatChipListBase {
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
/** @type {?} */
const _MatChipListMixinBase = /*@__PURE__*/ Object(esm2015_core["H" /* mixinErrorState */])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
/** @type {?} */
let chips_nextUniqueId = 0;
/**
 * Change event object that is emitted when the chip list value has changed.
 */
class MatChipListChange {
    /**
     * @param {?} source
     * @param {?} value
     */
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
let chips_MatChipList = /*@__PURE__*/ (() => {
    class MatChipList extends _MatChipListMixinBase {
        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         * @param {?} _dir
         * @param {?} _parentForm
         * @param {?} _parentFormGroup
         * @param {?} _defaultErrorStateMatcher
         * @param {?} ngControl
         */
        constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
            super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._dir = _dir;
            this.ngControl = ngControl;
            /**
             * Implemented as part of MatFormFieldControl.
             * \@docs-private
             */
            this.controlType = 'mat-chip-list';
            /**
             * When a chip is destroyed, we store the index of the destroyed chip until the chips
             * query list notifies about the update. This is necessary because we cannot determine an
             * appropriate chip that should receive focus until the array of chips updated completely.
             */
            this._lastDestroyedChipIndex = null;
            /**
             * Subject that emits when the component has been destroyed.
             */
            this._destroyed = new Subject["a" /* Subject */]();
            /**
             * Uid of the chip list
             */
            this._uid = `mat-chip-list-${chips_nextUniqueId++}`;
            /**
             * Tab index for the chip list.
             */
            this._tabIndex = 0;
            /**
             * User defined tab index.
             * When it is not null, use user defined tab index. Otherwise use _tabIndex
             */
            this._userTabIndex = null;
            /**
             * Function when touched
             */
            this._onTouched = ( /**
             * @return {?}
             */() => { });
            /**
             * Function when changed
             */
            this._onChange = ( /**
             * @return {?}
             */() => { });
            this._multiple = false;
            this._compareWith = ( /**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */(o1, o2) => o1 === o2);
            this._required = false;
            this._disabled = false;
            /**
             * Orientation of the chip list.
             */
            this.ariaOrientation = 'horizontal';
            this._selectable = true;
            /**
             * Event emitted when the selected chip list value has been changed by the user.
             */
            this.change = new core["o" /* EventEmitter */]();
            /**
             * Event that emits whenever the raw value of the chip-list changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             * \@docs-private
             */
            this.valueChange = new core["o" /* EventEmitter */]();
            if (this.ngControl) {
                this.ngControl.valueAccessor = this;
            }
        }
        /**
         * The array of selected chips inside chip list.
         * @return {?}
         */
        get selected() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The ARIA role applied to the chip list.
         * @return {?}
         */
        get role() { return this.empty ? null : 'listbox'; }
        /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */
        get multiple() { return this._multiple; }
        /**
         * @param {?} value
         * @return {?}
         */
        set multiple(value) {
            this._multiple = Object(coercion["c" /* coerceBooleanProperty */])(value);
            this._syncChipsState();
        }
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        get compareWith() { return this._compareWith; }
        /**
         * @param {?} fn
         * @return {?}
         */
        set compareWith(fn) {
            this._compareWith = fn;
            if (this._selectionModel) {
                // A different comparator means the selection could change.
                this._initializeSelection();
            }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get value() { return this._value; }
        /**
         * @param {?} value
         * @return {?}
         */
        set value(value) {
            this.writeValue(value);
            this._value = value;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get id() {
            return this._chipInput ? this._chipInput.id : this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get required() { return this._required; }
        /**
         * @param {?} value
         * @return {?}
         */
        set required(value) {
            this._required = Object(coercion["c" /* coerceBooleanProperty */])(value);
            this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get placeholder() {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set placeholder(value) {
            this._placeholder = value;
            this.stateChanges.next();
        }
        /**
         * Whether any chips or the matChipInput inside of this chip-list has focus.
         * @return {?}
         */
        get focused() {
            return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get empty() {
            return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get shouldLabelFloat() { return !this.empty || this.focused; }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) {
            this._disabled = Object(coercion["c" /* coerceBooleanProperty */])(value);
            this._syncChipsState();
        }
        /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         * @return {?}
         */
        get selectable() { return this._selectable; }
        /**
         * @param {?} value
         * @return {?}
         */
        set selectable(value) {
            this._selectable = Object(coercion["c" /* coerceBooleanProperty */])(value);
            if (this.chips) {
                this.chips.forEach(( /**
                 * @param {?} chip
                 * @return {?}
                 *//**
                 * @param {?} chip
                 * @return {?}
                 */ chip => chip.chipListSelectable = this._selectable));
            }
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set tabIndex(value) {
            this._userTabIndex = value;
            this._tabIndex = value;
        }
        /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */
        get chipSelectionChanges() {
            return Object(merge["a" /* merge */])(...this.chips.map(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => chip.selectionChange)));
        }
        /**
         * Combined stream of all of the child chips' focus change events.
         * @return {?}
         */
        get chipFocusChanges() {
            return Object(merge["a" /* merge */])(...this.chips.map(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => chip._onFocus)));
        }
        /**
         * Combined stream of all of the child chips' blur change events.
         * @return {?}
         */
        get chipBlurChanges() {
            return Object(merge["a" /* merge */])(...this.chips.map(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => chip._onBlur)));
        }
        /**
         * Combined stream of all of the child chips' remove change events.
         * @return {?}
         */
        get chipRemoveChanges() {
            return Object(merge["a" /* merge */])(...this.chips.map(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => chip.destroyed)));
        }
        /**
         * @return {?}
         */
        ngAfterContentInit() {
            this._keyManager = new a11y["g" /* FocusKeyManager */](this.chips)
                .withWrap()
                .withVerticalOrientation()
                .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
            if (this._dir) {
                this._dir.change
                    .pipe(Object(takeUntil["a" /* takeUntil */])(this._destroyed))
                    .subscribe(( /**
             * @param {?} dir
             * @return {?}
             *//**
             * @param {?} dir
             * @return {?}
             */ dir => this._keyManager.withHorizontalOrientation(dir)));
            }
            this._keyManager.tabOut.pipe(Object(takeUntil["a" /* takeUntil */])(this._destroyed)).subscribe(( /**
             * @return {?}
             */() => {
                this._allowFocusEscape();
            }));
            // When the list changes, re-subscribe
            this.chips.changes.pipe(Object(startWith["a" /* startWith */])(null), Object(takeUntil["a" /* takeUntil */])(this._destroyed)).subscribe(( /**
             * @return {?}
             */() => {
                if (this.disabled) {
                    // Since this happens after the content has been
                    // checked, we need to defer it to the next tick.
                    Promise.resolve().then(( /**
                     * @return {?}
                     */() => {
                        this._syncChipsState();
                    }));
                }
                this._resetChips();
                // Reset chips selected/deselected status
                this._initializeSelection();
                // Check to see if we need to update our tab index
                this._updateTabIndex();
                // Check to see if we have a destroyed chip and need to refocus
                this._updateFocusForDestroyedChips();
                this.stateChanges.next();
            }));
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this._selectionModel = new collections["c" /* SelectionModel */](this.multiple, undefined, false);
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        ngDoCheck() {
            if (this.ngControl) {
                // We need to re-evaluate this on every change detection cycle, because there are some
                // error triggers that we can't subscribe to (e.g. parent form submissions). This means
                // that whatever logic is in here has to be super lean or we risk destroying the performance.
                this.updateErrorState();
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._destroyed.next();
            this._destroyed.complete();
            this.stateChanges.complete();
            this._dropSubscriptions();
        }
        /**
         * Associates an HTML input element with this chip list.
         * @param {?} inputElement
         * @return {?}
         */
        registerInput(inputElement) {
            this._chipInput = inputElement;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */
        setDescribedByIds(ids) { this._ariaDescribedby = ids.join(' '); }
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            if (this.chips) {
                this._setSelectionByValue(value, false);
            }
        }
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this._onChange = fn;
        }
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this._onTouched = fn;
        }
        // Implemented as part of ControlValueAccessor.
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} event
         * @return {?}
         */
        onContainerClick(event) {
            if (!this._originatesFromChip(event)) {
                this.focus();
            }
        }
        /**
         * Focuses the first non-disabled chip in this chip list, or the associated input when there
         * are no eligible chips.
         * @return {?}
         */
        focus() {
            if (this.disabled) {
                return;
            }
            // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list
            if (this._chipInput && this._chipInput.focused) {
                // do nothing
            }
            else if (this.chips.length > 0) {
                this._keyManager.setFirstItemActive();
                this.stateChanges.next();
            }
            else {
                this._focusInput();
                this.stateChanges.next();
            }
        }
        /**
         * Attempt to focus an input if we have one.
         * @return {?}
         */
        _focusInput() {
            if (this._chipInput) {
                this._chipInput.focus();
            }
        }
        /**
         * Pass events to the keyboard manager. Available here for tests.
         * @param {?} event
         * @return {?}
         */
        _keydown(event) {
            /** @type {?} */
            const target = ( /** @type {?} */(event.target));
            // If they are on an empty input and hit backspace, focus the last chip
            if (event.keyCode === keycodes["b" /* BACKSPACE */] && this._isInputEmpty(target)) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else if (target && target.classList.contains('mat-chip')) {
                if (event.keyCode === keycodes["h" /* HOME */]) {
                    this._keyManager.setFirstItemActive();
                    event.preventDefault();
                }
                else if (event.keyCode === keycodes["e" /* END */]) {
                    this._keyManager.setLastItemActive();
                    event.preventDefault();
                }
                else {
                    this._keyManager.onKeydown(event);
                }
                this.stateChanges.next();
            }
        }
        /**
         * Check the tab index as you should not be allowed to focus an empty list.
         * @protected
         * @return {?}
         */
        _updateTabIndex() {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
        }
        /**
         * If the amount of chips changed, we need to update the
         * key manager state and focus the next closest chip.
         * @protected
         * @return {?}
         */
        _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
                if (this.chips.length) {
                    /** @type {?} */
                    const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                    this._keyManager.setActiveItem(newChipIndex);
                }
                else {
                    this.focus();
                }
            }
            this._lastDestroyedChipIndex = null;
        }
        /**
         * Utility to ensure all indexes are valid.
         *
         * @private
         * @param {?} index The index to be checked.
         * @return {?} True if the index is valid for our list of chips.
         */
        _isValidIndex(index) {
            return index >= 0 && index < this.chips.length;
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        _isInputEmpty(element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
                /** @type {?} */
                let input = ( /** @type {?} */(element));
                return !input.value;
            }
            return false;
        }
        /**
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?}
         */
        _setSelectionByValue(value, isUserInput = true) {
            this._clearSelection();
            this.chips.forEach(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => chip.deselect()));
            if (Array.isArray(value)) {
                value.forEach(( /**
                 * @param {?} currentValue
                 * @return {?}
                 *//**
                 * @param {?} currentValue
                 * @return {?}
                 */ currentValue => this._selectValue(currentValue, isUserInput)));
                this._sortValues();
            }
            else {
                /** @type {?} */
                const correspondingChip = this._selectValue(value, isUserInput);
                // Shift focus to the active item. Note that we shouldn't do this in multiple
                // mode, because we don't know what chip the user interacted with last.
                if (correspondingChip) {
                    if (isUserInput) {
                        this._keyManager.setActiveItem(correspondingChip);
                    }
                }
            }
        }
        /**
         * Finds and selects the chip based on its value.
         * @private
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?} Chip that has the corresponding value.
         */
        _selectValue(value, isUserInput = true) {
            /** @type {?} */
            const correspondingChip = this.chips.find(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => {
                return chip.value != null && this._compareWith(chip.value, value);
            }));
            if (correspondingChip) {
                isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
                this._selectionModel.select(correspondingChip);
            }
            return correspondingChip;
        }
        /**
         * @private
         * @return {?}
         */
        _initializeSelection() {
            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(( /**
             * @return {?}
             */() => {
                if (this.ngControl || this._value) {
                    this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                    this.stateChanges.next();
                }
            }));
        }
        /**
         * Deselects every chip in the list.
         * @private
         * @param {?=} skip Chip that should not be deselected.
         * @return {?}
         */
        _clearSelection(skip) {
            this._selectionModel.clear();
            this.chips.forEach(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => {
                if (chip !== skip) {
                    chip.deselect();
                }
            }));
            this.stateChanges.next();
        }
        /**
         * Sorts the model values, ensuring that they keep the same
         * order that they have in the panel.
         * @private
         * @return {?}
         */
        _sortValues() {
            if (this._multiple) {
                this._selectionModel.clear();
                this.chips.forEach(( /**
                 * @param {?} chip
                 * @return {?}
                 *//**
                 * @param {?} chip
                 * @return {?}
                 */ chip => {
                    if (chip.selected) {
                        this._selectionModel.select(chip);
                    }
                }));
                this.stateChanges.next();
            }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */
        _propagateChanges(fallbackValue) {
            /** @type {?} */
            let valueToEmit = null;
            if (Array.isArray(this.selected)) {
                valueToEmit = this.selected.map(( /**
                 * @param {?} chip
                 * @return {?}
                 *//**
                 * @param {?} chip
                 * @return {?}
                 */ chip => chip.value));
            }
            else {
                valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }
            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);
            this._onChange(valueToEmit);
            this._changeDetectorRef.markForCheck();
        }
        /**
         * When blurred, mark the field as touched when focus moved outside the chip list.
         * @return {?}
         */
        _blur() {
            if (!this._hasFocusedChip()) {
                this._keyManager.setActiveItem(-1);
            }
            if (!this.disabled) {
                if (this._chipInput) {
                    // If there's a chip input, we should check whether the focus moved to chip input.
                    // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                    // to chip input, do nothing.
                    // Timeout is needed to wait for the focus() event trigger on chip input.
                    setTimeout(( /**
                     * @return {?}
                     */() => {
                        if (!this.focused) {
                            this._markAsTouched();
                        }
                    }));
                }
                else {
                    // If there's no chip input, then mark the field as touched.
                    this._markAsTouched();
                }
            }
        }
        /**
         * Mark the field as touched
         * @return {?}
         */
        _markAsTouched() {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
        /**
         * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
         * user to tab out of it. This prevents the list from capturing focus and redirecting
         * it back to the first chip, creating a focus trap, if it user tries to tab away.
         * @return {?}
         */
        _allowFocusEscape() {
            if (this._tabIndex !== -1) {
                this._tabIndex = -1;
                setTimeout(( /**
                 * @return {?}
                 */() => {
                    this._tabIndex = this._userTabIndex || 0;
                    this._changeDetectorRef.markForCheck();
                }));
            }
        }
        /**
         * @private
         * @return {?}
         */
        _resetChips() {
            this._dropSubscriptions();
            this._listenToChipsFocus();
            this._listenToChipsSelection();
            this._listenToChipsRemoved();
        }
        /**
         * @private
         * @return {?}
         */
        _dropSubscriptions() {
            if (this._chipFocusSubscription) {
                this._chipFocusSubscription.unsubscribe();
                this._chipFocusSubscription = null;
            }
            if (this._chipBlurSubscription) {
                this._chipBlurSubscription.unsubscribe();
                this._chipBlurSubscription = null;
            }
            if (this._chipSelectionSubscription) {
                this._chipSelectionSubscription.unsubscribe();
                this._chipSelectionSubscription = null;
            }
            if (this._chipRemoveSubscription) {
                this._chipRemoveSubscription.unsubscribe();
                this._chipRemoveSubscription = null;
            }
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */
        _listenToChipsSelection() {
            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(( /**
             * @param {?} event
             * @return {?}
             *//**
             * @param {?} event
             * @return {?}
             */ event => {
                event.source.selected
                    ? this._selectionModel.select(event.source)
                    : this._selectionModel.deselect(event.source);
                // For single selection chip list, make sure the deselected value is unselected.
                if (!this.multiple) {
                    this.chips.forEach(( /**
                     * @param {?} chip
                     * @return {?}
                     *//**
                     * @param {?} chip
                     * @return {?}
                     */ chip => {
                        if (!this._selectionModel.isSelected(chip) && chip.selected) {
                            chip.deselect();
                        }
                    }));
                }
                if (event.isUserInput) {
                    this._propagateChanges();
                }
            }));
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */
        _listenToChipsFocus() {
            this._chipFocusSubscription = this.chipFocusChanges.subscribe(( /**
             * @param {?} event
             * @return {?}
             *//**
             * @param {?} event
             * @return {?}
             */ event => {
                /** @type {?} */
                let chipIndex = this.chips.toArray().indexOf(event.chip);
                if (this._isValidIndex(chipIndex)) {
                    this._keyManager.updateActiveItemIndex(chipIndex);
                }
                this.stateChanges.next();
            }));
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(( /**
             * @return {?}
             */() => {
                this._blur();
                this.stateChanges.next();
            }));
        }
        /**
         * @private
         * @return {?}
         */
        _listenToChipsRemoved() {
            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(( /**
             * @param {?} event
             * @return {?}
             *//**
             * @param {?} event
             * @return {?}
             */ event => {
                /** @type {?} */
                const chip = event.chip;
                /** @type {?} */
                const chipIndex = this.chips.toArray().indexOf(event.chip);
                // In case the chip that will be removed is currently focused, we temporarily store
                // the index in order to be able to determine an appropriate sibling chip that will
                // receive focus.
                if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                    this._lastDestroyedChipIndex = chipIndex;
                }
            }));
        }
        /**
         * Checks whether an event comes from inside a chip element.
         * @private
         * @param {?} event
         * @return {?}
         */
        _originatesFromChip(event) {
            /** @type {?} */
            let currentElement = ( /** @type {?} */(event.target));
            while (currentElement && currentElement !== this._elementRef.nativeElement) {
                if (currentElement.classList.contains('mat-chip')) {
                    return true;
                }
                currentElement = currentElement.parentElement;
            }
            return false;
        }
        /**
         * Checks whether any of the chips is focused.
         * @private
         * @return {?}
         */
        _hasFocusedChip() {
            return this.chips.some(( /**
             * @param {?} chip
             * @return {?}
             *//**
             * @param {?} chip
             * @return {?}
             */ chip => chip._hasFocus));
        }
        /**
         * Syncs the list's state with the individual chips.
         * @private
         * @return {?}
         */
        _syncChipsState() {
            if (this.chips) {
                this.chips.forEach(( /**
                 * @param {?} chip
                 * @return {?}
                 *//**
                 * @param {?} chip
                 * @return {?}
                 */ chip => {
                    chip.disabled = this._disabled;
                    chip._chipListMultiple = this.multiple;
                }));
            }
        }
    }
    return MatChipList;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids.
/** @type {?} */
let nextUniqueId$1 = 0;
let chips_MatChipInput = /*@__PURE__*/ (() => {
    class MatChipInput {
        /**
         * @param {?} _elementRef
         * @param {?} _defaultOptions
         */
        constructor(_elementRef, _defaultOptions) {
            this._elementRef = _elementRef;
            this._defaultOptions = _defaultOptions;
            /**
             * Whether the control is focused.
             */
            this.focused = false;
            this._addOnBlur = false;
            /**
             * The list of key codes that will trigger a chipEnd event.
             *
             * Defaults to `[ENTER]`.
             */
            this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
            /**
             * Emitted when a chip is to be added.
             */
            this.chipEnd = new core["o" /* EventEmitter */]();
            /**
             * The input's placeholder text.
             */
            this.placeholder = '';
            /**
             * Unique id for the input.
             */
            this.id = `mat-chip-list-input-${nextUniqueId$1++}`;
            this._disabled = false;
            this._inputElement = ( /** @type {?} */(this._elementRef.nativeElement));
        }
        /**
         * Register input for chip list
         * @param {?} value
         * @return {?}
         */
        set chipList(value) {
            if (value) {
                this._chipList = value;
                this._chipList.registerInput(this);
            }
        }
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */
        get addOnBlur() { return this._addOnBlur; }
        /**
         * @param {?} value
         * @return {?}
         */
        set addOnBlur(value) { this._addOnBlur = Object(coercion["c" /* coerceBooleanProperty */])(value); }
        /**
         * Whether the input is disabled.
         * @return {?}
         */
        get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._disabled = Object(coercion["c" /* coerceBooleanProperty */])(value); }
        /**
         * Whether the input is empty.
         * @return {?}
         */
        get empty() { return !this._inputElement.value; }
        /**
         * @return {?}
         */
        ngOnChanges() {
            this._chipList.stateChanges.next();
        }
        /**
         * Utility method to make host definition/tests more clear.
         * @param {?=} event
         * @return {?}
         */
        _keydown(event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === keycodes["o" /* TAB */] && !Object(keycodes["s" /* hasModifierKey */])(event, 'shiftKey')) {
                this._chipList._allowFocusEscape();
            }
            this._emitChipEnd(event);
        }
        /**
         * Checks to see if the blur should emit the (chipEnd) event.
         * @return {?}
         */
        _blur() {
            if (this.addOnBlur) {
                this._emitChipEnd();
            }
            this.focused = false;
            // Blur the chip list if it is not focused
            if (!this._chipList.focused) {
                this._chipList._blur();
            }
            this._chipList.stateChanges.next();
        }
        /**
         * @return {?}
         */
        _focus() {
            this.focused = true;
            this._chipList.stateChanges.next();
        }
        /**
         * Checks to see if the (chipEnd) event needs to be emitted.
         * @param {?=} event
         * @return {?}
         */
        _emitChipEnd(event) {
            if (!this._inputElement.value && !!event) {
                this._chipList._keydown(event);
            }
            if (!event || this._isSeparatorKey(event)) {
                this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
                if (event) {
                    event.preventDefault();
                }
            }
        }
        /**
         * @return {?}
         */
        _onInput() {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
        }
        /**
         * Focuses the input.
         * @return {?}
         */
        focus() {
            this._inputElement.focus();
        }
        /**
         * Checks whether a keycode is one of the configured separators.
         * @private
         * @param {?} event
         * @return {?}
         */
        _isSeparatorKey(event) {
            if (Object(keycodes["s" /* hasModifierKey */])(event)) {
                return false;
            }
            /** @type {?} */
            const separators = this.separatorKeyCodes;
            /** @type {?} */
            const keyCode = event.keyCode;
            return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
        }
    }
    return MatChipInput;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHIP_DECLARATIONS = [
    chips_MatChipList,
    chips_MatChip,
    chips_MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const chips_0 = ({
    separatorKeyCodes: [keycodes["f" /* ENTER */]]
});
let MatChipsModule = /*@__PURE__*/ (() => {
    class MatChipsModule {
    }
    return MatChipsModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/scrollbar/src/lib/scrollbar.module.ts
var scrollbar_module = __webpack_require__("ux1L");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/sidenav/src/lib/sidenav.module.ts
class SidenavModule {
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/click-outside/click-outside.module.ts
var click_outside_module = __webpack_require__("Ulry");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/grid-list.js
var grid_list = __webpack_require__("6ayG");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/theme-picker/src/lib/theme-picker-service.module.ts
var theme_picker_service_module = __webpack_require__("Aiwi");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/theme-picker/src/lib/theme-picker.module.ts
var theme_picker_module = __webpack_require__("ZPUs");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/badge.js
var badge = __webpack_require__("XsSI");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/date-fns/date-fns.module.ts
var date_fns_module = __webpack_require__("dKPd");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs/store/fesm2015/ngxs-store-internals.js
var ngxs_store_internals = __webpack_require__("38p9");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.module.ts
var notifications_module = __webpack_require__("mN6V");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.handler.ts
var notifications_handler = __webpack_require__("VZ8c");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/toolbar/src/lib/toolbar.module.ts
var toolbar_module = __webpack_require__("9INY");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/progress-bar.js
var progress_bar = __webpack_require__("EsQC");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/tabs.js
var tabs = __webpack_require__("Lv2H");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/quickpanel/src/lib/quickpanel.module.ts
var quickpanel_module = __webpack_require__("sBFP");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/mask/mask.module.ts
var mask_module = __webpack_require__("V4VB");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/draggable/src/lib/draggable.module.ts
class DraggableModule {
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/led/src/lib/led.module.ts
var led_module = __webpack_require__("HSX9");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/chat-box/src/lib/chat-box.module.ts

class chat_box_module_ChatBoxModule {
    static forRoot(config) {
        return {
            ngModule: chat_box_module_ChatBoxModule,
            providers: [
                {
                    provide: DIALOGFLOW_TOKEN,
                    useValue: config.accessToken,
                },
            ],
        };
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/auth/src/lib/auth.guard.ts
var auth_guard = __webpack_require__("68N2");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/dashboard/src/lib/dashboard.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModuleNgFactory", function() { return DashboardModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




























































































var DashboardModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](DashboardModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [router_ngfactory["a" /* ɵangular_packages_router_router_lNgFactory */], index_ngfactory["a" /* TooltipComponentNgFactory */], DashboardLayoutComponentNgFactory, OverviewComponentNgFactory, ProfileComponentNgFactory, SettingsComponentNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0, p0_1) { return [flex_layout_esm2015_core["k" /* removeStyles */](p0_0, p0_1)]; }, [common["d" /* DOCUMENT */], core["F" /* PLATFORM_ID */]]), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, esm2015_core["d" /* ErrorStateMatcher */], esm2015_core["d" /* ErrorStateMatcher */], []), core["Lb" /* ɵmpd */](4608, overlay["c" /* Overlay */], overlay["c" /* Overlay */], [overlay["i" /* ScrollStrategyOptions */], overlay["e" /* OverlayContainer */], core["k" /* ComponentFactoryResolver */], overlay["h" /* OverlayPositionBuilder */], overlay["f" /* OverlayKeyboardDispatcher */], core["t" /* Injector */], core["D" /* NgZone */], common["d" /* DOCUMENT */], bidi["b" /* Directionality */], [2, common["j" /* Location */]]]), core["Lb" /* ɵmpd */](5120, overlay["j" /* ɵc */], overlay["k" /* ɵd */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](5120, esm2015_select["a" /* MAT_SELECT_SCROLL_STRATEGY */], esm2015_select["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](4608, platform_browser["e" /* HAMMER_GESTURE_CONFIG */], esm2015_core["e" /* GestureConfig */], [[2, esm2015_core["i" /* MAT_HAMMER_OPTIONS */]], [2, esm2015_core["n" /* MatCommonModule */]]]), core["Lb" /* ɵmpd */](5120, menu["c" /* MAT_MENU_SCROLL_STRATEGY */], menu["j" /* ɵb23 */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](5120, tooltip["b" /* MAT_TOOLTIP_SCROLL_STRATEGY */], tooltip["c" /* MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](4608, ngxs_store["H" /* ɵs */], ngxs_store["H" /* ɵs */], [[3, ngxs_store["H" /* ɵs */]], [2, ngxs_store["d" /* NGXS_PLUGINS */]]]), core["Lb" /* ɵmpd */](4608, notifications_state["a" /* NotificationsState */], notifications_state["a" /* NotificationsState */], [notifications_service["a" /* NotificationsService */]]), core["Lb" /* ɵmpd */](4608, resizable_state_ResizableState, resizable_state_ResizableState, []), core["Lb" /* ɵmpd */](4608, drag_drop["g" /* DragDrop */], drag_drop["g" /* DragDrop */], [common["d" /* DOCUMENT */], core["D" /* NgZone */], scrolling["j" /* ViewportRuler */], drag_drop["i" /* DragDropRegistry */]]), core["Lb" /* ɵmpd */](4608, nlp_service_NlpService, nlp_service_NlpService, [DIALOGFLOW_TOKEN]), core["Lb" /* ɵmpd */](4608, speech_to_text_service_SpeechToTextService, speech_to_text_service_SpeechToTextService, [feature_service["b" /* FeatureService */], window_token["a" /* WINDOW */]]), core["Lb" /* ɵmpd */](4608, text_to_speech_service_TextToSpeechService, text_to_speech_service_TextToSpeechService, [feature_service["b" /* FeatureService */], window_token["a" /* WINDOW */]]), core["Lb" /* ɵmpd */](4608, chat_service_ChatService, chat_service_ChatService, [http["c" /* HttpClient */]]), core["Lb" /* ɵmpd */](4608, chat_box_store_ChatBoxState, chat_box_store_ChatBoxState, [nlp_service_NlpService, speech_to_text_service_SpeechToTextService, text_to_speech_service_TextToSpeechService, chat_service_ChatService, ngxs_store["j" /* Store */], ngxs_store["b" /* Actions */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, ng_let_module["a" /* NgLetModule */], ng_let_module["a" /* NgLetModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, router_link_match_module["a" /* RouterLinkMatchModule */], router_link_match_module["a" /* RouterLinkMatchModule */], []), core["Lb" /* ɵmpd */](1073742336, flex_layout_esm2015_core["c" /* CoreModule */], flex_layout_esm2015_core["c" /* CoreModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, flex["j" /* FlexModule */], flex["j" /* FlexModule */], []), core["Lb" /* ɵmpd */](1073742336, extended["c" /* ExtendedModule */], extended["c" /* ExtendedModule */], []), core["Lb" /* ɵmpd */](1073742336, grid["a" /* GridModule */], grid["a" /* GridModule */], []), core["Lb" /* ɵmpd */](1073742336, flex_layout["a" /* FlexLayoutModule */], flex_layout["a" /* FlexLayoutModule */], [[2, flex_layout_esm2015_core["h" /* SERVER_TOKEN */]], core["F" /* PLATFORM_ID */]]), core["Lb" /* ɵmpd */](1073742336, shared_flex_layout_module["a" /* SharedFlexLayoutModule */], shared_flex_layout_module["a" /* SharedFlexLayoutModule */], []), core["Lb" /* ɵmpd */](1073742336, ngx_perfect_scrollbar_es5["d" /* PerfectScrollbarModule */], ngx_perfect_scrollbar_es5["d" /* PerfectScrollbarModule */], []), core["Lb" /* ɵmpd */](1073742336, shared_perfect_scrollbar_module["a" /* SharedPerfectScrollbarModule */], shared_perfect_scrollbar_module["a" /* SharedPerfectScrollbarModule */], []), core["Lb" /* ɵmpd */](1073742336, shared_module["a" /* SharedModule */], shared_module["a" /* SharedModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, icon["c" /* MatIconModule */], icon["c" /* MatIconModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_router["u" /* RouterModule */], fesm2015_router["u" /* RouterModule */], [[2, fesm2015_router["A" /* ɵangular_packages_router_router_a */]], [2, fesm2015_router["q" /* Router */]]]), core["Lb" /* ɵmpd */](1073742336, breadcrumbs_module["a" /* BreadcrumbsModule */], breadcrumbs_module["a" /* BreadcrumbsModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_platform["b" /* PlatformModule */], esm2015_platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, scrolling["g" /* ScrollingModule */], scrolling["g" /* ScrollingModule */], []), core["Lb" /* ɵmpd */](1073742336, sidenav["h" /* MatSidenavModule */], sidenav["h" /* MatSidenavModule */], []), core["Lb" /* ɵmpd */](1073742336, card["g" /* MatCardModule */], card["g" /* MatCardModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_button["c" /* MatButtonModule */], esm2015_button["c" /* MatButtonModule */], []), core["Lb" /* ɵmpd */](1073742336, text_field["c" /* TextFieldModule */], text_field["c" /* TextFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, input["c" /* MatInputModule */], input["c" /* MatInputModule */], []), core["Lb" /* ɵmpd */](1073742336, portal["g" /* PortalModule */], portal["g" /* PortalModule */], []), core["Lb" /* ɵmpd */](1073742336, overlay["g" /* OverlayModule */], overlay["g" /* OverlayModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["w" /* MatPseudoCheckboxModule */], esm2015_core["w" /* MatPseudoCheckboxModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["t" /* MatOptionModule */], esm2015_core["t" /* MatOptionModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_select["d" /* MatSelectModule */], esm2015_select["d" /* MatSelectModule */], []), core["Lb" /* ɵmpd */](1073742336, divider["b" /* MatDividerModule */], divider["b" /* MatDividerModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["p" /* MatLineModule */], esm2015_core["p" /* MatLineModule */], []), core["Lb" /* ɵmpd */](1073742336, list["e" /* MatListModule */], list["e" /* MatListModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_radio["d" /* MatRadioModule */], esm2015_radio["d" /* MatRadioModule */], []), core["Lb" /* ɵmpd */](1073742336, MatSlideToggleModule, MatSlideToggleModule, []), core["Lb" /* ɵmpd */](1073742336, toolbar["b" /* MatToolbarModule */], toolbar["b" /* MatToolbarModule */], []), core["Lb" /* ɵmpd */](1073742336, MatChipsModule, MatChipsModule, []), core["Lb" /* ɵmpd */](1073742336, scrollbar_module["a" /* ScrollbarModule */], scrollbar_module["a" /* ScrollbarModule */], []), core["Lb" /* ɵmpd */](1073742336, SidenavModule, SidenavModule, []), core["Lb" /* ɵmpd */](1073742336, click_outside_module["a" /* ClickOutsideModule */], click_outside_module["a" /* ClickOutsideModule */], []), core["Lb" /* ɵmpd */](1073742336, menu["i" /* _MatMenuDirectivesModule */], menu["i" /* _MatMenuDirectivesModule */], []), core["Lb" /* ɵmpd */](1073742336, menu["f" /* MatMenuModule */], menu["f" /* MatMenuModule */], []), core["Lb" /* ɵmpd */](1073742336, grid_list["b" /* MatGridListModule */], grid_list["b" /* MatGridListModule */], []), core["Lb" /* ɵmpd */](1073742336, a11y["a" /* A11yModule */], a11y["a" /* A11yModule */], []), core["Lb" /* ɵmpd */](1073742336, tooltip["e" /* MatTooltipModule */], tooltip["e" /* MatTooltipModule */], []), core["Lb" /* ɵmpd */](1073742336, theme_picker_service_module["a" /* ThemePickerServiceModule */], theme_picker_service_module["a" /* ThemePickerServiceModule */], []), core["Lb" /* ɵmpd */](1073742336, theme_picker_module["a" /* ThemePickerModule */], theme_picker_module["a" /* ThemePickerModule */], []), core["Lb" /* ɵmpd */](1073742336, badge["b" /* MatBadgeModule */], badge["b" /* MatBadgeModule */], []), core["Lb" /* ɵmpd */](1073742336, date_fns_module["a" /* DateFnsModule */], date_fns_module["a" /* DateFnsModule */], []), core["Lb" /* ɵmpd */](512, ngxs_store["C" /* ɵn */], ngxs_store["C" /* ɵn */], [core["t" /* Injector */], ngxs_store["z" /* ɵk */], [3, ngxs_store["C" /* ɵn */]], ngxs_store["u" /* ɵc */], ngxs_store["D" /* ɵo */], ngxs_store["F" /* ɵq */], [2, ngxs_store_internals["a" /* INITIAL_STATE_TOKEN */]]]), core["Lb" /* ɵmpd */](1024, ngxs_store["w" /* ɵg */], function () { return [[notifications_state["a" /* NotificationsState */]], [chat_box_store_ChatBoxState]]; }, []), core["Lb" /* ɵmpd */](1073742336, ngxs_store["M" /* ɵx */], ngxs_store["M" /* ɵx */], [ngxs_store["j" /* Store */], ngxs_store["G" /* ɵr */], ngxs_store["C" /* ɵn */], [2, ngxs_store["w" /* ɵg */]], ngxs_store["L" /* ɵw */]]), core["Lb" /* ɵmpd */](1073742336, notifications_module["a" /* NotificationsModule */], notifications_module["a" /* NotificationsModule */], [notifications_handler["a" /* NotificationsHandler */]]), core["Lb" /* ɵmpd */](1073742336, toolbar_module["a" /* ToolbarModule */], toolbar_module["a" /* ToolbarModule */], []), core["Lb" /* ɵmpd */](1073742336, progress_bar["c" /* MatProgressBarModule */], progress_bar["c" /* MatProgressBarModule */], []), core["Lb" /* ɵmpd */](1073742336, tabs["j" /* MatTabsModule */], tabs["j" /* MatTabsModule */], []), core["Lb" /* ɵmpd */](1073742336, quickpanel_module["a" /* QuickpanelModule */], quickpanel_module["a" /* QuickpanelModule */], []), core["Lb" /* ɵmpd */](1073742336, mask_module["a" /* MaskModule */], mask_module["a" /* MaskModule */], []), core["Lb" /* ɵmpd */](1073742336, ngx_filepond["a" /* FilePondModule */], ngx_filepond["a" /* FilePondModule */], []), core["Lb" /* ɵmpd */](1073742336, DraggableModule, DraggableModule, []), core["Lb" /* ɵmpd */](1073742336, drag_drop["h" /* DragDropModule */], drag_drop["h" /* DragDropModule */], []), core["Lb" /* ɵmpd */](1073742336, led_module["a" /* LedModule */], led_module["a" /* LedModule */], []), core["Lb" /* ɵmpd */](1073742336, MatSliderModule, MatSliderModule, []), core["Lb" /* ɵmpd */](1073742336, CdkAccordionModule, CdkAccordionModule, []), core["Lb" /* ɵmpd */](1073742336, MatExpansionModule, MatExpansionModule, []), core["Lb" /* ɵmpd */](1073742336, ngxs_form_plugin["b" /* NgxsFormPluginModule */], ngxs_form_plugin["b" /* NgxsFormPluginModule */], []), core["Lb" /* ɵmpd */](1073742336, chat_box_module_ChatBoxModule, chat_box_module_ChatBoxModule, []), core["Lb" /* ɵmpd */](1073742336, DashboardModule, DashboardModule, []), core["Lb" /* ɵmpd */](256, flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], {}, []), core["Lb" /* ɵmpd */](1024, flex_layout_esm2015_core["a" /* BREAKPOINT */], function () { return [[]]; }, []), core["Lb" /* ɵmpd */](256, ngx_perfect_scrollbar_es5["a" /* PERFECT_SCROLLBAR_CONFIG */], shared_perfect_scrollbar_module["b" /* ɵ0 */], []), core["Lb" /* ɵmpd */](256, MAT_CHIPS_DEFAULT_OPTIONS, { separatorKeyCodes: [keycodes["f" /* ENTER */]] }, []), core["Lb" /* ɵmpd */](256, DIALOGFLOW_TOKEN, "37808bf14a19406cbe2a50cfd1332dd3", []), core["Lb" /* ɵmpd */](1024, fesm2015_router["n" /* ROUTES */], function () { return [[{ path: "", component: dashboard_layout_component_DashboardLayoutComponent, canActivate: [auth_guard["a" /* AuthGuard */]], data: ɵ0, children: [{ path: "", component: OverviewComponent, data: ɵ1 }, { path: "profile", component: profile_component_ProfileComponent, data: ɵ2 }, { path: "settings", component: settings_component_SettingsComponent, data: ɵ3 }, { path: "grid", loadChildren: ɵ4, data: ɵ5 }, { path: "experiments", loadChildren: ɵ6, data: ɵ7 }, { path: "widgets", loadChildren: ɵ8, data: ɵ9 }] }]]; }, [])]); });




/***/ }),

/***/ "WAnW":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePond 4.4.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? factory(exports)
    : undefined;
})(this, function(exports) {
  'use strict';

  var isNode = function isNode(value) {
    return value instanceof HTMLElement;
  };

  var createStore = function createStore(initialState) {
    var queries =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var actions =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    // internal state
    var state = Object.assign({}, initialState);

    // contains all actions for next frame, is clear when actions are requested
    var actionQueue = [];
    var dispatchQueue = [];

    // returns a duplicate of the current state
    var getState = function getState() {
      return Object.assign({}, state);
    };

    // returns a duplicate of the actions array and clears the actions array
    var processActionQueue = function processActionQueue() {
      // create copy of actions queue
      var queue = [].concat(actionQueue);

      // clear actions queue (we don't want no double actions)
      actionQueue.length = 0;

      return queue;
    };

    // processes actions that might block the main UI thread
    var processDispatchQueue = function processDispatchQueue() {
      // create copy of actions queue
      var queue = [].concat(dispatchQueue);

      // clear actions queue (we don't want no double actions)
      dispatchQueue.length = 0;

      // now dispatch these actions
      queue.forEach(function(_ref) {
        var type = _ref.type,
          data = _ref.data;
        dispatch(type, data);
      });
    };

    // adds a new action, calls its handler and
    var dispatch = function dispatch(type, data, isBlocking) {
      // is blocking action
      if (isBlocking) {
        dispatchQueue.push({
          type: type,
          data: data
        });

        return;
      }

      // if this action has a handler, handle the action
      if (actionHandlers[type]) {
        actionHandlers[type](data);
      }

      // now add action
      actionQueue.push({
        type: type,
        data: data
      });
    };

    var query = function query(str) {
      var _queryHandles;
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }
      return queryHandles[str]
        ? (_queryHandles = queryHandles)[str].apply(_queryHandles, args)
        : null;
    };

    var api = {
      getState: getState,
      processActionQueue: processActionQueue,
      processDispatchQueue: processDispatchQueue,
      dispatch: dispatch,
      query: query
    };

    var queryHandles = {};
    queries.forEach(function(query) {
      queryHandles = Object.assign({}, query(state), queryHandles);
    });

    var actionHandlers = {};
    actions.forEach(function(action) {
      actionHandlers = Object.assign(
        {},
        action(dispatch, query, state),
        actionHandlers
      );
    });

    return api;
  };

  var defineProperty = function defineProperty(obj, property, definition) {
    if (typeof definition === 'function') {
      obj[property] = definition;
      return;
    }
    Object.defineProperty(obj, property, Object.assign({}, definition));
  };

  var forin = function forin(obj, cb) {
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      cb(key, obj[key]);
    }
  };

  var createObject = function createObject(definition) {
    var obj = {};
    forin(definition, function(property) {
      defineProperty(obj, property, definition[property]);
    });
    return obj;
  };

  var attr = function attr(node, name) {
    var value =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (value === null) {
      return node.getAttribute(name) || node.hasAttribute(name);
    }
    node.setAttribute(name, value);
  };

  var ns = 'http://www.w3.org/2000/svg';
  var svgElements = ['svg', 'path']; // only svg elements used

  var isSVGElement = function isSVGElement(tag) {
    return svgElements.includes(tag);
  };

  var createElement = function createElement(tag, className) {
    var attributes =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof className === 'object') {
      attributes = className;
      className = null;
    }
    var element = isSVGElement(tag)
      ? document.createElementNS(ns, tag)
      : document.createElement(tag);
    if (className) {
      if (isSVGElement(tag)) {
        attr(element, 'class', className);
      } else {
        element.className = className;
      }
    }
    forin(attributes, function(name, value) {
      attr(element, name, value);
    });
    return element;
  };

  var appendChild = function appendChild(parent) {
    return function(child, index) {
      if (typeof index !== 'undefined' && parent.children[index]) {
        parent.insertBefore(child, parent.children[index]);
      } else {
        parent.appendChild(child);
      }
    };
  };

  var appendChildView = function appendChildView(parent, childViews) {
    return function(view, index) {
      if (typeof index !== 'undefined') {
        childViews.splice(index, 0, view);
      } else {
        childViews.push(view);
      }

      return view;
    };
  };

  var removeChildView = function removeChildView(parent, childViews) {
    return function(view) {
      // remove from child views
      childViews.splice(childViews.indexOf(view), 1);

      // remove the element
      if (view.element.parentNode) {
        parent.removeChild(view.element);
      }

      return view;
    };
  };

  var getViewRect = function getViewRect(
    elementRect,
    childViews,
    offset,
    scale
  ) {
    var left = offset[0] || elementRect.left;
    var top = offset[1] || elementRect.top;
    var right = left + elementRect.width;
    var bottom = top + elementRect.height * (scale[1] || 1);

    var rect = {
      // the rectangle of the element itself
      element: Object.assign({}, elementRect),

      // the rectangle of the element expanded to contain its children, does not include any margins
      inner: {
        left: elementRect.left,
        top: elementRect.top,
        right: elementRect.right,
        bottom: elementRect.bottom
      },

      // the rectangle of the element expanded to contain its children including own margin and child margins
      // margins will be added after we've recalculated the size
      outer: {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      }
    };

    // expand rect to fit all child rectangles
    childViews
      .filter(function(childView) {
        return !childView.isRectIgnored();
      })
      .map(function(childView) {
        return childView.rect;
      })
      .forEach(function(childViewRect) {
        expandRect(rect.inner, Object.assign({}, childViewRect.inner));
        expandRect(rect.outer, Object.assign({}, childViewRect.outer));
      });

    // calculate inner width and height
    calculateRectSize(rect.inner);

    // append additional margin (top and left margins are included in top and left automatically)
    rect.outer.bottom += rect.element.marginBottom;
    rect.outer.right += rect.element.marginRight;

    // calculate outer width and height
    calculateRectSize(rect.outer);

    return rect;
  };

  var expandRect = function expandRect(parent, child) {
    // adjust for parent offset
    child.top += parent.top;
    child.right += parent.left;
    child.bottom += parent.top;
    child.left += parent.left;

    if (child.bottom > parent.bottom) {
      parent.bottom = child.bottom;
    }

    if (child.right > parent.right) {
      parent.right = child.right;
    }
  };

  var calculateRectSize = function calculateRectSize(rect) {
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
  };

  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };

  /**
   * Determines if position is at destination
   * @param position
   * @param destination
   * @param velocity
   * @param errorMargin
   * @returns {boolean}
   */
  var thereYet = function thereYet(position, destination, velocity) {
    var errorMargin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;
    return (
      Math.abs(position - destination) < errorMargin &&
      Math.abs(velocity) < errorMargin
    );
  };

  /**
   * Spring animation
   */
  var spring =
    // default options
    function spring() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$stiffness = _ref.stiffness,
        stiffness = _ref$stiffness === void 0 ? 0.5 : _ref$stiffness,
        _ref$damping = _ref.damping,
        damping = _ref$damping === void 0 ? 0.75 : _ref$damping,
        _ref$mass = _ref.mass,
        mass = _ref$mass === void 0 ? 10 : _ref$mass;
      var target = null;
      var position = null;
      var velocity = 0;
      var resting = false;

      // updates spring state
      var interpolate = function interpolate() {
        // in rest, don't animate
        if (resting) {
          return;
        }

        // need at least a target or position to do springy things
        if (!(isNumber(target) && isNumber(position))) {
          resting = true;
          velocity = 0;
          return;
        }

        // calculate spring force
        var f = -(position - target) * stiffness;

        // update velocity by adding force based on mass
        velocity += f / mass;

        // update position by adding velocity
        position += velocity;

        // slow down based on amount of damping
        velocity *= damping;

        // we've arrived if we're near target and our velocity is near zero
        if (thereYet(position, target, velocity)) {
          position = target;
          velocity = 0;
          resting = true;

          // we done
          api.onupdate(position);
          api.oncomplete(position);
        } else {
          // progress update
          api.onupdate(position);
        }
      };

      /**
       * Set new target value
       * @param value
       */
      var setTarget = function setTarget(value) {
        // if currently has no position, set target and position to this value
        if (isNumber(value) && !isNumber(position)) {
          position = value;
        }

        // next target value will not be animated to
        if (target === null) {
          target = value;
          position = value;
        }

        // let start moving to target
        target = value;

        // already at target
        if (position === target || typeof target === 'undefined') {
          // now resting as target is current position, stop moving
          resting = true;
          velocity = 0;

          // done!
          api.onupdate(position);
          api.oncomplete(position);

          return;
        }

        resting = false;
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          set: setTarget,
          get: function get() {
            return target;
          }
        },

        resting: {
          get: function get() {
            return resting;
          }
        },

        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var easeLinear = function easeLinear(t) {
    return t;
  };
  var easeInOutQuad = function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  var tween =
    // default values
    function tween() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 500 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === void 0 ? easeInOutQuad : _ref$easing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay;
      var start = null;
      var t;
      var p;
      var resting = true;
      var reverse = false;
      var target = null;

      var interpolate = function interpolate(ts) {
        if (resting || target === null) {
          return;
        }

        if (start === null) {
          start = ts;
        }

        if (ts - start < delay) {
          return;
        }

        t = ts - start - delay;

        if (t < duration) {
          p = t / duration;
          api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
        } else {
          t = 1;
          p = reverse ? 0 : 1;
          api.onupdate(p * target);
          api.oncomplete(p * target);
          resting = true;
        }
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          get: function get() {
            return reverse ? 0 : target;
          },
          set: function set(value) {
            // is initial value
            if (target === null) {
              target = value;
              api.onupdate(value);
              api.oncomplete(value);
              return;
            }

            // want to tween to a smaller value and have a current value
            if (value < target) {
              target = 1;
              reverse = true;
            } else {
              // not tweening to a smaller value
              reverse = false;
              target = value;
            }

            // let's go!
            resting = false;
            start = null;
          }
        },

        resting: {
          get: function get() {
            return resting;
          }
        },

        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var animator = {
    spring: spring,
    tween: tween
  };

  /*
                       { type: 'spring', stiffness: .5, damping: .75, mass: 10 };
                       { translation: { type: 'spring', ... }, ... }
                       { translation: { x: { type: 'spring', ... } } }
                      */
  var createAnimator = function createAnimator(definition, category, property) {
    // default is single definition
    // we check if transform is set, if so, we check if property is set
    var def =
      definition[category] && typeof definition[category][property] === 'object'
        ? definition[category][property]
        : definition[category] || definition;

    var type = typeof def === 'string' ? def : def.type;
    var props = typeof def === 'object' ? Object.assign({}, def) : {};

    return animator[type] ? animator[type](props) : null;
  };

  var addGetSet = function addGetSet(keys, obj, props) {
    var overwrite =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    obj = Array.isArray(obj) ? obj : [obj];
    obj.forEach(function(o) {
      keys.forEach(function(key) {
        var name = key;
        var getter = function getter() {
          return props[key];
        };
        var setter = function setter(value) {
          return (props[key] = value);
        };

        if (typeof key === 'object') {
          name = key.key;
          getter = key.getter || getter;
          setter = key.setter || setter;
        }

        if (o[name] && !overwrite) {
          return;
        }

        o[name] = {
          get: getter,
          set: setter
        };
      });
    });
  };

  var isDefined = function isDefined(value) {
    return value != null;
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // setup animators

  var animations = function animations(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      viewState = _ref.viewState;
    // initial properties
    var initialProps = Object.assign({}, viewProps);

    // list of all active animations
    var animations = [];

    // setup animators
    forin(mixinConfig, function(property, animation) {
      var animator = createAnimator(animation);
      if (!animator) {
        return;
      }

      // when the animator updates, update the view state value
      animator.onupdate = function(value) {
        viewProps[property] = value;
      };

      // set animator target
      animator.target = initialProps[property];

      // when value is set, set the animator target value
      var prop = {
        key: property,
        setter: function setter(value) {
          // if already at target, we done!
          if (animator.target === value) {
            return;
          }

          animator.target = value;
        },
        getter: function getter() {
          return viewProps[property];
        }
      };

      // add getters and setters
      addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);

      // add it to the list for easy updating from the _write method
      animations.push(animator);
    });

    // expose internal write api
    return {
      write: function write(ts) {
        var resting = true;
        animations.forEach(function(animation) {
          if (!animation.resting) {
            resting = false;
          }
          animation.interpolate(ts);
        });
        return resting;
      },
      destroy: function destroy() {}
    };
  };

  var addEvent = function addEvent(element) {
    return function(type, fn) {
      element.addEventListener(type, fn);
    };
  };

  var removeEvent = function removeEvent(element) {
    return function(type, fn) {
      element.removeEventListener(type, fn);
    };
  };

  // mixin
  var listeners = function listeners(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      viewState = _ref.viewState,
      view = _ref.view;
    var events = [];

    var add = addEvent(view.element);
    var remove = removeEvent(view.element);

    viewExternalAPI.on = function(type, fn) {
      events.push({
        type: type,
        fn: fn
      });

      add(type, fn);
    };

    viewExternalAPI.off = function(type, fn) {
      events.splice(
        events.findIndex(function(event) {
          return event.type === type && event.fn === fn;
        }),
        1
      );

      remove(type, fn);
    };

    return {
      write: function write() {
        // not busy
        return true;
      },
      destroy: function destroy() {
        events.forEach(function(event) {
          remove(event.type, event.fn);
        });
      }
    };
  };

  // add to external api and link to props

  var apis = function apis(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewExternalAPI = _ref.viewExternalAPI;
    addGetSet(mixinConfig, viewExternalAPI, viewProps);
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // set initial state based on props in viewProps
  // apply as transforms each frame

  var defaults = {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    originX: 0,
    originY: 0
  };

  var styles = function styles(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      view = _ref.view;
    // initial props
    var initialProps = Object.assign({}, viewProps);

    // current props
    var currentProps = {};

    // we will add those properties to the external API and link them to the viewState
    addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);

    // override rect on internal and external rect getter so it takes in account transforms
    var getOffset = function getOffset() {
      return [viewProps['translateX'] || 0, viewProps['translateY'] || 0];
    };

    var getScale = function getScale() {
      return [viewProps['scaleX'] || 0, viewProps['scaleY'] || 0];
    };
    var getRect = function getRect() {
      return view.rect
        ? getViewRect(view.rect, view.childViews, getOffset(), getScale())
        : null;
    };
    viewInternalAPI.rect = { get: getRect };
    viewExternalAPI.rect = { get: getRect };

    // apply view props
    mixinConfig.forEach(function(key) {
      viewProps[key] =
        typeof initialProps[key] === 'undefined'
          ? defaults[key]
          : initialProps[key];
    });

    // expose api
    return {
      write: function write() {
        // see if props have changed
        if (!propsHaveChanged(currentProps, viewProps)) {
          return;
        }

        // moves element to correct position on screen
        applyStyles(view.element, viewProps);

        // store new transforms
        Object.assign(currentProps, Object.assign({}, viewProps));

        // no longer busy
        return true;
      },
      destroy: function destroy() {}
    };
  };

  var propsHaveChanged = function propsHaveChanged(currentProps, newProps) {
    // different amount of keys
    if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
      return true;
    }

    // lets analyze the individual props
    for (var prop in newProps) {
      if (newProps[prop] !== currentProps[prop]) {
        return true;
      }
    }

    return false;
  };

  var applyStyles = function applyStyles(element, _ref2) {
    var opacity = _ref2.opacity,
      perspective = _ref2.perspective,
      translateX = _ref2.translateX,
      translateY = _ref2.translateY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      rotateX = _ref2.rotateX,
      rotateY = _ref2.rotateY,
      rotateZ = _ref2.rotateZ,
      originX = _ref2.originX,
      originY = _ref2.originY,
      width = _ref2.width,
      height = _ref2.height;

    var transforms = '';
    var styles = '';

    // handle transform origin
    if (isDefined(originX) || isDefined(originY)) {
      styles +=
        'transform-origin: ' + (originX || 0) + 'px ' + (originY || 0) + 'px;';
    }

    // transform order is relevant
    // 0. perspective
    if (isDefined(perspective)) {
      transforms += 'perspective(' + perspective + 'px) ';
    }

    // 1. translate
    if (isDefined(translateX) || isDefined(translateY)) {
      transforms +=
        'translate3d(' +
        (translateX || 0) +
        'px, ' +
        (translateY || 0) +
        'px, 0) ';
    }

    // 2. scale
    if (isDefined(scaleX) || isDefined(scaleY)) {
      transforms +=
        'scale3d(' +
        (isDefined(scaleX) ? scaleX : 1) +
        ', ' +
        (isDefined(scaleY) ? scaleY : 1) +
        ', 1) ';
    }

    // 3. rotate
    if (isDefined(rotateZ)) {
      transforms += 'rotateZ(' + rotateZ + 'rad) ';
    }

    if (isDefined(rotateX)) {
      transforms += 'rotateX(' + rotateX + 'rad) ';
    }

    if (isDefined(rotateY)) {
      transforms += 'rotateY(' + rotateY + 'rad) ';
    }

    // add transforms
    if (transforms.length) {
      styles += 'transform:' + transforms + ';';
    }

    // add opacity
    if (isDefined(opacity)) {
      styles += 'opacity:' + opacity + ';';

      // if we reach zero, we make the element inaccessible
      if (opacity === 0) {
        styles += 'visibility:hidden;';
      }

      // if we're below 100% opacity this element can't be clicked
      if (opacity < 1) {
        styles += 'pointer-events:none;';
      }
    }

    // add height
    if (isDefined(height)) {
      styles += 'height:' + height + 'px;';
    }

    // add width
    if (isDefined(width)) {
      styles += 'width:' + width + 'px;';
    }

    // apply styles
    var elementCurrentStyle = element.elementCurrentStyle || '';

    // if new styles does not match current styles, lets update!
    if (
      styles.length !== elementCurrentStyle.length ||
      styles !== elementCurrentStyle
    ) {
      element.setAttribute('style', styles);
      // store current styles so we can compare them to new styles later on
      // _not_ getting the style attribute is faster
      element.elementCurrentStyle = styles;
    }
  };

  var Mixins = {
    styles: styles,
    listeners: listeners,
    animations: animations,
    apis: apis
  };

  var updateRect = function updateRect() {
    var rect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var element =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var style =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!element.layoutCalculated) {
      rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
      rect.marginTop = parseInt(style.marginTop, 10) || 0;
      rect.marginRight = parseInt(style.marginRight, 10) || 0;
      rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
      rect.marginLeft = parseInt(style.marginLeft, 10) || 0;
      element.layoutCalculated = true;
    }

    rect.left = element.offsetLeft || 0;
    rect.top = element.offsetTop || 0;
    rect.width = element.offsetWidth || 0;
    rect.height = element.offsetHeight || 0;

    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;

    rect.scrollTop = element.scrollTop;

    rect.hidden = element.offsetParent === null;

    return rect;
  };

  var createView =
    // default view definition
    function createView() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'div' : _ref$tag,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? null : _ref$name,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
        _ref$read = _ref.read,
        read = _ref$read === void 0 ? function() {} : _ref$read,
        _ref$write = _ref.write,
        write = _ref$write === void 0 ? function() {} : _ref$write,
        _ref$create = _ref.create,
        create = _ref$create === void 0 ? function() {} : _ref$create,
        _ref$destroy = _ref.destroy,
        destroy = _ref$destroy === void 0 ? function() {} : _ref$destroy,
        _ref$filterFrameActio = _ref.filterFrameActionsForChild,
        filterFrameActionsForChild =
          _ref$filterFrameActio === void 0
            ? function(child, actions) {
                return actions;
              }
            : _ref$filterFrameActio,
        _ref$didCreateView = _ref.didCreateView,
        didCreateView =
          _ref$didCreateView === void 0 ? function() {} : _ref$didCreateView,
        _ref$didWriteView = _ref.didWriteView,
        didWriteView =
          _ref$didWriteView === void 0 ? function() {} : _ref$didWriteView,
        _ref$ignoreRect = _ref.ignoreRect,
        ignoreRect = _ref$ignoreRect === void 0 ? false : _ref$ignoreRect,
        _ref$ignoreRectUpdate = _ref.ignoreRectUpdate,
        ignoreRectUpdate =
          _ref$ignoreRectUpdate === void 0 ? false : _ref$ignoreRectUpdate,
        _ref$mixins = _ref.mixins,
        mixins = _ref$mixins === void 0 ? [] : _ref$mixins;
      return function(
        // each view requires reference to store
        store
      ) {
        var props =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        // root element should not be changed
        var element = createElement(tag, 'filepond--' + name, attributes);

        // style reference should also not be changed
        var style = window.getComputedStyle(element, null);

        // element rectangle
        var rect = updateRect();
        var frameRect = null;

        // rest state
        var isResting = false;

        // pretty self explanatory
        var childViews = [];

        // loaded mixins
        var activeMixins = [];

        // references to created children
        var ref = {};

        // state used for each instance
        var state = {};

        // list of writers that will be called to update this view
        var writers = [
          write // default writer
        ];

        var readers = [
          read // default reader
        ];

        var destroyers = [
          destroy // default destroy
        ];

        // core view methods
        var getElement = function getElement() {
          return element;
        };
        var getChildViews = function getChildViews() {
          return childViews.concat();
        };
        var getReference = function getReference() {
          return ref;
        };
        var createChildView = function createChildView(store) {
          return function(view, props) {
            return view(store, props);
          };
        };
        var getRect = function getRect() {
          if (frameRect) {
            return frameRect;
          }
          frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
          return frameRect;
        };
        var getStyle = function getStyle() {
          return style;
        };

        /**
         * Read data from DOM
         * @private
         */
        var _read = function _read() {
          frameRect = null;

          // read child views
          childViews.forEach(function(child) {
            return child._read();
          });

          var shouldUpdate = !(ignoreRectUpdate && rect.width && rect.height);
          if (shouldUpdate) {
            updateRect(rect, element, style);
          }

          // readers
          var api = { root: internalAPI, props: props, rect: rect };
          readers.forEach(function(reader) {
            return reader(api);
          });
        };

        /**
         * Write data to DOM
         * @private
         */
        var _write = function _write(ts, frameActions, shouldOptimize) {
          // if no actions, we assume that the view is resting
          var resting = frameActions.length === 0;

          // writers
          writers.forEach(function(writer) {
            var writerResting = writer({
              props: props,
              root: internalAPI,
              actions: frameActions,
              timestamp: ts,
              shouldOptimize: shouldOptimize
            });

            if (writerResting === false) {
              resting = false;
            }
          });

          // run mixins
          activeMixins.forEach(function(mixin) {
            // if one of the mixins is still busy after write operation, we are not resting
            var mixinResting = mixin.write(ts);
            if (mixinResting === false) {
              resting = false;
            }
          });

          // updates child views that are currently attached to the DOM
          childViews
            .filter(function(child) {
              return !!child.element.parentNode;
            })
            .forEach(function(child) {
              // if a child view is not resting, we are not resting
              var childResting = child._write(
                ts,
                filterFrameActionsForChild(child, frameActions),
                shouldOptimize
              );

              if (!childResting) {
                resting = false;
              }
            });

          // append new elements to DOM and update those
          childViews
            //.filter(child => !child.element.parentNode)
            .forEach(function(child, index) {
              // skip
              if (child.element.parentNode) {
                return;
              }

              // append to DOM
              internalAPI.appendChild(child.element, index);

              // call read (need to know the size of these elements)
              child._read();

              // re-call write
              child._write(
                ts,
                filterFrameActionsForChild(child, frameActions),
                shouldOptimize
              );

              // we just added somthing to the dom, no rest
              resting = false;
            });

          // update resting state
          isResting = resting;

          didWriteView({
            props: props,
            root: internalAPI,
            actions: frameActions,
            timestamp: ts
          });

          // let parent know if we are resting
          return resting;
        };

        var _destroy = function _destroy() {
          activeMixins.forEach(function(mixin) {
            return mixin.destroy();
          });
          destroyers.forEach(function(destroyer) {
            destroyer({ root: internalAPI, props: props });
          });
          childViews.forEach(function(child) {
            return child._destroy();
          });
        };

        // sharedAPI
        var sharedAPIDefinition = {
          element: {
            get: getElement
          },

          style: {
            get: getStyle
          },

          childViews: {
            get: getChildViews
          }
        };

        // private API definition
        var internalAPIDefinition = Object.assign({}, sharedAPIDefinition, {
          rect: {
            get: getRect
          },

          // access to custom children references
          ref: {
            get: getReference
          },

          // dom modifiers
          is: function is(needle) {
            return name === needle;
          },
          appendChild: appendChild(element),
          createChildView: createChildView(store),
          linkView: function linkView(view) {
            childViews.push(view);
            return view;
          },
          unlinkView: function unlinkView(view) {
            childViews.splice(childViews.indexOf(view), 1);
          },
          appendChildView: appendChildView(element, childViews),
          removeChildView: removeChildView(element, childViews),
          registerWriter: function registerWriter(writer) {
            return writers.push(writer);
          },
          registerReader: function registerReader(reader) {
            return readers.push(reader);
          },
          registerDestroyer: function registerDestroyer(destroyer) {
            return destroyers.push(destroyer);
          },
          invalidateLayout: function invalidateLayout() {
            return (element.layoutCalculated = false);
          },

          // access to data store
          dispatch: store.dispatch,
          query: store.query
        });

        // public view API methods
        var externalAPIDefinition = {
          element: {
            get: getElement
          },

          childViews: {
            get: getChildViews
          },

          rect: {
            get: getRect
          },

          resting: {
            get: function get() {
              return isResting;
            }
          },

          isRectIgnored: function isRectIgnored() {
            return ignoreRect;
          },
          _read: _read,
          _write: _write,
          _destroy: _destroy
        };

        // mixin API methods
        var mixinAPIDefinition = Object.assign({}, sharedAPIDefinition, {
          rect: {
            get: function get() {
              return rect;
            }
          }
        });

        // add mixin functionality
        Object.keys(mixins)
          .sort(function(a, b) {
            // move styles to the back of the mixin list (so adjustments of other mixins are applied to the props correctly)
            if (a === 'styles') {
              return 1;
            } else if (b === 'styles') {
              return -1;
            }
            return 0;
          })
          .forEach(function(key) {
            var mixinAPI = Mixins[key]({
              mixinConfig: mixins[key],
              viewProps: props,
              viewState: state,
              viewInternalAPI: internalAPIDefinition,
              viewExternalAPI: externalAPIDefinition,
              view: createObject(mixinAPIDefinition)
            });

            if (mixinAPI) {
              activeMixins.push(mixinAPI);
            }
          });

        // construct private api
        var internalAPI = createObject(internalAPIDefinition);

        // create the view
        create({
          root: internalAPI,
          props: props
        });

        // append created child views to root node
        var childCount = element.children.length; // need to know the current child count so appending happens in correct order
        childViews.forEach(function(child, index) {
          internalAPI.appendChild(child.element, childCount + index);
        });

        // call did create
        didCreateView(internalAPI);

        // expose public api
        return createObject(externalAPIDefinition, props);
      };
    };

  var createPainter = function createPainter(read, write) {
    var fps =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

    var name = '__framePainter';

    // set global painter
    if (window[name]) {
      window[name].readers.push(read);
      window[name].writers.push(write);
      return;
    }

    window[name] = {
      readers: [read],
      writers: [write]
    };

    var painter = window[name];

    var interval = 1000 / fps;
    var last = null;
    var id = null;
    var requestTick = null;
    var cancelTick = null;

    var setTimerType = function setTimerType() {
      if (document.hidden) {
        requestTick = function requestTick() {
          return window.setTimeout(function() {
            return tick(performance.now());
          }, interval);
        };
        cancelTick = function cancelTick() {
          return window.clearTimeout(id);
        };
      } else {
        requestTick = function requestTick() {
          return window.requestAnimationFrame(tick);
        };
        cancelTick = function cancelTick() {
          return window.cancelAnimationFrame(id);
        };
      }
    };

    document.addEventListener('visibilitychange', function() {
      if (cancelTick) cancelTick();
      setTimerType();
      tick(performance.now());
    });

    var tick = function tick(ts) {
      // queue next tick
      id = requestTick(tick);

      // limit fps
      if (!last) {
        last = ts;
      }

      var delta = ts - last;

      if (delta <= interval) {
        // skip frame
        return;
      }

      // align next frame
      last = ts - (delta % interval);

      // update view
      painter.readers.forEach(function(read) {
        return read();
      });
      painter.writers.forEach(function(write) {
        return write(ts);
      });
    };

    setTimerType();
    tick(performance.now());

    return {
      pause: function pause() {
        cancelTick(id);
      }
    };
  };

  var createRoute = function createRoute(routes, fn) {
    return function(_ref) {
      var root = _ref.root,
        props = _ref.props,
        _ref$actions = _ref.actions,
        actions = _ref$actions === void 0 ? [] : _ref$actions,
        timestamp = _ref.timestamp,
        shouldOptimize = _ref.shouldOptimize;
      actions
        .filter(function(action) {
          return routes[action.type];
        })
        .forEach(function(action) {
          return routes[action.type]({
            root: root,
            props: props,
            action: action.data,
            timestamp: timestamp,
            shouldOptimize: shouldOptimize
          });
        });

      if (fn) {
        fn({
          root: root,
          props: props,
          actions: actions,
          timestamp: timestamp,
          shouldOptimize: shouldOptimize
        });
      }
    };
  };

  var insertBefore = function insertBefore(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  };

  var insertAfter = function insertAfter(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(
      newNode,
      referenceNode.nextSibling
    );
  };

  var isArray = function isArray(value) {
    return Array.isArray(value);
  };

  var isEmpty = function isEmpty(value) {
    return value == null;
  };

  var trim = function trim(str) {
    return str.trim();
  };

  var toString = function toString(value) {
    return '' + value;
  };

  var toArray = function toArray(value) {
    var splitter =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
    if (isEmpty(value)) {
      return [];
    }
    if (isArray(value)) {
      return value;
    }
    return toString(value)
      .split(splitter)
      .map(trim)
      .filter(function(str) {
        return str.length;
      });
  };

  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
  };

  var toBoolean = function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true';
  };

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var toNumber = function toNumber(value) {
    return isNumber(value)
      ? value
      : isString(value)
      ? toString(value).replace(/[a-z]+/gi, '')
      : 0;
  };

  var toInt = function toInt(value) {
    return parseInt(toNumber(value), 10);
  };

  var toFloat = function toFloat(value) {
    return parseFloat(toNumber(value));
  };

  var isInt = function isInt(value) {
    return isNumber(value) && isFinite(value) && Math.floor(value) === value;
  };

  var toBytes = function toBytes(value) {
    // is in bytes
    if (isInt(value)) {
      return value;
    }

    // is natural file size
    var naturalFileSize = toString(value).trim();

    // if is value in megabytes
    if (/MB$/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/MB$i/, '').trim();
      return toInt(naturalFileSize) * 1000 * 1000;
    }

    // if is value in kilobytes
    if (/KB/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/KB$i/, '').trim();
      return toInt(naturalFileSize) * 1000;
    }

    return toInt(naturalFileSize);
  };

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  var toFunctionReference = function toFunctionReference(string) {
    var ref = self;
    var levels = string.split('.');
    var level = null;
    while ((level = levels.shift())) {
      ref = ref[level];
      if (!ref) {
        return null;
      }
    }
    return ref;
  };

  var methods = {
    process: 'POST',
    revert: 'DELETE',
    fetch: 'GET',
    restore: 'GET',
    load: 'GET'
  };

  var createServerAPI = function createServerAPI(outline) {
    var api = {};

    api.url = isString(outline) ? outline : outline.url || '';
    api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 0;

    forin(methods, function(key) {
      api[key] = createAction(key, outline[key], methods[key], api.timeout);
    });

    // special treatment for remove
    api.remove = outline.remove || null;

    return api;
  };

  var createAction = function createAction(name, outline, method, timeout) {
    // is explicitely set to null so disable
    if (outline === null) {
      return null;
    }

    // if is custom function, done! Dev handles everything.
    if (typeof outline === 'function') {
      return outline;
    }

    // build action object
    var action = {
      url: method === 'GET' ? '?' + name + '=' : '',
      method: method,
      headers: {},
      withCredentials: false,
      timeout: timeout,
      onload: null,
      ondata: null,
      onerror: null
    };

    // is a single url
    if (isString(outline)) {
      action.url = outline;
      return action;
    }

    // overwrite
    Object.assign(action, outline);

    // see if should reformat headers;
    if (isString(action.headers)) {
      var parts = action.headers.split(/:(.+)/);
      action.headers = {
        header: parts[0],
        value: parts[1]
      };
    }

    // if is bool withCredentials
    action.withCredentials = toBoolean(action.withCredentials);

    return action;
  };

  var toServerAPI = function toServerAPI(value) {
    return createServerAPI(value);
  };

  var isNull = function isNull(value) {
    return value === null;
  };

  var isObject = function isObject(value) {
    return typeof value === 'object' && value !== null;
  };

  var isAPI = function isAPI(value) {
    return (
      isObject(value) &&
      isString(value.url) &&
      isObject(value.process) &&
      isObject(value.revert) &&
      isObject(value.restore) &&
      isObject(value.fetch)
    );
  };

  var getType = function getType(value) {
    if (isArray(value)) {
      return 'array';
    }

    if (isNull(value)) {
      return 'null';
    }

    if (isInt(value)) {
      return 'int';
    }

    if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
      return 'bytes';
    }

    if (isAPI(value)) {
      return 'api';
    }

    return typeof value;
  };

  var replaceSingleQuotes = function replaceSingleQuotes(str) {
    return str
      .replace(/{\s*'/g, '{"')
      .replace(/'\s*}/g, '"}')
      .replace(/'\s*:/g, '":')
      .replace(/:\s*'/g, ':"')
      .replace(/,\s*'/g, ',"')
      .replace(/'\s*,/g, '",');
  };

  var conversionTable = {
    array: toArray,
    boolean: toBoolean,
    int: function int(value) {
      return getType(value) === 'bytes' ? toBytes(value) : toInt(value);
    },
    number: toFloat,
    float: toFloat,
    bytes: toBytes,
    string: function string(value) {
      return isFunction(value) ? value : toString(value);
    },
    function: function _function(value) {
      return toFunctionReference(value);
    },
    serverapi: toServerAPI,
    object: function object(value) {
      try {
        return JSON.parse(replaceSingleQuotes(value));
      } catch (e) {
        return null;
      }
    }
  };

  var convertTo = function convertTo(value, type) {
    return conversionTable[type](value);
  };

  var getValueByType = function getValueByType(
    newValue,
    defaultValue,
    valueType
  ) {
    // can always assign default value
    if (newValue === defaultValue) {
      return newValue;
    }

    // get the type of the new value
    var newValueType = getType(newValue);

    // is valid type?
    if (newValueType !== valueType) {
      // is string input, let's attempt to convert
      var convertedValue = convertTo(newValue, valueType);

      // what is the type now
      newValueType = getType(convertedValue);

      // no valid conversions found
      if (convertedValue === null) {
        throw 'Trying to assign value with incorrect type to "' +
          option +
          '", allowed type: "' +
          valueType +
          '"';
      } else {
        newValue = convertedValue;
      }
    }

    // assign new value
    return newValue;
  };

  var createOption = function createOption(defaultValue, valueType) {
    var currentValue = defaultValue;
    return {
      enumerable: true,
      get: function get() {
        return currentValue;
      },
      set: function set(newValue) {
        currentValue = getValueByType(newValue, defaultValue, valueType);
      }
    };
  };

  var createOptions = function createOptions(options) {
    var obj = {};
    forin(options, function(prop) {
      var optionDefinition = options[prop];
      obj[prop] = createOption(optionDefinition[0], optionDefinition[1]);
    });
    return createObject(obj);
  };

  var createInitialState = function createInitialState(options) {
    return {
      // model
      items: [],

      // timeout used for calling update items
      listUpdateTimeout: null,

      // timeout used for stacking metadata updates
      itemUpdateTimeout: null,

      // queue of items waiting to be processed
      processingQueue: [],

      // options
      options: createOptions(options)
    };
  };

  var fromCamels = function fromCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string
      .split(/(?=[A-Z])/)
      .map(function(part) {
        return part.toLowerCase();
      })
      .join(separator);
  };

  var createOptionAPI = function createOptionAPI(store, options) {
    var obj = {};
    forin(options, function(key) {
      obj[key] = {
        get: function get() {
          return store.getState().options[key];
        },
        set: function set(value) {
          store.dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        }
      };
    });
    return obj;
  };

  var createOptionActions = function createOptionActions(options) {
    return function(dispatch, query, state) {
      var obj = {};
      forin(options, function(key) {
        var name = fromCamels(key, '_').toUpperCase();

        obj['SET_' + name] = function(action) {
          try {
            state.options[key] = action.value;
          } catch (e) {} // nope, failed

          // we successfully set the value of this option
          dispatch('DID_SET_' + name, { value: state.options[key] });
        };
      });
      return obj;
    };
  };

  var createOptionQueries = function createOptionQueries(options) {
    return function(state) {
      var obj = {};
      forin(options, function(key) {
        obj['GET_' + fromCamels(key, '_').toUpperCase()] = function(action) {
          return state.options[key];
        };
      });
      return obj;
    };
  };

  var InteractionMethod = {
    API: 1,
    DROP: 2,
    BROWSE: 3,
    PASTE: 4,
    NONE: 5
  };

  var getUniqueId = function getUniqueId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  var arrayRemove = function arrayRemove(arr, index) {
    return arr.splice(index, 1);
  };

  var on = function on() {
    var listeners = [];
    var off = function off(event, cb) {
      arrayRemove(
        listeners,
        listeners.findIndex(function(listener) {
          return listener.event === event && (listener.cb === cb || !cb);
        })
      );
    };
    return {
      fire: function fire(event) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        listeners
          .filter(function(listener) {
            return listener.event === event;
          })
          .map(function(listener) {
            return listener.cb;
          })
          .forEach(function(cb) {
            setTimeout(function() {
              cb.apply(void 0, args);
            }, 0);
          });
      },
      on: function on(event, cb) {
        listeners.push({ event: event, cb: cb });
      },
      onOnce: function onOnce(event, _cb) {
        listeners.push({
          event: event,
          cb: function cb() {
            off(event, _cb);
            _cb.apply(void 0, arguments);
          }
        });
      },
      off: off
    };
  };

  var copyObjectPropertiesToObject = function copyObjectPropertiesToObject(
    src,
    target,
    excluded
  ) {
    Object.getOwnPropertyNames(src)
      .filter(function(property) {
        return !excluded.includes(property);
      })
      .forEach(function(key) {
        return Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(src, key)
        );
      });
  };

  var PRIVATE = [
    'fire',
    'process',
    'revert',
    'load',
    'on',
    'off',
    'onOnce',
    'retryLoad',
    'extend',
    'archive',
    'archived',
    'release',
    'released',
    'requestProcessing',
    'freeze'
  ];

  var createItemAPI = function createItemAPI(item) {
    var api = {};
    copyObjectPropertiesToObject(item, api, PRIVATE);
    return api;
  };

  var removeReleasedItems = function removeReleasedItems(items) {
    items.forEach(function(item, index) {
      if (item.released) {
        arrayRemove(items, index);
      }
    });
  };

  var ItemStatus = {
    INIT: 1,
    IDLE: 2,
    PROCESSING_QUEUED: 9,
    PROCESSING: 3,
    PROCESSING_COMPLETE: 5,
    PROCESSING_ERROR: 6,
    PROCESSING_REVERT_ERROR: 10,
    LOADING: 7,
    LOAD_ERROR: 8
  };

  var FileOrigin = {
    INPUT: 1,
    LIMBO: 2,
    LOCAL: 3
  };

  var getNonNumeric = function getNonNumeric(str) {
    return /[^0-9]+/.exec(str);
  };

  var getDecimalSeparator = function getDecimalSeparator() {
    return getNonNumeric((1.1).toLocaleString())[0];
  };

  var getThousandsSeparator = function getThousandsSeparator() {
    // Added for browsers that do not return the thousands separator (happend on native browser Android 4.4.4)
    // We check against the normal toString output and if they're the same return a comma when decimal separator is a dot
    var decimalSeparator = getDecimalSeparator();
    var thousandsStringWithSeparator = (1000.0).toLocaleString();
    var thousandsStringWithoutSeparator = (1000.0).toString();
    if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
      return getNonNumeric(thousandsStringWithSeparator)[0];
    }
    return decimalSeparator === '.' ? ',' : '.';
  };

  var Type = {
    BOOLEAN: 'boolean',
    INT: 'int',
    NUMBER: 'number',
    STRING: 'string',
    ARRAY: 'array',
    OBJECT: 'object',
    FUNCTION: 'function',
    ACTION: 'action',
    SERVER_API: 'serverapi',
    REGEX: 'regex'
  };

  // all registered filters
  var filters = [];

  // loops over matching filters and passes options to each filter, returning the mapped results
  var applyFilterChain = function applyFilterChain(key, value, utils) {
    return new Promise(function(resolve, reject) {
      // find matching filters for this key
      var matchingFilters = filters
        .filter(function(f) {
          return f.key === key;
        })
        .map(function(f) {
          return f.cb;
        });

      // resolve now
      if (matchingFilters.length === 0) {
        resolve(value);
        return;
      }

      // first filter to kick things of
      var initialFilter = matchingFilters.shift();

      // chain filters
      matchingFilters
        .reduce(
          // loop over promises passing value to next promise
          function(current, next) {
            return current.then(function(value) {
              return next(value, utils);
            });
          },

          // call initial filter, will return a promise
          initialFilter(value, utils)

          // all executed
        )
        .then(function(value) {
          return resolve(value);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };

  var applyFilters = function applyFilters(key, value, utils) {
    return filters
      .filter(function(f) {
        return f.key === key;
      })
      .map(function(f) {
        return f.cb(value, utils);
      });
  };

  // adds a new filter to the list
  var addFilter = function addFilter(key, cb) {
    return filters.push({ key: key, cb: cb });
  };

  var extendDefaultOptions = function extendDefaultOptions(additionalOptions) {
    return Object.assign(defaultOptions, additionalOptions);
  };

  var getOptions = function getOptions() {
    return Object.assign({}, defaultOptions);
  };

  var setOptions = function setOptions(opts) {
    forin(opts, function(key, value) {
      // key does not exist, so this option cannot be set
      if (!defaultOptions[key]) {
        return;
      }
      defaultOptions[key][0] = getValueByType(
        value,
        defaultOptions[key][0],
        defaultOptions[key][1]
      );
    });
  };

  // default options on app
  var defaultOptions = {
    // the id to add to the root element
    id: [null, Type.STRING],

    // input field name to use
    name: ['filepond', Type.STRING],

    // disable the field
    disabled: [false, Type.BOOLEAN],

    // classname to put on wrapper
    className: [null, Type.STRING],

    // is the field required
    required: [false, Type.BOOLEAN],

    // Allow media capture when value is set
    captureMethod: [null, Type.STRING],
    // - "camera", "microphone" or "camcorder",
    // - Does not work with multiple on apple devices
    // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"

    // Feature toggles
    allowDrop: [true, Type.BOOLEAN], // Allow dropping of files
    allowBrowse: [true, Type.BOOLEAN], // Allow browsing the file system
    allowPaste: [true, Type.BOOLEAN], // Allow pasting files
    allowMultiple: [false, Type.BOOLEAN], // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
    allowReplace: [true, Type.BOOLEAN], // Allow dropping a file on other file to replace it (only works when multiple is set to false)
    allowRevert: [true, Type.BOOLEAN], // Allows user to revert file upload

    // Revert mode
    forceRevert: [false, Type.BOOLEAN], // Set to 'force' to require the file to be reverted before removal

    // Input requirements
    maxFiles: [null, Type.INT], // Max number of files
    checkValidity: [false, Type.BOOLEAN], // Enables custom validity messages

    // Where to put file
    itemInsertLocationFreedom: [true, Type.BOOLEAN], // Set to false to always add items to begin or end of list
    itemInsertLocation: ['before', Type.STRING], // Default index in list to add items that have been dropped at the top of the list
    itemInsertInterval: [75, Type.INT],

    // Drag 'n Drop related
    dropOnPage: [false, Type.BOOLEAN], // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
    dropOnElement: [true, Type.BOOLEAN], // Drop needs to happen on element (set to false to also load drops outside of Up)
    dropValidation: [false, Type.BOOLEAN], // Enable or disable validating files on drop
    ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], Type.ARRAY],

    // Upload related
    instantUpload: [true, Type.BOOLEAN], // Should upload files immidiately on drop
    maxParallelUploads: [2, Type.INT], // Maximum files to upload in parallel

    // The server api end points to use for uploading (see docs)
    server: [null, Type.SERVER_API],

    // Labels and status messages
    labelDecimalSeparator: [getDecimalSeparator(), Type.STRING], // Default is locale separator
    labelThousandsSeparator: [getThousandsSeparator(), Type.STRING], // Default is locale separator

    labelIdle: [
      'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
      Type.STRING
    ],
    labelInvalidField: ['Field contains invalid files', Type.STRING],
    labelFileWaitingForSize: ['Waiting for size', Type.STRING],
    labelFileSizeNotAvailable: ['Size not available', Type.STRING],
    labelFileCountSingular: ['file in list', Type.STRING],
    labelFileCountPlural: ['files in list', Type.STRING],
    labelFileLoading: ['Loading', Type.STRING],
    labelFileAdded: ['Added', Type.STRING], // assistive only
    labelFileLoadError: ['Error during load', Type.STRING],
    labelFileRemoved: ['Removed', Type.STRING], // assistive only
    labelFileRemoveError: ['Error during remove', Type.STRING],
    labelFileProcessing: ['Uploading', Type.STRING],
    labelFileProcessingComplete: ['Upload complete', Type.STRING],
    labelFileProcessingAborted: ['Upload cancelled', Type.STRING],
    labelFileProcessingError: ['Error during upload', Type.STRING],
    labelFileProcessingRevertError: ['Error during revert', Type.STRING],

    labelTapToCancel: ['tap to cancel', Type.STRING],
    labelTapToRetry: ['tap to retry', Type.STRING],
    labelTapToUndo: ['tap to undo', Type.STRING],

    labelButtonRemoveItem: ['Remove', Type.STRING],
    labelButtonAbortItemLoad: ['Abort', Type.STRING],
    labelButtonRetryItemLoad: ['Retry', Type.STRING],
    labelButtonAbortItemProcessing: ['Cancel', Type.STRING],
    labelButtonUndoItemProcessing: ['Undo', Type.STRING],
    labelButtonRetryItemProcessing: ['Retry', Type.STRING],
    labelButtonProcessItem: ['Upload', Type.STRING],

    // make sure width and height plus viewpox are even numbers so icons are nicely centered
    iconRemove: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    iconProcess: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
      Type.STRING
    ],

    iconRetry: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    iconUndo: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    iconDone: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    // event handlers
    oninit: [null, Type.FUNCTION],
    onwarning: [null, Type.FUNCTION],
    onerror: [null, Type.FUNCTION],
    onactivatefile: [null, Type.FUNCTION],
    onaddfilestart: [null, Type.FUNCTION],
    onaddfileprogress: [null, Type.FUNCTION],
    onaddfile: [null, Type.FUNCTION],
    onprocessfilestart: [null, Type.FUNCTION],
    onprocessfileprogress: [null, Type.FUNCTION],
    onprocessfileabort: [null, Type.FUNCTION],
    onprocessfilerevert: [null, Type.FUNCTION],
    onprocessfile: [null, Type.FUNCTION],
    onprocessfiles: [null, Type.FUNCTION],
    onremovefile: [null, Type.FUNCTION],
    onpreparefile: [null, Type.FUNCTION],
    onupdatefiles: [null, Type.FUNCTION],

    // hooks
    beforeDropFile: [null, Type.FUNCTION],
    beforeAddFile: [null, Type.FUNCTION],
    beforeRemoveFile: [null, Type.FUNCTION],

    // styles
    stylePanelLayout: [null, Type.STRING], // null 'integrated', 'compact', 'circle'
    stylePanelAspectRatio: [null, Type.STRING], // null or '3:2' or 1
    styleItemPanelAspectRatio: [null, Type.STRING],
    styleButtonRemoveItemPosition: ['left', Type.STRING],
    styleButtonProcessItemPosition: ['right', Type.STRING],
    styleLoadIndicatorPosition: ['right', Type.STRING],
    styleProgressIndicatorPosition: ['right', Type.STRING],

    // custom initial files array
    files: [[], Type.ARRAY]
  };

  var getItemByQuery = function getItemByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return items[0] || null;
    }

    // query is index
    if (isInt(query)) {
      return items[query] || null;
    }

    // if query is item, get the id
    if (typeof query === 'object') {
      query = query.id;
    }

    // assume query is a string and return item by id
    return (
      items.find(function(item) {
        return item.id === query;
      }) || null
    );
  };

  var getNumericAspectRatioFromString = function getNumericAspectRatioFromString(
    aspectRatio
  ) {
    if (isEmpty(aspectRatio)) {
      return aspectRatio;
    }
    if (/:/.test(aspectRatio)) {
      var parts = aspectRatio.split(':');
      return parts[1] / parts[0];
    }
    return parseFloat(aspectRatio);
  };

  var getActiveItems = function getActiveItems(items) {
    return items.filter(function(item) {
      return !item.archived;
    });
  };

  var Status = {
    EMPTY: 0,
    IDLE: 1, // waiting
    ERROR: 2, // a file is in error state
    BUSY: 3, // busy processing or loading
    READY: 4 // all files uploaded
  };

  var ITEM_ERROR = [
    ItemStatus.LOAD_ERROR,
    ItemStatus.PROCESSING_ERROR,
    ItemStatus.PROCESSING_REVERT_ERROR
  ];
  var ITEM_BUSY = [
    ItemStatus.LOADING,
    ItemStatus.PROCESSING,
    ItemStatus.PROCESSING_QUEUED,
    ItemStatus.INIT
  ];
  var ITEM_READY = [ItemStatus.PROCESSING_COMPLETE];

  var isItemInErrorState = function isItemInErrorState(item) {
    return ITEM_ERROR.includes(item.status);
  };
  var isItemInBusyState = function isItemInBusyState(item) {
    return ITEM_BUSY.includes(item.status);
  };
  var isItemInReadyState = function isItemInReadyState(item) {
    return ITEM_READY.includes(item.status);
  };

  var queries = function queries(state) {
    return {
      GET_STATUS: function GET_STATUS() {
        var items = getActiveItems(state.items);
        var EMPTY = Status.EMPTY,
          ERROR = Status.ERROR,
          BUSY = Status.BUSY,
          IDLE = Status.IDLE,
          READY = Status.READY;

        if (items.length === 0) return EMPTY;

        if (items.some(isItemInErrorState)) return ERROR;

        if (items.some(isItemInBusyState)) return BUSY;

        if (items.some(isItemInReadyState)) return READY;

        return IDLE;
      },

      GET_ITEM: function GET_ITEM(query) {
        return getItemByQuery(state.items, query);
      },

      GET_ACTIVE_ITEM: function GET_ACTIVE_ITEM(query) {
        return getItemByQuery(getActiveItems(state.items), query);
      },

      GET_ACTIVE_ITEMS: function GET_ACTIVE_ITEMS(query) {
        return getActiveItems(state.items);
      },

      GET_ITEMS: function GET_ITEMS(query) {
        return state.items;
      },

      GET_ITEM_NAME: function GET_ITEM_NAME(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.filename : null;
      },

      GET_ITEM_SIZE: function GET_ITEM_SIZE(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.fileSize : null;
      },

      GET_STYLES: function GET_STYLES() {
        return Object.keys(state.options)
          .filter(function(key) {
            return /^style/.test(key);
          })
          .map(function(option) {
            return {
              name: option,
              value: state.options[option]
            };
          });
      },

      GET_PANEL_ASPECT_RATIO: function GET_PANEL_ASPECT_RATIO() {
        var isShapeCircle = /circle/.test(state.options.stylePanelLayout);
        var aspectRatio = isShapeCircle
          ? 1
          : getNumericAspectRatioFromString(
              state.options.stylePanelAspectRatio
            );
        return aspectRatio;
      },

      GET_ITEM_PANEL_ASPECT_RATIO: function GET_ITEM_PANEL_ASPECT_RATIO() {
        return state.options.styleItemPanelAspectRatio;
      },

      GET_ITEMS_BY_STATUS: function GET_ITEMS_BY_STATUS(status) {
        return getActiveItems(state.items).filter(function(item) {
          return item.status === status;
        });
      },

      GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
        return getActiveItems(state.items).length;
      },

      IS_ASYNC: function IS_ASYNC() {
        return (
          isObject(state.options.server) &&
          (isObject(state.options.server.process) ||
            isFunction(state.options.server.process))
        );
      }
    };
  };

  var hasRoomForItem = function hasRoomForItem(state) {
    var count = getActiveItems(state.items).length;

    // if cannot have multiple items, to add one item it should currently not contain items
    if (!state.options.allowMultiple) {
      return count === 0;
    }

    // if allows multiple items, we check if a max item count has been set, if not, there's no limit
    var maxFileCount = state.options.maxFiles;
    if (maxFileCount === null) {
      return true;
    }

    // we check if the current count is smaller than the max count, if so, another file can still be added
    if (count < maxFileCount) {
      return true;
    }

    // no more room for another file
    return false;
  };

  var limit = function limit(value, min, max) {
    return Math.max(Math.min(max, value), min);
  };

  var arrayInsert = function arrayInsert(arr, index, item) {
    return arr.splice(index, 0, item);
  };

  var insertItem = function insertItem(items, item, index) {
    if (isEmpty(item)) {
      return null;
    }

    // if index is undefined, append
    if (typeof index === 'undefined') {
      items.push(item);
      return item;
    }

    // limit the index to the size of the items array
    index = limit(index, 0, items.length);

    // add item to array
    arrayInsert(items, index, item);

    // expose
    return item;
  };

  var isBase64DataURI = function isBase64DataURI(str) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
      str
    );
  };

  var getFilenameFromURL = function getFilenameFromURL(url) {
    return url
      .split('/')
      .pop()
      .split('?')
      .shift();
  };

  var getExtensionFromFilename = function getExtensionFromFilename(name) {
    return name.split('.').pop();
  };

  var guesstimateExtension = function guesstimateExtension(type) {
    // if no extension supplied, exit here
    if (typeof type !== 'string') {
      return '';
    }

    // get subtype
    var subtype = type.split('/').pop();

    // is svg subtype
    if (/svg/.test(subtype)) {
      return 'svg';
    }

    if (/zip|compressed/.test(subtype)) {
      return 'zip';
    }

    if (/plain/.test(subtype)) {
      return 'txt';
    }

    if (/msword/.test(subtype)) {
      return 'doc';
    }

    // if is valid subtype
    if (/[a-z]+/.test(subtype)) {
      // always use jpg extension
      if (subtype === 'jpeg') {
        return 'jpg';
      }

      // return subtype
      return subtype;
    }

    return '';
  };

  var leftPad = function leftPad(value) {
    var padding =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return (padding + value).slice(-padding.length);
  };

  var getDateString = function getDateString() {
    var date =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : new Date();
    return (
      date.getFullYear() +
      '-' +
      leftPad(date.getMonth() + 1, '00') +
      '-' +
      leftPad(date.getDate(), '00') +
      '_' +
      leftPad(date.getHours(), '00') +
      '-' +
      leftPad(date.getMinutes(), '00') +
      '-' +
      leftPad(date.getSeconds(), '00')
    );
  };

  var getFileFromBlob = function getFileFromBlob(blob, filename) {
    var type =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var extension =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var file =
      typeof type === 'string'
        ? blob.slice(0, blob.size, type)
        : blob.slice(0, blob.size, blob.type);
    file.lastModifiedDate = new Date();

    // if blob has name property, use as filename if no filename supplied
    if (!isString(filename)) {
      filename = getDateString();
    }

    // if filename supplied but no extension and filename has extension
    if (filename && extension === null && getExtensionFromFilename(filename)) {
      file.name = filename;
    } else {
      extension = extension || guesstimateExtension(file.type);
      file.name = filename + (extension ? '.' + extension : '');
    }

    return file;
  };

  var getBlobBuilder = function getBlobBuilder() {
    return (window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder);
  };

  var createBlob = function createBlob(arrayBuffer, mimeType) {
    var BB = getBlobBuilder();

    if (BB) {
      var bb = new BB();
      bb.append(arrayBuffer);
      return bb.getBlob(mimeType);
    }

    return new Blob([arrayBuffer], {
      type: mimeType
    });
  };

  var getBlobFromByteStringWithMimeType = function getBlobFromByteStringWithMimeType(
    byteString,
    mimeType
  ) {
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return createBlob(ab, mimeType);
  };

  var getMimeTypeFromBase64DataURI = function getMimeTypeFromBase64DataURI(
    dataURI
  ) {
    return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
  };

  var getBase64DataFromBase64DataURI = function getBase64DataFromBase64DataURI(
    dataURI
  ) {
    // get data part of string (remove data:image/jpeg...,)
    var data = dataURI.split(',')[1];

    // remove any whitespace as that causes InvalidCharacterError in IE
    return data.replace(/\s/g, '');
  };

  var getByteStringFromBase64DataURI = function getByteStringFromBase64DataURI(
    dataURI
  ) {
    return atob(getBase64DataFromBase64DataURI(dataURI));
  };

  var getBlobFromBase64DataURI = function getBlobFromBase64DataURI(dataURI) {
    var mimeType = getMimeTypeFromBase64DataURI(dataURI);
    var byteString = getByteStringFromBase64DataURI(dataURI);

    return getBlobFromByteStringWithMimeType(byteString, mimeType);
  };

  var getFileFromBase64DataURI = function getFileFromBase64DataURI(
    dataURI,
    filename,
    extension
  ) {
    return getFileFromBlob(
      getBlobFromBase64DataURI(dataURI),
      filename,
      null,
      extension
    );
  };

  var getFileNameFromHeader = function getFileNameFromHeader(header) {
    // test if is content disposition header, if not exit
    if (!/^content-disposition:/i.test(header)) return null;

    // get filename parts
    var matches = header
      .split(/filename=|filename\*=.+''/)
      .splice(1)
      .map(function(name) {
        return name.trim().replace(/^["']|[;"']{0,2}$/g, '');
      })
      .filter(function(name) {
        return name.length;
      });

    return matches.length ? decodeURI(matches[matches.length - 1]) : null;
  };

  var getFileSizeFromHeader = function getFileSizeFromHeader(header) {
    if (/content-length:/i.test(header)) {
      var size = header.match(/[0-9]+/)[0];
      return size ? parseInt(size, 10) : null;
    }
    return null;
  };

  var getTranfserIdFromHeader = function getTranfserIdFromHeader(header) {
    if (/x-content-transfer-id:/i.test(header)) {
      var id = (header.split(':')[1] || '').trim();
      return id || null;
    }
    return null;
  };

  var getFileInfoFromHeaders = function getFileInfoFromHeaders(headers) {
    var info = {
      source: null,
      name: null,
      size: null
    };

    var rows = headers.split('\n');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      for (
        var _iterator = rows[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var header = _step.value;

        var name = getFileNameFromHeader(header);
        if (name) {
          info.name = name;
          continue;
        }

        var size = getFileSizeFromHeader(header);
        if (size) {
          info.size = size;
          continue;
        }

        var source = getTranfserIdFromHeader(header);
        if (source) {
          info.source = source;
          continue;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return info;
  };

  var createFileLoader = function createFileLoader(fetchFn) {
    var state = {
      source: null,
      complete: false,
      progress: 0,
      size: null,
      timestamp: null,
      duration: 0,
      request: null
    };

    var getProgress = function getProgress() {
      return state.progress;
    };
    var abort = function abort() {
      if (state.request && state.request.abort) {
        state.request.abort();
      }
    };

    // load source
    var load = function load() {
      // get quick reference
      var source = state.source;

      api.fire('init', source);

      // Load Files
      if (source instanceof File) {
        api.fire('load', source);
      } else if (source instanceof Blob) {
        // Load blobs, set default name to current date
        api.fire('load', getFileFromBlob(source, source.name));
      } else if (isBase64DataURI(source)) {
        // Load base 64, set default name to current date
        api.fire('load', getFileFromBase64DataURI(source));
      } else {
        // Deal as if is external URL, let's load it!
        loadURL(source);
      }
    };

    // loads a url
    var loadURL = function loadURL(url) {
      // is remote url and no fetch method supplied
      if (!fetchFn) {
        api.fire('error', {
          type: 'error',
          body: "Can't load URL",
          code: 400
        });

        return;
      }

      // set request start
      state.timestamp = Date.now();

      // load file
      state.request = fetchFn(
        url,
        function(response) {
          // update duration
          state.duration = Date.now() - state.timestamp;

          // done!
          state.complete = true;

          // turn blob response into a file
          if (response instanceof Blob) {
            response = getFileFromBlob(response, getFilenameFromURL(url));
          }

          api.fire('load', response instanceof Blob ? response : response.body);
        },
        function(error) {
          api.fire(
            'error',
            typeof error === 'string'
              ? {
                  type: 'error',
                  code: 0,
                  body: error
                }
              : error
          );
        },
        function(computable, current, total) {
          // collected some meta data already
          if (total) {
            state.size = total;
          }

          // update duration
          state.duration = Date.now() - state.timestamp;

          // if we can't compute progress, we're not going to fire progress events
          if (!computable) {
            state.progress = null;
            return;
          }

          // update progress percentage
          state.progress = current / total;

          // expose
          api.fire('progress', state.progress);
        },
        function() {
          api.fire('abort');
        },
        function(response) {
          var fileinfo = getFileInfoFromHeaders(
            typeof response === 'string' ? response : response.headers
          );
          api.fire('meta', {
            size: state.size || fileinfo.size,
            filename: fileinfo.name,
            source: fileinfo.source
          });
        }
      );
    };

    var api = Object.assign({}, on(), {
      setSource: function setSource(source) {
        return (state.source = source);
      },
      getProgress: getProgress, // file load progress
      abort: abort, // abort file load
      load: load // start load
    });

    return api;
  };

  var isGet = function isGet(method) {
    return /GET|HEAD/.test(method);
  };

  var sendRequest = function sendRequest(data, url, options) {
    var api = {
      onheaders: function onheaders() {},
      onprogress: function onprogress() {},
      onload: function onload() {},
      ontimeout: function ontimeout() {},
      onerror: function onerror() {},
      onabort: function onabort() {},
      abort: function abort() {
        aborted = true;
        xhr.abort();
      }
    };

    // timeout identifier, only used when timeout is defined
    var aborted = false;
    var headersReceived = false;

    // set default options
    options = Object.assign(
      {
        method: 'POST',
        headers: {},
        withCredentials: false
      },
      options
    );

    // encode url
    url = encodeURI(url);

    // if method is GET, add any received data to url

    if (isGet(options.method) && data) {
      url =
        '' +
        url +
        encodeURIComponent(
          typeof data === 'string' ? data : JSON.stringify(data)
        );
    }

    // create request
    var xhr = new XMLHttpRequest();

    // progress of load
    var process = isGet(options.method) ? xhr : xhr.upload;
    process.onprogress = function(e) {
      // no progress event when aborted ( onprogress is called once after abort() )
      if (aborted) {
        return;
      }

      api.onprogress(e.lengthComputable, e.loaded, e.total);
    };

    // tries to get header info to the app as fast as possible
    xhr.onreadystatechange = function() {
      // not interesting in these states ('unsent' and 'openend' as they don't give us any additional info)
      if (xhr.readyState < 2) {
        return;
      }

      // no server response
      if (xhr.readyState === 4 && xhr.status === 0) {
        return;
      }

      if (headersReceived) {
        return;
      }

      headersReceived = true;

      // we've probably received some useful data in response headers
      api.onheaders(xhr);
    };

    // load successful
    xhr.onload = function() {
      // is classified as valid response
      if (xhr.status >= 200 && xhr.status < 300) {
        api.onload(xhr);
      } else {
        api.onerror(xhr);
      }
    };

    // error during load
    xhr.onerror = function() {
      return api.onerror(xhr);
    };

    // request aborted
    xhr.onabort = function() {
      aborted = true;
      api.onabort();
    };

    // request timeout
    xhr.ontimeout = function() {
      return api.ontimeout(xhr);
    };

    // open up open up!
    xhr.open(options.method, url, true);

    // set timeout if defined (do it after open so IE11 plays ball)
    if (isInt(options.timeout)) {
      xhr.timeout = options.timeout;
    }

    // add headers
    Object.keys(options.headers).forEach(function(key) {
      xhr.setRequestHeader(key, options.headers[key]);
    });

    // set type of response
    if (options.responseType) {
      xhr.responseType = options.responseType;
    }

    // set credentials
    if (options.withCredentials) {
      xhr.withCredentials = true;
    }

    // let's send our data
    xhr.send(data);

    return api;
  };

  var createResponse = function createResponse(type, code, body, headers) {
    return {
      type: type,
      code: code,
      body: body,
      headers: headers
    };
  };

  var createTimeoutResponse = function createTimeoutResponse(cb) {
    return function(xhr) {
      cb(createResponse('error', 0, 'Timeout', xhr.getAllResponseHeaders()));
    };
  };

  var createFetchFunction = function createFetchFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // set onload hanlder
    var onload =
      action.onload ||
      function(res) {
        return res;
      };
    var onerror =
      action.onerror ||
      function(res) {
        return null;
      };

    // internal handler
    return function(url, load, error, progress, abort, headers) {
      // do local or remote request based on if the url is external
      var request = sendRequest(
        url,
        apiUrl + action.url,
        Object.assign({}, action, {
          responseType: 'blob'
        })
      );

      request.onload = function(xhr) {
        // get headers
        var headers = xhr.getAllResponseHeaders();

        // get filename
        var filename =
          getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);

        // create response
        load(
          createResponse(
            'load',
            xhr.status,
            getFileFromBlob(onload(xhr.response), filename),
            headers
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onheaders = function(xhr) {
        headers(
          createResponse(
            'headers',
            xhr.status,
            null,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
                                                     function signature:
                                                       (file, metadata, load, error, progress, abort) => {
                                                         return {
                                                         abort:() => {}
                                                       }
                                                     }
                                                     */
  var createProcessorFunction = function createProcessorFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var name = arguments.length > 2 ? arguments[2] : undefined;
    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return function() {
        for (
          var _len = arguments.length, params = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          params[_key] = arguments[_key];
        }
        return action.apply(void 0, [name].concat(params));
      };
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // internal handler
    return function(file, metadata, load, error, progress, abort) {
      // set onload hanlder
      var ondata =
        action.ondata ||
        function(fd) {
          return fd;
        };
      var onload =
        action.onload ||
        function(res) {
          return res;
        };
      var onerror =
        action.onerror ||
        function(res) {
          return null;
        };

      // no file received
      if (!file) return;

      // create formdata object
      var formData = new FormData();

      // add metadata under same name
      if (isObject(metadata)) {
        formData.append(name, JSON.stringify(metadata));
      }

      // Turn into an array of objects so no matter what the input, we can handle it the same way
      (file instanceof Blob ? [{ name: null, file: file }] : file).forEach(
        function(item) {
          formData.append(
            name,
            item.file,
            item.name === null
              ? item.file.name
              : '' + item.name + item.file.name
          );
        }
      );

      // send request object
      var request = sendRequest(ondata(formData), apiUrl + action.url, action);
      request.onload = function(xhr) {
        load(
          createResponse(
            'load',
            xhr.status,
            onload(xhr.response),
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
                                                      function signature:
                                                      (uniqueFileId, load, error) => { }
                                                      */
  var createRevertFunction = function createRevertFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // is custom implementation
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied, return stub function, interface will work, but file won't be removed
    if (!action || !isString(action.url)) {
      return function(uniqueFileId, load) {
        return load();
      };
    }

    // set onload hanlder
    var onload =
      action.onload ||
      function(res) {
        return res;
      };
    var onerror =
      action.onerror ||
      function(res) {
        return null;
      };

    // internal implementation
    return function(uniqueFileId, load, error) {
      var request = sendRequest(
        uniqueFileId,
        apiUrl + action.url,
        action // contains method, headers and withCredentials properties
      );
      request.onload = function(xhr) {
        load(
          createResponse(
            'load',
            xhr.status,
            onload(xhr.response),
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);

      return request;
    };
  };

  var getRandomNumber = function getRandomNumber() {
    var min =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return min + Math.random() * (max - min);
  };

  var createPerceivedPerformanceUpdater = function createPerceivedPerformanceUpdater(
    cb
  ) {
    var duration =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var offset =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var tickMin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
    var tickMax =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
    var timeout = null;
    var start = Date.now();

    var tick = function tick() {
      var runtime = Date.now() - start;
      var delay = getRandomNumber(tickMin, tickMax);

      if (runtime + delay > duration) {
        delay = runtime + delay - duration;
      }

      var progress = runtime / duration;
      if (progress >= 1) {
        cb(1);
        return;
      }

      cb(progress);

      timeout = setTimeout(tick, delay);
    };

    tick();

    return {
      clear: function clear() {
        clearTimeout(timeout);
      }
    };
  };

  var createFileProcessor = function createFileProcessor(processFn) {
    var state = {
      complete: false,
      perceivedProgress: 0,
      perceivedPerformanceUpdater: null,
      progress: null,
      timestamp: null,
      perceivedDuration: 0,
      duration: 0,
      request: null,
      response: null
    };

    var process = function process(file, metadata) {
      var progressFn = function progressFn() {
        // we've not yet started the real download, stop here
        // the request might not go through, for instance, there might be some server trouble
        // if state.progress is null, the server does not allow computing progress and we show the spinner instead
        if (state.duration === 0 || state.progress === null) {
          return;
        }

        // as we're now processing, fire the progress event
        api.fire('progress', api.getProgress());
      };

      var completeFn = function completeFn() {
        state.complete = true;

        api.fire('load-perceived', state.response.body);
      };

      // let's start processing
      api.fire('start');

      // set request start
      state.timestamp = Date.now();

      // create perceived performance progress indicator
      state.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater(
        function(progress) {
          state.perceivedProgress = progress;
          state.perceivedDuration = Date.now() - state.timestamp;

          progressFn();

          // if fake progress is done, and a response has been received,
          // and we've not yet called the complete method
          if (
            state.response &&
            state.perceivedProgress === 1 &&
            !state.complete
          ) {
            // we done!
            completeFn();
          }
        },
        // random delay as in a list of files you start noticing
        // files uploading at the exact same speed
        getRandomNumber(750, 1500)
      );

      // remember request so we can abort it later
      state.request = processFn(
        // the file to process
        file,

        // the metadata to send along
        metadata,

        // callbacks (load, error, progress, abort)
        // load expects the body to be a server id if
        // you want to make use of revert
        function(response) {
          // we put the response in state so we can access
          // it outside of this method
          state.response = isObject(response)
            ? response
            : {
                type: 'load',
                code: 200,
                body: '' + response,
                headers: {}
              };

          // update duration
          state.duration = Date.now() - state.timestamp;

          // force progress to 1 as we're now done
          state.progress = 1;

          // actual load is done let's share results
          api.fire('load', state.response.body);

          // we are really done
          // if perceived progress is 1 ( wait for perceived progress to complete )
          // or if server does not support progress ( null )
          if (state.perceivedProgress === 1) {
            completeFn();
          }
        },

        // error is expected to be an object with type, code, body
        function(error) {
          // cancel updater
          state.perceivedPerformanceUpdater.clear();

          // update others about this error
          api.fire(
            'error',
            isObject(error)
              ? error
              : {
                  type: 'error',
                  code: 0,
                  body: '' + error
                }
          );
        },

        // actual processing progress
        function(computable, current, total) {
          // update actual duration
          state.duration = Date.now() - state.timestamp;

          // update actual progress
          state.progress = computable ? current / total : null;

          progressFn();
        },

        // abort does not expect a value
        function() {
          // stop updater
          state.perceivedPerformanceUpdater.clear();

          // fire the abort event so we can switch visuals
          api.fire('abort', state.response ? state.response.body : null);
        }
      );
    };

    var abort = function abort() {
      // no request running, can't abort
      if (!state.request) return;

      // stop updater
      state.perceivedPerformanceUpdater.clear();

      // abort actual request
      state.request.abort();

      // if has response object, we've completed the request
      state.complete = true;
    };

    var reset = function reset() {
      abort();
      state.complete = false;
      state.perceivedProgress = 0;
      state.progress = 0;
      state.timestamp = null;
      state.perceivedDuration = 0;
      state.duration = 0;
      state.request = null;
      state.response = null;
    };

    var getProgress = function getProgress() {
      return state.progress
        ? Math.min(state.progress, state.perceivedProgress)
        : null;
    };
    var getDuration = function getDuration() {
      return Math.min(state.duration, state.perceivedDuration);
    };

    var api = Object.assign({}, on(), {
      process: process, // start processing file
      abort: abort, // abort active process request
      getProgress: getProgress,
      getDuration: getDuration,
      reset: reset
    });

    return api;
  };

  var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
    return name.substr(0, name.lastIndexOf('.')) || name;
  };

  var createFileStub = function createFileStub(source) {
    var data = [source.name, source.size, source.type];

    // is blob or base64, then we need to set the name
    if (source instanceof Blob || isBase64DataURI(source)) {
      data[0] = source.name || getDateString();
    } else if (isBase64DataURI(source)) {
      // if is base64 data uri we need to determine the average size and type
      data[1] = source.length;
      data[2] = getMimeTypeFromBase64DataURI(source);
    } else if (isString(source)) {
      // url
      data[0] = getFilenameFromURL(source);
      data[1] = 0;
      data[2] = 'application/octet-stream';
    }

    return {
      name: data[0],
      size: data[1],
      type: data[2]
    };
  };

  var isFile = function isFile(value) {
    return !!(value instanceof File || (value instanceof Blob && value.name));
  };

  var deepCloneObject = function deepCloneObject(src) {
    if (!isObject(src)) return src;
    var target = isArray(src) ? [] : {};
    for (var key in src) {
      if (!src.hasOwnProperty(key)) continue;
      var v = src[key];
      target[key] = v && isObject(v) ? deepCloneObject(v) : v;
    }
    return target;
  };

  var createItem = function createItem() {
    var origin =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var serverFileReference =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var file =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // unique id for this item, is used to identify the item across views
    var id = getUniqueId();

    /**
     * Internal item state
     */
    var state = {
      // is archived
      archived: false,

      // if is frozen, no longer fires events
      frozen: false,

      // removed from view
      released: false,

      // original source
      source: null,

      // file model reference
      file: file,

      // id of file on server
      serverFileReference: serverFileReference,

      // current item status
      status: serverFileReference
        ? ItemStatus.PROCESSING_COMPLETE
        : ItemStatus.INIT,

      // active processes
      activeLoader: null,
      activeProcessor: null
    };

    // callback used when abort processing is called to link back to the resolve method
    var abortProcessingRequestComplete = null;

    /**
     * Externally added item metadata
     */
    var metadata = {};

    // item data
    var setStatus = function setStatus(status) {
      return (state.status = status);
    };

    // fire event unless the item has been archived
    var fire = function fire(event) {
      if (state.released || state.frozen) return;
      for (
        var _len = arguments.length,
          params = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        params[_key - 1] = arguments[_key];
      }
      api.fire.apply(api, [event].concat(params));
    };

    // file data
    var getFileExtension = function getFileExtension() {
      return getExtensionFromFilename(state.file.name);
    };
    var getFileType = function getFileType() {
      return state.file.type;
    };
    var getFileSize = function getFileSize() {
      return state.file.size;
    };
    var getFile = function getFile() {
      return state.file;
    };

    //
    // logic to load a file
    //
    var load = function load(source, loader, onload) {
      // remember the original item source
      state.source = source;

      // file stub is already there
      if (state.file) {
        fire('load-skip');
        return;
      }

      // set a stub file object while loading the actual data
      state.file = createFileStub(source);

      // starts loading
      loader.on('init', function() {
        fire('load-init');
      });

      // we'eve received a size indication, let's update the stub
      loader.on('meta', function(meta) {
        // set size of file stub
        state.file.size = meta.size;

        // set name of file stub
        state.file.filename = meta.filename;

        // if has received source, we done
        if (meta.source) {
          origin = FileOrigin.LIMBO;
          state.serverFileReference = meta.source;
          state.status = ItemStatus.PROCESSING_COMPLETE;
        }

        // size has been updated
        fire('load-meta');
      });

      // the file is now loading we need to update the progress indicators
      loader.on('progress', function(progress) {
        setStatus(ItemStatus.LOADING);

        fire('load-progress', progress);
      });

      // an error was thrown while loading the file, we need to switch to error state
      loader.on('error', function(error) {
        setStatus(ItemStatus.LOAD_ERROR);

        fire('load-request-error', error);
      });

      // user or another process aborted the file load (cannot retry)
      loader.on('abort', function() {
        setStatus(ItemStatus.INIT);
        fire('load-abort');
      });

      // done loading
      loader.on('load', function(file) {
        // as we've now loaded the file the loader is no longer required
        state.activeLoader = null;

        // called when file has loaded succesfully
        var success = function success(result) {
          // set (possibly) transformed file
          state.file = isFile(result) ? result : state.file;

          // file received
          if (origin === FileOrigin.LIMBO && state.serverFileReference) {
            setStatus(ItemStatus.PROCESSING_COMPLETE);
          } else {
            setStatus(ItemStatus.IDLE);
          }

          fire('load');
        };

        var error = function error(result) {
          // set original file
          state.file = file;
          fire('load-meta');

          setStatus(ItemStatus.LOAD_ERROR);
          fire('load-file-error', result);
        };

        // if we already have a server file reference, we don't need to call the onload method
        if (state.serverFileReference) {
          success(file);
          return;
        }

        // no server id, let's give this file the full treatment
        onload(file, success, error);
      });

      // set loader source data
      loader.setSource(source);

      // set as active loader
      state.activeLoader = loader;

      // load the source data
      loader.load();
    };

    var retryLoad = function retryLoad() {
      if (!state.activeLoader) {
        return;
      }
      state.activeLoader.load();
    };

    var abortLoad = function abortLoad() {
      if (state.activeLoader) {
        state.activeLoader.abort();
        return;
      }
      setStatus(ItemStatus.INIT);
      fire('load-abort');
    };

    //
    // logic to process a file
    //
    var process = function process(processor, onprocess) {
      // now processing
      setStatus(ItemStatus.PROCESSING);

      // reset abort callback
      abortProcessingRequestComplete = null;

      // if no file loaded we'll wait for the load event
      if (!(state.file instanceof Blob)) {
        api.on('load', function() {
          process(processor, onprocess);
        });
        return;
      }

      // setup processor
      processor.on('load', function(serverFileReference) {
        // need this id to be able to revert the upload
        state.serverFileReference = serverFileReference;
      });

      processor.on('load-perceived', function(serverFileReference) {
        // no longer required
        state.activeProcessor = null;

        // need this id to be able to rever the upload
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.PROCESSING_COMPLETE);
        fire('process-complete', serverFileReference);
      });

      processor.on('start', function() {
        fire('process-start');
      });

      processor.on('error', function(error) {
        state.activeProcessor = null;
        setStatus(ItemStatus.PROCESSING_ERROR);
        fire('process-error', error);
      });

      processor.on('abort', function(serverFileReference) {
        state.activeProcessor = null;

        // if file was uploaded but processing was cancelled during perceived processor time store file reference
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.IDLE);
        fire('process-abort');

        // has timeout so doesn't interfere with remove action
        if (abortProcessingRequestComplete) {
          abortProcessingRequestComplete();
        }
      });

      processor.on('progress', function(progress) {
        fire('process-progress', progress);
      });

      // when successfully transformed
      var success = function success(file) {
        // if was archived in the mean time, don't process
        if (state.archived) return;

        // process file!
        processor.process(file, Object.assign({}, metadata));
      };

      // something went wrong during transform phase
      var error = function error(result) {};

      // start processing the file
      onprocess(state.file, success, error);

      // set as active processor
      state.activeProcessor = processor;
    };

    var requestProcessing = function requestProcessing() {
      setStatus(ItemStatus.PROCESSING_QUEUED);
    };

    var abortProcessing = function abortProcessing() {
      return new Promise(function(resolve) {
        if (!state.activeProcessor) {
          setStatus(ItemStatus.IDLE);
          fire('process-abort');

          resolve();
          return;
        }

        abortProcessingRequestComplete = function abortProcessingRequestComplete() {
          resolve();
        };

        state.activeProcessor.abort();
      });
    };

    //
    // logic to revert a processed file
    //
    var revert = function revert(revertFileUpload, forceRevert) {
      return new Promise(function(resolve, reject) {
        // cannot revert without a server id for this process
        if (state.serverFileReference === null) {
          resolve();
          return;
        }

        // revert the upload (fire and forget)
        revertFileUpload(
          state.serverFileReference,
          function() {
            // reset file server id as now it's no available on the server
            state.serverFileReference = null;
            resolve();
          },
          function(error) {
            // don't set error state when reverting is optional, it will always resolve
            if (!forceRevert) {
              resolve();
              return;
            }

            // oh no errors
            setStatus(ItemStatus.PROCESSING_REVERT_ERROR);
            fire('process-revert-error');
            reject(error);
          }
        );

        // fire event
        setStatus(ItemStatus.IDLE);
        fire('process-revert');
      });
    };

    // exposed methods
    var _setMetadata = function setMetadata(key, value, silent) {
      var keys = key.split('.');
      var root = keys[0];
      var last = keys.pop();
      var data = metadata;
      keys.forEach(function(key) {
        return (data = data[key]);
      });

      // compare old value against new value, if they're the same, we're not updating
      if (JSON.stringify(data[last]) === JSON.stringify(value)) return;

      // update value
      data[last] = value;

      // don't fire update
      if (silent) return;

      // fire update
      fire('metadata-update', {
        key: root,
        value: metadata[root]
      });
    };

    var getMetadata = function getMetadata(key) {
      return deepCloneObject(key ? metadata[key] : metadata);
    };

    var api = Object.assign(
      {
        id: {
          get: function get() {
            return id;
          }
        },
        origin: {
          get: function get() {
            return origin;
          }
        },
        serverId: {
          get: function get() {
            return state.serverFileReference;
          }
        },
        status: {
          get: function get() {
            return state.status;
          }
        },
        filename: {
          get: function get() {
            return state.file.name;
          }
        },
        filenameWithoutExtension: {
          get: function get() {
            return getFilenameWithoutExtension(state.file.name);
          }
        },
        fileExtension: { get: getFileExtension },
        fileType: { get: getFileType },
        fileSize: { get: getFileSize },
        file: { get: getFile },

        source: {
          get: function get() {
            return state.source;
          }
        },

        getMetadata: getMetadata,
        setMetadata: function setMetadata(key, value, silent) {
          if (isObject(key)) {
            var data = key;
            Object.keys(data).forEach(function(key) {
              _setMetadata(key, data[key], value);
            });
            return key;
          }
          _setMetadata(key, value, silent);
          return value;
        },

        extend: function extend(name, handler) {
          return (itemAPI[name] = handler);
        },

        abortLoad: abortLoad,
        retryLoad: retryLoad,
        requestProcessing: requestProcessing,
        abortProcessing: abortProcessing,

        load: load,
        process: process,
        revert: revert
      },

      on(),
      {
        freeze: function freeze() {
          return (state.frozen = true);
        },

        release: function release() {
          return (state.released = true);
        },
        released: {
          get: function get() {
            return state.released;
          }
        },

        archive: function archive() {
          return (state.archived = true);
        },
        archived: {
          get: function get() {
            return state.archived;
          }
        }
      }
    );

    // create it here instead of returning it instantly so we can extend it later
    var itemAPI = createObject(api);

    return itemAPI;
  };

  var getItemIndexByQuery = function getItemIndexByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return 0;
    }

    // invalid queries
    if (!isString(query)) {
      return -1;
    }

    // return item by id (or -1 if not found)
    return items.findIndex(function(item) {
      return item.id === query;
    });
  };

  var getItemById = function getItemById(items, itemId) {
    var index = getItemIndexByQuery(items, itemId);
    if (index < 0) {
      return;
    }
    return items[index] || null;
  };

  var fetchLocal = function fetchLocal(
    url,
    load,
    error,
    progress,
    abort,
    headers
  ) {
    var request = sendRequest(null, url, {
      method: 'GET',
      responseType: 'blob'
    });

    request.onload = function(xhr) {
      // get headers
      var headers = xhr.getAllResponseHeaders();

      // get filename
      var filename =
        getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);

      // create response
      load(
        createResponse(
          'load',
          xhr.status,
          getFileFromBlob(xhr.response, filename),
          headers
        )
      );
    };

    request.onerror = function(xhr) {
      error(
        createResponse(
          'error',
          xhr.status,
          xhr.statusText,
          xhr.getAllResponseHeaders()
        )
      );
    };

    request.onheaders = function(xhr) {
      headers(
        createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders())
      );
    };

    request.ontimeout = createTimeoutResponse(error);
    request.onprogress = progress;
    request.onabort = abort;

    // should return request
    return request;
  };

  var getDomainFromURL = function getDomainFromURL(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url
      .toLowerCase()
      .replace('blob:', '')
      .replace(/([a-z])?:\/\//, '$1')
      .split('/')[0];
  };

  var isExternalURL = function isExternalURL(url) {
    return (
      (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
      getDomainFromURL(location.href) !== getDomainFromURL(url)
    );
  };

  var dynamicLabel = function dynamicLabel(label) {
    return function() {
      return isFunction(label) ? label.apply(void 0, arguments) : label;
    };
  };

  var isMockItem = function isMockItem(item) {
    return !isFile(item.file);
  };

  var listUpdated = function listUpdated(dispatch, state) {
    clearTimeout(state.listUpdateTimeout);
    state.listUpdateTimeout = setTimeout(function() {
      dispatch('DID_UPDATE_ITEMS', { items: getActiveItems(state.items) });
    }, 0);
  };

  var optionalPromise = function optionalPromise(fn) {
    for (
      var _len = arguments.length,
        params = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      params[_key - 1] = arguments[_key];
    }
    return new Promise(function(resolve) {
      if (!fn) {
        return resolve(true);
      }

      var result = fn.apply(void 0, params);

      if (result == null) {
        return resolve(true);
      }

      if (typeof result === 'boolean') {
        return resolve(result);
      }

      if (typeof result.then === 'function') {
        result.then(resolve);
      }
    });
  };

  var sortItems = function sortItems(state, compare) {
    state.items.sort(function(a, b) {
      return compare(createItemAPI(a), createItemAPI(b));
    });
  };

  // returns item based on state
  var getItemByQueryFromState = function getItemByQueryFromState(
    state,
    itemHandler
  ) {
    return function() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        query = _ref.query,
        _ref$success = _ref.success,
        success = _ref$success === void 0 ? function() {} : _ref$success,
        _ref$failure = _ref.failure,
        failure = _ref$failure === void 0 ? function() {} : _ref$failure;
      var item = getItemByQuery(state.items, query);
      if (!item) {
        failure({
          error: createResponse('error', 0, 'Item not found'),

          file: null
        });

        return;
      }
      itemHandler(item, success, failure);
    };
  };

  var actions = function actions(dispatch, query, state) {
    return {
      /**
       * Aborts all ongoing processes
       */
      ABORT_ALL: function ABORT_ALL() {
        getActiveItems(state.items).forEach(function(item) {
          item.freeze();
          item.abortLoad();
          item.abortProcessing();
        });
      },

      /**
       * Sets initial files
       */
      DID_SET_FILES: function DID_SET_FILES(_ref2) {
        var _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? [] : _ref2$value;

        // map values to file objects
        var files = value.map(function(file) {
          return {
            source: file.source ? file.source : file,
            options: file.options
          };
        });

        // loop over files, if file is in list, leave it be, if not, remove
        // test if items should be moved
        var activeItems = getActiveItems(state.items);

        activeItems.forEach(function(item) {
          // if item not is in new value, remove
          if (
            !files.find(function(file) {
              return file.source === item.source || file.source === item.file;
            })
          ) {
            dispatch('REMOVE_ITEM', { query: item });
          }
        });

        // add new files
        activeItems = getActiveItems(state.items);
        files.forEach(function(file, index) {
          // if file is already in list
          if (
            activeItems.find(function(item) {
              return item.source === file.source || item.file === file.source;
            })
          )
            return;

          // not in list, add
          dispatch(
            'ADD_ITEM',
            Object.assign({}, file, {
              interactionMethod: InteractionMethod.NONE,
              index: index
            })
          );
        });
      },

      DID_UPDATE_ITEM_METADATA: function DID_UPDATE_ITEM_METADATA(_ref3) {
        var id = _ref3.id;

        // if is called multiple times in close succession we combined all calls together to save resources
        clearTimeout(state.itemUpdateTimeout);
        state.itemUpdateTimeout = setTimeout(function() {
          var item = getItemById(state.items, id);

          // only revert and attempt to upload when we're uploading to a server
          if (!query('IS_ASYNC')) {
            // should we update the output data
            applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
              item: item,
              query: query
            }).then(function(shouldPrepareOutput) {
              if (!shouldPrepareOutput) {
                return;
              }
              dispatch(
                'REQUEST_PREPARE_OUTPUT',
                {
                  query: id,
                  item: item,
                  ready: function ready(file) {
                    dispatch('DID_PREPARE_OUTPUT', { id: id, file: file });
                  }
                },
                true
              );
            });

            return;
          }

          // for async scenarios
          var upload = function upload() {
            // we push this forward a bit so the interface is updated correctly
            setTimeout(function() {
              dispatch('REQUEST_ITEM_PROCESSING', { query: id });
            }, 32);
          };

          var revert = function revert(doUpload) {
            item
              .revert(
                createRevertFunction(
                  state.options.server.url,
                  state.options.server.revert
                ),
                query('GET_FORCE_REVERT')
              )
              .then(doUpload ? upload : function() {})
              .catch(function() {});
          };

          var abort = function abort(doUpload) {
            item.abortProcessing().then(doUpload ? upload : function() {});
          };

          // if we should re-upload the file immidiately
          if (item.status === ItemStatus.PROCESSING_COMPLETE) {
            return revert(state.options.instantUpload);
          }

          // if currently uploading, cancel upload
          if (item.status === ItemStatus.PROCESSING) {
            return abort(state.options.instantUpload);
          }

          if (state.options.instantUpload) {
            upload();
          }
        }, 0);
      },

      SORT: function SORT(_ref4) {
        var compare = _ref4.compare;
        sortItems(state, compare);
      },

      ADD_ITEMS: function ADD_ITEMS(_ref5) {
        var items = _ref5.items,
          index = _ref5.index,
          interactionMethod = _ref5.interactionMethod,
          _ref5$success = _ref5.success,
          success = _ref5$success === void 0 ? function() {} : _ref5$success,
          _ref5$failure = _ref5.failure,
          failure = _ref5$failure === void 0 ? function() {} : _ref5$failure;

        var currentIndex = index;

        if (index === -1 || typeof index === 'undefined') {
          var insertLocation = query('GET_ITEM_INSERT_LOCATION');
          var totalItems = query('GET_TOTAL_ITEMS');
          currentIndex = insertLocation === 'before' ? 0 : totalItems;
        }

        var ignoredFiles = query('GET_IGNORED_FILES');
        var isValidFile = function isValidFile(source) {
          return isFile(source)
            ? !ignoredFiles.includes(source.name.toLowerCase())
            : !isEmpty(source);
        };
        var validItems = items.filter(isValidFile);

        var promises = validItems.map(function(source) {
          return new Promise(function(resolve, reject) {
            dispatch('ADD_ITEM', {
              interactionMethod: interactionMethod,
              source: source.source || source,
              success: resolve,
              failure: reject,
              index: currentIndex++,
              options: source.options || {}
            });
          });
        });

        Promise.all(promises)
          .then(success)
          .catch(failure);
      },

      /**
       * @param source
       * @param index
       * @param interactionMethod
       */
      ADD_ITEM: function ADD_ITEM(_ref6) {
        var source = _ref6.source,
          _ref6$index = _ref6.index,
          index = _ref6$index === void 0 ? -1 : _ref6$index,
          interactionMethod = _ref6.interactionMethod,
          _ref6$success = _ref6.success,
          success = _ref6$success === void 0 ? function() {} : _ref6$success,
          _ref6$failure = _ref6.failure,
          failure = _ref6$failure === void 0 ? function() {} : _ref6$failure,
          _ref6$options = _ref6.options,
          options = _ref6$options === void 0 ? {} : _ref6$options;

        // if no source supplied
        if (isEmpty(source)) {
          failure({
            error: createResponse('error', 0, 'No source'),

            file: null
          });

          return;
        }

        // filter out invalid file items, used to filter dropped directory contents
        if (
          isFile(source) &&
          state.options.ignoredFiles.includes(source.name.toLowerCase())
        ) {
          // fail silently
          return;
        }

        // test if there's still room in the list of files
        if (!hasRoomForItem(state)) {
          // if multiple allowed, we can't replace
          // or if only a single item is allowed but we're not allowed to replace it we exit
          if (
            state.options.allowMultiple ||
            (!state.options.allowMultiple && !state.options.allowReplace)
          ) {
            var error = createResponse('warning', 0, 'Max files');

            dispatch('DID_THROW_MAX_FILES', {
              source: source,
              error: error
            });

            failure({ error: error, file: null });

            return;
          }

          // let's replace the item
          // id of first item we're about to remove
          var _item = getActiveItems(state.items)[0];

          // if has been processed remove it from the server as well
          if (
            _item.status === ItemStatus.PROCESSING_COMPLETE ||
            _item.status === ItemStatus.PROCESSING_REVERT_ERROR
          ) {
            var forceRevert = query('GET_FORCE_REVERT');
            _item
              .revert(
                createRevertFunction(
                  state.options.server.url,
                  state.options.server.revert
                ),
                forceRevert
              )
              .then(function() {
                if (!forceRevert) return;

                // try to add now
                dispatch('ADD_ITEM', {
                  source: source,
                  index: index,
                  interactionMethod: interactionMethod,
                  success: success,
                  failure: failure,
                  options: options
                });
              })
              .catch(function() {}); // no need to handle this catch state for now

            if (forceRevert) return;
          }

          // remove first item as it will be replaced by this item
          dispatch('REMOVE_ITEM', { query: _item.id });
        }

        // where did the file originate
        var origin =
          options.type === 'local'
            ? FileOrigin.LOCAL
            : options.type === 'limbo'
            ? FileOrigin.LIMBO
            : FileOrigin.INPUT;

        // create a new blank item
        var item = createItem(
          // where did this file come from
          origin,

          // an input file never has a server file reference
          origin === FileOrigin.INPUT ? null : source,

          // file mock data, if defined
          options.file
        );

        // set initial meta data
        Object.keys(options.metadata || {}).forEach(function(key) {
          item.setMetadata(key, options.metadata[key]);
        });

        // created the item, let plugins add methods
        applyFilters('DID_CREATE_ITEM', item, {
          query: query,
          dispatch: dispatch
        });

        // where to insert new items
        var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');

        // adjust index if is not allowed to pick location
        if (!state.options.itemInsertLocationFreedom) {
          index = itemInsertLocation === 'before' ? -1 : state.items.length;
        }

        // add item to list
        insertItem(state.items, item, index);

        // sort items in list
        if (isFunction(itemInsertLocation) && source) {
          sortItems(state, itemInsertLocation);
        }

        // get a quick reference to the item id
        var id = item.id;

        // observe item events
        item.on('load-init', function() {
          dispatch('DID_START_ITEM_LOAD', { id: id });
        });

        item.on('load-meta', function() {
          dispatch('DID_UPDATE_ITEM_META', { id: id });
        });

        item.on('load-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_LOAD_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('load-request-error', function(error) {
          var mainStatus = dynamicLabel(state.options.labelFileLoadError)(
            error
          );

          // is client error, no way to recover
          if (error.code >= 400 && error.code < 500) {
            dispatch('DID_THROW_ITEM_INVALID', {
              id: id,
              error: error,
              status: {
                main: mainStatus,
                sub: error.code + ' (' + error.body + ')'
              }
            });

            // reject the file so can be dealt with through API
            failure({ error: error, file: createItemAPI(item) });
            return;
          }

          // is possible server error, so might be possible to retry
          dispatch('DID_THROW_ITEM_LOAD_ERROR', {
            id: id,
            error: error,
            status: {
              main: mainStatus,
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('load-file-error', function(error) {
          dispatch('DID_THROW_ITEM_INVALID', {
            id: id,
            error: error.status,
            status: error.status
          });

          failure({ error: error.status, file: createItemAPI(item) });
        });

        item.on('load-abort', function() {
          dispatch('REMOVE_ITEM', { query: id });
        });

        item.on('load-skip', function() {
          dispatch('COMPLETE_LOAD_ITEM', {
            query: id,
            item: item,
            data: {
              source: source,
              success: success
            }
          });
        });

        item.on('load', function() {
          var handleAdd = function handleAdd(shouldAdd) {
            // no should not add this file
            if (!shouldAdd) {
              dispatch('REMOVE_ITEM', {
                query: id
              });

              return;
            }

            // now interested in metadata updates
            item.on('metadata-update', function(change) {
              dispatch('DID_UPDATE_ITEM_METADATA', { id: id, change: change });
            });

            // let plugins decide if the output data should be prepared at this point
            // means we'll do this and wait for idle state
            applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
              item: item,
              query: query
            }).then(function(shouldPrepareOutput) {
              var loadComplete = function loadComplete() {
                dispatch('COMPLETE_LOAD_ITEM', {
                  query: id,
                  item: item,
                  data: {
                    source: source,
                    success: success
                  }
                });

                listUpdated(dispatch, state);
              };

              // exit
              if (shouldPrepareOutput) {
                // wait for idle state and then run PREPARE_OUTPUT
                dispatch(
                  'REQUEST_PREPARE_OUTPUT',
                  {
                    query: id,
                    item: item,
                    ready: function ready(file) {
                      dispatch('DID_PREPARE_OUTPUT', { id: id, file: file });
                      loadComplete();
                    }
                  },
                  true
                );

                return;
              }

              loadComplete();
            });
          };

          // item loaded, allow plugins to
          // - read data (quickly)
          // - add metadata
          applyFilterChain('DID_LOAD_ITEM', item, {
            query: query,
            dispatch: dispatch
          })
            .then(function() {
              optionalPromise(
                query('GET_BEFORE_ADD_FILE'),
                createItemAPI(item)
              ).then(handleAdd);
            })
            .catch(function() {
              handleAdd(false);
            });
        });

        item.on('process-start', function() {
          dispatch('DID_START_ITEM_PROCESSING', { id: id });
        });

        item.on('process-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('process-error', function(error) {
          dispatch('DID_THROW_ITEM_PROCESSING_ERROR', {
            id: id,
            error: error,
            status: {
              main: dynamicLabel(state.options.labelFileProcessingError)(error),
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('process-revert-error', function(error) {
          dispatch('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
            id: id,
            error: error,
            status: {
              main: dynamicLabel(state.options.labelFileProcessingRevertError)(
                error
              ),
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('process-complete', function(serverFileReference) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: id,
            error: null,
            serverFileReference: serverFileReference
          });
        });

        item.on('process-abort', function() {
          dispatch('DID_ABORT_ITEM_PROCESSING', { id: id });
        });

        item.on('process-revert', function() {
          dispatch('DID_REVERT_ITEM_PROCESSING', { id: id });
        });

        // let view know the item has been inserted
        dispatch('DID_ADD_ITEM', {
          id: id,
          index: index,
          interactionMethod: interactionMethod
        });

        listUpdated(dispatch, state);

        // start loading the source
        var _ref7 = state.options.server || {},
          url = _ref7.url,
          load = _ref7.load,
          restore = _ref7.restore,
          fetch = _ref7.fetch;

        item.load(
          source,

          // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
          createFileLoader(
            origin === FileOrigin.INPUT
              ? // input
                isString(source) && isExternalURL(source)
                ? createFetchFunction(url, fetch) // remote url
                : fetchLocal // local url
              : // limbo or local
              origin === FileOrigin.LIMBO
              ? createFetchFunction(url, restore) // limbo
              : createFetchFunction(url, load) // local
          ),

          // called when the file is loaded so it can be piped through the filters
          function(file, success, error) {
            // let's process the file
            applyFilterChain('LOAD_FILE', file, { query: query })
              .then(success)
              .catch(error);
          }
        );
      },

      REQUEST_PREPARE_OUTPUT: function REQUEST_PREPARE_OUTPUT(_ref8) {
        var item = _ref8.item,
          ready = _ref8.ready;

        // don't handle archived items, an item could have been archived (load aborted) while waiting to be prepared
        if (item.archived) return;

        // allow plugins to alter the file data
        applyFilterChain('PREPARE_OUTPUT', item.file, {
          query: query,
          item: item
        }).then(function(result) {
          applyFilterChain('COMPLETE_PREPARE_OUTPUT', result, {
            query: query,
            item: item
          }).then(function(result) {
            // don't handle archived items, an item could have been archived (load aborted) while being prepared
            if (item.archived) return;

            // we done!
            ready(result);
          });
        });
      },

      COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(_ref9) {
        var item = _ref9.item,
          data = _ref9.data;
        var success = data.success,
          source = data.source;

        // sort items in list
        var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');
        if (isFunction(itemInsertLocation) && source) {
          sortItems(state, itemInsertLocation);
        }

        // let interface know the item has loaded
        dispatch('DID_LOAD_ITEM', {
          id: item.id,
          error: null,
          serverFileReference: item.origin === FileOrigin.INPUT ? null : source
        });

        // item has been successfully loaded and added to the
        // list of items so can now be safely returned for use
        success(createItemAPI(item));

        // if this is a local server file we need to show a different state
        if (item.origin === FileOrigin.LOCAL) {
          dispatch('DID_LOAD_LOCAL_ITEM', { id: item.id });
          return;
        }

        // if is a temp server file we prevent async upload call here (as the file is already on the server)
        if (item.origin === FileOrigin.LIMBO) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: item.id,
            error: null,
            serverFileReference: source
          });

          return;
        }

        // id we are allowed to upload the file immidiately, lets do it
        if (query('IS_ASYNC') && state.options.instantUpload) {
          dispatch('REQUEST_ITEM_PROCESSING', { query: item.id });
        }
      },

      RETRY_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        // try loading the source one more time
        item.retryLoad();
      }),

      REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state, function(
        item,
        success,
        failure
      ) {
        // cannot be queued (or is already queued)
        var itemCanBeQueuedForProcessing =
          // waiting for something
          item.status === ItemStatus.IDLE ||
          // processing went wrong earlier
          item.status === ItemStatus.PROCESSING_ERROR;

        // not ready to be processed
        if (!itemCanBeQueuedForProcessing) {
          var process = function process() {
            setTimeout(function() {
              dispatch('REQUEST_ITEM_PROCESSING', {
                query: item,
                success: success,
                failure: failure
              });
            }, 32);
          };

          // if already done processing or tried to revert but didn't work, try again
          if (
            item.status === ItemStatus.PROCESSING_COMPLETE ||
            item.status === ItemStatus.PROCESSING_REVERT_ERROR
          ) {
            item
              .revert(
                createRevertFunction(
                  state.options.server.url,
                  state.options.server.revert
                ),
                query('GET_FORCE_REVERT')
              )
              .then(process)
              .catch(function() {}); // don't continue with processing if something went wrong
          } else if (item.status === ItemStatus.PROCESSING) {
            item.abortProcessing().then(process);
          }

          return;
        }

        // already queued for processing
        if (item.status === ItemStatus.PROCESSING_QUEUED) return;

        item.requestProcessing();

        dispatch('DID_REQUEST_ITEM_PROCESSING', { id: item.id });

        dispatch(
          'PROCESS_ITEM',
          { query: item, success: success, failure: failure },
          true
        );
      }),

      PROCESS_ITEM: getItemByQueryFromState(state, function(
        item,
        success,
        failure
      ) {
        var maxParallelUploads = query('GET_MAX_PARALLEL_UPLOADS');
        var totalCurrentUploads = query(
          'GET_ITEMS_BY_STATUS',
          ItemStatus.PROCESSING
        ).length;

        // queue and wait till queue is freed up
        if (totalCurrentUploads === maxParallelUploads) {
          // queue for later processing
          state.processingQueue.push({
            id: item.id,
            success: success,
            failure: failure
          });

          // stop it!
          return;
        }

        // if was not queued or is already processing exit here
        if (item.status === ItemStatus.PROCESSING) return;

        var processNext = function processNext() {
          // process queueud items
          var queueEntry = state.processingQueue.shift();

          // no items left
          if (!queueEntry) return;

          // get item reference
          var id = queueEntry.id,
            success = queueEntry.success,
            failure = queueEntry.failure;
          var itemReference = getItemByQuery(state.items, id);

          // if item was archived while in queue, jump to next
          if (!itemReference || itemReference.archived) {
            processNext();
            return;
          }

          // process queued item
          dispatch(
            'PROCESS_ITEM',
            { query: id, success: success, failure: failure },
            true
          );
        };

        // we done function
        item.onOnce('process-complete', function() {
          success(createItemAPI(item));
          processNext();

          // All items processed? No errors?
          var allItemsProcessed =
            query('GET_ITEMS_BY_STATUS', ItemStatus.PROCESSING_COMPLETE)
              .length === state.items.length;
          if (allItemsProcessed) {
            dispatch('DID_COMPLETE_ITEM_PROCESSING_ALL');
          }
        });

        // we error function
        item.onOnce('process-error', function(error) {
          failure({ error: error, file: createItemAPI(item) });
          processNext();
        });

        // start file processing
        item.process(
          createFileProcessor(
            createProcessorFunction(
              state.options.server.url,
              state.options.server.process,
              state.options.name
            )
          ),

          // called when the file is about to be processed so it can be piped through the transform filters
          function(file, success, error) {
            // allow plugins to alter the file data
            applyFilterChain('PREPARE_OUTPUT', file, {
              query: query,
              item: item
            })
              .then(function(file) {
                dispatch('DID_PREPARE_OUTPUT', { id: item.id, file: file });

                success(file);
              })
              .catch(error);
          }
        );
      }),

      RETRY_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        dispatch('REQUEST_ITEM_PROCESSING', { query: item });
      }),

      REQUEST_REMOVE_ITEM: getItemByQueryFromState(state, function(item) {
        optionalPromise(
          query('GET_BEFORE_REMOVE_FILE'),
          createItemAPI(item)
        ).then(function(shouldRemove) {
          if (!shouldRemove) {
            return;
          }
          dispatch('REMOVE_ITEM', { query: item });
        });
      }),

      RELEASE_ITEM: getItemByQueryFromState(state, function(item) {
        item.release();
      }),

      REMOVE_ITEM: getItemByQueryFromState(state, function(item, success) {
        var removeFromView = function removeFromView() {
          // get id reference
          var id = item.id;

          // archive the item, this does not remove it from the list
          getItemById(state.items, id).archive();

          // tell the view the item has been removed
          dispatch('DID_REMOVE_ITEM', { error: null, id: id, item: item });

          // now the list has been modified
          listUpdated(dispatch, state);

          // correctly removed
          success(createItemAPI(item));
        };

        // if this is a local file and the server.remove function has been configured, send source there so dev can remove file from server
        var server = state.options.server;
        if (
          item.origin === FileOrigin.LOCAL &&
          server &&
          isFunction(server.remove)
        ) {
          dispatch('DID_START_ITEM_REMOVE', { id: item.id });

          server.remove(
            item.source,
            function() {
              return removeFromView();
            },
            function(status) {
              dispatch('DID_THROW_ITEM_REMOVE_ERROR', {
                id: item.id,
                error: createResponse('error', 0, status, null),
                status: {
                  main: dynamicLabel(state.options.labelFileRemoveError)(
                    status
                  ),
                  sub: state.options.labelTapToRetry
                }
              });
            }
          );
        } else {
          removeFromView();
        }
      }),

      ABORT_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        item.abortLoad();
      }),

      ABORT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        // test if is already processed
        if (item.serverId) {
          dispatch('REVERT_ITEM_PROCESSING', { id: item.id });
          return;
        }

        // abort
        item.abortProcessing().then(function() {
          var shouldRemove = state.options.instantUpload;
          if (shouldRemove) {
            dispatch('REMOVE_ITEM', { query: item.id });
          }
        });
      }),

      REQUEST_REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(
        item
      ) {
        // not instant uploading, revert immidiately
        if (!state.options.instantUpload) {
          dispatch('REVERT_ITEM_PROCESSING', { query: item });
          return;
        }

        // if we're instant uploading the file will also be removed if we revert,
        // so if a before remove file hook is defined we need to run it now
        var handleRevert = function handleRevert(shouldRevert) {
          if (!shouldRevert) return;
          dispatch('REVERT_ITEM_PROCESSING', { query: item });
        };

        var fn = query('GET_BEFORE_REMOVE_FILE');
        if (!fn) {
          return handleRevert(true);
        }

        var requestRemoveResult = fn(createItemAPI(item));
        if (requestRemoveResult == null) {
          // undefined or null
          return handleRevert(true);
        }

        if (typeof requestRemoveResult === 'boolean') {
          return handleRevert(requestRemoveResult);
        }

        if (typeof requestRemoveResult.then === 'function') {
          requestRemoveResult.then(handleRevert);
        }
      }),

      REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        item
          .revert(
            createRevertFunction(
              state.options.server.url,
              state.options.server.revert
            ),
            query('GET_FORCE_REVERT')
          )
          .then(function() {
            var shouldRemove = state.options.instantUpload || isMockItem(item);
            if (shouldRemove) {
              dispatch('REMOVE_ITEM', { query: item.id });
            }
          })
          .catch(function() {});
      }),

      SET_OPTIONS: function SET_OPTIONS(_ref10) {
        var options = _ref10.options;
        forin(options, function(key, value) {
          dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        });
      }
    };
  };

  var formatFilename = function formatFilename(name) {
    return name;
  };

  var createElement$1 = function createElement(tagName) {
    return document.createElement(tagName);
  };

  var text = function text(node, value) {
    var textNode = node.childNodes[0];
    if (!textNode) {
      textNode = document.createTextNode(value);
      node.appendChild(textNode);
    } else if (value !== textNode.nodeValue) {
      textNode.nodeValue = value;
    }
  };

  var polarToCartesian = function polarToCartesian(
    centerX,
    centerY,
    radius,
    angleInDegrees
  ) {
    var angleInRadians = (((angleInDegrees % 360) - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    arcSweep
  ) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      arcSweep,
      0,
      end.x,
      end.y
    ].join(' ');
  };

  var percentageArc = function percentageArc(x, y, radius, from, to) {
    var arcSweep = 1;
    if (to > from && to - from <= 0.5) {
      arcSweep = 0;
    }
    if (from > to && from - to >= 0.5) {
      arcSweep = 0;
    }
    return describeArc(
      x,
      y,
      radius,
      Math.min(0.9999, from) * 360,
      Math.min(0.9999, to) * 360,
      arcSweep
    );
  };

  var create = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    // start at 0
    props.spin = false;
    props.progress = 0;
    props.opacity = 0;

    // svg
    var svg = createElement('svg');
    root.ref.path = createElement('path', {
      'stroke-width': 2,
      'stroke-linecap': 'round'
    });

    svg.appendChild(root.ref.path);

    root.ref.svg = svg;

    root.appendChild(svg);
  };

  var write = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (props.opacity === 0) {
      return;
    }

    if (props.align) {
      root.element.dataset.align = props.align;
    }

    // get width of stroke
    var ringStrokeWidth = parseInt(attr(root.ref.path, 'stroke-width'), 10);

    // calculate size of ring
    var size = root.rect.element.width * 0.5;

    // ring state
    var ringFrom = 0;
    var ringTo = 0;

    // now in busy mode
    if (props.spin) {
      ringFrom = 0;
      ringTo = 0.5;
    } else {
      ringFrom = 0;
      ringTo = props.progress;
    }

    // get arc path
    var coordinates = percentageArc(
      size,
      size,
      size - ringStrokeWidth,
      ringFrom,
      ringTo
    );

    // update progress bar
    attr(root.ref.path, 'd', coordinates);

    // hide while contains 0 value
    attr(
      root.ref.path,
      'stroke-opacity',
      props.spin || props.progress > 0 ? 1 : 0
    );
  };

  var progressIndicator = createView({
    tag: 'div',
    name: 'progress-indicator',
    ignoreRectUpdate: true,
    ignoreRect: true,
    create: create,
    write: write,
    mixins: {
      apis: ['progress', 'spin', 'align'],
      styles: ['opacity'],
      animations: {
        opacity: { type: 'tween', duration: 500 },
        progress: {
          type: 'spring',
          stiffness: 0.95,
          damping: 0.65,
          mass: 10
        }
      }
    }
  });

  var create$1 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    root.element.innerHTML =
      (props.icon || '') + ('<span>' + props.label + '</span>');

    props.isDisabled = false;
  };

  var write$1 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;
    var isDisabled = props.isDisabled;
    var shouldDisable = root.query('GET_DISABLED') || props.opacity === 0;

    if (shouldDisable && !isDisabled) {
      props.isDisabled = true;
      attr(root.element, 'disabled', 'disabled');
    } else if (!shouldDisable && isDisabled) {
      props.isDisabled = false;
      root.element.removeAttribute('disabled');
    }
  };

  var fileActionButton = createView({
    tag: 'button',
    attributes: {
      type: 'button'
    },

    ignoreRect: true,
    ignoreRectUpdate: true,
    name: 'file-action-button',
    mixins: {
      apis: ['label'],
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      },

      listeners: true
    },

    create: create$1,
    write: write$1
  });

  var toNaturalFileSize = function toNaturalFileSize(bytes) {
    var decimalSeparator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
    // nope, no negative byte sizes
    bytes = Math.round(Math.abs(bytes));

    // just bytes
    if (bytes < 1000) {
      return bytes + ' bytes';
    }

    // kilobytes
    if (bytes < MB) {
      return Math.floor(bytes / KB) + ' KB';
    }

    // megabytes
    if (bytes < GB) {
      return removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator) + ' MB';
    }

    // gigabytes
    return removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator) + ' GB';
  };

  var KB = 1000;
  var MB = 1000000;
  var GB = 1000000000;

  var removeDecimalsWhenZero = function removeDecimalsWhenZero(
    value,
    decimalCount,
    separator
  ) {
    return value
      .toFixed(decimalCount)
      .split('.')
      .filter(function(part) {
        return part !== '0';
      })
      .join(separator);
  };

  var create$2 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    // filename
    var fileName = createElement$1('span');
    fileName.className = 'filepond--file-info-main';
    // hide for screenreaders
    // the file is contained in a fieldset with legend that contains the filename
    // no need to read it twice
    attr(fileName, 'aria-hidden', 'true');
    root.appendChild(fileName);
    root.ref.fileName = fileName;

    // filesize
    var fileSize = createElement$1('span');
    fileSize.className = 'filepond--file-info-sub';
    root.appendChild(fileSize);
    root.ref.fileSize = fileSize;

    // set initial values
    text(fileSize, root.query('GET_LABEL_FILE_WAITING_FOR_SIZE'));
    text(fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
  };

  var updateFile = function updateFile(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;
    text(
      root.ref.fileSize,
      toNaturalFileSize(root.query('GET_ITEM_SIZE', props.id))
    );

    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var updateFileSizeOnError = function updateFileSizeOnError(_ref3) {
    var root = _ref3.root,
      props = _ref3.props;
    // if size is available don't fallback to unknown size message
    if (isInt(root.query('GET_ITEM_SIZE', props.id))) {
      return;
    }

    text(root.ref.fileSize, root.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
  };

  var fileInfo = createView({
    name: 'file-info',
    ignoreRect: true,
    ignoreRectUpdate: true,
    write: createRoute({
      DID_LOAD_ITEM: updateFile,
      DID_UPDATE_ITEM_META: updateFile,
      DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
      DID_THROW_ITEM_INVALID: updateFileSizeOnError
    }),

    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    create: create$2,
    mixins: {
      styles: ['translateX', 'translateY'],
      animations: {
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var toPercentage = function toPercentage(value) {
    return Math.round(value * 100);
  };

  var create$3 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    // main status
    var main = createElement$1('span');
    main.className = 'filepond--file-status-main';
    root.appendChild(main);
    root.ref.main = main;

    // sub status
    var sub = createElement$1('span');
    sub.className = 'filepond--file-status-sub';
    root.appendChild(sub);
    root.ref.sub = sub;

    didSetItemLoadProgress({ root: root, action: { progress: null } });
  };

  var didSetItemLoadProgress = function didSetItemLoadProgress(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_LOADING')
        : root.query('GET_LABEL_FILE_LOADING') +
          ' ' +
          toPercentage(action.progress) +
          '%';

    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didSetItemProcessProgress = function didSetItemProcessProgress(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_PROCESSING')
        : root.query('GET_LABEL_FILE_PROCESSING') +
          ' ' +
          toPercentage(action.progress) +
          '%';

    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didRequestItemProcessing = function didRequestItemProcessing(_ref4) {
    var root = _ref4.root;
    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didAbortItemProcessing = function didAbortItemProcessing(_ref5) {
    var root = _ref5.root;
    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_ABORTED'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_RETRY'));
  };

  var didCompleteItemProcessing = function didCompleteItemProcessing(_ref6) {
    var root = _ref6.root;
    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_COMPLETE'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_UNDO'));
  };

  var clear = function clear(_ref7) {
    var root = _ref7.root;
    text(root.ref.main, '');
    text(root.ref.sub, '');
  };

  var error = function error(_ref8) {
    var root = _ref8.root,
      action = _ref8.action;
    text(root.ref.main, action.status.main);
    text(root.ref.sub, action.status.sub);
  };

  var fileStatus = createView({
    name: 'file-status',
    ignoreRect: true,
    ignoreRectUpdate: true,
    write: createRoute({
      DID_LOAD_ITEM: clear,
      DID_REVERT_ITEM_PROCESSING: clear,
      DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
      DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
      DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
      DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
      DID_THROW_ITEM_LOAD_ERROR: error,
      DID_THROW_ITEM_INVALID: error,
      DID_THROW_ITEM_PROCESSING_ERROR: error,
      DID_THROW_ITEM_PROCESSING_REVERT_ERROR: error,
      DID_THROW_ITEM_REMOVE_ERROR: error
    }),

    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    create: create$3,
    mixins: {
      styles: ['translateX', 'translateY', 'opacity'],
      animations: {
        opacity: { type: 'tween', duration: 250 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  /**
   * Button definitions for the file view
   */

  var Buttons = {
    AbortItemLoad: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
      action: 'ABORT_ITEM_LOAD',
      className: 'filepond--action-abort-item-load',
      align: 'LOAD_INDICATOR_POSITION' // right
    },
    RetryItemLoad: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
      action: 'RETRY_ITEM_LOAD',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-load',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    RemoveItem: {
      label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
      action: 'REQUEST_REMOVE_ITEM',
      icon: 'GET_ICON_REMOVE',
      className: 'filepond--action-remove-item',
      align: 'BUTTON_REMOVE_ITEM_POSITION' // left
    },
    ProcessItem: {
      label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
      action: 'REQUEST_ITEM_PROCESSING',
      icon: 'GET_ICON_PROCESS',
      className: 'filepond--action-process-item',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    AbortItemProcessing: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
      action: 'ABORT_ITEM_PROCESSING',
      className: 'filepond--action-abort-item-processing',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    RetryItemProcessing: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
      action: 'RETRY_ITEM_PROCESSING',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-processing',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    },
    RevertItemProcessing: {
      label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
      action: 'REQUEST_REVERT_ITEM_PROCESSING',
      icon: 'GET_ICON_UNDO',
      className: 'filepond--action-revert-item-processing',
      align: 'BUTTON_PROCESS_ITEM_POSITION' // right
    }
  };

  // make a list of buttons, we can then remove buttons from this list if they're disabled
  var ButtonKeys = [];
  forin(Buttons, function(key) {
    ButtonKeys.push(key);
  });

  var calculateFileInfoOffset = function calculateFileInfoOffset(root) {
    var buttonRect = root.ref.buttonRemoveItem.rect.element;
    return buttonRect.hidden ? null : buttonRect.width + buttonRect.left;
  };

  // Force on full pixels so text stays crips
  var calculateFileVerticalCenterOffset = function calculateFileVerticalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.height / 4);
  };
  var calculateFileHorizontalCenterOffset = function calculateFileHorizontalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.left / 2);
  };

  var getLoadIndicatorAlignment = function getLoadIndicatorAlignment(root) {
    return root.query('GET_STYLE_LOAD_INDICATOR_POSITION');
  };
  var getProcessIndicatorAlignment = function getProcessIndicatorAlignment(
    root
  ) {
    return root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION');
  };
  var getRemoveIndicatorAligment = function getRemoveIndicatorAligment(root) {
    return root.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION');
  };

  var DefaultStyle = {
    buttonAbortItemLoad: { opacity: 0 },
    buttonRetryItemLoad: { opacity: 0 },
    buttonRemoveItem: { opacity: 0 },
    buttonProcessItem: { opacity: 0 },
    buttonAbortItemProcessing: { opacity: 0 },
    buttonRetryItemProcessing: { opacity: 0 },
    buttonRevertItemProcessing: { opacity: 0 },
    loadProgressIndicator: { opacity: 0, align: getLoadIndicatorAlignment },
    processProgressIndicator: {
      opacity: 0,
      align: getProcessIndicatorAlignment
    },
    processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
    info: { translateX: 0, translateY: 0, opacity: 0 },
    status: { translateX: 0, translateY: 0, opacity: 0 }
  };

  var IdleStyle = {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { translateX: calculateFileInfoOffset }
  };

  var ProcessingStyle = {
    buttonAbortItemProcessing: { opacity: 1 },
    processProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  };

  var StyleMap = {
    DID_THROW_ITEM_INVALID: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset, opacity: 1 }
    },

    DID_START_ITEM_LOAD: {
      buttonAbortItemLoad: { opacity: 1 },
      loadProgressIndicator: { opacity: 1 },
      status: { opacity: 1 }
    },

    DID_THROW_ITEM_LOAD_ERROR: {
      buttonRetryItemLoad: { opacity: 1 },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },

    DID_START_ITEM_REMOVE: {
      processProgressIndicator: {
        opacity: 1,
        align: getRemoveIndicatorAligment
      },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 0 }
    },

    DID_THROW_ITEM_REMOVE_ERROR: {
      processProgressIndicator: {
        opacity: 0,
        align: getRemoveIndicatorAligment
      },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1, translateX: calculateFileInfoOffset }
    },

    DID_LOAD_ITEM: IdleStyle,
    DID_LOAD_LOCAL_ITEM: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset }
    },

    DID_START_ITEM_PROCESSING: ProcessingStyle,
    DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
    DID_COMPLETE_ITEM_PROCESSING: {
      buttonRevertItemProcessing: { opacity: 1 },
      info: { opacity: 1 },
      status: { opacity: 1 }
    },

    DID_THROW_ITEM_PROCESSING_ERROR: {
      buttonRemoveItem: { opacity: 1 },
      buttonRetryItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset }
    },

    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
      buttonRevertItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { opacity: 1 }
    },

    DID_ABORT_ITEM_PROCESSING: {
      buttonRemoveItem: { opacity: 1 },
      buttonProcessItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },

    DID_REVERT_ITEM_PROCESSING: IdleStyle
  };

  // complete indicator view
  var processingCompleteIndicatorView = createView({
    create: function create(_ref) {
      var root = _ref.root;
      root.element.innerHTML = root.query('GET_ICON_DONE');
    },
    name: 'processing-complete-indicator',
    ignoreRect: true,
    mixins: {
      styles: ['scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  /**
   * Creates the file view
   */
  var create$4 = function create(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;
    var id = props.id;

    // allow reverting upload
    var allowRevert = root.query('GET_ALLOW_REVERT');

    // is instant uploading, need this to determine the icon of the undo button
    var instantUpload = root.query('GET_INSTANT_UPLOAD');

    // is async set up
    var isAsync = root.query('IS_ASYNC');

    // enabled buttons array
    var enabledButtons = isAsync
      ? ButtonKeys.concat()
      : ButtonKeys.filter(function(key) {
          return !/Process/.test(key);
        });

    // remove last button (revert) if not allowed
    if (isAsync && !allowRevert) {
      enabledButtons.splice(-1, 1);
      var map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
      map.info.translateX = calculateFileHorizontalCenterOffset;
      map.info.translateY = calculateFileVerticalCenterOffset;
      map.status.translateY = calculateFileVerticalCenterOffset;
      map.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
    }

    // update icon and label for revert button when instant uploading
    if (instantUpload && allowRevert) {
      Buttons['RevertItemProcessing'].label = 'GET_LABEL_BUTTON_REMOVE_ITEM';
      Buttons['RevertItemProcessing'].icon = 'GET_ICON_REMOVE';
    }

    // create the button views
    forin(Buttons, function(key, definition) {
      // create button
      var buttonView = root.createChildView(fileActionButton, {
        label: root.query(definition.label),
        icon: root.query(definition.icon),
        opacity: 0
      });

      // should be appended?
      if (enabledButtons.includes(key)) {
        root.appendChildView(buttonView);
      }

      // add position attribute
      buttonView.element.dataset.align = root.query(
        'GET_STYLE_' + definition.align
      );

      // add class
      buttonView.element.classList.add(definition.className);

      // handle interactions
      buttonView.on('click', function(e) {
        e.stopPropagation();
        root.dispatch(definition.action, { query: id });
      });

      // set reference
      root.ref['button' + key] = buttonView;
    });

    // create file info view
    root.ref.info = root.appendChildView(
      root.createChildView(fileInfo, { id: id })
    );

    // create file status view
    root.ref.status = root.appendChildView(
      root.createChildView(fileStatus, { id: id })
    );

    // checkmark
    root.ref.processingCompleteIndicator = root.appendChildView(
      root.createChildView(processingCompleteIndicatorView)
    );
    root.ref.processingCompleteIndicator.element.dataset.align = root.query(
      'GET_STYLE_BUTTON_PROCESS_ITEM_POSITION'
    );

    // add progress indicators
    var loadIndicatorView = root.appendChildView(
      root.createChildView(progressIndicator, {
        opacity: 0,
        align: root.query('GET_STYLE_LOAD_INDICATOR_POSITION')
      })
    );

    loadIndicatorView.element.classList.add('filepond--load-indicator');
    root.ref.loadProgressIndicator = loadIndicatorView;

    var progressIndicatorView = root.appendChildView(
      root.createChildView(progressIndicator, {
        opacity: 0,
        align: root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION')
      })
    );

    progressIndicatorView.element.classList.add('filepond--process-indicator');
    root.ref.processProgressIndicator = progressIndicatorView;

    // current active styles
    root.ref.activeStyles = [];
  };

  var write$2 = function write(_ref3) {
    var root = _ref3.root,
      actions = _ref3.actions,
      props = _ref3.props;

    // route actions
    route({ root: root, actions: actions, props: props });

    // select last state change action
    var action = actions
      .concat()
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StyleMap[action.type];
      });

    // a new action happened, let's get the matching styles
    if (action) {
      // define new active styles
      root.ref.activeStyles = [];

      var stylesToApply = StyleMap[action.type];
      forin(DefaultStyle, function(name, defaultStyles) {
        // get reference to control
        var control = root.ref[name];

        // loop over all styles for this control
        forin(defaultStyles, function(key, defaultValue) {
          var value =
            stylesToApply[name] &&
            typeof stylesToApply[name][key] !== 'undefined'
              ? stylesToApply[name][key]
              : defaultValue;
          root.ref.activeStyles.push({
            control: control,
            key: key,
            value: value
          });
        });
      });
    }

    // apply active styles to element
    root.ref.activeStyles.forEach(function(_ref4) {
      var control = _ref4.control,
        key = _ref4.key,
        value = _ref4.value;

      control[key] = typeof value === 'function' ? value(root) : value;
    });
  };

  var route = createRoute({
    DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(
      _ref5
    ) {
      var root = _ref5.root,
        action = _ref5.action;
      root.ref.buttonAbortItemProcessing.label = action.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(
      _ref6
    ) {
      var root = _ref6.root,
        action = _ref6.action;
      root.ref.buttonAbortItemLoad.label = action.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: function DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL(
      _ref7
    ) {
      var root = _ref7.root,
        action = _ref7.action;
      root.ref.buttonAbortItemRemoval.label = action.value;
    },
    DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(_ref8) {
      var root = _ref8.root;
      root.ref.processProgressIndicator.spin = true;
      root.ref.processProgressIndicator.progress = 0;
    },
    DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(_ref9) {
      var root = _ref9.root;
      root.ref.loadProgressIndicator.spin = true;
      root.ref.loadProgressIndicator.progress = 0;
    },
    DID_START_ITEM_REMOVE: function DID_START_ITEM_REMOVE(_ref10) {
      var root = _ref10.root;
      root.ref.processProgressIndicator.spin = true;
      root.ref.processProgressIndicator.progress = 0;
    },
    DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(
      _ref11
    ) {
      var root = _ref11.root,
        action = _ref11.action;
      root.ref.loadProgressIndicator.spin = false;
      root.ref.loadProgressIndicator.progress = action.progress;
    },
    DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(
      _ref12
    ) {
      var root = _ref12.root,
        action = _ref12.action;
      root.ref.processProgressIndicator.spin = false;
      root.ref.processProgressIndicator.progress = action.progress;
    }
  });

  var file = createView({
    create: create$4,
    write: write$2,
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    name: 'file'
  });

  /**
   * Creates the file view
   */
  var create$5 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // filename
    root.ref.fileName = createElement$1('legend');
    root.appendChild(root.ref.fileName);

    // file appended
    root.ref.file = root.appendChildView(
      root.createChildView(file, { id: props.id })
    );

    // create data container
    var dataContainer = createElement$1('input');
    dataContainer.type = 'hidden';
    dataContainer.name = root.query('GET_NAME');
    dataContainer.disabled = root.query('GET_DISABLED');
    root.ref.data = dataContainer;
    root.appendChild(dataContainer);
  };

  var didSetDisabled = function didSetDisabled(_ref2) {
    var root = _ref2.root;
    root.ref.data.disabled = root.query('GET_DISABLED');
  };

  /**
   * Data storage
   */
  var didLoadItem = function didLoadItem(_ref3) {
    var root = _ref3.root,
      action = _ref3.action,
      props = _ref3.props;
    root.ref.data.value = action.serverFileReference;

    // updates the legend of the fieldset so screenreaders can better group buttons
    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var didRemoveItem = function didRemoveItem(_ref4) {
    var root = _ref4.root;
    root.ref.data.removeAttribute('value');
  };

  var didCompleteItemProcessing$1 = function didCompleteItemProcessing(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;
    root.ref.data.value = action.serverFileReference;
  };

  var didRevertItemProcessing = function didRevertItemProcessing(_ref6) {
    var root = _ref6.root;
    root.ref.data.removeAttribute('value');
  };

  var fileWrapper = createView({
    create: create$5,
    ignoreRect: true,
    write: createRoute({
      DID_SET_DISABLED: didSetDisabled,
      DID_LOAD_ITEM: didLoadItem,
      DID_REMOVE_ITEM: didRemoveItem,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing$1,
      DID_REVERT_ITEM_PROCESSING: didRevertItemProcessing
    }),

    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
    },
    tag: 'fieldset',
    name: 'file-wrapper'
  });

  var PANEL_SPRING_PROPS = { type: 'spring', damping: 0.6, mass: 7 };

  var create$6 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    [
      {
        name: 'top'
      },

      {
        name: 'center',
        props: {
          translateY: null,
          scaleY: null
        },

        mixins: {
          animations: {
            scaleY: PANEL_SPRING_PROPS
          },

          styles: ['translateY', 'scaleY']
        }
      },

      {
        name: 'bottom',
        props: {
          translateY: null
        },

        mixins: {
          animations: {
            translateY: PANEL_SPRING_PROPS
          },

          styles: ['translateY']
        }
      }
    ].forEach(function(section) {
      createSection(root, section, props.name);
    });

    root.element.classList.add('filepond--' + props.name);

    root.ref.scalable = null;
  };

  var createSection = function createSection(root, section, className) {
    var viewConstructor = createView({
      name: 'panel-' + section.name + ' filepond--' + className,
      mixins: section.mixins,
      ignoreRectUpdate: true
    });

    var view = root.createChildView(viewConstructor, section.props);

    root.ref[section.name] = root.appendChildView(view);
  };

  var write$3 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    // update scalable state
    if (root.ref.scalable === null || props.scalable !== root.ref.scalable) {
      root.ref.scalable = isBoolean(props.scalable) ? props.scalable : true;
      root.element.dataset.scalable = root.ref.scalable;
    }

    // no height, can't set
    if (!props.height) return;

    // get child rects
    var topRect = root.ref.top.rect.element;
    var bottomRect = root.ref.bottom.rect.element;

    // make sure height never is smaller than bottom and top seciton heights combined (will probably never happen, but who knows)
    var height = Math.max(topRect.height + bottomRect.height, props.height);

    // offset center part
    root.ref.center.translateY = topRect.height;

    // scale center part
    // use math ceil to prevent transparent lines because of rounding errors
    root.ref.center.scaleY =
      (height - topRect.height - bottomRect.height) / 100;

    // offset bottom part
    root.ref.bottom.translateY = height - bottomRect.height;
  };

  var panel = createView({
    name: 'panel',
    write: write$3,
    create: create$6,
    ignoreRect: true,
    mixins: {
      apis: ['height', 'scalable']
    }
  });

  var ITEM_TRANSLATE_SPRING = {
    type: 'spring',
    stiffness: 0.75,
    damping: 0.45,
    mass: 10
  };

  var ITEM_SCALE_SPRING = 'spring';

  /**
   * Creates the file view
   */
  var create$7 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // select
    root.ref.handleClick = function() {
      return root.dispatch('DID_ACTIVATE_ITEM', { id: props.id });
    };

    // set id
    root.element.id = 'filepond--item-' + props.id;
    root.element.addEventListener('click', root.ref.handleClick);

    // file view
    root.ref.container = root.appendChildView(
      root.createChildView(fileWrapper, { id: props.id })
    );

    // file panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'item-panel' })
    );

    // default start height
    root.ref.panel.height = null;

    // by default not marked for removal
    props.markedForRemoval = false;
  };

  var StateMap = {
    DID_START_ITEM_LOAD: 'busy',
    DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
    DID_THROW_ITEM_INVALID: 'load-invalid',
    DID_THROW_ITEM_LOAD_ERROR: 'load-error',
    DID_LOAD_ITEM: 'idle',
    DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
    DID_START_ITEM_REMOVE: 'busy',
    DID_START_ITEM_PROCESSING: 'busy',
    DID_REQUEST_ITEM_PROCESSING: 'busy',
    DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
    DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
    DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
    DID_ABORT_ITEM_PROCESSING: 'cancelled',
    DID_REVERT_ITEM_PROCESSING: 'idle'
  };

  var route$1 = createRoute({
    DID_UPDATE_PANEL_HEIGHT: function DID_UPDATE_PANEL_HEIGHT(_ref2) {
      var root = _ref2.root,
        action = _ref2.action;
      var height = action.height;
      root.height = height;
    }
  });

  var write$4 = function write(_ref3) {
    var root = _ref3.root,
      actions = _ref3.actions,
      props = _ref3.props,
      shouldOptimize = _ref3.shouldOptimize;

    // select last state change action
    var action = actions
      .concat()
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StateMap[action.type];
      });

    // no need to set same state twice
    if (action && action.type !== props.currentState) {
      // set current state
      props.currentState = action.type;

      // set state
      root.element.dataset.filepondItemState =
        StateMap[props.currentState] || '';
    }

    // route actions
    var aspectRatio =
      root.query('GET_ITEM_PANEL_ASPECT_RATIO') ||
      root.query('GET_PANEL_ASPECT_RATIO');
    if (!aspectRatio) {
      route$1({ root: root, actions: actions, props: props });
      if (!root.height && root.ref.container.rect.element.height > 0) {
        root.height = root.ref.container.rect.element.height;
      }
    } else if (!shouldOptimize) {
      root.height = root.rect.element.width * aspectRatio;
    }

    // sync panel height with item height
    if (shouldOptimize) {
      root.ref.panel.height = null;
    }

    root.ref.panel.height = root.height;
  };

  var item = createView({
    create: create$7,
    write: write$4,
    destroy: function destroy(_ref4) {
      var root = _ref4.root,
        props = _ref4.props;
      root.element.removeEventListener('click', root.ref.handleClick);
      root.dispatch('RELEASE_ITEM', { query: props.id });
    },
    tag: 'li',
    name: 'item',
    mixins: {
      apis: ['id', 'interactionMethod', 'markedForRemoval', 'spawnDate'],
      styles: [
        'translateX',
        'translateY',
        'scaleX',
        'scaleY',
        'opacity',
        'height'
      ],

      animations: {
        scaleX: ITEM_SCALE_SPRING,
        scaleY: ITEM_SCALE_SPRING,
        translateX: ITEM_TRANSLATE_SPRING,
        translateY: ITEM_TRANSLATE_SPRING,
        opacity: { type: 'tween', duration: 150 }
      }
    }
  });

  var getItemIndexByPosition = function getItemIndexByPosition(
    view,
    positionInView
  ) {
    if (!positionInView) return;

    var horizontalSpace = view.rect.element.width;
    var children = view.childViews;
    var l = children.length;
    var last = null;

    // -1, don't move items to accomodate (either add to top or bottom)
    if (l === 0 || positionInView.top < children[0].rect.element.top) return -1;

    // let's get the item width
    var item = children[0];
    var itemRect = item.rect.element;
    var itemHorizontalMargin = itemRect.marginLeft + itemRect.marginRight;
    var itemWidth = itemRect.width + itemHorizontalMargin;
    var itemsPerRow = Math.round(horizontalSpace / itemWidth);

    // stack
    if (itemsPerRow === 1) {
      for (var index = 0; index < l; index++) {
        var child = children[index];
        var childMid = child.rect.outer.top + child.rect.element.height * 0.5;
        if (positionInView.top < childMid) {
          return index;
        }
      }
      return l;
    }

    // grid
    var itemVerticalMargin = itemRect.marginTop + itemRect.marginBottom;
    var itemHeight = itemRect.height + itemVerticalMargin;
    for (var _index = 0; _index < l; _index++) {
      var indexX = _index % itemsPerRow;
      var indexY = Math.floor(_index / itemsPerRow);

      var offsetX = indexX * itemWidth;
      var offsetY = indexY * itemHeight;

      var itemTop = offsetY - itemRect.marginTop;
      var itemRight = offsetX + itemWidth;
      var itemBottom = offsetY + itemHeight + itemRect.marginBottom;

      if (positionInView.top < itemBottom && positionInView.top > itemTop) {
        if (positionInView.left < itemRight) {
          return _index;
        } else if (_index !== l - 1) {
          last = _index;
        } else {
          last = null;
        }
      }
    }

    if (last !== null) {
      return last;
    }

    return l;
  };

  var create$8 = function create(_ref) {
    var root = _ref.root;
    // need to set role to list as otherwise it won't be read as a list by VoiceOver
    attr(root.element, 'role', 'list');

    root.ref.lastItemSpanwDate = Date.now();
  };

  /**
   * Inserts a new item
   * @param root
   * @param action
   */
  var addItemView = function addItemView(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    var id = action.id,
      index = action.index,
      interactionMethod = action.interactionMethod;

    root.ref.addIndex = index;

    var now = Date.now();
    var spawnDate = now;
    var opacity = 1;

    if (interactionMethod !== InteractionMethod.NONE) {
      opacity = 0;
      var cooldown = root.query('GET_ITEM_INSERT_INTERVAL');
      var dist = now - root.ref.lastItemSpanwDate;
      spawnDate = dist < cooldown ? now + (cooldown - dist) : now;
    }

    root.ref.lastItemSpanwDate = spawnDate;

    root.appendChildView(
      root.createChildView(
        // view type
        item,

        // props
        {
          spawnDate: spawnDate,
          id: id,
          opacity: opacity,
          interactionMethod: interactionMethod
        }
      ),

      index
    );
  };

  var moveItem = function moveItem(item, x, y) {
    var vx =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var vy =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

    item.translateX = x;
    item.translateY = y;

    if (Date.now() > item.spawnDate) {
      // reveal element
      if (item.opacity === 0) {
        introItemView(item, x, y, vx, vy);
      }

      // make sure is default scale every frame
      item.scaleX = 1;
      item.scaleY = 1;
      item.opacity = 1;
    }
  };

  var introItemView = function introItemView(item, x, y, vx, vy) {
    if (item.interactionMethod === InteractionMethod.NONE) {
      item.translateX = null;
      item.translateX = x;
      item.translateY = null;
      item.translateY = y;
    } else if (item.interactionMethod === InteractionMethod.DROP) {
      item.translateX = null;
      item.translateX = x - vx * 20;

      item.translateY = null;
      item.translateY = y - vy * 10;

      item.scaleX = 0.8;
      item.scaleY = 0.8;
    } else if (item.interactionMethod === InteractionMethod.BROWSE) {
      item.translateY = null;
      item.translateY = y - 30;
    } else if (item.interactionMethod === InteractionMethod.API) {
      item.translateX = null;
      item.translateX = x - 30;
      item.translateY = null;
    }
  };

  /**
   * Removes an existing item
   * @param root
   * @param action
   */
  var removeItemView = function removeItemView(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    var id = action.id;

    // get the view matching the given id
    var view = root.childViews.find(function(child) {
      return child.id === id;
    });

    // if no view found, exit
    if (!view) {
      return;
    }

    // animate view out of view
    view.scaleX = 0.9;
    view.scaleY = 0.9;
    view.opacity = 0;

    // mark for removal
    view.markedForRemoval = true;
  };

  /**
   * Setup action routes
   */
  var route$2 = createRoute({
    DID_ADD_ITEM: addItemView,
    DID_REMOVE_ITEM: removeItemView
  });

  /**
   * Write to view
   * @param root
   * @param actions
   * @param props
   */
  var write$5 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions,
      shouldOptimize = _ref4.shouldOptimize;

    // route actions
    route$2({ root: root, props: props, actions: actions });
    var dragCoordinates = props.dragCoordinates;

    // get index
    var dragIndex = dragCoordinates
      ? getItemIndexByPosition(root, dragCoordinates)
      : null;

    // available space on horizontal axis
    var horizontalSpace = root.rect.element.width;

    // only draw children that have dimensions
    var visibleChildren = root.childViews.filter(function(child) {
      return child.rect.element.height;
    });

    // sort based on current active items
    var children = root
      .query('GET_ACTIVE_ITEMS')
      .map(function(item) {
        return visibleChildren.find(function(child) {
          return child.id === item.id;
        });
      })
      .filter(function(item) {
        return item;
      });

    // add index is used to reserve the dropped/added item index till the actual item is rendered
    var addIndex = root.ref.addIndex || null;

    // add index no longer needed till possibly next draw
    root.ref.addIndex = null;

    var dragIndexOffset = 0;
    var removeIndexOffset = 0;
    var addIndexOffset = 0;

    if (children.length === 0) return;

    var childRect = children[0].rect.element;
    var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
    var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
    var itemWidth = childRect.width + itemHorizontalMargin;
    var itemHeight = childRect.height + itemVerticalMargin;
    var itemsPerRow = Math.round(horizontalSpace / itemWidth);

    // stack
    if (itemsPerRow === 1) {
      var offsetY = 0;
      var dragOffset = 0;

      children.forEach(function(child, index) {
        if (dragIndex) {
          var dist = index - dragIndex;
          if (dist === -2) {
            dragOffset = -itemVerticalMargin * 0.25;
          } else if (dist === -1) {
            dragOffset = -itemVerticalMargin * 0.75;
          } else if (dist === 0) {
            dragOffset = itemVerticalMargin * 0.75;
          } else if (dist === 1) {
            dragOffset = itemVerticalMargin * 0.25;
          } else {
            dragOffset = 0;
          }
        }

        if (shouldOptimize) {
          child.translateX = null;
          child.translateY = null;
        }

        if (!child.markedForRemoval) {
          moveItem(child, 0, offsetY + dragOffset);
        }

        var itemHeight = child.rect.element.height + itemVerticalMargin;

        var visualHeight =
          itemHeight * (child.markedForRemoval ? child.opacity : 1);

        offsetY += visualHeight;
      });
    }
    // grid
    else {
      var prevX = 0;
      var prevY = 0;

      children.forEach(function(child, index) {
        if (index === dragIndex) {
          dragIndexOffset = 1;
        }

        if (index === addIndex) {
          addIndexOffset += 1;
        }

        if (child.markedForRemoval && child.opacity < 0.5) {
          removeIndexOffset -= 1;
        }

        var visualIndex =
          index + addIndexOffset + dragIndexOffset + removeIndexOffset;

        var indexX = visualIndex % itemsPerRow;
        var indexY = Math.floor(visualIndex / itemsPerRow);

        var offsetX = indexX * itemWidth;
        var offsetY = indexY * itemHeight;

        var vectorX = Math.sign(offsetX - prevX);
        var vectorY = Math.sign(offsetY - prevY);

        prevX = offsetX;
        prevY = offsetY;

        if (child.markedForRemoval) return;

        if (shouldOptimize) {
          child.translateX = null;
          child.translateY = null;
        }

        moveItem(child, offsetX, offsetY, vectorX, vectorY);
      });
    }
  };

  /**
   * Filters actions that are meant specifically for a certain child of the list
   * @param child
   * @param actions
   */
  var filterSetItemActions = function filterSetItemActions(child, actions) {
    return actions.filter(function(action) {
      // if action has an id, filter out actions that don't have this child id
      if (action.data && action.data.id) {
        return child.id === action.data.id;
      }

      // allow all other actions
      return true;
    });
  };

  var list = createView({
    create: create$8,
    write: write$5,
    tag: 'ul',
    name: 'list',
    didWriteView: function didWriteView(_ref5) {
      var root = _ref5.root;
      root.childViews
        .filter(function(view) {
          return view.markedForRemoval && view.opacity === 0 && view.resting;
        })
        .forEach(function(view) {
          view._destroy();
          root.removeChildView(view);
        });
    },
    filterFrameActionsForChild: filterSetItemActions,
    mixins: {
      apis: ['dragCoordinates']
    }
  });

  var create$9 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    root.ref.list = root.appendChildView(root.createChildView(list));
    props.dragCoordinates = null;
    props.overflowing = false;
  };

  var storeDragCoordinates = function storeDragCoordinates(_ref2) {
    var root = _ref2.root,
      props = _ref2.props,
      action = _ref2.action;
    if (!root.query('GET_ITEM_INSERT_LOCATION_FREEDOM')) return;
    props.dragCoordinates = {
      left: action.position.scopeLeft - root.ref.list.rect.element.left,
      top:
        action.position.scopeTop -
        (root.rect.outer.top +
          root.rect.element.marginTop +
          root.rect.element.scrollTop)
    };
  };

  var clearDragCoordinates = function clearDragCoordinates(_ref3) {
    var props = _ref3.props;
    props.dragCoordinates = null;
  };

  var route$3 = createRoute({
    DID_DRAG: storeDragCoordinates,
    DID_END_DRAG: clearDragCoordinates
  });

  var write$6 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions;

    // route actions
    route$3({ root: root, props: props, actions: actions });

    // current drag position
    root.ref.list.dragCoordinates = props.dragCoordinates;

    // if currently overflowing but no longer received overflow
    if (props.overflowing && !props.overflow) {
      props.overflowing = false;

      // reset overflow state
      root.element.dataset.state = '';
      root.height = null;
    }

    // if is not overflowing currently but does receive overflow value
    if (props.overflow) {
      var newHeight = Math.round(props.overflow);
      if (newHeight !== root.height) {
        props.overflowing = true;
        root.element.dataset.state = 'overflow';
        root.height = newHeight;
      }
    }
  };

  var listScroller = createView({
    create: create$9,
    write: write$6,
    name: 'list-scroller',
    mixins: {
      apis: ['overflow', 'dragCoordinates'],
      styles: ['height', 'translateY'],
      animations: {
        translateY: 'spring'
      }
    }
  });

  var attrToggle = function attrToggle(element, name, state) {
    var enabledValue =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    if (state) {
      attr(element, name, enabledValue);
    } else {
      element.removeAttribute(name);
    }
  };

  var resetFileInput = function resetFileInput(input) {
    // no value, no need to reset
    if (!input || input.value === '') {
      return;
    }

    try {
      // for modern browsers
      input.value = '';
    } catch (err) {}

    // for IE10
    if (input.value) {
      // quickly append input to temp form and reset form
      var form = createElement$1('form');
      var parentNode = input.parentNode;
      var ref = input.nextSibling;
      form.appendChild(input);
      form.reset();

      // re-inject input where it originally was
      if (ref) {
        parentNode.insertBefore(input, ref);
      } else {
        parentNode.appendChild(input);
      }
    }
  };

  var create$a = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // set id so can be referenced from outside labels
    root.element.id = 'filepond--browser-' + props.id;

    // set name of element (is removed when a value is set)
    attr(root.element, 'name', root.query('GET_NAME'));

    // we have to link this element to the status element
    attr(root.element, 'aria-controls', 'filepond--assistant-' + props.id);

    // set label, we use labelled by as otherwise the screenreader does not read the "browse" text in the label (as it has tabindex: 0)
    attr(root.element, 'aria-labelledby', 'filepond--drop-label-' + props.id);

    // handle changes to the input field
    root.ref.handleChange = function(e) {
      if (!root.element.value) {
        return;
      }

      // extract files
      var files = Array.from(root.element.files);

      // we add a little delay so the OS file select window can move out of the way before we add our file
      setTimeout(function() {
        // load files
        props.onload(files);

        // reset input, it's just for exposing a method to drop files, should not retain any state
        resetFileInput(root.element);
      }, 250);
    };
    root.element.addEventListener('change', root.ref.handleChange);
  };

  var setAcceptedFileTypes = function setAcceptedFileTypes(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    attrToggle(
      root.element,
      'accept',
      !!action.value,
      action.value ? action.value.join(',') : ''
    );
  };

  var toggleAllowMultiple = function toggleAllowMultiple(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    attrToggle(root.element, 'multiple', action.value);
  };

  var toggleDisabled = function toggleDisabled(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;
    var isDisabled = root.query('GET_DISABLED');
    var doesAllowBrowse = root.query('GET_ALLOW_BROWSE');
    var disableField = isDisabled || !doesAllowBrowse;
    attrToggle(root.element, 'disabled', disableField);
  };

  var toggleRequired = function toggleRequired(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;
    // want to remove required, always possible
    if (!action.value) {
      attrToggle(root.element, 'required', false);
    }
    // if want to make required, only possible when zero items
    else if (root.query('GET_TOTAL_ITEMS') === 0) {
      attrToggle(root.element, 'required', true);
    }
  };

  var setCaptureMethod = function setCaptureMethod(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;
    attrToggle(
      root.element,
      'capture',
      !!action.value,
      action.value === true ? '' : action.value
    );
  };

  var updateRequiredStatus = function updateRequiredStatus(_ref7) {
    var root = _ref7.root;
    var element = root.element;
    // always remove the required attribute when more than zero items
    if (root.query('GET_TOTAL_ITEMS') > 0) {
      attrToggle(element, 'required', false);
      attrToggle(element, 'name', false);
    } else {
      // add name attribute
      attrToggle(element, 'name', true, root.query('GET_NAME'));

      // remove any validation messages
      var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
      if (shouldCheckValidity) {
        element.setCustomValidity('');
      }

      // we only add required if the field has been deemed required
      if (root.query('GET_REQUIRED')) {
        attrToggle(element, 'required', true);
      }
    }
  };

  var updateFieldValidityStatus = function updateFieldValidityStatus(_ref8) {
    var root = _ref8.root;
    var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
    if (!shouldCheckValidity) return;
    root.element.setCustomValidity(root.query('GET_LABEL_INVALID_FIELD'));
  };

  var browser = createView({
    tag: 'input',
    name: 'browser',
    ignoreRect: true,
    ignoreRectUpdate: true,
    attributes: {
      type: 'file'
    },

    create: create$a,
    destroy: function destroy(_ref9) {
      var root = _ref9.root;
      root.element.removeEventListener('change', root.ref.handleChange);
    },
    write: createRoute({
      DID_LOAD_ITEM: updateRequiredStatus,
      DID_REMOVE_ITEM: updateRequiredStatus,
      DID_THROW_ITEM_INVALID: updateFieldValidityStatus,

      DID_SET_DISABLED: toggleDisabled,
      DID_SET_ALLOW_BROWSE: toggleDisabled,
      DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
      DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
      DID_SET_CAPTURE_METHOD: setCaptureMethod,
      DID_SET_REQUIRED: toggleRequired
    })
  });

  var Key = {
    ENTER: 13,
    SPACE: 32
  };

  var create$b = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // create the label and link it to the file browser
    var label = createElement$1('label');
    attr(label, 'for', 'filepond--browser-' + props.id);

    // use for labeling file input (aria-labelledby on file input)
    attr(label, 'id', 'filepond--drop-label-' + props.id);

    // hide the label for screenreaders, the input element will read the contents of the label when it's focussed. If we don't set aria-hidden the screenreader will also navigate the contents of the label separately from the input.
    attr(label, 'aria-hidden', 'true');

    // handle keys
    label.addEventListener('keydown', function(e) {
      var isActivationKey = e.keyCode === Key.ENTER || e.keyCode === Key.SPACE;
      if (!isActivationKey) return;
      // stops from triggering the element a second time
      e.preventDefault();

      // click link (will then in turn activate file input)
      root.ref.label.click();
    });

    root.element.addEventListener('click', function(e) {
      var isLabelClick = e.target === label || label.contains(e.target);

      // don't want to click twice
      if (isLabelClick) return;

      // click link (will then in turn activate file input)
      root.ref.label.click();
    });

    // update
    updateLabelValue(label, props.caption);

    // add!
    root.appendChild(label);
    root.ref.label = label;
  };

  var updateLabelValue = function updateLabelValue(label, value) {
    label.innerHTML = value;
    var clickable = label.querySelector('.filepond--label-action');
    if (clickable) {
      attr(clickable, 'tabindex', '0');
    }
    return value;
  };

  var dropLabel = createView({
    name: 'drop-label',
    ignoreRect: true,
    create: create$b,
    write: createRoute({
      DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(_ref2) {
        var root = _ref2.root,
          action = _ref2.action;
        updateLabelValue(root.ref.label, action.value);
      }
    }),

    mixins: {
      styles: ['opacity', 'translateX', 'translateY'],
      animations: {
        opacity: { type: 'tween', duration: 150 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var blob = createView({
    name: 'drip-blob',
    ignoreRect: true,
    mixins: {
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  var addBlob = function addBlob(_ref) {
    var root = _ref.root;
    var centerX = root.rect.element.width * 0.5;
    var centerY = root.rect.element.height * 0.5;

    root.ref.blob = root.appendChildView(
      root.createChildView(blob, {
        opacity: 0,
        scaleX: 2.5,
        scaleY: 2.5,
        translateX: centerX,
        translateY: centerY
      })
    );
  };

  var moveBlob = function moveBlob(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    if (!root.ref.blob) {
      addBlob({ root: root });
      return;
    }

    root.ref.blob.translateX = action.position.scopeLeft;
    root.ref.blob.translateY = action.position.scopeTop;
    root.ref.blob.scaleX = 1;
    root.ref.blob.scaleY = 1;
    root.ref.blob.opacity = 1;
  };

  var hideBlob = function hideBlob(_ref3) {
    var root = _ref3.root;
    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.opacity = 0;
  };

  var explodeBlob = function explodeBlob(_ref4) {
    var root = _ref4.root;
    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.scaleX = 2.5;
    root.ref.blob.scaleY = 2.5;
    root.ref.blob.opacity = 0;
  };

  var write$7 = function write(_ref5) {
    var root = _ref5.root,
      props = _ref5.props,
      actions = _ref5.actions;
    route$4({ root: root, props: props, actions: actions });
    var blob = root.ref.blob;

    if (actions.length === 0 && blob && blob.opacity === 0) {
      root.removeChildView(blob);
      root.ref.blob = null;
    }
  };

  var route$4 = createRoute({
    DID_DRAG: moveBlob,
    DID_DROP: explodeBlob,
    DID_END_DRAG: hideBlob
  });

  var drip = createView({
    ignoreRect: true,
    ignoreRectUpdate: true,
    name: 'drip',
    write: write$7
  });

  var getRootNode = function getRootNode(element) {
    return 'getRootNode' in element ? element.getRootNode() : document;
  };

  var images = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
  var text$1 = ['css', 'csv', 'html', 'txt'];
  var apps = ['rtf', 'pdf', 'json'];
  var map = {
    zip: 'zip|compressed',
    epub: 'application/epub+zip'
  };

  var guesstimateMimeType = function guesstimateMimeType() {
    var extension =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    extension = extension.toLowerCase();
    if (images.includes(extension)) {
      return (
        'image/' +
        (extension === 'jpg'
          ? 'jpeg'
          : extension === 'svg'
          ? 'svg+xml'
          : extension)
      );
    }
    if (text$1.includes(extension)) {
      return 'text/' + extension;
    }
    return map[extension] || null;
  };

  var requestDataTransferItems = function requestDataTransferItems(
    dataTransfer
  ) {
    return new Promise(function(resolve, reject) {
      // try to get links from transfer, if found, we'll exit immidiately
      // as only one link can be dragged at once
      var links = getLinks(dataTransfer);
      if (links.length) {
        resolve(links);
        return;
      }

      // try to get files from the transfer
      getFiles(dataTransfer).then(resolve);
    });
  };

  /**
   * Extracts files from a DataTransfer object
   */
  var getFiles = function getFiles(dataTransfer) {
    return new Promise(function(resolve, reject) {
      // get the transfer items as promises
      var promisedFiles = (dataTransfer.items
        ? Array.from(dataTransfer.items)
        : []
      )
        // only keep file system items (files and directories)
        .filter(function(item) {
          return isFileSystemItem(item);
        })

        // map each item to promise
        .map(function(item) {
          return getFilesFromItem(item);
        });

      // if is empty, see if we can extract some info from the files property as a fallback
      if (!promisedFiles.length) {
        // TODO: test for directories (should not be allowed)
        // Use FileReader, problem is that the files property gets lost in the process

        resolve(dataTransfer.files ? Array.from(dataTransfer.files) : []);
        return;
      }

      // done!
      Promise.all(promisedFiles).then(function(returendFileGroups) {
        // flatten groups
        var files = [];
        returendFileGroups.forEach(function(group) {
          files.push.apply(files, group);
        });

        // done (filter out empty files)!
        resolve(
          files.filter(function(file) {
            return file;
          })
        );
      });
    });
  };

  var isFileSystemItem = function isFileSystemItem(item) {
    if (isEntry(item)) {
      var entry = getAsEntry(item);
      if (entry) {
        return entry.isFile || entry.isDirectory;
      }
    }
    return item.kind === 'file';
  };

  var getFilesFromItem = function getFilesFromItem(item) {
    return new Promise(function(resolve, reject) {
      if (isDirectoryEntry(item)) {
        getFilesInDirectory(getAsEntry(item)).then(resolve);
        return;
      }

      resolve([item.getAsFile()]);
    });
  };

  var getFilesInDirectory = function getFilesInDirectory(entry) {
    return new Promise(function(resolve, reject) {
      var files = [];

      // the total entries to read
      var totalFilesFound = 0;

      // the recursive function
      var readEntries = function readEntries(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(function(entries) {
          entries.forEach(function(entry) {
            // recursively read more directories
            if (entry.isDirectory) {
              readEntries(entry);
            } else {
              // read as file
              totalFilesFound++;
              entry.file(function(file) {
                files.push(correctMissingFileType(file));

                if (totalFilesFound === files.length) {
                  resolve(files);
                }
              });
            }
          });
        });
      };

      // go!
      readEntries(entry);
    });
  };

  var correctMissingFileType = function correctMissingFileType(file) {
    if (file.type.length) return file;
    var date = file.lastModifiedDate;
    var name = file.name;
    file = file.slice(
      0,
      file.size,
      guesstimateMimeType(getExtensionFromFilename(file.name))
    );
    file.name = name;
    file.lastModifiedDate = date;
    return file;
  };

  var isDirectoryEntry = function isDirectoryEntry(item) {
    return isEntry(item) && (getAsEntry(item) || {}).isDirectory;
  };

  var isEntry = function isEntry(item) {
    return 'webkitGetAsEntry' in item;
  };

  var getAsEntry = function getAsEntry(item) {
    return item.webkitGetAsEntry();
  };

  /**
   * Extracts links from a DataTransfer object
   */
  var getLinks = function getLinks(dataTransfer) {
    var links = [];
    try {
      // look in meta data property
      links = getLinksFromTransferMetaData(dataTransfer);
      if (links.length) {
        return links;
      }
      links = getLinksFromTransferURLData(dataTransfer);
    } catch (e) {
      // nope nope nope (probably IE trouble)
    }
    return links;
  };

  var getLinksFromTransferURLData = function getLinksFromTransferURLData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('url');
    if (typeof data === 'string' && data.length) {
      return [data];
    }
    return [];
  };

  var getLinksFromTransferMetaData = function getLinksFromTransferMetaData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('text/html');
    if (typeof data === 'string' && data.length) {
      var matches = data.match(/src\s*=\s*"(.+?)"/);
      if (matches) {
        return [matches[1]];
      }
    }
    return [];
  };

  var dragNDropObservers = [];

  var eventPosition = function eventPosition(e) {
    return {
      pageLeft: e.pageX,
      pageTop: e.pageY,
      scopeLeft: e.offsetX || e.layerX,
      scopeTop: e.offsetY || e.layerY
    };
  };

  var createDragNDropClient = function createDragNDropClient(
    element,
    scopeToObserve,
    filterElement
  ) {
    var observer = getDragNDropObserver(scopeToObserve);

    var client = {
      element: element,
      filterElement: filterElement,
      state: null,
      ondrop: function ondrop() {},
      onenter: function onenter() {},
      ondrag: function ondrag() {},
      onexit: function onexit() {},
      onload: function onload() {},
      allowdrop: function allowdrop() {}
    };

    client.destroy = observer.addListener(client);

    return client;
  };

  var getDragNDropObserver = function getDragNDropObserver(element) {
    // see if already exists, if so, return
    var observer = dragNDropObservers.find(function(item) {
      return item.element === element;
    });
    if (observer) {
      return observer;
    }

    // create new observer, does not yet exist for this element
    var newObserver = createDragNDropObserver(element);
    dragNDropObservers.push(newObserver);
    return newObserver;
  };

  var createDragNDropObserver = function createDragNDropObserver(element) {
    var clients = [];

    var routes = {
      dragenter: dragenter,
      dragover: dragover,
      dragleave: dragleave,
      drop: drop
    };

    var handlers = {};

    forin(routes, function(event, createHandler) {
      handlers[event] = createHandler(element, clients);
      element.addEventListener(event, handlers[event], false);
    });

    var observer = {
      element: element,
      addListener: function addListener(client) {
        // add as client
        clients.push(client);

        // return removeListener function
        return function() {
          // remove client
          clients.splice(clients.indexOf(client), 1);

          // if no more clients, clean up observer
          if (clients.length === 0) {
            dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);

            forin(routes, function(event) {
              element.removeEventListener(event, handlers[event], false);
            });
          }
        };
      }
    };

    return observer;
  };

  var elementFromPoint = function elementFromPoint(root, point) {
    if (!('elementFromPoint' in root)) {
      root = document;
    }
    return root.elementFromPoint(point.x, point.y);
  };

  var isEventTarget = function isEventTarget(e, target) {
    // get root
    var root = getRootNode(target);

    // get element at position
    // if root is not actual shadow DOM and does not have elementFromPoint method, use the one on document
    var elementAtPosition = elementFromPoint(root, {
      x: e.pageX - window.pageXOffset,
      y: e.pageY - window.pageYOffset
    });

    // test if target is the element or if one of its children is
    return elementAtPosition === target || target.contains(elementAtPosition);
  };

  var initialTarget = null;

  var setDropEffect = function setDropEffect(dataTransfer, effect) {
    // is in try catch as IE11 will throw error if not
    try {
      dataTransfer.dropEffect = effect;
    } catch (e) {}
  };

  var dragenter = function dragenter(root, clients) {
    return function(e) {
      e.preventDefault();

      initialTarget = e.target;

      clients.forEach(function(client) {
        var element = client.element,
          onenter = client.onenter;

        if (isEventTarget(e, element)) {
          client.state = 'enter';

          // fire enter event
          onenter(eventPosition(e));
        }
      });
    };
  };

  var dragover = function dragover(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;

      requestDataTransferItems(dataTransfer).then(function(items) {
        var overDropTarget = false;

        clients.some(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            onenter = client.onenter,
            onexit = client.onexit,
            ondrag = client.ondrag,
            allowdrop = client.allowdrop;

          // by default we can drop
          setDropEffect(dataTransfer, 'copy');

          // allow transfer of these items
          var allowsTransfer = allowdrop(items);

          // only used when can be dropped on page
          if (!allowsTransfer) {
            setDropEffect(dataTransfer, 'none');
            return;
          }

          // targetting this client
          if (isEventTarget(e, element)) {
            overDropTarget = true;

            // had no previous state, means we are entering this client
            if (client.state === null) {
              client.state = 'enter';
              onenter(eventPosition(e));
              return;
            }

            // now over element (no matter if it allows the drop or not)
            client.state = 'over';

            // needs to allow transfer
            if (filterElement && !allowsTransfer) {
              setDropEffect(dataTransfer, 'none');
              return;
            }

            // dragging
            ondrag(eventPosition(e));
          } else {
            // should be over an element to drop
            if (filterElement && !overDropTarget) {
              setDropEffect(dataTransfer, 'none');
            }

            // might have just left this client?
            if (client.state) {
              client.state = null;
              onexit(eventPosition(e));
            }
          }
        });
      });
    };
  };

  var drop = function drop(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;

      requestDataTransferItems(dataTransfer).then(function(items) {
        clients.forEach(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            ondrop = client.ondrop,
            onexit = client.onexit,
            allowdrop = client.allowdrop;

          client.state = null;

          var allowsTransfer = allowdrop(items);

          // no transfer for this client
          if (!allowsTransfer) {
            onexit(eventPosition(e));
            return;
          }

          // if we're filtering on element we need to be over the element to drop
          if (filterElement && !isEventTarget(e, element)) {
            return;
          }

          ondrop(eventPosition(e), items);
        });
      });
    };
  };

  var dragleave = function dragleave(root, clients) {
    return function(e) {
      if (initialTarget !== e.target) {
        return;
      }

      clients.forEach(function(client) {
        var onexit = client.onexit;

        client.state = null;

        onexit(eventPosition(e));
      });
    };
  };

  var createHopper = function createHopper(scope, validateItems, options) {
    // is now hopper scope
    scope.classList.add('filepond--hopper');

    // shortcuts
    var catchesDropsOnPage = options.catchesDropsOnPage,
      requiresDropOnElement = options.requiresDropOnElement,
      _options$filterItems = options.filterItems,
      filterItems =
        _options$filterItems === void 0
          ? function(items) {
              return items;
            }
          : _options$filterItems;

    // create a dnd client
    var client = createDragNDropClient(
      scope,
      catchesDropsOnPage ? document.documentElement : scope,
      requiresDropOnElement
    );

    // current client state
    var lastState = '';
    var currentState = '';

    // determines if a file may be dropped
    client.allowdrop = function(items) {
      // TODO: if we can, throw error to indicate the items cannot by dropped

      return validateItems(filterItems(items));
    };

    client.ondrop = function(position, items) {
      var filteredItems = filterItems(items);

      if (!validateItems(filteredItems)) {
        api.ondragend(position);
        return;
      }

      currentState = 'drag-drop';

      api.onload(filteredItems, position);
    };

    client.ondrag = function(position) {
      api.ondrag(position);
    };

    client.onenter = function(position) {
      currentState = 'drag-over';

      api.ondragstart(position);
    };

    client.onexit = function(position) {
      currentState = 'drag-exit';

      api.ondragend(position);
    };

    var api = {
      updateHopperState: function updateHopperState() {
        if (lastState !== currentState) {
          scope.dataset.hopperState = currentState;
          lastState = currentState;
        }
      },
      onload: function onload() {},
      ondragstart: function ondragstart() {},
      ondrag: function ondrag() {},
      ondragend: function ondragend() {},
      destroy: function destroy() {
        // destroy client
        client.destroy();
      }
    };

    return api;
  };

  var listening = false;
  var listeners$1 = [];

  var handlePaste = function handlePaste(e) {
    requestDataTransferItems(e.clipboardData).then(function(files) {
      // no files received
      if (!files.length) {
        return;
      }

      // notify listeners of received files
      listeners$1.forEach(function(listener) {
        return listener(files);
      });
    });
  };

  var listen = function listen(cb) {
    // can't add twice
    if (listeners$1.includes(cb)) {
      return;
    }

    // add initial listener
    listeners$1.push(cb);

    // setup paste listener for entire page
    if (listening) {
      return;
    }

    listening = true;
    document.addEventListener('paste', handlePaste);
  };

  var unlisten = function unlisten(listener) {
    arrayRemove(listeners$1, listeners$1.indexOf(listener));

    // clean up
    if (listeners$1.length === 0) {
      document.removeEventListener('paste', handlePaste);
      listening = false;
    }
  };

  var createPaster = function createPaster() {
    var cb = function cb(files) {
      api.onload(files);
    };

    var api = {
      destroy: function destroy() {
        unlisten(cb);
      },
      onload: function onload() {}
    };

    listen(cb);

    return api;
  };

  /**
   * Creates the file view
   */
  var create$c = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;
    root.element.id = 'filepond--assistant-' + props.id;
    attr(root.element, 'role', 'status');
    attr(root.element, 'aria-live', 'polite');
    attr(root.element, 'aria-relevant', 'additions');
  };

  var addFilesNotificationTimeout = null;
  var notificationClearTimeout = null;

  var filenames = [];

  var assist = function assist(root, message) {
    root.element.textContent = message;
  };

  var clear$1 = function clear(root) {
    root.element.textContent = '';
  };

  var listModified = function listModified(root, filename, label) {
    var total = root.query('GET_TOTAL_ITEMS');
    assist(
      root,
      label +
        ' ' +
        filename +
        ', ' +
        total +
        ' ' +
        (total === 1
          ? root.query('GET_LABEL_FILE_COUNT_SINGULAR')
          : root.query('GET_LABEL_FILE_COUNT_PLURAL'))
    );

    // clear group after set amount of time so the status is not read twice
    clearTimeout(notificationClearTimeout);
    notificationClearTimeout = setTimeout(function() {
      clear$1(root);
    }, 1500);
  };

  var isUsingFilePond = function isUsingFilePond(root) {
    return root.element.parentNode.contains(document.activeElement);
  };

  var itemAdded = function itemAdded(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    if (!isUsingFilePond(root)) {
      return;
    }

    root.element.textContent = '';
    var item = root.query('GET_ITEM', action.id);
    filenames.push(item.filename);

    clearTimeout(addFilesNotificationTimeout);
    addFilesNotificationTimeout = setTimeout(function() {
      listModified(
        root,
        filenames.join(', '),
        root.query('GET_LABEL_FILE_ADDED')
      );

      filenames.length = 0;
    }, 750);
  };

  var itemRemoved = function itemRemoved(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    if (!isUsingFilePond(root)) {
      return;
    }

    var item = action.item;
    listModified(root, item.filename, root.query('GET_LABEL_FILE_REMOVED'));
  };

  var itemProcessed = function itemProcessed(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;
    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_COMPLETE');

    assist(root, filename + ' ' + label);
  };

  var itemProcessedUndo = function itemProcessedUndo(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;
    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_ABORTED');

    assist(root, filename + ' ' + label);
  };

  var itemError = function itemError(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;
    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;

    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    assist(root, action.status.main + ' ' + filename + ' ' + action.status.sub);
  };

  var assistant = createView({
    create: create$c,
    ignoreRect: true,
    ignoreRectUpdate: true,
    write: createRoute({
      DID_LOAD_ITEM: itemAdded,
      DID_REMOVE_ITEM: itemRemoved,
      DID_COMPLETE_ITEM_PROCESSING: itemProcessed,

      DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
      DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,

      DID_THROW_ITEM_REMOVE_ERROR: itemError,
      DID_THROW_ITEM_LOAD_ERROR: itemError,
      DID_THROW_ITEM_INVALID: itemError,
      DID_THROW_ITEM_PROCESSING_ERROR: itemError
    }),

    tag: 'span',
    name: 'assistant'
  });

  var toCamels = function toCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string.replace(new RegExp(separator + '.', 'g'), function(sub) {
      return sub.charAt(1).toUpperCase();
    });
  };

  var debounce = function debounce(func) {
    var interval =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
    var immidiateOnly =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var last = Date.now();
    var timeout = null;

    return function() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeout);

      var dist = Date.now() - last;

      var fn = function fn() {
        last = Date.now();
        func.apply(void 0, args);
      };

      if (dist < interval) {
        // we need to delay by the difference between interval and dist
        // for example: if distance is 10 ms and interval is 16 ms,
        // we need to wait an additional 6ms before calling the function)
        if (!immidiateOnly) {
          timeout = setTimeout(fn, interval - dist);
        }
      } else {
        // go!
        fn();
      }
    };
  };

  var MAX_FILES_LIMIT = 1000000;

  var create$d = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // Add id
    var id = root.query('GET_ID');
    if (id) {
      root.element.id = id;
    }

    // Add className
    var className = root.query('GET_CLASS_NAME');
    if (className) {
      className.split(' ').forEach(function(name) {
        root.element.classList.add(name);
      });
    }

    // Field label
    root.ref.label = root.appendChildView(
      root.createChildView(
        dropLabel,
        Object.assign({}, props, {
          translateY: null,
          caption: root.query('GET_LABEL_IDLE')
        })
      )
    );

    // List of items
    root.ref.list = root.appendChildView(
      root.createChildView(listScroller, { translateY: null })
    );

    // Background panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'panel-root' })
    );

    // Assistant notifies assistive tech when content changes
    root.ref.assistant = root.appendChildView(
      root.createChildView(assistant, Object.assign({}, props))
    );

    // Measure (tests if fixed height was set)
    // DOCTYPE needs to be set for this to work
    root.ref.measure = createElement$1('div');
    root.ref.measure.style.height = '100%';
    root.element.appendChild(root.ref.measure);

    // information on the root height or fixed height status
    root.ref.bounds = null;

    // apply initial style properties
    root
      .query('GET_STYLES')
      .filter(function(style) {
        return !isEmpty(style.value);
      })
      .map(function(_ref2) {
        var name = _ref2.name,
          value = _ref2.value;
        root.element.dataset[name] = value;
      });

    // determine if width changed
    root.ref.widthPrevious = null;
    root.ref.widthUpdated = debounce(function() {
      root.ref.updateHistory = [];
      root.dispatch('DID_RESIZE_ROOT');
    }, 250);

    // history of updates
    root.ref.previousAspectRatio = null;
    root.ref.updateHistory = [];
  };

  var write$8 = function write(_ref3) {
    var root = _ref3.root,
      props = _ref3.props,
      actions = _ref3.actions;

    // route actions
    route$5({ root: root, props: props, actions: actions });

    // apply style properties
    actions
      .filter(function(action) {
        return /^DID_SET_STYLE_/.test(action.type);
      })
      .filter(function(action) {
        return !isEmpty(action.data.value);
      })
      .map(function(_ref4) {
        var type = _ref4.type,
          data = _ref4.data;
        var name = toCamels(type.substr(8).toLowerCase(), '_');
        root.element.dataset[name] = data.value;
        root.invalidateLayout();
      });

    if (root.rect.element.hidden) return;

    if (root.rect.element.width !== root.ref.widthPrevious) {
      root.ref.widthPrevious = root.rect.element.width;
      root.ref.widthUpdated();
    }

    // get box bounds, we do this only once
    var bounds = root.ref.bounds;
    if (!bounds) {
      bounds = root.ref.bounds = calculateRootBoundingBoxHeight(root);

      // destroy measure element
      root.element.removeChild(root.ref.measure);
      root.ref.measure = null;
    }

    // get quick references to various high level parts of the upload tool
    var _root$ref = root.ref,
      hopper = _root$ref.hopper,
      label = _root$ref.label,
      list = _root$ref.list,
      panel = _root$ref.panel;

    // sets correct state to hopper scope
    if (hopper) {
      hopper.updateHopperState();
    }

    // bool to indicate if we're full or not
    var aspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
    var isMultiItem = root.query('GET_ALLOW_MULTIPLE');
    var totalItems = root.query('GET_TOTAL_ITEMS');
    var maxItems = isMultiItem
      ? root.query('GET_MAX_FILES') || MAX_FILES_LIMIT
      : 1;
    var atMaxCapacity = totalItems === maxItems;

    // action used to add item
    var addAction = actions.find(function(action) {
      return action.type === 'DID_ADD_ITEM';
    });

    // if reached max capacity and we've just reached it
    if (atMaxCapacity && addAction) {
      // get interaction type
      var interactionMethod = addAction.data.interactionMethod;

      // hide label
      label.opacity = 0;

      if (isMultiItem) {
        label.translateY = -40;
      } else {
        if (interactionMethod === InteractionMethod.API) {
          label.translateX = 40;
        } else if (interactionMethod === InteractionMethod.BROWSE) {
          label.translateY = 40;
        } else {
          label.translateY = 30;
        }
      }
    } else if (!atMaxCapacity) {
      label.opacity = 1;
      label.translateX = 0;
      label.translateY = 0;
    }

    var listItemMargin = calculateListItemMargin(root);

    var listHeight = calculateListHeight(root);

    var labelHeight = label.rect.element.height;
    var currentLabelHeight = !isMultiItem || atMaxCapacity ? 0 : labelHeight;

    var listMarginTop = atMaxCapacity ? list.rect.element.marginTop : 0;
    var listMarginBottom =
      totalItems === 0 ? 0 : list.rect.element.marginBottom;

    var visualHeight =
      currentLabelHeight + listMarginTop + listHeight.visual + listMarginBottom;
    var boundsHeight =
      currentLabelHeight + listMarginTop + listHeight.bounds + listMarginBottom;

    // link list to label bottom position
    list.translateY =
      Math.max(0, currentLabelHeight - list.rect.element.marginTop) -
      listItemMargin.top;

    if (aspectRatio) {
      // fixed aspect ratio

      // calculate height based on width
      var width = root.rect.element.width;
      var height = width * aspectRatio;

      // clear history if aspect ratio has changed
      if (aspectRatio !== root.ref.previousAspectRatio) {
        root.ref.previousAspectRatio = aspectRatio;
        root.ref.updateHistory = [];
      }

      // remember this width
      var history = root.ref.updateHistory;
      history.push(width);

      var MAX_BOUNCES = 2;
      if (history.length > MAX_BOUNCES * 2) {
        var l = history.length;
        var bottom = l - 10;
        var bounces = 0;
        for (var i = l; i >= bottom; i--) {
          if (history[i] === history[i - 2]) {
            bounces++;
          }

          if (bounces >= MAX_BOUNCES) {
            // dont adjust height
            return;
          }
        }
      }

      // fix height of panel so it adheres to aspect ratio
      panel.scalable = false;
      panel.height = height;

      // available height for list
      var listAvailableHeight =
        // the height of the panel minus the label height
        height -
        currentLabelHeight -
        // the room we leave open between the end of the list and the panel bottom
        (listMarginBottom - listItemMargin.bottom) -
        // if we're full we need to leave some room between the top of the panel and the list
        (atMaxCapacity ? listMarginTop : 0);

      if (listHeight.visual > listAvailableHeight) {
        list.overflow = listAvailableHeight;
      } else {
        list.overflow = null;
      }

      // set container bounds (so pushes siblings downwards)
      root.height = height;
    } else if (bounds.fixedHeight) {
      // fixed height

      // fix height of panel
      panel.scalable = false;

      // available height for list
      var _listAvailableHeight =
        // the height of the panel minus the label height
        bounds.fixedHeight -
        currentLabelHeight -
        // the room we leave open between the end of the list and the panel bottom
        (listMarginBottom - listItemMargin.bottom) -
        // if we're full we need to leave some room between the top of the panel and the list
        (atMaxCapacity ? listMarginTop : 0);

      // set list height
      if (listHeight.visual > _listAvailableHeight) {
        list.overflow = _listAvailableHeight;
      } else {
        list.overflow = null;
      }

      // no need to set container bounds as these are handles by CSS fixed height
    } else if (bounds.cappedHeight) {
      // max-height

      // not a fixed height panel
      var isCappedHeight = visualHeight >= bounds.cappedHeight;
      var panelHeight = Math.min(bounds.cappedHeight, visualHeight);
      panel.scalable = true;
      panel.height = isCappedHeight
        ? panelHeight
        : panelHeight - listItemMargin.top - listItemMargin.bottom;

      // available height for list
      var _listAvailableHeight2 =
        // the height of the panel minus the label height
        panelHeight -
        currentLabelHeight -
        // the room we leave open between the end of the list and the panel bottom
        (listMarginBottom - listItemMargin.bottom) -
        // if we're full we need to leave some room between the top of the panel and the list
        (atMaxCapacity ? listMarginTop : 0);

      // set list height (if is overflowing)
      if (
        visualHeight > bounds.cappedHeight &&
        listHeight.visual > _listAvailableHeight2
      ) {
        list.overflow = _listAvailableHeight2;
      } else {
        list.overflow = null;
      }

      // set container bounds (so pushes siblings downwards)
      root.height = Math.min(
        bounds.cappedHeight,
        boundsHeight - listItemMargin.top - listItemMargin.bottom
      );
    } else {
      // flexible height

      // not a fixed height panel
      var itemMargin =
        totalItems > 0 ? listItemMargin.top + listItemMargin.bottom : 0;
      panel.scalable = true;
      panel.height = Math.max(labelHeight, visualHeight - itemMargin);

      // set container bounds (so pushes siblings downwards)
      root.height = Math.max(labelHeight, boundsHeight - itemMargin);
    }
  };

  var calculateListItemMargin = function calculateListItemMargin(root) {
    var item = root.ref.list.childViews[0].childViews[0];
    return item
      ? {
          top: item.rect.element.marginTop,
          bottom: item.rect.element.marginBottom
        }
      : {
          top: 0,
          bottom: 0
        };
  };

  var calculateListHeight = function calculateListHeight(root) {
    var visual = 0;
    var bounds = 0;

    // get file list reference
    var scrollList = root.ref.list;
    var itemList = scrollList.childViews[0];
    var children = itemList.childViews;

    // no children, done!
    if (children.length === 0) return { visual: visual, bounds: bounds };

    var horizontalSpace = itemList.rect.element.width;
    var dragIndex = getItemIndexByPosition(
      itemList,
      scrollList.dragCoordinates
    );

    var childRect = children[0].rect.element;

    var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
    var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;

    var itemWidth = childRect.width + itemHorizontalMargin;
    var itemHeight = childRect.height + itemVerticalMargin;

    var newItem = typeof dragIndex !== 'undefined' && dragIndex >= 0 ? 1 : 0;
    var removedItem = children.find(function(child) {
      return child.markedForRemoval && child.opacity < 0.45;
    })
      ? -1
      : 0;
    var verticalItemCount = children.length + newItem + removedItem;
    var itemsPerRow = Math.round(horizontalSpace / itemWidth);

    // stack
    if (itemsPerRow === 1) {
      children.forEach(function(item) {
        var height = item.rect.element.height + itemVerticalMargin;
        bounds += height;
        visual += height * item.opacity;
      });
    }
    // grid
    else {
      bounds = Math.ceil(verticalItemCount / itemsPerRow) * itemHeight;
      visual = bounds;
    }

    return { visual: visual, bounds: bounds };
  };

  var calculateRootBoundingBoxHeight = function calculateRootBoundingBoxHeight(
    root
  ) {
    var height = root.ref.measureHeight || null;
    var cappedHeight = parseInt(root.style.maxHeight, 10) || null;
    var fixedHeight = height === 0 ? null : height;

    return {
      cappedHeight: cappedHeight,
      fixedHeight: fixedHeight
    };
  };

  var exceedsMaxFiles = function exceedsMaxFiles(root, items) {
    var allowReplace = root.query('GET_ALLOW_REPLACE');
    var allowMultiple = root.query('GET_ALLOW_MULTIPLE');
    var totalItems = root.query('GET_TOTAL_ITEMS');
    var maxItems = root.query('GET_MAX_FILES');

    // total amount of items being dragged
    var totalBrowseItems = items.length;

    // if does not allow multiple items and dragging more than one item
    if (!allowMultiple && totalBrowseItems > 1) {
      return true;
    }

    // limit max items to one if not allowed to drop multiple items
    maxItems = allowMultiple ? maxItems : allowReplace ? maxItems : 1;

    // no more room?
    var hasMaxItems = isInt(maxItems);
    if (hasMaxItems && totalItems + totalBrowseItems > maxItems) {
      root.dispatch('DID_THROW_MAX_FILES', {
        source: items,
        error: createResponse('warning', 0, 'Max files')
      });

      return true;
    }

    return false;
  };

  var getDragIndex = function getDragIndex(list, position) {
    var itemList = list.childViews[0];
    return getItemIndexByPosition(itemList, {
      left: position.scopeLeft - itemList.rect.element.left,
      top:
        position.scopeTop -
        (list.rect.outer.top +
          list.rect.element.marginTop +
          list.rect.element.scrollTop)
    });
  };

  /**
   * Enable or disable file drop functionality
   */
  var toggleDrop = function toggleDrop(root) {
    var isAllowed = root.query('GET_ALLOW_DROP');
    var isDisabled = root.query('GET_DISABLED');
    var enabled = isAllowed && !isDisabled;
    if (enabled && !root.ref.hopper) {
      var hopper = createHopper(
        root.element,
        function(items) {
          // these files don't fit so stop here
          if (exceedsMaxFiles(root, items)) return false;

          // allow quick validation of dropped items
          var beforeDropFile =
            root.query('GET_BEFORE_DROP_FILE') ||
            function() {
              return true;
            };

          // all items should be validated by all filters as valid
          var dropValidation = root.query('GET_DROP_VALIDATION');
          return dropValidation
            ? items.every(function(item) {
                return (
                  applyFilters('ALLOW_HOPPER_ITEM', item, {
                    query: root.query
                  }).every(function(result) {
                    return result === true;
                  }) && beforeDropFile(item)
                );
              })
            : true;
        },
        {
          filterItems: function filterItems(items) {
            var ignoredFiles = root.query('GET_IGNORED_FILES');
            return items.filter(function(item) {
              if (isFile(item)) {
                return !ignoredFiles.includes(item.name.toLowerCase());
              }
              return true;
            });
          },
          catchesDropsOnPage: root.query('GET_DROP_ON_PAGE'),
          requiresDropOnElement: root.query('GET_DROP_ON_ELEMENT')
        }
      );

      hopper.onload = function(items, position) {
        root.dispatch('ADD_ITEMS', {
          items: items,
          index: getDragIndex(root.ref.list, position),
          interactionMethod: InteractionMethod.DROP
        });

        root.dispatch('DID_DROP', { position: position });

        root.dispatch('DID_END_DRAG', { position: position });
      };

      hopper.ondragstart = function(position) {
        root.dispatch('DID_START_DRAG', { position: position });
      };

      hopper.ondrag = debounce(function(position) {
        root.dispatch('DID_DRAG', { position: position });
      });

      hopper.ondragend = function(position) {
        root.dispatch('DID_END_DRAG', { position: position });
      };

      root.ref.hopper = hopper;

      root.ref.drip = root.appendChildView(root.createChildView(drip));
    } else if (!enabled && root.ref.hopper) {
      root.ref.hopper.destroy();
      root.ref.hopper = null;
      root.removeChildView(root.ref.drip);
    }
  };

  /**
   * Enable or disable browse functionality
   */
  var toggleBrowse = function toggleBrowse(root, props) {
    var isAllowed = root.query('GET_ALLOW_BROWSE');
    var isDisabled = root.query('GET_DISABLED');
    var enabled = isAllowed && !isDisabled;
    if (enabled && !root.ref.browser) {
      root.ref.browser = root.appendChildView(
        root.createChildView(
          browser,
          Object.assign({}, props, {
            onload: function onload(items) {
              // these files don't fit so stop here
              if (exceedsMaxFiles(root, items)) return false;

              // add items!
              root.dispatch('ADD_ITEMS', {
                items: items,
                index: -1,
                interactionMethod: InteractionMethod.BROWSE
              });
            }
          })
        ),

        0
      );
    } else if (!enabled && root.ref.browser) {
      root.removeChildView(root.ref.browser);
      root.ref.browser = null;
    }
  };

  /**
   * Enable or disable paste functionality
   */
  var togglePaste = function togglePaste(root) {
    var isAllowed = root.query('GET_ALLOW_PASTE');
    var isDisabled = root.query('GET_DISABLED');
    var enabled = isAllowed && !isDisabled;
    if (enabled && !root.ref.paster) {
      root.ref.paster = createPaster();
      root.ref.paster.onload = function(items) {
        root.dispatch('ADD_ITEMS', {
          items: items,
          index: -1,
          interactionMethod: InteractionMethod.PASTE
        });
      };
    } else if (!enabled && root.ref.paster) {
      root.ref.paster.destroy();
      root.ref.paster = null;
    }
  };

  /**
   * Route actions
   */
  var route$5 = createRoute({
    DID_SET_ALLOW_BROWSE: function DID_SET_ALLOW_BROWSE(_ref5) {
      var root = _ref5.root,
        props = _ref5.props;
      toggleBrowse(root, props);
    },
    DID_SET_ALLOW_DROP: function DID_SET_ALLOW_DROP(_ref6) {
      var root = _ref6.root;
      toggleDrop(root);
    },
    DID_SET_ALLOW_PASTE: function DID_SET_ALLOW_PASTE(_ref7) {
      var root = _ref7.root;
      togglePaste(root);
    },
    DID_SET_DISABLED: function DID_SET_DISABLED(_ref8) {
      var root = _ref8.root,
        props = _ref8.props;
      toggleDrop(root);
      togglePaste(root);
      toggleBrowse(root, props);
      var isDisabled = root.query('GET_DISABLED');
      if (isDisabled) {
        root.element.dataset.disabled = 'disabled';
      } else {
        delete root.element.dataset.disabled;
      }
    }
  });

  var root = createView({
    name: 'root',
    read: function read(_ref9) {
      var root = _ref9.root;
      if (root.ref.measure) {
        root.ref.measureHeight = root.ref.measure.offsetHeight;
      }
    },
    create: create$d,
    write: write$8,
    destroy: function destroy(_ref10) {
      var root = _ref10.root;
      if (root.ref.paster) {
        root.ref.paster.destroy();
      }
      if (root.ref.hopper) {
        root.ref.hopper.destroy();
      }
    },
    mixins: {
      styles: ['height']
    }
  });

  // creates the app
  var createApp = function createApp() {
    var initialOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // let element
    var originalElement = null;

    // get default options
    var defaultOptions = getOptions();

    // create the data store, this will contain all our app info
    var store = createStore(
      // initial state (should be serializable)
      createInitialState(defaultOptions),

      // queries
      [queries, createOptionQueries(defaultOptions)],

      // action handlers
      [actions, createOptionActions(defaultOptions)]
    );

    // set initial options
    store.dispatch('SET_OPTIONS', { options: initialOptions });

    // kick thread if visibility changes
    var visibilityHandler = function visibilityHandler() {
      if (document.hidden) return;
      store.dispatch('KICK');
    };
    document.addEventListener('visibilitychange', visibilityHandler);

    // re-render on window resize start and finish
    var resizeDoneTimer = null;
    var isResizing = false;
    var isResizingHorizontally = false;
    var initialWindowWidth = null;
    var currentWindowWidth = null;
    var resizeHandler = function resizeHandler() {
      if (!isResizing) {
        isResizing = true;
      }
      clearTimeout(resizeDoneTimer);
      resizeDoneTimer = setTimeout(function() {
        isResizing = false;
        initialWindowWidth = null;
        currentWindowWidth = null;
        if (isResizingHorizontally) {
          isResizingHorizontally = false;
          store.dispatch('DID_STOP_RESIZE');
        }
      }, 500);
    };
    window.addEventListener('resize', resizeHandler);

    // render initial view
    var view = root(store, { id: getUniqueId() });

    //
    // PRIVATE API -------------------------------------------------------------------------------------
    //
    var isResting = false;
    var isHidden = false;

    var readWriteApi = {
      // necessary for update loop

      /**
       * Reads from dom (never call manually)
       * @private
       */
      _read: function _read() {
        // test if we're resizing horizontally
        // TODO: see if we can optimize this by measuring root rect
        if (isResizing) {
          currentWindowWidth = window.innerWidth;
          if (!initialWindowWidth) {
            initialWindowWidth = currentWindowWidth;
          }

          if (
            !isResizingHorizontally &&
            currentWindowWidth !== initialWindowWidth
          ) {
            store.dispatch('DID_START_RESIZE');
            isResizingHorizontally = true;
          }
        }

        if (isHidden && isResting) {
          // test if is no longer hidden
          isResting = view.element.offsetParent === null;
        }

        // if resting, no need to read as numbers will still all be correct
        if (isResting) return;

        // read view data
        view._read();

        // if is hidden we need to know so we exit rest mode when revealed
        isHidden = view.rect.element.hidden;
      },

      /**
       * Writes to dom (never call manually)
       * @private
       */
      _write: function _write(ts) {
        // get all actions from store
        var actions = store
          .processActionQueue()

          // filter out set actions (these will automatically trigger DID_SET)
          .filter(function(action) {
            return !/^SET_/.test(action.type);
          });

        // if was idling and no actions stop here
        if (isResting && !actions.length) return;

        // some actions might trigger events
        routeActionsToEvents(actions);

        // update the view
        isResting = view._write(ts, actions, isResizingHorizontally);

        // will clean up all archived items
        removeReleasedItems(store.query('GET_ITEMS'));

        // now idling
        if (isResting) {
          store.processDispatchQueue();
        }
      }
    };

    //
    // EXPOSE EVENTS -------------------------------------------------------------------------------------
    //
    var createEvent = function createEvent(name) {
      return function(data) {
        // create default event
        var event = {
          type: name
        };

        // no data to add
        if (!data) {
          return event;
        }

        // copy relevant props
        if (data.hasOwnProperty('error')) {
          event.error = data.error ? Object.assign({}, data.error) : null;
        }

        if (data.status) {
          event.status = Object.assign({}, data.status);
        }

        if (data.file) {
          event.output = data.file;
        }

        // only source is available, else add item if possible
        if (data.source) {
          event.file = data.source;
        } else if (data.item || data.id) {
          var item = data.item ? data.item : store.query('GET_ITEM', data.id);
          event.file = item ? createItemAPI(item) : null;
        }

        // map all items in a possible items array
        if (data.items) {
          event.items = data.items.map(createItemAPI);
        }

        // if this is a progress event add the progress amount
        if (/progress/.test(name)) {
          event.progress = data.progress;
        }

        return event;
      };
    };

    var eventRoutes = {
      DID_DESTROY: createEvent('destroy'),

      DID_INIT: createEvent('init'),

      DID_THROW_MAX_FILES: createEvent('warning'),

      DID_START_ITEM_LOAD: createEvent('addfilestart'),
      DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent('addfileprogress'),
      DID_LOAD_ITEM: createEvent('addfile'),

      DID_THROW_ITEM_INVALID: [createEvent('error'), createEvent('addfile')],

      DID_THROW_ITEM_LOAD_ERROR: [createEvent('error'), createEvent('addfile')],

      DID_THROW_ITEM_REMOVE_ERROR: [
        createEvent('error'),
        createEvent('removefile')
      ],

      DID_PREPARE_OUTPUT: createEvent('preparefile'),

      DID_START_ITEM_PROCESSING: createEvent('processfilestart'),
      DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent('processfileprogress'),
      DID_ABORT_ITEM_PROCESSING: createEvent('processfileabort'),
      DID_COMPLETE_ITEM_PROCESSING: createEvent('processfile'),
      DID_COMPLETE_ITEM_PROCESSING_ALL: createEvent('processfiles'),
      DID_REVERT_ITEM_PROCESSING: createEvent('processfilerevert'),

      DID_THROW_ITEM_PROCESSING_ERROR: [
        createEvent('error'),
        createEvent('processfile')
      ],

      DID_REMOVE_ITEM: createEvent('removefile'),

      DID_UPDATE_ITEMS: createEvent('updatefiles'),

      DID_ACTIVATE_ITEM: createEvent('activatefile')
    };

    var exposeEvent = function exposeEvent(event) {
      // create event object to be dispatched
      var detail = Object.assign({ pond: exports }, event);
      delete detail.type;
      view.element.dispatchEvent(
        new CustomEvent('FilePond:' + event.type, {
          // event info
          detail: detail,

          // event behaviour
          bubbles: true,
          cancelable: true,
          composed: true // triggers listeners outside of shadow root
        })
      );

      // event object to params used for `on()` event handlers and callbacks `oninit()`
      var params = [];

      // if is possible error event, make it the first param
      if (event.hasOwnProperty('error')) {
        params.push(event.error);
      }

      // file is always section
      if (event.hasOwnProperty('file')) {
        params.push(event.file);
      }

      // append other props
      var filtered = ['type', 'error', 'file'];
      Object.keys(event)
        .filter(function(key) {
          return !filtered.includes(key);
        })
        .forEach(function(key) {
          return params.push(event[key]);
        });

      // on(type, () => { })
      exports.fire.apply(exports, [event.type].concat(params));

      // oninit = () => {}
      var handler = store.query('GET_ON' + event.type.toUpperCase());
      if (handler) {
        handler.apply(void 0, params);
      }
    };

    var routeActionsToEvents = function routeActionsToEvents(actions) {
      if (!actions.length) {
        return;
      }

      actions.forEach(function(action) {
        if (!eventRoutes[action.type]) {
          return;
        }
        var routes = eventRoutes[action.type];
        (Array.isArray(routes) ? routes : [routes]).forEach(function(route) {
          setTimeout(function() {
            exposeEvent(route(action.data));
          }, 0);
        });
      });
    };

    //
    // PUBLIC API -------------------------------------------------------------------------------------
    //
    var setOptions = function setOptions(options) {
      return store.dispatch('SET_OPTIONS', { options: options });
    };

    var getFile = function getFile(query) {
      return store.query('GET_ACTIVE_ITEM', query);
    };

    var addFile = function addFile(source) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function(resolve, reject) {
        addFiles([{ source: source, options: options }], {
          index: options.index
        })
          .then(function(items) {
            return resolve(items && items[0]);
          })
          .catch(reject);
      });
    };

    var removeFile = function removeFile(query) {
      // request item removal
      store.dispatch('REMOVE_ITEM', { query: query });

      // see if item has been removed
      return store.query('GET_ACTIVE_ITEM', query) === null;
    };

    var addFiles = function addFiles() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      return new Promise(function(resolve, reject) {
        var sources = [];
        var options = {};

        // user passed a sources array
        if (isArray(args[0])) {
          sources.push.apply(sources, args[0]);
          Object.assign(options, args[1] || {});
        } else {
          // user passed sources as arguments, last one might be options object
          var lastArgument = args[args.length - 1];
          if (
            typeof lastArgument === 'object' &&
            !(lastArgument instanceof Blob)
          ) {
            Object.assign(options, args.pop());
          }

          // add rest to sources
          sources.push.apply(sources, args);
        }

        store.dispatch('ADD_ITEMS', {
          items: sources,
          index: options.index,
          interactionMethod: InteractionMethod.API,
          success: resolve,
          failure: reject
        });
      });
    };

    var getFiles = function getFiles() {
      return store.query('GET_ACTIVE_ITEMS');
    };

    var processFile = function processFile(query) {
      return new Promise(function(resolve, reject) {
        store.dispatch('REQUEST_ITEM_PROCESSING', {
          query: query,
          success: function success(item) {
            resolve(item);
          },
          failure: function failure(error) {
            reject(error);
          }
        });
      });
    };

    var processFiles = function processFiles() {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }
      var queries = Array.isArray(args[0]) ? args[0] : args;
      if (!queries.length) {
        var files = getFiles().filter(function(item) {
          return (
            !(
              item.status === ItemStatus.IDLE &&
              item.origin === FileOrigin.LOCAL
            ) &&
            item.status !== ItemStatus.PROCESSING &&
            item.status !== ItemStatus.PROCESSING_COMPLETE &&
            item.status !== ItemStatus.PROCESSING_REVERT_ERROR
          );
        });

        return Promise.all(files.map(processFile));
      }
      return Promise.all(queries.map(processFile));
    };

    var removeFiles = function removeFiles() {
      for (
        var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }
      var queries = Array.isArray(args[0]) ? args[0] : args;
      var files = getFiles();

      if (!queries.length) {
        return Promise.all(files.map(removeFile));
      }

      // when removing by index the indexes shift after each file removal so we need to convert indexes to ids
      var mappedQueries = queries
        .map(function(query) {
          return isNumber(query)
            ? files[query]
              ? files[query].id
              : null
            : query;
        })
        .filter(function(query) {
          return query;
        });

      return mappedQueries.map(removeFile);
    };

    var exports = Object.assign(
      {},

      on(),

      readWriteApi,

      createOptionAPI(store, defaultOptions),
      {
        /**
         * Override options defined in options object
         * @param options
         */
        setOptions: setOptions,

        /**
         * Load the given file
         * @param source - the source of the file (either a File, base64 data uri or url)
         * @param options - object, { index: 0 }
         */
        addFile: addFile,

        /**
         * Load the given files
         * @param sources - the sources of the files to load
         * @param options - object, { index: 0 }
         */
        addFiles: addFiles,

        /**
         * Returns the file objects matching the given query
         * @param query { string, number, null }
         */
        getFile: getFile,

        /**
         * Upload file with given name
         * @param query { string, number, null  }
         */
        processFile: processFile,

        /**
         * Removes a file by its name
         * @param query { string, number, null  }
         */
        removeFile: removeFile,

        /**
         * Returns all files (wrapped in public api)
         */
        getFiles: getFiles,

        /**
         * Starts uploading all files
         */
        processFiles: processFiles,

        /**
         * Clears all files from the files list
         */
        removeFiles: removeFiles,

        /**
         * Sort list of files
         */
        sort: function sort(compare) {
          return store.dispatch('SORT', { compare: compare });
        },

        /**
         * Browse the file system for a file
         */
        browse: function browse() {
          // needs to be trigger directly as user action needs to be traceable (is not traceable in requestAnimationFrame)
          var input = view.element.querySelector('input[type=file]');
          if (input) {
            input.click();
          }
        },

        /**
         * Destroys the app
         */
        destroy: function destroy() {
          // request destruction
          exports.fire('destroy', view.element);

          // stop active processes (file uploads, fetches, stuff like that)
          // loop over items and depending on states call abort for ongoing processes
          store.dispatch('ABORT_ALL');

          // destroy view
          view._destroy();

          // stop listening to resize
          window.removeEventListener('resize', resizeHandler);

          // stop listening to the visiblitychange event
          document.addEventListener('visibilitychange', visibilityHandler);

          // dispatch destroy
          store.dispatch('DID_DESTROY');
        },

        /**
         * Inserts the plugin before the target element
         */
        insertBefore: function insertBefore$1(element) {
          return insertBefore(view.element, element);
        },

        /**
         * Inserts the plugin after the target element
         */
        insertAfter: function insertAfter$1(element) {
          return insertAfter(view.element, element);
        },

        /**
         * Appends the plugin to the target element
         */
        appendTo: function appendTo(element) {
          return element.appendChild(view.element);
        },

        /**
         * Replaces an element with the app
         */
        replaceElement: function replaceElement(element) {
          // insert the app before the element
          insertBefore(view.element, element);

          // remove the original element
          element.parentNode.removeChild(element);

          // remember original element
          originalElement = element;
        },

        /**
         * Restores the original element
         */
        restoreElement: function restoreElement() {
          if (!originalElement) {
            return; // no element to restore
          }

          // restore original element
          insertAfter(originalElement, view.element);

          // remove our element
          view.element.parentNode.removeChild(view.element);

          // remove reference
          originalElement = null;
        },

        /**
         * Returns true if the app root is attached to given element
         * @param element
         */
        isAttachedTo: function isAttachedTo(element) {
          return view.element === element || originalElement === element;
        },

        /**
         * Returns the root element
         */
        element: {
          get: function get() {
            return view.element;
          }
        },

        /**
         * Returns the current pond status
         */
        status: {
          get: function get() {
            return store.query('GET_STATUS');
          }
        }
      }
    );

    // Done!
    store.dispatch('DID_INIT');

    // create actual api object
    return createObject(exports);
  };

  var createAppObject = function createAppObject() {
    var customOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // default options
    var defaultOptions = {};
    forin(getOptions(), function(key, value) {
      defaultOptions[key] = value[0];
    });

    // set app options
    var app = createApp(
      Object.assign(
        {},

        defaultOptions,

        customOptions
      )
    );

    // return the plugin instance
    return app;
  };

  var lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  var attributeNameToPropertyName = function attributeNameToPropertyName(
    attributeName
  ) {
    return toCamels(attributeName.replace(/^data-/, ''));
  };

  var mapObject = function mapObject(object, propertyMap) {
    // remove unwanted
    forin(propertyMap, function(selector, mapping) {
      forin(object, function(property, value) {
        // create regexp shortcut
        var selectorRegExp = new RegExp(selector);

        // tests if
        var matches = selectorRegExp.test(property);

        // no match, skip
        if (!matches) {
          return;
        }

        // if there's a mapping, the original property is always removed
        delete object[property];

        // should only remove, we done!
        if (mapping === false) {
          return;
        }

        // move value to new property
        if (isString(mapping)) {
          object[mapping] = value;
          return;
        }

        // move to group
        var group = mapping.group;
        if (isObject(mapping) && !object[group]) {
          object[group] = {};
        }

        object[group][
          lowerCaseFirstLetter(property.replace(selectorRegExp, ''))
        ] = value;
      });

      // do submapping
      if (mapping.mapping) {
        mapObject(object[mapping.group], mapping.mapping);
      }
    });
  };

  var getAttributesAsObject = function getAttributesAsObject(node) {
    var attributeMapping =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // turn attributes into object
    var attributes = [];
    forin(node.attributes, function(index) {
      attributes.push(node.attributes[index]);
    });

    var output = attributes
      .filter(function(attribute) {
        return attribute.name;
      })
      .reduce(function(obj, attribute) {
        var value = attr(node, attribute.name);

        obj[attributeNameToPropertyName(attribute.name)] =
          value === attribute.name ? true : value;
        return obj;
      }, {});

    // do mapping of object properties
    mapObject(output, attributeMapping);

    return output;
  };

  var createAppAtElement = function createAppAtElement(element) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // how attributes of the input element are mapped to the options for the plugin
    var attributeMapping = {
      // translate to other name
      '^class$': 'className',
      '^multiple$': 'allowMultiple',
      '^capture$': 'captureMethod',

      // group under single property
      '^server': {
        group: 'server',
        mapping: {
          '^process': {
            group: 'process'
          },

          '^revert': {
            group: 'revert'
          },

          '^fetch': {
            group: 'fetch'
          },

          '^restore': {
            group: 'restore'
          },

          '^load': {
            group: 'load'
          }
        }
      },

      // don't include in object
      '^type$': false,
      '^files$': false
    };

    // add additional option translators
    applyFilters('SET_ATTRIBUTE_TO_OPTION_MAP', attributeMapping);

    // create final options object by setting options object and then overriding options supplied on element
    var mergedOptions = Object.assign({}, options);

    var attributeOptions = getAttributesAsObject(
      element.nodeName === 'FIELDSET'
        ? element.querySelector('input[type=file]')
        : element,
      attributeMapping
    );

    // merge with options object
    Object.keys(attributeOptions).forEach(function(key) {
      if (isObject(attributeOptions[key])) {
        if (!isObject(mergedOptions[key])) {
          mergedOptions[key] = {};
        }
        Object.assign(mergedOptions[key], attributeOptions[key]);
      } else {
        mergedOptions[key] = attributeOptions[key];
      }
    });

    // if parent is a fieldset, get files from parent by selecting all input fields that are not file upload fields
    // these will then be automatically set to the initial files
    mergedOptions.files = (options.files || []).concat(
      Array.from(element.querySelectorAll('input:not([type=file])')).map(
        function(input) {
          return {
            source: input.value,
            options: {
              type: input.dataset.type
            }
          };
        }
      )
    );

    // build plugin
    var app = createAppObject(mergedOptions);

    // add already selected files
    if (element.files) {
      Array.from(element.files).forEach(function(file) {
        app.addFile(file);
      });
    }

    // replace the target element
    app.replaceElement(element);

    // expose
    return app;
  };

  // if an element is passed, we create the instance at that element, if not, we just create an up object
  var createApp$1 = function createApp() {
    return isNode(arguments.length <= 0 ? undefined : arguments[0])
      ? createAppAtElement.apply(void 0, arguments)
      : createAppObject.apply(void 0, arguments);
  };

  var PRIVATE_METHODS = ['fire', '_read', '_write'];

  var createAppAPI = function createAppAPI(app) {
    var api = {};

    copyObjectPropertiesToObject(app, api, PRIVATE_METHODS);

    return api;
  };

  /**
   * Replaces placeholders in given string with replacements
   * @param string - "Foo {bar}""
   * @param replacements - { "bar": 10 }
   */
  var replaceInString = function replaceInString(string, replacements) {
    return string.replace(/(?:{([a-zA-Z]+)})/g, function(match, group) {
      return replacements[group];
    });
  };

  var createWorker = function createWorker(fn) {
    var workerBlob = new Blob(['(', fn.toString(), ')()'], {
      type: 'application/javascript'
    });

    var workerURL = URL.createObjectURL(workerBlob);
    var worker = new Worker(workerURL);

    return {
      transfer: function transfer(message, cb) {},
      post: function post(message, cb, transferList) {
        var id = getUniqueId();

        worker.onmessage = function(e) {
          if (e.data.id === id) {
            cb(e.data.message);
          }
        };

        worker.postMessage(
          {
            id: id,
            message: message
          },

          transferList
        );
      },
      terminate: function terminate() {
        worker.terminate();
        URL.revokeObjectURL(workerURL);
      }
    };
  };

  var loadImage = function loadImage(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var renameFile = function renameFile(file, name) {
    var renamedFile = file.slice(0, file.size, file.type);
    renamedFile.lastModifiedDate = file.lastModifiedDate;
    renamedFile.name = name;
    return renamedFile;
  };

  var copyFile = function copyFile(file) {
    return renameFile(file, file.name);
  };

  // already registered plugins (can't register twice)
  var registeredPlugins = [];

  // pass utils to plugin
  var createAppPlugin = function createAppPlugin(plugin) {
    // already registered
    if (registeredPlugins.includes(plugin)) {
      return;
    }

    // remember this plugin
    registeredPlugins.push(plugin);

    // setup!
    var pluginOutline = plugin({
      addFilter: addFilter,
      utils: {
        Type: Type,
        forin: forin,
        isString: isString,
        isFile: isFile,
        toNaturalFileSize: toNaturalFileSize,
        replaceInString: replaceInString,
        getExtensionFromFilename: getExtensionFromFilename,
        getFilenameWithoutExtension: getFilenameWithoutExtension,
        guesstimateMimeType: guesstimateMimeType,
        getFileFromBlob: getFileFromBlob,
        getFilenameFromURL: getFilenameFromURL,
        createRoute: createRoute,
        createWorker: createWorker,
        createView: createView,
        createItemAPI: createItemAPI,
        loadImage: loadImage,
        copyFile: copyFile,
        renameFile: renameFile,
        createBlob: createBlob,
        applyFilterChain: applyFilterChain,
        text: text,
        getNumericAspectRatioFromString: getNumericAspectRatioFromString
      },

      views: {
        fileActionButton: fileActionButton
      }
    });

    // add plugin options to default options
    extendDefaultOptions(pluginOutline.options);
  };

  // feature detection used by supported() method
  var isOperaMini = function isOperaMini() {
    return (
      Object.prototype.toString.call(window.operamini) === '[object OperaMini]'
    );
  };
  var hasPromises = function hasPromises() {
    return 'Promise' in window;
  };
  var hasBlobSlice = function hasBlobSlice() {
    return 'slice' in Blob.prototype;
  };
  var hasCreateObjectURL = function hasCreateObjectURL() {
    return 'URL' in window && 'createObjectURL' in window.URL;
  };
  var hasVisibility = function hasVisibility() {
    return 'visibilityState' in document;
  };
  var hasTiming = function hasTiming() {
    return 'performance' in window;
  }; // iOS 8.x
  var isBrowser = function isBrowser() {
    return (
      typeof window !== 'undefined' && typeof window.document !== 'undefined'
    );
  };

  var supported = (function() {
    // Runs immidiately and then remembers result for subsequent calls
    var isSupported =
      // Has to be a browser
      isBrowser() &&
      // Can't run on Opera Mini due to lack of everything
      !isOperaMini() &&
      // Require these APIs to feature detect a modern browser
      hasVisibility() &&
      hasPromises() &&
      hasBlobSlice() &&
      hasCreateObjectURL() &&
      hasTiming();

    return function() {
      return isSupported;
    };
  })();

  /**
   * Plugin internal state (over all instances)
   */
  var state = {
    // active app instances, used to redraw the apps and to find the later
    apps: []
  };

  // plugin name
  var name = 'filepond';

  /**
   * Public Plugin methods
   */
  var fn = function fn() {};
  exports.Status = {};
  exports.FileStatus = {};
  exports.FileOrigin = {};
  exports.OptionTypes = {};
  exports.create = fn;
  exports.destroy = fn;
  exports.parse = fn;
  exports.find = fn;
  exports.registerPlugin = fn;
  exports.getOptions = fn;
  exports.setOptions = fn;

  // if not supported, no API
  if (supported()) {
    // start painter and fire load event
    createPainter(
      function() {
        state.apps.forEach(function(app) {
          return app._read();
        });
      },
      function(ts) {
        state.apps.forEach(function(app) {
          return app._write(ts);
        });
      }
    );

    // fire loaded event so we know when FilePond is available
    var dispatch = function dispatch() {
      // let others know we have area ready
      document.dispatchEvent(
        new CustomEvent('FilePond:loaded', {
          detail: {
            supported: supported,
            create: exports.create,
            destroy: exports.destroy,
            parse: exports.parse,
            find: exports.find,
            registerPlugin: exports.registerPlugin,
            setOptions: exports.setOptions
          }
        })
      );

      // clean up event
      document.removeEventListener('DOMContentLoaded', dispatch);
    };

    if (document.readyState !== 'loading') {
      // move to back of execution queue, FilePond should have been exported by then
      setTimeout(function() {
        return dispatch();
      }, 0);
    } else {
      document.addEventListener('DOMContentLoaded', dispatch);
    }

    // updates the OptionTypes object based on the current options
    var updateOptionTypes = function updateOptionTypes() {
      return forin(getOptions(), function(key, value) {
        exports.OptionTypes[key] = value[1];
      });
    };

    exports.Status = Object.assign({}, Status);
    exports.FileOrigin = Object.assign({}, FileOrigin);
    exports.FileStatus = Object.assign({}, ItemStatus);

    exports.OptionTypes = {};
    updateOptionTypes();

    // create method, creates apps and adds them to the app array
    exports.create = function create() {
      var app = createApp$1.apply(void 0, arguments);
      app.on('destroy', exports.destroy);
      state.apps.push(app);
      return createAppAPI(app);
    };

    // destroys apps and removes them from the app array
    exports.destroy = function destroy(hook) {
      // returns true if the app was destroyed successfully
      var indexToRemove = state.apps.findIndex(function(app) {
        return app.isAttachedTo(hook);
      });
      if (indexToRemove >= 0) {
        // remove from apps
        var app = state.apps.splice(indexToRemove, 1)[0];

        // restore original dom element
        app.restoreElement();

        return true;
      }

      return false;
    };

    // parses the given context for plugins (does not include the context element itself)
    exports.parse = function parse(context) {
      // get all possible hooks
      var matchedHooks = Array.from(context.querySelectorAll('.' + name));

      // filter out already active hooks
      var newHooks = matchedHooks.filter(function(newHook) {
        return !state.apps.find(function(app) {
          return app.isAttachedTo(newHook);
        });
      });

      // create new instance for each hook
      return newHooks.map(function(hook) {
        return exports.create(hook);
      });
    };

    // returns an app based on the given element hook
    exports.find = function find(hook) {
      var app = state.apps.find(function(app) {
        return app.isAttachedTo(hook);
      });
      if (!app) {
        return null;
      }
      return createAppAPI(app);
    };

    // adds a plugin extension
    exports.registerPlugin = function registerPlugin() {
      for (
        var _len = arguments.length, plugins = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        plugins[_key] = arguments[_key];
      }

      // register plugins
      plugins.forEach(createAppPlugin);

      // update OptionTypes, each plugin might have extended the default options
      updateOptionTypes();
    };

    exports.getOptions = function getOptions$1() {
      var opts = {};
      forin(getOptions(), function(key, value) {
        opts[key] = value[0];
      });
      return opts;
    };

    exports.setOptions = function setOptions$1(opts) {
      if (isObject(opts)) {
        // update existing plugins
        state.apps.forEach(function(app) {
          app.setOptions(opts);
        });

        // override defaults
        setOptions(opts);
      }

      // return new options
      return exports.getOptions();
    };
  }

  exports.supported = supported;

  Object.defineProperty(exports, '__esModule', { value: true });
});


/***/ }),

/***/ "dcom":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginImageTransform 3.3.3
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  // test if file is of type image
  var isImage = function isImage(file) {
    return /^image/.test(file.type);
  };

  var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
    return name.substr(0, name.lastIndexOf('.')) || name;
  };

  // only handles image/jpg, image/jpeg, image/png, and image/svg+xml for now
  var ExtensionMap = {
    jpeg: 'jpg',
    'svg+xml': 'svg'
  };

  var renameFileToMatchMimeType = function renameFileToMatchMimeType(
    filename,
    mimeType
  ) {
    var name = getFilenameWithoutExtension(filename);
    var type = mimeType.split('/')[1];
    var extension = ExtensionMap[type] || type;
    return ''.concat(name, '.').concat(extension);
  };

  // returns all the valid output formats we can encode towards
  var getValidOutputMimeType = function getValidOutputMimeType(type) {
    return /jpeg|png|svg\+xml/.test(type) ? type : 'image/jpeg';
  };

  // test if file is of type image
  var isImage$1 = function isImage(file) {
    return /^image/.test(file.type);
  };

  var MATRICES = {
    1: function _() {
      return [1, 0, 0, 1, 0, 0];
    },
    2: function _(width) {
      return [-1, 0, 0, 1, width, 0];
    },
    3: function _(width, height) {
      return [-1, 0, 0, -1, width, height];
    },
    4: function _(width, height) {
      return [1, 0, 0, -1, 0, height];
    },
    5: function _() {
      return [0, 1, 1, 0, 0, 0];
    },
    6: function _(width, height) {
      return [0, 1, -1, 0, height, 0];
    },
    7: function _(width, height) {
      return [0, -1, -1, 0, height, width];
    },
    8: function _(width) {
      return [0, -1, 1, 0, 0, width];
    }
  };

  var getImageOrientationMatrix = function getImageOrientationMatrix(
    width,
    height,
    orientation
  ) {
    if (orientation === -1) {
      orientation = 1;
    }
    return MATRICES[orientation](width, height);
  };

  var createVector = function createVector(x, y) {
    return { x: x, y: y };
  };

  var vectorDot = function vectorDot(a, b) {
    return a.x * b.x + a.y * b.y;
  };

  var vectorSubtract = function vectorSubtract(a, b) {
    return createVector(a.x - b.x, a.y - b.y);
  };

  var vectorDistanceSquared = function vectorDistanceSquared(a, b) {
    return vectorDot(vectorSubtract(a, b), vectorSubtract(a, b));
  };

  var vectorDistance = function vectorDistance(a, b) {
    return Math.sqrt(vectorDistanceSquared(a, b));
  };

  var getOffsetPointOnEdge = function getOffsetPointOnEdge(length, rotation) {
    var a = length;

    var A = 1.5707963267948966;
    var B = rotation;
    var C = 1.5707963267948966 - rotation;

    var sinA = Math.sin(A);
    var sinB = Math.sin(B);
    var sinC = Math.sin(C);
    var cosC = Math.cos(C);
    var ratio = a / sinA;
    var b = ratio * sinB;
    var c = ratio * sinC;

    return createVector(cosC * b, cosC * c);
  };

  var getRotatedRectSize = function getRotatedRectSize(rect, rotation) {
    var w = rect.width;
    var h = rect.height;

    var hor = getOffsetPointOnEdge(w, rotation);
    var ver = getOffsetPointOnEdge(h, rotation);

    var tl = createVector(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));

    var tr = createVector(
      rect.x + rect.width + Math.abs(ver.y),
      rect.y + Math.abs(ver.x)
    );

    var bl = createVector(
      rect.x - Math.abs(ver.y),
      rect.y + rect.height - Math.abs(ver.x)
    );

    return {
      width: vectorDistance(tl, tr),
      height: vectorDistance(tl, bl)
    };
  };

  var getImageRectZoomFactor = function getImageRectZoomFactor(
    imageRect,
    cropRect
  ) {
    var rotation =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var center =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : { x: 0.5, y: 0.5 };

    // calculate available space round image center position
    var cx = center.x > 0.5 ? 1 - center.x : center.x;
    var cy = center.y > 0.5 ? 1 - center.y : center.y;
    var imageWidth = cx * 2 * imageRect.width;
    var imageHeight = cy * 2 * imageRect.height;

    // calculate rotated crop rectangle size
    var rotatedCropSize = getRotatedRectSize(cropRect, rotation);

    // calculate scalar required to fit image
    return Math.max(
      rotatedCropSize.width / imageWidth,
      rotatedCropSize.height / imageHeight
    );
  };

  var getCenteredCropRect = function getCenteredCropRect(
    container,
    aspectRatio
  ) {
    var width = container.width;
    var height = width * aspectRatio;
    if (height > container.height) {
      height = container.height;
      width = height / aspectRatio;
    }
    var x = (container.width - width) * 0.5;
    var y = (container.height - height) * 0.5;

    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  };

  var calculateCanvasSize = function calculateCanvasSize(
    image,
    canvasAspectRatio
  ) {
    var zoom =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var imageAspectRatio = image.height / image.width;

    // determine actual pixels on x and y axis
    var canvasWidth = 1;
    var canvasHeight = canvasAspectRatio;
    var imgWidth = 1;
    var imgHeight = imageAspectRatio;
    if (imgHeight > canvasHeight) {
      imgHeight = canvasHeight;
      imgWidth = imgHeight / imageAspectRatio;
    }

    var scalar = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    var width = image.width / (zoom * scalar * imgWidth);
    var height = width * canvasAspectRatio;

    return {
      width: width,
      height: height
    };
  };

  var isFlipped = function isFlipped(flip) {
    return flip && (flip.horizontal || flip.vertical);
  };

  var getBitmap = function getBitmap(image, orientation, flip) {
    if (!orientation && !isFlipped(flip)) {
      image.width = image.naturalWidth;
      image.height = image.naturalHeight;
      return image;
    }

    var canvas = document.createElement('canvas');
    var width = image.naturalWidth;
    var height = image.naturalHeight;

    // if is rotated incorrectly swap width and height
    var swapped = orientation >= 5 && orientation <= 8;
    if (swapped) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }

    // draw the image but first fix orientation and set correct flip
    var ctx = canvas.getContext('2d');

    // get base transformation matrix
    if (orientation) {
      ctx.transform.apply(
        ctx,
        getImageOrientationMatrix(width, height, orientation)
      );
    }

    if (isFlipped(flip)) {
      // flip horizontal
      // [-1, 0, 0, 1, width, 0]
      var matrix = [1, 0, 0, 1, 0, 0];
      if ((!swapped && flip.horizontal) || swapped & flip.vertical) {
        matrix[0] = -1;
        matrix[4] = width;
      }

      // flip vertical
      // [1, 0, 0, -1, 0, height]
      if ((!swapped && flip.vertical) || (swapped && flip.horizontal)) {
        matrix[3] = -1;
        matrix[5] = height;
      }

      ctx.transform.apply(ctx, matrix);
    }

    ctx.drawImage(image, 0, 0, width, height);

    return canvas;
  };

  var imageToImageData = function imageToImageData(imageElement, orientation) {
    var crop =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var zoom = crop.zoom || 1;

    // fixes possible image orientation problems by drawing the image on the correct canvas
    var bitmap = getBitmap(imageElement, orientation, crop.flip);
    var imageSize = {
      width: bitmap.width,
      height: bitmap.height
    };

    var canvas = document.createElement('canvas');
    var aspectRatio = crop.aspectRatio || imageSize.height / imageSize.width;

    var canvasSize = calculateCanvasSize(imageSize, aspectRatio, zoom);

    var canvasCenter = {
      x: canvasSize.width * 0.5,
      y: canvasSize.height * 0.5
    };

    var stage = {
      x: 0,
      y: 0,
      width: canvasSize.width,
      height: canvasSize.height,
      center: canvasCenter
    };

    var stageZoomFactor = getImageRectZoomFactor(
      imageSize,
      getCenteredCropRect(stage, aspectRatio),
      crop.rotation,
      crop.center
    );

    var scale = zoom * stageZoomFactor;

    // start drawing
    canvas.width = Math.round(canvasSize.width / scale);
    canvas.height = Math.round(canvasSize.height / scale);

    canvasCenter.x /= scale;
    canvasCenter.y /= scale;

    var imageOffset = {
      x: canvasCenter.x - imageSize.width * (crop.center ? crop.center.x : 0.5),
      y: canvasCenter.y - imageSize.height * (crop.center ? crop.center.y : 0.5)
    };

    var ctx = canvas.getContext('2d');

    // move to draw offset
    ctx.translate(canvasCenter.x, canvasCenter.y);
    ctx.rotate(crop.rotation || 0);

    // draw the image
    ctx.drawImage(
      bitmap,
      imageOffset.x - canvasCenter.x,
      imageOffset.y - canvasCenter.y,
      imageSize.width,
      imageSize.height
    );

    // get data from canvas
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  };

  /**
   * Polyfill toBlob for Edge
   */
  var IS_BROWSER = (function() {
    return (
      typeof window !== 'undefined' && typeof window.document !== 'undefined'
    );
  })();
  if (IS_BROWSER) {
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function value(callback, type, quality) {
          var dataURL = this.toDataURL(type, quality).split(',')[1];
          setTimeout(function() {
            var binStr = atob(dataURL);
            var len = binStr.length;
            var arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
              arr[i] = binStr.charCodeAt(i);
            }
            callback(new Blob([arr], { type: type || 'image/png' }));
          });
        }
      });
    }
  }

  var imageDataToBlob = function imageDataToBlob(imageData, options) {
    var beforeCreateBlob =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return new Promise(function(resolve) {
      var image = document.createElement('canvas');
      image.width = imageData.width;
      image.height = imageData.height;
      var ctx = image.getContext('2d');
      ctx.putImageData(imageData, 0, 0);
      var promisedImage = beforeCreateBlob ? beforeCreateBlob(image) : image;
      Promise.resolve(promisedImage).then(function(image) {
        image.toBlob(resolve, options.type, options.quality);
      });
    });
  };

  var cropSVG = function cropSVG(blob) {
    var crop =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            center: { x: 0.5, y: 0.5 },
            zoom: 1,
            rotation: 0,
            flip: { horizontal: false, vertical: false, aspectRatio: null }
          };
    return new Promise(function(resolve) {
      // load blob contents and wrap in crop svg
      var fr = new FileReader();
      fr.onloadend = function() {
        // get svg text
        var text = fr.result;

        // create element with svg and get size
        var original = document.createElement('div');
        original.style.cssText =
          'position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;';
        original.innerHTML = text;
        var originalNode = original.querySelector('svg');
        document.body.appendChild(original);

        // request bounding box dimensions
        var bBox = originalNode.getBBox();
        original.parentNode.removeChild(original);

        // get title
        var titleNode = original.querySelector('title');

        // calculate new heights and widths
        var viewBoxAttribute = originalNode.getAttribute('viewBox') || '';
        var widthAttribute = originalNode.getAttribute('width') || '';
        var heightAttribute = originalNode.getAttribute('height') || '';
        var width = parseFloat(widthAttribute) || null;
        var height = parseFloat(heightAttribute) || null;
        var widthUnits = (widthAttribute.match(/[a-z]+/) || [])[0] || '';
        var heightUnits = (heightAttribute.match(/[a-z]+/) || [])[0] || '';

        // create new size
        var viewBoxList = viewBoxAttribute.split(' ').map(parseFloat);
        var viewBox = viewBoxList.length
          ? {
              x: viewBoxList[0],
              y: viewBoxList[1],
              width: viewBoxList[2],
              height: viewBoxList[3]
            }
          : bBox;

        var imageWidth = width != null ? width : viewBox.width;
        var imageHeight = height != null ? height : viewBox.height;

        originalNode.style.overflow = 'visible';
        originalNode.setAttribute('width', imageWidth);
        originalNode.setAttribute('height', imageHeight);

        var aspectRatio = crop.aspectRatio || imageHeight / imageWidth;

        var canvasWidth = imageWidth;
        var canvasHeight = canvasWidth * aspectRatio;

        var canvasZoomFactor = getImageRectZoomFactor(
          {
            width: imageWidth,
            height: imageHeight
          },

          getCenteredCropRect(
            {
              width: canvasWidth,
              height: canvasHeight
            },

            aspectRatio
          ),

          crop.rotation,
          crop.center
        );

        var scale = crop.zoom * canvasZoomFactor;

        var rotation = crop.rotation * (180 / Math.PI);

        var canvasCenter = {
          x: canvasWidth * 0.5,
          y: canvasHeight * 0.5
        };

        var imageOffset = {
          x: canvasCenter.x - imageWidth * crop.center.x,
          y: canvasCenter.y - imageHeight * crop.center.y
        };

        var cropTransforms = [
          // rotate
          'rotate('
            .concat(rotation, ' ')
            .concat(canvasCenter.x, ' ')
            .concat(canvasCenter.y, ')'),

          // scale
          'translate('.concat(canvasCenter.x, ' ').concat(canvasCenter.y, ')'),
          'scale('.concat(scale, ')'),
          'translate('
            .concat(-canvasCenter.x, ' ')
            .concat(-canvasCenter.y, ')'),

          // offset
          'translate('.concat(imageOffset.x, ' ').concat(imageOffset.y, ')')
        ];

        var flipTransforms = [
          'scale('
            .concat(crop.flip.horizontal ? -1 : 1, ' ')
            .concat(crop.flip.vertical ? -1 : 1, ')'),
          'translate('
            .concat(crop.flip.horizontal ? -imageWidth : 0, ' ')
            .concat(crop.flip.vertical ? -imageHeight : 0, ')')
        ];

        // crop
        var transformed = '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="'
          .concat(canvasWidth)
          .concat(widthUnits, '" height="')
          .concat(canvasHeight)
          .concat(heightUnits, '" \nviewBox="0 0 ')
          .concat(canvasWidth, ' ')
          .concat(
            canvasHeight,
            '" \npreserveAspectRatio="xMinYMin"\nxmlns="http://www.w3.org/2000/svg">\n<!-- Generator: PQINA - https://pqina.nl/ -->\n<title>'
          )
          .concat(
            titleNode ? titleNode.textContent : '',
            '</title>\n<desc>Cropped with FilePond.</desc>\n<g transform="'
          )
          .concat(cropTransforms.join(' '), '">\n<g transform="')
          .concat(flipTransforms.join(' '), '">\n')
          .concat(originalNode.outerHTML, '\n</g>\n</g>\n</svg>');

        // create new svg file
        resolve(transformed);
      };

      fr.readAsText(blob);
    });
  };

  var objectToImageData = function objectToImageData(obj) {
    var imageData;
    try {
      imageData = new ImageData(obj.width, obj.height);
    } catch (e) {
      // IE + Old EDGE (tested on 12)
      var canvas = document.createElement('canvas');
      imageData = canvas
        .getContext('2d')
        .createImageData(obj.width, obj.height);
    }
    imageData.data.set(obj.data);
    return imageData;
  };

  /* javascript-obfuscator:disable */
  var TransformWorker = function TransformWorker() {
    // maps transform types to transform functions
    var TRANSFORMS = { resize: resize, filter: filter };

    // applies all image transforms to the image data array
    var applyTransforms = function applyTransforms(transforms, imageData) {
      transforms.forEach(function(transform) {
        imageData = TRANSFORMS[transform.type](imageData, transform.data);
      });
      return imageData;
    };

    // transform image hub
    var transform = function transform(data, cb) {
      var transforms = data.transforms;

      // if has filter and has resize, move filter to resize operation
      var filterTransform = null;
      transforms.forEach(function(transform) {
        if (transform.type === 'filter') {
          filterTransform = transform;
        }
      });
      if (filterTransform) {
        // find resize
        var resizeTransform = null;
        transforms.forEach(function(transform) {
          if (transform.type === 'resize') {
            resizeTransform = transform;
          }
        });

        if (resizeTransform) {
          // update resize operation
          resizeTransform.data.matrix = filterTransform.data;

          // remove filter
          transforms = transforms.filter(function(transform) {
            return transform.type !== 'filter';
          });
        }
      }

      cb(applyTransforms(transforms, data.imageData));
    };

    // eslint-disable-next-line no-restricted-globals
    self.onmessage = function(e) {
      transform(e.data.message, function(response) {
        // eslint-disable-next-line no-restricted-globals
        self.postMessage({ id: e.data.id, message: response }, [
          response.data.buffer
        ]);
      });
    };

    function applyFilterMatrix(index, data, matrix) {
      var i = 0,
        row = 0,
        c = 0.0,
        r = data[index] / 255,
        g = data[index + 1] / 255,
        b = data[index + 2] / 255,
        a = data[index + 3] / 255;
      for (; i < 4; i++) {
        row = 5 * i;
        c =
          (r * matrix[row] +
            g * matrix[row + 1] +
            b * matrix[row + 2] +
            a * matrix[row + 3] +
            matrix[row + 4]) *
          255;
        data[index + i] = Math.max(0, Math.min(c, 255));
      }
    }

    var identityMatrix = JSON.stringify([
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ]);
    function isIdentityMatrix(filter) {
      return JSON.stringify(filter || []) === identityMatrix;
    }

    function filter(imageData, matrix) {
      if (!matrix || isIdentityMatrix(matrix)) return imageData;

      var data = imageData.data;
      var l = data.length;

      var m11 = matrix[0];
      var m12 = matrix[1];
      var m13 = matrix[2];
      var m14 = matrix[3];
      var m15 = matrix[4];

      var m21 = matrix[5];
      var m22 = matrix[6];
      var m23 = matrix[7];
      var m24 = matrix[8];
      var m25 = matrix[9];

      var m31 = matrix[10];
      var m32 = matrix[11];
      var m33 = matrix[12];
      var m34 = matrix[13];
      var m35 = matrix[14];

      var m41 = matrix[15];
      var m42 = matrix[16];
      var m43 = matrix[17];
      var m44 = matrix[18];
      var m45 = matrix[19];

      var index = 0,
        r = 0.0,
        g = 0.0,
        b = 0.0,
        a = 0.0;

      for (; index < l; index += 4) {
        r = data[index] / 255;
        g = data[index + 1] / 255;
        b = data[index + 2] / 255;
        a = data[index + 3] / 255;
        data[index] = Math.max(
          0,
          Math.min((r * m11 + g * m12 + b * m13 + a * m14 + m15) * 255, 255)
        );
        data[index + 1] = Math.max(
          0,
          Math.min((r * m21 + g * m22 + b * m23 + a * m24 + m25) * 255, 255)
        );
        data[index + 2] = Math.max(
          0,
          Math.min((r * m31 + g * m32 + b * m33 + a * m34 + m35) * 255, 255)
        );
        data[index + 3] = Math.max(
          0,
          Math.min((r * m41 + g * m42 + b * m43 + a * m44 + m45) * 255, 255)
        );
      }

      return imageData;
    }

    function resize(imageData, data) {
      var _data$mode = data.mode,
        mode = _data$mode === void 0 ? 'contain' : _data$mode,
        _data$upscale = data.upscale,
        upscale = _data$upscale === void 0 ? false : _data$upscale,
        width = data.width,
        height = data.height,
        matrix = data.matrix;

      // test if is identity matrix
      matrix = !matrix || isIdentityMatrix(matrix) ? null : matrix;

      // need at least a width or a height
      // also 0 is not a valid width or height
      if (!width && !height) {
        return filter(imageData, matrix);
      }

      // make sure all bounds are set
      if (width === null) {
        width = height;
      } else if (height === null) {
        height = width;
      }

      if (mode !== 'force') {
        var scalarWidth = width / imageData.width;
        var scalarHeight = height / imageData.height;
        var scalar = 1;

        if (mode === 'cover') {
          scalar = Math.max(scalarWidth, scalarHeight);
        } else if (mode === 'contain') {
          scalar = Math.min(scalarWidth, scalarHeight);
        }

        // if image is too small, exit here with original image
        if (scalar > 1 && upscale === false) {
          return filter(imageData, matrix);
        }

        width = imageData.width * scalar;
        height = imageData.height * scalar;
      }

      var originWidth = imageData.width;
      var originHeight = imageData.height;
      var targetWidth = Math.round(width);
      var targetHeight = Math.round(height);
      var inputData = imageData.data;
      var outputData = new Uint8ClampedArray(targetWidth * targetHeight * 4);
      var ratioWidth = originWidth / targetWidth;
      var ratioHeight = originHeight / targetHeight;
      var ratioWidthHalf = Math.ceil(ratioWidth * 0.5);
      var ratioHeightHalf = Math.ceil(ratioHeight * 0.5);

      for (var j = 0; j < targetHeight; j++) {
        for (var i = 0; i < targetWidth; i++) {
          var x2 = (i + j * targetWidth) * 4;
          var weight = 0;
          var weights = 0;
          var weightsAlpha = 0;
          var r = 0;
          var g = 0;
          var b = 0;
          var a = 0;
          var centerY = (j + 0.5) * ratioHeight;

          for (
            var yy = Math.floor(j * ratioHeight);
            yy < (j + 1) * ratioHeight;
            yy++
          ) {
            var dy = Math.abs(centerY - (yy + 0.5)) / ratioHeightHalf;
            var centerX = (i + 0.5) * ratioWidth;
            var w0 = dy * dy;

            for (
              var xx = Math.floor(i * ratioWidth);
              xx < (i + 1) * ratioWidth;
              xx++
            ) {
              var dx = Math.abs(centerX - (xx + 0.5)) / ratioWidthHalf;
              var w = Math.sqrt(w0 + dx * dx);

              if (w >= -1 && w <= 1) {
                weight = 2 * w * w * w - 3 * w * w + 1;

                if (weight > 0) {
                  dx = 4 * (xx + yy * originWidth);

                  var ref = inputData[dx + 3];
                  a += weight * ref;
                  weightsAlpha += weight;

                  if (ref < 255) {
                    weight = (weight * ref) / 250;
                  }

                  r += weight * inputData[dx];
                  g += weight * inputData[dx + 1];
                  b += weight * inputData[dx + 2];
                  weights += weight;
                }
              }
            }
          }

          outputData[x2] = r / weights;
          outputData[x2 + 1] = g / weights;
          outputData[x2 + 2] = b / weights;
          outputData[x2 + 3] = a / weightsAlpha;

          matrix && applyFilterMatrix(x2, outputData, matrix);
        }
      }

      return {
        data: outputData,
        width: targetWidth,
        height: targetHeight
      };
    }
  };
  /* javascript-obfuscator:enable */

  var correctOrientation = function correctOrientation(view, offset, length) {
    // Missing 0x45786966 Marker? No Exif Header, stop here
    if (view.getUint32(offset + 4, false) !== 0x45786966) return;

    // next byte!
    offset += 4;

    // First 2bytes defines byte align of TIFF data.
    // If it is 0x4949="I I", it means "Intel" type byte align
    var intelByteAligned = view.getUint16((offset += 6), false) === 0x4949;
    offset += view.getUint32(offset + 4, intelByteAligned);

    var tags = view.getUint16(offset, intelByteAligned);
    offset += 2;

    // find Orientation tag
    for (var i = 0; i < tags; i++) {
      if (view.getUint16(offset + i * 12, intelByteAligned) === 0x0112) {
        view.setUint16(offset + i * 12 + 8, 1, intelByteAligned);
        return true;
      }
    }
    return false;
  };

  var readData = function readData(data) {
    var view = new DataView(data);

    // Every JPEG file starts from binary value '0xFFD8'
    // If it's not present, exit here
    if (view.getUint16(0) !== 0xffd8) return null;

    var offset = 2; // Start at 2 as we skipped two bytes (FFD8)
    var marker;
    var markerLength;
    var orientationCorrected = false;

    while (offset < view.byteLength) {
      marker = view.getUint16(offset, false);
      markerLength = view.getUint16(offset + 2, false) + 2;

      // Test if is APP and COM markers
      var isData = (marker >= 0xffe0 && marker <= 0xffef) || marker === 0xfffe;
      if (!isData) {
        break;
      }

      if (!orientationCorrected) {
        orientationCorrected = correctOrientation(view, offset, markerLength);
      }

      if (offset + markerLength > view.byteLength) {
        break;
      }

      offset += markerLength;
    }
    return data.slice(0, offset);
  };

  var getImageHead = function getImageHead(file) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.onload = function() {
        return resolve(readData(reader.result) || null);
      };
      reader.readAsArrayBuffer(file.slice(0, 256 * 1024));
    });
  };

  var getBlobBuilder = function getBlobBuilder() {
    return (window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder);
  };

  var createBlob = function createBlob(arrayBuffer, mimeType) {
    var BB = getBlobBuilder();

    if (BB) {
      var bb = new BB();
      bb.append(arrayBuffer);
      return bb.getBlob(mimeType);
    }

    return new Blob([arrayBuffer], {
      type: mimeType
    });
  };

  var getUniqueId = function getUniqueId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  var createWorker = function createWorker(fn) {
    var workerBlob = new Blob(['(', fn.toString(), ')()'], {
      type: 'application/javascript'
    });

    var workerURL = URL.createObjectURL(workerBlob);
    var worker = new Worker(workerURL);

    return {
      transfer: function transfer(message, cb) {},
      post: function post(message, cb, transferList) {
        var id = getUniqueId();

        worker.onmessage = function(e) {
          if (e.data.id === id) {
            cb(e.data.message);
          }
        };

        worker.postMessage(
          {
            id: id,
            message: message
          },

          transferList
        );
      },
      terminate: function terminate() {
        worker.terminate();
        URL.revokeObjectURL(workerURL);
      }
    };
  };

  var loadImage = function loadImage(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var transformImage = function transformImage(file, instructions) {
    var options =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return new Promise(function(resolve, reject) {
      // if the file is not an image we do not have any business transforming it
      if (!file || !isImage$1(file)) return reject();

      // get separate options for easier use
      var stripImageHead = options.stripImageHead,
        beforeCreateBlob = options.beforeCreateBlob,
        afterCreateBlob = options.afterCreateBlob;

      // get crop
      var crop = instructions.crop,
        size = instructions.size,
        filter = instructions.filter,
        output = instructions.output;

      // get exif orientation
      var orientation =
        instructions.image && instructions.image.orientation
          ? Math.max(1, Math.min(8, instructions.image.orientation))
          : null;

      // compression quality 0 => 100
      var qualityAsPercentage = output && output.quality;
      var quality =
        qualityAsPercentage === null ? null : qualityAsPercentage / 100;

      // output format
      var type = (output && output.type) || null;

      // get transforms
      var transforms = [];

      // add resize transforms if set
      if (
        size &&
        (typeof size.width === 'number' || typeof size.height === 'number')
      ) {
        transforms.push({ type: 'resize', data: size });
      }

      // add filters
      if (filter && filter.length === 20) {
        transforms.push({ type: 'filter', data: filter });
      }

      // resolves with supplied blob
      var resolveWithBlob = function resolveWithBlob(blob) {
        var promisedBlob = afterCreateBlob ? afterCreateBlob(blob) : blob;
        Promise.resolve(promisedBlob).then(resolve);
      };

      // done
      var toBlob = function toBlob(imageData, options) {
        return imageDataToBlob(imageData, options, beforeCreateBlob)
          .then(function(blob) {
            // remove image head (default)
            if (stripImageHead) return resolveWithBlob(blob);

            // try to copy image head
            getImageHead(file).then(function(imageHead) {
              // re-inject image head EXIF info in case of JPEG, as the image head is removed by canvas export
              if (imageHead !== null) {
                blob = new Blob([imageHead, blob.slice(20)], {
                  type: blob.type
                });
              }

              // done!
              resolveWithBlob(blob);
            });
          })
          .catch(reject);
      };

      // if this is an svg and we want it to stay an svg
      if (/svg/.test(file.type) && type === null) {
        return cropSVG(file, crop).then(function(text) {
          resolve(createBlob(text, 'image/svg+xml'));
        });
      }

      // get file url
      var url = URL.createObjectURL(file);

      // turn the file into an image
      loadImage(url).then(function(image) {
        // url is no longer needed
        URL.revokeObjectURL(url);

        // draw to canvas and start transform chain
        var imageData = imageToImageData(image, orientation, crop);

        // determine the format of the blob that we will output
        var outputFormat = {
          quality: quality,
          type: type || file.type
        };

        // no transforms necessary, we done!
        if (!transforms.length) {
          return toBlob(imageData, outputFormat);
        }

        // send to the transform worker to transform the blob on a separate thread
        var worker = createWorker(TransformWorker);
        worker.post(
          {
            transforms: transforms,
            imageData: imageData
          },

          function(response) {
            // finish up
            toBlob(objectToImageData(response), outputFormat);

            // stop worker
            worker.terminate();
          },
          [imageData.data.buffer]
        );
      });
    });
  };

  /**
   * Polyfill Edge and IE when in Browser
   */
  if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function value(cb, type, quality) {
          var canvas = this;
          setTimeout(function() {
            var dataURL = canvas.toDataURL(type, quality).split(',')[1];
            var binStr = atob(dataURL);
            var index = binStr.length;
            var data = new Uint8Array(index);
            while (index--) {
              data[index] = binStr.charCodeAt(index);
            }
            cb(new Blob([data], { type: type || 'image/png' }));
          });
        }
      });
    }
  }

  /**
   * Image Transform Plugin
   */
  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    var Type = utils.Type,
      forin = utils.forin,
      getFileFromBlob = utils.getFileFromBlob,
      isFile = utils.isFile;

    /**
     * Helper functions
     */

    // valid transforms (in correct order)
    var TRANSFORM_LIST = ['crop', 'resize', 'filter', 'output'];

    var createVariantCreator = function createVariantCreator(updateMetadata) {
      return function(transform, file, metadata) {
        return transform(
          file,
          updateMetadata ? updateMetadata(metadata) : metadata
        );
      };
    };

    var isDefaultCrop = function isDefaultCrop(crop) {
      return (
        crop.aspectRatio === null &&
        crop.rotation === 0 &&
        crop.zoom === 1 &&
        crop.center &&
        crop.center.x === 0.5 &&
        crop.center.y === 0.5 &&
        crop.flip &&
        crop.flip.horizontal === false &&
        crop.flip.vertical === false
      );
    };

    /**
     * Filters
     */
    addFilter('SHOULD_PREPARE_OUTPUT', function(shouldPrepareOutput, _ref2) {
      var query = _ref2.query;
      return new Promise(function(resolve) {
        // If is not async should prepare now
        resolve(!query('IS_ASYNC'));
      });
    });

    // subscribe to file transformations
    addFilter('PREPARE_OUTPUT', function(file, _ref3) {
      var query = _ref3.query,
        item = _ref3.item;
      return new Promise(function(resolve) {
        // if the file is not an image we do not have any business transforming it
        if (
          !isFile(file) ||
          !isImage(file) ||
          !query('GET_ALLOW_IMAGE_TRANSFORM') ||
          item.archived
        ) {
          return resolve(file);
        }

        // get variants
        var variants = [];

        // add original file
        if (query('GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL')) {
          variants.push(function() {
            return new Promise(function(resolve) {
              resolve({
                name: query('GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME'),
                file: file
              });
            });
          });
        }

        // add default output version if output default set to true or if no variants defined
        if (query('GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT')) {
          variants.push(function(transform, file, metadata) {
            return new Promise(function(resolve) {
              transform(file, metadata).then(function(file) {
                return resolve({
                  name: query('GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME'),
                  file: file
                });
              });
            });
          });
        }

        // get other variants
        var variantsDefinition = query('GET_IMAGE_TRANSFORM_VARIANTS') || {};
        forin(variantsDefinition, function(key, fn) {
          var createVariant = createVariantCreator(fn);
          variants.push(function(transform, file, metadata) {
            return new Promise(function(resolve) {
              createVariant(transform, file, metadata).then(function(file) {
                return resolve({ name: key, file: file });
              });
            });
          });
        });

        // output format (quality 0 => 100)
        var qualityAsPercentage = query('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY');
        var qualityMode = query('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE');
        var quality =
          qualityAsPercentage === null ? null : qualityAsPercentage / 100;
        var type = query('GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE');
        var clientTransforms =
          query('GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS') || TRANSFORM_LIST;

        // update transform metadata object
        item.setMetadata(
          'output',
          {
            type: type,
            quality: quality,
            client: clientTransforms
          },
          true
        );

        // the function that is used to apply the file transformations
        var transform = function transform(file, metadata) {
          return new Promise(function(resolve, reject) {
            var filteredMetadata = Object.assign({}, metadata);

            Object.keys(filteredMetadata)
              .filter(function(instruction) {
                return instruction !== 'exif';
              })
              .forEach(function(instruction) {
                // if not in list, remove from object, the instruction will be handled by the server
                if (clientTransforms.indexOf(instruction) === -1) {
                  delete filteredMetadata[instruction];
                }
              });
            var resize = filteredMetadata.resize,
              exif = filteredMetadata.exif,
              output = filteredMetadata.output,
              crop = filteredMetadata.crop,
              filter = filteredMetadata.filter;

            var instructions = {
              image: {
                orientation: exif ? exif.orientation : null
              },

              output: output
                ? {
                    type: output.type,
                    quality: output.quality ? output.quality * 100 : null
                  }
                : undefined,
              size:
                resize && (resize.size.width || resize.size.height)
                  ? Object.assign(
                      {
                        mode: resize.mode,
                        upscale: resize.upscale
                      },
                      resize.size
                    )
                  : undefined,
              crop:
                crop && !isDefaultCrop(crop)
                  ? Object.assign({}, crop)
                  : undefined,
              filter: filter
            };

            if (instructions.output) {
              // determine if file type will change
              var willChangeType = output.type && output.type !== file.type;

              // determine if file data will be modified
              var willModifyImageData = !!(
                instructions.size ||
                instructions.crop ||
                instructions.filter ||
                willChangeType
              );

              // if quality has been set, and quality is optional, and we're not modifying the image data then we don't have to modify the output
              if (
                output.quality &&
                qualityMode === 'optional' &&
                !willModifyImageData
              ) {
                return resolve(file);
              }
            }

            var options = {
              stripImageHead: query(
                'GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD'
              )
            };

            transformImage(file, instructions, options)
              .then(function(blob) {
                // set file object
                var out = getFileFromBlob(
                  blob,
                  // rename the original filename to match the mime type of the output image
                  renameFileToMatchMimeType(
                    file.name,
                    getValidOutputMimeType(blob.type)
                  )
                );

                resolve(out);
              })
              .catch(reject);
          });
        };

        // start creating variants
        var variantPromises = variants.map(function(create) {
          return create(transform, file, item.getMetadata());
        });

        // wait for results
        Promise.all(variantPromises).then(function(files) {
          // if single file object in array, return the single file object else, return array of
          resolve(
            files.length === 1 && files[0].name === null
              ? // return the File object
                files[0].file
              : // return an array of files { name:'name', file:File }
                files
          );
        });
      });
    });

    // Expose plugin options
    return {
      options: {
        allowImageTransform: [true, Type.BOOLEAN],

        // null, 'image/jpeg', 'image/png'
        imageTransformOutputMimeType: [null, Type.STRING],

        // null, 0 - 100
        imageTransformOutputQuality: [null, Type.INT],

        // set to false to copy image exif data to output
        imageTransformOutputStripImageHead: [true, Type.BOOLEAN],

        // only apply transforms in this list
        imageTransformClientTransforms: [null, Type.ARRAY],

        // only apply output quality when a transform is required
        imageTransformOutputQualityMode: ['always', Type.STRING],
        // 'always'
        // 'optional'
        // 'mismatch' (future feature, only applied if quality differs from input)

        // get image transform variants
        imageTransformVariants: [null, Type.OBJECT],

        // should we post the default transformed file
        imageTransformVariantsIncludeDefault: [true, Type.BOOLEAN],

        // which name to prefix the default transformed file with
        imageTransformVariantsDefaultName: [null, Type.STRING],

        // should we post the original file
        imageTransformVariantsIncludeOriginal: [false, Type.BOOLEAN],

        // which name to prefix the original file with
        imageTransformVariantsOriginalName: ['original_', Type.STRING]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "e2cq":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginFileEncode 2.1.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  var DataURIWorker = function DataURIWorker() {
    // route messages
    self.onmessage = function(e) {
      convert(e.data.message, function(response) {
        self.postMessage({ id: e.data.id, message: response });
      });
    };

    // convert file to data uri
    var convert = function convert(options, cb) {
      var file = options.file;

      var reader = new FileReader();
      reader.onloadend = function() {
        cb(reader.result.replace('data:', '').replace(/^.+,/, ''));
      };
      reader.readAsDataURL(file);
    };
  };

  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;

    // get quick reference to Type utils
    var Type = utils.Type,
      createWorker = utils.createWorker,
      createRoute = utils.createRoute,
      isFile = utils.isFile;

    var encode = function encode(_ref2) {
      var name = _ref2.name,
        file = _ref2.file;
      return new Promise(function(resolve) {
        var worker = createWorker(DataURIWorker);
        worker.post({ file: file }, function(data) {
          resolve({ name: name, data: data });
          worker.terminate();
        });
      });
    };

    // holds base64 strings till can be moved to item
    var base64Cache = [];
    addFilter('DID_CREATE_ITEM', function(item, _ref3) {
      var query = _ref3.query;

      if (!query('GET_ALLOW_FILE_ENCODE')) return;

      item.extend('getFileEncodeBase64String', function() {
        return base64Cache[item.id].data;
      });
      item.extend('getFileEncodeDataURL', function() {
        return 'data:'
          .concat(item.fileType, ';base64,')
          .concat(base64Cache[item.id].data);
      });
    });

    addFilter('SHOULD_PREPARE_OUTPUT', function(shouldPrepareOutput, _ref4) {
      var query = _ref4.query;
      return new Promise(function(resolve) {
        resolve(query('GET_ALLOW_FILE_ENCODE'));
      });
    });

    addFilter('COMPLETE_PREPARE_OUTPUT', function(file, _ref5) {
      var item = _ref5.item,
        query = _ref5.query;
      return new Promise(function(resolve) {
        // if it's not a file or a list of files, continue
        if (
          !query('GET_ALLOW_FILE_ENCODE') ||
          (!isFile(file) && !Array.isArray(file))
        ) {
          return resolve(file);
        }

        // store metadata settings for this cache
        base64Cache[item.id] = {
          metadata: item.getMetadata(),
          data: null
        };

        // wait for all file items to be encoded
        Promise.all(
          (file instanceof Blob ? [{ name: null, file: file }] : file).map(
            encode
          )
        ).then(function(dataItems) {
          base64Cache[item.id].data =
            file instanceof Blob ? dataItems[0].data : dataItems;
          resolve(file);
        });
      });
    });

    // called for each view that is created right after the 'create' method
    addFilter('CREATE_VIEW', function(viewAPI) {
      // get reference to created view
      var is = viewAPI.is,
        view = viewAPI.view,
        query = viewAPI.query;

      // only hook up to item view
      if (!is('file-wrapper') || !query('GET_ALLOW_FILE_ENCODE')) {
        return;
      }

      view.registerWriter(
        createRoute({
          DID_PREPARE_OUTPUT: function DID_PREPARE_OUTPUT(_ref6) {
            var root = _ref6.root,
              action = _ref6.action;

            // only do this if is not uploading async
            if (query('IS_ASYNC')) {
              return;
            }

            var item = query('GET_ITEM', action.id);
            if (!item) return;

            // extract base64 string
            var cache = base64Cache[item.id];
            var metadata = cache.metadata;
            var data = cache.data;

            // create JSON string from encoded data and stores in the hidden input field
            root.ref.data.value = JSON.stringify({
              id: item.id,
              name: item.file.name,
              type: item.file.type,
              size: item.file.size,
              metadata: metadata,
              data: data
            });
          },
          DID_REMOVE_ITEM: function DID_REMOVE_ITEM(_ref7) {
            var action = _ref7.action;
            var item = query('GET_ITEM', action.id);
            if (!item) return;
            delete base64Cache[item.id];
          }
        })
      );
    });

    return {
      options: {
        // Enable or disable file encoding
        allowFileEncode: [true, Type.BOOLEAN]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "eFs7":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginFileValidateSize 2.2.0
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    // get quick reference to Type utils
    var Type = utils.Type,
      replaceInString = utils.replaceInString,
      toNaturalFileSize = utils.toNaturalFileSize;

    // filtering if an item is allowed in hopper
    addFilter('ALLOW_HOPPER_ITEM', function(file, _ref2) {
      var query = _ref2.query;
      if (!query('GET_ALLOW_FILE_SIZE_VALIDATION')) {
        return true;
      }

      var sizeMax = query('GET_MAX_FILE_SIZE');
      if (sizeMax !== null && file.size >= sizeMax) {
        return false;
      }

      var sizeMin = query('GET_MIN_FILE_SIZE');
      if (sizeMin !== null && file.size <= sizeMin) {
        return false;
      }

      return true;
    });

    // called for each file that is loaded
    // right before it is set to the item state
    // should return a promise
    addFilter('LOAD_FILE', function(file, _ref3) {
      var query = _ref3.query;
      return new Promise(function(resolve, reject) {
        // if not allowed, all fine, exit
        if (!query('GET_ALLOW_FILE_SIZE_VALIDATION')) {
          return resolve(file);
        }

        // check if file should be filtered
        var fileFilter = query('GET_FILE_VALIDATE_SIZE_FILTER');
        if (fileFilter && !fileFilter(file)) {
          return resolve(file);
        }

        // reject or resolve based on file size
        var sizeMax = query('GET_MAX_FILE_SIZE');
        if (sizeMax !== null && file.size >= sizeMax) {
          reject({
            status: {
              main: query('GET_LABEL_MAX_FILE_SIZE_EXCEEDED'),
              sub: replaceInString(query('GET_LABEL_MAX_FILE_SIZE'), {
                filesize: toNaturalFileSize(sizeMax)
              })
            }
          });

          return;
        }

        // reject or resolve based on file size
        var sizeMin = query('GET_MIN_FILE_SIZE');
        if (sizeMin !== null && file.size <= sizeMin) {
          reject({
            status: {
              main: query('GET_LABEL_MIN_FILE_SIZE_EXCEEDED'),
              sub: replaceInString(query('GET_LABEL_MIN_FILE_SIZE'), {
                filesize: toNaturalFileSize(sizeMin)
              })
            }
          });

          return;
        }

        // returns the current option value
        var totalSizeMax = query('GET_MAX_TOTAL_FILE_SIZE');
        if (totalSizeMax !== null) {
          // get the current total file size
          var currentTotalSize = query('GET_ACTIVE_ITEMS').reduce(function(
            total,
            item
          ) {
            return total + item.fileSize;
          },
          0);

          // get the size of the new file
          if (currentTotalSize > totalSizeMax) {
            reject({
              status: {
                main: query('GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED'),

                sub: replaceInString(query('GET_LABEL_MAX_TOTAL_FILE_SIZE'), {
                  filesize: toNaturalFileSize(totalSizeMax)
                })
              }
            });

            return;
          }
        }

        // file is fine, let's pass it back
        resolve(file);
      });
    });

    return {
      options: {
        // Enable or disable file type validation
        allowFileSizeValidation: [true, Type.BOOLEAN],

        // Max individual file size in bytes
        maxFileSize: [null, Type.INT],

        // Min individual file size in bytes
        minFileSize: [null, Type.INT],

        // Max total file size in bytes
        maxTotalFileSize: [null, Type.INT],

        // Filter the files that need to be validated for size
        fileValidateSizeFilter: [null, Type.FUNCTION],

        // error labels
        labelMinFileSizeExceeded: ['File is too small', Type.STRING],
        labelMinFileSize: ['Minimum file size is {filesize}', Type.STRING],

        labelMaxFileSizeExceeded: ['File is too large', Type.STRING],
        labelMaxFileSize: ['Maximum file size is {filesize}', Type.STRING],

        labelMaxTotalFileSizeExceeded: [
          'Maximum total size exceeded',
          Type.STRING
        ],

        labelMaxTotalFileSize: [
          'Maximum total file size is {filesize}',
          Type.STRING
        ]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "hrFO":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginImageExifOrientation 1.0.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  // test if file is of type image
  var isJPEG = function isJPEG(file) {
    return /^image\/jpeg/.test(file.type);
  };

  var Marker = {
    JPEG: 0xffd8,
    APP1: 0xffe1,
    EXIF: 0x45786966,
    TIFF: 0x4949,
    Orientation: 0x0112,
    Unknown: 0xff00
  };

  var getUint16 = function getUint16(view, offset) {
    var little =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return view.getUint16(offset, little);
  };
  var getUint32 = function getUint32(view, offset) {
    var little =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return view.getUint32(offset, little);
  };

  var getImageOrientation = function getImageOrientation(file) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var view = new DataView(e.target.result);

        // Every JPEG file starts from binary value '0xFFD8'
        if (getUint16(view, 0) !== Marker.JPEG) {
          // This aint no JPEG
          resolve(-1);
          return;
        }

        var length = view.byteLength;
        var offset = 2;

        while (offset < length) {
          var marker = getUint16(view, offset);
          offset += 2;

          // There's our APP1 Marker
          if (marker === Marker.APP1) {
            if (getUint32(view, (offset += 2)) !== Marker.EXIF) {
              // no EXIF info defined
              break;
            }

            // Get TIFF Header
            var little = getUint16(view, (offset += 6)) === Marker.TIFF;
            offset += getUint32(view, offset + 4, little);

            var tags = getUint16(view, offset, little);
            offset += 2;

            for (var i = 0; i < tags; i++) {
              // found the orientation tag
              if (
                getUint16(view, offset + i * 12, little) === Marker.Orientation
              ) {
                resolve(getUint16(view, offset + i * 12 + 8, little));

                return;
              }
            }
          } else if ((marker & Marker.Unknown) !== Marker.Unknown) {
            // Invalid
            break;
          } else {
            offset += getUint16(view, offset);
          }
        }

        // Nothing found
        resolve(-1);
      };

      // we don't need to read the entire file to get the orientation
      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    });
  };

  /**
   * Read Image Orientation Plugin
   */
  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    var Type = utils.Type,
      isFile = utils.isFile;

    // subscribe to file load and append required info
    addFilter('DID_LOAD_ITEM', function(item, _ref2) {
      var query = _ref2.query;
      return new Promise(function(resolve, reject) {
        // get file reference
        var file = item.file;

        // if this is not a jpeg image we are not interested
        if (
          !isFile(file) ||
          !isJPEG(file) ||
          !query('GET_ALLOW_IMAGE_EXIF_ORIENTATION')
        ) {
          // continue with the unaltered dataset
          return resolve(item);
        }

        // get orientation from exif data
        getImageOrientation(file).then(function(orientation) {
          item.setMetadata('exif', {
            orientation: orientation
          });

          resolve(item);
        });
      });
    });

    // Expose plugin options
    return {
      options: {
        // Enable or disable image orientation reading
        allowImageExifOrientation: [true, Type.BOOLEAN]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "ux1L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollbarModule; });
class ScrollbarModule {
}



/***/ }),

/***/ "x/0c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePondModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FilePondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kZht");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WAnW");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(filepond__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filepond__WEBPACK_IMPORTED_MODULE_1__["registerPlugin"]; });





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// We test if filepond is supported on the current client
const isSupported = Object(filepond__WEBPACK_IMPORTED_MODULE_1__["supported"])();
// List of attributes for fallback input
const inputAttributes = [
    'id',
    'name',
    'class',
    'multiple',
    'required',
    'disabled',
    'capture',
    'accept'
];
// Methods not made available on the component
const filteredComponentMethods = [
    'setOptions',
    'on',
    'off',
    'onOnce',
    'appendTo',
    'insertAfter',
    'insertBefore',
    'isAttachedTo',
    'replaceElement',
    'restoreElement',
    'destroy'
];
const outputs = [
    'oninit',
    'onwarning',
    'onerror',
    'onactivatefile',
    'onaddfilestart',
    'onaddfileprogress',
    'onaddfile',
    'onprocessfilestart',
    'onprocessfileprogress',
    'onprocessfileabort',
    'onprocessfilerevert',
    'onprocessfile',
    'onprocessfiles',
    'onremovefile',
    'onpreparefile',
    'onupdatefiles'
];
let FilePondComponent = /*@__PURE__*/ (() => {
    class FilePondComponent {
        /**
         * @param {?} root
         * @param {?} zone
         */
        constructor(root, zone) {
            this.options = {};
            this.handleEvent = null;
            this.root = root;
            this.zone = zone;
            outputs.forEach(output => {
                this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* EventEmitter */ "o"]();
            });
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            const /** @type {?} */ input = this.root.nativeElement.querySelector('input');
            // transfer relevant attributes to input, this so we still have an input with the correct attributes should file pond not load
            const /** @type {?} */ attributes = this.root.nativeElement.attributes;
            inputAttributes.forEach(name => {
                const /** @type {?} */ value = attributes[name] ? attributes[name].value : this.options[name];
                if (!value) {
                    return;
                }
                input.setAttribute(name, value);
            });
            // no sufficient features supported in this browser
            if (!isSupported) {
                return;
            }
            // map FilePond events to Angular $emitters
            this.handleEvent = (e) => {
                this[`on${e.type.split(':')[1]}`].emit(Object.assign({}, e.detail));
            };
            outputs.forEach(event => {
                this.root.nativeElement.addEventListener(`FilePond:${event.substr(2)}`, this.handleEvent);
            });
            // will block angular from listening to events inside the pond
            this.zone.runOutsideAngular(() => {
                // create instance
                this.pond = Object(filepond__WEBPACK_IMPORTED_MODULE_1__["create"])(input, Object.assign({}, this.options, { files: this.files }));
            });
            // Copy instance method references to component instance
            Object.keys(this.pond)
                .filter(key => filteredComponentMethods.indexOf(key) === -1)
                .forEach(key => {
                this[key] = this.pond[key];
            });
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            // no need to handle first change
            if (changes["firstChange"]) {
                return;
            }
            // no filepond instance available
            if (!this.pond) {
                return;
            }
            // use new options object as base ( or if not available, use current options )
            const /** @type {?} */ options = changes["options"] ? changes["options"].currentValue : this.options;
            // see if file list has changed
            if (changes["files"] && JSON.stringify(changes["files"].previousValue) !== JSON.stringify(changes["files"].currentValue)) {
                // file list has changed
                options.files = changes["files"].currentValue;
            }
            // set new options
            this.pond.setOptions(options);
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            if (!this.pond) {
                return;
            }
            outputs.forEach(event => {
                this.root.nativeElement.removeEventListener(`FilePond:${event.substr(2)}`, this.handleEvent);
            });
            this.pond.destroy();
        }
    }
    return FilePondComponent;
})();
let FilePondModule = /*@__PURE__*/ (() => {
    class FilePondModule {
    }
    return FilePondModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */






/***/ }),

/***/ "x32j":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginImagePreview 4.2.1
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  // test if file is of type image and can be viewed in canvas
  var isPreviewableImage = function isPreviewableImage(file) {
    return /^image/.test(file.type);
  };

  var IMAGE_SCALE_SPRING_PROPS = {
    type: 'spring',
    stiffness: 0.5,
    damping: 0.45,
    mass: 10
  };

  var createVector = function createVector(x, y) {
    return { x: x, y: y };
  };

  var vectorDot = function vectorDot(a, b) {
    return a.x * b.x + a.y * b.y;
  };

  var vectorSubtract = function vectorSubtract(a, b) {
    return createVector(a.x - b.x, a.y - b.y);
  };

  var vectorDistanceSquared = function vectorDistanceSquared(a, b) {
    return vectorDot(vectorSubtract(a, b), vectorSubtract(a, b));
  };

  var vectorDistance = function vectorDistance(a, b) {
    return Math.sqrt(vectorDistanceSquared(a, b));
  };

  var getOffsetPointOnEdge = function getOffsetPointOnEdge(length, rotation) {
    var a = length;

    var A = 1.5707963267948966;
    var B = rotation;
    var C = 1.5707963267948966 - rotation;

    var sinA = Math.sin(A);
    var sinB = Math.sin(B);
    var sinC = Math.sin(C);
    var cosC = Math.cos(C);
    var ratio = a / sinA;
    var b = ratio * sinB;
    var c = ratio * sinC;

    return createVector(cosC * b, cosC * c);
  };

  var getRotatedRectSize = function getRotatedRectSize(rect, rotation) {
    var w = rect.width;
    var h = rect.height;

    var hor = getOffsetPointOnEdge(w, rotation);
    var ver = getOffsetPointOnEdge(h, rotation);

    var tl = createVector(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));

    var tr = createVector(
      rect.x + rect.width + Math.abs(ver.y),
      rect.y + Math.abs(ver.x)
    );

    var bl = createVector(
      rect.x - Math.abs(ver.y),
      rect.y + rect.height - Math.abs(ver.x)
    );

    return {
      width: vectorDistance(tl, tr),
      height: vectorDistance(tl, bl)
    };
  };

  var getImageRectZoomFactor = function getImageRectZoomFactor(
    imageRect,
    cropRect,
    rotation,
    center
  ) {
    // calculate available space round image center position
    var cx = center.x > 0.5 ? 1 - center.x : center.x;
    var cy = center.y > 0.5 ? 1 - center.y : center.y;
    var imageWidth = cx * 2 * imageRect.width;
    var imageHeight = cy * 2 * imageRect.height;

    // calculate rotated crop rectangle size
    var rotatedCropSize = getRotatedRectSize(cropRect, rotation);

    // calculate scalar required to fit image
    return Math.max(
      rotatedCropSize.width / imageWidth,
      rotatedCropSize.height / imageHeight
    );
  };

  var getCenteredCropRect = function getCenteredCropRect(
    container,
    aspectRatio
  ) {
    var width = container.width;
    var height = width * aspectRatio;
    if (height > container.height) {
      height = container.height;
      width = height / aspectRatio;
    }
    var x = (container.width - width) * 0.5;
    var y = (container.height - height) * 0.5;

    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  };

  // does horizontal and vertical flipping
  var createBitmapView = function createBitmapView(_) {
    return _.utils.createView({
      name: 'image-bitmap',
      ignoreRect: true,
      mixins: { styles: ['scaleX', 'scaleY'] },
      create: function create(_ref) {
        var root = _ref.root,
          props = _ref.props;
        root.appendChild(props.image);
      }
    });
  };

  // shifts and rotates image
  var createImageCanvasWrapper = function createImageCanvasWrapper(_) {
    return _.utils.createView({
      name: 'image-canvas-wrapper',
      tag: 'div',
      ignoreRect: true,
      mixins: {
        apis: ['crop', 'width', 'height'],

        styles: [
          'originX',
          'originY',
          'translateX',
          'translateY',
          'scaleX',
          'scaleY',
          'rotateZ'
        ],

        animations: {
          originX: IMAGE_SCALE_SPRING_PROPS,
          originY: IMAGE_SCALE_SPRING_PROPS,
          scaleX: IMAGE_SCALE_SPRING_PROPS,
          scaleY: IMAGE_SCALE_SPRING_PROPS,
          translateX: IMAGE_SCALE_SPRING_PROPS,
          translateY: IMAGE_SCALE_SPRING_PROPS,
          rotateZ: IMAGE_SCALE_SPRING_PROPS
        }
      },

      create: function create(_ref2) {
        var root = _ref2.root,
          props = _ref2.props;
        props.width = props.image.width;
        props.height = props.image.height;
        root.ref.bitmap = root.appendChildView(
          root.createChildView(createBitmapView(_), { image: props.image })
        );
      },
      write: function write(_ref3) {
        var root = _ref3.root,
          props = _ref3.props;
        var flip = props.crop.flip;
        var bitmap = root.ref.bitmap;
        bitmap.scaleX = flip.horizontal ? -1 : 1;
        bitmap.scaleY = flip.vertical ? -1 : 1;
      }
    });
  };

  // clips canvas to correct aspect ratio
  var createClipView = function createClipView(_) {
    return _.utils.createView({
      name: 'image-clip',
      tag: 'div',
      ignoreRect: true,
      mixins: {
        apis: ['crop', 'width', 'height'],
        styles: ['width', 'height', 'opacity'],
        animations: {
          opacity: { type: 'tween', duration: 250 }
        }
      },

      create: function create(_ref4) {
        var root = _ref4.root,
          props = _ref4.props;

        root.ref.image = root.appendChildView(
          root.createChildView(
            createImageCanvasWrapper(_),
            Object.assign({}, props)
          )
        );

        // set up transparency grid
        var transparencyIndicator = root.query(
          'GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR'
        );
        if (transparencyIndicator === null) {
          return;
        }

        // grid pattern
        if (transparencyIndicator === 'grid') {
          root.element.dataset.transparencyIndicator = transparencyIndicator;
        }
        // basic color
        else {
          root.element.dataset.transparencyIndicator = 'color';
        }
      },
      write: function write(_ref5) {
        var root = _ref5.root,
          props = _ref5.props,
          shouldOptimize = _ref5.shouldOptimize;
        var crop = props.crop,
          width = props.width,
          height = props.height;

        root.ref.image.crop = crop;

        var stage = {
          x: 0,
          y: 0,
          width: width,
          height: height,
          center: {
            x: width * 0.5,
            y: height * 0.5
          }
        };

        var image = {
          width: root.ref.image.width,
          height: root.ref.image.height
        };

        var origin = {
          x: crop.center.x * image.width,
          y: crop.center.y * image.height
        };

        var translation = {
          x: stage.center.x - image.width * crop.center.x,
          y: stage.center.y - image.height * crop.center.y
        };

        var rotation = Math.PI * 2 + (crop.rotation % (Math.PI * 2));

        var cropAspectRatio = crop.aspectRatio || image.height / image.width;

        var stageZoomFactor = getImageRectZoomFactor(
          image,
          getCenteredCropRect(stage, cropAspectRatio),

          rotation,
          crop.center
        );

        var scale = crop.zoom * stageZoomFactor;

        var imageView = root.ref.image;

        // don't update clip layout
        if (shouldOptimize) {
          imageView.originX = null;
          imageView.originY = null;
          imageView.translateX = null;
          imageView.translateY = null;
          imageView.rotateZ = null;
          imageView.scaleX = null;
          imageView.scaleY = null;
          return;
        }

        imageView.originX = origin.x;
        imageView.originY = origin.y;
        imageView.translateX = translation.x;
        imageView.translateY = translation.y;
        imageView.rotateZ = rotation;
        imageView.scaleX = scale;
        imageView.scaleY = scale;
      }
    });
  };

  var createImageView = function createImageView(_) {
    return _.utils.createView({
      name: 'image-preview',
      tag: 'div',
      ignoreRect: true,
      mixins: {
        apis: ['crop', 'image'],

        styles: ['translateY', 'scaleX', 'scaleY', 'opacity'],

        animations: {
          scaleX: IMAGE_SCALE_SPRING_PROPS,
          scaleY: IMAGE_SCALE_SPRING_PROPS,
          translateY: IMAGE_SCALE_SPRING_PROPS,
          opacity: { type: 'tween', duration: 400 }
        }
      },

      create: function create(_ref6) {
        var root = _ref6.root,
          props = _ref6.props;
        root.ref.clip = root.appendChildView(
          root.createChildView(createClipView(_), {
            image: props.image,
            crop: props.crop
          })
        );
      },
      write: function write(_ref7) {
        var root = _ref7.root,
          props = _ref7.props,
          shouldOptimize = _ref7.shouldOptimize;
        var clip = root.ref.clip;
        var crop = props.crop,
          image = props.image;

        clip.crop = crop;

        // don't update clip layout
        clip.opacity = shouldOptimize ? 0 : 1;

        // don't re-render if optimizing or hidden (width will be zero resulting in weird animations)
        if (shouldOptimize || root.rect.element.hidden) return;

        // calculate scaled preview image size
        var imageAspectRatio = image.height / image.width;
        var aspectRatio = crop.aspectRatio || imageAspectRatio;

        // calculate container size
        var containerWidth = root.rect.inner.width;
        var containerHeight = root.rect.inner.height;

        var fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        var minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
        var maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

        var panelAspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
        var allowMultiple = root.query('GET_ALLOW_MULTIPLE');

        if (panelAspectRatio && !allowMultiple) {
          fixedPreviewHeight = containerWidth * panelAspectRatio;
          aspectRatio = panelAspectRatio;
        }

        // determine clip width and height
        var clipHeight =
          fixedPreviewHeight !== null
            ? fixedPreviewHeight
            : Math.max(
                minPreviewHeight,
                Math.min(containerWidth * aspectRatio, maxPreviewHeight)
              );

        var clipWidth = clipHeight / aspectRatio;
        if (clipWidth > containerWidth) {
          clipWidth = containerWidth;
          clipHeight = clipWidth * aspectRatio;
        }

        if (clipHeight > containerHeight) {
          clipHeight = containerHeight;
          clipWidth = containerHeight / aspectRatio;
        }

        clip.width = clipWidth;
        clip.height = clipHeight;
      }
    });
  };

  var SVG_MASK =
    '<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">\n    <defs>\n        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">\n            <stop offset=\'50%\' stop-color=\'#000000\'/>\n            <stop offset=\'56%\' stop-color=\'#0a0a0a\'/>\n            <stop offset=\'63%\' stop-color=\'#262626\'/>\n            <stop offset=\'69%\' stop-color=\'#4f4f4f\'/>\n            <stop offset=\'75%\' stop-color=\'#808080\'/>\n            <stop offset=\'81%\' stop-color=\'#b1b1b1\'/>\n            <stop offset=\'88%\' stop-color=\'#dadada\'/>\n            <stop offset=\'94%\' stop-color=\'#f6f6f6\'/>\n            <stop offset=\'100%\' stop-color=\'#ffffff\'/>\n        </radialGradient>\n        <mask id="mask-__UID__">\n            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>\n        </mask>\n    </defs>\n    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>\n</svg>';

  var checkedMyBases = false;
  var SVGMaskUniqueId = 0;

  var createImageOverlayView = function createImageOverlayView(fpAPI) {
    return fpAPI.utils.createView({
      name: 'image-preview-overlay',
      tag: 'div',
      ignoreRect: true,
      create: function create(_ref) {
        var root = _ref.root,
          props = _ref.props;

        if (!checkedMyBases && document.querySelector('base')) {
          SVG_MASK = SVG_MASK.replace(
            /url\(\#/g,
            'url(' +
              window.location.href.replace(window.location.hash, '') +
              '#'
          );
          checkedMyBases = true;
        }

        SVGMaskUniqueId++;
        root.element.classList.add(
          'filepond--image-preview-overlay-'.concat(props.status)
        );
        root.element.innerHTML = SVG_MASK.replace(/__UID__/g, SVGMaskUniqueId);
      },
      mixins: {
        styles: ['opacity'],
        animations: {
          opacity: { type: 'spring', mass: 25 }
        }
      }
    });
  };

  /**
   * Bitmap Worker
   */
  var BitmapWorker = function BitmapWorker() {
    self.onmessage = function(e) {
      createImageBitmap(e.data.message.file).then(function(bitmap) {
        self.postMessage({ id: e.data.id, message: bitmap }, [bitmap]);
      });
    };
  };

  /**
   * ColorMatrix Worker
   */
  var ColorMatrixWorker = function ColorMatrixWorker() {
    self.onmessage = function(e) {
      var imageData = e.data.message.imageData;
      var matrix = e.data.message.colorMatrix;

      var data = imageData.data;
      var l = data.length;

      var m11 = matrix[0];
      var m12 = matrix[1];
      var m13 = matrix[2];
      var m14 = matrix[3];
      var m15 = matrix[4];

      var m21 = matrix[5];
      var m22 = matrix[6];
      var m23 = matrix[7];
      var m24 = matrix[8];
      var m25 = matrix[9];

      var m31 = matrix[10];
      var m32 = matrix[11];
      var m33 = matrix[12];
      var m34 = matrix[13];
      var m35 = matrix[14];

      var m41 = matrix[15];
      var m42 = matrix[16];
      var m43 = matrix[17];
      var m44 = matrix[18];
      var m45 = matrix[19];

      var index = 0,
        r = 0.0,
        g = 0.0,
        b = 0.0,
        a = 0.0;

      for (; index < l; index += 4) {
        r = data[index] / 255;
        g = data[index + 1] / 255;
        b = data[index + 2] / 255;
        a = data[index + 3] / 255;
        data[index] = Math.max(
          0,
          Math.min((r * m11 + g * m12 + b * m13 + a * m14 + m15) * 255, 255)
        );
        data[index + 1] = Math.max(
          0,
          Math.min((r * m21 + g * m22 + b * m23 + a * m24 + m25) * 255, 255)
        );
        data[index + 2] = Math.max(
          0,
          Math.min((r * m31 + g * m32 + b * m33 + a * m34 + m35) * 255, 255)
        );
        data[index + 3] = Math.max(
          0,
          Math.min((r * m41 + g * m42 + b * m43 + a * m44 + m45) * 255, 255)
        );
      }

      self.postMessage({ id: e.data.id, message: imageData }, [
        imageData.data.buffer
      ]);
    };
  };

  var getImageSize = function getImageSize(url, cb) {
    var image = new Image();
    image.onload = function() {
      var width = image.naturalWidth;
      var height = image.naturalHeight;
      image = null;
      cb(width, height);
    };
    image.src = url;
  };

  var transforms = {
    1: function _() {
      return [1, 0, 0, 1, 0, 0];
    },
    2: function _(width) {
      return [-1, 0, 0, 1, width, 0];
    },
    3: function _(width, height) {
      return [-1, 0, 0, -1, width, height];
    },
    4: function _(width, height) {
      return [1, 0, 0, -1, 0, height];
    },
    5: function _() {
      return [0, 1, 1, 0, 0, 0];
    },
    6: function _(width, height) {
      return [0, 1, -1, 0, height, 0];
    },
    7: function _(width, height) {
      return [0, -1, -1, 0, height, width];
    },
    8: function _(width) {
      return [0, -1, 1, 0, 0, width];
    }
  };

  var fixImageOrientation = function fixImageOrientation(
    ctx,
    width,
    height,
    orientation
  ) {
    // no orientation supplied
    if (orientation === -1) {
      return;
    }

    ctx.transform.apply(ctx, transforms[orientation](width, height));
  };

  // draws the preview image to canvas
  var createPreviewImage = function createPreviewImage(
    data,
    width,
    height,
    orientation
  ) {
    // can't draw on half pixels
    width = Math.round(width);
    height = Math.round(height);

    // draw image
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');

    // if is rotated incorrectly swap width and height
    if (orientation >= 5 && orientation <= 8) {
      var _ref = [height, width];
      width = _ref[0];
      height = _ref[1];
    }

    // correct image orientation
    fixImageOrientation(ctx, width, height, orientation);

    // draw the image
    ctx.drawImage(data, 0, 0, width, height);

    return canvas;
  };

  var isBitmap = function isBitmap(file) {
    return /^image/.test(file.type) && !/svg/.test(file.type);
  };

  var MAX_WIDTH = 10;
  var MAX_HEIGHT = 10;

  var calculateAverageColor = function calculateAverageColor(image) {
    var scalar = Math.min(MAX_WIDTH / image.width, MAX_HEIGHT / image.height);

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = (canvas.width = Math.ceil(image.width * scalar));
    var height = (canvas.height = Math.ceil(image.height * scalar));
    ctx.drawImage(image, 0, 0, width, height);
    var data = null;
    try {
      data = ctx.getImageData(0, 0, width, height).data;
    } catch (e) {
      return null;
    }
    var l = data.length;

    var r = 0;
    var g = 0;
    var b = 0;
    var i = 0;

    for (; i < l; i += 4) {
      r += data[i] * data[i];
      g += data[i + 1] * data[i + 1];
      b += data[i + 2] * data[i + 2];
    }

    r = averageColor(r, l);
    g = averageColor(g, l);
    b = averageColor(b, l);

    return { r: r, g: g, b: b };
  };

  var averageColor = function averageColor(c, l) {
    return Math.floor(Math.sqrt(c / (l / 4)));
  };

  var cloneCanvas = function cloneCanvas(origin, target) {
    target = target || document.createElement('canvas');
    target.width = origin.width;
    target.height = origin.height;
    var ctx = target.getContext('2d');
    ctx.drawImage(origin, 0, 0);
    return target;
  };

  var cloneImageData = function cloneImageData(imageData) {
    var id;
    try {
      id = new ImageData(imageData.width, imageData.height);
    } catch (e) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      id = ctx.createImageData(imageData.width, imageData.height);
    }
    id.data.set(new Uint8ClampedArray(imageData.data));
    return id;
  };

  var loadImage = function loadImage(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var createImageWrapperView = function createImageWrapperView(_) {
    // create overlay view
    var OverlayView = createImageOverlayView(_);

    var ImageView = createImageView(_);
    var createWorker = _.utils.createWorker;

    var applyFilter = function applyFilter(root, filter, target) {
      return new Promise(function(resolve) {
        // will store image data for future filter updates
        if (!root.ref.imageData) {
          root.ref.imageData = target
            .getContext('2d')
            .getImageData(0, 0, target.width, target.height);
        }

        // get image data reference
        var imageData = cloneImageData(root.ref.imageData);

        if (!filter || filter.length !== 20) {
          target.getContext('2d').putImageData(imageData, 0, 0);
          return resolve();
        }

        var worker = createWorker(ColorMatrixWorker);
        worker.post(
          {
            imageData: imageData,
            colorMatrix: filter
          },

          function(response) {
            // apply filtered colors
            target.getContext('2d').putImageData(response, 0, 0);

            // stop worker
            worker.terminate();

            // done!
            resolve();
          },
          [imageData.data.buffer]
        );
      });
    };

    var removeImageView = function removeImageView(root, imageView) {
      root.removeChildView(imageView);
      imageView.image.width = 1;
      imageView.image.height = 1;
      imageView._destroy();
    };

    // remove an image
    var shiftImage = function shiftImage(_ref) {
      var root = _ref.root;
      var imageView = root.ref.images.shift();
      imageView.opacity = 0;
      imageView.translateY = -15;
      root.ref.imageViewBin.push(imageView);
      return imageView;
    };

    // add new image
    var pushImage = function pushImage(_ref2) {
      var root = _ref2.root,
        props = _ref2.props,
        image = _ref2.image;

      var id = props.id;
      var item = root.query('GET_ITEM', { id: id });
      if (!item) return;

      var crop = item.getMetadata('crop') || {
        center: {
          x: 0.5,
          y: 0.5
        },

        flip: {
          horizontal: false,
          vertical: false
        },

        zoom: 1,
        rotation: 0,
        aspectRatio: null
      };

      // append image presenter
      var imageView = root.appendChildView(
        root.createChildView(ImageView, {
          image: image,
          crop: crop,
          opacity: 0,
          scaleX: 1.15,
          scaleY: 1.15,
          translateY: 15
        }),

        root.childViews.length
      );

      root.ref.images.push(imageView);

      // reveal the preview image
      imageView.opacity = 1;
      imageView.scaleX = 1;
      imageView.scaleY = 1;
      imageView.translateY = 0;

      // the preview is now ready to be drawn
      setTimeout(function() {
        root.dispatch('DID_IMAGE_PREVIEW_SHOW', { id: id });
      }, 250);
    };

    var updateImage = function updateImage(_ref3) {
      var root = _ref3.root,
        props = _ref3.props;
      var item = root.query('GET_ITEM', { id: props.id });
      if (!item) return;
      var imageView = root.ref.images[root.ref.images.length - 1];
      imageView.crop = item.getMetadata('crop');
    };

    // replace image preview
    var didUpdateItemMetadata = function didUpdateItemMetadata(_ref4) {
      var root = _ref4.root,
        props = _ref4.props,
        action = _ref4.action;

      // only filter and crop trigger redraw
      if (!/crop|filter/.test(action.change.key)) return;

      // no images to update, exit
      if (!root.ref.images.length) return;

      // no item found, exit
      var item = root.query('GET_ITEM', { id: props.id });
      if (!item) return;

      // for now, update existing image when filtering
      if (/filter/.test(action.change.key)) {
        var imageView = root.ref.images[root.ref.images.length - 1];
        applyFilter(root, action.change.value, imageView.image);
        return;
      }

      if (/crop/.test(action.change.key)) {
        var crop = item.getMetadata('crop');
        var image = root.ref.images[root.ref.images.length - 1];

        // if aspect ratio has changed, we need to create a new image
        if (Math.abs(crop.aspectRatio - image.crop.aspectRatio) > 0.00001) {
          var _imageView = shiftImage({ root: root });
          pushImage({
            root: root,
            props: props,
            image: cloneCanvas(_imageView.image)
          });
        }
        // if not, we can update the current image
        else {
          updateImage({ root: root, props: props });
        }
      }
    };

    var canCreateImageBitmap = function canCreateImageBitmap(file) {
      return 'createImageBitmap' in window && isBitmap(file);
    };

    /**
     * Write handler for when preview container has been created
     */
    var didCreatePreviewContainer = function didCreatePreviewContainer(_ref5) {
      var root = _ref5.root,
        props = _ref5.props;
      var id = props.id;

      // we need to get the file data to determine the eventual image size
      var item = root.query('GET_ITEM', id);
      if (!item) return;

      // get url to file (we'll revoke it later on when done)
      var fileURL = URL.createObjectURL(item.file);

      // determine image size of this item
      getImageSize(fileURL, function(width, height) {
        // we can now scale the panel to the final size
        root.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', {
          id: id,
          width: width,
          height: height
        });
      });
    };

    var drawPreview = function drawPreview(_ref6) {
      var root = _ref6.root,
        props = _ref6.props;
      var id = props.id;

      // we need to get the file data to determine the eventual image size
      var item = root.query('GET_ITEM', id);
      if (!item) return;

      // get url to file (we'll revoke it later on when done)
      var fileURL = URL.createObjectURL(item.file);

      // fallback
      var loadPreviewFallback = function loadPreviewFallback() {
        // let's scale the image in the main thread :(
        loadImage(fileURL).then(previewImageLoaded);
      };

      // image is now ready
      var previewImageLoaded = function previewImageLoaded(imageData) {
        // the file url is no longer needed
        URL.revokeObjectURL(fileURL);

        // draw the scaled down version here and use that as source so bitmapdata can be closed
        // orientation info
        var exif = item.getMetadata('exif') || {};
        var orientation = exif.orientation || -1;

        // get width and height from action, and swap if orientation is incorrect
        var width = imageData.width,
          height = imageData.height;
        if (orientation >= 5 && orientation <= 8) {
          var _ref7 = [height, width];
          width = _ref7[0];
          height = _ref7[1];
        }

        // scale canvas based on pixel density
        // we multiply by .75 as that creates smaller but still clear images on screens with high res displays
        var pixelDensityFactor = Math.max(1, window.devicePixelRatio * 0.75);

        // we want as much pixels to work with as possible,
        // this multiplies the minimum image resolution,
        // so when zooming in it doesn't get too blurry
        var zoomFactor = root.query('GET_IMAGE_PREVIEW_ZOOM_FACTOR');

        // imaeg scale factor
        var scaleFactor = zoomFactor * pixelDensityFactor;

        // calculate scaled preview image size
        var previewImageRatio = height / width;

        // calculate image preview height and width
        var previewContainerWidth = root.rect.element.width;
        var previewContainerHeight = root.rect.element.height;

        var imageWidth = previewContainerWidth;
        var imageHeight = imageWidth * previewImageRatio;

        if (previewImageRatio > 1) {
          imageWidth = Math.min(width, previewContainerWidth * scaleFactor);
          imageHeight = imageWidth * previewImageRatio;
        } else {
          imageHeight = Math.min(height, previewContainerHeight * scaleFactor);
          imageWidth = imageHeight / previewImageRatio;
        }

        // transfer to image tag so no canvas memory wasted on iOS
        var previewImage = createPreviewImage(
          imageData,
          imageWidth,
          imageHeight,
          orientation
        );

        // done
        var done = function done() {
          // calculate average image color, disabled for now
          var averageColor = root.query(
            'GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR'
          )
            ? calculateAverageColor(data)
            : null;
          item.setMetadata('color', averageColor, true);

          // data has been transferred to canvas ( if was ImageBitmap )
          if ('close' in imageData) {
            imageData.close();
          }

          // show the overlay
          root.ref.overlayShadow.opacity = 1;

          // create the first image
          pushImage({ root: root, props: props, image: previewImage });
        };

        // apply filter
        var filter = item.getMetadata('filter');
        if (filter) {
          applyFilter(root, filter, previewImage).then(done);
        } else {
          done();
        }
      };

      // if we support scaling using createImageBitmap we use a worker
      if (canCreateImageBitmap(item.file)) {
        // let's scale the image in a worker
        var worker = createWorker(BitmapWorker);

        worker.post(
          {
            file: item.file
          },

          function(imageBitmap) {
            // destroy worker
            worker.terminate();

            // no bitmap returned, must be something wrong,
            // try the oldschool way
            if (!imageBitmap) {
              loadPreviewFallback();
              return;
            }

            // yay we got our bitmap, let's continue showing the preview
            previewImageLoaded(imageBitmap);
          }
        );
      } else {
        // create fallback preview
        loadPreviewFallback();
      }
    };

    /**
     * Write handler for when the preview image is ready to be animated
     */
    var didDrawPreview = function didDrawPreview(_ref8) {
      var root = _ref8.root;
      // get last added image
      var image = root.ref.images[root.ref.images.length - 1];
      image.translateY = 0;
      image.scaleX = 1.0;
      image.scaleY = 1.0;
      image.opacity = 1;
    };

    /**
     * Write handler for when the preview has been loaded
     */
    var restoreOverlay = function restoreOverlay(_ref9) {
      var root = _ref9.root;
      root.ref.overlayShadow.opacity = 1;
      root.ref.overlayError.opacity = 0;
      root.ref.overlaySuccess.opacity = 0;
    };

    var didThrowError = function didThrowError(_ref10) {
      var root = _ref10.root;
      root.ref.overlayShadow.opacity = 0.25;
      root.ref.overlayError.opacity = 1;
    };

    var didCompleteProcessing = function didCompleteProcessing(_ref11) {
      var root = _ref11.root;
      root.ref.overlayShadow.opacity = 0.25;
      root.ref.overlaySuccess.opacity = 1;
    };

    /**
     * Constructor
     */
    var create = function create(_ref12) {
      var root = _ref12.root;

      // image view
      root.ref.images = [];

      // the preview image data (we need this to filter the image)
      root.ref.imageData = null;

      // image bin
      root.ref.imageViewBin = [];

      // image overlays
      root.ref.overlayShadow = root.appendChildView(
        root.createChildView(OverlayView, {
          opacity: 0,
          status: 'idle'
        })
      );

      root.ref.overlaySuccess = root.appendChildView(
        root.createChildView(OverlayView, {
          opacity: 0,
          status: 'success'
        })
      );

      root.ref.overlayError = root.appendChildView(
        root.createChildView(OverlayView, {
          opacity: 0,
          status: 'failure'
        })
      );
    };

    return _.utils.createView({
      name: 'image-preview-wrapper',
      create: create,
      styles: ['height'],

      apis: ['height'],

      destroy: function destroy(_ref13) {
        var root = _ref13.root;
        // we resize the image so memory on iOS 12 is released more quickly (it seems)
        root.ref.images.forEach(function(imageView) {
          imageView.image.width = 1;
          imageView.image.height = 1;
        });
      },
      write: _.utils.createRoute(
        {
          // image preview stated
          DID_IMAGE_PREVIEW_DRAW: didDrawPreview,
          DID_IMAGE_PREVIEW_CONTAINER_CREATE: didCreatePreviewContainer,
          DID_FINISH_CALCULATE_PREVIEWSIZE: drawPreview,
          DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata,

          // file states
          DID_THROW_ITEM_LOAD_ERROR: didThrowError,
          DID_THROW_ITEM_PROCESSING_ERROR: didThrowError,
          DID_THROW_ITEM_INVALID: didThrowError,
          DID_COMPLETE_ITEM_PROCESSING: didCompleteProcessing,
          DID_START_ITEM_PROCESSING: restoreOverlay,
          DID_REVERT_ITEM_PROCESSING: restoreOverlay
        },
        function(_ref14) {
          var root = _ref14.root;

          // views on death row
          var viewsToRemove = root.ref.imageViewBin.filter(function(imageView) {
            return imageView.opacity === 0;
          });

          // views to retain
          root.ref.imageViewBin = root.ref.imageViewBin.filter(function(
            imageView
          ) {
            return imageView.opacity > 0;
          });

          // remove these views
          viewsToRemove.forEach(function(imageView) {
            return removeImageView(root, imageView);
          });
          viewsToRemove.length = 0;
        }
      )
    });
  };

  /**
   * Image Preview Plugin
   */

  var plugin = function plugin(fpAPI) {
    var addFilter = fpAPI.addFilter,
      utils = fpAPI.utils;
    var Type = utils.Type,
      createRoute = utils.createRoute,
      isFile = utils.isFile;

    // imagePreviewView
    var imagePreviewView = createImageWrapperView(fpAPI);

    // called for each view that is created right after the 'create' method
    addFilter('CREATE_VIEW', function(viewAPI) {
      // get reference to created view
      var is = viewAPI.is,
        view = viewAPI.view,
        query = viewAPI.query;

      // only hook up to item view and only if is enabled for this cropper
      if (!is('file') || !query('GET_ALLOW_IMAGE_PREVIEW')) {
        return;
      }

      // create the image preview plugin, but only do so if the item is an image
      var didLoadItem = function didLoadItem(_ref) {
        var root = _ref.root,
          props = _ref.props;
        var id = props.id;
        var item = query('GET_ITEM', id);

        // item could theoretically have been removed in the mean time
        if (!item || !isFile(item.file) || item.archived) return;

        // get the file object
        var file = item.file;

        // exit if this is not an image
        if (!isPreviewableImage(file)) return;

        // exit if image size is too high and no createImageBitmap support
        // this would simply bring the browser to its knees and that is not what we want
        var supportsCreateImageBitmap = 'createImageBitmap' in (window || {});
        var maxPreviewFileSize = query('GET_IMAGE_PREVIEW_MAX_FILE_SIZE');
        if (
          !supportsCreateImageBitmap &&
          maxPreviewFileSize &&
          file.size > maxPreviewFileSize
        )
          return;

        // set preview view
        root.ref.imagePreview = view.appendChildView(
          view.createChildView(imagePreviewView, { id: id })
        );

        // update height if is fixed
        var fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        if (fixedPreviewHeight) {
          root.dispatch('DID_UPDATE_PANEL_HEIGHT', {
            id: item.id,
            height: fixedPreviewHeight
          });
        }

        // now ready
        var queue =
          !supportsCreateImageBitmap &&
          file.size > query('GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE');
        root.dispatch('DID_IMAGE_PREVIEW_CONTAINER_CREATE', { id: id }, queue);
      };

      var rescaleItem = function rescaleItem(root, props) {
        if (!root.ref.imagePreview) return;
        var id = props.id;

        // get item
        var item = root.query('GET_ITEM', { id: id });
        if (!item) return;

        // if is fixed height or panel has aspect ratio, exit here, height has already been defined
        var panelAspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
        var itemPanelAspectRatio = root.query('GET_ITEM_PANEL_ASPECT_RATIO');
        var fixedHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        if (panelAspectRatio || itemPanelAspectRatio || fixedHeight) return;

        // no data!
        var _root$ref = root.ref,
          imageWidth = _root$ref.imageWidth,
          imageHeight = _root$ref.imageHeight;
        if (!imageWidth || !imageHeight) return;

        // get height min and max
        var minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
        var maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

        // orientation info
        var exif = item.getMetadata('exif') || {};
        var orientation = exif.orientation || -1;

        // get width and height from action, and swap of orientation is incorrect
        if (orientation >= 5 && orientation <= 8) {
          var _ref2 = [imageHeight, imageWidth];
          imageWidth = _ref2[0];
          imageHeight = _ref2[1];
        }

        // scale up width and height when we're dealing with an SVG
        if (!isBitmap(item.file) || root.query('GET_IMAGE_PREVIEW_UPSCALE')) {
          var scalar = 2048 / imageWidth;
          imageWidth *= scalar;
          imageHeight *= scalar;
        }

        // image aspect ratio
        var imageAspectRatio = imageHeight / imageWidth;

        // we need the item to get to the crop size
        var previewAspectRatio =
          (item.getMetadata('crop') || {}).aspectRatio || imageAspectRatio;

        // preview height range
        var previewHeightMax = Math.max(
          minPreviewHeight,
          Math.min(imageHeight, maxPreviewHeight)
        );
        var itemWidth = root.rect.element.width;
        var previewHeight = Math.min(
          itemWidth * previewAspectRatio,
          previewHeightMax
        );

        // request update to panel height
        root.dispatch('DID_UPDATE_PANEL_HEIGHT', {
          id: item.id,
          height: previewHeight
        });
      };

      var didResizeView = function didResizeView(_ref3) {
        var root = _ref3.root;
        // actions in next write operation
        root.ref.shouldRescale = true;
      };

      var didUpdateItemMetadata = function didUpdateItemMetadata(_ref4) {
        var root = _ref4.root,
          action = _ref4.action;

        if (action.change.key !== 'crop') return;

        // actions in next write operation
        root.ref.shouldRescale = true;
      };

      var didCalculatePreviewSize = function didCalculatePreviewSize(_ref5) {
        var root = _ref5.root,
          action = _ref5.action;

        // remember dimensions
        root.ref.imageWidth = action.width;
        root.ref.imageHeight = action.height;

        // actions in next write operation
        root.ref.shouldRescale = true;
        root.ref.shouldDrawPreview = true;

        // as image load could take a while and fire when draw loop is resting we need to give it a kick
        root.dispatch('KICK');
      };

      // start writing
      view.registerWriter(
        createRoute(
          {
            DID_RESIZE_ROOT: didResizeView,
            DID_STOP_RESIZE: didResizeView,
            DID_LOAD_ITEM: didLoadItem,
            DID_IMAGE_PREVIEW_CALCULATE_SIZE: didCalculatePreviewSize,
            DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata
          },
          function(_ref6) {
            var root = _ref6.root,
              props = _ref6.props;

            // don't do anything while hidden
            if (root.rect.element.hidden) return;

            // resize the item panel
            if (root.ref.shouldRescale) {
              rescaleItem(root, props);
              root.ref.shouldRescale = false;
            }

            if (root.ref.shouldDrawPreview) {
              // queue till next frame so we're sure the height has been applied this forces the draw image call inside the wrapper view to use the correct height
              requestAnimationFrame(function() {
                root.dispatch('DID_FINISH_CALCULATE_PREVIEWSIZE', {
                  id: props.id
                });
              });
              root.ref.shouldDrawPreview = false;
            }
          }
        )
      );
    });

    // expose plugin
    return {
      options: {
        // Enable or disable image preview
        allowImagePreview: [true, Type.BOOLEAN],

        // Fixed preview height
        imagePreviewHeight: [null, Type.INT],

        // Min image height
        imagePreviewMinHeight: [44, Type.INT],

        // Max image height
        imagePreviewMaxHeight: [256, Type.INT],

        // Max size of preview file for when createImageBitmap is not supported
        imagePreviewMaxFileSize: [null, Type.INT],

        // The amount of extra pixels added to the image preview to allow comfortable zooming
        imagePreviewZoomFactor: [2, Type.INT],

        // Should we upscale small images to fit the max bounding box of the preview area
        imagePreviewUpscale: [false, Type.BOOLEAN],

        // Max size of preview file that we allow to try to instant preview if createImageBitmap is not supported, else image is queued for loading
        imagePreviewMaxInstantPreviewFileSize: [1000000, Type.INT],

        // Style of the transparancy indicator used behind images
        imagePreviewTransparencyIndicator: [null, Type.STRING],

        // Enables or disables reading average image color
        imagePreviewCalculateAverageImageColor: [false, Type.BOOLEAN]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "x6aL":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * FilePondPluginImageCrop 2.0.3
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : undefined;
})(this, function() {
  'use strict';

  var isImage = function isImage(file) {
    return /^image/.test(file.type);
  };

  /**
   * Image Auto Crop Plugin
   */
  var plugin = function plugin(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;
    var Type = utils.Type,
      isFile = utils.isFile,
      getNumericAspectRatioFromString = utils.getNumericAspectRatioFromString;

    // tests if crop is allowed on this item
    var allowCrop = function allowCrop(item, query) {
      return !(!isImage(item.file) || !query('GET_ALLOW_IMAGE_CROP'));
    };

    var isObject = function isObject(value) {
      return typeof value === 'object';
    };

    var isNumber = function isNumber(value) {
      return typeof value === 'number';
    };

    var updateCrop = function updateCrop(item, obj) {
      return item.setMetadata(
        'crop',
        Object.assign({}, item.getMetadata('crop'), obj)
      );
    };

    // extend item methods
    addFilter('DID_CREATE_ITEM', function(item, _ref2) {
      var query = _ref2.query;

      item.extend('setImageCrop', function(crop) {
        if (!allowCrop(item, query) || !isObject(center)) return;
        item.setMetadata('crop', crop);
        return crop;
      });

      item.extend('setImageCropCenter', function(center) {
        if (!allowCrop(item, query) || !isObject(center)) return;
        return updateCrop(item, { center: center });
      });

      item.extend('setImageCropZoom', function(zoom) {
        if (!allowCrop(item, query) || !isNumber(zoom)) return;
        return updateCrop(item, { zoom: Math.max(1, zoom) });
      });

      item.extend('setImageCropRotation', function(rotation) {
        if (!allowCrop(item, query) || !isNumber(rotation)) return;
        return updateCrop(item, { rotation: rotation });
      });

      item.extend('setImageCropFlip', function(flip) {
        if (!allowCrop(item, query) || !isObject(flip)) return;
        return updateCrop(item, { flip: flip });
      });

      item.extend('setImageCropAspectRatio', function(newAspectRatio) {
        if (!allowCrop(item, query) || typeof newAspectRatio === 'undefined')
          return;

        var currentCrop = item.getMetadata('crop');

        var aspectRatio = getNumericAspectRatioFromString(newAspectRatio);

        var newCrop = {
          center: {
            x: 0.5,
            y: 0.5
          },

          flip: currentCrop
            ? Object.assign({}, currentCrop.flip)
            : {
                horizontal: false,
                vertical: false
              },

          rotation: 0,
          zoom: 1,
          aspectRatio: aspectRatio
        };

        item.setMetadata('crop', newCrop);

        return newCrop;
      });
    });

    // subscribe to file transformations
    addFilter('DID_LOAD_ITEM', function(item, _ref3) {
      var query = _ref3.query;
      return new Promise(function(resolve, reject) {
        // get file reference
        var file = item.file;

        // if this is not an image we do not have any business cropping it and we'll continue with the unaltered dataset
        if (!isFile(file) || !isImage(file) || !query('GET_ALLOW_IMAGE_CROP')) {
          return resolve(item);
        }

        // already has crop metadata set?
        var crop = item.getMetadata('crop');
        if (crop) {
          return resolve(item);
        }

        // get the required aspect ratio and exit if it's not set
        var humanAspectRatio = query('GET_IMAGE_CROP_ASPECT_RATIO');

        // set default crop rectangle
        item.setMetadata('crop', {
          center: {
            x: 0.5,
            y: 0.5
          },

          flip: {
            horizontal: false,
            vertical: false
          },

          rotation: 0,
          zoom: 1,
          aspectRatio: humanAspectRatio
            ? getNumericAspectRatioFromString(humanAspectRatio)
            : null
        });

        // we done!
        resolve(item);
      });
    });

    // Expose plugin options
    return {
      options: {
        // enable or disable image cropping
        allowImageCrop: [true, Type.BOOLEAN],

        // the aspect ratio of the crop ('1:1', '16:9', etc)
        imageCropAspectRatio: [null, Type.STRING]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ })

}]);
//# sourceMappingURL=15-es2015.cb12096873cacf5f2432.js.map