webpackJsonp([4],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var usersPromise = Promise.resolve([
    {
        id: 1,
        name: 'Gary',
        username: 'garyuppiah',
        avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVkfbHgVyXw7tVigsl2Gq9-knPZiBcmSc7Z7qQ5W600U7aoAwe'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    // get all users
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    // find a specific user
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
        // let user = usersPromise.then(users => {
        //   return users.find(user => {
        //     return user.username === username;
        //   });
        // });
        // return user;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ 30:
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
var core_1 = __webpack_require__(2);
var user_service_1 = __webpack_require__(10);
var AboutUsersResolve = (function () {
    function AboutUsersResolve(service) {
        this.service = service;
    }
    AboutUsersResolve.prototype.resolve = function (route) {
        return this.service.getUsers().then(function (users) { return users; });
    };
    return AboutUsersResolve;
}());
AboutUsersResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AboutUsersResolve);
exports.AboutUsersResolve = AboutUsersResolve;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AboutSectionComponent = (function () {
    function AboutSectionComponent() {
    }
    return AboutSectionComponent;
}());
AboutSectionComponent = __decorate([
    core_1.Component({
        template: "\n    <h2 class=\"text-center\">About Section</h2>\n    \n    <router-outlet></router-outlet>\n  "
    })
], AboutSectionComponent);
exports.AboutSectionComponent = AboutSectionComponent;


/***/ }),

/***/ 32:
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
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(7);
var user_service_1 = __webpack_require__(10);
var AboutUserResolve = (function () {
    function AboutUserResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    AboutUserResolve.prototype.resolve = function (route) {
        var _this = this;
        var username = route.params['username'];
        return this.service.getUser(username).then(function (user) {
            if (user) {
                return user;
            }
            else {
                // navigate the user back to the about page
                _this.router.navigate(['/about']);
                return false;
            }
        });
    };
    return AboutUserResolve;
}());
AboutUserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], AboutUserResolve);
exports.AboutUserResolve = AboutUserResolve;


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
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(7);
var AboutUserComponent = (function () {
    function AboutUserComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) { return _this.user = data.user; });
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        styles: ["\n    img     {\n      max-width: 300px;\n      margin: 20px auto;\n    }\n  "],
        template: "\n    <a (click)=\"goBack()\" class=\"btn btn-sm btn-info\">Go Back</a>\n    <div class=\"jumbotron text-center\" *ngIf=\"user\">\n      <h1>{{ user.name }} ({{ user.username }})</h1>\n\n      <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;


/***/ }),

/***/ 34:
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
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(7);
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) { return _this.users = data.users; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        styles: ["\n    .profile-card   {\n      background: #f3f3f3;\n      border-radius: 4px;\n      padding: 30px;\n      text-align: center;\n    }\n    .profile-card img  {\n      max-width: 50%;\n      margin: 15px auto;\n    }\n  "],
        template: "\n    <div class=\"row\">\n  \n      <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n\n        <div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n          <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\n          <h2>{{ user.name }}</h2>\n          \n          <p><a href=\"https://twitter.com/{{ user.username }}\">\n            {{ user.username }}\n          </a></p>\n        </div>\n\n      </div>\n\n    </div>\n"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], AboutComponent);
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(18);
var about_component_1 = __webpack_require__(34);
var about_user_component_1 = __webpack_require__(33);
var about_section_component_1 = __webpack_require__(31);
var user_service_1 = __webpack_require__(10);
var about_routing_1 = __webpack_require__(48);
var about_resolve_service_1 = __webpack_require__(30);
var about_user_resolve_service_1 = __webpack_require__(32);
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            about_routing_1.aboutRouting
        ],
        declarations: [
            about_component_1.AboutComponent,
            about_user_component_1.AboutUserComponent,
            about_section_component_1.AboutSectionComponent
        ],
        providers: [
            user_service_1.UserService,
            about_resolve_service_1.AboutUsersResolve,
            about_user_resolve_service_1.AboutUserResolve
        ]
    })
], AboutModule);
exports.AboutModule = AboutModule;


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var about_component_1 = __webpack_require__(34);
var about_user_component_1 = __webpack_require__(33);
var about_section_component_1 = __webpack_require__(31);
var about_resolve_service_1 = __webpack_require__(30);
var about_user_resolve_service_1 = __webpack_require__(32);
var aboutRoutes = [
    {
        path: '',
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: '',
                component: about_component_1.AboutComponent,
                resolve: {
                    users: about_resolve_service_1.AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: about_user_component_1.AboutUserComponent,
                resolve: {
                    user: about_user_resolve_service_1.AboutUserResolve
                }
            }
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);


/***/ })

},[39]);
//# sourceMappingURL=about.js.map