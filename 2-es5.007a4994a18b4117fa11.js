(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "+fL/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewportService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fQLH");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z5yO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/gsZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LoAr");



var ViewportService = /** @class */ /*@__PURE__*/ (function () {
    function ViewportService() {
        this.options = {
            rootMargin: '0px 0px 0px 0px',
            threshold: [0.5],
        };
        this.callback$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();
        this.observer = new IntersectionObserver(this.handler.bind(this), this.options);
    }
    ViewportService.prototype.observe = function (element) {
        var _this = this;
        this.observer.observe(element);
        return this.callback$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[/* filter */ "a"])(function (entry) { return entry.target === element; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[/* finalize */ "a"])(function () { return _this.observer.unobserve(element); }));
    };
    ViewportService.prototype.handler = function (entries) {
        var _this = this;
        entries.forEach(function (entry) { return _this.callback$.next(entry); });
    };
    ViewportService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵdefineInjectable */ "dc"]({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
    return ViewportService;
}());




/***/ }),

/***/ "+uLt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var QueueAction_1 = /*@__PURE__*/ __webpack_require__("UPWm");
var QueueScheduler_1 = /*@__PURE__*/ __webpack_require__("K7a0");
exports.queue = /*@__PURE__*/ new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);



/***/ }),

/***/ "12aA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapTo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DwTn");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
var MapToOperator = /*@__PURE__*/ /*@__PURE__*/ (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
var MapToSubscriber = /*@__PURE__*/ /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__[/* Subscriber */ "a"]));





/***/ }),

/***/ "1P7/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatCardModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_MatCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return View_MatCard_0; });
/* unused harmony export View_MatCard_Host_0 */
/* unused harmony export MatCardNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_MatCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return View_MatCardHeader_0; });
/* unused harmony export View_MatCardHeader_Host_0 */
/* unused harmony export MatCardHeaderNgFactory */
/* unused harmony export RenderType_MatCardTitleGroup */
/* unused harmony export View_MatCardTitleGroup_0 */
/* unused harmony export View_MatCardTitleGroup_Host_0 */
/* unused harmony export MatCardTitleGroupNgFactory */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XIB+");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C7Lb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LYzL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SeAg");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z5FQ");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */






var MatCardModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardModule */ "g"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__[/* MatCommonModule */ "n"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__[/* MatCommonModule */ "n"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__[/* MATERIAL_SANITY_CHECKS */ "f"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__[/* HAMMER_LOADER */ "f"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardModule */ "g"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardModule */ "g"], [])]); });

var styles_MatCard = [".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"];
var RenderType_MatCard = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatCard, data: {} });

function View_MatCard_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 1)], null, null); }
function View_MatCard_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, View_MatCard_0, RenderType_MatCard)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCard */ "a"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__[/* ANIMATION_MODULE_TYPE */ "a"]]], null, null)], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); }); }
var MatCardNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-card", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCard */ "a"], View_MatCard_Host_0, {}, {}, ["*", "mat-card-footer"]);

var styles_MatCardHeader = [];
var RenderType_MatCardHeader = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatCardHeader, data: {} });

function View_MatCardHeader_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](1, 0, null, null, 1, "div", [["class", "mat-card-header-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 2)], null, null); }
function View_MatCardHeader_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, View_MatCardHeader_0, RenderType_MatCardHeader)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardHeader */ "e"], [], null, null)], null, null); }
var MatCardHeaderNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-card-header", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardHeader */ "e"], View_MatCardHeader_Host_0, {}, {}, ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"]);

var styles_MatCardTitleGroup = [];
var RenderType_MatCardTitleGroup = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatCardTitleGroup, data: {} });

function View_MatCardTitleGroup_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 2)], null, null); }
function View_MatCardTitleGroup_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, View_MatCardTitleGroup_0, RenderType_MatCardTitleGroup)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardTitleGroup */ "j"], [], null, null)], null, null); }
var MatCardTitleGroupNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-card-title-group", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[/* MatCardTitleGroup */ "j"], View_MatCardTitleGroup_Host_0, {}, {}, ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"]);




/***/ }),

/***/ "2oWW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export destroy$ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return untilDestroy; });
/* unused harmony export addDestroyObservableToComponent */
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HnWI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mhnT");


// create a symbol identify the observable I add to
// the component so it doesn't conflict with anything.
// I need this so I'm able to add the desired behaviour to the component.
var destroy$ = Symbol('destroy$');
/**
 * An operator that takes until destroy it takes a components this a parameter
 * returns a pipeable RxJS operator.
 */
var untilDestroy = function (component) {
    if (component[destroy$] === undefined) {
        // only hookup each component once.
        addDestroyObservableToComponent(component);
    }
    // pipe in the takeUntil destroy$ and return the source unaltered
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[/* takeUntil */ "a"])(component[destroy$]);
};
/**
 * @internal
 */
function addDestroyObservableToComponent(component) {
    component[destroy$] = new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (observer) {
        // keep track of the original destroy function,
        // the user might do something in there
        var orignalDestroy = component.ngOnDestroy;
        if (orignalDestroy == null) {
            // Angular does not support dynamic added destroy methods
            // so make sure there is one.
            throw new Error('untilDestroy operator needs the component to have an ngOnDestroy method');
        }
        // replace the ngOndestroy
        component.ngOnDestroy = function () {
            // fire off the destroy observable
            observer.next();
            // complete the observable
            observer.complete();
            // and at last, call the original destroy
            orignalDestroy.call(component);
        };
        // return cleanup function.
        return function (_) { return (component[destroy$] = undefined); };
    });
}



/***/ }),

/***/ "5kg2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MatMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAT_MENU_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _MatMenu; });
/* unused harmony export _MatMenuBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MatMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MatMenuTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAT_MENU_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAT_MENU_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _MatMenuDirectivesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MatMenuModule; });
/* unused harmony export matMenuAnimations */
/* unused harmony export fadeInItems */
/* unused harmony export transformMenu */
/* unused harmony export MatMenuContent */
/* unused harmony export ɵa23 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY; });
/* unused harmony export ɵc23 */
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qpXW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("abkR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fQLH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LR82");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gQst");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pN2L");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("c1xn");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("D57K");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("0xYh");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LYzL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("HfXx");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("rh80");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("W/Ou");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("AouM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("G2Mx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("z5yO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("mhnT");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("pday");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("eXL1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("WV+C");
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
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * \@docs-private
 * @type {?}
 */
var matMenuAnimations = {
    /**
     * This animation controls the menu panel's entry and exit from the page.
     *
     * When the menu panel is added to the DOM, it scales in and fades in its border.
     *
     * When the menu panel is removed from the DOM, it simply fades out after a brief
     * delay to display the ripple.
     */
    transformMenu: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* trigger */ "o"])('transformMenu', [
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* state */ "l"])('void', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* style */ "m"])({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* transition */ "n"])('void => enter', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* group */ "g"])([
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* query */ "i"])('.mat-menu-content, .mat-mdc-menu-content', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* animate */ "e"])('100ms linear', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* style */ "m"])({
                opacity: 1
            }))),
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* animate */ "e"])('120ms cubic-bezier(0, 0, 0.2, 1)', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* style */ "m"])({ transform: 'scale(1)' })),
        ])),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* transition */ "n"])('* => void', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* animate */ "e"])('100ms 25ms linear', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* style */ "m"])({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and content of the menu panel
     * after its containing element is scaled in.
     */
    fadeInItems: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* trigger */ "o"])('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* state */ "l"])('showing', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* style */ "m"])({ opacity: 1 })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* transition */ "n"])('void => *', [
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* style */ "m"])({ opacity: 0 }),
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__[/* animate */ "e"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var transformMenu = matMenuAnimations.transformMenu;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
var MatMenuContent = /** @class */ /*@__PURE__*/ (function () {
    function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        /**
         * Emits when the menu content has been attached.
         */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    MatMenuContent.prototype.attach = /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
        function (context) {
            if (context === void 0) {
                context = {};
            }
            if (!this._portal) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__[/* TemplatePortal */ "h"](this._template, this._viewContainerRef);
            }
            this.detach();
            if (!this._outlet) {
                this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__[/* DomPortalOutlet */ "e"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
            }
            /** @type {?} */
            var element = this._template.elementRef.nativeElement;
            // Because we support opening the same menu from different triggers (which in turn have their
            // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
            // risk it staying attached to a pane that's no longer in the DOM.
            ( /** @type {?} */(element.parentNode)).insertBefore(this._outlet.outletElement, element);
            this._portal.attach(this._outlet, context);
            this._attached.next();
        };
    /**
     * Detaches the content.
     * @docs-private
     */
    /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    MatMenuContent.prototype.detach = /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
        function () {
            if (this._portal.isAttached) {
                this._portal.detach();
            }
        };
    /**
     * @return {?}
     */
    MatMenuContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            if (this._outlet) {
                this._outlet.dispose();
            }
        };
    return MatMenuContent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * \@docs-private
 * @return {?}
 */
function throwMatMenuMissingError() {
    throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionX() {
    throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionY() {
    throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to provide the parent menu to menu-specific components.
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_PANEL = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* InjectionToken */ "u"]('MAT_MENU_PANEL');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatMenuItem.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatMenuItem.
/**
 * \@docs-private
 */
MatMenuItemBase = /** @class */ /*@__PURE__*/ (function () {
    function MatMenuItemBase() {
    }
    return MatMenuItemBase;
}());
/** @type {?} */
var _MatMenuItemMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__[/* mixinDisableRipple */ "F"])(/*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__[/* mixinDisabled */ "G"])(MatMenuItemBase));
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
var MatMenuItem = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(MatMenuItem, _super);
    function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this = 
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._parentMenu = _parentMenu;
        /**
         * ARIA role for the menu item.
         */
        _this.role = 'menuitem';
        /**
         * Stream that emits when the menu item is hovered.
         */
        _this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
        /**
         * Whether the menu item is highlighted.
         */
        _this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */
        _this._triggersSubmenu = false;
        if (_focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            _focusMonitor.monitor(_this._elementRef, false);
        }
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_this);
        }
        _this._document = document;
        return _this;
    }
    /** Focuses the menu item. */
    /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    MatMenuItem.prototype.focus = /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
        function (origin) {
            if (origin === void 0) {
                origin = 'program';
            }
            if (this._focusMonitor) {
                this._focusMonitor.focusVia(this._getHostElement(), origin);
            }
            else {
                this._getHostElement().focus();
            }
        };
    /**
     * @return {?}
     */
    MatMenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            if (this._focusMonitor) {
                this._focusMonitor.stopMonitoring(this._elementRef);
            }
            if (this._parentMenu && this._parentMenu.removeItem) {
                this._parentMenu.removeItem(this);
            }
            this._hovered.complete();
        };
    /** Used to set the `tabindex`. */
    /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    MatMenuItem.prototype._getTabIndex = /**
     * Used to set the `tabindex`.
     * @return {?}
     */
        function () {
            return this.disabled ? '-1' : '0';
        };
    /** Returns the host DOM element. */
    /**
     * Returns the host DOM element.
     * @return {?}
     */
    MatMenuItem.prototype._getHostElement = /**
     * Returns the host DOM element.
     * @return {?}
     */
        function () {
            return this._elementRef.nativeElement;
        };
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatMenuItem.prototype._checkDisabled = /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritte.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete
        function (event) {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * Emits to the hover stream.
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritte.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatMenuItem.prototype._handleMouseEnter = /**
     * Emits to the hover stream.
     * @return {?}
     */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritte.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete
        function () {
            this._hovered.next(this);
        };
    /** Gets the label to be used when determining whether the option should be focused. */
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MatMenuItem.prototype.getLabel = /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
        function () {
            /** @type {?} */
            var element = this._elementRef.nativeElement;
            /** @type {?} */
            var textNodeType = this._document ? this._document.TEXT_NODE : 3;
            /** @type {?} */
            var output = '';
            if (element.childNodes) {
                /** @type {?} */
                var length_1 = element.childNodes.length;
                // Go through all the top-level text nodes and extract their text.
                // We skip anything that's not a text node to prevent the text from
                // being thrown off by something like an icon.
                for (var i = 0; i < length_1; i++) {
                    if (element.childNodes[i].nodeType === textNodeType) {
                        output += element.childNodes[i].textContent;
                    }
                }
            }
            return output.trim();
        };
    return MatMenuItem;
}(_MatMenuItemMixinBase));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for `mat-menu`.
 * @type {?}
 */
var MAT_MENU_DEFAULT_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* InjectionToken */ "u"]('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/**
 * Start elevation for the menu panel.
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_BASE_ELEVATION = 4;
/**
 * Base class with all of the `MatMenu` functionality.
 */
// tslint:disable-next-line:class-name
var _MatMenuBase = /** @class */ /*@__PURE__*/ (function () {
    function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Only the direct descendant menu items.
         */
        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* QueryList */ "J"]();
        /**
         * Subscription to tab events on the menu panel
         */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__[/* Subscription */ "a"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */
        this._classList = {};
        /**
         * Current state of the panel animation.
         */
        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
        /**
         * Class to be added to the backdrop element.
         */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* EventEmitter */ "p"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */
        this.close = this.closed;
    }
    Object.defineProperty(_MatMenuBase.prototype, "xPosition", {
        /** Position of the menu in the X axis. */
        get: /**
         * Position of the menu in the X axis.
         * @return {?}
         */ function () { return this._xPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            if (value !== 'before' && value !== 'after') {
                throwMatMenuInvalidPositionX();
            }
            this._xPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "yPosition", {
        /** Position of the menu in the Y axis. */
        get: /**
         * Position of the menu in the Y axis.
         * @return {?}
         */ function () { return this._yPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            if (value !== 'above' && value !== 'below') {
                throwMatMenuInvalidPositionY();
            }
            this._yPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "overlapTrigger", {
        /** Whether the menu should overlap its trigger. */
        get: /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */ function () { return this._overlapTrigger; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__[/* coerceBooleanProperty */ "c"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "hasBackdrop", {
        /** Whether the menu has a backdrop. */
        get: /**
         * Whether the menu has a backdrop.
         * @return {?}
         */ function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__[/* coerceBooleanProperty */ "c"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "panelClass", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */ function (classes) {
            var _this = this;
            /** @type {?} */
            var previousPanelClass = this._previousPanelClass;
            if (previousPanelClass && previousPanelClass.length) {
                previousPanelClass.split(' ').forEach(( /**
                 * @param {?} className
                 * @return {?}
                 */function (className) {
                    _this._classList[className] = false;
                }));
            }
            this._previousPanelClass = classes;
            if (classes && classes.length) {
                classes.split(' ').forEach(( /**
                 * @param {?} className
                 * @return {?}
                 */function (className) {
                    _this._classList[className] = true;
                }));
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatMenuBase.prototype, "classList", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * @breaking-change 8.0.0
         */
        get: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */ function () { return this.panelClass; },
        set: /**
         * @param {?} classes
         * @return {?}
         */ function (classes) { this.panelClass = classes; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    _MatMenuBase.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            this.setPositionClasses();
        };
    /**
     * @return {?}
     */
    _MatMenuBase.prototype.ngAfterContentInit = /**
     * @return {?}
     */
        function () {
            var _this = this;
            this._updateDirectDescendants();
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__[/* FocusKeyManager */ "g"](this._directDescendantItems).withWrap().withTypeAhead();
            this._tabSubscription = this._keyManager.tabOut.subscribe(( /**
             * @return {?}
             */function () { return _this.closed.emit('tab'); }));
        };
    /**
     * @return {?}
     */
    _MatMenuBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            this._directDescendantItems.destroy();
            this._tabSubscription.unsubscribe();
            this.closed.complete();
        };
    /** Stream that emits whenever the hovered menu item changes. */
    /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    _MatMenuBase.prototype._hovered = /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
        function () {
            return this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__[/* startWith */ "a"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__[/* switchMap */ "a"])(( /**
             * @param {?} items
             * @return {?}
             */function (items) {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__[/* merge */ "a"].apply(void 0, items.map(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item._hovered; })));
            })));
        };
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    /*
       * Registers a menu item with the menu.
       * @docs-private
       * @deprecated No longer being used. To be removed.
       * @breaking-change 9.0.0
       */
    /**
     * @param {?} _item
     * @return {?}
     */
    _MatMenuBase.prototype.addItem = /*
       * Registers a menu item with the menu.
       * @docs-private
       * @deprecated No longer being used. To be removed.
       * @breaking-change 9.0.0
       */
        /**
         * @param {?} _item
         * @return {?}
         */
        function (_item) { };
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    /**
     * Removes an item from the menu.
     * \@docs-private
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 9.0.0
     * @param {?} _item
     * @return {?}
     */
    _MatMenuBase.prototype.removeItem = /**
     * Removes an item from the menu.
     * \@docs-private
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 9.0.0
     * @param {?} _item
     * @return {?}
     */
        function (_item) { };
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    _MatMenuBase.prototype._handleKeydown = /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
        function (event) {
            /** @type {?} */
            var keyCode = event.keyCode;
            /** @type {?} */
            var manager = this._keyManager;
            switch (keyCode) {
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* ESCAPE */ "g"]:
                    if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* hasModifierKey */ "s"])(event)) {
                        event.preventDefault();
                        this.closed.emit('keydown');
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* LEFT_ARROW */ "i"]:
                    if (this.parentMenu && this.direction === 'ltr') {
                        this.closed.emit('keydown');
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* RIGHT_ARROW */ "m"]:
                    if (this.parentMenu && this.direction === 'rtl') {
                        this.closed.emit('keydown');
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* HOME */ "h"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* END */ "e"]:
                    if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* hasModifierKey */ "s"])(event)) {
                        keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* HOME */ "h"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                        event.preventDefault();
                    }
                    break;
                default:
                    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* UP_ARROW */ "p"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* DOWN_ARROW */ "d"]) {
                        manager.setFocusOrigin('keyboard');
                    }
                    manager.onKeydown(event);
            }
        };
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    _MatMenuBase.prototype.focusFirstItem = /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
        function (origin) {
            var _this = this;
            if (origin === void 0) {
                origin = 'program';
            }
            // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
            if (this.lazyContent) {
                this._ngZone.onStable.asObservable()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__[/* take */ "a"])(1))
                    .subscribe(( /**
             * @return {?}
             */function () { return _this._keyManager.setFocusOrigin(origin).setFirstItemActive(); }));
            }
            else {
                this._keyManager.setFocusOrigin(origin).setFirstItemActive();
            }
        };
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    _MatMenuBase.prototype.resetActiveItem = /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
        function () {
            this._keyManager.setActiveItem(-1);
        };
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    _MatMenuBase.prototype.setElevation = /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
        function (depth) {
            // The elevation starts at the base and increases by one for each level.
            /** @type {?} */
            var newElevation = "mat-elevation-z" + (MAT_MENU_BASE_ELEVATION + depth);
            /** @type {?} */
            var customElevation = Object.keys(this._classList).find(( /**
             * @param {?} c
             * @return {?}
             */function (c) { return c.startsWith('mat-elevation-z'); }));
            if (!customElevation || customElevation === this._previousElevation) {
                if (this._previousElevation) {
                    this._classList[this._previousElevation] = false;
                }
                this._classList[newElevation] = true;
                this._previousElevation = newElevation;
            }
        };
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    _MatMenuBase.prototype.setPositionClasses = /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
        function (posX, posY) {
            if (posX === void 0) {
                posX = this.xPosition;
            }
            if (posY === void 0) {
                posY = this.yPosition;
            }
            /** @type {?} */
            var classes = this._classList;
            classes['mat-menu-before'] = posX === 'before';
            classes['mat-menu-after'] = posX === 'after';
            classes['mat-menu-above'] = posY === 'above';
            classes['mat-menu-below'] = posY === 'below';
        };
    /** Starts the enter animation. */
    /**
     * Starts the enter animation.
     * @return {?}
     */
    _MatMenuBase.prototype._startAnimation = /**
     * Starts the enter animation.
     * @return {?}
     */
        function () {
            // @breaking-change 8.0.0 Combine with _resetAnimation.
            this._panelAnimationState = 'enter';
        };
    /** Resets the panel animation to its initial state. */
    /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    _MatMenuBase.prototype._resetAnimation = /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
        function () {
            // @breaking-change 8.0.0 Combine with _startAnimation.
            this._panelAnimationState = 'void';
        };
    /** Callback that is invoked when the panel animation completes. */
    /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    _MatMenuBase.prototype._onAnimationDone = /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
        function (event) {
            this._animationDone.next(event);
            this._isAnimating = false;
        };
    /**
     * @param {?} event
     * @return {?}
     */
    _MatMenuBase.prototype._onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
        function (event) {
            this._isAnimating = true;
            // Scroll the content element to the top as soon as the animation starts. This is necessary,
            // because we move focus to the first item while it's still being animated, which can throw
            // the browser off when it determines the scroll position. Alternatively we can move focus
            // when the animation is done, however moving focus asynchronously will interrupt screen
            // readers which are in the process of reading out the menu already. We take the `element`
            // from the `event` since we can't use a `ViewChild` to access the pane.
            if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
                event.element.scrollTop = 0;
            }
        };
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     * @private
     * @return {?}
     */
    _MatMenuBase.prototype._updateDirectDescendants = /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     * @private
     * @return {?}
     */
        function () {
            var _this = this;
            this._allItems.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__[/* startWith */ "a"])(this._allItems))
                .subscribe(( /**
         * @param {?} items
         * @return {?}
         */function (items) {
                _this._directDescendantItems.reset(items.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item._parentMenu === _this; })));
                _this._directDescendantItems.notifyOnChanges();
            }));
        };
    return _MatMenuBase;
}());
/**
 * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
 */
var /**
 * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
 */ MatMenu = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(MatMenu, _super);
    function MatMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MatMenu;
}(_MatMenuBase));
// Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
// extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
// to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
// queries and DI to work correctly, while still not referencing the actual menu class.
// Class responsibility is split up as follows:
// * _MatMenuBase - provides all the functionality without any of the Angular metadata.
// * MatMenu - keeps the same name symbol name as the current menu and
// is used as a provider for DI and query purposes.
// * _MatMenu - the actual menu component implementation with the Angular metadata that should
// be tree shaken away for MDC.
/**
 * \@docs-public MatMenu
 */
var _MatMenu = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(_MatMenu, _super);
    function _MatMenu(elementRef, ngZone, defaultOptions) {
        return _super.call(this, elementRef, ngZone, defaultOptions) || this;
    }
    return _MatMenu;
}(MatMenu));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that determines the scroll handling while the menu is open.
 * @type {?}
 */
var MAT_MENU_SCROLL_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* InjectionToken */ "u"]('mat-menu-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return ( /**
     * @return {?}
     */function () { return overlay.scrollStrategies.reposition(); });
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__[/* Overlay */ "c"]],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/**
 * Default top padding of the menu panel.
 * @type {?}
 */
var MENU_PANEL_TOP_PADDING = 8;
/**
 * Options for binding a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = /*@__PURE__*/ Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__[/* normalizePassiveListenerOptions */ "f"])({ passive: true });
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/**
 * This directive is intended to be used in conjunction with an mat-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
var MatMenuTrigger = /** @class */ /*@__PURE__*/ (function () {
    function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        var _this = this;
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__[/* Subscription */ "a"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__[/* Subscription */ "a"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__[/* Subscription */ "a"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = ( /**
         * @return {?}
         */function () { return _this._openedBy = 'touch'; });
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = null;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */
        this.restoreFocus = true;
        /**
         * Event emitted when the associated menu is opened.
         */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* EventEmitter */ "p"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* EventEmitter */ "p"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuClose = this.menuClosed;
        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatMenuTrigger.prototype, "_deprecatedMatMenuTriggerFor", {
        /**
         * @deprecated
         * @breaking-change 8.0.0
         */
        get: /**
         * @deprecated
         * \@breaking-change 8.0.0
         * @return {?}
         */ function () { return this.menu; },
        set: /**
         * @param {?} v
         * @return {?}
         */ function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "menu", {
        /** References the menu instance that the trigger is associated with. */
        get: /**
         * References the menu instance that the trigger is associated with.
         * @return {?}
         */ function () { return this._menu; },
        set: /**
         * @param {?} menu
         * @return {?}
         */ function (menu) {
            var _this = this;
            if (menu === this._menu) {
                return;
            }
            this._menu = menu;
            this._menuCloseSubscription.unsubscribe();
            if (menu) {
                this._menuCloseSubscription = menu.close.asObservable().subscribe(( /**
                 * @param {?} reason
                 * @return {?}
                 */function (reason) {
                    _this._destroyMenu();
                    // If a click closed the menu, we should close the entire chain of nested menus.
                    if ((reason === 'click' || reason === 'tab') && _this._parentMenu) {
                        _this._parentMenu.closed.emit(reason);
                    }
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngAfterContentInit = /**
     * @return {?}
     */
        function () {
            this._checkMenu();
            this._handleHover();
        };
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            if (this._overlayRef) {
                this._overlayRef.dispose();
                this._overlayRef = null;
            }
            this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
            this._menuCloseSubscription.unsubscribe();
            this._closingActionsSubscription.unsubscribe();
            this._hoverSubscription.unsubscribe();
        };
    Object.defineProperty(MatMenuTrigger.prototype, "menuOpen", {
        /** Whether the menu is open. */
        get: /**
         * Whether the menu is open.
         * @return {?}
         */ function () {
            return this._menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "dir", {
        /** The text direction of the containing app. */
        get: /**
         * The text direction of the containing app.
         * @return {?}
         */ function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the menu triggers a sub-menu or a top-level one. */
    /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    MatMenuTrigger.prototype.triggersSubmenu = /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
        function () {
            return !!(this._menuItemInstance && this._parentMenu);
        };
    /** Toggles the menu between the open and closed states. */
    /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    MatMenuTrigger.prototype.toggleMenu = /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
        function () {
            return this._menuOpen ? this.closeMenu() : this.openMenu();
        };
    /** Opens the menu. */
    /**
     * Opens the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.openMenu = /**
     * Opens the menu.
     * @return {?}
     */
        function () {
            var _this = this;
            if (this._menuOpen) {
                return;
            }
            this._checkMenu();
            /** @type {?} */
            var overlayRef = this._createOverlay();
            /** @type {?} */
            var overlayConfig = overlayRef.getConfig();
            this._setPosition(( /** @type {?} */(overlayConfig.positionStrategy)));
            overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() :
                this.menu.hasBackdrop;
            overlayRef.attach(this._getPortal());
            if (this.menu.lazyContent) {
                this.menu.lazyContent.attach(this.menuData);
            }
            this._closingActionsSubscription = this._menuClosingActions().subscribe(( /**
             * @return {?}
             */function () { return _this.closeMenu(); }));
            this._initMenu();
            if (this.menu instanceof MatMenu) {
                this.menu._startAnimation();
            }
        };
    /** Closes the menu. */
    /**
     * Closes the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.closeMenu = /**
     * Closes the menu.
     * @return {?}
     */
        function () {
            this.menu.close.emit();
        };
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    MatMenuTrigger.prototype.focus = /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
        function (origin) {
            if (origin === void 0) {
                origin = 'program';
            }
            if (this._focusMonitor) {
                this._focusMonitor.focusVia(this._element, origin);
            }
            else {
                this._element.nativeElement.focus();
            }
        };
    /** Closes the menu and does the necessary cleanup. */
    /**
     * Closes the menu and does the necessary cleanup.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._destroyMenu = /**
     * Closes the menu and does the necessary cleanup.
     * @private
     * @return {?}
     */
        function () {
            var _this = this;
            if (!this._overlayRef || !this.menuOpen) {
                return;
            }
            /** @type {?} */
            var menu = this.menu;
            this._closingActionsSubscription.unsubscribe();
            this._overlayRef.detach();
            if (menu instanceof MatMenu) {
                menu._resetAnimation();
                if (menu.lazyContent) {
                    // Wait for the exit animation to finish before detaching the content.
                    menu._animationDone
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__[/* filter */ "a"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return event.toState === 'void'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__[/* take */ "a"])(1), 
                    // Interrupt if the content got re-attached.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__[/* takeUntil */ "a"])(menu.lazyContent._attached))
                        .subscribe({
                        next: ( /**
                         * @return {?}
                         */function () { return ( /** @type {?} */(menu.lazyContent)).detach(); }),
                        // No matter whether the content got re-attached, reset the menu.
                        complete: ( /**
                         * @return {?}
                         */function () { return _this._resetMenu(); })
                    });
                }
                else {
                    this._resetMenu();
                }
            }
            else {
                this._resetMenu();
                if (menu.lazyContent) {
                    menu.lazyContent.detach();
                }
            }
        };
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._initMenu = /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
        function () {
            this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
            this.menu.direction = this.dir;
            this._setMenuElevation();
            this._setIsMenuOpen(true);
            this.menu.focusFirstItem(this._openedBy || 'program');
        };
    /** Updates the menu elevation based on the amount of parent menus that it has. */
    /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._setMenuElevation = /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @private
     * @return {?}
     */
        function () {
            if (this.menu.setElevation) {
                /** @type {?} */
                var depth = 0;
                /** @type {?} */
                var parentMenu = this.menu.parentMenu;
                while (parentMenu) {
                    depth++;
                    parentMenu = parentMenu.parentMenu;
                }
                this.menu.setElevation(depth);
            }
        };
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     */
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._resetMenu = /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
        function () {
            this._setIsMenuOpen(false);
            // We should reset focus if the user is navigating using a keyboard or
            // if we have a top-level trigger which might cause focus to be lost
            // when clicking on the backdrop.
            if (this.restoreFocus) {
                if (!this._openedBy) {
                    // Note that the focus style will show up both for `program` and
                    // `keyboard` so we don't have to specify which one it is.
                    this.focus();
                }
                else if (!this.triggersSubmenu()) {
                    this.focus(this._openedBy);
                }
            }
            this._openedBy = null;
        };
    // set state rather than toggle to support triggers sharing a menu
    // set state rather than toggle to support triggers sharing a menu
    /**
     * @private
     * @param {?} isOpen
     * @return {?}
     */
    MatMenuTrigger.prototype._setIsMenuOpen =
        // set state rather than toggle to support triggers sharing a menu
        /**
         * @private
         * @param {?} isOpen
         * @return {?}
         */
        function (isOpen) {
            this._menuOpen = isOpen;
            this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
            if (this.triggersSubmenu()) {
                this._menuItemInstance._highlighted = isOpen;
            }
        };
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     */
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._checkMenu = /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @private
     * @return {?}
     */
        function () {
            if (!this.menu) {
                throwMatMenuMissingError();
            }
        };
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._createOverlay = /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @private
     * @return {?}
     */
        function () {
            if (!this._overlayRef) {
                /** @type {?} */
                var config = this._getOverlayConfig();
                this._subscribeToPositions(( /** @type {?} */(config.positionStrategy)));
                this._overlayRef = this._overlay.create(config);
                // Consume the `keydownEvents` in order to prevent them from going to another overlay.
                // Ideally we'd also have our keyboard event logic in here, however doing so will
                // break anybody that may have implemented the `MatMenuPanel` themselves.
                this._overlayRef.keydownEvents().subscribe();
            }
            return this._overlayRef;
        };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayConfig
     */
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @private
     * @return {?} OverlayConfig
     */
    MatMenuTrigger.prototype._getOverlayConfig = /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @private
     * @return {?} OverlayConfig
     */
        function () {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__[/* OverlayConfig */ "d"]({
                positionStrategy: this._overlay.position()
                    .flexibleConnectedTo(this._element)
                    .withLockedPosition()
                    .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
                backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
                scrollStrategy: this._scrollStrategy(),
                direction: this._dir
            });
        };
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @private
     * @param {?} position
     * @return {?}
     */
    MatMenuTrigger.prototype._subscribeToPositions = /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @private
     * @param {?} position
     * @return {?}
     */
        function (position) {
            var _this = this;
            if (this.menu.setPositionClasses) {
                position.positionChanges.subscribe(( /**
                 * @param {?} change
                 * @return {?}
                 */function (change) {
                    /** @type {?} */
                    var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                    /** @type {?} */
                    var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
                    ( /** @type {?} */(_this.menu.setPositionClasses))(posX, posY);
                }));
            }
        };
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @private
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    MatMenuTrigger.prototype._setPosition = /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @private
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
        function (positionStrategy) {
            var _a = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], originX = _a[0], originFallbackX = _a[1];
            var _b = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], overlayY = _b[0], overlayFallbackY = _b[1];
            var _c = [overlayY, overlayFallbackY], originY = _c[0], originFallbackY = _c[1];
            var _d = [originX, originFallbackX], overlayX = _d[0], overlayFallbackX = _d[1];
            /** @type {?} */
            var offsetY = 0;
            if (this.triggersSubmenu()) {
                // When the menu is a sub-menu, it should always align itself
                // to the edges of the trigger, instead of overlapping it.
                overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
                originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
                offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
            }
            else if (!this.menu.overlapTrigger) {
                originY = overlayY === 'top' ? 'bottom' : 'top';
                originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
            }
            positionStrategy.withPositions([
                { originX: originX, originY: originY, overlayX: overlayX, overlayY: overlayY, offsetY: offsetY },
                { originX: originFallbackX, originY: originY, overlayX: overlayFallbackX, overlayY: overlayY, offsetY: offsetY },
                {
                    originX: originX,
                    originY: originFallbackY,
                    overlayX: overlayX,
                    overlayY: overlayFallbackY,
                    offsetY: -offsetY
                },
                {
                    originX: originFallbackX,
                    originY: originFallbackY,
                    overlayX: overlayFallbackX,
                    overlayY: overlayFallbackY,
                    offsetY: -offsetY
                }
            ]);
        };
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._menuClosingActions = /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @private
     * @return {?}
     */
        function () {
            var _this = this;
            /** @type {?} */
            var backdrop = ( /** @type {?} */(this._overlayRef)).backdropClick();
            /** @type {?} */
            var detachments = ( /** @type {?} */(this._overlayRef)).detachments();
            /** @type {?} */
            var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__[/* of */ "a"])();
            /** @type {?} */
            var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__[/* filter */ "a"])(( /**
             * @param {?} active
             * @return {?}
             */function (active) { return active !== _this._menuItemInstance; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__[/* filter */ "a"])(( /**
             * @return {?}
             */function () { return _this._menuOpen; }))) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__[/* of */ "a"])();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__[/* merge */ "a"])(backdrop, parentClose, hover, detachments);
        };
    /** Handles mouse presses on the trigger. */
    /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleMousedown = /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
        function (event) {
            if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__[/* isFakeMousedownFromScreenReader */ "k"])(event)) {
                // Since right or middle button clicks won't trigger the `click` event,
                // we shouldn't consider the menu as opened by mouse in those cases.
                this._openedBy = event.button === 0 ? 'mouse' : null;
                // Since clicking on the trigger won't close the menu if it opens a sub-menu,
                // we should prevent focus from moving onto it via click to avoid the
                // highlight from lingering on the menu item.
                if (this.triggersSubmenu()) {
                    event.preventDefault();
                }
            }
        };
    /** Handles key presses on the trigger. */
    /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleKeydown = /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
        function (event) {
            /** @type {?} */
            var keyCode = event.keyCode;
            if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* RIGHT_ARROW */ "m"] && this.dir === 'ltr') ||
                (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__[/* LEFT_ARROW */ "i"] && this.dir === 'rtl'))) {
                this.openMenu();
            }
        };
    /** Handles click events on the trigger. */
    /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleClick = /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
        function (event) {
            if (this.triggersSubmenu()) {
                // Stop event propagation to avoid closing the parent menu.
                event.stopPropagation();
                this.openMenu();
            }
            else {
                this.toggleMenu();
            }
        };
    /** Handles the cases where the user hovers over the trigger. */
    /**
     * Handles the cases where the user hovers over the trigger.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._handleHover = /**
     * Handles the cases where the user hovers over the trigger.
     * @private
     * @return {?}
     */
        function () {
            var _this = this;
            // Subscribe to changes in the hovered item in order to toggle the panel.
            if (!this.triggersSubmenu()) {
                return;
            }
            this._hoverSubscription = this._parentMenu._hovered()
                // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
                // with different data and triggers), we have to delay it by a tick to ensure that
                // it won't be closed immediately after it is opened.
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__[/* filter */ "a"])(( /**
         * @param {?} active
         * @return {?}
         */function (active) { return active === _this._menuItemInstance && !active.disabled; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__[/* delay */ "a"])(0, rxjs__WEBPACK_IMPORTED_MODULE_7__[/* asap */ "a"]))
                .subscribe(( /**
         * @return {?}
         */function () {
                _this._openedBy = 'mouse';
                // If the same menu is used between multiple triggers, it might still be animating
                // while the new trigger tries to re-open it. Wait for the animation to finish
                // before doing so. Also interrupt if the user moves to another item.
                if (_this.menu instanceof MatMenu && _this.menu._isAnimating) {
                    // We need the `delay(0)` here in order to avoid
                    // 'changed after checked' errors in some cases. See #12194.
                    _this.menu._animationDone
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__[/* take */ "a"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__[/* delay */ "a"])(0, rxjs__WEBPACK_IMPORTED_MODULE_7__[/* asap */ "a"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__[/* takeUntil */ "a"])(_this._parentMenu._hovered()))
                        .subscribe(( /**
                 * @return {?}
                 */function () { return _this.openMenu(); }));
                }
                else {
                    _this.openMenu();
                }
            }));
        };
    /** Gets the portal that should be attached to the overlay. */
    /**
     * Gets the portal that should be attached to the overlay.
     * @private
     * @return {?}
     */
    MatMenuTrigger.prototype._getPortal = /**
     * Gets the portal that should be attached to the overlay.
     * @private
     * @return {?}
     */
        function () {
            // Note that we can avoid this check by keeping the portal on the menu panel.
            // While it would be cleaner, we'd have to introduce another required method on
            // `MatMenuPanel`, making it harder to consume.
            if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__[/* TemplatePortal */ "h"](this.menu.templateRef, this._viewContainerRef);
            }
            return this._portal;
        };
    return MatMenuTrigger;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
var _MatMenuDirectivesModule = /** @class */ /*@__PURE__*/ (function () {
    function _MatMenuDirectivesModule() {
    }
    return _MatMenuDirectivesModule;
}());
var MatMenuModule = /** @class */ /*@__PURE__*/ (function () {
    function MatMenuModule() {
    }
    return MatMenuModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "6SNH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedFlexLayoutModule; });
var SharedFlexLayoutModule = /** @class */ /*@__PURE__*/ (function () {
    function SharedFlexLayoutModule() {
    }
    return SharedFlexLayoutModule;
}());




/***/ }),

/***/ "8xy9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatDividerModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HfXx");
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
var MatDivider = /** @class */ /*@__PURE__*/ (function () {
    function MatDivider() {
        this._vertical = false;
        this._inset = false;
    }
    Object.defineProperty(MatDivider.prototype, "vertical", {
        /** Whether the divider is vertically aligned. */
        get: /**
         * Whether the divider is vertically aligned.
         * @return {?}
         */ function () { return this._vertical; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) { this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__[/* coerceBooleanProperty */ "c"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDivider.prototype, "inset", {
        /** Whether the divider is an inset divider. */
        get: /**
         * Whether the divider is an inset divider.
         * @return {?}
         */ function () { return this._inset; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) { this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__[/* coerceBooleanProperty */ "c"])(value); },
        enumerable: true,
        configurable: true
    });
    return MatDivider;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatDividerModule = /** @class */ /*@__PURE__*/ (function () {
    function MatDividerModule() {
    }
    return MatDividerModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "Aiwi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePickerServiceModule; });
var ThemePickerServiceModule = /** @class */ /*@__PURE__*/ (function () {
    function ThemePickerServiceModule() {
    }
    return ThemePickerServiceModule;
}());




/***/ }),

/***/ "BySP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return differenceInMilliseconds; });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JuBR");

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDateLeft);
    var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(dirtyDateRight);
    return dateLeft.getTime() - dateRight.getTime();
}



/***/ }),

/***/ "CYrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MatGridTileText; });
/* unused harmony export MatGridAvatarCssMatStyler */
/* unused harmony export MatGridTileHeaderCssMatStyler */
/* unused harmony export MatGridTileFooterCssMatStyler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LYzL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HfXx");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("D57K");
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
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var MAT_GRID_LIST = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* InjectionToken */ "u"]('MAT_GRID_LIST');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatGridTile = /** @class */ /*@__PURE__*/ (function () {
    function MatGridTile(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    Object.defineProperty(MatGridTile.prototype, "rowspan", {
        /** Amount of rows that the grid tile takes up. */
        get: /**
         * Amount of rows that the grid tile takes up.
         * @return {?}
         */ function () { return this._rowspan; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__[/* coerceNumberProperty */ "f"])(value)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridTile.prototype, "colspan", {
        /** Amount of columns that the grid tile takes up. */
        get: /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */ function () { return this._colspan; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__[/* coerceNumberProperty */ "f"])(value)); },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    MatGridTile.prototype._setStyle = /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
        function (property, value) {
            (( /** @type {?} */(this._element.nativeElement.style)))[property] = value;
        };
    return MatGridTile;
}());
var MatGridTileText = /** @class */ /*@__PURE__*/ (function () {
    function MatGridTileText(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    MatGridTileText.prototype.ngAfterContentInit = /**
     * @return {?}
     */
        function () {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* setLines */ "K"])(this._lines, this._element);
        };
    return MatGridTileText;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridAvatarCssMatStyler = /** @class */ /*@__PURE__*/ (function () {
    function MatGridAvatarCssMatStyler() {
    }
    return MatGridAvatarCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridTileHeaderCssMatStyler = /** @class */ /*@__PURE__*/ (function () {
    function MatGridTileHeaderCssMatStyler() {
    }
    return MatGridTileHeaderCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridTileFooterCssMatStyler = /** @class */ /*@__PURE__*/ (function () {
    function MatGridTileFooterCssMatStyler() {
    }
    return MatGridTileFooterCssMatStyler;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * \@docs-private
 */
var /**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * \@docs-private
 */ TileCoordinator = /** @class */ /*@__PURE__*/ (function () {
    function TileCoordinator() {
        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */
        this.rowIndex = 0;
    }
    Object.defineProperty(TileCoordinator.prototype, "rowCount", {
        /** Gets the total number of rows occupied by tiles */
        get: /**
         * Gets the total number of rows occupied by tiles
         * @return {?}
         */ function () { return this.rowIndex + 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileCoordinator.prototype, "rowspan", {
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         */
        get: /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */ function () {
            /** @type {?} */
            var lastRowMax = Math.max.apply(Math, this.tracker);
            // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount
            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     */
    /**
     * Updates the tile positions.
     * @param {?} numColumns Amount of columns in the grid.
     * @param {?} tiles
     * @return {?}
     */
    TileCoordinator.prototype.update = /**
     * Updates the tile positions.
     * @param {?} numColumns Amount of columns in the grid.
     * @param {?} tiles
     * @return {?}
     */
        function (numColumns, tiles) {
            var _this = this;
            this.columnIndex = 0;
            this.rowIndex = 0;
            this.tracker = new Array(numColumns);
            this.tracker.fill(0, 0, this.tracker.length);
            this.positions = tiles.map(( /**
             * @param {?} tile
             * @return {?}
             */function (tile) { return _this._trackTile(tile); }));
        };
    /** Calculates the row and col position of a tile. */
    /**
     * Calculates the row and col position of a tile.
     * @private
     * @param {?} tile
     * @return {?}
     */
    TileCoordinator.prototype._trackTile = /**
     * Calculates the row and col position of a tile.
     * @private
     * @param {?} tile
     * @return {?}
     */
        function (tile) {
            // Find a gap large enough for this tile.
            /** @type {?} */
            var gapStartIndex = this._findMatchingGap(tile.colspan);
            // Place tile in the resulting gap.
            this._markTilePosition(gapStartIndex, tile);
            // The next time we look for a gap, the search will start at columnIndex, which should be
            // immediately after the tile that has just been placed.
            this.columnIndex = gapStartIndex + tile.colspan;
            return new TilePosition(this.rowIndex, gapStartIndex);
        };
    /** Finds the next available space large enough to fit the tile. */
    /**
     * Finds the next available space large enough to fit the tile.
     * @private
     * @param {?} tileCols
     * @return {?}
     */
    TileCoordinator.prototype._findMatchingGap = /**
     * Finds the next available space large enough to fit the tile.
     * @private
     * @param {?} tileCols
     * @return {?}
     */
        function (tileCols) {
            if (tileCols > this.tracker.length) {
                throw Error("mat-grid-list: tile with colspan " + tileCols + " is wider than " +
                    ("grid with cols=\"" + this.tracker.length + "\"."));
            }
            // Start index is inclusive, end index is exclusive.
            /** @type {?} */
            var gapStartIndex = -1;
            /** @type {?} */
            var gapEndIndex = -1;
            // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
            do {
                // If we've reached the end of the row, go to the next row.
                if (this.columnIndex + tileCols > this.tracker.length) {
                    this._nextRow();
                    gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                    gapEndIndex = this._findGapEndIndex(gapStartIndex);
                    continue;
                }
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                // If there are no more empty spaces in this row at all, move on to the next row.
                if (gapStartIndex == -1) {
                    this._nextRow();
                    gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                    gapEndIndex = this._findGapEndIndex(gapStartIndex);
                    continue;
                }
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                // If a gap large enough isn't found, we want to start looking immediately after the current
                // gap on the next iteration.
                this.columnIndex = gapStartIndex + 1;
                // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
                // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
            } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
            // If we still didn't manage to find a gap, ensure that the index is
            // at least zero so the tile doesn't get pulled out of the grid.
            return Math.max(gapStartIndex, 0);
        };
    /** Move "down" to the next row. */
    /**
     * Move "down" to the next row.
     * @private
     * @return {?}
     */
    TileCoordinator.prototype._nextRow = /**
     * Move "down" to the next row.
     * @private
     * @return {?}
     */
        function () {
            this.columnIndex = 0;
            this.rowIndex++;
            // Decrement all spaces by one to reflect moving down one row.
            for (var i = 0; i < this.tracker.length; i++) {
                this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
        };
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @private
     * @param {?} gapStartIndex
     * @return {?}
     */
    TileCoordinator.prototype._findGapEndIndex = /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @private
     * @param {?} gapStartIndex
     * @return {?}
     */
        function (gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
                if (this.tracker[i] != 0) {
                    return i;
                }
            }
            // The gap ends with the end of the row.
            return this.tracker.length;
        };
    /** Update the tile tracker to account for the given tile in the given space. */
    /**
     * Update the tile tracker to account for the given tile in the given space.
     * @private
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */
    TileCoordinator.prototype._markTilePosition = /**
     * Update the tile tracker to account for the given tile in the given space.
     * @private
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */
        function (start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
                this.tracker[start + i] = tile.rowspan;
            }
        };
    return TileCoordinator;
}());
/**
 * Simple data structure for tile position (row, col).
 * \@docs-private
 */
var /**
 * Simple data structure for tile position (row, col).
 * \@docs-private
 */ TilePosition = /** @class */ /*@__PURE__*/ (function () {
    function TilePosition(row, col) {
        this.row = row;
        this.col = col;
    }
    return TilePosition;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 * @type {?}
 */
var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * \@docs-private
 * @abstract
 */
var /**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * \@docs-private
 * @abstract
 */ TileStyler = /** @class */ /*@__PURE__*/ (function () {
    function TileStyler() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */
    TileStyler.prototype.init = /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */
        function (gutterSize, tracker, cols, direction) {
            this._gutterSize = normalizeUnits(gutterSize);
            this._rows = tracker.rowCount;
            this._rowspan = tracker.rowspan;
            this._cols = cols;
            this._direction = direction;
        };
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    TileStyler.prototype.getBaseTileSize = /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
        function (sizePercent, gutterFraction) {
            // Take the base size percent (as would be if evenly dividing the size between cells),
            // and then subtracting the size of one gutter. However, since there are no gutters on the
            // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
            // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
            // edge evenly among the cells).
            return "(" + sizePercent + "% - (" + this._gutterSize + " * " + gutterFraction + "))";
        };
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTilePosition = /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */
        function (baseSize, offset) {
            // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
            // row/column (offset).
            return offset === 0 ? '0' : calc("(" + baseSize + " + " + this._gutterSize + ") * " + offset);
        };
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTileSize = /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */
        function (baseSize, span) {
            return "(" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this._gutterSize + ")";
        };
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */
    TileStyler.prototype.setStyle = /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */
        function (tile, rowIndex, colIndex) {
            // Percent of the available horizontal space that one column takes up.
            /** @type {?} */
            var percentWidthPerTile = 100 / this._cols;
            // Fraction of the vertical gutter size that each column takes up.
            // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
            /** @type {?} */
            var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
            this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
            this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        };
    /** Sets the horizontal placement of the tile in the list. */
    /**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    TileStyler.prototype.setColStyles = /**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
        function (tile, colIndex, percentWidth, gutterWidth) {
            // Base horizontal size of a column.
            /** @type {?} */
            var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
            // The width and horizontal position of each tile is always calculated the same way, but the
            // height and vertical position depends on the rowMode.
            /** @type {?} */
            var side = this._direction === 'rtl' ? 'right' : 'left';
            tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
            tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        };
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */
    TileStyler.prototype.getGutterSpan = /**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */
        function () {
            return this._gutterSize + " * (" + this._rowspan + " - 1)";
        };
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */
    TileStyler.prototype.getTileSpan = /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */
        function (tileHeight) {
            return this._rowspan + " * " + this.getTileSize(tileHeight, 1);
        };
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */
    TileStyler.prototype.getComputedHeight = /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */
        function () { return null; };
    return TileStyler;
}());
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * \@docs-private
 */
var /**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * \@docs-private
 */ FixedTileStyler = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(FixedTileStyler, _super);
    function FixedTileStyler(fixedRowHeight) {
        var _this = _super.call(this) || this;
        _this.fixedRowHeight = fixedRowHeight;
        return _this;
    }
    /**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */
    FixedTileStyler.prototype.init = /**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */
        function (gutterSize, tracker, cols, direction) {
            _super.prototype.init.call(this, gutterSize, tracker, cols, direction);
            this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
            if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
                throw Error("Invalid value \"" + this.fixedRowHeight + "\" set as rowHeight.");
            }
        };
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    FixedTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
        function (tile, rowIndex) {
            tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
            tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        };
    /**
     * @return {?}
     */
    FixedTileStyler.prototype.getComputedHeight = /**
     * @return {?}
     */
        function () {
            return [
                'height', calc(this.getTileSpan(this.fixedRowHeight) + " + " + this.getGutterSpan())
            ];
        };
    /**
     * @param {?} list
     * @return {?}
     */
    FixedTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
        function (list) {
            list._setListStyle(['height', null]);
            if (list._tiles) {
                list._tiles.forEach(( /**
                 * @param {?} tile
                 * @return {?}
                 */function (tile) {
                    tile._setStyle('top', null);
                    tile._setStyle('height', null);
                }));
            }
        };
    return FixedTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * \@docs-private
 */
var /**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * \@docs-private
 */ RatioTileStyler = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(RatioTileStyler, _super);
    function RatioTileStyler(value) {
        var _this = _super.call(this) || this;
        _this._parseRatio(value);
        return _this;
    }
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    RatioTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
        function (tile, rowIndex, percentWidth, gutterWidth) {
            /** @type {?} */
            var percentHeightPerTile = percentWidth / this.rowHeightRatio;
            this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
            // Use padding-top and margin-top to maintain the given aspect ratio, as
            // a percentage-based value for these properties is applied versus the *width* of the
            // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
            tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
            tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        };
    /**
     * @return {?}
     */
    RatioTileStyler.prototype.getComputedHeight = /**
     * @return {?}
     */
        function () {
            return [
                'paddingBottom', calc(this.getTileSpan(this.baseTileHeight) + " + " + this.getGutterSpan())
            ];
        };
    /**
     * @param {?} list
     * @return {?}
     */
    RatioTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
        function (list) {
            list._setListStyle(['paddingBottom', null]);
            list._tiles.forEach(( /**
             * @param {?} tile
             * @return {?}
             */function (tile) {
                tile._setStyle('marginTop', null);
                tile._setStyle('paddingTop', null);
            }));
        };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    RatioTileStyler.prototype._parseRatio = /**
     * @private
     * @param {?} value
     * @return {?}
     */
        function (value) {
            /** @type {?} */
            var ratioParts = value.split(':');
            if (ratioParts.length !== 2) {
                throw Error("mat-grid-list: invalid ratio given for row-height: \"" + value + "\"");
            }
            this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        };
    return RatioTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * \@docs-private
 */
var /**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * \@docs-private
 */ FitTileStyler = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(FitTileStyler, _super);
    function FitTileStyler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    FitTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
        function (tile, rowIndex) {
            // Percent of the available vertical space that one row takes up.
            /** @type {?} */
            var percentHeightPerTile = 100 / this._rowspan;
            // Fraction of the horizontal gutter size that each column takes up.
            /** @type {?} */
            var gutterHeightPerTile = (this._rows - 1) / this._rows;
            // Base vertical size of a column.
            /** @type {?} */
            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
            tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
            tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        };
    /**
     * @param {?} list
     * @return {?}
     */
    FitTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
        function (list) {
            if (list._tiles) {
                list._tiles.forEach(( /**
                 * @param {?} tile
                 * @return {?}
                 */function (tile) {
                    tile._setStyle('top', null);
                    tile._setStyle('height', null);
                }));
            }
        };
    return FitTileStyler;
}(TileStyler));
/**
 * Wraps a CSS string in a calc function
 * @param {?} exp
 * @return {?}
 */
function calc(exp) {
    return "calc(" + exp + ")";
}
/**
 * Appends pixels to a CSS string if no units are given.
 * @param {?} value
 * @return {?}
 */
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : value + "px";
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
/** @type {?} */
var MAT_FIT_MODE = 'fit';
var MatGridList = /** @class */ /*@__PURE__*/ (function () {
    function MatGridList(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */
        this._gutter = '1px';
    }
    Object.defineProperty(MatGridList.prototype, "cols", {
        /** Amount of columns in the grid list. */
        get: /**
         * Amount of columns in the grid list.
         * @return {?}
         */ function () { return this._cols; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__[/* coerceNumberProperty */ "f"])(value)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "gutterSize", {
        /** Size of the grid list's gutter in pixels. */
        get: /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */ function () { return this._gutter; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) { this._gutter = "" + (value == null ? '' : value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "rowHeight", {
        /** Set internal representation of row height from the user-provided value. */
        get: /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */ function () { return this._rowHeight; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            /** @type {?} */
            var newValue = "" + (value == null ? '' : value);
            if (newValue !== this._rowHeight) {
                this._rowHeight = newValue;
                this._setTileStyler(this._rowHeight);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatGridList.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            this._checkCols();
            this._checkRowHeight();
        };
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */
    MatGridList.prototype.ngAfterContentChecked = /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */
        function () {
            this._layoutTiles();
        };
    /** Throw a friendly error if cols property is missing */
    /**
     * Throw a friendly error if cols property is missing
     * @private
     * @return {?}
     */
    MatGridList.prototype._checkCols = /**
     * Throw a friendly error if cols property is missing
     * @private
     * @return {?}
     */
        function () {
            if (!this.cols) {
                throw Error("mat-grid-list: must pass in number of columns. " +
                    "Example: <mat-grid-list cols=\"3\">");
            }
        };
    /** Default to equal width:height if rowHeight property is missing */
    /**
     * Default to equal width:height if rowHeight property is missing
     * @private
     * @return {?}
     */
    MatGridList.prototype._checkRowHeight = /**
     * Default to equal width:height if rowHeight property is missing
     * @private
     * @return {?}
     */
        function () {
            if (!this._rowHeight) {
                this._setTileStyler('1:1');
            }
        };
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    /**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @private
     * @param {?} rowHeight
     * @return {?}
     */
    MatGridList.prototype._setTileStyler = /**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @private
     * @param {?} rowHeight
     * @return {?}
     */
        function (rowHeight) {
            if (this._tileStyler) {
                this._tileStyler.reset(this);
            }
            if (rowHeight === MAT_FIT_MODE) {
                this._tileStyler = new FitTileStyler();
            }
            else if (rowHeight && rowHeight.indexOf(':') > -1) {
                this._tileStyler = new RatioTileStyler(rowHeight);
            }
            else {
                this._tileStyler = new FixedTileStyler(rowHeight);
            }
        };
    /** Computes and applies the size and position for all children grid tiles. */
    /**
     * Computes and applies the size and position for all children grid tiles.
     * @private
     * @return {?}
     */
    MatGridList.prototype._layoutTiles = /**
     * Computes and applies the size and position for all children grid tiles.
     * @private
     * @return {?}
     */
        function () {
            var _this = this;
            if (!this._tileCoordinator) {
                this._tileCoordinator = new TileCoordinator();
            }
            /** @type {?} */
            var tracker = this._tileCoordinator;
            /** @type {?} */
            var tiles = this._tiles.filter(( /**
             * @param {?} tile
             * @return {?}
             */function (tile) { return !tile._gridList || tile._gridList === _this; }));
            /** @type {?} */
            var direction = this._dir ? this._dir.value : 'ltr';
            this._tileCoordinator.update(this.cols, tiles);
            this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
            tiles.forEach(( /**
             * @param {?} tile
             * @param {?} index
             * @return {?}
             */function (tile, index) {
                /** @type {?} */
                var pos = tracker.positions[index];
                _this._tileStyler.setStyle(tile, pos.row, pos.col);
            }));
            this._setListStyle(this._tileStyler.getComputedHeight());
        };
    /** Sets style on the main grid-list element, given the style name and value. */
    /**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */
    MatGridList.prototype._setListStyle = /**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */
        function (style) {
            if (style) {
                (( /** @type {?} */(this._element.nativeElement.style)))[style[0]] = style[1];
            }
        };
    return MatGridList;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatGridListModule = /** @class */ /*@__PURE__*/ (function () {
    function MatGridListModule() {
    }
    return MatGridListModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "Cmdc":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = /*@__PURE__*/ __webpack_require__("vdqk");
var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;



/***/ }),

/***/ "DLj4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = /*@__PURE__*/ __webpack_require__("qiMw");
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
exports.throwError = throwError;
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}



/***/ }),

/***/ "DtmU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = /*@__PURE__*/ __webpack_require__("qiMw");
var subscribeToArray_1 = /*@__PURE__*/ __webpack_require__("sBpz");
var scheduleArray_1 = /*@__PURE__*/ __webpack_require__("uHtI");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;



/***/ }),

/***/ "G2vk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__("JuBR");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/compareAsc/index.js

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var dateLeft = Object(toDate["a" /* default */])(dirtyDateLeft);
    var dateRight = Object(toDate["a" /* default */])(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) {
        return -1;
    }
    else if (diff > 0) {
        return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    }
    else {
        return diff;
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/differenceInCalendarMonths/index.js

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var dateLeft = Object(toDate["a" /* default */])(dirtyDateLeft);
    var dateRight = Object(toDate["a" /* default */])(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/differenceInMonths/index.js



/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var dateLeft = Object(toDate["a" /* default */])(dirtyDateLeft);
    var dateRight = Object(toDate["a" /* default */])(dirtyDateRight);
    var sign = compareAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
    var result = sign * (difference - isLastMonthNotFull); // Prevent negative zero
    return result === 0 ? 0 : result;
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/differenceInMilliseconds/index.js
var differenceInMilliseconds = __webpack_require__("BySP");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/differenceInSeconds/index.js

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var diff = Object(differenceInMilliseconds["a" /* default */])(dirtyDateLeft, dirtyDateRight) / 1000;
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/index.js + 9 modules
var en_US = __webpack_require__("dI1K");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/_lib/assign/index.js
function assign_assign(target, dirtyObject) {
    if (target == null) {
        throw new TypeError('assign requires that input parameter not be null or undefined');
    }
    dirtyObject = dirtyObject || {};
    for (var property in dirtyObject) {
        if (dirtyObject.hasOwnProperty(property)) {
            target[property] = dirtyObject[property];
        }
    }
    return target;
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/_lib/cloneObject/index.js

function cloneObject(dirtyObject) {
    return assign_assign({}, dirtyObject);
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
var getTimezoneOffsetInMilliseconds = __webpack_require__("njY1");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/formatDistance/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDistance; });







var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */
function formatDistance(dirtyDate, dirtyBaseDate, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var options = dirtyOptions || {};
    var locale = options.locale || en_US["a" /* default */];
    if (!locale.formatDistance) {
        throw new RangeError('locale must contain formatDistance property');
    }
    var comparison = compareAsc(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) {
        throw new RangeError('Invalid time value');
    }
    var localizeOptions = cloneObject(options);
    localizeOptions.addSuffix = Boolean(options.addSuffix);
    localizeOptions.comparison = comparison;
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
        dateLeft = Object(toDate["a" /* default */])(dirtyBaseDate);
        dateRight = Object(toDate["a" /* default */])(dirtyDate);
    }
    else {
        dateLeft = Object(toDate["a" /* default */])(dirtyDate);
        dateRight = Object(toDate["a" /* default */])(dirtyBaseDate);
    }
    var seconds = differenceInSeconds(dateRight, dateLeft);
    var offsetInSeconds = (Object(getTimezoneOffsetInMilliseconds["a" /* default */])(dateRight) - Object(getTimezoneOffsetInMilliseconds["a" /* default */])(dateLeft)) / 1000;
    var minutes = Math.round((seconds - offsetInSeconds) / 60);
    var months; // 0 up to 2 mins
    if (minutes < 2) {
        if (options.includeSeconds) {
            if (seconds < 5) {
                return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
            }
            else if (seconds < 10) {
                return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
            }
            else if (seconds < 20) {
                return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
            }
            else if (seconds < 40) {
                return locale.formatDistance('halfAMinute', null, localizeOptions);
            }
            else if (seconds < 60) {
                return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
            }
            else {
                return locale.formatDistance('xMinutes', 1, localizeOptions);
            }
        }
        else {
            if (minutes === 0) {
                return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
            }
            else {
                return locale.formatDistance('xMinutes', minutes, localizeOptions);
            }
        } // 2 mins up to 0.75 hrs
    }
    else if (minutes < 45) {
        return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
    }
    else if (minutes < 90) {
        return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
    }
    else if (minutes < MINUTES_IN_DAY) {
        var hours = Math.round(minutes / 60);
        return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
    }
    else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
        return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
    }
    else if (minutes < MINUTES_IN_MONTH) {
        var days = Math.round(minutes / MINUTES_IN_DAY);
        return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
    }
    else if (minutes < MINUTES_IN_TWO_MONTHS) {
        months = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance('aboutXMonths', months, localizeOptions);
    }
    months = differenceInMonths(dateRight, dateLeft); // 2 months up to 12 months
    if (months < 12) {
        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
    }
    else {
        var monthsSinceStartOfYear = months % 12;
        var years = Math.floor(months / 12); // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
        }
        else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
        }
        else {
            return locale.formatDistance('almostXYears', years + 1, localizeOptions);
        }
    }
}



/***/ }),

/***/ "G6qe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/ng-let/ng-let.module.ts
var ng_let_module = __webpack_require__("elFF");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/router-link-match/router-link-match.module.ts
var router_link_match_module = __webpack_require__("hBHQ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/in-viewport/in-viewport.module.ts
var in_viewport_module = __webpack_require__("W3P+");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/in-viewport/viewport.service.ts
var viewport_service = __webpack_require__("+fL/");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/click-outside/click-outside.module.ts
var click_outside_module = __webpack_require__("Ulry");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/min/min.module.ts
var MinModule = /** @class */ /*@__PURE__*/ (function () {
    function MinModule() {
    }
    return MinModule;
}());



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/mask/mask.module.ts
var mask_module = __webpack_require__("V4VB");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/index.ts









// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/operators/untilDestroy.ts
var untilDestroy = __webpack_require__("2oWW");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__("Jg5f");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/pluck.js
/** PURE_IMPORTS_START _map PURE_IMPORTS_END */

function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return function (source) { return Object(map["a" /* map */])(plucker(properties, length))(source); };
}
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}




// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/operators/pluck.ts

function pluck_pluck() {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
    }
    return pluck.apply(void 0, props);
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/operators/index.ts




// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/helper/helper.module.ts
var helper_module = __webpack_require__("XpPk");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/truncate/truncate.module.ts
var truncate_module = __webpack_require__("NA/R");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/date-fns/date-fns.module.ts
var date_fns_module = __webpack_require__("dKPd");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/index.ts





// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/index.ts
/* unused concated harmony import NgLetModule */
/* unused concated harmony import RouterLinkMatchModule */
/* unused concated harmony import InViewportModule */
/* unused concated harmony import ViewportService */
/* unused concated harmony import ClickOutsideModule */
/* unused concated harmony import MinModule */
/* unused concated harmony import MaskModule */
/* concated harmony reexport untilDestroy */__webpack_require__.d(__webpack_exports__, "a", function() { return untilDestroy["a" /* untilDestroy */]; });
/* unused concated harmony import ɵdestroy$ */
/* unused concated harmony import pluck */
/* unused concated harmony import HelperModule */
/* unused concated harmony import TruncateModule */
/* unused concated harmony import DateFnsModule */
// export * from './lib/decorators/index';






/***/ }),

/***/ "GJk9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("WT9V");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/observable/of.js
var of = __webpack_require__("pN2L");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/observable/interval.js
var interval = __webpack_require__("mUyW");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/Subject.js
var Subject = __webpack_require__("fQLH");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/OuterSubscriber.js
var OuterSubscriber = __webpack_require__("leiK");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
var subscribeToResult = __webpack_require__("Lh+r");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/repeatWhen.js
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */




function repeatWhen(notifier) {
    return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
}
var RepeatWhenOperator = /*@__PURE__*/ /*@__PURE__*/ (function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new repeatWhen_RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
var repeatWhen_RepeatWhenSubscriber = /*@__PURE__*/ /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        _this.sourceIsBeingSubscribedTo = true;
        return _this;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            if (!this.retriesSubscription || this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this._unsubscribe = _unsubscribe;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new Subject["a" /* Subject */]();
        var retries;
        try {
            var notifier = this.notifier;
            retries = notifier(this.notifications);
        }
        catch (e) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = Object(subscribeToResult["a" /* subscribeToResult */])(this, retries);
    };
    return RepeatWhenSubscriber;
}(OuterSubscriber["a" /* OuterSubscriber */]));




// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber = __webpack_require__("DwTn");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/Observable.js + 2 modules
var Observable = __webpack_require__("HnWI");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/delayWhen.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return new delayWhen_SubscriptionDelayObservable(source, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
}
var DelayWhenOperator = /*@__PURE__*/ /*@__PURE__*/ (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new delayWhen_DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
var delayWhen_DelayWhenSubscriber = /*@__PURE__*/ /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.delayDurationSelector = delayDurationSelector;
        _this.completed = false;
        _this.delayNotifierSubscriptions = [];
        _this.index = 0;
        return _this;
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        var index = this.index++;
        try {
            var delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = Object(subscribeToResult["a" /* subscribeToResult */])(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            var destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber["a" /* OuterSubscriber */]));
var delayWhen_SubscriptionDelayObservable = /*@__PURE__*/ /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subscriptionDelay = subscriptionDelay;
        return _this;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new delayWhen_SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable["a" /* Observable */]));
var delayWhen_SubscriptionDelaySubscriber = /*@__PURE__*/ /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.source = source;
        _this.sourceSubscribed = false;
        return _this;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.unsubscribe();
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber["a" /* Subscriber */]));




// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/takeWhile.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) {
        inclusive = false;
    }
    return function (source) {
        return source.lift(new TakeWhileOperator(predicate, inclusive));
    };
}
var TakeWhileOperator = /*@__PURE__*/ /*@__PURE__*/ (function () {
    function TakeWhileOperator(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new takeWhile_TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator;
}());
var takeWhile_TakeWhileSubscriber = /*@__PURE__*/ /*@__PURE__*/ (function (_super) {
    tslib_es6["__extends"](TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber["a" /* Subscriber */]));




// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__("Jg5f");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/tap.js
var tap = __webpack_require__("U3QC");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/formatDistance/index.js + 6 modules
var formatDistance = __webpack_require__("G2vk");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/differenceInMilliseconds/index.js
var differenceInMilliseconds = __webpack_require__("BySP");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/differenceInMinutes/index.js

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var diff = Object(differenceInMilliseconds["a" /* default */])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__("ns0p");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/date-fns/format-time-in-words.pipe.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format_time_in_words_pipe_FormatTimeInWordsPipe; });






var defaultConfig = { addSuffix: true };
/**
 * impure pipe, which in general can lead to bad performance
 * but the backoff function limits the frequency the pipe checks for updates
 * so the performance is close to that of a pure pipe
 * the downside of this is that if you change the value of the input, the pipe might not notice for a while
 * so this pipe is intended for static data
 *
 * expected input is a time (number, string or Date)
 * output is a string expressing distance from that time to now, plus the suffix 'ago'
 * output refreshes at dynamic intervals, with refresh rate slowing down as the input time gets further away from now
 */
var format_time_in_words_pipe_FormatTimeInWordsPipe = /** @class */ /*@__PURE__*/ (function () {
    function FormatTimeInWordsPipe(cdr) {
        this.cdr = cdr;
        this.isDestroyed = false;
        this.async = new common["b" /* AsyncPipe */](this.cdr);
    }
    FormatTimeInWordsPipe.prototype.ngOnDestroy = function () {
        this.isDestroyed = true; // pipe will stop executing after next iteration
    };
    FormatTimeInWordsPipe.prototype.transform = function (date, options) {
        if (date == null) {
            throw new Error(FormatTimeInWordsPipe.NO_ARGS_ERROR);
        }
        // set the pipe to the Observable if not yet done, and return an async pipe
        if (!this.agoExpression) {
            this.agoExpression = this.timeAgo(date, tslib_es6["__assign"]({}, defaultConfig, options));
        }
        return this.async.transform(this.agoExpression);
    };
    FormatTimeInWordsPipe.prototype.timeAgo = function (date, options) {
        var _this = this;
        var nextBackoff = this.backoff(date);
        return Object(of["a" /* of */])(true).pipe(
        // will not recheck input until delay completes
        repeatWhen(function (notify) { return notify.pipe(delayWhen(function () { return Object(interval["a" /* interval */])(nextBackoff); })); }), takeWhile(function (_) { return !_this.isDestroyed; }), Object(map["a" /* map */])(function (_) { return Object(formatDistance["a" /* default */])(_this.stringToDate(date), new Date(), options); }), Object(tap["a" /* tap */])(function (_) { return (nextBackoff = _this.backoff(date)); }));
    };
    FormatTimeInWordsPipe.prototype.backoff = function (date) {
        var minutesElapsed = Math.abs(differenceInMinutes(new Date(), this.stringToDate(date))); // this will always be positive
        var backoffAmountInSeconds;
        if (minutesElapsed < 2) {
            backoffAmountInSeconds = 5;
        }
        else if (minutesElapsed >= 2 && minutesElapsed < 5) {
            backoffAmountInSeconds = 15;
        }
        else if (minutesElapsed >= 5 && minutesElapsed < 60) {
            backoffAmountInSeconds = 30;
        }
        else if (minutesElapsed >= 60) {
            backoffAmountInSeconds = 300; // 5 minutes
        }
        return backoffAmountInSeconds * 1000; // return an amount of milliseconds
    };
    FormatTimeInWordsPipe.prototype.stringToDate = function (date) {
        var isString = function (s) { return typeof s === 'string' || s instanceof String; };
        return isString(date) ? Object(parseISO["a" /* default */])(date) : date;
    };
    FormatTimeInWordsPipe.NO_ARGS_ERROR = 'formatTimeInWords: missing required arguments';
    return FormatTimeInWordsPipe;
}());




/***/ }),

/***/ "JuBR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toDate; });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    }
    else if (typeof argument === 'number' || argStr === '[object Number]') {
        return new Date(argument);
    }
    else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}



/***/ }),

/***/ "K7a0":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = /*@__PURE__*/ __webpack_require__("Cmdc");
var QueueScheduler = /*@__PURE__*/ (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;



/***/ }),

/***/ "LR82d":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = /*@__PURE__*/ __webpack_require__("6Br6");
var Action = /*@__PURE__*/ (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;



/***/ }),

/***/ "LTOS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/core.module.ts + 1 modules
var core_module = __webpack_require__("9zMV");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/state/preference.state.ts
var preference_state = __webpack_require__("67gI");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/state/app.state.ts
var app_state = __webpack_require__("WHm7");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/state/profile.state.ts + 1 modules
var profile_state = __webpack_require__("/pEy");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/page-title.service.ts
var page_title_service = __webpack_require__("4NgJ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/profile.service.ts
var profile_service = __webpack_require__("o7MO");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/app-config.service.ts
var app_config_service = __webpack_require__("i03N");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/service-worker.service.ts
var service_worker_service = __webpack_require__("Z4dZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/internal/ReplaySubject.js
var ReplaySubject = __webpack_require__("zDe/");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/filter.js
var filter = __webpack_require__("z5yO");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__("Jg5f");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("LoAr");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm5/core.es5.js
var core_es5 = __webpack_require__("SPdK");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/media-query.service.ts




var media_query_service_MediaQueryService = /** @class */ /*@__PURE__*/ (function () {
    function MediaQueryService(mediaObserver) {
        var _this = this;
        this.lowerThanMedium = new ReplaySubject["ReplaySubject"](1);
        this.lowerThanLarge = new ReplaySubject["ReplaySubject"](1);
        this.changesPrivate$ = new ReplaySubject["ReplaySubject"](1);
        mediaObserver
            .asObservable()
            .pipe(Object(filter["a" /* filter */])(function (changes) { return changes.length > 0; }), Object(map["a" /* map */])(function (changes) { return changes[0]; }))
            .subscribe(function (res) { return _this.changesPrivate$.next(res); }, function (err) { return _this.changesPrivate$.error(err); }, function () { return _this.changesPrivate$.complete(); });
        this.changesPrivate$.subscribe(function (change) {
            _this.lowerThanMedium.next(change.mqAlias === 'xs' || change.mqAlias === 'sm');
        });
        this.changesPrivate$.subscribe(function (change) {
            _this.lowerThanLarge.next(change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md');
        });
    }
    Object.defineProperty(MediaQueryService.prototype, "changes$", {
        get: function () {
            return this.changesPrivate$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaQueryService.prototype, "isLowerThanMedium$", {
        get: function () {
            return this.lowerThanMedium.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaQueryService.prototype, "isLowerThanLarge$", {
        get: function () {
            return this.lowerThanLarge.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MediaQueryService.ngInjectableDef = core["dc" /* ɵɵdefineInjectable */]({ factory: function MediaQueryService_Factory() { return new MediaQueryService(core["ec" /* ɵɵinject */](core_es5["g" /* MediaObserver */])); }, token: MediaQueryService, providedIn: "root" });
    return MediaQueryService;
}());



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/router/fesm5/router.js + 3 modules
var router = __webpack_require__("981U");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/deep-link.service.ts


var deep_link_service_DeepLinkService = /** @class */ /*@__PURE__*/ (function () {
    function DeepLinkService(router, route) {
        this.router = router;
        this.route = route;
    }
    /**
     * Register a given FormGroup instance with the current "q" queryParams Observbale. Every time the
     * "q" queryParams changes, the "query" FormControl (of the given FormGroup instance) will be updated, reflecting the same value.
     * @param form The given FormGroup to register.
     */
    DeepLinkService.prototype.registerFormGroup = function (form) {
        this.route.queryParams.subscribe(function (query) {
            if (query.q) {
                form.setValue({
                    query: query.q,
                });
            }
        });
    };
    /**
     * This method is used to update the current URL queryParams.
     * It is used to keep both the URL and the formControl in sync.
     * @param queryParams A given Params object containing the queryParams to set.
     */
    DeepLinkService.prototype.syncUrl = function (queryParams) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
        });
    };
    DeepLinkService.ngInjectableDef = core["dc" /* ɵɵdefineInjectable */]({ factory: function DeepLinkService_Factory() { return new DeepLinkService(core["ec" /* ɵɵinject */](router["q" /* Router */]), core["ec" /* ɵɵinject */](router["a" /* ActivatedRoute */])); }, token: DeepLinkService, providedIn: "root" });
    return DeepLinkService;
}());



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/feature.service.ts
var feature_service = __webpack_require__("kyl8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/google-analytics.service.ts
var google_analytics_service = __webpack_require__("LZ2o");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/push-notification.service.ts
var push_notification_service = __webpack_require__("ycqS");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/window.token.ts
var window_token = __webpack_require__("Bpi4");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/index.ts
/* unused concated harmony import noop */
/* unused concated harmony import CoreModule */
/* unused concated harmony import ɵ0 */
/* unused concated harmony import ɵ1 */
/* concated harmony reexport ThemeName */__webpack_require__.d(__webpack_exports__, "h", function() { return preference_state["f" /* ThemeName */]; });
/* concated harmony reexport themes */__webpack_require__.d(__webpack_exports__, "i", function() { return preference_state["g" /* themes */]; });
/* concated harmony reexport ChangeLanguage */__webpack_require__.d(__webpack_exports__, "b", function() { return preference_state["a" /* ChangeLanguage */]; });
/* concated harmony reexport ChangeTheme */__webpack_require__.d(__webpack_exports__, "c", function() { return preference_state["b" /* ChangeTheme */]; });
/* concated harmony reexport EnableNotifications */__webpack_require__.d(__webpack_exports__, "e", function() { return preference_state["d" /* EnableNotifications */]; });
/* concated harmony reexport DisableNotifications */__webpack_require__.d(__webpack_exports__, "d", function() { return preference_state["c" /* DisableNotifications */]; });
/* concated harmony reexport PreferenceState */__webpack_require__.d(__webpack_exports__, "f", function() { return preference_state["e" /* PreferenceState */]; });
/* unused concated harmony import ChangeOnlineStatus */
/* unused concated harmony import ChangeInstallStatus */
/* unused concated harmony import SetInstallPrompt */
/* unused concated harmony import IsOnline */
/* unused concated harmony import IsOffline */
/* unused concated harmony import AppState */
/* unused concated harmony import FetchProfile */
/* unused concated harmony import CreateProfile */
/* unused concated harmony import UpdateProfile */
/* unused concated harmony import DeleteProfile */
/* concated harmony reexport ProfileState */__webpack_require__.d(__webpack_exports__, "g", function() { return profile_state["b" /* ProfileState */]; });
/* unused concated harmony import PageTitleService */
/* unused concated harmony import ProfileService */
/* unused concated harmony import AppConfigService */
/* unused concated harmony import ServiceWorkerService */
/* unused concated harmony import MediaQueryService */
/* unused concated harmony import DeepLinkService */
/* unused concated harmony import FeatureService */
/* concated harmony reexport BrowserFeatureKey */__webpack_require__.d(__webpack_exports__, "a", function() { return feature_service["a" /* BrowserFeatureKey */]; });
/* unused concated harmony import BrowserFeature */
/* unused concated harmony import GoogleAnalyticsService */
/* unused concated harmony import PushNotificationService */
/* unused concated harmony import WINDOW */

















/***/ }),

/***/ "N1LS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toInteger; });
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
        return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}



/***/ }),

/***/ "NA/R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateModule; });
var TruncateModule = /** @class */ /*@__PURE__*/ (function () {
    function TruncateModule() {
    }
    return TruncateModule;
}());




/***/ }),

/***/ "QH8h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatCommonModuleNgFactory */
/* unused harmony export NativeDateModuleNgFactory */
/* unused harmony export MatNativeDateModuleNgFactory */
/* unused harmony export MatLineModuleNgFactory */
/* unused harmony export MatOptionModuleNgFactory */
/* unused harmony export MatRippleModuleNgFactory */
/* unused harmony export MatPseudoCheckboxModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return View_MatOption_0; });
/* unused harmony export View_MatOption_Host_0 */
/* unused harmony export MatOptionNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return View_MatOptgroup_0; });
/* unused harmony export View_MatOptgroup_Host_0 */
/* unused harmony export MatOptgroupNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RenderType_MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return View_MatPseudoCheckbox_0; });
/* unused harmony export View_MatPseudoCheckbox_Host_0 */
/* unused harmony export MatPseudoCheckboxNgFactory */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LYzL");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C7Lb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SeAg");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WV+C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WT9V");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Z5FQ");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */







var MatCommonModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MATERIAL_SANITY_CHECKS */ "f"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[/* HAMMER_LOADER */ "f"]]])]); });

var NativeDateModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateModule */ "A"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* DateAdapter */ "c"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateAdapter */ "z"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MAT_DATE_LOCALE */ "h"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* Platform */ "a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateModule */ "A"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateModule */ "A"], [])]); });

var MatNativeDateModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatNativeDateModule */ "q"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* DateAdapter */ "c"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateAdapter */ "z"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MAT_DATE_LOCALE */ "h"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* Platform */ "a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateModule */ "A"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* NativeDateModule */ "A"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatNativeDateModule */ "q"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatNativeDateModule */ "q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MAT_DATE_FORMATS */ "g"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MAT_NATIVE_DATE_FORMATS */ "k"], [])]); });

var MatLineModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatLineModule */ "p"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MATERIAL_SANITY_CHECKS */ "f"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[/* HAMMER_LOADER */ "f"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatLineModule */ "p"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatLineModule */ "p"], [])]); });

var MatOptionModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOptionModule */ "t"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__[/* NgLocalization */ "p"], _angular_common__WEBPACK_IMPORTED_MODULE_5__[/* NgLocaleLocalization */ "o"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_ID */ "z"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__[/* ɵangular_packages_common_common_a */ "F"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MATERIAL_SANITY_CHECKS */ "f"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[/* HAMMER_LOADER */ "f"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatRippleModule */ "y"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatRippleModule */ "y"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__[/* CommonModule */ "c"], _angular_common__WEBPACK_IMPORTED_MODULE_5__[/* CommonModule */ "c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckboxModule */ "w"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckboxModule */ "w"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOptionModule */ "t"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOptionModule */ "t"], [])]); });

var MatRippleModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatRippleModule */ "y"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__[/* BidiModule */ "a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatCommonModule */ "n"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MATERIAL_SANITY_CHECKS */ "f"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[/* HAMMER_LOADER */ "f"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* PlatformModule */ "b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatRippleModule */ "y"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatRippleModule */ "y"], [])]); });

var MatPseudoCheckboxModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckboxModule */ "w"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckboxModule */ "w"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckboxModule */ "w"], [])]); });

var styles_MatOption = [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"];
var RenderType_MatOption = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatOption, data: {} });

function View_MatOption_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-pseudo-checkbox", [["class", "mat-option-pseudo-checkbox mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, View_MatPseudoCheckbox_0, RenderType_MatPseudoCheckbox)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckbox */ "v"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__[/* ANIMATION_MODULE_TYPE */ "a"]]], { state: [0, "state"], disabled: [1, "disabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.selected ? "checked" : ""); var currVal_5 = _co.disabled; _ck(_v, 1, 0, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).state === "indeterminate"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).state === "checked"); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_MatOption_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵand */ "sb"](16777216, null, null, 1, null, View_MatOption_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__[/* NgIf */ "n"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ViewContainerRef */ "X"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* TemplateRef */ "T"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](2, 0, null, null, 1, "span", [["class", "mat-option-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](4, 0, null, null, 1, "div", [["class", "mat-option-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](5, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatRipple */ "x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgZone */ "F"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__[/* Platform */ "a"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MAT_RIPPLE_GLOBAL_OPTIONS */ "m"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__[/* ANIMATION_MODULE_TYPE */ "a"]]], { disabled: [0, "disabled"], trigger: [1, "trigger"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.multiple; _ck(_v, 1, 0, currVal_0); var currVal_2 = (_co.disabled || _co.disableRipple); var currVal_3 = _co._getHostElement(); _ck(_v, 5, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 5).unbounded; _ck(_v, 4, 0, currVal_1); }); }
function View_MatOption_Host_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._selectViaInteraction() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, View_MatOption_0, RenderType_MatOption)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 8568832, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOption */ "s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ChangeDetectorRef */ "i"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MAT_OPTION_PARENT_COMPONENT */ "l"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOptgroup */ "r"]]], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
var MatOptionNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-option", _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOption */ "s"], View_MatOption_Host_0, { value: "value", id: "id", disabled: "disabled" }, { onSelectionChange: "onSelectionChange" }, ["*"]);

var styles_MatOptgroup = [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"];
var RenderType_MatOptgroup = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatOptgroup, data: {} });

function View_MatOptgroup_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 2, "label", [["class", "mat-optgroup-label"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵted */ "Xb"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._labelId; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.label; _ck(_v, 1, 0, currVal_1); }); }
function View_MatOptgroup_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-optgroup", [["class", "mat-optgroup"], ["role", "group"]], [[2, "mat-optgroup-disabled", null], [1, "aria-disabled", 0], [1, "aria-labelledby", 0]], null, null, View_MatOptgroup_0, RenderType_MatOptgroup)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOptgroup */ "r"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled.toString(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._labelId; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var MatOptgroupNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-optgroup", _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatOptgroup */ "r"], View_MatOptgroup_Host_0, { disabled: "disabled", label: "label" }, {}, ["*", "mat-option, ng-container"]);

var styles_MatPseudoCheckbox = [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"];
var RenderType_MatPseudoCheckbox = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatPseudoCheckbox, data: {} });

function View_MatPseudoCheckbox_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [], null, null); }
function View_MatPseudoCheckbox_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-pseudo-checkbox", [["class", "mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, View_MatPseudoCheckbox_0, RenderType_MatPseudoCheckbox)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckbox */ "v"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__[/* ANIMATION_MODULE_TYPE */ "a"]]], null, null)], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).state === "indeterminate"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).state === "checked"); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
var MatPseudoCheckboxNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-pseudo-checkbox", _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[/* MatPseudoCheckbox */ "v"], View_MatPseudoCheckbox_Host_0, { state: "state", disabled: "disabled" }, {}, []);




/***/ }),

/***/ "UPWm":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = /*@__PURE__*/ __webpack_require__("vU7N");
var QueueAction = /*@__PURE__*/ (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;



/***/ }),

/***/ "Ulry":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideModule; });
var ClickOutsideModule = /** @class */ /*@__PURE__*/ (function () {
    function ClickOutsideModule() {
    }
    return ClickOutsideModule;
}());




/***/ }),

/***/ "V4VB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskModule; });
var MaskModule = /** @class */ /*@__PURE__*/ (function () {
    function MaskModule() {
    }
    return MaskModule;
}());




/***/ }),

/***/ "W3P+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InViewportModule; });
var InViewportModule = /** @class */ /*@__PURE__*/ (function () {
    function InViewportModule() {
    }
    return InViewportModule;
}());




/***/ }),

/***/ "XpPk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperModule; });
var HelperModule = /** @class */ /*@__PURE__*/ (function () {
    function HelperModule() {
    }
    return HelperModule;
}());




/***/ }),

/***/ "YEP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/Subject.js
var Subject = __webpack_require__("fQLH");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/observable/fromEvent.js
var fromEvent = __webpack_require__("iUUs");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/observable/merge.js
var merge = __webpack_require__("gQst");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/auditTime.js + 1 modules
var auditTime = __webpack_require__("QzdH");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__("mhnT");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__("lqvn");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm5/internal/operators/mapTo.js
var mapTo = __webpack_require__("12aA");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("LoAr");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("WT9V");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
    return getComputedStyle(element);
}
function set(element, obj) {
    for (var key in obj) {
        var val = obj[key];
        if (typeof val === 'number') {
            val = val + "px";
        }
        element.style[key] = val;
    }
    return element;
}
function div(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}
var elMatches = typeof Element !== 'undefined' &&
    (Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector);
function matches(element, query) {
    if (!elMatches) {
        throw new Error('No element matching method supported');
    }
    return elMatches.call(element, query);
}
function remove(element) {
    if (element.remove) {
        element.remove();
    }
    else {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
}
function queryChildren(element, selector) {
    return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); });
}
var cls = {
    main: 'ps',
    element: {
        thumb: function (x) { return ("ps__thumb-" + x); },
        rail: function (x) { return ("ps__rail-" + x); },
        consuming: 'ps__child--consume',
    },
    state: {
        focus: 'ps--focus',
        clicking: 'ps--clicking',
        active: function (x) { return ("ps--active-" + x); },
        scrolling: function (x) { return ("ps--scrolling-" + x); },
    },
};
/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };
function addScrollingClass(i, x) {
    var classList = i.element.classList;
    var className = cls.state.scrolling(x);
    if (classList.contains(className)) {
        clearTimeout(scrollingClassTimeout[x]);
    }
    else {
        classList.add(className);
    }
}
function removeScrollingClass(i, x) {
    scrollingClassTimeout[x] = setTimeout(function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); }, i.settings.scrollingThreshold);
}
function setScrollingClassInstantly(i, x) {
    addScrollingClass(i, x);
    removeScrollingClass(i, x);
}
var EventElement = function EventElement(element) {
    this.element = element;
    this.handlers = {};
};
var prototypeAccessors = { isEmpty: { configurable: true } };
EventElement.prototype.bind = function bind(eventName, handler) {
    if (typeof this.handlers[eventName] === 'undefined') {
        this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
    this.element.addEventListener(eventName, handler, false);
};
EventElement.prototype.unbind = function unbind(eventName, target) {
    var this$1 = this;
    this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
        if (target && handler !== target) {
            return true;
        }
        this$1.element.removeEventListener(eventName, handler, false);
        return false;
    });
};
EventElement.prototype.unbindAll = function unbindAll() {
    var this$1 = this;
    for (var name in this$1.handlers) {
        this$1.unbind(name);
    }
};
prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;
    return Object.keys(this.handlers).every(function (key) { return this$1.handlers[key].length === 0; });
};
Object.defineProperties(EventElement.prototype, prototypeAccessors);
var EventManager = function EventManager() {
    this.eventElements = [];
};
EventManager.prototype.eventElement = function eventElement(element) {
    var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
    if (!ee) {
        ee = new EventElement(element);
        this.eventElements.push(ee);
    }
    return ee;
};
EventManager.prototype.bind = function bind(element, eventName, handler) {
    this.eventElement(element).bind(eventName, handler);
};
EventManager.prototype.unbind = function unbind(element, eventName, handler) {
    var ee = this.eventElement(element);
    ee.unbind(eventName, handler);
    if (ee.isEmpty) {
        // remove
        this.eventElements.splice(this.eventElements.indexOf(ee), 1);
    }
};
EventManager.prototype.unbindAll = function unbindAll() {
    this.eventElements.forEach(function (e) { return e.unbindAll(); });
    this.eventElements = [];
};
EventManager.prototype.once = function once(element, eventName, handler) {
    var ee = this.eventElement(element);
    var onceHandler = function (evt) {
        ee.unbind(eventName, onceHandler);
        handler(evt);
    };
    ee.bind(eventName, onceHandler);
};
function createEvent(name) {
    if (typeof window.CustomEvent === 'function') {
        return new CustomEvent(name);
    }
    else {
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, false, false, undefined);
        return evt;
    }
}
var processScrollDiff = function (i, axis, diff, useScrollingClass, forceFireReachEvent) {
    if (useScrollingClass === void 0)
        useScrollingClass = true;
    if (forceFireReachEvent === void 0)
        forceFireReachEvent = false;
    var fields;
    if (axis === 'top') {
        fields = [
            'contentHeight',
            'containerHeight',
            'scrollTop',
            'y',
            'up',
            'down'
        ];
    }
    else if (axis === 'left') {
        fields = [
            'contentWidth',
            'containerWidth',
            'scrollLeft',
            'x',
            'left',
            'right'
        ];
    }
    else {
        throw new Error('A proper axis should be provided');
    }
    processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};
function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
    var contentHeight = ref[0];
    var containerHeight = ref[1];
    var scrollTop = ref[2];
    var y = ref[3];
    var up = ref[4];
    var down = ref[5];
    if (useScrollingClass === void 0)
        useScrollingClass = true;
    if (forceFireReachEvent === void 0)
        forceFireReachEvent = false;
    var element = i.element;
    // reset reach
    i.reach[y] = null;
    // 1 for subpixel rounding
    if (element[scrollTop] < 1) {
        i.reach[y] = 'start';
    }
    // 1 for subpixel rounding
    if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
        i.reach[y] = 'end';
    }
    if (diff) {
        element.dispatchEvent(createEvent(("ps-scroll-" + y)));
        if (diff < 0) {
            element.dispatchEvent(createEvent(("ps-scroll-" + up)));
        }
        else if (diff > 0) {
            element.dispatchEvent(createEvent(("ps-scroll-" + down)));
        }
        if (useScrollingClass) {
            setScrollingClassInstantly(i, y);
        }
    }
    if (i.reach[y] && (diff || forceFireReachEvent)) {
        element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
    }
}
function toInt(x) {
    return parseInt(x, 10) || 0;
}
function isEditable(el) {
    return (matches(el, 'input,[contenteditable]') ||
        matches(el, 'select,[contenteditable]') ||
        matches(el, 'textarea,[contenteditable]') ||
        matches(el, 'button,[contenteditable]'));
}
function perfect_scrollbar_esm_outerWidth(element) {
    var styles = get(element);
    return (toInt(styles.width) +
        toInt(styles.paddingLeft) +
        toInt(styles.paddingRight) +
        toInt(styles.borderLeftWidth) +
        toInt(styles.borderRightWidth));
}
var env = {
    isWebKit: typeof document !== 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
    supportsTouch: typeof window !== 'undefined' &&
        ('ontouchstart' in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)),
    supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
    isChrome: typeof navigator !== 'undefined' &&
        /Chrome/i.test(navigator && navigator.userAgent),
};
var updateGeometry = function (i) {
    var element = i.element;
    var roundedScrollTop = Math.floor(element.scrollTop);
    i.containerWidth = element.clientWidth;
    i.containerHeight = element.clientHeight;
    i.contentWidth = element.scrollWidth;
    i.contentHeight = element.scrollHeight;
    if (!element.contains(i.scrollbarXRail)) {
        // clean up and append
        queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); });
        element.appendChild(i.scrollbarXRail);
    }
    if (!element.contains(i.scrollbarYRail)) {
        // clean up and append
        queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); });
        element.appendChild(i.scrollbarYRail);
    }
    if (!i.settings.suppressScrollX &&
        i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
        i.scrollbarXActive = true;
        i.railXWidth = i.containerWidth - i.railXMarginWidth;
        i.railXRatio = i.containerWidth / i.railXWidth;
        i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
        i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) *
            (i.railXWidth - i.scrollbarXWidth) /
            (i.contentWidth - i.containerWidth));
    }
    else {
        i.scrollbarXActive = false;
    }
    if (!i.settings.suppressScrollY &&
        i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
        i.scrollbarYActive = true;
        i.railYHeight = i.containerHeight - i.railYMarginHeight;
        i.railYRatio = i.containerHeight / i.railYHeight;
        i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
        i.scrollbarYTop = toInt(roundedScrollTop *
            (i.railYHeight - i.scrollbarYHeight) /
            (i.contentHeight - i.containerHeight));
    }
    else {
        i.scrollbarYActive = false;
    }
    if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
        i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
    }
    if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
        i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
    }
    updateCss(element, i);
    if (i.scrollbarXActive) {
        element.classList.add(cls.state.active('x'));
    }
    else {
        element.classList.remove(cls.state.active('x'));
        i.scrollbarXWidth = 0;
        i.scrollbarXLeft = 0;
        element.scrollLeft = 0;
    }
    if (i.scrollbarYActive) {
        element.classList.add(cls.state.active('y'));
    }
    else {
        element.classList.remove(cls.state.active('y'));
        i.scrollbarYHeight = 0;
        i.scrollbarYTop = 0;
        element.scrollTop = 0;
    }
};
function getThumbSize(i, thumbSize) {
    if (i.settings.minScrollbarLength) {
        thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
    }
    if (i.settings.maxScrollbarLength) {
        thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
    }
    return thumbSize;
}
function updateCss(element, i) {
    var xRailOffset = { width: i.railXWidth };
    var roundedScrollTop = Math.floor(element.scrollTop);
    if (i.isRtl) {
        xRailOffset.left =
            i.negativeScrollAdjustment +
                element.scrollLeft +
                i.containerWidth -
                i.contentWidth;
    }
    else {
        xRailOffset.left = element.scrollLeft;
    }
    if (i.isScrollbarXUsingBottom) {
        xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
    }
    else {
        xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
    }
    set(i.scrollbarXRail, xRailOffset);
    var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
    if (i.isScrollbarYUsingRight) {
        if (i.isRtl) {
            yRailOffset.right =
                i.contentWidth -
                    (i.negativeScrollAdjustment + element.scrollLeft) -
                    i.scrollbarYRight -
                    i.scrollbarYOuterWidth;
        }
        else {
            yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
        }
    }
    else {
        if (i.isRtl) {
            yRailOffset.left =
                i.negativeScrollAdjustment +
                    element.scrollLeft +
                    i.containerWidth * 2 -
                    i.contentWidth -
                    i.scrollbarYLeft -
                    i.scrollbarYOuterWidth;
        }
        else {
            yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
        }
    }
    set(i.scrollbarYRail, yRailOffset);
    set(i.scrollbarX, {
        left: i.scrollbarXLeft,
        width: i.scrollbarXWidth - i.railBorderXWidth,
    });
    set(i.scrollbarY, {
        top: i.scrollbarYTop,
        height: i.scrollbarYHeight - i.railBorderYWidth,
    });
}
var clickRail = function (i) {
    i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
    i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
        var positionTop = e.pageY -
            window.pageYOffset -
            i.scrollbarYRail.getBoundingClientRect().top;
        var direction = positionTop > i.scrollbarYTop ? 1 : -1;
        i.element.scrollTop += direction * i.containerHeight;
        updateGeometry(i);
        e.stopPropagation();
    });
    i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
    i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
        var positionLeft = e.pageX -
            window.pageXOffset -
            i.scrollbarXRail.getBoundingClientRect().left;
        var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
        i.element.scrollLeft += direction * i.containerWidth;
        updateGeometry(i);
        e.stopPropagation();
    });
};
var dragThumb = function (i) {
    bindMouseScrollHandler(i, [
        'containerWidth',
        'contentWidth',
        'pageX',
        'railXWidth',
        'scrollbarX',
        'scrollbarXWidth',
        'scrollLeft',
        'x',
        'scrollbarXRail'
    ]);
    bindMouseScrollHandler(i, [
        'containerHeight',
        'contentHeight',
        'pageY',
        'railYHeight',
        'scrollbarY',
        'scrollbarYHeight',
        'scrollTop',
        'y',
        'scrollbarYRail'
    ]);
};
function bindMouseScrollHandler(i, ref) {
    var containerHeight = ref[0];
    var contentHeight = ref[1];
    var pageY = ref[2];
    var railYHeight = ref[3];
    var scrollbarY = ref[4];
    var scrollbarYHeight = ref[5];
    var scrollTop = ref[6];
    var y = ref[7];
    var scrollbarYRail = ref[8];
    var element = i.element;
    var startingScrollTop = null;
    var startingMousePageY = null;
    var scrollBy = null;
    function mouseMoveHandler(e) {
        element[scrollTop] =
            startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
        addScrollingClass(i, y);
        updateGeometry(i);
        e.stopPropagation();
        e.preventDefault();
    }
    function mouseUpHandler() {
        removeScrollingClass(i, y);
        i[scrollbarYRail].classList.remove(cls.state.clicking);
        i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    }
    i.event.bind(i[scrollbarY], 'mousedown', function (e) {
        startingScrollTop = element[scrollTop];
        startingMousePageY = e[pageY];
        scrollBy =
            (i[contentHeight] - i[containerHeight]) /
                (i[railYHeight] - i[scrollbarYHeight]);
        i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
        i[scrollbarYRail].classList.add(cls.state.clicking);
        e.stopPropagation();
        e.preventDefault();
    });
}
var keyboard = function (i) {
    var element = i.element;
    var elementHovered = function () { return matches(element, ':hover'); };
    var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };
    function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = Math.floor(element.scrollTop);
        if (deltaX === 0) {
            if (!i.scrollbarYActive) {
                return false;
            }
            if ((scrollTop === 0 && deltaY > 0) ||
                (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
                return !i.settings.wheelPropagation;
            }
        }
        var scrollLeft = element.scrollLeft;
        if (deltaY === 0) {
            if (!i.scrollbarXActive) {
                return false;
            }
            if ((scrollLeft === 0 && deltaX < 0) ||
                (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
                return !i.settings.wheelPropagation;
            }
        }
        return true;
    }
    i.event.bind(i.ownerDocument, 'keydown', function (e) {
        if ((e.isDefaultPrevented && e.isDefaultPrevented()) ||
            e.defaultPrevented) {
            return;
        }
        if (!elementHovered() && !scrollbarFocused()) {
            return;
        }
        var activeElement = document.activeElement
            ? document.activeElement
            : i.ownerDocument.activeElement;
        if (activeElement) {
            if (activeElement.tagName === 'IFRAME') {
                activeElement = activeElement.contentDocument.activeElement;
            }
            else {
                // go deeper if element is a webcomponent
                while (activeElement.shadowRoot) {
                    activeElement = activeElement.shadowRoot.activeElement;
                }
            }
            if (isEditable(activeElement)) {
                return;
            }
        }
        var deltaX = 0;
        var deltaY = 0;
        switch (e.which) {
            case 37: // left
                if (e.metaKey) {
                    deltaX = -i.contentWidth;
                }
                else if (e.altKey) {
                    deltaX = -i.containerWidth;
                }
                else {
                    deltaX = -30;
                }
                break;
            case 38: // up
                if (e.metaKey) {
                    deltaY = i.contentHeight;
                }
                else if (e.altKey) {
                    deltaY = i.containerHeight;
                }
                else {
                    deltaY = 30;
                }
                break;
            case 39: // right
                if (e.metaKey) {
                    deltaX = i.contentWidth;
                }
                else if (e.altKey) {
                    deltaX = i.containerWidth;
                }
                else {
                    deltaX = 30;
                }
                break;
            case 40: // down
                if (e.metaKey) {
                    deltaY = -i.contentHeight;
                }
                else if (e.altKey) {
                    deltaY = -i.containerHeight;
                }
                else {
                    deltaY = -30;
                }
                break;
            case 32: // space bar
                if (e.shiftKey) {
                    deltaY = i.containerHeight;
                }
                else {
                    deltaY = -i.containerHeight;
                }
                break;
            case 33: // page up
                deltaY = i.containerHeight;
                break;
            case 34: // page down
                deltaY = -i.containerHeight;
                break;
            case 36: // home
                deltaY = i.contentHeight;
                break;
            case 35: // end
                deltaY = -i.contentHeight;
                break;
            default:
                return;
        }
        if (i.settings.suppressScrollX && deltaX !== 0) {
            return;
        }
        if (i.settings.suppressScrollY && deltaY !== 0) {
            return;
        }
        element.scrollTop -= deltaY;
        element.scrollLeft += deltaX;
        updateGeometry(i);
        if (shouldPreventDefault(deltaX, deltaY)) {
            e.preventDefault();
        }
    });
};
var wheel = function (i) {
    var element = i.element;
    function shouldPreventDefault(deltaX, deltaY) {
        var roundedScrollTop = Math.floor(element.scrollTop);
        var isTop = element.scrollTop === 0;
        var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
        var isLeft = element.scrollLeft === 0;
        var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
        var hitsBound;
        // pick axis with primary direction
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            hitsBound = isTop || isBottom;
        }
        else {
            hitsBound = isLeft || isRight;
        }
        return hitsBound ? !i.settings.wheelPropagation : true;
    }
    function getDeltaFromEvent(e) {
        var deltaX = e.deltaX;
        var deltaY = -1 * e.deltaY;
        if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
            // OS X Safari
            deltaX = -1 * e.wheelDeltaX / 6;
            deltaY = e.wheelDeltaY / 6;
        }
        if (e.deltaMode && e.deltaMode === 1) {
            // Firefox in deltaMode 1: Line scrolling
            deltaX *= 10;
            deltaY *= 10;
        }
        if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
            // IE in some mouse drivers
            deltaX = 0;
            deltaY = e.wheelDelta;
        }
        if (e.shiftKey) {
            // reverse axis with shift key
            return [-deltaY, -deltaX];
        }
        return [deltaX, deltaY];
    }
    function shouldBeConsumedByChild(target, deltaX, deltaY) {
        // FIXME: this is a workaround for <select> issue in FF and IE #571
        if (!env.isWebKit && element.querySelector('select:focus')) {
            return true;
        }
        if (!element.contains(target)) {
            return false;
        }
        var cursor = target;
        while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
                return true;
            }
            var style = get(cursor);
            var overflow = [style.overflow, style.overflowX, style.overflowY].join('');
            // if scrollable
            if (overflow.match(/(scroll|auto)/)) {
                var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
                if (maxScrollTop > 0) {
                    if (!(cursor.scrollTop === 0 && deltaY > 0) &&
                        !(cursor.scrollTop === maxScrollTop && deltaY < 0)) {
                        return true;
                    }
                }
                var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
                if (maxScrollLeft > 0) {
                    if (!(cursor.scrollLeft === 0 && deltaX < 0) &&
                        !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)) {
                        return true;
                    }
                }
            }
            cursor = cursor.parentNode;
        }
        return false;
    }
    function mousewheelHandler(e) {
        var ref = getDeltaFromEvent(e);
        var deltaX = ref[0];
        var deltaY = ref[1];
        if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
            return;
        }
        var shouldPrevent = false;
        if (!i.settings.useBothWheelAxes) {
            // deltaX will only be used for horizontal scrolling and deltaY will
            // only be used for vertical scrolling - this is the default
            element.scrollTop -= deltaY * i.settings.wheelSpeed;
            element.scrollLeft += deltaX * i.settings.wheelSpeed;
        }
        else if (i.scrollbarYActive && !i.scrollbarXActive) {
            // only vertical scrollbar is active and useBothWheelAxes option is
            // active, so let's scroll vertical bar using both mouse wheel axes
            if (deltaY) {
                element.scrollTop -= deltaY * i.settings.wheelSpeed;
            }
            else {
                element.scrollTop += deltaX * i.settings.wheelSpeed;
            }
            shouldPrevent = true;
        }
        else if (i.scrollbarXActive && !i.scrollbarYActive) {
            // useBothWheelAxes and only horizontal bar is active, so use both
            // wheel axes for horizontal bar
            if (deltaX) {
                element.scrollLeft += deltaX * i.settings.wheelSpeed;
            }
            else {
                element.scrollLeft -= deltaY * i.settings.wheelSpeed;
            }
            shouldPrevent = true;
        }
        updateGeometry(i);
        shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
        if (shouldPrevent && !e.ctrlKey) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    if (typeof window.onwheel !== 'undefined') {
        i.event.bind(element, 'wheel', mousewheelHandler);
    }
    else if (typeof window.onmousewheel !== 'undefined') {
        i.event.bind(element, 'mousewheel', mousewheelHandler);
    }
};
var touch = function (i) {
    if (!env.supportsTouch && !env.supportsIePointer) {
        return;
    }
    var element = i.element;
    function shouldPrevent(deltaX, deltaY) {
        var scrollTop = Math.floor(element.scrollTop);
        var scrollLeft = element.scrollLeft;
        var magnitudeX = Math.abs(deltaX);
        var magnitudeY = Math.abs(deltaY);
        if (magnitudeY > magnitudeX) {
            // user is perhaps trying to swipe up/down the page
            if ((deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
                (deltaY > 0 && scrollTop === 0)) {
                // set prevent for mobile Chrome refresh
                return window.scrollY === 0 && deltaY > 0 && env.isChrome;
            }
        }
        else if (magnitudeX > magnitudeY) {
            // user is perhaps trying to swipe left/right across the page
            if ((deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
                (deltaX > 0 && scrollLeft === 0)) {
                return true;
            }
        }
        return true;
    }
    function applyTouchMove(differenceX, differenceY) {
        element.scrollTop -= differenceY;
        element.scrollLeft -= differenceX;
        updateGeometry(i);
    }
    var startOffset = {};
    var startTime = 0;
    var speed = {};
    var easingLoop = null;
    function getTouch(e) {
        if (e.targetTouches) {
            return e.targetTouches[0];
        }
        else {
            // Maybe IE pointer
            return e;
        }
    }
    function shouldHandle(e) {
        if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
            return false;
        }
        if (e.targetTouches && e.targetTouches.length === 1) {
            return true;
        }
        if (e.pointerType &&
            e.pointerType !== 'mouse' &&
            e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
            return true;
        }
        return false;
    }
    function touchStart(e) {
        if (!shouldHandle(e)) {
            return;
        }
        var touch = getTouch(e);
        startOffset.pageX = touch.pageX;
        startOffset.pageY = touch.pageY;
        startTime = new Date().getTime();
        if (easingLoop !== null) {
            clearInterval(easingLoop);
        }
    }
    function shouldBeConsumedByChild(target, deltaX, deltaY) {
        if (!element.contains(target)) {
            return false;
        }
        var cursor = target;
        while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
                return true;
            }
            var style = get(cursor);
            var overflow = [style.overflow, style.overflowX, style.overflowY].join('');
            // if scrollable
            if (overflow.match(/(scroll|auto)/)) {
                var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
                if (maxScrollTop > 0) {
                    if (!(cursor.scrollTop === 0 && deltaY > 0) &&
                        !(cursor.scrollTop === maxScrollTop && deltaY < 0)) {
                        return true;
                    }
                }
                var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
                if (maxScrollLeft > 0) {
                    if (!(cursor.scrollLeft === 0 && deltaX < 0) &&
                        !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)) {
                        return true;
                    }
                }
            }
            cursor = cursor.parentNode;
        }
        return false;
    }
    function touchMove(e) {
        if (shouldHandle(e)) {
            var touch = getTouch(e);
            var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };
            var differenceX = currentOffset.pageX - startOffset.pageX;
            var differenceY = currentOffset.pageY - startOffset.pageY;
            if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
                return;
            }
            applyTouchMove(differenceX, differenceY);
            startOffset = currentOffset;
            var currentTime = new Date().getTime();
            var timeGap = currentTime - startTime;
            if (timeGap > 0) {
                speed.x = differenceX / timeGap;
                speed.y = differenceY / timeGap;
                startTime = currentTime;
            }
            if (shouldPrevent(differenceX, differenceY)) {
                e.preventDefault();
            }
        }
    }
    function touchEnd() {
        if (i.settings.swipeEasing) {
            clearInterval(easingLoop);
            easingLoop = setInterval(function () {
                if (i.isInitialized) {
                    clearInterval(easingLoop);
                    return;
                }
                if (!speed.x && !speed.y) {
                    clearInterval(easingLoop);
                    return;
                }
                if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                    clearInterval(easingLoop);
                    return;
                }
                applyTouchMove(speed.x * 30, speed.y * 30);
                speed.x *= 0.8;
                speed.y *= 0.8;
            }, 10);
        }
    }
    if (env.supportsTouch) {
        i.event.bind(element, 'touchstart', touchStart);
        i.event.bind(element, 'touchmove', touchMove);
        i.event.bind(element, 'touchend', touchEnd);
    }
    else if (env.supportsIePointer) {
        if (window.PointerEvent) {
            i.event.bind(element, 'pointerdown', touchStart);
            i.event.bind(element, 'pointermove', touchMove);
            i.event.bind(element, 'pointerup', touchEnd);
        }
        else if (window.MSPointerEvent) {
            i.event.bind(element, 'MSPointerDown', touchStart);
            i.event.bind(element, 'MSPointerMove', touchMove);
            i.event.bind(element, 'MSPointerUp', touchEnd);
        }
    }
};
var defaultSettings = function () {
    return ({
        handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1000,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: false,
        suppressScrollY: false,
        swipeEasing: true,
        useBothWheelAxes: false,
        wheelPropagation: true,
        wheelSpeed: 1,
    });
};
var handlers = {
    'click-rail': clickRail,
    'drag-thumb': dragThumb,
    keyboard: keyboard,
    wheel: wheel,
    touch: touch,
};
var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
    var this$1 = this;
    if (userSettings === void 0)
        userSettings = {};
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    if (!element || !element.nodeName) {
        throw new Error('no element is specified to initialize PerfectScrollbar');
    }
    this.element = element;
    element.classList.add(cls.main);
    this.settings = defaultSettings();
    for (var key in userSettings) {
        this$1.settings[key] = userSettings[key];
    }
    this.containerWidth = null;
    this.containerHeight = null;
    this.contentWidth = null;
    this.contentHeight = null;
    var focus = function () { return element.classList.add(cls.state.focus); };
    var blur = function () { return element.classList.remove(cls.state.focus); };
    this.isRtl = get(element).direction === 'rtl';
    this.isNegativeScroll = (function () {
        var originalScrollLeft = element.scrollLeft;
        var result = null;
        element.scrollLeft = -1;
        result = element.scrollLeft < 0;
        element.scrollLeft = originalScrollLeft;
        return result;
    })();
    this.negativeScrollAdjustment = this.isNegativeScroll
        ? element.scrollWidth - element.clientWidth
        : 0;
    this.event = new EventManager();
    this.ownerDocument = element.ownerDocument || document;
    this.scrollbarXRail = div(cls.element.rail('x'));
    element.appendChild(this.scrollbarXRail);
    this.scrollbarX = div(cls.element.thumb('x'));
    this.scrollbarXRail.appendChild(this.scrollbarX);
    this.scrollbarX.setAttribute('tabindex', 0);
    this.event.bind(this.scrollbarX, 'focus', focus);
    this.event.bind(this.scrollbarX, 'blur', blur);
    this.scrollbarXActive = null;
    this.scrollbarXWidth = null;
    this.scrollbarXLeft = null;
    var railXStyle = get(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
    if (isNaN(this.scrollbarXBottom)) {
        this.isScrollbarXUsingBottom = false;
        this.scrollbarXTop = toInt(railXStyle.top);
    }
    else {
        this.isScrollbarXUsingBottom = true;
    }
    this.railBorderXWidth =
        toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
    // Set rail to display:block to calculate margins
    set(this.scrollbarXRail, { display: 'block' });
    this.railXMarginWidth =
        toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
    set(this.scrollbarXRail, { display: '' });
    this.railXWidth = null;
    this.railXRatio = null;
    this.scrollbarYRail = div(cls.element.rail('y'));
    element.appendChild(this.scrollbarYRail);
    this.scrollbarY = div(cls.element.thumb('y'));
    this.scrollbarYRail.appendChild(this.scrollbarY);
    this.scrollbarY.setAttribute('tabindex', 0);
    this.event.bind(this.scrollbarY, 'focus', focus);
    this.event.bind(this.scrollbarY, 'blur', blur);
    this.scrollbarYActive = null;
    this.scrollbarYHeight = null;
    this.scrollbarYTop = null;
    var railYStyle = get(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(railYStyle.right, 10);
    if (isNaN(this.scrollbarYRight)) {
        this.isScrollbarYUsingRight = false;
        this.scrollbarYLeft = toInt(railYStyle.left);
    }
    else {
        this.isScrollbarYUsingRight = true;
    }
    this.scrollbarYOuterWidth = this.isRtl ? perfect_scrollbar_esm_outerWidth(this.scrollbarY) : null;
    this.railBorderYWidth =
        toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
    set(this.scrollbarYRail, { display: 'block' });
    this.railYMarginHeight =
        toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
    set(this.scrollbarYRail, { display: '' });
    this.railYHeight = null;
    this.railYRatio = null;
    this.reach = {
        x: element.scrollLeft <= 0
            ? 'start'
            : element.scrollLeft >= this.contentWidth - this.containerWidth
                ? 'end'
                : null,
        y: element.scrollTop <= 0
            ? 'start'
            : element.scrollTop >= this.contentHeight - this.containerHeight
                ? 'end'
                : null,
    };
    this.isAlive = true;
    this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });
    this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
    this.lastScrollLeft = element.scrollLeft; // for onScroll only
    this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
    updateGeometry(this);
};
PerfectScrollbar.prototype.update = function update() {
    if (!this.isAlive) {
        return;
    }
    // Recalcuate negative scrollLeft adjustment
    this.negativeScrollAdjustment = this.isNegativeScroll
        ? this.element.scrollWidth - this.element.clientWidth
        : 0;
    // Recalculate rail margins
    set(this.scrollbarXRail, { display: 'block' });
    set(this.scrollbarYRail, { display: 'block' });
    this.railXMarginWidth =
        toInt(get(this.scrollbarXRail).marginLeft) +
            toInt(get(this.scrollbarXRail).marginRight);
    this.railYMarginHeight =
        toInt(get(this.scrollbarYRail).marginTop) +
            toInt(get(this.scrollbarYRail).marginBottom);
    // Hide scrollbars not to affect scrollWidth and scrollHeight
    set(this.scrollbarXRail, { display: 'none' });
    set(this.scrollbarYRail, { display: 'none' });
    updateGeometry(this);
    processScrollDiff(this, 'top', 0, false, true);
    processScrollDiff(this, 'left', 0, false, true);
    set(this.scrollbarXRail, { display: '' });
    set(this.scrollbarYRail, { display: '' });
};
PerfectScrollbar.prototype.onScroll = function onScroll(e) {
    if (!this.isAlive) {
        return;
    }
    updateGeometry(this);
    processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
    processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
    this.lastScrollTop = Math.floor(this.element.scrollTop);
    this.lastScrollLeft = this.element.scrollLeft;
};
PerfectScrollbar.prototype.destroy = function destroy() {
    if (!this.isAlive) {
        return;
    }
    this.event.unbindAll();
    remove(this.scrollbarX);
    remove(this.scrollbarY);
    remove(this.scrollbarXRail);
    remove(this.scrollbarYRail);
    this.removePsClasses();
    // unset elements
    this.element = null;
    this.scrollbarX = null;
    this.scrollbarY = null;
    this.scrollbarXRail = null;
    this.scrollbarYRail = null;
    this.isAlive = false;
};
PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
    this.element.className = this.element.className
        .split(' ')
        .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
        .join(' ');
};
/* harmony default export */ var perfect_scrollbar_esm = (PerfectScrollbar);


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ var ResizeObserver_es = (index);

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js
/* unused harmony export Geometry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PERFECT_SCROLLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ngx_perfect_scrollbar_es5_PerfectScrollbarComponent; });
/* unused harmony export PerfectScrollbarConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ngx_perfect_scrollbar_es5_PerfectScrollbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PerfectScrollbarModule; });
/* unused harmony export Position */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PERFECT_SCROLLBAR_CONFIG = new core["u" /* InjectionToken */]('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ /*@__PURE__*/ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
var Position = /** @class */ /*@__PURE__*/ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
/** @type {?} */
var PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ /*@__PURE__*/ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) {
            config = {};
        }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
        function (config) {
            if (config === void 0) {
                config = {};
            }
            for (var key in config) {
                this[( /** @type {?} */(key))] = config[( /** @type {?} */(key))];
            }
        };
    return PerfectScrollbarConfig;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ngx_perfect_scrollbar_es5_PerfectScrollbarDirective = /** @class */ /*@__PURE__*/ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new Subject["a" /* Subject */]();
        this.disabled = false;
        this.psScrollY = new core["p" /* EventEmitter */]();
        this.psScrollX = new core["p" /* EventEmitter */]();
        this.psScrollUp = new core["p" /* EventEmitter */]();
        this.psScrollDown = new core["p" /* EventEmitter */]();
        this.psScrollLeft = new core["p" /* EventEmitter */]();
        this.psScrollRight = new core["p" /* EventEmitter */]();
        this.psYReachEnd = new core["p" /* EventEmitter */]();
        this.psYReachStart = new core["p" /* EventEmitter */]();
        this.psXReachEnd = new core["p" /* EventEmitter */]();
        this.psXReachStart = new core["p" /* EventEmitter */]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (!this.disabled && Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                /** @type {?} */
                var config_1 = new PerfectScrollbarConfig(this.defaults);
                config_1.assign(this.config); // Custom configuration
                this.zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    _this.instance = new perfect_scrollbar_esm(_this.elementRef.nativeElement, config_1);
                }));
                if (!this.configDiff) {
                    this.configDiff = this.differs.find(this.config || {}).create();
                    this.configDiff.diff(this.config || {});
                }
                this.zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    _this.ro = new ResizeObserver_es(( /**
                     * @return {?}
                     */function () {
                        _this.update();
                    }));
                    if (_this.elementRef.nativeElement.children[0]) {
                        _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                    }
                    _this.ro.observe(_this.elementRef.nativeElement);
                }));
                this.zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    PerfectScrollbarEvents.forEach(( /**
                     * @param {?} eventName
                     * @return {?}
                     */function (eventName) {
                        /** @type {?} */
                        var eventType = eventName.replace(/([A-Z])/g, ( /**
                         * @param {?} c
                         * @return {?}
                         */function (c) { return "-" + c.toLowerCase(); }));
                        Object(fromEvent["a" /* fromEvent */])(_this.elementRef.nativeElement, eventType)
                            .pipe(Object(auditTime["a" /* auditTime */])(20), Object(takeUntil["a" /* takeUntil */])(_this.ngDestroy))
                            .subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                            _this[eventName].emit(event);
                        }));
                    }));
                }));
            }
        };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.complete();
                if (this.ro) {
                    this.ro.disconnect();
                }
                if (this.timeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.timeout);
                }
                this.zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    if (_this.instance) {
                        _this.instance.destroy();
                    }
                }));
                this.instance = null;
            }
        };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
        function () {
            if (!this.disabled && this.configDiff && Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                /** @type {?} */
                var changes = this.configDiff.diff(this.config || {});
                if (changes) {
                    this.ngOnDestroy();
                    this.ngOnInit();
                }
            }
        };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
        function (changes) {
            if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                    if (changes['disabled'].currentValue === true) {
                        this.ngOnDestroy();
                    }
                    else if (changes['disabled'].currentValue === false) {
                        this.ngOnInit();
                    }
                }
            }
        };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
        function () {
            return this.instance;
        };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (typeof window !== 'undefined') {
                if (this.timeout) {
                    window.clearTimeout(this.timeout);
                }
                this.timeout = window.setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (!_this.disabled && _this.configDiff) {
                        try {
                            _this.zone.runOutsideAngular(( /**
                             * @return {?}
                             */function () {
                                if (_this.instance) {
                                    _this.instance.update();
                                }
                            }));
                        }
                        catch (error) {
                            // Update can be finished after destroy so catch errors
                        }
                    }
                }), 0);
            }
        };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
        function (prefix) {
            if (prefix === void 0) {
                prefix = 'scroll';
            }
            return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
        };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
        function (absolute) {
            if (absolute === void 0) {
                absolute = false;
            }
            if (!absolute && this.instance) {
                return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
            }
            else {
                return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
            }
        };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
        function (direction) {
            if (direction === void 0) {
                direction = 'any';
            }
            /** @type {?} */
            var element = this.elementRef.nativeElement;
            if (direction === 'any') {
                return element.classList.contains('ps--active-x') ||
                    element.classList.contains('ps--active-y');
            }
            else if (direction === 'both') {
                return element.classList.contains('ps--active-x') &&
                    element.classList.contains('ps--active-y');
            }
            else {
                return element.classList.contains('ps--active-' + direction);
            }
        };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
        function (x, y, speed) {
            if (!this.disabled) {
                if (y == null && speed == null) {
                    this.animateScrolling('scrollTop', x, speed);
                }
                else {
                    if (x != null) {
                        this.animateScrolling('scrollLeft', x, speed);
                    }
                    if (y != null) {
                        this.animateScrolling('scrollTop', y, speed);
                    }
                }
            }
        };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
        function (x, speed) {
            this.animateScrolling('scrollLeft', x, speed);
        };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
        function (y, speed) {
            this.animateScrolling('scrollTop', y, speed);
        };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
        function (offset, speed) {
            this.animateScrolling('scrollTop', (offset || 0), speed);
        };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
        function (offset, speed) {
            this.animateScrolling('scrollLeft', (offset || 0), speed);
        };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
        function (offset, speed) {
            /** @type {?} */
            var left = this.elementRef.nativeElement.scrollWidth -
                this.elementRef.nativeElement.clientWidth;
            this.animateScrolling('scrollLeft', left - (offset || 0), speed);
        };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
        function (offset, speed) {
            /** @type {?} */
            var top = this.elementRef.nativeElement.scrollHeight -
                this.elementRef.nativeElement.clientHeight;
            this.animateScrolling('scrollTop', top - (offset || 0), speed);
        };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
        function (qs, offset, speed) {
            /** @type {?} */
            var element = this.elementRef.nativeElement.querySelector(qs);
            if (element) {
                /** @type {?} */
                var elementPos = element.getBoundingClientRect();
                /** @type {?} */
                var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
                if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                    /** @type {?} */
                    var currentPos = this.elementRef.nativeElement['scrollLeft'];
                    /** @type {?} */
                    var position = elementPos.left - scrollerPos.left + currentPos;
                    this.animateScrolling('scrollLeft', position + (offset || 0), speed);
                }
                if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                    /** @type {?} */
                    var currentPos = this.elementRef.nativeElement['scrollTop'];
                    /** @type {?} */
                    var position = elementPos.top - scrollerPos.top + currentPos;
                    this.animateScrolling('scrollTop', position + (offset || 0), speed);
                }
            }
        };
    /**
     * @private
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @private
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
        function (target, value, speed) {
            var _this = this;
            if (this.animation) {
                window.cancelAnimationFrame(this.animation);
                this.animation = null;
            }
            if (!speed || typeof window === 'undefined') {
                this.elementRef.nativeElement[target] = value;
            }
            else if (value !== this.elementRef.nativeElement[target]) {
                /** @type {?} */
                var newValue_1 = 0;
                /** @type {?} */
                var scrollCount_1 = 0;
                /** @type {?} */
                var oldTimestamp_1 = performance.now();
                /** @type {?} */
                var oldValue_1 = this.elementRef.nativeElement[target];
                /** @type {?} */
                var cosParameter_1 = (oldValue_1 - value) / 2;
                /** @type {?} */
                var step_1 = ( /**
                 * @param {?} newTimestamp
                 * @return {?}
                 */function (newTimestamp) {
                    scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                    newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                    // Only continue animation if scroll position has not changed
                    if (_this.elementRef.nativeElement[target] === oldValue_1) {
                        if (scrollCount_1 >= Math.PI) {
                            _this.animateScrolling(target, value, 0);
                        }
                        else {
                            _this.elementRef.nativeElement[target] = newValue_1;
                            // On a zoomed out page the resulting offset may differ
                            oldValue_1 = _this.elementRef.nativeElement[target];
                            oldTimestamp_1 = newTimestamp;
                            _this.animation = window.requestAnimationFrame(step_1);
                        }
                    }
                });
                window.requestAnimationFrame(step_1);
            }
        };
    return PerfectScrollbarDirective;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ngx_perfect_scrollbar_es5_PerfectScrollbarComponent = /** @class */ /*@__PURE__*/ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new Subject["a" /* Subject */]();
        this.stateUpdate = new Subject["a" /* Subject */]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new core["p" /* EventEmitter */]();
        this.psScrollX = new core["p" /* EventEmitter */]();
        this.psScrollUp = new core["p" /* EventEmitter */]();
        this.psScrollDown = new core["p" /* EventEmitter */]();
        this.psScrollLeft = new core["p" /* EventEmitter */]();
        this.psScrollRight = new core["p" /* EventEmitter */]();
        this.psYReachEnd = new core["p" /* EventEmitter */]();
        this.psYReachStart = new core["p" /* EventEmitter */]();
        this.psXReachEnd = new core["p" /* EventEmitter */]();
        this.psXReachStart = new core["p" /* EventEmitter */]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                this.stateUpdate
                    .pipe(Object(takeUntil["a" /* takeUntil */])(this.ngDestroy), Object(distinctUntilChanged["a" /* distinctUntilChanged */])(( /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */function (a, b) { return (a === b && !_this.stateTimeout); })))
                    .subscribe(( /**
             * @param {?} state
             * @return {?}
             */function (state) {
                    if (_this.stateTimeout && typeof window !== 'undefined') {
                        window.clearTimeout(_this.stateTimeout);
                        _this.stateTimeout = null;
                    }
                    if (state === 'x' || state === 'y') {
                        _this.interaction = false;
                        if (state === 'x') {
                            _this.indicatorX = false;
                            _this.states.left = false;
                            _this.states.right = false;
                            if (_this.autoPropagation && _this.usePropagationX) {
                                _this.allowPropagationX = false;
                            }
                        }
                        else if (state === 'y') {
                            _this.indicatorY = false;
                            _this.states.top = false;
                            _this.states.bottom = false;
                            if (_this.autoPropagation && _this.usePropagationY) {
                                _this.allowPropagationY = false;
                            }
                        }
                    }
                    else {
                        if (state === 'left' || state === 'right') {
                            _this.states.left = false;
                            _this.states.right = false;
                            _this.states[state] = true;
                            if (_this.autoPropagation && _this.usePropagationX) {
                                _this.indicatorX = true;
                            }
                        }
                        else if (state === 'top' || state === 'bottom') {
                            _this.states.top = false;
                            _this.states.bottom = false;
                            _this.states[state] = true;
                            if (_this.autoPropagation && _this.usePropagationY) {
                                _this.indicatorY = true;
                            }
                        }
                        if (_this.autoPropagation && typeof window !== 'undefined') {
                            _this.stateTimeout = window.setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this.indicatorX = false;
                                _this.indicatorY = false;
                                _this.stateTimeout = null;
                                if (_this.interaction && (_this.states.left || _this.states.right)) {
                                    _this.allowPropagationX = true;
                                }
                                if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                    _this.allowPropagationY = true;
                                }
                                _this.cdRef.markForCheck();
                            }), 500);
                        }
                    }
                    _this.cdRef.markForCheck();
                    _this.cdRef.detectChanges();
                }));
                this.zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    if (_this.directiveRef) {
                        /** @type {?} */
                        var element = _this.directiveRef.elementRef.nativeElement;
                        Object(fromEvent["a" /* fromEvent */])(element, 'wheel')
                            .pipe(Object(takeUntil["a" /* takeUntil */])(_this.ngDestroy))
                            .subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                            if (!_this.disabled && _this.autoPropagation) {
                                /** @type {?} */
                                var scrollDeltaX = event.deltaX;
                                /** @type {?} */
                                var scrollDeltaY = event.deltaY;
                                _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            }
                        }));
                        Object(fromEvent["a" /* fromEvent */])(element, 'touchmove')
                            .pipe(Object(takeUntil["a" /* takeUntil */])(_this.ngDestroy))
                            .subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                            if (!_this.disabled && _this.autoPropagation) {
                                /** @type {?} */
                                var scrollPositionX = event.touches[0].clientX;
                                /** @type {?} */
                                var scrollPositionY = event.touches[0].clientY;
                                /** @type {?} */
                                var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                                /** @type {?} */
                                var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                                _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                                _this.scrollPositionX = scrollPositionX;
                                _this.scrollPositionY = scrollPositionY;
                            }
                        }));
                        Object(merge["a" /* merge */])(Object(fromEvent["a" /* fromEvent */])(element, 'ps-scroll-x')
                            .pipe(Object(mapTo["a" /* mapTo */])('x')), Object(fromEvent["a" /* fromEvent */])(element, 'ps-scroll-y')
                            .pipe(Object(mapTo["a" /* mapTo */])('y')), Object(fromEvent["a" /* fromEvent */])(element, 'ps-x-reach-end')
                            .pipe(Object(mapTo["a" /* mapTo */])('right')), Object(fromEvent["a" /* fromEvent */])(element, 'ps-y-reach-end')
                            .pipe(Object(mapTo["a" /* mapTo */])('bottom')), Object(fromEvent["a" /* fromEvent */])(element, 'ps-x-reach-start')
                            .pipe(Object(mapTo["a" /* mapTo */])('left')), Object(fromEvent["a" /* fromEvent */])(element, 'ps-y-reach-start')
                            .pipe(Object(mapTo["a" /* mapTo */])('top')))
                            .pipe(Object(takeUntil["a" /* takeUntil */])(_this.ngDestroy))
                            .subscribe(( /**
                     * @param {?} state
                     * @return {?}
                     */function (state) {
                            if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                                _this.stateUpdate.next(state);
                            }
                        }));
                    }
                }));
                window.setTimeout(( /**
                 * @return {?}
                 */function () {
                    PerfectScrollbarEvents.forEach(( /**
                     * @param {?} eventName
                     * @return {?}
                     */function (eventName) {
                        if (_this.directiveRef) {
                            _this.directiveRef[eventName] = _this[eventName];
                        }
                    }));
                }), 0);
            }
        };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            if (Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.unsubscribe();
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                }
            }
        };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
        function () {
            if (Object(common["y" /* isPlatformBrowser */])(this.platformId)) {
                if (!this.disabled && this.autoPropagation && this.directiveRef) {
                    /** @type {?} */
                    var element = this.directiveRef.elementRef.nativeElement;
                    this.usePropagationX = element.classList.contains('ps--active-x');
                    this.usePropagationY = element.classList.contains('ps--active-y');
                }
            }
        };
    /**
     * @private
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @private
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
        function (event, deltaX, deltaY) {
            this.interaction = true;
            /** @type {?} */
            var scrollDirectionX = (deltaX < 0) ? -1 : 1;
            /** @type {?} */
            var scrollDirectionY = (deltaY < 0) ? -1 : 1;
            if ((this.usePropagationX && this.usePropagationY) ||
                (this.usePropagationX && (!this.allowPropagationX ||
                    (this.scrollDirectionX !== scrollDirectionX))) ||
                (this.usePropagationY && (!this.allowPropagationY ||
                    (this.scrollDirectionY !== scrollDirectionY)))) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (!!deltaX) {
                this.scrollDirectionX = scrollDirectionX;
            }
            if (!!deltaY) {
                this.scrollDirectionY = scrollDirectionY;
            }
            this.stateUpdate.next('interaction');
            this.cdRef.detectChanges();
        };
    return PerfectScrollbarComponent;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarModule = /** @class */ /*@__PURE__*/ (function () {
    function PerfectScrollbarModule() {
    }
    return PerfectScrollbarModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "ZPUs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePickerModule; });
var ThemePickerModule = /** @class */ /*@__PURE__*/ (function () {
    function ThemePickerModule() {
    }
    return ThemePickerModule;
}());




/***/ }),

/***/ "b2y2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var SharedModule = /** @class */ /*@__PURE__*/ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());




/***/ }),

/***/ "c5IV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPerfectScrollbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ɵ0; });
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true,
};
var ɵ0 = DEFAULT_PERFECT_SCROLLBAR_CONFIG;
var SharedPerfectScrollbarModule = /** @class */ /*@__PURE__*/ (function () {
    function SharedPerfectScrollbarModule() {
    }
    return SharedPerfectScrollbarModule;
}());





/***/ }),

/***/ "ci3w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;



/***/ }),

/***/ "dI1K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === 'string') {
        result = formatDistanceLocale[token];
    }
    else if (count === 1) {
        result = formatDistanceLocale[token].one;
    }
    else {
        result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }
    if (options.addSuffix) {
        if (options.comparison > 0) {
            return 'in ' + result;
        }
        else {
            return result + ' ago';
        }
    }
    return result;
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
    return function (dirtyOptions) {
        var options = dirtyOptions || {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: /*@__PURE__*/ buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: /*@__PURE__*/ buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: /*@__PURE__*/ buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
/* harmony default export */ var _lib_formatLong = (formatLong);


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
    return function (dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var context = options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        }
        else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
    };
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.
};
var monthValues = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
function ordinalNumber(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`:
    //
    //   var options = dirtyOptions || {}
    //   var unit = String(options.unit)
    //
    // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
}
var localize = {
    ordinalNumber: ordinalNumber,
    era: /*@__PURE__*/ buildLocalizeFn({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: /*@__PURE__*/ buildLocalizeFn({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function (quarter) {
            return Number(quarter) - 1;
        }
    }),
    month: /*@__PURE__*/ buildLocalizeFn({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: /*@__PURE__*/ buildLocalizeFn({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: /*@__PURE__*/ buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
/* harmony default export */ var _lib_localize = (localize);


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
    return function (dirtyString, dirtyOptions) {
        var string = String(dirtyString);
        var options = dirtyOptions || {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) {
            return null;
        }
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        return {
            value: value,
            rest: string.slice(matchedString.length)
        };
    };
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
    return function (dirtyString, dirtyOptions) {
        var string = String(dirtyString);
        var options = dirtyOptions || {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var value;
        if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
            value = parsePatterns.findIndex(function (pattern) {
                return pattern.test(string);
            });
        }
        else {
            value = findKey(parsePatterns, function (pattern) {
                return pattern.test(string);
            });
        }
        value = args.valueCallback ? args.valueCallback(value) : value;
        value = options.valueCallback ? options.valueCallback(value) : value;
        return {
            value: value,
            rest: string.slice(matchedString.length)
        };
    };
}
function findKey(object, predicate) {
    for (var key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
            return key;
        }
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: /*@__PURE__*/ buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function (value) {
            return parseInt(value, 10);
        }
    }),
    era: /*@__PURE__*/ buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: /*@__PURE__*/ buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function (index) {
            return index + 1;
        }
    }),
    month: /*@__PURE__*/ buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: /*@__PURE__*/ buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: /*@__PURE__*/ buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
/* harmony default export */ var _lib_match = (match);


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/locale/en-US/index.js





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
    formatDistance: formatDistance,
    formatLong: _lib_formatLong,
    formatRelative: formatRelative,
    localize: _lib_localize,
    match: _lib_match,
    options: {
        weekStartsOn: 0
        /* Sunday */
        ,
        firstWeekContainsDate: 1
    }
};
/* harmony default export */ var en_US = __webpack_exports__["a"] = (locale);



/***/ }),

/***/ "dKPd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFnsModule; });
/* harmony import */ var _format_time_in_words_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GJk9");

var PIPES = [_format_time_in_words_pipe__WEBPACK_IMPORTED_MODULE_0__[/* FormatTimeInWordsPipe */ "a"]];
var DateFnsModule = /** @class */ /*@__PURE__*/ (function () {
    function DateFnsModule() {
    }
    return DateFnsModule;
}());




/***/ }),

/***/ "e8uv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MatListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MatNavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatListAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatListIconCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MatListSubheaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MatListItem; });
/* unused harmony export MAT_SELECTION_LIST_VALUE_ACCESSOR */
/* unused harmony export MatSelectionListChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MatListOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MatSelectionList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LYzL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fQLH");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mhnT");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0xYh");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HfXx");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("PVb+");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rh80");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IfiR");
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
// Boilerplate for applying mixins to MatList.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatList.
/**
 * \@docs-private
 */
MatListBase = /** @class */ /*@__PURE__*/ (function () {
    function MatListBase() {
    }
    return MatListBase;
}());
/** @type {?} */
var _MatListMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__[/* mixinDisableRipple */ "F"])(MatListBase);
// Boilerplate for applying mixins to MatListItem.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatListItem.
/**
 * \@docs-private
 */
MatListItemBase = /** @class */ /*@__PURE__*/ (function () {
    function MatListItemBase() {
    }
    return MatListItemBase;
}());
/** @type {?} */
var _MatListItemMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__[/* mixinDisableRipple */ "F"])(MatListItemBase);
var MatNavList = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatNavList, _super);
    function MatNavList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Emits when the state of the list changes.
         */
        _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
        return _this;
    }
    /**
     * @return {?}
     */
    MatNavList.prototype.ngOnChanges = /**
     * @return {?}
     */
        function () {
            this._stateChanges.next();
        };
    /**
     * @return {?}
     */
    MatNavList.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            this._stateChanges.complete();
        };
    return MatNavList;
}(_MatListMixinBase));
var MatList = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatList, _super);
    function MatList(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        /**
         * Emits when the state of the list changes.
         */
        _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
        if (_this._getListType() === 'action-list') {
            _elementRef.nativeElement.classList.add('mat-action-list');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    MatList.prototype._getListType = /**
     * @return {?}
     */
        function () {
            /** @type {?} */
            var nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();
            if (nodeName === 'mat-list') {
                return 'list';
            }
            if (nodeName === 'mat-action-list') {
                return 'action-list';
            }
            return null;
        };
    /**
     * @return {?}
     */
    MatList.prototype.ngOnChanges = /**
     * @return {?}
     */
        function () {
            this._stateChanges.next();
        };
    /**
     * @return {?}
     */
    MatList.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            this._stateChanges.complete();
        };
    return MatList;
}(_MatListMixinBase));
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatListAvatarCssMatStyler = /** @class */ /*@__PURE__*/ (function () {
    function MatListAvatarCssMatStyler() {
    }
    return MatListAvatarCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatListIconCssMatStyler = /** @class */ /*@__PURE__*/ (function () {
    function MatListIconCssMatStyler() {
    }
    return MatListIconCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatListSubheaderCssMatStyler = /** @class */ /*@__PURE__*/ (function () {
    function MatListSubheaderCssMatStyler() {
    }
    return MatListSubheaderCssMatStyler;
}());
/**
 * An item within a Material Design list.
 */
var MatListItem = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatListItem, _super);
    function MatListItem(_element, _changeDetectorRef, navList, list) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._isInteractiveList = false;
        _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
        _this._isInteractiveList = !!(navList || (list && list._getListType() === 'action-list'));
        _this._list = navList || list;
        // If no type attributed is specified for <button>, set it to "button".
        // If a type attribute is already specified, do nothing.
        /** @type {?} */
        var element = _this._getHostElement();
        if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
            element.setAttribute('type', 'button');
        }
        if (_this._list) {
            // React to changes in the state of the parent list since
            // some of the item's properties depend on it (e.g. `disableRipple`).
            _this._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[/* takeUntil */ "a"])(_this._destroyed)).subscribe(( /**
             * @return {?}
             */function () {
                _changeDetectorRef.markForCheck();
            }));
        }
        return _this;
    }
    /**
     * @return {?}
     */
    MatListItem.prototype.ngAfterContentInit = /**
     * @return {?}
     */
        function () {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__[/* setLines */ "K"])(this._lines, this._element);
        };
    /**
     * @return {?}
     */
    MatListItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
    /** Whether this list item should show a ripple effect when clicked. */
    /**
     * Whether this list item should show a ripple effect when clicked.
     * @return {?}
     */
    MatListItem.prototype._isRippleDisabled = /**
     * Whether this list item should show a ripple effect when clicked.
     * @return {?}
     */
        function () {
            return !this._isInteractiveList || this.disableRipple ||
                !!(this._list && this._list.disableRipple);
        };
    /** Retrieves the DOM element of the component host. */
    /**
     * Retrieves the DOM element of the component host.
     * @return {?}
     */
    MatListItem.prototype._getHostElement = /**
     * Retrieves the DOM element of the component host.
     * @return {?}
     */
        function () {
            return this._element.nativeElement;
        };
    return MatListItem;
}(_MatListItemMixinBase));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */ MatSelectionListBase = /** @class */ /*@__PURE__*/ (function () {
    function MatSelectionListBase() {
    }
    return MatSelectionListBase;
}());
/** @type {?} */
var _MatSelectionListMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__[/* mixinDisableRipple */ "F"])(MatSelectionListBase);
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */ MatListOptionBase = /** @class */ /*@__PURE__*/ (function () {
    function MatListOptionBase() {
    }
    return MatListOptionBase;
}());
/** @type {?} */
var _MatListOptionMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__[/* mixinDisableRipple */ "F"])(MatListOptionBase);
/**
 * \@docs-private
 * @type {?}
 */
var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__[/* NG_VALUE_ACCESSOR */ "o"],
    useExisting: /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[/* forwardRef */ "db"])(( /**
     * @return {?}
     */function () { return MatSelectionList; })),
    multi: true
};
/**
 * Change event that is being fired whenever the selected state of an option changes.
 */
var /**
 * Change event that is being fired whenever the selected state of an option changes.
 */ MatSelectionListChange = /** @class */ /*@__PURE__*/ (function () {
    function MatSelectionListChange(source, option) {
        this.source = source;
        this.option = option;
    }
    return MatSelectionListChange;
}());
/**
 * Component for list-options of selection-list. Each list-option can automatically
 * generate a checkbox and can put current item into the selectionModel of selection-list
 * if the current item is selected.
 */
var MatListOption = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatListOption, _super);
    function MatListOption(_element, _changeDetector, selectionList) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._changeDetector = _changeDetector;
        _this.selectionList = selectionList;
        _this._selected = false;
        _this._disabled = false;
        _this._hasFocus = false;
        /**
         * Whether the label should appear before or after the checkbox. Defaults to 'after'
         */
        _this.checkboxPosition = 'after';
        return _this;
    }
    Object.defineProperty(MatListOption.prototype, "color", {
        /** Theme color of the list option. This sets the color of the checkbox. */
        get: /**
         * Theme color of the list option. This sets the color of the checkbox.
         * @return {?}
         */ function () { return this._color || this.selectionList.color; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */ function (newValue) { this._color = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatListOption.prototype, "value", {
        /** Value of the option */
        get: /**
         * Value of the option
         * @return {?}
         */ function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */ function (newValue) {
            if (this.selected && newValue !== this.value) {
                this.selected = false;
            }
            this._value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatListOption.prototype, "disabled", {
        /** Whether the option is disabled. */
        get: /**
         * Whether the option is disabled.
         * @return {?}
         */ function () { return this._disabled || (this.selectionList && this.selectionList.disabled); },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__[/* coerceBooleanProperty */ "c"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatListOption.prototype, "selected", {
        /** Whether the option is selected. */
        get: /**
         * Whether the option is selected.
         * @return {?}
         */ function () { return this.selectionList.selectedOptions.isSelected(this); },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            /** @type {?} */
            var isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__[/* coerceBooleanProperty */ "c"])(value);
            if (isSelected !== this._selected) {
                this._setSelected(isSelected);
                this.selectionList._reportValueChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatListOption.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            var _this = this;
            /** @type {?} */
            var list = this.selectionList;
            if (list._value && list._value.some(( /**
             * @param {?} value
             * @return {?}
             */function (value) { return list.compareWith(value, _this._value); }))) {
                this._setSelected(true);
            }
            /** @type {?} */
            var wasSelected = this._selected;
            // List options that are selected at initialization can't be reported properly to the form
            // control. This is because it takes some time until the selection-list knows about all
            // available options. Also it can happen that the ControlValueAccessor has an initial value
            // that should be used instead. Deferring the value change report to the next tick ensures
            // that the form control value is not being overwritten.
            Promise.resolve().then(( /**
             * @return {?}
             */function () {
                if (_this._selected || wasSelected) {
                    _this.selected = true;
                    _this._changeDetector.markForCheck();
                }
            }));
        };
    /**
     * @return {?}
     */
    MatListOption.prototype.ngAfterContentInit = /**
     * @return {?}
     */
        function () {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__[/* setLines */ "K"])(this._lines, this._element);
        };
    /**
     * @return {?}
     */
    MatListOption.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            var _this = this;
            if (this.selected) {
                // We have to delay this until the next tick in order
                // to avoid changed after checked errors.
                Promise.resolve().then(( /**
                 * @return {?}
                 */function () {
                    _this.selected = false;
                }));
            }
            /** @type {?} */
            var hadFocus = this._hasFocus;
            /** @type {?} */
            var newActiveItem = this.selectionList._removeOptionFromList(this);
            // Only move focus if this option was focused at the time it was destroyed.
            if (hadFocus && newActiveItem) {
                newActiveItem.focus();
            }
        };
    /** Toggles the selection state of the option. */
    /**
     * Toggles the selection state of the option.
     * @return {?}
     */
    MatListOption.prototype.toggle = /**
     * Toggles the selection state of the option.
     * @return {?}
     */
        function () {
            this.selected = !this.selected;
        };
    /** Allows for programmatic focusing of the option. */
    /**
     * Allows for programmatic focusing of the option.
     * @return {?}
     */
    MatListOption.prototype.focus = /**
     * Allows for programmatic focusing of the option.
     * @return {?}
     */
        function () {
            this._element.nativeElement.focus();
        };
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * @docs-private
     */
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * \@docs-private
     * @return {?}
     */
    MatListOption.prototype.getLabel = /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * \@docs-private
     * @return {?}
     */
        function () {
            return this._text ? (this._text.nativeElement.textContent || '') : '';
        };
    /** Whether this list item should show a ripple effect when clicked. */
    /**
     * Whether this list item should show a ripple effect when clicked.
     * @return {?}
     */
    MatListOption.prototype._isRippleDisabled = /**
     * Whether this list item should show a ripple effect when clicked.
     * @return {?}
     */
        function () {
            return this.disabled || this.disableRipple || this.selectionList.disableRipple;
        };
    /**
     * @return {?}
     */
    MatListOption.prototype._handleClick = /**
     * @return {?}
     */
        function () {
            if (!this.disabled) {
                this.toggle();
                // Emit a change event if the selected state of the option changed through user interaction.
                this.selectionList._emitChangeEvent(this);
            }
        };
    /**
     * @return {?}
     */
    MatListOption.prototype._handleFocus = /**
     * @return {?}
     */
        function () {
            this.selectionList._setFocusedOption(this);
            this._hasFocus = true;
        };
    /**
     * @return {?}
     */
    MatListOption.prototype._handleBlur = /**
     * @return {?}
     */
        function () {
            this.selectionList._onTouched();
            this._hasFocus = false;
        };
    /** Retrieves the DOM element of the component host. */
    /**
     * Retrieves the DOM element of the component host.
     * @return {?}
     */
    MatListOption.prototype._getHostElement = /**
     * Retrieves the DOM element of the component host.
     * @return {?}
     */
        function () {
            return this._element.nativeElement;
        };
    /** Sets the selected state of the option. Returns whether the value has changed. */
    /**
     * Sets the selected state of the option. Returns whether the value has changed.
     * @param {?} selected
     * @return {?}
     */
    MatListOption.prototype._setSelected = /**
     * Sets the selected state of the option. Returns whether the value has changed.
     * @param {?} selected
     * @return {?}
     */
        function (selected) {
            if (selected === this._selected) {
                return false;
            }
            this._selected = selected;
            if (selected) {
                this.selectionList.selectedOptions.select(this);
            }
            else {
                this.selectionList.selectedOptions.deselect(this);
            }
            this._changeDetector.markForCheck();
            return true;
        };
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
     * used to trigger an update of the list option if the disabled state of the selection list
     * changed.
     */
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
     * used to trigger an update of the list option if the disabled state of the selection list
     * changed.
     * @return {?}
     */
    MatListOption.prototype._markForCheck = /**
     * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
     * used to trigger an update of the list option if the disabled state of the selection list
     * changed.
     * @return {?}
     */
        function () {
            this._changeDetector.markForCheck();
        };
    return MatListOption;
}(_MatListOptionMixinBase));
/**
 * Material Design list component where each item is a selectable option. Behaves as a listbox.
 */
var MatSelectionList = /** @class */ /*@__PURE__*/ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSelectionList, _super);
    function MatSelectionList(_element, tabIndex) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        /**
         * Emits a change event whenever the selected state of an option changes.
         */
        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* EventEmitter */ "p"]();
        /**
         * Tabindex of the selection list.
         */
        _this.tabIndex = 0;
        /**
         * Theme color of the selection list. This sets the checkbox color for all list options.
         */
        _this.color = 'accent';
        /**
         * Function used for comparing an option against the selected value when determining which
         * options should appear as selected. The first argument is the value of an options. The second
         * one is a value from the selected value. A boolean must be returned.
         */
        _this.compareWith = ( /**
         * @param {?} a1
         * @param {?} a2
         * @return {?}
         */function (a1, a2) { return a1 === a2; });
        _this._disabled = false;
        /**
         * The currently selected options.
         */
        _this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__[/* SelectionModel */ "c"](true);
        /**
         * View to model callback that should be called whenever the selected options change.
         */
        _this._onChange = ( /**
         * @param {?} _
         * @return {?}
         */function (_) { });
        /**
         * Emits when the list has been destroyed.
         */
        _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__[/* Subject */ "a"]();
        /**
         * View to model callback that should be called if the list or its options lost focus.
         */
        _this._onTouched = ( /**
         * @return {?}
         */function () { });
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatSelectionList.prototype, "disabled", {
        /** Whether the selection list is disabled. */
        get: /**
         * Whether the selection list is disabled.
         * @return {?}
         */ function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__[/* coerceBooleanProperty */ "c"])(value);
            // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
            // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
            // changed its state. Since we know that a change to `disabled` property of the list affects
            // the state of the options, we manually mark each option for check.
            this._markOptionsForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelectionList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
        function () {
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__[/* FocusKeyManager */ "g"](this.options)
                .withWrap()
                .withTypeAhead()
                // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
                // screenreader users, that allows reading the different options of the list.
                .skipPredicate(( /**
         * @return {?}
         */function () { return false; }))
                .withAllowedModifierKeys(['shiftKey']);
            if (this._value) {
                this._setOptionsFromValues(this._value);
            }
            // Sync external changes to the model back to the options.
            this.selectedOptions.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[/* takeUntil */ "a"])(this._destroyed)).subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                if (event.added) {
                    for (var _i = 0, _a = event.added; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.selected = true;
                    }
                }
                if (event.removed) {
                    for (var _b = 0, _c = event.removed; _b < _c.length; _b++) {
                        var item = _c[_b];
                        item.selected = false;
                    }
                }
            }));
        };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatSelectionList.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
        function (changes) {
            /** @type {?} */
            var disableRippleChanges = changes['disableRipple'];
            /** @type {?} */
            var colorChanges = changes['color'];
            if ((disableRippleChanges && !disableRippleChanges.firstChange) ||
                (colorChanges && !colorChanges.firstChange)) {
                this._markOptionsForCheck();
            }
        };
    /**
     * @return {?}
     */
    MatSelectionList.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            this._destroyed.next();
            this._destroyed.complete();
            this._isDestroyed = true;
        };
    /** Focuses the selection list. */
    /**
     * Focuses the selection list.
     * @return {?}
     */
    MatSelectionList.prototype.focus = /**
     * Focuses the selection list.
     * @return {?}
     */
        function () {
            this._element.nativeElement.focus();
        };
    /** Selects all of the options. */
    /**
     * Selects all of the options.
     * @return {?}
     */
    MatSelectionList.prototype.selectAll = /**
     * Selects all of the options.
     * @return {?}
     */
        function () {
            this._setAllOptionsSelected(true);
        };
    /** Deselects all of the options. */
    /**
     * Deselects all of the options.
     * @return {?}
     */
    MatSelectionList.prototype.deselectAll = /**
     * Deselects all of the options.
     * @return {?}
     */
        function () {
            this._setAllOptionsSelected(false);
        };
    /** Sets the focused option of the selection-list. */
    /**
     * Sets the focused option of the selection-list.
     * @param {?} option
     * @return {?}
     */
    MatSelectionList.prototype._setFocusedOption = /**
     * Sets the focused option of the selection-list.
     * @param {?} option
     * @return {?}
     */
        function (option) {
            this._keyManager.updateActiveItem(option);
        };
    /**
     * Removes an option from the selection list and updates the active item.
     * @returns Currently-active item.
     */
    /**
     * Removes an option from the selection list and updates the active item.
     * @param {?} option
     * @return {?} Currently-active item.
     */
    MatSelectionList.prototype._removeOptionFromList = /**
     * Removes an option from the selection list and updates the active item.
     * @param {?} option
     * @return {?} Currently-active item.
     */
        function (option) {
            /** @type {?} */
            var optionIndex = this._getOptionIndex(option);
            if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
                // Check whether the option is the last item
                if (optionIndex > 0) {
                    this._keyManager.updateActiveItem(optionIndex - 1);
                }
                else if (optionIndex === 0 && this.options.length > 1) {
                    this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
                }
            }
            return this._keyManager.activeItem;
        };
    /** Passes relevant key presses to our key manager. */
    /**
     * Passes relevant key presses to our key manager.
     * @param {?} event
     * @return {?}
     */
    MatSelectionList.prototype._keydown = /**
     * Passes relevant key presses to our key manager.
     * @param {?} event
     * @return {?}
     */
        function (event) {
            /** @type {?} */
            var keyCode = event.keyCode;
            /** @type {?} */
            var manager = this._keyManager;
            /** @type {?} */
            var previousFocusIndex = manager.activeItemIndex;
            /** @type {?} */
            var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* hasModifierKey */ "s"])(event);
            switch (keyCode) {
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* SPACE */ "n"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* ENTER */ "f"]:
                    if (!hasModifier) {
                        this._toggleFocusedOption();
                        // Always prevent space from scrolling the page since the list has focus
                        event.preventDefault();
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* HOME */ "h"]:
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* END */ "e"]:
                    if (!hasModifier) {
                        keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* HOME */ "h"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                        event.preventDefault();
                    }
                    break;
                case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* A */ "a"]:
                    if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* hasModifierKey */ "s"])(event, 'ctrlKey')) {
                        this.options.find(( /**
                         * @param {?} option
                         * @return {?}
                         */function (option) { return !option.selected; })) ? this.selectAll() : this.deselectAll();
                        event.preventDefault();
                    }
                    break;
                default:
                    manager.onKeydown(event);
            }
            if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* UP_ARROW */ "p"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* DOWN_ARROW */ "d"]) && event.shiftKey &&
                manager.activeItemIndex !== previousFocusIndex) {
                this._toggleFocusedOption();
            }
        };
    /** Reports a value change to the ControlValueAccessor */
    /**
     * Reports a value change to the ControlValueAccessor
     * @return {?}
     */
    MatSelectionList.prototype._reportValueChange = /**
     * Reports a value change to the ControlValueAccessor
     * @return {?}
     */
        function () {
            // Stop reporting value changes after the list has been destroyed. This avoids
            // cases where the list might wrongly reset its value once it is removed, but
            // the form control is still live.
            if (this.options && !this._isDestroyed) {
                /** @type {?} */
                var value = this._getSelectedOptionValues();
                this._onChange(value);
                this._value = value;
            }
        };
    /** Emits a change event if the selected state of an option changed. */
    /**
     * Emits a change event if the selected state of an option changed.
     * @param {?} option
     * @return {?}
     */
    MatSelectionList.prototype._emitChangeEvent = /**
     * Emits a change event if the selected state of an option changed.
     * @param {?} option
     * @return {?}
     */
        function (option) {
            this.selectionChange.emit(new MatSelectionListChange(this, option));
        };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} values
     * @return {?}
     */
    MatSelectionList.prototype.writeValue = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} values
     * @return {?}
     */
        function (values) {
            this._value = values;
            if (this.options) {
                this._setOptionsFromValues(values || []);
            }
        };
    /** Implemented as a part of ControlValueAccessor. */
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    MatSelectionList.prototype.setDisabledState = /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    MatSelectionList.prototype.registerOnChange = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
        function (fn) {
            this._onChange = fn;
        };
    /** Implemented as part of ControlValueAccessor. */
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    MatSelectionList.prototype.registerOnTouched = /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
        function (fn) {
            this._onTouched = fn;
        };
    /** Sets the selected options based on the specified values. */
    /**
     * Sets the selected options based on the specified values.
     * @private
     * @param {?} values
     * @return {?}
     */
    MatSelectionList.prototype._setOptionsFromValues = /**
     * Sets the selected options based on the specified values.
     * @private
     * @param {?} values
     * @return {?}
     */
        function (values) {
            var _this = this;
            this.options.forEach(( /**
             * @param {?} option
             * @return {?}
             */function (option) { return option._setSelected(false); }));
            values.forEach(( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                /** @type {?} */
                var correspondingOption = _this.options.find(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
                    // Skip options that are already in the model. This allows us to handle cases
                    // where the same primitive value is selected multiple times.
                    return option.selected ? false : _this.compareWith(option.value, value);
                }));
                if (correspondingOption) {
                    correspondingOption._setSelected(true);
                }
            }));
        };
    /** Returns the values of the selected options. */
    /**
     * Returns the values of the selected options.
     * @private
     * @return {?}
     */
    MatSelectionList.prototype._getSelectedOptionValues = /**
     * Returns the values of the selected options.
     * @private
     * @return {?}
     */
        function () {
            return this.options.filter(( /**
             * @param {?} option
             * @return {?}
             */function (option) { return option.selected; })).map(( /**
             * @param {?} option
             * @return {?}
             */function (option) { return option.value; }));
        };
    /** Toggles the state of the currently focused option if enabled. */
    /**
     * Toggles the state of the currently focused option if enabled.
     * @private
     * @return {?}
     */
    MatSelectionList.prototype._toggleFocusedOption = /**
     * Toggles the state of the currently focused option if enabled.
     * @private
     * @return {?}
     */
        function () {
            /** @type {?} */
            var focusedIndex = this._keyManager.activeItemIndex;
            if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
                /** @type {?} */
                var focusedOption = this.options.toArray()[focusedIndex];
                if (focusedOption && !focusedOption.disabled) {
                    focusedOption.toggle();
                    // Emit a change event because the focused option changed its state through user
                    // interaction.
                    this._emitChangeEvent(focusedOption);
                }
            }
        };
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     */
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     * @private
     * @param {?} isSelected
     * @return {?}
     */
    MatSelectionList.prototype._setAllOptionsSelected = /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     * @private
     * @param {?} isSelected
     * @return {?}
     */
        function (isSelected) {
            // Keep track of whether anything changed, because we only want to
            // emit the changed event when something actually changed.
            /** @type {?} */
            var hasChanged = false;
            this.options.forEach(( /**
             * @param {?} option
             * @return {?}
             */function (option) {
                if (option._setSelected(isSelected)) {
                    hasChanged = true;
                }
            }));
            if (hasChanged) {
                this._reportValueChange();
            }
        };
    /**
     * Utility to ensure all indexes are valid.
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of options.
     */
    /**
     * Utility to ensure all indexes are valid.
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of options.
     */
    MatSelectionList.prototype._isValidIndex = /**
     * Utility to ensure all indexes are valid.
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of options.
     */
        function (index) {
            return index >= 0 && index < this.options.length;
        };
    /** Returns the index of the specified list option. */
    /**
     * Returns the index of the specified list option.
     * @private
     * @param {?} option
     * @return {?}
     */
    MatSelectionList.prototype._getOptionIndex = /**
     * Returns the index of the specified list option.
     * @private
     * @param {?} option
     * @return {?}
     */
        function (option) {
            return this.options.toArray().indexOf(option);
        };
    /** Marks all the options to be checked in the next change detection run. */
    /**
     * Marks all the options to be checked in the next change detection run.
     * @private
     * @return {?}
     */
    MatSelectionList.prototype._markOptionsForCheck = /**
     * Marks all the options to be checked in the next change detection run.
     * @private
     * @return {?}
     */
        function () {
            if (this.options) {
                this.options.forEach(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) { return option._markForCheck(); }));
            }
        };
    return MatSelectionList;
}(_MatSelectionListMixinBase));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatListModule = /** @class */ /*@__PURE__*/ (function () {
    function MatListModule() {
    }
    return MatListModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "elFF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgLetModule; });
var NgLetModule = /** @class */ /*@__PURE__*/ (function () {
    function NgLetModule() {
    }
    return NgLetModule;
}());




/***/ }),

/***/ "hBHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLinkMatchModule; });
var RouterLinkMatchModule = /** @class */ /*@__PURE__*/ (function () {
    function RouterLinkMatchModule() {
    }
    return RouterLinkMatchModule;
}());




/***/ }),

/***/ "jiKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgLetContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgLetDirective; });
var NgLetContext = /** @class */ /*@__PURE__*/ (function () {
    function NgLetContext() {
        this.$implicit = null;
        this.ngLet = null;
    }
    return NgLetContext;
}());

var NgLetDirective = /** @class */ /*@__PURE__*/ (function () {
    function NgLetDirective(vcr, templateRef) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.context = new NgLetContext();
    }
    Object.defineProperty(NgLetDirective.prototype, "ngLet", {
        set: function (value) {
            this.context.$implicit = this.context.ngLet = value;
        },
        enumerable: true,
        configurable: true
    });
    NgLetDirective.prototype.ngOnInit = function () {
        this.vcr.createEmbeddedView(this.templateRef, this.context);
    };
    return NgLetDirective;
}());




/***/ }),

/***/ "kyl8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserFeatureKey; });
/* unused harmony export BrowserFeature */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FeatureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LoAr");
/* harmony import */ var _window_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Bpi4");


var BrowserFeatureKey = /*@__PURE__*/ (function (BrowserFeatureKey) {
    BrowserFeatureKey["ServiceWorker"] = "Service Worker";
    BrowserFeatureKey["Cache"] = "Offline Capabilities";
    BrowserFeatureKey["PushAPI"] = "Push data";
    BrowserFeatureKey["NotificationsAPI"] = "Notifications";
    BrowserFeatureKey["BeforeInstallPromptEvent"] = "Add to Homescreen";
    BrowserFeatureKey["BackgroundSync"] = "Background sync";
    BrowserFeatureKey["NavigationPreloadManager"] = "Navigation Preload";
    BrowserFeatureKey["BudgetAPI"] = "Budget API";
    BrowserFeatureKey["StorageEstimation"] = "Storage Estimation";
    BrowserFeatureKey["PersistentStorage"] = "Persistent Storage";
    BrowserFeatureKey["WebShareAPI"] = "Web Share";
    BrowserFeatureKey["MediaSessionAPI"] = "Media Session";
    BrowserFeatureKey["MediaCapabilities"] = "Media Capabilities";
    BrowserFeatureKey["DeviceMemory"] = "Device Memory";
    BrowserFeatureKey["RelatedApps"] = "Getting Installed Related Apps";
    BrowserFeatureKey["PaymentRequestAPI"] = "Payment Request";
    BrowserFeatureKey["CredentialManagement"] = "Credential Management";
    BrowserFeatureKey["WebBluetoothAPI"] = "Web Bluetooth";
    BrowserFeatureKey["SpeechSynthesis"] = "Speech Synthesis";
    BrowserFeatureKey["SpeechRecognition"] = "Speech Recognition";
    BrowserFeatureKey["IntersectionObserver"] = "Intersection Observer";
    return BrowserFeatureKey;
})({});
var BrowserFeature = /** @class */ /*@__PURE__*/ (function () {
    function BrowserFeature(key, supported) {
        this.key = key;
        this.supported = supported;
    }
    return BrowserFeature;
}());

/** @dynamic */
var FeatureService = /** @class */ /*@__PURE__*/ (function () {
    function FeatureService(window) {
        var _a;
        this.window = window;
        this.navigator = this.window.navigator;
        this.features = (_a = {},
            _a[BrowserFeatureKey.ServiceWorker] = 'serviceWorker' in this.window.navigator,
            _a[BrowserFeatureKey.Cache] = 'caches' in this.window,
            _a[BrowserFeatureKey.PushAPI] = 'PushManager' in this.window,
            _a[BrowserFeatureKey.NotificationsAPI] = 'Notification' in this.window,
            _a[BrowserFeatureKey.BeforeInstallPromptEvent] = 'BeforeInstallPromptEvent' in this.window,
            _a[BrowserFeatureKey.BackgroundSync] = 'SyncManager' in this.window,
            _a[BrowserFeatureKey.NavigationPreloadManager] = 'NavigationPreloadManager' in this.window,
            _a[BrowserFeatureKey.BudgetAPI] = 'budget' in this.navigator && 'reserve' in this.navigator.budget,
            _a[BrowserFeatureKey.StorageEstimation] = 'storage' in this.navigator && 'estimate' in this.navigator.storage,
            _a[BrowserFeatureKey.PersistentStorage] = 'storage' in this.navigator && 'persist' in this.navigator.storage,
            _a[BrowserFeatureKey.WebShareAPI] = 'share' in this.navigator,
            _a[BrowserFeatureKey.MediaSessionAPI] = 'mediaSession' in this.navigator,
            _a[BrowserFeatureKey.MediaCapabilities] = 'mediaCapabilities' in this.navigator,
            _a[BrowserFeatureKey.DeviceMemory] = 'deviceMemory' in this.navigator,
            _a[BrowserFeatureKey.RelatedApps] = 'getInstalledRelatedApps' in this.navigator,
            _a[BrowserFeatureKey.PaymentRequestAPI] = 'PaymentRequest' in this.window,
            _a[BrowserFeatureKey.CredentialManagement] = 'credentials' in this.navigator,
            _a[BrowserFeatureKey.WebBluetoothAPI] = 'bluetooth' in this.navigator,
            _a[BrowserFeatureKey.SpeechSynthesis] = 'speechSynthesis' in this.window,
            _a[BrowserFeatureKey.SpeechRecognition] = 'webkitSpeechRecognition' in this.window ||
                'mozSpeechRecognition' in this.window ||
                'msSpeechRecognition' in this.window ||
                'oSpeechRecognition' in this.window,
            _a[BrowserFeatureKey.IntersectionObserver] = 'IntersectionObserver' in this.window,
            _a);
    }
    FeatureService.prototype.detectFeatures = function () {
        var _this = this;
        return Object.keys(this.features).map(function (key) { return new BrowserFeature(key, _this.features[key]); });
    };
    FeatureService.prototype.detectFeature = function (feature) {
        return new BrowserFeature(feature, this.features[feature]);
    };
    FeatureService.prototype.isMobileAndroid = function () {
        return this.window.navigator.userAgent.toLowerCase().indexOf('android') > -1;
    };
    FeatureService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineInjectable */ "dc"]({ factory: function FeatureService_Factory() { return new FeatureService(_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵinject */ "ec"](_window_token__WEBPACK_IMPORTED_MODULE_1__[/* WINDOW */ "a"])); }, token: FeatureService, providedIn: "root" });
    return FeatureService;
}());




/***/ }),

/***/ "mUyW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HnWI");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("diMa");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8tfy");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__[/* async */ "a"];
    }
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__[/* isNumeric */ "a"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__[/* async */ "a"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}





/***/ }),

/***/ "njY1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTimezoneOffsetInMilliseconds; });
var MILLISECONDS_IN_MINUTE = 60000;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime());
    var baseTimezoneOffset = date.getTimezoneOffset();
    date.setSeconds(0, 0);
    var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}



/***/ }),

/***/ "ns0p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseISO; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("N1LS");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("njY1");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var options = dirtyOptions || {};
    var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError('additionalDigits must be 0, 1 or 2');
    }
    if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
        return new Date(NaN);
    }
    var dateStrings = splitDateString(argument);
    var date;
    if (dateStrings.date) {
        var parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (isNaN(date) || !date) {
        return new Date(NaN);
    }
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time) || time === null) {
            return new Date(NaN);
        }
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) {
            return new Date(NaN);
        }
    }
    else {
        var fullTime = timestamp + time;
        var fullTimeDate = new Date(fullTime);
        offset = Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fullTimeDate); // Adjust time when it's coming from DST
        var fullTimeDateNextDay = new Date(fullTime);
        fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
        var offsetDiff = Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fullTimeDateNextDay) - offset;
        if (offsetDiff > 0) {
            offset += offsetDiff;
        }
    }
    return new Date(timestamp + time + offset);
}
function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns.dateTimeDelimiter);
    var timeString;
    if (/:/.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
    }
    else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        }
        else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
    var captures = dateString.match(regex); // Invalid ISO-formatted year
    if (!captures)
        return {
            year: null
        };
    var year = captures[1] && parseInt(captures[1]);
    var century = captures[2] && parseInt(captures[2]);
    return {
        year: century == null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null)
        return null;
    var captures = dateString.match(dateRegex); // Invalid ISO-formatted string
    if (!captures)
        return null;
    var isWeekDate = !!captures[4];
    var dayOfYear = parseDateUnit(captures[1]);
    var month = parseDateUnit(captures[2]) - 1;
    var day = parseDateUnit(captures[3]);
    var week = parseDateUnit(captures[4]);
    var dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) {
            return new Date(NaN);
        }
        return dayOfISOWeekYear(year, week, dayOfWeek);
    }
    else {
        var date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
            return new Date(NaN);
        }
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    var captures = timeString.match(timeRegex);
    if (!captures)
        return null; // Invalid ISO-formatted time
    var hours = parseTimeUnit(captures[1]);
    var minutes = parseTimeUnit(captures[2]);
    var seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) {
        return NaN;
    }
    return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === 'Z')
        return 0;
    var captures = timezoneString.match(timezoneRegex);
    if (!captures)
        return 0;
    var sign = captures[1] === '+' ? -1 : 1;
    var hours = parseInt(captures[2]);
    var minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) {
        return NaN;
    }
    return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
} // Validation functions
// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) {
        return minutes === 0 && seconds === 0;
    }
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}



/***/ }),

/***/ "qIOz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = /*@__PURE__*/ __webpack_require__("qiMw");
exports.EMPTY = /*@__PURE__*/ new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}



/***/ }),

/***/ "sBpz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};



/***/ }),

/***/ "sGav":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = /*@__PURE__*/ __webpack_require__("1hPV");
var Notification_1 = /*@__PURE__*/ __webpack_require__("t25p");
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
exports.observeOn = observeOn;
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;



/***/ }),

/***/ "t0wZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = /*@__PURE__*/ __webpack_require__("ci3w");
var fromArray_1 = /*@__PURE__*/ __webpack_require__("DtmU");
var scheduleArray_1 = /*@__PURE__*/ __webpack_require__("uHtI");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
        return scheduleArray_1.scheduleArray(args, scheduler);
    }
    else {
        return fromArray_1.fromArray(args);
    }
}
exports.of = of;



/***/ }),

/***/ "t25p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var empty_1 = /*@__PURE__*/ __webpack_require__("qIOz");
var of_1 = /*@__PURE__*/ __webpack_require__("t0wZ");
var throwError_1 = /*@__PURE__*/ __webpack_require__("DLj4");
var NotificationKind = exports.NotificationKind = /*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
    return NotificationKind;
})(exports.NotificationKind || {});
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of_1.of(this.value);
            case 'E':
                return throwError_1.throwError(this.error);
            case 'C':
                return empty_1.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;



/***/ }),

/***/ "uHtI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = /*@__PURE__*/ __webpack_require__("qiMw");
var Subscription_1 = /*@__PURE__*/ __webpack_require__("6Br6");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;



/***/ }),

/***/ "vU7N":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = /*@__PURE__*/ __webpack_require__("LR82d");
var AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;



/***/ }),

/***/ "vdqk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;



/***/ }),

/***/ "yN5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatListModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RenderType_MatNavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return View_MatNavList_0; });
/* unused harmony export View_MatNavList_Host_0 */
/* unused harmony export MatNavListNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_MatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return View_MatList_0; });
/* unused harmony export View_MatList_Host_0 */
/* unused harmony export MatListNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_MatListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return View_MatListItem_0; });
/* unused harmony export View_MatListItem_Host_0 */
/* unused harmony export MatListItemNgFactory */
/* unused harmony export RenderType_MatListOption */
/* unused harmony export View_MatListOption_0 */
/* unused harmony export View_MatListOption_Host_0 */
/* unused harmony export MatListOptionNgFactory */
/* unused harmony export RenderType_MatSelectionList */
/* unused harmony export View_MatSelectionList_0 */
/* unused harmony export View_MatSelectionList_Host_0 */
/* unused harmony export MatSelectionListNgFactory */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e8uv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WT9V");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("C7Lb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LYzL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("SeAg");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WV+C");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8xy9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Z5FQ");
/* harmony import */ var _core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("QH8h");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("IfiR");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */











var MatListModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcmf */ "Ab"](_angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListModule */ "e"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmod */ "Mb"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵCodegenComponentFactoryResolver */ "lb"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ComponentFactoryResolver */ "k"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgModuleRef */ "D"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* NgLocalization */ "p"], _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* NgLocaleLocalization */ "o"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_ID */ "z"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* ɵangular_packages_common_common_a */ "F"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__[/* BidiModule */ "a"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__[/* BidiModule */ "a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatCommonModule */ "n"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatCommonModule */ "n"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MATERIAL_SANITY_CHECKS */ "f"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__[/* HAMMER_LOADER */ "f"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatLineModule */ "p"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatLineModule */ "p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__[/* PlatformModule */ "b"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__[/* PlatformModule */ "b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatRippleModule */ "y"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatRippleModule */ "y"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatPseudoCheckboxModule */ "w"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatPseudoCheckboxModule */ "w"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* CommonModule */ "c"], _angular_common__WEBPACK_IMPORTED_MODULE_2__[/* CommonModule */ "c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__[/* MatDividerModule */ "b"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__[/* MatDividerModule */ "b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵmpd */ "Nb"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListModule */ "e"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListModule */ "e"], [])]); });

var styles_MatNavList = [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"];
var RenderType_MatNavList = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatNavList, data: {} });

function View_MatNavList_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0)], null, null); }
function View_MatNavList_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, View_MatNavList_0, RenderType_MatNavList)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatNavList */ "h"], [], null, null)], null, null); }
var MatNavListNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-nav-list", _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatNavList */ "h"], View_MatNavList_Host_0, { disableRipple: "disableRipple" }, {}, ["*"]);

var styles_MatList = [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"];
var RenderType_MatList = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatList, data: {} });

function View_MatList_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0)], null, null); }
function View_MatList_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 1, "mat-list", [["class", "mat-list mat-list-base"]], null, null, null, View_MatList_0, RenderType_MatList)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatList */ "a"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"]], null, null)], null, null); }
var MatListNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-list, mat-action-list", _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatList */ "a"], View_MatList_Host_0, { disableRipple: "disableRipple" }, {}, ["*"]);

var styles_MatListItem = [];
var RenderType_MatListItem = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatListItem, data: {} });

function View_MatListItem_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 6, "div", [["class", "mat-list-item-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](1, 0, null, null, 1, "div", [["class", "mat-list-item-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](2, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatRipple */ "x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgZone */ "F"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__[/* Platform */ "a"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MAT_RIPPLE_GLOBAL_OPTIONS */ "m"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__[/* ANIMATION_MODULE_TYPE */ "a"]]], { disabled: [0, "disabled"], trigger: [1, "trigger"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](4, 0, null, null, 1, "div", [["class", "mat-list-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 2)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co._isRippleDisabled(); var currVal_2 = _co._getHostElement(); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 2).unbounded; _ck(_v, 1, 0, currVal_0); }); }
function View_MatListItem_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 4, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, View_MatListItem_0, RenderType_MatListItem)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListItem */ "d"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ChangeDetectorRef */ "i"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatNavList */ "h"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatList */ "a"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 1, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 2, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 3, { _icon: 0 })], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._icon); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var MatListItemNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-list-item, a[mat-list-item], button[mat-list-item]", _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListItem */ "d"], View_MatListItem_Host_0, { disableRipple: "disableRipple" }, {}, ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"]);

var styles_MatListOption = [];
var RenderType_MatListOption = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatListOption, data: {} });

function View_MatListOption_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](671088640, 1, { _text: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](1, 0, null, null, 7, "div", [["class", "mat-list-item-content"]], [[2, "mat-list-item-content-reverse", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](2, 0, null, null, 1, "div", [["class", "mat-list-item-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](3, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatRipple */ "x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* NgZone */ "F"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__[/* Platform */ "a"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MAT_RIPPLE_GLOBAL_OPTIONS */ "m"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__[/* ANIMATION_MODULE_TYPE */ "a"]]], { disabled: [0, "disabled"], trigger: [1, "trigger"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](4, 0, null, null, 1, "mat-pseudo-checkbox", [["class", "mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, _core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__[/* View_MatPseudoCheckbox_0 */ "f"], _core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__[/* RenderType_MatPseudoCheckbox */ "c"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](5, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__[/* MatPseudoCheckbox */ "v"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__[/* ANIMATION_MODULE_TYPE */ "a"]]], { state: [0, "state"], disabled: [1, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](6, 0, [[1, 0], ["text", 1]], null, 1, "div", [["class", "mat-list-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co._isRippleDisabled(); var currVal_3 = _co._getHostElement(); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_8 = (_co.selected ? "checked" : "unchecked"); var currVal_9 = _co.disabled; _ck(_v, 5, 0, currVal_8, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.checkboxPosition == "after"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 3).unbounded; _ck(_v, 2, 0, currVal_1); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 5).state === "indeterminate"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 5).state === "checked"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 5).disabled; var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_MatListOption_Host_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 4, "mat-list-option", [["class", "mat-list-item mat-list-option"], ["role", "option"], ["tabindex", "-1"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-with-avatar", null], [2, "mat-primary", null], [2, "mat-warn", null], [1, "aria-selected", 0], [1, "aria-disabled", 0]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            if (("click" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._handleClick() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, View_MatListOption_0, RenderType_MatListOption)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](1, 1294336, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListOption */ "f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ChangeDetectorRef */ "i"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatSelectionList */ "i"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 1, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 2, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 3, { _lines: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1)._icon); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).color === "primary"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).color === "warn"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).selected; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); });
}
var MatListOptionNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-list-option", _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatListOption */ "f"], View_MatListOption_Host_0, { disableRipple: "disableRipple", checkboxPosition: "checkboxPosition", color: "color", value: "value", disabled: "disabled", selected: "selected" }, {}, ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"]);

var styles_MatSelectionList = [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"];
var RenderType_MatSelectionList = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵcrt */ "Bb"]({ encapsulation: 2, styles: styles_MatSelectionList, data: {} });

function View_MatSelectionList_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵncd */ "Ob"](null, 0)], null, null); }
function View_MatSelectionList_Host_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵvid */ "Zb"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵeld */ "Db"](0, 0, null, null, 3, "mat-selection-list", [["aria-multiselectable", "true"], ["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[8, "tabIndex", 0], [1, "aria-disabled", 0]], [[null, "blur"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            if (("blur" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 2)._onTouched() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 2)._keydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, View_MatSelectionList_0, RenderType_MatSelectionList)), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵprd */ "Ub"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__[/* NG_VALUE_ACCESSOR */ "o"], function (p0_0) { return [p0_0]; }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatSelectionList */ "i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵdid */ "Cb"](2, 1753088, null, 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatSelectionList */ "i"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ElementRef */ "m"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵqud */ "Vb"](603979776, 1, { options: 1 })], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 2).tabIndex; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵnov */ "Pb"](_v, 2).disabled.toString(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
var MatSelectionListNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵccf */ "zb"]("mat-selection-list", _angular_material_list__WEBPACK_IMPORTED_MODULE_1__[/* MatSelectionList */ "i"], View_MatSelectionList_Host_0, { disableRipple: "disableRipple", tabIndex: "tabIndex", color: "color", compareWith: "compareWith", disabled: "disabled" }, { selectionChange: "selectionChange" }, ["*"]);




/***/ }),

/***/ "ycqS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JpoA");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("G2Mx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IMYO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LoAr");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XRFL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("GiBk");







var PushNotificationService = /** @class */ /*@__PURE__*/ (function () {
    function PushNotificationService(swPush, httpClient) {
        this.swPush = swPush;
        this.httpClient = httpClient;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].API_BASE_URL;
        this.entityPath = 'subscription';
    }
    PushNotificationService.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var existingSubscription, subscription, _a, endpoint, _b, p256dh, auth;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.swPush.isEnabled) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.swPush.subscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[/* take */ "a"])(1)).toPromise()];
                    case 1:
                        existingSubscription = _c.sent();
                        if (existingSubscription) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.swPush.requestSubscription({ serverPublicKey: _env_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].webPush.publicKey })];
                    case 2:
                        subscription = _c.sent();
                        _a = subscription.toJSON(), endpoint = _a.endpoint, _b = _a.keys, p256dh = _b.p256dh, auth = _b.auth;
                        console.log('push subscription created', { endpoint: endpoint, auth: auth, p256dh: p256dh });
                        return [4 /*yield*/, this.httpClient
                                .post(this.baseUrl + "/" + this.entityPath, { endpoint: endpoint, auth: auth, p256dh: p256dh })
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[/* catchError */ "a"])(this.handleError))
                                .toPromise()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PushNotificationService.prototype.unregister = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subscription;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.swPush.isEnabled) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.swPush.subscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[/* take */ "a"])(1)).toPromise()];
                    case 1:
                        subscription = _a.sent();
                        if (!subscription)
                            return [3 /*break*/, 4];
                        console.log('deleting subscription', subscription.endpoint);
                        return [4 /*yield*/, this.httpClient
                                .delete(this.baseUrl + "/" + this.entityPath + "/" + encodeURIComponent(subscription.endpoint))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[/* catchError */ "a"])(this.handleError))
                                .toPromise()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, subscription.unsubscribe()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PushNotificationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__[/* throwError */ "a"])('Something bad happened; please try again later.');
    };
    PushNotificationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__[/* ɵɵdefineInjectable */ "dc"]({ factory: function PushNotificationService_Factory() { return new PushNotificationService(_angular_core__WEBPACK_IMPORTED_MODULE_5__[/* ɵɵinject */ "ec"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_6__[/* SwPush */ "b"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__[/* ɵɵinject */ "ec"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__[/* HttpClient */ "c"])); }, token: PushNotificationService, providedIn: "root" });
    return PushNotificationService;
}());




/***/ }),

/***/ "zDe/":
/***/ (function(module, exports, __webpack_require__) {

var __extends = /*@__PURE__*/ __webpack_require__("D57K").__extends;
"use strict";
/*@__PURE__*/ Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = /*@__PURE__*/ __webpack_require__("tkgy");
var queue_1 = /*@__PURE__*/ __webpack_require__("+uLt");
var Subscription_1 = /*@__PURE__*/ __webpack_require__("6Br6");
var observeOn_1 = /*@__PURE__*/ __webpack_require__("sGav");
var ObjectUnsubscribedError_1 = /*@__PURE__*/ __webpack_require__("O09R");
var SubjectSubscription_1 = /*@__PURE__*/ __webpack_require__("Rdb5");
var ReplaySubject = /*@__PURE__*/ (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());



/***/ })

}]);
//# sourceMappingURL=2-es5.007a4994a18b4117fa11.js.map