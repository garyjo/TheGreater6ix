webpackJsonp([1,2],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"jumbotron text-center\">\n      <h1>404 : PAGE NOT FOUND</h1>\n      <p>You seem lost child. why don't you come <a routerLink=\"/\">home</a>.</p>\n    </div>\n  "
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var SigninComponent = (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    core_1.Component({
        selector: 'app-signin',
        template: __webpack_require__(350),
        styles: [__webpack_require__(609)]
    }),
    __metadata("design:paramtypes", [])
], SigninComponent);
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                }
                else {
                    var content = node.textContent.trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = node.textContent;
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            var interpolateParams = this.translateParams;
            if (node.lastKey === key && this.lastParams === interpolateParams) {
                return;
            }
            this.lastParams = interpolateParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = node.textContent;
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                node.textContent = _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue);
            };
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, interpolateParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, interpolateParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    TranslateDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[translate],[ng2-translate]'
                },] },
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["d" /* TranslateService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    TranslateDirective.propDecorators = {
        'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TranslateDirective;
}());


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    TranslatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'translate',
                    pure: false // required to update the value when the promise is resolved
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["d" /* TranslateService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return TranslatePipe;
}());


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var home_service_1 = __webpack_require__(33);
var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        // constructor(){
        this.cities = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.cities = this.homeService.homeInit();
        // console.log("ngOnInit");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        styles: [__webpack_require__(98)],
        template: __webpack_require__(87),
    }),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return REQUIRED_VALIDATOR; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.0.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */
var AbstractControlDirective = (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('unimplemented'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.statusChanges : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valueChanges : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} value
     * @return {?}
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 */
var ControlContainer = (function (_super) {
    __extends(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (undefined && undefined.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {\@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * {\@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
 * \@stable
 */
var NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {\@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {\@link NG_VALIDATORS} for more details.
 *
 * \@stable
 */
var NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */
var Validators = (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    Validators.email = function (control) {
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var /** @type {?} */ regex;
        var /** @type {?} */ regexStr;
        if (typeof pattern === 'string') {
            regexStr = "^" + pattern + "$";
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    Validators.nullValidator = function (c) { return null; };
    /**
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps.
     * @param {?} validators
     * @return {?}
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__["forkJoin"])(observables), _mergeErrors);
        };
    };
    return Validators;
}());
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    var /** @type {?} */ obs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(r) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
    if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? __assign({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a {\@link ControlValueAccessor} for form controls.
 *
 * See {\@link DefaultValueAccessor} for how to implement one.
 * \@stable
 */
var NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */
var CheckboxControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return CheckboxControlValueAccessor;
}());
CheckboxControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
CheckboxControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    var /** @type {?} */ userAgent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["ɵgetDOM"])() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * \@experimental
 */
var COMPOSITION_BUFFER_MODE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
var DefaultValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    return DefaultValueAccessor;
}());
DefaultValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '_handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '_compositionStart()',
                    '(compositionend)': '_compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
DefaultValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [COMPOSITION_BUFFER_MODE,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return NumberValueAccessor;
}());
NumberValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */
var NgControl = (function (_super) {
    __extends(NgControl, _super);
    function NgControl() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * \@internal
         */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /**
         * \@internal
         */
        _this._rawValidators = [];
        /**
         * \@internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} newValue
     * @return {?}
     */
    NgControl.prototype.viewToModelUpdate = function (newValue) { };
    return NgControl;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    return RadioControlRegistry;
}());
RadioControlRegistry.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RadioControlRegistry.ctorParameters = function () { return []; };
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */
var RadioControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    return RadioControlValueAccessor;
}());
RadioControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RadioControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: RadioControlRegistry, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return RangeValueAccessor;
}());
RangeValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var SelectControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var /** @type {?} */ id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var /** @type {?} */ valueString = _buildValueString(id, value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = valueString;
            fn(_this._getOptionValue(valueString));
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @return {?}
     */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    return SelectControlValueAccessor;
}());
SelectControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */
var NgSelectOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @return {?}
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectOption;
}());
NgSelectOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */
var SelectMultipleControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var /** @type {?} */ optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var /** @type {?} */ selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var /** @type {?} */ options = _.selectedOptions;
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            else {
                var /** @type {?} */ options = (_.options);
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    if (opt.selected) {
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var /** @type {?} */ id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id)._value, value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    return SelectMultipleControlValueAccessor;
}());
SelectMultipleControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectMultipleControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectMultipleControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @return {?}
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectMultipleOption;
}());
NgSelectMultipleOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectMultipleOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return parent.path.concat([name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    // view -> model
    dir.valueAccessor.registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.markAsDirty();
        control.setValue(newValue, { emitModelToViewChange: false });
    });
    // touched
    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */ messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var /** @type {?} */ change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    var /** @type {?} */ defaultAccessor;
    var /** @type {?} */ builtinAccessor;
    var /** @type {?} */ customAccessor;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */
var AbstractFormGroupDirective = (function (_super) {
    __extends(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return composeAsyncValidators(this._asyncValidators); },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @return {?}
     */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = (function () {
    /**
     * @param {?} cd
     */
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatus = (function (_super) {
    __extends(NgControlStatus, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatus;
}(AbstractControlStatus));
NgControlStatus.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
];
/**
 * @nocollapse
 */
NgControlStatus.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatusGroup = (function (_super) {
    __extends(NgControlStatusGroup, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatusGroup;
}(AbstractControlStatus));
NgControlStatusGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] },
];
/**
 * @nocollapse
 */
NgControlStatusGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((path)).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((path)).reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at(/** @type {?} */ (name)) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?} validator
 * @return {?}
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator;
}
/**
 * @param {?} asyncValidator
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */
var AbstractControl = (function () {
    /**
     * @param {?} validator
     * @param {?} asyncValidator
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = function () { };
        this._pristine = true;
        this._touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "value", {
        /**
         * The value of the control.
         * @return {?}
         */
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         * @return {?}
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "status", {
        /**
         * The validation status of the control. There are four possible
         * validation statuses:
         *
         * * **VALID**:  control has passed all validation checks
         * * **INVALID**: control has failed at least one validation check
         * * **PENDING**: control is in the midst of conducting a validation check
         * * **DISABLED**: control is exempt from validation checks
         *
         * These statuses are mutually exclusive, so a control cannot be
         * both valid AND invalid or invalid AND disabled.
         * @return {?}
         */
        get: function () { return this._status; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        get: function () { return this._status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        get: function () { return this._status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        get: function () { return this._status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        get: function () { return this._status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        get: function () { return this._status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */
        get: function () { return this._errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return this._pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return !this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */
        get: function () { return this._valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */
        get: function () { return this._statusChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = true;
        if (this._parent && !onlySelf) {
            this._parent.markAsTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = false;
        if (this._parent && !onlySelf) {
            this._parent.markAsDirty({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = true;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pending`.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPending = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._status = PENDING;
        if (this._parent && !onlySelf) {
            this._parent.markAsPending({ onlySelf: onlySelf });
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.disable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = DISABLED;
        this._errors = null;
        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
        this._updateValue();
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        this._updateAncestors(onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.enable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = VALID;
        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        this._updateAncestors(onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    /**
     * @param {?} onlySelf
     * @return {?}
     */
    AbstractControl.prototype._updateAncestors = function (onlySelf) {
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity();
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.patchValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status === VALID || this._status === PENDING) {
                this._runAsyncValidator(emitEvent);
            }
        }
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTreeValidity = function (_a) {
        var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
    /**
     * @return {?}
     */
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this._status = PENDING;
            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} __1
     * @return {?}
     */
    AbstractControl.prototype.setErrors = function (errors, _a) {
        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
        this._errors = errors;
        this._updateControlsErrors(emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        var /** @type {?} */ control = path ? this.get(path) : this;
        return control && control._errors ? control._errors[errorCode] : null;
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.hasError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return !!this.getError(errorCode, path);
    };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this._status = this._calculateStatus();
        if (emitEvent) {
            this._statusChanges.emit(this._status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = function () {
        this._valueChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._statusChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this._errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} cb
     * @return {?}
     */
    AbstractControl.prototype._forEachChild = function (cb) { };
    /**
     * \@internal
     * @abstract
     * @param {?} condition
     * @return {?}
     */
    AbstractControl.prototype._anyControls = function (condition) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updatePristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = !this._anyControlsDirty();
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = this._anyControlsTouched();
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    return AbstractControl;
}());
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormControl = (function (_super) {
    __extends(FormControl, _super);
    /**
     * @param {?=} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormControl(formState, validator, asyncValidator) {
        if (formState === void 0) { formState = null; }
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
        /**
         * \@internal
         */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormControl.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
        this._value = value;
        if (this._onChange.length && emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl.setValue} at this level.
     * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
     * where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} __1
     * @return {?}
     */
    FormControl.prototype.reset = function (formState, _a) {
        if (formState === void 0) { formState = null; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._applyFormState(formState);
        this.markAsPristine({ onlySelf: onlySelf });
        this.markAsUntouched({ onlySelf: onlySelf });
        this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /**
     * @param {?} formState
     * @return {?}
     */
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this._value = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this._value = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormGroup = (function (_super) {
    __extends(FormGroup, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormGroup(controls, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, validator, asyncValidator) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {\@link FormGroup.addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for
     * existence in the group only, use {\@link AbstractControl.get} instead.
     * @param {?} controlName
     * @return {?}
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.patchValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
            }
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.reset = function (value, _a) {
        if (value === void 0) { value = {}; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        this._updatePristine({ onlySelf: onlySelf });
        this._updateTouched({ onlySelf: onlySelf });
    };
    /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var /** @type {?} */ res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var /** @type {?} */ res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
            var controlName = _a[_i];
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormArray = (function (_super) {
    __extends(FormArray, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormArray(controls, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, validator, asyncValidator) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         * @return {?}
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.patchValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
            }
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.reset = function (value, _a) {
        if (value === void 0) { value = []; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        this._updatePristine({ onlySelf: onlySelf });
        this._updateTouched({ onlySelf: onlySelf });
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : ((control)).getRawValue();
        });
    };
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
            .map(function (control) { return control.value; });
    };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgForm = (function (_super) {
    __extends(NgForm, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._submitted = false;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    Object.defineProperty(NgForm.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        /**
         * @return {?}
         */
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            dir._control = (container.registerControl(dir.name, dir.control));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            var /** @type {?} */ group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ ctrl = (_this.form.get(dir.path));
            ctrl.setValue(value);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgForm.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? (this.form.get(path)) : this.form;
    };
    return NgForm;
}(ControlContainer));
NgForm.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
NgForm.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = (function () {
    function TemplateDrivenErrors() {
    }
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */
var NgModelGroup = (function (_super) {
    __extends(NgModelGroup, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));
NgModelGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
];
/**
 * @nocollapse
 */
NgModelGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
NgModelGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelGroup',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgModel = (function (_super) {
    __extends(NgModel, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        /**
         * \@internal
         */
        _this._control = new FormControl();
        /**
         * \@internal
         */
        _this._registered = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpControl = function () {
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    /**
     * @return {?}
     */
    NgModel.prototype._isStandalone = function () {
        return !this._parent || (this.options && this.options.standalone);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this._control, this);
        this._control.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    return NgModel;
}(NgControl));
NgModel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] },
];
/**
 * @nocollapse
 */
NgModel.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
NgModel.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelOptions',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    return ReactiveErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl.setValue} or
 * {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */
var FormControlDirective = (function (_super) {
    __extends(FormControlDirective, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    return FormControlDirective;
}(NgControl));
FormControlDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
];
/**
 * @nocollapse
 */
FormControlDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControl',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
 * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
 * re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormGroupDirective = (function (_super) {
    __extends(FormGroupDirective, _super);
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._submitted = false;
        _this.directives = [];
        _this.form = null;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var /** @type {?} */ ctrl = (this.form.get(dir.path));
        ctrl.setValue(value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
            if (dir._control !== newCtrl) {
                cleanUpControl(dir._control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir._control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateValidators = function () {
        var /** @type {?} */ sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    return FormGroupDirective;
}(ControlContainer));
FormGroupDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
FormGroupDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroup',] },],
    'ngSubmit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormGroupName = (function (_super) {
    __extends(FormGroupName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
FormGroupName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
];
/**
 * @nocollapse
 */
FormGroupName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroupName',] },],
};
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
 * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
 * status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
 * calling its {\@link FormArray.push} method.
 *  Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormArrayName = (function (_super) {
    __extends(FormArrayName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? (this._parent.formDirective) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return composeAsyncValidators(this._asyncValidators); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    return FormArrayName;
}(ControlContainer));
FormArrayName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
];
/**
 * @nocollapse
 */
FormArrayName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormArrayName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formArrayName',] },],
};
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlName; })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl.get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormControlName = (function (_super) {
    __extends(FormControlName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this._added = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this._control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    return FormControlName;
}(NgControl));
FormControlName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
];
/**
 * @nocollapse
 */
FormControlName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControlName',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */
var RequiredValidator = (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () { return this._required; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    RequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.required(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return RequiredValidator;
}());
RequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
RequiredValidator.ctorParameters = function () { return []; };
RequiredValidator.propDecorators = {
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */
var CheckboxRequiredValidator = (function (_super) {
    __extends(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CheckboxRequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    return CheckboxRequiredValidator;
}(RequiredValidator));
CheckboxRequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
CheckboxRequiredValidator.ctorParameters = function () { return []; };
/**
 * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = function () { return []; };
EmailValidator.propDecorators = {
    'email': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */
var MinLengthValidator = (function () {
    function MinLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinLengthValidator.prototype.validate = function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    return MinLengthValidator;
}());
MinLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MinLengthValidator.ctorParameters = function () { return []; };
MinLengthValidator.propDecorators = {
    'minlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */
var MaxLengthValidator = (function () {
    function MaxLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxLengthValidator.prototype.validate = function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    return MaxLengthValidator;
}());
MaxLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MaxLengthValidator.ctorParameters = function () { return []; };
MaxLengthValidator.propDecorators = {
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */
var PatternValidator = (function () {
    function PatternValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
    /**
     * @param {?} fn
     * @return {?}
     */
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    return PatternValidator;
}());
PatternValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] },
];
/**
 * @nocollapse
 */
PatternValidator.ctorParameters = function () { return []; };
PatternValidator.propDecorators = {
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */
var FormBuilder = (function () {
    function FormBuilder() {
    }
    /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var /** @type {?} */ controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var /** @type {?} */ value = controlConfig[0];
            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    return FormBuilder;
}());
FormBuilder.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
FormBuilder.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.0.1');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */
var NgNoValidate = (function () {
    function NgNoValidate() {
    }
    return NgNoValidate;
}());
NgNoValidate.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] },
];
/**
 * @nocollapse
 */
NgNoValidate.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = (function () {
    function InternalFormsSharedModule() {
    }
    return InternalFormsSharedModule;
}());
InternalFormsSharedModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] },
];
/**
 * @nocollapse
 */
InternalFormsSharedModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 * \@stable
 */
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
FormsModule.ctorParameters = function () { return []; };
/**
 * The ng module for reactive forms.
 * \@stable
 */
var ReactiveFormsModule = (function () {
    function ReactiveFormsModule() {
    }
    return ReactiveFormsModule;
}());
ReactiveFormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
ReactiveFormsModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link FormGroup} that
 * consists of {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl}
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the forms package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=forms.es5.js.map


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        styles: [__webpack_require__(608)],
        template: __webpack_require__(348)
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(47);
var home_component_1 = __webpack_require__(27);
var contact_component_1 = __webpack_require__(99);
var not_found_component_1 = __webpack_require__(100);
var signin_component_1 = __webpack_require__(101);
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'sign',
        component: signin_component_1.SigninComponent
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('i am checking to see if you are logged in');
        return true;
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    core_1.Injectable()
], CanDeactivateGuard);
exports.CanDeactivateGuard = CanDeactivateGuard;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(230);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateStaticLoader", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DefaultTranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a"]; });
/* harmony export (immutable) */ __webpack_exports__["translateLoaderFactory"] = translateLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });










function translateLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["c" /* TranslateStaticLoader */](http);
}
var TranslateModule = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["b" /* TranslateLoader */],
            useFactory: translateLoaderFactory,
            deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]]
        }; }
        return {
            ngModule: TranslateModule,
            providers: [
                providedLoader,
                __WEBPACK_IMPORTED_MODULE_4__src_translate_service__["d" /* TranslateService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_translate_parser__["b" /* DefaultTranslateParser */] }
            ]
        };
    };
    TranslateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__["a" /* TranslatePipe */],
                        __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                        __WEBPACK_IMPORTED_MODULE_2__src_translate_pipe__["a" /* TranslatePipe */],
                        __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                    ]
                },] },
    ];
    /** @nocollapse */
    TranslateModule.ctorParameters = function () { return []; };
    return TranslateModule;
}());


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var http_1 = __webpack_require__(29);
__webpack_require__(65);
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.cities = [];
    }
    // homeInit():Array<any>{
    HomeService.prototype.homeInit = function () {
        var _this = this;
        this.http.get("/api/cities")
            .map(function (result) { return result.json(); })
            .subscribe(function (result) {
            console.log(result);
            _this.cities.push(result);
        }, function (error) {
            console.error(error);
        });
        return this.cities;
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HomeService);
exports.HomeService = HomeService;


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".SixTitle {\r\n  color:#4169e1;\r\n  text-shadow: 0px 0px 20px #6495ed;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "body{\r\n\r\n  background-image: linear-gradient(#79a06d, #79a06d);\r\n}\r\n\r\n#box{\r\n  border: 1px solid rgb(200, 200, 200);\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px 2px;\r\n  background: rgba(200, 200, 200, 0.1);\r\n  border-radius: 4px;\r\n  top:50px;\r\n}\r\n\r\nh2{\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\n.Title{\r\n  color:#4169e1;\r\n  text-shadow: 0px 0px 20px #6495ed;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/\" routerLinkActive=\"active\"\r\n        [routerLinkActiveOptions]=\"{ exact: true }\" class=\"navbar-brand\">\r\n        <div class=\"SixTitle\">\r\n          The Greater 6ix\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\">{{ 'HOME' | translate:param }} <span class=\"glyphicon glyphicon-home\"></span> </a></li>\r\n      <li><a routerLink=\"/contact\" routerLinkActive=\"active\" >{{ 'CONTACT' | translate:param }} <span class=\"glyphicon glyphicon-earphone\" > </span></a></li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li><a routerLink=\"/sign\" routerLinkActive=\"active\" >{{ 'SIGN' | translate:param }} <span class=\" glyphicon glyphicon-user\"></span></a></li>\r\n    </ul>\r\n\r\n  </div>\r\n  </nav>\r\n</header>\r\n\r\n<main>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</main>\r\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"jumbotron\">\n    <h2 class=\"blue\" style=\"color:#2196F3;\">Contactez nous</h2>\n    <h5 class=\"blue\">Nous voulons de la rétroaction!</h5>\n  </div>\n</div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"well well-sm\">\n                <form>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">\n                                Nom</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" required=\"required\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"email\">\n                                Adresse Courriel</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span>\n                                </span>\n                                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" required=\"required\" /></div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"subject\">\n                                Sujet</label>\n                            <select id=\"subject\" name=\"subject\" class=\"form-control\" required=\"required\">\n                                <option value=\"na\" selected=\"\">Choisir un:</option>\n                                <option value=\"service\">Questions sur l'application</option>\n                                <option value=\"suggestions\">Suggestion d'amelioration de performance</option>\n                                <option value=\"product\">Acheter une image</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">\n                                Message</label>\n                            <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\"\n                                placeholder=\"Message\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"btnContactUs\">\n                            Envoyer</button>\n                    </div>\n                </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <form>\n            <legend><span class=\"glyphicon glyphicon-globe\"></span> Notre Bureau</legend>\n            <address>\n                <strong>College Boreal</strong><br>\n                1 Yonge Street<br>\n                Toronto, ON M5E 1E5<br>\n                <abbr title=\"Phone\">\n                    Tel:</abbr>\n                (416) 289-5130\n            </address>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row-fluid\" >\n\n\n    <div class=\"col-md-offset-4 col-md-4\" id=\"box\">\n      <h2 class=\"Title\">Login</h2>\n\n      <hr>\n\n\n      <form class=\"form-horizontal\" action=\" \" method=\"\" id=\"contact_form\">\n        <fieldset>\n          <!-- Form Name -->\n\n\n          <!-- Text input-->\n\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input name=\"first_name\" placeholder=\"Username\" [(ngModel)]=\"_name\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                <input name=\"email\" placeholder=\"Password\" [(ngModel)]=\"_name\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n\n            <div class=\"col-md-12\">\n              <button type=\"submit\" class=\"btn btn-md btn-danger pull-right\">Login </button>\n            </div>\n          </div>\n\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- SEPARATE THESE TWO SECTIONS -->\n\n\n<!--<div class=\"container\">-->\n  <!--<div class=\"form-group\">-->\n    <!--<div><h3>Name</h3></div>-->\n    <!--<input type=\"text\" [(ngModel)]=\"_name\" class=\"form-control\">-->\n  <!--</div>-->\n\n  <!--<div class=\"form-group\">-->\n    <!--<div><h3> Password </h3></div>-->\n    <!--<input type=\"number\" [(ngModel)]=\"_age\" class=\"form-control\">-->\n  <!--</div>-->\n\n  <!--<div class=\"form-group text-center\">-->\n    <!--<button (click)=\"formFill()\" class=\"btn btn-info\">Validate</button>-->\n  <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__translate_parser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TranslateStaticLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TranslateService; });










var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
var TranslateStaticLoader = (function () {
    function TranslateStaticLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = "i18n"; }
        if (suffix === void 0) { suffix = ".json"; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    TranslateStaticLoader.prototype.getTranslation = function (lang) {
        return this.http.get(this.prefix + "/" + lang + this.suffix)
            .map(function (res) { return res.json(); });
    };
    return TranslateStaticLoader;
}());
var TranslateService = (function () {
    /**
     *
     * @param currentLoader An instance of the loader currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     */
    function TranslateService(currentLoader, parser, missingTranslationHandler) {
        this.currentLoader = currentLoader;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.translations = {};
        this.langs = [];
    }
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            pending = this.getTranslation(lang);
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = this.currentLoader.getTranslation(lang).share();
        this.pending.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = undefined;
        }, function (err) {
            _this.pending = undefined;
        });
        return this.pending;
    };
    /**
     * Manually sets an object of translations for a given language
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        if (shouldMerge && this.translations[lang]) {
            Object.assign(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (!res && this.missingTranslationHandler) {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util__["a" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.pending.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util__["a" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = value;
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    TranslateService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: TranslateLoader, },
        { type: __WEBPACK_IMPORTED_MODULE_8__translate_parser__["a" /* TranslateParser */], },
        { type: MissingTranslationHandler, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    ]; };
    return TranslateService;
}());


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equals;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDefined;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(341);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(342);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var platform_browser_1 = __webpack_require__(46);
var forms_1 = __webpack_require__(277);
var app_routing_1 = __webpack_require__(282);
var app_component_1 = __webpack_require__(281);
var contact_component_1 = __webpack_require__(99);
var not_found_component_1 = __webpack_require__(100);
var auth_guard_service_1 = __webpack_require__(283);
var can_deactivate_guard_service_1 = __webpack_require__(284);
var signin_component_1 = __webpack_require__(101);
var http_1 = __webpack_require__(29);
var ng2_translate_1 = __webpack_require__(285);
var home_module_1 = __webpack_require__(66);
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = (function () {
    function AppModule(translate) {
        this.param = { value: 'world' };
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('fr');
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.appRouting,
            home_module_1.HomeModule,
            http_1.HttpModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [http_1.Http]
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            contact_component_1.ContactComponent,
            not_found_component_1.NotFoundComponent,
            signin_component_1.SigninComponent,
            contact_component_1.ContactComponent,
        ],
        providers: [
            auth_guard_service_1.AuthGuard,
            can_deactivate_guard_service_1.CanDeactivateGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(47);
var home_component_1 = __webpack_require__(27);
var HomeRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
exports.HomeRouting = router_1.RouterModule.forChild(HomeRoutes);


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var common_1 = __webpack_require__(28);
var home_routing_1 = __webpack_require__(64);
var home_component_1 = __webpack_require__(27);
var home_service_1 = __webpack_require__(33);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_routing_1.HomeRouting
        ],
        declarations: [
            home_component_1.HomeComponent
        ],
        providers: [
            home_service_1.HomeService
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "\r\ndiv.gallery {\r\n  margin: 5px;\r\n  border: 1px solid #ccc;\r\n  float: left;\r\n  width: 180px;\r\n}\r\n\r\ndiv.gallery:hover {\r\n  border: 1px solid #777;\r\n}\r\n\r\ndiv.gallery img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\ndiv.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\nh4.Title{\r\n  color:#4169e1;\r\n  text-shadow: 0px 0px 20px #6495ed;\r\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultTranslateParser; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
var DefaultTranslateParser = (function (_super) {
    __extends(DefaultTranslateParser, _super);
    function DefaultTranslateParser() {
        _super.apply(this, arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    DefaultTranslateParser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(r) ? r : substring;
        });
    };
    DefaultTranslateParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    DefaultTranslateParser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DefaultTranslateParser.ctorParameters = function () { return []; };
    return DefaultTranslateParser;
}(TranslateParser));


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"jumbotron\">\r\n      <h2 class=\"blue\" style=\"color:#2196F3;\">Liste des villes </h2>\r\n      <h5 class=\"blue\">Les belles villes du Greater Toronto Area</h5>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div  *ngFor=\"let city of cities[0]\" class=\"panel-info\">\r\n    <div class=\"gallery\">\r\n      <!--<a target=\"_blank\" href=\"img_fjords.jpg\">-->\r\n        <img src=\"{{city.pictureUrl}}\" width=\"400\" height=\"350\">\r\n      <!--</a>-->\r\n      <div class=\"desc\">{{city.message}}</div>\r\n      <div class=\"desc\">$ {{city.prix}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--<h2>{{ 'TITLE' | translate:param }}<hr></h2>-->\r\n\r\n<!--<div *ngFor=\"let city of cities; let i = index\" class=\"panel-info\">-->\r\n<!--<div class=\"panel-heading\">-->\r\n<!--<img src=\"{{city.pictureUrl}}\" alt=\"{{city.city}}\">-->\r\n<!--<span>{{city.message}}</span>-->\r\n<!--<span>{{city.prix}}</span>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(84);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(6);
var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact-page',
        template: __webpack_require__(349)
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;


/***/ })

},[610]);
//# sourceMappingURL=app.js.map