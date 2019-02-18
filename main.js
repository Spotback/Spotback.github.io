(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/popular/popular.component */ "./src/app/components/popular/popular.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pantry/pantry.component */ "./src/app/components/pantry/pantry.component.ts");
/* harmony import */ var _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/feature-results/feature-results.component */ "./src/app/components/feature-results/feature-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'popular', component: _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_5__["PopularComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'userInfo', component: _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"] },
    { path: 'categories', component: _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_9__["FoodCategoryComponent"] },
    { path: 'pantry', component: _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_10__["PantryComponent"] },
    { path: 'feature', component: _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_11__["FeatureResultsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-menu></app-menu>\r\n<h1 class=\"site-heading text-center text-white d-none d-lg-block\">\r\n        <span class=\"site-heading-upper text-dark mb-3\">A community based parking application</span>\r\n        <span class=\"site-heading-lower text-dark\"><img src=\"./../../../assets/images/Spotbacklogo.png\" width=\"20%\"></span>\r\n      </h1>\r\n<!-- <router-outlet class=\"background-image\"></router-outlet> -->\r\n<div >\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RecipeApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popular/popular.component */ "./src/app/components/popular/popular.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/results-modal/results-modal.component */ "./src/app/components/results-modal/results-modal.component.ts");
/* harmony import */ var _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login-register/login-register.component */ "./src/app/components/login-register/login-register.component.ts");
/* harmony import */ var _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pantry/pantry.component */ "./src/app/components/pantry/pantry.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/feature-results/feature-results.component */ "./src/app/components/feature-results/feature-results.component.ts");
/* harmony import */ var _components_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/feature-instructions/feature-instructions.component */ "./src/app/components/feature-instructions/feature-instructions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { ScrollSpyModule } from 'ngx-scrollspy';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_9__["PopularComponent"],
                _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__["SearchResultsComponent"],
                _components_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_16__["ResultsModalComponent"],
                _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_17__["LoginRegisterComponent"],
                _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_18__["FoodCategoryComponent"],
                _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_19__["PantryComponent"],
                _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_21__["FeatureResultsComponent"],
                _components_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_22__["FeatureInstructionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"]
                // ScrollSpyModule.forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_18__["FoodCategoryComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__["SearchResultsComponent"],
                _components_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_16__["ResultsModalComponent"],
                _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_17__["LoginRegisterComponent"],
                _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_21__["FeatureResultsComponent"],
                _components_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_22__["FeatureInstructionsComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section about-heading\">\r\n  <div class=\"container\">\r\n      <img class=\"img-fluid rounded about-heading-img mb-3 mb-lg-0\" src=\"../../../assets/images/lookingPark.jpg\" alt=\"\">\r\n      <div class=\"about-heading-content\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-9 col-lg-10 mx-auto\">\r\n            <div class=\"bg-dark rounded p-5\">\r\n              <h2 class=\"section-heading mb-4\">\r\n                <span class=\"section-heading-upper\">Anyone can find a spot, no matter where you are, or where you’re going</span>\r\n                <span class=\"section-heading-lower\">About Our Application</span>\r\n              </h2>\r\n              <p class=\"text-light\">\r\n                  We are Spotback and we offer on-demand parking services for a flat rate fee to those that don’t want \r\n                  to wait for a spot or drive around until you find one, only to find yourself way too far \r\n                  from your destination. With Spotback you choose your destination &amp; we will match \r\n                  you with a user who's near your destination, about to leave their spot &amp; willing to hold \r\n                  the parking space until you arrive. You pay a small fee for the users time to hold the spot &amp;\r\n                  in return you get a prime parking space.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n<section class=\"page-section\">\r\n    <div class=\"container\">\r\n      <div class=\"product-item\">\r\n        <div class=\"product-item-title d-flex\">\r\n            <!-- <div class=\"about-heading-content\"> -->\r\n          <div class=\"bg-dark p-5 d-flex ml-auto rounded\">\r\n            <h2 class=\"section-heading mb-0\">\r\n              <span class=\"section-heading-upper\">Driving somewhere?</span>\r\n              <span class=\"section-heading-lower\">Where will you park?</span>\r\n            </h2>\r\n          </div>\r\n          \r\n        </div>\r\n        <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/parking_meters.jpg\" alt=\"\">\r\n        <div class=\"product-item-description d-flex mr-auto\">\r\n          <div class=\"bg-dark p-5 rounded\">\r\n            <p class=\"mb-0 text-light\">\r\n              When you get close to your destination simply go on your spotback app, pick your destination, \r\n              and let us find you the perfect spot.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"page-section\">\r\n    <div class=\"container\">\r\n      <div class=\"product-item\">\r\n        <div class=\"product-item-title d-flex\">\r\n          <div class=\"bg-dark p-5 d-flex ml-auto rounded\">\r\n            <h2 class=\"section-heading mb-0\">\r\n              <span class=\"section-heading-upper\">Ready to leave?</span>\r\n              <span class=\"section-heading-lower\">Just wait and get paid!</span>\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/cityPark1.jpg\" alt=\"\">\r\n        <div class=\"product-item-description d-flex mr-auto\">\r\n          <div class=\"bg-dark p-5 rounded\">\r\n            <p class=\"mb-0t text-light\">\r\n              On the way back to your car, post your cars location, and we will find someone nearby trying to park.\r\n              When you swap spots you will reveice a payment for your time.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/feature-instructions/feature-instructions.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/feature-instructions/feature-instructions.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/feature-instructions/feature-instructions.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/feature-instructions/feature-instructions.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h3 class=\"modal-title\">{{ instructions.title}}</h3>\r\n\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h4>Instructions:</h4>\r\n    <ol class=\"list-group list-group-flush\">\r\n      <li  class=\"list-group-item\" *ngFor=\"let s of steps\">{{ s.step }}</li>\r\n    </ol>\r\n    <br>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button (click)=\"close()\" class=\"btn btn-outline-danger btn-lg\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/feature-instructions/feature-instructions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/feature-instructions/feature-instructions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FeatureInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureInstructionsComponent", function() { return FeatureInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeatureInstructionsComponent = /** @class */ (function () {
    function FeatureInstructionsComponent(modalService, route, router, searchAlgorithmService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.searchAlgorithmService = searchAlgorithmService;
    }
    FeatureInstructionsComponent.prototype.ngOnInit = function () {
    };
    // private dummysteps: StepsData = steps:[ {1: number,"Finely grate the zest from the lemon, then cut" : string}];
    FeatureInstructionsComponent.prototype.open = function (results) {
        var _this = this;
        this.instructions = results;
        this.modalService.open(this.content);
        this.searchAlgorithmService.searchRecipeInstructionById(results.id).subscribe(function (data) {
            if (data.length == 0) {
            }
            else {
                _this.steps = data[0].steps;
            }
            // results.steps = data;
            // console.log(data);
        });
        // this.instructions.steps = this.steps;
    };
    FeatureInstructionsComponent.prototype.close = function () {
        this.steps = null;
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])
    ], FeatureInstructionsComponent.prototype, "content", void 0);
    FeatureInstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-instructions',
            template: __webpack_require__(/*! ./feature-instructions.component.html */ "./src/app/components/feature-instructions/feature-instructions.component.html"),
            styles: [__webpack_require__(/*! ./feature-instructions.component.css */ "./src/app/components/feature-instructions/feature-instructions.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_3__["SearchAlgorithmService"]])
    ], FeatureInstructionsComponent);
    return FeatureInstructionsComponent;
}());



/***/ }),

/***/ "./src/app/components/feature-results/feature-results.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/feature-results/feature-results.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-height: 550px;\r\n    margin-top: 2rem!important;\r\n}\r\n\r\n#buttonAlignDiv{\r\nvertical-align: bottom;\r\ntext-align: center;\r\nmargin-bottom: 5%;\r\n\r\n}\r\n\r\n#buttonAlign{\r\n    width:100px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/feature-results/feature-results.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/feature-results/feature-results.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container col-10\">\r\n<div class=\"row card-group\">\r\n  <div class=\"col-3 mb-1 mt-1\" (click)=\"open(r)\" *ngFor=\"let r of this.searchAlgorithmService.resultSet\">\r\n  <div class=\"card\">\r\n    <img class=\"card-img-top\" src=\"{{r.image}}\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{ r.title }}</h5>\r\n      <p class=\"card-text\">Likes: {{ r.likes }}</p>\r\n      <p class=\"card-text\"> Used Ingredients: {{ r.usedIngredientCount }}</p>\r\n      <p class=\"card-text\">Missed Ingredients: {{ r.missedIngredientCount }}</p>\r\n     \r\n    </div>\r\n    <div id=\"buttonAlignDiv\">\r\n      <button id=\"buttonAlign\" class=\"btn btn-primary\">Details</button>\r\n     </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n<app-feature-instructions></app-feature-instructions>"

/***/ }),

/***/ "./src/app/components/feature-results/feature-results.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/feature-results/feature-results.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureResultsComponent", function() { return FeatureResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
/* harmony import */ var _feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-instructions/feature-instructions.component */ "./src/app/components/feature-instructions/feature-instructions.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeatureResultsComponent = /** @class */ (function () {
    function FeatureResultsComponent(searchAlgorithmService, modalService) {
        this.searchAlgorithmService = searchAlgorithmService;
        this.modalService = modalService;
    }
    FeatureResultsComponent.prototype.ngOnInit = function () {
        this.set();
    };
    FeatureResultsComponent.prototype.set = function () {
        this.results = this.searchAlgorithmService.resultSet;
    };
    // openDetails(result: FeatureResults) {
    //   this.searchAlgorithmService.searchRecipeInstructionById(392463).subscribe(
    //     data => {
    //       console.log(data);
    //     }
    //   );
    // }
    FeatureResultsComponent.prototype.open = function (result) {
        this.modal.open(result);
        // this.searchAlgorithmService.searchRecipeInstructionById(result.id).subscribe(
        //       data => {
        //          result.steps = data;
        //        }
        //      );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_2__["FeatureInstructionsComponent"]),
        __metadata("design:type", _feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_2__["FeatureInstructionsComponent"])
    ], FeatureResultsComponent.prototype, "modal", void 0);
    FeatureResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-results',
            template: __webpack_require__(/*! ./feature-results.component.html */ "./src/app/components/feature-results/feature-results.component.html"),
            styles: [__webpack_require__(/*! ./feature-results.component.css */ "./src/app/components/feature-results/feature-results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__["SearchAlgorithmService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], FeatureResultsComponent);
    return FeatureResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/food-category/food-category.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/food-category/food-category.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column {\r\n    float: left;\r\n    width: 33.33%;\r\n    /* width: 30%; */\r\n    padding: 15px;\r\n  }\r\n.row {\r\n  height: 40%;\r\n}\r\nimg{\r\n  \r\n  transition: width .3s;\r\n  width: 90%;\r\n}\r\nimg:hover{\r\n  width: 100%;\r\n  /* margin-bottom: -10px; */\r\n}\r\n.bg-faded.p-5.rounded.category-view{\r\n  width: 500px;\r\n  height: 500px;\r\n}\r\n.button {\r\n  background-color: #e6a756; /* Safari */\r\n  transition-duration: 0.3s;\r\n  margin-right: 15px;\r\n  margin-top: 15px;\r\n}\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(85, 77, 62, 0.24),0 17px 50px 0 rgba(126, 106, 65, 0.19);\r\n}\r\n.btn-meat{\r\n  background: #F56960;\r\n\r\n}\r\n.btn-veggies{\r\n  background-color: rgb(118, 199, 131);\r\n\r\n}\r\n.btn-dairy{\r\n  background-color: rgb(255, 252, 240);\r\n  /* 848586  */\r\n\r\n}\r\n.btn-fruits{\r\n  background-color: rgb(233, 153, 177);\r\n\r\n}\r\n.btn-spices{\r\n  background-color: rgb(194, 132, 122);\r\n\r\n}\r\n.btn-grains{\r\n  background-color: #DAA588;\r\n\r\n}\r\n.change-category {\r\n  margin-top: 10%;\r\n  margin-bottom: 0%;\r\n}\r\n/* Clear floats after image containers */\r\n.row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n:host {\r\n    position: relative;\r\n  }\r\n.gradient {\r\n    position: absolute;\r\n  }\r\n.content {\r\n    position: relative;\r\n  }\r\n#category-view{\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    width: 400px;\r\n    height: 400px\r\n  }\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/food-category/food-category.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/food-category/food-category.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <section class=\"page-section\">\r\n        <div class=\"container\">\r\n          <div class=\"product-item-description d-flex mr-auto\">\r\n\r\n            <div class=\"bg-dark p-5 rounded category-view\" *ngIf=\"!showIngredients\">\r\n              <h2 class=\"section-heading mb-0\">\r\n                <span class=\"section-heading-upper\">The Spotback Team</span>\r\n              </h2>\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/joey.png\" width=\"100\" (click)=\"showCarne()\">\r\n                  <span class=\"text-light\">Joey Caruana</span>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/sham2.png\" width=\"100\" (click)=\"showDairy()\">\r\n                  <span class=\"text-light\">Shamaun Anees</span>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <img src=\"../../../assets/images/anon.png\" width=\"100\" (click)=\"showFruit()\">\r\n                    <span class=\"text-light\">Dmitry Sokolov</span>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"column\">\r\n                      <img src=\"../../../assets/images/me.png\" width=\"95\" (click)=\"showVeggie()\">\r\n                      <span class=\"text-light\">Dylan Corbus</span>\r\n                    </div>\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/anon.png\" width=\"100\" (click)=\"showGrain()\">\r\n                  <span class=\"text-light\">Usman Yaqoob</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"bg-dark p-5 rounded\" *ngIf=\"showIngredients\">\r\n              <div>\r\n                <h2 class=\"section-heading mb-0 text-light\">\r\n                  <span class=\"section-heading-upper\">{{this.currentCategory}}</span>\r\n                  <span class=\"section-heading-lower\">Bio</span>\r\n                </h2>\r\n                <br>\r\n                <div class=\"card-deck row\">\r\n                  <div class=\"card-block\" *ngFor=\"let string of ingredients1\">\r\n                    <p class=\"text-light\">{{string}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <label class=\"change-category \">\r\n                <button (click)=\"this.showIngredients=false;\" class=\"btn btn-primary\">Back To the Team</button>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </section>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-pantry></app-pantry>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/food-category/food-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/food-category/food-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: FoodCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoryComponent", function() { return FoodCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pantry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pantry.service */ "./src/app/services/pantry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodCategoryComponent = /** @class */ (function () {
    function FoodCategoryComponent(router, foodService, pantryService) {
        var _this = this;
        this.foodService = foodService;
        this.pantryService = pantryService;
        this.ingredients = [];
        this.ingredients1 = [];
        this.masterPantry = [];
        this.meat1Ingredients = this.foodService.getMeats();
        this.dairyIngredients = this.foodService.getDairy();
        this.veggiesIngredients = this.foodService.getVeggies();
        this.fruitsIngredients = this.foodService.getFruits();
        this.starchesIngredients = this.foodService.getStarches();
        this.usersIngredients = [];
        this.setCategory = function (category) {
            if (_this.currentCategory == category)
                return;
            _this.currentCategory = category;
        };
    }
    FoodCategoryComponent.prototype.ngOnInit = function () {
        this.showIngredients = false;
    };
    // filterOutLoggedInUsersIngredients() {
    // console.log(this.pantryService.ingredient);
    // for (let i = 0; i < this.pantryService.ingredient.length; i++) {
    //   let cat = this.pantryService.ingredient[i].category;
    //   if (cat === "meats") {
    //     this.meatIngredients.splice(this.meatIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "dairy") {
    //     this.dairyIngredients.splice(this.dairyIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "spices") {
    //     this.spicesIngredients.splice(this.spicesIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "fruits") {
    //     this.fruitsIngredients.splice(this.fruitsIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "grains") {
    //     this.starchesIngredients.splice(this.starchesIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "veggies") {
    //     for (let a = 0; a < this.veggiesIngredients.length; a++) {
    //       if (this.pantryService.ingredient[i].id = this.veggiesIngredients[a].id){
    //         console.log("Pantry id" + this.pantryService.ingredient[i].id)
    //         console.log("veggiesArray id" +this.veggiesIngredients[a].id)
    //         this.veggiesIngredients.splice(a,1);
    //       }
    //     }
    //   }
    //   this.masterPantry.splice(this.masterPantry.indexOf(this.pantryService.ingredient[i], 0), 1);
    // }
    // }
    // this.ingredients = this.ingredients.filter(x => this.pantryService.ingredient.includes(x));
    // console.log(this.ingredients);
    FoodCategoryComponent.prototype.sortIngredients = function () {
        this.ingredients.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
    };
    FoodCategoryComponent.prototype.showCarne = function () {
        this.ingredients1 = this.meat1Ingredients;
        this.sortIngredients();
        this.currentCategory = 'Joey Caruana Founder and CEO';
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showDairy = function () {
        this.ingredients1 = this.dairyIngredients;
        this.sortIngredients();
        this.currentCategory = "Shamaun Anees Co-founder";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showVeggie = function () {
        this.ingredients1 = this.veggiesIngredients;
        this.sortIngredients();
        this.currentCategory = "Dylan Corbus Co-founder/Full-stack Developer";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showFruit = function () {
        this.ingredients1 = this.fruitsIngredients;
        this.sortIngredients();
        this.currentCategory = "Dmitry Sokolov Co-founder/IOS Developer";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showGrain = function () {
        this.ingredients1 = this.starchesIngredients;
        this.sortIngredients();
        this.currentCategory = "Usman Yaqoob Co-fouder/Backend Engineer";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showHerbSpice = function () {
        this.sortIngredients();
        this.currentCategory = "herbs-spices";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.addToPantry = function (ingredient) {
        var cat = ingredient.category;
        this.pantryService.ingredient.push(ingredient);
        // console.log(ingredient);
        // console.log(this.meatIngredients);
        // console.log(this.masterPantry);
        // this.masterPantry.splice(this.masterPantry.indexOf(ingredient, 0), 1);
        // this.ingredients.splice(this.ingredients.indexOf(ingredient, 0), 1);
    };
    FoodCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-category',
            template: __webpack_require__(/*! ./food-category.component.html */ "./src/app/components/food-category/food-category.component.html"),
            styles: [__webpack_require__(/*! ./food-category.component.css */ "./src/app/components/food-category/food-category.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_1__["HandleArraysService"], _services_pantry_service__WEBPACK_IMPORTED_MODULE_3__["PantryService"]])
    ], FoodCategoryComponent);
    return FoodCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section clearfix\">\r\n    <div class=\"container\">\r\n      <div class=\"intro\">\r\n        <img class=\"intro-img img-fluid mb-3 mb-lg-0 rounded\" src=\"./../../../assets/images/iphoneX.png\" alt=\"\">\r\n        <div class=\"intro-text left-0 text-center bg-dark p-5 rounded\">\r\n          <h2 class=\"section-heading mb-4\">\r\n            <span class=\"section-heading-upper\">Find a great parking spot</span>\r\n            <span class=\"section-heading-lower\">From People in Your Community</span>\r\n          </h2>\r\n          <p class=\"mb-3 text-light\">\r\n              Finding a parking spot near the place you want &amp; for a resonable price can be very difficult in big cities.\r\n              You probably drive around looking for a spot, circling block after block only to waste an hour trying to park. \r\n              Allow this app to help. With Spotback, you can  set your destination and we will pair you with someone willing \r\n              to hold a spot nearby until you arrive.\r\n          </p>\r\n          <div class=\"intro-button mx-auto\">\r\n            <a class=\"btn btn-primary btn-xl\" routerLink=\"/categories\">Get Started!</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login-register/login-register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login-register/login-register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div class=\"someUniqueId\">\r\n<div class=\"modal-header\" style=\"margin: 0 auto\">\r\n\r\n  <h4 class=\"modal-title\">Login Or Register</h4>\r\n\r\n</div>\r\n\r\n<div id=\"login-overlay\">\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        <div class=\"well\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"control-label\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"\" required title=\"Please enter your username\"\r\n              placeholder=\"username...\" [(ngModel)]='username'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" value=\"\" required title=\"Please enter your password\"\r\n              placeholder=\"password...\" [(ngModel)]='password'>\r\n          </div>\r\n\r\n          <!-- <div [hidden]=\"hidden\" id=\"loginErrorMsg\" class=\"alert alert-error hide\">Wrong username/password!</div> -->\r\n\r\n          <button type=\"submit\" class=\"btn btn-secondary btn-block\" (click)=\"login()\" >Login</button>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"col-xs-12 col-md-6\">\r\n        <div class=\"well\">\r\n          \r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\" class=\"control-label\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" value=\"\" required title=\"Enter first name\"\r\n              placeholder=\"Enter first name...\" [(ngModel)]='firstName'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\" class=\"control-label\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" value=\"\" required title=\"Enter last name\"\r\n              placeholder=\"Enter last name...\" [(ngModel)]='lastName'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"newUsername\" class=\"control-label\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" value=\"\" required title=\"Enter an email\"\r\n              placeholder=\"Select a username...\" [(ngModel)]='email'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"newPassword\" class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" value=\"\" required title=\"Choose your password\"\r\n              placeholder=\"Choose your password...\" [(ngModel)]='newPassword'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmPassword\" class=\"control-label\">Confirm Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" value=\"\" required\r\n              title=\"Confirm password\" placeholder=\"Confirm password...\" [(ngModel)]='confirmPassword'>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group\">\r\n            <label for=\"newEmail\" class=\"control-label\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"newEmail\" name=\"newEmail\" value=\"\" required title=\"Enter email address\"\r\n              placeholder=\"Enter email address...\" [(ngModel)]='newEmail'>\r\n          </div> -->\r\n\r\n          <div [hidden]=\"hidden1\" id=\"registerErrorMsg\" class=\"alert alert-error hide\">Fill in fields!</div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-secondary btn-block\" (click)=\"checkPasswords()\" (click)=\"dismissModal('Close click')\">Register\r\n            now!</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"dismissModal('Close click')\">Close</button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login-register/login-register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_pantry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pantry.service */ "./src/app/services/pantry.service.ts");
/* harmony import */ var _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(modalService, route, router, authService, pantryService, foodCategory, handleArrayService, location) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pantryService = pantryService;
        this.foodCategory = foodCategory;
        this.handleArrayService = handleArrayService;
        this.location = location;
        this.show = false;
        this.hidden = true;
        this.hidden1 = true;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
    };
    LoginRegisterComponent.prototype.login = function () {
        var _this = this;
        // this.reload('categories');
        // this.reload('menu');
        // this.reload('pantry');
        // this.reload('food-category');
        if (this.username == null || this.password == null) {
            alert('please enter in something.');
        }
        else {
            this.pantryService.ingredient = [];
            this.hidden = !this.hidden;
            this.show = !this.show;
            this.authService.login(this.username, this.password).subscribe(function (user) {
                _this.authService.loggedInUser = user;
                if (user != null) {
                    _this.authService.isLoggedIn = true;
                    _this.authService.notLoggedIn = false;
                    // this.router.navigate(['userInfo']);
                    _this.authService.getPantryByUsername(user.username).subscribe(function (pantryid) {
                        _this.authService.dataObject = pantryid;
                        _this.authService.theOldIngredients = pantryid.ingredients;
                        setTimeout(_this.pantryService.unpackUserPantryArray(_this.authService.theOldIngredients), 5000);
                        _this.reload('categories');
                        _this.modalService.dismissAll();
                    });
                }
            });
        }
    };
    LoginRegisterComponent.prototype.checkPasswords = function () {
        if (this.newPassword !== this.confirmPassword) {
            alert('passwords do not match');
            // this.confirmPassword == null;
            return;
        }
        else {
            this.registerUser();
        }
    };
    LoginRegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.firstName == null || this.lastName == null || this.email == null
            || this.newPassword == null || this.confirmPassword == null) {
            alert('please fill  in all fields');
            this.hidden1 = !this.hidden1;
        }
        else {
            this.hidden = !this.hidden;
            this.show = !this.show;
            // SENDING NEW INFO TO BE REGISTERED IN THE USER_LOGIN TABLE
            this.authService.registerUser(this.firstName, this.lastName, this.email, this.newPassword).subscribe(function (data) {
                _this.authService.loggedInUser = data;
                if (data != null) {
                    // this.authService.isLoggedIn = true;
                    // this.router.navigate(['userInfo']);
                    // SENDING NEW INFO TO BE REGISTERED IN THE USER_INFO TABLE
                    _this.authService.registerUserInfo(_this.firstName, _this.lastName, _this.email, _this.newPassword).subscribe(function (data2) {
                        if (data2 != null) {
                            // MAKING A PANTRY FOR NEW USER
                            _this.authService.registerUserPantry(_this.email).subscribe(function (data3) {
                            });
                        }
                    });
                }
            });
        }
    };
    LoginRegisterComponent.prototype.dismissModal = function (any) {
        this.modalService.dismissAll('Cross click');
    };
    LoginRegisterComponent.prototype.getUsersPantry = function () {
        // this.foodCategory.meatIngredients = this.handleArrayService.getMeats();
        // this.foodCategory.dairyIngredients = this.handleArrayService.getDairy();
        // this.foodCategory.veggiesIngredients = this.handleArrayService.getVeggies();
        // this.foodCategory.spicesIngredients = this.handleArrayService.getSpices();
        // this.foodCategory.fruitsIngredients = this.handleArrayService.getFruits();
        // this.foodCategory.starchesIngredients = this.handleArrayService.getStarches();
        var _this = this;
        this.authService.login(this.username, this.password).subscribe(function (data) {
            _this.authService.loggedInUser = data;
            if (data != null) {
                _this.authService.isLoggedIn = true;
            }
        });
    };
    LoginRegisterComponent.prototype.reload = function (link) {
        var _this = this;
        this.router.navigate(['/'], { skipLocationChange: true }).then(function () { _this.router.navigate([link]); });
    };
    LoginRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-register',
            template: __webpack_require__(/*! ./login-register.component.html */ "./src/app/components/login-register/login-register.component.html"),
            styles: [__webpack_require__(/*! ./login-register.component.css */ "./src/app/components/login-register/login-register.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_pantry_service__WEBPACK_IMPORTED_MODULE_4__["PantryService"],
            _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_5__["FoodCategoryComponent"],
            _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_6__["HandleArraysService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n  .dark-modal .close {\r\n    color: white;\r\n  }\r\n  .light-blue-backdrop {\r\n    background-color: #5cb3fd;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\r\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n  <div class=\"modal-header\" style=\"margin: 0 auto\">\r\n\r\n    <h4 class=\"modal-title\">Login</h4>\r\n\r\n  </div>\r\n\r\n    <div id=\"login-overlay\" >\r\n\r\n          <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n\r\n                  <div class=\"col-xs-12 col-md-6\">\r\n                      <div class=\"well\">\r\n                            \r\n                              <div class=\"form-group\">\r\n                                  <label for=\"username\" class=\"control-label\">Username</label>\r\n                                  <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"\" required title=\"Please enter your username\" placeholder=\"username...\"[(ngModel)]='username'>\r\n                              </div>\r\n\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"password\" class=\"control-label\">Password</label>\r\n                                  <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" value=\"\" required title=\"Please enter your password\" placeholder=\"password...\" [(ngModel)]='password'>\r\n                              </div>\r\n\r\n                              <div [hidden]=\"hidden\" id=\"loginErrorMsg\" class=\"alert alert-error hide\">Wrong username/password!</div>\r\n\r\n                              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"login()\">Login</button>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-xs-12 col-md-6\">\r\n                      <p class=\"lead\">Register now for <span class=\"text-info\">FREE</span></p>\r\n\r\n                      <ul class=\"list-unstyled\" style=\"line-height: 2\">\r\n                          <li><span class=\"fa fa-check text-info\"></span> Save items in your pantry</li>\r\n                          <li><span class=\"fa fa-check text-info\"></span> Fast recipes</li>\r\n                          <li><span class=\"fa fa-check text-info\"></span> Save your favorites</li>\r\n                          \r\n                          <li><a href=\"/about/\"><u>Read more</u></a></li>\r\n                      </ul>\r\n                      \r\n                      <!-- <p><a routerLink=\"/register\" (click)=\"modal.close('Close click')\" class=\"btn btn-info btn-block\">Register now!</a></p> -->\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div> -->\r\n\r\n<!-- </ng-template> -->\r\n\r\n<!-- <button class=\"btn btn-primary ml-2 mt-2\" (click)=\"openLoginModal(content)\">\r\n  \r\n  Login modal\r\n\r\n</button> -->\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(modalService, route, router, authService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.show = false;
        this.hidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // openLoginModal(content) {
    //   this.modalService.open(content, { size: 'lg' });
    // }
    LoginComponent.prototype.login = function () {
        if (this.username == null || this.password == null) {
            alert('please enter in something.');
        }
        else {
            // console.log("printing info... ")
            // console.log(this.username);
            // console.log(this.password);
            this.hidden = !this.hidden;
            this.show = !this.show;
            //SOME LOGIN LOGIC
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    float: left;\r\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark py-lg-4\" id=\"mainNav\" *ngIf=\"!authService.isLoggedIn\">\r\n    <a class=\"icon\" routerLink=\"/home\">\r\n      <img src=\"./../../../assets/images/Spotbacklogo.png\" width=\"200%\" hspace=\"50\">\r\n    </a>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none\" href=\"#\"></a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <!--MENU WHEN USER IN LOGGED OUT -->\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <li class=\"nav-item px-lg-4\">\r\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item px-lg-4\">\r\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/categories\">Company</a>\r\n          </li>\r\n          <li class=\"nav-item px-lg-4\">\r\n              <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/popular\">Problems</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav col-4 offset-3\">\r\n          <input type=\"text\" placeholder=\"Search our awesome recipes\" [(ngModel)]=\"search\" class=\"form-control col-9 mt-2\">\r\n          <button class=\"btn btn-beige ml-2 mt-2\" (click)=\"searchRecipe()\">\r\n            <span class=\"oi oi-zoom-out\"></span>\r\n          </button>\r\n          <button (click)=\"openLoginRegisterModal()\" class=\"btn btn-primary ml-2 mt-2 \">Log in/Register</button>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-register/login-register.component */ "./src/app/components/login-register/login-register.component.ts");
/* harmony import */ var _services_pantry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pantry.service */ "./src/app/services/pantry.service.ts");
/* harmony import */ var _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MenuComponent = /** @class */ (function () {
    function MenuComponent(modalService, authService, pantryService, router, foodCategory, handleArrayService, location) {
        this.modalService = modalService;
        this.authService = authService;
        this.pantryService = pantryService;
        this.router = router;
        this.foodCategory = foodCategory;
        this.handleArrayService = handleArrayService;
        this.location = location;
        this.loggedIn = this.authService.isLoggedIn;
    }
    //dummy logout
    MenuComponent.prototype.logout1 = function () {
        this.authService.logout1();
        this.authService.notLoggedIn = true;
        this.pantryService.ingredient = [];
        this.reload("categories");
        this.reload("home");
        location.reload();
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.searchRecipe = function () {
        var _this = this;
        if (this.search !== undefined) {
            this.authService.searchRecipes(this.search).subscribe(function (data) {
                _this.authService.recipe = data;
                // this.router.navigate(['search']);
                _this.reload('search');
            });
        }
        this.clearData();
    };
    MenuComponent.prototype.reload = function (link) {
        var _this = this;
        this.router.navigate(['/'], { skipLocationChange: true }).then(function () { _this.router.navigate([link]); });
    };
    MenuComponent.prototype.clearData = function () {
        this.search = '';
    };
    MenuComponent.prototype.open = function () {
        var modalRef = this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
    };
    MenuComponent.prototype.openLoginRegisterModal = function () {
        return this.modalService.open(_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_5__["LoginRegisterComponent"]);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_pantry_service__WEBPACK_IMPORTED_MODULE_6__["PantryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_7__["FoodCategoryComponent"],
            _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_8__["HandleArraysService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/pantry/pantry.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/pantry/pantry.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n    background-color: #e6a756; /* Safari */\r\n    transition-duration: 0.3s;\r\n    margin-right: 15px;\r\n    margin-top: 15px;\r\n  }\r\n  .button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(85, 77, 62, 0.24),0 17px 50px 0 rgba(126, 106, 65, 0.19);\r\n  }\r\n  .btn-meat{\r\n    background: #F56960;\r\n  \r\n  }\r\n  .btn-veggies{\r\n    background-color: rgb(118, 199, 131);\r\n  \r\n  }\r\n  .btn-dairy{\r\n    background-color: rgb(255, 252, 240);\r\n    /* 848586  */\r\n  \r\n  }\r\n  .btn-fruits{\r\n    background-color: rgb(233, 153, 177);\r\n  \r\n  }\r\n  .btn-spices{\r\n    background-color: rgb(194, 132, 122);\r\n  \r\n  }\r\n  .btn-grains{\r\n    background-color: #DAA588;\r\n  \r\n  }"

/***/ }),

/***/ "./src/app/components/pantry/pantry.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/pantry/pantry.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\r\n    <section class=\"page-section\">\r\n        <div class=\"bg-dark p-5 rounded\">\r\n            <h2 class=\"section-heading mb-0\">\r\n                <span class=\"section-heading-upper\">Spotback Contact info</span>\r\n            </h2>\r\n            <br>\r\n            <div class=\"card-deck row text-light\">\r\n                <ul>\r\n                    <li>Phone: (555)555-5555</li>\r\n                    <li>Email: Spotbackteam@gmail.com</li>\r\n                </ul>\r\n                <div class=\"form-group\">\r\n                    <label for=\"firstName\" class=\"control-label\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control input-sm\" id=\"firstName\" name=\"firstName\" value=\"\" required title=\"Enter first name\" placeholder=\"Enter first name...\" [(ngModel)]='firstName'>\r\n                    <label for=\"firstName\" class=\"control-label\">Email address</label>\r\n                    <input type=\"text\" class=\"form-control input-sm\" id=\"email\" name=\"email\" value=\"\" required title=\"Enter email\" placeholder=\"Enter email...\" [(ngModel)]='email'>\r\n                    <label for=\"firstName\" class=\"control-label\">Subject</label>\r\n                    <input type=\"text\" class=\"form-control input-lg\" id=\"subject\" name=\"subject\" value=\"\" required title=\"Enter subject\" placeholder=\"Enter subject...\" [(ngModel)]='subject'>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    \r\n                </div>\r\n            </div>\r\n            <br>\r\n            <hr>\r\n        </div>\r\n    </section>\r\n</div>\r\n<!-- *ngFor=\"let i of this.userPantryIngredients.name\" -->"

/***/ }),

/***/ "./src/app/components/pantry/pantry.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/pantry/pantry.component.ts ***!
  \*******************************************************/
/*! exports provided: PantryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryComponent", function() { return PantryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pantry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pantry.service */ "./src/app/services/pantry.service.ts");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
/* harmony import */ var _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PantryComponent = /** @class */ (function () {
    function PantryComponent(handleArrays, authService, foodCategory, router, pantryService, searchAlgorithmService) {
        this.handleArrays = handleArrays;
        this.authService = authService;
        this.foodCategory = foodCategory;
        this.router = router;
        this.pantryService = pantryService;
        this.searchAlgorithmService = searchAlgorithmService;
        this.ingredient = [];
        this.databasestring = '';
    }
    PantryComponent.prototype.ngOnInit = function () {
    };
    PantryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pantry',
            template: __webpack_require__(/*! ./pantry.component.html */ "./src/app/components/pantry/pantry.component.html"),
            styles: [__webpack_require__(/*! ./pantry.component.css */ "./src/app/components/pantry/pantry.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_6__["HandleArraysService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_3__["FoodCategoryComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_pantry_service__WEBPACK_IMPORTED_MODULE_1__["PantryService"],
            _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_2__["SearchAlgorithmService"]])
    ], PantryComponent);
    return PantryComponent;
}());



/***/ }),

/***/ "./src/app/components/popular/popular.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/popular/popular.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/popular/popular.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popular/popular.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section cta\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-9 mx-auto\">\r\n                <div class=\"cta-inner text-center rounded\">\r\n                    <h2 class=\"section-heading mb-4\">\r\n                        <span class=\"section-heading-upper\">Comin' in Hot</span>\r\n                        <span class=\"section-heading-lower\">Food Fact</span>\r\n                    </h2>\r\n                    <!-- <p class=\"mb-0\"> -->\r\n                        <h4 class=\"mb-0\">\r\n                        \r\n                        {{joke}}\r\n                    </h4>\r\n                    <!-- </p> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/popular/popular.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popular/popular.component.ts ***!
  \*********************************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularComponent = /** @class */ (function () {
    // public joke: String[] = [];
    function PopularComponent(searchService) {
        this.searchService = searchService;
    }
    PopularComponent.prototype.ngOnInit = function () {
        this.getJoke();
    };
    PopularComponent.prototype.getJoke = function () {
        var _this = this;
        this.searchService.searchJoke().subscribe(function (data) {
            _this.joke = data.text;
        });
    };
    PopularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular',
            template: __webpack_require__(/*! ./popular.component.html */ "./src/app/components/popular/popular.component.html"),
            styles: [__webpack_require__(/*! ./popular.component.css */ "./src/app/components/popular/popular.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__["SearchAlgorithmService"]])
    ], PopularComponent);
    return PopularComponent;
}());



/***/ }),

/***/ "./src/app/components/results-modal/results-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/results-modal/results-modal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* */"

/***/ }),

/***/ "./src/app/components/results-modal/results-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/results-modal/results-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h3 class=\"modal-title\">{{ recipes.label }}</h3>\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h4>Ingredients:</h4>\r\n    <ol class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\" *ngFor=\"let i of recipes.ingredientLines\">{{ i }}</li>\r\n    </ol>\r\n    <br>\r\n    <h4>Health Labels:</h4>\r\n    <ul class=\"list-inline\">\r\n      <li class=\"list-inline-item\" *ngFor=\"let i of recipes.healthLabels\">{{ i }},</li>\r\n      <br>\r\n      <p><img src=\"{{recipes.image}}\" class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-sm-0\"></p>\r\n    </ul>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    \r\n    <p>Click <a href=\"{{ recipes.url}}\" target=\"_blank\"> here</a> for more details about this recipe</p>\r\n    <button (click)=\"close()\" class=\"btn btn-outline-danger btn-lg\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/results-modal/results-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/results-modal/results-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResultsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsModalComponent", function() { return ResultsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsModalComponent = /** @class */ (function () {
    function ResultsModalComponent(modalService, route, router, authService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ResultsModalComponent.prototype.ngOnInit = function () {
    };
    ResultsModalComponent.prototype.open = function (recipes) {
        this.recipes = recipes;
        this.modalService.open(this.content);
    };
    ResultsModalComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"])
    ], ResultsModalComponent.prototype, "content", void 0);
    ResultsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results-modal',
            template: __webpack_require__(/*! ./results-modal.component.html */ "./src/app/components/results-modal/results-modal.component.html"),
            styles: [__webpack_require__(/*! ./results-modal.component.css */ "./src/app/components/results-modal/results-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ResultsModalComponent);
    return ResultsModalComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-results.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section\">\r\n<div class=\"container\">\r\n    <div class=\"jumbotron mt-2 bg-faded\">\r\n        <h2 class=\"offset-5 text-dark\">Search Results</h2>\r\n        <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Top Results</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr (click)=\"open(r)\" *ngFor=\"let r of recipe\">\r\n                <td>{{ r.label }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        \r\n    </div>\r\n    \r\n</div>\r\n</section>\r\n<app-results-modal></app-results-modal>"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-modal/results-modal.component */ "./src/app/components/results-modal/results-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(modalService, authService) {
        this.modalService = modalService;
        this.authService = authService;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.parseJson();
    };
    SearchResultsComponent.prototype.parseJson = function () {
        this.recipe = this.authService.recipe.hits.map(function (hit) { return hit.recipe; });
        this.authService.recipes = this.recipe;
    };
    SearchResultsComponent.prototype.open = function (recipe) {
        this.modal.open(recipe);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_3__["ResultsModalComponent"]),
        __metadata("design:type", _results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_3__["ResultsModalComponent"])
    ], SearchResultsComponent.prototype, "modal", void 0);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/components/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/components/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section\">\r\n  <div class=\"container\">\r\n    <div class=\"product-item-description d-flex mr-auto\">\r\n\r\n      <div class=\"bg-faded p-5 rounded\">\r\n\r\n        <h2 class=\"section-heading mb-0\">\r\n          <span class=\"section-heading-lower\">Welcome User!</span>\r\n          <span class=\"section-heading-upper\">User Info will go here</span>\r\n        </h2>\r\n        <br>\r\n\r\n        <h2 class=\"section-heading mb-0\">\r\n          <span class=\"section-heading-lower\">Recipes You've Liked</span>\r\n          <span class=\"section-heading-upper\">User's saved Recipes will go here</span>\r\n        </h2>\r\n\r\n        <!-- <h2 class=\"section-heading mb-0\">\r\n        <table class=\"table table-striped table-light mt-2\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Pantry_New_Item_ID</th>\r\n              <th scope=\"col\">Item_Name</th>\r\n              <th scope=\"col\">Item_Category</th>\r\n              <th scope=\"col\">Item_Weight</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of ingredients\">\r\n              <td>{{ i.id }}</td>\r\n              <td>{{ i.name }}</td>\r\n              <td>{{ i.category }}</td>\r\n              <td>{{ i.weight }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        </h2> -->\r\n\r\n      </div>\r\n      <app-pantry></app-pantry>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(authService) {
        this.authService = authService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.usersPantryItems = function () {
        // this.authService.getUsersPantryItems().subscribe(
        //   data => {
        //     if (data != null) {
        //       console.log(data);
        //       this.authService.allPantryItems = data;
        //       this.ingredients = this.authService.allPantryItems;
        //       console.log('loaded ingredients');
        //     }
        //     else {
        //       console.error('Error loading ingredients');
        //     }
        //   }
        // );
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/components/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
        this.notLoggedIn = true;
    }
    AuthService.prototype.searchRecipes = function (search) {
        return this.http.get("https://api.edamam.com/search?q=" + search + "&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=40");
    };
    AuthService.prototype.reload = function (link) {
        var _this = this;
        this.router.navigate(['/'], { skipLocationChange: true }).then(function () { _this.router.navigate([link]); });
    };
    AuthService.prototype.logout1 = function () {
        this.isLoggedIn = false;
        this.theOldIngredients = null;
        this.theNewIngredients = null;
        this.reload('home');
    };
    AuthService.prototype.login = function (username, password) {
        return this.http.post('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/login/validate', {
            username: username,
            password: password
        });
    };
    // creates a new entry in the User_Login table -- WORKS
    AuthService.prototype.registerUser = function (firstName, lastName, email, newPassword) {
        return this.http.post('https://localhost:8880/createAccount', {
            username: email,
            password: newPassword
        });
    };
    // this one creates a new entry in the User_Info table -- WORKS
    AuthService.prototype.registerUserInfo = function (firstName, lastName, email, newPassword) {
        return this.http.post('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/info/create', {
            firstname: firstName,
            lastname: lastName,
            username: { username: email }
        });
    };
    // CREATES A PANTRY FOR NEW USER -- WORKS
    AuthService.prototype.registerUserPantry = function (email) {
        return this.http.post('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/pantry/create', {
            username: { username: email },
            ingredients: 9000
        });
    };
    // returns pantry items when given pantry id
    AuthService.prototype.getUsersPantryItems = function (id) {
        return this.http.post('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/items/retrieve', {
            id: id
        });
    };
    // returns pantry id when given a username
    AuthService.prototype.getPantryByUsername = function (username) {
        return this.http.post('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/pantry/retrieve', {
            username: username
        });
    };
    AuthService.prototype.intermediaryFunctionForUpdatePantry = function (mediumIngredientString) {
        this.pantryId = this.dataObject.id;
        return this.updateUserPantry(this.pantryId, mediumIngredientString);
    };
    AuthService.prototype.updateUserPantry = function (id, theIngredients) {
        this.theNewIngredients = theIngredients;
        // console.log('theNewIngredients is:');
        // console.log(this.theNewIngredients);
        return this.http.post('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/pantry/update', {
            id: id,
            ingredients: this.theNewIngredients
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/handle-arrays.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/handle-arrays.service.ts ***!
  \***************************************************/
/*! exports provided: HandleArraysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleArraysService", function() { return HandleArraysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HandleArraysService = /** @class */ (function () {
    function HandleArraysService() {
        this.meats1 = [
            'San Jose State University BS in Marketing',
            'Enabling developers to solve complex challenges quickly so they can get back to what’s important: building great products.',
        ];
        this.dairy1 = [
            'San Jose State University BS in Finance',
            'A curious observer and proactive learner, I believe in analyzing problems in a way that generates insights and solutions which are remarkable in their simplicity and efficiency. Contact : Shamaun14@gmail.com , 669 234 2870',
        ];
        this.fruits1 = [
            'San Jose State University BS in Computer Science',
            'This is another test message',
        ];
        this.veggies1 = [
            'CSU Monterey Bay BS in Information Systems',
            'I am a Full-stack Web Developer with experience using the Angular framework, Java, using Hibernate, Vertx, and Spring MVC in server-side applications, as well as development experience with Oracle Database 11g, 12c and couchbase NoSQL. I am currently working toward an OCA certification for Java 8 SE.',
        ];
        this.starches1 = [
            'University of Toronto BAS in Electrical and Computer Engineering',
            'This is another test message',
        ];
    }
    HandleArraysService.prototype.getStarches = function () {
        return this.starches1;
    };
    HandleArraysService.prototype.getDairy = function () {
        return this.dairy1;
    };
    HandleArraysService.prototype.getFruits = function () {
        return this.fruits1;
    };
    HandleArraysService.prototype.getVeggies = function () {
        return this.veggies1;
    };
    HandleArraysService.prototype.getMeats = function () {
        return this.meats1;
    };
    HandleArraysService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HandleArraysService);
    return HandleArraysService;
}());



/***/ }),

/***/ "./src/app/services/pantry.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pantry.service.ts ***!
  \********************************************/
/*! exports provided: PantryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryService", function() { return PantryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _handle_arrays_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PantryService = /** @class */ (function () {
    function PantryService(authService, handleArrays) {
        this.authService = authService;
        this.handleArrays = handleArrays;
        this.ingredient = [];
        // number array of ingredient ids from db
        this.userPantryIngredientIds = [];
        // ingredient objects converted from ids
        this.userPantryIngredients = [];
    }
    PantryService.prototype.unpackUserPantryArray = function (ingString) {
        var array = ingString.split(',');
        if (array[0] === '9000') {
            array.splice(0, 1);
        }
        this.userPantryIngredientIds = []; // change here
        for (var i = 0; i < array.length; i++) {
            this.userPantryIngredientIds.push(Number(array[i]));
        }
        this.addUserIngredientsToMainArray();
        // console.log(this.ingredient);
        // this.getIngredientPantryFromIds();
    };
    //   getIngredientPantryFromIds(){
    //   this.userPantryIngredientIds.forEach(UserPId => { 
    //     this.handleArrays.pantry.forEach(PantryId => {
    //       if(UserPId === PantryId.id){
    //         this.ingredient.push(PantryId);
    //         console.log(PantryId)
    //       }
    //     });
    //   })
    //   console.log(this.ingredient);
    //   format
    // };
    PantryService.prototype.addUserIngredientsToMainArray = function () {
        for (var i = 0; i < this.userPantryIngredients.length; i++) {
            this.ingredient.push(this.userPantryIngredients[i]);
        }
    };
    PantryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _handle_arrays_service__WEBPACK_IMPORTED_MODULE_2__["HandleArraysService"]])
    ], PantryService);
    return PantryService;
}());



/***/ }),

/***/ "./src/app/services/search-algorithm.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/search-algorithm.service.ts ***!
  \******************************************************/
/*! exports provided: SearchAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAlgorithmService", function() { return SearchAlgorithmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchAlgorithmService = /** @class */ (function () {
    function SearchAlgorithmService(http) {
        this.http = http;
        this.searchUrl = "";
    }
    // randomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // searchPantryRecipes(searchArray: Ingredient[]) {
    //   let starchcount : number;
    //   let meatCount : number;
    //   let fruitCount : number;
    //   let vegetableCount : number;
    //   let dairyCount : number;
    //   let spicesCount : number;
    //   let random: number = this.randomInt(0, searchArray.length)
    //   while (this.selectedPantry.length <= 5)
    //     for (let i = random; i < searchArray.length; i++) {
    //       if (searchArray[i].weight >12) {
    //         this.selectedPantry.add
    //       }
    //     }
    // }
    //Retrives JSON array of recipes from pantry
    SearchAlgorithmService.prototype.searchPantryRecipes = function (searchArray) {
        this.searchUrl = searchArray[0].name;
        for (var i = 1; i < searchArray.length; i++) {
            this.searchUrl = this.searchUrl + "%2C" + searchArray[i].name;
        }
        // console.log(this.searchUrl);
        return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + this.searchUrl + '&limitLicense=false&number=12&ranking=2', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
        });
    };
    //Retrives a JSON recipe with URL to instructions
    SearchAlgorithmService.prototype.searchRecipeInstructionById = function (id) {
        return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/analyzedInstructions", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
        });
    };
    SearchAlgorithmService.prototype.searchJoke = function () {
        return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
        });
    };
    SearchAlgorithmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchAlgorithmService);
    return SearchAlgorithmService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dylan\Desktop\RecipeSuggestionApp\Frontend\RecipeApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map