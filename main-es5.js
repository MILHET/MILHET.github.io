function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/components/home/home.component */
    "./src/app/core/components/home/home.component.ts");
    /* Angular modules */

    /* Components */


    var routes = [{
      path: '',
      component: _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _core_components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/components/home/sidenav-list/sidenav-list.component */
    "./src/app/core/components/home/sidenav-list/sidenav-list.component.ts");
    /* harmony import */


    var _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/components/home/home.component */
    "./src/app/core/components/home/home.component.ts");
    /* harmony import */


    var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/components/footer/footer.component */
    "./src/app/core/components/footer/footer.component.ts");
    /* harmony import */


    var _shared_components_social_social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/components/social/social.component */
    "./src/app/shared/components/social/social.component.ts");
    /* Angular modules */


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolio';
      }

      _createClass(AppComponent, [{
        key: "onActivate",
        value: function onActivate(event) {
          document.querySelector('mat-sidenav-content').scrollTop = 0;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["role", "navigation"], ["sidenav", ""], [3, "sidenavClose"], [3, "sidenavToggle"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenav-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AppComponent_Template_app_sidenav_list_sidenavClose_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-home", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_home_sidenavToggle_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _core_components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_2__["SidenavListComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_components_social_social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* Angular modules */

    /* App modules */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/footer/footer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/footer/footer.component.ts ***!
    \************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCoreComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* Angular modules */


    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.year = new Date().getFullYear();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 1,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", ctx.year, " - Fran\xE7ois Milhet\n");
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: #222;\n  color: white;\n  margin-top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jb2lzL0RvY3VtZW50cy9Bbmd1bGFyLXdlYnNpdGUvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbiIsImZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/home/home.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/components/home/home.component.ts ***!
    \********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCoreComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-scroll-event */
    "./node_modules/ngx-scroll-event/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_scroll_event__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-lottie */
    "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* Angular modules */


    var _c0 = function _c0(a0) {
      return {
        "invisible": a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "cInvisible": a0,
        "cVisible": a1
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScroll = false;
        this.options1 = {
          path: '../../../../assets/lottie/19566-animated-e-mail-signatures.json'
        };
        this.options2 = {
          path: '../../../../assets/lottie/12546-welcome.json'
        };
        this.options3 = {
          path: '../../../../assets/lottie/14288-surfing-waveboard.json'
        };
        this.options4 = {
          path: '../../../../assets/lottie/19565-animated-e-mail-signatures.json'
        };
        this.options5 = {
          path: '../../../../assets/lottie/14323-owai-animation.json'
        };

        this.scroll = function (event) {
          _this.onScroll = !event.isReachingTop;
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breakpoint = window.innerWidth <= 400 ? 1 : 2;
        }
      }, {
        key: "onToggleSidenav",
        value: function onToggleSidenav() {
          this.sidenavToggle.emit();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
        }
      }, {
        key: "handleClick",
        value: function handleClick(el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }, {
        key: "handleAnimation",
        value: function handleAnimation(anim) {
          var _this2 = this;

          this.anim = anim;
          setTimeout(function () {
            _this2.anim.pause();
          }, 4000);
        }
      }, {
        key: "showModal",
        value: function showModal(type) {
          document.getElementById(type).style.display = 'block';
        }
      }, {
        key: "closeModal",
        value: function closeModal(type) {
          document.getElementById(type).style.display = 'none';
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      outputs: {
        sidenavToggle: "sidenavToggle"
      },
      decls: 293,
      vars: 14,
      consts: [[1, "navbar"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 1, "navbar__button", 3, "click"], [1, "navbar__brand"], ["routerLink", ""], ["src", "../../../../assets/img/Logo.png", "alt", "Gearstocks"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "start", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "15px"], [3, "click"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.xs", ""], ["detect-scroll", "", 1, "banner", 3, "onScroll"], ["target", ""], [1, "banner__lottie"], [3, "options", "animationCreated"], ["src", "../../../../assets/img/homeBanner.jpg"], ["id", "arrow", 1, "arrow"], ["id", "about", 1, "about"], ["about", ""], [1, "about__lottie"], [3, "options"], [1, "about__resume"], [1, "row"], [1, "column"], [2, "width", "13%"], [1, "about__hobbies"], [1, "about__language"], ["src", "../../../../assets/img/Flag_of_France.png"], [1, "about__language", 2, "padding-bottom", "20px"], ["src", "../../../../assets/img/Flag_of_the_United_Kingdom.svg.png"], ["href", "../../../../assets/img/CV-Francois-MILHET.pdf", "download", "CV-Francois-MILHET", 1, "cubeBtn"], ["data-hover", "Thank You!"], [1, "experience"], ["studies", ""], [1, "row", 2, "margin-right", "0"], [1, "col-md-6"], [1, "experience__workyear"], [1, "experience__arrowpart"], [1, "experience__exCon"], ["target", "_blank", "href", "http://www.epitech.eu/"], ["target", "_blank", "href", "https://campus.samsung.fr/"], ["target", "_blank", "href", "https://glob.vip/fr/"], ["target", "_blank", "href", "https://www.groupeonepoint.com/"], ["id", "projects", 1, "projects"], ["projects", ""], ["rowHeight", "2:1", 3, "cols", "gutterSize", "resize"], [1, "projects__p1", 3, "click"], [1, "projects__box"], [1, "projects__box__table"], [1, "projects__p2", 3, "click"], [1, "projects__p3", 3, "click"], [1, "projects__p4", 3, "click"], [1, "projects__p5", 3, "click"], [1, "projects__p6", 3, "click"], ["id", "p1", 1, "modal"], [1, "modal__content"], [1, "close", 3, "click"], [1, "modal__content__desc"], [2, "padding-left", "20px"], [1, "col-sm-6"], ["href", "../../../../assets/img/edf1.png", "target", "_blank"], ["src", "../../../assets/img/edf1.png", 1, "img-thumbnail"], ["href", "../../../assets/img/edf2.png", "target", "_blank"], ["src", "../../../assets/img/edf2.png", 1, "img-thumbnail"], ["id", "p2", 1, "modal"], ["href", "https://www.total-transports.com", "target", "_blank"], ["src", "../../../assets/img/total-transport.png", 1, "img-thumbnail"], ["id", "p3", 1, "modal"], ["href", "http://irrlicht.sourceforge.net/", "target", "_blank"], ["href", "../../../../assets/img/Menu.png", "target", "_blank"], ["src", "../../../../assets/img/Menu.png", 1, "img-thumbnail"], ["href", "../../../../assets/img/Game.png", "target", "_blank"], ["src", "../../../../assets/img/Game.png", 1, "img-thumbnail"], ["id", "p4", 1, "modal"], ["href", "../../../assets/img/FTP-IRC.png", "target", "_blank"], ["src", "../../../assets/img/FTP-IRC.png", 1, "img-thumbnail"], ["id", "p5", 1, "modal"], ["href", "./../../assets/img/StraceCode.png", "target", "_blank"], ["src", "../../../assets/img/StraceCode.png", 1, "img-thumbnail"], ["id", "p6", 1, "modal"], ["id", "icone", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "cRetour", "x", "0px", "y", "0px", "width", "256", "height", "192", "viewBox", "0 0 1024 768", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 1024 768", 3, "ngClass"], ["type", "text/css"], ["d", "M528.3,657c0,0-57.8-8.4-102.8-47.5s-50-303.6-50-303.6s-10.5-73.9,15.3-151.6c0.3-0.8,0.5-1.6,0.8-2.4  c0.3-0.9,0.6-1.7,0.9-2.6c26.4-74.9,117.5-115,128-119.4l0-0.4c0,0,3.4-1.1,7.3-1.3c2.5-0.1,5.2,0.1,7.4,1.3c0,0,101,40.3,129,119.8  c0.6,1.8,1.2,3.5,1.8,5.3c0.3,0.9,0.6,1.8,0.9,2.6c24.6,76.6,14.3,148.6,14.3,148.6s-5,264.5-50,303.6  C586.2,648.6,528.4,657,528.3,657", 1, "st0"], ["d", "M665,511.1c-91.5-16.1-182.8-17.5-274-4.1c-9,77.6,47.8,130.6,138.2,150.4C629.4,638.9,667.6,584.2,665,511.1z", 1, "st1"], ["d", "M665.4,512c2.1,0.5,50.7,34.1,84.3,102.3s4.9,96.4,4.9,96.4s-107.1-83.6-107.2-118.4  C647.3,561.7,663.4,511.6,665.4,512z", 1, "st2"], ["d", "M392,508c-2.1,0.5-50.7,34.1-84.3,102.3s-4.9,96.4-4.9,96.4s107.1-83.6,107.2-118.4  C410.2,557.7,394.1,507.6,392,508z", 1, "st2"], ["d", "M532,719.5h-5c-3,0-5.5-2.5-5.5-5.5V518c0-3,2.5-5.5,5.5-5.5h5c3,0,5.5,2.5,5.5,5.5v196  C537.5,717,535,719.5,532,719.5z", 1, "st2"], ["cx", "529.5", "cy", "421.5", "r", "37.5", 1, "st3"], ["cx", "530", "cy", "273", "r", "55", 1, "st3"], ["d", "M400.3,131.4c85.9,11.4,171.7,12.4,257.6,2.9C625.2,85.6,585.1,46.1,528,28C465.6,50,429.9,88.8,400.3,131.4z", 1, "st1"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() {
            return ctx.onToggleSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return ctx.handleClick(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

            return ctx.handleClick(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Studies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142);

            return ctx.handleClick(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onScroll", function HomeComponent_Template_div_onScroll_24_listener($event) {
            return ctx.scroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-lottie", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function HomeComponent_Template_ng_lottie_animationCreated_27_listener($event) {
            return ctx.handleAnimation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return ctx.handleClick(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ng-lottie", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "I\u2019m Fran\xE7ois MILHET, a full stack developer who\u2019s very curious about new technologies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " I was born and raised in Guadeloupe, and I came to Paris to study at EPITECH Paris.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " I have been Freelance since 2016, working on various domains. Excellent teamwork & communication skills.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " My objective as a developer is to help your business advance developing applications and products that are dynamic, powerful, straightforward and astute. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " I have a strong knowledge in Front-end Development especially with Angular, but I'm able to learn a new language if needed for a project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " I do have also a good knowledge in Backend Development with NodeJs and PHP. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Hobbies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "ng-lottie", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Skate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "ng-lottie", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "ng-lottie", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Moto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Download my CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "STUDIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Sept-2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sept-2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "FORMATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "EPITECH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " (The school of innovation)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Sept-2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "March-2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "INTERNSHIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Teaching Assistant at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Samsung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sept-2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "March-2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "INTERNSHIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Full stack developer at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Glob");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Apr-2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Aug-2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "INTERNSHIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Front-End developer at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Onepoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "My Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-grid-list", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_Template_mat_grid_list_resize_146_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-grid-tile", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_147_listener() {
            return ctx.showModal("p1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Ganym\xE8de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-grid-tile", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_152_listener() {
            return ctx.showModal("p2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Total-Transport75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-grid-tile", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_157_listener() {
            return ctx.showModal("p3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Bomberman Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-grid-tile", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_162_listener() {
            return ctx.showModal("p4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Server FTP & IRC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-grid-tile", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_167_listener() {
            return ctx.showModal("p5");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Strace Linux command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-grid-tile", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_172_listener() {
            return ctx.showModal("p6");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_179_listener() {
            return ctx.closeModal("p1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Ganym\xE8de Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " \u25CF As a FullStack developer at Onepoint i was place as a front-end developer on the Ganym\xE8de project, a budgetary tool for EDF company, focus to simplify project monitoring, and more specifically to carry out budgetary monitoring. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h2", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " The project was develop in Angular7 with an NgRx architecture. To complete the delivery of the tool, it was chosen to follow the agile Scrum methodology.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " There is some view of the tools : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_199_listener() {
            return ctx.closeModal("p2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Total Transports75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " \u25CF For a freelance project, i do an Angular7 website for a company in Paris specializes in road transport, with a simulator to do the quote.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " You can check the website on the link bellow ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_212_listener() {
            return ctx.closeModal("p3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Bomberman Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " \u25CF Bomberman is one of the most famous video games of all time. With over 70 franchises, ranging from the first version on MSX, ZX Spectrum and Sharp MZ-700 in 1983 to the lastest versions on modern consoles, over 10 million units have been sold.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h2", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "-Our gameplay reference is Neo Bomberman, released on the Neo Geo and MVS systems in 1997.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " -On that base, we made a local multi-player game with the possibility to play with a friend + AI\u2019s controlled bots. We made the game in C++, using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Irrlicht");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Engine who is an open source high performance realtime 3D engine written in C++. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_236_listener() {
            return ctx.closeModal("p4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Server FTP & IRC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " \u25CF FTP(File Transfer Protocol) server allows, as the name suggests, to transfer files over the Internet or through a local computer network (intranet). Anyone with permission, can download and send files to a remote computer running such a server. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " \u25CF IRC(Internet Relay Chat) server is a textual communication protocol on the Internet. It is used for instant communication mainly in the form of group discussions via chat channels, but can also be used for one-to-one communication. It can also be used for file transfer. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " I made both of this server entirely functional in C language. Obviously they was able to handle several clients at the same time, and have an identification system with a login and a password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_251_listener() {
            return ctx.closeModal("p5");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Strace command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " \u25CF Strace, is a UNIX / LINUX command who traces a program in real time and displays all of the system calls it executes in their order of appearance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h2", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " -System calls are the fundamental interfaces between applications and the kernel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " -Strace is a powerful troubleshooting tool for all unix / linux administrators and users. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_267_listener() {
            return ctx.closeModal("p6");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " \u25CF A Dashboard is a computerized tool for centralizing in a single point a set of data to control an activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h2", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " For this project, i use NodeJs for all the user management, and MogoDb for the data base.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " I use different API for the different services on my dashboard like the weather, News, Market price, imgur...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " And the build project was done with docker-compose. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_281_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx.handleClick(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "svg", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "style", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " .st0{fill:#EEE0C3;} .st1{fill:#961906;} .st2{fill:#E61915;} .st3{fill:#483E34;stroke:#FFFFFF;stroke-width:10;stroke-miterlimit:10;} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "circle", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "circle", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint)("gutterSize", "10px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, !ctx.onScroll));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, !ctx.onScroll, ctx.onScroll));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_7__["ScrollDirective"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]],
      styles: ["@charset \"UTF-8\";\n.navbar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8) !important;\n  border-color: #000;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  font-weight: 300;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  padding: 30px;\n  justify-content: space-between;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-right: 10px;\n  text-decoration: none;\n  color: white;\n  text-align: center;\n  font-size: 17px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-bottom: 23px;\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n}\n.navbar__button[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  z-index: 1;\n  font-size: 30px;\n}\n.navbar__brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  vertical-align: top;\n}\n.navbar__navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.banner[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n.banner__lottie[_ngcontent-%COMP%] {\n  height: 250px;\n  position: absolute;\n  z-index: 10;\n  margin-top: 5%;\n}\n.about[_ngcontent-%COMP%] {\n  color: white;\n  padding-top: 50px;\n  margin-top: -10px;\n  margin-bottom: -37px;\n  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.7);\n  text-align: center;\n  \n  background-size: cover;\n  \n  background: url('Slide1.png') no-repeat center fixed;\n}\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 300;\n}\n.about[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 7%;\n  border-top: 1px solid #eee;\n  border-bottom: 0;\n  border-left: 0;\n  border-right: 0;\n}\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 25px;\n}\n.about__lottie[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.about__resume[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 30px;\n}\n.about__language[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 150px;\n  margin: auto;\n  padding-top: 9%;\n}\n.about__language[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.about__hobbies-title[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n.about__hobbies[_ngcontent-%COMP%] {\n  width: 23%;\n  display: inline-block;\n  padding-right: 1em;\n  padding-left: 1em;\n}\n.about__hobbies[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n.experience[_ngcontent-%COMP%] {\n  text-align: center;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.08);\n  background: linear-gradient(120deg, #383745 50%, #22202B 50%);\n  padding-top: 50px;\n}\n.experience[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 36px;\n  font-weight: 300;\n}\n.experience[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 25px;\n  font-weight: 100;\n}\n.experience__workyear[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 17px;\n  margin: 2.5em auto 0;\n  color: #fff;\n  background: #ff675f;\n  text-align: center;\n  width: 220px;\n  height: 120px;\n  padding: 40px 0 40px 0;\n  border-radius: 50%;\n}\n.experience__workyear[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54%;\n  left: 50%;\n  height: 30%;\n  width: 50%;\n  margin: -15% 0 0 -25%;\n  font-size: 1.2em;\n}\n.experience__arrowpart[_ngcontent-%COMP%] {\n  float: none;\n  width: 100%;\n  height: 40px;\n  background: url('arrow-top.png') no-repeat 50% 100%;\n}\n.experience__exCon[_ngcontent-%COMP%] {\n  width: auto;\n  background: #f3f3f3;\n  border-bottom: solid 4px #eeeeee;\n  padding: 22px 47px 6px 47px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 30px;\n}\n.experience__exCon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.projects[_ngcontent-%COMP%] {\n  color: white;\n  padding-top: 30px;\n  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.7);\n  text-align: center;\n  \n  background-size: cover;\n  \n  background: url('projectsBackground.jpg') no-repeat center fixed;\n}\n.projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 300;\n}\n.projects[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 7%;\n  border-top: 1px solid #eee;\n  border-bottom: 0;\n  border-left: 0;\n  border-right: 0;\n}\n.projects[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 25px;\n}\n.projects__p1[_ngcontent-%COMP%] {\n  background-image: url('Edf.jpg');\n  background-size: cover;\n}\n.projects__p2[_ngcontent-%COMP%] {\n  background-image: url('Totaltransports75.jpg');\n  background-size: cover;\n}\n.projects__p3[_ngcontent-%COMP%] {\n  background-image: url('Bomberman-Back.jpg');\n  background-size: cover;\n}\n.projects__p4[_ngcontent-%COMP%] {\n  background-image: url('Ftp-Irc.jpg');\n  background-size: cover;\n}\n.projects__p5[_ngcontent-%COMP%] {\n  background-image: url('StraceCode.png');\n  background-size: cover;\n}\n.projects__p6[_ngcontent-%COMP%] {\n  background-image: url('dashboard.png');\n  background-size: cover;\n}\n.projects__box[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.projects__box__table[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n.projects__box__table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.projects__box[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0);\n}\n.projects[_ngcontent-%COMP%]   .mat-grid-list[_ngcontent-%COMP%] {\n  padding-top: 2em;\n  margin: 20px;\n}\n.projects[_ngcontent-%COMP%]   .mat-grid-tile[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: white;\n  border-radius: 5px;\n  font-size: 3em;\n}\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  \n  position: fixed;\n  \n  z-index: 10;\n  \n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n.modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 300;\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-left: 10px;\n  line-height: 140%;\n  font-weight: 300;\n}\n.modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 1.5em;\n  text-align: center;\n  line-height: 140%;\n  font-weight: 300;\n}\n.modal__content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin: 100px auto 30px;\n  padding: 20px;\n  border-radius: 4px;\n  width: 80%;\n}\n.modal__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 4px;\n}\n.modal__content__desc[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  border: 1px solid #e7e7e7;\n  border-radius: 4px;\n  padding: 10px;\n}\n.modal__content__desc[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.close[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.column[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .about[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%] {\n    background: #383745 none;\n  }\n\n  .banner__lottie[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n}\n\n.arrow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  left: 50%;\n  z-index: 2;\n  display: inline-block;\n  transform: translate(0, -50%);\n  color: #fff;\n  font: normal 400 100px/1 \"Josefin Sans\", sans-serif;\n  letter-spacing: 0.1em;\n  text-decoration: none;\n  transition: opacity 0.3s;\n}\n#arrow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: rotate(-45deg);\n  -webkit-animation: sdb05 1.5s infinite;\n  animation: sdb05 1.5s infinite;\n  box-sizing: border-box;\n}\n@-webkit-keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n@keyframes sdb05 {\n  0% {\n    transform: rotate(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n\na.cubeBtn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  -webkit-font-smoothing: antialiased;\n  line-height: 60px;\n  perspective: 1000px;\n  display: inline-block;\n  outline: none;\n  color: #00d79d;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 16px;\n  padding-bottom: 10px;\n}\na.cubeBtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 0 30px;\n  background: #1a1a1a;\n  transition: transform 0.3s;\n  transform-origin: 50% 0;\n  transform-style: preserve-3d;\n}\na.cubeBtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  content: attr(data-hover);\n  transition: background 0.3s;\n  transform: rotateX(-90deg);\n  transform-origin: 50% 0;\n  border-bottom: 3px solid #00d79d;\n}\na.cubeBtn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], a.cubeBtn[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translateY(-30px);\n}\na.cubeBtn[_ngcontent-%COMP%]:hover, a.cubeBtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\na.cubeBtn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, a.cubeBtn[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]::before {\n  background: #1a1a1a;\n}\n.invisible[_ngcontent-%COMP%] {\n  bottom: -35px;\n  opacity: 0;\n  transition: all ease-in 0.5s;\n}\n\n#icone[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  z-index: 9;\n  position: fixed;\n  bottom: 31px;\n  right: 25px;\n  background-color: white;\n  border-radius: 25%;\n  cursor: pointer;\n  \n}\n#icone[_ngcontent-%COMP%]   #cRetour[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  position: fixed;\n  transition: all 0.5s;\n}\n#icone[_ngcontent-%COMP%]   #cRetour.cInvisible[_ngcontent-%COMP%] {\n  bottom: -35px;\n  opacity: 0;\n  transition: all ease-in 0.5s;\n}\n#icone[_ngcontent-%COMP%]   #cRetour.cVisible[_ngcontent-%COMP%] {\n  bottom: 30px !important;\n  opacity: 1 !important;\n}\n\n  .mat-icon-button {\n  padding: 0;\n  min-width: 0;\n  height: 40px;\n  width: 0;\n  flex-shrink: 0;\n  line-height: 40px;\n  border-radius: 50%;\n  color: white;\n}\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 54px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZyYW5jb2lzL0RvY3VtZW50cy9Bbmd1bGFyLXdlYnNpdGUvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2RUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FERUY7QUNBRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FERUo7QUNBSTtFQUNFLFlBQUE7QURFTjtBQ0dFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO1VBQUEsMEJBQUE7QURESjtBQ0lFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURGSjtBQ09JO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FETE47QUNVRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QURSSjtBQ2FBO0VBQ0UsZ0JBQUE7QURWRjtBQ1lFO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBRFZKO0FDYUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBRFhKO0FDZUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNnQyxrQ0FBQTtFQUNoQyxzQkFBQTtFQUF3Qix5QkFBQTtFQUN4QixvREFBQTtBRFZGO0FDWUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURWSjtBQ2FFO0VBQ0UsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFhKO0FDY0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURaSjtBQ2VFO0VBQ0UsYUFBQTtBRGJKO0FDZ0JFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEZEo7QUNpQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEZko7QUNpQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRGZOO0FDbUJFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FEakJKO0FDb0JFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRGxCSjtBQ29CSTtFQUNFLGdCQUFBO0FEbEJOO0FDd0JBO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZEQUFBO0VBQ0EsaUJBQUE7QURyQkY7QUN1QkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEckJKO0FDd0JFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUR0Qko7QUN5QkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0FEdkJKO0FDeUJJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRHZCTjtBQzJCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0FEekJKO0FDNEJFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRDFCSjtBQzRCSTtFQUNFLHFCQUFBO0FEMUJOO0FDZ0NBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNnQyxrQ0FBQTtFQUNoQyxzQkFBQTtFQUF3Qix5QkFBQTtFQUN4QixnRUFBQTtBRDNCRjtBQzZCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRDNCSjtBQzhCRTtFQUNFLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ1Qko7QUMrQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUQ3Qko7QUNnQ0U7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0FEOUJKO0FDaUNFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtBRC9CSjtBQ2tDRTtFQUNFLDJDQUFBO0VBQ0Esc0JBQUE7QURoQ0o7QUNtQ0U7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FEakNKO0FDb0NFO0VBQ0UsdUNBQUE7RUFDQSxzQkFBQTtBRGxDSjtBQ3FDRTtFQUNFLHNDQUFBO0VBQ0Esc0JBQUE7QURuQ0o7QUNzQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FEcENKO0FDc0NJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FEcENOO0FDcUNNO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBRG5DUjtBQ3lDRTtFQUNFLGtDQUFBO0FEdkNKO0FDMENFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FEeENKO0FDMkNFO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRHpDSjtBQzZDQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsV0FBQTtFQUFhLGVBQUE7RUFDYixNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FEbENyQztBQ29DRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QURsQ0o7QUNxQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRG5DSjtBQ3NDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURwQ0o7QUN1Q0U7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRHJDSjtBQ3VDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRHJDTjtBQ3dDSTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEdENOO0FDd0NNO0VBQ0UsYUFBQTtBRHRDUjtBQzRDQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEekNGO0FDNENBOztFQUdFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUQxQ0Y7QUM2Q0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUQxQ0Y7QUM2Q0E7RUFDRSxtQkFBQTtBRDFDRjtBQzZDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRDFDRjtBQzZDQTtFQUNFO0lBQU8scUNBQUE7RUR6Q1A7O0VDMkNBO0lBQ0Usd0JBQUE7RUR4Q0Y7O0VDMkNBO0lBQ0UsZ0JBQUE7RUR4Q0Y7QUFDRjtBQzJDQSxVQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBRUEsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUR6Q0Y7QUM0Q0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFFQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRHpDRjtBQzRDQTtFQUNFO0lBQ0UsaURBQUE7SUFDQSxVQUFBO0VEekNGO0VDMkNBO0lBQ0UsVUFBQTtFRHpDRjtFQzJDQTtJQUNFLHdEQUFBO0lBQ0EsVUFBQTtFRHpDRjtBQUNGO0FDMkNBO0VBQ0U7SUFDRSx5Q0FBQTtJQUNBLFVBQUE7RUR6Q0Y7RUMyQ0E7SUFDRSxVQUFBO0VEekNGO0VDMkNBO0lBQ0UsZ0RBQUE7SUFDQSxVQUFBO0VEekNGO0FBQ0Y7QUM0Q0Esb0JBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUQxQ0Y7QUM2Q0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FEMUNGO0FDNkNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FEMUNGO0FDNkNBOztFQUVFLDJDQUFBO0FEMUNGO0FDNkNBOztFQUVFLGFBQUE7QUQxQ0Y7QUM2Q0E7O0VBRUUsbUJBQUE7QUQxQ0Y7QUM2Q0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FEMUNGO0FDNENBLHFCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0FEMUNGO0FDMkNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUR6Q0o7QUMyQ0k7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FEekNOO0FDNENJO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtBRDFDTjtBQytDQSx1QkFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRDVDRjtBQytDQTtFQUNFLFlBQUE7QUQ1Q0Y7QUMrQ0E7RUFDRSxlQUFBO0FENUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm5hdmJhciBhIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm5hdmJhciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XG59XG4ubmF2YmFyX19idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubmF2YmFyX19icmFuZCBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5uYXZiYXJfX25hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJhbm5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmFubmVyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5iYW5uZXJfX2xvdHRpZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYWJvdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTM3cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKiBwb3VyIGFuY2llbnMgQ2hyb21lIGV0IFNhZmFyaSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKiB2ZXJzaW9uIHN0YW5kYXJkaXPDqWUgKi9cbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvU2xpZGUxLnBuZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcbn1cbi5hYm91dCBoMSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5hYm91dCBociB7XG4gIHdpZHRoOiA3JTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uYWJvdXQgaDIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYWJvdXRfX2xvdHRpZSB7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uYWJvdXRfX3Jlc3VtZSB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmFib3V0X19sYW5ndWFnZSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiA5JTtcbn1cbi5hYm91dF9fbGFuZ3VhZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYm91dF9faG9iYmllcy10aXRsZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hYm91dF9faG9iYmllcyB7XG4gIHdpZHRoOiAyMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cbi5hYm91dF9faG9iYmllcyBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzODM3NDUgNTAlLCAjMjIyMDJCIDUwJSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmV4cGVyaWVuY2UgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5leHBlcmllbmNlIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmV4cGVyaWVuY2VfX3dvcmt5ZWFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogMi41ZW0gYXV0byAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2ZmNjc1ZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZXhwZXJpZW5jZV9fd29ya3llYXIgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogLTE1JSAwIDAgLTI1JTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5leHBlcmllbmNlX19hcnJvd3BhcnQge1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3ctdG9wLnBuZykgbm8tcmVwZWF0IDUwJSAxMDAlO1xufVxuLmV4cGVyaWVuY2VfX2V4Q29uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjZWVlZWVlO1xuICBwYWRkaW5nOiAyMnB4IDQ3cHggNnB4IDQ3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZXhwZXJpZW5jZV9fZXhDb24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnByb2plY3RzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qIHBvdXIgYW5jaWVucyBDaHJvbWUgZXQgU2FmYXJpICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qIHZlcnNpb24gc3RhbmRhcmRpc8OpZSAqL1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm9qZWN0c0JhY2tncm91bmQuanBnKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkO1xufVxuLnByb2plY3RzIGgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2plY3RzIGhyIHtcbiAgd2lkdGg6IDclO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbi5wcm9qZWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5wcm9qZWN0c19fcDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL0VkZi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucHJvamVjdHNfX3AyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9Ub3RhbHRyYW5zcG9ydHM3NS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucHJvamVjdHNfX3AzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9Cb21iZXJtYW4tQmFjay5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucHJvamVjdHNfX3A0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9GdHAtSXJjLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wcm9qZWN0c19fcDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL1N0cmFjZUNvZGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnByb2plY3RzX19wNiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZGFzaGJvYXJkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wcm9qZWN0c19fYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnByb2plY3RzX19ib3hfX3RhYmxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucHJvamVjdHNfX2JveF9fdGFibGUgcCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucHJvamVjdHNfX2JveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4ucHJvamVjdHMgLm1hdC1ncmlkLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMmVtO1xuICBtYXJnaW46IDIwcHg7XG59XG4ucHJvamVjdHMgLm1hdC1ncmlkLXRpbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTA7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4ubW9kYWwgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubW9kYWwgaDIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubW9kYWwgaDMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1vZGFsX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5tb2RhbF9fY29udGVudCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tb2RhbF9fY29udGVudF9fZGVzYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tb2RhbF9fY29udGVudF9fZGVzYyAuY29sLXNtLTYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2xvc2Uge1xuICBjb2xvcjogI2FhYWFhYTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuXG4uY29sdW1uIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gIH1cblxuICAuYWJvdXQsIC5wcm9qZWN0cyB7XG4gICAgYmFja2dyb3VuZDogIzM4Mzc0NSBub25lO1xuICB9XG5cbiAgLmJhbm5lcl9fbG90dGllIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG4vKiBBcnJvdyAqL1xuLmFycm93IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udDogbm9ybWFsIDQwMCAxMDBweC8xIFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59XG5cbiNhcnJvdyBhIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNkYjA1IDEuNXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2RiMDUgMS41cyBpbmZpbml0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNkYjA1IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwgMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzZGIwNSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwgMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLyogRG93bmxvYWQgYnV0dG9uICovXG5hLmN1YmVCdG4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzAwZDc5ZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5hLmN1YmVCdG4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuYS5jdWJlQnRuIHNwYW46OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb250ZW50OiBhdHRyKGRhdGEtaG92ZXIpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMGQ3OWQ7XG59XG5cbmEuY3ViZUJ0bjpob3ZlciBzcGFuLFxuYS5jdWJlQnRuOmZvY3VzIHNwYW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuXG5hLmN1YmVCdG46aG92ZXIsXG5hLmN1YmVCdG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hLmN1YmVCdG46aG92ZXIgc3Bhbjo6YmVmb3JlLFxuYS5jdWJlQnRuOmZvY3VzIHNwYW46OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG59XG5cbi5pbnZpc2libGUge1xuICBib3R0b206IC0zNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjVzO1xufVxuXG4vKiBCYWNrIHRvIHRvcCBpY29uICovXG4jaWNvbmUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzFweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogU1ZHIFJPQ0tFVCBDU1MqL1xufVxuI2ljb25lICNjUmV0b3VyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbiNpY29uZSAjY1JldG91ci5jSW52aXNpYmxlIHtcbiAgYm90dG9tOiAtMzVweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC41cztcbn1cbiNpY29uZSAjY1JldG91ci5jVmlzaWJsZSB7XG4gIGJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1hdGVyaWFsIE92ZXJ3cml0ZSAqL1xuOjpuZy1kZWVwIC5tYXQtaWNvbi1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiA1NHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG59IiwiLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gICZfX2JyYW5kIHtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxuXG4gIH1cblxuICAmX19uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxufVxuXG4uYmFubmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG5cbiAgJl9fbG90dGllIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxufVxuXG4uYWJvdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTM3cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCByZ2JhKDAsMCwwLDAuNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBwb3VyIGFuY2llbnMgQ2hyb21lIGV0IFNhZmFyaSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiB2ZXJzaW9uIHN0YW5kYXJkaXPDqWUgKi9cbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvU2xpZGUxLnBuZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICBociB7XG4gICAgd2lkdGg6IDclO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgJl9fbG90dGllIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG5cbiAgJl9fcmVzdW1lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cblxuICAmX19sYW5ndWFnZSB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDklO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICZfX2hvYmJpZXMtdGl0bGUge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgJl9faG9iYmllcyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIH1cblxuICB9XG59XG5cbi5leHBlcmllbmNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzgzNzQ1IDUwJSwgIzIyMjAyQiA1MCUpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcblxuICBoMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cblxuICAmX193b3JreWVhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW46IDIuNWVtIGF1dG8gMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmY2NzVmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIHAge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1NCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW46IC0xNSUgMCAwIC0yNSU7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2Fycm93cGFydCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LXRvcC5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcbiAgfVxuXG4gICZfX2V4Q29uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjZWVlZWVlO1xuICAgIHBhZGRpbmc6IDIycHggNDdweCA2cHggNDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG59XG5cbi5wcm9qZWN0cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCByZ2JhKDAsMCwwLDAuNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBwb3VyIGFuY2llbnMgQ2hyb21lIGV0IFNhZmFyaSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiB2ZXJzaW9uIHN0YW5kYXJkaXPDqWUgKi9cbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJvamVjdHNCYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICBociB7XG4gICAgd2lkdGg6IDclO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgJl9fcDEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvRWRmLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgJl9fcDIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvVG90YWx0cmFuc3BvcnRzNzUuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAmX19wMyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9Cb21iZXJtYW4tQmFjay5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gICZfX3A0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL0Z0cC1JcmMuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAmX19wNSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9TdHJhY2VDb2RlLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgJl9fcDYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZGFzaGJvYXJkLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgJl9fYm94IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuXG4gICAgJl9fdGFibGUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHAge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgJl9fYm94OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG5cbiAgLm1hdC1ncmlkLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbiAgLm1hdC1ncmlkLXRpbGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTA7IC8qIFNpdCBvbiB0b3AgKi9cbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDgwJTtcblxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJl9fZGVzYyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAuY29sLXNtLTYge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2xvc2Uge1xuICBjb2xvcjogI2FhYWFhYTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xvc2U6aG92ZXIsXG5cbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5jb2x1bW4ge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7IH1cblxuICAuYWJvdXQsIC5wcm9qZWN0cyB7XG4gICAgYmFja2dyb3VuZDogIzM4Mzc0NSBub25lO1xuICB9XG5cbiAgLmJhbm5lcl9fbG90dGllIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG5cbi8qIEFycm93ICovXG4uYXJyb3cgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250IDogbm9ybWFsIDQwMCAxMDBweC8xICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcbn1cblxuI2Fycm93IGEgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2RiMDUgMS41cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzZGIwNSAxLjVzIGluZmluaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2RiMDUge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0yMHB4LCAyMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNkYjA1IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0yMHB4LCAyMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8qIERvd25sb2FkIGJ1dHRvbiAqL1xuYS5jdWJlQnRuIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDBkNzlkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmEuY3ViZUJ0biBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG5hLmN1YmVCdG4gc3Bhbjo6YmVmb3Jle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29udGVudDogYXR0cihkYXRhLWhvdmVyKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBkNzlkO1xufVxuXG5hLmN1YmVCdG46aG92ZXIgc3BhbixcbmEuY3ViZUJ0bjpmb2N1cyBzcGFuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuYS5jdWJlQnRuOmhvdmVyLFxuYS5jdWJlQnRuOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hLmN1YmVCdG46aG92ZXIgc3Bhbjo6YmVmb3JlLFxuYS5jdWJlQnRuOmZvY3VzIHNwYW46OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG59XG5cbi5pbnZpc2libGUge1xuICBib3R0b206IC0zNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjVzO31cblxuLyogQmFjayB0byB0b3AgaWNvbiAqL1xuI2ljb25lIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMxcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLyogU1ZHIFJPQ0tFVCBDU1MqL1xuICAjY1JldG91ciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICAgICYuY0ludmlzaWJsZSB7XG4gICAgICBib3R0b206IC0zNXB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuNXM7XG4gICAgfVxuXG4gICAgJi5jVmlzaWJsZSB7XG4gICAgICBib3R0b206IDMwcHggIWltcG9ydGFudDtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyogTWF0ZXJpYWwgT3ZlcndyaXRlICovXG46Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IDU0cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, {
        sidenavToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/components/home/sidenav-list/sidenav-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/core/components/home/sidenav-list/sidenav-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SidenavListComponent */

  /***/
  function srcAppCoreComponentsHomeSidenavListSidenavListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function () {
      return SidenavListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* Angular Modules */


    var SidenavListComponent = /*#__PURE__*/function () {
      function SidenavListComponent() {
        _classCallCheck(this, SidenavListComponent);

        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SidenavListComponent, [{
        key: "onSidenavClose",
        value: function onSidenavClose() {
          this.sidenavClose.emit();
        }
      }]);

      return SidenavListComponent;
    }();

    SidenavListComponent.ɵfac = function SidenavListComponent_Factory(t) {
      return new (t || SidenavListComponent)();
    };

    SidenavListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavListComponent,
      selectors: [["app-sidenav-list"]],
      outputs: {
        sidenavClose: "sidenavClose"
      },
      decls: 6,
      vars: 0,
      consts: [["mat-list-item", "", "routerLink", "", "id", "home", 3, "click"], [1, "nav-caption"]],
      template: function SidenavListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_1_listener() {
            return ctx.onSidenavClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.nav-caption[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jb2lzL0RvY3VtZW50cy9Bbmd1bGFyLXdlYnNpdGUvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaG9tZS9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaG9tZS9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUvc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciwgYTphY3RpdmV7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5uYXYtY2FwdGlvbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubmF2LWNhcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidenav-list',
          templateUrl: './sidenav-list.component.html',
          styleUrls: ['./sidenav-list.component.scss']
        }]
      }], null, {
        sidenavClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/core/components/home/home.component.ts");
    /* harmony import */


    var _components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home/sidenav-list/sidenav-list.component */
    "./src/app/core/components/home/sidenav-list/sidenav-list.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/core/components/footer/footer.component.ts");
    /* Angular modules */

    /* App modules */

    /* Components */


    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__["SidenavListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__["SidenavListComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__["SidenavListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
          exports: [_components_home_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__["SidenavListComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/social/social.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/social/social.component.ts ***!
    \**************************************************************/

  /*! exports provided: SocialComponent */

  /***/
  function srcAppSharedComponentsSocialSocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialComponent", function () {
      return SocialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* Angular modules */


    var SocialComponent = function SocialComponent() {
      _classCallCheck(this, SocialComponent);
    };

    SocialComponent.ɵfac = function SocialComponent_Factory(t) {
      return new (t || SocialComponent)();
    };

    SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialComponent,
      selectors: [["app-social"]],
      decls: 18,
      vars: 0,
      consts: [["id", "sticky-social"], ["href", "https://www.facebook.com/francois.milhet", "target", "_blank", 1, "entypo-facebook"], ["href", "https://twitter.com/francois97180", "target", "_blank", 1, "entypo-twitter"], ["href", "https://www.linkedin.com/in/francois-milhet-713b4513a/", "target", "_blank", 1, "entypo-linkedin"], ["href", "https://www.instagram.com/filoou/", "target", "_blank", 1, "entypo-instagrem"]],
      template: function SocialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(https://weloveiconfonts.com/api/?family=entypo);\n[class*=entypo-][_ngcontent-%COMP%]:before {\n  font-family: \"entypo\", sans-serif;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n#sticky-social[_ngcontent-%COMP%] {\n  z-index: 1000;\n  left: 0;\n  position: fixed;\n  top: 150px;\n}\n#sticky-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: #333;\n  color: #fff;\n  display: block;\n  height: 35px;\n  font: 16px \"Open Sans\", sans-serif;\n  line-height: 35px;\n  position: relative;\n  text-align: center;\n  width: 35px;\n}\n#sticky-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 35px;\n  left: -120px;\n  position: absolute;\n  text-align: center;\n  width: 120px;\n}\n#sticky-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  left: 100%;\n}\n#sticky-social[_ngcontent-%COMP%]   a[class*=facebook][_ngcontent-%COMP%], #sticky-social[_ngcontent-%COMP%]   a[class*=facebook][_ngcontent-%COMP%]:hover, #sticky-social[_ngcontent-%COMP%]   a[class*=facebook][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #3b5998;\n}\n#sticky-social[_ngcontent-%COMP%]   a[class*=twitter][_ngcontent-%COMP%], #sticky-social[_ngcontent-%COMP%]   a[class*=twitter][_ngcontent-%COMP%]:hover, #sticky-social[_ngcontent-%COMP%]   a[class*=twitter][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #00aced;\n}\n#sticky-social[_ngcontent-%COMP%]   a[class*=linkedin][_ngcontent-%COMP%], #sticky-social[_ngcontent-%COMP%]   a[class*=linkedin][_ngcontent-%COMP%]:hover, #sticky-social[_ngcontent-%COMP%]   a[class*=linkedin][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #007bb6;\n}\n#sticky-social[_ngcontent-%COMP%]   a[class*=instagrem][_ngcontent-%COMP%], #sticky-social[_ngcontent-%COMP%]   a[class*=instagrem][_ngcontent-%COMP%]:hover, #sticky-social[_ngcontent-%COMP%]   a[class*=instagrem][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #517fa4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jb2lzL0RvY3VtZW50cy9Bbmd1bGFyLXdlYnNpdGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJEQUFBO0FBRVI7RUFDRSxpQ0FBQTtBQ0FGO0FERUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRjtBREVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0FDQ0Y7QURFQTs7O0VBRTJDLG1CQUFBO0FDRTNDO0FEQUE7OztFQUUwQyxtQkFBQTtBQ0kxQztBREZBOzs7RUFFMkMsbUJBQUE7QUNNM0M7QURKQTs7O0VBRTRDLG1CQUFBO0FDUTVDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1lbnR5cG8pO1xuXG5bY2xhc3MqPVwiZW50eXBvLVwiXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJlbnR5cG9cIiwgc2Fucy1zZXJpZjtcbn1cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jc3RpY2t5LXNvY2lhbCB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNTBweDtcbn1cblxuI3N0aWNreS1zb2NpYWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQ6IDE2cHggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzVweDtcbn1cblxuI3N0aWNreS1zb2NpYWwgYSBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGxlZnQ6IC0xMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgd2lkdGg6MTIwcHg7XG59XG5cbiNzdGlja3ktc29jaWFsIGE6aG92ZXIgc3BhbiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPVwiZmFjZWJvb2tcIl0sXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1cImZhY2Vib29rXCJdOmhvdmVyLFxuI3N0aWNreS1zb2NpYWwgYVtjbGFzcyo9XCJmYWNlYm9va1wiXSBzcGFuIHsgYmFja2dyb3VuZDogIzNiNTk5ODsgfVxuXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1cInR3aXR0ZXJcIl0sXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1cInR3aXR0ZXJcIl06aG92ZXIsXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1cInR3aXR0ZXJcIl0gc3BhbiB7IGJhY2tncm91bmQ6ICMwMGFjZWQ7IH1cblxuI3N0aWNreS1zb2NpYWwgYVtjbGFzcyo9XCJsaW5rZWRpblwiXSxcbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPVwibGlua2VkaW5cIl06aG92ZXIsXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1cImxpbmtlZGluXCJdIHNwYW4geyBiYWNrZ3JvdW5kOiAjMDA3YmI2OyB9XG5cbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPVwiaW5zdGFncmVtXCJdLFxuI3N0aWNreS1zb2NpYWwgYVtjbGFzcyo9XCJpbnN0YWdyZW1cIl06aG92ZXIsXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1cImluc3RhZ3JlbVwiXSBzcGFuIHsgYmFja2dyb3VuZDogIzUxN2ZhNDsgfVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly93ZWxvdmVpY29uZm9udHMuY29tL2FwaS8/ZmFtaWx5PWVudHlwbyk7XG5bY2xhc3MqPWVudHlwby1dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVudHlwb1wiLCBzYW5zLXNlcmlmO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI3N0aWNreS1zb2NpYWwge1xuICB6LWluZGV4OiAxMDAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTUwcHg7XG59XG5cbiNzdGlja3ktc29jaWFsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250OiAxNnB4IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbiNzdGlja3ktc29jaWFsIGEgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBsZWZ0OiAtMTIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG59XG5cbiNzdGlja3ktc29jaWFsIGE6aG92ZXIgc3BhbiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPWZhY2Vib29rXSxcbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPWZhY2Vib29rXTpob3ZlcixcbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPWZhY2Vib29rXSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cblxuI3N0aWNreS1zb2NpYWwgYVtjbGFzcyo9dHdpdHRlcl0sXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj10d2l0dGVyXTpob3ZlcixcbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPXR3aXR0ZXJdIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBhY2VkO1xufVxuXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1saW5rZWRpbl0sXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1saW5rZWRpbl06aG92ZXIsXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1saW5rZWRpbl0gc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjY7XG59XG5cbiNzdGlja3ktc29jaWFsIGFbY2xhc3MqPWluc3RhZ3JlbV0sXG4jc3RpY2t5LXNvY2lhbCBhW2NsYXNzKj1pbnN0YWdyZW1dOmhvdmVyLFxuI3N0aWNreS1zb2NpYWwgYVtjbGFzcyo9aW5zdGFncmVtXSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzUxN2ZhNDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social',
          templateUrl: './social.component.html',
          styleUrls: ['./social.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: playerFactory, SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerFactory", function () {
      return playerFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-scroll-event */
    "./node_modules/ngx-scroll-event/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var ngx_lottie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-lottie */
    "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! lottie-web */
    "./node_modules/lottie-web/build/player/lottie.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/social/social.component */
    "./src/app/shared/components/social/social.component.ts");
    /* Angular modules */

    /* Material modules */

    /* Lottie module */

    /* Components */


    function playerFactory() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_12___default.a;
    }

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__["ScrollEventModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_11__["LottieModule"].forRoot({
        player: playerFactory,
        useCache: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__["ScrollEventModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_11__["LottieModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__["ScrollEventModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_11__["LottieModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__["ScrollEventModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_11__["LottieModule"], _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__["ScrollEventModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_11__["LottieModule"].forRoot({
            player: playerFactory,
            useCache: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], ngx_scroll_event__WEBPACK_IMPORTED_MODULE_4__["ScrollEventModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_11__["LottieModule"], _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/francois/Documents/Angular-website/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map