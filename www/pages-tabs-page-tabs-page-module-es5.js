function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"presentPopover($event)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"about-header\">\r\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\r\n    <div class=\"about-image madison\" [ngStyle]=\"location === 'madison' && {'opacity': '1'}\"></div>\r\n    <div class=\"about-image austin\" [ngStyle]=\"location === 'austin' && {'opacity': '1'}\"></div>\r\n    <div class=\"about-image chicago\" [ngStyle]=\"location === 'chicago' && {'opacity': '1'}\"></div>\r\n    <div class=\"about-image seattle\" [ngStyle]=\"location === 'seattle' && {'opacity': '1'}\"></div>\r\n  </div>\r\n\r\n  <div class=\"about-info\">\r\n    <h3 class=\"ion-padding-top ion-padding-start\">About</h3>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end\">\r\n      The Ionic Conference is a one-day conference on {{ conferenceDate | date: 'mediumDate' }} featuring talks from the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers – making this the largest Ionic conference ever!\r\n    </p>\r\n\r\n    <h3 class=\"ion-padding-top ion-padding-start\">Details</h3>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          Location\r\n        </ion-label>\r\n        <ion-select [(ngModel)]=\"location\" [interfaceOptions]=\"selectOptions\">\r\n          <ion-select-option value=\"madison\">Madison, WI</ion-select-option>\r\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\r\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\r\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          Date\r\n        </ion-label>\r\n        <ion-datetime\r\n          displayFormat=\"MMM DD, YYYY\"\r\n          max=\"2056\"\r\n          [(ngModel)]=\"conferenceDate\">\r\n        </ion-datetime>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <h3 class=\"ion-padding-top ion-padding-start\">Internet</h3>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          Wifi network\r\n        </ion-label>\r\n        <ion-label class=\"ion-text-end\">\r\n          ica{{conferenceDate | date: 'y'}}\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          Password\r\n        </ion-label>\r\n        <ion-label class=\"ion-text-end\">\r\n          makegoodthings\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form (ngSubmit)=\"logForm()\">\r\n    <ion-item>    \r\n      <input [(ngModel)]='cleanFile' name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\" />\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Titulo</ion-label>\r\n      <ion-input [(ngModel)]=\"data.title\" name=\"title\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Destinatário</ion-label>\r\n      <ion-select [(ngModel)]=\"data.ads_id\" name=\"ads_id\">\r\n        <ion-select-option *ngFor=\"let user of usersList\" value=\"{{ user.id }}\">\r\n          {{ user.email }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <!-- Textarea in an item with a floating label -->\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Description</ion-label>\r\n    <ion-textarea [(ngModel)]=\"data.text\" name=\"text\"></ion-textarea>\r\n  </ion-item>\r\n  \r\n  <div id=\"commntDiv\">\r\n  <ion-item>\r\n    <ion-label position=\"stacked\" color=\"primary\">Arte para aprovação?</ion-label>\r\n    <ion-checkbox color=\"primary\"  name=\"admin\" ></ion-checkbox>\r\n  </ion-item>      \r\n </div>\r\n\r\n    <ion-button ion-button type=\"submit\" expand=\"block\">Cadastrar ticket</ion-button>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleFilterScheduleFilterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\r\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Filter Sessions\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\r\n    <ion-list-header>Tracks</ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\r\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\r\n      <ion-label>{{track.name}}</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer translucent=\"true\" *ngIf=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleScheduleHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{nameUser.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\" edge>\r\n    <ion-fab-button color=\"primary\" (click)=\"goTicketCreatePage()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-card *ngFor=\"let ticket of tickets\" (click)=\"getTicketId(ticket.id)\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"ticket.photo\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>{{ticket.name}}</h3>\r\n        <p>{{ticket.date}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-card-header>\r\n      <p>TICKET ID - {{ticket.id}}</p>\r\n      <ion-card-title> {{ticket.title}}</ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionDetailSessionDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleFavorite()\">\r\n        <ion-icon *ngIf=\"!isFavorite\" slot=\"icon-only\" name=\"star-outline\"></ion-icon>\r\n        <ion-icon *ngIf=\"isFavorite\" slot=\"icon-only\" name=\"star\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"shareSession()\">\r\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"session\" class=\"ion-padding\">\r\n    <h1>{{session.name}}</h1>\r\n    <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\r\n    <p>{{session.description}}</p>\r\n    <ion-text color=\"medium\">\r\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\r\n      <br /> {{session.location}}\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item (click)=\"sessionClick('watch')\" button>\r\n      <ion-label color=\"primary\">Watch</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\r\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\r\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('download video')\" button>\r\n      <ion-label color=\"primary\">Download Video</ion-label>\r\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\r\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerDetailSpeakerDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"speaker-detail\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons *ngIf=\"speaker\" slot=\"end\">\r\n        <ion-button (click)=\"openContact(speaker)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"openSpeakerShare(speaker)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"speaker-background\">\r\n    <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\r\n    <h2>{{speaker?.name}}</h2>\r\n  </div>\r\n\r\n  <div class=\"ion-padding speaker-detail\">\r\n    <p>{{speaker?.about}} Say hello on social media!</p>\r\n\r\n    <hr>\r\n\r\n    <ion-chip color=\"twitter\" button (click)=\"openExternalUrl('https://twitter.com/' + speaker.twitter)\">\r\n      <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      <ion-label>Twitter</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip color=\"dark\" button (click)=\"openExternalUrl('https://github.com/ionic-team/ionic')\">\r\n      <ion-icon name=\"logo-github\"></ion-icon>\r\n      <ion-label>GitHub</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip color=\"instagram\" button (click)=\"openExternalUrl('https://instagram.com/ionicframework')\">\r\n      <ion-icon name=\"logo-instagram\"></ion-icon>\r\n      <ion-label>Instagram</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerListSpeakerListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Speakers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Speakers</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\r\n        <ion-card class=\"speaker-card\">\r\n          <ion-card-header>\r\n            <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\r\n              <ion-avatar slot=\"start\">\r\n                <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>{{speaker.name}}</h2>\r\n                <p>{{speaker.title}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list lines=\"none\">\r\n              <ion-item *ngFor=\"let session of speaker.sessions\" detail=\"false\" routerLink=\"/app/tabs/speakers/session/{{session.id}}\">\r\n                <ion-label>\r\n                  <h3>{{session.name}}</h3>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item detail=\"false\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\r\n                <ion-label>\r\n                  <h3>About {{speaker.name}}</h3>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsPageTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"speakers\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"location\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/about-popover/about-popover.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/about-popover/about-popover.ts ***!
    \******************************************************/

  /*! exports provided: PopoverPage */

  /***/
  function srcAppPagesAboutPopoverAboutPopoverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PopoverPage =
    /*#__PURE__*/
    function () {
      function PopoverPage(popoverCtrl) {
        _classCallCheck(this, PopoverPage);

        this.popoverCtrl = popoverCtrl;
      }

      _createClass(PopoverPage, [{
        key: "support",
        value: function support() {
          // this.app.getRootNavs()[0].push('/support');
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "close",
        value: function close(url) {
          window.open(url, '_blank');
          this.popoverCtrl.dismiss();
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverPage);
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
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


    var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");

    var routes = [{
      path: '',
      component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
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


    var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
      declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
    })], AboutModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/about/about.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxsZWFuZFxcT25lRHJpdmVcXERvY3VtZW50b3NcXERldmVsb3BtZW50XFxhcGxpY2F0aXZvLXRoZS1zdXBvcnRlL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXRcXGFib3V0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBOzs7RUFHRSxjQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxVQUFBO0VBRUEsNkNBQUE7RUFBQSxxQ0FBQTtBQ05GOztBRFNBO0VBQ0Usb0RBQUE7QUNORjs7QURRQTtFQUNFLG1EQUFBO0FDTEY7O0FET0E7RUFDRSxvREFBQTtBQ0pGOztBRE1BO0VBQ0Usb0RBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0FDSkY7O0FET0E7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDSkY7O0FET0E7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XHJcbn1cclxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XHJcbn1cclxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcclxufVxyXG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBoMyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmFib3V0LWluZm8gaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBwIHtcclxuICBsaW5lLWhlaWdodDogMTMwJTtcclxuXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmFib3V0LWluZm8gaW9uLWljb24ge1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xyXG59XHJcblxyXG4vKlxyXG4gKiBpT1MgT25seVxyXG4gKi9cclxuXHJcbi5pb3MgLmFib3V0LWluZm8ge1xyXG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XHJcbn1cclxuXHJcbi5pb3MgLmFib3V0LWluZm8gaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLypcbiAqIGlPUyBPbmx5XG4gKi9cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/about/about.ts ***!
    \**************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(popoverCtrl) {
        _classCallCheck(this, AboutPage);

        this.popoverCtrl = popoverCtrl;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
          header: 'Select a Location'
        };
      }

      _createClass(AboutPage, [{
        key: "presentPopover",
        value: function presentPopover(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                      event: event
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.scss */
      "./src/app/pages/about/about.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], AboutPage);
    /***/
  },

  /***/
  "./src/app/pages/map/map-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/map/map-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppPagesMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
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


    var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");

    var routes = [{
      path: '',
      component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    };

    MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");
    /* harmony import */


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/pages/map/map-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      declarations: [_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"]]
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.scss":
  /*!************************************!*\
    !*** ./src/app/pages/map/map.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL0M6XFxVc2Vyc1xcbGVhbmRcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxEZXZlbG9wbWVudFxcYXBsaWNhdGl2by10aGUtc3Vwb3J0ZS9zcmNcXGFwcFxccGFnZXNcXG1hcFxcbWFwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNhbnZhcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLnNob3ctbWFwIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiIsIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.ts":
  /*!**********************************!*\
    !*** ./src/app/pages/map/map.ts ***!
    \**********************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppPagesMapMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
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


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _auth_currentuser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth/currentuser */
    "./src/app/auth/currentuser.ts");
    /* harmony import */


    var _auth_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/ticket.service */
    "./src/app/auth/ticket.service.ts");

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(ticketService, authService, router) {
        _classCallCheck(this, MapPage);

        this.ticketService = ticketService;
        this.authService = authService;
        this.router = router;
        this.data = {
          user_id: '',
          title: '',
          ads_id: '',
          text: ''
        };
        this.current = new _auth_currentuser__WEBPACK_IMPORTED_MODULE_4__["CurrentUser"]();
        this.imageSrc = '';
        this.img = '';
        this.cleanFile = "";
      }

      _createClass(MapPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadPage();
        }
      }, {
        key: "loadPage",
        value: function loadPage() {
          var _this = this;

          // Pega o id do usuário logado
          this.id = this.current.getUser(); // Chama o método getAll da classe auService e salva na userList a lista de usuários

          this.authService.getAll().then(function (d) {
            _this.usersList = d; // Bloco que faz a verificação se é admin para exibir ou não o campo
            //  correspondente na view     

            for (var i = 0; i < _this.usersList.length; i++) {
              if (_this.id == _this.usersList[i].id) {
                if (_this.usersList[i].admin == false) {
                  document.getElementById("commntDiv").style.display = 'none';
                }
              }
            }
          });
        } //Método que pega imagem do input file e convete em base 64 e guarda na variável imageSrc 

      }, {
        key: "handleInputChange",
        value: function handleInputChange(e) {
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
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(e) {
          var reader = e.target;
          this.imageSrc = reader.result;
          this.img = this.imageSrc;
        }
      }, {
        key: "logForm",
        value: function logForm() {
          var _this2 = this;

          // Cria um objeto ticket
          this.ticket = {
            ticket: {
              user_id: this.id,
              title: this.data.title,
              ads_id: this.data.ads_id,
              text: this.data.text,
              image: this.img
            }
          }; // Envia o objeto ticket para o método create da classe ticketService

          this.ticketService.create(this.ticket).subscribe(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.data = {
                        user_id: '',
                        title: '',
                        ads_id: '',
                        text: ''
                      };
                      this.cleanFile = '';
                      this.router.navigateByUrl('/app/tabs/schedule');

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: _auth_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.scss */
      "./src/app/pages/map/map.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MapPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Material Design\n */\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md ion-list {\n  background: inherit;\n}\n/*\n * iOS\n */\n.ios ion-list-header {\n  margin-top: 10px;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL0M6XFxVc2Vyc1xcbGVhbmRcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxEZXZlbG9wbWVudFxcYXBsaWNhdGl2by10aGUtc3Vwb3J0ZS9zcmNcXGFwcFxccGFnZXNcXHNjaGVkdWxlLWZpbHRlclxcc2NoZWR1bGUtZmlsdGVyLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtBQ0FGO0FESUE7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0FDRkY7QURLQTtFQUNFLCtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBNYXRlcmlhbCBEZXNpZ25cclxuICovXHJcblxyXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5tZCBpb24tY2hlY2tib3gge1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLm1kIGlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLypcclxuICogaU9TXHJcbiAqL1xyXG5cclxuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pb3MgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiIsIi8qXG4gKiBNYXRlcmlhbCBEZXNpZ25cbiAqL1xuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tZCBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi8qXG4gKiBpT1NcbiAqL1xuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9zIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
    \**********************************************************/

  /*! exports provided: ScheduleFilterPage */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function () {
      return ScheduleFilterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var ScheduleFilterPage =
    /*#__PURE__*/
    function () {
      function ScheduleFilterPage(confData, config, modalCtrl, navParams) {
        _classCallCheck(this, ScheduleFilterPage);

        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
      }

      _createClass(ScheduleFilterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          this.ios = this.config.get('mode') === "ios"; // passed in array of track names that should be excluded (unchecked)

          var excludedTrackNames = this.navParams.get('excludedTracks');
          this.confData.getTracks().subscribe(function (tracks) {
            tracks.forEach(function (track) {
              _this3.tracks.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackNames.indexOf(track.name) === -1
              });
            });
          });
        }
      }, {
        key: "selectAll",
        value: function selectAll(check) {
          // set all to checked or unchecked
          this.tracks.forEach(function (track) {
            track.isChecked = check;
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          // Pass back a new array of track names to exclude
          var excludedTrackNames = this.tracks.filter(function (c) {
            return !c.isChecked;
          }).map(function (c) {
            return c.name;
          });
          this.dismiss(excludedTrackNames);
        }
      }, {
        key: "dismiss",
        value: function dismiss(data) {
          // using the injected ModalController this page
          // can "dismiss" itself and pass back data
          this.modalCtrl.dismiss(data);
        }
      }]);

      return ScheduleFilterPage;
    }();

    ScheduleFilterPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-filter.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-filter.scss */
      "./src/app/pages/schedule-filter/schedule-filter.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ScheduleFilterPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SchedulePageRoutingModule */

  /***/
  function srcAppPagesScheduleScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
      return SchedulePageRoutingModule;
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


    var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: '',
      component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }];

    var SchedulePageRoutingModule = function SchedulePageRoutingModule() {
      _classCallCheck(this, SchedulePageRoutingModule);
    };

    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/schedule/schedule.module.ts ***!
    \***************************************************/

  /*! exports provided: ScheduleModule */

  /***/
  function srcAppPagesScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleModule", function () {
      return ScheduleModule;
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


    var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule-routing.module */
    "./src/app/pages/schedule/schedule-routing.module.ts");

    var ScheduleModule = function ScheduleModule() {
      _classCallCheck(this, ScheduleModule);
    };

    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]],
      declarations: [_schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"], _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]],
      entryComponents: [_schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]]
    })], ScheduleModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/schedule/schedule.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleScheduleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n * Material Design uses the ripple for activated\n * so only style the iOS activated background\n */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvQzpcXFVzZXJzXFxsZWFuZFxcT25lRHJpdmVcXERvY3VtZW50b3NcXERldmVsb3BtZW50XFxhcGxpY2F0aXZvLXRoZS1zdXBvcnRlL3NyY1xcYXBwXFxwYWdlc1xcc2NoZWR1bGVcXHNjaGVkdWxlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQ0FGOztBREdBOzs7RUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FDQUY7O0FEaUJFO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRFlFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRE9FO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREhFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ01KOztBRFJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRGJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURsQkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRHZCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUMwQko7O0FENUJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQytCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmYpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjZjJmMmYyKTtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxuXHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcclxuICogc28gb25seSBzdHlsZSB0aGUgaU9TIGFjdGl2YXRlZCBiYWNrZ3JvdW5kXHJcbiAqL1xyXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xyXG59XHJcblxyXG4kY2F0ZWdvcmllczogKFxyXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXHJcbiAgYW5ndWxhcjogI2FjMjgyYixcclxuICBjb21tdW5pY2F0aW9uOiAjOGU4ZDkzLFxyXG4gIHRvb2xpbmc6ICNmZTRjNTIsXHJcbiAgc2VydmljZXM6ICNmZDhiMmQsXHJcbiAgZGVzaWduOiAjZmVkMDM1LFxyXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxyXG4gIGZvb2Q6ICMzYmM3YzQsXHJcbiAgZG9jdW1lbnRhdGlvbjogI2IxNmJlMyxcclxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXHJcbik7XHJcblxyXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XHJcbiAgaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz0nI3skdHJhY2t9J10gaW9uLWxhYmVsIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHZhbHVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9aW9uaWNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9YW5ndWxhcl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWMyODJiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Y29tbXVuaWNhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOGU4ZDkzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9dG9vbGluZ10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmU0YzUyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9c2VydmljZXNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkOGIyZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRlc2lnbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmVkMDM1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9d29ya3Nob3BdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY5YmI3YjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWZvb2RdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNiYzdjNDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRvY3VtZW50YXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2IxNmJlMztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPW5hdmlnYXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2MDBjYztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/schedule/schedule.ts ***!
    \********************************************/

  /*! exports provided: SchedulePage */

  /***/
  function srcAppPagesScheduleScheduleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
      return SchedulePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_connectionurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../auth/connectionurl */
    "./src/app/auth/connectionurl.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _auth_ticket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../auth/ticket.service */
    "./src/app/auth/ticket.service.ts");
    /* harmony import */


    var _auth_currentuser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../auth/currentuser */
    "./src/app/auth/currentuser.ts");
    /* harmony import */


    var _auth_formatdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../auth/formatdate */
    "./src/app/auth/formatdate.ts");

    var SchedulePage =
    /*#__PURE__*/
    function () {
      function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config, ticketService, authService) {
        _classCallCheck(this, SchedulePage);

        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.ticketService = ticketService;
        this.authService = authService;
        this.tickets = new Array();
        this.current = new _auth_currentuser__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"]();
        this.nameUser = {
          name: ''
        };
        this.formatDate = new _auth_formatdate__WEBPACK_IMPORTED_MODULE_10__["FormatDate"]();
        this.link = new _auth_connectionurl__WEBPACK_IMPORTED_MODULE_1__["ConnectionUrl"]();
      }

      _createClass(SchedulePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Função Assincrona para esperar o a requisição http da api 

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Carregando ...'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    // Instância novamente  para limpar o array 
                    this.tickets = new Array(); // Pega o usuário logado

                    this.id = this.current.getUser(); //Seta o nome do Usuário no cabeçalho página

                    this.authService.getItem(this.id).then(function (r) {
                      _this4.nameUser = r;
                    }); // Pega a lista de tickets da classe ticketService

                    this.ticketService.getTicketList().then(function (response) {
                      _this4.data = response;

                      var _loop = function _loop(i) {
                        // Laço do tamanho da lista de tickets chama o metodo getItem da classe authService buscando o usuário pelo id 
                        _this4.authService.getItem(_this4.data[i].user_id).then(function (response) {
                          _this4.users = response; // Compara se o usuário logado está no ticket como remetente ou destinatário do ticket

                          if (_this4.id == Object.values(_this4.data[i])[5] || _this4.id == Object.values(_this4.data[i])[2]) {
                            // Seta valores no objeto ticket
                            _this4.get_tickets = {
                              photo: _this4.link.urlconnection + _this4.users.photo.url,
                              name: _this4.users.name,
                              id: _this4.data[i].id,
                              title: _this4.data[i].title,
                              date: _this4.formatDate.format(_this4.data[i].created_at)
                            }; // Adiciona o objeto ticket no Array

                            _this4.tickets.push(_this4.get_tickets);
                          }
                        });
                      };

                      for (var i = 0; i < _this4.data.length; i++) {
                        _loop(i);
                      }
                    }); //  Encerra o carregamento do loading

                    loading.dismiss();
                    this.setValueinLocalStorage();

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Função que recebe o id do objeto selecionado e manda para a página ticket-detail através da rota

      }, {
        key: "getTicketId",
        value: function getTicketId(id) {
          this.router.navigate(['/ticket-detail', id]);
        } //Redireciona para página de cadastro de ticket

      }, {
        key: "goTicketCreatePage",
        value: function goTicketCreatePage() {
          this.router.navigate(['/app/tabs/map']);
        }
      }, {
        key: "setValueinLocalStorage",
        value: function setValueinLocalStorage() {
          if (localStorage.getItem('refresh') == "true") {
            localStorage.setItem('refresh', "false");
            document.location.reload(true);
          }
        }
      }]);

      return SchedulePage;
    }();

    SchedulePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_6__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"]
      }, {
        type: _auth_ticket_service__WEBPACK_IMPORTED_MODULE_8__["TicketService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('scheduleList', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"])], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'page-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.scss */
      "./src/app/pages/schedule/schedule.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_6__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"], _auth_ticket_service__WEBPACK_IMPORTED_MODULE_8__["TicketService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], SchedulePage);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SessionDetailPageRoutingModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function () {
      return SessionDetailPageRoutingModule;
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


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");

    var routes = [{
      path: '',
      component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }];

    var SessionDetailPageRoutingModule = function SessionDetailPageRoutingModule() {
      _classCallCheck(this, SessionDetailPageRoutingModule);
    };

    SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SessionDetailModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function () {
      return SessionDetailModule;
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


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");
    /* harmony import */


    var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session-detail-routing.module */
    "./src/app/pages/session-detail/session-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SessionDetailModule = function SessionDetailModule() {
      _classCallCheck(this, SessionDetailModule);
    };

    SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]],
      declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]]
    })], SessionDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionDetailSessionDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n/* Favorite Icon\n * --------------------------------------------------------\n */\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.icon-heart-empty {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.icon-heart {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvQzpcXFVzZXJzXFxsZWFuZFxcT25lRHJpdmVcXERvY3VtZW50b3NcXERldmVsb3BtZW50XFxhcGxpY2F0aXZvLXRoZS1zdXBvcnRlL3NyY1xcYXBwXFxwYWdlc1xcc2Vzc2lvbi1kZXRhaWxcXHNlc3Npb24tZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBOztFQUFBOztBQUlBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTs7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQUEsOERBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLFNBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vzc2lvbi10cmFjay1pb25pYyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xyXG59XHJcblxyXG4vKiBGYXZvcml0ZSBJY29uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNob3ctZmF2b3JpdGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24taGVhcnQtZW1wdHksXHJcbi5pY29uLWhlYXJ0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG5cclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4uaWNvbi1oZWFydCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5cclxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwiLnNlc3Npb24tdHJhY2staW9uaWMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcbn1cblxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XG59XG5cbi8qIEZhdm9yaXRlIEljb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5zaG93LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSxcbi5pY29uLWhlYXJ0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.ts ***!
    \********************************************************/

  /*! exports provided: SessionDetailPage */

  /***/
  function srcAppPagesSessionDetailSessionDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function () {
      return SessionDetailPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SessionDetailPage =
    /*#__PURE__*/
    function () {
      function SessionDetailPage(dataProvider, userProvider, route) {
        _classCallCheck(this, SessionDetailPage);

        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
      }

      _createClass(SessionDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.dataProvider.load().subscribe(function (data) {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
              var sessionId = _this5.route.snapshot.paramMap.get('sessionId');

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data.schedule[0].groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var group = _step.value;

                  if (group && group.sessions) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = group.sessions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var session = _step2.value;

                        if (session && session.id === sessionId) {
                          _this5.session = session;
                          _this5.isFavorite = _this5.userProvider.hasFavorite(_this5.session.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.defaultHref = "/app/tabs/schedule";
        }
      }, {
        key: "sessionClick",
        value: function sessionClick(item) {
          console.log('Clicked', item);
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
          } else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
          }
        }
      }, {
        key: "shareSession",
        value: function shareSession() {
          console.log('Clicked share session');
        }
      }]);

      return SessionDetailPage;
    }();

    SessionDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-session-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./session-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./session-detail.scss */
      "./src/app/pages/session-detail/session-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SessionDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SpeakerDetailPageRoutingModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function () {
      return SpeakerDetailPageRoutingModule;
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


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");

    var routes = [{
      path: '',
      component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }];

    var SpeakerDetailPageRoutingModule = function SpeakerDetailPageRoutingModule() {
      _classCallCheck(this, SpeakerDetailPageRoutingModule);
    };

    SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SpeakerDetailModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function () {
      return SpeakerDetailModule;
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


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");
    /* harmony import */


    var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-detail-routing.module */
    "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SpeakerDetailModule = function SpeakerDetailModule() {
      _classCallCheck(this, SpeakerDetailModule);
    };

    SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]],
      declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]]
    })], SpeakerDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Speaker Background\n */\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvQzpcXFVzZXJzXFxsZWFuZFxcT25lRHJpdmVcXERvY3VtZW50b3NcXERldmVsb3BtZW50XFxhcGxpY2F0aXZvLXRoZS1zdXBvcnRlL3NyY1xcYXBwXFxwYWdlc1xcc3BlYWtlci1kZXRhaWxcXHNwZWFrZXItZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFJQTtFQUNFLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0FDRkY7QURLQTs7O0VBR0UsY0FBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHFDQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFFQSw4Q0FBQTtFQUVBLDBFQUFBO0FDUkY7QURXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDUkY7QURXQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUVBLFlBQUE7QUNWRjtBRGFBO0VBQ0UseUhBQUE7QUNWRjtBRGFBO0VBQ0UsNENBQUE7QUNWRjtBRGFBOztFQUFBO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDWEY7QURjQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSw4Q0FBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNwZWFrZXIgQmFja2dyb3VuZFxyXG4gKi9cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG5cclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXHJcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zcGVha2VyLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcclxuXHJcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKC9hc3NldHMvaW1nL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcclxufVxyXG5cclxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBib3R0b206IDEwcHg7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFNwZWFrZXIgRGV0YWlsc1xyXG4gKi9cclxuXHJcbi5zcGVha2VyLWRldGFpbCBwIHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uc3BlYWtlci1kZXRhaWwgaHIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG4iLCIvKlxuICogU3BlYWtlciBCYWNrZ3JvdW5kXG4gKi9cbmlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCgvYXNzZXRzL2ltZy9zcGVha2VyLWJhY2tncm91bmQucG5nKSBuby1yZXBlYXQ7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWQgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG59XG5cbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG4vKlxuICogU3BlYWtlciBEZXRhaWxzXG4gKi9cbi5zcGVha2VyLWRldGFpbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5zcGVha2VyLWRldGFpbCBociB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
    \********************************************************/

  /*! exports provided: SpeakerDetailPage */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function () {
      return SpeakerDetailPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var SpeakerDetailPage =
    /*#__PURE__*/
    function () {
      function SpeakerDetailPage(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
        _classCallCheck(this, SpeakerDetailPage);

        this.dataProvider = dataProvider;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
      }

      _createClass(SpeakerDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this6 = this;

          this.dataProvider.load().subscribe(function (data) {
            var speakerId = _this6.route.snapshot.paramMap.get('speakerId');

            if (data && data.speakers) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = data.speakers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var speaker = _step3.value;

                  if (speaker && speaker.id === speakerId) {
                    _this6.speaker = speaker;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "openExternalUrl",
        value: function openExternalUrl(url) {
          this.inAppBrowser.create(url, '_blank');
        }
      }, {
        key: "openSpeakerShare",
        value: function openSpeakerShare(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Share ' + speaker.name,
                      buttons: [{
                        text: 'Copy Link',
                        handler: function handler() {
                          console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);

                          if (window.cordova && window.cordova.plugins.clipboard) {
                            window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                          }
                        }
                      }, {
                        text: 'Share via ...'
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openContact",
        value: function openContact(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var mode, actionSheet;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    mode = 'ios'; // this.config.get('mode');

                    _context5.next = 3;
                    return this.actionSheetCtrl.create({
                      header: 'Contact ' + speaker.name,
                      buttons: [{
                        text: "Email ( ".concat(speaker.email, " )"),
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: function handler() {
                          window.open('mailto:' + speaker.email);
                        }
                      }, {
                        text: "Call ( ".concat(speaker.phone, " )"),
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: function handler() {
                          window.open('tel:' + speaker.phone);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context5.sent;
                    _context5.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SpeakerDetailPage;
    }();

    SpeakerDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }];
    };

    SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-detail.scss */
      "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], SpeakerDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SpeakerListPageRoutingModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function () {
      return SpeakerListPageRoutingModule;
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


    var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");

    var routes = [{
      path: '',
      component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }];

    var SpeakerListPageRoutingModule = function SpeakerListPageRoutingModule() {
      _classCallCheck(this, SpeakerListPageRoutingModule);
    };

    SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: SpeakerListModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function () {
      return SpeakerListModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");
    /* harmony import */


    var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./speaker-list-routing.module */
    "./src/app/pages/speaker-list/speaker-list-routing.module.ts");

    var SpeakerListModule = function SpeakerListModule() {
      _classCallCheck(this, SpeakerListModule);
    };

    SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]],
      declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]]
    })], SpeakerListModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerListSpeakerListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".speaker-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n/* Due to the fact the cards are inside of columns the margins don't overlap\n * properly so we want to remove the extra margin between cards\n */\n\nion-col:not(:last-of-type) .speaker-card {\n  margin-bottom: 0;\n}\n\n.speaker-card .speaker-item {\n  --min-height: 85px;\n}\n\n.speaker-card .speaker-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card .speaker-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L0M6XFxVc2Vyc1xcbGVhbmRcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxEZXZlbG9wbWVudFxcYXBsaWNhdGl2by10aGUtc3Vwb3J0ZS9zcmNcXGFwcFxccGFnZXNcXHNwZWFrZXItbGlzdFxcc3BlYWtlci1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBOztFQUFBOztBQUdBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFFQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usd0RBQUE7RUFFQSxVQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlYWtlci1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIER1ZSB0byB0aGUgZmFjdCB0aGUgY2FyZHMgYXJlIGluc2lkZSBvZiBjb2x1bW5zIHRoZSBtYXJnaW5zIGRvbid0IG92ZXJsYXBcclxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXHJcbiAqL1xyXG5pb24tY29sOm5vdCg6bGFzdC1vZi10eXBlKSAuc3BlYWtlci1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogODVweDtcclxufVxyXG5cclxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIGgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW9zIGlvbi1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWQgaW9uLWxpc3Qge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG59IiwiLnNwZWFrZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIER1ZSB0byB0aGUgZmFjdCB0aGUgY2FyZHMgYXJlIGluc2lkZSBvZiBjb2x1bW5zIHRoZSBtYXJnaW5zIGRvbid0IG92ZXJsYXBcbiAqIHByb3Blcmx5IHNvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBleHRyYSBtYXJnaW4gYmV0d2VlbiBjYXJkc1xuICovXG5pb24tY29sOm5vdCg6bGFzdC1vZi10eXBlKSAuc3BlYWtlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA4NXB4O1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4gIHBhZGRpbmc6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
    \****************************************************/

  /*! exports provided: SpeakerListPage */

  /***/
  function srcAppPagesSpeakerListSpeakerListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function () {
      return SpeakerListPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var SpeakerListPage =
    /*#__PURE__*/
    function () {
      function SpeakerListPage(confData) {
        _classCallCheck(this, SpeakerListPage);

        this.confData = confData;
        this.speakers = [];
      }

      _createClass(SpeakerListPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this7 = this;

          this.confData.getSpeakers().subscribe(function (speakers) {
            _this7.speakers = speakers;
          });
        }
      }]);

      return SpeakerListPage;
    }();

    SpeakerListPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }];
    };

    SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-list.scss */
      "./src/app/pages/speaker-list/speaker-list.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]])], SpeakerListPage);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsPageTabsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule/schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'schedule',
        children: [{
          path: '',
          component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"]
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }]
      }, {
        path: 'speakers',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-list/speaker-list.module */
            "./src/app/pages/speaker-list/speaker-list.module.ts")).then(function (m) {
              return m.SpeakerListModule;
            });
          }
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }, {
          path: 'speaker-details/:speakerId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-detail/speaker-detail.module */
            "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
              return m.SpeakerDetailModule;
            });
          }
        }]
      }, {
        path: 'map',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../map/map.module */
            "./src/app/pages/map/map.module.ts")).then(function (m) {
              return m.MapModule;
            });
          }
        }]
      }, {
        path: 'about',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../about/about.module */
            "./src/app/pages/about/about.module.ts")).then(function (m) {
              return m.AboutModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: TabsModule */

  /***/
  function srcAppPagesTabsPageTabsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-page-routing.module */
    "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about/about.module */
    "./src/app/pages/about/about.module.ts");
    /* harmony import */


    var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../map/map.module */
    "./src/app/pages/map/map.module.ts");
    /* harmony import */


    var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../schedule/schedule.module */
    "./src/app/pages/schedule/schedule.module.ts");
    /* harmony import */


    var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../session-detail/session-detail.module */
    "./src/app/pages/session-detail/session-detail.module.ts");
    /* harmony import */


    var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../speaker-detail/speaker-detail.module */
    "./src/app/pages/speaker-detail/speaker-detail.module.ts");
    /* harmony import */


    var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../speaker-list/speaker-list.module */
    "./src/app/pages/speaker-list/speaker-list.module.ts");

    var TabsModule = function TabsModule() {
      _classCallCheck(this, TabsModule);
    };

    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"], _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"], _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"], _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"], _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"]]
    })], TabsModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
    \**********************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsPageTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs-page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })], TabsPage);
    /***/
  },

  /***/
  "./src/app/providers/conference-data.ts":
  /*!**********************************************!*\
    !*** ./src/app/providers/conference-data.ts ***!
    \**********************************************/

  /*! exports provided: ConferenceData */

  /***/
  function srcAppProvidersConferenceDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceData", function () {
      return ConferenceData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");

    var ConferenceData =
    /*#__PURE__*/
    function () {
      function ConferenceData(http, user) {
        _classCallCheck(this, ConferenceData);

        this.http = http;
        this.user = user;
      }

      _createClass(ConferenceData, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('assets/data/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          var _this8 = this;

          // just some good 'ol JS fun with objects and arrays
          // build up the data by linking speakers to sessions
          this.data = data; // loop through each day in the schedule

          this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
              // loop through each session in the timeline group
              group.sessions.forEach(function (session) {
                session.speakers = [];

                if (session.speakerNames) {
                  session.speakerNames.forEach(function (speakerName) {
                    var speaker = _this8.data.speakers.find(function (s) {
                      return s.name === speakerName;
                    });

                    if (speaker) {
                      session.speakers.push(speaker);
                      speaker.sessions = speaker.sessions || [];
                      speaker.sessions.push(session);
                    }
                  });
                }
              });
            });
          });
          return this.data;
        }
      }, {
        key: "getTimeline",
        value: function getTimeline(dayIndex) {
          var _this9 = this;

          var queryText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var excludeTracks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) {
              return !!w.trim().length;
            });
            day.groups.forEach(function (group) {
              group.hide = true;
              group.sessions.forEach(function (session) {
                // check if this session should show or not
                _this9.filterSession(session, queryWords, excludeTracks, segment);

                if (!session.hide) {
                  // if this session is not hidden then this group should show
                  group.hide = false;
                  day.shownSessions++;
                }
              });
            });
            return day;
          }));
        }
      }, {
        key: "filterSession",
        value: function filterSession(session, queryWords, excludeTracks, segment) {
          var matchesQueryText = false;

          if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
              if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                matchesQueryText = true;
              }
            });
          } else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
          } // if any of the sessions tracks are not in the
          // exclude tracks then this session passes the track test


          var matchesTracks = false;
          session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
              matchesTracks = true;
            }
          }); // if the segment is 'favorites', but session is not a user favorite
          // then this session does not pass the segment test

          var matchesSegment = false;

          if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
              matchesSegment = true;
            }
          } else {
            matchesSegment = true;
          } // all tests must be true if it should not be hidden


          session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        }
      }, {
        key: "getSpeakers",
        value: function getSpeakers() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
              var aName = a.name.split(' ').pop();
              var bName = b.name.split(' ').pop();
              return aName.localeCompare(bName);
            });
          }));
        }
      }, {
        key: "getTracks",
        value: function getTracks() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.tracks.sort();
          }));
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map;
          }));
        }
      }]);

      return ConferenceData;
    }();

    ConferenceData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], ConferenceData);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map