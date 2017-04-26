webpackJsonp([2],{

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
    HomeService.prototype.homeInit = function () {
        var cities = [];
        this.http.get("/api/cities")
            .map(function (result) { return result.json(); })
            .flatMap(function (result) { return result.results; })
            .subscribe(function (result) {
            cities.push(result);
        }, function (error) {
            console.error(error);
        });
        return cities;
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HomeService);
exports.HomeService = HomeService;


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
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = "<h4> Cities: </h4><br>\r\n<div class=\"container\">\r\nworks?\r\n  <!--<h2>{{ 'TITLE' | translate:param }}<hr></h2>-->\r\n\r\n    <!--<div *ngFor=\"let city of cities; let i = index\" class=\"panel-info\">-->\r\n      <!--<div class=\"panel-heading\">-->\r\n        <!--<img src=\"{{city.pictureUrl}}\" alt=\"{{city.city}}\">-->\r\n        <!--<span>{{city.message}}</span>-->\r\n        <!--<span>{{city.prix}}</span>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n</div>\r\n"

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(84);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

},[66]);
//# sourceMappingURL=home.js.map