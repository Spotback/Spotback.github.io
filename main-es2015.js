(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n<h1 class=\"site-heading text-center text-white d-none d-lg-block\">\n        <span class=\"site-heading-upper text-dark mb-3\">A community based parking application</span>\n        <span class=\"site-heading-lower text-dark\"><img src=\"./../../../assets/images/Spotbacklogo.png\" width=\"20%\"></span>\n      </h1>\n<!-- <router-outlet class=\"background-image\"></router-outlet> -->\n<div >\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"page-section about-heading\">\n    <div class=\"container\">\n        <img class=\"img-fluid rounded about-heading-img mb-3 mb-lg-0\" src=\"../../../assets/images/lookingPark.jpg\" alt=\"\">\n        <div class=\"about-heading-content\">\n  \n          <div class=\"row\">\n            <div class=\"col-xl-9 col-lg-10 mx-auto\">\n              <div class=\"bg-dark rounded p-5\">\n                <h2 class=\"section-heading mb-4\">\n                  <span class=\"section-heading-upper\">Anyone can find a spot, no matter where you are, or where you’re going</span>\n                  <span class=\"section-heading-lower\">About Our Application</span>\n                </h2>\n                <p class=\"text-light\">\n                    We are Spotback and we offer on-demand parking services for a flat rate fee to those that don’t want \n                    to wait for a spot or drive around until you find one, only to find yourself way too far \n                    from your destination. With Spotback you choose your destination &amp; we will match \n                    you with a user who's near your destination, about to leave their spot &amp; willing to hold \n                    the parking space until you arrive. You pay a small fee for the users time to hold the spot &amp;\n                    in return you get a prime parking space.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </section>\n  <section class=\"page-section\">\n      <div class=\"container\">\n        <div class=\"product-item\">\n          <div class=\"product-item-title d-flex\">\n              <!-- <div class=\"about-heading-content\"> -->\n            <div class=\"bg-dark p-5 d-flex ml-auto rounded\">\n              <h2 class=\"section-heading mb-0\">\n                <span class=\"section-heading-upper\">Driving somewhere?</span>\n                <span class=\"section-heading-lower\">Where will you park?</span>\n              </h2>\n            </div>\n            \n          </div>\n          <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/parking_meters.jpg\" alt=\"\">\n          <div class=\"product-item-description d-flex mr-auto\">\n            <div class=\"bg-dark p-5 rounded\">\n              <p class=\"mb-0 text-light\">\n                When you get close to your destination simply go on your spotback app, pick your destination, \n                and let us find you the perfect spot.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  \n    <section class=\"page-section\">\n      <div class=\"container\">\n        <div class=\"product-item\">\n          <div class=\"product-item-title d-flex\">\n            <div class=\"bg-dark p-5 d-flex ml-auto rounded\">\n              <h2 class=\"section-heading mb-0\">\n                <span class=\"section-heading-upper\">Ready to leave?</span>\n                <span class=\"section-heading-lower\">Just wait and get paid!</span>\n              </h2>\n            </div>\n          </div>\n          <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/cityPark1.jpg\" alt=\"\">\n          <div class=\"product-item-description d-flex mr-auto\">\n            <div class=\"bg-dark p-5 rounded\">\n              <p class=\"mb-0t text-light\">\n                On the way back to your car, post your cars location, and we will find someone nearby trying to park.\n                When you swap spots you will reveice a payment for your time.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <section class=\"page-section\">\n          <div class=\"container\">\n            <div class=\"product-item-description d-flex mr-auto\">\n  \n              <div class=\"bg-dark p-5 rounded category-view\" *ngIf=\"!showFounder\">\n                <h2 class=\"section-heading mb-0\">\n                  <span class=\"section-heading-upper\">The Spotback Team</span>\n                </h2>\n                <br>\n                <div class=\"row\">\n                  <div class=\"column\">\n                    <img src=\"../../../assets/images/joey.png\" width=\"100\" (click)=\"showJoey()\">\n                    <span class=\"text-light\">Joey Caruana</span>\n                  </div>\n                  <div class=\"column ml-5\">\n                    <img src=\"../../../assets/images/sham2.png\" width=\"100\" (click)=\"showShamaun()\">\n                    <span class=\"text-light\">Shamaun Anees</span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                        <div class=\"column\">\n                                <img src=\"../../../assets/images/anon.png\" width=\"100\" (click)=\"showDmitry()\">\n                                <span class=\"text-light\">Dmitry Sokolov</span>\n                              </div>\n                    <div class=\"column ml-5\">\n                        <img src=\"../../../assets/images/me.png\" width=\"100\" (click)=\"showDylan()\">\n                        <span class=\"text-light\">Dylan Corbus</span>\n                      </div>\n\n                </div>\n              </div>\n              <div class=\"bg-dark p-5 rounded\" *ngIf=\"showFounder\">\n                <div>\n                  <h2 class=\"section-heading mb-0 text-light\">\n                    <span class=\"section-heading-upper\">{{this.currentFounder}}</span>\n                    <span class=\"section-heading-lower\">Bio</span>\n                  </h2>\n                  <br>\n                  <div class=\"card-deck row\">\n                    <div class=\"card-block\" *ngFor=\"let string of founder\">\n                      <p class=\"text-light\">{{string}}</p>\n                    </div>\n                  </div>\n                </div>\n                <label class=\"change-category \">\n                  <button (click)=\"this.showFounder=false;\" class=\"btn btn-primary\">Back To the Team</button>\n                </label>\n              </div>\n            </div>\n          </div>\n  \n        </section>\n      </div>\n      <div class=\"col\">\n        <!-- <app-pantry></app-pantry> -->\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"page-section clearfix\">\n    <div class=\"container\">\n      <div class=\"intro\">\n        <img class=\"intro-img img-fluid mb-3 mb-lg-0 rounded\" src=\"./../../../assets/images/iphoneX.png\" alt=\"\">\n        <div class=\"intro-text left-0 text-center bg-dark p-5 rounded\">\n          <h2 class=\"section-heading mb-4\">\n            <span class=\"section-heading-upper\">Find a great parking spot</span>\n            <span class=\"section-heading-lower\">From People in Your Community</span>\n          </h2>\n          <p class=\"mb-3 text-light\">\n              Finding a parking spot near the place you want &amp; for a resonable price can be very difficult in big cities.\n              You probably drive around looking for a spot, circling block after block only to waste an hour trying to park. \n              Allow this app to help. With Spotback, you can  set your destination and we will pair you with someone willing \n              to hold a spot nearby until you arrive.\n          </p>\n          <div class=\"intro-button mx-auto\">\n            <a class=\"btn btn-primary btn-xl\" routerLink=\"/about\">Get Started!</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark py-lg-4\" id=\"mainNav\">\n    <a class=\"icon\" routerLink=\"/home\">\n      <img src=\"./../../../assets/images/Spotbacklogo.png\" width=\"200%\" hspace=\"50\">\n    </a>\n    <div class=\"container\">\n      <a class=\"navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none\" href=\"#\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <!--MENU WHEN USER IN LOGGED OUT -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav mx-auto\">\n          <li class=\"nav-item px-lg-4\">\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/about\">About</a>\n          </li>\n          <li class=\"nav-item px-lg-4\">\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/company\">Company</a>\n          </li>\n          <!-- <li class=\"nav-item px-lg-4\">\n              <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/probelms\">Problems</a>\n            </li> -->\n        </ul>\n        <ul class=\"navbar-nav col-4 offset-3\">\n          <!-- <button (click)=\"openLoginRegisterModal()\" class=\"btn btn-primary ml-2 mt-2\">Log in/Register</button> -->\n        </ul>\n      </div>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'company', component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'spotback-website';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
            _components_company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Three image containers (use 25% for four, and 50% for two, etc) */\n.column {\n    float: left;\n    width: 33.33%;\n    /* width: 30%; */\n    padding: 15px;\n  }\n.row {\n  height: 40%;\n}\nimg{\n  \n  transition: width .3s;\n  width: 90%;\n}\nimg:hover{\n  width: 100%;\n  /* margin-bottom: -10px; */\n}\n.bg-faded.p-5.rounded.category-view{\n  width: 500px;\n  height: 500px;\n}\n.button {\n  background-color: #e6a756; /* Safari */\n  transition-duration: 0.3s;\n  margin-right: 15px;\n  margin-top: 15px;\n}\n.button:hover {\n  box-shadow: 0 12px 16px 0 rgba(85, 77, 62, 0.24),0 17px 50px 0 rgba(126, 106, 65, 0.19);\n}\n.btn-meat{\n  background: #F56960;\n\n}\n.btn-veggies{\n  background-color: rgb(118, 199, 131);\n\n}\n.btn-dairy{\n  background-color: rgb(255, 252, 240);\n  /* 848586  */\n\n}\n.btn-fruits{\n  background-color: rgb(233, 153, 177);\n\n}\n.btn-spices{\n  background-color: rgb(194, 132, 122);\n\n}\n.btn-grains{\n  background-color: #DAA588;\n\n}\n.change-category {\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\n/* Clear floats after image containers */\n.row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n:host {\n    position: relative;\n  }\n.gradient {\n    position: absolute;\n  }\n.content {\n    position: relative;\n  }\n#category-view{\n    background-color: rgba(255, 255, 255, 0.85);\n    width: 400px;\n    height: 400px\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7QUFDcEU7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDRjtFQUNFLFdBQVc7QUFDYjtBQUNBOztFQUVFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHlCQUF5QixFQUNVLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVGQUF1RjtBQUN6RjtBQUdBO0VBQ0UsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0Usb0NBQW9DOztBQUV0QztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLG9DQUFvQzs7QUFFdEM7QUFDQTtFQUNFLG9DQUFvQzs7QUFFdEM7QUFDQTtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFRSx3Q0FBd0M7QUFDMUM7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFHQTtJQUNFLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaHJlZSBpbWFnZSBjb250YWluZXJzICh1c2UgMjUlIGZvciBmb3VyLCBhbmQgNTAlIGZvciB0d28sIGV0YykgKi9cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgLyogd2lkdGg6IDMwJTsgKi9cbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4ucm93IHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5pbWd7XG4gIFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuM3M7XG4gIHdpZHRoOiA5MCU7XG59XG5cbmltZzpob3ZlcntcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIG1hcmdpbi1ib3R0b206IC0xMHB4OyAqL1xufVxuXG4uYmctZmFkZWQucC01LnJvdW5kZWQuY2F0ZWdvcnktdmlld3tcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YTc1NjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzOyAvKiBTYWZhcmkgKi9cbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSg4NSwgNzcsIDYyLCAwLjI0KSwwIDE3cHggNTBweCAwIHJnYmEoMTI2LCAxMDYsIDY1LCAwLjE5KTtcbn1cblxuXG4uYnRuLW1lYXR7XG4gIGJhY2tncm91bmQ6ICNGNTY5NjA7XG5cbn1cbi5idG4tdmVnZ2llc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOCwgMTk5LCAxMzEpO1xuXG59XG4uYnRuLWRhaXJ5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDI0MCk7XG4gIC8qIDg0ODU4NiAgKi9cblxufVxuLmJ0bi1mcnVpdHN7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDE1MywgMTc3KTtcblxufVxuLmJ0bi1zcGljZXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDEzMiwgMTIyKTtcblxufVxuLmJ0bi1ncmFpbnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUE1ODg7XG5cbn1cblxuLmNoYW5nZS1jYXRlZ29yeSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG59IFxuXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciBpbWFnZSBjb250YWluZXJzICovXG4ucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuXG4gIDpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5ncmFkaWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuXG4gICNjYXRlZ29yeS12aWV3e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHhcbiAgfVxuXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_founder_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/founder-info.service */ "./src/app/services/founder-info.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CompanyComponent = class CompanyComponent {
    constructor(router, founderInfo) {
        this.founderInfo = founderInfo;
        this.founder = [];
        this.joey = this.founderInfo.getJoey();
        this.shamaun = this.founderInfo.getShamaun();
        this.dmitry = this.founderInfo.getDmitry();
        this.dylan = this.founderInfo.getDylan();
        this.usersIngredients = [];
        this.setCategory = (category) => {
            if (this.currentFounder == category)
                return;
            this.currentFounder = category;
        };
    }
    ngOnInit() {
        this.showFounder
            = false;
    }
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
    sortFounder() {
        this.founder.sort(function (a, b) {
            if (a < b)
                return -1;
            if (a > b)
                return 1;
            return 0;
        });
    }
    showJoey() {
        this.founder = this.joey;
        this.sortFounder();
        this.currentFounder = 'Joey Caruana Founder and CEO';
        this.showFounder = true;
    }
    showShamaun() {
        this.founder = this.shamaun;
        this.sortFounder();
        this.currentFounder = "Shamaun Anees Co-founder";
        this.showFounder = true;
    }
    showDylan() {
        this.founder = this.dylan;
        this.sortFounder();
        this.currentFounder = "Dylan Corbus Co-founder/Full-stack Developer";
        this.showFounder = true;
    }
    showDmitry() {
        this.founder = this.dmitry;
        this.sortFounder();
        this.currentFounder = "Dmitry Sokolov Co-founder/IOS Developer";
        this.showFounder = true;
    }
    showHerbSpice() {
        this.sortFounder();
        this.currentFounder = "herbs-spices";
        this.showFounder = true;
    }
};
CompanyComponent.ctorParameters = () => [
    { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_founder_info_service__WEBPACK_IMPORTED_MODULE_2__["FounderInfoService"] }
];
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")).default]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let MenuComponent = class MenuComponent {
    constructor(modalService, router, location) {
        this.modalService = modalService;
        this.router = router;
        this.location = location;
        this.loggedIn = true;
    }
    ngOnInit() {
    }
    searchRecipe() {
        if (this.search !== undefined) {
            // this.authService.searchRecipes(this.search).subscribe(
            //   data => {
            //     this.authService.recipe = data;
            //     // this.router.navigate(['search']);
            //     this.reload('search');
            this.search = "";
            //   }
        }
        this.clearData();
    }
    reload(link) {
        this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([link]); });
    }
    clearData() {
        this.search = '';
    }
    open() {
        // const modalRef = this.modalService.open(LoginComponent);
    }
    openLoginRegisterModal() {
        // return this.modalService.open();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/services/founder-info.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/founder-info.service.ts ***!
  \**************************************************/
/*! exports provided: FounderInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FounderInfoService", function() { return FounderInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FounderInfoService = class FounderInfoService {
    constructor() {
        this.joey = [
            'San Jose State University BS in Marketing',
            'Enabling developers to solve complex challenges quickly so they can get back to what’s important: building great products.',
        ];
        this.shamaun = [
            'San Jose State University BS in Finance',
            'A curious observer and proactive learner, I believe in analyzing problems in a way that generates insights and solutions which are remarkable in their simplicity and efficiency. Contact : Shamaun14@gmail.com , 669 234 2870',
        ];
        this.dmitry = [
            'San Jose State University BS in Computer Science',
            'This is another test message',
        ];
        this.dylan = [
            'CSU Monterey Bay BS in Information Systems',
            'I am a Full-stack Web Developer with experience using the Angular framework, Java, using Hibernate, Vertx, and Spring MVC in server-side applications, as well as development experience with Oracle Database 11g, 12c and couchbase NoSQL. I am currently working toward an OCA certification for Java 8 SE.',
        ];
    }
    getShamaun() {
        return this.shamaun;
    }
    getDmitry() {
        return this.dmitry;
    }
    getDylan() {
        return this.dylan;
    }
    getJoey() {
        return this.joey;
    }
};
FounderInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FounderInfoService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dylancorbus/Desktop/spotback-repos/spotback-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map