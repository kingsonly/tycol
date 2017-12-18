webpackJsonp([3],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialPageModule", function() { return SpecialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_core__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_controls__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_overlay_play__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_buffering__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_videogular2_buffering__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SpecialPageModule = (function () {
    function SpecialPageModule() {
    }
    return SpecialPageModule;
}());
SpecialPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__special__["a" /* FolderviewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__special__["a" /* FolderviewPage */]),
            __WEBPACK_IMPORTED_MODULE_3_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_4_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_5_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_6_videogular2_buffering__["VgBufferingModule"]
        ],
    })
], SpecialPageModule);

//# sourceMappingURL=special.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_classhttp_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FolderviewPage = (function () {
    function FolderviewPage(nav, auth, api, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.folderData = JSON.parse(localStorage.getItem('folderData'));
    }
    FolderviewPage.prototype.openComponent = function (tyc_ref) {
        var _this = this;
        this.showLoading();
        this.api.getAll('http://localhost/tycol_main/web/api/folder/view?id=' + tyc_ref).subscribe(function (data) {
            if (data.status === 'success') {
                localStorage.setItem('folderData', JSON.stringify(data.data));
                JSON.parse(localStorage.getItem('homePageData'));
                _this.nav.push('SpecialPage');
            }
            else {
                _this.showError('No data was fetched');
            }
        }, function (error) {
            _this.showError('Poor internet');
            _this.nav.push('SpecialPage');
        });
        return true;
    };
    FolderviewPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    FolderviewPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.loading.dismiss();
    };
    FolderviewPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return FolderviewPage;
}());
FolderviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-folderview',template:/*ion-inline-start:"/Users/kingsonly/Desktop/tycolmain/src/pages/special/special.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Dashboard\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let folderDatas of folderData" (click)="openComponent(folderDatas.Project)" >\n      {{folderDatas.componentName}}\n    </button>\n  </ion-list>\n\n  <vg-player>\n    <vg-overlay-play></vg-overlay-play>\n    <vg-buffering></vg-buffering>\n\n    <vg-scrub-bar>\n      <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n      <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n    </vg-scrub-bar>\n\n    <vg-controls>\n      <vg-play-pause></vg-play-pause>\n      <vg-playback-button></vg-playback-button>\n\n      <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>\n\n      <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>\n\n      <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>\n      <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>\n\n      <vg-track-selector></vg-track-selector>\n      <vg-mute></vg-mute>\n      <vg-volume></vg-volume>\n\n      <vg-fullscreen></vg-fullscreen>\n    </vg-controls>\n\n    <video [vgMedia]="media" #media id="singleVideo" preload="auto" crossorigin>\n      <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">\n      <source src="http://static.videogular.com/assets/videos/videogular.ogg" type="video/ogg">\n      <source src="http://static.videogular.com/assets/videos/videogular.webm" type="video/webm">\n\n      <track kind="subtitles" label="English" src="http://static.videogular.com/assets/subs/pale-blue-dot.vtt" srclang="en" default>\n      <track kind="subtitles" label="Español" src="http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt" srclang="es">\n    </video>\n  </vg-player>\n</ion-content>\n'/*ion-inline-end:"/Users/kingsonly/Desktop/tycolmain/src/pages/special/special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_classhttp_service__["a" /* ClasshttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], FolderviewPage);

//# sourceMappingURL=special.js.map

/***/ })

});
//# sourceMappingURL=3.js.map