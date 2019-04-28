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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");





var routes = [
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"] },
    { path: ':id', component: _character_character_component__WEBPACK_IMPORTED_MODULE_3__["CharacterComponent"] },
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

module.exports = ".container {\n    margin-top: 30px;\n}\n\nli {\n    width: 25%;\n    text-align: center;\n    font-size: 20px;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxubGkge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class='row'>\n    <div class='col-xs-12'>\n      <ul class='nav nav-tabs'>\n        <li \n          *ngFor='let character of characters; let i = index'\n          routerLinkActive='active'>\n          <a [routerLink]='i'>\n            {{ character.name }}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  \n  <div class='row'>\n    <div class='col-xs-12'>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _character_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-data.service */ "./src/app/character-data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(characterDataService) {
        this.characterDataService = characterDataService;
        this.title = 'starWar';
        this.characters = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.characterDataService.characters.subscribe(function (data) {
            _this.characters = data;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_character_data_service__WEBPACK_IMPORTED_MODULE_2__["CharacterDataService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_11__["StartComponent"],
                _character_character_component__WEBPACK_IMPORTED_MODULE_8__["ShowDetails"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _character_character_component__WEBPACK_IMPORTED_MODULE_8__["ShowDetails"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/character-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/character-data.service.ts ***!
  \*******************************************/
/*! exports provided: CharacterDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDataService", function() { return CharacterDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CharacterDataService = /** @class */ (function () {
    // films = new Subject<{title:string,date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}[]>();
    function CharacterDataService(http) {
        var _this = this;
        this.http = http;
        this.forkjoin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        this.characters = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.http.get('../assets/characters.json').subscribe(function (data) {
            _this.characters.next(data['characters']);
        });
    }
    CharacterDataService.prototype.getFilms = function (url) {
        var _this = this;
        var arr = [];
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (character) {
            character['films'].forEach(function (filmUrl) {
                arr.push(_this.http.get(filmUrl));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(arr);
        }));
    };
    CharacterDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CharacterDataService);
    return CharacterDataService;
}());



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    margin-top: 30px;\n    box-sizing:border-box; \n    width:100%;\n    border-bottom: 1px solid lightgray;\n    font-size: 18px;\n}\n\nth {\n    border-bottom: 1px solid lightgray;\n}\n\nth:nth-child(3) {\n    text-align: right;\n    padding-right: 10px;\n}\n\nth,td {\n    width:40%;\n    padding-top:5px;\n    padding-bottom:5px;\n    padding-left:5px;\n}\n\ntd:nth-child(3) {\n    text-align: right;\n    padding-right: 10px;\n}\n\ntr:nth-child(odd) {\n    background: rgb(240, 240, 240);\n}\n\ntr:nth-child(1) {\n    background: transparent;\n}\n\n.spinnerDiv {\n    padding: 50px;\n}\n\nmat-spinner {\n    margin:auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDsgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxudGgge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbnRoOm50aC1jaGlsZCgzKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGgsdGQge1xuICAgIHdpZHRoOjQwJTtcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbnRkOm50aC1jaGlsZCgzKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn1cblxudHI6bnRoLWNoaWxkKDEpIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNwaW5uZXJEaXYge1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgICBtYXJnaW46YXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/character/character.component.html":
/*!****************************************************!*\
  !*** ./src/app/character/character.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class='spinnerDiv' *ngIf='isLoading'>\n    <mat-spinner></mat-spinner>\n  </div>\n  <table  *ngIf='!isLoading'>\n    <tr>\n      <th>Title</th>\n      <th>Release Date</th>\n      <th>Details</th>\n    </tr>\n    <tr *ngFor='let film of films;let i = index'>\n      <td>\n          {{ film.title }}\n      </td>\n      <td>\n          {{ film.release_date | date:'fullDate' }}\n      </td>\n      <td class='tdButton'>\n        <button class=\"btn btn-primary\" (click)='openDialog(i)'> \n          more\n        </button>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: CharacterComponent, ShowDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetails", function() { return ShowDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _character_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../character-data.service */ "./src/app/character-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(router, activeRoute, characterDataService, dialog) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.characterDataService = characterDataService;
        this.dialog = dialog;
        this.showDetails = false;
        this.isLoading = true;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionRout = this.activeRoute.params.subscribe(function (params) {
            _this.isLoading = true;
            _this.id = params['id'];
            if ('0' > _this.id || _this.id > '3') {
                _this.router.navigate(['']);
                return;
            }
            _this.subscriptionChar = _this.characterDataService.characters.subscribe(function (character) {
                _this.character = character[_this.id];
                if (_this.character) {
                    _this.subscriptionFilm = _this.characterDataService.getFilms(_this.character.url).subscribe(function (forkjoin) {
                        _this.subscriptionFork = forkjoin.subscribe(function (films) {
                            _this.isLoading = false;
                            _this.films = films;
                        });
                    });
                }
            });
        });
    };
    CharacterComponent.prototype.openDialog = function (index) {
        var dialogRef = this.dialog.open(ShowDetails, {
            width: '500px',
            data: this.films[index]
        });
    };
    CharacterComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionFork)
            this.subscriptionFork.unsubscribe();
        if (this.subscriptionFilm)
            this.subscriptionFilm.unsubscribe();
        if (this.subscriptionChar)
            this.subscriptionChar.unsubscribe();
        if (this.subscriptionRout)
            this.subscriptionRout.unsubscribe();
    };
    CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _character_data_service__WEBPACK_IMPORTED_MODULE_3__["CharacterDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CharacterComponent);
    return CharacterComponent;
}());

var ShowDetails = /** @class */ (function () {
    function ShowDetails(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ShowDetails.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShowDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ShowDetails',
            template: __webpack_require__(/*! ./showDetails.html */ "./src/app/character/showDetails.html"),
            styles: [__webpack_require__(/*! ./showDetails.css */ "./src/app/character/showDetails.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], ShowDetails);
    return ShowDetails;
}());



/***/ }),

/***/ "./src/app/character/showDetails.css":
/*!*******************************************!*\
  !*** ./src/app/character/showDetails.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n    vertical-align: top;\n    padding:5px;\n}\n\nbutton {\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL3Nob3dEZXRhaWxzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXIvc2hvd0RldGFpbHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/character/showDetails.html":
/*!********************************************!*\
  !*** ./src/app/character/showDetails.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ data.title }}</h1>\n<div mat-dialog-content>\n  <table>\n    <tr>\n      <td>Episode</td>\n      <td>{{ data.episode_id }}</td>\n    </tr>\n    <tr>\n      <td>Opening Crawl</td>\n      <td>{{ data.opening_crawl }}</td>\n    </tr>\n    <tr>\n      <td>Director</td>\n      <td>{{ data.director }}</td>\n    </tr>\n    <tr>\n      <td>Producer</td>\n      <td>{{ data.producer }}</td>\n    </tr>\n  </table>\n</div>\n<br>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Got it</button>\n</div>"

/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(dialog) {
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.log(error);
            var errorMessage = "Can not get the data!";
            if (error.error.detail) {
                errorMessage = error.error.detail;
            }
            _this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ data.message }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>OK</button>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data, router) {
        this.data = data;
        this.router = router;
        this.router.navigate(['']);
    }
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            selector: "app-error",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    padding-left: 20px;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Select a character!\n</h1>\n"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartComponent = /** @class */ (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yanghan/angularProjects/starWar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map