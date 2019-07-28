(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "lHVV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__("kZht");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/drag-drop.js
var drag_drop = __webpack_require__("0o6U");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/button.js
var esm2015_button = __webpack_require__("8JnZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/button-toggle.js
var button_toggle = __webpack_require__("YXDS");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/card.js
var card = __webpack_require__("gX7W");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/checkbox.js
var esm2015_checkbox = __webpack_require__("1PzT");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/dialog.js
var esm2015_dialog = __webpack_require__("9+G+");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/divider.js
var divider = __webpack_require__("dFIu");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/form-field.js
var form_field = __webpack_require__("qBwE");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/icon.js
var icon = __webpack_require__("a+5/");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/input.js
var input = __webpack_require__("S/D4");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/list.js
var list = __webpack_require__("uWIS");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/menu.js
var menu = __webpack_require__("aFla");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/paginator.js
var paginator = __webpack_require__("JZv+");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/progress-bar.js
var progress_bar = __webpack_require__("EsQC");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/sidenav.js
var sidenav = __webpack_require__("yy4G");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/table.js
var table = __webpack_require__("unbb");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/toolbar.js
var toolbar = __webpack_require__("9qA3");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/admin.module.ts

















const matModules = [
    card["g" /* MatCardModule */],
    esm2015_button["c" /* MatButtonModule */],
    icon["c" /* MatIconModule */],
    form_field["e" /* MatFormFieldModule */],
    input["c" /* MatInputModule */],
    button_toggle["e" /* MatButtonToggleModule */],
    menu["f" /* MatMenuModule */],
    esm2015_checkbox["c" /* MatCheckboxModule */],
    toolbar["b" /* MatToolbarModule */],
    progress_bar["c" /* MatProgressBarModule */],
    table["m" /* MatTableModule */],
    paginator["d" /* MatPaginatorModule */],
    divider["b" /* MatDividerModule */],
    list["e" /* MatListModule */],
    esm2015_dialog["k" /* MatDialogModule */],
    sidenav["h" /* MatSidenavModule */],
    drag_drop["h" /* DragDropModule */],
];
const ɵ0 = { title: 'Admin', depth: 1, roles: ['ROLE_ADMIN'] }, ɵ1 = { title: 'Overview', depth: 2 }, ɵ2 = { title: 'Subscriptions', depth: 3 }, ɵ3 = { title: 'Subscription Detail' }, ɵ4 = { title: 'Notifications', depth: 3 }, ɵ5 = { title: 'Notification Detail' };
class AdminModule {
}



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/router/router.ngfactory.js
var router_ngfactory = __webpack_require__("C9Ky");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/tooltip/typings/index.ngfactory.js
var index_ngfactory = __webpack_require__("pLqg");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/dialog/typings/index.ngfactory.js
var typings_index_ngfactory = __webpack_require__("7tlY");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/app-confirm/src/lib/app-confirm.component.ngfactory.js + 1 modules
var app_confirm_component_ngfactory = __webpack_require__("0I19");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/core/ngx-formly-core.ngfactory.js
var ngx_formly_core_ngfactory = __webpack_require__("u6Y8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js
var ngx_formly_core = __webpack_require__("CoYZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__("ZTXN");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-form-field.js






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormlyErrorStateMatcher {
    /**
     * @param {?} field
     */
    constructor(field) {
        this.field = field;
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return this.field && this.field.showError;
    }
}
let ngx_formly_material_form_field_FieldType$1 = /*@__PURE__*/ (() => {
    class FieldType$1 extends ngx_formly_core["b" /* FieldType */] {
        constructor() {
            super(...arguments);
            this.errorStateMatcher = new FormlyErrorStateMatcher(this);
            this.stateChanges = new Subject["a" /* Subject */]();
            this._errorState = false;
        }
        /**
         * @return {?}
         */
        get formFieldControl() { return this._control || this; }
        /**
         * @param {?} control
         * @return {?}
         */
        set formFieldControl(control) {
            this._control = control;
            if (this.formField && control !== this.formField._control) {
                this.formField._control = control;
            }
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            if (this.formField) {
                this.formField._control = this.formFieldControl;
            }
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            if (this.matPrefix || this.matSuffix) {
                setTimeout(( /**
                 * @return {?}
                 */() => {
                    Object(ngx_formly_core["n" /* ɵdefineHiddenProp */])(this.field, '_matprefix', this.matPrefix);
                    Object(ngx_formly_core["n" /* ɵdefineHiddenProp */])(this.field, '_matsuffix', this.matSuffix);
                    (( /** @type {?} */(this.options)))._markForCheck(this.field);
                }));
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            if (this.formField) {
                delete this.formField._control;
            }
            this.stateChanges.complete();
        }
        /**
         * @param {?} ids
         * @return {?}
         */
        setDescribedByIds(ids) { }
        /**
         * @param {?} event
         * @return {?}
         */
        onContainerClick(event) {
            this.field.focus = true;
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        get errorState() {
            /** @type {?} */
            const showError = ( /** @type {?} */(( /** @type {?} */(this.options)).showError))(this);
            if (showError !== this._errorState) {
                this._errorState = showError;
                this.stateChanges.next();
            }
            return showError;
        }
        /**
         * @return {?}
         */
        get controlType() {
            if (this.to.type) {
                return this.to.type;
            }
            if ((( /** @type {?} */(this.field.type))) instanceof core["T" /* Type */]) {
                return ( /** @type {?} */(this.field.type)).constructor.name;
            }
            return ( /** @type {?} */(this.field.type));
        }
        /**
         * @return {?}
         */
        get focused() { return !!this.field.focus && !this.disabled; }
        /**
         * @return {?}
         */
        get disabled() { return !!this.to.disabled; }
        /**
         * @return {?}
         */
        get required() { return !!this.to.required; }
        /**
         * @return {?}
         */
        get placeholder() { return this.to.placeholder || ''; }
        /**
         * @return {?}
         */
        get shouldPlaceholderFloat() { return this.shouldLabelFloat; }
        /**
         * @return {?}
         */
        get value() { return this.formControl.value; }
        /**
         * @param {?} value
         * @return {?}
         */
        set value(value) { this.formControl.patchValue(value); }
        /**
         * @return {?}
         */
        get ngControl() { return ( /** @type {?} */(this.formControl)); }
        /**
         * @return {?}
         */
        get empty() { return this.value === undefined || this.value === null || this.value === ''; }
        /**
         * @return {?}
         */
        get shouldLabelFloat() { return this.focused || !this.empty; }
        /**
         * @return {?}
         */
        get formField() { return this.field ? (( /** @type {?} */(this.field)))['__formField__'] : null; }
    }
    return FieldType$1;
})();
let ngx_formly_material_form_field_FormlyWrapperFormField = /*@__PURE__*/ (() => {
    class FormlyWrapperFormField extends ngx_formly_core["c" /* FieldWrapper */] {
        /**
         * @param {?} renderer
         */
        constructor(renderer) {
            super();
            this.renderer = renderer;
            this.stateChanges = new Subject["a" /* Subject */]();
            this._errorState = false;
            this.initialGapCalculated = false;
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this.formField._control = this;
            Object(ngx_formly_core["n" /* ɵdefineHiddenProp */])(this.field, '__formField__', this.formField);
            /** @type {?} */
            const fieldComponent = this.formlyField['_componentFactory'];
            if (fieldComponent && !(fieldComponent.componentRef.instance instanceof ngx_formly_material_form_field_FieldType$1)) {
                console.warn(`Component '${fieldComponent.component.prototype.constructor.name}' must extend 'FieldType' from '@ngx-formly/material'.`);
            }
            // fix for https://github.com/angular/material2/issues/11437
            if (this.formlyField.hide && ( /** @type {?} */(this.formlyField.templateOptions)).appearance === 'outline') {
                this.initialGapCalculated = true;
            }
        }
        /**
         * @return {?}
         */
        ngAfterContentChecked() {
            if (!this.initialGapCalculated || this.formlyField.hide) {
                return;
            }
            this.formField.updateOutlineGap();
            this.initialGapCalculated = true;
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            // temporary fix for https://github.com/angular/material2/issues/7891
            if (this.formField.underlineRef && this.to.hideFieldUnderline === true) {
                this.renderer.removeClass(this.formField.underlineRef.nativeElement, 'mat-form-field-underline');
                this.renderer.removeClass(this.formField.underlineRef.nativeElement.firstChild, 'mat-form-field-ripple');
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            delete this.formlyField.__formField__;
            this.stateChanges.complete();
        }
        /**
         * @param {?} ids
         * @return {?}
         */
        setDescribedByIds(ids) { }
        /**
         * @param {?} event
         * @return {?}
         */
        onContainerClick(event) {
            this.formlyField.focus = true;
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        get errorState() {
            /** @type {?} */
            const showError = ( /** @type {?} */(( /** @type {?} */(this.options)).showError))(this);
            if (showError !== this._errorState) {
                this._errorState = showError;
                this.stateChanges.next();
            }
            return showError;
        }
        /**
         * @return {?}
         */
        get controlType() { return this.to.type; }
        /**
         * @return {?}
         */
        get focused() { return !!this.formlyField.focus && !this.disabled; }
        /**
         * @return {?}
         */
        get disabled() { return !!this.to.disabled; }
        /**
         * @return {?}
         */
        get required() { return !!this.to.required; }
        /**
         * @return {?}
         */
        get placeholder() { return this.to.placeholder || ''; }
        /**
         * @return {?}
         */
        get shouldPlaceholderFloat() { return this.shouldLabelFloat; }
        /**
         * @return {?}
         */
        get value() { return this.formControl.value; }
        /**
         * @return {?}
         */
        get ngControl() { return ( /** @type {?} */(this.formControl)); }
        /**
         * @return {?}
         */
        get empty() { return !this.formControl.value; }
        /**
         * @return {?}
         */
        get shouldLabelFloat() { return this.focused || !this.empty; }
        /**
         * @return {?}
         */
        get formlyField() { return ( /** @type {?} */(this.field)); }
    }
    return FormlyWrapperFormField;
})();
let FormlyMatFormFieldModule = /*@__PURE__*/ (() => {
    class FormlyMatFormFieldModule {
    }
    return FormlyMatFormFieldModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__("An66");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/forms/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3kIJ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/observers.js
var observers = __webpack_require__("OcC5");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/form-field/typings/index.ngfactory.js
var form_field_typings_index_ngfactory = __webpack_require__("QsvA");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/core.js + 1 modules
var esm2015_core = __webpack_require__("ApNh");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/bidi.js
var bidi = __webpack_require__("pOQZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/platform.js
var platform = __webpack_require__("4rR8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/platform-browser/fesm2015/animations.js
var animations = __webpack_require__("FxgA");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/form-field/ngx-formly-material-form-field.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */













var FormlyMatFormFieldModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatFormFieldModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, [])]); });

var styles_ɵa = [];
var RenderType_ɵa = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_ɵa, data: {} });

function View_ɵa_2(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "span", [["class", "mat-form-field-required-marker"]], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](-1, null, ["*"]))], null, null); }
function View_ɵa_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-label", [], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, [[5, 4], [6, 4]], 0, form_field["g" /* MatLabel */], [], null, null), (_l()(), core["Vb" /* ɵted */](2, null, [" ", " "])), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_ɵa_2)), core["Ab" /* ɵdid */](4, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.to.required && (_co.to.hideRequiredMarker !== true)); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.to.label; _ck(_v, 2, 0, currVal_0); }); }
function View_ɵa_3(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_ɵa_4(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_ɵa_5(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, [[9, 4]], 0, form_field["f" /* MatHint */], [], { id: [0, "id"] }, null), (_l()(), core["Vb" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_3 = null; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).align == "end"); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_2 = null; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _co.to.description; _ck(_v, 2, 0, currVal_4); }); }
function View_ɵa_0(_l) { return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { fieldComponent: 0 }), core["Tb" /* ɵqud */](402653184, 2, { formField: 0 }), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 27, "mat-form-field", [["class", "mat-form-field"]], [[4, "width", null], [2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](3, 7520256, [[2, 4]], 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"], appearance: [1, "appearance"], hideRequiredMarker: [2, "hideRequiredMarker"], floatLabel: [3, "floatLabel"] }, null), core["Tb" /* ɵqud */](603979776, 3, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 4, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 5, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 6, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 7, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 8, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 9, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 10, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 11, { _suffixChildren: 1 }), (_l()(), core["Bb" /* ɵeld */](13, 16777216, [[1, 3], ["fieldComponent", 1]], 1, 0, null, null, null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, 3, 1, null, View_ɵa_1)), core["Ab" /* ɵdid */](15, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](16, 0, null, 0, 3, null, null, null, null, null, null, null)), core["Ab" /* ɵdid */](17, 16384, [[10, 4]], 0, form_field["h" /* MatPrefix */], [], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_ɵa_3)), core["Ab" /* ɵdid */](19, 540672, null, 0, common["u" /* NgTemplateOutlet */], [core["V" /* ViewContainerRef */]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), core["Bb" /* ɵeld */](20, 0, null, 4, 3, null, null, null, null, null, null, null)), core["Ab" /* ɵdid */](21, 16384, [[11, 4]], 0, form_field["i" /* MatSuffix */], [], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_ɵa_4)), core["Ab" /* ɵdid */](23, 540672, null, 0, common["u" /* NgTemplateOutlet */], [core["V" /* ViewContainerRef */]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), core["Bb" /* ɵeld */](24, 0, null, 5, 3, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["Ab" /* ɵdid */](25, 16384, [[8, 4]], 0, form_field["b" /* MatError */], [], { id: [0, "id"] }, null), (_l()(), core["Bb" /* ɵeld */](26, 0, null, null, 1, "formly-validation-message", [], null, null, null, ngx_formly_core_ngfactory["d" /* View_ɵc_0 */], ngx_formly_core_ngfactory["b" /* RenderType_ɵc */])), core["Ab" /* ɵdid */](27, 49152, null, 0, ngx_formly_core["l" /* ɵc */], [ngx_formly_core["e" /* FormlyConfig */]], { field: [0, "field"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 6, 1, null, View_ɵa_5)), core["Ab" /* ɵdid */](29, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_23 = _co.to.color; var currVal_24 = _co.to.appearance; var currVal_25 = true; var currVal_26 = _co.to.floatLabel; _ck(_v, 3, 0, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_27 = (_co.to.label && (_co.to.hideLabel !== true)); _ck(_v, 15, 0, currVal_27); var currVal_28 = (_co.to.prefix ? _co.to.prefix : _co.formlyField._matprefix); _ck(_v, 19, 0, currVal_28); var currVal_29 = (_co.to.suffix ? _co.to.suffix : _co.formlyField._matsuffix); _ck(_v, 23, 0, currVal_29); var currVal_31 = null; _ck(_v, 25, 0, currVal_31); var currVal_32 = _co.field; _ck(_v, 27, 0, currVal_32); var currVal_33 = _co.to.description; _ck(_v, 29, 0, currVal_33); }, function (_ck, _v) { var currVal_0 = "100%"; var currVal_1 = (core["Nb" /* ɵnov */](_v, 3).appearance == "standard"); var currVal_2 = (core["Nb" /* ɵnov */](_v, 3).appearance == "fill"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 3).appearance == "outline"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 3).appearance == "legacy"); var currVal_5 = core["Nb" /* ɵnov */](_v, 3)._control.errorState; var currVal_6 = core["Nb" /* ɵnov */](_v, 3)._canLabelFloat; var currVal_7 = core["Nb" /* ɵnov */](_v, 3)._shouldLabelFloat(); var currVal_8 = core["Nb" /* ɵnov */](_v, 3)._hasFloatingLabel(); var currVal_9 = core["Nb" /* ɵnov */](_v, 3)._hideControlPlaceholder(); var currVal_10 = core["Nb" /* ɵnov */](_v, 3)._control.disabled; var currVal_11 = core["Nb" /* ɵnov */](_v, 3)._control.autofilled; var currVal_12 = core["Nb" /* ɵnov */](_v, 3)._control.focused; var currVal_13 = (core["Nb" /* ɵnov */](_v, 3).color == "accent"); var currVal_14 = (core["Nb" /* ɵnov */](_v, 3).color == "warn"); var currVal_15 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("untouched"); var currVal_16 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("touched"); var currVal_17 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("pristine"); var currVal_18 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("dirty"); var currVal_19 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("valid"); var currVal_20 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("invalid"); var currVal_21 = core["Nb" /* ɵnov */](_v, 3)._shouldForward("pending"); var currVal_22 = !core["Nb" /* ɵnov */](_v, 3)._animationsEnabled; _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_30 = core["Nb" /* ɵnov */](_v, 25).id; _ck(_v, 24, 0, currVal_30); }); }
function View_ɵa_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "formly-wrapper-mat-form-field", [], null, null, null, View_ɵa_0, RenderType_ɵa)), core["Sb" /* ɵprd */](6144, null, form_field["d" /* MatFormFieldControl */], null, [ngx_formly_material_form_field_FormlyWrapperFormField]), core["Ab" /* ɵdid */](2, 6537216, null, 0, ngx_formly_material_form_field_FormlyWrapperFormField, [core["I" /* Renderer2 */]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var ɵaNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-wrapper-mat-form-field", ngx_formly_material_form_field_FormlyWrapperFormField, View_ɵa_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-input.js






let ngx_formly_material_input_FormlyFieldInput = /*@__PURE__*/ (() => {
    class FormlyFieldInput extends ngx_formly_material_form_field_FieldType$1 {
        /**
         * @return {?}
         */
        get type() {
            return this.to.type || 'text';
        }
    }
    return FormlyFieldInput;
})();
let FormlyMatInputModule = /*@__PURE__*/ (() => {
    class FormlyMatInputModule {
    }
    return FormlyMatInputModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/text-field.js
var text_field = __webpack_require__("9Z2Q");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/input/ngx-formly-material-input.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */














var FormlyMatInputModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatInputModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldInputNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, esm2015_core["d" /* ErrorStateMatcher */], esm2015_core["d" /* ErrorStateMatcher */], []), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, text_field["c" /* TextFieldModule */], text_field["c" /* TextFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, input["c" /* MatInputModule */], input["c" /* MatInputModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "input", component: ngx_formly_material_input_FormlyFieldInput, wrappers: ["form-field"] }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatInputModule, FormlyMatInputModule, [])]); });

var styles_FormlyFieldInput = [];
var RenderType_FormlyFieldInput = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_FormlyFieldInput, data: {} });

function View_FormlyFieldInput_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 8, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""]], [[8, "tabIndex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [1, "name", 0], [1, "step", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"], [null, "keyup"], [null, "keydown"], [null, "click"], [null, "change"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 2).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 2)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 2)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 7)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 7)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 7)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            if (("focus" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 8).onFocus($event) !== false);
                ad = (pd_7 && ad);
            }
            if (("blur" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 8).onBlur($event) !== false);
                ad = (pd_8 && ad);
            }
            if (("keyup" === en)) {
                var pd_9 = ((core["Nb" /* ɵnov */](_v, 8).to.keyup && core["Nb" /* ɵnov */](_v, 8).to.keyup(core["Nb" /* ɵnov */](_v, 8).field, $event)) !== false);
                ad = (pd_9 && ad);
            }
            if (("keydown" === en)) {
                var pd_10 = ((core["Nb" /* ɵnov */](_v, 8).to.keydown && core["Nb" /* ɵnov */](_v, 8).to.keydown(core["Nb" /* ɵnov */](_v, 8).field, $event)) !== false);
                ad = (pd_10 && ad);
            }
            if (("click" === en)) {
                var pd_11 = ((core["Nb" /* ɵnov */](_v, 8).to.click && core["Nb" /* ɵnov */](_v, 8).to.click(core["Nb" /* ɵnov */](_v, 8).field, $event)) !== false);
                ad = (pd_11 && ad);
            }
            if (("change" === en)) {
                var pd_12 = ((core["Nb" /* ɵnov */](_v, 8).to.change && core["Nb" /* ɵnov */](_v, 8).to.change(core["Nb" /* ɵnov */](_v, 8).field, $event)) !== false);
                ad = (pd_12 && ad);
            }
            if (("keypress" === en)) {
                var pd_13 = ((core["Nb" /* ɵnov */](_v, 8).to.keypress && core["Nb" /* ɵnov */](_v, 8).to.keypress(core["Nb" /* ɵnov */](_v, 8).field, $event)) !== false);
                ad = (pd_13 && ad);
            }
            return ad;
        }, null, null)), core["Sb" /* ɵprd */](6144, null, form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]]), core["Ab" /* ɵdid */](2, 16384, null, 0, fesm2015_forms["e" /* DefaultValueAccessor */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], [2, fesm2015_forms["b" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [fesm2015_forms["e" /* DefaultValueAccessor */]]), core["Ab" /* ɵdid */](4, 540672, null, 0, fesm2015_forms["i" /* FormControlDirective */], [[8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["i" /* FormControlDirective */]]), core["Ab" /* ɵdid */](6, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](7, 999424, [[3, 4]], 0, input["b" /* MatInput */], [core["m" /* ElementRef */], platform["a" /* Platform */], [6, fesm2015_forms["p" /* NgControl */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], { id: [0, "id"], placeholder: [1, "placeholder"], type: [2, "type"], errorStateMatcher: [3, "errorStateMatcher"], readonly: [4, "readonly"] }, null), core["Ab" /* ɵdid */](8, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_19 = _co.formControl; _ck(_v, 4, 0, currVal_19); var currVal_20 = _co.id; var currVal_21 = _co.to.placeholder; var currVal_22 = (_co.type || "text"); var currVal_23 = _co.errorStateMatcher; var currVal_24 = _co.to.readonly; _ck(_v, 7, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = _co.field; _ck(_v, 8, 0, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.tabindex || 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 6).ngClassUntouched; var currVal_2 = core["Nb" /* ɵnov */](_v, 6).ngClassTouched; var currVal_3 = core["Nb" /* ɵnov */](_v, 6).ngClassPristine; var currVal_4 = core["Nb" /* ɵnov */](_v, 6).ngClassDirty; var currVal_5 = core["Nb" /* ɵnov */](_v, 6).ngClassValid; var currVal_6 = core["Nb" /* ɵnov */](_v, 6).ngClassInvalid; var currVal_7 = core["Nb" /* ɵnov */](_v, 6).ngClassPending; var currVal_8 = core["Nb" /* ɵnov */](_v, 7)._isServer; var currVal_9 = core["Nb" /* ɵnov */](_v, 7).id; var currVal_10 = core["Nb" /* ɵnov */](_v, 7).placeholder; var currVal_11 = core["Nb" /* ɵnov */](_v, 7).disabled; var currVal_12 = core["Nb" /* ɵnov */](_v, 7).required; var currVal_13 = ((core["Nb" /* ɵnov */](_v, 7).readonly && !core["Nb" /* ɵnov */](_v, 7)._isNativeSelect) || null); var currVal_14 = (core["Nb" /* ɵnov */](_v, 7)._ariaDescribedby || null); var currVal_15 = core["Nb" /* ɵnov */](_v, 7).errorState; var currVal_16 = core["Nb" /* ɵnov */](_v, 7).required.toString(); var currVal_17 = core["Nb" /* ɵnov */](_v, 8).field.name; var currVal_18 = core["Nb" /* ɵnov */](_v, 8).to.step; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18]); });
}
function View_FormlyFieldInput_2(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 9, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "number"]], [[8, "tabIndex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [1, "name", 0], [1, "step", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"], [null, "keyup"], [null, "keydown"], [null, "click"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 2).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 2)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 2)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("change" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 3).onChange($event.target.value) !== false);
                ad = (pd_4 && ad);
            }
            if (("input" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 3).onChange($event.target.value) !== false);
                ad = (pd_5 && ad);
            }
            if (("blur" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 3).onTouched() !== false);
                ad = (pd_6 && ad);
            }
            if (("blur" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 8)._focusChanged(false) !== false);
                ad = (pd_7 && ad);
            }
            if (("focus" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 8)._focusChanged(true) !== false);
                ad = (pd_8 && ad);
            }
            if (("input" === en)) {
                var pd_9 = (core["Nb" /* ɵnov */](_v, 8)._onInput() !== false);
                ad = (pd_9 && ad);
            }
            if (("focus" === en)) {
                var pd_10 = (core["Nb" /* ɵnov */](_v, 9).onFocus($event) !== false);
                ad = (pd_10 && ad);
            }
            if (("blur" === en)) {
                var pd_11 = (core["Nb" /* ɵnov */](_v, 9).onBlur($event) !== false);
                ad = (pd_11 && ad);
            }
            if (("keyup" === en)) {
                var pd_12 = ((core["Nb" /* ɵnov */](_v, 9).to.keyup && core["Nb" /* ɵnov */](_v, 9).to.keyup(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_12 && ad);
            }
            if (("keydown" === en)) {
                var pd_13 = ((core["Nb" /* ɵnov */](_v, 9).to.keydown && core["Nb" /* ɵnov */](_v, 9).to.keydown(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_13 && ad);
            }
            if (("click" === en)) {
                var pd_14 = ((core["Nb" /* ɵnov */](_v, 9).to.click && core["Nb" /* ɵnov */](_v, 9).to.click(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_14 && ad);
            }
            if (("change" === en)) {
                var pd_15 = ((core["Nb" /* ɵnov */](_v, 9).to.change && core["Nb" /* ɵnov */](_v, 9).to.change(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_15 && ad);
            }
            if (("keypress" === en)) {
                var pd_16 = ((core["Nb" /* ɵnov */](_v, 9).to.keypress && core["Nb" /* ɵnov */](_v, 9).to.keypress(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_16 && ad);
            }
            return ad;
        }, null, null)), core["Sb" /* ɵprd */](6144, null, form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]]), core["Ab" /* ɵdid */](2, 16384, null, 0, fesm2015_forms["e" /* DefaultValueAccessor */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], [2, fesm2015_forms["b" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Ab" /* ɵdid */](3, 16384, null, 0, fesm2015_forms["t" /* NumberValueAccessor */], [core["I" /* Renderer2 */], core["m" /* ElementRef */]], null, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [fesm2015_forms["e" /* DefaultValueAccessor */], fesm2015_forms["t" /* NumberValueAccessor */]]), core["Ab" /* ɵdid */](5, 540672, null, 0, fesm2015_forms["i" /* FormControlDirective */], [[8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["i" /* FormControlDirective */]]), core["Ab" /* ɵdid */](7, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](8, 999424, [[3, 4]], 0, input["b" /* MatInput */], [core["m" /* ElementRef */], platform["a" /* Platform */], [6, fesm2015_forms["p" /* NgControl */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], { id: [0, "id"], placeholder: [1, "placeholder"], type: [2, "type"], errorStateMatcher: [3, "errorStateMatcher"], readonly: [4, "readonly"] }, null), core["Ab" /* ɵdid */](9, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_19 = _co.formControl; _ck(_v, 5, 0, currVal_19); var currVal_20 = _co.id; var currVal_21 = _co.to.placeholder; var currVal_22 = "number"; var currVal_23 = _co.errorStateMatcher; var currVal_24 = _co.to.readonly; _ck(_v, 8, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = _co.field; _ck(_v, 9, 0, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.tabindex || 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_2 = core["Nb" /* ɵnov */](_v, 7).ngClassTouched; var currVal_3 = core["Nb" /* ɵnov */](_v, 7).ngClassPristine; var currVal_4 = core["Nb" /* ɵnov */](_v, 7).ngClassDirty; var currVal_5 = core["Nb" /* ɵnov */](_v, 7).ngClassValid; var currVal_6 = core["Nb" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_7 = core["Nb" /* ɵnov */](_v, 7).ngClassPending; var currVal_8 = core["Nb" /* ɵnov */](_v, 8)._isServer; var currVal_9 = core["Nb" /* ɵnov */](_v, 8).id; var currVal_10 = core["Nb" /* ɵnov */](_v, 8).placeholder; var currVal_11 = core["Nb" /* ɵnov */](_v, 8).disabled; var currVal_12 = core["Nb" /* ɵnov */](_v, 8).required; var currVal_13 = ((core["Nb" /* ɵnov */](_v, 8).readonly && !core["Nb" /* ɵnov */](_v, 8)._isNativeSelect) || null); var currVal_14 = (core["Nb" /* ɵnov */](_v, 8)._ariaDescribedby || null); var currVal_15 = core["Nb" /* ɵnov */](_v, 8).errorState; var currVal_16 = core["Nb" /* ɵnov */](_v, 8).required.toString(); var currVal_17 = core["Nb" /* ɵnov */](_v, 9).field.name; var currVal_18 = core["Nb" /* ɵnov */](_v, 9).to.step; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18]); });
}
function View_FormlyFieldInput_0(_l) { return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { matPrefix: 0 }), core["Tb" /* ɵqud */](402653184, 2, { matSuffix: 0 }), core["Tb" /* ɵqud */](671088640, 3, { formFieldControl: 0 }), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_FormlyFieldInput_1)), core["Ab" /* ɵdid */](4, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), core["qb" /* ɵand */](0, [["numberTmp", 2]], null, 0, null, View_FormlyFieldInput_2))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.type !== "number"); var currVal_1 = core["Nb" /* ɵnov */](_v, 5); _ck(_v, 4, 0, currVal_0, currVal_1); }, null); }
function View_FormlyFieldInput_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "formly-field-mat-input", [], null, null, null, View_FormlyFieldInput_0, RenderType_FormlyFieldInput)), core["Ab" /* ɵdid */](1, 4440064, null, 0, ngx_formly_material_input_FormlyFieldInput, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormlyFieldInputNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-field-mat-input", ngx_formly_material_input_FormlyFieldInput, View_FormlyFieldInput_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-textarea.js






let ngx_formly_material_textarea_FormlyFieldTextArea = /*@__PURE__*/ (() => {
    class FormlyFieldTextArea extends ngx_formly_material_form_field_FieldType$1 {
        constructor() {
            super(...arguments);
            this.defaultOptions = {
                templateOptions: {
                    cols: 1,
                    rows: 1,
                },
            };
        }
    }
    return FormlyFieldTextArea;
})();
let FormlyMatTextAreaModule = /*@__PURE__*/ (() => {
    class FormlyMatTextAreaModule {
    }
    return FormlyMatTextAreaModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/textarea/ngx-formly-material-textarea.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */














var FormlyMatTextAreaModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatTextAreaModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldTextAreaNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, esm2015_core["d" /* ErrorStateMatcher */], esm2015_core["d" /* ErrorStateMatcher */], []), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, text_field["c" /* TextFieldModule */], text_field["c" /* TextFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, input["c" /* MatInputModule */], input["c" /* MatInputModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "textarea", component: ngx_formly_material_textarea_FormlyFieldTextArea, wrappers: ["form-field"] }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatTextAreaModule, FormlyMatTextAreaModule, [])]); });

var styles_FormlyFieldTextArea = [];
var RenderType_FormlyFieldTextArea = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_FormlyFieldTextArea, data: {} });

function View_FormlyFieldTextArea_0(_l) {
    return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { matPrefix: 0 }), core["Tb" /* ɵqud */](402653184, 2, { matSuffix: 0 }), core["Tb" /* ɵqud */](402653184, 3, { formFieldControl: 0 }), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 10, "textarea", [["class", "cdk-textarea-autosize mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["rows", "1"]], [[8, "cols", 0], [8, "rows", 0], [8, "tabIndex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [1, "name", 0], [1, "step", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"], [null, "keyup"], [null, "keydown"], [null, "click"], [null, "change"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 5)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 5).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 5)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 5)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("input" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 10)._noopInputHandler() !== false);
                ad = (pd_4 && ad);
            }
            if (("blur" === en)) {
                var pd_5 = (core["Nb" /* ɵnov */](_v, 11)._focusChanged(false) !== false);
                ad = (pd_5 && ad);
            }
            if (("focus" === en)) {
                var pd_6 = (core["Nb" /* ɵnov */](_v, 11)._focusChanged(true) !== false);
                ad = (pd_6 && ad);
            }
            if (("input" === en)) {
                var pd_7 = (core["Nb" /* ɵnov */](_v, 11)._onInput() !== false);
                ad = (pd_7 && ad);
            }
            if (("focus" === en)) {
                var pd_8 = (core["Nb" /* ɵnov */](_v, 12).onFocus($event) !== false);
                ad = (pd_8 && ad);
            }
            if (("blur" === en)) {
                var pd_9 = (core["Nb" /* ɵnov */](_v, 12).onBlur($event) !== false);
                ad = (pd_9 && ad);
            }
            if (("keyup" === en)) {
                var pd_10 = ((core["Nb" /* ɵnov */](_v, 12).to.keyup && core["Nb" /* ɵnov */](_v, 12).to.keyup(core["Nb" /* ɵnov */](_v, 12).field, $event)) !== false);
                ad = (pd_10 && ad);
            }
            if (("keydown" === en)) {
                var pd_11 = ((core["Nb" /* ɵnov */](_v, 12).to.keydown && core["Nb" /* ɵnov */](_v, 12).to.keydown(core["Nb" /* ɵnov */](_v, 12).field, $event)) !== false);
                ad = (pd_11 && ad);
            }
            if (("click" === en)) {
                var pd_12 = ((core["Nb" /* ɵnov */](_v, 12).to.click && core["Nb" /* ɵnov */](_v, 12).to.click(core["Nb" /* ɵnov */](_v, 12).field, $event)) !== false);
                ad = (pd_12 && ad);
            }
            if (("change" === en)) {
                var pd_13 = ((core["Nb" /* ɵnov */](_v, 12).to.change && core["Nb" /* ɵnov */](_v, 12).to.change(core["Nb" /* ɵnov */](_v, 12).field, $event)) !== false);
                ad = (pd_13 && ad);
            }
            if (("keypress" === en)) {
                var pd_14 = ((core["Nb" /* ɵnov */](_v, 12).to.keypress && core["Nb" /* ɵnov */](_v, 12).to.keypress(core["Nb" /* ɵnov */](_v, 12).field, $event)) !== false);
                ad = (pd_14 && ad);
            }
            return ad;
        }, null, null)), core["Sb" /* ɵprd */](6144, null, form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]]), core["Ab" /* ɵdid */](5, 16384, null, 0, fesm2015_forms["e" /* DefaultValueAccessor */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], [2, fesm2015_forms["b" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [fesm2015_forms["e" /* DefaultValueAccessor */]]), core["Ab" /* ɵdid */](7, 540672, null, 0, fesm2015_forms["i" /* FormControlDirective */], [[8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["i" /* FormControlDirective */]]), core["Ab" /* ɵdid */](9, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](10, 4603904, null, 0, text_field["b" /* CdkTextareaAutosize */], [core["m" /* ElementRef */], platform["a" /* Platform */], core["D" /* NgZone */]], { minRows: [0, "minRows"], maxRows: [1, "maxRows"], enabled: [2, "enabled"] }, null), core["Ab" /* ɵdid */](11, 999424, [[3, 4]], 0, input["b" /* MatInput */], [core["m" /* ElementRef */], platform["a" /* Platform */], [6, fesm2015_forms["p" /* NgControl */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], { id: [0, "id"], placeholder: [1, "placeholder"], errorStateMatcher: [2, "errorStateMatcher"], readonly: [3, "readonly"] }, null), core["Ab" /* ɵdid */](12, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["    "]))], function (_ck, _v) { var _co = _v.component; var currVal_21 = _co.formControl; _ck(_v, 7, 0, currVal_21); var currVal_22 = _co.to.autosizeMinRows; var currVal_23 = _co.to.autosizeMaxRows; var currVal_24 = _co.to.autosize; _ck(_v, 10, 0, currVal_22, currVal_23, currVal_24); var currVal_25 = _co.id; var currVal_26 = _co.to.placeholder; var currVal_27 = _co.errorStateMatcher; var currVal_28 = _co.to.readonly; _ck(_v, 11, 0, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_29 = _co.field; _ck(_v, 12, 0, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.to.cols; var currVal_1 = _co.to.rows; var currVal_2 = (_co.to.tabindex || 0); var currVal_3 = core["Nb" /* ɵnov */](_v, 9).ngClassUntouched; var currVal_4 = core["Nb" /* ɵnov */](_v, 9).ngClassTouched; var currVal_5 = core["Nb" /* ɵnov */](_v, 9).ngClassPristine; var currVal_6 = core["Nb" /* ɵnov */](_v, 9).ngClassDirty; var currVal_7 = core["Nb" /* ɵnov */](_v, 9).ngClassValid; var currVal_8 = core["Nb" /* ɵnov */](_v, 9).ngClassInvalid; var currVal_9 = core["Nb" /* ɵnov */](_v, 9).ngClassPending; var currVal_10 = core["Nb" /* ɵnov */](_v, 11)._isServer; var currVal_11 = core["Nb" /* ɵnov */](_v, 11).id; var currVal_12 = core["Nb" /* ɵnov */](_v, 11).placeholder; var currVal_13 = core["Nb" /* ɵnov */](_v, 11).disabled; var currVal_14 = core["Nb" /* ɵnov */](_v, 11).required; var currVal_15 = ((core["Nb" /* ɵnov */](_v, 11).readonly && !core["Nb" /* ɵnov */](_v, 11)._isNativeSelect) || null); var currVal_16 = (core["Nb" /* ɵnov */](_v, 11)._ariaDescribedby || null); var currVal_17 = core["Nb" /* ɵnov */](_v, 11).errorState; var currVal_18 = core["Nb" /* ɵnov */](_v, 11).required.toString(); var currVal_19 = core["Nb" /* ɵnov */](_v, 12).field.name; var currVal_20 = core["Nb" /* ɵnov */](_v, 12).to.step; _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); });
}
function View_FormlyFieldTextArea_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "formly-field-mat-textarea", [], null, null, null, View_FormlyFieldTextArea_0, RenderType_FormlyFieldTextArea)), core["Ab" /* ɵdid */](1, 4440064, null, 0, ngx_formly_material_textarea_FormlyFieldTextArea, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormlyFieldTextAreaNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-field-mat-textarea", ngx_formly_material_textarea_FormlyFieldTextArea, View_FormlyFieldTextArea_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-radio.js







let ngx_formly_material_radio_FormlyFieldRadio = /*@__PURE__*/ (() => {
    class FormlyFieldRadio extends ngx_formly_material_form_field_FieldType$1 {
        constructor() {
            super(...arguments);
            this.defaultOptions = {
                templateOptions: {
                    hideFieldUnderline: true,
                    floatLabel: 'always',
                    options: [],
                },
            };
        }
        /**
         * @param {?} event
         * @return {?}
         */
        onContainerClick(event) {
            if (this.radioGroup._radios.length && !this.radioGroup.selected) {
                this.radioGroup._radios.first.focus();
            }
            super.onContainerClick(event);
        }
    }
    return FormlyFieldRadio;
})();
let FormlyMatRadioModule = /*@__PURE__*/ (() => {
    class FormlyMatRadioModule {
    }
    return FormlyMatRadioModule;
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

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/radio.js
var esm2015_radio = __webpack_require__("7ywl");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/Observable.js + 2 modules
var Observable = __webpack_require__("IdLP");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__("ROBh");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__("YtkY");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/core/fesm2015/ngx-formly-core-select.js



let ngx_formly_core_select_FormlySelectOptionsPipe = /*@__PURE__*/ (() => {
    class FormlySelectOptionsPipe {
        /**
         * @param {?} options
         * @param {?=} field
         * @return {?}
         */
        transform(options, field) {
            if (!(options instanceof Observable["a" /* Observable */])) {
                options = Object(of["a" /* of */])(options);
            }
            return (( /** @type {?} */(options))).pipe(Object(map["a" /* map */])(( /**
             * @param {?} value
             * @return {?}
             *//**
             * @param {?} value
             * @return {?}
             */ value => this.toOptions(value, field || {}))));
        }
        /**
         * @private
         * @param {?} options
         * @param {?} field
         * @return {?}
         */
        toOptions(options, field) {
            /** @type {?} */
            const gOptions = [];
            /** @type {?} */
            const groups = {};
            /** @type {?} */
            const to = field.templateOptions || {};
            options.map(( /**
             * @param {?} option
             * @return {?}
             */(option) => {
                if (!this.getGroupProp(option, to)) {
                    gOptions.push(this.toOption(option, to));
                }
                else {
                    if (!groups[this.getGroupProp(option, to)]) {
                        groups[this.getGroupProp(option, to)] = [];
                        gOptions.push({
                            label: this.getGroupProp(option, to),
                            group: groups[this.getGroupProp(option, to)],
                        });
                    }
                    groups[this.getGroupProp(option, to)].push(this.toOption(option, to));
                }
            }));
            return gOptions;
        }
        /**
         * @private
         * @param {?} item
         * @param {?} to
         * @return {?}
         */
        toOption(item, to) {
            return {
                label: this.getLabelProp(item, to),
                value: this.getValueProp(item, to),
                disabled: this.getDisabledProp(item, to) || false,
            };
        }
        /**
         * @private
         * @param {?} item
         * @param {?} to
         * @return {?}
         */
        getLabelProp(item, to) {
            if (typeof to.labelProp === 'function') {
                return to.labelProp(item);
            }
            if (this.shouldUseLegacyOption(item, to)) {
                return item.value;
            }
            return item[to.labelProp || 'label'];
        }
        /**
         * @private
         * @param {?} item
         * @param {?} to
         * @return {?}
         */
        getValueProp(item, to) {
            if (typeof to.valueProp === 'function') {
                return to.valueProp(item);
            }
            if (this.shouldUseLegacyOption(item, to)) {
                return item.key;
            }
            return item[to.valueProp || 'value'];
        }
        /**
         * @private
         * @param {?} item
         * @param {?} to
         * @return {?}
         */
        getDisabledProp(item, to) {
            if (typeof to.disabledProp === 'function') {
                return to.disabledProp(item);
            }
            return item[to.disabledProp || 'disabled'];
        }
        /**
         * @private
         * @param {?} item
         * @param {?} to
         * @return {?}
         */
        getGroupProp(item, to) {
            if (typeof to.groupProp === 'function') {
                return to.groupProp(item);
            }
            return item[to.groupProp || 'group'];
        }
        /**
         * @private
         * @param {?} item
         * @param {?} to
         * @return {?}
         */
        shouldUseLegacyOption(item, to) {
            return !to.valueProp
                && !to.labelProp
                && item != null
                && typeof item === 'object'
                && 'key' in item
                && 'value' in item;
        }
    }
    return FormlySelectOptionsPipe;
})();
let FormlySelectModule = /*@__PURE__*/ (() => {
    class FormlySelectModule {
    }
    return FormlySelectModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/radio/typings/index.ngfactory.js
var radio_typings_index_ngfactory = __webpack_require__("wX4V");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/a11y.js
var a11y = __webpack_require__("owzC");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/collections.js
var collections = __webpack_require__("JXpk");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/radio/ngx-formly-material-radio.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




















var FormlyMatRadioModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatRadioModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldRadioNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_radio["d" /* MatRadioModule */], esm2015_radio["d" /* MatRadioModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "radio", component: ngx_formly_material_radio_FormlyFieldRadio, wrappers: ["form-field"] }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlySelectModule, FormlySelectModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatRadioModule, FormlyMatRadioModule, [])]); });

var styles_FormlyFieldRadio = [];
var RenderType_FormlyFieldRadio = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_FormlyFieldRadio, data: {} });

function View_FormlyFieldRadio_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-radio-button", [["class", "mat-radio-button"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [2, "_mat-animation-noopable", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [1, "tabindex", 0], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._inputElement.nativeElement.focus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, radio_typings_index_ngfactory["b" /* View_MatRadioButton_0 */], radio_typings_index_ngfactory["a" /* RenderType_MatRadioButton */])), core["Ab" /* ɵdid */](1, 4440064, [[4, 4]], 0, esm2015_radio["b" /* MatRadioButton */], [[2, esm2015_radio["c" /* MatRadioGroup */]], core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], collections["d" /* UniqueSelectionDispatcher */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, esm2015_radio["a" /* MAT_RADIO_DEFAULT_OPTIONS */]]], { id: [0, "id"], value: [1, "value"], labelPosition: [2, "labelPosition"], color: [3, "color"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = ((_co.id + "_") + _v.context.index); var currVal_9 = _v.context.$implicit.value; var currVal_10 = _co.to.labelPosition; var currVal_11 = _co.to.color; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).checked; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).disabled; var currVal_2 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 1).color === "primary"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 1).color === "accent"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 1).color === "warn"); var currVal_6 = (0 - 1); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_12 = _v.context.$implicit.label; _ck(_v, 2, 0, currVal_12); });
}
function View_FormlyFieldRadio_0(_l) {
    return core["Xb" /* ɵvid */](0, [core["Pb" /* ɵpid */](0, ngx_formly_core_select_FormlySelectOptionsPipe, []), core["Tb" /* ɵqud */](402653184, 1, { matPrefix: 0 }), core["Tb" /* ɵqud */](402653184, 2, { matSuffix: 0 }), core["Tb" /* ɵqud */](402653184, 3, { radioGroup: 0 }), (_l()(), core["Bb" /* ɵeld */](4, 0, null, null, 11, "mat-radio-group", [["class", "mat-radio-group"], ["role", "radiogroup"]], [[8, "tabIndex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "name", 0], [1, "step", 0]], [[null, "focus"], [null, "blur"], [null, "keyup"], [null, "keydown"], [null, "click"], [null, "change"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 11).onFocus($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 11).onBlur($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keyup" === en)) {
                var pd_2 = ((core["Nb" /* ɵnov */](_v, 11).to.keyup && core["Nb" /* ɵnov */](_v, 11).to.keyup(core["Nb" /* ɵnov */](_v, 11).field, $event)) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = ((core["Nb" /* ɵnov */](_v, 11).to.keydown && core["Nb" /* ɵnov */](_v, 11).to.keydown(core["Nb" /* ɵnov */](_v, 11).field, $event)) !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = ((core["Nb" /* ɵnov */](_v, 11).to.click && core["Nb" /* ɵnov */](_v, 11).to.click(core["Nb" /* ɵnov */](_v, 11).field, $event)) !== false);
                ad = (pd_4 && ad);
            }
            if (("change" === en)) {
                var pd_5 = ((core["Nb" /* ɵnov */](_v, 11).to.change && core["Nb" /* ɵnov */](_v, 11).to.change(core["Nb" /* ɵnov */](_v, 11).field, $event)) !== false);
                ad = (pd_5 && ad);
            }
            if (("keypress" === en)) {
                var pd_6 = ((core["Nb" /* ɵnov */](_v, 11).to.keypress && core["Nb" /* ɵnov */](_v, 11).to.keypress(core["Nb" /* ɵnov */](_v, 11).field, $event)) !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](5, 1064960, [[3, 4]], 1, esm2015_radio["c" /* MatRadioGroup */], [core["i" /* ChangeDetectorRef */]], null, { change: "change" }), core["Tb" /* ɵqud */](603979776, 4, { _radios: 1 }), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_radio["c" /* MatRadioGroup */]]), core["Ab" /* ɵdid */](8, 540672, null, 0, fesm2015_forms["i" /* FormControlDirective */], [[8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["i" /* FormControlDirective */]]), core["Ab" /* ɵdid */](10, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](11, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 3, null, View_FormlyFieldRadio_1)), core["Ab" /* ɵdid */](13, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Rb" /* ɵppd */](14, 2), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.formControl; _ck(_v, 8, 0, currVal_10); var currVal_11 = _co.field; _ck(_v, 11, 0, currVal_11); var currVal_12 = core["Wb" /* ɵunv */](_v, 13, 0, core["Nb" /* ɵnov */](_v, 15).transform(core["Wb" /* ɵunv */](_v, 13, 0, _ck(_v, 14, 0, core["Nb" /* ɵnov */](_v, 0), _co.to.options, _co.field)))); _ck(_v, 13, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.tabindex || 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 10).ngClassUntouched; var currVal_2 = core["Nb" /* ɵnov */](_v, 10).ngClassTouched; var currVal_3 = core["Nb" /* ɵnov */](_v, 10).ngClassPristine; var currVal_4 = core["Nb" /* ɵnov */](_v, 10).ngClassDirty; var currVal_5 = core["Nb" /* ɵnov */](_v, 10).ngClassValid; var currVal_6 = core["Nb" /* ɵnov */](_v, 10).ngClassInvalid; var currVal_7 = core["Nb" /* ɵnov */](_v, 10).ngClassPending; var currVal_8 = core["Nb" /* ɵnov */](_v, 11).field.name; var currVal_9 = core["Nb" /* ɵnov */](_v, 11).to.step; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_FormlyFieldRadio_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "formly-field-mat-radio", [], null, null, null, View_FormlyFieldRadio_0, RenderType_FormlyFieldRadio)), core["Ab" /* ɵdid */](1, 4440064, null, 0, ngx_formly_material_radio_FormlyFieldRadio, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormlyFieldRadioNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-field-mat-radio", ngx_formly_material_radio_FormlyFieldRadio, View_FormlyFieldRadio_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-checkbox.js







let ngx_formly_material_checkbox_FormlyFieldCheckbox = /*@__PURE__*/ (() => {
    class FormlyFieldCheckbox extends ngx_formly_material_form_field_FieldType$1 {
        /**
         * @param {?} focusMonitor
         */
        constructor(focusMonitor) {
            super();
            this.focusMonitor = focusMonitor;
            this.defaultOptions = {
                templateOptions: {
                    hideFieldUnderline: true,
                    indeterminate: true,
                    floatLabel: 'always',
                    hideLabel: true,
                    align: 'start',
                },
            };
        }
        /**
         * @param {?} event
         * @return {?}
         */
        onContainerClick(event) {
            this.checkbox.focus();
            super.onContainerClick(event);
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            super.ngAfterViewInit();
            this.focusMonitor
                .monitor(this.checkbox._inputElement.nativeElement)
                .subscribe(( /**
         * @param {?} focusOrigin
         * @return {?}
         *//**
         * @param {?} focusOrigin
         * @return {?}
         */ focusOrigin => this.field.focus = !!focusOrigin));
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            super.ngOnDestroy();
            this.focusMonitor.stopMonitoring(this.checkbox._inputElement.nativeElement);
        }
    }
    return FormlyFieldCheckbox;
})();
let FormlyMatCheckboxModule = /*@__PURE__*/ (() => {
    class FormlyMatCheckboxModule {
    }
    return FormlyMatCheckboxModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/checkbox/typings/index.ngfactory.js
var checkbox_typings_index_ngfactory = __webpack_require__("Kej7");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/checkbox/ngx-formly-material-checkbox.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */


















var FormlyMatCheckboxModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatCheckboxModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldCheckboxNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_checkbox["d" /* _MatCheckboxRequiredValidatorModule */], esm2015_checkbox["d" /* _MatCheckboxRequiredValidatorModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_checkbox["c" /* MatCheckboxModule */], esm2015_checkbox["c" /* MatCheckboxModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "checkbox", component: ngx_formly_material_checkbox_FormlyFieldCheckbox, wrappers: ["form-field"] }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatCheckboxModule, FormlyMatCheckboxModule, [])]); });

var styles_FormlyFieldCheckbox = [];
var RenderType_FormlyFieldCheckbox = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_FormlyFieldCheckbox, data: {} });

function View_FormlyFieldCheckbox_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "span", [["class", "mat-form-field-required-marker"]], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](-1, null, ["*"]))], null, null); }
function View_FormlyFieldCheckbox_0(_l) {
    return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { matPrefix: 0 }), core["Tb" /* ɵqud */](402653184, 2, { matSuffix: 0 }), core["Tb" /* ɵqud */](402653184, 3, { checkbox: 0 }), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 9, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "tabIndex", 0], [8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "name", 0], [1, "step", 0]], [[null, "focus"], [null, "blur"], [null, "keyup"], [null, "keydown"], [null, "click"], [null, "change"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 9).onFocus($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 9).onBlur($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keyup" === en)) {
                var pd_2 = ((core["Nb" /* ɵnov */](_v, 9).to.keyup && core["Nb" /* ɵnov */](_v, 9).to.keyup(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = ((core["Nb" /* ɵnov */](_v, 9).to.keydown && core["Nb" /* ɵnov */](_v, 9).to.keydown(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = ((core["Nb" /* ɵnov */](_v, 9).to.click && core["Nb" /* ɵnov */](_v, 9).to.click(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_4 && ad);
            }
            if (("change" === en)) {
                var pd_5 = ((core["Nb" /* ɵnov */](_v, 9).to.change && core["Nb" /* ɵnov */](_v, 9).to.change(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_5 && ad);
            }
            if (("keypress" === en)) {
                var pd_6 = ((core["Nb" /* ɵnov */](_v, 9).to.keypress && core["Nb" /* ɵnov */](_v, 9).to.keypress(core["Nb" /* ɵnov */](_v, 9).field, $event)) !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Ab" /* ɵdid */](4, 8568832, [[3, 4]], 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"], id: [1, "id"], labelPosition: [2, "labelPosition"], indeterminate: [3, "indeterminate"] }, { change: "change" }), core["Sb" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](6, 540672, null, 0, fesm2015_forms["i" /* FormControlDirective */], [[8, null], [8, null], [6, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */]], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["i" /* FormControlDirective */]]), core["Ab" /* ɵdid */](8, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](9, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null), (_l()(), core["Vb" /* ɵted */](10, 0, [" ", " "])), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_FormlyFieldCheckbox_1)), core["Ab" /* ɵdid */](12, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_17 = _co.to.color; var currVal_18 = _co.id; var currVal_19 = (_co.to.align || _co.to.labelPosition); var currVal_20 = (_co.to.indeterminate && (_co.formControl.value === null)); _ck(_v, 4, 0, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_21 = _co.formControl; _ck(_v, 6, 0, currVal_21); var currVal_22 = _co.field; _ck(_v, 9, 0, currVal_22); var currVal_24 = (_co.to.required && (_co.to.hideRequiredMarker !== true)); _ck(_v, 12, 0, currVal_24); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.tabindex || 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 4).id; var currVal_2 = null; var currVal_3 = core["Nb" /* ɵnov */](_v, 4).indeterminate; var currVal_4 = core["Nb" /* ɵnov */](_v, 4).checked; var currVal_5 = core["Nb" /* ɵnov */](_v, 4).disabled; var currVal_6 = (core["Nb" /* ɵnov */](_v, 4).labelPosition == "before"); var currVal_7 = (core["Nb" /* ɵnov */](_v, 4)._animationMode === "NoopAnimations"); var currVal_8 = core["Nb" /* ɵnov */](_v, 8).ngClassUntouched; var currVal_9 = core["Nb" /* ɵnov */](_v, 8).ngClassTouched; var currVal_10 = core["Nb" /* ɵnov */](_v, 8).ngClassPristine; var currVal_11 = core["Nb" /* ɵnov */](_v, 8).ngClassDirty; var currVal_12 = core["Nb" /* ɵnov */](_v, 8).ngClassValid; var currVal_13 = core["Nb" /* ɵnov */](_v, 8).ngClassInvalid; var currVal_14 = core["Nb" /* ɵnov */](_v, 8).ngClassPending; var currVal_15 = core["Nb" /* ɵnov */](_v, 9).field.name; var currVal_16 = core["Nb" /* ɵnov */](_v, 9).to.step; _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_23 = _co.to.label; _ck(_v, 10, 0, currVal_23); });
}
function View_FormlyFieldCheckbox_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "formly-field-mat-checkbox", [], null, null, null, View_FormlyFieldCheckbox_0, RenderType_FormlyFieldCheckbox)), core["Ab" /* ɵdid */](1, 4440064, null, 0, ngx_formly_material_checkbox_FormlyFieldCheckbox, [a11y["h" /* FocusMonitor */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormlyFieldCheckboxNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-field-mat-checkbox", ngx_formly_material_checkbox_FormlyFieldCheckbox, View_FormlyFieldCheckbox_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-multicheckbox.js







let ngx_formly_material_multicheckbox_FormlyFieldMultiCheckbox = /*@__PURE__*/ (() => {
    class FormlyFieldMultiCheckbox extends ngx_formly_material_form_field_FieldType$1 {
        constructor() {
            super(...arguments);
            this.defaultOptions = {
                templateOptions: {
                    hideFieldUnderline: true,
                    floatLabel: 'always',
                    options: [],
                },
            };
        }
        /**
         * @param {?} value
         * @param {?} checked
         * @return {?}
         */
        onChange(value, checked) {
            if (this.to.type === 'array') {
                this.formControl.patchValue(checked
                    ? [...(this.formControl.value || []), value]
                    : [...(this.formControl.value || [])].filter(( /**
                     * @param {?} o
                     * @return {?}
                     *//**
                     * @param {?} o
                     * @return {?}
                     */ o => o !== value)));
            }
            else {
                this.formControl.patchValue(Object.assign({}, this.formControl.value, { [value]: checked }));
            }
            this.formControl.markAsTouched();
        }
    }
    return FormlyFieldMultiCheckbox;
})();
let FormlyMatMultiCheckboxModule = /*@__PURE__*/ (() => {
    class FormlyMatMultiCheckboxModule {
    }
    return FormlyMatMultiCheckboxModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/multicheckbox/ngx-formly-material-multicheckbox.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



















var FormlyMatMultiCheckboxModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatMultiCheckboxModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldMultiCheckboxNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_checkbox["d" /* _MatCheckboxRequiredValidatorModule */], esm2015_checkbox["d" /* _MatCheckboxRequiredValidatorModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_checkbox["c" /* MatCheckboxModule */], esm2015_checkbox["c" /* MatCheckboxModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "multicheckbox", component: ngx_formly_material_multicheckbox_FormlyFieldMultiCheckbox, wrappers: ["form-field"] }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlySelectModule, FormlySelectModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatMultiCheckboxModule, FormlyMatMultiCheckboxModule, [])]); });

var styles_FormlyFieldMultiCheckbox = [];
var RenderType_FormlyFieldMultiCheckbox = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_FormlyFieldMultiCheckbox, data: {} });

function View_FormlyFieldMultiCheckbox_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 4, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "tabIndex", 0], [8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [1, "name", 0], [1, "step", 0]], [[null, "change"], [null, "focus"], [null, "blur"], [null, "keyup"], [null, "keydown"], [null, "click"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("focus" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 4).onFocus($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 4).onBlur($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keyup" === en)) {
                var pd_2 = ((core["Nb" /* ɵnov */](_v, 4).to.keyup && core["Nb" /* ɵnov */](_v, 4).to.keyup(core["Nb" /* ɵnov */](_v, 4).field, $event)) !== false);
                ad = (pd_2 && ad);
            }
            if (("keydown" === en)) {
                var pd_3 = ((core["Nb" /* ɵnov */](_v, 4).to.keydown && core["Nb" /* ɵnov */](_v, 4).to.keydown(core["Nb" /* ɵnov */](_v, 4).field, $event)) !== false);
                ad = (pd_3 && ad);
            }
            if (("click" === en)) {
                var pd_4 = ((core["Nb" /* ɵnov */](_v, 4).to.click && core["Nb" /* ɵnov */](_v, 4).to.click(core["Nb" /* ɵnov */](_v, 4).field, $event)) !== false);
                ad = (pd_4 && ad);
            }
            if (("change" === en)) {
                var pd_5 = ((core["Nb" /* ɵnov */](_v, 4).to.change && core["Nb" /* ɵnov */](_v, 4).to.change(core["Nb" /* ɵnov */](_v, 4).field, $event)) !== false);
                ad = (pd_5 && ad);
            }
            if (("keypress" === en)) {
                var pd_6 = ((core["Nb" /* ɵnov */](_v, 4).to.keypress && core["Nb" /* ɵnov */](_v, 4).to.keypress(core["Nb" /* ɵnov */](_v, 4).field, $event)) !== false);
                ad = (pd_6 && ad);
            }
            if (("change" === en)) {
                var pd_7 = (_co.onChange(_v.context.$implicit.value, $event.checked) !== false);
                ad = (pd_7 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](3, 8568832, null, 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"], id: [1, "id"], labelPosition: [2, "labelPosition"], checked: [3, "checked"] }, { change: "change" }), core["Ab" /* ɵdid */](4, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null), (_l()(), core["Vb" /* ɵted */](5, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.to.color; var currVal_11 = ((_co.id + "_") + _v.context.index); var currVal_12 = _co.to.labelPosition; var currVal_13 = (_co.formControl.value && ((_co.to.type === "array") ? _co.formControl.value.includes(_v.context.$implicit.value) : _co.formControl.value[_v.context.$implicit.value])); _ck(_v, 3, 0, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = _co.field; _ck(_v, 4, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.tabindex || 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 3).id; var currVal_2 = null; var currVal_3 = core["Nb" /* ɵnov */](_v, 3).indeterminate; var currVal_4 = core["Nb" /* ɵnov */](_v, 3).checked; var currVal_5 = core["Nb" /* ɵnov */](_v, 3).disabled; var currVal_6 = (core["Nb" /* ɵnov */](_v, 3).labelPosition == "before"); var currVal_7 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); var currVal_8 = core["Nb" /* ɵnov */](_v, 4).field.name; var currVal_9 = core["Nb" /* ɵnov */](_v, 4).to.step; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_15 = _v.context.$implicit.label; _ck(_v, 5, 0, currVal_15); });
}
function View_FormlyFieldMultiCheckbox_0(_l) { return core["Xb" /* ɵvid */](0, [core["Pb" /* ɵpid */](0, ngx_formly_core_select_FormlySelectOptionsPipe, []), core["Tb" /* ɵqud */](402653184, 1, { matPrefix: 0 }), core["Tb" /* ɵqud */](402653184, 2, { matSuffix: 0 }), (_l()(), core["qb" /* ɵand */](16777216, null, null, 3, null, View_FormlyFieldMultiCheckbox_1)), core["Ab" /* ɵdid */](4, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Rb" /* ɵppd */](5, 2), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Wb" /* ɵunv */](_v, 4, 0, core["Nb" /* ɵnov */](_v, 6).transform(core["Wb" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["Nb" /* ɵnov */](_v, 0), _co.to.options, _co.field)))); _ck(_v, 4, 0, currVal_0); }, null); }
function View_FormlyFieldMultiCheckbox_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "formly-field-mat-multicheckbox", [], null, null, null, View_FormlyFieldMultiCheckbox_0, RenderType_FormlyFieldMultiCheckbox)), core["Ab" /* ɵdid */](1, 4440064, null, 0, ngx_formly_material_multicheckbox_FormlyFieldMultiCheckbox, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormlyFieldMultiCheckboxNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-field-mat-multicheckbox", ngx_formly_material_multicheckbox_FormlyFieldMultiCheckbox, View_FormlyFieldMultiCheckbox_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material-select.js








let ngx_formly_material_select_FormlyFieldSelect = /*@__PURE__*/ (() => {
    class FormlyFieldSelect extends ngx_formly_material_form_field_FieldType$1 {
        constructor() {
            super(...arguments);
            this.defaultOptions = {
                templateOptions: { options: [] },
            };
        }
        /**
         * @return {?}
         */
        get value() { return this.formControl.value || []; }
        /**
         * @param {?} options
         * @return {?}
         */
        getState(options) {
            if (this.value.length > 0) {
                return this.value.length !== options.length
                    ? 'indeterminate'
                    : 'checked';
            }
            return '';
        }
        /**
         * @param {?} options
         * @return {?}
         */
        toggleSelectAll(options) {
            this.formControl.setValue(this.value.length !== options.length
                ? options.map(( /**
                 * @param {?} x
                 * @return {?}
                 *//**
                 * @param {?} x
                 * @return {?}
                 */ x => x.value))
                : []);
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        change($event) {
            if (this.to.change) {
                this.to.change(this.field, $event);
            }
        }
        /**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        compareWith(o1, o2) {
            return o1 === o2;
        }
    }
    return FormlyFieldSelect;
})();
let FormlyMatSelectModule = /*@__PURE__*/ (() => {
    class FormlyMatSelectModule {
    }
    return FormlyMatSelectModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/overlay.js
var overlay = __webpack_require__("D4FV");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/select.js
var esm2015_select = __webpack_require__("5ohT");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/portal.js
var portal = __webpack_require__("DiCn");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/scrolling.js + 1 modules
var scrolling = __webpack_require__("tBgR");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/core/typings/index.ngfactory.js
var core_typings_index_ngfactory = __webpack_require__("QH8h");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/select/typings/index.ngfactory.js
var select_typings_index_ngfactory = __webpack_require__("rW4h");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/select/ngx-formly-material-select.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */























var FormlyMatSelectModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](FormlyMatSelectModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldSelectNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](4608, overlay["c" /* Overlay */], overlay["c" /* Overlay */], [overlay["i" /* ScrollStrategyOptions */], overlay["e" /* OverlayContainer */], core["k" /* ComponentFactoryResolver */], overlay["h" /* OverlayPositionBuilder */], overlay["f" /* OverlayKeyboardDispatcher */], core["t" /* Injector */], core["D" /* NgZone */], common["d" /* DOCUMENT */], bidi["b" /* Directionality */], [2, common["j" /* Location */]]]), core["Lb" /* ɵmpd */](5120, overlay["j" /* ɵc */], overlay["k" /* ɵd */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](5120, esm2015_select["a" /* MAT_SELECT_SCROLL_STRATEGY */], esm2015_select["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, portal["g" /* PortalModule */], portal["g" /* PortalModule */], []), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, scrolling["g" /* ScrollingModule */], scrolling["g" /* ScrollingModule */], []), core["Lb" /* ɵmpd */](1073742336, overlay["g" /* OverlayModule */], overlay["g" /* OverlayModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["w" /* MatPseudoCheckboxModule */], esm2015_core["w" /* MatPseudoCheckboxModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["t" /* MatOptionModule */], esm2015_core["t" /* MatOptionModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_select["d" /* MatSelectModule */], esm2015_select["d" /* MatSelectModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "select", component: ngx_formly_material_select_FormlyFieldSelect, wrappers: ["form-field"] }] }]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlySelectModule, FormlySelectModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatSelectModule, FormlyMatSelectModule, [])]); });

var styles_FormlyFieldSelect = [];
var RenderType_FormlyFieldSelect = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 2, styles: styles_FormlyFieldSelect, data: {} });

function View_FormlyFieldSelect_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 1)._selectViaInteraction() !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 1)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("click" === en)) {
                var pd_2 = (_co.toggleSelectAll(_v.context.selectOptions) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, core_typings_index_ngfactory["e" /* View_MatOption_0 */], core_typings_index_ngfactory["b" /* RenderType_MatOption */])), core["Ab" /* ɵdid */](1, 8568832, null, 0, esm2015_core["s" /* MatOption */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */]], [2, esm2015_core["r" /* MatOptgroup */]]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 1, "mat-pseudo-checkbox", [["class", "mat-option-pseudo-checkbox mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, core_typings_index_ngfactory["f" /* View_MatPseudoCheckbox_0 */], core_typings_index_ngfactory["c" /* RenderType_MatPseudoCheckbox */])), core["Ab" /* ɵdid */](3, 49152, null, 0, esm2015_core["v" /* MatPseudoCheckbox */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { state: [0, "state"] }, null), (_l()(), core["Vb" /* ɵted */](4, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.getState(_v.context.selectOptions); _ck(_v, 3, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Nb" /* ɵnov */](_v, 1)._getTabIndex(); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).selected; var currVal_2 = core["Nb" /* ɵnov */](_v, 1).multiple; var currVal_3 = core["Nb" /* ɵnov */](_v, 1).active; var currVal_4 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_5 = core["Nb" /* ɵnov */](_v, 1)._getAriaSelected(); var currVal_6 = core["Nb" /* ɵnov */](_v, 1).disabled.toString(); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = (core["Nb" /* ɵnov */](_v, 3).state === "indeterminate"); var currVal_9 = (core["Nb" /* ɵnov */](_v, 3).state === "checked"); var currVal_10 = core["Nb" /* ɵnov */](_v, 3).disabled; var currVal_11 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_13 = _co.to.selectAllOption; _ck(_v, 4, 0, currVal_13); });
}
function View_FormlyFieldSelect_3(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 16777216, null, null, 2, null, null, null, null, null, null, null)), core["Ab" /* ɵdid */](1, 540672, null, 0, common["u" /* NgTemplateOutlet */], [core["V" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["Qb" /* ɵpod */](2, { selectOptions: 0 }), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.parent.context.ngIf); var currVal_1 = core["Nb" /* ɵnov */](_v.parent.parent, 3); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_FormlyFieldSelect_6(_l) {
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
        }, core_typings_index_ngfactory["e" /* View_MatOption_0 */], core_typings_index_ngfactory["b" /* RenderType_MatOption */])), core["Ab" /* ɵdid */](1, 8568832, [[3, 4]], 0, esm2015_core["s" /* MatOption */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */]], [2, esm2015_core["r" /* MatOptgroup */]]], { value: [0, "value"], disabled: [1, "disabled"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit.value; var currVal_9 = _v.context.$implicit.disabled; _ck(_v, 1, 0, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1)._getTabIndex(); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).selected; var currVal_2 = core["Nb" /* ɵnov */](_v, 1).multiple; var currVal_3 = core["Nb" /* ɵnov */](_v, 1).active; var currVal_4 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_5 = core["Nb" /* ɵnov */](_v, 1)._getAriaSelected(); var currVal_6 = core["Nb" /* ɵnov */](_v, 1).disabled.toString(); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = _v.context.$implicit.label; _ck(_v, 2, 0, currVal_10); });
}
function View_FormlyFieldSelect_5(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, "mat-optgroup", [["class", "mat-optgroup"], ["role", "group"]], [[2, "mat-optgroup-disabled", null], [1, "aria-disabled", 0], [1, "aria-labelledby", 0]], null, null, core_typings_index_ngfactory["d" /* View_MatOptgroup_0 */], core_typings_index_ngfactory["a" /* RenderType_MatOptgroup */])), core["Ab" /* ɵdid */](1, 49152, [[4, 4]], 0, esm2015_core["r" /* MatOptgroup */], [], { label: [0, "label"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 1, 1, null, View_FormlyFieldSelect_6)), core["Ab" /* ɵdid */](3, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_3 = _v.parent.context.$implicit.label; _ck(_v, 1, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.group; _ck(_v, 3, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1).disabled; var currVal_1 = core["Nb" /* ɵnov */](_v, 1).disabled.toString(); var currVal_2 = core["Nb" /* ɵnov */](_v, 1)._labelId; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_FormlyFieldSelect_7(_l) {
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
        }, core_typings_index_ngfactory["e" /* View_MatOption_0 */], core_typings_index_ngfactory["b" /* RenderType_MatOption */])), core["Ab" /* ɵdid */](1, 8568832, [[3, 4]], 0, esm2015_core["s" /* MatOption */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */]], [2, esm2015_core["r" /* MatOptgroup */]]], { value: [0, "value"], disabled: [1, "disabled"] }, null), (_l()(), core["Vb" /* ɵted */](2, 0, ["", ""]))], function (_ck, _v) { var currVal_8 = _v.parent.context.$implicit.value; var currVal_9 = _v.parent.context.$implicit.disabled; _ck(_v, 1, 0, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 1)._getTabIndex(); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).selected; var currVal_2 = core["Nb" /* ɵnov */](_v, 1).multiple; var currVal_3 = core["Nb" /* ɵnov */](_v, 1).active; var currVal_4 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_5 = core["Nb" /* ɵnov */](_v, 1)._getAriaSelected(); var currVal_6 = core["Nb" /* ɵnov */](_v, 1).disabled.toString(); var currVal_7 = core["Nb" /* ɵnov */](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = _v.parent.context.$implicit.label; _ck(_v, 2, 0, currVal_10); });
}
function View_FormlyFieldSelect_4(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_FormlyFieldSelect_5)), core["Ab" /* ɵdid */](2, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_FormlyFieldSelect_7)), core["Ab" /* ɵdid */](4, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.group; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_v.context.$implicit.group; _ck(_v, 4, 0, currVal_1); }, null); }
function View_FormlyFieldSelect_2(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_FormlyFieldSelect_3)), core["Ab" /* ɵdid */](2, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_FormlyFieldSelect_4)), core["Ab" /* ɵdid */](4, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.multiple && _co.to.selectAllOption); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.ngIf; _ck(_v, 4, 0, currVal_1); }, null); }
function View_FormlyFieldSelect_0(_l) {
    return core["Xb" /* ɵvid */](0, [core["Pb" /* ɵpid */](0, ngx_formly_core_select_FormlySelectOptionsPipe, []), core["Tb" /* ɵqud */](402653184, 1, { matPrefix: 0 }), core["Tb" /* ɵqud */](402653184, 2, { matSuffix: 0 }), (_l()(), core["qb" /* ɵand */](0, [["selectAll", 2]], null, 0, null, View_FormlyFieldSelect_1)), (_l()(), core["Bb" /* ɵeld */](4, 0, null, null, 14, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[8, "tabIndex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [1, "name", 0], [1, "step", 0]], [[null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"], [null, "keyup"], [null, "click"], [null, "change"], [null, "keypress"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keydown" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 10)._handleKeydown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 10)._onFocus() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 10)._onBlur() !== false);
                ad = (pd_2 && ad);
            }
            if (("focus" === en)) {
                var pd_3 = (core["Nb" /* ɵnov */](_v, 14).onFocus($event) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["Nb" /* ɵnov */](_v, 14).onBlur($event) !== false);
                ad = (pd_4 && ad);
            }
            if (("keyup" === en)) {
                var pd_5 = ((core["Nb" /* ɵnov */](_v, 14).to.keyup && core["Nb" /* ɵnov */](_v, 14).to.keyup(core["Nb" /* ɵnov */](_v, 14).field, $event)) !== false);
                ad = (pd_5 && ad);
            }
            if (("keydown" === en)) {
                var pd_6 = ((core["Nb" /* ɵnov */](_v, 14).to.keydown && core["Nb" /* ɵnov */](_v, 14).to.keydown(core["Nb" /* ɵnov */](_v, 14).field, $event)) !== false);
                ad = (pd_6 && ad);
            }
            if (("click" === en)) {
                var pd_7 = ((core["Nb" /* ɵnov */](_v, 14).to.click && core["Nb" /* ɵnov */](_v, 14).to.click(core["Nb" /* ɵnov */](_v, 14).field, $event)) !== false);
                ad = (pd_7 && ad);
            }
            if (("change" === en)) {
                var pd_8 = ((core["Nb" /* ɵnov */](_v, 14).to.change && core["Nb" /* ɵnov */](_v, 14).to.change(core["Nb" /* ɵnov */](_v, 14).field, $event)) !== false);
                ad = (pd_8 && ad);
            }
            if (("keypress" === en)) {
                var pd_9 = ((core["Nb" /* ɵnov */](_v, 14).to.keypress && core["Nb" /* ɵnov */](_v, 14).to.keypress(core["Nb" /* ɵnov */](_v, 14).field, $event)) !== false);
                ad = (pd_9 && ad);
            }
            if (("selectionChange" === en)) {
                var pd_10 = (_co.change($event) !== false);
                ad = (pd_10 && ad);
            }
            return ad;
        }, select_typings_index_ngfactory["b" /* View_MatSelect_0 */], select_typings_index_ngfactory["a" /* RenderType_MatSelect */])), core["Sb" /* ɵprd */](6144, null, esm2015_core["l" /* MAT_OPTION_PARENT_COMPONENT */], null, [esm2015_select["c" /* MatSelect */]]), core["Sb" /* ɵprd */](6144, null, form_field["d" /* MatFormFieldControl */], null, [esm2015_select["c" /* MatSelect */]]), core["Ab" /* ɵdid */](7, 540672, null, 0, fesm2015_forms["i" /* FormControlDirective */], [[8, null], [8, null], [8, null], [2, fesm2015_forms["z" /* ɵangular_packages_forms_forms_q */]]], { form: [0, "form"] }, null), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["p" /* NgControl */], null, [fesm2015_forms["i" /* FormControlDirective */]]), core["Ab" /* ɵdid */](9, 16384, null, 0, fesm2015_forms["q" /* NgControlStatus */], [[4, fesm2015_forms["p" /* NgControl */]]], null, null), core["Ab" /* ɵdid */](10, 2080768, null, 3, esm2015_select["c" /* MatSelect */], [scrolling["j" /* ViewportRuler */], core["i" /* ChangeDetectorRef */], core["D" /* NgZone */], esm2015_core["d" /* ErrorStateMatcher */], core["m" /* ElementRef */], [2, bidi["b" /* Directionality */]], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], [2, form_field["c" /* MatFormField */]], [6, fesm2015_forms["p" /* NgControl */]], [8, null], esm2015_select["a" /* MAT_SELECT_SCROLL_STRATEGY */], a11y["j" /* LiveAnnouncer */]], { placeholder: [0, "placeholder"], multiple: [1, "multiple"], disableOptionCentering: [2, "disableOptionCentering"], compareWith: [3, "compareWith"], ariaLabelledby: [4, "ariaLabelledby"], errorStateMatcher: [5, "errorStateMatcher"], id: [6, "id"] }, { selectionChange: "selectionChange" }), core["Tb" /* ɵqud */](603979776, 3, { options: 1 }), core["Tb" /* ɵqud */](603979776, 4, { optionGroups: 1 }), core["Tb" /* ɵqud */](603979776, 5, { customTrigger: 0 }), core["Ab" /* ɵdid */](14, 933888, null, 0, ngx_formly_core["d" /* FormlyAttributes */], [core["I" /* Renderer2 */], core["m" /* ElementRef */], common["d" /* DOCUMENT */]], { field: [0, "field"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 1, 3, null, View_FormlyFieldSelect_2)), core["Ab" /* ɵdid */](16, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), core["Rb" /* ɵppd */](17, 2), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_25 = _co.formControl; _ck(_v, 7, 0, currVal_25); var currVal_26 = _co.to.placeholder; var currVal_27 = _co.to.multiple; var currVal_28 = _co.to.disableOptionCentering; var currVal_29 = (_co.to.compareWith || _co.compareWith); var currVal_30 = ((_co.formField == null) ? null : _co.formField._labelId); var currVal_31 = _co.errorStateMatcher; var currVal_32 = _co.id; _ck(_v, 10, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_33 = _co.field; _ck(_v, 14, 0, currVal_33); var currVal_34 = core["Wb" /* ɵunv */](_v, 16, 0, core["Nb" /* ɵnov */](_v, 18).transform(core["Wb" /* ɵunv */](_v, 16, 0, _ck(_v, 17, 0, core["Nb" /* ɵnov */](_v, 0), _co.to.options, _co.field)))); _ck(_v, 16, 0, currVal_34); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.to.tabindex || 0); var currVal_1 = core["Nb" /* ɵnov */](_v, 9).ngClassUntouched; var currVal_2 = core["Nb" /* ɵnov */](_v, 9).ngClassTouched; var currVal_3 = core["Nb" /* ɵnov */](_v, 9).ngClassPristine; var currVal_4 = core["Nb" /* ɵnov */](_v, 9).ngClassDirty; var currVal_5 = core["Nb" /* ɵnov */](_v, 9).ngClassValid; var currVal_6 = core["Nb" /* ɵnov */](_v, 9).ngClassInvalid; var currVal_7 = core["Nb" /* ɵnov */](_v, 9).ngClassPending; var currVal_8 = core["Nb" /* ɵnov */](_v, 10).id; var currVal_9 = core["Nb" /* ɵnov */](_v, 10).tabIndex; var currVal_10 = core["Nb" /* ɵnov */](_v, 10)._getAriaLabel(); var currVal_11 = core["Nb" /* ɵnov */](_v, 10)._getAriaLabelledby(); var currVal_12 = core["Nb" /* ɵnov */](_v, 10).required.toString(); var currVal_13 = core["Nb" /* ɵnov */](_v, 10).disabled.toString(); var currVal_14 = core["Nb" /* ɵnov */](_v, 10).errorState; var currVal_15 = (core["Nb" /* ɵnov */](_v, 10).panelOpen ? core["Nb" /* ɵnov */](_v, 10)._optionIds : null); var currVal_16 = core["Nb" /* ɵnov */](_v, 10).multiple; var currVal_17 = (core["Nb" /* ɵnov */](_v, 10)._ariaDescribedby || null); var currVal_18 = core["Nb" /* ɵnov */](_v, 10)._getAriaActiveDescendant(); var currVal_19 = core["Nb" /* ɵnov */](_v, 10).disabled; var currVal_20 = core["Nb" /* ɵnov */](_v, 10).errorState; var currVal_21 = core["Nb" /* ɵnov */](_v, 10).required; var currVal_22 = core["Nb" /* ɵnov */](_v, 10).empty; var currVal_23 = core["Nb" /* ɵnov */](_v, 14).field.name; var currVal_24 = core["Nb" /* ɵnov */](_v, 14).to.step; _ck(_v, 4, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); });
}
function View_FormlyFieldSelect_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "formly-field-mat-select", [], null, null, null, View_FormlyFieldSelect_0, RenderType_FormlyFieldSelect)), core["Ab" /* ɵdid */](1, 4440064, null, 0, ngx_formly_material_select_FormlyFieldSelect, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormlyFieldSelectNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("formly-field-mat-select", ngx_formly_material_select_FormlyFieldSelect, View_FormlyFieldSelect_Host_0, { field: "field", model: "model", form: "form", options: "options" }, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/admin-layout/admin-layout.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".wrapper[_ngcontent-%COMP%]{display:block;padding:1.5%;position:relative}"];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/sidenav/typings/index.ngfactory.js
var sidenav_typings_index_ngfactory = __webpack_require__("qaoS");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/quickpanel/src/lib/quickpanel.component.ngfactory.js + 2 modules
var quickpanel_component_ngfactory = __webpack_require__("Cf7O");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/quickpanel/src/lib/quickpanel.component.ts
var quickpanel_component = __webpack_require__("5pe5");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/flex.js
var flex = __webpack_require__("Sgnd");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/core.js
var flex_layout_esm2015_core = __webpack_require__("76xf");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/toolbar/src/lib/toolbar.component.ngfactory.js + 23 modules
var toolbar_component_ngfactory = __webpack_require__("i0ti");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/toolbar/src/lib/toolbar.component.ts
var toolbar_component = __webpack_require__("8LFz");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/breadcrumbs/src/lib/breadcrumbs.component.ngfactory.js + 1 modules
var breadcrumbs_component_ngfactory = __webpack_require__("qv2O");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/breadcrumbs/src/lib/breadcrumbs.component.ts
var breadcrumbs_component = __webpack_require__("AxBZ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.ngfactory.js
var ngx_perfect_scrollbar_ngfactory = __webpack_require__("7pFi");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js + 2 modules
var ngx_perfect_scrollbar_es5 = __webpack_require__("YEP7");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__("1VvW");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js
var ngxs_router_plugin = __webpack_require__("q5XA");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/admin-layout/admin-layout.component.ts


/** @dynamic */
class admin_layout_component_AdminLayoutComponent {
    constructor(store, window) {
        this.store = store;
        this.window = window;
        this.quickpanelOpen = false;
    }
    ngOnInit() {
        this.crumbs$ = this.store
            .select(ngxs_router_plugin["d" /* RouterState */].state)
            .pipe(Object(map["a" /* map */])(state => Array.from(state.breadcrumbs, ([key, value]) => ({ name: key, link: '/' + value }))));
        this.depth$ = this.store.select(ngxs_router_plugin["d" /* RouterState */].state).pipe(Object(map["a" /* map */])(state => state.data.depth));
    }
    onActivate(componentRef) {
        // HINT: I can set inputs on activated component!
        // if (componentRef instanceof NotificationsComponent) {
        //   componentRef.sayhello();
        //   componentRef.crumbs$ = this.crumbs$;
        // }
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngxs/store/fesm2015/ngxs-store.js + 1 modules
var ngxs_store = __webpack_require__("Rhw3");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/core/src/lib/services/window.token.ts
var window_token = __webpack_require__("Bpi4");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/admin-layout/admin-layout.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
























var styles_AdminLayoutComponent = [styles];
var RenderType_AdminLayoutComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_AdminLayoutComponent, data: { "animation": [{ type: 7, name: "routeAnimation", definitions: [{ type: 1, expr: ":increment", animation: [{ type: 6, styles: { height: "!" }, offset: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: 0, left: 0, right: 0 }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, timings: "500ms ease-in-out" }], options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, timings: "500ms ease-in-out" }, options: { optional: true } }], options: null }], options: null }, { type: 1, expr: ":decrement", animation: [{ type: 6, styles: { height: "!" }, offset: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: 0, left: 0, right: 0 }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, timings: "500ms ease-in-out" }], options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, timings: "500ms ease-in-out" }, options: { optional: true } }], options: null }], options: null }], options: {} }] } });

function View_AdminLayoutComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 22, "mat-sidenav-container", [["class", "dashboard-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, sidenav_typings_index_ngfactory["j" /* View_MatSidenavContainer_0 */], sidenav_typings_index_ngfactory["e" /* RenderType_MatSidenavContainer */])), core["Ab" /* ɵdid */](1, 1490944, null, 2, sidenav["f" /* MatSidenavContainer */], [[2, bidi["b" /* Directionality */]], core["m" /* ElementRef */], core["D" /* NgZone */], core["i" /* ChangeDetectorRef */], scrolling["j" /* ViewportRuler */], sidenav["a" /* MAT_DRAWER_DEFAULT_AUTOSIZE */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _drawers: 1 }), core["Tb" /* ɵqud */](603979776, 2, { _content: 0 }), (_l()(), core["Bb" /* ɵeld */](4, 0, null, 0, 3, "mat-sidenav", [["align", "end"], ["class", "quickpanel mat-drawer mat-sidenav"], ["mode", "over"], ["position", "end"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
            var ad = true;
            if (("component:@transform.start" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 5)._animationStartListener($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("component:@transform.done" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 5)._animationDoneListener($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, sidenav_typings_index_ngfactory["l" /* View_MatSidenav_0 */], sidenav_typings_index_ngfactory["d" /* RenderType_MatSidenav */])), core["Ab" /* ɵdid */](5, 3325952, [[1, 4], ["quickpanel", 4]], 0, sidenav["e" /* MatSidenav */], [core["m" /* ElementRef */], a11y["i" /* FocusTrapFactory */], a11y["h" /* FocusMonitor */], platform["a" /* Platform */], core["D" /* NgZone */], [2, common["d" /* DOCUMENT */]]], { position: [0, "position"], mode: [1, "mode"], opened: [2, "opened"] }, null), (_l()(), core["Bb" /* ɵeld */](6, 0, null, 0, 1, "ngx-quickpanel", [], null, null, null, quickpanel_component_ngfactory["b" /* View_QuickpanelComponent_0 */], quickpanel_component_ngfactory["a" /* RenderType_QuickpanelComponent */])), core["Ab" /* ɵdid */](7, 114688, null, 0, quickpanel_component["a" /* QuickpanelComponent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](8, 0, null, 1, 14, "mat-sidenav-content", [["class", "content-container mat-drawer-content mat-sidenav-content"], ["fxLayout", "column"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, sidenav_typings_index_ngfactory["k" /* View_MatSidenavContent_0 */], sidenav_typings_index_ngfactory["f" /* RenderType_MatSidenavContent */])), core["Ab" /* ɵdid */](9, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), core["Ab" /* ɵdid */](10, 1294336, [[2, 4]], 0, sidenav["g" /* MatSidenavContent */], [core["i" /* ChangeDetectorRef */], sidenav["f" /* MatSidenavContainer */], core["m" /* ElementRef */], scrolling["f" /* ScrollDispatcher */], core["D" /* NgZone */]], null, null), (_l()(), core["Bb" /* ɵeld */](11, 0, null, 0, 1, "ngx-toolbar", [], null, null, null, toolbar_component_ngfactory["b" /* View_ToolbarComponent_0 */], toolbar_component_ngfactory["a" /* RenderType_ToolbarComponent */])), core["Ab" /* ɵdid */](12, 114688, null, 0, toolbar_component["a" /* ToolbarComponent */], [], { quickpanel: [0, "quickpanel"] }, null), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 0, 9, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](14, 0, null, null, 2, "ngx-breadcrumbs", [["title", "Admin"]], null, null, null, breadcrumbs_component_ngfactory["b" /* View_BreadcrumbsComponent_0 */], breadcrumbs_component_ngfactory["a" /* RenderType_BreadcrumbsComponent */])), core["Ab" /* ɵdid */](15, 114688, null, 0, breadcrumbs_component["a" /* BreadcrumbsComponent */], [], { title: [0, "title"], crumbs: [1, "crumbs"] }, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](17, 0, null, null, 5, "perfect-scrollbar", [["style", "overflow: visible"]], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, ngx_perfect_scrollbar_ngfactory["b" /* View_PerfectScrollbarComponent_0 */], ngx_perfect_scrollbar_ngfactory["a" /* RenderType_PerfectScrollbarComponent */])), core["Ab" /* ɵdid */](18, 507904, null, 0, ngx_perfect_scrollbar_es5["b" /* PerfectScrollbarComponent */], [core["D" /* NgZone */], core["i" /* ChangeDetectorRef */], core["F" /* PLATFORM_ID */]], { usePSClass: [0, "usePSClass"] }, null), (_l()(), core["Bb" /* ɵeld */](19, 0, null, 0, 3, "div", [], [[24, "@routeAnimation", 0]], null, null, null, null)), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](21, 16777216, null, null, 1, "router-outlet", [], null, [[null, "activate"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("activate" === en)) {
                var pd_0 = (_co.onActivate($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](22, 212992, null, 0, router["v" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["V" /* ViewContainerRef */], core["k" /* ComponentFactoryResolver */], [8, null], core["i" /* ChangeDetectorRef */]], null, { activateEvents: "activate" })], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_10 = "end"; var currVal_11 = "over"; var currVal_12 = _co.quickpanelOpen; _ck(_v, 5, 0, currVal_10, currVal_11, currVal_12); _ck(_v, 7, 0); var currVal_15 = "column"; _ck(_v, 9, 0, currVal_15); _ck(_v, 10, 0); var currVal_16 = core["Nb" /* ɵnov */](_v, 5); _ck(_v, 12, 0, currVal_16); var currVal_17 = "Admin"; var currVal_18 = core["Wb" /* ɵunv */](_v, 15, 1, core["Nb" /* ɵnov */](_v, 16).transform(_co.crumbs$)); _ck(_v, 15, 0, currVal_17, currVal_18); var currVal_21 = false; _ck(_v, 18, 0, currVal_21); _ck(_v, 22, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Nb" /* ɵnov */](_v, 1)._backdropOverride; _ck(_v, 0, 0, currVal_0); var currVal_1 = null; var currVal_2 = (core["Nb" /* ɵnov */](_v, 5).position === "end"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 5).mode === "over"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 5).mode === "push"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 5).mode === "side"); var currVal_6 = core["Nb" /* ɵnov */](_v, 5).fixedInViewport; var currVal_7 = (core["Nb" /* ɵnov */](_v, 5).fixedInViewport ? core["Nb" /* ɵnov */](_v, 5).fixedTopGap : null); var currVal_8 = (core["Nb" /* ɵnov */](_v, 5).fixedInViewport ? core["Nb" /* ɵnov */](_v, 5).fixedBottomGap : null); var currVal_9 = core["Nb" /* ɵnov */](_v, 5)._animationState; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = core["Nb" /* ɵnov */](_v, 10)._container._contentMargins.left; var currVal_14 = core["Nb" /* ɵnov */](_v, 10)._container._contentMargins.right; _ck(_v, 8, 0, currVal_13, currVal_14); var currVal_19 = core["Nb" /* ɵnov */](_v, 18).autoPropagation; var currVal_20 = core["Nb" /* ɵnov */](_v, 18).scrollIndicators; _ck(_v, 17, 0, currVal_19, currVal_20); var currVal_22 = core["Wb" /* ɵunv */](_v, 19, 0, core["Nb" /* ɵnov */](_v, 20).transform(_co.depth$)); _ck(_v, 19, 0, currVal_22); });
}
function View_AdminLayoutComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-admin-layout", [], null, null, null, View_AdminLayoutComponent_0, RenderType_AdminLayoutComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, admin_layout_component_AdminLayoutComponent, [ngxs_store["j" /* Store */], window_token["a" /* WINDOW */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdminLayoutComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-admin-layout", admin_layout_component_AdminLayoutComponent, View_AdminLayoutComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/overview/overview.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var overview_component_scss_shim_ngstyle_styles = [""];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/card/typings/index.ngfactory.js
var card_typings_index_ngfactory = __webpack_require__("1P7/");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/overview/overview.component.ts
class OverviewComponent {
    constructor() { }
    ngOnInit() { }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/overview/overview.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */











var styles_OverviewComponent = [overview_component_scss_shim_ngstyle_styles];
var RenderType_OverviewComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_OverviewComponent, data: {} });

function View_OverviewComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 30, "div", [["fxLayout", "row wrap"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "32px grid"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"], "fxLayout.lt-sm": [1, "fxLayout.lt-sm"] }, null), core["Ab" /* ɵdid */](2, 1720320, null, 0, flex["f" /* DefaultLayoutGapDirective */], [core["m" /* ElementRef */], core["D" /* NgZone */], bidi["b" /* Directionality */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["n" /* LayoutGapStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](4, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](5, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](6, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, 0, 2, "a", [["routerLink", "/admin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](8, 671744, null, 0, router["t" /* RouterLinkWithHref */], [router["q" /* Router */], router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Overview"])), (_l()(), core["Bb" /* ɵeld */](10, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](11, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](12, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](13, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](14, 0, null, 0, 2, "a", [["routerLink", "/admin/subscriptions"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](15, 671744, null, 0, router["t" /* RouterLinkWithHref */], [router["q" /* Router */], router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Subscriptions"])), (_l()(), core["Bb" /* ɵeld */](17, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](18, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](19, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](20, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](21, 0, null, 0, 2, "a", [["routerLink", "/admin/notifications"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 22).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](22, 671744, null, 0, router["t" /* RouterLinkWithHref */], [router["q" /* Router */], router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Notifications"])), (_l()(), core["Bb" /* ɵeld */](24, 0, null, null, 6, "div", [["fxFlex", "0 1 calc(33.3% - 32px)"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), core["Ab" /* ɵdid */](25, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"], "fxFlex.lt-md": [2, "fxFlex.lt-md"] }, null), (_l()(), core["Bb" /* ɵeld */](26, 0, null, null, 4, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](27, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](28, 0, null, 0, 2, "a", [["routerLink", "/dashboard"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](29, 671744, null, 0, router["t" /* RouterLinkWithHref */], [router["q" /* Router */], router["a" /* ActivatedRoute */], common["k" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["Vb" /* ɵted */](-1, null, ["Dashboard"]))], function (_ck, _v) { var currVal_0 = "row wrap"; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "32px grid"; _ck(_v, 2, 0, currVal_2); var currVal_3 = "0 1 calc(33.3% - 32px)"; var currVal_4 = "100%"; var currVal_5 = "0 1 calc(50% - 32px)"; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5); var currVal_9 = "/admin"; _ck(_v, 8, 0, currVal_9); var currVal_10 = "0 1 calc(33.3% - 32px)"; var currVal_11 = "100%"; var currVal_12 = "0 1 calc(50% - 32px)"; _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12); var currVal_16 = "/admin/subscriptions"; _ck(_v, 15, 0, currVal_16); var currVal_17 = "0 1 calc(33.3% - 32px)"; var currVal_18 = "100%"; var currVal_19 = "0 1 calc(50% - 32px)"; _ck(_v, 18, 0, currVal_17, currVal_18, currVal_19); var currVal_23 = "/admin/notifications"; _ck(_v, 22, 0, currVal_23); var currVal_24 = "0 1 calc(33.3% - 32px)"; var currVal_25 = "100%"; var currVal_26 = "0 1 calc(50% - 32px)"; _ck(_v, 25, 0, currVal_24, currVal_25, currVal_26); var currVal_30 = "/dashboard"; _ck(_v, 29, 0, currVal_30); }, function (_ck, _v) { var currVal_6 = (core["Nb" /* ɵnov */](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_6); var currVal_7 = core["Nb" /* ɵnov */](_v, 8).target; var currVal_8 = core["Nb" /* ɵnov */](_v, 8).href; _ck(_v, 7, 0, currVal_7, currVal_8); var currVal_13 = (core["Nb" /* ɵnov */](_v, 13)._animationMode === "NoopAnimations"); _ck(_v, 12, 0, currVal_13); var currVal_14 = core["Nb" /* ɵnov */](_v, 15).target; var currVal_15 = core["Nb" /* ɵnov */](_v, 15).href; _ck(_v, 14, 0, currVal_14, currVal_15); var currVal_20 = (core["Nb" /* ɵnov */](_v, 20)._animationMode === "NoopAnimations"); _ck(_v, 19, 0, currVal_20); var currVal_21 = core["Nb" /* ɵnov */](_v, 22).target; var currVal_22 = core["Nb" /* ɵnov */](_v, 22).href; _ck(_v, 21, 0, currVal_21, currVal_22); var currVal_27 = (core["Nb" /* ɵnov */](_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 26, 0, currVal_27); var currVal_28 = core["Nb" /* ɵnov */](_v, 29).target; var currVal_29 = core["Nb" /* ɵnov */](_v, 29).href; _ck(_v, 28, 0, currVal_28, currVal_29); });
}
function View_OverviewComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-overview", [], null, null, null, View_OverviewComponent_0, RenderType_OverviewComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, OverviewComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OverviewComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-overview", OverviewComponent, View_OverviewComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/subscriptions/subscriptions.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var subscriptions_component_scss_shim_ngstyle_styles = [""];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/shared/src/lib/containers/entity/entity.component.scss.shim.ngstyle.js
var entity_component_scss_shim_ngstyle = __webpack_require__("PZAn");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__("Gien");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/icon/typings/index.ngfactory.js
var icon_typings_index_ngfactory = __webpack_require__("Hc9t");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/toolbar/typings/index.ngfactory.js
var toolbar_typings_index_ngfactory = __webpack_require__("RCJ2");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/menu/typings/index.ngfactory.js
var menu_typings_index_ngfactory = __webpack_require__("2tfK");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/progress-bar/typings/index.ngfactory.js
var progress_bar_typings_index_ngfactory = __webpack_require__("7KE4");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/cdk/esm2015/table.js
var esm2015_table = __webpack_require__("kiRk");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/table/typings/index.ngfactory.js
var table_typings_index_ngfactory = __webpack_require__("x8+N");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/paginator/typings/index.ngfactory.js
var paginator_typings_index_ngfactory = __webpack_require__("YJtX");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/observable/throwError.js
var throwError = __webpack_require__("47ST");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/filter.js
var filter = __webpack_require__("xVbo");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("cJ9h");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/tap.js
var tap = __webpack_require__("8j5Y");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/catchError.js
var catchError = __webpack_require__("4e/d");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/date-fns/esm/formatDistance/index.js + 6 modules
var formatDistance = __webpack_require__("G2vk");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/shared/src/index.ts + 4 modules
var src = __webpack_require__("47kq");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/subscriptions/subscriptions.component.ts





// const entityHtmlTpl = require('../../../../../shared/src/lib/containers/entity/entity.component.html');
// const cellHtmlTpl = require('./cell.templates.html');
// tslint:disable-next-line
class subscriptions_component_SubscriptionsComponent extends src["a" /* EntitiesComponent */] {
    constructor(subscriptionService, store, dialog, snack, confirmService) {
        super(subscriptionService);
        this.store = store;
        this.dialog = dialog;
        this.snack = snack;
        this.confirmService = confirmService;
        // optional
        this.showColumnFilter = true;
        this.showToolbar = true;
    }
    // tslint:disable-next-line
    ngOnInit() {
        super.ngOnInit();
        this.columns = [
            new src["c" /* EntityColumnDef */]({ property: 'id', header: 'No.' }),
            new src["c" /* EntityColumnDef */]({ property: 'username', header: 'User' }),
            new src["c" /* EntityColumnDef */]({ property: 'topics', header: 'Topics' }),
            new src["c" /* EntityColumnDef */]({
                property: 'createdAt',
                header: 'Created',
                displayFn: entity => `${Object(formatDistance["a" /* default */])(this.stringToDate(entity.createdAt), new Date(), { addSuffix: true })}`,
            }),
            new src["c" /* EntityColumnDef */]({
                property: 'updatedAt',
                header: 'Updated',
                displayFn: entity => `${Object(formatDistance["a" /* default */])(this.stringToDate(entity.updatedAt), new Date(), { addSuffix: true })}`,
            }),
            new src["c" /* EntityColumnDef */]({ property: 'actions', header: 'Actions', template: this.deleteTpl }),
        ];
    }
    // optional
    delete(item) {
        return this.confirmService.confirm('Confirm', `Delete Sub(${item.id}) for ${item.username}?`).pipe(Object(filter["a" /* filter */])(confirmed => confirmed === true), Object(mergeMap["a" /* mergeMap */])(_ => super.delete(item)), Object(tap["a" /* tap */])(_ => {
            this.snack.open('Subscription Deleted!', 'OK', { duration: 5000 });
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */]([`/admin/subscriptions`]));
        }), Object(catchError["a" /* catchError */])(error => {
            this.snack.open(error, 'OK', { duration: 10000 });
            return Object(throwError["a" /* throwError */])('Ignore Me!');
        }));
    }
    // optional
    showDetails(entity) {
        if (entity) {
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */]([`/admin/subscriptions/${entity.id}`]));
        }
        else {
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */](['/admin/subscriptions']));
        }
    }
}


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/retry.js
var retry = __webpack_require__("bl/x");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/finalize.js
var finalize = __webpack_require__("ruxD");

// EXTERNAL MODULE: ./src/environments/environment.ts + 1 modules
var environment = __webpack_require__("AytR");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/common/fesm2015/http.js
var http = __webpack_require__("6uGs");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/services/subscription.service.ts





let subscription_service_SubscriptionService = /*@__PURE__*/ (() => {
    class SubscriptionService extends src["e" /* EntityService */] {
        constructor(httpClient) {
            super(httpClient);
            // Optionally overwrite baseUrl
            this.baseUrl = environment["a" /* environment */].API_BASE_URL;
            this.entityPath = 'subscription';
        }
        getAll() {
            this.loadingSubject.next(true);
            return this.httpClient.get(`${this.baseUrl}/${this.entityPath}`).pipe(Object(retry["a" /* retry */])(3), // retry a failed request up to 3 times
            Object(catchError["a" /* catchError */])(this.handleError), Object(finalize["a" /* finalize */])(() => this.loadingSubject.next(false)), 
            // return without count
            Object(map["a" /* map */])(data => data.items));
        }
    }
    SubscriptionService.ngInjectableDef = core["bc" /* ɵɵdefineInjectable */]({ factory: function SubscriptionService_Factory() { return new SubscriptionService(core["cc" /* ɵɵinject */](http["c" /* HttpClient */])); }, token: SubscriptionService, providedIn: "root" });
    return SubscriptionService;
})();


// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/snack-bar.js
var snack_bar = __webpack_require__("ifl5");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/app-confirm/src/lib/app-confirm.service.ts
var app_confirm_service = __webpack_require__("zMOn");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/subscriptions/subscriptions.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */











































var styles_SubscriptionsComponent = [subscriptions_component_scss_shim_ngstyle_styles, entity_component_scss_shim_ngstyle["a" /* styles */]];
var RenderType_SubscriptionsComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_SubscriptionsComponent, data: {} });

function View_SubscriptionsComponent_2(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 5, "button", [["aria-label", "Clear"], ["mat-button", ""], ["mat-icon-button", ""], ["matSuffix", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = ((core["Nb" /* ɵnov */](_v.parent, 15).value = "") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Ab" /* ɵdid */](2, 16384, [[14, 4]], 0, form_field["i" /* MatSuffix */], [], null, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](4, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["close"]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["Nb" /* ɵnov */](_v, 4).inline; var currVal_3 = (((core["Nb" /* ɵnov */](_v, 4).color !== "primary") && (core["Nb" /* ɵnov */](_v, 4).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_2, currVal_3); });
}
function View_SubscriptionsComponent_3(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 16777216, null, null, 5, "button", [["aria-haspopup", "true"], ["mat-icon-button", ""], ["style", "margin-left: 16px"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("mousedown" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 2)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("click" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 2)._handleClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Ab" /* ɵdid */](2, 1196032, null, 0, menu["g" /* MatMenuTrigger */], [overlay["c" /* Overlay */], core["m" /* ElementRef */], core["V" /* ViewContainerRef */], menu["c" /* MAT_MENU_SCROLL_STRATEGY */], [2, menu["d" /* MatMenu */]], [8, null], [2, bidi["b" /* Directionality */]], a11y["h" /* FocusMonitor */]], { menu: [0, "menu"] }, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](4, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["filter_list"])), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_3 = core["Nb" /* ɵnov */](_v.parent, 31); _ck(_v, 2, 0, currVal_3); _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); var currVal_2 = (core["Nb" /* ɵnov */](_v, 2).menuOpen || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = core["Nb" /* ɵnov */](_v, 4).inline; var currVal_5 = (((core["Nb" /* ɵnov */](_v, 4).color !== "primary") && (core["Nb" /* ɵnov */](_v, 4).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_4, currVal_5); });
}
function View_SubscriptionsComponent_4(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["class", "checkbox-item mat-menu-item"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleColumnVisibility(_v.context.$implicit, $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 3, "mat-checkbox", [["class", "checkbox mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("change" === en)) {
                var pd_0 = ((_v.context.$implicit.visible = !_v.context.$implicit.visible) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = ($event.stopPropagation() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](3, 8568832, [["checkbox", 4]], 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { checked: [0, "checked"] }, { change: "change" }), (_l()(), core["Vb" /* ɵted */](4, 0, [" ", " "]))], function (_ck, _v) { var currVal_7 = _v.context.$implicit.visible; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 3).id; var currVal_1 = null; var currVal_2 = core["Nb" /* ɵnov */](_v, 3).indeterminate; var currVal_3 = core["Nb" /* ɵnov */](_v, 3).checked; var currVal_4 = core["Nb" /* ɵnov */](_v, 3).disabled; var currVal_5 = (core["Nb" /* ɵnov */](_v, 3).labelPosition == "before"); var currVal_6 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _v.context.$implicit.header; _ck(_v, 4, 0, currVal_8); });
}
function View_SubscriptionsComponent_5(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["color", "primary"], ["mat-mini-fab", ""], ["matTooltip", "add"], ["style", "margin-left: 16px"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openPopUp() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["add"]))], function (_ck, _v) { var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); });
}
function View_SubscriptionsComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 38, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, toolbar_typings_index_ngfactory["b" /* View_MatToolbar_0 */], toolbar_typings_index_ngfactory["a" /* RenderType_MatToolbar */])), core["Ab" /* ɵdid */](1, 4243456, null, 1, toolbar["a" /* MatToolbar */], [core["m" /* ElementRef */], platform["a" /* Platform */], common["d" /* DOCUMENT */]], null, null), core["Tb" /* ɵqud */](603979776, 5, { _toolbarRows: 1 }), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 22, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](4, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](5, 7520256, null, 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Tb" /* ɵqud */](603979776, 6, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 7, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 8, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 9, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 10, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 11, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 12, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 13, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 14, { _suffixChildren: 1 }), (_l()(), core["Bb" /* ɵeld */](15, 0, [[3, 0], ["filter", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "keyup"], [null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("blur" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 16)._focusChanged(false) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 16)._focusChanged(true) !== false);
                ad = (pd_1 && ad);
            }
            if (("input" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 16)._onInput() !== false);
                ad = (pd_2 && ad);
            }
            if (("keyup" === en)) {
                var pd_3 = (_co.applyFilter($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](16, 999424, null, 0, input["b" /* MatInput */], [core["m" /* ElementRef */], platform["a" /* Platform */], [8, null], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], null, null), core["Sb" /* ɵprd */](2048, [[6, 4], [7, 4]], form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]]), (_l()(), core["Bb" /* ɵeld */](18, 0, null, 3, 5, "mat-label", [], null, null, null, null, null)), core["Ab" /* ɵdid */](19, 16384, [[8, 4], [9, 4]], 0, form_field["g" /* MatLabel */], [], null, null), (_l()(), core["Bb" /* ɵeld */](20, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](21, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["search"])), (_l()(), core["Vb" /* ɵted */](-1, null, ["Filter "])), (_l()(), core["qb" /* ɵand */](16777216, null, 4, 1, null, View_SubscriptionsComponent_2)), core["Ab" /* ɵdid */](25, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_SubscriptionsComponent_3)), core["Ab" /* ɵdid */](27, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](28, 0, null, 0, 8, "mat-menu", [["xPosition", "before"], ["yPosition", "below"]], null, null, null, menu_typings_index_ngfactory["d" /* View__MatMenu_0 */], menu_typings_index_ngfactory["b" /* RenderType__MatMenu */])), core["Sb" /* ɵprd */](6144, null, menu["d" /* MatMenu */], null, [menu["h" /* _MatMenu */]]), core["Sb" /* ɵprd */](6144, null, menu["b" /* MAT_MENU_PANEL */], null, [menu["d" /* MatMenu */]]), core["Ab" /* ɵdid */](31, 1294336, [["columnFilter", 4]], 3, menu["h" /* _MatMenu */], [core["m" /* ElementRef */], core["D" /* NgZone */], menu["a" /* MAT_MENU_DEFAULT_OPTIONS */]], { xPosition: [0, "xPosition"], yPosition: [1, "yPosition"] }, null), core["Tb" /* ɵqud */](603979776, 15, { _allItems: 1 }), core["Tb" /* ɵqud */](603979776, 16, { items: 1 }), core["Tb" /* ɵqud */](603979776, 17, { lazyContent: 0 }), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_SubscriptionsComponent_4)), core["Ab" /* ɵdid */](36, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_SubscriptionsComponent_5)), core["Ab" /* ɵdid */](38, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_24 = ""; _ck(_v, 4, 0, currVal_24); _ck(_v, 16, 0); _ck(_v, 21, 0); var currVal_36 = (core["Nb" /* ɵnov */](_v, 15).value !== ""); _ck(_v, 25, 0, currVal_36); var currVal_37 = _co.showColumnFilter; _ck(_v, 27, 0, currVal_37); var currVal_38 = "before"; var currVal_39 = "below"; _ck(_v, 31, 0, currVal_38, currVal_39); var currVal_40 = _co.columns; _ck(_v, 36, 0, currVal_40); var currVal_41 = _co.showActionColumn; _ck(_v, 38, 0, currVal_41); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._toolbarRows.length > 0); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (core["Nb" /* ɵnov */](_v, 5).appearance == "standard"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 5).appearance == "fill"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 5).appearance == "outline"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 5).appearance == "legacy"); var currVal_6 = core["Nb" /* ɵnov */](_v, 5)._control.errorState; var currVal_7 = core["Nb" /* ɵnov */](_v, 5)._canLabelFloat; var currVal_8 = core["Nb" /* ɵnov */](_v, 5)._shouldLabelFloat(); var currVal_9 = core["Nb" /* ɵnov */](_v, 5)._hasFloatingLabel(); var currVal_10 = core["Nb" /* ɵnov */](_v, 5)._hideControlPlaceholder(); var currVal_11 = core["Nb" /* ɵnov */](_v, 5)._control.disabled; var currVal_12 = core["Nb" /* ɵnov */](_v, 5)._control.autofilled; var currVal_13 = core["Nb" /* ɵnov */](_v, 5)._control.focused; var currVal_14 = (core["Nb" /* ɵnov */](_v, 5).color == "accent"); var currVal_15 = (core["Nb" /* ɵnov */](_v, 5).color == "warn"); var currVal_16 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("untouched"); var currVal_17 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("touched"); var currVal_18 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("pristine"); var currVal_19 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("dirty"); var currVal_20 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("valid"); var currVal_21 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("invalid"); var currVal_22 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("pending"); var currVal_23 = !core["Nb" /* ɵnov */](_v, 5)._animationsEnabled; _ck(_v, 3, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]); var currVal_25 = core["Nb" /* ɵnov */](_v, 16)._isServer; var currVal_26 = core["Nb" /* ɵnov */](_v, 16).id; var currVal_27 = core["Nb" /* ɵnov */](_v, 16).placeholder; var currVal_28 = core["Nb" /* ɵnov */](_v, 16).disabled; var currVal_29 = core["Nb" /* ɵnov */](_v, 16).required; var currVal_30 = ((core["Nb" /* ɵnov */](_v, 16).readonly && !core["Nb" /* ɵnov */](_v, 16)._isNativeSelect) || null); var currVal_31 = (core["Nb" /* ɵnov */](_v, 16)._ariaDescribedby || null); var currVal_32 = core["Nb" /* ɵnov */](_v, 16).errorState; var currVal_33 = core["Nb" /* ɵnov */](_v, 16).required.toString(); _ck(_v, 15, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_34 = core["Nb" /* ɵnov */](_v, 21).inline; var currVal_35 = (((core["Nb" /* ɵnov */](_v, 21).color !== "primary") && (core["Nb" /* ɵnov */](_v, 21).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 21).color !== "warn")); _ck(_v, 20, 0, currVal_34, currVal_35); });
}
function View_SubscriptionsComponent_6(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "indeterminate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, progress_bar_typings_index_ngfactory["b" /* View_MatProgressBar_0 */], progress_bar_typings_index_ngfactory["a" /* RenderType_MatProgressBar */])), core["Ab" /* ɵdid */](1, 4374528, null, 0, progress_bar["b" /* MatProgressBar */], [core["m" /* ElementRef */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, progress_bar["a" /* MAT_PROGRESS_BAR_LOCATION */]]], { mode: [0, "mode"] }, null)], function (_ck, _v) { var currVal_3 = "indeterminate"; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (((core["Nb" /* ɵnov */](_v, 1).mode === "indeterminate") || (core["Nb" /* ɵnov */](_v, 1).mode === "query")) ? null : core["Nb" /* ɵnov */](_v, 1).value); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).mode; var currVal_2 = core["Nb" /* ɵnov */](_v, 1)._isNoopAnimation; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_SubscriptionsComponent_8(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["e" /* MatHeaderCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 2, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (($event ? _co.masterToggle() : null) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](4, 8568832, null, 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { checked: [0, "checked"], disabled: [1, "disabled"], indeterminate: [2, "indeterminate"] }, { change: "change" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.isMasterToggleChecked(); var currVal_8 = !_co.dataSource.filteredData.length; var currVal_9 = _co.isMasterToggleIndeterminate(); _ck(_v, 4, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 4).id; var currVal_1 = null; var currVal_2 = core["Nb" /* ɵnov */](_v, 4).indeterminate; var currVal_3 = core["Nb" /* ɵnov */](_v, 4).checked; var currVal_4 = core["Nb" /* ɵnov */](_v, 4).disabled; var currVal_5 = (core["Nb" /* ɵnov */](_v, 4).labelPosition == "before"); var currVal_6 = (core["Nb" /* ɵnov */](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); });
}
function View_SubscriptionsComponent_9(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["a" /* MatCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 2, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ($event.stopPropagation() !== false);
                ad = (pd_0 && ad);
            }
            if (("change" === en)) {
                var pd_1 = (($event ? _co.selectRow(_v.context.$implicit) : null) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](4, 8568832, null, 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { checked: [0, "checked"] }, { change: "change" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selection.isSelected(_v.context.$implicit); _ck(_v, 4, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 4).id; var currVal_1 = null; var currVal_2 = core["Nb" /* ɵnov */](_v, 4).indeterminate; var currVal_3 = core["Nb" /* ɵnov */](_v, 4).checked; var currVal_4 = core["Nb" /* ɵnov */](_v, 4).disabled; var currVal_5 = (core["Nb" /* ɵnov */](_v, 4).labelPosition == "before"); var currVal_6 = (core["Nb" /* ɵnov */](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); });
}
function View_SubscriptionsComponent_7(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["Sb" /* ɵprd */](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [table["c" /* MatColumnDef */]]), core["Ab" /* ɵdid */](2, 16384, null, 3, table["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["Tb" /* ɵqud */](603979776, 22, { cell: 0 }), core["Tb" /* ɵqud */](603979776, 23, { headerCell: 0 }), core["Tb" /* ɵqud */](603979776, 24, { footerCell: 0 }), core["Sb" /* ɵprd */](2048, [[18, 4]], esm2015_table["d" /* CdkColumnDef */], null, [table["c" /* MatColumnDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_8)), core["Ab" /* ɵdid */](8, 16384, null, 0, table["f" /* MatHeaderCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[23, 4]], esm2015_table["j" /* CdkHeaderCellDef */], null, [table["f" /* MatHeaderCellDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_9)), core["Ab" /* ɵdid */](11, 16384, null, 0, table["b" /* MatCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[22, 4]], esm2015_table["b" /* CdkCellDef */], null, [table["b" /* MatCellDef */]])], function (_ck, _v) { var currVal_0 = "select"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SubscriptionsComponent_11(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["e" /* MatHeaderCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Vb" /* ɵted */](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.header; _ck(_v, 2, 0, currVal_0); }); }
function View_SubscriptionsComponent_14(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_SubscriptionsComponent_13(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, null, 2, null, View_SubscriptionsComponent_14)), core["Ab" /* ɵdid */](2, 540672, null, 0, common["u" /* NgTemplateOutlet */], [core["V" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["Qb" /* ɵpod */](3, { $implicit: 0, column: 1 }), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit, _v.parent.context.$implicit[_v.parent.parent.context.$implicit.property]); var currVal_1 = _v.parent.parent.context.$implicit.template; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_SubscriptionsComponent_15(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Vb" /* ɵted */](0, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.displayFn(_v.parent.context.$implicit); _ck(_v, 0, 0, currVal_0); }); }
function View_SubscriptionsComponent_12(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["a" /* MatCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SubscriptionsComponent_13)), core["Ab" /* ɵdid */](3, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), core["qb" /* ɵand */](0, [["noTemplate", 2]], null, 0, null, View_SubscriptionsComponent_15))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.template; var currVal_1 = core["Nb" /* ɵnov */](_v, 4); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_SubscriptionsComponent_10(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["Sb" /* ɵprd */](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [table["c" /* MatColumnDef */]]), core["Ab" /* ɵdid */](2, 16384, null, 3, table["c" /* MatColumnDef */], [], { name: [0, "name"], stickyEnd: [1, "stickyEnd"], sticky: [2, "sticky"] }, null), core["Tb" /* ɵqud */](603979776, 25, { cell: 0 }), core["Tb" /* ɵqud */](603979776, 26, { headerCell: 0 }), core["Tb" /* ɵqud */](603979776, 27, { footerCell: 0 }), core["Sb" /* ɵprd */](2048, [[18, 4]], esm2015_table["d" /* CdkColumnDef */], null, [table["c" /* MatColumnDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_11)), core["Ab" /* ɵdid */](8, 16384, null, 0, table["f" /* MatHeaderCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[26, 4]], esm2015_table["j" /* CdkHeaderCellDef */], null, [table["f" /* MatHeaderCellDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_12)), core["Ab" /* ɵdid */](11, 16384, null, 0, table["b" /* MatCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[25, 4]], esm2015_table["b" /* CdkCellDef */], null, [table["b" /* MatCellDef */]])], function (_ck, _v) { var currVal_0 = _v.context.$implicit.property; var currVal_1 = (_v.context.$implicit.sticky === "end"); var currVal_2 = (_v.context.$implicit.sticky === "start"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SubscriptionsComponent_17(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["e" /* MatHeaderCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Vb" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.actionColumn; _ck(_v, 2, 0, currVal_0); }); }
function View_SubscriptionsComponent_18(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 11, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["a" /* MatCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 4, "button", [["color", "primary"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openPopUp(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](3, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](5, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["edit_mode"])), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 4, "button", [["color", "warn"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.delete(_v.context.$implicit).subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](8, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](10, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["delete"]))], function (_ck, _v) { var currVal_2 = "primary"; _ck(_v, 3, 0, currVal_2); _ck(_v, 5, 0); var currVal_7 = "warn"; _ck(_v, 8, 0, currVal_7); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 3).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = core["Nb" /* ɵnov */](_v, 5).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 5).color !== "primary") && (core["Nb" /* ɵnov */](_v, 5).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_3, currVal_4); var currVal_5 = (core["Nb" /* ɵnov */](_v, 8).disabled || null); var currVal_6 = (core["Nb" /* ɵnov */](_v, 8)._animationMode === "NoopAnimations"); _ck(_v, 7, 0, currVal_5, currVal_6); var currVal_8 = core["Nb" /* ɵnov */](_v, 10).inline; var currVal_9 = (((core["Nb" /* ɵnov */](_v, 10).color !== "primary") && (core["Nb" /* ɵnov */](_v, 10).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 10).color !== "warn")); _ck(_v, 9, 0, currVal_8, currVal_9); });
}
function View_SubscriptionsComponent_16(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["Sb" /* ɵprd */](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [table["c" /* MatColumnDef */]]), core["Ab" /* ɵdid */](2, 16384, null, 3, table["c" /* MatColumnDef */], [], { name: [0, "name"], sticky: [1, "sticky"] }, null), core["Tb" /* ɵqud */](603979776, 28, { cell: 0 }), core["Tb" /* ɵqud */](603979776, 29, { headerCell: 0 }), core["Tb" /* ɵqud */](603979776, 30, { footerCell: 0 }), core["Sb" /* ɵprd */](2048, [[18, 4]], esm2015_table["d" /* CdkColumnDef */], null, [table["c" /* MatColumnDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_17)), core["Ab" /* ɵdid */](8, 16384, null, 0, table["f" /* MatHeaderCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[29, 4]], esm2015_table["j" /* CdkHeaderCellDef */], null, [table["f" /* MatHeaderCellDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_18)), core["Ab" /* ɵdid */](11, 16384, null, 0, table["b" /* MatCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[28, 4]], esm2015_table["b" /* CdkCellDef */], null, [table["b" /* MatCellDef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.actionColumn; var currVal_1 = ""; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_SubscriptionsComponent_19(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-header-row", [["class", "mat-header-row"], ["role", "row"]], null, null, null, table_typings_index_ngfactory["d" /* View_MatHeaderRow_0 */], table_typings_index_ngfactory["a" /* RenderType_MatHeaderRow */])), core["Sb" /* ɵprd */](6144, null, esm2015_table["k" /* CdkHeaderRow */], null, [table["g" /* MatHeaderRow */]]), core["Ab" /* ɵdid */](2, 49152, null, 0, table["g" /* MatHeaderRow */], [], null, null)], null, null); }
function View_SubscriptionsComponent_20(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-row", [["class", "row mat-row"], ["role", "row"]], [[2, "selected", null]], null, null, table_typings_index_ngfactory["e" /* View_MatRow_0 */], table_typings_index_ngfactory["b" /* RenderType_MatRow */])), core["Sb" /* ɵprd */](6144, null, esm2015_table["m" /* CdkRow */], null, [table["i" /* MatRow */]]), core["Ab" /* ɵdid */](2, 49152, null, 0, table["i" /* MatRow */], [], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selection.isSelected(_v.context.$implicit); _ck(_v, 0, 0, currVal_0); }); }
function View_SubscriptionsComponent_21(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["color", "warn"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.delete(_v.context.$implicit).subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["delete"]))], function (_ck, _v) { var currVal_2 = "warn"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); });
}
function View_SubscriptionsComponent_0(_l) { return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { paginator: 0 }), core["Tb" /* ɵqud */](402653184, 2, { sort: 0 }), core["Tb" /* ɵqud */](402653184, 3, { filterRef: 0 }), core["Tb" /* ɵqud */](402653184, 4, { deleteTpl: 0 }), (_l()(), core["Bb" /* ɵeld */](4, 0, null, null, 30, "div", [["fxLayout", "column"]], null, null, null, null, null)), core["Ab" /* ɵdid */](5, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["Bb" /* ɵeld */](6, 0, null, null, 28, "mat-card", [["class", "mat-elevation-z8 mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](7, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_SubscriptionsComponent_1)), core["Ab" /* ɵdid */](9, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 2, null, View_SubscriptionsComponent_6)), core["Ab" /* ɵdid */](11, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 0, 18, "mat-table", [["class", "mat-table"], ["matSort", ""]], null, null, null, table_typings_index_ngfactory["f" /* View_MatTable_0 */], table_typings_index_ngfactory["c" /* RenderType_MatTable */])), core["Sb" /* ɵprd */](6144, null, esm2015_table["o" /* CdkTable */], null, [table["k" /* MatTable */]]), core["Ab" /* ɵdid */](15, 2342912, [["table", 4]], 4, table["k" /* MatTable */], [core["v" /* IterableDiffers */], core["i" /* ChangeDetectorRef */], core["m" /* ElementRef */], [8, null], [2, bidi["b" /* Directionality */]], common["d" /* DOCUMENT */], platform["a" /* Platform */]], { dataSource: [0, "dataSource"] }, null), core["Tb" /* ɵqud */](603979776, 18, { _contentColumnDefs: 1 }), core["Tb" /* ɵqud */](603979776, 19, { _contentRowDefs: 1 }), core["Tb" /* ɵqud */](603979776, 20, { _contentHeaderRowDefs: 1 }), core["Tb" /* ɵqud */](603979776, 21, { _contentFooterRowDefs: 1 }), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SubscriptionsComponent_7)), core["Ab" /* ɵdid */](21, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SubscriptionsComponent_10)), core["Ab" /* ɵdid */](23, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_SubscriptionsComponent_16)), core["Ab" /* ɵdid */](25, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_19)), core["Ab" /* ɵdid */](27, 540672, null, 0, table["h" /* MatHeaderRowDef */], [core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { columns: [0, "columns"], sticky: [1, "sticky"] }, null), core["Sb" /* ɵprd */](2048, [[20, 4]], esm2015_table["l" /* CdkHeaderRowDef */], null, [table["h" /* MatHeaderRowDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_SubscriptionsComponent_20)), core["Ab" /* ɵdid */](30, 540672, null, 0, table["j" /* MatRowDef */], [core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { columns: [0, "columns"] }, null), core["Sb" /* ɵprd */](2048, [[19, 4]], esm2015_table["n" /* CdkRowDef */], null, [table["j" /* MatRowDef */]]), (_l()(), core["Bb" /* ɵeld */](32, 0, null, 0, 2, "mat-paginator", [["class", "mat-paginator"]], null, null, null, paginator_typings_index_ngfactory["b" /* View_MatPaginator_0 */], paginator_typings_index_ngfactory["a" /* RenderType_MatPaginator */])), core["Ab" /* ɵdid */](33, 245760, [[1, 4], ["paginator", 4]], 0, paginator["b" /* MatPaginator */], [paginator["c" /* MatPaginatorIntl */], core["i" /* ChangeDetectorRef */]], { pageSize: [0, "pageSize"], pageSizeOptions: [1, "pageSizeOptions"], showFirstLastButtons: [2, "showFirstLastButtons"] }, null), core["Ob" /* ɵpad */](34, 3), (_l()(), core["Bb" /* ɵeld */](35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](36, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](37, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["Ab" /* ɵdid */](38, 212992, [["o", 4]], 0, router["v" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["V" /* ViewContainerRef */], core["k" /* ComponentFactoryResolver */], [8, null], core["i" /* ChangeDetectorRef */]], null, null), (_l()(), core["qb" /* ɵand */](0, [[4, 2], ["deleteButton", 2]], null, 0, null, View_SubscriptionsComponent_21))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 5, 0, currVal_0); var currVal_2 = _co.showToolbar; _ck(_v, 9, 0, currVal_2); var currVal_3 = core["Wb" /* ɵunv */](_v, 11, 0, core["Nb" /* ɵnov */](_v, 12).transform(_co.loading$)); _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.dataSource; _ck(_v, 15, 0, currVal_4); var currVal_5 = (_co.maxSelectable > 0); _ck(_v, 21, 0, currVal_5); var currVal_6 = _co.columns; _ck(_v, 23, 0, currVal_6); var currVal_7 = _co.showActionColumn; _ck(_v, 25, 0, currVal_7); var currVal_8 = _co.displayedColumns; var currVal_9 = true; _ck(_v, 27, 0, currVal_8, currVal_9); var currVal_10 = _co.displayedColumns; _ck(_v, 30, 0, currVal_10); var currVal_11 = 5; var currVal_12 = _ck(_v, 34, 0, 5, 10, 20); var currVal_13 = true; _ck(_v, 33, 0, currVal_11, currVal_12, currVal_13); _ck(_v, 38, 0); }, function (_ck, _v) { var currVal_1 = (core["Nb" /* ɵnov */](_v, 7)._animationMode === "NoopAnimations"); _ck(_v, 6, 0, currVal_1); }); }
function View_SubscriptionsComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-admin-subscriptions", [], null, null, null, View_SubscriptionsComponent_0, RenderType_SubscriptionsComponent)), core["Ab" /* ɵdid */](1, 4440064, null, 0, subscriptions_component_SubscriptionsComponent, [subscription_service_SubscriptionService, ngxs_store["j" /* Store */], esm2015_dialog["e" /* MatDialog */], snack_bar["b" /* MatSnackBar */], app_confirm_service["a" /* AppConfirmService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SubscriptionsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-admin-subscriptions", subscriptions_component_SubscriptionsComponent, View_SubscriptionsComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/subscription-detail/subscription-detail.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var subscription_detail_component_scss_shim_ngstyle_styles = [""];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/list/typings/index.ngfactory.js
var list_typings_index_ngfactory = __webpack_require__("yN5F");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/divider/typings/index.ngfactory.js
var divider_typings_index_ngfactory = __webpack_require__("TCBR");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__("C05f");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/subscription-detail/subscription-detail.component.ts

class subscription_detail_component_SubscriptionDetailComponent {
    constructor(subscriptionService, route) {
        this.subscriptionService = subscriptionService;
        this.route = route;
        this.animationTrigger$ = new BehaviorSubject["a" /* BehaviorSubject */]('');
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.subscriptionService.getById(params.id).subscribe(data => {
                this.animationTrigger$.next(params.id);
                this.subscription = data;
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/subscription-detail/subscription-detail.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */













var styles_SubscriptionDetailComponent = [subscription_detail_component_scss_shim_ngstyle_styles];
var RenderType_SubscriptionDetailComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_SubscriptionDetailComponent, data: { "animation": [{ type: 7, name: "fadeAnimation", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }], options: { optional: true } }, { type: 11, selector: ":leave", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "0.3s" }], options: { optional: true } }, { type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "0.3s" }], options: { optional: true } }], options: null }], options: {} }] } });

function View_SubscriptionDetailComponent_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 10, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](1, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 2, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 3, { _icon: 0 }), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 2, 5, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](7, null, ["", "\uFF1A"])), (_l()(), core["Bb" /* ɵeld */](8, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](9, null, ["", ""])), core["Pb" /* ɵpid */](0, common["g" /* JsonPipe */], [])], null, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.key; _ck(_v, 7, 0, currVal_2); var currVal_3 = core["Wb" /* ɵunv */](_v, 9, 0, core["Nb" /* ɵnov */](_v, 10).transform(_v.context.$implicit.value)); _ck(_v, 9, 0, currVal_3); }); }
function View_SubscriptionDetailComponent_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 17, "mat-card", [["class", "mat-card"]], [[24, "@fadeAnimation", 0], [2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](1, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 5, "mat-card-header", [["class", "mat-card-header"]], null, null, null, card_typings_index_ngfactory["c" /* View_MatCardHeader_0 */], card_typings_index_ngfactory["b" /* RenderType_MatCardHeader */])), core["Ab" /* ɵdid */](4, 49152, null, 0, card["e" /* MatCardHeader */], [], null, null), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 1, 3, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), core["Ab" /* ɵdid */](6, 16384, null, 0, card["i" /* MatCardTitle */], [], null, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](-1, null, ["Selected Subscription"])), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, divider_typings_index_ngfactory["b" /* View_MatDivider_0 */], divider_typings_index_ngfactory["a" /* RenderType_MatDivider */])), core["Ab" /* ɵdid */](10, 49152, null, 0, divider["a" /* MatDivider */], [], null, null), (_l()(), core["Bb" /* ɵeld */](11, 0, null, 0, 6, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), core["Ab" /* ɵdid */](12, 16384, null, 0, card["d" /* MatCardContent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](13, 0, null, null, 4, "mat-list", [["class", "mat-list mat-list-base"], ["role", "list"]], null, null, null, list_typings_index_ngfactory["e" /* View_MatList_0 */], list_typings_index_ngfactory["a" /* RenderType_MatList */])), core["Ab" /* ɵdid */](14, 704512, null, 0, list["a" /* MatList */], [core["m" /* ElementRef */]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 2, null, View_SubscriptionDetailComponent_1)), core["Ab" /* ɵdid */](16, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Pb" /* ɵpid */](0, common["h" /* KeyValuePipe */], [core["w" /* KeyValueDiffers */]])], function (_ck, _v) { var _co = _v.component; var currVal_6 = core["Wb" /* ɵunv */](_v, 16, 0, core["Nb" /* ɵnov */](_v, 17).transform(_co.subscription)); _ck(_v, 16, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Wb" /* ɵunv */](_v, 0, 0, core["Nb" /* ɵnov */](_v, 2).transform(_co.animationTrigger$)); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (core["Nb" /* ɵnov */](_v, 10).vertical ? "vertical" : "horizontal"); var currVal_3 = core["Nb" /* ɵnov */](_v, 10).vertical; var currVal_4 = !core["Nb" /* ɵnov */](_v, 10).vertical; var currVal_5 = core["Nb" /* ɵnov */](_v, 10).inset; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_SubscriptionDetailComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-subscription-detail", [], null, null, null, View_SubscriptionDetailComponent_0, RenderType_SubscriptionDetailComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, subscription_detail_component_SubscriptionDetailComponent, [subscription_service_SubscriptionService, router["a" /* ActivatedRoute */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SubscriptionDetailComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-subscription-detail", subscription_detail_component_SubscriptionDetailComponent, View_SubscriptionDetailComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/notifications/notifications.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var notifications_component_scss_shim_ngstyle_styles = [""];



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/rxjs/_esm2015/internal/operators/concatMap.js
var concatMap = __webpack_require__("5uDM");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.module.ts
var notifications_module = __webpack_require__("mN6V");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.actions.ts
var notifications_actions = __webpack_require__("Xtj4");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.service.ts
var notifications_service = __webpack_require__("OeRc");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/app-notification.model.ts
var app_notification_model = __webpack_require__("JR7Y");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.state.ts
var notifications_state = __webpack_require__("klo5");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/index.ts







// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/notification-edit/notification-edit.component.ts



function enumToOptions(enumType) {
    return Object.keys(enumType).map(key => ({ label: key, value: enumType[key] }));
}
class notification_edit_component_NotificationEditComponent extends src["d" /* EntityFormComponent */] {
    constructor(data, dialogRef, fb) {
        super(data, dialogRef);
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.options = {};
    }
    /* Optional */
    // tslint:disable-next-line
    ngOnInit() {
        super.ngOnInit();
    }
    buildForm(item) {
        this.entityForm = new fesm2015_forms["k" /* FormGroup */]({});
        this.model = item;
        this.fields = [
            {
                key: 'title',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Title',
                    placeholder: 'title',
                    required: true,
                },
            },
            {
                key: 'body',
                type: 'input',
                templateOptions: {
                    label: 'Body',
                    required: true,
                },
            },
            {
                key: 'target',
                type: 'input',
                templateOptions: {
                    label: 'Target',
                    required: true,
                },
            },
            {
                key: 'targetType',
                type: 'select',
                templateOptions: {
                    label: 'TargetType',
                    options: enumToOptions(app_notification_model["d" /* TargetType */]),
                    required: true,
                },
            },
            {
                key: 'icon',
                type: 'select',
                templateOptions: {
                    label: 'Icon',
                    options: enumToOptions(app_notification_model["c" /* NotificationIcon */]),
                    required: true,
                },
            },
            {
                key: 'color',
                type: 'select',
                templateOptions: {
                    label: 'Color',
                    options: enumToOptions(app_notification_model["b" /* NotificationColor */]),
                    required: true,
                },
            },
            {
                key: 'native',
                type: 'checkbox',
                templateOptions: {
                    label: 'Native',
                    required: true,
                },
            },
        ];
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/notifications/notifications.component.ts







// const entityHtmlTpl = require('../../../../../shared/src/lib/containers/entity/entity.component.html');
// const cellHtmlTpl = require('./cell.templates.html');
// tslint:disable-next-line
class notifications_component_NotificationsComponent extends src["a" /* EntitiesComponent */] {
    constructor(notificationService, store, dialog, snack, confirmService) {
        super(notificationService);
        this.notificationService = notificationService;
        this.store = store;
        this.dialog = dialog;
        this.snack = snack;
        this.confirmService = confirmService;
        // optional
        this.showActionColumn = true;
        this.showColumnFilter = true;
        this.showToolbar = true;
        this.formRef = notification_edit_component_NotificationEditComponent;
    }
    // tslint:disable-next-line
    ngOnInit() {
        super.ngOnInit();
        this.columns = [
            new src["c" /* EntityColumnDef */]({ property: 'id', header: 'No.', sticky: 'start' }),
            new src["c" /* EntityColumnDef */]({ property: 'title', header: 'Title' }),
            new src["c" /* EntityColumnDef */]({ property: 'body', header: 'Body' }),
            new src["c" /* EntityColumnDef */]({ property: 'target', header: 'Target' }),
            new src["c" /* EntityColumnDef */]({ property: 'targetType', header: 'Type' }),
            new src["c" /* EntityColumnDef */]({ property: 'icon', header: 'Icon' }),
            new src["c" /* EntityColumnDef */]({ property: 'color', header: 'Color' }),
            new src["c" /* EntityColumnDef */]({ property: 'read', header: 'Read' }),
            new src["c" /* EntityColumnDef */]({ property: 'native', header: 'Native' }),
            new src["c" /* EntityColumnDef */]({ property: 'isActive', header: 'Active' }),
            new src["c" /* EntityColumnDef */]({
                property: 'createdAt',
                header: 'Created',
                displayFn: entity => `${Object(formatDistance["a" /* default */])(this.stringToDate(entity.createdAt), new Date(), { addSuffix: true })}`,
            }),
            new src["c" /* EntityColumnDef */]({
                property: 'updatedAt',
                header: 'Updated',
                displayFn: entity => `${Object(formatDistance["a" /* default */])(this.stringToDate(entity.updatedAt), new Date(), { addSuffix: true })}`,
            }),
            new src["c" /* EntityColumnDef */]({ property: 'send', header: 'Send', template: this.sendTpl }),
        ];
    }
    // optional
    delete(item) {
        return this.confirmService.confirm('Confirm', `Delete Notification(${item.id})?`).pipe(Object(filter["a" /* filter */])(confirmed => confirmed === true), Object(mergeMap["a" /* mergeMap */])(_ => super.delete(item)), Object(tap["a" /* tap */])(_ => {
            this.snack.open('Notification Deleted!', 'OK', { duration: 5000 });
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */]([`/admin/notifications`]));
        }), Object(catchError["a" /* catchError */])(error => {
            this.snack.open(error, 'OK', { duration: 10000 });
            return Object(throwError["a" /* throwError */])('Ignore Me!');
        }));
    }
    onSend(row) {
        return this.notificationService.send(row.id).pipe(Object(tap["a" /* tap */])(_ => {
            this.snack.open('Notification Sent!', 'OK', { duration: 5000 });
        }), Object(catchError["a" /* catchError */])(error => {
            this.snack.open(error, 'OK', { duration: 10000 });
            return Object(throwError["a" /* throwError */])('Ignore Me!');
        }));
    }
    // required to override
    getNewEntity() {
        const entity = new app_notification_model["a" /* AppNotification */]();
        entity.native = true;
        entity.target = 'all';
        entity.targetType = app_notification_model["d" /* TargetType */].ALL;
        entity.color = app_notification_model["b" /* NotificationColor */].WARN;
        entity.icon = app_notification_model["c" /* NotificationIcon */].NOTIFICATIONS;
        return entity;
    }
    // optional
    showDetails(entity) {
        if (entity) {
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */]([`/admin/notifications/${entity.id}`]));
        }
        else {
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */](['/admin/notifications']));
        }
    }
    // filterPredicate(entity: AppNotification, _filter: string): boolean  {
    //   return entity.first_name.indexOf(_filter) !== -1;
    // }
    // optional
    openPopUp(entity) {
        let isNew = false;
        let id;
        if (!entity) {
            isNew = true;
            entity = this.getNewEntity();
        }
        else {
            id = entity.id;
        }
        const title = isNew ? 'Add Notification' : 'Update Notification';
        const dialogRef = this.dialog.open(this.formRef, {
            width: '720px',
            disableClose: true,
            data: { title, payload: entity },
        });
        dialogRef
            .afterClosed()
            .pipe(Object(filter["a" /* filter */])(res => res !== false), 
        // tap(res => console.log(res)),
        Object(concatMap["a" /* concatMap */])((res) => super.updateOrCreate(res, id)))
            .subscribe(_ => {
            this.snack.open(isNew ? 'Notification Created!' : 'Notification Updated!', 'OK', { duration: 5000 });
            this.store.dispatch(new ngxs_router_plugin["a" /* Navigate */](['/admin/notifications']));
        }, error => this.snack.open(error, 'OK', { duration: 10000 }));
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/services/notification.service.ts






let notification_service_NotificationService = /*@__PURE__*/ (() => {
    class NotificationService extends src["e" /* EntityService */] {
        constructor(httpClient) {
            super(httpClient);
            // Optionally overwrite baseUrl
            this.baseUrl = environment["a" /* environment */].API_BASE_URL;
            this.entityPath = 'notifications';
        }
        getAll() {
            const params = new http["i" /* HttpParams */]().set('order', 'ASC').set('read', 'false');
            this.loadingSubject.next(true);
            return this.httpClient.get(`${this.baseUrl}/${this.entityPath}`, { params }).pipe(Object(retry["a" /* retry */])(3), // retry a failed request up to 3 times
            Object(catchError["a" /* catchError */])(this.handleError), Object(finalize["a" /* finalize */])(() => this.loadingSubject.next(false)), 
            // return without count
            Object(map["a" /* map */])(data => data.items));
        }
        delete(id) {
            this.loadingSubject.next(true);
            return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(Object(catchError["a" /* catchError */])(this.handleError), Object(finalize["a" /* finalize */])(() => this.loadingSubject.next(false)));
        }
        send(id) {
            this.loadingSubject.next(true);
            return this.httpClient.post(`${this.baseUrl}/${this.entityPath}/send`, { id }).pipe(Object(catchError["a" /* catchError */])(this.handleError), Object(finalize["a" /* finalize */])(() => this.loadingSubject.next(false)));
        }
    }
    NotificationService.ngInjectableDef = core["bc" /* ɵɵdefineInjectable */]({ factory: function NotificationService_Factory() { return new NotificationService(core["cc" /* ɵɵinject */](http["c" /* HttpClient */])); }, token: NotificationService, providedIn: "root" });
    return NotificationService;
})();


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/containers/notifications/notifications.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */











































var styles_NotificationsComponent = [notifications_component_scss_shim_ngstyle_styles, entity_component_scss_shim_ngstyle["a" /* styles */]];
var RenderType_NotificationsComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_NotificationsComponent, data: {} });

function View_NotificationsComponent_2(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 5, "button", [["aria-label", "Clear"], ["mat-button", ""], ["mat-icon-button", ""], ["matSuffix", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = ((core["Nb" /* ɵnov */](_v.parent, 15).value = "") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Ab" /* ɵdid */](2, 16384, [[14, 4]], 0, form_field["i" /* MatSuffix */], [], null, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](4, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["close"]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["Nb" /* ɵnov */](_v, 4).inline; var currVal_3 = (((core["Nb" /* ɵnov */](_v, 4).color !== "primary") && (core["Nb" /* ɵnov */](_v, 4).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_2, currVal_3); });
}
function View_NotificationsComponent_3(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 16777216, null, null, 5, "button", [["aria-haspopup", "true"], ["mat-icon-button", ""], ["style", "margin-left: 16px"], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("mousedown" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 2)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 2)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("click" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 2)._handleClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Ab" /* ɵdid */](2, 1196032, null, 0, menu["g" /* MatMenuTrigger */], [overlay["c" /* Overlay */], core["m" /* ElementRef */], core["V" /* ViewContainerRef */], menu["c" /* MAT_MENU_SCROLL_STRATEGY */], [2, menu["d" /* MatMenu */]], [8, null], [2, bidi["b" /* Directionality */]], a11y["h" /* FocusMonitor */]], { menu: [0, "menu"] }, null), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](4, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["filter_list"])), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_3 = core["Nb" /* ɵnov */](_v.parent, 31); _ck(_v, 2, 0, currVal_3); _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); var currVal_2 = (core["Nb" /* ɵnov */](_v, 2).menuOpen || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = core["Nb" /* ɵnov */](_v, 4).inline; var currVal_5 = (((core["Nb" /* ɵnov */](_v, 4).color !== "primary") && (core["Nb" /* ɵnov */](_v, 4).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_4, currVal_5); });
}
function View_NotificationsComponent_4(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["class", "checkbox-item mat-menu-item"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleColumnVisibility(_v.context.$implicit, $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["Bb" /* ɵeld */](1, 0, null, null, 3, "mat-checkbox", [["class", "checkbox mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("change" === en)) {
                var pd_0 = ((_v.context.$implicit.visible = !_v.context.$implicit.visible) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = ($event.stopPropagation() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](3, 8568832, [["checkbox", 4]], 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { checked: [0, "checked"] }, { change: "change" }), (_l()(), core["Vb" /* ɵted */](4, 0, [" ", " "]))], function (_ck, _v) { var currVal_7 = _v.context.$implicit.visible; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 3).id; var currVal_1 = null; var currVal_2 = core["Nb" /* ɵnov */](_v, 3).indeterminate; var currVal_3 = core["Nb" /* ɵnov */](_v, 3).checked; var currVal_4 = core["Nb" /* ɵnov */](_v, 3).disabled; var currVal_5 = (core["Nb" /* ɵnov */](_v, 3).labelPosition == "before"); var currVal_6 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _v.context.$implicit.header; _ck(_v, 4, 0, currVal_8); });
}
function View_NotificationsComponent_5(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["color", "primary"], ["mat-mini-fab", ""], ["matTooltip", "add"], ["style", "margin-left: 16px"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openPopUp() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["add"]))], function (_ck, _v) { var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); });
}
function View_NotificationsComponent_1(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 38, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, toolbar_typings_index_ngfactory["b" /* View_MatToolbar_0 */], toolbar_typings_index_ngfactory["a" /* RenderType_MatToolbar */])), core["Ab" /* ɵdid */](1, 4243456, null, 1, toolbar["a" /* MatToolbar */], [core["m" /* ElementRef */], platform["a" /* Platform */], common["d" /* DOCUMENT */]], null, null), core["Tb" /* ɵqud */](603979776, 5, { _toolbarRows: 1 }), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 22, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["Ab" /* ɵdid */](4, 671744, null, 0, flex["b" /* DefaultFlexDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], flex["l" /* FlexStyleBuilder */], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxFlex: [0, "fxFlex"] }, null), core["Ab" /* ɵdid */](5, 7520256, null, 9, form_field["c" /* MatFormField */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, esm2015_core["j" /* MAT_LABEL_GLOBAL_OPTIONS */]], [2, bidi["b" /* Directionality */]], [2, form_field["a" /* MAT_FORM_FIELD_DEFAULT_OPTIONS */]], platform["a" /* Platform */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Tb" /* ɵqud */](603979776, 6, { _controlNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 7, { _controlStatic: 0 }), core["Tb" /* ɵqud */](603979776, 8, { _labelChildNonStatic: 0 }), core["Tb" /* ɵqud */](335544320, 9, { _labelChildStatic: 0 }), core["Tb" /* ɵqud */](603979776, 10, { _placeholderChild: 0 }), core["Tb" /* ɵqud */](603979776, 11, { _errorChildren: 1 }), core["Tb" /* ɵqud */](603979776, 12, { _hintChildren: 1 }), core["Tb" /* ɵqud */](603979776, 13, { _prefixChildren: 1 }), core["Tb" /* ɵqud */](603979776, 14, { _suffixChildren: 1 }), (_l()(), core["Bb" /* ɵeld */](15, 0, [[3, 0], ["filter", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "keyup"], [null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("blur" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 16)._focusChanged(false) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 16)._focusChanged(true) !== false);
                ad = (pd_1 && ad);
            }
            if (("input" === en)) {
                var pd_2 = (core["Nb" /* ɵnov */](_v, 16)._onInput() !== false);
                ad = (pd_2 && ad);
            }
            if (("keyup" === en)) {
                var pd_3 = (_co.applyFilter($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](16, 999424, null, 0, input["b" /* MatInput */], [core["m" /* ElementRef */], platform["a" /* Platform */], [8, null], [2, fesm2015_forms["s" /* NgForm */]], [2, fesm2015_forms["l" /* FormGroupDirective */]], esm2015_core["d" /* ErrorStateMatcher */], [8, null], text_field["a" /* AutofillMonitor */], core["D" /* NgZone */]], null, null), core["Sb" /* ɵprd */](2048, [[6, 4], [7, 4]], form_field["d" /* MatFormFieldControl */], null, [input["b" /* MatInput */]]), (_l()(), core["Bb" /* ɵeld */](18, 0, null, 3, 5, "mat-label", [], null, null, null, null, null)), core["Ab" /* ɵdid */](19, 16384, [[8, 4], [9, 4]], 0, form_field["g" /* MatLabel */], [], null, null), (_l()(), core["Bb" /* ɵeld */](20, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](21, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["search"])), (_l()(), core["Vb" /* ɵted */](-1, null, ["Filter "])), (_l()(), core["qb" /* ɵand */](16777216, null, 4, 1, null, View_NotificationsComponent_2)), core["Ab" /* ɵdid */](25, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_NotificationsComponent_3)), core["Ab" /* ɵdid */](27, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Bb" /* ɵeld */](28, 0, null, 0, 8, "mat-menu", [["xPosition", "before"], ["yPosition", "below"]], null, null, null, menu_typings_index_ngfactory["d" /* View__MatMenu_0 */], menu_typings_index_ngfactory["b" /* RenderType__MatMenu */])), core["Sb" /* ɵprd */](6144, null, menu["d" /* MatMenu */], null, [menu["h" /* _MatMenu */]]), core["Sb" /* ɵprd */](6144, null, menu["b" /* MAT_MENU_PANEL */], null, [menu["d" /* MatMenu */]]), core["Ab" /* ɵdid */](31, 1294336, [["columnFilter", 4]], 3, menu["h" /* _MatMenu */], [core["m" /* ElementRef */], core["D" /* NgZone */], menu["a" /* MAT_MENU_DEFAULT_OPTIONS */]], { xPosition: [0, "xPosition"], yPosition: [1, "yPosition"] }, null), core["Tb" /* ɵqud */](603979776, 15, { _allItems: 1 }), core["Tb" /* ɵqud */](603979776, 16, { items: 1 }), core["Tb" /* ɵqud */](603979776, 17, { lazyContent: 0 }), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_NotificationsComponent_4)), core["Ab" /* ɵdid */](36, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_NotificationsComponent_5)), core["Ab" /* ɵdid */](38, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_24 = ""; _ck(_v, 4, 0, currVal_24); _ck(_v, 16, 0); _ck(_v, 21, 0); var currVal_36 = (core["Nb" /* ɵnov */](_v, 15).value !== ""); _ck(_v, 25, 0, currVal_36); var currVal_37 = _co.showColumnFilter; _ck(_v, 27, 0, currVal_37); var currVal_38 = "before"; var currVal_39 = "below"; _ck(_v, 31, 0, currVal_38, currVal_39); var currVal_40 = _co.columns; _ck(_v, 36, 0, currVal_40); var currVal_41 = _co.showActionColumn; _ck(_v, 38, 0, currVal_41); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._toolbarRows.length > 0); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (core["Nb" /* ɵnov */](_v, 5).appearance == "standard"); var currVal_3 = (core["Nb" /* ɵnov */](_v, 5).appearance == "fill"); var currVal_4 = (core["Nb" /* ɵnov */](_v, 5).appearance == "outline"); var currVal_5 = (core["Nb" /* ɵnov */](_v, 5).appearance == "legacy"); var currVal_6 = core["Nb" /* ɵnov */](_v, 5)._control.errorState; var currVal_7 = core["Nb" /* ɵnov */](_v, 5)._canLabelFloat; var currVal_8 = core["Nb" /* ɵnov */](_v, 5)._shouldLabelFloat(); var currVal_9 = core["Nb" /* ɵnov */](_v, 5)._hasFloatingLabel(); var currVal_10 = core["Nb" /* ɵnov */](_v, 5)._hideControlPlaceholder(); var currVal_11 = core["Nb" /* ɵnov */](_v, 5)._control.disabled; var currVal_12 = core["Nb" /* ɵnov */](_v, 5)._control.autofilled; var currVal_13 = core["Nb" /* ɵnov */](_v, 5)._control.focused; var currVal_14 = (core["Nb" /* ɵnov */](_v, 5).color == "accent"); var currVal_15 = (core["Nb" /* ɵnov */](_v, 5).color == "warn"); var currVal_16 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("untouched"); var currVal_17 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("touched"); var currVal_18 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("pristine"); var currVal_19 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("dirty"); var currVal_20 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("valid"); var currVal_21 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("invalid"); var currVal_22 = core["Nb" /* ɵnov */](_v, 5)._shouldForward("pending"); var currVal_23 = !core["Nb" /* ɵnov */](_v, 5)._animationsEnabled; _ck(_v, 3, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]); var currVal_25 = core["Nb" /* ɵnov */](_v, 16)._isServer; var currVal_26 = core["Nb" /* ɵnov */](_v, 16).id; var currVal_27 = core["Nb" /* ɵnov */](_v, 16).placeholder; var currVal_28 = core["Nb" /* ɵnov */](_v, 16).disabled; var currVal_29 = core["Nb" /* ɵnov */](_v, 16).required; var currVal_30 = ((core["Nb" /* ɵnov */](_v, 16).readonly && !core["Nb" /* ɵnov */](_v, 16)._isNativeSelect) || null); var currVal_31 = (core["Nb" /* ɵnov */](_v, 16)._ariaDescribedby || null); var currVal_32 = core["Nb" /* ɵnov */](_v, 16).errorState; var currVal_33 = core["Nb" /* ɵnov */](_v, 16).required.toString(); _ck(_v, 15, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_34 = core["Nb" /* ɵnov */](_v, 21).inline; var currVal_35 = (((core["Nb" /* ɵnov */](_v, 21).color !== "primary") && (core["Nb" /* ɵnov */](_v, 21).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 21).color !== "warn")); _ck(_v, 20, 0, currVal_34, currVal_35); });
}
function View_NotificationsComponent_6(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "indeterminate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, progress_bar_typings_index_ngfactory["b" /* View_MatProgressBar_0 */], progress_bar_typings_index_ngfactory["a" /* RenderType_MatProgressBar */])), core["Ab" /* ɵdid */](1, 4374528, null, 0, progress_bar["b" /* MatProgressBar */], [core["m" /* ElementRef */], core["D" /* NgZone */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]], [2, progress_bar["a" /* MAT_PROGRESS_BAR_LOCATION */]]], { mode: [0, "mode"] }, null)], function (_ck, _v) { var currVal_3 = "indeterminate"; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (((core["Nb" /* ɵnov */](_v, 1).mode === "indeterminate") || (core["Nb" /* ɵnov */](_v, 1).mode === "query")) ? null : core["Nb" /* ɵnov */](_v, 1).value); var currVal_1 = core["Nb" /* ɵnov */](_v, 1).mode; var currVal_2 = core["Nb" /* ɵnov */](_v, 1)._isNoopAnimation; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_NotificationsComponent_8(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["e" /* MatHeaderCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 2, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (($event ? _co.masterToggle() : null) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](4, 8568832, null, 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { checked: [0, "checked"], disabled: [1, "disabled"], indeterminate: [2, "indeterminate"] }, { change: "change" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.isMasterToggleChecked(); var currVal_8 = !_co.dataSource.filteredData.length; var currVal_9 = _co.isMasterToggleIndeterminate(); _ck(_v, 4, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 4).id; var currVal_1 = null; var currVal_2 = core["Nb" /* ɵnov */](_v, 4).indeterminate; var currVal_3 = core["Nb" /* ɵnov */](_v, 4).checked; var currVal_4 = core["Nb" /* ɵnov */](_v, 4).disabled; var currVal_5 = (core["Nb" /* ɵnov */](_v, 4).labelPosition == "before"); var currVal_6 = (core["Nb" /* ɵnov */](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); });
}
function View_NotificationsComponent_9(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["a" /* MatCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 2, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ($event.stopPropagation() !== false);
                ad = (pd_0 && ad);
            }
            if (("change" === en)) {
                var pd_1 = (($event ? _co.selectRow(_v.context.$implicit) : null) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, checkbox_typings_index_ngfactory["b" /* View_MatCheckbox_0 */], checkbox_typings_index_ngfactory["a" /* RenderType_MatCheckbox */])), core["Sb" /* ɵprd */](5120, null, fesm2015_forms["o" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm2015_checkbox["b" /* MatCheckbox */]]), core["Ab" /* ɵdid */](4, 8568832, null, 0, esm2015_checkbox["b" /* MatCheckbox */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], a11y["h" /* FocusMonitor */], core["D" /* NgZone */], [8, null], [2, esm2015_checkbox["a" /* MAT_CHECKBOX_CLICK_ACTION */]], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { checked: [0, "checked"] }, { change: "change" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selection.isSelected(_v.context.$implicit); _ck(_v, 4, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = core["Nb" /* ɵnov */](_v, 4).id; var currVal_1 = null; var currVal_2 = core["Nb" /* ɵnov */](_v, 4).indeterminate; var currVal_3 = core["Nb" /* ɵnov */](_v, 4).checked; var currVal_4 = core["Nb" /* ɵnov */](_v, 4).disabled; var currVal_5 = (core["Nb" /* ɵnov */](_v, 4).labelPosition == "before"); var currVal_6 = (core["Nb" /* ɵnov */](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); });
}
function View_NotificationsComponent_7(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["Sb" /* ɵprd */](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [table["c" /* MatColumnDef */]]), core["Ab" /* ɵdid */](2, 16384, null, 3, table["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["Tb" /* ɵqud */](603979776, 22, { cell: 0 }), core["Tb" /* ɵqud */](603979776, 23, { headerCell: 0 }), core["Tb" /* ɵqud */](603979776, 24, { footerCell: 0 }), core["Sb" /* ɵprd */](2048, [[18, 4]], esm2015_table["d" /* CdkColumnDef */], null, [table["c" /* MatColumnDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_8)), core["Ab" /* ɵdid */](8, 16384, null, 0, table["f" /* MatHeaderCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[23, 4]], esm2015_table["j" /* CdkHeaderCellDef */], null, [table["f" /* MatHeaderCellDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_9)), core["Ab" /* ɵdid */](11, 16384, null, 0, table["b" /* MatCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[22, 4]], esm2015_table["b" /* CdkCellDef */], null, [table["b" /* MatCellDef */]])], function (_ck, _v) { var currVal_0 = "select"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NotificationsComponent_11(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["e" /* MatHeaderCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Vb" /* ɵted */](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.header; _ck(_v, 2, 0, currVal_0); }); }
function View_NotificationsComponent_14(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_NotificationsComponent_13(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), core["qb" /* ɵand */](16777216, null, null, 2, null, View_NotificationsComponent_14)), core["Ab" /* ɵdid */](2, 540672, null, 0, common["u" /* NgTemplateOutlet */], [core["V" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["Qb" /* ɵpod */](3, { $implicit: 0, column: 1 }), (_l()(), core["qb" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit, _v.parent.context.$implicit[_v.parent.parent.context.$implicit.property]); var currVal_1 = _v.parent.parent.context.$implicit.template; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_NotificationsComponent_15(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Vb" /* ɵted */](0, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.displayFn(_v.parent.context.$implicit); _ck(_v, 0, 0, currVal_0); }); }
function View_NotificationsComponent_12(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["a" /* MatCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_NotificationsComponent_13)), core["Ab" /* ɵdid */](3, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), core["qb" /* ɵand */](0, [["noTemplate", 2]], null, 0, null, View_NotificationsComponent_15))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.template; var currVal_1 = core["Nb" /* ɵnov */](_v, 4); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_NotificationsComponent_10(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["Sb" /* ɵprd */](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [table["c" /* MatColumnDef */]]), core["Ab" /* ɵdid */](2, 16384, null, 3, table["c" /* MatColumnDef */], [], { name: [0, "name"], stickyEnd: [1, "stickyEnd"], sticky: [2, "sticky"] }, null), core["Tb" /* ɵqud */](603979776, 25, { cell: 0 }), core["Tb" /* ɵqud */](603979776, 26, { headerCell: 0 }), core["Tb" /* ɵqud */](603979776, 27, { footerCell: 0 }), core["Sb" /* ɵprd */](2048, [[18, 4]], esm2015_table["d" /* CdkColumnDef */], null, [table["c" /* MatColumnDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_11)), core["Ab" /* ɵdid */](8, 16384, null, 0, table["f" /* MatHeaderCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[26, 4]], esm2015_table["j" /* CdkHeaderCellDef */], null, [table["f" /* MatHeaderCellDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_12)), core["Ab" /* ɵdid */](11, 16384, null, 0, table["b" /* MatCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[25, 4]], esm2015_table["b" /* CdkCellDef */], null, [table["b" /* MatCellDef */]])], function (_ck, _v) { var currVal_0 = _v.context.$implicit.property; var currVal_1 = (_v.context.$implicit.sticky === "end"); var currVal_2 = (_v.context.$implicit.sticky === "start"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_NotificationsComponent_17(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["e" /* MatHeaderCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Vb" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.actionColumn; _ck(_v, 2, 0, currVal_0); }); }
function View_NotificationsComponent_18(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 11, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["Ab" /* ɵdid */](1, 16384, null, 0, table["a" /* MatCell */], [esm2015_table["d" /* CdkColumnDef */], core["m" /* ElementRef */]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, null, 4, "button", [["color", "primary"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openPopUp(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](3, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](5, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["edit_mode"])), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 4, "button", [["color", "warn"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.delete(_v.context.$implicit).subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](8, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](10, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["delete"]))], function (_ck, _v) { var currVal_2 = "primary"; _ck(_v, 3, 0, currVal_2); _ck(_v, 5, 0); var currVal_7 = "warn"; _ck(_v, 8, 0, currVal_7); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 3).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = core["Nb" /* ɵnov */](_v, 5).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 5).color !== "primary") && (core["Nb" /* ɵnov */](_v, 5).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_3, currVal_4); var currVal_5 = (core["Nb" /* ɵnov */](_v, 8).disabled || null); var currVal_6 = (core["Nb" /* ɵnov */](_v, 8)._animationMode === "NoopAnimations"); _ck(_v, 7, 0, currVal_5, currVal_6); var currVal_8 = core["Nb" /* ɵnov */](_v, 10).inline; var currVal_9 = (((core["Nb" /* ɵnov */](_v, 10).color !== "primary") && (core["Nb" /* ɵnov */](_v, 10).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 10).color !== "warn")); _ck(_v, 9, 0, currVal_8, currVal_9); });
}
function View_NotificationsComponent_16(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["Sb" /* ɵprd */](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [table["c" /* MatColumnDef */]]), core["Ab" /* ɵdid */](2, 16384, null, 3, table["c" /* MatColumnDef */], [], { name: [0, "name"], sticky: [1, "sticky"] }, null), core["Tb" /* ɵqud */](603979776, 28, { cell: 0 }), core["Tb" /* ɵqud */](603979776, 29, { headerCell: 0 }), core["Tb" /* ɵqud */](603979776, 30, { footerCell: 0 }), core["Sb" /* ɵprd */](2048, [[18, 4]], esm2015_table["d" /* CdkColumnDef */], null, [table["c" /* MatColumnDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_17)), core["Ab" /* ɵdid */](8, 16384, null, 0, table["f" /* MatHeaderCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[29, 4]], esm2015_table["j" /* CdkHeaderCellDef */], null, [table["f" /* MatHeaderCellDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_18)), core["Ab" /* ɵdid */](11, 16384, null, 0, table["b" /* MatCellDef */], [core["R" /* TemplateRef */]], null, null), core["Sb" /* ɵprd */](2048, [[28, 4]], esm2015_table["b" /* CdkCellDef */], null, [table["b" /* MatCellDef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.actionColumn; var currVal_1 = ""; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_NotificationsComponent_19(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-header-row", [["class", "mat-header-row"], ["role", "row"]], null, null, null, table_typings_index_ngfactory["d" /* View_MatHeaderRow_0 */], table_typings_index_ngfactory["a" /* RenderType_MatHeaderRow */])), core["Sb" /* ɵprd */](6144, null, esm2015_table["k" /* CdkHeaderRow */], null, [table["g" /* MatHeaderRow */]]), core["Ab" /* ɵdid */](2, 49152, null, 0, table["g" /* MatHeaderRow */], [], null, null)], null, null); }
function View_NotificationsComponent_20(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 2, "mat-row", [["class", "row mat-row"], ["role", "row"]], [[2, "selected", null]], null, null, table_typings_index_ngfactory["e" /* View_MatRow_0 */], table_typings_index_ngfactory["b" /* RenderType_MatRow */])), core["Sb" /* ɵprd */](6144, null, esm2015_table["m" /* CdkRow */], null, [table["i" /* MatRow */]]), core["Ab" /* ɵdid */](2, 49152, null, 0, table["i" /* MatRow */], [], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selection.isSelected(_v.context.$implicit); _ck(_v, 0, 0, currVal_0); }); }
function View_NotificationsComponent_21(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onSend(_v.context.$implicit).subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["mail_outline"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_3 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_2, currVal_3); });
}
function View_NotificationsComponent_22(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 4, "button", [["color", "primary"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openPopUp(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](1, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](3, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["edit_mode"])), (_l()(), core["Bb" /* ɵeld */](5, 0, null, null, 4, "button", [["color", "warn"], ["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.delete(_v.context.$implicit).subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](6, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, icon_typings_index_ngfactory["b" /* View_MatIcon_0 */], icon_typings_index_ngfactory["a" /* RenderType_MatIcon */])), core["Ab" /* ɵdid */](8, 9158656, null, 0, icon["b" /* MatIcon */], [core["m" /* ElementRef */], icon["d" /* MatIconRegistry */], [8, null], [2, icon["a" /* MAT_ICON_LOCATION */]]], null, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["delete"]))], function (_ck, _v) { var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); var currVal_7 = "warn"; _ck(_v, 6, 0, currVal_7); _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1).disabled || null); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["Nb" /* ɵnov */](_v, 3).inline; var currVal_4 = (((core["Nb" /* ɵnov */](_v, 3).color !== "primary") && (core["Nb" /* ɵnov */](_v, 3).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); var currVal_5 = (core["Nb" /* ɵnov */](_v, 6).disabled || null); var currVal_6 = (core["Nb" /* ɵnov */](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_5, currVal_6); var currVal_8 = core["Nb" /* ɵnov */](_v, 8).inline; var currVal_9 = (((core["Nb" /* ɵnov */](_v, 8).color !== "primary") && (core["Nb" /* ɵnov */](_v, 8).color !== "accent")) && (core["Nb" /* ɵnov */](_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_8, currVal_9); });
}
function View_NotificationsComponent_23(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](1, null, ["", " -- ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; var currVal_1 = _v.context.column; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NotificationsComponent_0(_l) { return core["Xb" /* ɵvid */](0, [core["Tb" /* ɵqud */](402653184, 1, { paginator: 0 }), core["Tb" /* ɵqud */](402653184, 2, { sort: 0 }), core["Tb" /* ɵqud */](402653184, 3, { filterRef: 0 }), core["Tb" /* ɵqud */](402653184, 4, { sendTpl: 0 }), (_l()(), core["Bb" /* ɵeld */](4, 0, null, null, 30, "div", [["fxLayout", "column"]], null, null, null, null, null)), core["Ab" /* ɵdid */](5, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), core["Bb" /* ɵeld */](6, 0, null, null, 28, "mat-card", [["class", "mat-elevation-z8 mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](7, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 1, null, View_NotificationsComponent_1)), core["Ab" /* ɵdid */](9, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 2, null, View_NotificationsComponent_6)), core["Ab" /* ɵdid */](11, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](13, 0, null, 0, 18, "mat-table", [["class", "mat-table"], ["matSort", ""]], null, null, null, table_typings_index_ngfactory["f" /* View_MatTable_0 */], table_typings_index_ngfactory["c" /* RenderType_MatTable */])), core["Sb" /* ɵprd */](6144, null, esm2015_table["o" /* CdkTable */], null, [table["k" /* MatTable */]]), core["Ab" /* ɵdid */](15, 2342912, [["table", 4]], 4, table["k" /* MatTable */], [core["v" /* IterableDiffers */], core["i" /* ChangeDetectorRef */], core["m" /* ElementRef */], [8, null], [2, bidi["b" /* Directionality */]], common["d" /* DOCUMENT */], platform["a" /* Platform */]], { dataSource: [0, "dataSource"] }, null), core["Tb" /* ɵqud */](603979776, 18, { _contentColumnDefs: 1 }), core["Tb" /* ɵqud */](603979776, 19, { _contentRowDefs: 1 }), core["Tb" /* ɵqud */](603979776, 20, { _contentHeaderRowDefs: 1 }), core["Tb" /* ɵqud */](603979776, 21, { _contentFooterRowDefs: 1 }), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_NotificationsComponent_7)), core["Ab" /* ɵdid */](21, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_NotificationsComponent_10)), core["Ab" /* ɵdid */](23, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["qb" /* ɵand */](16777216, null, null, 1, null, View_NotificationsComponent_16)), core["Ab" /* ɵdid */](25, 16384, null, 0, common["n" /* NgIf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_19)), core["Ab" /* ɵdid */](27, 540672, null, 0, table["h" /* MatHeaderRowDef */], [core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { columns: [0, "columns"], sticky: [1, "sticky"] }, null), core["Sb" /* ɵprd */](2048, [[20, 4]], esm2015_table["l" /* CdkHeaderRowDef */], null, [table["h" /* MatHeaderRowDef */]]), (_l()(), core["qb" /* ɵand */](0, null, null, 2, null, View_NotificationsComponent_20)), core["Ab" /* ɵdid */](30, 540672, null, 0, table["j" /* MatRowDef */], [core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { columns: [0, "columns"] }, null), core["Sb" /* ɵprd */](2048, [[19, 4]], esm2015_table["n" /* CdkRowDef */], null, [table["j" /* MatRowDef */]]), (_l()(), core["Bb" /* ɵeld */](32, 0, null, 0, 2, "mat-paginator", [["class", "mat-paginator"]], null, null, null, paginator_typings_index_ngfactory["b" /* View_MatPaginator_0 */], paginator_typings_index_ngfactory["a" /* RenderType_MatPaginator */])), core["Ab" /* ɵdid */](33, 245760, [[1, 4], ["paginator", 4]], 0, paginator["b" /* MatPaginator */], [paginator["c" /* MatPaginatorIntl */], core["i" /* ChangeDetectorRef */]], { pageSize: [0, "pageSize"], pageSizeOptions: [1, "pageSizeOptions"], showFirstLastButtons: [2, "showFirstLastButtons"] }, null), core["Ob" /* ɵpad */](34, 3), (_l()(), core["Bb" /* ɵeld */](35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](36, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](37, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["Ab" /* ɵdid */](38, 212992, [["o", 4]], 0, router["v" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["V" /* ViewContainerRef */], core["k" /* ComponentFactoryResolver */], [8, null], core["i" /* ChangeDetectorRef */]], null, null), (_l()(), core["qb" /* ɵand */](0, [[4, 2], ["send", 2]], null, 0, null, View_NotificationsComponent_21)), (_l()(), core["qb" /* ɵand */](0, [["editDelete", 2]], null, 0, null, View_NotificationsComponent_22)), (_l()(), core["qb" /* ɵand */](0, [["demo", 2]], null, 0, null, View_NotificationsComponent_23))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 5, 0, currVal_0); var currVal_2 = _co.showToolbar; _ck(_v, 9, 0, currVal_2); var currVal_3 = core["Wb" /* ɵunv */](_v, 11, 0, core["Nb" /* ɵnov */](_v, 12).transform(_co.loading$)); _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.dataSource; _ck(_v, 15, 0, currVal_4); var currVal_5 = (_co.maxSelectable > 0); _ck(_v, 21, 0, currVal_5); var currVal_6 = _co.columns; _ck(_v, 23, 0, currVal_6); var currVal_7 = _co.showActionColumn; _ck(_v, 25, 0, currVal_7); var currVal_8 = _co.displayedColumns; var currVal_9 = true; _ck(_v, 27, 0, currVal_8, currVal_9); var currVal_10 = _co.displayedColumns; _ck(_v, 30, 0, currVal_10); var currVal_11 = 5; var currVal_12 = _ck(_v, 34, 0, 5, 10, 20); var currVal_13 = true; _ck(_v, 33, 0, currVal_11, currVal_12, currVal_13); _ck(_v, 38, 0); }, function (_ck, _v) { var currVal_1 = (core["Nb" /* ɵnov */](_v, 7)._animationMode === "NoopAnimations"); _ck(_v, 6, 0, currVal_1); }); }
function View_NotificationsComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-admin-notifications", [], null, null, null, View_NotificationsComponent_0, RenderType_NotificationsComponent)), core["Ab" /* ɵdid */](1, 4440064, null, 0, notifications_component_NotificationsComponent, [notification_service_NotificationService, ngxs_store["j" /* Store */], esm2015_dialog["e" /* MatDialog */], snack_bar["b" /* MatSnackBar */], app_confirm_service["a" /* AppConfirmService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotificationsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-admin-notifications", notifications_component_NotificationsComponent, View_NotificationsComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/notification-detail/notification-detail.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var notification_detail_component_scss_shim_ngstyle_styles = [""];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/notification-detail/notification-detail.component.ts

class notification_detail_component_NotificationDetailComponent {
    constructor(notificationService, route) {
        this.notificationService = notificationService;
        this.route = route;
        this.animationTrigger$ = new BehaviorSubject["a" /* BehaviorSubject */]('');
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.notificationService.getById(params.id).subscribe(data => {
                this.animationTrigger$.next(params.id);
                this.notification = data;
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}


// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/notification-detail/notification-detail.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */













var styles_NotificationDetailComponent = [notification_detail_component_scss_shim_ngstyle_styles];
var RenderType_NotificationDetailComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_NotificationDetailComponent, data: { "animation": [{ type: 7, name: "fadeAnimation", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }], options: { optional: true } }, { type: 11, selector: ":leave", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "0.3s" }], options: { optional: true } }, { type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "0.3s" }], options: { optional: true } }], options: null }], options: {} }] } });

function View_NotificationDetailComponent_1(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 10, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, list_typings_index_ngfactory["d" /* View_MatListItem_0 */], list_typings_index_ngfactory["b" /* RenderType_MatListItem */])), core["Ab" /* ɵdid */](1, 1228800, null, 3, list["d" /* MatListItem */], [core["m" /* ElementRef */], core["i" /* ChangeDetectorRef */], [2, list["h" /* MatNavList */]], [2, list["a" /* MatList */]]], null, null), core["Tb" /* ɵqud */](603979776, 1, { _lines: 1 }), core["Tb" /* ɵqud */](603979776, 2, { _avatar: 0 }), core["Tb" /* ɵqud */](603979776, 3, { _icon: 0 }), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 2, 5, "div", [], null, null, null, null, null)), (_l()(), core["Bb" /* ɵeld */](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](7, null, ["", "\uFF1A"])), (_l()(), core["Bb" /* ɵeld */](8, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](9, null, ["", ""])), core["Pb" /* ɵpid */](0, common["g" /* JsonPipe */], [])], null, function (_ck, _v) { var currVal_0 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._avatar || core["Nb" /* ɵnov */](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.key; _ck(_v, 7, 0, currVal_2); var currVal_3 = core["Wb" /* ɵunv */](_v, 9, 0, core["Nb" /* ɵnov */](_v, 10).transform(_v.context.$implicit.value)); _ck(_v, 9, 0, currVal_3); }); }
function View_NotificationDetailComponent_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 17, "mat-card", [["class", "mat-card"]], [[24, "@fadeAnimation", 0], [2, "_mat-animation-noopable", null]], null, null, card_typings_index_ngfactory["d" /* View_MatCard_0 */], card_typings_index_ngfactory["a" /* RenderType_MatCard */])), core["Ab" /* ɵdid */](1, 49152, null, 0, card["a" /* MatCard */], [[2, animations["a" /* ANIMATION_MODULE_TYPE */]]], null, null), core["Pb" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["Bb" /* ɵeld */](3, 0, null, 0, 5, "mat-card-header", [["class", "mat-card-header"]], null, null, null, card_typings_index_ngfactory["c" /* View_MatCardHeader_0 */], card_typings_index_ngfactory["b" /* RenderType_MatCardHeader */])), core["Ab" /* ɵdid */](4, 49152, null, 0, card["e" /* MatCardHeader */], [], null, null), (_l()(), core["Bb" /* ɵeld */](5, 0, null, 1, 3, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), core["Ab" /* ɵdid */](6, 16384, null, 0, card["i" /* MatCardTitle */], [], null, null), (_l()(), core["Bb" /* ɵeld */](7, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["Vb" /* ɵted */](-1, null, ["Selected Notification"])), (_l()(), core["Bb" /* ɵeld */](9, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, divider_typings_index_ngfactory["b" /* View_MatDivider_0 */], divider_typings_index_ngfactory["a" /* RenderType_MatDivider */])), core["Ab" /* ɵdid */](10, 49152, null, 0, divider["a" /* MatDivider */], [], null, null), (_l()(), core["Bb" /* ɵeld */](11, 0, null, 0, 6, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), core["Ab" /* ɵdid */](12, 16384, null, 0, card["d" /* MatCardContent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](13, 0, null, null, 4, "mat-list", [["class", "mat-list mat-list-base"], ["role", "list"]], null, null, null, list_typings_index_ngfactory["e" /* View_MatList_0 */], list_typings_index_ngfactory["a" /* RenderType_MatList */])), core["Ab" /* ɵdid */](14, 704512, null, 0, list["a" /* MatList */], [core["m" /* ElementRef */]], null, null), (_l()(), core["qb" /* ɵand */](16777216, null, 0, 2, null, View_NotificationDetailComponent_1)), core["Ab" /* ɵdid */](16, 278528, null, 0, common["m" /* NgForOf */], [core["V" /* ViewContainerRef */], core["R" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["Pb" /* ɵpid */](0, common["h" /* KeyValuePipe */], [core["w" /* KeyValueDiffers */]])], function (_ck, _v) { var _co = _v.component; var currVal_6 = core["Wb" /* ɵunv */](_v, 16, 0, core["Nb" /* ɵnov */](_v, 17).transform(_co.notification)); _ck(_v, 16, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Wb" /* ɵunv */](_v, 0, 0, core["Nb" /* ɵnov */](_v, 2).transform(_co.animationTrigger$)); var currVal_1 = (core["Nb" /* ɵnov */](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (core["Nb" /* ɵnov */](_v, 10).vertical ? "vertical" : "horizontal"); var currVal_3 = core["Nb" /* ɵnov */](_v, 10).vertical; var currVal_4 = !core["Nb" /* ɵnov */](_v, 10).vertical; var currVal_5 = core["Nb" /* ɵnov */](_v, 10).inset; _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_NotificationDetailComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-notification-detail", [], null, null, null, View_NotificationDetailComponent_0, RenderType_NotificationDetailComponent)), core["Ab" /* ɵdid */](1, 245760, null, 0, notification_detail_component_NotificationDetailComponent, [notification_service_NotificationService, router["a" /* ActivatedRoute */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotificationDetailComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-notification-detail", notification_detail_component_NotificationDetailComponent, View_NotificationDetailComponent_Host_0, {}, {}, []);



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/notification-edit/notification-edit.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var notification_edit_component_scss_shim_ngstyle_styles = [""];



// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/components/notification-edit/notification-edit.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
















var styles_NotificationEditComponent = [notification_edit_component_scss_shim_ngstyle_styles];
var RenderType_NotificationEditComponent = /*@__PURE__*/ /*@__PURE__*/ core["zb" /* ɵcrt */]({ encapsulation: 0, styles: styles_NotificationEditComponent, data: {} });

function View_NotificationEditComponent_0(_l) {
    return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 16777216, null, null, 8, "h1", [["cdkDrag", ""], ["cdkDragHandle", ""], ["cdkDragRootElement", ".cdk-overlay-pane"], ["class", "mat-dialog-title cdk-drag cdk-drag-handle"], ["mat-dialog-title", ""], ["style", "cursor: move"]], [[8, "id", 0], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), core["Ab" /* ɵdid */](1, 81920, null, 0, esm2015_dialog["m" /* MatDialogTitle */], [[2, esm2015_dialog["l" /* MatDialogRef */]], core["m" /* ElementRef */], esm2015_dialog["e" /* MatDialog */]], null, null), core["Ab" /* ɵdid */](2, 4866048, null, 3, drag_drop["c" /* CdkDrag */], [core["m" /* ElementRef */], [3, drag_drop["b" /* CDK_DROP_LIST */]], common["d" /* DOCUMENT */], core["D" /* NgZone */], core["V" /* ViewContainerRef */], drag_drop["a" /* CDK_DRAG_CONFIG */], [2, bidi["b" /* Directionality */]], drag_drop["g" /* DragDrop */], core["i" /* ChangeDetectorRef */]], { rootElementSelector: [0, "rootElementSelector"] }, null), core["Tb" /* ɵqud */](603979776, 1, { _handles: 1 }), core["Tb" /* ɵqud */](603979776, 2, { _previewTemplate: 0 }), core["Tb" /* ɵqud */](603979776, 3, { _placeholderTemplate: 0 }), core["Sb" /* ɵprd */](2048, null, drag_drop["k" /* ɵb */], null, [drag_drop["c" /* CdkDrag */]]), core["Ab" /* ɵdid */](7, 147456, [[1, 4]], 0, drag_drop["d" /* CdkDragHandle */], [core["m" /* ElementRef */], [2, drag_drop["k" /* ɵb */]]], null, null), (_l()(), core["Vb" /* ɵted */](8, null, ["", ""])), (_l()(), core["Bb" /* ɵeld */](9, 0, null, null, 20, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 11).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["Nb" /* ɵnov */](_v, 11).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.submit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["Ab" /* ɵdid */](10, 16384, null, 0, fesm2015_forms["A" /* ɵangular_packages_forms_forms_z */], [], null, null), core["Ab" /* ɵdid */](11, 540672, null, 0, fesm2015_forms["l" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["Sb" /* ɵprd */](2048, null, fesm2015_forms["d" /* ControlContainer */], null, [fesm2015_forms["l" /* FormGroupDirective */]]), core["Ab" /* ɵdid */](13, 16384, null, 0, fesm2015_forms["r" /* NgControlStatusGroup */], [[4, fesm2015_forms["d" /* ControlContainer */]]], null, null), (_l()(), core["Bb" /* ɵeld */](14, 0, null, null, 4, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), core["Ab" /* ɵdid */](15, 16384, null, 0, esm2015_dialog["j" /* MatDialogContent */], [], null, null), (_l()(), core["Bb" /* ɵeld */](16, 0, null, null, 2, "formly-form", [], null, null, null, ngx_formly_core_ngfactory["c" /* View_FormlyForm_0 */], ngx_formly_core_ngfactory["a" /* RenderType_FormlyForm */])), core["Sb" /* ɵprd */](512, null, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Ab" /* ɵdid */](18, 966656, null, 0, ngx_formly_core["g" /* FormlyForm */], [ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["e" /* FormlyConfig */], [8, null], [2, fesm2015_forms["l" /* FormGroupDirective */]]], { form: [0, "form"], model: [1, "model"], fields: [2, "fields"], options: [3, "options"] }, null), (_l()(), core["Bb" /* ɵeld */](19, 0, null, null, 10, "mat-dialog-actions", [["class", "mat-dialog-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), core["Ab" /* ɵdid */](20, 671744, null, 0, flex["e" /* DefaultLayoutDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["o" /* LayoutStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayout: [0, "fxLayout"] }, null), core["Ab" /* ɵdid */](21, 671744, null, 0, flex["d" /* DefaultLayoutAlignDirective */], [core["m" /* ElementRef */], flex_layout_esm2015_core["j" /* StyleUtils */], [2, flex["m" /* LayoutAlignStyleBuilder */]], flex_layout_esm2015_core["f" /* MediaMarshaller */]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), core["Ab" /* ɵdid */](22, 16384, null, 0, esm2015_dialog["f" /* MatDialogActions */], [], null, null), (_l()(), core["Bb" /* ɵeld */](23, 0, null, null, 3, "button", [["color", "warn"], ["mat-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["Nb" /* ɵnov */](_v, 25).dialogRef.close(core["Nb" /* ɵnov */](_v, 25).dialogResult) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.options.resetModel() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](24, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { color: [0, "color"] }, null), core["Ab" /* ɵdid */](25, 606208, null, 0, esm2015_dialog["g" /* MatDialogClose */], [[2, esm2015_dialog["l" /* MatDialogRef */]], core["m" /* ElementRef */], esm2015_dialog["e" /* MatDialog */]], { dialogResult: [0, "dialogResult"] }, null), (_l()(), core["Vb" /* ɵted */](-1, 0, [" Cancel "])), (_l()(), core["Bb" /* ɵeld */](27, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, button_typings_index_ngfactory["d" /* View_MatButton_0 */], button_typings_index_ngfactory["b" /* RenderType_MatButton */])), core["Ab" /* ɵdid */](28, 180224, null, 0, esm2015_button["b" /* MatButton */], [core["m" /* ElementRef */], a11y["h" /* FocusMonitor */], [2, animations["a" /* ANIMATION_MODULE_TYPE */]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), core["Vb" /* ɵted */](-1, 0, ["Save"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_3 = ".cdk-overlay-pane"; _ck(_v, 2, 0, currVal_3); var currVal_12 = _co.entityForm; _ck(_v, 11, 0, currVal_12); var currVal_13 = _co.entityForm; var currVal_14 = _co.model; var currVal_15 = _co.fields; var currVal_16 = _co.options; _ck(_v, 18, 0, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = "row"; _ck(_v, 20, 0, currVal_17); var currVal_18 = "space-between center"; _ck(_v, 21, 0, currVal_18); var currVal_22 = "warn"; _ck(_v, 24, 0, currVal_22); var currVal_23 = false; _ck(_v, 25, 0, currVal_23); var currVal_26 = _co.entityForm.invalid; var currVal_27 = "primary"; _ck(_v, 28, 0, currVal_26, currVal_27); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Nb" /* ɵnov */](_v, 1).id; var currVal_1 = core["Nb" /* ɵnov */](_v, 2).disabled; var currVal_2 = core["Nb" /* ɵnov */](_v, 2)._dragRef.isDragging(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _co.title; _ck(_v, 8, 0, currVal_4); var currVal_5 = core["Nb" /* ɵnov */](_v, 13).ngClassUntouched; var currVal_6 = core["Nb" /* ɵnov */](_v, 13).ngClassTouched; var currVal_7 = core["Nb" /* ɵnov */](_v, 13).ngClassPristine; var currVal_8 = core["Nb" /* ɵnov */](_v, 13).ngClassDirty; var currVal_9 = core["Nb" /* ɵnov */](_v, 13).ngClassValid; var currVal_10 = core["Nb" /* ɵnov */](_v, 13).ngClassInvalid; var currVal_11 = core["Nb" /* ɵnov */](_v, 13).ngClassPending; _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_19 = (core["Nb" /* ɵnov */](_v, 24).disabled || null); var currVal_20 = (core["Nb" /* ɵnov */](_v, 24)._animationMode === "NoopAnimations"); var currVal_21 = (core["Nb" /* ɵnov */](_v, 25).ariaLabel || null); _ck(_v, 23, 0, currVal_19, currVal_20, currVal_21); var currVal_24 = (core["Nb" /* ɵnov */](_v, 28).disabled || null); var currVal_25 = (core["Nb" /* ɵnov */](_v, 28)._animationMode === "NoopAnimations"); _ck(_v, 27, 0, currVal_24, currVal_25); });
}
function View_NotificationEditComponent_Host_0(_l) { return core["Xb" /* ɵvid */](0, [(_l()(), core["Bb" /* ɵeld */](0, 0, null, null, 1, "ngx-notification-edit", [], null, null, null, View_NotificationEditComponent_0, RenderType_NotificationEditComponent)), core["Ab" /* ɵdid */](1, 114688, null, 0, notification_edit_component_NotificationEditComponent, [esm2015_dialog["a" /* MAT_DIALOG_DATA */], esm2015_dialog["l" /* MatDialogRef */], fesm2015_forms["g" /* FormBuilder */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotificationEditComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["xb" /* ɵccf */]("ngx-notification-edit", notification_edit_component_NotificationEditComponent, View_NotificationEditComponent_Host_0, {}, {}, []);



// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/tooltip.js
var tooltip = __webpack_require__("zab8");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/ng-let/ng-let.module.ts
var ng_let_module = __webpack_require__("elFF");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/directives/router-link-match/router-link-match.module.ts
var router_link_match_module = __webpack_require__("hBHQ");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/flex-layout/esm2015/extended.js
var extended = __webpack_require__("2ob+");

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

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/app-confirm/src/lib/app-confirm.module.ts
var app_confirm_module = __webpack_require__("eY2q");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/truncate/truncate.module.ts
var truncate_module = __webpack_require__("NA/R");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/ngx-utils/src/lib/pipes/helper/helper.module.ts
var helper_module = __webpack_require__("XpPk");

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

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/notifications/src/lib/notifications.handler.ts
var notifications_handler = __webpack_require__("VZ8c");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/toolbar/src/lib/toolbar.module.ts
var toolbar_module = __webpack_require__("9INY");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@angular/material/esm2015/tabs.js
var tabs = __webpack_require__("Lv2H");

// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/quickpanel/src/lib/quickpanel.module.ts
var quickpanel_module = __webpack_require__("sBFP");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/node_modules/@ngx-formly/material/fesm2015/ngx-formly-material.js









let FormlyMaterialModule = /*@__PURE__*/ (() => {
    class FormlyMaterialModule {
    }
    return FormlyMaterialModule;
})();
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





// EXTERNAL MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/auth/src/lib/admin.guard.ts
var admin_guard = __webpack_require__("Fvni");

// CONCATENATED MODULE: /Developer/Work/SPA/ngx-starter-kit/libs/admin/src/lib/admin.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModuleNgFactory", function() { return AdminModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */







































































































var AdminModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ core["yb" /* ɵcmf */](AdminModule, [], function (_l) { return core["Kb" /* ɵmod */]([core["Lb" /* ɵmpd */](512, core["k" /* ComponentFactoryResolver */], core["jb" /* ɵCodegenComponentFactoryResolver */], [[8, [router_ngfactory["a" /* ɵangular_packages_router_router_lNgFactory */], index_ngfactory["a" /* TooltipComponentNgFactory */], typings_index_ngfactory["a" /* MatDialogContainerNgFactory */], app_confirm_component_ngfactory["a" /* AppConfirmComponentNgFactory */], ngx_formly_core_ngfactory["e" /* ɵbNgFactory */], ngx_formly_core_ngfactory["f" /* ɵdNgFactory */], ɵaNgFactory, FormlyFieldInputNgFactory, FormlyFieldTextAreaNgFactory, FormlyFieldRadioNgFactory, FormlyFieldCheckboxNgFactory, FormlyFieldMultiCheckboxNgFactory, FormlyFieldSelectNgFactory, AdminLayoutComponentNgFactory, OverviewComponentNgFactory, SubscriptionsComponentNgFactory, SubscriptionDetailComponentNgFactory, NotificationsComponentNgFactory, NotificationDetailComponentNgFactory, NotificationEditComponentNgFactory]], [3, core["k" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["Lb" /* ɵmpd */](4608, common["p" /* NgLocalization */], common["o" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["F" /* ɵangular_packages_common_common_a */]]]), core["Lb" /* ɵmpd */](4608, fesm2015_forms["g" /* FormBuilder */], fesm2015_forms["g" /* FormBuilder */], []), core["Lb" /* ɵmpd */](4608, fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["y" /* ɵangular_packages_forms_forms_o */], []), core["Lb" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0, p0_1) { return [flex_layout_esm2015_core["k" /* removeStyles */](p0_0, p0_1)]; }, [common["d" /* DOCUMENT */], core["F" /* PLATFORM_ID */]]), core["Lb" /* ɵmpd */](4608, observers["c" /* MutationObserverFactory */], observers["c" /* MutationObserverFactory */], []), core["Lb" /* ɵmpd */](4608, esm2015_core["d" /* ErrorStateMatcher */], esm2015_core["d" /* ErrorStateMatcher */], []), core["Lb" /* ɵmpd */](4608, overlay["c" /* Overlay */], overlay["c" /* Overlay */], [overlay["i" /* ScrollStrategyOptions */], overlay["e" /* OverlayContainer */], core["k" /* ComponentFactoryResolver */], overlay["h" /* OverlayPositionBuilder */], overlay["f" /* OverlayKeyboardDispatcher */], core["t" /* Injector */], core["D" /* NgZone */], common["d" /* DOCUMENT */], bidi["b" /* Directionality */], [2, common["j" /* Location */]]]), core["Lb" /* ɵmpd */](5120, overlay["j" /* ɵc */], overlay["k" /* ɵd */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](5120, menu["c" /* MAT_MENU_SCROLL_STRATEGY */], menu["j" /* ɵb23 */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](5120, esm2015_select["a" /* MAT_SELECT_SCROLL_STRATEGY */], esm2015_select["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](5120, tooltip["b" /* MAT_TOOLTIP_SCROLL_STRATEGY */], tooltip["c" /* MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](4608, platform_browser["e" /* HAMMER_GESTURE_CONFIG */], esm2015_core["e" /* GestureConfig */], [[2, esm2015_core["i" /* MAT_HAMMER_OPTIONS */]], [2, esm2015_core["n" /* MatCommonModule */]]]), core["Lb" /* ɵmpd */](5120, paginator["c" /* MatPaginatorIntl */], paginator["a" /* MAT_PAGINATOR_INTL_PROVIDER_FACTORY */], [[3, paginator["c" /* MatPaginatorIntl */]]]), core["Lb" /* ɵmpd */](5120, esm2015_dialog["c" /* MAT_DIALOG_SCROLL_STRATEGY */], esm2015_dialog["d" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay["c" /* Overlay */]]), core["Lb" /* ɵmpd */](135680, esm2015_dialog["e" /* MatDialog */], esm2015_dialog["e" /* MatDialog */], [overlay["c" /* Overlay */], core["t" /* Injector */], [2, common["j" /* Location */]], [2, esm2015_dialog["b" /* MAT_DIALOG_DEFAULT_OPTIONS */]], esm2015_dialog["c" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, esm2015_dialog["e" /* MatDialog */]], overlay["e" /* OverlayContainer */]]), core["Lb" /* ɵmpd */](4608, drag_drop["g" /* DragDrop */], drag_drop["g" /* DragDrop */], [common["d" /* DOCUMENT */], core["D" /* NgZone */], scrolling["j" /* ViewportRuler */], drag_drop["i" /* DragDropRegistry */]]), core["Lb" /* ɵmpd */](4608, app_confirm_service["a" /* AppConfirmService */], app_confirm_service["a" /* AppConfirmService */], [esm2015_dialog["e" /* MatDialog */]]), core["Lb" /* ɵmpd */](4608, ngxs_store["H" /* ɵs */], ngxs_store["H" /* ɵs */], [[3, ngxs_store["H" /* ɵs */]], [2, ngxs_store["d" /* NGXS_PLUGINS */]]]), core["Lb" /* ɵmpd */](4608, notifications_state["a" /* NotificationsState */], notifications_state["a" /* NotificationsState */], [notifications_service["a" /* NotificationsService */]]), core["Lb" /* ɵmpd */](4608, ngx_formly_core["h" /* FormlyFormBuilder */], ngx_formly_core["h" /* FormlyFormBuilder */], [ngx_formly_core["e" /* FormlyConfig */], core["k" /* ComponentFactoryResolver */], core["t" /* Injector */]]), core["Lb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Lb" /* ɵmpd */](1073742336, ng_let_module["a" /* NgLetModule */], ng_let_module["a" /* NgLetModule */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["x" /* ɵangular_packages_forms_forms_d */], []), core["Lb" /* ɵmpd */](1073742336, fesm2015_forms["u" /* ReactiveFormsModule */], fesm2015_forms["u" /* ReactiveFormsModule */], []), core["Lb" /* ɵmpd */](1073742336, router_link_match_module["a" /* RouterLinkMatchModule */], router_link_match_module["a" /* RouterLinkMatchModule */], []), core["Lb" /* ɵmpd */](1073742336, flex_layout_esm2015_core["c" /* CoreModule */], flex_layout_esm2015_core["c" /* CoreModule */], []), core["Lb" /* ɵmpd */](1073742336, bidi["a" /* BidiModule */], bidi["a" /* BidiModule */], []), core["Lb" /* ɵmpd */](1073742336, flex["j" /* FlexModule */], flex["j" /* FlexModule */], []), core["Lb" /* ɵmpd */](1073742336, extended["c" /* ExtendedModule */], extended["c" /* ExtendedModule */], []), core["Lb" /* ɵmpd */](1073742336, grid["a" /* GridModule */], grid["a" /* GridModule */], []), core["Lb" /* ɵmpd */](1073742336, flex_layout["a" /* FlexLayoutModule */], flex_layout["a" /* FlexLayoutModule */], [[2, flex_layout_esm2015_core["h" /* SERVER_TOKEN */]], core["F" /* PLATFORM_ID */]]), core["Lb" /* ɵmpd */](1073742336, shared_flex_layout_module["a" /* SharedFlexLayoutModule */], shared_flex_layout_module["a" /* SharedFlexLayoutModule */], []), core["Lb" /* ɵmpd */](1073742336, ngx_perfect_scrollbar_es5["d" /* PerfectScrollbarModule */], ngx_perfect_scrollbar_es5["d" /* PerfectScrollbarModule */], []), core["Lb" /* ɵmpd */](1073742336, shared_perfect_scrollbar_module["a" /* SharedPerfectScrollbarModule */], shared_perfect_scrollbar_module["a" /* SharedPerfectScrollbarModule */], []), core["Lb" /* ɵmpd */](1073742336, shared_module["a" /* SharedModule */], shared_module["a" /* SharedModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["n" /* MatCommonModule */], esm2015_core["n" /* MatCommonModule */], [[2, esm2015_core["f" /* MATERIAL_SANITY_CHECKS */]], [2, platform_browser["f" /* HAMMER_LOADER */]]]), core["Lb" /* ɵmpd */](1073742336, icon["c" /* MatIconModule */], icon["c" /* MatIconModule */], []), core["Lb" /* ɵmpd */](1073742336, router["u" /* RouterModule */], router["u" /* RouterModule */], [[2, router["A" /* ɵangular_packages_router_router_a */]], [2, router["q" /* Router */]]]), core["Lb" /* ɵmpd */](1073742336, breadcrumbs_module["a" /* BreadcrumbsModule */], breadcrumbs_module["a" /* BreadcrumbsModule */], []), core["Lb" /* ɵmpd */](1073742336, card["g" /* MatCardModule */], card["g" /* MatCardModule */], []), core["Lb" /* ɵmpd */](1073742336, platform["b" /* PlatformModule */], platform["b" /* PlatformModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["y" /* MatRippleModule */], esm2015_core["y" /* MatRippleModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_button["c" /* MatButtonModule */], esm2015_button["c" /* MatButtonModule */], []), core["Lb" /* ɵmpd */](1073742336, observers["d" /* ObserversModule */], observers["d" /* ObserversModule */], []), core["Lb" /* ɵmpd */](1073742336, form_field["e" /* MatFormFieldModule */], form_field["e" /* MatFormFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, text_field["c" /* TextFieldModule */], text_field["c" /* TextFieldModule */], []), core["Lb" /* ɵmpd */](1073742336, input["c" /* MatInputModule */], input["c" /* MatInputModule */], []), core["Lb" /* ɵmpd */](1073742336, button_toggle["e" /* MatButtonToggleModule */], button_toggle["e" /* MatButtonToggleModule */], []), core["Lb" /* ɵmpd */](1073742336, portal["g" /* PortalModule */], portal["g" /* PortalModule */], []), core["Lb" /* ɵmpd */](1073742336, scrolling["g" /* ScrollingModule */], scrolling["g" /* ScrollingModule */], []), core["Lb" /* ɵmpd */](1073742336, overlay["g" /* OverlayModule */], overlay["g" /* OverlayModule */], []), core["Lb" /* ɵmpd */](1073742336, menu["i" /* _MatMenuDirectivesModule */], menu["i" /* _MatMenuDirectivesModule */], []), core["Lb" /* ɵmpd */](1073742336, menu["f" /* MatMenuModule */], menu["f" /* MatMenuModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_checkbox["d" /* _MatCheckboxRequiredValidatorModule */], esm2015_checkbox["d" /* _MatCheckboxRequiredValidatorModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_checkbox["c" /* MatCheckboxModule */], esm2015_checkbox["c" /* MatCheckboxModule */], []), core["Lb" /* ɵmpd */](1073742336, toolbar["b" /* MatToolbarModule */], toolbar["b" /* MatToolbarModule */], []), core["Lb" /* ɵmpd */](1073742336, progress_bar["c" /* MatProgressBarModule */], progress_bar["c" /* MatProgressBarModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_table["p" /* CdkTableModule */], esm2015_table["p" /* CdkTableModule */], []), core["Lb" /* ɵmpd */](1073742336, table["m" /* MatTableModule */], table["m" /* MatTableModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["w" /* MatPseudoCheckboxModule */], esm2015_core["w" /* MatPseudoCheckboxModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["t" /* MatOptionModule */], esm2015_core["t" /* MatOptionModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_select["d" /* MatSelectModule */], esm2015_select["d" /* MatSelectModule */], []), core["Lb" /* ɵmpd */](1073742336, a11y["a" /* A11yModule */], a11y["a" /* A11yModule */], []), core["Lb" /* ɵmpd */](1073742336, tooltip["e" /* MatTooltipModule */], tooltip["e" /* MatTooltipModule */], []), core["Lb" /* ɵmpd */](1073742336, paginator["d" /* MatPaginatorModule */], paginator["d" /* MatPaginatorModule */], []), core["Lb" /* ɵmpd */](1073742336, divider["b" /* MatDividerModule */], divider["b" /* MatDividerModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_core["p" /* MatLineModule */], esm2015_core["p" /* MatLineModule */], []), core["Lb" /* ɵmpd */](1073742336, list["e" /* MatListModule */], list["e" /* MatListModule */], []), core["Lb" /* ɵmpd */](1073742336, esm2015_dialog["k" /* MatDialogModule */], esm2015_dialog["k" /* MatDialogModule */], []), core["Lb" /* ɵmpd */](1073742336, sidenav["h" /* MatSidenavModule */], sidenav["h" /* MatSidenavModule */], []), core["Lb" /* ɵmpd */](1073742336, drag_drop["h" /* DragDropModule */], drag_drop["h" /* DragDropModule */], []), core["Lb" /* ɵmpd */](1073742336, app_confirm_module["a" /* AppConfirmModule */], app_confirm_module["a" /* AppConfirmModule */], []), core["Lb" /* ɵmpd */](1073742336, truncate_module["a" /* TruncateModule */], truncate_module["a" /* TruncateModule */], []), core["Lb" /* ɵmpd */](1073742336, helper_module["a" /* HelperModule */], helper_module["a" /* HelperModule */], []), core["Lb" /* ɵmpd */](1073742336, click_outside_module["a" /* ClickOutsideModule */], click_outside_module["a" /* ClickOutsideModule */], []), core["Lb" /* ɵmpd */](1073742336, grid_list["b" /* MatGridListModule */], grid_list["b" /* MatGridListModule */], []), core["Lb" /* ɵmpd */](1073742336, theme_picker_service_module["a" /* ThemePickerServiceModule */], theme_picker_service_module["a" /* ThemePickerServiceModule */], []), core["Lb" /* ɵmpd */](1073742336, theme_picker_module["a" /* ThemePickerModule */], theme_picker_module["a" /* ThemePickerModule */], []), core["Lb" /* ɵmpd */](1073742336, badge["b" /* MatBadgeModule */], badge["b" /* MatBadgeModule */], []), core["Lb" /* ɵmpd */](1073742336, date_fns_module["a" /* DateFnsModule */], date_fns_module["a" /* DateFnsModule */], []), core["Lb" /* ɵmpd */](512, ngxs_store["C" /* ɵn */], ngxs_store["C" /* ɵn */], [core["t" /* Injector */], ngxs_store["z" /* ɵk */], [3, ngxs_store["C" /* ɵn */]], ngxs_store["u" /* ɵc */], ngxs_store["D" /* ɵo */], ngxs_store["F" /* ɵq */], [2, ngxs_store_internals["a" /* INITIAL_STATE_TOKEN */]]]), core["Lb" /* ɵmpd */](1024, ngxs_store["w" /* ɵg */], function () { return [[notifications_state["a" /* NotificationsState */]]]; }, []), core["Lb" /* ɵmpd */](1073742336, ngxs_store["M" /* ɵx */], ngxs_store["M" /* ɵx */], [ngxs_store["j" /* Store */], ngxs_store["G" /* ɵr */], ngxs_store["C" /* ɵn */], [2, ngxs_store["w" /* ɵg */]], ngxs_store["L" /* ɵw */]]), core["Lb" /* ɵmpd */](1073742336, notifications_module["a" /* NotificationsModule */], notifications_module["a" /* NotificationsModule */], [notifications_handler["a" /* NotificationsHandler */]]), core["Lb" /* ɵmpd */](1073742336, toolbar_module["a" /* ToolbarModule */], toolbar_module["a" /* ToolbarModule */], []), core["Lb" /* ɵmpd */](1073742336, tabs["j" /* MatTabsModule */], tabs["j" /* MatTabsModule */], []), core["Lb" /* ɵmpd */](1073742336, quickpanel_module["a" /* QuickpanelModule */], quickpanel_module["a" /* QuickpanelModule */], []), core["Lb" /* ɵmpd */](1024, ngx_formly_core["a" /* FORMLY_CONFIG */], function () { return [{ wrappers: [{ name: "form-field", component: ngx_formly_material_form_field_FormlyWrapperFormField }] }, { types: [{ name: "input", component: ngx_formly_material_input_FormlyFieldInput, wrappers: ["form-field"] }] }, { types: [{ name: "textarea", component: ngx_formly_material_textarea_FormlyFieldTextArea, wrappers: ["form-field"] }] }, { types: [{ name: "radio", component: ngx_formly_material_radio_FormlyFieldRadio, wrappers: ["form-field"] }] }, { types: [{ name: "checkbox", component: ngx_formly_material_checkbox_FormlyFieldCheckbox, wrappers: ["form-field"] }] }, { types: [{ name: "multicheckbox", component: ngx_formly_material_multicheckbox_FormlyFieldMultiCheckbox, wrappers: ["form-field"] }] }, { types: [{ name: "select", component: ngx_formly_material_select_FormlyFieldSelect, wrappers: ["form-field"] }] }, {}]; }, []), core["Lb" /* ɵmpd */](1073742336, ngx_formly_core["i" /* FormlyModule */], ngx_formly_core["i" /* FormlyModule */], [ngx_formly_core["e" /* FormlyConfig */], [2, ngx_formly_core["a" /* FORMLY_CONFIG */]]]), core["Lb" /* ɵmpd */](1073742336, FormlyMatFormFieldModule, FormlyMatFormFieldModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatInputModule, FormlyMatInputModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatTextAreaModule, FormlyMatTextAreaModule, []), core["Lb" /* ɵmpd */](1073742336, esm2015_radio["d" /* MatRadioModule */], esm2015_radio["d" /* MatRadioModule */], []), core["Lb" /* ɵmpd */](1073742336, FormlySelectModule, FormlySelectModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatRadioModule, FormlyMatRadioModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatCheckboxModule, FormlyMatCheckboxModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatMultiCheckboxModule, FormlyMatMultiCheckboxModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMatSelectModule, FormlyMatSelectModule, []), core["Lb" /* ɵmpd */](1073742336, FormlyMaterialModule, FormlyMaterialModule, []), core["Lb" /* ɵmpd */](1073742336, AdminModule, AdminModule, []), core["Lb" /* ɵmpd */](256, flex_layout_esm2015_core["e" /* LAYOUT_CONFIG */], {}, []), core["Lb" /* ɵmpd */](1024, flex_layout_esm2015_core["a" /* BREAKPOINT */], function () { return [[]]; }, []), core["Lb" /* ɵmpd */](256, ngx_perfect_scrollbar_es5["a" /* PERFECT_SCROLLBAR_CONFIG */], shared_perfect_scrollbar_module["b" /* ɵ0 */], []), core["Lb" /* ɵmpd */](1024, router["n" /* ROUTES */], function () { return [[{ path: "", component: admin_layout_component_AdminLayoutComponent, canActivate: [admin_guard["a" /* AdminGuard */]], data: ɵ0, children: [{ path: "", component: OverviewComponent, data: ɵ1 }, { path: "subscriptions", component: subscriptions_component_SubscriptionsComponent, data: ɵ2, children: [{ path: ":id", component: subscription_detail_component_SubscriptionDetailComponent, data: ɵ3 }] }, { path: "notifications", component: notifications_component_NotificationsComponent, data: ɵ4, children: [{ path: ":id", component: notification_detail_component_NotificationDetailComponent, data: ɵ5 }] }] }]]; }, [])]); });




/***/ })

}]);
//# sourceMappingURL=18-es2015.d7128537da0ecc320237.js.map