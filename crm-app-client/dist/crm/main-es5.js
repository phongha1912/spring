(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/5R1":
    /*!**************************************************************!*\
      !*** ./src/app/core/components/confirm/confirm.component.ts ***!
      \**************************************************************/

    /*! exports provided: ConfirmComponent */

    /***/
    function R1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
        return ConfirmComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConfirmComponent = /*#__PURE__*/function () {
        function ConfirmComponent(dialogData, dialogRef) {
          _classCallCheck(this, ConfirmComponent);

          this.dialogData = dialogData;
          this.dialogRef = dialogRef;
          this.confirm = this.dialogData.confirm;
        }

        _createClass(ConfirmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCancelClicked",
          value: function onCancelClicked() {
            this.dialogRef.close(false);
          }
        }, {
          key: "onYesClicked",
          value: function onYesClicked() {
            this.dialogRef.close(true);
          }
        }]);

        return ConfirmComponent;
      }();

      ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
        return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]));
      };

      ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmComponent,
        selectors: [["crm-confirm"]],
        decls: 12,
        vars: 2,
        consts: [["mat-dialog-title", ""], [1, "ui", "section", "divider"], ["align", "end"], ["type", "button", 1, "ui", "button", 3, "click"]],
        template: function ConfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-actions", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_8_listener() {
              return ctx.onCancelClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_10_listener() {
              return ctx.onYesClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.confirm.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.confirm.content, " ");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "/EE8":
    /*!******************************************************!*\
      !*** ./src/app/shared/pipes/imageurl2srcset.pipe.ts ***!
      \******************************************************/

    /*! exports provided: Imageurl2srcsetPipe */

    /***/
    function EE8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Imageurl2srcsetPipe", function () {
        return Imageurl2srcsetPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Imageurl2srcsetPipe = /*#__PURE__*/function () {
        function Imageurl2srcsetPipe() {
          _classCallCheck(this, Imageurl2srcsetPipe);
        }

        _createClass(Imageurl2srcsetPipe, [{
          key: "transform",
          value: function transform(value) {
            return null;
          }
        }]);

        return Imageurl2srcsetPipe;
      }();

      Imageurl2srcsetPipe.ɵfac = function Imageurl2srcsetPipe_Factory(t) {
        return new (t || Imageurl2srcsetPipe)();
      };

      Imageurl2srcsetPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "imageurl2srcset",
        type: Imageurl2srcsetPipe,
        pure: true
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
      /*! D:\Work\SampleJAVA\CDO_Spring\crm-app-client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1ua0":
    /*!********************************************!*\
      !*** ./src/app/shared/components/index.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent, PaginatorComponent */

    /***/
    function ua0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer/footer.component */
      "aF9I");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
      });
      /* harmony import */


      var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./paginator/paginator.component */
      "miTN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
        return _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"];
      });
      /***/

    },

    /***/
    "2hy2":
    /*!**********************************************************!*\
      !*** ./src/app/core/interceptors/nocache.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: NoCacheInterceptor */

    /***/
    function hy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoCacheInterceptor", function () {
        return NoCacheInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NoCacheInterceptor = /*#__PURE__*/function () {
        function NoCacheInterceptor() {
          _classCallCheck(this, NoCacheInterceptor);
        }

        _createClass(NoCacheInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req);
          }
        }]);

        return NoCacheInterceptor;
      }();

      NoCacheInterceptor.ɵfac = function NoCacheInterceptor_Factory(t) {
        return new (t || NoCacheInterceptor)();
      };

      NoCacheInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NoCacheInterceptor,
        factory: NoCacheInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "4ina":
    /*!*******************************************!*\
      !*** ./src/app/core/models/core.model.ts ***!
      \*******************************************/

    /*! exports provided: PropertyType, ScreenSize, EditorMode */

    /***/
    function ina(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyType", function () {
        return PropertyType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenSize", function () {
        return ScreenSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorMode", function () {
        return EditorMode;
      });

      var PropertyType;

      (function (PropertyType) {
        PropertyType[PropertyType["Text"] = 1] = "Text";
        PropertyType[PropertyType["CheckBox"] = 2] = "CheckBox";
      })(PropertyType || (PropertyType = {}));

      var ScreenSize;

      (function (ScreenSize) {
        ScreenSize[ScreenSize["XS"] = 1] = "XS";
        ScreenSize[ScreenSize["SM"] = 2] = "SM";
        ScreenSize[ScreenSize["MD"] = 3] = "MD";
        ScreenSize[ScreenSize["LG"] = 4] = "LG";
        ScreenSize[ScreenSize["XL"] = 5] = "XL";
      })(ScreenSize || (ScreenSize = {}));

      var EditorMode;

      (function (EditorMode) {
        EditorMode[EditorMode["Create"] = 0] = "Create";
        EditorMode[EditorMode["Update"] = 1] = "Update";
      })(EditorMode || (EditorMode = {}));
      /***/

    },

    /***/
    "5gP/":
    /*!************************************************!*\
      !*** ./src/app/core/services/image.service.ts ***!
      \************************************************/

    /*! exports provided: ImageService */

    /***/
    function gP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return ImageService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");

      var ImageService = /*#__PURE__*/function () {
        function ImageService(apiService, http) {
          _classCallCheck(this, ImageService);

          this.apiService = apiService;
          this.http = http;
        }
        /*
        getImages(q:ImageQuery): Observable<ImagesResult> {
          let sReq = '';
              let api = '/images';
              if(typeof q.start === 'number') {
            sReq += `&start=${q.start}`;
          }
              if(typeof q.limit === 'number') {
            if(sReq) { // not empty
              sReq +='&'
            }
            sReq += `limit=${q.limit}`;
          }
              if(q.filter) {
            for(let prop in q.filter) {
                if(sReq) { // not empty
                  sReq +='&'
                }
                sReq += `${prop}=${q.filter[prop]}`;
            }
          }
              if(sReq) { // not empty
            api += `?${sReq}`;
          }
          
          console.log("api: " + api);
          return this.apiService.get(api);
        }
        */


        _createClass(ImageService, [{
          key: "createImage",
          value: function createImage(image) {
            var form = new FormData();
            form.append('image', image, image.name);
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/images"), form, {
              reportProgress: true
            }); // The `HttpClient.request` API produces a raw event stream
            // which includes start (sent), progress, and response events.

            var uploadStatus = {
              f: image,
              ok: true,
              progress: 0,
              done: false
            };
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (event) {
              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                  if (event.total) {
                    uploadStatus.progress = Math.round(100 * event.loaded / event.total);
                  }

                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                  uploadStatus.progress = 100;
                  uploadStatus.done = true;
                  uploadStatus.respone = event.body;
                  break;

                default:
                  break;
              }

              return uploadStatus;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              // TODO: review
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteImage",
          value: function deleteImage(id) {
            return this.apiService["delete"]("/images/".concat(id));
          }
        }]);

        return ImageService;
      }();

      ImageService.ɵfac = function ImageService_Factory(t) {
        return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: ImageService,
        factory: ImageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "5oFn":
    /*!***********************************************!*\
      !*** ./src/app/core/models/employee.model.ts ***!
      \***********************************************/

    /*! no exports provided */

    /***/
    function oFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "6H+C":
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /*! exports provided: HttpInterceptorProviders, TestHttpInterceptorProviders */

    /***/
    function HC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpInterceptorProviders", function () {
        return HttpInterceptorProviders;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestHttpInterceptorProviders", function () {
        return TestHttpInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "8mIn");
      /* harmony import */


      var _nocache_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nocache.interceptor */
      "2hy2");
      /* harmony import */


      var _server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./server-error.interceptor */
      "LhKE");
      /* harmony import */


      var _api_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api.interceptor */
      "jZRB");
      /* harmony import */


      var _fake_employee_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fake-employee.interceptor */
      "ht3r");
      /* harmony import */


      var _fake_user_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fake-user.interceptor */
      "YfLl");

      var HttpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ServerErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _nocache_interceptor__WEBPACK_IMPORTED_MODULE_2__["NoCacheInterceptor"],
        multi: true
      }];
      var TestHttpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _server_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ServerErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _nocache_interceptor__WEBPACK_IMPORTED_MODULE_2__["NoCacheInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _fake_employee_interceptor__WEBPACK_IMPORTED_MODULE_5__["FakeEmployeeInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _fake_user_interceptor__WEBPACK_IMPORTED_MODULE_6__["FakeUserInterceptor"],
        multi: true
      }];
      /***/
    },

    /***/
    "7dP1":
    /*!***********************************************!*\
      !*** ./src/app/core/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function dP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jwt.service */
      "Rs8g");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(apiService, jwtService) {
          _classCallCheck(this, AuthService);

          this.apiService = apiService;
          this.jwtService = jwtService;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
          this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
          this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        } // Verify JWT in localstorage with server & load user's info. This runs once on application startup.


        _createClass(AuthService, [{
          key: "populate",
          value: function populate() {
            var _this = this;

            var currentUserId = this.jwtService.getToken().id; // If JWT detected, attempt to get & store user's info

            if (currentUserId) {
              this.apiService.get('/employees/' + currentUserId).subscribe(function (user) {
                return _this.setAuth(user);
              }, function () {
                return _this.purgeAuth();
              } // err
              );
            } else {
              this.purgeAuth(); // Remove any potential remnants of previous auth states
            }
          }
        }, {
          key: "setAuth",
          value: function setAuth(user) {
            this.jwtService.saveCurrentUserId(user); // Save JWT sent from server in localstorage

            this.currentUserSubject.next(user);
            this.isAuthenticatedSubject.next(true);
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "purgeAuth",
          value: function purgeAuth() {
            // Remove JWT from localstorage
            this.jwtService.destroyToken(); // Set current user to an empty object

            this.currentUserSubject.next(undefined); // Set auth status to false

            this.isAuthenticatedSubject.next(false);
          }
        }, {
          key: "attemptAuth",
          value: function attemptAuth(credentials) {
            var _this2 = this;

            return this.apiService.post('/auth/signin', credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
              return _this2.setAuth(user);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(data) {
            return this.apiService.post('/auth/forgotpwd', data);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(data) {
            var _this3 = this;

            return this.apiService.post('/auth/resetpwd', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
              return _this3.setAuth(user);
            }));
          }
        }, {
          key: "signup",
          value: function signup(data) {
            var _this4 = this;

            return this.apiService.post('/auth/signup', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
              return _this4.setAuth(user);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "7rOj":
    /*!***************************************!*\
      !*** ./src/app/shared/pipes/index.ts ***!
      \***************************************/

    /*! exports provided: Imageurl2srcsetPipe */

    /***/
    function rOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./imageurl2srcset.pipe */
      "/EE8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Imageurl2srcsetPipe", function () {
        return _imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_0__["Imageurl2srcsetPipe"];
      });
      /***/

    },

    /***/
    "8mIn":
    /*!******************************************************!*\
      !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function mIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(jwtService) {
          _classCallCheck(this, JwtInterceptor);

          this.jwtService = jwtService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this5 = this;

            var token = this.jwtService.getToken().token;
            console.log("JwtInterceptor add token", token);

            if (token && !req.headers.get('Authorization')) {
              var request = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
              return next.handle(request);
            } else {
              return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (evt) {
                if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                  var tokenReturn = evt.headers.get('OT-Authorization');
                  console.log("JwtInterceptor add OT-Authorization", tokenReturn);

                  if (tokenReturn) {
                    tokenReturn = tokenReturn.substring(7); // remove 'Bearer '

                    console.log('saveToken: ' + tokenReturn);

                    _this5.jwtService.saveToken(tokenReturn);
                  }
                }
              }));
            }
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["JwtService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'api',
        sorlUrl: '/solr'
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
    "LhKE":
    /*!***************************************************************!*\
      !*** ./src/app/core/interceptors/server-error.interceptor.ts ***!
      \***************************************************************/

    /*! exports provided: ServerErrorInterceptor */

    /***/
    function LhKE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function () {
        return ServerErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "dJ3e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ServerErrorInterceptor = /*#__PURE__*/function () {
        function ServerErrorInterceptor(injector) {
          _classCallCheck(this, ServerErrorInterceptor);

          this.injector = injector;
        }

        _createClass(ServerErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this6 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);

              if (error.status === 401) {
                _this6.injector.get(_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]).purgeAuth();

                _this6.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]).navigate(['auth', 'signin']);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
              }
            }));
          }
        }]);

        return ServerErrorInterceptor;
      }();

      ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) {
        return new (t || ServerErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]));
      };

      ServerErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: ServerErrorInterceptor,
        factory: ServerErrorInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "M0ag":
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /*! exports provided: SharedModule, FooterComponent, PaginatorComponent, NavigationFocusDirective, Imageurl2srcsetPipe */

    /***/
    function M0ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared.module */
      "PCNd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
      });
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "1ua0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"];
      });
      /* harmony import */


      var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./directives */
      "vu/V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationFocusDirective", function () {
        return _directives__WEBPACK_IMPORTED_MODULE_2__["NavigationFocusDirective"];
      });
      /* harmony import */


      var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes */
      "7rOj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Imageurl2srcsetPipe", function () {
        return _pipes__WEBPACK_IMPORTED_MODULE_3__["Imageurl2srcsetPipe"];
      });
      /***/

    },

    /***/
    "NUQi":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function NUQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var _this7 = this;

            return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (isAuth) {
              if (!isAuth) {
                _this7.router.navigate(['/auth', 'signin'], {
                  queryParams: {
                    redirectUrl: url
                  }
                });
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _directives_navigation_focus_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./directives/navigation-focus.directive */
      "vfei");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components */
      "1ua0");
      /* harmony import */


      var _pipes_imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pipes/imageurl2srcset.pipe */
      "/EE8");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], // prime controls
        primeng_button__WEBPACK_IMPORTED_MODULE_25__["ButtonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], //prime controls
        primeng_button__WEBPACK_IMPORTED_MODULE_25__["ButtonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _directives_navigation_focus_directive__WEBPACK_IMPORTED_MODULE_22__["NavigationFocusDirective"], _components__WEBPACK_IMPORTED_MODULE_23__["PaginatorComponent"], _pipes_imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_24__["Imageurl2srcsetPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], // prime controls
          primeng_button__WEBPACK_IMPORTED_MODULE_25__["ButtonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], //prime controls
          primeng_button__WEBPACK_IMPORTED_MODULE_25__["ButtonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectModule"], _components__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_23__["PaginatorComponent"], _directives_navigation_focus_directive__WEBPACK_IMPORTED_MODULE_22__["NavigationFocusDirective"], _pipes_imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_24__["Imageurl2srcsetPipe"]]
        });
      })();
      /***/

    },

    /***/
    "PQuL":
    /*!*******************************************!*\
      !*** ./src/app/core/models/user.model.ts ***!
      \*******************************************/

    /*! no exports provided */

    /***/
    function PQuL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "Pgg+":
    /*!********************************************!*\
      !*** ./src/app/core/models/image.model.ts ***!
      \********************************************/

    /*! no exports provided */

    /***/
    function Pgg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      var sizeMap = new Map([
          ['mini', 40],
          ['tiny', 80],
          ['small', 150],
          ['medium', 300],
          ['large', 450],
          ['big', 600],
          ['huge', 800],
          ['massive', 960]
        ]);
      */

      /***/

    },

    /***/
    "QUjz":
    /*!****************************************************************************!*\
      !*** ./src/app/core/components/main-container/main-container.component.ts ***!
      \****************************************************************************/

    /*! exports provided: MainContainerComponent */

    /***/
    function QUjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function () {
        return MainContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services */
      "dJ3e");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      function MainContainerComponent_div_7_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContainerComponent_div_7_ng_container_8_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.onAdministratorClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Administrator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MainContainerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_drop_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View all employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainContainerComponent_div_7_ng_container_8_Template, 5, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContainerComponent_div_7_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onSignOutClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.ngIf;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.goodAdmin);
        }
      }

      function MainContainerComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContainerComponent_ng_template_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onSignInClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MainContainerComponent = /*#__PURE__*/function () {
        function MainContainerComponent(router, authService, employeeService) {
          var _this8 = this;

          _classCallCheck(this, MainContainerComponent);

          this.router = router;
          this.authService = authService;
          this.employeeService = employeeService;
          this.user$ = this.authService.currentUser;
          this.user$.subscribe(function (user) {
            if (user) {
              _this8.router.navigate(['employee', user.id]);
            }
          });
        }

        _createClass(MainContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSignInClicked",
          value: function onSignInClicked() {
            console.log("onSignInClicked");
            this.router.navigate(['auth', 'signin'], {
              queryParams: {
                redirectUrl: this.router.url
              }
            });
          }
        }, {
          key: "onSignOutClicked",
          value: function onSignOutClicked() {
            this.authService.purgeAuth();
            this.router.navigate(['auth', 'signin']);
          }
        }, {
          key: "onViewProfile",
          value: function onViewProfile(user) {
            this.router.navigate(['/employee', user.id]);
          }
        }, {
          key: "onAdministratorClicked",
          value: function onAdministratorClicked() {
            this.router.navigate(['/admin']);
          }
        }]);

        return MainContainerComponent;
      }();

      MainContainerComponent.ɵfac = function MainContainerComponent_Factory(t) {
        return new (t || MainContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]));
      };

      MainContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainContainerComponent,
        selectors: [["crm-main-container"]],
        decls: 13,
        vars: 4,
        consts: [[1, "navbar-container", "mat-elevation-z6"], [1, "navbar-header"], ["mat-button", "", "routerLink", "/", "aria-label", "Training"], ["src", "../../../../assets/img/angular-white-transparent.svg", "alt", "angular", 1, "crm-logo"], [1, "flex-spacer"], [4, "ngIf", "ngIfElse"], [1, "navbar", "navbar-show-small"], ["signin", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["userMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/admin"], [4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "click"]],
        template: function MainContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LogiGear CRM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainContainerComponent_div_7_Template, 11, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nav", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainContainerComponent_ng_template_10_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.user$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n[_nghost-%COMP%]    > app-component-sidenav[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n[_nghost-%COMP%]    > crm-homepage[_ngcontent-%COMP%], [_nghost-%COMP%]    > crm-product-detail[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n@media (max-width: 720px) {\n  [_nghost-%COMP%] {\n    top: 92px;\n  }\n\n  [_nghost-%COMP%]    > crm-homepage[_ngcontent-%COMP%], [_nghost-%COMP%]    > crm-product-detail[_ngcontent-%COMP%] {\n    overflow-y: visible;\n  }\n}\n\n.navbar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\n.navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px;\n}\n\n.navbar-header[_ngcontent-%COMP%]    > .mat-button[_ngcontent-%COMP%]:last-child {\n  margin-left: auto;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.crm-logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n\n.navbar-link[_ngcontent-%COMP%] {\n  text-decoration: inherit;\n  flex: 1;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.navbar-show-small[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 720px) {\n  .navbar-hide-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navbar-show-small[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFHQTtFQUNFLE9BQUE7QUFBRjs7QUFHQTs7RUFFRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxTQUFBO0VBQUY7O0VBR0E7O0lBRUUsbUJBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlJO0VBQ0UsaUJBQUE7QUFGTjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSx3QkFBQTtFQUNBLE9BQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTs7O0dBQUE7O0FBSUE7RUFDRTtJQUNFLGFBQUE7RUFKRjs7RUFPQTtJQUNFLGNBQUE7RUFKRjs7RUFPQTtJQUNFLGFBQUE7RUFKRjtBQUNGIiwiZmlsZSI6Im1haW4tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuOmhvc3QgPiBhcHAtY29tcG9uZW50LXNpZGVuYXYge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbjpob3N0ID4gY3JtLWhvbWVwYWdlLFxyXG46aG9zdCA+IGNybS1wcm9kdWN0LWRldGFpbHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICB0b3A6IDkycHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA+ICBjcm0taG9tZXBhZ2UsXHJcbiAgOmhvc3QgPiBjcm0tcHJvZHVjdC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgXHJcbiAgPiAubWF0LWJ1dHRvbiB7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuICBcclxuLmZsZXgtc3BhY2VyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuICBcclxuLmNybS1sb2dvIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luOiAwIDRweCAzcHggMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbiAgXHJcbi5uYXZiYXItbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuICBcclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIFxyXG4ubmF2YmFyLXNob3ctc21hbGwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuICBcclxuLyoqXHJcbiAgKiBSdWxlcyBmb3Igd2hlbiB0aGUgZGV2aWNlIGlzIGRldGVjdGVkIHRvIGJlIGEgc21hbGwgc2NyZWVuLlxyXG4gICogTW92ZXMgY29udGVudCB0d28gcm93cyBpbnN0ZWFkIG9mIG9uZS5cclxuICAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubmF2YmFyLWhpZGUtc21hbGwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1zaG93LXNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiAgXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Rs8g":
    /*!**********************************************!*\
      !*** ./src/app/core/services/jwt.service.ts ***!
      \**********************************************/

    /*! exports provided: JwtService */

    /***/
    function Rs8g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtService", function () {
        return JwtService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JwtService = /*#__PURE__*/function () {
        function JwtService() {
          _classCallCheck(this, JwtService);
        }

        _createClass(JwtService, [{
          key: "getToken",
          value: function getToken() {
            return {
              id: window.localStorage.currentUserId,
              token: window.localStorage.jwtToken
            };
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.localStorage.jwtToken = token;
          }
        }, {
          key: "saveCurrentUserId",
          value: function saveCurrentUserId(user) {
            window.localStorage.currentUserId = user.id;
          }
        }, {
          key: "destroyToken",
          value: function destroyToken() {
            window.localStorage.removeItem('currentUserId');
            window.localStorage.removeItem('jwtToken');
          }
        }]);

        return JwtService;
      }();

      JwtService.ɵfac = function JwtService_Factory(t) {
        return new (t || JwtService)();
      };

      JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtService,
        factory: JwtService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "SKFc":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/responsive.service.ts ***!
      \*****************************************************/

    /*! exports provided: ResponsiveService */

    /***/
    function SKFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResponsiveService", function () {
        return ResponsiveService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models */
      "sKXY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ResponsiveService = function ResponsiveService(breakpoints) {
        var _this9 = this;

        _classCallCheck(this, ResponsiveService);

        /**
         * Breakpoints.XSmall: max-width equals 599.99px
         * Breakpoints.Small: min-width equals 600px and max-width equals 959.99px
         * Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px
         * Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px
         * Breakpoints.XLarge: min-width equals 1920px
         */
        this.breakpoints = breakpoints;
        /*
        private readonly breakpoints : { [ size : string ] : SwlBreakpoint } =
        {
            ["xs"] : {  screen:Screen.Mobile,
                        header: {wLogo: 'sixteen wide', wSearch: 'sixteen wide', wMenu:'sixteen wide', wLast: ''},
                        productList: {nColumn:1},
                        productDetail: {
                          sectionIntro: {wImg: 'sixteen wide', wIntro: 'sixteen wide'},
                          sectionInfo: {wTable: 'sixteen wide'}
                        }
                      },
              
            ["sm"] : {  screen:Screen.Mobile,
                        header: {wLogo: 'sixteen wide', wSearch: 'sixteen wide', wMenu:'sixteen wide', wLast: ''},
                        productList: {nColumn:3},
                        productDetail: {
                          sectionIntro: {wImg: 'eight wide', wIntro: 'eight wide'},
                          sectionInfo: {wTable: 'sixteen wide'}
                        }
                      },
                    ["md"] : {  screen:Screen.Desktop,
                        header: {wLogo: 'two wide', wSearch: 'seven wide', wMenu:'four wide', wLast: 'three wide'},
                        productList: {nColumn:4},
                        productDetail: {
                          sectionIntro: {wImg: 'eight wide', wIntro: 'eight wide'},
                          sectionInfo: {wTable: 'eight wide'}
                        }
                      },
                    ["lg"] : {  screen:Screen.Desktop,
                        header: {wLogo: 'one wide', wSearch: 'eight wide', wMenu:'three wide', wLast: 'four wide'},
                        productList: {nColumn:5},
                        productDetail: {
                          sectionIntro: {wImg: 'eight wide', wIntro: 'eight wide'},
                          sectionInfo: {wTable: 'eight wide'}
                        }
                      },
                    ["xl"] : {  screen:Screen.Desktop,
                        header: {wLogo: 'one wide', wSearch: 'eight wide', wMenu:'three wide', wLast: 'four wide'},
                        productList: {nColumn:6},
                        productDetail: { sectionIntro: {wImg: 'eight wide', wIntro: 'eight wide'},
                        sectionInfo: {wTable: 'eight wide'}
                      }
                    },
        };*/

        this.currentBreakpointSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](undefined);
        this.currentBreakponitObservable = this.currentBreakpointSubject.asObservable();
        this.breakpoints.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]).subscribe(function (state) {
          var t = 0;

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
            console.log('Matches XSmall viewport');
            t = _models__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].XS;
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
            console.log('Matches Small viewport');
            t = _models__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].SM;
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
            console.log('Matches Medium  viewport');
            t = _models__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].MD;
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
            console.log('Matches Large viewport');
            t = _models__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].LG;
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
            console.log('Matches XLarge viewport');
            t = _models__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"].XL;
          }

          if (t !== 0) {
            _this9.currentBreakpointSubject.next(t);
          }
        });
      };

      ResponsiveService.ɵfac = function ResponsiveService_Factory(t) {
        return new (t || ResponsiveService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      ResponsiveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ResponsiveService,
        factory: ResponsiveService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core */
      "ey9i");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
          this.title = 'LogiGear CRM';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.populate();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["crm-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "TWmU":
    /*!****************************************************!*\
      !*** ./src/app/core/guards/module-import.guard.ts ***!
      \****************************************************/

    /*! exports provided: throwIfAlreadyLoaded */

    /***/
    function TWmU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
        return throwIfAlreadyLoaded;
      });

      function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    "UNx2":
    /*!**************************************************************!*\
      !*** ./src/app/core/components/loading/loading.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function UNx2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
        return new (t || LoadingComponent)();
      };

      LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingComponent,
        selectors: [["crm-loading"]],
        decls: 1,
        vars: 0,
        consts: [["diameter", "50", "mode", "indeterminate"]],
        template: function LoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 0);
          }
        },
        directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Vyfh":
    /*!******************************************!*\
      !*** ./src/app/core/components/index.ts ***!
      \******************************************/

    /*! exports provided: MainContainerComponent, PropertyUpdateFormComponent, ConfirmComponent, LoadingComponent */

    /***/
    function Vyfh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-container/main-container.component */
      "QUjz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function () {
        return _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_0__["MainContainerComponent"];
      });
      /* harmony import */


      var _property_update_form_property_update_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./property-update-form/property-update-form.component */
      "qSzy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PropertyUpdateFormComponent", function () {
        return _property_update_form_property_update_form_component__WEBPACK_IMPORTED_MODULE_1__["PropertyUpdateFormComponent"];
      });
      /* harmony import */


      var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm/confirm.component */
      "/5R1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
        return _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"];
      });
      /* harmony import */


      var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading/loading.component */
      "UNx2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"];
      });
      /***/

    },

    /***/
    "YfLl":
    /*!************************************************************!*\
      !*** ./src/app/core/interceptors/fake-user.interceptor.ts ***!
      \************************************************************/

    /*! exports provided: FakeUserInterceptor */

    /***/
    function YfLl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeUserInterceptor", function () {
        return FakeUserInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FakeUserInterceptor = /*#__PURE__*/function () {
        /*
        private users:User[] = [
          {id:'1', email: 'sti2k.hai.ly@gmail.com', name: 'Samson', roles: ['ADMIN'], unverified: false, blocked: false, goodUser: true, goodAdmin: true},
          {id:'2', email: 'do.tran@gmail.com', name: 'DoTran', roles: ['USER'], unverified: false, blocked: false, goodUser: true, goodAdmin: false},
        ]*/
        function FakeUserInterceptor() {
          _classCallCheck(this, FakeUserInterceptor);
        }

        _createClass(FakeUserInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // array in local storage for registered users
            var s = localStorage.getItem('users');
            var users = [];

            if (s) {
              users = JSON.parse(s) || [];
            } // wrap in delayed observable to simulate server api call


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
              // authenticate
              if (request.url.endsWith('/api/auth/signin') && request.method === 'POST') {
                console.log('FakeUserInterceptor for login'); // find if any user matches login credentials

                var filteredUsers = users.filter(function (user) {
                  return user.email === request.body.email && user.pwd === request.body.pwd;
                });

                if (filteredUsers.length) {
                  // if login details are valid return 200 OK with user details and fake jwt token
                  var user = filteredUsers[0];
                  var body = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    roles: ['USER'],
                    unverified: false,
                    blocked: false,
                    goodUser: true,
                    goodAdmin: false
                  };
                  var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'OT-Authorization': "Bearer fake-jwt-token"
                  });
                  var httpResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    headers: headers,
                    body: body
                  });
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(httpResponse);
                } else {
                  // else return 400 bad request
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    error: {
                      message: 'Username or password is incorrect'
                    }
                  });
                }
              } // get users


              if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    body: users
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    error: {
                      message: 'Unauthorized'
                    }
                  });
                }
              } // get user by id


              if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                console.log('FakeUserInterceptor for getting user with id'); // check for fake auth token in header and return user if valid, this security is implemented server side in a real application

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var urlParts = request.url.split('/');
                  var id = parseInt(urlParts[urlParts.length - 1]);
                  console.log('FakeUserInterceptor for getting user with urlParts', urlParts);
                  console.log('FakeUserInterceptor for getting user with id1', id);
                  var matchedUsers = users.filter(function (user) {
                    return user.id === id;
                  });

                  var _user = matchedUsers.length ? matchedUsers[0] : null;

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    body: _user
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    error: {
                      message: 'Unauthorized'
                    }
                  });
                }
              } // register user


              if (request.url.endsWith('/api/auth/signup') && request.method === 'POST') {
                // get new user object from post body
                var newUser = request.body; // validation

                var duplicateUser = users.filter(function (user) {
                  return user.email === newUser.email;
                }).length;

                if (duplicateUser) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    error: {
                      message: 'Username "' + newUser.username + '" is already taken'
                    }
                  });
                } // save new user


                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                var _body = {
                  id: newUser.id,
                  email: newUser.email,
                  name: newUser.name,
                  roles: ['USER'],
                  unverified: false,
                  blocked: false,
                  goodUser: true,
                  goodAdmin: false
                };

                var _httpResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                  status: 200,
                  body: _body
                });

                _httpResponse.headers.append('OT-Authorization', "Bearer fake-jwt-token"); // respond 200 OK


                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_httpResponse);
              }
              /*
              // delete user
              if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                  // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                  if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                      // find user by id in users array
                      let urlParts = request.url.split('/');
                      let id = parseInt(urlParts[urlParts.length - 1]);
                      for (let i = 0; i < users.length; i++) {
                          let user = users[i];
                          if (user.id === id) {
                              // delete user
                              users.splice(i, 1);
                              localStorage.setItem('users', JSON.stringify(users));
                              break;
                          }
                      }
                        // respond 200 OK
                      return of(new HttpResponse({ status: 200 }));
                  } else {
                      // return 401 not authorised if token is null or invalid
                      return throwError({ error: { message: 'Unauthorised' } });
                  }
              }*/
              // pass through any requests not handled above


              return next.handle(request);
            })) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());
          }
        }]);

        return FakeUserInterceptor;
      }();

      FakeUserInterceptor.ɵfac = function FakeUserInterceptor_Factory(t) {
        return new (t || FakeUserInterceptor)();
      };

      FakeUserInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FakeUserInterceptor,
        factory: FakeUserInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]]
        });
      })();
      /***/

    },

    /***/
    "aF9I":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["crm-footer"]],
        decls: 16,
        vars: 0,
        consts: [[1, "crm-footer-list"], [1, "crm-footer-logo"], [1, "footer-logo"], ["src", "../../../../assets/img/angular-white-transparent.svg", "alt", "Angular icon", 1, "crm-footer-angular-logo"], ["href", "https://logigear.com"], [1, "crm-footer-version"], ["src", "../../../assets/img/angular-material-logo.svg", "alt", "Angular Material icon", 1, "angular-material-logo"], [1, "version"], [1, "crm-footer-copyright"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LogiGear CRM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Current Version: 1.0.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Powered by LogiGear \xA92021.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  padding: 12px;\n  font-size: 12px;\n  margin-top: 40px;\n}\n\n.crm-footer-list[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px;\n}\n\n.crm-footer-logo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.crm-footer-angular-logo[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.crm-footer-version[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\n.crm-footer-version[_ngcontent-%COMP%]   .angular-material-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 10px 0 10px 16px;\n}\n\n.crm-footer-version[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  margin: 0 40px;\n}\n\n.crm-footer-copyright[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  flex-direction: column;\n  min-width: 225px;\n  margin-top: 16px;\n}\n\n.crm-footer-copyright[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  text-align: center;\n}\n\n@media (min-width: 885px) {\n  .crm-footer-copyright[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.crm-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 50px;\n  margin: 0 40px;\n  vertical-align: bottom;\n}\n\n.crm-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 884px) {\n  .crm-footer-list[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxPQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFDSjs7QUFDSTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUNOOztBQUNJO0VBQ0UsY0FBQTtBQUNOOztBQUdFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBZkY7SUFnQkksYUFBQTtFQUFKO0FBQ0Y7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUFOOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0k7RUFFRSwwQkFBQTtBQUZOOztBQU1FO0VBQ0U7SUFDRSxzQkFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcm0tZm9vdGVyLWxpc3Qge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAuY3JtLWZvb3Rlci1sb2dvIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcm0tZm9vdGVyLWFuZ3VsYXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcm0tZm9vdGVyLXZlcnNpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXg6IDE7XHJcbiAgXHJcbiAgICAuYW5ndWxhci1tYXRlcmlhbC1sb2dvIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAudmVyc2lvbiB7XHJcbiAgICAgIG1hcmdpbjogMCA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY3JtLWZvb3Rlci1jb3B5cmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIFxyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDg4NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jcm0tZm9vdGVyLWxvZ28gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCA0MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgXHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODRweCl7XHJcbiAgICAuY3JtLWZvb3Rlci1saXN0IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"]
      });
      /***/
    },

    /***/
    "dJ3e":
    /*!****************************************!*\
      !*** ./src/app/core/services/index.ts ***!
      \****************************************/

    /*! exports provided: ApiService, JwtService, AuthService, UserService, EmployeeService, ResponsiveService, ImageService, LoggingService, ErrorService */

    /***/
    function dJ3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"];
      });
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwt.service */
      "Rs8g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtService", function () {
        return _jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"];
      });
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "7dP1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user.service */
      "f4AX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
      });
      /* harmony import */


      var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./employee.service */
      "yWs4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"];
      });
      /* harmony import */


      var _responsive_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./responsive.service */
      "SKFc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResponsiveService", function () {
        return _responsive_service__WEBPACK_IMPORTED_MODULE_5__["ResponsiveService"];
      });
      /* harmony import */


      var _image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image.service */
      "5gP/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"];
      });
      /* harmony import */


      var _logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./logging.service */
      "iIVy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoggingService", function () {
        return _logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"];
      });
      /* harmony import */


      var _error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./error.service */
      "qXXK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
        return _error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"];
      });
      /***/

    },

    /***/
    "djTI":
    /*!************************************************!*\
      !*** ./src/app/core/guards/reset-pwd.guard.ts ***!
      \************************************************/

    /*! exports provided: ResetPwdGuard */

    /***/
    function djTI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPwdGuard", function () {
        return ResetPwdGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var ResetPwdGuard = /*#__PURE__*/function () {
        function ResetPwdGuard(router, authService) {
          _classCallCheck(this, ResetPwdGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(ResetPwdGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.forgotAccount === undefined) {
              this.router.navigate(['/auth', 'forgotpwd']);
              return false;
            }

            return true;
          }
        }]);

        return ResetPwdGuard;
      }();

      ResetPwdGuard.ɵfac = function ResetPwdGuard_Factory(t) {
        return new (t || ResetPwdGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      ResetPwdGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ResetPwdGuard,
        factory: ResetPwdGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ey9i":
    /*!*******************************!*\
      !*** ./src/app/core/index.ts ***!
      \*******************************/

    /*! exports provided: MainContainerComponent, PropertyUpdateFormComponent, ConfirmComponent, LoadingComponent, ApiService, JwtService, AuthService, UserService, EmployeeService, ResponsiveService, ImageService, LoggingService, ErrorService, PropertyType, ScreenSize, EditorMode */

    /***/
    function ey9i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      "Vyfh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["MainContainerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PropertyUpdateFormComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["PropertyUpdateFormComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["ConfirmComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"];
      });
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services */
      "dJ3e");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["JwtService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["UserService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResponsiveService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ResponsiveService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ImageService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoggingService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["LoggingService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_1__["ErrorService"];
      });
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models */
      "sKXY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PropertyType", function () {
        return _models__WEBPACK_IMPORTED_MODULE_2__["PropertyType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScreenSize", function () {
        return _models__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EditorMode", function () {
        return _models__WEBPACK_IMPORTED_MODULE_2__["EditorMode"];
      });
      /***/

    },

    /***/
    "f4AX":
    /*!***********************************************!*\
      !*** ./src/app/core/services/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function f4AX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");

      var UserService = /*#__PURE__*/function () {
        function UserService(apiService) {
          _classCallCheck(this, UserService);

          this.apiService = apiService;
        }

        _createClass(UserService, [{
          key: "getUsers",
          value: function getUsers() {
            return this.apiService.get('/users');
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.apiService.get("/users/".concat(id));
          } // Update the user on the server (email, pass, etc)

        }, {
          key: "updateUser",
          value: function updateUser(id, data) {
            return this.apiService.patch("/users/".concat(id), data);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.apiService["delete"]("/users/".concat(id));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ft4b":
    /*!********************************************!*\
      !*** ./src/app/core/guards/admin.guard.ts ***!
      \********************************************/

    /*! exports provided: AdminGuard */

    /***/
    function ft4b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(router, authService) {
          _classCallCheck(this, AdminGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var _this10 = this;

            return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (isAuth) {
              return isAuth ? _this10.authService.getCurrentUser().goodAdmin : false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (goodAdmin) {
              if (!goodAdmin) {
                _this10.router.navigate(['/auth', 'signin'], {
                  queryParams: {
                    redirectUrl: url
                  }
                });
              }
            }));
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdminGuard,
        factory: AdminGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ht3r":
    /*!****************************************************************!*\
      !*** ./src/app/core/interceptors/fake-employee.interceptor.ts ***!
      \****************************************************************/

    /*! exports provided: FakeEmployeeInterceptor */

    /***/
    function ht3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeEmployeeInterceptor", function () {
        return FakeEmployeeInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FakeEmployeeInterceptor = /*#__PURE__*/function () {
        function FakeEmployeeInterceptor() {
          _classCallCheck(this, FakeEmployeeInterceptor);

          this.employee = {
            id: '1',
            fullName: 'A'
          };
          this.employees = [{
            id: '1',
            fullName: 'A'
          }, {
            id: '2',
            fullName: 'B'
          }, {
            id: 'B',
            fullName: 'C'
          }];
        }

        _createClass(FakeEmployeeInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this11 = this;

            // wrap in delayed observable to simulate server api call
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
              if (request.url.endsWith('/employees/1') && request.method === 'GET') {
                console.log('FakeEmployeeInterceptor get /employees/1');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                  status: 200,
                  body: _this11.employee
                }));
              } else if (request.url.endsWith('/employees') && request.method === 'GET') {
                console.log('FakeEmployeeInterceptor get /employees');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                  status: 200,
                  body: _this11.employees
                }));
              } // pass through any requests not handled above


              return next.handle(request);
            })) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());
          }
        }]);

        return FakeEmployeeInterceptor;
      }();

      FakeEmployeeInterceptor.ɵfac = function FakeEmployeeInterceptor_Factory(t) {
        return new (t || FakeEmployeeInterceptor)();
      };

      FakeEmployeeInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FakeEmployeeInterceptor,
        factory: FakeEmployeeInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "iIVy":
    /*!**************************************************!*\
      !*** ./src/app/core/services/logging.service.ts ***!
      \**************************************************/

    /*! exports provided: LoggingService */

    /***/
    function iIVy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggingService", function () {
        return LoggingService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoggingService = /*#__PURE__*/function () {
        function LoggingService() {
          _classCallCheck(this, LoggingService);
        }

        _createClass(LoggingService, [{
          key: "logError",
          value: function logError(message, stack) {
            console.error(message);
          }
        }]);

        return LoggingService;
      }();

      LoggingService.ɵfac = function LoggingService_Factory(t) {
        return new (t || LoggingService)();
      };

      LoggingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoggingService,
        factory: LoggingService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "jZRB":
    /*!******************************************************!*\
      !*** ./src/app/core/interceptors/api.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: ApiInterceptor */

    /***/
    function jZRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
        return ApiInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApiInterceptor = /*#__PURE__*/function () {
        function ApiInterceptor() {
          _classCallCheck(this, ApiInterceptor);
        }

        _createClass(ApiInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var baseUrl = document.getElementsByTagName('base')[0].href;
            var apiReq = req.clone({
              url: "".concat(baseUrl).concat(req.url),
              setHeaders: {
                'X-Forwarded-Proto': 'http',
                'X-Forwarded-Host': 'localhost',
                'X-Forwarded-Port': '5000'
              }
            });
            return next.handle(apiReq);
          }
        }]);

        return ApiInterceptor;
      }();

      ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) {
        return new (t || ApiInterceptor)();
      };

      ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiInterceptor,
        factory: ApiInterceptor.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "miTN":
    /*!********************************************************************!*\
      !*** ./src/app/shared/components/paginator/paginator.component.ts ***!
      \********************************************************************/

    /*! exports provided: PaginatorComponent */

    /***/
    function miTN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
        return PaginatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["./"];
      };

      var _c1 = function _c1(a0) {
        return {
          page: a0
        };
      };

      function PaginatorComponent_div_0_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pagnCur", page_r2 === ctx_r1.curPage)("pagnLink", page_r2 !== 0 && page_r2 !== ctx_r1.curPage)("pagnMore", page_r2 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, page_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r2 || "...");
        }
      }

      function PaginatorComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginatorComponent_div_0_span_8_Template, 3, 12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.curPage === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r0.curPage - 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.curPage === ctx_r0.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r0.curPage + 1));
        }
      }

      var PaginatorComponent = /*#__PURE__*/function () {
        function PaginatorComponent(route) {
          var _this12 = this;

          _classCallCheck(this, PaginatorComponent);

          this.route = route; // tslint:disable-next-line: variable-name

          this._length = 0;
          this.curPage = 0;
          this.pages = [];
          this.getCurPageSubscription = this.route.queryParamMap.subscribe(function (params) {
            var page = params.get('page') || '';
            var nPage = parseInt(page, 10);

            if (isNaN(nPage) || nPage < 1) {
              nPage = 1;
            }

            _this12.curPage = nPage;

            _this12.generatePages();
          });
        }

        _createClass(PaginatorComponent, [{
          key: "length",
          get: function get() {
            return this._length;
          },
          set: function set(p) {
            this._length = p;
            this.generatePages();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.getCurPageSubscription) {
              this.getCurPageSubscription.unsubscribe();
            }
          }
        }, {
          key: "generatePages",
          value: function generatePages() {
            if (this._length < 6) {
              this.pages = Array.from({
                length: this._length
              }, function (v, k) {
                return k + 1;
              });
            } else {
              var p = [1];

              if (this.curPage > 4) {
                p.push(0);

                if (this.curPage === this._length) {
                  p.push(this.curPage - 2);
                  p.push(this.curPage - 1);
                  p.push(this.curPage);
                } else {
                  p.push(this.curPage - 1);
                  p.push(this.curPage);
                  p.push(this.curPage + 1);
                }
              } else {
                p.push(2);
                p.push(3);

                if (this.curPage >= 3) {
                  p.push(4);

                  if (this.curPage === 4) {
                    p.push(5);
                  }
                }
              }

              if (this._length - this.curPage > 3) {
                p.push(0);
                p.push(this._length);
              } else if (this._length - this.curPage === 3) {
                p.push(this._length - 1);
                p.push(this._length);
              } else if (this._length - this.curPage === 2) {
                p.push(this._length);
              }

              this.pages = p;
            }
          }
        }]);

        return PaginatorComponent;
      }();

      PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) {
        return new (t || PaginatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginatorComponent,
        selectors: [["crm-paginator"]],
        inputs: {
          length: "length"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "pagnHy", 4, "ngIf"], [1, "pagnHy"], [1, "pagnLA"], ["queryParamsHandling", "merge", 3, "routerLink", "queryParams"], [2, "display", "inline-flex"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], [3, "pagnCur", "pagnLink", "pagnMore", 4, "ngFor", "ngForOf"], [1, "pagnRA"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],
        template: function PaginatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginatorComponent_div_0_Template, 16, 15, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.length > 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".pagnHy[_ngcontent-%COMP%] {\n  height: 36px;\n  text-align: center;\n  font-size: 16px;\n}\n.pagnHy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 36px;\n  vertical-align: middle;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLA[_ngcontent-%COMP%] {\n  margin-right: 35px;\n  padding: 0px;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLA[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0066c0;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLA[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #c45500;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLA[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLA.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #555;\n  pointer-events: none;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnRA[_ngcontent-%COMP%] {\n  margin-left: 35px;\n  padding: 0px;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnRA[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0066c0;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnRA[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  color: #c45500;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnRA[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnRA.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #555;\n  pointer-events: none;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLink[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066c0;\n  padding: 6px 6px;\n  white-space: nowrap;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #FFF;\n  border: 1px solid #055D90;\n  color: #e47911;\n  padding: 5px;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnCur[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 5px;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnCur[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111;\n  pointer-events: none;\n}\n.pagnHy[_ngcontent-%COMP%]   .pagnMore[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111;\n  pointer-events: none;\n}\n.mat-paginator-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  fill: currentColor;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUU7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FBQU47QUFHRTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUROO0FBRU07RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFBVjtBQUNVO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNkO0FBQWM7RUFDSSxxQkFBQTtBQUVsQjtBQUlVO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FBRmQ7QUFPRTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBTU07RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFKVjtBQUtVO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhkO0FBSWM7RUFDSSxxQkFBQTtBQUZsQjtBQVFVO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FBTmQ7QUFXRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQVROO0FBVU07RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJWO0FBU1U7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFQZDtBQVlFO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBVk47QUFXTTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQVRWO0FBZU07RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUFiVjtBQWtCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZkYiLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ25IeSB7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICBzcGFuIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWduTEEge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjZjMDtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogI2M0NTUwMDtcclxuICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnblJBIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjZjMDtcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjYzQ1NTAwO1xyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWduTGluayB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjZjMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCA2cHg7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDU1RDkwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZTQ3OTExO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ25DdXIge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5wYWduTW9yZSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3ItaWNvbiB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "onxb":
    /*!**********************************************!*\
      !*** ./src/app/core/global-error-handler.ts ***!
      \**********************************************/

    /*! exports provided: GlobalErrorHandler */

    /***/
    function onxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function () {
        return GlobalErrorHandler;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services */
      "dJ3e");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var GlobalErrorHandler = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(GlobalErrorHandler, _angular_core__WEBPAC);

        var _super = _createSuper(GlobalErrorHandler);

        // Error handling is important and needs to be loaded first.
        // Because of this we should manually inject the services with Injector.
        function GlobalErrorHandler(injector) {
          var _this13;

          _classCallCheck(this, GlobalErrorHandler);

          _this13 = _super.call(this);
          _this13.injector = injector;
          return _this13;
        }

        _createClass(GlobalErrorHandler, [{
          key: "toastrService",
          get: function get() {
            return this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]);
          }
        }, {
          key: "loggingService",
          get: function get() {
            return this.injector.get(_services__WEBPACK_IMPORTED_MODULE_2__["LoggingService"]);
          }
        }, {
          key: "errorService",
          get: function get() {
            return this.injector.get(_services__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var message;
            var stackTrace;

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              // Server Error
              message = this.errorService.getServerMessage(error);
              stackTrace = this.errorService.getServerStack(error);
              var errMsg = "";

              if (message.includes("/api/auth/signin")) {
                errMsg = "Invalid credentials! Please try again!";
              }

              this.toastrService.error(errMsg === "" ? message : errMsg, undefined, {
                onActivateTick: true
              });
            } else {
              // Client Error
              message = this.errorService.getClientMessage(error);
              stackTrace = this.errorService.getClientStack(error);
              this.toastrService.error(message, undefined, {
                onActivateTick: true
              });
            } // Always log errors


            this.loggingService.logError(message, stackTrace);
          }
        }]);

        return GlobalErrorHandler;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]);

      GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) {
        return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalErrorHandler,
        factory: GlobalErrorHandler.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/main-container/main-container.component */
      "QUjz");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./interceptors */
      "6H+C");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services */
      "dJ3e");
      /* harmony import */


      var _components_property_update_form_property_update_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/property-update-form/property-update-form.component */
      "qSzy");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guards */
      "yK//");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/confirm/confirm.component */
      "/5R1");
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/loading/loading.component */
      "UNx2");
      /* harmony import */


      var _global_error_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./global-error-handler */
      "onxb");

      var CoreModule = function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        if (parentModule) {
          throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
        }
      };

      CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_interceptors__WEBPACK_IMPORTED_MODULE_3__["HttpInterceptorProviders"], //TestHttpInterceptorProviders,
        {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_10__["GlobalErrorHandler"]
        }, _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services__WEBPACK_IMPORTED_MODULE_4__["JwtService"], _guards__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"], _guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_6__["NoAuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_6__["ResetPwdGuard"]],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_1__["MainContainerComponent"], _components_property_update_form_property_update_form_component__WEBPACK_IMPORTED_MODULE_5__["PropertyUpdateFormComponent"], _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"]],
          exports: [_components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_1__["MainContainerComponent"]]
        });
      })();
      /***/

    },

    /***/
    "pfe1":
    /*!**********************************************!*\
      !*** ./src/app/core/guards/no-auth.guard.ts ***!
      \**********************************************/

    /*! exports provided: NoAuthGuard */

    /***/
    function pfe1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function () {
        return NoAuthGuard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "dJ3e");

      var NoAuthGuard = /*#__PURE__*/function () {
        function NoAuthGuard(router, authService) {
          _classCallCheck(this, NoAuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(NoAuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (isAuth) {
              return !isAuth;
            }));
          }
        }]);

        return NoAuthGuard;
      }();

      NoAuthGuard.ɵfac = function NoAuthGuard_Factory(t) {
        return new (t || NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      NoAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: NoAuthGuard,
        factory: NoAuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qSzy":
    /*!****************************************************************************************!*\
      !*** ./src/app/core/components/property-update-form/property-update-form.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PropertyUpdateFormComponent */

    /***/
    function qSzy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyUpdateFormComponent", function () {
        return PropertyUpdateFormComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PropertyUpdateFormComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prop_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prop_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", prop_r1.name);
        }
      }

      var PropertyUpdateFormComponent = /*#__PURE__*/function () {
        function PropertyUpdateFormComponent(fb, dialogData, dialogRef) {
          var _this14 = this;

          _classCallCheck(this, PropertyUpdateFormComponent);

          this.fb = fb;
          this.dialogData = dialogData;
          this.dialogRef = dialogRef;
          var form = {};
          this.properties = this.dialogData.props; // TODO: need to improve for multi data.

          dialogData.props.forEach(function (p) {
            form[p.name] = _this14.fb.control(p.value);
          });
          this.propertiesForm = this.fb.group(form);
        }

        _createClass(PropertyUpdateFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCancelClicked",
          value: function onCancelClicked() {
            this.dialogRef.close(undefined);
          }
        }, {
          key: "onYesClicked",
          value: function onYesClicked() {
            this.dialogRef.close(this.propertiesForm.value);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {}
        }]);

        return PropertyUpdateFormComponent;
      }();

      PropertyUpdateFormComponent.ɵfac = function PropertyUpdateFormComponent_Factory(t) {
        return new (t || PropertyUpdateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]));
      };

      PropertyUpdateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PropertyUpdateFormComponent,
        selectors: [["crm-property-update-form"]],
        decls: 14,
        vars: 2,
        consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "ui", "section", "divider"], ["mat-dialog-content", ""], [1, "ui", "small", "definition", "table"], [4, "ngFor", "ngForOf"], ["align", "end"], ["type", "button", 1, "ui", "button", 3, "click"], [1, "ui", "input", 2, "width", "100%"], ["type", "text", "placeholder", "", 3, "formControlName"]],
        template: function PropertyUpdateFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PropertyUpdateFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PropertyUpdateFormComponent_tr_7_Template, 6, 2, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-dialog-actions", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PropertyUpdateFormComponent_Template_button_click_10_listener() {
              return ctx.onCancelClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PropertyUpdateFormComponent_Template_button_click_12_listener() {
              return ctx.onYesClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.propertiesForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.properties);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0eS11cGRhdGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "qXXK":
    /*!************************************************!*\
      !*** ./src/app/core/services/error.service.ts ***!
      \************************************************/

    /*! exports provided: ErrorService */

    /***/
    function qXXK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
        return ErrorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorService = /*#__PURE__*/function () {
        function ErrorService() {
          _classCallCheck(this, ErrorService);
        }

        _createClass(ErrorService, [{
          key: "getClientMessage",
          value: function getClientMessage(error) {
            if (!navigator.onLine) {
              return 'No Internet Connection';
            }

            return error.message ? error.message : error.toString();
          }
        }, {
          key: "getClientStack",
          value: function getClientStack(error) {
            return error.stack || '';
          }
        }, {
          key: "getServerMessage",
          value: function getServerMessage(error) {
            if (error.error) {
              return error.error.message || error.message;
            }

            return error.message;
          }
        }, {
          key: "getServerStack",
          value: function getServerStack(error) {
            // handle stack trace
            return 'stack';
          }
        }]);

        return ErrorService;
      }();

      ErrorService.ɵfac = function ErrorService_Factory(t) {
        return new (t || ErrorService)();
      };

      ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorService,
        factory: ErrorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qc5V":
    /*!**********************************************!*\
      !*** ./src/app/core/services/api.service.ts ***!
      \**********************************************/

    /*! exports provided: ApiService */

    /***/
    function qc5V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
        }

        _createClass(ApiService, [{
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).concat(path), {
              params: params
            });
          }
        }, {
          key: "put",
          value: function put(path, body) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).concat(path), body);
          }
        }, {
          key: "patch",
          value: function patch(path, body) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).concat(path), body);
          }
        }, {
          key: "post",
          value: function post(path, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            console.log("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).concat(path));
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).concat(path), body, options);
          }
        }, {
          key: "delete",
          value: function _delete(path) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).concat(path));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "r+gv":
    /*!****************************************************!*\
      !*** ./src/app/core/models/upload-status.model.ts ***!
      \****************************************************/

    /*! no exports provided */

    /***/
    function rGv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "sKXY":
    /*!**************************************!*\
      !*** ./src/app/core/models/index.ts ***!
      \**************************************/

    /*! exports provided: PropertyType, ScreenSize, EditorMode */

    /***/
    function sKXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user.model */
      "PQuL");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./employee.model */
      "5oFn");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _core_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core.model */
      "4ina");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PropertyType", function () {
        return _core_model__WEBPACK_IMPORTED_MODULE_2__["PropertyType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScreenSize", function () {
        return _core_model__WEBPACK_IMPORTED_MODULE_2__["ScreenSize"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EditorMode", function () {
        return _core_model__WEBPACK_IMPORTED_MODULE_2__["EditorMode"];
      });
      /* harmony import */


      var _image_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image.model */
      "Pgg+");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _upload_status_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./upload-status.model */
      "r+gv");
      /* empty/unused harmony star reexport */

      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core */
      "ey9i");
      /* harmony import */


      var _core_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/guards */
      "yK//");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/toast */
      "Gxio");
      /* harmony import */


      var primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/megamenu */
      "BAkx");
      /* harmony import */


      var primeng_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/message */
      "FMpt");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/progressspinner */
      "vKg+");
      /* harmony import */


      var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/overlaypanel */
      "z8Lm");
      /* harmony import */


      var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/breadcrumb */
      "URcr");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/sidebar */
      "jLSX");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "J7/z");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var primeng_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/messages */
      "dts7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "Yj9t")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: 'employee',
        component: _core__WEBPACK_IMPORTED_MODULE_1__["MainContainerComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | employee-employee-module */
            [__webpack_require__.e("default~admin-admin-module~employee-employee-module"), __webpack_require__.e("employee-employee-module")]).then(__webpack_require__.bind(null,
            /*! ./employee/employee.module */
            "PgJR")).then(function (m) {
              return m.EmployeeModule;
            });
          }
        }],
        canActivate: [_core_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-admin-module */
          [__webpack_require__.e("default~admin-admin-module~employee-employee-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./admin/admin.module */
          "jkDv")).then(function (m) {
            return m.AdminModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true,
          enableTracing: false
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_4__["PanelModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__["MegaMenuModule"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"], primeng_message__WEBPACK_IMPORTED_MODULE_9__["MessageModule"], primeng_card__WEBPACK_IMPORTED_MODULE_10__["CardModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__["ProgressSpinnerModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__["OverlayPanelModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__["SidebarModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__["DynamicDialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_4__["PanelModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__["MegaMenuModule"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"], primeng_message__WEBPACK_IMPORTED_MODULE_9__["MessageModule"], primeng_card__WEBPACK_IMPORTED_MODULE_10__["CardModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__["ProgressSpinnerModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__["OverlayPanelModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__["SidebarModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__["DynamicDialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"]]
        });
      })();
      /***/

    },

    /***/
    "vfei":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/directives/navigation-focus.directive.ts ***!
      \*****************************************************************/

    /*! exports provided: NavigationFocusDirective */

    /***/
    function vfei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationFocusDirective", function () {
        return NavigationFocusDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /** The timeout id of the previous focus change. */


      var lastTimeoutId = -1;

      var NavigationFocusDirective = function NavigationFocusDirective(el) {
        var _this15 = this;

        _classCallCheck(this, NavigationFocusDirective);

        this.el = el;
        this.tabindex = '-1';
        clearTimeout(lastTimeoutId); // 100ms timeout is used to allow the page to settle before moving focus for screen readers.

        lastTimeoutId = window.setTimeout(function () {
          return _this15.el.nativeElement.focus({
            preventScroll: true
          });
        }, 100);
      };

      NavigationFocusDirective.ɵfac = function NavigationFocusDirective_Factory(t) {
        return new (t || NavigationFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NavigationFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NavigationFocusDirective,
        selectors: [["", "hgFocusOnNavigation", ""]],
        hostVars: 2,
        hostBindings: function NavigationFocusDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("tabindex", ctx.tabindex);
          }
        }
      });
      /***/
    },

    /***/
    "vu/V":
    /*!********************************************!*\
      !*** ./src/app/shared/directives/index.ts ***!
      \********************************************/

    /*! exports provided: NavigationFocusDirective */

    /***/
    function vuV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _navigation_focus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation-focus.directive */
      "vfei");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationFocusDirective", function () {
        return _navigation_focus_directive__WEBPACK_IMPORTED_MODULE_0__["NavigationFocusDirective"];
      });
      /***/

    },

    /***/
    "yK//":
    /*!**************************************!*\
      !*** ./src/app/core/guards/index.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard, AdminGuard, NoAuthGuard, ResetPwdGuard, throwIfAlreadyLoaded */

    /***/
    function yK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "NUQi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin.guard */
      "ft4b");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return _admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"];
      });
      /* harmony import */


      var _no_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./no-auth.guard */
      "pfe1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function () {
        return _no_auth_guard__WEBPACK_IMPORTED_MODULE_2__["NoAuthGuard"];
      });
      /* harmony import */


      var _reset_pwd_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-pwd.guard */
      "djTI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResetPwdGuard", function () {
        return _reset_pwd_guard__WEBPACK_IMPORTED_MODULE_3__["ResetPwdGuard"];
      });
      /* harmony import */


      var _module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./module-import.guard */
      "TWmU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
        return _module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"];
      });
      /***/

    },

    /***/
    "yWs4":
    /*!***************************************************!*\
      !*** ./src/app/core/services/employee.service.ts ***!
      \***************************************************/

    /*! exports provided: EmployeeService */

    /***/
    function yWs4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(apiService) {
          _classCallCheck(this, EmployeeService);

          this.apiService = apiService;
        }

        _createClass(EmployeeService, [{
          key: "getEmployees",
          value: function getEmployees() {
            return this.apiService.get("/employees");
          }
        }, {
          key: "getEmployee",
          value: function getEmployee(id) {
            return this.apiService.get("/employees/".concat(id));
          }
        }, {
          key: "updateEmployee",
          value: function updateEmployee(id, data) {
            return this.apiService.patch("/employees/".concat(id), data);
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ɵfac = function EmployeeService_Factory(t) {
        return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeeService,
        factory: EmployeeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map