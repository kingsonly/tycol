webpackJsonp([7],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_classhttp_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(nav, auth, api, alertCtrl, loadingCtrl, localNotifications) {
        this.nav = nav;
        this.auth = auth;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.localNotifications = localNotifications;
        this.username = '';
        this.email = '';
        var info = JSON.parse(localStorage.getItem('currentUser')); //this.auth.getUserInfo();
        this.username = info.data.username; // info['name'];
        this.email = info.data.token; //info['email'];
        this.homedata = JSON.parse(localStorage.getItem('homePageData'));
    }
    HomePage.prototype.ngOnInit = function () {
        this.getAllFolder();
        this.localNotifications.schedule({
            id: 1,
            text: 'Single ILocalNotification',
            sound: 'file://sound.mp3',
            data: { secret: 'test' }
        });
    };
    HomePage.prototype.getAllFolder = function () {
        var _this = this;
        this.showLoading();
        this.api.getAll('http://172.20.10.3/tycol_main/web/api/folder').subscribe(function (data) {
            if (data.status === 'success') {
                localStorage.setItem('homePageData', JSON.stringify(data.data));
                var apiData = JSON.parse(localStorage.getItem('homePageData'));
                _this.homedata = apiData;
            }
            else {
                _this.showError('No data was fetched');
            }
        }, function (error) {
            //this.showError('Poor internet');
        });
    };
    HomePage.prototype.openFolder = function (tyc_ref) {
        var _this = this;
        this.showLoading();
        this.api.getAll('http://172.20.10.3/tycol_main/web/api/folder/view?id=' + tyc_ref).subscribe(function (data) {
            if (data.status === 'success') {
                localStorage.setItem('folderData', JSON.stringify(data.data));
                _this.nav.push('FolderviewPage');
            }
            else {
                _this.showError('No data was fetched');
            }
        }, function (error) {
            _this.showError('Poor internet');
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.loading.dismiss();
    };
    HomePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kingsonly/Desktop/tycolmain/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Dashboard\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n\n<ion-content class="home" padding>\n  <h3>Welcome inside, {{username}}!</h3>\n  Your Email is: {{email}}\n\n  <ion-list>\n    <button ion-item *ngFor="let folderList of homedata" (click)="openFolder(folderList.tyc_ref)" >\n      {{folderList.tyc_ref}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kingsonly/Desktop/tycolmain/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_classhttp_service__["a" /* ClasshttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map