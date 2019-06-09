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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar  navbar-expand-lg bg-dark navbar-inverse\">\n  <a class=\"text-white navbar-brand\" href=\"\">GPACalc</a>\n  <button *ngIf=\"hasLocalStorage()\" (click)=\"clearLocalStorage()\" class=\"btn btn-outline-danger text-white ml-auto\">\n      Forget Data\n    </button>\n</nav>\n\n<div class=\"container\">\n  <div class=\"jumbotron top-pri  justify-content-center\">\n    <h1 class=\"display-8 text-center\">Your GPA is</h1>\n\n      <h2 class=\"display-6 text-center\" [countUp]=\"+gpa.toFixed(2)\"\n          [options]=\"{decimalPlaces: 2,duration: 2.0}\"\n          [ngClass] = \"{'gpa-unknown': !gpaCalcOnce}\">{{0}}</h2>\n    <div class=\"row justify-content-center\">\n      <button type=\"button\" class=\"btn calc-btn btn-primary\" (click)=\"triggerCalculate()\"><i class=\"icon-calc\"></i>\n        <span *ngIf=\"gpaCalcOnce\">Recalculate</span>\n        <span *ngIf=\"!gpaCalcOnce\">Calculate</span>\n      </button>\n    </div>\n\n  </div>\n\n\n    <!--  <div class=\"jumbotron row\">-->\n    <!--    <h1 class=\"display-6\">Hey There</h1>-->\n    <!--    <p class=\"lead\">This is a simple utility to calculate your GPA when you enter your subject grade point and credit</p>-->\n    <!--  </div>-->\n\n  <div class=\"jumbotron jumbotron-lighter row justify-content-center\">\n    <app-sub-container (gpaChange)=\"gpaDidChange($event)\" (gpaWasCalculated)=\"gpaCalculatedOnce()\">\n    </app-sub-container>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-container/sub-container.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-container/sub-container.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\" role=\"alert\">\n  Enter the Grade Point and Credit for each subject below to calculate your GPA for one semester\n</div>\n\n\n<div class=\"container subjects\">\n  <div *ngFor=\"let subject of subs\">\n\n    <app-subject [(grdP)]=\"subject.grd_p\" [(credit)]=\"subject.credit\">\n\n    </app-subject>\n\n  </div>\n</div>\n\n\n<!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"onTest()\">Show Vals</button>-->\n<div class=\"text-center\">\n  <div class=\"col-12\">\n\n    <button type=\"button\" class=\"btn add-btn btn-outline-primary\" (click)=\"onAddSubject()\"><i class=\"icon-plus\"></i>Add New Subject\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-container/subject/subject.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-container/subject/subject.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>-->\n<!--  <input pattern=\"[0-9]+\" [(ngModel)]=\"grdP\" (change)=\"onChangePointer($event)\">-->\n<!--  <input pattern=\"[0-9]+\" [(ngModel)]=\"credit\" (change)=\"onChangeCredit($event)\">-->\n<!--</p>-->\n\n<form class=\"form-inline justify-content-center\">\n\n\n  <label class=\"sr-only\" for=\"inline-points\">Points</label>\n  <div class=\"justify-content-center input-group mb-2 col-xs-6 mr-sm-2\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\">Points</div>\n    </div>\n    <input type=\"text\" pattern=\"[0-9]+\" [(ngModel)]=\"grdP\" (change)=\"onChangePointer($event)\" class=\"form-control form-control-inline\" [ngModelOptions]=\"{standalone: true}\"  id=\"inline-points\">\n  </div>\n\n  <label class=\"sr-only\" for=\"inline-credit\">Username</label>\n  <div class=\"justify-content-center input-group mb-2 col-xs-6 mr-sm-2\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\">Credit</div>\n    </div>\n    <input type=\"text\" pattern=\"[0-9]+\" [(ngModel)]=\"credit\" (change)=\"onChangeCredit($event)\" class=\"form-control form-control-inline\" [ngModelOptions]=\"{standalone: true}\" id=\"inline-credit\"  placeholder=\"\">\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-pri{\r\n  margin-top: 2em;\r\n}\r\n\r\n.jumbotron-lighter{\r\n  background-color: #eff5fb;\r\n}\r\n\r\n.calc-btn{\r\n  margin-top: .5em;\r\n}\r\n\r\n.gpa-unknown{\r\n  color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXByaXtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24tbGlnaHRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNWZiO1xyXG59XHJcblxyXG4uY2FsYy1idG57XHJcbiAgbWFyZ2luLXRvcDogLjVlbTtcclxufVxyXG5cclxuLmdwYS11bmtub3due1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _sub_container_sub_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-container/sub-container.component */ "./src/app/sub-container/sub-container.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let AppComponent = class AppComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.gpaCalcOnce = false;
        this.title = 'gpa-calc';
        this.gpa = 0;
    }
    gpaDidChange(newGPA) {
        console.log('GPADIDCHANGE:', newGPA);
        this.gpa = newGPA;
    }
    triggerCalculate() {
        this.child.recalcGPA();
    }
    gpaCalculatedOnce() {
        this.gpaCalcOnce = true;
    }
    hasLocalStorage() {
        return (localStorage.length > 0);
    }
    clearLocalStorage() {
        localStorage.clear();
        this.gpa = 0.00;
        this.gpaCalcOnce = false;
        this.child.resetDefaults();
        this.toastr.success('Cleared all data!', 'Poof!');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_sub_container_sub_container_component__WEBPACK_IMPORTED_MODULE_2__["SubContainerComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sub_container_sub_container_component__WEBPACK_IMPORTED_MODULE_2__["SubContainerComponent"])
], AppComponent.prototype, "child", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sub_container_sub_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-container/sub-container.component */ "./src/app/sub-container/sub-container.component.ts");
/* harmony import */ var _sub_container_subject_subject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-container/subject/subject.component */ "./src/app/sub-container/subject/subject.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var countup_js_angular2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! countup.js-angular2 */ "./node_modules/countup.js-angular2/fesm2015/countup.js-angular2.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _sub_container_sub_container_component__WEBPACK_IMPORTED_MODULE_4__["SubContainerComponent"],
            _sub_container_subject_subject_component__WEBPACK_IMPORTED_MODULE_5__["SubjectComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            countup_js_angular2__WEBPACK_IMPORTED_MODULE_9__["CountUpModule"],
            // NgbModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                timeOut: 3000,
                positionClass: 'toast-bottom-center',
                progressBar: true,
                progressAnimation: 'increasing'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/sub-container/sub-container.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sub-container/sub-container.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-btn{\r\n  margin-top: .5em;\r\n}\r\n.subjects{\r\n  margin-top: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWNvbnRhaW5lci9zdWItY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdWItY29udGFpbmVyL3N1Yi1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnRue1xyXG4gIG1hcmdpbi10b3A6IC41ZW07XHJcbn1cclxuLnN1YmplY3Rze1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sub-container/sub-container.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sub-container/sub-container.component.ts ***!
  \**********************************************************/
/*! exports provided: SubContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubContainerComponent", function() { return SubContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




let SubContainerComponent = class SubContainerComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.subs = [{ grd_p: 9, credit: 4 }];
        this.gpaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gpaWasCalculated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        const list = localStorage.getItem('gpaList');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(list)) {
            this.subs = JSON.parse(list);
            this.toastr.info('Welcome back!');
            this.recalcGPA();
        }
    }
    resetDefaults() {
        this.subs = [{ grd_p: 9, credit: 4 }];
    }
    onAddSubject() {
        this.subs.push({
            grd_p: 0,
            credit: 0,
        });
    }
    recalcGPA() {
        let num = 0;
        let den = 0;
        const olds = this.subs;
        this.subs = this.subs.filter((value => value.credit !== 0));
        if (olds.length !== this.subs.length) {
            this.toastr.info('Removed all 0 credit subjects', 'Fixed it for you!');
        }
        try {
            this.subs.forEach((sub) => {
                if (sub.grd_p < 0 || sub.credit < 0) {
                    throw new Error('GPAError');
                }
                num += sub.grd_p * sub.credit;
                den += sub.credit;
            });
        }
        catch (e) {
            this.toastr.error('GPA and Credit can\'t  be negative!', 'Invalid Input');
            return;
        }
        const gpa = num / den;
        this.gpaChange.emit(gpa);
        localStorage.setItem('gpaList', JSON.stringify(this.subs));
        this.gpaWasCalculated.emit(true);
        console.log(`Total Subs: ${this.subs.length}
Total Credit: ${den}`);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SubContainerComponent.prototype, "gpaChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SubContainerComponent.prototype, "gpaWasCalculated", void 0);
SubContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-container',
        template: __webpack_require__(/*! raw-loader!./sub-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-container/sub-container.component.html"),
        styles: [__webpack_require__(/*! ./sub-container.component.css */ "./src/app/sub-container/sub-container.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], SubContainerComponent);



/***/ }),

/***/ "./src/app/sub-container/subject/subject.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sub-container/subject/subject.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-inline{\r\n  max-width: 5em;\r\n}\r\n\r\n.form-inline{\r\n  flex-flow: row;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWNvbnRhaW5lci9zdWJqZWN0L3N1YmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCOztBQUV6QiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jb250YWluZXIvc3ViamVjdC9zdWJqZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLWlubGluZXtcclxuICBtYXgtd2lkdGg6IDVlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5le1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sub-container/subject/subject.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sub-container/subject/subject.component.ts ***!
  \************************************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubjectComponent = class SubjectComponent {
    constructor(ref) {
        this.ref = ref;
        this.grdPChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.creditChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.wasChanged = false;
    }
    ngOnInit() {
    }
    onChangePointer(event) {
        const change = event.target.value;
        console.log('OnChangePointer=', change);
        if (isNaN(change)) {
            this.grdP = 0;
        }
        else {
            this.grdP = +change;
            console.log('Changed Pointer:', this.grdP);
        }
        this.grdPChange.emit(this.grdP);
        this.ref.tick();
    }
    onChangeCredit(event) {
        const change = event.target.value;
        if (isNaN(change)) {
            this.credit = 0;
        }
        else {
            this.credit = +change;
            console.log('Changed Credit:', this.credit);
        }
        this.creditChange.emit(this.credit);
        this.ref.tick();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SubjectComponent.prototype, "grdP", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SubjectComponent.prototype, "grdPChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SubjectComponent.prototype, "credit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SubjectComponent.prototype, "creditChange", void 0);
SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject',
        template: __webpack_require__(/*! raw-loader!./subject.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-container/subject/subject.component.html"),
        styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/sub-container/subject/subject.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], SubjectComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\gpa-calc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map