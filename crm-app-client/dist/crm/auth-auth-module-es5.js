(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/guards */
      "yK//");
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages */
      "aP6Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var authRoutes = [{
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [{
          path: 'signin',
          component: _pages__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
          canActivate: [_core_guards__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"]]
        }, {
          path: 'signup',
          component: _pages__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"],
          canActivate: [_core_guards__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"]]
        }, {
          path: 'forgotpwd',
          component: _pages__WEBPACK_IMPORTED_MODULE_2__["ForgotPwdComponent"],
          canActivate: [_core_guards__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"]]
        }, {
          path: 'resetpwd',
          component: _pages__WEBPACK_IMPORTED_MODULE_2__["ResetPwdComponent"],
          canActivate: [_core_guards__WEBPACK_IMPORTED_MODULE_1__["ResetPwdGuard"]]
        }, {
          path: '',
          redirectTo: 'signin',
          pathMatch: 'full'
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(authRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "BRtN":
    /*!*******************************************************!*\
      !*** ./src/app/auth/pages/signup/signup.component.ts ***!
      \*******************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function BRtN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _CustomErrorStateMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../CustomErrorStateMatcher */
      "Ct1k");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core */
      "ey9i");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-recaptcha */
      "jCJ1");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");

      var _c0 = function _c0() {
        return ["/auth", "signin"];
      };

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(fb, router, authService, primengConfig) {
          _classCallCheck(this, SignupComponent);

          this.fb = fb;
          this.router = router;
          this.authService = authService;
          this.primengConfig = primengConfig;
          this.captcha = false;
          this.signupForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          }, {
            validator: this.confirmedPasswordValidator('password', 'confirmPassword')
          });
          this.matcher = new _CustomErrorStateMatcher__WEBPACK_IMPORTED_MODULE_1__["CustomErrorStateMatcher"]();
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.primengConfig.ripple = true;
          }
        }, {
          key: "resolved",
          value: function resolved(captchaResponse) {
            this.captcha = true;
            console.log("Resolved response token: ".concat(captchaResponse));
          }
        }, {
          key: "isCaptcha",
          value: function isCaptcha() {
            return this.captcha;
          }
        }, {
          key: "f",
          get: function get() {
            return this.signupForm.controls;
          }
        }, {
          key: "confirmedPasswordValidator",
          value: function confirmedPasswordValidator(controlName, matchingControlName) {
            return function (formGroup) {
              var control = formGroup.controls[controlName];
              var matchingControl = formGroup.controls[matchingControlName];

              if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
              }

              if (control.value !== matchingControl.value) {
                matchingControl.setErrors({
                  confirmedValidator: true
                });
              } else {
                matchingControl.setErrors(null);
              }
            };
          }
        }, {
          key: "register",
          value: function register() {
            var _this = this;

            this.authService.signup(this.signupForm.value).subscribe(function (user) {
              console.log(user);

              _this.router.navigate(['employee', user.id]);
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["crm-signup"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])],
        decls: 49,
        vars: 12,
        consts: [[1, "signup-form", 3, "formGroup"], [1, "crm-box"], [1, "crm-box-inner"], [1, "ui-grid", "ui-grid-responsive", "ui-grid-pad", "ui-fluid", 2, "margin", "10px 0px"], [1, "ui-grid-row", "p-mt-3"], [1, "ui-grid-col-6"], ["pInputText", "", "placeholder", "Fullname*", "type", "text", "formControlName", "fullname", "required", "", 1, "form-control", 2, "width", "100%"], [1, "ui-grid-col-4"], [2, "color", "red", 3, "hidden"], ["pInputText", "", "placeholder", "Email*", "type", "text", "formControlName", "email", "required", "", 1, "form-control", 2, "width", "100%"], [1, "ui-grid-row", 2, "margin-top", "12px"], ["pInputText", "", "type", "password", "placeholder", "Password*", "formControlName", "password", 2, "width", "100%"], ["pInputText", "", "type", "password", "placeholder", "Re-enter password*", "formControlName", "confirmPassword", 2, "width", "100%"], [1, "ui-grid-row", "p-mt-2"], [1, "g-recaptcha"], ["formControlName", "recaptchaReactive", "siteKey", "6LcHUp4aAAAAABFyGxRcKbAURjynoXA-nVpt2eHw", 2, "transform", "scale(0.4)", "margin-left", "14px", 3, "resolved"], [1, "ui-grid-row"], ["pButton", "", 1, "p-button-warning", "p-button-sm", 2, "margin-top", "14px", 3, "disabled", "click"], [2, "margin-top", "12px"], [3, "routerLink"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Create account");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Please enter a valid name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Email is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Please enter a valid email address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Email is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Password is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Password must be at least 8 characters long ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Re-enter password is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Password and Confirm Password must be match ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "re-captcha", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resolved", function SignupComponent_Template_re_captcha_resolved_40_listener($event) {
              return ctx.resolved($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_43_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Already have an account?\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.email.hasError("fullname") || ctx.f.email.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.email.hasError("required") || ctx.signupForm.controls["email"].valid || !ctx.signupForm.controls["email"].dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.email.hasError("email") || ctx.f.email.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.email.hasError("required") || ctx.signupForm.controls["email"].valid || !ctx.signupForm.controls["email"].dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.password.hasError("required") || ctx.signupForm.controls["password"].valid || !ctx.signupForm.controls["password"].dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.password.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.confirmPassword.hasError("required") || ctx.signupForm.controls["confirmPassword"].valid || !ctx.signupForm.controls["confirmPassword"].dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.f.confirmPassword.hasError("confirmedValidator"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.signupForm.invalid || !ctx.isCaptcha());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaValueAccessorDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: [".crm-box-inner[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.g-recaptcha[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n  -webkit-transform: scale(0.8);\n  transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JtLWJveC1pbm5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nLXJlY2FwdGNoYSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "Ct1k":
    /*!*************************************************!*\
      !*** ./src/app/auth/CustomErrorStateMatcher.ts ***!
      \*************************************************/

    /*! exports provided: CustomErrorStateMatcher */

    /***/
    function Ct1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomErrorStateMatcher", function () {
        return CustomErrorStateMatcher;
      });

      var CustomErrorStateMatcher = /*#__PURE__*/function () {
        function CustomErrorStateMatcher() {
          _classCallCheck(this, CustomErrorStateMatcher);
        }

        _createClass(CustomErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var _a;

            var invalidCtrl = !!(control && control.invalid && ((_a = control.parent) === null || _a === void 0 ? void 0 : _a.dirty));
            var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
            var hasErrors = !!(control && control.parent && control.parent.errors !== null);
            var touched = !!(control && control.touched);
            return hasErrors && touched && (invalidCtrl || invalidParent);
          }
        }]);

        return CustomErrorStateMatcher;
      }();
      /***/

    },

    /***/
    "I65O":
    /*!*******************************************************!*\
      !*** ./src/app/auth/pages/signin/signin.component.ts ***!
      \*******************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function I65O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core */
      "ey9i");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");

      var _c0 = function _c0() {
        return ["/auth", "forgotpwd"];
      };

      var _c1 = function _c1() {
        return ["/auth", "signup"];
      };

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(fb, route, authService, router, primengConfig) {
          _classCallCheck(this, SigninComponent);

          this.fb = fb;
          this.route = route;
          this.authService = authService;
          this.router = router;
          this.primengConfig = primengConfig;
          this.signinForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        _createClass(SigninComponent, [{
          key: "f",
          get: function get() {
            return this.signinForm.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.primengConfig.ripple = true;
          }
        }, {
          key: "login",
          value: function login() {
            var _this2 = this;

            var credentials = this.signinForm.value;
            this.authService.attemptAuth(credentials).subscribe(function (user) {
              //   const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '';
              _this2.router.navigate(["/employee"]); // this.router.navigate(['employee', user.id]);

            });
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["crm-signin"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])],
        decls: 40,
        vars: 9,
        consts: [[1, "signin-form", 3, "formGroup"], [1, "crm-box"], [1, "crm-box-inner"], [1, "ui-grid", "ui-grid-responsive", "ui-grid-pad", "ui-fluid", 2, "margin", "10px 0px"], [1, "ui-grid-row"], [1, "ui-grid-col-6"], ["pInputText", "", "placeholder", "Email*", "type", "text", "formControlName", "email", "name", "email", 1, "p-autocomplete"], [1, "ui-grid-col-4"], [2, "color", "red", 3, "hidden"], [1, "ui-grid-row", 2, "margin-top", "12px"], ["pInputText", "", "placeholder", "Password*", "type", "password", "formControlName", "password", "name", "password", "required", ""], [3, "hidden"], [2, "color", "red"], [2, "text-align", "right", "margin-top", "12px"], [3, "routerLink"], [1, "ui-grid-col-2"], ["pButton", "", 1, "p-button-raised", "p-button-sm", "p-button-warning", 2, "margin-top", "14px", 3, "disabled", "click"], [2, "margin-top", "12px"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Please enter a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "valid");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " email address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Email is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Password is required");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Forgot your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_33_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Continue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " New to? \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Create your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signinForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.f.email.hasError("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.f.email.hasError("required") || ctx.signinForm.controls["email"].valid || !ctx.signinForm.controls["email"].dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.signinForm.controls["password"].valid || !ctx.signinForm.controls["password"].dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.signinForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]],
        styles: ["input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "IveI":
    /*!**********************************************!*\
      !*** ./src/app/auth/pages/auth.component.ts ***!
      \**********************************************/

    /*! exports provided: AuthComponent */

    /***/
    function IveI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["crm-auth"]],
        decls: 5,
        vars: 0,
        consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "auth-container", 2, "height", "100%"], ["href", "https://logigear.com"], ["src", "../../../assets/img/logo/logigear-logo.png", "alt", "LogiGear icon", 1, "auth-logigear-logo"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".auth-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.auth-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 280px;\n}\n\n.auth-logigear-logo[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hdXRoLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcblxyXG4uYXV0aC1sb2dpZ2Vhci1sb2dvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "V5BG":
    /*!****************************************************************************!*\
      !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js ***!
      \****************************************************************************/

    /*! exports provided: AUTOCOMPLETE_VALUE_ACCESSOR, AutoComplete, AutoCompleteModule */

    /***/
    function V5BG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_VALUE_ACCESSOR", function () {
        return AUTOCOMPLETE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoComplete", function () {
        return AutoComplete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function () {
        return AutoCompleteModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/ripple */
      "Q4Mo");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/dom */
      "YyRF");
      /* harmony import */


      var primeng_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/utils */
      "t2ka");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["container"];
      var _c1 = ["in"];
      var _c2 = ["multiIn"];
      var _c3 = ["multiContainer"];
      var _c4 = ["ddBtn"];

      var _c5 = function _c5(a0, a1) {
        return {
          "p-autocomplete-dd-input": a0,
          "p-disabled": a1
        };
      };

      function AutoComplete_input_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_input_2_Template_input_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onInputClick($event);
          })("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onInput($event);
          })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onKeydown($event);
          })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onKeyup($event);
          })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.onInputFocus($event);
          })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.onInputBlur($event);
          })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.onInputChange($event);
          })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.onInputPaste($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.inputStyleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.inputStyle)("autocomplete", ctx_r1.autocomplete)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c5, ctx_r1.dropdown, ctx_r1.disabled))("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r1.type)("id", ctx_r1.inputId)("required", ctx_r1.required)("name", ctx_r1.name)("aria-controls", ctx_r1.listId)("aria-expanded", ctx_r1.overlayVisible)("aria-activedescendant", "p-highlighted-option")("autofocus", ctx_r1.autofocus)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("maxlength", ctx_r1.maxlength)("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required);
        }
      }

      function AutoComplete_ul_3_li_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutoComplete_ul_3_li_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.resolveFieldData(val_r19));
        }
      }

      function AutoComplete_ul_3_li_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_3_li_2_span_4_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.removeItem(_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c6 = function _c6(a0) {
        return {
          $implicit: a0
        };
      };

      function AutoComplete_ul_3_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_3_li_2_ng_container_2_Template, 1, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_ul_3_li_2_span_3_Template, 2, 1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_ul_3_li_2_span_4_Template, 1, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r19 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c6, val_r19));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.selectedItemTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.disabled && !ctx_r17.readonly);
        }
      }

      var _c7 = function _c7(a0, a1) {
        return {
          "p-disabled": a0,
          "p-focus": a1
        };
      };

      function AutoComplete_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_3_Template_ul_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return _r18.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_3_li_2_Template, 5, 6, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_ul_3_Template_input_input_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onInput($event);
          })("click", function AutoComplete_ul_3_Template_input_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onInputClick($event);
          })("keydown", function AutoComplete_ul_3_Template_input_keydown_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.onKeydown($event);
          })("keyup", function AutoComplete_ul_3_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.onKeyup($event);
          })("focus", function AutoComplete_ul_3_Template_input_focus_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.onInputFocus($event);
          })("blur", function AutoComplete_ul_3_Template_input_blur_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.onInputBlur($event);
          })("change", function AutoComplete_ul_3_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.onInputChange($event);
          })("paste", function AutoComplete_ul_3_Template_input_paste_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.onInputPaste($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c7, ctx_r2.disabled, ctx_r2.focus));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.inputStyleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("autocomplete", ctx_r2.autocomplete)("ngStyle", ctx_r2.inputStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r2.type)("id", ctx_r2.inputId)("placeholder", ctx_r2.value && ctx_r2.value.length ? null : ctx_r2.placeholder)("tabindex", ctx_r2.tabindex)("maxlength", ctx_r2.maxlength)("autofocus", ctx_r2.autofocus)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-controls", ctx_r2.listId)("aria-expanded", ctx_r2.overlayVisible)("aria-activedescendant", "p-highlighted-option");
        }
      }

      function AutoComplete_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
        }
      }

      function AutoComplete_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_button_5_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.handleDropdownClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.dropdownIcon)("disabled", ctx_r4.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r4.tabindex);
        }
      }

      function AutoComplete_div_6_ng_container_3_ng_template_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var optgroup_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.getOptionGroupLabel(optgroup_r46) || "empty");
        }
      }

      function AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutoComplete_div_6_ng_container_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_6_ng_container_3_ng_template_1_span_1_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 17);
        }

        if (rf & 2) {
          var optgroup_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.groupTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r45.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, optgroup_r46));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r43)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c6, ctx_r45.getOptionGroupChildren(optgroup_r46)));
        }
      }

      function AutoComplete_div_6_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_6_ng_container_3_ng_template_1_Template, 4, 9, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.suggestions);
        }
      }

      function AutoComplete_div_6_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutoComplete_div_6_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_6_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r43)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r42.suggestions));
        }
      }

      function AutoComplete_div_6_ng_template_5_li_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.resolveFieldData(option_r55));
        }
      }

      function AutoComplete_div_6_ng_template_5_li_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c8 = function _c8(a0) {
        return {
          "p-highlight": a0
        };
      };

      var _c9 = function _c9(a0, a1) {
        return {
          $implicit: a0,
          index: a1
        };
      };

      function AutoComplete_div_6_ng_template_5_li_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_div_6_ng_template_5_li_0_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var option_r55 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r60.selectItem(option_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_6_ng_template_5_li_0_span_1_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_6_ng_template_5_li_0_ng_container_2_Template, 1, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r55 = ctx.$implicit;
          var idx_r56 = ctx.index;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c8, option_r55 === ctx_r53.highlightOption))("id", ctx_r53.highlightOption == option_r55 ? "p-highlighted-option" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r53.itemTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c9, option_r55, idx_r56));
        }
      }

      function AutoComplete_div_6_ng_template_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.emptyMessage);
        }
      }

      function AutoComplete_div_6_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_div_6_ng_template_5_li_0_Template, 3, 10, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_6_ng_template_5_li_1_Template, 2, 1, "li", 32);
        }

        if (rf & 2) {
          var suggestionsToDisplay_r52 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionsToDisplay_r52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.noResults && ctx_r44.emptyMessage);
        }
      }

      var _c10 = function _c10() {
        return ["p-autocomplete-panel p-component"];
      };

      var _c11 = function _c11(a0, a1) {
        return {
          showTransitionParams: a0,
          hideTransitionParams: a1
        };
      };

      var _c12 = function _c12(a1) {
        return {
          value: "visible",
          params: a1
        };
      };

      function AutoComplete_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function AutoComplete_div_6_Template_div_animation_overlayAnimation_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.onOverlayAnimationStart($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_div_6_ng_container_3_Template, 2, 1, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_div_6_ng_container_4_Template, 2, 4, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_div_6_ng_template_5_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.panelStyleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r5.scrollHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c10))("ngStyle", ctx_r5.panelStyle)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c11, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r5.listId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.group);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.group);
        }
      }

      var _c13 = function _c13(a1, a2) {
        return {
          "p-autocomplete p-component": true,
          "p-autocomplete-dd": a1,
          "p-autocomplete-multiple": a2
        };
      };

      var AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return AutoComplete;
        }),
        multi: true
      };

      var AutoComplete = /*#__PURE__*/function () {
        function AutoComplete(el, renderer, cd, differs) {
          _classCallCheck(this, AutoComplete);

          this.el = el;
          this.renderer = renderer;
          this.cd = cd;
          this.differs = differs;
          this.minLength = 1;
          this.delay = 300;
          this.type = 'text';
          this.autoZIndex = true;
          this.baseZIndex = 0;
          this.dropdownIcon = "pi pi-chevron-down";
          this.unique = true;
          this.completeOnFocus = false;
          this.completeMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scrollHeight = '200px';
          this.dropdownMode = 'blank';
          this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
          this.hideTransitionOptions = '.1s linear';
          this.autocomplete = 'off';

          this.onModelChange = function () {};

          this.onModelTouched = function () {};

          this.overlayVisible = false;
          this.focus = false;
          this.inputFieldValue = null;
          this.differ = differs.find([]).create(null);
          this.listId = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_8__["UniqueComponentId"])() + '_list';
        }

        _createClass(AutoComplete, [{
          key: "suggestions",
          get: function get() {
            return this._suggestions;
          },
          set: function set(val) {
            this._suggestions = val;
            this.handleSuggestionsChange();
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this3 = this;

            //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
            if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
              setTimeout(function () {
                if (_this3.overlay) {
                  _this3.alignOverlay();
                }
              }, 1);
              this.suggestionsUpdated = false;
            }

            if (this.highlightOptionChanged) {
              setTimeout(function () {
                if (_this3.overlay) {
                  var listItem = primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].findSingle(_this3.overlay, 'li.p-highlight');

                  if (listItem) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].scrollInView(_this3.overlay, listItem);
                  }
                }
              }, 1);
              this.highlightOptionChanged = false;
            }
          }
        }, {
          key: "handleSuggestionsChange",
          value: function handleSuggestionsChange() {
            if (this._suggestions != null && this.loading) {
              this.highlightOption = null;

              if (this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;

                if (this.autoHighlight) {
                  this.highlightOption = this._suggestions[0];
                }
              } else {
                this.noResults = true;

                if (this.emptyMessage) {
                  this.show();
                  this.suggestionsUpdated = true;
                } else {
                  this.hide();
                }
              }

              this.loading = false;
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this4 = this;

            this.templates.forEach(function (item) {
              switch (item.getType()) {
                case 'item':
                  _this4.itemTemplate = item.template;
                  break;

                case 'group':
                  _this4.groupTemplate = item.template;
                  break;

                case 'selectedItem':
                  _this4.selectedItemTemplate = item.template;
                  break;

                default:
                  _this4.itemTemplate = item.template;
                  break;
              }
            });
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
            this.filled = this.value && this.value != '';
            this.updateInputField();
            this.cd.markForCheck();
          }
        }, {
          key: "getOptionGroupChildren",
          value: function getOptionGroupChildren(optionGroup) {
            return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
          }
        }, {
          key: "getOptionGroupLabel",
          value: function getOptionGroupLabel(optionGroup) {
            return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup.label != undefined ? optionGroup.label : optionGroup;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onModelChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onModelTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(val) {
            this.disabled = val;
            this.cd.markForCheck();
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            var _this5 = this;

            // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
            if (!this.inputKeyDown && primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].isIE()) {
              return;
            }

            if (this.timeout) {
              clearTimeout(this.timeout);
            }

            var value = event.target.value;

            if (!this.multiple && !this.forceSelection) {
              this.onModelChange(value);
            }

            if (value.length === 0 && !this.multiple) {
              this.hide();
              this.onClear.emit(event);
              this.onModelChange(value);
            }

            if (value.length >= this.minLength) {
              this.timeout = setTimeout(function () {
                _this5.search(event, value);
              }, this.delay);
            } else {
              this.hide();
            }

            this.updateFilledState();
            this.inputKeyDown = false;
          }
        }, {
          key: "onInputClick",
          value: function onInputClick(event) {
            if (this.documentClickListener) {
              this.inputClick = true;
            }
          }
        }, {
          key: "search",
          value: function search(event, query) {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
              return;
            }

            this.loading = true;
            this.completeMethod.emit({
              originalEvent: event,
              query: query
            });
          }
        }, {
          key: "selectItem",
          value: function selectItem(option) {
            var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.forceSelectionUpdateModelTimeout) {
              clearTimeout(this.forceSelectionUpdateModelTimeout);
              this.forceSelectionUpdateModelTimeout = null;
            }

            if (this.multiple) {
              this.multiInputEL.nativeElement.value = '';
              this.value = this.value || [];

              if (!this.isSelected(option) || !this.unique) {
                this.value = [].concat(_toConsumableArray(this.value), [option]);
                this.onModelChange(this.value);
              }
            } else {
              this.inputEL.nativeElement.value = this.resolveFieldData(option);
              this.value = option;
              this.onModelChange(this.value);
            }

            this.onSelect.emit(option);
            this.updateFilledState();

            if (focus) {
              this.itemClicked = true;
              this.focusInput();
            }
          }
        }, {
          key: "show",
          value: function show() {
            if (this.multiInputEL || this.inputEL) {
              var hasFocus = this.multiple ? this.multiInputEL.nativeElement.ownerDocument.activeElement == this.multiInputEL.nativeElement : this.inputEL.nativeElement.ownerDocument.activeElement == this.inputEL.nativeElement;

              if (!this.overlayVisible && hasFocus) {
                this.overlayVisible = true;
              }
            }
          }
        }, {
          key: "onOverlayAnimationStart",
          value: function onOverlayAnimationStart(event) {
            switch (event.toState) {
              case 'visible':
                this.overlay = event.element;
                this.appendOverlay();

                if (this.autoZIndex) {
                  this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].zindex);
                }

                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                this.onShow.emit(event);
                break;

              case 'void':
                this.onOverlayHide();
                break;
            }
          }
        }, {
          key: "appendOverlay",
          value: function appendOverlay() {
            if (this.appendTo) {
              if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].appendChild(this.overlay, this.appendTo);

              if (!this.overlay.style.minWidth) {
                this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].getWidth(this.el.nativeElement.children[0]) + 'px';
              }
            }
          }
        }, {
          key: "resolveFieldData",
          value: function resolveFieldData(value) {
            var data = this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(value, this.field) : value;
            return data !== (false || undefined) ? data : '';
          }
        }, {
          key: "restoreOverlayAppend",
          value: function restoreOverlayAppend() {
            if (this.overlay && this.appendTo) {
              this.el.nativeElement.appendChild(this.overlay);
            }
          }
        }, {
          key: "alignOverlay",
          value: function alignOverlay() {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].absolutePosition(this.overlay, this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].relativePosition(this.overlay, this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement);
          }
        }, {
          key: "hide",
          value: function hide() {
            this.overlayVisible = false;
            this.cd.markForCheck();
          }
        }, {
          key: "handleDropdownClick",
          value: function handleDropdownClick(event) {
            if (!this.overlayVisible) {
              this.focusInput();
              var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
              if (this.dropdownMode === 'blank') this.search(event, '');else if (this.dropdownMode === 'current') this.search(event, queryValue);
              this.onDropdownClick.emit({
                originalEvent: event,
                query: queryValue
              });
            } else {
              this.hide();
            }
          }
        }, {
          key: "focusInput",
          value: function focusInput() {
            if (this.multiple) this.multiInputEL.nativeElement.focus();else this.inputEL.nativeElement.focus();
          }
        }, {
          key: "removeItem",
          value: function removeItem(item) {
            var itemIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].index(item);
            var removedValue = this.value[itemIndex];
            this.value = this.value.filter(function (val, i) {
              return i != itemIndex;
            });
            this.onModelChange(this.value);
            this.updateFilledState();
            this.onUnselect.emit(removedValue);
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            if (this.overlayVisible) {
              switch (event.which) {
                //down
                case 40:
                  if (this.group) {
                    var highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);

                    if (highlightItemIndex !== -1) {
                      var _nextItemIndex = highlightItemIndex.itemIndex + 1;

                      if (_nextItemIndex < this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex]).length) {
                        this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[_nextItemIndex];
                        this.highlightOptionChanged = true;
                      } else if (this.suggestions[highlightItemIndex.groupIndex + 1]) {
                        this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex + 1])[0];
                        this.highlightOptionChanged = true;
                      }
                    } else {
                      this.highlightOption = this.getOptionGroupChildren(this.suggestions[0])[0];
                    }
                  } else {
                    var _highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);

                    if (_highlightItemIndex != -1) {
                      var nextItemIndex = _highlightItemIndex + 1;

                      if (nextItemIndex != this.suggestions.length) {
                        this.highlightOption = this.suggestions[nextItemIndex];
                        this.highlightOptionChanged = true;
                      }
                    } else {
                      this.highlightOption = this.suggestions[0];
                    }
                  }

                  event.preventDefault();
                  break;
                //up

                case 38:
                  if (this.group) {
                    var _highlightItemIndex2 = this.findOptionGroupIndex(this.highlightOption, this.suggestions);

                    if (_highlightItemIndex2 !== -1) {
                      var prevItemIndex = _highlightItemIndex2.itemIndex - 1;

                      if (prevItemIndex >= 0) {
                        this.highlightOption = this.getOptionGroupChildren(this.suggestions[_highlightItemIndex2.groupIndex])[prevItemIndex];
                        this.highlightOptionChanged = true;
                      } else if (prevItemIndex < 0) {
                        var prevGroup = this.suggestions[_highlightItemIndex2.groupIndex - 1];

                        if (prevGroup) {
                          this.highlightOption = this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1];
                          this.highlightOptionChanged = true;
                        }
                      }
                    }
                  } else {
                    var _highlightItemIndex3 = this.findOptionIndex(this.highlightOption, this.suggestions);

                    if (_highlightItemIndex3 > 0) {
                      var _prevItemIndex = _highlightItemIndex3 - 1;

                      this.highlightOption = this.suggestions[_prevItemIndex];
                      this.highlightOptionChanged = true;
                    }
                  }

                  event.preventDefault();
                  break;
                //enter

                case 13:
                  if (this.highlightOption) {
                    this.selectItem(this.highlightOption);
                    this.hide();
                  }

                  event.preventDefault();
                  break;
                //escape

                case 27:
                  this.hide();
                  event.preventDefault();
                  break;
                //tab

                case 9:
                  if (this.highlightOption) {
                    this.selectItem(this.highlightOption);
                  }

                  this.hide();
                  break;
              }
            } else {
              if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
              }
            }

            if (this.multiple) {
              switch (event.which) {
                //backspace
                case 8:
                  if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                    this.value = _toConsumableArray(this.value);
                    var removedValue = this.value.pop();
                    this.onModelChange(this.value);
                    this.updateFilledState();
                    this.onUnselect.emit(removedValue);
                  }

                  break;
              }
            }

            this.inputKeyDown = true;
          }
        }, {
          key: "onKeyup",
          value: function onKeyup(event) {
            this.onKeyUp.emit(event);
          }
        }, {
          key: "onInputFocus",
          value: function onInputFocus(event) {
            if (!this.itemClicked && this.completeOnFocus) {
              var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
              this.search(event, queryValue);
            }

            this.focus = true;
            this.onFocus.emit(event);
            this.itemClicked = false;
          }
        }, {
          key: "onInputBlur",
          value: function onInputBlur(event) {
            this.focus = false;
            this.onModelTouched();
            this.onBlur.emit(event);
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(event) {
            var _this6 = this;

            if (this.forceSelection) {
              var valid = false;
              var inputValue = event.target.value.trim();

              if (this.suggestions) {
                var _iterator = _createForOfIteratorHelper(this.suggestions),
                    _step;

                try {
                  var _loop = function _loop() {
                    var suggestion = _step.value;
                    var itemValue = _this6.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(suggestion, _this6.field) : suggestion;

                    if (itemValue && inputValue === itemValue.trim()) {
                      valid = true;
                      _this6.forceSelectionUpdateModelTimeout = setTimeout(function () {
                        _this6.selectItem(suggestion, false);
                      }, 250);
                      return "break";
                    }
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _ret = _loop();

                    if (_ret === "break") break;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              if (!valid) {
                if (this.multiple) {
                  this.multiInputEL.nativeElement.value = '';
                } else {
                  this.value = null;
                  this.inputEL.nativeElement.value = '';
                }

                this.onClear.emit(event);
                this.onModelChange(this.value);
                this.updateFilledState();
              }
            }
          }
        }, {
          key: "onInputPaste",
          value: function onInputPaste(event) {
            this.onKeydown(event);
          }
        }, {
          key: "isSelected",
          value: function isSelected(val) {
            var selected = false;

            if (this.value && this.value.length) {
              for (var i = 0; i < this.value.length; i++) {
                if (primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].equals(this.value[i], val, this.dataKey)) {
                  selected = true;
                  break;
                }
              }
            }

            return selected;
          }
        }, {
          key: "findOptionIndex",
          value: function findOptionIndex(option, suggestions) {
            var index = -1;

            if (suggestions) {
              for (var i = 0; i < suggestions.length; i++) {
                if (primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].equals(option, suggestions[i])) {
                  index = i;
                  break;
                }
              }
            }

            return index;
          }
        }, {
          key: "findOptionGroupIndex",
          value: function findOptionGroupIndex(val, opts) {
            var groupIndex, itemIndex;

            if (opts) {
              for (var i = 0; i < opts.length; i++) {
                groupIndex = i;
                itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));

                if (itemIndex !== -1) {
                  break;
                }
              }
            }

            if (itemIndex !== -1) {
              return {
                groupIndex: groupIndex,
                itemIndex: itemIndex
              };
            } else {
              return -1;
            }
          }
        }, {
          key: "updateFilledState",
          value: function updateFilledState() {
            if (this.multiple) this.filled = this.value && this.value.length || this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '';else this.filled = this.inputFieldValue && this.inputFieldValue != '' || this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '';
            ;
          }
        }, {
          key: "updateInputField",
          value: function updateInputField() {
            var formattedValue = this.resolveFieldData(this.value);
            this.inputFieldValue = formattedValue;

            if (this.inputEL && this.inputEL.nativeElement) {
              this.inputEL.nativeElement.value = formattedValue;
            }

            this.updateFilledState();
          }
        }, {
          key: "bindDocumentClickListener",
          value: function bindDocumentClickListener() {
            var _this7 = this;

            if (!this.documentClickListener) {
              var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
              this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
                if (event.which === 3) {
                  return;
                }

                if (!_this7.inputClick && !_this7.isDropdownClick(event)) {
                  _this7.hide();
                }

                _this7.inputClick = false;

                _this7.cd.markForCheck();
              });
            }
          }
        }, {
          key: "isDropdownClick",
          value: function isDropdownClick(event) {
            if (this.dropdown) {
              var target = event.target;
              return target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement;
            } else {
              return false;
            }
          }
        }, {
          key: "unbindDocumentClickListener",
          value: function unbindDocumentClickListener() {
            if (this.documentClickListener) {
              this.documentClickListener();
              this.documentClickListener = null;
            }
          }
        }, {
          key: "bindDocumentResizeListener",
          value: function bindDocumentResizeListener() {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
          }
        }, {
          key: "unbindDocumentResizeListener",
          value: function unbindDocumentResizeListener() {
            if (this.documentResizeListener) {
              window.removeEventListener('resize', this.documentResizeListener);
              this.documentResizeListener = null;
            }
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            this.hide();
          }
        }, {
          key: "bindScrollListener",
          value: function bindScrollListener() {
            var _this8 = this;

            if (!this.scrollHandler) {
              this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_7__["ConnectedOverlayScrollHandler"](this.containerEL.nativeElement, function () {
                if (_this8.overlayVisible) {
                  _this8.hide();
                }
              });
            }

            this.scrollHandler.bindScrollListener();
          }
        }, {
          key: "unbindScrollListener",
          value: function unbindScrollListener() {
            if (this.scrollHandler) {
              this.scrollHandler.unbindScrollListener();
            }
          }
        }, {
          key: "onOverlayHide",
          value: function onOverlayHide() {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            this.onHide.emit();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.forceSelectionUpdateModelTimeout) {
              clearTimeout(this.forceSelectionUpdateModelTimeout);
              this.forceSelectionUpdateModelTimeout = null;
            }

            if (this.scrollHandler) {
              this.scrollHandler.destroy();
              this.scrollHandler = null;
            }

            this.restoreOverlayAppend();
            this.onOverlayHide();
          }
        }]);

        return AutoComplete;
      }();

      AutoComplete.ɵfac = function AutoComplete_Factory(t) {
        return new (t || AutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]));
      };

      AutoComplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AutoComplete,
        selectors: [["p-autoComplete"]],
        contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
          }
        },
        viewQuery: function AutoComplete_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEL = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEL = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiInputEL = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiContainerEL = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownButton = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function AutoComplete_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus && !ctx.disabled || ctx.overlayVisible);
          }
        },
        inputs: {
          minLength: "minLength",
          delay: "delay",
          type: "type",
          autoZIndex: "autoZIndex",
          baseZIndex: "baseZIndex",
          dropdownIcon: "dropdownIcon",
          unique: "unique",
          completeOnFocus: "completeOnFocus",
          scrollHeight: "scrollHeight",
          dropdownMode: "dropdownMode",
          showTransitionOptions: "showTransitionOptions",
          hideTransitionOptions: "hideTransitionOptions",
          autocomplete: "autocomplete",
          suggestions: "suggestions",
          disabled: "disabled",
          style: "style",
          panelStyle: "panelStyle",
          styleClass: "styleClass",
          panelStyleClass: "panelStyleClass",
          inputStyle: "inputStyle",
          inputId: "inputId",
          inputStyleClass: "inputStyleClass",
          placeholder: "placeholder",
          readonly: "readonly",
          maxlength: "maxlength",
          name: "name",
          required: "required",
          size: "size",
          appendTo: "appendTo",
          autoHighlight: "autoHighlight",
          forceSelection: "forceSelection",
          ariaLabel: "ariaLabel",
          ariaLabelledBy: "ariaLabelledBy",
          group: "group",
          field: "field",
          dropdown: "dropdown",
          multiple: "multiple",
          tabindex: "tabindex",
          dataKey: "dataKey",
          emptyMessage: "emptyMessage",
          autofocus: "autofocus",
          optionGroupChildren: "optionGroupChildren",
          optionGroupLabel: "optionGroupLabel"
        },
        outputs: {
          completeMethod: "completeMethod",
          onSelect: "onSelect",
          onUnselect: "onUnselect",
          onFocus: "onFocus",
          onBlur: "onBlur",
          onDropdownClick: "onDropdownClick",
          onClear: "onClear",
          onKeyUp: "onKeyUp",
          onShow: "onShow",
          onHide: "onHide"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([AUTOCOMPLETE_VALUE_ACCESSOR])],
        decls: 7,
        vars: 12,
        consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["class", "p-autocomplete-input p-inputtext p-component", "aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "ngStyle", "class", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste", 4, "ngIf"], ["class", "p-autocomplete-multiple-container p-component p-inputtext", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-autocomplete-loader pi pi-spinner pi-spin", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown", "pRipple", "", 3, "icon", "disabled", "click", 4, "ngIf"], [3, "ngClass", "max-height", "ngStyle", "class", 4, "ngIf"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 1, "p-autocomplete-input", "p-inputtext", "p-component", 3, "ngStyle", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste"], ["in", ""], [1, "p-autocomplete-multiple-container", "p-component", "p-inputtext", 3, "ngClass", "click"], ["multiContainer", ""], ["class", "p-autocomplete-token", 4, "ngFor", "ngForOf"], [1, "p-autocomplete-input-token"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "disabled", "readonly", "autocomplete", "ngStyle", "input", "click", "keydown", "keyup", "focus", "blur", "change", "paste"], ["multiIn", ""], [1, "p-autocomplete-token"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], ["class", "p-autocomplete-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-autocomplete-token-label"], [1, "p-autocomplete-token-icon", "pi", "pi-times-circle", 3, "click"], [1, "p-autocomplete-loader", "pi", "pi-spinner", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", 3, "icon", "disabled", "click"], ["ddBtn", ""], ["panel", ""], ["role", "listbox", 1, "p-autocomplete-items"], [4, "ngIf"], ["itemslist", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-autocomplete-item-group"], ["role", "option", "class", "p-autocomplete-item", "pRipple", "", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], ["class", "p-autocomplete-emptymessage p-autocomplete-item", 4, "ngIf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "id", "click"], [1, "p-autocomplete-emptymessage", "p-autocomplete-item"]],
        template: function AutoComplete_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_input_2_Template, 2, 26, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_ul_3_Template, 6, 23, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_i_4_Template, 1, 0, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_button_5_Template, 2, 3, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutoComplete_div_6_Template, 7, 16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c13, ctx.dropdown, ctx.multiple))("ngStyle", ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdown);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"]],
        styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{align-items:center;cursor:text;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            transform: 'scaleY(0.8)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }))])])]
        },
        changeDetection: 0
      });

      AutoComplete.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }];
      };

      AutoComplete.propDecorators = {
        minLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        panelStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        panelStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoHighlight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        forceSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabelledBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unique: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        completeOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        completeMethod: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onUnselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDropdownClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        emptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTransitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideTransitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        optionGroupChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        optionGroupLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }],
        inputEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['in']
        }],
        multiInputEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['multiIn']
        }],
        multiContainerEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['multiContainer']
        }],
        dropdownButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ddBtn']
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
        }],
        suggestions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoComplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'p-autoComplete',
            template: "\n        <span #container [ngClass]=\"{'p-autocomplete p-component':true,'p-autocomplete-dd':dropdown,'p-autocomplete-multiple':multiple}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input *ngIf=\"!multiple\" #in [attr.type]=\"type\" [attr.id]=\"inputId\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [autocomplete]=\"autocomplete\" [attr.required]=\"required\" [attr.name]=\"name\"\n            class=\"p-autocomplete-input p-inputtext p-component\" [ngClass]=\"{'p-autocomplete-dd-input':dropdown,'p-disabled': disabled}\" [value]=\"inputFieldValue\" aria-autocomplete=\"list\" [attr.aria-controls]=\"listId\" role=\"searchbox\" [attr.aria-expanded]=\"overlayVisible\" aria-haspopup=\"true\" [attr.aria-activedescendant]=\"'p-highlighted-option'\"\n            (click)=\"onInputClick($event)\" (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\" [attr.autofocus]=\"autofocus\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\"\n            [attr.placeholder]=\"placeholder\" [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [readonly]=\"readonly\" [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-required]=\"required\"\n            ><ul *ngIf=\"multiple\" #multiContainer class=\"p-autocomplete-multiple-container p-component p-inputtext\" [ngClass]=\"{'p-disabled':disabled,'p-focus':focus}\" (click)=\"multiIn.focus()\">\n                <li #token *ngFor=\"let val of value\" class=\"p-autocomplete-token\">\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: val}\"></ng-container>\n                    <span *ngIf=\"!selectedItemTemplate\" class=\"p-autocomplete-token-label\">{{resolveFieldData(val)}}</span>\n                    <span  class=\"p-autocomplete-token-icon pi pi-times-circle\" (click)=\"removeItem(token)\" *ngIf=\"!disabled && !readonly\"></span>\n                </li>\n                <li class=\"p-autocomplete-input-token\">\n                    <input #multiIn [attr.type]=\"type\" [attr.id]=\"inputId\" [disabled]=\"disabled\" [attr.placeholder]=\"(value&&value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" [attr.maxlength]=\"maxlength\" (input)=\"onInput($event)\"  (click)=\"onInputClick($event)\"\n                            (keydown)=\"onKeydown($event)\" [readonly]=\"readonly\" (keyup)=\"onKeyup($event)\" [attr.autofocus]=\"autofocus\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\" [autocomplete]=\"autocomplete\"\n                            [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-required]=\"required\"\n                            aria-autocomplete=\"list\" [attr.aria-controls]=\"listId\" role=\"searchbox\" [attr.aria-expanded]=\"overlayVisible\" aria-haspopup=\"true\" [attr.aria-activedescendant]=\"'p-highlighted-option'\">\n                </li>\n            </ul>\n            <i *ngIf=\"loading\" class=\"p-autocomplete-loader pi pi-spinner pi-spin\"></i><button #ddBtn type=\"button\" pButton [icon]=\"dropdownIcon\" class=\"p-autocomplete-dropdown\" [disabled]=\"disabled\" pRipple\n                (click)=\"handleDropdownClick($event)\" *ngIf=\"dropdown\" [attr.tabindex]=\"tabindex\"></button>\n            <div #panel *ngIf=\"overlayVisible\" [ngClass]=\"['p-autocomplete-panel p-component']\" [style.max-height]=\"scrollHeight\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\"\n                [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <ul role=\"listbox\" [attr.id]=\"listId\" class=\"p-autocomplete-items\">\n                    <ng-container *ngIf=\"group\">\n                        <ng-template ngFor let-optgroup [ngForOf]=\"suggestions\">\n                            <li class=\"p-autocomplete-item-group\">\n                                <span *ngIf=\"!groupTemplate\">{{getOptionGroupLabel(optgroup)||'empty'}}</span>\n                                <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                            </li>\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}\"></ng-container>\n                        </ng-template>\n                    </ng-container>\n                    <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: suggestions}\"></ng-container>\n                    </ng-container>\n                    <ng-template #itemslist let-suggestionsToDisplay>\n                        <li role=\"option\" *ngFor=\"let option of suggestionsToDisplay; let idx = index\" class=\"p-autocomplete-item\" pRipple [ngClass]=\"{'p-highlight': (option === highlightOption)}\" [id]=\"highlightOption == option ? 'p-highlighted-option':''\" (click)=\"selectItem(option)\">\n                            <span *ngIf=\"!itemTemplate\">{{resolveFieldData(option)}}</span>\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: idx}\"></ng-container>\n                        </li>\n                        <li *ngIf=\"noResults && emptyMessage\" class=\"p-autocomplete-emptymessage p-autocomplete-item\">{{emptyMessage}}</li>\n                    </ng-template>\n                </ul>\n            </div>\n        </span>\n    ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              transform: 'scaleY(0.8)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0
            }))])])],
            host: {
              '[class.p-inputwrapper-filled]': 'filled',
              '[class.p-inputwrapper-focus]': '(focus && !disabled) || overlayVisible'
            },
            providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{align-items:center;cursor:text;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
          }];
        }, {
          minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropdownIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unique: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          completeOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          completeMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onUnselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onDropdownClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropdownMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          suggestions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          panelStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          panelStyleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputStyleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHighlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          forceSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ariaLabelledBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          optionGroupChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          optionGroupLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerEL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
          }],
          inputEL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['in']
          }],
          multiInputEL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['multiIn']
          }],
          multiContainerEL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['multiContainer']
          }],
          dropdownButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ddBtn']
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
          }]
        });
      })();

      var AutoCompleteModule = function AutoCompleteModule() {
        _classCallCheck(this, AutoCompleteModule);
      };

      AutoCompleteModule.ɵfac = function AutoCompleteModule_Factory(t) {
        return new (t || AutoCompleteModule)();
      };

      AutoCompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AutoCompleteModule
      });
      AutoCompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutoCompleteModule, {
          declarations: function declarations() {
            return [AutoComplete];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]];
          },
          exports: function exports() {
            return [AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]],
            exports: [AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [AutoComplete]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=primeng-autocomplete.js.map

      /***/

    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      "I65O");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "BRtN");
      /* harmony import */


      var _pages_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/auth.component */
      "IveI");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _pages_forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/forgot-pwd/forgot-pwd.component */
      "tRCS");
      /* harmony import */


      var _pages_reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/reset-pwd/reset-pwd.component */
      "ehTH");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-recaptcha */
      "jCJ1");
      /* harmony import */


      var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/autocomplete */
      "V5BG");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaFormsModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _pages_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], _pages_forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPwdComponent"], _pages_reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_6__["ResetPwdComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaFormsModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"]]
        });
      })();
      /***/

    },

    /***/
    "aP6Q":
    /*!*************************************!*\
      !*** ./src/app/auth/pages/index.ts ***!
      \*************************************/

    /*! exports provided: SigninComponent, SignupComponent, ForgotPwdComponent, ResetPwdComponent, AuthComponent */

    /***/
    function aP6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin/signin.component */
      "I65O");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"];
      });
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup/signup.component */
      "BRtN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"];
      });
      /* harmony import */


      var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-pwd/forgot-pwd.component */
      "tRCS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForgotPwdComponent", function () {
        return _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPwdComponent"];
      });
      /* harmony import */


      var _reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-pwd/reset-pwd.component */
      "ehTH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResetPwdComponent", function () {
        return _reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_3__["ResetPwdComponent"];
      });
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.component */
      "IveI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"];
      });
      /***/

    },

    /***/
    "ehTH":
    /*!*************************************************************!*\
      !*** ./src/app/auth/pages/reset-pwd/reset-pwd.component.ts ***!
      \*************************************************************/

    /*! exports provided: ResetPwdComponent */

    /***/
    function ehTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPwdComponent", function () {
        return ResetPwdComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _CustomErrorStateMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../CustomErrorStateMatcher */
      "Ct1k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core */
      "ey9i");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ResetPwdComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPwdComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPwdComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password do not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPwdComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Re-enter password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPwdComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please fill out this field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var ResetPwdComponent = /*#__PURE__*/function () {
        function ResetPwdComponent(router, authService) {
          _classCallCheck(this, ResetPwdComponent);

          this.router = router;
          this.authService = authService;
          this.matcher = new _CustomErrorStateMatcher__WEBPACK_IMPORTED_MODULE_1__["CustomErrorStateMatcher"]();
          this.account = this.authService.forgotAccount;
          this.resetPwdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            verifyCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
            confirmPwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
          }); //}, { validators: this.checkPassword});
        }

        _createClass(ResetPwdComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkPassword",
          value: function checkPassword(group) {
            var password = group.get('pwd').value;
            var confirmPassword = group.get('confirmPwd').value;
            return password === confirmPassword ? null : {
              'notSame': true
            };
          }
        }, {
          key: "f",
          get: function get() {
            return this.resetPwdForm.controls;
          }
        }, {
          key: "resetPwd",
          value: function resetPwd() {
            var _this9 = this;

            var data = this.resetPwdForm.value;

            if (!this.resetPwdForm.valid) {
              return;
            }

            this.authService.resetPassword({
              email: this.account.email,
              verifyCode: data.verifyCode,
              newPwd: data.pwd
            }).subscribe(function (user) {
              _this9.router.navigate(['/home']);
            }, function (err) {// this.message = new ErrorMessage(err);
            });
          }
        }]);

        return ResetPwdComponent;
      }();

      ResetPwdComponent.ɵfac = function ResetPwdComponent_Factory(t) {
        return new (t || ResetPwdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      ResetPwdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ResetPwdComponent,
        selectors: [["crm-reset-pwd"]],
        decls: 28,
        vars: 11,
        consts: [[1, "resetpwd-form", 3, "formGroup"], ["matInput", "", "placeholder", "Password", "formControlName", "pwd", "type", "password", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Re-enter password", "formControlName", "confirmPwd", "type", "password", "required", "", 3, "errorStateMatcher"], [1, "field"], ["matInput", "", "placeholder", "Enter code", "type", "text", "formControlName", "verifyCode"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function ResetPwdComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create new password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "We'll ask for this password whenever you sign in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ResetPwdComponent_mat_error_10_Template, 2, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ResetPwdComponent_mat_error_11_Template, 4, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ResetPwdComponent_mat_error_14_Template, 2, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ResetPwdComponent_mat_error_15_Template, 4, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ResetPwdComponent_mat_error_20_Template, 2, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Resend code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-card-actions", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPwdComponent_Template_button_click_24_listener() {
              return ctx.resetPwd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Save Changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Secure password tips: Use at least 8 characters, a combination of numbers and letters is best. Do not use the same password you have used with us previously. Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained. Do not use the same password for multiple online accounts.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.resetPwdForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.pwd.hasError("minlength") && !ctx.f.pwd.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.pwd.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.resetPwdForm.hasError("notSame") && !ctx.f.confirmPwd.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.confirmPwd.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("For your security, we need to verify your identity. We've sent a code to the email ", ctx.account.email, ". Please enter it below.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.f.verifyCode.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.verifyCode.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.resetPwdForm.invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".resetpwd-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVzZXQtcHdkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InJlc2V0LXB3ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldHB3ZC1mb3JtID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "jCJ1":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js ***!
      \*************************************************************************/

    /*! exports provided: RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_NONCE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaComponent, RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaV3Module, RecaptchaValueAccessorDirective, ɵa */

    /***/
    function jCJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_BASE_URL", function () {
        return RECAPTCHA_BASE_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_LANGUAGE", function () {
        return RECAPTCHA_LANGUAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_NONCE", function () {
        return RECAPTCHA_NONCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SETTINGS", function () {
        return RECAPTCHA_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_V3_SITE_KEY", function () {
        return RECAPTCHA_V3_SITE_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function () {
        return ReCaptchaV3Service;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function () {
        return RecaptchaComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaFormsModule", function () {
        return RecaptchaFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaLoaderService", function () {
        return RecaptchaLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function () {
        return RecaptchaModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaV3Module", function () {
        return RecaptchaV3Module;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaValueAccessorDirective", function () {
        return RecaptchaValueAccessorDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return RecaptchaCommonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
        window.ng2recaptchaloaded = function () {
          onLoaded(grecaptcha);
        };

        var script = document.createElement("script");
        script.innerHTML = "";
        var baseUrl = url || "https://www.google.com/recaptcha/api.js";
        script.src = "".concat(baseUrl, "?render=").concat(renderMode, "&onload=ng2recaptchaloaded").concat(urlParams);

        if (nonce) {
          script.nonce = nonce;
        }

        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      var RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-language");
      var RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-base-url");
      var RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-nonce-tag");
      var RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-settings");
      var RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-v3-site-key");

      var RecaptchaLoaderService = /*#__PURE__*/function () {
        function RecaptchaLoaderService( // eslint-disable-next-line @typescript-eslint/ban-types
        platformId, language, baseUrl, nonce, v3SiteKey) {
          _classCallCheck(this, RecaptchaLoaderService);

          this.platformId = platformId;
          this.language = language;
          this.baseUrl = baseUrl;
          this.nonce = nonce;
          this.v3SiteKey = v3SiteKey;
          this.init();
          this.ready = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /** @internal */


        _createClass(RecaptchaLoaderService, [{
          key: "init",
          value: function init() {
            if (RecaptchaLoaderService.ready) {
              return;
            }

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
              RecaptchaLoaderService.ready = subject;
              var langParam = this.language ? "&hl=" + this.language : "";
              var renderMode = this.v3SiteKey || "explicit";
              loadScript(renderMode, function (grecaptcha) {
                return subject.next(grecaptcha);
              }, langParam, this.baseUrl, this.nonce);
            }
          }
        }]);

        return RecaptchaLoaderService;
      }();

      RecaptchaLoaderService.ɵfac = function RecaptchaLoaderService_Factory(t) {
        return new (t || RecaptchaLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY, 8));
      };

      RecaptchaLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecaptchaLoaderService,
        factory: RecaptchaLoaderService.ɵfac
      });
      /**
       * @internal
       * @nocollapse
       */

      RecaptchaLoaderService.ready = null;

      RecaptchaLoaderService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_LANGUAGE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_BASE_URL]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_NONCE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_V3_SITE_KEY]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_LANGUAGE]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_BASE_URL]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_NONCE]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_V3_SITE_KEY]
            }]
          }];
        }, null);
      })();

      var nextId = 0;

      var RecaptchaComponent = /*#__PURE__*/function () {
        function RecaptchaComponent(elementRef, loader, zone, settings) {
          _classCallCheck(this, RecaptchaComponent);

          this.elementRef = elementRef;
          this.loader = loader;
          this.zone = zone;
          this.id = "ngrecaptcha-".concat(nextId++);
          this.errorMode = "default";
          this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // The rename will happen a bit later
          // eslint-disable-next-line @angular-eslint/no-output-native

          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
          }
        }

        _createClass(RecaptchaComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this10 = this;

            this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
              if (grecaptcha != null && grecaptcha.render instanceof Function) {
                _this10.grecaptcha = grecaptcha;

                _this10.renderRecaptcha();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // reset the captcha to ensure it does not leave anything behind
            // after the component is no longer needed
            this.grecaptchaReset();

            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * Executes the invisible recaptcha.
           * Does nothing if component's size is not set to "invisible".
           */

        }, {
          key: "execute",
          value: function execute() {
            if (this.size !== "invisible") {
              return;
            }

            if (this.widget != null) {
              this.grecaptcha.execute(this.widget);
            } else {
              // delay execution of recaptcha until it actually renders
              this.executeRequested = true;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.widget != null) {
              if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
              }

              this.grecaptchaReset();
            }
          }
          /** @internal */

        }, {
          key: "expired",
          value: function expired() {
            this.resolved.emit(null);
          }
          /** @internal */

        }, {
          key: "errored",
          value: function errored(args) {
            this.error.emit(args);
          }
          /** @internal */

        }, {
          key: "captchaResponseCallback",
          value: function captchaResponseCallback(response) {
            this.resolved.emit(response);
          }
          /** @internal */

        }, {
          key: "grecaptchaReset",
          value: function grecaptchaReset() {
            var _this11 = this;

            if (this.widget != null) {
              this.zone.runOutsideAngular(function () {
                return _this11.grecaptcha.reset(_this11.widget);
              });
            }
          }
          /** @internal */

        }, {
          key: "renderRecaptcha",
          value: function renderRecaptcha() {
            var _this12 = this;

            // This `any` can be removed after @types/grecaptcha get updated
            var renderOptions = {
              badge: this.badge,
              callback: function callback(response) {
                _this12.zone.run(function () {
                  return _this12.captchaResponseCallback(response);
                });
              },
              "expired-callback": function expiredCallback() {
                _this12.zone.run(function () {
                  return _this12.expired();
                });
              },
              sitekey: this.siteKey,
              size: this.size,
              tabindex: this.tabIndex,
              theme: this.theme,
              type: this.type
            };

            if (this.errorMode === "handled") {
              renderOptions["error-callback"] = function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this12.zone.run(function () {
                  return _this12.errored(args);
                });
              };
            }

            this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);

            if (this.executeRequested === true) {
              this.executeRequested = false;
              this.execute();
            }
          }
        }]);

        return RecaptchaComponent;
      }();

      RecaptchaComponent.ɵfac = function RecaptchaComponent_Factory(t) {
        return new (t || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RECAPTCHA_SETTINGS, 8));
      };

      RecaptchaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecaptchaComponent,
        selectors: [["re-captcha"]],
        hostVars: 1,
        hostBindings: function RecaptchaComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id",
          errorMode: "errorMode",
          siteKey: "siteKey",
          theme: "theme",
          type: "type",
          size: "size",
          badge: "badge",
          tabIndex: "tabIndex"
        },
        outputs: {
          resolved: "resolved",
          error: "error"
        },
        exportAs: ["reCaptcha"],
        decls: 0,
        vars: 0,
        template: function RecaptchaComponent_Template(rf, ctx) {},
        encapsulation: 2
      });

      RecaptchaComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RecaptchaLoaderService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_SETTINGS]
          }]
        }];
      };

      RecaptchaComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["attr.id"]
        }],
        siteKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        badge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        errorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resolved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            exportAs: "reCaptcha",
            selector: "re-captcha",
            template: ""
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: RecaptchaLoaderService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_SETTINGS]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.id"]
          }],
          errorMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          resolved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          siteKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          badge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var RecaptchaCommonModule = function RecaptchaCommonModule() {
        _classCallCheck(this, RecaptchaCommonModule);
      };

      RecaptchaCommonModule.ɵfac = function RecaptchaCommonModule_Factory(t) {
        return new (t || RecaptchaCommonModule)();
      };

      RecaptchaCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RecaptchaCommonModule
      });
      RecaptchaCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecaptchaCommonModule, {
          declarations: [RecaptchaComponent],
          exports: [RecaptchaComponent]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [RecaptchaComponent],
            exports: [RecaptchaComponent]
          }]
        }], null, null);
      })();

      var RecaptchaModule = function RecaptchaModule() {
        _classCallCheck(this, RecaptchaModule);
      };

      RecaptchaModule.ɵfac = function RecaptchaModule_Factory(t) {
        return new (t || RecaptchaModule)();
      };

      RecaptchaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RecaptchaModule
      });
      RecaptchaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [RecaptchaLoaderService],
        imports: [[RecaptchaCommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecaptchaModule, {
          imports: [RecaptchaCommonModule],
          exports: [RecaptchaComponent]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [RecaptchaComponent],
            imports: [RecaptchaCommonModule],
            providers: [RecaptchaLoaderService]
          }]
        }], null, null);
      })();
      /**
       * The main service for working with reCAPTCHA v3 APIs.
       *
       * Use the `execute` method for executing a single action, and
       * `onExecute` observable for listening to all actions at once.
       */


      var ReCaptchaV3Service = /*#__PURE__*/function () {
        function ReCaptchaV3Service(zone, siteKey, // eslint-disable-next-line @typescript-eslint/ban-types
        platformId, baseUrl, nonce, language) {
          var _this13 = this;

          _classCallCheck(this, ReCaptchaV3Service);

          /** @internal */
          this.onLoadComplete = function (grecaptcha) {
            _this13.grecaptcha = grecaptcha;

            if (_this13.actionBacklog && _this13.actionBacklog.length > 0) {
              _this13.actionBacklog.forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    action = _ref2[0],
                    subject = _ref2[1];

                return _this13.executeActionWithSubject(action, subject);
              });

              _this13.actionBacklog = undefined;
            }
          };

          this.zone = zone;
          this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
          this.siteKey = siteKey;
          this.nonce = nonce;
          this.language = language;
          this.baseUrl = baseUrl;
          this.init();
        }

        _createClass(ReCaptchaV3Service, [{
          key: "onExecute",
          get: function get() {
            if (!this.onExecuteSubject) {
              this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              this.onExecuteObservable = this.onExecuteSubject.asObservable();
            }

            return this.onExecuteObservable;
          }
        }, {
          key: "onExecuteError",
          get: function get() {
            if (!this.onExecuteErrorSubject) {
              this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
            }

            return this.onExecuteErrorObservable;
          }
          /**
           * Executes the provided `action` with reCAPTCHA v3 API.
           * Use the emitted token value for verification purposes on the backend.
           *
           * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
           * https://developers.google.com/recaptcha/docs/v3.
           *
           * @param {string} action the action to execute
           * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
           * The returned `Observable` completes immediately after emitting a value.
           */

        }, {
          key: "execute",
          value: function execute(action) {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

            if (this.isBrowser) {
              if (!this.grecaptcha) {
                // todo: add to array of later executions
                if (!this.actionBacklog) {
                  this.actionBacklog = [];
                }

                this.actionBacklog.push([action, subject]);
              } else {
                this.executeActionWithSubject(action, subject);
              }
            }

            return subject.asObservable();
          }
          /** @internal */

        }, {
          key: "executeActionWithSubject",
          value: function executeActionWithSubject(action, subject) {
            var _this14 = this;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var onError = function onError(error) {
              _this14.zone.run(function () {
                subject.error(error);

                if (_this14.onExecuteErrorSubject) {
                  // We don't know any better at this point, unfortunately, so have to resort to `any`
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  _this14.onExecuteErrorSubject.next({
                    action: action,
                    error: error
                  });
                }
              });
            };

            this.zone.runOutsideAngular(function () {
              try {
                _this14.grecaptcha.execute(_this14.siteKey, {
                  action: action
                }).then(function (token) {
                  _this14.zone.run(function () {
                    subject.next(token);
                    subject.complete();

                    if (_this14.onExecuteSubject) {
                      _this14.onExecuteSubject.next({
                        action: action,
                        token: token
                      });
                    }
                  });
                }, onError);
              } catch (e) {
                onError(e);
              }
            });
          }
          /** @internal */

        }, {
          key: "init",
          value: function init() {
            if (this.isBrowser) {
              if ("grecaptcha" in window) {
                this.grecaptcha = grecaptcha;
              } else {
                var langParam = this.language ? "&hl=" + this.language : "";
                loadScript(this.siteKey, this.onLoadComplete, langParam, this.baseUrl, this.nonce);
              }
            }
          }
        }]);

        return ReCaptchaV3Service;
      }();

      ReCaptchaV3Service.ɵfac = function ReCaptchaV3Service_Factory(t) {
        return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8));
      };

      ReCaptchaV3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReCaptchaV3Service,
        factory: ReCaptchaV3Service.ɵfac
      });

      ReCaptchaV3Service.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_V3_SITE_KEY]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_BASE_URL]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_NONCE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_LANGUAGE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_V3_SITE_KEY]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_BASE_URL]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_NONCE]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RECAPTCHA_LANGUAGE]
            }]
          }];
        }, null);
      })();

      var RecaptchaV3Module = function RecaptchaV3Module() {
        _classCallCheck(this, RecaptchaV3Module);
      };

      RecaptchaV3Module.ɵfac = function RecaptchaV3Module_Factory(t) {
        return new (t || RecaptchaV3Module)();
      };

      RecaptchaV3Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RecaptchaV3Module
      });
      RecaptchaV3Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [ReCaptchaV3Service]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaV3Module, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [ReCaptchaV3Service]
          }]
        }], null, null);
      })();

      var RecaptchaValueAccessorDirective = /*#__PURE__*/function () {
        function RecaptchaValueAccessorDirective(host) {
          _classCallCheck(this, RecaptchaValueAccessorDirective);

          this.host = host;
        }

        _createClass(RecaptchaValueAccessorDirective, [{
          key: "writeValue",
          value: function writeValue(value) {
            if (!value) {
              this.host.reset();
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "onResolve",
          value: function onResolve($event) {
            if (this.onChange) {
              this.onChange($event);
            }

            if (this.onTouched) {
              this.onTouched();
            }
          }
        }]);

        return RecaptchaValueAccessorDirective;
      }();

      RecaptchaValueAccessorDirective.ɵfac = function RecaptchaValueAccessorDirective_Factory(t) {
        return new (t || RecaptchaValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaComponent));
      };

      RecaptchaValueAccessorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RecaptchaValueAccessorDirective,
        selectors: [["re-captcha", "formControlName", ""], ["re-captcha", "formControl", ""], ["re-captcha", "ngModel", ""]],
        hostBindings: function RecaptchaValueAccessorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function RecaptchaValueAccessorDirective_resolved_HostBindingHandler($event) {
              return ctx.onResolve($event);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          // tslint:disable-next-line:no-forward-ref
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return RecaptchaValueAccessorDirective;
          })
        }])]
      });

      RecaptchaValueAccessorDirective.ctorParameters = function () {
        return [{
          type: RecaptchaComponent
        }];
      };

      RecaptchaValueAccessorDirective.propDecorators = {
        onResolve: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["resolved", ["$event"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaValueAccessorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            providers: [{
              multi: true,
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              // tslint:disable-next-line:no-forward-ref
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return RecaptchaValueAccessorDirective;
              })
            }],
            // tslint:disable-next-line:directive-selector
            selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]"
          }]
        }], function () {
          return [{
            type: RecaptchaComponent
          }];
        }, {
          onResolve: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["resolved", ["$event"]]
          }]
        });
      })();

      var RecaptchaFormsModule = function RecaptchaFormsModule() {
        _classCallCheck(this, RecaptchaFormsModule);
      };

      RecaptchaFormsModule.ɵfac = function RecaptchaFormsModule_Factory(t) {
        return new (t || RecaptchaFormsModule)();
      };

      RecaptchaFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RecaptchaFormsModule
      });
      RecaptchaFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], RecaptchaCommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecaptchaFormsModule, {
          declarations: function declarations() {
            return [RecaptchaValueAccessorDirective];
          },
          imports: function imports() {
            return [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], RecaptchaCommonModule];
          },
          exports: function exports() {
            return [RecaptchaValueAccessorDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [RecaptchaValueAccessorDirective],
            exports: [RecaptchaValueAccessorDirective],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], RecaptchaCommonModule]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-recaptcha.js.map

      /***/

    },

    /***/
    "tRCS":
    /*!***************************************************************!*\
      !*** ./src/app/auth/pages/forgot-pwd/forgot-pwd.component.ts ***!
      \***************************************************************/

    /*! exports provided: ForgotPwdComponent */

    /***/
    function tRCS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPwdComponent", function () {
        return ForgotPwdComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core */
      "ey9i");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ForgotPwdComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ForgotPwdComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ForgotPwdComponent = /*#__PURE__*/function () {
        function ForgotPwdComponent(fb, router, authService) {
          _classCallCheck(this, ForgotPwdComponent);

          this.fb = fb;
          this.router = router;
          this.authService = authService;
          this.forgotForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]]
          });
        }

        _createClass(ForgotPwdComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "f",
          get: function get() {
            return this.forgotForm.controls;
          }
        }, {
          key: "resetPwd",
          value: function resetPwd() {
            var _this15 = this;

            var data = this.forgotForm.value;

            if (this.forgotForm.invalid) {
              return;
            }

            this.authService.forgotPassword(data).subscribe(function (result) {
              _this15.authService.forgotAccount = data;

              _this15.router.navigate(['/auth', 'resetpwd']);

              console.log(result);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ForgotPwdComponent;
      }();

      ForgotPwdComponent.ɵfac = function ForgotPwdComponent_Factory(t) {
        return new (t || ForgotPwdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ForgotPwdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ForgotPwdComponent,
        selectors: [["crm-forgot-pwd"]],
        decls: 15,
        vars: 4,
        consts: [[1, "forgot-form", 3, "formGroup"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], [4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function ForgotPwdComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Password assistance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Enter the email address associated with your account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ForgotPwdComponent_mat_error_10_Template, 2, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ForgotPwdComponent_mat_error_11_Template, 4, 0, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-actions", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPwdComponent_Template_button_click_13_listener() {
              return ctx.resetPwd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forgotForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.email.hasError("email") && !ctx.f.email.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.email.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.forgotForm.invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
        styles: [".forgot-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZ290LXB3ZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJmb3Jnb3QtcHdkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdC1mb3JtID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map