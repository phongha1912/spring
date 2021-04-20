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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"], {
    /***/
    "2tG/":
    /*!***********************************************!*\
      !*** ./src/app/core/services/core.service.ts ***!
      \***********************************************/

    /*! exports provided: CoreService */

    /***/
    function tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreService", function () {
        return CoreService;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components */
      "Vyfh");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");

      var CoreService = /*#__PURE__*/function () {
        function CoreService(dialogService, overlay) {
          _classCallCheck(this, CoreService);

          this.dialogService = dialogService;
          this.overlay = overlay;
          this.spinnerTopRef = this.cdkSpinnerCreate();
          this.spin$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(CoreService, [{
          key: "openUpdateDialog",
          value: function openUpdateDialog(properties) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
            dialogConfig.width = '540px';
            dialogConfig.height = 'auto';
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
            dialogConfig.data = {
              props: properties
            };
            return this.dialogService.open(_components__WEBPACK_IMPORTED_MODULE_2__["PropertyUpdateFormComponent"], dialogConfig).afterClosed();
          }
        }, {
          key: "cdkSpinnerCreate",
          value: function cdkSpinnerCreate() {
            return this.overlay.create({
              hasBackdrop: true,
              backdropClass: 'cdk-overlay-dark-backdrop',
              positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
            });
          }
        }, {
          key: "showSpinner",
          value: function showSpinner() {
            if (!this.spinnerTopRef.hasAttached()) {
              this.spinnerTopRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_components__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]));
            }
          }
        }, {
          key: "stopSpinner",
          value: function stopSpinner() {
            if (this.spinnerTopRef.hasAttached()) {
              this.spinnerTopRef.detach();
            }
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            this.spin$.next(true);
          }
        }, {
          key: "unShowLoading",
          value: function unShowLoading() {
            this.spin$.next(false);
          }
        }, {
          key: "openConfirmDialog",
          value: function openConfirmDialog(con) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
            dialogConfig.width = '540px';
            dialogConfig.height = 'auto';
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
            dialogConfig.data = {
              confirm: con
            };
            return this.dialogService.open(_components__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"], dialogConfig).afterClosed();
          }
        }]);

        return CoreService;
      }();

      CoreService.DeleteProductConfirm = {
        title: 'Delete The Product',
        content: 'Are you sure you want to delete this product?'
      };
      CoreService.DeleteItemConfirm = {
        title: 'Delete Item',
        content: 'Are you sure you want to delete this item?'
      };
      CoreService.EditProductConfirm = {
        title: 'Edit The Product',
        content: 'Are you sure you want to edit this product?'
      };
      CoreService.EditBlogConfirm = {
        title: 'Edit The Blog',
        content: 'Are you sure you want to edit this blog?'
      };

      CoreService.ɵfac = function CoreService_Factory(t) {
        return new (t || CoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]));
      };

      CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: CoreService,
        factory: CoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "FvOc":
    /*!*****************************************************!*\
      !*** ./src/app/employee/employee-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: EmployeeRoutingModule */

    /***/
    function FvOc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
        return EmployeeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/employee-detail/employee-detail.component */
      "OQ6K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: ':id',
        component: _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeDetailComponent"]
      }];

      var EmployeeRoutingModule = function EmployeeRoutingModule() {
        _classCallCheck(this, EmployeeRoutingModule);
      };

      EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      };

      EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: EmployeeRoutingModule
      });
      EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "JdWI":
    /*!************************************************************************************************!*\
      !*** ./src/app/employee/components/employee-editor-dialog/employee-editor-dialog.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: EmployeeEditorDialogComponent */

    /***/
    function JdWI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeEditorDialogComponent", function () {
        return EmployeeEditorDialogComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core */
      "ey9i");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var EmployeeEditorDialogComponent = /*#__PURE__*/function () {
        function EmployeeEditorDialogComponent(fb, dialogRef, data, employeeService) {
          _classCallCheck(this, EmployeeEditorDialogComponent);

          this.fb = fb;
          this.dialogRef = dialogRef;
          this.data = data;
          this.employeeService = employeeService;
          this.employeeForm = this.fb.group({
            name: [data.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        _createClass(EmployeeEditorDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onUpdateClicked",
          value: function onUpdateClicked() {}
        }, {
          key: "onCancelClicked",
          value: function onCancelClicked() {
            this.dialogRef.close();
          }
        }]);

        return EmployeeEditorDialogComponent;
      }();

      EmployeeEditorDialogComponent.ɵfac = function EmployeeEditorDialogComponent_Factory(t) {
        return new (t || EmployeeEditorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]));
      };

      EmployeeEditorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: EmployeeEditorDialogComponent,
        selectors: [["crm-employee-editor-dialog"]],
        decls: 9,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "cdkFocusInitial", "", 2, "margin-left", "8px", 3, "disabled", "click"], ["mat-raised-button", "", 3, "click"]],
        template: function EmployeeEditorDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update Employee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " TODO Update\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeEditorDialogComponent_Template_button_click_5_listener() {
              return ctx.onUpdateClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeEditorDialogComponent_Template_button_click_7_listener() {
              return ctx.onCancelClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.employeeForm.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1lZGl0b3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Mh1x":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ngu/carousel/__ivy_ngcc__/fesm2015/ngu-carousel.js ***!
      \**************************************************************************/

    /*! exports provided: NguCarousel, NguCarouselConfig, NguCarouselDefDirective, NguCarouselItemDirective, NguCarouselModule, NguCarouselNextDirective, NguCarouselOutlet, NguCarouselPointDirective, NguCarouselPrevDirective, NguCarouselStore, NguItemComponent, NguTileComponent, ɵa, ɵb */

    /***/
    function Mh1x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarousel", function () {
        return NguCarousel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselConfig", function () {
        return NguCarouselConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselDefDirective", function () {
        return NguCarouselDefDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselItemDirective", function () {
        return NguCarouselItemDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function () {
        return NguCarouselModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselNextDirective", function () {
        return NguCarouselNextDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselOutlet", function () {
        return NguCarouselOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselPointDirective", function () {
        return NguCarouselPointDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselPrevDirective", function () {
        return NguCarouselPrevDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function () {
        return NguCarouselStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguItemComponent", function () {
        return NguItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NguTileComponent", function () {
        return NguTileComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return ItemsControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return NguButton;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _c0 = ["ngucarousel"];
      var _c1 = ["nguItemsContainer"];
      var _c2 = ["touchContainer"];
      var _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
      var _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
      var _c5 = ["*"];

      var NguCarouselStore = function NguCarouselStore() {
        var touch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Touch();
        var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Vertical();
        var interval = arguments.length > 2 ? arguments[2] : undefined;
        var transform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Transfrom();
        var button = arguments.length > 4 ? arguments[4] : undefined;
        var visibleItems = arguments.length > 5 ? arguments[5] : undefined;
        var deviceType = arguments.length > 6 ? arguments[6] : undefined;
        var type = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'fixed';
        var token = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
        var items = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
        var load = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
        var deviceWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
        var carouselWidth = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
        var itemWidth = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
        var slideItems = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
        var itemWidthPer = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 0;
        var itemLength = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : 0;
        var currentSlide = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : 0;
        var easing = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : 'cubic-bezier(0, 0, 0.2, 1)';
        var speed = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : 200;
        var loop = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : false;
        var dexVal = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : 0;
        var touchTransform = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : 0;
        var isEnd = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : false;
        var isFirst = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : true;
        var isLast = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : false;
        var RTL = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : false;
        var point = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : true;
        var velocity = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : 1;

        _classCallCheck(this, NguCarouselStore);

        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
      };

      var ItemsControl = function ItemsControl() {
        _classCallCheck(this, ItemsControl);
      };

      var Vertical = function Vertical() {
        _classCallCheck(this, Vertical);
      };

      var NguButton = function NguButton() {
        _classCallCheck(this, NguButton);
      };

      var Touch = function Touch() {
        _classCallCheck(this, Touch);
      };

      var Transfrom = function Transfrom() {
        var xs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var sm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var md = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var lg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var all = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, Transfrom);

        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
        this.xl = 0;
      };
      /**
       * Default values
       * {sm: 768, md: 992, lg: 1200, xl: 1200}
       *
       * Bootstrap values:
       * {sm: 576, md: 768, lg: 992, xl: 1200}
       */


      var Breakpoints = function Breakpoints() {
        var sm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 768;
        var md = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 992;
        var lg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1200;
        var xl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1200;

        _classCallCheck(this, Breakpoints);

        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.xl = xl;
      };

      var NguCarouselConfig = function NguCarouselConfig() {
        _classCallCheck(this, NguCarouselConfig);
      };

      var NguCarouselOutletContext = function NguCarouselOutletContext(data) {
        _classCallCheck(this, NguCarouselOutletContext);

        this.$implicit = data;
      };

      var NguCarouselItemDirective = function NguCarouselItemDirective() {
        _classCallCheck(this, NguCarouselItemDirective);
      };

      NguCarouselItemDirective.ɵfac = function NguCarouselItemDirective_Factory(t) {
        return new (t || NguCarouselItemDirective)();
      };

      NguCarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NguCarouselItemDirective,
        selectors: [["", "NguCarouselItem", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselItemDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselItem]'
          }]
        }], null, null);
      })();

      var NguCarouselNextDirective = function NguCarouselNextDirective() {
        _classCallCheck(this, NguCarouselNextDirective);
      };

      NguCarouselNextDirective.ɵfac = function NguCarouselNextDirective_Factory(t) {
        return new (t || NguCarouselNextDirective)();
      };

      NguCarouselNextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NguCarouselNextDirective,
        selectors: [["", "NguCarouselNext", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselNextDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselNext]'
          }]
        }], null, null);
      })();

      var NguCarouselPrevDirective = function NguCarouselPrevDirective() {
        _classCallCheck(this, NguCarouselPrevDirective);
      };

      NguCarouselPrevDirective.ɵfac = function NguCarouselPrevDirective_Factory(t) {
        return new (t || NguCarouselPrevDirective)();
      };

      NguCarouselPrevDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NguCarouselPrevDirective,
        selectors: [["", "NguCarouselPrev", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselPrevDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselPrev]'
          }]
        }], null, null);
      })();

      var NguCarouselPointDirective = function NguCarouselPointDirective() {
        _classCallCheck(this, NguCarouselPointDirective);
      };

      NguCarouselPointDirective.ɵfac = function NguCarouselPointDirective_Factory(t) {
        return new (t || NguCarouselPointDirective)();
      };

      NguCarouselPointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NguCarouselPointDirective,
        selectors: [["", "NguCarouselPoint", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselPointDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselPoint]'
          }]
        }], null, null);
      })();

      var NguCarouselDefDirective = function NguCarouselDefDirective(template) {
        _classCallCheck(this, NguCarouselDefDirective);

        this.template = template;
      };

      NguCarouselDefDirective.ɵfac = function NguCarouselDefDirective_Factory(t) {
        return new (t || NguCarouselDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      NguCarouselDefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NguCarouselDefDirective,
        selectors: [["", "nguCarouselDef", ""]]
      });

      NguCarouselDefDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselDefDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[nguCarouselDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })(); // tslint:disable-next-line:directive-class-suffix


      var NguCarouselOutlet = function NguCarouselOutlet(viewContainer) {
        _classCallCheck(this, NguCarouselOutlet);

        this.viewContainer = viewContainer;
      };

      NguCarouselOutlet.ɵfac = function NguCarouselOutlet_Factory(t) {
        return new (t || NguCarouselOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]));
      };

      NguCarouselOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NguCarouselOutlet,
        selectors: [["", "nguCarouselOutlet", ""]]
      });

      NguCarouselOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[nguCarouselOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }];
        }, null);
      })(); // @dynamic
      // @dynamic
      // tslint:disable-next-line:component-class-suffix


      var NguCarousel = /*#__PURE__*/function (_NguCarouselStore) {
        _inherits(NguCarousel, _NguCarouselStore);

        var _super = _createSuper(NguCarousel);

        function NguCarousel(_el, _renderer, _differs, platformId, cdr) {
          var _this;

          _classCallCheck(this, NguCarousel);

          _this = _super.call(this);
          _this._el = _el;
          _this._renderer = _renderer;
          _this._differs = _differs;
          _this.platformId = platformId;
          _this.cdr = cdr;
          _this.withAnim = true;
          _this.isHovered = false;
          _this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-next-line:no-output-on-prefix

          _this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this._intervalController$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this.pointNumbers = [];
          return _this;
        }

        _createClass(NguCarousel, [{
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(data) {
            if (data) {
              this._switchDataSource(data);
            }
          }
          /** The setter is used to catch the button if the button has ngIf
           * issue id #91
           */

        }, {
          key: "nextBtn",
          set: function set(btn) {
            var _this2 = this;

            this.listener2 && this.listener2();

            if (btn) {
              this.listener2 = this._renderer.listen(btn.nativeElement, 'click', function () {
                return _this2._carouselScrollOne(1);
              });
            }
          }
          /** The setter is used to catch the button if the button has ngIf
           * issue id #91
           */

        }, {
          key: "prevBtn",
          set: function set(btn) {
            var _this3 = this;

            this.listener1 && this.listener1();

            if (btn) {
              this.listener1 = this._renderer.listen(btn.nativeElement, 'click', function () {
                return _this3._carouselScrollOne(0);
              });
            }
          }
          /**
           * Tracking function that will be used to check the differences in data changes. Used similarly
           * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
           * relative to the function to know if a Items should be added/removed/moved.
           * Accepts a function that takes two parameters, `index` and `item`.
           */

        }, {
          key: "trackBy",
          get: function get() {
            return this._trackByFn;
          },
          set: function set(fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && fn != null && typeof fn !== 'function' && console && console.warn) {
              console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
            }

            this._trackByFn = fn;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this._dataDiffer = this._differs.find([]).create(function (_i, item) {
              return _this4.trackBy ? _this4.trackBy(_i, item) : item;
            });
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.arrayChanges = this._dataDiffer.diff(this.dataSource);

            if (this.arrayChanges && this._defDirec) {
              this._observeRenderChanges();
            }
          }
        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            this._dataSource = dataSource;

            if (this._defDirec) {
              this._observeRenderChanges();
            }
          }
        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this5 = this;

            var dataStream;

            if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
              dataStream = this._dataSource;
            } else if (Array.isArray(this._dataSource)) {
              dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._dataSource);
            }

            if (dataStream) {
              this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._intervalController$)).subscribe(function (data) {
                _this5.renderNodeChanges(data);

                _this5.isLast = false;
              });
            }
          }
        }, {
          key: "renderNodeChanges",
          value: function renderNodeChanges(data) {
            var _this6 = this;

            var viewContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._nodeOutlet.viewContainer;
            if (!this.arrayChanges) return;
            this.arrayChanges.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
              var node = _this6._getNodeDef(data[currentIndex], currentIndex);

              if (item.previousIndex == null) {
                var context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
              } else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
              } else {
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
              }
            });

            this._updateItemIndexContext();

            if (this.carousel) {
              this._storeCarouselData();
            }
          }
          /**
           * Updates the index-related context for each row to reflect any changes in the index of the rows,
           * e.g. first/last/even/odd.
           */

        }, {
          key: "_updateItemIndexContext",
          value: function _updateItemIndexContext() {
            var viewContainer = this._nodeOutlet.viewContainer;

            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
              var viewRef = viewContainer.get(renderIndex);
              var context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;
              context.index = renderIndex;
            }
          }
        }, {
          key: "_getNodeDef",
          value: function _getNodeDef(data, i) {
            if (this._defDirec.length === 1) {
              return this._defDirec.first;
            }

            var nodeDef = this._defDirec.find(function (def) {
              return def.when && def.when(i, data);
            }) || this._defaultNodeDef;

            return nodeDef;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            this.carousel = this._el.nativeElement;

            this._inputValidation();

            this.carouselCssNode = this._createStyleElem();

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
              this._carouselInterval();

              if (!this.vertical.enabled) {
                this._touch();
              }

              this.listener3 = this._renderer.listen('window', 'resize', function (event) {
                _this7._onResizing(event);
              });

              this._onWindowScrolling();
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._observeRenderChanges();

            this.cdr.markForCheck();
          }
        }, {
          key: "_inputValidation",
          value: function _inputValidation() {
            this.inputs.gridBreakpoints = this.inputs.gridBreakpoints ? this.inputs.gridBreakpoints : new Breakpoints();

            if (this.inputs.grid.xl === undefined) {
              this.inputs.grid.xl = this.inputs.grid.lg;
            }

            this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
            this.loop = this.inputs.loop || false;
            this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
            this.touch.active = this.inputs.touch || false;
            this.RTL = this.inputs.RTL ? true : false;
            this.interval = this.inputs.interval || null;
            this.velocity = typeof this.inputs.velocity === 'number' ? this.inputs.velocity : this.velocity;

            if (this.inputs.vertical && this.inputs.vertical.enabled) {
              this.vertical.enabled = this.inputs.vertical.enabled;
              this.vertical.height = this.inputs.vertical.height;
            }

            this.directionSym = this.RTL ? '' : '-';
            this.point = this.inputs.point && typeof this.inputs.point.visible !== 'undefined' ? this.inputs.point.visible : true;

            this._carouselSize();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.carouselInt && this.carouselInt.unsubscribe();

            this._intervalController$.unsubscribe();

            this.carouselLoad.complete();
            this.onMove.complete();
            /** remove listeners */

            clearTimeout(this.onScrolling);

            for (var i = 1; i <= 4; i++) {
              var str = "listener".concat(i);
              this[str] && this[str]();
            }
          }
        }, {
          key: "_onResizing",
          value: function _onResizing(event) {
            var _this8 = this;

            clearTimeout(this.onResize);
            this.onResize = setTimeout(function () {
              if (_this8.deviceWidth !== event.target.outerWidth) {
                _this8._setStyle(_this8.nguItemsContainer.nativeElement, 'transition', "");

                _this8._storeCarouselData();
              }
            }, 500);
          }
          /** Get Touch input */

        }, {
          key: "_touch",
          value: function _touch() {
            var _this9 = this;

            if (this.inputs.touch) {
              __webpack_require__.e(
              /*! import() | hammerjs */
              "hammerjs").then(__webpack_require__.t.bind(null,
              /*! hammerjs */
              "yLV6", 7)).then(function () {
                var hammertime = new Hammer(_this9.touchContainer.nativeElement);
                hammertime.get('pan').set({
                  direction: Hammer.DIRECTION_HORIZONTAL
                });
                hammertime.on('panstart', function (ev) {
                  _this9.carouselWidth = _this9.nguItemsContainer.nativeElement.offsetWidth;
                  _this9.touchTransform = _this9.transform[_this9.deviceType];
                  _this9.dexVal = 0;

                  _this9._setStyle(_this9.nguItemsContainer.nativeElement, 'transition', '');
                });

                if (_this9.vertical.enabled) {
                  hammertime.on('panup', function (ev) {
                    _this9._touchHandling('panleft', ev);
                  });
                  hammertime.on('pandown', function (ev) {
                    _this9._touchHandling('panright', ev);
                  });
                } else {
                  hammertime.on('panleft', function (ev) {
                    _this9._touchHandling('panleft', ev);
                  });
                  hammertime.on('panright', function (ev) {
                    _this9._touchHandling('panright', ev);
                  });
                }

                hammertime.on('panend pancancel', function (ev) {
                  if (Math.abs(ev.velocity) >= _this9.velocity) {
                    _this9.touch.velocity = ev.velocity;
                    var direc = 0;

                    if (!_this9.RTL) {
                      direc = _this9.touch.swipe === 'panright' ? 0 : 1;
                    } else {
                      direc = _this9.touch.swipe === 'panright' ? 1 : 0;
                    }

                    _this9._carouselScrollOne(direc);
                  } else {
                    _this9.dexVal = 0;

                    _this9._setStyle(_this9.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');

                    _this9._setStyle(_this9.nguItemsContainer.nativeElement, 'transform', '');
                  }
                });
                hammertime.on('hammer.input', function (ev) {
                  // allow nested touch events to no propagate, this may have other side affects but works for now.
                  // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                  ev.srcEvent.stopPropagation();
                });
              });
            }
          }
          /** handle touch input */

        }, {
          key: "_touchHandling",
          value: function _touchHandling(e, ev) {
            // vertical touch events seem to cause to panstart event with an odd delta
            // and a center of {x:0,y:0} so this will ignore them
            if (ev.center.x === 0) {
              return;
            }

            ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
            var valt = ev - this.dexVal;
            valt = this.type === 'responsive' ? Math.abs(ev - this.dexVal) / (this.vertical.enabled ? this.vertical.height : this.carouselWidth) * 100 : valt;
            this.dexVal = ev;
            this.touch.swipe = e;

            this._setTouchTransfrom(e, valt);

            this._setTransformFromTouch();
          }
        }, {
          key: "_setTouchTransfrom",
          value: function _setTouchTransfrom(e, valt) {
            var condition = this.RTL ? 'panright' : 'panleft';
            this.touchTransform = e === condition ? valt + this.touchTransform : this.touchTransform - valt;
          }
        }, {
          key: "_setTransformFromTouch",
          value: function _setTransformFromTouch() {
            if (this.touchTransform < 0) {
              this.touchTransform = 0;
            }

            var type = this.type === 'responsive' ? '%' : 'px';

            this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled ? "translate3d(0, ".concat(this.directionSym).concat(this.touchTransform).concat(type, ", 0)") : "translate3d(".concat(this.directionSym).concat(this.touchTransform).concat(type, ", 0, 0)"));
          }
          /** this fn used to disable the interval when it is not on the viewport */

        }, {
          key: "_onWindowScrolling",
          value: function _onWindowScrolling() {
            var top = this.carousel.offsetTop;
            var scrollY = window.scrollY;
            var heightt = window.innerHeight;
            var carouselHeight = this.carousel.offsetHeight;
            var isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 && top + carouselHeight / 2 >= scrollY;

            if (isCarouselOnScreen) {
              this._intervalController$.next(1);
            } else {
              this._intervalController$.next(0);
            }
          }
          /** store data based on width of the screen for the carousel */

        }, {
          key: "_storeCarouselData",
          value: function _storeCarouselData() {
            var breakpoints = this.inputs.gridBreakpoints;
            this.deviceWidth = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId) ? window.innerWidth : breakpoints.xl;
            this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;

            if (this.type === 'responsive') {
              this.deviceType = this.deviceWidth >= breakpoints.xl ? 'xl' : this.deviceWidth >= breakpoints.lg ? 'lg' : this.deviceWidth >= breakpoints.md ? 'md' : this.deviceWidth >= breakpoints.sm ? 'sm' : 'xs';
              this.items = this.inputs.grid[this.deviceType];
              this.itemWidth = this.carouselWidth / this.items;
            } else {
              this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
              this.itemWidth = this.inputs.grid.all;
              this.deviceType = 'all';
            }

            this.slideItems = +(this.inputs.slide < this.items ? this.inputs.slide : this.items);
            this.load = this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
            this.speed = this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;

            this._carouselPoint();
          }
          /** Used to reset the carousel */

        }, {
          key: "reset",
          value: function reset(withOutAnimation) {
            withOutAnimation && (this.withAnim = false);
            this.carouselCssNode.innerHTML = '';
            this.moveTo(0);

            this._carouselPoint();
          }
          /** Init carousel point */

        }, {
          key: "_carouselPoint",
          value: function _carouselPoint() {
            var Nos = this.dataSource.length - (this.items - this.slideItems);
            this.pointIndex = Math.ceil(Nos / this.slideItems);
            var pointers = [];

            if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
              for (var i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
              }
            }

            this.pointNumbers = pointers;

            this._carouselPointActiver();

            if (this.pointIndex <= 1) {
              this._btnBoolean(1, 1);
            } else {
              if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
              } else {
                this._btnBoolean(0, 0);
              }
            }
          }
          /** change the active point in carousel */

        }, {
          key: "_carouselPointActiver",
          value: function _carouselPointActiver() {
            var i = Math.ceil(this.currentSlide / this.slideItems);
            this.activePoint = i;
            this.cdr.markForCheck();
          }
          /** this function is used to scoll the carousel when point is clicked */

        }, {
          key: "moveTo",
          value: function moveTo(slide, withOutAnimation) {
            // slide = slide - 1;
            withOutAnimation && (this.withAnim = false);

            if (this.activePoint !== slide && slide < this.pointIndex) {
              var slideremains;
              var btns = this.currentSlide < slide ? 1 : 0;

              switch (slide) {
                case 0:
                  this._btnBoolean(1, 0);

                  slideremains = slide * this.slideItems;
                  break;

                case this.pointIndex - 1:
                  this._btnBoolean(0, 1);

                  slideremains = this.dataSource.length - this.items;
                  break;

                default:
                  this._btnBoolean(0, 0);

                  slideremains = slide * this.slideItems;
              }

              this._carouselScrollTwo(btns, slideremains, this.speed);
            }
          }
          /** set the style of the carousel based the inputs data */

        }, {
          key: "_carouselSize",
          value: function _carouselSize() {
            this.token = this._generateID();
            var dism = '';
            this.styleid = ".".concat(this.token, " > .ngucarousel > .ngu-touch-container > .ngucarousel-items");

            if (this.inputs.custom === 'banner') {
              this._renderer.addClass(this.carousel, 'banner');
            }

            if (this.inputs.animation === 'lazy') {
              dism += "".concat(this.styleid, " > .item {transition: transform .6s ease;}");
            }

            var breakpoints = this.inputs.gridBreakpoints;
            var itemStyle = '';

            if (this.vertical.enabled) {
              var itemWidthXS = "".concat(this.styleid, " > .item {height: ").concat(this.vertical.height / +this.inputs.grid.xs, "px}");
              var itemWidthSM = "".concat(this.styleid, " > .item {height: ").concat(this.vertical.height / +this.inputs.grid.sm, "px}");
              var itemWidthMD = "".concat(this.styleid, " > .item {height: ").concat(this.vertical.height / +this.inputs.grid.md, "px}");
              var itemWidthLG = "".concat(this.styleid, " > .item {height: ").concat(this.vertical.height / +this.inputs.grid.lg, "px}");
              var itemWidthXL = "".concat(this.styleid, " > .item {height: ").concat(this.vertical.height / +this.inputs.grid.xl, "px}");
              itemStyle = "@media (max-width:".concat(breakpoints.sm - 1, "px){").concat(itemWidthXS, "}\n                    @media (max-width:").concat(breakpoints.sm, "px){").concat(itemWidthSM, "}\n                    @media (min-width:").concat(breakpoints.md, "px){").concat(itemWidthMD, "}\n                    @media (min-width:").concat(breakpoints.lg, "px){").concat(itemWidthLG, "}\n                    @media (min-width:").concat(breakpoints.xl, "px){").concat(itemWidthXL, "}");
            } else if (this.type === 'responsive') {
              var _itemWidthXS = this.inputs.type === 'mobile' ? "".concat(this.styleid, " .item {flex: 0 0 ").concat(95 / +this.inputs.grid.xs, "%; width: ").concat(95 / +this.inputs.grid.xs, "%;}") : "".concat(this.styleid, " .item {flex: 0 0 ").concat(100 / +this.inputs.grid.xs, "%; width: ").concat(100 / +this.inputs.grid.xs, "%;}");

              var _itemWidthSM = "".concat(this.styleid, " > .item {flex: 0 0 ").concat(100 / +this.inputs.grid.sm, "%; width: ").concat(100 / +this.inputs.grid.sm, "%}");

              var _itemWidthMD = "".concat(this.styleid, " > .item {flex: 0 0 ").concat(100 / +this.inputs.grid.md, "%; width: ").concat(100 / +this.inputs.grid.md, "%}");

              var _itemWidthLG = "".concat(this.styleid, " > .item {flex: 0 0 ").concat(100 / +this.inputs.grid.lg, "%; width: ").concat(100 / +this.inputs.grid.lg, "%}");

              var _itemWidthXL = "".concat(this.styleid, " > .item {flex: 0 0 ").concat(100 / +this.inputs.grid.xl, "%; width: ").concat(100 / +this.inputs.grid.xl, "%}");

              itemStyle = "@media (max-width:".concat(breakpoints.sm - 1, "px){").concat(_itemWidthXS, "}\n                    @media (min-width:").concat(breakpoints.sm, "px){").concat(_itemWidthSM, "}\n                    @media (min-width:").concat(breakpoints.md, "px){").concat(_itemWidthMD, "}\n                    @media (min-width:").concat(breakpoints.lg, "px){").concat(_itemWidthLG, "}\n                    @media (min-width:").concat(breakpoints.xl, "px){").concat(_itemWidthXL, "}");
            } else {
              itemStyle = "".concat(this.styleid, " .item {flex: 0 0 ").concat(this.inputs.grid.all, "px; width: ").concat(this.inputs.grid.all, "px;}");
            }

            this._renderer.addClass(this.carousel, this.token);

            if (this.vertical.enabled) {
              this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');

              this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', "".concat(this.vertical.height, "px"));
            } // tslint:disable-next-line:no-unused-expression


            this.RTL && !this.vertical.enabled && this._renderer.addClass(this.carousel, 'ngurtl');

            this._createStyleElem("".concat(dism, " ").concat(itemStyle));

            this._storeCarouselData();
          }
          /** logic to scroll the carousel step 1 */

        }, {
          key: "_carouselScrollOne",
          value: function _carouselScrollOne(Btn) {
            var itemSpeed = this.speed;
            var translateXval = 0;
            var currentSlide = 0;
            var touchMove = Math.ceil(this.dexVal / this.itemWidth);

            this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');

            if (this.pointIndex === 1) {
              return;
            } else if (Btn === 0 && (!this.loop && !this.isFirst || this.loop)) {
              var currentSlideD = this.currentSlide - this.slideItems;
              var MoveSlide = currentSlideD + this.slideItems;

              this._btnBoolean(0, 1);

              if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;

                this._btnBoolean(0, 1);
              } else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;

                this._btnBoolean(1, 0);
              } else {
                this._btnBoolean(0, 0);

                if (touchMove > this.slideItems) {
                  currentSlide = this.currentSlide - touchMove;
                  itemSpeed = 200;
                } else {
                  currentSlide = this.currentSlide - this.slideItems;
                }
              }

              this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
            } else if (Btn === 1 && (!this.loop && !this.isLast || this.loop)) {
              if (this.dataSource.length <= this.currentSlide + this.items + this.slideItems && !this.isLast) {
                currentSlide = this.dataSource.length - this.items;

                this._btnBoolean(0, 1);
              } else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;

                this._btnBoolean(1, 0);
              } else {
                this._btnBoolean(0, 0);

                if (touchMove > this.slideItems) {
                  currentSlide = this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                  itemSpeed = 200;
                } else {
                  currentSlide = this.currentSlide + this.slideItems;
                }
              }

              this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
            }
          }
          /** logic to scroll the carousel step 2 */

        }, {
          key: "_carouselScrollTwo",
          value: function _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
            // tslint:disable-next-line:no-unused-expression
            if (this.dexVal !== 0) {
              var val = Math.abs(this.touch.velocity);
              var somt = Math.floor(this.dexVal / val / this.dexVal * (this.deviceWidth - this.dexVal));
              somt = somt > itemSpeed ? itemSpeed : somt;
              itemSpeed = somt < 200 ? 200 : somt;
              this.dexVal = 0;
            }

            if (this.withAnim) {
              this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "transform ".concat(itemSpeed, "ms ").concat(this.inputs.easing));

              this.inputs.animation && this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
            } else {
              this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "");
            }

            this.itemLength = this.dataSource.length;

            this._transformStyle(currentSlide);

            this.currentSlide = currentSlide;
            this.onMove.emit(this);

            this._carouselPointActiver();

            this._carouselLoadTrigger();

            this.withAnim = true;
          }
          /** boolean function for making isFirst and isLast */

        }, {
          key: "_btnBoolean",
          value: function _btnBoolean(first, last) {
            this.isFirst = !!first;
            this.isLast = !!last;
          }
        }, {
          key: "_transformString",
          value: function _transformString(grid, slide) {
            var collect = '';
            collect += "".concat(this.styleid, " { transform: translate3d(");

            if (this.vertical.enabled) {
              this.transform[grid] = this.vertical.height / this.inputs.grid[grid] * slide;
              collect += "0, -".concat(this.transform[grid], "px, 0");
            } else {
              this.transform[grid] = 100 / this.inputs.grid[grid] * slide;
              collect += "".concat(this.directionSym).concat(this.transform[grid], "%, 0, 0");
            }

            collect += "); }";
            return collect;
          }
          /** set the transform style to scroll the carousel  */

        }, {
          key: "_transformStyle",
          value: function _transformStyle(slide) {
            var slideCss = '';

            if (this.type === 'responsive') {
              var breakpoints = this.inputs.gridBreakpoints;
              slideCss = "@media (max-width: ".concat(breakpoints.sm - 1, "px) {").concat(this._transformString('xs', slide), "}\n      @media (min-width: ").concat(breakpoints.sm, "px) {").concat(this._transformString('sm', slide), " }\n      @media (min-width: ").concat(breakpoints.md, "px) {").concat(this._transformString('md', slide), " }\n      @media (min-width: ").concat(breakpoints.lg, "px) {").concat(this._transformString('lg', slide), " }\n      @media (min-width: ").concat(breakpoints.xl, "px) {").concat(this._transformString('xl', slide), " }");
            } else {
              this.transform.all = this.inputs.grid.all * slide;
              slideCss = "".concat(this.styleid, " { transform: translate3d(").concat(this.directionSym).concat(this.transform.all, "px, 0, 0);");
            }

            this.carouselCssNode.textContent = slideCss;
          }
          /** this will trigger the carousel to load the items */

        }, {
          key: "_carouselLoadTrigger",
          value: function _carouselLoadTrigger() {
            if (typeof this.inputs.load === 'number') {
              this.dataSource.length - this.load <= this.currentSlide + this.items && this.carouselLoad.emit(this.currentSlide);
            }
          }
          /** generate Class for each carousel to set specific style */

        }, {
          key: "_generateID",
          value: function _generateID() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 6; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return "ngucarousel".concat(text);
          }
          /** handle the auto slide */

        }, {
          key: "_carouselInterval",
          value: function _carouselInterval() {
            var _this10 = this;

            var container = this.carouselMain1.nativeElement;

            if (this.interval && this.loop) {
              this.listener4 = this._renderer.listen('window', 'scroll', function () {
                clearTimeout(_this10.onScrolling);
                _this10.onScrolling = setTimeout(function () {
                  _this10._onWindowScrolling();
                }, 600);
              });
              var play$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(1));
              var pause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(0));
              var touchPlay$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(1));
              var touchPause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(0));
              var interval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.inputs.interval.timing).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(1));
              setTimeout(function () {
                _this10.carouselInt = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(play$, touchPlay$, pause$, touchPause$, _this10._intervalController$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (val) {
                  _this10.isHovered = !val;

                  _this10.cdr.markForCheck();

                  return val ? interval$ : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                })).subscribe(function (res) {
                  _this10._carouselScrollOne(1);
                });
              }, this.interval.initialDelay);
            }
          }
        }, {
          key: "_updateItemIndexContextAni",
          value: function _updateItemIndexContextAni() {
            var viewContainer = this._nodeOutlet.viewContainer;

            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
              var viewRef = viewContainer.get(renderIndex);
              var context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;
              context.index = renderIndex;
            }
          }
          /** animate the carousel items */

        }, {
          key: "_carouselAnimator",
          value: function _carouselAnimator(direction, start, end, speed, length) {
            var _this11 = this;

            var viewContainer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this._nodeOutlet.viewContainer;
            var val = length < 5 ? length : 5;
            val = val === 1 ? 3 : val;
            var collectIndex = [];

            if (direction === 1) {
              for (var i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                var viewRef = viewContainer.get(i);
                var context = viewRef.context;
                context.animate = {
                  value: true,
                  params: {
                    distance: val
                  }
                };
              }
            } else {
              for (var _i2 = end - 1; _i2 >= start - 1; _i2--) {
                collectIndex.push(_i2);
                val = val * 2;

                var _viewRef = viewContainer.get(_i2);

                var _context = _viewRef.context;
                _context.animate = {
                  value: true,
                  params: {
                    distance: -val
                  }
                };
              }
            }

            this.cdr.markForCheck();
            setTimeout(function () {
              _this11._removeAnimations(collectIndex);
            }, speed * 0.7);
          }
        }, {
          key: "_removeAnimations",
          value: function _removeAnimations(indexs) {
            var viewContainer = this._nodeOutlet.viewContainer;
            indexs.forEach(function (i) {
              var viewRef = viewContainer.get(i);
              var context = viewRef.context;
              context.animate = {
                value: false,
                params: {
                  distance: 0
                }
              };
            });
            this.cdr.markForCheck();
          }
          /** Short form for setElementStyle */

        }, {
          key: "_setStyle",
          value: function _setStyle(el, prop, val) {
            this._renderer.setStyle(el, prop, val);
          }
          /** For generating style tag */

        }, {
          key: "_createStyleElem",
          value: function _createStyleElem(datas) {
            var styleItem = this._renderer.createElement('style');

            if (datas) {
              var styleText = this._renderer.createText(datas);

              this._renderer.appendChild(styleItem, styleText);
            }

            this._renderer.appendChild(this.carousel, styleItem);

            return styleItem;
          }
        }]);

        return NguCarousel;
      }(NguCarouselStore);

      NguCarousel.ɵfac = function NguCarousel_Factory(t) {
        return new (t || NguCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      NguCarousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NguCarousel,
        selectors: [["ngu-carousel"]],
        contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NguCarouselNextDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NguCarouselPrevDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NguCarouselDefDirective, 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._defDirec = _t);
          }
        },
        viewQuery: function NguCarousel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NguCarouselOutlet, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carouselMain1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nguItemsContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.touchContainer = _t.first);
          }
        },
        inputs: {
          dataSource: "dataSource",
          trackBy: "trackBy",
          inputs: "inputs"
        },
        outputs: {
          carouselLoad: "carouselLoad",
          onMove: "onMove"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 11,
        vars: 0,
        consts: [[1, "ngucarousel"], ["ngucarousel", ""], [1, "ngu-touch-container"], ["touchContainer", ""], [1, "ngucarousel-items"], ["nguItemsContainer", ""], ["nguCarouselOutlet", ""], [1, "nguclearFix"]],
        template: function NguCarousel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](7, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10, 2);
          }
        },
        directives: [NguCarouselOutlet],
        styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:relative}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{display:flex;height:100%;position:relative}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{bottom:20px;position:absolute;width:100%}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:12px;text-align:center;white-space:nowrap}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(0,0,0,.55);border-radius:50%;display:inline-block;margin:0 4px;padding:4px;transition:.4s;transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"],
        changeDetection: 0
      });

      NguCarousel.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      NguCarousel.propDecorators = {
        inputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        carouselLoad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['dataSource']
        }],
        _defDirec: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [NguCarouselDefDirective]
        }],
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [NguCarouselOutlet, {
            "static": true
          }]
        }],
        nextBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [NguCarouselNextDirective,
          /* TODO: add static flag */
          {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        prevBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [NguCarouselPrevDirective,
          /* TODO: add static flag */
          {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        carouselMain1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['ngucarousel', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": true
          }]
        }],
        nguItemsContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['nguItemsContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": true
          }]
        }],
        touchContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['touchContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": true
          }]
        }],
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarousel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngu-carousel',
            template: "<div #ngucarousel class=\"ngucarousel\">\r\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  <div #touchContainer class=\"ngu-touch-container\">\r\n    <div #nguItemsContainer class=\"ngucarousel-items\">\r\n      <ng-container nguCarouselOutlet></ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"nguclearFix\"></div>\r\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n</div>\r\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{height:100%;overflow:hidden;position:relative}.ngucarousel .ngucarousel-items{display:flex;height:100%;position:relative}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{bottom:20px;position:absolute;width:100%}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:hsla(0,0%,100%,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:12px;text-align:center;white-space:nowrap}.ngucarouselPointDefault .ngucarouselPoint li{background:rgba(0,0,0,.55);border-radius:50%;display:inline-block;margin:0 4px;padding:4px;transition:.4s;transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          carouselLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['dataSource']
          }],
          nextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NguCarouselNextDirective,
            /* TODO: add static flag */
            {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
            }]
          }],
          prevBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NguCarouselPrevDirective,
            /* TODO: add static flag */
            {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
            }]
          }],
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _defDirec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NguCarouselDefDirective]
          }],
          _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [NguCarouselOutlet, {
              "static": true
            }]
          }],
          carouselMain1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ngucarousel', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
              "static": true
            }]
          }],
          nguItemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['nguItemsContainer', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
              "static": true
            }]
          }],
          touchContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['touchContainer', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
              "static": true
            }]
          }]
        });
      })();

      var NguItemComponent = function NguItemComponent() {
        _classCallCheck(this, NguItemComponent);

        this.classes = true;
      };

      NguItemComponent.ɵfac = function NguItemComponent_Factory(t) {
        return new (t || NguItemComponent)();
      };

      NguItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NguItemComponent,
        selectors: [["ngu-item"]],
        hostVars: 2,
        hostBindings: function NguItemComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("item", ctx.classes);
          }
        },
        ngContentSelectors: _c5,
        decls: 1,
        vars: 0,
        template: function NguItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [""]
      });
      NguItemComponent.propDecorators = {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.item']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngu-item',
            template: "<ng-content></ng-content>\r\n",
            styles: [""]
          }]
        }], function () {
          return [];
        }, {
          classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.item']
          }]
        });
      })();

      var NguTileComponent = function NguTileComponent() {
        _classCallCheck(this, NguTileComponent);

        this.classes = true;
      };

      NguTileComponent.ɵfac = function NguTileComponent_Factory(t) {
        return new (t || NguTileComponent)();
      };

      NguTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NguTileComponent,
        selectors: [["ngu-tile"]],
        hostVars: 2,
        hostBindings: function NguTileComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("item", ctx.classes);
          }
        },
        ngContentSelectors: _c5,
        decls: 2,
        vars: 0,
        consts: [[1, "tile"]],
        template: function NguTileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%]{box-sizing:border-box;padding:10px}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
      });
      NguTileComponent.propDecorators = {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.item']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguTileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngu-tile',
            template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
            styles: [":host{box-sizing:border-box;padding:10px}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
          }]
        }], function () {
          return [];
        }, {
          classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.item']
          }]
        });
      })();

      var NguCarouselModule = function NguCarouselModule() {
        _classCallCheck(this, NguCarouselModule);
      };

      NguCarouselModule.ɵfac = function NguCarouselModule_Factory(t) {
        return new (t || NguCarouselModule)();
      };

      NguCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NguCarouselModule
      });
      NguCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NguCarouselModule, {
          declarations: function declarations() {
            return [NguCarousel, NguItemComponent, NguTileComponent, NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [NguCarousel, NguItemComponent, NguTileComponent, NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [NguCarousel, NguItemComponent, NguTileComponent, NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet],
            declarations: [NguCarousel, NguItemComponent, NguTileComponent, NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of carousel
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngu-carousel.js.map

      /***/

    },

    /***/
    "OQ6K":
    /*!*****************************************************************************!*\
      !*** ./src/app/employee/pages/employee-detail/employee-detail.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: EmployeeDetailComponent */

    /***/
    function OQ6K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function () {
        return EmployeeDetailComponent;
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


      var _components_employee_editor_dialog_employee_editor_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/employee-editor-dialog/employee-editor-dialog.component */
      "JdWI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core */
      "ey9i");
      /* harmony import */


      var src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/core.service */
      "2tG/");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../shared/components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");

      function EmployeeDetailComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Personal Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "VN Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "VN Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Place of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "VN Place of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "VN Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Other Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "ID Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Issue Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var employee_r4 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", employee_r4.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 8, employee_r4.birthDay, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", employee_r4.placeOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", employee_r4.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", employee_r4.degree);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", employee_r4.idNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](95, 11, employee_r4.issueDate, "dd/MM/yyyy"));
        }
      }

      function EmployeeDetailComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDetailComponent_ng_template_3_Template_p_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.updateProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDetailComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "The server is occurred an error! Please try again later!");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "View personal profile detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "View my resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Personal Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-tag", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "VN Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-tag", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-tag", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "VN Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Place of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "VN Place of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Other Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "ID Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Issue Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Issue Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "VN Issue Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Race");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Religion");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Current Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "p-tag", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Married Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Major");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emp_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", emp_r16.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 10, emp_r16.birthDay, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.placeOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.degree);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 13, emp_r16.issueDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.race);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.religion);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.marriedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r16.major);
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "At Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Employee ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-tag", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Contracted Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "p-tag", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Job Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Tax ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Issue Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Insurance Book No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emp_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", emp_r17.employeeID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r17.placeOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 8, emp_r17.contractedDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r17.department);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r17.jobTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r17.taxID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](36, 11, emp_r17.issueDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r17.insuranceBookNo);
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Home Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " N/A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cell Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Floor");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Ext Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Personal Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Office Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emp_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r18.cellPhone);
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bank Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDetailComponent_ng_container_13_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bank Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Bank Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emp_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r19.bankName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](emp_r19.bankAccount);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function EmployeeDetailComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EmployeeDetailComponent_ng_container_13_ng_template_3_Template, 9, 0, "ng-template", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EmployeeDetailComponent_ng_container_13_ng_template_4_Template, 89, 16, "ng-template", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EmployeeDetailComponent_ng_container_13_ng_template_10_Template, 4, 0, "ng-template", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EmployeeDetailComponent_ng_container_13_ng_template_11_Template, 42, 14, "ng-template", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p-table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EmployeeDetailComponent_ng_container_13_ng_template_13_Template, 4, 0, "ng-template", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EmployeeDetailComponent_ng_container_13_ng_template_14_Template, 30, 1, "ng-template", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p-table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EmployeeDetailComponent_ng_container_13_ng_template_16_Template, 4, 0, "ng-template", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EmployeeDetailComponent_ng_container_13_ng_template_17_Template, 10, 2, "ng-template", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var employee_r7 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, employee_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", employee_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, employee_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, employee_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, employee_r7));
        }
      }

      var _c1 = function _c1() {
        return {
          width: "90vw"
        };
      };

      var EmployeeDetailComponent = /*#__PURE__*/function () {
        function EmployeeDetailComponent(route, router, employeeService, coreService, dialog, overlay) {
          var _this12 = this;

          _classCallCheck(this, EmployeeDetailComponent);

          this.route = route;
          this.router = router;
          this.employeeService = employeeService;
          this.coreService = coreService;
          this.dialog = dialog;
          this.overlay = overlay;
          this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
          this.displayModal = false;
          this.loading$.next(true);
          this.employees$ = this.employeeService.getEmployees();
          this.employee$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this12.employeeService.getEmployee(params.get('id'));
          }));
          this.employee$.subscribe(function () {
            return _this12.loading$.next(false);
          });
        }

        _createClass(EmployeeDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getLoading",
          value: function getLoading() {
            return this.loading$;
          } // tslint:disable-next-line:typedef

        }, {
          key: "handleUpdate",
          value: function handleUpdate(empl) {
            var dialogRef = this.dialog.open(_components_employee_editor_dialog_employee_editor_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeEditorDialogComponent"], {
              width: '800px',
              height: 'auto',
              disableClose: true,
              autoFocus: true,
              scrollStrategy: this.overlay.scrollStrategies.noop(),
              data: empl
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');

              if (result) {}
            });
          }
        }, {
          key: "showModalDialog",
          value: function showModalDialog() {
            this.displayModal = true;
          }
        }, {
          key: "showEmpInformation",
          value: function showEmpInformation(id) {}
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            // @ts-ignore
            var fullname = document.getElementById("fullname").value;
            var emp = {
              id: '7',
              fullName: fullname
            };
            alert(JSON.stringify(emp, null, 2)); //this.employee$ = this.route.paramMap.pipe(
            //    switchMap(params => this.employeeService.updateEmployee(params.get('id')!, emp)),
            //);
          }
        }]);

        return EmployeeDetailComponent;
      }();

      EmployeeDetailComponent.ɵfac = function EmployeeDetailComponent_Factory(t) {
        return new (t || EmployeeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]));
      };

      EmployeeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: EmployeeDetailComponent,
        selectors: [["crm-employee-detail"]],
        decls: 15,
        vars: 13,
        consts: [["header", "View Employee Personal Information", 3, "visible", "modal", "baseZIndex", "draggable", "resizable", "visibleChange"], ["class", "p-m-0", 4, "ngrxLet"], ["pTemplate", "footer"], [4, "ngIf"], [1, "p-flex-row"], [1, "p-mr-auto"], ["pButton", "", "icon", "pi pi-pencil", "label", "Edit profile", 1, "p-button-success", "p-button-sm", 3, "click"], [4, "ngrxLet"], [1, "p-m-0"], [1, "p-fluid"], [2, "color", "#0066c0", "font-weight", "bold"], [1, "p-col-12", "p-d-flex"], [1, "p-col-4"], [1, "p-field", "p-grid"], ["for", "fullname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["id", "fullname", "type", "text", "pInputText", "", 3, "value"], ["for", "vnfullname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "vnfullname", "value", "N/A", "type", "text", "pInputText", "", 3, "readOnly"], ["for", "dob", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "dob", "pInputText", "", "type", "text", 3, "value"], ["for", "placeOfBirth", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "placeOfBirth", "type", "text", "pInputText", "", 3, "value"], ["for", "vnPlaceOfBirth", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "vnPlaceOfBirth", "type", "text", "pInputText", "", "value", "N/A"], ["for", "placeOfOrigin", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "placeOfOrigin", "type", "text", "pInputText", "", "value", "N/A"], ["for", "vnPlaceOfOrigin", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "vnPlaceOfOrigin", "type", "text", "pInputText", "", "value", "N/A"], ["for", "nationality", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "nationality", "type", "text", "pInputText", "", "value", "N/A"], ["for", "issueLocation", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "issueLocation", "type", "text", "pInputText", "", "value", "N/A"], ["for", "gender", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "gender", "type", "text", "pInputText", "", 3, "value"], ["for", "degree", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "degree", "type", "text", "pInputText", "", 3, "value"], ["id", "otherDegree", "type", "text", "pInputText", "", "value", "N/A"], ["for", "idNumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "idNumber", "type", "text", "pInputText", "", 3, "value"], ["for", "issueDate", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "issueDate", "type", "text", "pInputText", "", 3, "value"], ["icon", "pi pi-check", "label", "Update Profile", "styleClass", "p-button-text", 3, "click"], [1, "p-mb-3", 2, "color", "red"], [1, "p-d-flex"], [1, "p-mr-3"], [1, "pi", "pi-user", 2, "font-size", "2.5rem"], [1, "p-card-content"], [1, "pi", "pi-briefcase", 2, "font-size", "2.5rem"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row"], [1, "p-mb-2", "p-mr-2", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "p-mb-2", "p-mr-2"], [2, "width", "120px", "height", "120px"], ["alt", "", 3, "src"], [1, "stiky-column", 2, "font-family", "sans-serif", "color", "#0066c0"], [1, "stiky-column"], [1, "emp-table-row-title-value"], ["severity", "info", 3, "value"], ["value", "N/A", "severity", "info"], ["value", "Contracted", "severity", "success"], [1, "p-mb-auto", 2, "font-family", "sans-serif", "color", "#0066c0"], [1, "emp-table-row-title-value", 2, "color", "green"], ["severity", "success", 3, "value"]],
        template: function EmployeeDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-dialog", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function EmployeeDetailComponent_Template_p_dialog_visibleChange_1_listener($event) {
              return ctx.displayModal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EmployeeDetailComponent_ng_container_2_Template, 96, 14, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EmployeeDetailComponent_ng_template_3_Template, 1, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EmployeeDetailComponent_div_4_Template, 16, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Employee Profile Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDetailComponent_Template_button_click_12_listener() {
              return ctx.showModalDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EmployeeDetailComponent_ng_container_13_Template, 18, 13, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "crm-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("baseZIndex", 10000)("draggable", false)("resizable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.employee$);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, ctx.employee$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.employee$);
          }
        },
        directives: [primeng_card__WEBPACK_IMPORTED_MODULE_9__["Card"], primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["Dialog"], _ngrx_component__WEBPACK_IMPORTED_MODULE_11__["LetDirective"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonDirective"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["Button"], primeng_table__WEBPACK_IMPORTED_MODULE_17__["Table"], primeng_tag__WEBPACK_IMPORTED_MODULE_18__["Tag"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [".emp-table-row-title-value[_ngcontent-%COMP%] {\n  color: #111111;\n}\n\n.stiky-column[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  top: 10px;\n}\n\n.treetableDate[_ngcontent-%COMP%]   .ui-widget-content[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.progress-spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZW1wbG95ZWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQzRCLFdBQUE7RUFDMUIsZ0JBQUE7RUFDQSxTQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBSUYiLCJmaWxlIjoiZW1wbG95ZWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcC10YWJsZS1yb3ctdGl0bGUtdmFsdWUge1xyXG4gIGNvbG9yOiAjMTExMTExO1xyXG59XHJcbi5zdGlreS1jb2x1bW57XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMTBweDtcclxufVxyXG4udHJlZXRhYmxlRGF0ZSAudWktd2lkZ2V0LWNvbnRlbnR7XHJcbiAgd2lkdGg6IDgwJTsgLy8gb3IgaW4gcGl4ZWwgZGVwZW5kcyBob3cgbXVjaCB3aWR0aCB5b3Ugd2FudC5cclxufVxyXG5cclxuLnByb2dyZXNzLXNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "PgJR":
    /*!*********************************************!*\
      !*** ./src/app/employee/employee.module.ts ***!
      \*********************************************/

    /*! exports provided: EmployeeModule */

    /***/
    function PgJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
        return EmployeeModule;
      });
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared */
      "M0ag");
      /* harmony import */


      var _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./employee-routing.module */
      "FvOc");
      /* harmony import */


      var _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngu/carousel */
      "Mh1x");
      /* harmony import */


      var _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/employee-detail/employee-detail.component */
      "OQ6K");
      /* harmony import */


      var _components_employee_editor_dialog_employee_editor_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/employee-editor-dialog/employee-editor-dialog.component */
      "JdWI");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/progressspinner */
      "vKg+");
      /* harmony import */


      var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/breadcrumb */
      "URcr");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var _components_employee_home_employee_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/employee-home/employee-home.component */
      "QJ4M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmployeeModule = function EmployeeModule() {
        _classCallCheck(this, EmployeeModule);
      };

      EmployeeModule.ɵfac = function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      };

      EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: EmployeeModule
      });
      EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguCarouselModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__["ProgressSpinnerModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"], primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_10__["TagModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](EmployeeModule, {
          declarations: [_pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailComponent"], _components_employee_editor_dialog_employee_editor_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeEditorDialogComponent"], _components_employee_home_employee_home_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeHomeComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguCarouselModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveComponentModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__["ProgressSpinnerModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"], primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_10__["TagModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"]]
        });
      })();
      /***/

    },

    /***/
    "QJ4M":
    /*!******************************************************************************!*\
      !*** ./src/app/employee/components/employee-home/employee-home.component.ts ***!
      \******************************************************************************/

    /*! exports provided: EmployeeHomeComponent */

    /***/
    function QJ4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeHomeComponent", function () {
        return EmployeeHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmployeeHomeComponent = /*#__PURE__*/function () {
        function EmployeeHomeComponent() {
          _classCallCheck(this, EmployeeHomeComponent);
        }

        _createClass(EmployeeHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmployeeHomeComponent;
      }();

      EmployeeHomeComponent.ɵfac = function EmployeeHomeComponent_Factory(t) {
        return new (t || EmployeeHomeComponent)();
      };

      EmployeeHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeeHomeComponent,
        selectors: [["crm-employee-home"]],
        decls: 0,
        vars: 0,
        template: function EmployeeHomeComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=employee-employee-module-es5.js.map