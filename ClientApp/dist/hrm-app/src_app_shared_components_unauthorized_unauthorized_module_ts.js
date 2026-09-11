"use strict";
(self["webpackChunkhrm_app"] = self["webpackChunkhrm_app"] || []).push([["src_app_shared_components_unauthorized_unauthorized_module_ts"],{

/***/ 6727:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/unauthorized/unauthorized.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedComponent: () => (/* binding */ UnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class UnauthorizedComponent {
  static {
    this.ɵfac = function UnauthorizedComponent_Factory(t) {
      return new (t || UnauthorizedComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnauthorizedComponent,
      selectors: [["app-unauthorized"]],
      decls: 11,
      vars: 0,
      consts: [[1, "unauthorized-page"], [1, "unauthorized-card"], [1, "unauthorized-icon"], [1, "fas", "fa-lock"], ["routerLink", "/dashboard", 1, "btn-back"], [1, "fas", "fa-home"]],
      template: function UnauthorizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Access Denied");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You don't have permission to access this page.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Go to Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".unauthorized-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n}\n\n.unauthorized-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.unauthorized-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #fee2e2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  font-size: 32px;\n  color: #ef4444;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748b;\n  margin: 0 0 24px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  border-radius: 8px;\n  background: #6366f1;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFxQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZ0JBQUE7QUFLbEY7O0FBSkk7RUFBcUIsa0JBQUE7QUFRekI7O0FBUEk7RUFBcUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixjQUFBO0FBb0JoTTs7QUFuQkk7RUFBSyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsZUFBQTtBQTBCNUQ7O0FBekJJO0VBQUksZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdCQUFBO0FBK0J6Qzs7QUE5Qkk7RUFBWSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0VBQVUsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLHFCQUFBO0VBQXVCLGdCQUFBO0VBQWtCLGVBQUE7QUEyQ3hMOztBQTFDSTtFQUFrQixtQkFBQTtBQThDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIudW5hdXRob3JpemVkLXBhZ2UgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWluLWhlaWdodDogNjB2aDsgfVxyXG4gICAgLnVuYXV0aG9yaXplZC1jYXJkIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAudW5hdXRob3JpemVkLWljb24geyB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW46IDAgYXV0byAyMHB4OyBmb250LXNpemU6IDMycHg7IGNvbG9yOiAjZWY0NDQ0OyB9XHJcbiAgICBoMiB7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMCAwIDhweDsgfVxyXG4gICAgcCB7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMCAwIDI0cHg7IH1cclxuICAgIC5idG4tYmFjayB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgcGFkZGluZzogMTBweCAyNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6ICM2MzY2ZjE7IGNvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gICAgLmJ0bi1iYWNrOmhvdmVyIHsgYmFja2dyb3VuZDogIzRmNDZlNTsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9814:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/unauthorized/unauthorized.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedModule: () => (/* binding */ UnauthorizedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _unauthorized_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unauthorized.component */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class UnauthorizedModule {
  static {
    this.ɵfac = function UnauthorizedModule_Factory(t) {
      return new (t || UnauthorizedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UnauthorizedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnauthorizedModule, {
    declarations: [_unauthorized_component__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_unauthorized_component__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_unauthorized_unauthorized_module_ts.js.map