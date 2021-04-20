(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "/kDx":
    /*!***********************************************************************************!*\
      !*** ./src/app/admin/components/image-upload-item/image-upload-item.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ImageUploadItemComponent */

    /***/
    function kDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploadItemComponent", function () {
        return ImageUploadItemComponent;
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


      var _shared_pipes_imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/pipes/imageurl2srcset.pipe */
      "/EE8");

      function ImageUploadItemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "imageurl2srcset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "assets/" + ctx_r0.status.respone.url["default"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcset", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.status.respone.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ImageUploadItemComponent_i_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploadItemComponent_i_2_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ImageUploadItemComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ImageUploadItemComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r3.status.progress, "%");
        }
      }

      var ImageUploadItemComponent = /*#__PURE__*/function () {
        function ImageUploadItemComponent() {
          _classCallCheck(this, ImageUploadItemComponent);

          this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isHighlighted = false;
          this.isDeleting = false;
        }

        _createClass(ImageUploadItemComponent, [{
          key: "isUploading",
          get: function get() {
            if (!this.status.ok) {
              return false;
            }

            return this.status.progress < 100;
          }
        }, {
          key: "isUploaded",
          get: function get() {
            return this.status.done;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onDelete",
          value: function onDelete() {
            this.isDeleting = true;
            this.deleted.emit(this.status);
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.isHighlighted = true;
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.isHighlighted = false;
          }
        }]);

        return ImageUploadItemComponent;
      }();

      ImageUploadItemComponent.ɵfac = function ImageUploadItemComponent_Factory(t) {
        return new (t || ImageUploadItemComponent)();
      };

      ImageUploadItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageUploadItemComponent,
        selectors: [["crm-image-upload-item"]],
        hostBindings: function ImageUploadItemComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ImageUploadItemComponent_mouseenter_HostBindingHandler() {
              return ctx.onMouseEnter();
            })("mouseleave", function ImageUploadItemComponent_mouseleave_HostBindingHandler() {
              return ctx.onMouseLeave();
            });
          }
        },
        inputs: {
          status: "status"
        },
        outputs: {
          deleted: "deleted"
        },
        decls: 5,
        vars: 4,
        consts: [[1, "upload-item"], ["class", "image", 4, "ngIf"], ["class", "delete red link icon", 3, "click", 4, "ngIf"], ["class", "ui active inverted dimmer", 4, "ngIf"], ["class", "ui bottom attached progress", 4, "ngIf"], [1, "image"], ["sizes", "150px", 3, "src", "srcset"], [1, "delete", "red", "link", "icon", 3, "click"], [1, "ui", "active", "inverted", "dimmer"], [1, "ui", "small", "loader"], [1, "ui", "bottom", "attached", "progress"], [1, "bar"]],
        template: function ImageUploadItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageUploadItemComponent_div_1_Template, 3, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageUploadItemComponent_i_2_Template, 1, 0, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageUploadItemComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageUploadItemComponent_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUploaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHighlighted && !ctx.isDeleting && !ctx.isUploading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDeleting || !ctx.isUploading && !ctx.isUploaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUploading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        pipes: [_shared_pipes_imageurl2srcset_pipe__WEBPACK_IMPORTED_MODULE_2__["Imageurl2srcsetPipe"]],
        styles: [".upload-item[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  box-shadow: 1px 1px 3px 0 #f2f2f2;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(to top, #fafafa 0, #fdfdfd 20%, #fff 60%);\n  width: 100%;\n  padding-top: 100%;\n  \n  position: relative;\n}\n.upload-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.upload-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.upload-item[_ngcontent-%COMP%]   .delete.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 0px;\n  z-index: 1001;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtdXBsb2FkLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFLQSwyRUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUFtQixxQkFBQTtFQUNuQixrQkFBQTtBQUVGO0FBQUU7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFFTjtBQURNO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHVjtBQUNFO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ04iLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMCAjZjJmMmYyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChib3R0b20sI2ZhZmFmYSAwLCNmZGZkZmQgMjAlLCNmZmYgNjAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChib3R0b20sI2ZhZmFmYSAwLCNmZGZkZmQgMjAlLCNmZmYgNjAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCNmYWZhZmEgMCwjZmRmZGZkIDIwJSwjZmZmIDYwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsY29sb3Itc3RvcCgwLCNmYWZhZmEpLGNvbG9yLXN0b3AoLjIsI2ZkZmRmZCksY29sb3Itc3RvcCguNiwjZmZmKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjZmFmYWZhIDAsI2ZkZmRmZCAyMCUsI2ZmZiA2MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMDAlOyAvKiAxOjEgQXNwZWN0IFJhdGlvICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogIGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZS5pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgei1pbmRleDogMTAwMTtcclxuICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "2art":
    /*!************************************************************************!*\
      !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js ***!
      \************************************************************************/

    /*! exports provided: Galleria, GalleriaContent, GalleriaItem, GalleriaItemSlot, GalleriaModule, GalleriaThumbnails */

    /***/
    function art(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Galleria", function () {
        return Galleria;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleriaContent", function () {
        return GalleriaContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleriaItem", function () {
        return GalleriaItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function () {
        return GalleriaItemSlot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleriaModule", function () {
        return GalleriaModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function () {
        return GalleriaThumbnails;
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


      var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/utils */
      "t2ka");
      /* harmony import */


      var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/dom */
      "YyRF");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/ripple */
      "Q4Mo");

      var _c0 = ["mask"];

      var _c1 = function _c1(a1) {
        return {
          "p-galleria-mask p-component-overlay": true,
          "p-galleria-visible": a1
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "zIndex": a0
        };
      };

      function Galleria_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-galleriaContent", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.onMaskHide();
          })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.onActiveItemChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.maskClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r3.visible))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r3.zIndex));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("ngStyle", ctx_r3.containerStyle);
        }
      }

      function Galleria_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_div_0_div_1_Template, 3, 11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
        }
      }

      function Galleria_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onActiveItemChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
        }
      }

      function GalleriaContent_div_0_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.maskHide.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GalleriaContent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
        }
      }

      function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaThumbnails", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.onActiveIndexChange($event);
          })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.stopSlideShow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
        }
      }

      function GalleriaContent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
        }
      }

      var _c3 = function _c3(a1, a2, a3) {
        return {
          "p-galleria p-component": true,
          "p-galleria-fullscreen": a1,
          "p-galleria-indicator-onitem": a2,
          "p-galleria-item-nav-onhover": a3
        };
      };

      var _c4 = function _c4() {
        return {};
      };

      function GalleriaContent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-galleriaItem", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onActiveIndexChange($event);
          })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.startSlideShow();
          })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.stopSlideShow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.galleriaClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c3, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
        }
      }

      function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
        }
      }

      var _c5 = function _c5(a1) {
        return {
          "p-galleria-item-prev p-galleria-item-nav p-link": true,
          "p-disabled": a1
        };
      };

      function GalleriaItem_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.navBackward($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
        }
      }

      var _c6 = function _c6(a1) {
        return {
          "p-galleria-item-next p-galleria-item-nav p-link": true,
          "p-disabled": a1
        };
      };

      function GalleriaItem_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.navForward($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
        }
      }

      function GalleriaItem_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
        }
      }

      function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 16);
        }
      }

      var _c7 = function _c7(a1) {
        return {
          "p-galleria-indicator": true,
          "p-highlight": a1
        };
      };

      function GalleriaItem_ul_6_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var index_r10 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.onIndicatorClick(index_r10);
          })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var index_r10 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.onIndicatorMouseEnter(index_r10);
          })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var index_r10 = ctx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.onIndicatorKeyDown(index_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var index_r10 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r8.isIndicatorItemActive(index_r10)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.indicatorFacet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r10)("templates", ctx_r8.templates);
        }
      }

      function GalleriaItem_ul_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value);
        }
      }

      var _c8 = ["itemsContainer"];

      var _c9 = function _c9(a1) {
        return {
          "p-galleria-thumbnail-prev p-link": true,
          "p-disabled": a1
        };
      };

      var _c10 = function _c10(a1, a2) {
        return {
          "p-galleria-thumbnail-prev-icon pi": true,
          "pi-chevron-left": a1,
          "pi-chevron-up": a2
        };
      };

      function GalleriaThumbnails_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.navBackward($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
        }
      }

      var _c11 = function _c11(a1, a2, a3, a4) {
        return {
          "p-galleria-thumbnail-item": true,
          "p-galleria-thumbnail-item-current": a1,
          "p-galleria-thumbnail-item-active": a2,
          "p-galleria-thumbnail-item-start": a3,
          "p-galleria-thumbnail-item-end": a4
        };
      };

      function GalleriaThumbnails_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var index_r7 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onItemClick(index_r7);
          })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var index_r7 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onItemClick(index_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var index_r7 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r2.getTabIndex(index_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("templates", ctx_r2.templates);
        }
      }

      var _c12 = function _c12(a1) {
        return {
          "p-galleria-thumbnail-next p-link": true,
          "p-disabled": a1
        };
      };

      var _c13 = function _c13(a1, a2) {
        return {
          "p-galleria-thumbnail-next-icon pi": true,
          "pi-chevron-right": a1,
          "pi-chevron-down": a2
        };
      };

      function GalleriaThumbnails_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.navForward($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
        }
      }

      var _c14 = function _c14(a0) {
        return {
          "height": a0
        };
      };

      var Galleria = /*#__PURE__*/function () {
        function Galleria(element, cd) {
          _classCallCheck(this, Galleria);

          this.element = element;
          this.cd = cd;
          this.fullScreen = false;
          this.numVisible = 3;
          this.showItemNavigators = false;
          this.showThumbnailNavigators = true;
          this.showItemNavigatorsOnHover = false;
          this.changeItemOnIndicatorHover = false;
          this.circular = false;
          this.autoPlay = false;
          this.transitionInterval = 4000;
          this.showThumbnails = true;
          this.thumbnailsPosition = "bottom";
          this.verticalThumbnailViewPortHeight = "300px";
          this.showIndicators = false;
          this.showIndicatorsOnItem = false;
          this.indicatorsPosition = "bottom";
          this.baseZIndex = 0;
          this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._visible = false;
          this._activeIndex = 0;
        }

        _createClass(Galleria, [{
          key: "activeIndex",
          get: function get() {
            return this._activeIndex;
          },
          set: function set(activeIndex) {
            this._activeIndex = activeIndex;
          }
        }, {
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(visible) {
            this._visible = visible;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            this.templates.forEach(function (item) {
              switch (item.getType()) {
                case 'header':
                  _this.headerFacet = item.template;
                  break;

                case 'footer':
                  _this.footerFacet = item.template;
                  break;

                case 'indicator':
                  _this.indicatorFacet = item.template;
                  break;

                case 'caption':
                  _this.captionFacet = item.template;
                  break;
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(simpleChanges) {
            if (this.fullScreen && simpleChanges.visible) {
              if (simpleChanges.visible.currentValue) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
                this.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              } else {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
              }
            }
          }
        }, {
          key: "onMaskHide",
          value: function onMaskHide() {
            this.visible = false;
            this.visibleChange.emit(false);
          }
        }, {
          key: "onActiveItemChange",
          value: function onActiveItemChange(index) {
            if (this.activeIndex !== index) {
              this.activeIndex = index;
              this.activeIndexChange.emit(index);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.fullScreen) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
            }
          }
        }]);

        return Galleria;
      }();

      Galleria.ɵfac = function Galleria_Factory(t) {
        return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      Galleria.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Galleria,
        selectors: [["p-galleria"]],
        contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
          }
        },
        viewQuery: function Galleria_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
          }
        },
        inputs: {
          fullScreen: "fullScreen",
          numVisible: "numVisible",
          showItemNavigators: "showItemNavigators",
          showThumbnailNavigators: "showThumbnailNavigators",
          showItemNavigatorsOnHover: "showItemNavigatorsOnHover",
          changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
          circular: "circular",
          autoPlay: "autoPlay",
          transitionInterval: "transitionInterval",
          showThumbnails: "showThumbnails",
          thumbnailsPosition: "thumbnailsPosition",
          verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
          showIndicators: "showIndicators",
          showIndicatorsOnItem: "showIndicatorsOnItem",
          indicatorsPosition: "indicatorsPosition",
          baseZIndex: "baseZIndex",
          activeIndex: "activeIndex",
          visible: "visible",
          id: "id",
          value: "value",
          responsiveOptions: "responsiveOptions",
          maskClass: "maskClass",
          containerClass: "containerClass",
          containerStyle: "containerStyle"
        },
        outputs: {
          activeIndexChange: "activeIndexChange",
          visibleChange: "visibleChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["mask", ""], [3, "value", "activeIndex", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "activeItemChange"]],
        template: function Galleria_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Galleria_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r1);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], GalleriaContent];
        },
        styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"],
        encapsulation: 2,
        changeDetection: 0
      });

      Galleria.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      Galleria.propDecorators = {
        activeIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fullScreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsiveOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showItemNavigators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showThumbnailNavigators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showItemNavigatorsOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeItemOnIndicatorHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        circular: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showThumbnails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        thumbnailsPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        verticalThumbnailViewPortHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showIndicatorsOnItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indicatorsPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maskClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mask', {
            "static": false
          }]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        visibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Galleria, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'p-galleria',
            template: "\n        <div *ngIf=\"fullScreen;else windowed\">\n            <div *ngIf=\"visible\" #mask [ngClass]=\"{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}\" [class]=\"maskClass\" [ngStyle]=\"{'zIndex':zIndex}\">\n                <p-galleriaContent [value]=\"value\" [activeIndex]=\"activeIndex\" (maskHide)=\"onMaskHide()\" (activeItemChange)=\"onActiveItemChange($event)\" [ngStyle]=\"containerStyle\"></p-galleriaContent>\n            </div>\n        </div>\n\n        <ng-template #windowed>\n            <p-galleriaContent [value]=\"value\" [activeIndex]=\"activeIndex\" (activeItemChange)=\"onActiveItemChange($event)\"></p-galleriaContent>\n        </ng-template>\n    ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showItemNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showThumbnailNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showItemNavigatorsOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          changeItemOnIndicatorHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          transitionInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showThumbnails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          thumbnailsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          verticalThumbnailViewPortHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showIndicatorsOnItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          indicatorsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maskClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mask', {
              "static": false
            }]
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]]
          }]
        });
      })();

      var GalleriaContent = /*#__PURE__*/function () {
        function GalleriaContent(galleria, cd) {
          _classCallCheck(this, GalleriaContent);

          this.galleria = galleria;
          this.cd = cd;
          this.value = [];
          this.maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.id = this.galleria.id || Object(primeng_utils__WEBPACK_IMPORTED_MODULE_3__["UniqueComponentId"])();
          this.slideShowActicve = false;
          this._activeIndex = 0;
          this.slideShowActive = true;
        }

        _createClass(GalleriaContent, [{
          key: "activeIndex",
          get: function get() {
            return this._activeIndex;
          },
          set: function set(activeIndex) {
            this._activeIndex = activeIndex;
          }
        }, {
          key: "galleriaClass",
          value: function galleriaClass() {
            var thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
            var indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
            return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
          }
        }, {
          key: "startSlideShow",
          value: function startSlideShow() {
            var _this2 = this;

            this.interval = setInterval(function () {
              var activeIndex = _this2.galleria.circular && _this2.value.length - 1 === _this2.activeIndex ? 0 : _this2.activeIndex + 1;

              _this2.onActiveIndexChange(activeIndex);

              _this2.activeIndex = activeIndex;
            }, this.galleria.transitionInterval);
            this.slideShowActive = true;
          }
        }, {
          key: "stopSlideShow",
          value: function stopSlideShow() {
            if (this.interval) {
              clearInterval(this.interval);
            }

            this.slideShowActive = false;
          }
        }, {
          key: "getPositionClass",
          value: function getPositionClass(preClassName, position) {
            var positions = ['top', 'left', 'bottom', 'right'];
            var pos = positions.find(function (item) {
              return item === position;
            });
            return pos ? "".concat(preClassName, "-").concat(pos) : '';
          }
        }, {
          key: "isVertical",
          value: function isVertical() {
            return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
          }
        }, {
          key: "onActiveIndexChange",
          value: function onActiveIndexChange(index) {
            if (this.activeIndex !== index) {
              this.activeIndex = index;
              this.activeItemChange.emit(this.activeIndex);
            }
          }
        }]);

        return GalleriaContent;
      }();

      GalleriaContent.ɵfac = function GalleriaContent_Factory(t) {
        return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      GalleriaContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleriaContent,
        selectors: [["p-galleriaContent"]],
        inputs: {
          value: "value",
          activeIndex: "activeIndex"
        },
        outputs: {
          maskHide: "maskHide",
          activeItemChange: "activeItemChange"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
        template: function GalleriaContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], GalleriaItem, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], GalleriaItemSlot, GalleriaThumbnails];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      GalleriaContent.ctorParameters = function () {
        return [{
          type: Galleria
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      GalleriaContent.propDecorators = {
        activeIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maskHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activeItemChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'p-galleriaContent',
            template: "\n        <div [attr.id]=\"id\" *ngIf=\"value && value.length > 0\" [ngClass]=\"{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, \n            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}\"\n            [ngStyle]=\"!galleria.fullScreen ? galleria.containerStyle : {}\" [class]=\"galleriaClass()\">\n            <button *ngIf=\"galleria.fullScreen\" type=\"button\" class=\"p-galleria-close p-link\" (click)=\"maskHide.emit()\" pRipple>\n                <span class=\"p-galleria-close-icon pi pi-times\"></span>\n            </button>\n            <div *ngIf=\"galleria.templates && galleria.headerFacet\" class=\"p-galleria-header\">\n                <p-galleriaItemSlot type=\"header\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n            <div class=\"p-galleria-content\">\n                <p-galleriaItem [value]=\"value\" [activeIndex]=\"activeIndex\" [circular]=\"galleria.circular\" [templates]=\"galleria.templates\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" \n                    [showIndicators]=\"galleria.showIndicators\" [changeItemOnIndicatorHover]=\"galleria.changeItemOnIndicatorHover\" [indicatorFacet]=\"galleria.indicatorFacet\"\n                    [captionFacet]=\"galleria.captionFacet\" [showItemNavigators]=\"galleria.showItemNavigators\" [autoPlay]=\"galleria.autoPlay\" [slideShowActive]=\"slideShowActive\"\n                    (startSlideShow)=\"startSlideShow()\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaItem>\n\n                <p-galleriaThumbnails *ngIf=\"galleria.showThumbnails\" [containerId]=\"id\" [value]=\"value\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" [activeIndex]=\"activeIndex\" [templates]=\"galleria.templates\"\n                    [numVisible]=\"galleria.numVisible\" [responsiveOptions]=\"galleria.responsiveOptions\" [circular]=\"galleria.circular\"\n                    [isVertical]=\"isVertical()\" [contentHeight]=\"galleria.verticalThumbnailViewPortHeight\" [showThumbnailNavigators]=\"galleria.showThumbnailNavigators\"\n                    [slideShowActive]=\"slideShowActive\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaThumbnails>\n            </div>\n            <div *ngIf=\"galleria.templates && galleria.footerFacet\" class=\"p-galleria-footer\">\n                <p-galleriaItemSlot type=\"footer\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n        </div>\n    ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: Galleria
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maskHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          activeItemChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var GalleriaItemSlot = /*#__PURE__*/function () {
        function GalleriaItemSlot() {
          _classCallCheck(this, GalleriaItemSlot);
        }

        _createClass(GalleriaItemSlot, [{
          key: "item",
          get: function get() {
            return this._item;
          },
          set: function set(item) {
            var _this3 = this;

            this._item = item;

            if (this.templates) {
              this.templates.forEach(function (item) {
                if (item.getType() === _this3.type) {
                  switch (_this3.type) {
                    case 'item':
                    case 'caption':
                    case 'thumbnail':
                      _this3.context = {
                        $implicit: _this3.item
                      };
                      _this3.contentTemplate = item.template;
                      break;
                  }
                }
              });
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this4 = this;

            this.templates.forEach(function (item) {
              if (item.getType() === _this4.type) {
                switch (_this4.type) {
                  case 'item':
                  case 'caption':
                  case 'thumbnail':
                    _this4.context = {
                      $implicit: _this4.item
                    };
                    _this4.contentTemplate = item.template;
                    break;

                  case 'indicator':
                    _this4.context = {
                      $implicit: _this4.index
                    };
                    _this4.contentTemplate = item.template;
                    break;

                  default:
                    _this4.context = {};
                    _this4.contentTemplate = item.template;
                    break;
                }
              }
            });
          }
        }]);

        return GalleriaItemSlot;
      }();

      GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) {
        return new (t || GalleriaItemSlot)();
      };

      GalleriaItemSlot.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleriaItemSlot,
        selectors: [["p-galleriaItemSlot"]],
        inputs: {
          item: "item",
          templates: "templates",
          index: "index",
          type: "type"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function GalleriaItemSlot_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });
      GalleriaItemSlot.propDecorators = {
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItemSlot, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'p-galleriaItemSlot',
            template: "\n        <ng-container *ngIf=\"contentTemplate\">\n            <ng-container *ngTemplateOutlet=\"contentTemplate; context: context\"></ng-container>\n        </ng-container>\n    ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], null, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var GalleriaItem = /*#__PURE__*/function () {
        function GalleriaItem() {
          _classCallCheck(this, GalleriaItem);

          this.circular = false;
          this.showItemNavigators = false;
          this.showIndicators = true;
          this.slideShowActive = true;
          this.changeItemOnIndicatorHover = true;
          this.autoPlay = false;
          this.startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._activeIndex = 0;
        }

        _createClass(GalleriaItem, [{
          key: "activeIndex",
          get: function get() {
            return this._activeIndex;
          },
          set: function set(activeIndex) {
            this._activeIndex = activeIndex;
            this.activeItem = this.value[this._activeIndex];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.autoPlay) {
              this.startSlideShow.emit();
            }
          }
        }, {
          key: "next",
          value: function next() {
            var nextItemIndex = this.activeIndex + 1;
            var activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
            this.onActiveIndexChange.emit(activeIndex);
          }
        }, {
          key: "prev",
          value: function prev() {
            var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
            var activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
            this.onActiveIndexChange.emit(activeIndex);
          }
        }, {
          key: "stopTheSlideShow",
          value: function stopTheSlideShow() {
            if (this.slideShowActive && this.stopSlideShow) {
              this.stopSlideShow.emit();
            }
          }
        }, {
          key: "navForward",
          value: function navForward(e) {
            this.stopTheSlideShow();
            this.next();

            if (e && e.cancelable) {
              e.preventDefault();
            }
          }
        }, {
          key: "navBackward",
          value: function navBackward(e) {
            this.stopTheSlideShow();
            this.prev();

            if (e && e.cancelable) {
              e.preventDefault();
            }
          }
        }, {
          key: "onIndicatorClick",
          value: function onIndicatorClick(index) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
          }
        }, {
          key: "onIndicatorMouseEnter",
          value: function onIndicatorMouseEnter(index) {
            if (this.changeItemOnIndicatorHover) {
              this.stopTheSlideShow();
              this.onActiveIndexChange.emit(index);
            }
          }
        }, {
          key: "onIndicatorKeyDown",
          value: function onIndicatorKeyDown(index) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
          }
        }, {
          key: "isNavForwardDisabled",
          value: function isNavForwardDisabled() {
            return !this.circular && this.activeIndex === this.value.length - 1;
          }
        }, {
          key: "isNavBackwardDisabled",
          value: function isNavBackwardDisabled() {
            return !this.circular && this.activeIndex === 0;
          }
        }, {
          key: "isIndicatorItemActive",
          value: function isIndicatorItemActive(index) {
            return this.activeIndex === index;
          }
        }]);

        return GalleriaItem;
      }();

      GalleriaItem.ɵfac = function GalleriaItem_Factory(t) {
        return new (t || GalleriaItem)();
      };

      GalleriaItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleriaItem,
        selectors: [["p-galleriaItem"]],
        inputs: {
          circular: "circular",
          showItemNavigators: "showItemNavigators",
          showIndicators: "showIndicators",
          slideShowActive: "slideShowActive",
          changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
          autoPlay: "autoPlay",
          activeIndex: "activeIndex",
          value: "value",
          templates: "templates",
          indicatorFacet: "indicatorFacet",
          captionFacet: "captionFacet"
        },
        outputs: {
          startSlideShow: "startSlideShow",
          stopSlideShow: "stopSlideShow",
          onActiveIndexChange: "onActiveIndexChange"
        },
        decls: 7,
        vars: 6,
        consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
        template: function GalleriaItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 2, 4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-galleriaItemSlot", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleriaItem_button_4_Template, 2, 4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaItem_div_5_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionFacet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], GalleriaItemSlot, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });
      GalleriaItem.propDecorators = {
        circular: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showItemNavigators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideShowActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeItemOnIndicatorHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indicatorFacet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        captionFacet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startSlideShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        stopSlideShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onActiveIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activeIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'p-galleriaItem',
            template: "\n        <div class=\"p-galleria-item-wrapper\">\n            <div class=\"p-galleria-item-container\">\n                <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\" pRipple>\n                    <span class=\"p-galleria-item-prev-icon pi pi-chevron-left\"></span>\n                </button>\n                <p-galleriaItemSlot type=\"item\" [item]=\"activeItem\" [templates]=\"templates\" class=\"p-galleria-item\"></p-galleriaItemSlot>\n                <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\"  [disabled]=\"isNavForwardDisabled()\" pRipple>\n                    <span class=\"p-galleria-item-next-icon pi pi-chevron-right\"></span>\n                </button>\n                <div class=\"p-galleria-caption\" *ngIf=\"captionFacet\">\n                    <p-galleriaItemSlot type=\"caption\" [item]=\"activeItem\" [templates]=\"templates\"></p-galleriaItemSlot>\n                </div>\n            </div>\n            <ul *ngIf=\"showIndicators\" class=\"p-galleria-indicators p-reset\">\n                <li *ngFor=\"let item of value; let index = index;\" tabindex=\"0\"\n                    (click)=\"onIndicatorClick(index)\" (mouseenter)=\"onIndicatorMouseEnter(index)\" (keydown.enter)=\"onIndicatorKeyDown(index)\"\n                    [ngClass]=\"{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}\">\n                    <button type=\"button\" tabIndex=\"-1\" class=\"p-link\" *ngIf=\"!indicatorFacet\">\n                    </button>\n                    <p-galleriaItemSlot type=\"indicator\" [index]=\"index\" [templates]=\"templates\"></p-galleriaItemSlot>\n                </li>\n            </ul>\n        </div>\n    ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showItemNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          slideShowActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          changeItemOnIndicatorHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          startSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          stopSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onActiveIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          indicatorFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          captionFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var GalleriaThumbnails = /*#__PURE__*/function () {
        function GalleriaThumbnails(cd) {
          _classCallCheck(this, GalleriaThumbnails);

          this.cd = cd;
          this.isVertical = false;
          this.slideShowActive = false;
          this.circular = false;
          this.contentHeight = "300px";
          this.showThumbnailNavigators = true;
          this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.startPos = null;
          this.thumbnailsStyle = null;
          this.sortedResponsiveOptions = null;
          this.totalShiftedItems = 0;
          this.page = 0;
          this._numVisible = 0;
          this.d_numVisible = 0;
          this._oldNumVisible = 0;
          this._activeIndex = 0;
          this._oldactiveIndex = 0;
        }

        _createClass(GalleriaThumbnails, [{
          key: "numVisible",
          get: function get() {
            return this._numVisible;
          },
          set: function set(numVisible) {
            this._numVisible = numVisible;
            this._oldNumVisible = this.d_numVisible;
            this.d_numVisible = numVisible;
          }
        }, {
          key: "activeIndex",
          get: function get() {
            return this._activeIndex;
          },
          set: function set(activeIndex) {
            this._oldactiveIndex = this._activeIndex;
            this._activeIndex = activeIndex;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createStyle();

            if (this.responsiveOptions) {
              this.bindDocumentListeners();
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var totalShiftedItems = this.totalShiftedItems;

            if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
              if (this._activeIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
              } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
              } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
              } else {
                totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
              }

              if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
              }

              if (this.itemsContainer && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
              }

              if (this._oldactiveIndex !== this._activeIndex) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
              }

              this._oldactiveIndex = this._activeIndex;
              this._oldNumVisible = this.d_numVisible;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.calculatePosition();
          }
        }, {
          key: "createStyle",
          value: function createStyle() {
            if (!this.thumbnailsStyle) {
              this.thumbnailsStyle = document.createElement('style');
              this.thumbnailsStyle.type = 'text/css';
              document.body.appendChild(this.thumbnailsStyle);
            }

            var innerHTML = "\n            #".concat(this.containerId, " .p-galleria-thumbnail-item {\n                flex: 1 0 ").concat(100 / this.d_numVisible, "%\n            }\n        ");

            if (this.responsiveOptions) {
              this.sortedResponsiveOptions = _toConsumableArray(this.responsiveOptions);
              this.sortedResponsiveOptions.sort(function (data1, data2) {
                var value1 = data1.breakpoint;
                var value2 = data2.breakpoint;
                var result = null;
                if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
                  numeric: true
                });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                return -1 * result;
              });

              for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
                var res = this.sortedResponsiveOptions[i];
                innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
              }
            }

            this.thumbnailsStyle.innerHTML = innerHTML;
          }
        }, {
          key: "calculatePosition",
          value: function calculatePosition() {
            if (this.itemsContainer && this.sortedResponsiveOptions) {
              var windowWidth = window.innerWidth;
              var matchedResponsiveData = {
                numVisible: this._numVisible
              };

              for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
                var res = this.sortedResponsiveOptions[i];

                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                  matchedResponsiveData = res;
                }
              }

              if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                this.d_numVisible = matchedResponsiveData.numVisible;
                this.cd.markForCheck();
              }
            }
          }
        }, {
          key: "getTabIndex",
          value: function getTabIndex(index) {
            return this.isItemActive(index) ? 0 : null;
          }
        }, {
          key: "navForward",
          value: function navForward(e) {
            this.stopTheSlideShow();
            var nextItemIndex = this._activeIndex + 1;

            if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
              this.step(-1);
            }

            var activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
            this.onActiveIndexChange.emit(activeIndex);

            if (e.cancelable) {
              e.preventDefault();
            }
          }
        }, {
          key: "navBackward",
          value: function navBackward(e) {
            this.stopTheSlideShow();
            var prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
            var diff = prevItemIndex + this.totalShiftedItems;

            if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
              this.step(1);
            }

            var activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
            this.onActiveIndexChange.emit(activeIndex);

            if (e.cancelable) {
              e.preventDefault();
            }
          }
        }, {
          key: "onItemClick",
          value: function onItemClick(index) {
            this.stopTheSlideShow();
            var selectedItemIndex = index;

            if (selectedItemIndex !== this._activeIndex) {
              var diff = selectedItemIndex + this.totalShiftedItems;
              var dir = 0;

              if (selectedItemIndex < this._activeIndex) {
                dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();

                if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
                  this.step(dir);
                }
              } else {
                dir = this.getMedianItemIndex() - diff;

                if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
                  this.step(dir);
                }
              }

              this.activeIndex = selectedItemIndex;
              this.onActiveIndexChange.emit(this.activeIndex);
            }
          }
        }, {
          key: "step",
          value: function step(dir) {
            var totalShiftedItems = this.totalShiftedItems + dir;

            if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
              totalShiftedItems = this.d_numVisible - this.value.length;
            } else if (dir > 0 && totalShiftedItems > 0) {
              totalShiftedItems = 0;
            }

            if (this.circular) {
              if (dir < 0 && this.value.length - 1 === this._activeIndex) {
                totalShiftedItems = 0;
              } else if (dir > 0 && this._activeIndex === 0) {
                totalShiftedItems = this.d_numVisible - this.value.length;
              }
            }

            if (this.itemsContainer) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
              this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
              this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }

            this.totalShiftedItems = totalShiftedItems;
          }
        }, {
          key: "stopTheSlideShow",
          value: function stopTheSlideShow() {
            if (this.slideShowActive && this.stopSlideShow) {
              this.stopSlideShow.emit();
            }
          }
        }, {
          key: "changePageOnTouch",
          value: function changePageOnTouch(e, diff) {
            if (diff < 0) {
              // left
              this.navForward(e);
            } else {
              // right
              this.navBackward(e);
            }
          }
        }, {
          key: "getTotalPageNumber",
          value: function getTotalPageNumber() {
            return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
          }
        }, {
          key: "getMedianItemIndex",
          value: function getMedianItemIndex() {
            var index = Math.floor(this.d_numVisible / 2);
            return this.d_numVisible % 2 ? index : index - 1;
          }
        }, {
          key: "onTransitionEnd",
          value: function onTransitionEnd() {
            if (this.itemsContainer && this.itemsContainer.nativeElement) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
              this.itemsContainer.nativeElement.style.transition = '';
            }
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(e) {
            var touchobj = e.changedTouches[0];

            if (this.isVertical) {
              this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
            } else {
              this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
            }
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(e) {
            if (e.cancelable) {
              e.preventDefault();
            }
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(e) {
            var touchobj = e.changedTouches[0];
            this.startPos = {
              x: touchobj.pageX,
              y: touchobj.pageY
            };
          }
        }, {
          key: "isNavBackwardDisabled",
          value: function isNavBackwardDisabled() {
            return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
          }
        }, {
          key: "isNavForwardDisabled",
          value: function isNavForwardDisabled() {
            return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
          }
        }, {
          key: "firstItemAciveIndex",
          value: function firstItemAciveIndex() {
            return this.totalShiftedItems * -1;
          }
        }, {
          key: "lastItemActiveIndex",
          value: function lastItemActiveIndex() {
            return this.firstItemAciveIndex() + this.d_numVisible - 1;
          }
        }, {
          key: "isItemActive",
          value: function isItemActive(index) {
            return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
          }
        }, {
          key: "bindDocumentListeners",
          value: function bindDocumentListeners() {
            var _this5 = this;

            if (!this.documentResizeListener) {
              this.documentResizeListener = function () {
                _this5.calculatePosition();
              };

              window.addEventListener('resize', this.documentResizeListener);
            }
          }
        }, {
          key: "unbindDocumentListeners",
          value: function unbindDocumentListeners() {
            if (this.documentResizeListener) {
              window.removeEventListener('resize', this.documentResizeListener);
              this.documentResizeListener = null;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.responsiveOptions) {
              this.unbindDocumentListeners();
            }

            if (this.thumbnailsStyle) {
              this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
            }
          }
        }]);

        return GalleriaThumbnails;
      }();

      GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) {
        return new (t || GalleriaThumbnails)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      GalleriaThumbnails.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleriaThumbnails,
        selectors: [["p-galleriaThumbnails"]],
        viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
          }
        },
        inputs: {
          isVertical: "isVertical",
          slideShowActive: "slideShowActive",
          circular: "circular",
          contentHeight: "contentHeight",
          showThumbnailNavigators: "showThumbnailNavigators",
          numVisible: "numVisible",
          activeIndex: "activeIndex",
          containerId: "containerId",
          value: "value",
          responsiveOptions: "responsiveOptions",
          templates: "templates"
        },
        outputs: {
          onActiveIndexChange: "onActiveIndexChange",
          stopSlideShow: "stopSlideShow"
        },
        decls: 8,
        vars: 6,
        consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]],
        template: function GalleriaThumbnails_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
              return ctx.onTransitionEnd();
            })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
              return ctx.onTouchStart($event);
            })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
              return ctx.onTouchMove($event);
            })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) {
              return ctx.onTouchEnd($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c14, ctx.isVertical ? ctx.contentHeight : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], GalleriaItemSlot],
        encapsulation: 2,
        changeDetection: 0
      });

      GalleriaThumbnails.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      GalleriaThumbnails.propDecorators = {
        containerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isVertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideShowActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        circular: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsiveOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showThumbnailNavigators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onActiveIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        stopSlideShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['itemsContainer']
        }],
        numVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaThumbnails, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'p-galleriaThumbnails',
            template: "\n        <div class=\"p-galleria-thumbnail-wrapper\">\n            <div class=\"p-galleria-thumbnail-container\">\n                <button *ngIf=\"showThumbnailNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\" pRipple>\n                    <span [ngClass]=\"{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}\"></span>\n                </button>\n                <div class=\"p-galleria-thumbnail-items-container\" [ngStyle]=\"{'height': isVertical ? contentHeight : ''}\">\n                    <div #itemsContainer class=\"p-galleria-thumbnail-items\" (transitionend)=\"onTransitionEnd()\"\n                        (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\">\n                        <div *ngFor=\"let item of value; let index = index;\" [ngClass]=\"{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),\n                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }\">\n                            <div class=\"p-galleria-thumbnail-item-content\" [attr.tabindex]=\"getTabIndex(index)\" (click)=\"onItemClick(index)\" (keydown.enter)=\"onItemClick(index)\">\n                                <p-galleriaItemSlot type=\"thumbnail\" [item]=\"item\" [templates]=\"templates\"></p-galleriaItemSlot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button *ngIf=\"showThumbnailNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\" [disabled]=\"isNavForwardDisabled()\" pRipple>\n                    <span [ngClass]=\"{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}\"></span>\n                </button>\n            </div>\n        </div>\n    ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          slideShowActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showThumbnailNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onActiveIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          stopSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemsContainer']
          }]
        });
      })();

      var GalleriaModule = function GalleriaModule() {
        _classCallCheck(this, GalleriaModule);
      };

      GalleriaModule.ɵfac = function GalleriaModule_Factory(t) {
        return new (t || GalleriaModule)();
      };

      GalleriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GalleriaModule
      });
      GalleriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleriaModule, {
          declarations: function declarations() {
            return [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]];
          },
          exports: function exports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=primeng-galleria.js.map

      /***/

    },

    /***/
    "3+9O":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin.routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages */
      "HLIi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"]
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      };

      AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
      AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "A8Ou":
    /*!*****************************************************************************!*\
      !*** ./src/app/admin/components/image-uploader/image-uploader.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ImageUploaderComponent */

    /***/
    function A8Ou(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploaderComponent", function () {
        return ImageUploaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/services */
      "dJ3e");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _image_upload_item_image_upload_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../image-upload-item/image-upload-item.component */
      "/kDx");

      function ImageUploaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "crm-image-upload-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleted", function ImageUploaderComponent_div_1_Template_crm_image_upload_item_deleted_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onDeleted(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fileUpload_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / ctx_r0.column);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", fileUpload_r2);
        }
      }

      function ImageUploaderComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploaderComponent_div_2_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.upload($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / ctx_r1.column);
        }
      }

      var ImageUploaderComponent = /*#__PURE__*/function () {
        function ImageUploaderComponent(imageService) {
          var _this6 = this;

          _classCallCheck(this, ImageUploaderComponent);

          this.imageService = imageService;
          this.fileUploads = [];
          this.limit = 8;
          this.column = 4;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.createImageSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.createImageSuccessSubscription = this.createImageSuccess.subscribe(function (status) {
            var i = _this6.fileUploads.findIndex(function (el) {
              return el.f === status.f;
            });

            if (i !== -1) {
              _this6.fileUploads[i] = Object.assign({}, status);
            }

            if (_this6.fileUploads.find(function (el) {
              return el.done === false;
            }) === undefined) {
              _this6.event.emit('completed');
            }
          });
        }

        _createClass(ImageUploaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.createImageSuccessSubscription) {
              this.createImageSuccessSubscription.unsubscribe();
            }
          }
        }, {
          key: "upload",
          value: function upload(event) {
            var _this7 = this;

            event.stopPropagation();
            var selectedFiles = event.target.files;

            if (selectedFiles) {
              if (!this.limit || this.fileUploads.length + selectedFiles.length <= this.limit) {
                this.event.emit('uploading');

                for (var i = 0; i < selectedFiles.length; i++) {
                  this.fileUploads.push({
                    f: selectedFiles[i],
                    ok: false,
                    done: false,
                    progress: 0
                  });
                  this.imageService.createImage(selectedFiles[i]).subscribe(function (status) {
                    _this7.createImageSuccess.next(status);
                  }, function (err) {//TODO: error
                  });
                }
              } else {
                this.event.emit('limiterror');
              }
            }
          }
        }, {
          key: "onDeleted",
          value: function onDeleted(index) {
            var _this8 = this;

            console.log("delete file: " + index);
            this.imageService.deleteImage(this.fileUploads[index].respone.id).subscribe(function () {
              return _this8.fileUploads.splice(index, 1);
            });
          }
        }]);

        return ImageUploaderComponent;
      }();

      ImageUploaderComponent.ɵfac = function ImageUploaderComponent_Factory(t) {
        return new (t || ImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["ImageService"]));
      };

      ImageUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageUploaderComponent,
        selectors: [["crm-image-uploader"]],
        inputs: {
          fileUploads: "fileUploads",
          limit: "limit",
          column: "column",
          owner: "owner"
        },
        outputs: {
          event: "event"
        },
        decls: 3,
        vars: 2,
        consts: [["fxLayout", "row wrap", "fxLayoutGap", "14px 14px grid"], [3, "fxFlex", 4, "ngFor", "ngForOf"], [3, "fxFlex", 4, "ngIf"], [3, "fxFlex"], [3, "status", "deleted"], [1, "add-button"], ["type", "file", "accept", ".png, .jpg, .jpeg", "multiple", "", 3, "change"]],
        template: function ImageUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageUploaderComponent_div_1_Template, 2, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageUploaderComponent_div_2_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileUploads);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.limit || ctx.fileUploads.length < ctx.limit);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _image_upload_item_image_upload_item_component__WEBPACK_IMPORTED_MODULE_5__["ImageUploadItemComponent"]],
        styles: [".add-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 100%;\n  \n  position: relative;\n  background-image: url('plus_48_48.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  border: 1px solid #eee;\n  box-shadow: 1px 1px 3px 0 #f2f2f2;\n}\n.add-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFBbUIscUJBQUE7RUFDbkIsa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBRUY7QUFBRTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFTiIsImZpbGUiOiJpbWFnZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTAwJTsgLyogMToxIEFzcGVjdCBSYXRpbyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9wbHVzXzQ4XzQ4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDAgI2YyZjJmMjtcclxuIFxyXG4gIGlucHV0IHtcclxuICAgICAgcG9zaXRpb246ICBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "HLIi":
    /*!**************************************!*\
      !*** ./src/app/admin/pages/index.ts ***!
      \**************************************/

    /*! exports provided: AdminComponent */

    /***/
    function HLIi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin.component */
      "wDAK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"];
      });
      /***/

    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _pages_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/admin.component */
      "wDAK");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.routing.module */
      "3+9O");
      /* harmony import */


      var _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/image-uploader/image-uploader.component */
      "A8Ou");
      /* harmony import */


      var _components_image_upload_item_image_upload_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/image-upload-item/image-upload-item.component */
      "/kDx");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_galleria__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/galleria */
      "2art");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule.ɵfac = function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      };

      AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
      AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_6__["TagModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveComponentModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_11__["GalleriaModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdminModule, {
          declarations: [_pages_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"], _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_3__["ImageUploaderComponent"], _components_image_upload_item_image_upload_item_component__WEBPACK_IMPORTED_MODULE_4__["ImageUploadItemComponent"]],
          imports: [_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_6__["TagModule"], _ngrx_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveComponentModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_11__["GalleriaModule"]]
        });
      })();
      /***/

    },

    /***/
    "wDAK":
    /*!************************************************!*\
      !*** ./src/app/admin/pages/admin.component.ts ***!
      \************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function wDAK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core */
      "ey9i");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/component */
      "9A8T");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");

      function AdminComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Personal Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "VN Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "VN Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Place of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "VN Place of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "VN Place of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Other Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "ID Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Issue Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var employee_r3 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r3.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 21, employee_r3.birthDay, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r3.placeOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r3.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r3.degree);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r3.idNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](95, 24, employee_r3.issueDate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", true);
        }
      }

      function AdminComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_ng_template_2_Template_p_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.displayModal = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "width": "5rem",
          "height": "5rem"
        };
      };

      function AdminComponent_div_13_p_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_div_13_p_card_1_Template_p_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var emp_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.showEmpInformation(emp_r8.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-tag", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emp_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", emp_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](emp_r8.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](emp_r8.employeeID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](emp_r8.jobTitle);
        }
      }

      function AdminComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminComponent_div_13_p_card_1_Template, 14, 7, "p-card", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employees_r6 = ctx.ngrxLet;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", employees_r6);
        }
      }

      var _c1 = function _c1() {
        return {
          width: "90vw"
        };
      }; //Decorator pattern
      //DI


      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(employeeService) {
          _classCallCheck(this, AdminComponent);

          this.employeeService = employeeService;
          this.displayModal = false;
          this.employee$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
          this.employees$ = employeeService.getEmployees();
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showEmpInformation",
          value: function showEmpInformation(id) {
            this.employee$ = this.employeeService.getEmployee(id);
            this.displayModal = true;
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]));
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["crm-admin"]],
        decls: 16,
        vars: 10,
        consts: [["header", "View Employee Personal Information", 3, "visible", "modal", "baseZIndex", "draggable", "resizable", "visibleChange"], ["class", "p-m-0", 4, "ngrxLet"], ["pTemplate", "footer"], [1, "navbar-container", "mat-elevation-z6"], [1, "navbar-header"], ["mat-button", "", "routerLink", "/", "aria-label", "Training"], ["src", "../../../../assets/img/angular-white-transparent.svg", "alt", "angular", 1, "crm-logo"], [1, "flex-spacer"], [1, "navbar", "navbar-show-small"], [1, "crm-container"], [1, "content"], ["class", "p-grid", 4, "ngrxLet"], [1, "p-m-0"], [1, "p-fluid"], [2, "color", "#0066c0", "font-weight", "bold"], [1, "p-col-12", "p-d-flex"], [1, "p-col-4"], [1, "p-field", "p-grid"], ["for", "fullname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["id", "fullname", "type", "text", "pInputText", "", 3, "value", "readOnly"], ["for", "vnfullname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "vnfullname", "value", "N/A", "type", "text", "pInputText", "", 3, "readOnly"], ["for", "dob", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "dob", "pInputText", "", "type", "text", 3, "value", "readOnly"], ["for", "placeOfBirth", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "placeOfBirth", "type", "text", "pInputText", "", 3, "readOnly", "value"], ["for", "vnPlaceOfBirth", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "vnPlaceOfBirth", "type", "text", "pInputText", "", "value", "N/A", 3, "readOnly"], ["for", "placeOfOrigin", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "placeOfOrigin", "type", "text", "pInputText", "", "value", "N/A", 3, "readOnly"], ["id", "vnPlaceOfOrigin", "type", "text", "pInputText", "", "value", "N/A", 3, "readOnly"], ["id", "nationality", "type", "text", "pInputText", "", "value", "N/A", 3, "readOnly"], ["for", "gender", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "gender", "type", "text", "pInputText", "", 3, "readOnly", "value"], ["for", "degree", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["id", "degree", "type", "text", "pInputText", "", 3, "readOnly", "value"], ["id", "otherDegree", "type", "text", "pInputText", "", "value", "N/A", 3, "readOnly"], ["id", "idNumber", "type", "text", "pInputText", "", 3, "readOnly", "value"], ["id", "issueDate", "type", "text", "pInputText", "", 3, "readOnly", "value"], ["icon", "pi pi-times", "label", "Close", "styleClass", "p-button-text", 3, "click"], [1, "p-grid"], ["class", "p-col", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-col", 3, "click"], [2, "text-align", "center", 3, "src"], [2, "text-align", "center"], [1, "p-mr-2"], ["severity", "success"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function AdminComponent_Template_p_dialog_visibleChange_0_listener($event) {
              return ctx.displayModal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminComponent_ng_container_1_Template, 96, 27, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminComponent_ng_template_2_Template, 1, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "LogiGear CRM");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "nav", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminComponent_div_13_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "crm-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("baseZIndex", 10000)("draggable", false)("resizable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxLet", ctx.employee$);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxLet", ctx.employees$);
          }
        },
        directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_3__["Dialog"], _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["LetDirective"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], primeng_card__WEBPACK_IMPORTED_MODULE_9__["Card"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["Button"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_tag__WEBPACK_IMPORTED_MODULE_13__["Tag"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.section-tab[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.tabbed-content[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 500px;\n  margin: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRhYiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRhYmJlZC1jb250ZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTRweDtcclxufSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map