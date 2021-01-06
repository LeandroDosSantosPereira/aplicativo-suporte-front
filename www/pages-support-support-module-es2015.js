(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Support</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content> \r\n  <div class=\"support-logo\">\r\n    <!-- <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\"> -->\r\n    <img [src]=\"imageSrc\"  alt=\"Ionic Logo\">\r\n\r\n    <!-- <img [src]=\"imageSrc\" style=\"max-width:300px;max-height:300px\"/>  -->\r\n    \r\n  </div>\r\n  <ion-item>    \r\n    <input name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\" />\r\n  </ion-item>\r\n  <!-- <ion-item> \r\n    Tag que acessa câmera   \r\n    <input name=\"imageUrl\" type=\"file\" accept=\"image/*\"  capture=\"camera\" (change)=\"handleInputChange($event)\" />\r\n  </ion-item> -->\r\n  <ion-item>        \r\n    <ion-label>Nome</ion-label>\r\n    <ion-input [(ngModel)]=\"user.name\" placeholder=\"Enter Name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>E-mail</ion-label>\r\n    <ion-input [(ngModel)]=\"user.email\" placeholder=\"Enter Age\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Senha</ion-label>\r\n    <ion-input [(ngModel)]=\"user.password\" placeholder=\"Enter Address\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-button (click)=\"update()\" color=\"primary\" size=\"block\">\r\n    Update\r\n  </ion-button>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/support/support-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");




const routes = [
    {
        path: '',
        component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/support/support-routing.module.ts");







let SupportModule = class SupportModule {
};
SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]
        ],
        declarations: [
            _support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"],
        ]
    })
], SupportModule);



/***/ }),

/***/ "./src/app/pages/support/support.scss":
/*!********************************************!*\
  !*** ./src/app/pages/support/support.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".support-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.support-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9DOlxcVXNlcnNcXGxlYW5kXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcRGV2ZWxvcG1lbnRcXGFwbGljYXRpdm8tdGhlLXN1cG9ydGUvc3JjXFxhcHBcXHBhZ2VzXFxzdXBwb3J0XFxzdXBwb3J0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwcG9ydC1sb2dvIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3VwcG9ydC1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiIsIi5zdXBwb3J0LWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXBwb3J0LWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/support/support.ts":
/*!******************************************!*\
  !*** ./src/app/pages/support/support.ts ***!
  \******************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_currentuser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/currentuser */ "./src/app/auth/currentuser.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _auth_connectionurl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/connectionurl */ "./src/app/auth/connectionurl.ts");









let SupportPage = class SupportPage {
    constructor(alertCtrl, toastCtrl, authService, activatedRoute, router, formsModule, reactiveFormsModule, domSanitizer) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formsModule = formsModule;
        this.reactiveFormsModule = reactiveFormsModule;
        this.domSanitizer = domSanitizer;
        this.submitted = false;
        this.user = { name: '', email: '', password_digest: '', photo: '' };
        this.current = new _auth_currentuser__WEBPACK_IMPORTED_MODULE_1__["CurrentUser"]();
        this.imageSrc = '';
        this.link = new _auth_connectionurl__WEBPACK_IMPORTED_MODULE_8__["ConnectionUrl"]();
    }
    ngOnInit() {
        //Pega usuário logado
        this.id = this.current.getUser();
        // Busca usuário logado na classe authService pelo id e trás os dados para o objeto ticket
        this.authService.getItem(this.id).then(response => {
            this.data = response;
            this.imageSrc = this.link.urlconnection + this.data.photo.url;
            this.user = {
                name: this.data.name,
                email: this.data.email,
                password: "",
                photo: this.data.photo
            };
        });
    }
    //Método que pega imagem do input file e convete em base 64 e guarda na variável imageSrc 
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        this.user.photo = this.imageSrc;
        console.log(this.imageSrc);
    }
    update() {
        console.log(this.user);
        //Envia o id e o usuário para o método updateItem para a classe authService
        this.authService.updateItem(this.id, this.user).subscribe(response => {
            this.router.navigate(['/login']);
        });
    }
};
SupportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }
];
SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.scss */ "./src/app/pages/support/support.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-support-support-module-es2015.js.map