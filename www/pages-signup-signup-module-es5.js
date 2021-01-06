function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Signup</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"signup-logo\">\r\n    <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\r\n  </div>\r\n\r\n  <form #signupForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\">\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Nome</ion-label>\r\n        <ion-input [(ngModel)]=\"signup.name\" name=\"name\" type=\"text\" #name=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"name.valid || submitted == false\" class=\"ion-padding-start\">\r\n          Name is required\r\n        </p>\r\n      </ion-text>\r\n      \r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">E-mail</ion-label>\r\n        <ion-input [(ngModel)]=\"signup.username\" name=\"username\" type=\"email\" #username=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\r\n          E-mail is required\r\n        </p>\r\n      </ion-text>\r\n     \r\n\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Senha</ion-label>\r\n        <ion-input [(ngModel)]=\"signup.password_digest\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n          Password is required\r\n        </p>\r\n      </ion-text>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Admin</ion-label>\r\n        <ion-checkbox color=\"primary\" [(ngModel)]=\"signup.admin\" name=\"admin\" ></ion-checkbox>\r\n      </ion-item>      \r\n\r\n    </ion-list>\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\">Create</ion-button>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");

    var routes = [{
      path: '',
      component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignUpModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpModule", function () {
      return SignUpModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");

    var SignUpModule = function SignUpModule() {
      _classCallCheck(this, SignUpModule);
    };

    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]],
      declarations: [_signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
    })], SignUpModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/signup/signup.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcbGVhbmRcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxEZXZlbG9wbWVudFxcYXBsaWNhdGl2by10aGUtc3Vwb3J0ZS9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ251cC1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIiwiLnNpZ251cC1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/signup/signup.ts ***!
    \****************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(router, userData, authService, alertCtrl, toastCtrl, loadingCtrl) {
        _classCallCheck(this, SignupPage);

        this.router = router;
        this.userData = userData;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.signup = {
          name: '',
          username: '',
          password_digest: '',
          admin: false
        };
        this.submitted = false;
      }

      _createClass(SignupPage, [{
        key: "onSignup",
        value: function onSignup(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // this.submitted = true;
                    //Objeto signup
                    this.signup = {
                      user: {
                        name: form.value.name,
                        email: form.value.username,
                        password: form.value.password,
                        admin: form.value.admin
                      }
                    };
                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      message: 'Registering...'
                    });

                  case 3:
                    loading = _context3.sent;
                    _context3.next = 6;
                    return loading.present();

                  case 6:
                    //Envia objeto signup para o metodo register na classe authservice para salvar o usuário criado
                    this.authService.register(this.signup).subscribe( // Se sucesso redireciona para página home
                    function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var toast;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.toastCtrl.create({
                                  message: 'User Created',
                                  duration: 2000,
                                  color: 'dark'
                                });

                              case 2:
                                toast = _context.sent;
                                _context.next = 5;
                                return toast.present();

                              case 5:
                                loading.dismiss();
                                form.reset();
                                this.router.navigateByUrl('/app/tabs/schedule');

                              case 8:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, // Caso não tiver sucesso exibe msg de erro
                    function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.alertCtrl.create({
                                  message: 'There is an error',
                                  buttons: ['OK']
                                });

                              case 2:
                                alert = _context2.sent;
                                loading.dismiss();
                                _context2.next = 6;
                                return alert.present();

                              case 6:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });
                    console.log(this.signup);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.scss */
      "./src/app/pages/signup/signup.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map