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

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet style=\"z-index: 2;\"></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/counselor-profile/counselor-profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counselor-profile/counselor-profile.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/counselors/counselors.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counselors/counselors.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faq/faq.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faq/faq.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div class=\"example-button-row\">\n        <a mat-button class=\"font-resize header-hover \"  routerLink=\"/\">Home</a>\n        <a mat-button class=\"font-resize header-hover\" routerLink=\"/counselors\">Counselors</a>\n        <a mat-button class=\"font-resize header-hover\" routerLink=\"/faq\">FAQ</a>\n        <a mat-button class=\"font-resize header-hover\" routerLink=\"/about-us\">About Us</a>\n    </div>\n\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"fill-remaining-space\"></span>\n  \n    <span class=\"font-resize\" *ngIf=\"checkUserLoggedIn(); else elseBlock\" routerLink=\"/profile\">\n        <button mat-button class=\"font-resize header-hover\">Welcome</button>\n        <button mat-button class=\"font-resize header-hover\" (click)=\"logout()\">Logout</button>\n    </span>\n    <ng-template #elseBlock class=\"font-resize sign-in\">\n        <button mat-icon-button color=\"basic\">\n            <mat-icon class=\"font-resize header-hover\" style=\"padding-left: 5px;\" routerLink=\"/login\">person_add</mat-icon>\n        </button>\n    </ng-template>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel\">\n  <div class=\"login card\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group center-align\">\n          <mat-form-field class=\"full-width font-resize\" >          \n            <input matInput [class.is-invalid]=\"getUsername.invalid && getUsername.touched\" type=\"text\" placeholder=\"Username\" formControlName=\"username\" class=\"form-control\" id=\"username\" name=\"username\" >\n          </mat-form-field>\n          \n          <div *ngIf=\"getUsername.invalid && getUsername.touched\" style=\"text-align: center;\" class=\"error-message\">\n            <small  *ngIf=\"getUsername.errors ?.required\">Username is required<br></small>\n            <small *ngIf=\"getUsername.errors ?.value\">Email is not correct</small>\n          </div>\n        </div>\n        <div class=\"form-group center-align\">\n          <mat-form-field class=\"full-width  font-resize\">     \n            <input matInput placeholder=\"Password\" [class.is-invalid]=\"getPassword.invalid && getPassword.touched\" type=\"password\" formControlName=\"password\"  id=\"password\" name=\"password\" class=\"form-control font-resize\"/>\n          </mat-form-field>\n  \n          <div *ngIf=\"getPassword.invalid && getPassword.touched\" style=\"text-align: center;\" class=\"error-message\">\n            <small *ngIf=\"getPassword.errors ?.required\">Password is required<br></small>\n            <small *ngIf=\"getPassword.errors ?.minlength\">Password must be atleast of 4 characters<br></small>\n            <small *ngIf=\"getPassword.errors ?.valueUpper\">atleast 1 uppercase character<br></small>\n            <small *ngIf=\"getPassword.errors ?.valueNumber\">atleast 1 number<br></small>\n            <small *ngIf=\"getPassword.errors ?.valueLower\">atleast 1 lowercase character<br></small>\n            <small *ngIf=\"getPassword.errors ?.valueSpecial\">0 special characters<br></small>\n          </div>     \n        </div>\n        <small id=\"credentials\" class=\"text-danger\" >{{credentialsMatch}}</small>\n        <div style=\"border-top: 1px solid white;padding-top: 20px;\"> \n          <button mat-button color=\"primary\" type=\"submit\" class=\"font-resize\" [disabled]=\"!loginForm.valid\" id=\"login_button\" [class.btn-primary]=\"'!loginForm.valid'\">LOGIN</button>\n          <button mat-button color=\"primary\" id=\"register\"  class=\"font-resize\" routerLink=\"/register\">SIGN IN</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/seeker-profile/seeker-profile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/seeker-profile/seeker-profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div class=\"body\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICBoZWlnaHQ6OTElO1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMywgNTgsIDE4MywgMC4zMik7XHJcbiAgICBcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ApiService = /** @class */ (function () {
    function ApiService(httpclient) {
        this.httpclient = httpclient;
    }
    ApiService.prototype.login = function (data) {
        return this.httpclient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginapi, data);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _counselor_profile_counselor_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counselor-profile/counselor-profile.component */ "./src/app/counselor-profile/counselor-profile.component.ts");
/* harmony import */ var _seeker_profile_seeker_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seeker-profile/seeker-profile.component */ "./src/app/seeker-profile/seeker-profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _counselors_counselors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counselors/counselors.component */ "./src/app/counselors/counselors.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'counselor-profile', component: _counselor_profile_counselor_profile_component__WEBPACK_IMPORTED_MODULE_5__["CounselorProfileComponent"] },
    { path: 'seeker-profile', component: _seeker_profile_seeker_profile_component__WEBPACK_IMPORTED_MODULE_6__["SeekerProfileComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"] },
    { path: 'counselors', component: _counselors_counselors_component__WEBPACK_IMPORTED_MODULE_9__["CounselorsComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counselor_profile_counselor_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./counselor-profile/counselor-profile.component */ "./src/app/counselor-profile/counselor-profile.component.ts");
/* harmony import */ var _seeker_profile_seeker_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./seeker-profile/seeker-profile.component */ "./src/app/seeker-profile/seeker-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _counselors_counselors_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./counselors/counselors.component */ "./src/app/counselors/counselors.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _counselor_profile_counselor_profile_component__WEBPACK_IMPORTED_MODULE_14__["CounselorProfileComponent"],
                _seeker_profile_seeker_profile_component__WEBPACK_IMPORTED_MODULE_15__["SeekerProfileComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _counselors_counselors_component__WEBPACK_IMPORTED_MODULE_20__["CounselorsComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_22__["FaqComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"]
            ],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counselor-profile/counselor-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/counselor-profile/counselor-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbG9yLXByb2ZpbGUvY291bnNlbG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY291bnNlbG9yLXByb2ZpbGUvY291bnNlbG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICBoZWlnaHQ6OTElO1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMywgNTgsIDE4MywgMC4zMik7XHJcbiAgICBcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/counselor-profile/counselor-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/counselor-profile/counselor-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: CounselorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounselorProfileComponent", function() { return CounselorProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounselorProfileComponent = /** @class */ (function () {
    function CounselorProfileComponent() {
    }
    CounselorProfileComponent.prototype.ngOnInit = function () {
    };
    CounselorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counselor-profile',
            template: __webpack_require__(/*! raw-loader!./counselor-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/counselor-profile/counselor-profile.component.html"),
            styles: [__webpack_require__(/*! ./counselor-profile.component.css */ "./src/app/counselor-profile/counselor-profile.component.css")]
        })
    ], CounselorProfileComponent);
    return CounselorProfileComponent;
}());



/***/ }),

/***/ "./src/app/counselors/counselors.component.css":
/*!*****************************************************!*\
  !*** ./src/app/counselors/counselors.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbG9ycy9jb3Vuc2Vsb3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvdW5zZWxvcnMvY291bnNlbG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjAlO1xyXG4gICAgbGVmdDowJTtcclxuICAgIGhlaWdodDo5MSU7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLCA1OCwgMTgzLCAwLjMyKTtcclxuICAgIFxyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/counselors/counselors.component.ts":
/*!****************************************************!*\
  !*** ./src/app/counselors/counselors.component.ts ***!
  \****************************************************/
/*! exports provided: CounselorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounselorsComponent", function() { return CounselorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounselorsComponent = /** @class */ (function () {
    function CounselorsComponent() {
    }
    CounselorsComponent.prototype.ngOnInit = function () {
    };
    CounselorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counselors',
            template: __webpack_require__(/*! raw-loader!./counselors.component.html */ "./node_modules/raw-loader/index.js!./src/app/counselors/counselors.component.html"),
            styles: [__webpack_require__(/*! ./counselors.component.css */ "./src/app/counselors/counselors.component.css")]
        })
    ], CounselorsComponent);
    return CounselorsComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBDQUEwQzs7QUFFOUM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6MCU7XHJcbiAgICBsZWZ0OjAlO1xyXG4gICAgaGVpZ2h0OjkxJTtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDMsIDU4LCAxODMsIDAuMzIpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        })
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n    -webkit-box-flex: 2;\r\n            flex: 2 1 auto;\r\n}\r\n\r\n \r\n.header-item {\r\n    padding-right: 45px;\r\n}\r\n\r\n \r\n.header-hover:hover {\r\n    color: rgb(0, 0, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n \r\n.font-resize {\r\n    font-size: 1.5vw;\r\n}\r\n\r\n \r\nmat-icon:hover, .sign-in:hover {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICBmbGV4OiAyIDEgYXV0bztcclxufVxyXG5cclxuIFxyXG4uaGVhZGVyLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxufVxyXG5cclxuLmhlYWRlci1ob3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9udC1yZXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxufVxyXG5cclxubWF0LWljb246aG92ZXIsIC5zaWduLWluOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_route) {
        this._route = _route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.checkUserLoggedIn = function () {
        if (localStorage.getItem('jwt')) {
            return true;
        }
        return false;
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this._route.navigate(['']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICBoZWlnaHQ6OTElO1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMywgNTgsIDE4MywgMC4zMik7XHJcbiAgICBcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    padding: 1.4%;\r\n    position:absolute;\r\n    top:25%;\r\n    left:25%;\r\n    color: #0e0e0e;\r\n    border: 2px solid rgb(103, 58, 183);\r\n    border-radius: 25px;\r\n    margin-left:auto;\r\n    margin-right: auto;\r\n    width: 45%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    background-color: #673ab721;\r\n    z-index: 2;\r\n}\r\n.card {\r\n    box-shadow: 0 0 10px 5px white;\r\n    text-align: center;\r\n}\r\n.centered{\r\n    text-align: center;   \r\n}\r\nbutton:hover {\r\n    background-color: rgb(103, 58, 183);\r\n    color: white;\r\n}\r\n.container{\r\n    margin-top: 20px;\r\n}\r\n.full-width {\r\n    width: 60%;\r\n}\r\n.error-message {\r\n    text-align: left;\r\n    color: red;\r\n}\r\n.font-resize {\r\n    font-size: 1.5vw;\r\n}\r\n.panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMENBQTBDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIHBhZGRpbmc6IDEuNCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDoyNSU7XHJcbiAgICBsZWZ0OjI1JTtcclxuICAgIGNvbG9yOiAjMGUwZTBlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwMywgNTgsIDE4Myk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNzIxO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCA1OCwgMTgzKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb250LXJlc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6MCU7XHJcbiAgICBsZWZ0OjAlO1xyXG4gICAgaGVpZ2h0OjkxJTtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDMsIDU4LCAxODMsIDAuMzIpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/form-validators */ "./src/app/shared/form-validators.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _apiservice, route) {
        this.fb = fb;
        this._apiservice = _apiservice;
        this.route = route;
        this.credentialsMatch = "";
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_form_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _shared_form_validators__WEBPACK_IMPORTED_MODULE_3__["passwordNumberValidator"], _shared_form_validators__WEBPACK_IMPORTED_MODULE_3__["passwordLowerCaseValidator"], _shared_form_validators__WEBPACK_IMPORTED_MODULE_3__["passwordSpecialValidator"], _shared_form_validators__WEBPACK_IMPORTED_MODULE_3__["passwordUpperCaseValidator"]]]
        });
    }
    Object.defineProperty(LoginComponent.prototype, "getUsername", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "getPassword", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._apiservice.login(this.loginForm.value)
            .subscribe(function (data) { return _this.saveData(data); }, function (error) { return _this.errorData(error); });
    };
    LoginComponent.prototype.errorData = function (error) {
        this.credentialsMatch = "credentials dosen't match each other";
    };
    LoginComponent.prototype.saveData = function (data) {
        this.userData = data;
        localStorage.setItem('jwt', this.userData.token);
        // this.route.navigate(['/profile']);
        console.log("before routing " + this.userData.token);
        if (this.userData.data.role == "counselor") {
            this.route.navigate(['/counselor-profile']);
        }
        else {
            this.route.navigate(['/seeker-profile']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICBoZWlnaHQ6OTElO1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMywgNTgsIDE4MywgMC4zMik7XHJcbiAgICBcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/seeker-profile/seeker-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/seeker-profile/seeker-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    position:relative;\r\n    top:0%;\r\n    left:0%;\r\n    height:91%;\r\n    width:80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: rgba(103, 58, 183, 0.32);\r\n    \r\n}\r\n\r\n.body {\r\n    position:absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vla2VyLXByb2ZpbGUvc2Vla2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2Vla2VyLXByb2ZpbGUvc2Vla2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICBoZWlnaHQ6OTElO1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMywgNTgsIDE4MywgMC4zMik7XHJcbiAgICBcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/seeker-profile/seeker-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/seeker-profile/seeker-profile.component.ts ***!
  \************************************************************/
/*! exports provided: SeekerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekerProfileComponent", function() { return SeekerProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeekerProfileComponent = /** @class */ (function () {
    function SeekerProfileComponent() {
    }
    SeekerProfileComponent.prototype.ngOnInit = function () {
    };
    SeekerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seeker-profile',
            template: __webpack_require__(/*! raw-loader!./seeker-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/seeker-profile/seeker-profile.component.html"),
            styles: [__webpack_require__(/*! ./seeker-profile.component.css */ "./src/app/seeker-profile/seeker-profile.component.css")]
        })
    ], SeekerProfileComponent);
    return SeekerProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/form-validators.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/form-validators.ts ***!
  \*******************************************/
/*! exports provided: emailValidator, passwordSpecialValidator, passwordUpperCaseValidator, passwordLowerCaseValidator, passwordNumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordSpecialValidator", function() { return passwordSpecialValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpperCaseValidator", function() { return passwordUpperCaseValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordLowerCaseValidator", function() { return passwordLowerCaseValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordNumberValidator", function() { return passwordNumberValidator; });
function emailValidator(control) {
    var valid = /(\S+@\S+)|()/.test(control.value);
    return valid ? null : { 'value': { value: true } };
}
function passwordSpecialValidator(control) {
    var valid = true;
    if (/(?=[!|@|#|$|%|^|&|*|(|)|_|+||{|}|:|"|<|>|?|~|`|\||,|.|\/|;|'|[|\]])/.test(control.value)) {
        valid = false;
    }
    return valid ? null : { 'valueSpecial': { value: true } };
}
function passwordUpperCaseValidator(control) {
    var valid = false;
    if (/(?=[A-Z])/.test(control.value)) {
        valid = true;
    }
    return valid ? null : { 'valueUpper': { value: true } };
}
function passwordLowerCaseValidator(control) {
    var valid = false;
    if (/(?=[a-z])/.test(control.value)) {
        valid = true;
    }
    return valid ? null : { 'valueLower': { value: true } };
}
function passwordNumberValidator(control) {
    var valid = false;
    if (/(?=[0-9])/.test(control.value)) {
        valid = true;
    }
    return valid ? null : { 'valueNumber': { value: true } };
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    loginapi: 'http://filemaker/public/index.php/api/v1/login',
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mindfire\Desktop\upload\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map