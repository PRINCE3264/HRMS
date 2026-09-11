"use strict";
(self["webpackChunkhrm_app"] = self["webpackChunkhrm_app"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/role.guard */ 400);
/* harmony import */ var _core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/role-redirect.guard */ 5431);
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ 6519);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ 6539);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ 9619);
/* harmony import */ var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/forgot-password/forgot-password.component */ 5783);
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ 6503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











const routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'auth',
  children: [{
    path: 'login',
    component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
  }, {
    path: 'register',
    component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
  }, {
    path: 'forgot-password',
    component: _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__.ForgotPasswordComponent
  }, {
    path: 'reset-password',
    component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }]
}, {
  path: '',
  component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__.MainLayoutComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: 'dashboard',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'dashboard'
    }
  }, {
    path: 'employees',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'employees'
    }
  }, {
    path: 'employees/add',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'employees-add'
    }
  }, {
    path: 'employees/:id/edit',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'employees-edit'
    }
  }, {
    path: 'employees/:id',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'employees-detail'
    }
  }, {
    path: 'departments',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'departments'
    }
  }, {
    path: 'designations',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'designations'
    }
  }, {
    path: 'branches',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'branches'
    }
  }, {
    path: 'teams',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'teams'
    }
  }, {
    path: 'attendance',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'attendance'
    }
  }, {
    path: 'leave',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'leave'
    }
  }, {
    path: 'shifts',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'shifts'
    }
  }, {
    path: 'payroll',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'payroll'
    }
  }, {
    path: 'recruitment',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'recruitment'
    }
  }, {
    path: 'onboarding',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'onboarding'
    }
  }, {
    path: 'performance',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'performance'
    }
  }, {
    path: 'training',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'training'
    }
  }, {
    path: 'documents',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'documents'
    }
  }, {
    path: 'announcements',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'announcements'
    }
  }, {
    path: 'reports',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'reports'
    }
  }, {
    path: 'users',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'users'
    }
  }, {
    path: 'roles',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'roles'
    }
  }, {
    path: 'settings',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'settings'
    }
  }, {
    path: 'audit-logs',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'audit-logs'
    }
  }, {
    path: 'admin',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_index_ts"), __webpack_require__.e("src_app_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 6541)).then(m => m.AdminModule),
    canLoad: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
    data: {
      roles: ['ADMIN', 'HR', 'TL', 'EMPLOYEE']
    }
  }, {
    path: 'team',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team'
    }
  }, {
    path: 'team/attendance',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team-attendance'
    }
  }, {
    path: 'team/leave',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team-leave'
    }
  }, {
    path: 'team/tasks',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team-tasks'
    }
  }, {
    path: 'team/performance',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team-performance'
    }
  }, {
    path: 'team/kpi',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team-kpi'
    }
  }, {
    path: 'team/reports',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'team-reports'
    }
  }, {
    path: 'tl',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_index_ts"), __webpack_require__.e("src_app_modules_team-lead_team-lead_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/team-lead/team-lead.module */ 6481)).then(m => m.TeamLeadModule),
    canLoad: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
    data: {
      roles: ['TL']
    }
  }, {
    path: 'my-profile',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-profile'
    }
  }, {
    path: 'my-attendance',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-attendance'
    }
  }, {
    path: 'check-in-out',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'check-in-out'
    }
  }, {
    path: 'break-tracker',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'break-tracker'
    }
  }, {
    path: 'daily-work-update',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'daily-work-update'
    }
  }, {
    path: 'my-leave',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-leave'
    }
  }, {
    path: 'apply-leave',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'apply-leave'
    }
  }, {
    path: 'my-payslips',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-payslips'
    }
  }, {
    path: 'my-tasks',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-tasks'
    }
  }, {
    path: 'my-performance',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-performance'
    }
  }, {
    path: 'my-documents',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'my-documents'
    }
  }, {
    path: 'notifications',
    canActivate: [_core_guards_role_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.RoleRedirectGuard],
    children: [],
    data: {
      feature: 'notifications'
    }
  }, {
    path: 'hr',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_index_ts"), __webpack_require__.e("src_app_modules_hr_hr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/hr/hr.module */ 447)).then(m => m.HrModule),
    canLoad: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
    data: {
      roles: ['HR']
    }
  }, {
    path: 'employee',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_index_ts"), __webpack_require__.e("src_app_modules_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/employee/employee.module */ 1631)).then(m => m.EmployeeModule),
    canLoad: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
    data: {
      roles: ['ADMIN', 'HR', 'TL', 'EMPLOYEE']
    }
  }]
}, {
  path: 'unauthorized',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_components_unauthorized_unauthorized_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/components/unauthorized/unauthorized.module */ 9814)).then(m => m.UnauthorizedModule)
}, {
  path: '**',
  redirectTo: '/dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/toast/toast.component */ 6029);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/loading-spinner/loading-spinner.component */ 4333);




class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-toast")(1, "app-loading-spinner")(2, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinnerComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ 3622);
/* harmony import */ var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/interceptors/loading.interceptor */ 5196);
/* harmony import */ var _layout_main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/main-layout/main-layout.module */ 8822);
/* harmony import */ var _auth_login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.module */ 8762);
/* harmony import */ var _auth_register_register_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.module */ 4674);
/* harmony import */ var _auth_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/forgot-password/forgot-password.module */ 7158);
/* harmony import */ var _auth_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/reset-password/reset-password.module */ 7414);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);













class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
        useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
        useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_3__.LoadingInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _layout_main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_4__.MainLayoutModule, _auth_login_login_module__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _auth_register_register_module__WEBPACK_IMPORTED_MODULE_6__.RegisterModule, _auth_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordModule, _auth_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _layout_main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_4__.MainLayoutModule, _auth_login_login_module__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _auth_register_register_module__WEBPACK_IMPORTED_MODULE_6__.RegisterModule, _auth_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordModule, _auth_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
  });
})();

/***/ }),

/***/ 5783:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function ForgotPasswordComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password reset link sent! Check your inbox. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_form_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_form_78_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_form_78_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 56)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Send Reset Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.email);
  }
}
class ForgotPasswordComponent {
  constructor(router) {
    this.router = router;
    this.email = '';
    this.submitted = false;
    this.isDarkMode = false;
  }
  ngOnInit() {
    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }
  onSubmit() {
    if (this.email) {
      this.submitted = true;
    }
  }
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 84,
      vars: 4,
      consts: [[1, "auth-wrapper"], [1, "auth-hero"], [1, "hero-bg-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "hero-brand"], [1, "brand-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z", "fill", "white"], ["d", "M6 12C7.38071 12 8.5 10.8807 8.5 9.5C8.5 8.11929 7.38071 7 6 7C4.61929 7 3.5 8.11929 3.5 9.5C3.5 10.8807 4.61929 12 6 12Z", "fill", "white", "opacity", "0.8"], ["d", "M18 12C19.3807 12 20.5 10.8807 20.5 9.5C20.5 8.11929 19.3807 7 18 7C16.6193 7 15.5 8.11929 15.5 9.5C15.5 10.8807 16.6193 12 18 12Z", "fill", "white", "opacity", "0.8"], ["d", "M12 12.5C9.33 12.5 4 13.84 4 16.5V18.5H20V16.5C20 13.84 14.67 12.5 12 12.5Z", "fill", "white"], ["d", "M6 13.5C4.83 13.5 2 14.12 2 15.5V17H3.5V15.5C3.5 14.73 5.09 13.9 6 13.65V13.5Z", "fill", "white", "opacity", "0.7"], ["d", "M18 13.5C18.91 13.9 20.5 14.73 20.5 15.5V17H22V15.5C22 14.12 19.17 13.5 18 13.5Z", "fill", "white", "opacity", "0.7"], [1, "brand-text"], [1, "brand-title"], [1, "brand-subtitle"], [1, "hero-headline"], [1, "text-cyan"], [1, "hero-sub"], [1, "hero-features"], [1, "feature-card"], [1, "feature-icon", "icon-blue"], [1, "fas", "fa-users"], [1, "feature-details"], [1, "feature-title"], [1, "feature-sub"], [1, "feature-icon", "icon-purple"], [1, "fas", "fa-calendar-alt"], [1, "feature-icon", "icon-teal"], [1, "fas", "fa-chart-line"], [1, "hero-footer"], [1, "powered-by"], [1, "fas", "fa-infinity", "spinning-icon"], [1, "carousel-dots"], [1, "dot", "active"], [1, "dot"], [1, "wave-separator"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "none"], ["d", "M0,0 C40,30 40,70 0,100 L100,100 L100,0 Z", "fill", "currentColor"], [1, "auth-form-panel"], [1, "form-content"], [1, "form-header"], ["class", "alert-success-banner", 4, "ngIf"], ["class", "main-form", 3, "ngSubmit", 4, "ngIf"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "link-bold-blue"], [1, "alert-success-banner"], [1, "fas", "fa-check-circle"], [1, "main-form", 3, "ngSubmit"], [1, "form-field"], [1, "field-wrapper"], [1, "fas", "fa-envelope", "field-icon"], ["type", "email", "name", "email", "placeholder", "you@company.com", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "fas", "fa-arrow-right", "arrow-icon"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16)(17, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HRM");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HUMAN RESOURCE MANAGEMENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19)(22, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " People");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Process");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Together. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Reset your password securely and regain access to your HRM workspace. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26)(38, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Employee Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "People \u2022 Roles \u2022 Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23)(43, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26)(46, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Leave & Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Track \u2022 Approve \u2022 Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23)(51, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26)(54, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Performance & Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Data \u2022 Decisions \u2022 Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33)(59, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Powered by Envision Beyond");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 37)(65, "span", 38)(66, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42)(71, "div", 43)(72, "div", 44)(73, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Enter your email address and we'll send you a password reset link.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ForgotPasswordComponent_div_77_Template, 3, 0, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ForgotPasswordComponent_form_78_Template, 11, 2, "form", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 47)(80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Remember your password? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-mode", ctx.isDarkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n  flex: 1.15;\n  position: relative;\n  background: linear-gradient(140deg, #091338 0%, #153298 55%, #182873 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  color: #ffffff;\n  overflow: hidden;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb1 7s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -80px;\n  left: -60px;\n  width: 340px;\n  height: 340px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(168, 85, 247, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb2 9s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  right: 12%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  animation: _ngcontent-%COMP%_floatOrb3 8s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.8s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(5deg) scale(1.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  display: block;\n  line-height: 1;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: #93c5fd;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.12;\n  letter-spacing: -0.5px;\n  margin: 0;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .text-cyan[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #38bdf8 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: _ngcontent-%COMP%_textShimmer 4s linear infinite;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #bfdbfe;\n  margin-top: 16px;\n  max-width: 420px;\n  line-height: 1.55;\n  font-weight: 400;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 440px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateX(6px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.35);\n  transform: translateX(8px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.3);\n  color: #c084fc;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-teal[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.3);\n  color: #2dd4bf;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #93c5fd;\n  display: block;\n  margin-top: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #93c5fd;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #38bdf8;\n  box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: 0;\n  width: 48px;\n  pointer-events: none;\n  z-index: 1;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #f8fafc;\n  transition: color 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8fafc;\n  padding: 32px 48px;\n  position: relative;\n  overflow-y: auto;\n  justify-content: space-between;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  border-color: #cbd5e1;\n  transform: rotate(30deg) scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: auto;\n  padding: 16px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n  letter-spacing: -0.4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  background: #eff6ff;\n  border: 1px solid #dbeafe;\n  padding: 8px 12px;\n  border-radius: 10px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1d4ed8;\n  margin-right: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid #bfdbfe;\n  background: #ffffff;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #1e40af;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  transform: translateY(-1px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 540px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n  flex-shrink: 0;\n  transition: color 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within   .field-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 12px 0;\n  font-size: 14px;\n  color: #0f172a;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-error-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #2563eb;\n  width: 15px;\n  height: 15px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .alert-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border: none;\n  border-radius: 12px;\n  background: #2563eb;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 8px 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  padding: 0 12px;\n  font-size: 13px;\n  color: #94a3b8;\n  font-weight: 500;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  background: #ffffff;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 700;\n  margin-left: 4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #fbbf24;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  border-color: #475569;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.4);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #93c5fd;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_floatOrb1 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-24px) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb2 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-30px) scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb3 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-18px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_textShimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n\n.alert-success-banner[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 14px;\n  font-size: 14px;\n  color: #166534;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVGQUFBO0VBQ0EseUJBQUE7RUFFQSw2QkFBQTtFQXlSQSw2QkFBQTtFQWtYQSw2QkFBQTtFQWlGQSxnQ0FBQTtFQW9DQSwyQkFBQTtBQzV2QkY7QURIRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tKO0FESEk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNLTjtBREhNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRkFBQTtFQUNBLHNEQUFBO0FDS1I7QURGTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkZBQUE7RUFDQSxzREFBQTtBQ0lSO0FERE07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0RBQUE7QUNHUjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ047QURFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFB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QTtFQ3RFUDtBQUNGO0FEd0VFO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUNwRXJCO0VEcUVFO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VDakVuQjtBQUNGO0FEbUVFO0VBQ0U7SUFBTyxVQUFBO0lBQVksNEJBQUE7RUMvRHJCO0VEZ0VFO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VDNURuQjtBQUNGO0FEK0RFO0VBQ0U7SUFDRSxhQUFBO0VDN0RKO0VEK0RFO0lBQ0Usa0JBQUE7RUM3REo7QUFDRjs7QUEvc0JBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFrdEJGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxuXHJcbiAgLyogLS0tIExFRlQgSEVSTyBCQU5ORVIgLS0tICovXHJcbiAgLmF1dGgtaGVybyB7XHJcbiAgICBmbGV4OiAxLjE1O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgIzA5MTMzOCAwJSwgIzE1MzI5OCA1NSUsICMxODI4NzMgMTAwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDQ4cHggNTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaGVyby1iZy1zaGFwZXMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGluc2V0OiAwO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgei1pbmRleDogMDtcclxuXHJcbiAgICAgIC5zaGFwZS0xIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtODBweDtcclxuICAgICAgICByaWdodDogLTYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjI1KSAwJSwgcmdiYSg1NiwgMTg5LCAyNDgsIDApIDcwJSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmbG9hdE9yYjEgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2hhcGUtMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTgwcHg7XHJcbiAgICAgICAgbGVmdDogLTYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTY4LCA4NSwgMjQ3LCAwLjIyKSAwJSwgcmdiYSgxNjgsIDg1LCAyNDcsIDApIDcwJSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmbG9hdE9yYjIgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2hhcGUtMyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIHJpZ2h0OiAxMiU7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmbG9hdE9yYjMgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tY29udGVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tYnJhbmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDE0cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjhzIGVhc2Utb3V0O1xyXG5cclxuICAgICAgLmJyYW5kLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnJhbmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJyYW5kLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTNjNWZkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWhlYWRsaW5lIHtcclxuICAgICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMC45cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xMjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtY3lhbiB7XHJcbiAgICAgICAgY29sb3I6ICMzOGJkZjg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4YmRmOCAwJSwgIzYwYTVmYSA1MCUsICMzOGJkZjggMTAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGFuaW1hdGlvbjogdGV4dFNoaW1tZXIgNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGVyby1zdWIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2JmZGJmZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWZlYXR1cmVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDQ0MHB4O1xyXG5cclxuICAgICAgLmZlYXR1cmUtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZS1jYXJkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuXHJcbiAgICAgICAgICAuZmVhdHVyZS1pY29uIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZlYXR1cmUtaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAgICYuaWNvbi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjBhNWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5pY29uLXB1cnBsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTY4LCA4NSwgMjQ3LCAwLjMpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2MwODRmYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuaWNvbi10ZWFsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMTg0LCAxNjYsIDAuMyk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmRkNGJmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZlYXR1cmUtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmVhdHVyZS1zdWIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcclxuXHJcbiAgICAgIC5wb3dlcmVkLWJ5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTNjNWZkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgIC5zcGlubmluZy1pY29uIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJvdXNlbC1kb3RzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzhiZGY4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDU2LCAxODksIDI0OCwgMC42KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2F2ZS1zZXBhcmF0b3Ige1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmOGZhZmM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gUklHSFQgRk9STSBQQU5FTCAtLS0gKi9cclxuICAuYXV0aC1mb3JtLXBhbmVsIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDQ4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcblxyXG4gICAgLnRvcC1iYXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC50aGVtZS1zd2l0Y2gge1xyXG4gICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC42cyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbW8tYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZWFmZTtcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAuZGVtby1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMxZDRlZDg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZW1vLWNoaXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMWU0MGFmO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JpZC0yY29sIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICBnYXA6IDE0cHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiA2cHg7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5maWVsZC13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcblxyXG4gICAgICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjEyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZmllbGQtZXJyb3Ige1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xyXG4gICAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgyMzksIDY4LCA2OCwgMC4xMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmllbGQtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpmb2N1cy13aXRoaW4gLmZpZWxkLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXllLXRvZ2dsZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5maWVsZC1lcnJvci1tc2cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogI2VmNDQ0NDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkLW9wdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcblxyXG4gICAgICAucmVtZW1iZXItbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBhY2NlbnQtY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saW5rLWJsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWxlcnQtYmFubmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjOTkxYjFiO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTNweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgzNywgOTksIDIzNSwgMC4zNSk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zcGlubmVyIHtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2aWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWdvb2dsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1mb290ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAubGluay1ib2xkLWJsdWUge1xyXG4gICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gREFSSyBNT0RFIFNUWUxFUyAtLS0gKi9cclxuICAmLmRhcmstbW9kZSB7XHJcbiAgICAuYXV0aC1oZXJvIC53YXZlLXNlcGFyYXRvciBzdmcge1xyXG4gICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aC1mb3JtLXBhbmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICAgICAgY29sb3I6ICNmOGZhZmM7XHJcblxyXG4gICAgICAudG9wLWJhciAudGhlbWUtc3dpdGNoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzMzNDE1NTtcclxuICAgICAgICBjb2xvcjogI2ZiYmYyNDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM0NzU1Njk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1oZWFkZXIge1xyXG4gICAgICAgIGgyIHsgY29sb3I6ICNmOGZhZmM7IH1cclxuICAgICAgICBwIHsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbW8tYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCA1OCwgMTM4LCAwLjQpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XHJcblxyXG4gICAgICAgIC5kZW1vLWxhYmVsIHsgY29sb3I6ICM5M2M1ZmQ7IH1cclxuICAgICAgICAuZGVtby1jaGlwIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICAgICAgICBjb2xvcjogIzkzYzVmZDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzMzNDE1NTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgICAgbGFiZWwgeyBjb2xvcjogI2NiZDVlMTsgfVxyXG5cclxuICAgICAgICAuZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xyXG5cclxuICAgICAgICAgIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y4ZmFmYztcclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpZWxkLW9wdGlvbnMgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgICY6OmJlZm9yZSB7IGJhY2tncm91bmQ6ICMzMzQxNTU7IH1cclxuICAgICAgICBzcGFuIHsgYmFja2dyb3VuZDogIzBmMTcyYTsgY29sb3I6ICM2NDc0OGI7IH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0bi1nb29nbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICAgIGNvbG9yOiAjZjhmYWZjO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzQxNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1mb290ZXIgcCB7XHJcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBLRVlGUkFNRSBBTklNQVRJT05TIC0tLSAqL1xyXG4gIEBrZXlmcmFtZXMgZmxvYXRPcmIxIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KSBzY2FsZSgxLjA4KTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBmbG9hdE9yYjIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHNjYWxlKDEuMSk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmxvYXRPcmIzIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KSBzY2FsZSgxLjA1KTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyB0ZXh0U2hpbW1lciB7XHJcbiAgICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTsgfVxyXG4gICAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgNTAlOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cclxuICAgIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cclxuICAgIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlIEFkanVzdG1lbnRzICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmF1dGgtaGVybyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYXV0aC1mb3JtLXBhbmVsIHtcclxuICAgICAgcGFkZGluZzogMzJweCAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIkBpbXBvcnQgJy4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzJztcclxuXHJcbi5hbGVydC1zdWNjZXNzLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogI2YwZmRmNDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMxNjY1MzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7158:
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordModule: () => (/* binding */ ForgotPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class ForgotPasswordModule {
  static {
    this.ɵfac = function ForgotPasswordModule_Factory(t) {
      return new (t || ForgotPasswordModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ForgotPasswordModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordModule, {
    declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6539:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function LoginComponent_span_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
function LoginComponent_span_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 73);
  }
}
function LoginComponent_i_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 74);
  }
}
class LoginComponent {
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.loading = false;
    this.showPassword = false;
    this.errorMessage = '';
    this.returnUrl = '/dashboard';
    this.isDarkMode = false;
    this.activeDot = 0;
    this.heroSlides = [{
      title: 'Employee Management',
      sub: 'People • Roles • Growth',
      quote: 'A smarter way to manage your workforce from hiring to growth — all in one place.'
    }, {
      title: 'Leave & Attendance',
      sub: 'Track • Approve • Insights',
      quote: 'Real-time tracking, intelligent leave approvals, and seamless attendance management.'
    }, {
      title: 'Performance & Reports',
      sub: 'Data • Decisions • Success',
      quote: 'Actionable analytics, appraisal reviews, and data-driven workforce decisions.'
    }];
  }
  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      rememberMe: [false]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
    this.carouselInterval = setInterval(() => {
      this.activeDot = (this.activeDot + 1) % 3;
    }, 3500);
  }
  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
  setSlide(index) {
    this.activeDot = index;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }
  fillDemo(email) {
    this.loginForm.patchValue({
      email,
      password: 'password123'
    });
  }
  isFieldInvalid(field) {
    const f = this.loginForm.get(field);
    return !!(f && f.invalid && (f.dirty || f.touched));
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    const {
      email,
      password
    } = this.loginForm.value;
    this.authService.login({
      email,
      password
    }).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error: err => {
        this.errorMessage = err.message || 'Login failed. Please try again.';
        this.loading = false;
      }
    });
  }
  loginWithGoogle() {
    this.loading = true;
    this.authService.login({
      email: 'emp@hrm.com',
      password: 'password123'
    }).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 123,
      vars: 29,
      consts: [[1, "auth-wrapper"], [1, "auth-hero"], [1, "hero-bg-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "hero-brand"], [1, "brand-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z", "fill", "white"], ["d", "M6 12C7.38071 12 8.5 10.8807 8.5 9.5C8.5 8.11929 7.38071 7 6 7C4.61929 7 3.5 8.11929 3.5 9.5C3.5 10.8807 4.61929 12 6 12Z", "fill", "white", "opacity", "0.8"], ["d", "M18 12C19.3807 12 20.5 10.8807 20.5 9.5C20.5 8.11929 19.3807 7 18 7C16.6193 7 15.5 8.11929 15.5 9.5C15.5 10.8807 16.6193 12 18 12Z", "fill", "white", "opacity", "0.8"], ["d", "M12 12.5C9.33 12.5 4 13.84 4 16.5V18.5H20V16.5C20 13.84 14.67 12.5 12 12.5Z", "fill", "white"], ["d", "M6 13.5C4.83 13.5 2 14.12 2 15.5V17H3.5V15.5C3.5 14.73 5.09 13.9 6 13.65V13.5Z", "fill", "white", "opacity", "0.7"], ["d", "M18 13.5C18.91 13.9 20.5 14.73 20.5 15.5V17H22V15.5C22 14.12 19.17 13.5 18 13.5Z", "fill", "white", "opacity", "0.7"], [1, "brand-text"], [1, "brand-title"], [1, "brand-subtitle"], [1, "hero-headline"], [1, "text-cyan"], [1, "hero-sub"], [1, "hero-features"], [1, "feature-card", 3, "click"], [1, "feature-icon", "icon-blue"], [1, "fas", "fa-users"], [1, "feature-details"], [1, "feature-title"], [1, "feature-sub"], [1, "feature-icon", "icon-purple"], [1, "fas", "fa-calendar-alt"], [1, "feature-icon", "icon-teal"], [1, "fas", "fa-chart-line"], [1, "hero-footer"], [1, "powered-by"], [1, "fas", "fa-infinity", "spinning-icon"], [1, "carousel-dots"], [1, "dot", 3, "click"], [1, "wave-separator"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "none"], ["d", "M0,0 C40,30 40,70 0,100 L100,100 L100,0 Z", "fill", "currentColor"], [1, "auth-form-panel"], [1, "form-content"], [1, "form-header"], [1, "main-form", 3, "formGroup", "ngSubmit"], [1, "form-field"], [1, "field-wrapper"], [1, "fas", "fa-envelope", "field-icon"], ["type", "email", "formControlName", "email", "placeholder", "you@company.com"], ["class", "field-error-msg", 4, "ngIf"], [1, "fas", "fa-lock", "field-icon"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], ["type", "button", 1, "eye-toggle", 3, "click"], [1, "field-options"], [1, "remember-me"], ["type", "checkbox", "formControlName", "rememberMe"], ["routerLink", "/auth/forgot-password", 1, "link-blue"], ["class", "alert-banner", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "fas fa-arrow-right arrow-icon", 4, "ngIf"], [1, "divider"], ["type", "button", 1, "btn-google", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18"], ["d", "M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.617z", "fill", "#4285F4"], ["d", "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z", "fill", "#34A853"], ["d", "M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z", "fill", "#FBBC05"], ["d", "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z", "fill", "#EA4335"], [1, "form-footer"], ["routerLink", "/auth/register", 1, "link-bold-blue"], [1, "field-error-msg"], [1, "alert-banner"], [1, "fas", "fa-exclamation-circle"], [1, "spinner"], [1, "fas", "fa-arrow-right", "arrow-icon"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16)(17, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "HRM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "HUMAN RESOURCE MANAGEMENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19)(22, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " People");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Process");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Together. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " A smarter way to manage your workforce from hiring to growth \u2014 all in one place. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22)(34, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_34_listener() {
            return ctx.setSlide(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26)(38, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Employee Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "People \u2022 Roles \u2022 Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_42_listener() {
            return ctx.setSlide(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26)(46, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Leave & Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Track \u2022 Approve \u2022 Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_50_listener() {
            return ctx.setSlide(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26)(54, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Performance & Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Data \u2022 Decisions \u2022 Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33)(59, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Powered by Envision Beyond");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 36)(64, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_64_listener() {
            return ctx.setSlide(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_65_listener() {
            return ctx.setSlide(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_66_listener() {
            return ctx.setSlide(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "svg", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "path", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 41)(71, "div", 42)(72, "div", 43)(73, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Welcome back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Sign in to your HRM portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "form", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_77_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 45)(79, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 47)(83, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, LoginComponent_span_84_Template, 2, 0, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 45)(86, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 50)(90, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_91_listener() {
            return ctx.showPassword = !ctx.showPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, LoginComponent_span_93_Template, 2, 0, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 53)(95, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Remember me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, LoginComponent_div_101_Template, 3, 1, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, LoginComponent_span_103_Template, 1, 0, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, LoginComponent_i_106_Template, 1, 0, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 61)(108, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Or");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_110_listener() {
            return ctx.loginWithGoogle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "svg", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "path", 64)(113, "path", 65)(114, "path", 66)(115, "path", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Continue with Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 68)(119, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Create an account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dark-mode", ctx.isDarkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-card", ctx.activeDot === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-card", ctx.activeDot === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-card", ctx.activeDot === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeDot === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeDot === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeDot === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "Signing in..." : "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n  flex: 1.15;\n  position: relative;\n  background: linear-gradient(140deg, #091338 0%, #153298 55%, #182873 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  color: #ffffff;\n  overflow: hidden;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb1 7s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -80px;\n  left: -60px;\n  width: 340px;\n  height: 340px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(168, 85, 247, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb2 9s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  right: 12%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  animation: _ngcontent-%COMP%_floatOrb3 8s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.8s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(5deg) scale(1.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  display: block;\n  line-height: 1;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: #93c5fd;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.12;\n  letter-spacing: -0.5px;\n  margin: 0;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .text-cyan[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #38bdf8 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: _ngcontent-%COMP%_textShimmer 4s linear infinite;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #bfdbfe;\n  margin-top: 16px;\n  max-width: 420px;\n  line-height: 1.55;\n  font-weight: 400;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 440px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateX(6px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.35);\n  transform: translateX(8px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.3);\n  color: #c084fc;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-teal[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.3);\n  color: #2dd4bf;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #93c5fd;\n  display: block;\n  margin-top: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #93c5fd;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #38bdf8;\n  box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: 0;\n  width: 48px;\n  pointer-events: none;\n  z-index: 1;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #f8fafc;\n  transition: color 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8fafc;\n  padding: 32px 48px;\n  position: relative;\n  overflow-y: auto;\n  justify-content: space-between;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  border-color: #cbd5e1;\n  transform: rotate(30deg) scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: auto;\n  padding: 16px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n  letter-spacing: -0.4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  background: #eff6ff;\n  border: 1px solid #dbeafe;\n  padding: 8px 12px;\n  border-radius: 10px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1d4ed8;\n  margin-right: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid #bfdbfe;\n  background: #ffffff;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #1e40af;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  transform: translateY(-1px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 540px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n  flex-shrink: 0;\n  transition: color 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within   .field-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 12px 0;\n  font-size: 14px;\n  color: #0f172a;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-error-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #2563eb;\n  width: 15px;\n  height: 15px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .alert-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border: none;\n  border-radius: 12px;\n  background: #2563eb;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 8px 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  padding: 0 12px;\n  font-size: 13px;\n  color: #94a3b8;\n  font-weight: 500;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  background: #ffffff;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 700;\n  margin-left: 4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #fbbf24;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  border-color: #475569;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.4);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #93c5fd;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_floatOrb1 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-24px) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb2 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-30px) scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb3 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-18px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_textShimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1RkFBQTtFQUNBLHlCQUFBO0VBRUEsNkJBQUE7RUF5UkEsNkJBQUE7RUFrWEEsNkJBQUE7RUFpRkEsZ0NBQUE7RUFvQ0EsMkJBQUE7QUE1dkJGO0FBSEU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjtBQUhJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBS047QUFITTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkZBQUE7RUFDQSxzREFBQTtBQUtSO0FBRk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQ0Esc0RBQUE7QUFJUjtBQURNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNEQUFBO0FBR1I7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUNOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUFBTjtBQUVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMENB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QkFBQTtFQWpFbkI7QUFDRjtBQW1FRTtFQUNFO0lBQU8sVUFBQTtJQUFZLDRCQUFBO0VBL0RyQjtFQWdFRTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQTVEbkI7QUFDRjtBQStERTtFQUNFO0lBQ0UsYUFBQTtFQTdESjtFQStERTtJQUNFLGtCQUFBO0VBN0RKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG5cclxuICAvKiAtLS0gTEVGVCBIRVJPIEJBTk5FUiAtLS0gKi9cclxuICAuYXV0aC1oZXJvIHtcclxuICAgIGZsZXg6IDEuMTU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjMDkxMzM4IDAlLCAjMTUzMjk4IDU1JSwgIzE4Mjg3MyAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNDhweCA1NnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5oZXJvLWJnLXNoYXBlcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaW5zZXQ6IDA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICAgLnNoYXBlLTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtNjBweDtcclxuICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg1NiwgMTg5LCAyNDgsIDAuMjUpIDAlLCByZ2JhKDU2LCAxODksIDI0OCwgMCkgNzAlKTtcclxuICAgICAgICBhbmltYXRpb246IGZsb2F0T3JiMSA3cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaGFwZS0yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtODBweDtcclxuICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNjgsIDg1LCAyNDcsIDAuMjIpIDAlLCByZ2JhKDE2OCwgODUsIDI0NywgMCkgNzAlKTtcclxuICAgICAgICBhbmltYXRpb246IGZsb2F0T3JiMiA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaGFwZS0zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgcmlnaHQ6IDEyJTtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcclxuICAgICAgICBhbmltYXRpb246IGZsb2F0T3JiMyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1icmFuZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTRweDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuOHMgZWFzZS1vdXQ7XHJcblxyXG4gICAgICAuYnJhbmQtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5icmFuZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnJhbmQtc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8taGVhZGxpbmUge1xyXG4gICAgICBtYXJnaW46IDMycHggMDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjlzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1jeWFuIHtcclxuICAgICAgICBjb2xvcjogIzM4YmRmODtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzhiZGY4IDAlLCAjNjBhNWZhIDUwJSwgIzM4YmRmOCAxMDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB0ZXh0U2hpbW1lciA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZXJvLXN1YiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjYmZkYmZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41NTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tZmVhdHVyZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIG1heC13aWR0aDogNDQwcHg7XHJcblxyXG4gICAgICAuZmVhdHVyZS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlLWNhcmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG5cclxuICAgICAgICAgIC5mZWF0dXJlLWljb24ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmVhdHVyZS1pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgJi5pY29uLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcclxuICAgICAgICAgICAgY29sb3I6ICM2MGE1ZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmljb24tcHVycGxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjgsIDg1LCAyNDcsIDAuMyk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzA4NGZjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5pY29uLXRlYWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAxODQsIDE2NiwgMC4zKTtcclxuICAgICAgICAgICAgY29sb3I6ICMyZGQ0YmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmVhdHVyZS10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mZWF0dXJlLXN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzkzYzVmZDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWZvb3RlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xyXG5cclxuICAgICAgLnBvd2VyZWQtYnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgLnNwaW5uaW5nLWljb24ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcm91c2VsLWRvdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRvdCB7XHJcbiAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOGJkZjg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53YXZlLXNlcGFyYXRvciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogLTFweDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2Y4ZmFmYztcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBSSUdIVCBGT1JNIFBBTkVMIC0tLSAqL1xyXG4gIC5hdXRoLWZvcm0tcGFuZWwge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgIHBhZGRpbmc6IDMycHggNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuXHJcbiAgICAudG9wLWJhciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLnRoZW1lLXN3aXRjaCB7XHJcbiAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2NhbGUoMS4xKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGVtby1iYXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJlYWZlO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgIC5kZW1vLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzFkNGVkODtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbW8tY2hpcCB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxZTQwYWY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncmlkLTJjb2wge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgIGdhcDogMTRweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDZweDtcclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuXHJcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5maWVsZC1lcnJvciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XHJcbiAgICAgICAgICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjEyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWVsZC1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzLXdpdGhpbiAuZmllbGQtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leWUtdG9nZ2xlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpZWxkLWVycm9yLW1zZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQtb3B0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuXHJcbiAgICAgIC5yZW1lbWJlci1tZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGFjY2VudC1jb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmstYmx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbGVydC1iYW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM5OTFiMWI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjM1KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZDRlZDg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXJyb3ctaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW5uZXIge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYW5pbWF0aW9uOiBzcGluIDAuNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXZpZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZ29vZ2xlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWZvb3RlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIC5saW5rLWJvbGQtYmx1ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBEQVJLIE1PREUgU1RZTEVTIC0tLSAqL1xyXG4gICYuZGFyay1tb2RlIHtcclxuICAgIC5hdXRoLWhlcm8gLndhdmUtc2VwYXJhdG9yIHN2ZyB7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRoLWZvcm0tcGFuZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gICAgICBjb2xvcjogI2Y4ZmFmYztcclxuXHJcbiAgICAgIC50b3AtYmFyIC50aGVtZS1zd2l0Y2gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICAgIGNvbG9yOiAjZmJiZjI0O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQ3NTU2OTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWhlYWRlciB7XHJcbiAgICAgICAgaDIgeyBjb2xvcjogI2Y4ZmFmYzsgfVxyXG4gICAgICAgIHAgeyBjb2xvcjogIzk0YTNiODsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVtby1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDU4LCAxMzgsIDAuNCk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcclxuXHJcbiAgICAgICAgLmRlbW8tbGFiZWwgeyBjb2xvcjogIzkzYzVmZDsgfVxyXG4gICAgICAgIC5kZW1vLWNoaXAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgICAgICAgIGNvbG9yOiAjOTNjNWZkO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICBsYWJlbCB7IGNvbG9yOiAjY2JkNWUxOyB9XHJcblxyXG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMzMzQxNTU7XHJcblxyXG4gICAgICAgICAgaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjhmYWZjO1xyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmllbGQtb3B0aW9ucyAucmVtZW1iZXItbWUge1xyXG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgJjo6YmVmb3JlIHsgYmFja2dyb3VuZDogIzMzNDE1NTsgfVxyXG4gICAgICAgIHNwYW4geyBiYWNrZ3JvdW5kOiAjMGYxNzJhOyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnRuLWdvb2dsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgICAgY29sb3I6ICNmOGZhZmM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzNDE1NTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIEtFWUZSQU1FIEFOSU1BVElPTlMgLS0tICovXHJcbiAgQGtleWZyYW1lcyBmbG9hdE9yYjEge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpIHNjYWxlKDEuMDgpOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZsb2F0T3JiMiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCkgc2NhbGUoMS4xKTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBmbG9hdE9yYjMge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpIHNjYWxlKDEuMDUpOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHRleHRTaGltbWVyIHtcclxuICAgIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XHJcbiAgICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSA1MCU7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICB9XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgQWRqdXN0bWVudHMgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuYXV0aC1oZXJvIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5hdXRoLWZvcm0tcGFuZWwge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8762:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 6539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class LoginModule {
  static {
    this.ɵfac = function LoginModule_Factory(t) {
      return new (t || LoginModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 9619:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);







function RegisterComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Minimum 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirmation required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You must accept the terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMessage, " ");
  }
}
function RegisterComponent_span_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 79);
  }
}
function RegisterComponent_i_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 80);
  }
}
class RegisterComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.errorMessage = '';
    this.isDarkMode = false;
    this.roles = [{
      value: _core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE,
      label: 'Employee'
    }, {
      value: _core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.TL,
      label: 'Team Lead'
    }, {
      value: _core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.HR,
      label: 'HR Manager'
    }, {
      value: _core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN,
      label: 'Administrator'
    }];
    this.departments = ['Engineering', 'Human Resources', 'Administration', 'Finance', 'Marketing', 'Sales'];
  }
  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.registerForm = this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      role: [_core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      department: ['Engineering', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }
  passwordMatchValidator(g) {
    const password = g.get('password')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {
      passwordMismatch: true
    };
  }
  isFieldInvalid(field) {
    const f = this.registerForm.get(field);
    return !!(f && f.invalid && (f.dirty || f.touched));
  }
  hasPasswordMismatch() {
    const confirmField = this.registerForm.get('confirmPassword');
    return !!(this.registerForm.hasError('passwordMismatch') && confirmField && (confirmField.dirty || confirmField.touched));
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      department
    } = this.registerForm.value;
    this.authService.register({
      firstName,
      lastName,
      email,
      password,
      role,
      department
    }).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.errorMessage = err.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }
  registerWithGoogle() {
    this.loading = true;
    this.authService.register({
      firstName: 'Google',
      lastName: 'User',
      email: 'user@gmail.com',
      password: 'password123',
      role: _core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE,
      department: 'Engineering'
    }).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 152,
      vars: 31,
      consts: [[1, "auth-wrapper"], [1, "auth-hero"], [1, "hero-bg-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "hero-brand"], [1, "brand-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z", "fill", "white"], ["d", "M6 12C7.38071 12 8.5 10.8807 8.5 9.5C8.5 8.11929 7.38071 7 6 7C4.61929 7 3.5 8.11929 3.5 9.5C3.5 10.8807 4.61929 12 6 12Z", "fill", "white", "opacity", "0.8"], ["d", "M18 12C19.3807 12 20.5 10.8807 20.5 9.5C20.5 8.11929 19.3807 7 18 7C16.6193 7 15.5 8.11929 15.5 9.5C15.5 10.8807 16.6193 12 18 12Z", "fill", "white", "opacity", "0.8"], ["d", "M12 12.5C9.33 12.5 4 13.84 4 16.5V18.5H20V16.5C20 13.84 14.67 12.5 12 12.5Z", "fill", "white"], ["d", "M6 13.5C4.83 13.5 2 14.12 2 15.5V17H3.5V15.5C3.5 14.73 5.09 13.9 6 13.65V13.5Z", "fill", "white", "opacity", "0.7"], ["d", "M18 13.5C18.91 13.9 20.5 14.73 20.5 15.5V17H22V15.5C22 14.12 19.17 13.5 18 13.5Z", "fill", "white", "opacity", "0.7"], [1, "brand-text"], [1, "brand-title"], [1, "brand-subtitle"], [1, "hero-headline"], [1, "text-cyan"], [1, "hero-sub"], [1, "hero-features"], [1, "feature-card"], [1, "feature-icon", "icon-blue"], [1, "fas", "fa-users"], [1, "feature-details"], [1, "feature-title"], [1, "feature-sub"], [1, "feature-icon", "icon-purple"], [1, "fas", "fa-calendar-alt"], [1, "feature-icon", "icon-teal"], [1, "fas", "fa-chart-line"], [1, "hero-footer"], [1, "powered-by"], [1, "fas", "fa-infinity", "spinning-icon"], [1, "carousel-dots"], [1, "dot", "active"], [1, "dot"], [1, "wave-separator"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "none"], ["d", "M0,0 C40,30 40,70 0,100 L100,100 L100,0 Z", "fill", "currentColor"], [1, "auth-form-panel"], [1, "form-content"], [1, "form-header"], [1, "main-form", 3, "formGroup", "ngSubmit"], [1, "form-grid-2col"], [1, "form-field"], [1, "field-wrapper"], [1, "fas", "fa-user", "field-icon"], ["type", "text", "formControlName", "firstName", "placeholder", "John"], ["class", "field-error-msg", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Doe"], [1, "fas", "fa-envelope", "field-icon"], ["type", "email", "formControlName", "email", "placeholder", "you@company.com"], [1, "fas", "fa-lock", "field-icon"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], ["type", "button", 1, "eye-toggle", 3, "click"], ["formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], [1, "field-options"], [1, "remember-me"], ["type", "checkbox", "formControlName", "acceptTerms"], ["routerLink", "/auth/register", 1, "link-blue"], ["class", "alert-banner", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "fas fa-arrow-right arrow-icon", 4, "ngIf"], [1, "divider"], ["type", "button", 1, "btn-google", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18"], ["d", "M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.617z", "fill", "#4285F4"], ["d", "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z", "fill", "#34A853"], ["d", "M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z", "fill", "#FBBC05"], ["d", "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z", "fill", "#EA4335"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "link-bold-blue"], [1, "field-error-msg"], [1, "alert-banner"], [1, "fas", "fa-exclamation-circle"], [1, "spinner"], [1, "fas", "fa-arrow-right", "arrow-icon"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "HRM");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "HUMAN RESOURCE MANAGEMENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 19)(22, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " People");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Process");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Together. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Create your account today and unlock a modern workforce management experience. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 26)(38, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Employee Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "People \u2022 Roles \u2022 Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23)(43, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26)(46, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Leave & Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Track \u2022 Approve \u2022 Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 23)(51, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 26)(54, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Performance & Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Data \u2022 Decisions \u2022 Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 33)(59, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Powered by Envision Beyond");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "span", 37)(65, "span", 38)(66, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "svg", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "path", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 42)(71, "div", 43)(72, "div", 44)(73, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Create an account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Sign up to get started with HRM portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "form", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_77_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 46)(79, "div", 47)(80, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "First name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 49)(84, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, RegisterComponent_span_85_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 47)(87, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Last name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 49)(91, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, RegisterComponent_span_92_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 47)(94, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "i", 53)(98, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, RegisterComponent_span_99_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 47)(101, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "i", 55)(105, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_106_listener() {
            return ctx.showPassword = !ctx.showPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, RegisterComponent_span_108_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 47)(110, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 55)(114, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_115_listener() {
            return ctx.showConfirmPassword = !ctx.showConfirmPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](117, RegisterComponent_span_117_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, RegisterComponent_span_118_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 59)(120, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "I agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "a", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Terms");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " & ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "a", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, RegisterComponent_span_129_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, RegisterComponent_div_130_Template, 3, 1, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, RegisterComponent_span_132_Template, 1, 0, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](135, RegisterComponent_i_135_Template, 1, 0, "i", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 67)(137, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Or");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "button", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_139_listener() {
            return ctx.registerWithGoogle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "svg", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "path", 70)(142, "path", 71)(143, "path", 72)(144, "path", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Continue with Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 74)(148, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "a", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dark-mode", ctx.isDarkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("firstName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("firstName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("lastName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("lastName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("field-error", ctx.isFieldInvalid("confirmPassword") || ctx.hasPasswordMismatch());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showConfirmPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasPasswordMismatch() && !ctx.isFieldInvalid("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("acceptTerms"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.loading ? "Creating Account..." : "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n  flex: 1.15;\n  position: relative;\n  background: linear-gradient(140deg, #091338 0%, #153298 55%, #182873 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  color: #ffffff;\n  overflow: hidden;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb1 7s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -80px;\n  left: -60px;\n  width: 340px;\n  height: 340px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(168, 85, 247, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb2 9s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  right: 12%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  animation: _ngcontent-%COMP%_floatOrb3 8s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.8s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(5deg) scale(1.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  display: block;\n  line-height: 1;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: #93c5fd;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.12;\n  letter-spacing: -0.5px;\n  margin: 0;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .text-cyan[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #38bdf8 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: _ngcontent-%COMP%_textShimmer 4s linear infinite;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #bfdbfe;\n  margin-top: 16px;\n  max-width: 420px;\n  line-height: 1.55;\n  font-weight: 400;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 440px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateX(6px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.35);\n  transform: translateX(8px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.3);\n  color: #c084fc;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-teal[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.3);\n  color: #2dd4bf;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #93c5fd;\n  display: block;\n  margin-top: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #93c5fd;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #38bdf8;\n  box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: 0;\n  width: 48px;\n  pointer-events: none;\n  z-index: 1;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #f8fafc;\n  transition: color 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8fafc;\n  padding: 32px 48px;\n  position: relative;\n  overflow-y: auto;\n  justify-content: space-between;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  border-color: #cbd5e1;\n  transform: rotate(30deg) scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: auto;\n  padding: 16px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n  letter-spacing: -0.4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  background: #eff6ff;\n  border: 1px solid #dbeafe;\n  padding: 8px 12px;\n  border-radius: 10px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1d4ed8;\n  margin-right: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid #bfdbfe;\n  background: #ffffff;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #1e40af;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  transform: translateY(-1px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 540px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n  flex-shrink: 0;\n  transition: color 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within   .field-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 12px 0;\n  font-size: 14px;\n  color: #0f172a;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-error-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #2563eb;\n  width: 15px;\n  height: 15px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .alert-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border: none;\n  border-radius: 12px;\n  background: #2563eb;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 8px 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  padding: 0 12px;\n  font-size: 13px;\n  color: #94a3b8;\n  font-weight: 500;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  background: #ffffff;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 700;\n  margin-left: 4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #fbbf24;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  border-color: #475569;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.4);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #93c5fd;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_floatOrb1 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-24px) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb2 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-30px) scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb3 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-18px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_textShimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1RkFBQTtFQUNBLHlCQUFBO0VBRUEsNkJBQUE7RUF5UkEsNkJBQUE7RUFrWEEsNkJBQUE7RUFpRkEsZ0NBQUE7RUFvQ0EsMkJBQUE7QUM1dkJGO0FESEU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSjtBREhJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDS047QURITTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkZBQUE7RUFDQSxzREFBQTtBQ0tSO0FERk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQ0Esc0RBQUE7QUNJUjtBRERNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNEQUFBO0FDR1I7QURDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NOO0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUNBTjtBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VB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RHdFRTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VDcEVyQjtFRHFFRTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQ2pFbkI7QUFDRjtBRG1FRTtFQUNFO0lBQU8sVUFBQTtJQUFZLDRCQUFBO0VDL0RyQjtFRGdFRTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQzVEbkI7QUFDRjtBRCtERTtFQUNFO0lBQ0UsYUFBQTtFQzdESjtFRCtERTtJQUNFLGtCQUFBO0VDN0RKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG5cclxuICAvKiAtLS0gTEVGVCBIRVJPIEJBTk5FUiAtLS0gKi9cclxuICAuYXV0aC1oZXJvIHtcclxuICAgIGZsZXg6IDEuMTU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjMDkxMzM4IDAlLCAjMTUzMjk4IDU1JSwgIzE4Mjg3MyAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNDhweCA1NnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5oZXJvLWJnLXNoYXBlcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaW5zZXQ6IDA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICAgLnNoYXBlLTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtNjBweDtcclxuICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg1NiwgMTg5LCAyNDgsIDAuMjUpIDAlLCByZ2JhKDU2LCAxODksIDI0OCwgMCkgNzAlKTtcclxuICAgICAgICBhbmltYXRpb246IGZsb2F0T3JiMSA3cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaGFwZS0yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtODBweDtcclxuICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNjgsIDg1LCAyNDcsIDAuMjIpIDAlLCByZ2JhKDE2OCwgODUsIDI0NywgMCkgNzAlKTtcclxuICAgICAgICBhbmltYXRpb246IGZsb2F0T3JiMiA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaGFwZS0zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgcmlnaHQ6IDEyJTtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcclxuICAgICAgICBhbmltYXRpb246IGZsb2F0T3JiMyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1icmFuZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTRweDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuOHMgZWFzZS1vdXQ7XHJcblxyXG4gICAgICAuYnJhbmQtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5icmFuZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnJhbmQtc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8taGVhZGxpbmUge1xyXG4gICAgICBtYXJnaW46IDMycHggMDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjlzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1jeWFuIHtcclxuICAgICAgICBjb2xvcjogIzM4YmRmODtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzhiZGY4IDAlLCAjNjBhNWZhIDUwJSwgIzM4YmRmOCAxMDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB0ZXh0U2hpbW1lciA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZXJvLXN1YiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjYmZkYmZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41NTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tZmVhdHVyZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIG1heC13aWR0aDogNDQwcHg7XHJcblxyXG4gICAgICAuZmVhdHVyZS1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlLWNhcmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG5cclxuICAgICAgICAgIC5mZWF0dXJlLWljb24ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmVhdHVyZS1pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgJi5pY29uLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcclxuICAgICAgICAgICAgY29sb3I6ICM2MGE1ZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmljb24tcHVycGxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjgsIDg1LCAyNDcsIDAuMyk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzA4NGZjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5pY29uLXRlYWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAxODQsIDE2NiwgMC4zKTtcclxuICAgICAgICAgICAgY29sb3I6ICMyZGQ0YmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmVhdHVyZS10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mZWF0dXJlLXN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzkzYzVmZDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWZvb3RlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xyXG5cclxuICAgICAgLnBvd2VyZWQtYnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgLnNwaW5uaW5nLWljb24ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcm91c2VsLWRvdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRvdCB7XHJcbiAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOGJkZjg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53YXZlLXNlcGFyYXRvciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogLTFweDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2Y4ZmFmYztcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBSSUdIVCBGT1JNIFBBTkVMIC0tLSAqL1xyXG4gIC5hdXRoLWZvcm0tcGFuZWwge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgIHBhZGRpbmc6IDMycHggNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuXHJcbiAgICAudG9wLWJhciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLnRoZW1lLXN3aXRjaCB7XHJcbiAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2NhbGUoMS4xKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGVtby1iYXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJlYWZlO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgIC5kZW1vLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzFkNGVkODtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbW8tY2hpcCB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxZTQwYWY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncmlkLTJjb2wge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgIGdhcDogMTRweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZmllbGQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDZweDtcclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuXHJcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5maWVsZC1lcnJvciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XHJcbiAgICAgICAgICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjEyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWVsZC1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzLXdpdGhpbiAuZmllbGQtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leWUtdG9nZ2xlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpZWxkLWVycm9yLW1zZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQtb3B0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuXHJcbiAgICAgIC5yZW1lbWJlci1tZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGFjY2VudC1jb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmstYmx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbGVydC1iYW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM5OTFiMWI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjM1KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZDRlZDg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXJyb3ctaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW5uZXIge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYW5pbWF0aW9uOiBzcGluIDAuNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXZpZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZ29vZ2xlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWZvb3RlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIC5saW5rLWJvbGQtYmx1ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBEQVJLIE1PREUgU1RZTEVTIC0tLSAqL1xyXG4gICYuZGFyay1tb2RlIHtcclxuICAgIC5hdXRoLWhlcm8gLndhdmUtc2VwYXJhdG9yIHN2ZyB7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRoLWZvcm0tcGFuZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gICAgICBjb2xvcjogI2Y4ZmFmYztcclxuXHJcbiAgICAgIC50b3AtYmFyIC50aGVtZS1zd2l0Y2gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICAgIGNvbG9yOiAjZmJiZjI0O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQ3NTU2OTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWhlYWRlciB7XHJcbiAgICAgICAgaDIgeyBjb2xvcjogI2Y4ZmFmYzsgfVxyXG4gICAgICAgIHAgeyBjb2xvcjogIzk0YTNiODsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVtby1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDU4LCAxMzgsIDAuNCk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4zKTtcclxuXHJcbiAgICAgICAgLmRlbW8tbGFiZWwgeyBjb2xvcjogIzkzYzVmZDsgfVxyXG4gICAgICAgIC5kZW1vLWNoaXAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgICAgICAgIGNvbG9yOiAjOTNjNWZkO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWZpZWxkIHtcclxuICAgICAgICBsYWJlbCB7IGNvbG9yOiAjY2JkNWUxOyB9XHJcblxyXG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMzMzQxNTU7XHJcblxyXG4gICAgICAgICAgaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjhmYWZjO1xyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmllbGQtb3B0aW9ucyAucmVtZW1iZXItbWUge1xyXG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgJjo6YmVmb3JlIHsgYmFja2dyb3VuZDogIzMzNDE1NTsgfVxyXG4gICAgICAgIHNwYW4geyBiYWNrZ3JvdW5kOiAjMGYxNzJhOyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnRuLWdvb2dsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgICAgY29sb3I6ICNmOGZhZmM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzNDE1NTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIEtFWUZSQU1FIEFOSU1BVElPTlMgLS0tICovXHJcbiAgQGtleWZyYW1lcyBmbG9hdE9yYjEge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpIHNjYWxlKDEuMDgpOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZsb2F0T3JiMiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCkgc2NhbGUoMS4xKTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBmbG9hdE9yYjMge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpIHNjYWxlKDEuMDUpOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHRleHRTaGltbWVyIHtcclxuICAgIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XHJcbiAgICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSA1MCU7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICB9XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgQWRqdXN0bWVudHMgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuYXV0aC1oZXJvIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5hdXRoLWZvcm0tcGFuZWwge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmF1dGgtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgLyogLS0tIExFRlQgSEVSTyBCQU5ORVIgLS0tICovXG4gIC8qIC0tLSBSSUdIVCBGT1JNIFBBTkVMIC0tLSAqL1xuICAvKiAtLS0gREFSSyBNT0RFIFNUWUxFUyAtLS0gKi9cbiAgLyogLS0tIEtFWUZSQU1FIEFOSU1BVElPTlMgLS0tICovXG4gIC8qIFJlc3BvbnNpdmUgQWRqdXN0bWVudHMgKi9cbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyB7XG4gIGZsZXg6IDEuMTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgIzA5MTMzOCAwJSwgIzE1MzI5OCA1NSUsICMxODI4NzMgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNDhweCA1NnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1iZy1zaGFwZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1iZy1zaGFwZXMgLnNoYXBlLTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTgwcHg7XG4gIHJpZ2h0OiAtNjBweDtcbiAgd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjI1KSAwJSwgcmdiYSg1NiwgMTg5LCAyNDgsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogZmxvYXRPcmIxIDdzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1iZy1zaGFwZXMgLnNoYXBlLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTgwcHg7XG4gIGxlZnQ6IC02MHB4O1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogMzQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNjgsIDg1LCAyNDcsIDAuMjIpIDAlLCByZ2JhKDE2OCwgODUsIDI0NywgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBmbG9hdE9yYjIgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1oZXJvIC5oZXJvLWJnLXNoYXBlcyAuc2hhcGUtMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIHJpZ2h0OiAxMiU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICBhbmltYXRpb246IGZsb2F0T3JiMyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjhzIGVhc2Utb3V0O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1oZXJvIC5oZXJvLWJyYW5kIC5icmFuZC1pY29uIHtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tYnJhbmQgLmJyYW5kLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjA1KTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1icmFuZCAuYnJhbmQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1icmFuZCAuYnJhbmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM5M2M1ZmQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1oZWFkbGluZSB7XG4gIG1hcmdpbjogMzJweCAwO1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuOXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8taGVhZGxpbmUgaDEge1xuICBmb250LXNpemU6IDQycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1oZXJvIC5oZXJvLWhlYWRsaW5lIC50ZXh0LWN5YW4ge1xuICBjb2xvcjogIzM4YmRmODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4YmRmOCAwJSwgIzYwYTVmYSA1MCUsICMzOGJkZjggMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHRleHRTaGltbWVyIDRzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1oZWFkbGluZSAuaGVyby1zdWIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjYmZkYmZlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBsaW5lLWhlaWdodDogMS41NTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mZWF0dXJlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWF4LXdpZHRoOiA0NDBweDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mZWF0dXJlcyAuZmVhdHVyZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mZWF0dXJlcyAuZmVhdHVyZS1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZmVhdHVyZXMgLmZlYXR1cmUtY2FyZC5hY3RpdmUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mZWF0dXJlcyAuZmVhdHVyZS1jYXJkLmFjdGl2ZS1jYXJkIC5mZWF0dXJlLWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCAuZmVhdHVyZS1pY29uIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCAuZmVhdHVyZS1pY29uLmljb24tYmx1ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpO1xuICBjb2xvcjogIzYwYTVmYTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mZWF0dXJlcyAuZmVhdHVyZS1jYXJkIC5mZWF0dXJlLWljb24uaWNvbi1wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2OCwgODUsIDI0NywgMC4zKTtcbiAgY29sb3I6ICNjMDg0ZmM7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCAuZmVhdHVyZS1pY29uLmljb24tdGVhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAsIDE4NCwgMTY2LCAwLjMpO1xuICBjb2xvcjogIzJkZDRiZjtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mZWF0dXJlcyAuZmVhdHVyZS1jYXJkIC5mZWF0dXJlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCAuZmVhdHVyZS1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTNjNWZkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1oZXJvIC5oZXJvLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1oZXJvIC5oZXJvLWZvb3RlciAucG93ZXJlZC1ieSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTNjNWZkO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1oZXJvIC5oZXJvLWZvb3RlciAucG93ZXJlZC1ieSAuc3Bpbm5pbmctaWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZm9vdGVyIC5wb3dlcmVkLWJ5IC5zcGlubmluZy1pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mb290ZXIgLmNhcm91c2VsLWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAuaGVyby1mb290ZXIgLmNhcm91c2VsLWRvdHMgLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZm9vdGVyIC5jYXJvdXNlbC1kb3RzIC5kb3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLmhlcm8tZm9vdGVyIC5jYXJvdXNlbC1kb3RzIC5kb3QuYWN0aXZlIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzM4YmRmODtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1NiwgMTg5LCAyNDgsIDAuNik7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWhlcm8gLndhdmUtc2VwYXJhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0OHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyAud2F2ZS1zZXBhcmF0b3Igc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIHBhZGRpbmc6IDMycHggNDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLnRvcC1iYXIgLnRoZW1lLXN3aXRjaCB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC50b3AtYmFyIC50aGVtZS1zd2l0Y2g6aG92ZXIge1xuICBjb2xvcjogIzI1NjNlYjtcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2NhbGUoMS4xKTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTZweCAwO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2Utb3V0O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0taGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgbWFyZ2luOiAwIDAgNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgbWFyZ2luOiAwO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmVhZmU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciAuZGVtby1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZDRlZDg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciAuZGVtby1jaGlwIHtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMWU0MGFmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciAuZGVtby1jaGlwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5tYWluLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZ3JpZC0yY29sIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWdyaWQtMmNvbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzNDE1NTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCAuZmllbGQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTIpO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyLmZpZWxkLWVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyLmZpZWxkLWVycm9yOmZvY3VzLXdpdGhpbiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjEyKTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCAuZmllbGQtd3JhcHBlciAuZmllbGQtaWNvbiB7XG4gIGNvbG9yOiAjOTRhM2I4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZmllbGQgLmZpZWxkLXdyYXBwZXI6Zm9jdXMtd2l0aGluIC5maWVsZC1pY29uIHtcbiAgY29sb3I6ICMyNTYzZWI7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZmllbGQgLmZpZWxkLXdyYXBwZXIgaW5wdXQsIC5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCAuZmllbGQtd3JhcHBlciBzZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyIGlucHV0OjpwbGFjZWhvbGRlciwgLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyIHNlbGVjdDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk0YTNiODtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCAuZmllbGQtd3JhcHBlciBzZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZmllbGQgLmZpZWxkLXdyYXBwZXIgLmV5ZS10b2dnbGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjOTRhM2I4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyIC5leWUtdG9nZ2xlOmhvdmVyIHtcbiAgY29sb3I6ICMyNTYzZWI7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZmllbGQgLmZpZWxkLWVycm9yLW1zZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlZjQ0NDQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZpZWxkLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZpZWxkLW9wdGlvbnMgLnJlbWVtYmVyLW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZmllbGQtb3B0aW9ucyAucmVtZW1iZXItbWUgaW5wdXQge1xuICBhY2NlbnQtY29sb3I6ICMyNTYzZWI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZpZWxkLW9wdGlvbnMgLmxpbmstYmx1ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMyNTYzZWI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZmllbGQtb3B0aW9ucyAubGluay1ibHVlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmFsZXJ0LWJhbm5lciB7XG4gIGJhY2tncm91bmQ6ICNmZWYyZjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzk5MWIxYjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmJ0bi1wcmltYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMzUpO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxZDRlZDg7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5idG4tcHJpbWFyeSAuYXJyb3ctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuc3Bpbm5lciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMC42cyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5kaXZpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmRpdmlkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2UyZThmMDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZGl2aWRlciBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5idG4tZ29vZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMxZTI5M2I7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1mb3JtLXBhbmVsIC5idG4tZ29vZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZm9vdGVyIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBtYXJnaW46IDA7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZm9vdGVyIHAgLmxpbmstYm9sZC1ibHVlIHtcbiAgY29sb3I6ICMyNTYzZWI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1mb290ZXIgcCAubGluay1ib2xkLWJsdWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5hdXRoLXdyYXBwZXIuZGFyay1tb2RlIC5hdXRoLWhlcm8gLndhdmUtc2VwYXJhdG9yIHN2ZyB7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gIGNvbG9yOiAjZjhmYWZjO1xufVxuLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCAudG9wLWJhciAudGhlbWUtc3dpdGNoIHtcbiAgYmFja2dyb3VuZDogIzFlMjkzYjtcbiAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xuICBjb2xvcjogI2ZiYmYyNDtcbn1cbi5hdXRoLXdyYXBwZXIuZGFyay1tb2RlIC5hdXRoLWZvcm0tcGFuZWwgLnRvcC1iYXIgLnRoZW1lLXN3aXRjaDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzQ3NTU2OTtcbn1cbi5hdXRoLXdyYXBwZXIuZGFyay1tb2RlIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0taGVhZGVyIGgyIHtcbiAgY29sb3I6ICNmOGZhZmM7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWhlYWRlciBwIHtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDU4LCAxMzgsIDAuNCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciAuZGVtby1sYWJlbCB7XG4gIGNvbG9yOiAjOTNjNWZkO1xufVxuLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCAuZGVtby1iYXIgLmRlbW8tY2hpcCB7XG4gIGJhY2tncm91bmQ6ICMxZTI5M2I7XG4gIGNvbG9yOiAjOTNjNWZkO1xuICBib3JkZXItY29sb3I6ICMzMzQxNTU7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5kZW1vLWJhciAuZGVtby1jaGlwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIGxhYmVsIHtcbiAgY29sb3I6ICNjYmQ1ZTE7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogIzFlMjkzYjtcbiAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xufVxuLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCAuZmllbGQtd3JhcHBlciBpbnB1dCwgLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1maWVsZCAuZmllbGQtd3JhcHBlciBzZWxlY3Qge1xuICBjb2xvcjogI2Y4ZmFmYztcbn1cbi5hdXRoLXdyYXBwZXIuZGFyay1tb2RlIC5hdXRoLWZvcm0tcGFuZWwgLmZvcm0tZmllbGQgLmZpZWxkLXdyYXBwZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5mb3JtLWZpZWxkIC5maWVsZC13cmFwcGVyIHNlbGVjdDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cbi5hdXRoLXdyYXBwZXIuZGFyay1tb2RlIC5hdXRoLWZvcm0tcGFuZWwgLmZpZWxkLW9wdGlvbnMgLnJlbWVtYmVyLW1lIHtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5kaXZpZGVyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xufVxuLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCAuZGl2aWRlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG4uYXV0aC13cmFwcGVyLmRhcmstbW9kZSAuYXV0aC1mb3JtLXBhbmVsIC5idG4tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZDogIzFlMjkzYjtcbiAgYm9yZGVyLWNvbG9yOiAjMzM0MTU1O1xuICBjb2xvcjogI2Y4ZmFmYztcbn1cbi5hdXRoLXdyYXBwZXIuZGFyay1tb2RlIC5hdXRoLWZvcm0tcGFuZWwgLmJ0bi1nb29nbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xufVxuLmF1dGgtd3JhcHBlci5kYXJrLW1vZGUgLmF1dGgtZm9ybS1wYW5lbCAuZm9ybS1mb290ZXIgcCB7XG4gIGNvbG9yOiAjOTRhM2I4O1xufVxuQGtleWZyYW1lcyBmbG9hdE9yYjEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCkgc2NhbGUoMS4wOCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxvYXRPcmIyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHNjYWxlKDEuMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxvYXRPcmIzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpIHNjYWxlKDEuMDUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRleHRTaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDUwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5hdXRoLXdyYXBwZXIgLmF1dGgtaGVybyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYXV0aC13cmFwcGVyIC5hdXRoLWZvcm0tcGFuZWwge1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4674:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterModule: () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 9619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class RegisterModule {
  static {
    this.ɵfac = function RegisterModule_Factory(t) {
      return new (t || RegisterModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RegisterModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterModule, {
    declarations: [_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent]
  });
})();

/***/ }),

/***/ 6503:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




function ResetPasswordComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password has been reset successfully! You can now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_form_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_form_78_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_form_78_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_form_78_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.showPassword = !ctx_r5.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 52)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_form_78_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.confirmPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_form_78_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.showConfirmPassword = !ctx_r7.showConfirmPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 58)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password")("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.showConfirmPassword ? "text" : "password")("ngModel", ctx_r1.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.password || ctx_r1.password !== ctx_r1.confirmPassword);
  }
}
class ResetPasswordComponent {
  constructor() {
    this.password = '';
    this.confirmPassword = '';
    this.submitted = false;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.isDarkMode = false;
  }
  ngOnInit() {
    const savedTheme = localStorage.getItem('hrm_auth_theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('hrm_auth_theme', this.isDarkMode ? 'dark' : 'light');
  }
  onSubmit() {
    if (this.password && this.password === this.confirmPassword) {
      this.submitted = true;
    }
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 84,
      vars: 4,
      consts: [[1, "auth-wrapper"], [1, "auth-hero"], [1, "hero-bg-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "hero-brand"], [1, "brand-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z", "fill", "white"], ["d", "M6 12C7.38071 12 8.5 10.8807 8.5 9.5C8.5 8.11929 7.38071 7 6 7C4.61929 7 3.5 8.11929 3.5 9.5C3.5 10.8807 4.61929 12 6 12Z", "fill", "white", "opacity", "0.8"], ["d", "M18 12C19.3807 12 20.5 10.8807 20.5 9.5C20.5 8.11929 19.3807 7 18 7C16.6193 7 15.5 8.11929 15.5 9.5C15.5 10.8807 16.6193 12 18 12Z", "fill", "white", "opacity", "0.8"], ["d", "M12 12.5C9.33 12.5 4 13.84 4 16.5V18.5H20V16.5C20 13.84 14.67 12.5 12 12.5Z", "fill", "white"], ["d", "M6 13.5C4.83 13.5 2 14.12 2 15.5V17H3.5V15.5C3.5 14.73 5.09 13.9 6 13.65V13.5Z", "fill", "white", "opacity", "0.7"], ["d", "M18 13.5C18.91 13.9 20.5 14.73 20.5 15.5V17H22V15.5C22 14.12 19.17 13.5 18 13.5Z", "fill", "white", "opacity", "0.7"], [1, "brand-text"], [1, "brand-title"], [1, "brand-subtitle"], [1, "hero-headline"], [1, "text-cyan"], [1, "hero-sub"], [1, "hero-features"], [1, "feature-card"], [1, "feature-icon", "icon-blue"], [1, "fas", "fa-users"], [1, "feature-details"], [1, "feature-title"], [1, "feature-sub"], [1, "feature-icon", "icon-purple"], [1, "fas", "fa-calendar-alt"], [1, "feature-icon", "icon-teal"], [1, "fas", "fa-chart-line"], [1, "hero-footer"], [1, "powered-by"], [1, "fas", "fa-infinity", "spinning-icon"], [1, "carousel-dots"], [1, "dot", "active"], [1, "dot"], [1, "wave-separator"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "none"], ["d", "M0,0 C40,30 40,70 0,100 L100,100 L100,0 Z", "fill", "currentColor"], [1, "auth-form-panel"], [1, "form-content"], [1, "form-header"], ["class", "alert-success-banner", 4, "ngIf"], ["class", "main-form", 3, "ngSubmit", 4, "ngIf"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "link-bold-blue"], [1, "alert-success-banner"], [1, "fas", "fa-check-circle"], [1, "main-form", 3, "ngSubmit"], [1, "form-field"], [1, "field-wrapper"], [1, "fas", "fa-lock", "field-icon"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "type", "ngModel", "ngModelChange"], ["type", "button", 1, "eye-toggle", 3, "click"], ["name", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "type", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "fas", "fa-arrow-right", "arrow-icon"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16)(17, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HRM");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HUMAN RESOURCE MANAGEMENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19)(22, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " People");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Process");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Together. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Set up a new secure password to access your HRM portal account. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26)(38, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Employee Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "People \u2022 Roles \u2022 Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23)(43, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26)(46, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Leave & Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Track \u2022 Approve \u2022 Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23)(51, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26)(54, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Performance & Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Data \u2022 Decisions \u2022 Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33)(59, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Powered by Envision Beyond");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 37)(65, "span", 38)(66, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42)(71, "div", 43)(72, "div", 44)(73, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Reset password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Enter your new password below");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ResetPasswordComponent_div_77_Template, 6, 0, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ResetPasswordComponent_form_78_Template, 21, 9, "form", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 47)(80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Back to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-mode", ctx.isDarkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n  flex: 1.15;\n  position: relative;\n  background: linear-gradient(140deg, #091338 0%, #153298 55%, #182873 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  color: #ffffff;\n  overflow: hidden;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb1 7s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -80px;\n  left: -60px;\n  width: 340px;\n  height: 340px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(168, 85, 247, 0) 70%);\n  animation: _ngcontent-%COMP%_floatOrb2 9s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-bg-shapes[_ngcontent-%COMP%]   .shape-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  right: 12%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  animation: _ngcontent-%COMP%_floatOrb3 8s ease-in-out infinite alternate;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.8s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(5deg) scale(1.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  display: block;\n  line-height: 1;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-brand[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: #93c5fd;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  animation: _ngcontent-%COMP%_fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.12;\n  letter-spacing: -0.5px;\n  margin: 0;\n  color: #ffffff;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .text-cyan[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #38bdf8 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: _ngcontent-%COMP%_textShimmer 4s linear infinite;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #bfdbfe;\n  margin-top: 16px;\n  max-width: 420px;\n  line-height: 1.55;\n  font-weight: 400;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 440px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateX(6px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.35);\n  transform: translateX(8px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card.active-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.3);\n  color: #c084fc;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-teal[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.3);\n  color: #2dd4bf;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n  display: block;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #93c5fd;\n  display: block;\n  margin-top: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #93c5fd;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]   .spinning-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .hero-footer[_ngcontent-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #38bdf8;\n  box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: 0;\n  width: 48px;\n  pointer-events: none;\n  z-index: 1;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #f8fafc;\n  transition: color 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8fafc;\n  padding: 32px 48px;\n  position: relative;\n  overflow-y: auto;\n  justify-content: space-between;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  border-color: #cbd5e1;\n  transform: rotate(30deg) scale(1.1);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: auto;\n  padding: 16px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n  letter-spacing: -0.4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  background: #eff6ff;\n  border: 1px solid #dbeafe;\n  padding: 8px 12px;\n  border-radius: 10px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1d4ed8;\n  margin-right: 2px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid #bfdbfe;\n  background: #ffffff;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #1e40af;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  transform: translateY(-1px);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 540px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper.field-error[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n  flex-shrink: 0;\n  transition: color 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]:focus-within   .field-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 12px 0;\n  font-size: 14px;\n  color: #0f172a;\n  width: 100%;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .eye-toggle[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-error-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n  cursor: pointer;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #2563eb;\n  width: 15px;\n  height: 15px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .link-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .alert-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border: none;\n  border-radius: 12px;\n  background: #2563eb;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 8px 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e2e8f0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  padding: 0 12px;\n  font-size: 13px;\n  color: #94a3b8;\n  font-weight: 500;\n  transition: background 0.3s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  background: #ffffff;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 700;\n  margin-left: 4px;\n}\n.auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link-bold-blue[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%]   .wave-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #fbbf24;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .theme-switch[_ngcontent-%COMP%]:hover {\n  border-color: #475569;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.4);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-label[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #93c5fd;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .demo-bar[_ngcontent-%COMP%]   .demo-chip[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .field-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #64748b;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #f8fafc;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #334155;\n}\n.auth-wrapper.dark-mode[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_floatOrb1 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-24px) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb2 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-30px) scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb3 {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-18px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_textShimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-wrapper[_ngcontent-%COMP%]   .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n\n.alert-success-banner[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 14px;\n  font-size: 14px;\n  color: #166534;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1RkFBQTtFQUNBLHlCQUFBO0VBRUEsNkJBQUE7RUF5UkEsNkJBQUE7RUFrWEEsNkJBQUE7RUFpRkEsZ0NBQUE7RUFvQ0EsMkJBQUE7QUM1dkJGO0FESEU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSjtBREhJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDS047QURITTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkZBQUE7RUFDQSxzREFBQTtBQ0tSO0FERk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQ0Esc0RBQUE7QUNJUjtBRERNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNEQUFBO0FDR1I7QURDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NOO0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7QUNBTjtBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtF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RUN0RVA7QUFDRjtBRHdFRTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VDcEVyQjtFRHFFRTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQ2pFbkI7QUFDRjtBRG1FRTtFQUNFO0lBQU8sVUFBQTtJQUFZLDRCQUFBO0VDL0RyQjtFRGdFRTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQzVEbkI7QUFDRjtBRCtERTtFQUNFO0lBQ0UsYUFBQTtFQzdESjtFRCtERTtJQUNFLGtCQUFBO0VDN0RKO0FBQ0Y7O0FBL3NCQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBa3RCRiIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcblxyXG4gIC8qIC0tLSBMRUZUIEhFUk8gQkFOTkVSIC0tLSAqL1xyXG4gIC5hdXRoLWhlcm8ge1xyXG4gICAgZmxleDogMS4xNTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICMwOTEzMzggMCUsICMxNTMyOTggNTUlLCAjMTgyODczIDEwMCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiA0OHB4IDU2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmhlcm8tYmctc2hhcGVzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBpbnNldDogMDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgICAuc2hhcGUtMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTgwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC02MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDU2LCAxODksIDI0OCwgMC4yNSkgMCUsIHJnYmEoNTYsIDE4OSwgMjQ4LCAwKSA3MCUpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmxvYXRPcmIxIDdzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNoYXBlLTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC04MHB4O1xyXG4gICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE2OCwgODUsIDI0NywgMC4yMikgMCUsIHJnYmEoMTY4LCA4NSwgMjQ3LCAwKSA3MCUpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmxvYXRPcmIyIDlzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNoYXBlLTMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICByaWdodDogMTIlO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmxvYXRPcmIzIDhzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWNvbnRlbnQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWJyYW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxNHB4O1xyXG4gICAgICBhbmltYXRpb246IGZhZGVJbkRvd24gMC44cyBlYXNlLW91dDtcclxuXHJcbiAgICAgIC5icmFuZC1pY29uIHtcclxuICAgICAgICB3aWR0aDogNDZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpIHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJyYW5kLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5icmFuZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzkzYzVmZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1oZWFkbGluZSB7XHJcbiAgICAgIG1hcmdpbjogMzJweCAwO1xyXG4gICAgICBhbmltYXRpb246IGZhZGVJblVwIDAuOXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LWN5YW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMzhiZGY4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzOGJkZjggMCUsICM2MGE1ZmEgNTAlLCAjMzhiZGY4IDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBhbmltYXRpb246IHRleHRTaGltbWVyIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhlcm8tc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICNiZmRiZmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1mZWF0dXJlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMTJweDtcclxuICAgICAgbWF4LXdpZHRoOiA0NDBweDtcclxuXHJcbiAgICAgIC5mZWF0dXJlLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUtY2FyZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcblxyXG4gICAgICAgICAgLmZlYXR1cmUtaWNvbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mZWF0dXJlLWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgICAmLmljb24tYmx1ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpO1xyXG4gICAgICAgICAgICBjb2xvcjogIzYwYTVmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuaWNvbi1wdXJwbGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2OCwgODUsIDI0NywgMC4zKTtcclxuICAgICAgICAgICAgY29sb3I6ICNjMDg0ZmM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmljb24tdGVhbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjAsIDE4NCwgMTY2LCAwLjMpO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJkZDRiZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mZWF0dXJlLXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZlYXR1cmUtc3ViIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiAjOTNjNWZkO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tZm9vdGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcblxyXG4gICAgICAucG93ZXJlZC1ieSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzkzYzVmZDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAuc3Bpbm5pbmctaWNvbiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2Fyb3VzZWwtZG90cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDZweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuZG90IHtcclxuICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM4YmRmODtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1NiwgMTg5LCAyNDgsIDAuNik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndhdmUtc2VwYXJhdG9yIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjZjhmYWZjO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIFJJR0hUIEZPUk0gUEFORUwgLS0tICovXHJcbiAgLmF1dGgtZm9ybS1wYW5lbCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgcGFkZGluZzogMzJweCA0OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG5cclxuICAgIC50b3AtYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAudGhlbWUtc3dpdGNoIHtcclxuICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKSBzY2FsZSgxLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0taGVhZGVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZW1vLWJhciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmVhZmU7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgLmRlbW8tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMWQ0ZWQ4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVtby1jaGlwIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzFlNDBhZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1mb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyaWQtMmNvbCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgZ2FwOiAxNHB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1maWVsZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogNnB4O1xyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG5cclxuICAgICAgICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgzNywgOTksIDIzNSwgMC4xMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZpZWxkLWVycm9yIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmNDQ0NDtcclxuICAgICAgICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpZWxkLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Zm9jdXMtd2l0aGluIC5maWVsZC1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV5ZS10b2dnbGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmllbGQtZXJyb3ItbXNnIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1vcHRpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG5cclxuICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYWNjZW50LWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGluay1ibHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFsZXJ0LWJhbm5lciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzk5MWIxYjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMzUpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFkNGVkODtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcnJvdy1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbm5lciB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBhbmltYXRpb246IHNwaW4gMC42cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdmlkZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1nb29nbGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTFweDtcclxuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZm9vdGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgLmxpbmstYm9sZC1ibHVlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIERBUksgTU9ERSBTVFlMRVMgLS0tICovXHJcbiAgJi5kYXJrLW1vZGUge1xyXG4gICAgLmF1dGgtaGVybyAud2F2ZS1zZXBhcmF0b3Igc3ZnIHtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGgtZm9ybS1wYW5lbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwZjE3MmE7XHJcbiAgICAgIGNvbG9yOiAjZjhmYWZjO1xyXG5cclxuICAgICAgLnRvcC1iYXIgLnRoZW1lLXN3aXRjaCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgICAgY29sb3I6ICNmYmJmMjQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDc1NTY5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0taGVhZGVyIHtcclxuICAgICAgICBoMiB7IGNvbG9yOiAjZjhmYWZjOyB9XHJcbiAgICAgICAgcCB7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZW1vLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzMCwgNTgsIDEzOCwgMC40KTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpO1xyXG5cclxuICAgICAgICAuZGVtby1sYWJlbCB7IGNvbG9yOiAjOTNjNWZkOyB9XHJcbiAgICAgICAgLmRlbW8tY2hpcCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xyXG4gICAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMzMzQxNTU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgIGxhYmVsIHsgY29sb3I6ICNjYmQ1ZTE7IH1cclxuXHJcbiAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFlMjkzYjtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzMzNDE1NTtcclxuXHJcbiAgICAgICAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmOGZhZmM7XHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICM2NDc0OGI7IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5maWVsZC1vcHRpb25zIC5yZW1lbWJlci1tZSB7XHJcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kaXZpZGVyIHtcclxuICAgICAgICAmOjpiZWZvcmUgeyBiYWNrZ3JvdW5kOiAjMzM0MTU1OyB9XHJcbiAgICAgICAgc3BhbiB7IGJhY2tncm91bmQ6ICMwZjE3MmE7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG4tZ29vZ2xlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzMzNDE1NTtcclxuICAgICAgICBjb2xvcjogI2Y4ZmFmYztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tZm9vdGVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gS0VZRlJBTUUgQU5JTUFUSU9OUyAtLS0gKi9cclxuICBAa2V5ZnJhbWVzIGZsb2F0T3JiMSB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCkgc2NhbGUoMS4wOCk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmxvYXRPcmIyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSBzY2FsZSgxLjEpOyB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZsb2F0T3JiMyB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCkgc2NhbGUoMS4wNSk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgdGV4dFNoaW1tZXIge1xyXG4gICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cclxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDUwJTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIH1cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSBBZGp1c3RtZW50cyAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5hdXRoLWhlcm8ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmF1dGgtZm9ybS1wYW5lbCB7XHJcbiAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJAaW1wb3J0ICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4uYWxlcnQtc3VjY2Vzcy1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMGZkZjQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMTY2NTM0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7414:
/*!**************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordModule: () => (/* binding */ ResetPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component */ 6503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class ResetPasswordModule {
  static {
    this.ɵfac = function ResetPasswordModule_Factory(t) {
      return new (t || ResetPasswordModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ResetPasswordModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordModule, {
    declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7338:
/*!*************************************************!*\
  !*** ./src/app/core/constants/app.constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE_URL: () => (/* binding */ API_BASE_URL),
/* harmony export */   APP_NAME: () => (/* binding */ APP_NAME),
/* harmony export */   ROLE_COLORS: () => (/* binding */ ROLE_COLORS),
/* harmony export */   ROLE_LABELS: () => (/* binding */ ROLE_LABELS),
/* harmony export */   ROLE_PERMISSIONS: () => (/* binding */ ROLE_PERMISSIONS),
/* harmony export */   STATUS_COLORS: () => (/* binding */ STATUS_COLORS)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 1087);

const APP_NAME = 'HRM Pro';
const API_BASE_URL = 'http://localhost:3000/api';
const ROLE_PERMISSIONS = {
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN]: {
    dashboard: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    employees: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    departments: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    designations: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    branches: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    teams: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    attendance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    leave: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.APPROVE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    shifts: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    payroll: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.APPROVE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    recruitment: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    onboarding: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    performance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    training: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    documents: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    announcements: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    reports: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    userManagement: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    rolesPermissions: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    systemSettings: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    auditLogs: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT]
  },
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.HR]: {
    dashboard: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    employees: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    departments: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    designations: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    branches: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    teams: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    attendance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    leave: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.APPROVE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    shifts: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    payroll: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    recruitment: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    onboarding: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    performance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    training: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    documents: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    announcements: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    reports: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT]
  },
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.TL]: {
    dashboard: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    myTeam: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    teamAttendance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    teamLeave: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.APPROVE],
    teamTasks: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE],
    teamPerformance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    kpi: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    teamReports: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    announcements: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW]
  },
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE]: {
    dashboard: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    myProfile: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    myAttendance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    checkInOut: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE],
    myLeave: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    applyLeave: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE],
    myPayslips: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT],
    myTasks: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE],
    myPerformance: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    myDocuments: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE],
    announcements: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW],
    notifications: [_models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW]
  }
};
const ROLE_LABELS = {
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN]: 'Administrator',
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.HR]: 'Human Resources',
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.TL]: 'Team Lead',
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE]: 'Employee'
};
const ROLE_COLORS = {
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN]: '#6366f1',
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.HR]: '#8b5cf6',
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.TL]: '#06b6d4',
  [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE]: '#10b981'
};
const STATUS_COLORS = {
  'ACTIVE': '#10b981',
  'INACTIVE': '#ef4444',
  'PENDING': '#f59e0b',
  'APPROVED': '#10b981',
  'REJECTED': '#ef4444',
  'PRESENT': '#10b981',
  'ABSENT': '#ef4444',
  'LATE': '#f59e0b',
  'HALF_DAY': '#fb923c',
  'ON_LEAVE': '#8b5cf6',
  'HOLIDAY': '#06b6d4',
  'PAID': '#10b981',
  'DRAFT': '#94a3b8',
  'PROCESSED': '#3b82f6',
  'COMPLETED': '#10b981',
  'IN_PROGRESS': '#3b82f6',
  'TODO': '#94a3b8',
  'BLOCKED': '#ef4444'
};

/***/ }),

/***/ 5446:
/*!*****************************************!*\
  !*** ./src/app/core/constants/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE_URL: () => (/* reexport safe */ _app_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL),
/* harmony export */   APP_NAME: () => (/* reexport safe */ _app_constants__WEBPACK_IMPORTED_MODULE_0__.APP_NAME),
/* harmony export */   ROLE_COLORS: () => (/* reexport safe */ _app_constants__WEBPACK_IMPORTED_MODULE_0__.ROLE_COLORS),
/* harmony export */   ROLE_LABELS: () => (/* reexport safe */ _app_constants__WEBPACK_IMPORTED_MODULE_0__.ROLE_LABELS),
/* harmony export */   ROLE_PERMISSIONS: () => (/* reexport safe */ _app_constants__WEBPACK_IMPORTED_MODULE_0__.ROLE_PERMISSIONS),
/* harmony export */   STATUS_COLORS: () => (/* reexport safe */ _app_constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_COLORS)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.constants */ 7338);


/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isLoggedIn) {
      return true;
    }
    return this.router.createUrlTree(['/auth/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5431:
/*!****************************************************!*\
  !*** ./src/app/core/guards/role-redirect.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleRedirectGuard: () => (/* binding */ RoleRedirectGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class RoleRedirectGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.featureModules = {
      dashboard: {
        ADMIN: 'admin',
        HR: 'hr',
        TL: 'tl',
        EMPLOYEE: 'employee'
      },
      employees: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      'employees-add': {
        ADMIN: 'admin',
        HR: 'admin'
      },
      'employees-edit': {
        ADMIN: 'admin',
        HR: 'admin'
      },
      'employees-detail': {
        ADMIN: 'admin',
        HR: 'admin'
      },
      departments: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      designations: {
        ADMIN: 'admin'
      },
      branches: {
        ADMIN: 'admin'
      },
      teams: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      attendance: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      leave: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      shifts: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      payroll: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      recruitment: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      onboarding: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      performance: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      training: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      documents: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      announcements: {
        ADMIN: 'admin',
        HR: 'hr',
        TL: 'tl',
        EMPLOYEE: 'employee'
      },
      reports: {
        ADMIN: 'admin',
        HR: 'hr'
      },
      users: {
        ADMIN: 'admin'
      },
      roles: {
        ADMIN: 'admin'
      },
      settings: {
        ADMIN: 'admin',
        HR: 'admin',
        TL: 'admin',
        EMPLOYEE: 'admin'
      },
      'audit-logs': {
        ADMIN: 'admin'
      },
      team: {
        TL: 'tl'
      },
      'team-attendance': {
        TL: 'tl'
      },
      'team-leave': {
        TL: 'tl'
      },
      'team-tasks': {
        TL: 'tl'
      },
      'team-performance': {
        TL: 'tl'
      },
      'team-kpi': {
        TL: 'tl'
      },
      'team-reports': {
        TL: 'tl'
      },
      'my-profile': {
        EMPLOYEE: 'employee'
      },
      'my-attendance': {
        EMPLOYEE: 'employee'
      },
      'check-in-out': {
        EMPLOYEE: 'employee'
      },
      'break-tracker': {
        EMPLOYEE: 'employee'
      },
      'daily-work-update': {
        EMPLOYEE: 'employee'
      },
      'my-leave': {
        EMPLOYEE: 'employee'
      },
      'apply-leave': {
        EMPLOYEE: 'employee'
      },
      'my-payslips': {
        EMPLOYEE: 'employee'
      },
      'my-tasks': {
        EMPLOYEE: 'employee'
      },
      'my-performance': {
        EMPLOYEE: 'employee'
      },
      'my-documents': {
        EMPLOYEE: 'employee'
      },
      notifications: {
        ADMIN: 'employee',
        HR: 'employee',
        TL: 'employee',
        EMPLOYEE: 'employee'
      }
    };
  }
  canActivate(route, state) {
    const feature = route.data['feature'];
    const role = this.authService.userRole;
    const targetModule = feature && role ? this.featureModules[feature]?.[role] : undefined;
    if (!targetModule) {
      return this.router.createUrlTree(['/unauthorized']);
    }
    const tree = this.router.parseUrl(state.url);
    const segments = tree.root.children['primary']?.segments.map(s => s.path) ?? [];
    return this.router.createUrlTree(['/' + targetModule, ...segments], {
      queryParams: tree.queryParams,
      fragment: tree.fragment ?? undefined
    });
  }
  static {
    this.ɵfac = function RoleRedirectGuard_Factory(t) {
      return new (t || RoleRedirectGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleRedirectGuard,
      factory: RoleRedirectGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 400:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class RoleGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route) {
    const expectedRoles = route.data['roles'];
    if (!expectedRoles || expectedRoles.length === 0) return true;
    const currentRole = this.authService.userRole;
    if (currentRole && expectedRoles.includes(currentRole)) {
      return true;
    }
    return this.router.createUrlTree(['/unauthorized']);
  }
  canLoad(route) {
    const expectedRoles = route.data?.['roles'];
    if (!expectedRoles || expectedRoles.length === 0) return true;
    const currentRole = this.authService.userRole;
    return !!currentRole && expectedRoles.includes(currentRole);
  }
  static {
    this.ɵfac = function RoleGuard_Factory(t) {
      return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleGuard,
      factory: RoleGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/toast.service */ 5423);





class AuthInterceptor {
  constructor(authService, toastService) {
    this.authService = authService;
    this.toastService = toastService;
  }
  intercept(req, next) {
    const token = this.authService.token;
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error.status === 401) {
        this.authService.logout();
        this.toastService.error('Session expired. Please log in again.');
      } else if (error.status === 403) {
        this.toastService.error('You do not have permission to perform this action.');
      } else if (error.status >= 500) {
        this.toastService.error('A server error occurred. Please try again later.');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 5196:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.service */ 1912);



class LoadingInterceptor {
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.totalRequests = 0;
  }
  intercept(req, next) {
    if (req.headers.has('X-Skip-Loading')) {
      const modifiedReq = req.clone({
        headers: req.headers.delete('X-Skip-Loading')
      });
      return next.handle(modifiedReq);
    }
    this.totalRequests++;
    this.loadingService.show();
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.totalRequests--;
      if (this.totalRequests <= 0) {
        this.totalRequests = 0;
        this.loadingService.hide();
      }
    }));
  }
  static {
    this.ɵfac = function LoadingInterceptor_Factory(t) {
      return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1912:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/loading.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoadingService {
  constructor() {
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loading$ = this.loadingSubject.asObservable();
  }
  show() {
    this.loadingSubject.next(true);
  }
  hide() {
    this.loadingSubject.next(false);
  }
  static {
    this.ɵfac = function LoadingService_Factory(t) {
      return new (t || LoadingService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoadingService,
      factory: LoadingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1539:
/*!***************************************************!*\
  !*** ./src/app/core/models/announcement.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3904:
/*!***************************************************!*\
  !*** ./src/app/core/models/api-response.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3675:
/*!*************************************************!*\
  !*** ./src/app/core/models/attendance.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceStatus: () => (/* binding */ AttendanceStatus)
/* harmony export */ });
var AttendanceStatus;
(function (AttendanceStatus) {
  AttendanceStatus["PRESENT"] = "PRESENT";
  AttendanceStatus["ABSENT"] = "ABSENT";
  AttendanceStatus["HALF_DAY"] = "HALF_DAY";
  AttendanceStatus["LATE"] = "LATE";
  AttendanceStatus["ON_LEAVE"] = "ON_LEAVE";
  AttendanceStatus["HOLIDAY"] = "HOLIDAY";
  AttendanceStatus["WEEK_OFF"] = "WEEK_OFF";
})(AttendanceStatus || (AttendanceStatus = {}));

/***/ }),

/***/ 6710:
/*!*************************************************!*\
  !*** ./src/app/core/models/department.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 340:
/*!***********************************************!*\
  !*** ./src/app/core/models/employee.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1087:
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceStatus: () => (/* reexport safe */ _attendance_model__WEBPACK_IMPORTED_MODULE_2__.AttendanceStatus),
/* harmony export */   CandidateStatus: () => (/* reexport safe */ _recruitment_model__WEBPACK_IMPORTED_MODULE_6__.CandidateStatus),
/* harmony export */   FeedbackCategory: () => (/* reexport safe */ _performance_model__WEBPACK_IMPORTED_MODULE_7__.FeedbackCategory),
/* harmony export */   InterviewStatus: () => (/* reexport safe */ _recruitment_model__WEBPACK_IMPORTED_MODULE_6__.InterviewStatus),
/* harmony export */   InterviewType: () => (/* reexport safe */ _recruitment_model__WEBPACK_IMPORTED_MODULE_6__.InterviewType),
/* harmony export */   LeaveStatus: () => (/* reexport safe */ _leave_model__WEBPACK_IMPORTED_MODULE_3__.LeaveStatus),
/* harmony export */   LeaveType: () => (/* reexport safe */ _leave_model__WEBPACK_IMPORTED_MODULE_3__.LeaveType),
/* harmony export */   PayrollStatus: () => (/* reexport safe */ _payroll_model__WEBPACK_IMPORTED_MODULE_5__.PayrollStatus),
/* harmony export */   PermissionAction: () => (/* reexport safe */ _user_model__WEBPACK_IMPORTED_MODULE_0__.PermissionAction),
/* harmony export */   TaskPriority: () => (/* reexport safe */ _performance_model__WEBPACK_IMPORTED_MODULE_7__.TaskPriority),
/* harmony export */   TaskStatus: () => (/* reexport safe */ _performance_model__WEBPACK_IMPORTED_MODULE_7__.TaskStatus),
/* harmony export */   UserRole: () => (/* reexport safe */ _user_model__WEBPACK_IMPORTED_MODULE_0__.UserRole),
/* harmony export */   WorkUpdateStatus: () => (/* reexport safe */ _work_model__WEBPACK_IMPORTED_MODULE_12__.WorkUpdateStatus)
/* harmony export */ });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ 223);
/* harmony import */ var _employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.model */ 340);
/* harmony import */ var _attendance_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendance.model */ 3675);
/* harmony import */ var _leave_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave.model */ 3587);
/* harmony import */ var _department_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.model */ 6710);
/* harmony import */ var _payroll_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payroll.model */ 5001);
/* harmony import */ var _recruitment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recruitment.model */ 1746);
/* harmony import */ var _performance_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./performance.model */ 8914);
/* harmony import */ var _announcement_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./announcement.model */ 1539);
/* harmony import */ var _training_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./training.model */ 7766);
/* harmony import */ var _report_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report.model */ 8790);
/* harmony import */ var _api_response_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-response.model */ 3904);
/* harmony import */ var _work_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work.model */ 5753);
/* harmony import */ var _roles_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./roles.model */ 453);















/***/ }),

/***/ 3587:
/*!********************************************!*\
  !*** ./src/app/core/models/leave.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveStatus: () => (/* binding */ LeaveStatus),
/* harmony export */   LeaveType: () => (/* binding */ LeaveType)
/* harmony export */ });
var LeaveType;
(function (LeaveType) {
  LeaveType["ANNUAL"] = "Annual Leave";
  LeaveType["SICK"] = "Sick Leave";
  LeaveType["PERSONAL"] = "Personal Leave";
  LeaveType["MATERNITY"] = "Maternity Leave";
  LeaveType["PATERNITY"] = "Paternity Leave";
  LeaveType["UNPAID"] = "Unpaid Leave";
  LeaveType["COMPENSATORY"] = "Compensatory Off";
  LeaveType["BEREAVEMENT"] = "Bereavement Leave";
})(LeaveType || (LeaveType = {}));
var LeaveStatus;
(function (LeaveStatus) {
  LeaveStatus["PENDING"] = "PENDING";
  LeaveStatus["APPROVED"] = "APPROVED";
  LeaveStatus["REJECTED"] = "REJECTED";
  LeaveStatus["CANCELLED"] = "CANCELLED";
})(LeaveStatus || (LeaveStatus = {}));

/***/ }),

/***/ 5001:
/*!**********************************************!*\
  !*** ./src/app/core/models/payroll.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayrollStatus: () => (/* binding */ PayrollStatus)
/* harmony export */ });
var PayrollStatus;
(function (PayrollStatus) {
  PayrollStatus["DRAFT"] = "DRAFT";
  PayrollStatus["PROCESSED"] = "PROCESSED";
  PayrollStatus["APPROVED"] = "APPROVED";
  PayrollStatus["PAID"] = "PAID";
  PayrollStatus["REJECTED"] = "REJECTED";
})(PayrollStatus || (PayrollStatus = {}));

/***/ }),

/***/ 8914:
/*!**************************************************!*\
  !*** ./src/app/core/models/performance.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackCategory: () => (/* binding */ FeedbackCategory),
/* harmony export */   TaskPriority: () => (/* binding */ TaskPriority),
/* harmony export */   TaskStatus: () => (/* binding */ TaskStatus)
/* harmony export */ });
var TaskPriority;
(function (TaskPriority) {
  TaskPriority["LOW"] = "LOW";
  TaskPriority["MEDIUM"] = "MEDIUM";
  TaskPriority["HIGH"] = "HIGH";
  TaskPriority["URGENT"] = "URGENT";
})(TaskPriority || (TaskPriority = {}));
var TaskStatus;
(function (TaskStatus) {
  TaskStatus["TODO"] = "TODO";
  TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
  TaskStatus["IN_REVIEW"] = "IN_REVIEW";
  TaskStatus["COMPLETED"] = "COMPLETED";
  TaskStatus["BLOCKED"] = "BLOCKED";
})(TaskStatus || (TaskStatus = {}));
var FeedbackCategory;
(function (FeedbackCategory) {
  FeedbackCategory["MANAGER"] = "MANAGER";
  FeedbackCategory["PEER"] = "PEER";
  FeedbackCategory["SELF"] = "SELF";
  FeedbackCategory["SUBORDINATE"] = "SUBORDINATE";
})(FeedbackCategory || (FeedbackCategory = {}));

/***/ }),

/***/ 1746:
/*!**************************************************!*\
  !*** ./src/app/core/models/recruitment.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateStatus: () => (/* binding */ CandidateStatus),
/* harmony export */   InterviewStatus: () => (/* binding */ InterviewStatus),
/* harmony export */   InterviewType: () => (/* binding */ InterviewType)
/* harmony export */ });
var CandidateStatus;
(function (CandidateStatus) {
  CandidateStatus["NEW"] = "NEW";
  CandidateStatus["SCREENING"] = "SCREENING";
  CandidateStatus["INTERVIEW_SCHEDULED"] = "INTERVIEW_SCHEDULED";
  CandidateStatus["INTERVIEWED"] = "INTERVIEWED";
  CandidateStatus["OFFERED"] = "OFFERED";
  CandidateStatus["HIRED"] = "HIRED";
  CandidateStatus["REJECTED"] = "REJECTED";
})(CandidateStatus || (CandidateStatus = {}));
var InterviewStatus;
(function (InterviewStatus) {
  InterviewStatus["SCHEDULED"] = "SCHEDULED";
  InterviewStatus["RESCHEDULED"] = "RESCHEDULED";
  InterviewStatus["COMPLETED"] = "COMPLETED";
  InterviewStatus["CANCELLED"] = "CANCELLED";
  InterviewStatus["NO_SHOW"] = "NO_SHOW";
})(InterviewStatus || (InterviewStatus = {}));
var InterviewType;
(function (InterviewType) {
  InterviewType["ONLINE"] = "ONLINE";
  InterviewType["OFFLINE"] = "OFFLINE";
  InterviewType["PHONE"] = "PHONE";
})(InterviewType || (InterviewType = {}));

/***/ }),

/***/ 8790:
/*!*********************************************!*\
  !*** ./src/app/core/models/report.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 453:
/*!********************************************!*\
  !*** ./src/app/core/models/roles.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7766:
/*!***********************************************!*\
  !*** ./src/app/core/models/training.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 223:
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionAction: () => (/* binding */ PermissionAction),
/* harmony export */   UserRole: () => (/* binding */ UserRole)
/* harmony export */ });
var UserRole;
(function (UserRole) {
  UserRole["ADMIN"] = "ADMIN";
  UserRole["HR"] = "HR";
  UserRole["TL"] = "TL";
  UserRole["EMPLOYEE"] = "EMPLOYEE";
})(UserRole || (UserRole = {}));
var PermissionAction;
(function (PermissionAction) {
  PermissionAction["VIEW"] = "VIEW";
  PermissionAction["CREATE"] = "CREATE";
  PermissionAction["UPDATE"] = "UPDATE";
  PermissionAction["DELETE"] = "DELETE";
  PermissionAction["APPROVE"] = "APPROVE";
  PermissionAction["EXPORT"] = "EXPORT";
})(PermissionAction || (PermissionAction = {}));

/***/ }),

/***/ 5753:
/*!*******************************************!*\
  !*** ./src/app/core/models/work.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkUpdateStatus: () => (/* binding */ WorkUpdateStatus)
/* harmony export */ });
var WorkUpdateStatus;
(function (WorkUpdateStatus) {
  WorkUpdateStatus["SUBMITTED"] = "SUBMITTED";
  WorkUpdateStatus["REVISED"] = "REVISED";
  WorkUpdateStatus["APPROVED"] = "APPROVED";
})(WorkUpdateStatus || (WorkUpdateStatus = {}));

/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 1087);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 5446);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);







class AuthService {
  constructor(http) {
    this.http = http;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    const stored = localStorage.getItem('hrm_user');
    if (stored) {
      this.currentUserSubject.next(JSON.parse(stored));
    }
    const token = localStorage.getItem('hrm_token');
    if (token) {
      this.tokenSubject.next(token);
    }
  }
  login(credentials) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiBaseUrl}/auth/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      const data = res?.data ?? res;
      const userWithPerms = {
        ...data.user,
        permissions: data.user?.permissions?.length ? data.user.permissions : this.generatePermissions(data.user?.role)
      };
      return {
        ...data,
        user: userWithPerms
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      localStorage.setItem('hrm_user', JSON.stringify(res.user));
      localStorage.setItem('hrm_token', res.token);
      this.currentUserSubject.next(res.user);
      this.tokenSubject.next(res.token);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(err?.error?.message || 'Invalid email or password'))));
  }
  register(data) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiBaseUrl}/auth/register`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      const backendUser = res?.data ?? res;
      return {
        user: {
          ...backendUser,
          role: data.role || _models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE,
          permissions: backendUser.permissions?.length ? backendUser.permissions : this.generatePermissions(data.role || _models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE)
        },
        token: '',
        refreshToken: '',
        expiresIn: 3600
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      localStorage.setItem('hrm_user', JSON.stringify(res.user));
      this.currentUserSubject.next(res.user);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(err?.error?.message || 'Registration failed'))));
  }
  switchRole(role) {
    const demoCredentials = {
      [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN]: {
        email: 'admin@hrm.com',
        password: 'password123'
      },
      [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.HR]: {
        email: 'hr@hrm.com',
        password: 'password123'
      },
      [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.TL]: {
        email: 'tl@hrm.com',
        password: 'password123'
      },
      [_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE]: {
        email: 'emp@hrm.com',
        password: 'password123'
      }
    };
    this.login(demoCredentials[role]).subscribe({
      next: () => undefined,
      error: () => undefined
    });
  }
  logout() {
    localStorage.removeItem('hrm_user');
    localStorage.removeItem('hrm_token');
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get token() {
    return this.tokenSubject.value;
  }
  get isLoggedIn() {
    return !!this.currentUser && !!this.token;
  }
  get userRole() {
    return this.currentUser?.role ?? null;
  }
  hasPermission(module, action) {
    if (!this.currentUser) return false;
    const perms = this.currentUser.permissions;
    const modulePerm = perms?.find(p => p.module === module);
    if (modulePerm) return modulePerm.actions.includes(action);
    const rolePerms = _constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PERMISSIONS[this.currentUser.role];
    if (!rolePerms) return false;
    const actions = rolePerms[module];
    if (!actions) return false;
    return actions.includes(action);
  }
  hasModuleAccess(module) {
    if (!this.currentUser) return false;
    const perms = this.currentUser.permissions;
    if (perms?.some(p => p.module === module)) return true;
    const rolePerms = _constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PERMISSIONS[this.currentUser.role];
    if (!rolePerms) return false;
    return module in rolePerms;
  }
  generatePermissions(role) {
    const rolePerms = _constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PERMISSIONS[role] ?? {};
    return Object.entries(rolePerms).map(([module, actions]) => ({
      module,
      actions
    }));
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1518:
/*!*****************************************************!*\
  !*** ./src/app/core/services/navigation.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class NavigationService {
  constructor() {
    this.allNavItems = [{
      label: 'Dashboard',
      icon: 'fas fa-th-large',
      routerLink: '/dashboard',
      module: 'dashboard'
    }, {
      label: 'Employee Management',
      icon: 'fas fa-users',
      routerLink: '/employees',
      module: 'employees',
      children: [{
        label: 'All Employees',
        icon: 'fas fa-user-friends',
        routerLink: '/employees',
        module: 'employees'
      }, {
        label: 'Add Employee',
        icon: 'fas fa-user-plus',
        routerLink: '/employees/add',
        module: 'employees'
      }]
    }, {
      label: 'Departments',
      icon: 'fas fa-building',
      routerLink: '/departments',
      module: 'departments'
    }, {
      label: 'Designations',
      icon: 'fas fa-id-badge',
      routerLink: '/designations',
      module: 'designations'
    }, {
      label: 'Branches',
      icon: 'fas fa-map-marker-alt',
      routerLink: '/branches',
      module: 'branches'
    }, {
      label: 'Teams',
      icon: 'fas fa-user-friends',
      routerLink: '/teams',
      module: 'teams'
    }, {
      label: 'Attendance',
      icon: 'fas fa-clock',
      routerLink: '/attendance',
      module: 'attendance',
      children: [{
        label: 'All Attendance',
        icon: 'fas fa-list',
        routerLink: '/attendance',
        module: 'attendance'
      }, {
        label: 'Check In/Out',
        icon: 'fas fa-sign-in-alt',
        routerLink: '/attendance/check-in-out',
        module: 'checkInOut'
      }]
    }, {
      label: 'Leave Management',
      icon: 'fas fa-calendar-alt',
      routerLink: '/leave',
      module: 'leave',
      children: [{
        label: 'All Requests',
        icon: 'fas fa-list',
        routerLink: '/leave',
        module: 'leave'
      }, {
        label: 'Apply Leave',
        icon: 'fas fa-plus-circle',
        routerLink: '/leave/apply',
        module: 'applyLeave'
      }]
    }, {
      label: 'Shift Management',
      icon: 'fas fa-business-time',
      routerLink: '/shifts',
      module: 'shifts'
    }, {
      label: 'Payroll',
      icon: 'fas fa-money-check-alt',
      routerLink: '/payroll',
      module: 'payroll',
      children: [{
        label: 'Payroll List',
        icon: 'fas fa-list',
        routerLink: '/payroll',
        module: 'payroll'
      }, {
        label: 'Payslips',
        icon: 'fas fa-file-invoice-dollar',
        routerLink: '/payroll/payslips',
        module: 'payroll'
      }]
    }, {
      label: 'Recruitment',
      icon: 'fas fa-briefcase',
      routerLink: '/recruitment',
      module: 'recruitment',
      children: [{
        label: 'Job Openings',
        icon: 'fas fa-plus-square',
        routerLink: '/recruitment',
        queryParams: {
          tab: 'openings'
        },
        module: 'recruitment'
      }, {
        label: 'Candidates',
        icon: 'fas fa-user-tie',
        routerLink: '/recruitment',
        queryParams: {
          tab: 'candidates'
        },
        module: 'recruitment'
      }]
    }, {
      label: 'Onboarding',
      icon: 'fas fa-handshake',
      routerLink: '/onboarding',
      module: 'onboarding'
    }, {
      label: 'Performance',
      icon: 'fas fa-chart-line',
      routerLink: '/performance',
      module: 'performance',
      children: [{
        label: 'Reviews',
        icon: 'fas fa-star',
        routerLink: '/performance',
        queryParams: {
          tab: 'reviews'
        },
        module: 'performance'
      }, {
        label: 'KPIs',
        icon: 'fas fa-bullseye',
        routerLink: '/performance',
        queryParams: {
          tab: 'kpi'
        },
        module: 'kpi'
      }]
    }, {
      label: 'Training',
      icon: 'fas fa-graduation-cap',
      routerLink: '/training',
      module: 'training'
    }, {
      label: 'Documents',
      icon: 'fas fa-folder-open',
      routerLink: '/documents',
      module: 'documents'
    }, {
      label: 'Announcements',
      icon: 'fas fa-bullhorn',
      routerLink: '/announcements',
      module: 'announcements'
    }, {
      label: 'Notifications',
      icon: 'fas fa-bell',
      routerLink: '/notifications',
      module: 'notifications'
    }, {
      label: 'Reports & Analytics',
      icon: 'fas fa-chart-bar',
      routerLink: '/reports',
      module: 'reports',
      children: [{
        label: 'HR Reports',
        icon: 'fas fa-file-alt',
        routerLink: '/reports',
        queryParams: {
          tab: 'hr'
        },
        module: 'reports'
      }, {
        label: 'Attendance Reports',
        icon: 'fas fa-calendar-check',
        routerLink: '/reports',
        queryParams: {
          tab: 'attendance'
        },
        module: 'reports'
      }, {
        label: 'Payroll Reports',
        icon: 'fas fa-money-bill',
        routerLink: '/reports',
        queryParams: {
          tab: 'payroll'
        },
        module: 'reports'
      }]
    }, {
      label: 'User Management',
      icon: 'fas fa-user-cog',
      routerLink: '/users',
      module: 'userManagement'
    }, {
      label: 'Roles & Permissions',
      icon: 'fas fa-shield-alt',
      routerLink: '/roles',
      module: 'rolesPermissions'
    }, {
      label: 'System Settings',
      icon: 'fas fa-cog',
      routerLink: '/settings',
      module: 'systemSettings'
    }, {
      label: 'Audit Logs',
      icon: 'fas fa-history',
      routerLink: '/audit-logs',
      module: 'auditLogs'
    }];
    this.hrNavItems = [{
      label: 'Dashboard',
      icon: 'fas fa-th-large',
      routerLink: '/dashboard',
      module: 'dashboard'
    }, {
      label: 'Employees',
      icon: 'fas fa-users',
      routerLink: '/employees',
      module: 'employees'
    }, {
      label: 'Departments',
      icon: 'fas fa-building',
      routerLink: '/departments',
      module: 'departments'
    }, {
      label: 'Teams',
      icon: 'fas fa-user-friends',
      routerLink: '/teams',
      module: 'teams'
    }, {
      label: 'Attendance',
      icon: 'fas fa-clock',
      routerLink: '/attendance',
      module: 'attendance'
    }, {
      label: 'Leave Management',
      icon: 'fas fa-calendar-alt',
      routerLink: '/leave',
      module: 'leave'
    }, {
      label: 'Shift Management',
      icon: 'fas fa-business-time',
      routerLink: '/shifts',
      module: 'shifts'
    }, {
      label: 'Payroll',
      icon: 'fas fa-money-check-alt',
      routerLink: '/payroll',
      module: 'payroll'
    }, {
      label: 'Recruitment',
      icon: 'fas fa-briefcase',
      routerLink: '/recruitment',
      module: 'recruitment',
      children: [{
        label: 'Job Openings',
        icon: 'fas fa-plus-square',
        routerLink: '/recruitment',
        queryParams: {
          tab: 'jobs'
        },
        module: 'recruitment'
      }, {
        label: 'Candidates',
        icon: 'fas fa-user-tie',
        routerLink: '/recruitment',
        queryParams: {
          tab: 'pipeline'
        },
        module: 'recruitment'
      }, {
        label: 'Interviews',
        icon: 'fas fa-calendar-check',
        routerLink: '/recruitment',
        queryParams: {
          tab: 'interviews'
        },
        module: 'recruitment'
      }]
    }, {
      label: 'Onboarding',
      icon: 'fas fa-handshake',
      routerLink: '/onboarding',
      module: 'onboarding'
    }, {
      label: 'Performance',
      icon: 'fas fa-chart-line',
      routerLink: '/performance',
      module: 'performance'
    }, {
      label: 'Training',
      icon: 'fas fa-graduation-cap',
      routerLink: '/training',
      module: 'training'
    }, {
      label: 'Documents',
      icon: 'fas fa-folder-open',
      routerLink: '/documents',
      module: 'documents'
    }, {
      label: 'Announcements',
      icon: 'fas fa-bullhorn',
      routerLink: '/announcements',
      module: 'announcements'
    }, {
      label: 'Notifications',
      icon: 'fas fa-bell',
      routerLink: '/notifications',
      module: 'notifications'
    }, {
      label: 'HR Reports',
      icon: 'fas fa-chart-bar',
      routerLink: '/reports',
      module: 'reports'
    }, {
      label: 'System Settings',
      icon: 'fas fa-cog',
      routerLink: '/settings',
      module: 'systemSettings'
    }];
    this.tlNavItems = [{
      label: 'Dashboard',
      icon: 'fas fa-th-large',
      routerLink: '/dashboard',
      module: 'dashboard'
    }, {
      label: 'My Team',
      icon: 'fas fa-users',
      routerLink: '/team',
      module: 'myTeam'
    }, {
      label: 'Team Attendance',
      icon: 'fas fa-clock',
      routerLink: '/team/attendance',
      module: 'teamAttendance'
    }, {
      label: 'Team Leave',
      icon: 'fas fa-calendar-alt',
      routerLink: '/team/leave',
      module: 'teamLeave'
    }, {
      label: 'Team Tasks',
      icon: 'fas fa-tasks',
      routerLink: '/team/tasks',
      module: 'teamTasks'
    }, {
      label: 'Team Performance',
      icon: 'fas fa-chart-line',
      routerLink: '/team/performance',
      module: 'teamPerformance'
    }, {
      label: 'KPI',
      icon: 'fas fa-bullseye',
      routerLink: '/team/kpi',
      module: 'kpi'
    }, {
      label: 'Team Reports',
      icon: 'fas fa-chart-bar',
      routerLink: '/team/reports',
      module: 'teamReports'
    }, {
      label: 'Announcements',
      icon: 'fas fa-bullhorn',
      routerLink: '/announcements',
      module: 'announcements'
    }, {
      label: 'Notifications',
      icon: 'fas fa-bell',
      routerLink: '/notifications',
      module: 'notifications'
    }, {
      label: 'System Settings',
      icon: 'fas fa-cog',
      routerLink: '/settings',
      module: 'systemSettings'
    }];
    this.employeeNavItems = [{
      label: 'Dashboard',
      icon: 'fas fa-th-large',
      routerLink: '/dashboard',
      module: 'dashboard'
    }, {
      label: 'My Profile',
      icon: 'fas fa-user',
      routerLink: '/my-profile',
      module: 'myProfile'
    }, {
      label: 'My Attendance',
      icon: 'fas fa-clock',
      routerLink: '/my-attendance',
      module: 'myAttendance'
    }, {
      label: 'Check In / Out',
      icon: 'fas fa-sign-in-alt',
      routerLink: '/check-in-out',
      module: 'checkInOut'
    }, {
      label: 'Break Tracker',
      icon: 'fas fa-coffee',
      routerLink: '/break-tracker',
      module: 'breakTracker'
    }, {
      label: 'Daily Work Update',
      icon: 'fas fa-clipboard-list',
      routerLink: '/daily-work-update',
      module: 'dailyWorkUpdate'
    }, {
      label: 'My Leave',
      icon: 'fas fa-calendar-alt',
      routerLink: '/my-leave',
      module: 'myLeave'
    }, {
      label: 'Apply Leave',
      icon: 'fas fa-plus-circle',
      routerLink: '/apply-leave',
      module: 'applyLeave'
    }, {
      label: 'My Payslips',
      icon: 'fas fa-file-invoice-dollar',
      routerLink: '/my-payslips',
      module: 'myPayslips'
    }, {
      label: 'My Tasks',
      icon: 'fas fa-tasks',
      routerLink: '/my-tasks',
      module: 'myTasks'
    }, {
      label: 'My Performance',
      icon: 'fas fa-star',
      routerLink: '/my-performance',
      module: 'myPerformance'
    }, {
      label: 'My Documents',
      icon: 'fas fa-folder-open',
      routerLink: '/my-documents',
      module: 'myDocuments'
    }, {
      label: 'Announcements',
      icon: 'fas fa-bullhorn',
      routerLink: '/announcements',
      module: 'announcements'
    }, {
      label: 'Notifications',
      icon: 'fas fa-bell',
      routerLink: '/notifications',
      module: 'notifications'
    }, {
      label: 'System Settings',
      icon: 'fas fa-cog',
      routerLink: '/settings',
      module: 'systemSettings'
    }];
  }
  getNavItems(role) {
    switch (role) {
      case _models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN:
        return this.allNavItems;
      case _models__WEBPACK_IMPORTED_MODULE_0__.UserRole.HR:
        return this.hrNavItems;
      case _models__WEBPACK_IMPORTED_MODULE_0__.UserRole.TL:
        return this.tlNavItems;
      case _models__WEBPACK_IMPORTED_MODULE_0__.UserRole.EMPLOYEE:
        return this.employeeNavItems;
      default:
        return [];
    }
  }
  static {
    this.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 871:
/*!*****************************************************!*\
  !*** ./src/app/core/services/permission.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionService: () => (/* binding */ PermissionService)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 8010);



class PermissionService {
  constructor(authService) {
    this.authService = authService;
  }
  can(module, action) {
    return this.authService.hasPermission(module, action);
  }
  canView(module) {
    return this.can(module, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.VIEW);
  }
  canCreate(module) {
    return this.can(module, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.CREATE);
  }
  canUpdate(module) {
    return this.can(module, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.UPDATE);
  }
  canDelete(module) {
    return this.can(module, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.DELETE);
  }
  canApprove(module) {
    return this.can(module, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.APPROVE);
  }
  canExport(module) {
    return this.can(module, _models__WEBPACK_IMPORTED_MODULE_0__.PermissionAction.EXPORT);
  }
  static {
    this.ɵfac = function PermissionService_Factory(t) {
      return new (t || PermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PermissionService,
      factory: PermissionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9964:
/*!**************************************************!*\
  !*** ./src/app/core/services/sidebar.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarService: () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class SidebarService {
  constructor() {
    this.collapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.collapsed$ = this.collapsedSubject.asObservable();
    this.mobileOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.mobileOpen$ = this.mobileOpenSubject.asObservable();
  }
  toggle() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }
  collapse() {
    this.collapsedSubject.next(true);
  }
  expand() {
    this.collapsedSubject.next(false);
  }
  toggleMobile() {
    this.mobileOpenSubject.next(!this.mobileOpenSubject.value);
  }
  closeMobile() {
    this.mobileOpenSubject.next(false);
  }
  get isCollapsed() {
    return this.collapsedSubject.value;
  }
  get isMobileOpen() {
    return this.mobileOpenSubject.value;
  }
  static {
    this.ɵfac = function SidebarService_Factory(t) {
      return new (t || SidebarService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SidebarService,
      factory: SidebarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5423:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  constructor() {
    this.toastsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.toasts$ = this.toastsSubject.asObservable();
    this.counter = 0;
  }
  show(message, type = 'info', duration = 3000) {
    const toast = {
      id: ++this.counter,
      message,
      type,
      duration
    };
    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, toast]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(toast.id), duration);
    }
  }
  success(message) {
    this.show(message, 'success');
  }
  error(message) {
    this.show(message, 'error', 5000);
  }
  warning(message) {
    this.show(message, 'warning');
  }
  info(message) {
    this.show(message, 'info');
  }
  dismiss(id) {
    const current = this.toastsSubject.value.filter(t => t.id !== id);
    this.toastsSubject.next(current);
  }
  static {
    this.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6519:
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutComponent: () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/sidebar.service */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 755);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ 6925);





class MainLayoutComponent {
  constructor(sidebarService) {
    this.sidebarService = sidebarService;
    this.collapsed = false;
    this.sidebarService.collapsed$.subscribe(v => this.collapsed = v);
  }
  static {
    this.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      decls: 6,
      vars: 2,
      consts: [[1, "app-layout"], [1, "app-main"], [1, "app-content"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sidebar-collapsed", ctx.collapsed);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent],
      styles: [".app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  max-height: 100vh;\n  overflow: hidden;\n  background: #f8fafc;\n  width: 100%;\n}\n\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  width: calc(100% - 260px);\n  max-width: calc(100% - 260px);\n  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 100vh;\n  overflow: hidden;\n}\n\n.app-layout.sidebar-collapsed[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n  margin-left: 72px;\n  width: calc(100% - 72px);\n  max-width: calc(100% - 72px);\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: block;\n  z-index: 990;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 20px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n@media (max-width: 1024px) {\n  .app-main[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0lBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFwcC1tYWluIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNjBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBtYXgtd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hcHAtbGF5b3V0LnNpZGViYXItY29sbGFwc2VkIC5hcHAtbWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcycHgpO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzJweCk7XHJcbn1cclxuXHJcbmFwcC1uYXZiYXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHotaW5kZXg6IDk5MDtcclxufVxyXG5cclxuLmFwcC1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5hcHAtbWFpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8822:
/*!**********************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutModule: () => (/* binding */ MainLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout.component */ 6519);
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.module */ 7090);
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.module */ 1408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class MainLayoutModule {
  static {
    this.ɵfac = function MainLayoutModule_Factory(t) {
      return new (t || MainLayoutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MainLayoutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.SidebarModule, _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainLayoutModule, {
    declarations: [_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.SidebarModule, _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule],
    exports: [_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent]
  });
})();

/***/ }),

/***/ 6925:
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sidebar.service */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







function NavbarComponent_div_15_button_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
  }
}
function NavbarComponent_div_15_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_15_button_3_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const r_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      ctx_r10.switchRole(r_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NavbarComponent_div_15_button_3_i_3_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", (ctx_r7.user == null ? null : ctx_r7.user.role) === r_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-role", r_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r7.user == null ? null : ctx_r7.user.role) === r_r8);
  }
}
function NavbarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Switch Active Role (RBAC Demo)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NavbarComponent_div_15_button_3_Template, 4, 5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.availableRoles);
  }
}
function NavbarComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.unreadCount);
  }
}
function NavbarComponent_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_19_div_7_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const n_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.onNotificationClick(n_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 44)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const n_r14 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("unread", !n_r14.isRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r12.getNotificationIcon(n_r14.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](n_r14.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](n_r14.createdAt);
  }
}
function NavbarComponent_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function NavbarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_19_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.markAllRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Mark all read");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NavbarComponent_div_19_div_7_Template, 7, 6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NavbarComponent_div_19_div_8_Template, 4, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.notifications.length);
  }
}
function NavbarComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 47);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.user == null ? null : ctx_r3.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function NavbarComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r5.user == null ? null : ctx_r5.user.firstName == null ? null : ctx_r5.user.firstName.charAt(0), "", ctx_r5.user == null ? null : ctx_r5.user.lastName == null ? null : ctx_r5.user.lastName.charAt(0), "");
  }
}
function NavbarComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_31_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.showProfileMenu = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " My Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_31_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.showProfileMenu = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_31_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class NavbarComponent {
  constructor(authService, sidebarService, router) {
    this.authService = authService;
    this.sidebarService = sidebarService;
    this.router = router;
    this.collapsed = false;
    this.searchTerm = '';
    this.showProfileMenu = false;
    this.showNotifications = false;
    this.showRoleSelector = false;
    this.notifications = [];
    this.unreadCount = 3;
    this.availableRoles = Object.values(_core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole);
    this.subs = [];
  }
  ngOnInit() {
    this.notifications = [{
      id: '1',
      title: 'Leave Request',
      message: 'Your leave request has been approved',
      type: 'success',
      isRead: false,
      createdAt: '2 hours ago'
    }, {
      id: '2',
      title: 'New Announcement',
      message: 'Company picnic scheduled for next Friday',
      type: 'info',
      isRead: false,
      createdAt: '5 hours ago'
    }, {
      id: '3',
      title: 'Task Assigned',
      message: 'You have been assigned a new task: Q4 Report',
      type: 'task',
      isRead: true,
      createdAt: '1 day ago'
    }];
    this.subs.push(this.sidebarService.collapsed$.subscribe(v => this.collapsed = v), this.authService.currentUser$.subscribe(u => this.user = u));
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }
  onDocumentClick(e) {
    const target = e.target;
    if (!target.closest('.navbar__profile') && !target.closest('.navbar__dropdown')) {
      this.showProfileMenu = false;
    }
    if (!target.closest('.navbar__icon-btn') && !target.closest('.navbar__notifications-dropdown')) {
      this.showNotifications = false;
    }
    if (!target.closest('.navbar__role-switch') && !target.closest('.navbar__role-dropdown')) {
      this.showRoleSelector = false;
    }
  }
  toggleSidebar() {
    this.sidebarService.toggle();
  }
  toggleMobile() {
    this.sidebarService.toggleMobile();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  markAllRead() {
    this.notifications.forEach(n => n.isRead = true);
    this.unreadCount = 0;
  }
  onNotificationClick(n) {
    n.isRead = true;
    this.unreadCount = Math.max(0, this.unreadCount - 1);
  }
  getNotificationIcon(type) {
    const icons = {
      success: 'fas fa-check-circle',
      info: 'fas fa-info-circle',
      task: 'fas fa-tasks',
      warning: 'fas fa-exclamation-triangle'
    };
    return icons[type] || 'fas fa-bell';
  }
  switchRole(roleStr) {
    const role = roleStr;
    this.authService.switchRole(role);
    this.showRoleSelector = false;
    this.router.navigate(['/dashboard']);
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 32,
      vars: 16,
      consts: [[1, "navbar"], [1, "navbar__left"], [1, "navbar__menu-btn", 3, "click"], [1, "fas", "fa-bars"], [1, "navbar__collapse-btn", "desktop-only", 3, "click"], [1, "fas"], [1, "navbar__search", "desktop-only"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search employees, departments...", 3, "ngModel", "ngModelChange"], [1, "navbar__right"], [1, "navbar__role-switch", 3, "click"], [1, "role-switch__badge"], [1, "fas", "fa-user-shield"], [1, "fas", "fa-chevron-down", "role-switch__icon"], ["class", "navbar__role-dropdown", 4, "ngIf"], ["title", "Notifications", 1, "navbar__icon-btn", 3, "click"], [1, "fas", "fa-bell"], ["class", "navbar__badge", 4, "ngIf"], ["class", "navbar__notifications-dropdown", 4, "ngIf"], [1, "navbar__profile", 3, "click"], [1, "navbar__avatar"], ["alt", "Avatar", "class", "avatar-img", 3, "src", 4, "ngIf", "ngIfElse"], ["initialsAvatar", ""], [1, "navbar__user-info", "desktop-only"], [1, "navbar__user-name"], [1, "navbar__user-role"], [1, "fas", "fa-chevron-down", "desktop-only"], ["class", "navbar__dropdown", 4, "ngIf"], [1, "navbar__role-dropdown"], [1, "role-dropdown__header"], ["class", "role-dropdown__item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "role-dropdown__item", 3, "click"], [1, "role-pill"], ["class", "fas fa-check", 4, "ngIf"], [1, "fas", "fa-check"], [1, "navbar__badge"], [1, "navbar__notifications-dropdown"], [1, "dropdown-header"], [3, "click"], [1, "dropdown-body"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "notification-empty", 4, "ngIf"], [1, "notification-item", 3, "click"], [1, "notification-icon"], [1, "notification-content"], [1, "notification-empty"], [1, "fas", "fa-bell-slash"], ["alt", "Avatar", 1, "avatar-img", 3, "src"], [1, "navbar__dropdown"], ["routerLink", "/my-profile", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-user"], ["routerLink", "/settings", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-cog"], [1, "dropdown-divider"], [1, "dropdown-item", "dropdown-item--danger", 3, "click"], [1, "fas", "fa-sign-out-alt"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() {
            return ctx.toggleMobile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
            return ctx.toggleSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.searchTerm = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_10_listener() {
            return ctx.showRoleSelector = !ctx.showRoleSelector;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NavbarComponent_div_15_Template, 4, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_16_listener() {
            return ctx.showNotifications = !ctx.showNotifications;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, NavbarComponent_span_18_Template, 2, 1, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, NavbarComponent_div_19_Template, 9, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_20_listener() {
            return ctx.showProfileMenu = !ctx.showProfileMenu;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, NavbarComponent_img_22_Template, 1, 1, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, NavbarComponent_ng_template_23_Template, 2, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 23)(26, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, NavbarComponent_div_31_Template, 11, 0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-indent", ctx.collapsed)("fa-outdent", !ctx.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-role", ctx.user == null ? null : ctx.user.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.role, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showRoleSelector);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.avatar)("ngIfElse", _r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showProfileMenu);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 64px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  position: relative;\n  z-index: 990;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n\n.navbar__left[_ngcontent-%COMP%], .navbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.navbar__menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #475569;\n  cursor: pointer;\n  padding: 4px;\n}\n\n.navbar__collapse-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 6px 8px;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n\n.navbar__collapse-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.navbar__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  width: 320px;\n  transition: all 0.2s;\n}\n\n.navbar__search[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.navbar__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.navbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 14px;\n  color: #1e293b;\n  width: 100%;\n}\n\n.navbar__icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.navbar__icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.navbar__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #ef4444;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.navbar__profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 24px;\n  transition: all 0.2s;\n  position: relative;\n}\n\n.navbar__profile[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.navbar__avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.25);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.navbar__avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.navbar__user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar__user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.navbar__user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.navbar__profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n}\n\n.navbar__dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);\n  min-width: 200px;\n  padding: 8px;\n  z-index: 200;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  color: #475569;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n\n.dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n  font-size: 14px;\n}\n\n.dropdown-item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.dropdown-item--danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n\n.navbar__notifications-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 52px;\n  right: 60px;\n  width: 360px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.dropdown-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.dropdown-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #6366f1;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.dropdown-body[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}\n\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n  background: #eef2ff;\n  color: #6366f1;\n}\n\n.notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #334155;\n  line-height: 1.4;\n}\n\n.notification-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.notification-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n}\n\n.notification-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n\n.notification-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n\n.navbar__role-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.navbar__role-switch[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.navbar__role-switch[_ngcontent-%COMP%]   .role-switch__badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #1e293b;\n}\n.navbar__role-switch[_ngcontent-%COMP%]   .role-switch__badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.navbar__role-switch[_ngcontent-%COMP%]   .role-switch__icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748b;\n}\n\n.navbar__role-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 8px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n  width: 220px;\n  padding: 8px;\n  z-index: 210;\n}\n.navbar__role-dropdown[_ngcontent-%COMP%]   .role-dropdown__header[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #64748b;\n  padding: 6px 10px;\n  letter-spacing: 0.5px;\n}\n.navbar__role-dropdown[_ngcontent-%COMP%]   .role-dropdown__item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 10px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background 0.15s;\n}\n.navbar__role-dropdown[_ngcontent-%COMP%]   .role-dropdown__item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.navbar__role-dropdown[_ngcontent-%COMP%]   .role-dropdown__item.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  font-weight: 600;\n  color: #1d4ed8;\n}\n\n.role-pill[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e2e8f0;\n  color: #334155;\n}\n.role-pill[data-role=ADMIN][_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.role-pill[data-role=HR][_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6b21a8;\n}\n.role-pill[data-role=TL][_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.role-pill[data-role=EMPLOYEE][_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n@media (max-width: 1024px) {\n  .navbar__menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .navbar__notifications-dropdown[_ngcontent-%COMP%] {\n    right: 10px;\n    width: calc(100vw - 20px);\n    max-width: 360px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQVUsWUFBQTtFQUFjLG1CQUFBO0VBQXFCLGdDQUFBO0VBQWtDLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyx5Q0FBQTtBQVd0TTs7QUFWSTtFQUFnQyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtBQWdCeEU7O0FBZkk7RUFBb0IsYUFBQTtFQUFlLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixZQUFBO0FBeUJ6SDs7QUF4Qkk7RUFBd0IsZ0JBQUE7RUFBa0IsWUFBQTtFQUFjLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLG9CQUFBO0FBbUNwSjs7QUFsQ0k7RUFBOEIsbUJBQUE7RUFBcUIsY0FBQTtBQXVDdkQ7O0FBdENJO0VBQWtCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0VBQVUsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0IsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLG9CQUFBO0FBa0R6Szs7QUFqREk7RUFBK0IscUJBQUE7RUFBdUIsNkNBQUE7QUFzRDFEOztBQXJESTtFQUFvQixjQUFBO0VBQWdCLGVBQUE7QUEwRHhDOztBQXpESTtFQUF3QixZQUFBO0VBQWMsZ0JBQUE7RUFBa0IsYUFBQTtFQUFlLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixXQUFBO0FBa0U1Rzs7QUFqRUk7RUFBb0Isa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsWUFBQTtFQUFjLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsYUFBQTtFQUFlLG1CQUFB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QTtFQUFrQixjQUFBO0FBb1IxRDs7QUFoUkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBbVJOO0FBbFJNO0VBQXVCLG1CQUFBO0VBQXFCLGNBQUE7QUFzUmxEO0FBclJNO0VBQW9CLG1CQUFBO0VBQXFCLGNBQUE7QUF5Ui9DO0FBeFJNO0VBQW9CLG1CQUFBO0VBQXFCLGNBQUE7QUE0Ui9DO0FBM1JNO0VBQTBCLG1CQUFBO0VBQXFCLGNBQUE7QUErUnJEOztBQTVSSTtFQUNFO0lBQW9CLGFBQUE7RUFnU3hCO0VBL1JJO0lBQWdCLHdCQUFBO0VBa1NwQjtFQWpTSTtJQUFrQyxXQUFBO0lBQWEseUJBQUE7SUFBMkIsZ0JBQUE7RUFzUzlFO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXIgeyBoZWlnaHQ6IDY0cHg7IGJhY2tncm91bmQ6ICNmZmZmZmY7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgMjRweDsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiA5OTA7IGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XHJcbiAgICAubmF2YmFyX19sZWZ0LCAubmF2YmFyX19yaWdodCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgfVxyXG4gICAgLm5hdmJhcl9fbWVudS1idG4geyBkaXNwbGF5OiBub25lOyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGZvbnQtc2l6ZTogMjBweDsgY29sb3I6ICM0NzU1Njk7IGN1cnNvcjogcG9pbnRlcjsgcGFkZGluZzogNHB4OyB9XHJcbiAgICAubmF2YmFyX19jb2xsYXBzZS1idG4geyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM5NGEzYjg7IGN1cnNvcjogcG9pbnRlcjsgcGFkZGluZzogNnB4IDhweDsgYm9yZGVyLXJhZGl1czogNnB4OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxyXG4gICAgLm5hdmJhcl9fY29sbGFwc2UtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICM0NzU1Njk7IH1cclxuICAgIC5uYXZiYXJfX3NlYXJjaCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDhweCAxNHB4OyB3aWR0aDogMzIwcHg7IHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XHJcbiAgICAubmF2YmFyX19zZWFyY2g6Zm9jdXMtd2l0aGluIHsgYm9yZGVyLWNvbG9yOiAjNjM2NmYxOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwxMDIsMjQxLDAuMSk7IH1cclxuICAgIC5uYXZiYXJfX3NlYXJjaCBpIHsgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gICAgLm5hdmJhcl9fc2VhcmNoIGlucHV0IHsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kOiBub25lOyBvdXRsaW5lOiBub25lOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMWUyOTNiOyB3aWR0aDogMTAwJTsgfVxyXG4gICAgLm5hdmJhcl9faWNvbi1idG4geyBwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDsgYm9yZGVyLXJhZGl1czogOHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTZweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxyXG4gICAgLm5hdmJhcl9faWNvbi1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBjb2xvcjogIzQ3NTU2OTsgfVxyXG4gICAgLm5hdmJhcl9fYmFkZ2UgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMnB4OyByaWdodDogMnB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICNlZjQ0NDQ7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbiAgICAubmF2YmFyX19wcm9maWxlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyBjdXJzb3I6IHBvaW50ZXI7IHBhZGRpbmc6IDRweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyNHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgICAubmF2YmFyX19wcm9maWxlOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxyXG4gICAgLm5hdmJhcl9fYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMjUpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgIC5hdmF0YXItaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyX191c2VyLWluZm8geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgICAubmF2YmFyX191c2VyLW5hbWUgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWUyOTNiOyB9XHJcbiAgICAubmF2YmFyX191c2VyLXJvbGUgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAubmF2YmFyX19wcm9maWxlIGkgeyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAubmF2YmFyX19kcm9wZG93biB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMDAlOyByaWdodDogMDsgbWFyZ2luLXRvcDogOHB4OyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAxMHB4OyBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMTIpOyBtaW4td2lkdGg6IDIwMHB4OyBwYWRkaW5nOiA4cHg7IHotaW5kZXg6IDIwMDsgfVxyXG4gICAgLmRyb3Bkb3duLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLXJhZGl1czogNnB4OyBjb2xvcjogIzQ3NTU2OTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXNpemU6IDE0cHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cclxuICAgIC5kcm9wZG93bi1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICMxZTI5M2I7IH1cclxuICAgIC5kcm9wZG93bi1pdGVtIGkgeyB3aWR0aDogMTZweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE0cHg7IH1cclxuICAgIC5kcm9wZG93bi1pdGVtLS1kYW5nZXIgeyBjb2xvcjogI2VmNDQ0NDsgfVxyXG4gICAgLmRyb3Bkb3duLWl0ZW0tLWRhbmdlcjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZWYyZjI7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgICAuZHJvcGRvd24tZGl2aWRlciB7IGhlaWdodDogMXB4OyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBtYXJnaW46IDRweCAwOyB9XHJcbiAgICAubmF2YmFyX19ub3RpZmljYXRpb25zLWRyb3Bkb3duIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUycHg7IHJpZ2h0OiA2MHB4OyB3aWR0aDogMzYwcHg7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4xMik7IHotaW5kZXg6IDIwMDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLmRyb3Bkb3duLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMTRweCAxNnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTsgfVxyXG4gICAgLmRyb3Bkb3duLWhlYWRlciBoNCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzFlMjkzYjsgfVxyXG4gICAgLmRyb3Bkb3duLWhlYWRlciBidXR0b24geyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2MzY2ZjE7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4gICAgLmRyb3Bkb3duLWJvZHkgeyBtYXgtaGVpZ2h0OiAzMjBweDsgb3ZlcmZsb3cteTogYXV0bzsgfVxyXG4gICAgLm5vdGlmaWNhdGlvbi1pdGVtIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBwYWRkaW5nOiAxMnB4IDE2cHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzOyB9XHJcbiAgICAubm90aWZpY2F0aW9uLWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyB9XHJcbiAgICAubm90aWZpY2F0aW9uLWl0ZW0udW5yZWFkIHsgYmFja2dyb3VuZDogI2YwZjRmZjsgfVxyXG4gICAgLm5vdGlmaWNhdGlvbi1pY29uIHsgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDsgYm9yZGVyLXJhZGl1czogNTAlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4OyBmbGV4LXNocmluazogMDsgYmFja2dyb3VuZDogI2VlZjJmZjsgY29sb3I6ICM2MzY2ZjE7IH1cclxuICAgIC5ub3RpZmljYXRpb24tY29udGVudCBwIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMzM0MTU1OyBsaW5lLWhlaWdodDogMS40OyB9XHJcbiAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQgc3BhbiB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgIC5ub3RpZmljYXRpb24tZW1wdHkgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDQwcHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAubm90aWZpY2F0aW9uLWVtcHR5IGkgeyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gICAgLm5vdGlmaWNhdGlvbi1lbXB0eSBwIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE0cHg7IH1cclxuXHJcbiAgICAubmF2YmFyX19yb2xlLXN3aXRjaCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2UyZThmMDsgfVxyXG4gICAgICAucm9sZS1zd2l0Y2hfX2JhZGdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgICAgaSB7IGNvbG9yOiAjMjU2M2ViOyB9XHJcbiAgICAgIH1cclxuICAgICAgLnJvbGUtc3dpdGNoX19pY29uIHsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXJfX3JvbGUtZHJvcGRvd24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDIxMDtcclxuICAgICAgLnJvbGUtZHJvcGRvd25fX2hlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJvbGUtZHJvcGRvd25fX2l0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcbiAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IH1cclxuICAgICAgICAmLmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWQ0ZWQ4OyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm9sZS1waWxsIHtcclxuICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICAmW2RhdGEtcm9sZT1cIkFETUlOXCJdIHsgYmFja2dyb3VuZDogI2RiZWFmZTsgY29sb3I6ICMxZTQwYWY7IH1cclxuICAgICAgJltkYXRhLXJvbGU9XCJIUlwiXSB7IGJhY2tncm91bmQ6ICNmM2U4ZmY7IGNvbG9yOiAjNmIyMWE4OyB9XHJcbiAgICAgICZbZGF0YS1yb2xlPVwiVExcIl0geyBiYWNrZ3JvdW5kOiAjZTBmMmZlOyBjb2xvcjogIzAzNjlhMTsgfVxyXG4gICAgICAmW2RhdGEtcm9sZT1cIkVNUExPWUVFXCJdIHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNjY1MzQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIC5uYXZiYXJfX21lbnUtYnRuIHsgZGlzcGxheTogZmxleDsgfVxyXG4gICAgICAuZGVza3RvcC1vbmx5IHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbiAgICAgIC5uYXZiYXJfX25vdGlmaWNhdGlvbnMtZHJvcGRvd24geyByaWdodDogMTBweDsgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTsgbWF4LXdpZHRoOiAzNjBweDsgfVxyXG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1408:
/*!************************************************!*\
  !*** ./src/app/layout/navbar/navbar.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarModule: () => (/* binding */ NavbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 6925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class NavbarModule {
  static {
    this.ɵfac = function NavbarModule_Factory(t) {
      return new (t || NavbarModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NavbarModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavbarModule, {
    declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent]
  });
})();

/***/ }),

/***/ 755:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sidebar.service */ 9964);
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/navigation.service */ 1518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);









function SidebarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14)(3, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "HRM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "HUMAN RESOURCE MANAGEMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function SidebarComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_div_7_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.label);
  }
}
function SidebarComponent_div_7_a_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 26);
  }
}
const _c0 = function (a0) {
  return {
    exact: a0
  };
};
function SidebarComponent_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_7_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_div_7_a_1_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_div_7_a_1_i_3_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r6.routerLink)("queryParams", item_r6.queryParams)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, item_r6.routerLink === "/dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r7.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r7.collapsed);
  }
}
function SidebarComponent_div_7_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.label);
  }
}
function SidebarComponent_div_7_ng_container_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 30);
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r16.expandedMenus.has(item_r6.label) ? "fas fa-chevron-down" : "fas fa-chevron-up");
  }
}
function SidebarComponent_div_7_ng_container_2_div_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_7_ng_container_2_div_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", child_r21.routerLink)("queryParams", child_r21.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](child_r21.icon || "fas fa-file-alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](child_r21.label);
  }
}
function SidebarComponent_div_7_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_7_ng_container_2_div_5_a_1_Template, 4, 5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r6.children);
  }
}
function SidebarComponent_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_7_ng_container_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.toggleSubmenu(item_r6.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_div_7_ng_container_2_span_3_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_div_7_ng_container_2_i_4_Template, 1, 2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_div_7_ng_container_2_div_5_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded", ctx_r8.expandedMenus.has(item_r6.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.expandedMenus.has(item_r6.label) && !ctx_r8.collapsed);
  }
}
function SidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_7_a_1_Template, 4, 9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_div_7_ng_container_2_Template, 6, 7, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r6.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r6.children);
  }
}
function SidebarComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.cancelLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_12_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Confirm Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Are you sure you want to log out of HRM Pro?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 41)(9, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_12_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.cancelLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_12_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.performLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Yes, Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
class SidebarComponent {
  constructor(authService, sidebarService, navigationService, router) {
    this.authService = authService;
    this.sidebarService = sidebarService;
    this.navigationService = navigationService;
    this.router = router;
    this.collapsed = false;
    this.mobileOpen = false;
    this.expandedMenus = new Set();
    this.navItems = [];
    this.roleLabel = '';
    this.isAdmin = false;
    this.subs = [];
    this.showLogoutModal = false;
  }
  ngOnInit() {
    this.subs.push(this.sidebarService.collapsed$.subscribe(v => this.collapsed = v), this.sidebarService.mobileOpen$.subscribe(v => this.mobileOpen = v), this.authService.currentUser$.subscribe(user => {
      this.user = user;
      if (user) {
        this.navItems = this.navigationService.getNavItems(user.role);
        this.isAdmin = user.role === _core_models__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN;
        this.roleLabel = user.role;
        this.autoExpandActiveSubmenus();
      }
    }), this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
      this.sidebarService.closeMobile();
      this.autoExpandActiveSubmenus();
    }));
  }
  autoExpandActiveSubmenus() {
    const currentUrl = this.router.url;
    this.expandedMenus.clear();
    for (const item of this.navItems) {
      if (item.children) {
        const hasActiveChild = item.children.some(child => {
          return currentUrl.includes(child.routerLink);
        });
        if (hasActiveChild) {
          this.expandedMenus.add(item.label);
        }
      }
    }
  }
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
  toggle() {
    this.sidebarService.toggle();
  }
  closeMobile() {
    this.sidebarService.closeMobile();
  }
  toggleSubmenu(label) {
    if (this.expandedMenus.has(label)) {
      this.expandedMenus.delete(label);
    } else {
      this.expandedMenus.clear();
      this.expandedMenus.add(label);
    }
  }
  confirmLogout() {
    this.showLogoutModal = true;
  }
  cancelLogout() {
    this.showLogoutModal = false;
  }
  performLogout() {
    this.showLogoutModal = false;
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 13,
      vars: 11,
      consts: [[1, "sidebar-overlay", 3, "click"], [1, "sidebar"], [1, "sidebar__header"], ["class", "sidebar__brand", 4, "ngIf", "ngIfElse"], ["collapsedBrand", ""], [1, "sidebar__menu"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "sidebar__footer"], [1, "menu-link", "menu-link--logout", 3, "click"], [1, "fas", "fa-sign-out-alt", "menu-icon"], ["class", "menu-text", 4, "ngIf"], ["class", "logout-modal-backdrop", 3, "click", 4, "ngIf"], [1, "sidebar__brand"], ["src", "assets/images/hrm.png", "alt", "HRM Logo", 1, "brand-img-large"], [1, "brand-text-block"], [1, "brand-title"], [1, "brand-tagline"], [1, "sidebar__brand", "collapsed-brand"], ["src", "assets/images/hrm.png", "alt", "HRM Logo", 1, "brand-img-collapsed"], [1, "menu-item"], ["class", "menu-link", "routerLinkActive", "active", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "click", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active", 1, "menu-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "click"], [1, "menu-icon"], ["class", "fas fa-chevron-up chevron-icon", 4, "ngIf"], [1, "menu-text"], [1, "fas", "fa-chevron-up", "chevron-icon"], [1, "menu-link", "menu-link--parent", 3, "click"], ["class", "chevron-icon", 3, "class", 4, "ngIf"], ["class", "submenu-list", 4, "ngIf"], [1, "chevron-icon"], [1, "submenu-list"], ["class", "submenu-link", "routerLinkActive", "active", 3, "routerLink", "queryParams", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "submenu-link", 3, "routerLink", "queryParams", "click"], [1, "submenu-icon"], [1, "logout-modal-backdrop", 3, "click"], [1, "logout-modal-card", 3, "click"], [1, "modal-icon-box"], [1, "fas", "fa-sign-out-alt"], [1, "modal-title"], [1, "modal-desc"], [1, "modal-actions"], [1, "btn-modal-cancel", 3, "click"], [1, "btn-modal-confirm", 3, "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener() {
            return ctx.closeMobile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "aside", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_div_3_Template, 7, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nav", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SidebarComponent_div_7_Template, 3, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_9_listener() {
            return ctx.confirmLogout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SidebarComponent_span_11_Template, 2, 0, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SidebarComponent_div_12_Template, 13, 0, "div", 11);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.mobileOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("collapsed", ctx.collapsed)("mobile-open", ctx.mobileOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.collapsed)("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.navItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLogoutModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive],
      styles: [".sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(2px);\n  z-index: 998;\n}\n.sidebar-overlay.active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 260px;\n  background: linear-gradient(180deg, #2269f5 0%, #1757db 100%);\n  color: #ffffff;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 4px 0 24px rgba(29, 100, 242, 0.3);\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  \n\n  \n\n  \n\n  \n\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 16px 8px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 16px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.22);\n  min-height: 72px;\n  background: rgba(0, 0, 0, 0.08);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand[_ngcontent-%COMP%]   .brand-img-large[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  object-fit: contain;\n  flex-shrink: 0;\n  filter: brightness(0) invert(1);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand[_ngcontent-%COMP%]   .brand-text-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand[_ngcontent-%COMP%]   .brand-text-block[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand[_ngcontent-%COMP%]   .brand-text-block[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.9);\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  margin-top: 3px;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand.collapsed-brand[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__header[_ngcontent-%COMP%]   .sidebar__brand.collapsed-brand[_ngcontent-%COMP%]   .brand-img-collapsed[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__menu[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 4px 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 20px;\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  font-weight: 700;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  text-align: center;\n  font-size: 19px;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #ffffff;\n  transition: transform 0.25s ease;\n  margin-left: auto;\n}\n.sidebar[_ngcontent-%COMP%]   .submenu-list[_ngcontent-%COMP%] {\n  background: #4884f7;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  border-right: 3px solid rgba(255, 255, 255, 0.45);\n  animation: _ngcontent-%COMP%_fadeInSubmenu 0.25s ease-out;\n}\n.sidebar[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 20px 14px 24px;\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ffffff;\n  opacity: 0.95;\n}\n.sidebar[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.sidebar[_ngcontent-%COMP%]   .submenu-link.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.28);\n  color: #ffffff;\n  font-weight: 700;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__footer[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.22);\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__footer[_ngcontent-%COMP%]   .menu-link--logout[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ffffff;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__footer[_ngcontent-%COMP%]   .menu-link--logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.25);\n  color: #ffffff;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInSubmenu {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.logout-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(4px);\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeInBackdrop 0.2s ease-out;\n}\n\n.logout-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 32px 28px;\n  max-width: 400px;\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: _ngcontent-%COMP%_scaleUpModal 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.modal-icon-box[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #fef2f2;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  margin-bottom: 16px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px 0;\n}\n\n.modal-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 24px 0;\n  line-height: 1.5;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n}\n\n.btn-modal-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-modal-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n\n.btn-modal-confirm[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border-radius: 12px;\n  border: none;\n  background: #ef4444;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-modal-confirm[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInBackdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleUpModal {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdHQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHVGQUFBO0VBV0EsbUJBQUE7RUE2REEsaUNBQUE7RUEyRUEsNkJBQUE7RUFzQ0EsbUJBQUE7QUFyTEY7QUFGRTtFQUNFLFdBQUE7QUFJSjtBQUZJO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQUlOO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUFDUjtBQUVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQUFWO0FBR1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFEVjtBQUtNO0VBQ0UsdUJBQUE7QUFIUjtBQUtRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFB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QSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUF4QkY7QUEwQkU7RUFDRSxtQkFBQTtBQXhCSjs7QUE0QkE7RUFDRTtJQUFPLFVBQUE7RUF4QlA7RUF5QkE7SUFBSyxVQUFBO0VBdEJMO0FBQ0Y7QUF3QkE7RUFDRTtJQUFPLFVBQUE7SUFBWSxxQkFBQTtFQXBCbkI7RUFxQkE7SUFBSyxVQUFBO0lBQVksbUJBQUE7RUFqQmpCO0FBQ0Y7QUFtQkE7RUFDRTtJQUNFLDRCQUFBO0VBakJGO0VBbUJFO0lBQ0Usd0JBQUE7RUFqQko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxuICB6LWluZGV4OiA5OTg7XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMjY5ZjUgMCUsICMxNzU3ZGIgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiA0cHggMCAyNHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjMpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuXHJcbiAgJi5jb2xsYXBzZWQge1xyXG4gICAgd2lkdGg6IDcycHg7XHJcblxyXG4gICAgLnNpZGViYXJfX2hlYWRlciB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBIRUFERVIgLS0tICovXHJcbiAgLnNpZGViYXJfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDE2cHggMThweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpO1xyXG4gICAgbWluLWhlaWdodDogNzJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4gICAgLnNpZGViYXJfX2JyYW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5icmFuZC1pbWctbGFyZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5icmFuZC10ZXh0LWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgICAgICAgLmJyYW5kLXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5icmFuZC10YWdsaW5lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sbGFwc2VkLWJyYW5kIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmJyYW5kLWltZy1jb2xsYXBzZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSBOQVZJR0FUSU9OIE1FTlUgTElTVCAtLS0gKi9cclxuICAuc2lkZWJhcl9fbWVudSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5tZW51LWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXRleHQge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGV2cm9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gU1VCTUVOVSBFWFBBTkRFRCAtLS0gKi9cclxuICAuc3VibWVudS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICM0ODg0Zjc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5TdWJtZW51IDAuMjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1lbnUtbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTRweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweCAxNHB4IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgIC5zdWJtZW51LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBvcGFjaXR5OiAwLjk1O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gRk9PVEVSIC0tLSAqL1xyXG4gIC5zaWRlYmFyX19mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5tZW51LWxpbmstLWxvZ291dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMjUpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblN1Ym1lbnUge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4vKiAtLS0gTE9HT1VUIENPTkZJUk1BVElPTiBNT0RBTCAtLS0gKi9cclxuLmxvZ291dC1tb2RhbC1iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC42KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBhbmltYXRpb246IGZhZGVJbkJhY2tkcm9wIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5sb2dvdXQtbW9kYWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDMycHggMjhweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZVVwTW9kYWwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG59XHJcblxyXG4ubW9kYWwtaWNvbi1ib3gge1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1kZXNjIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luOiAwIDAgMjRweCAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5tb2RhbC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbC1jYW5jZWwge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tbW9kYWwtY29uZmlybSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5CYWNrZHJvcCB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZVVwTW9kYWwge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5zaWRlYmFyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcblxyXG4gICAgJi5tb2JpbGUtb3BlbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7090:
/*!**************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarModule: () => (/* binding */ SidebarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ 755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class SidebarModule {
  static {
    this.ɵfac = function SidebarModule_Factory(t) {
      return new (t || SidebarModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SidebarModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidebarModule, {
    declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent]
  });
})();

/***/ }),

/***/ 4817:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/chart-bar/chart-bar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartBarComponent: () => (/* binding */ ChartBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ChartBarComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.subtitle);
  }
}
function ChartBarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChartBarComponent_div_1_span_4_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Live Trend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.subtitle);
  }
}
function ChartBarComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tick_r5);
  }
}
function ChartBarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
  }
}
function ChartBarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r3.getBarHeight(item_r7.value), "%")("background", ctx_r3.colors[i_r8 % ctx_r3.colors.length]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r7.label + ": " + item_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.label);
  }
}
class ChartBarComponent {
  constructor() {
    this.title = '';
    this.subtitle = '';
    this.chartData = [];
    this.colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    this.maxValue = 100;
    this.yTicks = [];
  }
  ngOnChanges() {
    const rawMax = Math.max(...this.chartData.map(d => d.value), 10);
    this.maxValue = Math.ceil(rawMax / 50) * 50 || 200;
    const step = this.maxValue / 4;
    this.yTicks = [this.maxValue, Math.round(step * 3), Math.round(step * 2), Math.round(step), 0];
  }
  getBarHeight(value) {
    return this.maxValue > 0 ? Math.min(value / this.maxValue * 100, 100) : 0;
  }
  static {
    this.ɵfac = function ChartBarComponent_Factory(t) {
      return new (t || ChartBarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartBarComponent,
      selectors: [["app-chart-bar"]],
      inputs: {
        title: "title",
        subtitle: "subtitle",
        chartData: "chartData",
        colors: "colors"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 10,
      vars: 4,
      consts: [[1, "chart-container"], ["class", "chart-header", 4, "ngIf"], [1, "bar-chart"], [1, "bar-chart__y-axis"], [4, "ngFor", "ngForOf"], [1, "bar-chart__bars-container"], [1, "grid-lines"], ["class", "grid-line", 4, "ngFor", "ngForOf"], [1, "bar-chart__bars"], ["class", "bar-group", 4, "ngFor", "ngForOf"], [1, "chart-header"], ["class", "chart-subtitle", 4, "ngIf"], [1, "chart-badge"], [1, "dot"], [1, "chart-subtitle"], [1, "grid-line"], [1, "bar-group"], [1, "bar-wrapper"], [1, "bar", 3, "title"], [1, "bar__value"], [1, "bar__label"]],
      template: function ChartBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartBarComponent_div_1_Template, 8, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChartBarComponent_span_4_Template, 2, 1, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChartBarComponent_div_7_Template, 1, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChartBarComponent_div_9_Template, 7, 7, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yTicks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yTicks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chartData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f5f9;\n  min-width: 0;\n}\n\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px 0;\n}\n.chart-header[_ngcontent-%COMP%]   .chart-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.chart-header[_ngcontent-%COMP%]   .chart-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6366f1;\n  background: #eef2ff;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.chart-header[_ngcontent-%COMP%]   .chart-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #6366f1;\n}\n\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  height: 220px;\n  min-width: 0;\n}\n\n.bar-chart__y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n  padding: 4px 0 24px 0;\n  text-align: right;\n  min-width: 28px;\n}\n\n.bar-chart__bars-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.grid-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  pointer-events: none;\n}\n.grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #e2e8f0;\n  width: 100%;\n}\n\n.bar-chart__bars[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: 1;\n  align-items: stretch;\n  gap: 16px;\n  height: 100%;\n  min-width: 0;\n}\n\n.bar-group[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.bar-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  position: relative;\n  padding-bottom: 2px;\n}\n\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 38px;\n  min-height: 8px;\n  border-radius: 8px 8px 0 0;\n  transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.2s ease, opacity 0.2s ease;\n  position: relative;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n.bar[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scaleX(1.05);\n  opacity: 0.95;\n}\n.bar[_ngcontent-%COMP%]:hover   .bar__value[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-4px);\n}\n\n.bar__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -24px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 11px;\n  font-weight: 700;\n  color: #1e293b;\n  background: #ffffff;\n  padding: 2px 6px;\n  border-radius: 6px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n\n.bar__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnQtYmFyL2NoYXJ0LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUhGO0FBS0U7RUFDRSw4QkFBQTtFQUNBLFdBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBSkY7QUFNRTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtBQUpKO0FBTUk7RUFDRSxVQUFBO0VBQ0EsNENBQUE7QUFKTjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5jaGFydC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgIG1hcmdpbjogMCAwIDRweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNoYXJ0LXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gIH1cclxuXHJcbiAgLmNoYXJ0LWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM2MzY2ZjE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVmMmZmO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC5kb3Qge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjM2NmYxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhci1jaGFydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE2cHg7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5iYXItY2hhcnRfX3ktYXhpcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA0cHggMCAyNHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWluLXdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4uYmFyLWNoYXJ0X19iYXJzLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5ncmlkLWxpbmVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgLmdyaWQtbGluZSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlMmU4ZjA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5iYXItY2hhcnRfX2JhcnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBnYXA6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmJhci1ncm91cCB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uYmFyLXdyYXBwZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzhweDtcclxuICBtaW4taGVpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpLCB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBvcGFjaXR5IDAuMnMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZVgoMS4wNSk7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG5cclxuICAgIC5iYXJfX3ZhbHVlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFyX192YWx1ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTI0cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYmFyX19sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 660:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/chart-bar/chart-bar.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartBarModule: () => (/* binding */ ChartBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _chart_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-bar.component */ 4817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ChartBarModule {
  static {
    this.ɵfac = function ChartBarModule_Factory(t) {
      return new (t || ChartBarModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartBarModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartBarModule, {
    declarations: [_chart_bar_component__WEBPACK_IMPORTED_MODULE_0__.ChartBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_chart_bar_component__WEBPACK_IMPORTED_MODULE_0__.ChartBarComponent]
  });
})();

/***/ }),

/***/ 9845:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/chart-donut/chart-donut.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartDonutComponent: () => (/* binding */ ChartDonutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ChartDonutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function ChartDonutComponent__svg_circle_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 12);
  }
  if (rf & 2) {
    const seg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke", seg_r3.color)("stroke-dasharray", seg_r3.percent + " " + (100 - seg_r3.percent))("stroke-dashoffset", ctx_r1.getOffset(i_r4));
  }
}
function ChartDonutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seg_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", seg_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](seg_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, seg_r5.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, seg_r5.percent, "1.0-1"), "%");
  }
}
class ChartDonutComponent {
  constructor() {
    this.title = '';
    this.data = [];
  }
  get total() {
    return this.data.reduce((s, d) => s + d.value, 0);
  }
  get segments() {
    return this.data.map(d => ({
      ...d,
      percent: this.total > 0 ? d.value / this.total * 100 : 0
    }));
  }
  getOffset(index) {
    let prevSum = 0;
    for (let i = 0; i < index; i++) {
      prevSum += this.segments[i].percent;
    }
    return -prevSum;
  }
  static {
    this.ɵfac = function ChartDonutComponent_Factory(t) {
      return new (t || ChartDonutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartDonutComponent,
      selectors: [["app-chart-donut"]],
      inputs: {
        title: "title",
        data: "data"
      },
      decls: 14,
      vars: 6,
      consts: [[1, "chart-container"], ["class", "chart-header", 4, "ngIf"], [1, "donut-chart"], [1, "donut-ring"], ["viewBox", "0 0 36 36"], ["class", "donut-segment", "cx", "18", "cy", "18", "r", "15.9155", "fill", "none", "stroke-width", "3.8", 4, "ngFor", "ngForOf"], [1, "donut-center"], [1, "donut-center__value"], [1, "donut-center__label"], [1, "donut-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "chart-header"], ["cx", "18", "cy", "18", "r", "15.9155", "fill", "none", "stroke-width", "3.8", 1, "donut-segment"], [1, "legend-item"], [1, "legend-dot"], [1, "legend-label"], [1, "legend-value"], [1, "legend-percent"]],
      template: function ChartDonutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartDonutComponent_div_1_Template, 3, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChartDonutComponent__svg_circle_5_Template, 1, 3, "circle", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChartDonutComponent_div_13_Template, 10, 10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.segments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.total));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.segments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f5f9;\n  min-width: 0;\n}\n\n.chart-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n\n.donut-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  min-width: 0;\n}\n\n.donut-ring[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.donut-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  width: 100%;\n  height: 100%;\n}\n\n.donut-segment[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n}\n\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.donut-center__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #1e293b;\n}\n\n.donut-center__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n\n.donut-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n\n.legend-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.legend-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.legend-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1e293b;\n  min-width: 24px;\n  text-align: right;\n}\n\n.legend-percent[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  min-width: 42px;\n  text-align: right;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnQtZG9udXQvY2hhcnQtZG9udXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmNoYXJ0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNoYXJ0LWhlYWRlciBoMyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZG9udXQtY2hhcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZG9udXQtcmluZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uZG9udXQtcmluZyBzdmcge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZG9udXQtc2VnbWVudCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmRvbnV0LWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZG9udXQtY2VudGVyX192YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbn1cclxuXHJcbi5kb251dC1jZW50ZXJfX2xhYmVsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmRvbnV0LWxlZ2VuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmxlZ2VuZC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubGVnZW5kLWRvdCB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5sZWdlbmQtbGFiZWwge1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubGVnZW5kLXZhbHVlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIG1pbi13aWR0aDogMjRweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmxlZ2VuZC1wZXJjZW50IHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBtaW4td2lkdGg6IDQycHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8136:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/chart-donut/chart-donut.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartDonutModule: () => (/* binding */ ChartDonutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _chart_donut_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-donut.component */ 9845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ChartDonutModule {
  static {
    this.ɵfac = function ChartDonutModule_Factory(t) {
      return new (t || ChartDonutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartDonutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartDonutModule, {
    declarations: [_chart_donut_component__WEBPACK_IMPORTED_MODULE_0__.ChartDonutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_chart_donut_component__WEBPACK_IMPORTED_MODULE_0__.ChartDonutComponent]
  });
})();

/***/ }),

/***/ 4765:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/chart-line/chart-line.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartLineComponent: () => (/* binding */ ChartLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ChartLineComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.subtitle);
  }
}
function ChartLineComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChartLineComponent_div_1_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.subtitle);
  }
}
function ChartLineComponent__svg_circle_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 15);
  }
  if (rf & 2) {
    const point_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", point_r4.x)("cy", point_r4.y)("fill", ctx_r1.lineColor);
  }
}
function ChartLineComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.label);
  }
}
class ChartLineComponent {
  constructor() {
    this.title = '';
    this.subtitle = '';
    this.chartData = [];
    this.lineColor = '#6366f1';
    this.fillColor = 'rgba(99, 102, 241, 0.1)';
    this.height = 200;
    this.points = '';
    this.maxValue = 0;
    this.pathD = '';
  }
  ngOnChanges() {
    if (this.chartData.length < 2) return;
    this.maxValue = Math.max(...this.chartData.map(d => d.value), 1);
    const w = 800.0;
    const h = 200.0;
    const step = w / (this.chartData.length - 1);
    const pts = this.chartData.map((d, i) => {
      const x = i * step;
      const y = h - d.value / this.maxValue * (h - 20);
      return {
        x,
        y
      };
    });
    this.points = pts.map(p => `${p.x},${p.y}`).join(' ');
    this.pathD = pts.map((p, i) => i === 0 ? `M${p.x},${p.y}` : ` L${p.x},${p.y}`).join('');
  }
  getPoints() {
    if (!this.chartData.length) return [];
    const w = 800.0;
    const h = 200.0;
    const step = w / (this.chartData.length - 1);
    return this.chartData.map((d, i) => {
      const x = i * step;
      const y = h - d.value / this.maxValue * (h - 20);
      return {
        x,
        y
      };
    });
  }
  static {
    this.ɵfac = function ChartLineComponent_Factory(t) {
      return new (t || ChartLineComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartLineComponent,
      selectors: [["app-chart-line"]],
      inputs: {
        title: "title",
        subtitle: "subtitle",
        chartData: "chartData",
        lineColor: "lineColor",
        fillColor: "fillColor",
        height: "height"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 11,
      consts: [[1, "chart-container"], ["class", "chart-header", 4, "ngIf"], [1, "chart-body"], ["viewBox", "0 0 800 200", "preserveAspectRatio", "none", "width", "100%"], ["id", "line-fill", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-opacity", "0.2"], ["offset", "100%", "stop-opacity", "0"], ["stroke", "none"], ["fill", "none", "stroke-width", "3"], ["r", "4", "stroke", "#fff", "stroke-width", "2", 4, "ngFor", "ngForOf"], [1, "chart-labels"], [4, "ngFor", "ngForOf"], [1, "chart-header"], ["class", "chart-subtitle", 4, "ngIf"], [1, "chart-subtitle"], ["r", "4", "stroke", "#fff", "stroke-width", "2"]],
      template: function ChartLineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartLineComponent_div_1_Template, 4, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3)(4, "defs")(5, "linearGradient", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5)(7, "stop", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7)(9, "polyline", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChartLineComponent__svg_circle_10_Template, 1, 3, "circle", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChartLineComponent_span_12_Template, 2, 1, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.lineColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.lineColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.pathD)("fill", ctx.fillColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx.points)("stroke", ctx.lineColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getPoints());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chartData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".chart-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n}\n\n.chart-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n.chart-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n\n.chart-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chart-body[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.chart-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  padding: 0 10px;\n}\n\n.chart-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnQtbGluZS9jaGFydC1saW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFBZ0IsbUJBQUE7QUFHaEI7O0FBRkE7RUFBbUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLFNBQUE7QUFTdEU7O0FBUkE7RUFBa0IsZUFBQTtFQUFpQixjQUFBO0FBYW5DOztBQVpBO0VBQWMsV0FBQTtBQWdCZDs7QUFmQTtFQUFrQixjQUFBO0FBbUJsQjs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXFCRjs7QUFuQkE7RUFBcUIsZUFBQTtFQUFpQixjQUFBO0FBd0J0QyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuLmNoYXJ0LWhlYWRlciB7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cclxuLmNoYXJ0LWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMDsgfVxyXG4uY2hhcnQtc3VidGl0bGUgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbi5jaGFydC1ib2R5IHsgd2lkdGg6IDEwMCU7IH1cclxuLmNoYXJ0LWJvZHkgc3ZnIHsgZGlzcGxheTogYmxvY2s7IH1cclxuLmNoYXJ0LWxhYmVscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4uY2hhcnQtbGFiZWxzIHNwYW4geyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1264:
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/chart-line/chart-line.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartLineModule: () => (/* binding */ ChartLineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _chart_line_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-line.component */ 4765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ChartLineModule {
  static {
    this.ɵfac = function ChartLineModule_Factory(t) {
      return new (t || ChartLineModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartLineModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartLineModule, {
    declarations: [_chart_line_component__WEBPACK_IMPORTED_MODULE_0__.ChartLineComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_chart_line_component__WEBPACK_IMPORTED_MODULE_0__.ChartLineComponent]
  });
})();

/***/ }),

/***/ 8709:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function ConfirmDialogComponent_div_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
  }
}
function ConfirmDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConfirmDialogComponent_div_0_span_12_Template, 1, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("dialog__icon--" + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.confirmBtnClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.confirmText, " ");
  }
}
class ConfirmDialogComponent {
  constructor() {
    this.isOpen = false;
    this.title = 'Confirm';
    this.message = 'Are you sure?';
    this.confirmText = 'Confirm';
    this.type = 'danger';
    this.loading = false;
    this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get iconClass() {
    const icons = {
      danger: 'fas fa-trash-alt',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle',
      success: 'fas fa-check'
    };
    return icons[this.type] || icons['info'];
  }
  get confirmBtnClass() {
    const classes = {
      danger: 'btn btn--danger',
      warning: 'btn btn--primary',
      info: 'btn btn--primary',
      success: 'btn btn--primary'
    };
    return classes[this.type] || 'btn btn--primary';
  }
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      inputs: {
        isOpen: "isOpen",
        title: "title",
        message: "message",
        confirmText: "confirmText",
        type: "type",
        loading: "loading"
      },
      outputs: {
        confirmed: "confirmed",
        cancelled: "cancelled"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "overlay", 3, "click", 4, "ngIf"], [1, "overlay", 3, "click"], [1, "dialog", 3, "click"], [1, "dialog__icon"], [1, "dialog__title"], [1, "dialog__message"], [1, "dialog__actions"], [1, "btn", "btn--outline", 3, "click"], [1, "btn", 3, "disabled", "click"], ["class", "spinner", 4, "ngIf"], [1, "spinner"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialogComponent_div_0_Template, 14, 11, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  backdrop-filter: blur(4px);\n}\n\n.dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n\n.dialog__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  font-size: 24px;\n  color: #fff;\n}\n\n.dialog__icon--danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #f87171);\n}\n\n.dialog__icon--warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #fbbf24);\n}\n\n.dialog__icon--info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3b82f6, #60a5fa);\n}\n\n.dialog__icon--success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #34d399);\n}\n\n.dialog__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n\n.dialog__message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n\n.dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn--primary[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n\n.btn--danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n\n.btn--danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n\n.btn--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\n\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxlQUFBO0VBQWlCLFFBQUE7RUFBVSw4QkFBQTtFQUE2QixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsYUFBQTtFQUFlLDBCQUFBO0FBUy9JOztBQVJJO0VBQVUsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsYUFBQTtFQUFlLGdCQUFBO0VBQWtCLFVBQUE7RUFBWSxrQkFBQTtFQUFvQiwwQ0FBQTtBQWtCdEg7O0FBakJJO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsV0FBQTtBQTZCdEs7O0FBNUJJO0VBQXdCLHFEQUFBO0FBZ0M1Qjs7QUEvQkk7RUFBeUIscURBQUE7QUFtQzdCOztBQWxDSTtFQUFzQixxREFBQTtBQXNDMUI7O0FBckNJO0VBQXlCLHFEQUFBO0FBeUM3Qjs7QUF4Q0k7RUFBaUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGVBQUE7QUErQ3hFOztBQTlDSTtFQUFtQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZ0JBQUE7RUFBa0IsZ0JBQUE7QUFxRDFFOztBQXBESTtFQUFtQixhQUFBO0VBQWUsU0FBQTtFQUFXLHVCQUFBO0FBMERqRDs7QUF6REk7RUFBTyxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxlQUFBO0VBQWlCLG9CQUFBO0VBQXNCLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7QUFzRXRMOztBQXJFSTtFQUFnQixtQkFBQTtFQUFxQixXQUFBO0FBMEV6Qzs7QUF6RUk7RUFBc0IsbUJBQUE7QUE2RTFCOztBQTVFSTtFQUFlLG1CQUFBO0VBQXFCLFdBQUE7QUFpRnhDOztBQWhGSTtFQUFxQixtQkFBQTtBQW9GekI7O0FBbkZJO0VBQWdCLHVCQUFBO0VBQXlCLHlCQUFBO0VBQTJCLGNBQUE7QUF5RnhFOztBQXhGSTtFQUFzQixtQkFBQTtBQTRGMUI7O0FBM0ZJO0VBQVcsV0FBQTtFQUFhLFlBQUE7RUFBYywwQ0FBQTtFQUF5QyxzQkFBQTtFQUF3QixrQkFBQTtFQUFvQixvQ0FBQTtBQW9HL0g7O0FBbkdJO0VBQWtCO0lBQUsseUJBQUE7RUF3R3pCO0FBQ0Y7QUF4R0k7RUFBZ0IsWUFBQTtFQUFjLG1CQUFBO0FBNEdsQyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgei1pbmRleDogMTAwMDsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7IH1cclxuICAgIC5kaWFsb2cgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxNnB4OyBwYWRkaW5nOiAzMnB4OyBtYXgtd2lkdGg6IDQyMHB4OyB3aWR0aDogOTAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwwLDAsMC4yKTsgfVxyXG4gICAgLmRpYWxvZ19faWNvbiB7IHdpZHRoOiA1NnB4OyBoZWlnaHQ6IDU2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbjogMCBhdXRvIDE2cHg7IGZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmY7IH1cclxuICAgIC5kaWFsb2dfX2ljb24tLWRhbmdlciB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZjQ0NDQsICNmODcxNzEpOyB9XHJcbiAgICAuZGlhbG9nX19pY29uLS13YXJuaW5nIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2ZiYmYyNCk7IH1cclxuICAgIC5kaWFsb2dfX2ljb24tLWluZm8geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2LCAjNjBhNWZhKTsgfVxyXG4gICAgLmRpYWxvZ19faWNvbi0tc3VjY2VzcyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMzNGQzOTkpOyB9XHJcbiAgICAuZGlhbG9nX190aXRsZSB7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMCAwIDhweDsgfVxyXG4gICAgLmRpYWxvZ19fbWVzc2FnZSB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMCAwIDI0cHg7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuICAgIC5kaWFsb2dfX2FjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbiAgICAuYnRuIHsgcGFkZGluZzogMTBweCAyNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjJzOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cclxuICAgIC5idG4tLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyBjb2xvcjogI2ZmZjsgfVxyXG4gICAgLmJ0bi0tcHJpbWFyeTpob3ZlciB7IGJhY2tncm91bmQ6ICM0ZjQ2ZTU7IH1cclxuICAgIC5idG4tLWRhbmdlciB7IGJhY2tncm91bmQ6ICNlZjQ0NDQ7IGNvbG9yOiAjZmZmOyB9XHJcbiAgICAuYnRuLS1kYW5nZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZGMyNjI2OyB9XHJcbiAgICAuYnRuLS1vdXRsaW5lIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAuYnRuLS1vdXRsaW5lOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxyXG4gICAgLnNwaW5uZXIgeyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7IGJvcmRlci10b3AtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDUwJTsgYW5pbWF0aW9uOiBzcGluIDAuNnMgbGluZWFyIGluZmluaXRlOyB9XHJcbiAgICBAa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxyXG4gICAgLmJ0bjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNzsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8680:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogModule: () => (/* binding */ ConfirmDialogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-dialog.component */ 8709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ConfirmDialogModule {
  static {
    this.ɵfac = function ConfirmDialogModule_Factory(t) {
      return new (t || ConfirmDialogModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ConfirmDialogModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfirmDialogModule, {
    declarations: [_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent]
  });
})();

/***/ }),

/***/ 4901:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableComponent: () => (/* binding */ DataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status-badge/status-badge.component */ 3787);
/* harmony import */ var _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty-state/empty-state.component */ 5577);






function DataTableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DataTableComponent_div_1_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.searchTerm = $event);
    })("ngModelChange", function DataTableComponent_div_1_Template_input_ngModelChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
  }
}
function DataTableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16)(1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DataTableComponent_th_6_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.toggleAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.allSelected);
  }
}
function DataTableComponent_th_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fa-sort", ctx_r13.sortKey !== col_r12.key)("fa-sort-up", ctx_r13.sortKey === col_r12.key && ctx_r13.sortDir === "asc")("fa-sort-down", ctx_r13.sortKey === col_r12.key && ctx_r13.sortDir === "desc");
  }
}
function DataTableComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableComponent_th_7_Template_th_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const col_r12 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onSort(col_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DataTableComponent_th_7_span_3_Template, 2, 6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", col_r12.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("table__th--sortable", col_r12.sortable)("table__th--right", col_r12.align === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r12.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r12.sortable);
  }
}
function DataTableComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DataTableComponent_tr_10_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16)(1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DataTableComponent_tr_10_td_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r22.toggleRow(row_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r19.selectedItems.has(row_r17));
  }
}
function DataTableComponent_tr_10_td_2_app_status_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-status-badge", 32);
  }
  if (rf & 2) {
    const col_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", row_r17[col_r26.key]);
  }
}
function DataTableComponent_tr_10_td_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](2, 1, row_r17[col_r26.key], "USD", "symbol", "1.0-0"));
  }
}
function DataTableComponent_tr_10_td_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r17[col_r26.key], "mediumDate"));
  }
}
function DataTableComponent_tr_10_td_2_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
  }
  if (rf & 2) {
    const col_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", row_r17[col_r26.key], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function DataTableComponent_tr_10_td_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r17[col_r26.key]);
  }
}
function DataTableComponent_tr_10_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DataTableComponent_tr_10_td_2_app_status_badge_2_Template, 1, 1, "app-status-badge", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DataTableComponent_tr_10_td_2_span_3_Template, 3, 6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DataTableComponent_tr_10_td_2_span_4_Template, 3, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DataTableComponent_tr_10_td_2_img_5_Template, 1, 1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DataTableComponent_tr_10_td_2_span_6_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("table__td--right", col_r26.align === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", col_r26.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "image");
  }
}
function DataTableComponent_tr_10_td_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableComponent_tr_10_td_3_button_1_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      const act_r43 = restoredCtx.$implicit;
      const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r44.onAction(act_r43.action, row_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const act_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", act_r43.color || "#64748b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", act_r43.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](act_r43.icon);
  }
}
function DataTableComponent_tr_10_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DataTableComponent_tr_10_td_3_button_1_Template, 2, 5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r21.actions);
  }
}
function DataTableComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableComponent_tr_10_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const row_r17 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.onRowClick.emit(row_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DataTableComponent_tr_10_td_1_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DataTableComponent_tr_10_td_2_Template, 7, 7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DataTableComponent_tr_10_td_3_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("table__row--selected", ctx_r4.selectedItems.has(row_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.actions == null ? null : ctx_r4.actions.length);
  }
}
function DataTableComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-empty-state", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r5.columns.length + (ctx_r5.selectable ? 1 : 0) + (ctx_r5.actions.length ? 1 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r5.emptyTitle)("message", ctx_r5.emptyMessage)("icon", ctx_r5.emptyIcon);
  }
}
function DataTableComponent_div_12_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableComponent_div_12_button_6_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);
      const page_r50 = restoredCtx.$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.goToPage(page_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r50 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", page_r50 === ctx_r49.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r50);
  }
}
function DataTableComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 41)(4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableComponent_div_12_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r53.goToPage(ctx_r53.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DataTableComponent_div_12_button_6_Template, 2, 3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DataTableComponent_div_12_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.goToPage(ctx_r55.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Showing ", ctx_r6.startIndex + 1, " to ", ctx_r6.endIndex, " of ", ctx_r6.totalItems, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.visiblePages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.currentPage === ctx_r6.totalPages);
  }
}
const _c0 = [[["", "tableFilters", ""]], [["", "tableActions", ""]]];
const _c1 = ["[tableFilters]", "[tableActions]"];
class DataTableComponent {
  constructor() {
    this.columns = [];
    this.data = [];
    this.pageSize = 10;
    this.selectable = false;
    this.showHeader = true;
    this.emptyTitle = 'No data found';
    this.emptyMessage = 'There are no records to display.';
    this.emptyIcon = 'fas fa-inbox';
    this.actions = [];
    this.onRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onActionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.searchTerm = '';
    this.sortKey = '';
    this.sortDir = 'asc';
    this.currentPage = 1;
    this.filteredData = [];
    this.pagedData = [];
    this.selectedItems = new Set();
  }
  get totalItems() {
    return this.filteredData.length;
  }
  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  get startIndex() {
    return (this.currentPage - 1) * this.pageSize;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.pageSize, this.totalItems);
  }
  get allSelected() {
    return this.pagedData.length > 0 && this.pagedData.every(r => this.selectedItems.has(r));
  }
  get visiblePages() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }
  ngOnInit() {
    this.applyFilters();
  }
  ngOnChanges(changes) {
    if (changes['data']) this.applyFilters();
  }
  onSearch() {
    this.currentPage = 1;
    this.applyFilters();
  }
  onSort(col) {
    if (!col.sortable) return;
    if (this.sortKey === col.key) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = col.key;
      this.sortDir = 'asc';
    }
    this.applyFilters();
  }
  applyFilters() {
    let result = [...(this.data || [])];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(row => Object.values(row).some(v => String(v).toLowerCase().includes(term)));
    }
    if (this.sortKey) {
      result.sort((a, b) => {
        const aVal = a[this.sortKey];
        const bVal = b[this.sortKey];
        const cmp = String(aVal).localeCompare(String(bVal));
        return this.sortDir === 'asc' ? cmp : -cmp;
      });
    }
    this.filteredData = result;
    this.updatePagedData();
  }
  updatePagedData() {
    this.pagedData = this.filteredData.slice(this.startIndex, this.endIndex);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedData();
  }
  toggleAll() {
    if (this.allSelected) {
      this.pagedData.forEach(r => this.selectedItems.delete(r));
    } else {
      this.pagedData.forEach(r => this.selectedItems.add(r));
    }
    this.onSelectionChange.emit(Array.from(this.selectedItems));
  }
  toggleRow(row) {
    if (this.selectedItems.has(row)) {
      this.selectedItems.delete(row);
    } else {
      this.selectedItems.add(row);
    }
    this.onSelectionChange.emit(Array.from(this.selectedItems));
  }
  onAction(action, row) {
    this.onActionClick.emit({
      action,
      row
    });
  }
  static {
    this.ɵfac = function DataTableComponent_Factory(t) {
      return new (t || DataTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DataTableComponent,
      selectors: [["app-data-table"]],
      inputs: {
        columns: "columns",
        data: "data",
        pageSize: "pageSize",
        selectable: "selectable",
        showHeader: "showHeader",
        emptyTitle: "emptyTitle",
        emptyMessage: "emptyMessage",
        emptyIcon: "emptyIcon",
        actions: "actions"
      },
      outputs: {
        onRowClick: "onRowClick",
        onActionClick: "onActionClick",
        onSelectionChange: "onSelectionChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 13,
      vars: 7,
      consts: [[1, "table-wrapper"], ["class", "table-header", 4, "ngIf"], [1, "table-container"], [1, "table"], ["class", "table__checkbox", 4, "ngIf"], [3, "width", "table__th--sortable", "table__th--right", "click", 4, "ngFor", "ngForOf"], ["style", "width: 120px", 4, "ngIf"], [3, "table__row--selected", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-footer", 4, "ngIf"], [1, "table-header"], [1, "table-search"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], [1, "table-filters"], [1, "table-actions"], [1, "table__checkbox"], ["type", "checkbox", 3, "checked", "change"], [3, "click"], [1, "th-content"], ["class", "sort-icon", 4, "ngIf"], [1, "sort-icon"], [1, "fas"], [2, "width", "120px"], [3, "table__td--right", 4, "ngFor", "ngForOf"], ["class", "table__actions-cell", 4, "ngIf"], [3, "ngSwitch"], [3, "status", 4, "ngSwitchCase"], ["class", "currency", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "table__avatar", "alt", "", 3, "src", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "status"], [1, "currency"], ["alt", "", 1, "table__avatar", 3, "src"], [1, "table__actions-cell"], ["class", "table__action-btn", 3, "title", "color", "click", 4, "ngFor", "ngForOf"], [1, "table__action-btn", 3, "title", "click"], [3, "title", "message", "icon"], [1, "table-footer"], [1, "table-info"], [1, "table-pagination"], [1, "pagination-btn", 3, "disabled", "click"], [1, "fas", "fa-chevron-left"], ["class", "pagination-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [1, "pagination-btn", 3, "click"]],
      template: function DataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DataTableComponent_div_1_Template, 8, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DataTableComponent_th_6_Template, 2, 1, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DataTableComponent_th_7_Template, 4, 8, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DataTableComponent_th_8_Template, 2, 0, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DataTableComponent_tr_10_Template, 4, 5, "tr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DataTableComponent_tr_11_Template, 3, 4, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DataTableComponent_div_12_Template, 9, 6, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectable);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.actions == null ? null : ctx.actions.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pagedData);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.pagedData == null ? null : ctx.pagedData.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalItems > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent, _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n  flex-wrap: wrap;\n}\n\n.table-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 240px;\n}\n\n.table-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.table-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 14px;\n  color: #1e293b;\n  width: 100%;\n}\n\n.table-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.table[_ngcontent-%COMP%]   th.table__th--sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.table[_ngcontent-%COMP%]   th.table__th--sortable[_ngcontent-%COMP%]:hover {\n  color: #6366f1;\n}\n\n.table[_ngcontent-%COMP%]   th.table__th--right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.th-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.th-content[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.table[_ngcontent-%COMP%]   td.table__td--right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.table__checkbox[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #6366f1;\n  cursor: pointer;\n}\n\n.table__row--selected[_ngcontent-%COMP%] {\n  background: #eef2ff !important;\n}\n\n.table__row--selected[_ngcontent-%COMP%]:hover {\n  background: #e0e7ff !important;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n\n.table__avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.table__actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.table__action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 6px 8px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n\n.table__action-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.table-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.pagination-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n\n.pagination-btn.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  border-color: #6366f1;\n}\n\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.currency[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #059669;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLHlDQUFBO0VBQXdDLHlCQUFBO0VBQTJCLGdCQUFBO0FBTTNIOztBQUxJO0VBQWdCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQVcsa0JBQUE7RUFBb0IsZ0NBQUE7RUFBa0MsZUFBQTtBQWN6SDs7QUFiSTtFQUFnQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLG1CQUFBO0VBQXFCLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLGdCQUFBO0FBd0J6Sjs7QUF2Qkk7RUFBa0IsY0FBQTtFQUFnQixlQUFBO0FBNEJ0Qzs7QUEzQkk7RUFBc0IsWUFBQTtFQUFjLGdCQUFBO0VBQWtCLGFBQUE7RUFBZSxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsV0FBQTtBQW9DMUc7O0FBbkNJO0VBQWlCLGFBQUE7RUFBZSxRQUFBO0FBd0NwQzs7QUF2Q0k7RUFBaUIsYUFBQTtFQUFlLFFBQUE7RUFBVSxpQkFBQTtBQTZDOUM7O0FBNUNJO0VBQW1CLGdCQUFBO0FBZ0R2Qjs7QUEvQ0k7RUFBUyxXQUFBO0VBQWEseUJBQUE7QUFvRDFCOztBQW5ESTtFQUFZLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUFnQix5QkFBQTtFQUEyQixzQkFBQTtFQUF3QixtQkFBQTtFQUFxQixnQ0FBQTtFQUFrQyxtQkFBQTtBQWdFbk47O0FBL0RJO0VBQWdDLGVBQUE7RUFBaUIseUJBQUE7VUFBQSxpQkFBQTtBQW9FckQ7O0FBbkVJO0VBQXNDLGNBQUE7QUF1RTFDOztBQXRFSTtFQUE2QixpQkFBQTtBQTBFakM7O0FBekVJO0VBQWMsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUErRXREOztBQTlFSTtFQUF5QixlQUFBO0FBa0Y3Qjs7QUFqRkk7RUFBWSxrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZ0NBQUE7QUF3RnJFOztBQXZGSTtFQUE2QixpQkFBQTtBQTJGakM7O0FBMUZJO0VBQW1CLFdBQUE7RUFBYSxrQkFBQTtBQStGcEM7O0FBOUZJO0VBQWdDLFdBQUE7RUFBYSxZQUFBO0VBQWMscUJBQUE7RUFBdUIsZUFBQTtBQXFHdEY7O0FBcEdJO0VBQXdCLDhCQUFBO0FBd0c1Qjs7QUF2R0k7RUFBOEIsOEJBQUE7QUEyR2xDOztBQTFHSTtFQUFxQixtQkFBQTtBQThHekI7O0FBN0dJO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsaUJBQUE7QUFvSHBFOztBQW5ISTtFQUF1QixtQkFBQTtBQXVIM0I7O0FBdEhJO0VBQXFCLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsb0JBQUE7QUFnSWpJOztBQS9ISTtFQUEyQixtQkFBQTtBQW1JL0I7O0FBbElJO0VBQWdCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxrQkFBQTtFQUFvQiw2QkFBQTtBQTBJNUc7O0FBeklJO0VBQWMsZUFBQTtFQUFpQixjQUFBO0FBOEluQzs7QUE3SUk7RUFBb0IsYUFBQTtFQUFlLFFBQUE7QUFrSnZDOztBQWpKSTtFQUFrQixXQUFBO0VBQWEsWUFBQTtFQUFjLHlCQUFBO0VBQTJCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixvQkFBQTtBQWlLblA7O0FBaEtJO0VBQW9ELG1CQUFBO0VBQXFCLHFCQUFBO0FBcUs3RTs7QUFwS0k7RUFBeUIsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLHFCQUFBO0FBMEsvRDs7QUF6S0k7RUFBMkIsWUFBQTtFQUFjLG1CQUFBO0FBOEs3Qzs7QUE3S0k7RUFBWSxnQkFBQTtFQUFrQixjQUFBO0FBa0xsQyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS13cmFwcGVyIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogMTJweDsgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7IGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC50YWJsZS1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IHBhZGRpbmc6IDE2cHggMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgLnRhYmxlLXNlYXJjaCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDhweCAxMnB4OyBtaW4td2lkdGg6IDI0MHB4OyB9XHJcbiAgICAudGFibGUtc2VhcmNoIGkgeyBjb2xvcjogIzk0YTNiODsgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgICAudGFibGUtc2VhcmNoIGlucHV0IHsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kOiBub25lOyBvdXRsaW5lOiBub25lOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMWUyOTNiOyB3aWR0aDogMTAwJTsgfVxyXG4gICAgLnRhYmxlLWZpbHRlcnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgfVxyXG4gICAgLnRhYmxlLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgbWFyZ2luLWxlZnQ6IGF1dG87IH1cclxuICAgIC50YWJsZS1jb250YWluZXIgeyBvdmVyZmxvdy14OiBhdXRvOyB9XHJcbiAgICAudGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxyXG4gICAgLnRhYmxlIHRoIHsgcGFkZGluZzogMTJweCAxNnB4OyB0ZXh0LWFsaWduOiBsZWZ0OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNWVtOyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4gICAgLnRhYmxlIHRoLnRhYmxlX190aC0tc29ydGFibGUgeyBjdXJzb3I6IHBvaW50ZXI7IHVzZXItc2VsZWN0OiBub25lOyB9XHJcbiAgICAudGFibGUgdGgudGFibGVfX3RoLS1zb3J0YWJsZTpob3ZlciB7IGNvbG9yOiAjNjM2NmYxOyB9XHJcbiAgICAudGFibGUgdGgudGFibGVfX3RoLS1yaWdodCB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcbiAgICAudGgtY29udGVudCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XHJcbiAgICAudGgtY29udGVudCAuc29ydC1pY29uIHsgZm9udC1zaXplOiAxMHB4OyB9XHJcbiAgICAudGFibGUgdGQgeyBwYWRkaW5nOiAxNHB4IDE2cHg7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMzMzQxNTU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyB9XHJcbiAgICAudGFibGUgdGQudGFibGVfX3RkLS1yaWdodCB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcbiAgICAudGFibGVfX2NoZWNrYm94IHsgd2lkdGg6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgLnRhYmxlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGFjY2VudC1jb2xvcjogIzYzNjZmMTsgY3Vyc29yOiBwb2ludGVyOyB9XHJcbiAgICAudGFibGVfX3Jvdy0tc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZWVmMmZmICFpbXBvcnRhbnQ7IH1cclxuICAgIC50YWJsZV9fcm93LS1zZWxlY3RlZDpob3ZlciB7IGJhY2tncm91bmQ6ICNlMGU3ZmYgIWltcG9ydGFudDsgfVxyXG4gICAgLnRhYmxlIHRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxyXG4gICAgLnRhYmxlX19hdmF0YXIgeyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG9iamVjdC1maXQ6IGNvdmVyOyB9XHJcbiAgICAudGFibGVfX2FjdGlvbnMtY2VsbCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuICAgIC50YWJsZV9fYWN0aW9uLWJ0biB7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogNnB4IDhweDsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXItcmFkaXVzOiA2cHg7IGZvbnQtc2l6ZTogMTRweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cclxuICAgIC50YWJsZV9fYWN0aW9uLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IH1cclxuICAgIC50YWJsZS1mb290ZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDEycHggMjBweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7IH1cclxuICAgIC50YWJsZS1pbmZvIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgLnRhYmxlLXBhZ2luYXRpb24geyBkaXNwbGF5OiBmbGV4OyBnYXA6IDRweDsgfVxyXG4gICAgLnBhZ2luYXRpb24tYnRuIHsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgY29sb3I6ICM2NDc0OGI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxyXG4gICAgLnBhZ2luYXRpb24tYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpOm5vdCguYWN0aXZlKSB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGJvcmRlci1jb2xvcjogI2NiZDVlMTsgfVxyXG4gICAgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSB7IGJhY2tncm91bmQ6ICM2MzY2ZjE7IGNvbG9yOiAjZmZmOyBib3JkZXItY29sb3I6ICM2MzY2ZjE7IH1cclxuICAgIC5wYWdpbmF0aW9uLWJ0bjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNDsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxyXG4gICAgLmN1cnJlbmN5IHsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMwNTk2Njk7IH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9848:
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableModule: () => (/* binding */ DataTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-table.component */ 4901);
/* harmony import */ var _status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status-badge/status-badge.module */ 8426);
/* harmony import */ var _empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty-state/empty-state.module */ 6828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class DataTableModule {
  static {
    this.ɵfac = function DataTableModule_Factory(t) {
      return new (t || DataTableModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DataTableModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_1__.StatusBadgeModule, _empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_2__.EmptyStateModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DataTableModule, {
    declarations: [_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_1__.StatusBadgeModule, _empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_2__.EmptyStateModule],
    exports: [_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableComponent]
  });
})();

/***/ }),

/***/ 6389:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/drawer/drawer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawerComponent: () => (/* binding */ DrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function DrawerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DrawerComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitle);
  }
}
function DrawerComponent_footer_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_footer_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_footer_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
const _c0 = ["*"];
class DrawerComponent {
  constructor() {
    this.isOpen = false;
    this.title = '';
    this.subtitle = '';
    this.width = 480;
    this.showFooter = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  close() {
    this.closed.emit();
  }
  save() {
    this.saved.emit();
  }
  static {
    this.ɵfac = function DrawerComponent_Factory(t) {
      return new (t || DrawerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DrawerComponent,
      selectors: [["app-drawer"]],
      inputs: {
        isOpen: "isOpen",
        title: "title",
        subtitle: "subtitle",
        width: "width",
        showFooter: "showFooter"
      },
      outputs: {
        closed: "closed",
        saved: "saved"
      },
      ngContentSelectors: _c0,
      decls: 12,
      vars: 8,
      consts: [["class", "drawer-overlay", 3, "click", 4, "ngIf"], [1, "drawer"], [1, "drawer-header"], [4, "ngIf"], [1, "drawer-close", 3, "click"], [1, "fas", "fa-times"], [1, "drawer-body"], ["class", "drawer-footer", 4, "ngIf"], [1, "drawer-overlay", 3, "click"], [1, "drawer-footer"], [1, "btn", "btn--outline", 3, "click"], [1, "btn", "btn--primary", 3, "click"], [1, "fas", "fa-check"]],
      template: function DrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DrawerComponent_div_0_Template, 1, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1)(2, "header", 2)(3, "div")(4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DrawerComponent_p_6_Template, 2, 1, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_button_click_7_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DrawerComponent_footer_11_Template, 6, 0, "footer", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  z-index: 1200;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease;\n  backdrop-filter: blur(2px);\n}\n\n.drawer-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 1201;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);\n}\n\n.drawer.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n.drawer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 4px 0 0;\n}\n\n.drawer-close[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.drawer-close[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #1e293b;\n}\n\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n\n.btn--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\n\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n\n.btn--primary[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFBaUIsUUFBQTtFQUFVLGlDQUFBO0VBQW1DLGFBQUE7RUFDOUQsVUFBQTtFQUFZLGtCQUFBO0VBQW9CLDZCQUFBO0VBQStCLDBCQUFBO0FBT2pFOztBQUxBO0VBQWtCLFVBQUE7QUFTbEI7O0FBUkE7RUFDRSxlQUFBO0VBQWlCLE1BQUE7RUFBUSxRQUFBO0VBQVUsU0FBQTtFQUFXLGdCQUFBO0VBQWtCLGFBQUE7RUFDaEUsMkJBQUE7RUFBNkIsdURBQUE7RUFDN0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLDRDQUFBO0FBbUJ6Qzs7QUFqQkE7RUFBZSx3QkFBQTtBQXFCZjs7QUFwQkE7RUFDRSxhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsdUJBQUE7RUFDL0Msa0JBQUE7RUFBb0IsZ0NBQUE7QUEwQnRCOztBQXhCQTtFQUFvQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsU0FBQTtBQStCdkU7O0FBOUJBO0VBQW1CLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixlQUFBO0FBb0NwRDs7QUFuQ0E7RUFDRSxtQkFBQTtFQUFxQixZQUFBO0VBQWMsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUM5RCxjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZUFBQTtFQUFpQixvQkFBQTtFQUNsRCxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUErQ3RDOztBQTdDQTtFQUFzQixtQkFBQTtFQUFxQixjQUFBO0FBa0QzQzs7QUFqREE7RUFBZSxPQUFBO0VBQVMsZ0JBQUE7RUFBa0IsYUFBQTtBQXVEMUM7O0FBdERBO0VBQ0Usa0JBQUE7RUFBb0IsNkJBQUE7RUFBK0IsYUFBQTtFQUFlLFNBQUE7RUFBVyx5QkFBQTtBQTZEL0U7O0FBM0RBO0VBQU8sa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixZQUFBO0VBQWMsZUFBQTtFQUFpQixvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0VBQVUsb0JBQUE7QUF3RXRLOztBQXZFQTtFQUFnQix1QkFBQTtFQUF5Qix5QkFBQTtFQUEyQixjQUFBO0FBNkVwRTs7QUE1RUE7RUFBc0IsbUJBQUE7RUFBcUIscUJBQUE7QUFpRjNDOztBQWhGQTtFQUFnQixtQkFBQTtFQUFxQixXQUFBO0FBcUZyQzs7QUFwRkE7RUFBc0IsbUJBQUE7QUF3RnRCIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwOyBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNSk7IHotaW5kZXg6IDEyMDA7XHJcbiAgb3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuLmRyYXdlci1vdmVybGF5IHsgb3BhY2l0eTogMDsgfVxyXG4uZHJhd2VyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgYmFja2dyb3VuZDogI2ZmZjsgei1pbmRleDogMTIwMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYm94LXNoYWRvdzogLTEwcHggMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuLmRyYXdlci5vcGVuIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XHJcbi5kcmF3ZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuLmRyYXdlci1oZWFkZXIgaDMgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWUyOTNiOyBtYXJnaW46IDA7IH1cclxuLmRyYXdlci1oZWFkZXIgcCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM5NGEzYjg7IG1hcmdpbjogNHB4IDAgMDsgfVxyXG4uZHJhd2VyLWNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBib3JkZXI6IG5vbmU7IHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogIzY0NzQ4YjsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDE0cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kcmF3ZXItY2xvc2U6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBjb2xvcjogIzFlMjkzYjsgfVxyXG4uZHJhd2VyLWJvZHkgeyBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvOyBwYWRkaW5nOiAyNHB4OyB9XHJcbi5kcmF3ZXItZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlOGYwOyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmJ0biB7IHBhZGRpbmc6IDEwcHggMjBweDsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XHJcbi5idG4tLW91dGxpbmUgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgY29sb3I6ICM2NDc0OGI7IH1cclxuLmJ0bi0tb3V0bGluZTpob3ZlciB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGJvcmRlci1jb2xvcjogI2NiZDVlMTsgfVxyXG4uYnRuLS1wcmltYXJ5IHsgYmFja2dyb3VuZDogIzYzNjZmMTsgY29sb3I6ICNmZmY7IH1cclxuLmJ0bi0tcHJpbWFyeTpob3ZlciB7IGJhY2tncm91bmQ6ICM0ZjQ2ZTU7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3208:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/drawer/drawer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawerModule: () => (/* binding */ DrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.component */ 6389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class DrawerModule {
  static {
    this.ɵfac = function DrawerModule_Factory(t) {
      return new (t || DrawerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DrawerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DrawerModule, {
    declarations: [_drawer_component__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_drawer_component__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent]
  });
})();

/***/ }),

/***/ 5577:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateComponent: () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function EmptyStateComponent_button_7_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.actionIcon);
  }
}
function EmptyStateComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmptyStateComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.actionClick.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmptyStateComponent_button_7_i_1_Template, 1, 2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actionIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.actionText, " ");
  }
}
class EmptyStateComponent {
  constructor() {
    this.icon = 'fas fa-inbox';
    this.title = 'No data found';
    this.message = 'There is nothing to display here yet.';
    this.actionText = '';
    this.actionIcon = '';
    this.actionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function EmptyStateComponent_Factory(t) {
      return new (t || EmptyStateComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmptyStateComponent,
      selectors: [["app-empty-state"]],
      inputs: {
        icon: "icon",
        title: "title",
        message: "message",
        actionText: "actionText",
        actionIcon: "actionIcon"
      },
      outputs: {
        actionClick: "actionClick"
      },
      decls: 8,
      vars: 5,
      consts: [[1, "empty-state"], [1, "empty-state__icon"], [1, "empty-state__title"], [1, "empty-state__message"], ["class", "empty-state__action btn btn--primary", 3, "click", 4, "ngIf"], [1, "empty-state__action", "btn", "btn--primary", 3, "click"], [3, "class", 4, "ngIf"]],
      template: function EmptyStateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmptyStateComponent_button_7_Template, 3, 2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionText);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n\n.empty-state__icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  font-size: 32px;\n  color: #94a3b8;\n}\n\n.empty-state__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n\n.empty-state__message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn--primary[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW1wdHktc3RhdGUvZW1wdHktc3RhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxrQkFBQTtFQUFvQixrQkFBQTtBQUduQzs7QUFGSTtFQUFxQixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixtQkFBQTtFQUFxQixlQUFBO0VBQWlCLGNBQUE7QUFlaE07O0FBZEk7RUFBc0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGVBQUE7QUFxQjdFOztBQXBCSTtFQUF3QixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZ0JBQUE7QUEwQjdEOztBQXpCSTtFQUFPLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsWUFBQTtFQUFjLGVBQUE7RUFBaUIsb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtBQXFDaEs7O0FBcENJO0VBQWdCLG1CQUFBO0VBQXFCLFdBQUE7QUF5Q3pDOztBQXhDSTtFQUFzQixtQkFBQTtBQTRDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktc3RhdGUgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDYwcHggMjBweDsgfVxyXG4gICAgLmVtcHR5LXN0YXRlX19pY29uIHsgd2lkdGg6IDgwcHg7IGhlaWdodDogODBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luOiAwIGF1dG8gMjBweDsgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogIzk0YTNiODsgfVxyXG4gICAgLmVtcHR5LXN0YXRlX190aXRsZSB7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMCAwIDhweDsgfVxyXG4gICAgLmVtcHR5LXN0YXRlX19tZXNzYWdlIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAwIDAgMjBweDsgfVxyXG4gICAgLmJ0biB7IHBhZGRpbmc6IDEwcHggMjRweDsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cclxuICAgIC5idG4tLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyBjb2xvcjogI2ZmZjsgfVxyXG4gICAgLmJ0bi0tcHJpbWFyeTpob3ZlciB7IGJhY2tncm91bmQ6ICM0ZjQ2ZTU7IH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6828:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateModule: () => (/* binding */ EmptyStateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _empty_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-state.component */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class EmptyStateModule {
  static {
    this.ɵfac = function EmptyStateModule_Factory(t) {
      return new (t || EmptyStateModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmptyStateModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmptyStateModule, {
    declarations: [_empty_state_component__WEBPACK_IMPORTED_MODULE_0__.EmptyStateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_empty_state_component__WEBPACK_IMPORTED_MODULE_0__.EmptyStateComponent]
  });
})();

/***/ }),

/***/ 4333:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_interceptors_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/interceptors/loading.service */ 1912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function LoadingSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoadingSpinnerComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_interceptors_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      decls: 2,
      vars: 3,
      consts: [["class", "loading-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "spinner-ring"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingSpinnerComponent_div_0_Template, 5, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loadingService.loading$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: [".loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(2px);\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.loading-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  font-weight: 500;\n}\n\n.spinner-ring[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixlQUFBO0VBQWlCLFFBQUE7RUFBVSxvQ0FBQTtFQUFtQyxhQUFBO0VBQWUsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLDBCQUFBO0FBUzdKOztBQVJJO0VBQW1CLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUFxQixTQUFBO0FBZW5GOztBQWRJO0VBQXdCLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixnQkFBQTtBQW9CN0Q7O0FBbkJJO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0VBQWMseUJBQUE7RUFBMkIseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0Isb0NBQUE7QUE0QnpIOztBQTNCSTtFQUFrQjtJQUFLLHlCQUFBO0VBZ0N6QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctb3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgei1pbmRleDogOTk5OTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpOyB9XHJcbiAgICAubG9hZGluZy1zcGlubmVyIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNnB4OyB9XHJcbiAgICAubG9hZGluZy1zcGlubmVyIHNwYW4geyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXdlaWdodDogNTAwOyB9XHJcbiAgICAuc3Bpbm5lci1yaW5nIHsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgYm9yZGVyOiAzcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXRvcC1jb2xvcjogIzYzNjZmMTsgYm9yZGVyLXJhZGl1czogNTAlOyBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7IH1cclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1680:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerModule: () => (/* binding */ LoadingSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-spinner.component */ 4333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class LoadingSpinnerModule {
  static {
    this.ɵfac = function LoadingSpinnerModule_Factory(t) {
      return new (t || LoadingSpinnerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoadingSpinnerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoadingSpinnerModule, {
    declarations: [_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinnerComponent]
  });
})();

/***/ }),

/***/ 3301:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageHeaderComponent: () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



function PageHeaderComponent_nav_3_a_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const bc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](bc_r3.icon);
  }
}
function PageHeaderComponent_nav_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageHeaderComponent_nav_3_a_1_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", bc_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bc_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bc_r3.label, " ");
  }
}
function PageHeaderComponent_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageHeaderComponent_nav_3_a_1_Template, 3, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
  }
}
function PageHeaderComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitle);
  }
}
const _c0 = ["*"];
class PageHeaderComponent {
  constructor() {
    this.title = '';
    this.subtitle = '';
    this.breadcrumbs = [];
  }
  static {
    this.ɵfac = function PageHeaderComponent_Factory(t) {
      return new (t || PageHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageHeaderComponent,
      selectors: [["app-page-header"]],
      inputs: {
        title: "title",
        subtitle: "subtitle",
        breadcrumbs: "breadcrumbs"
      },
      ngContentSelectors: _c0,
      decls: 9,
      vars: 3,
      consts: [[1, "page-header"], [1, "page-header__left"], ["class", "page-header__breadcrumb", 4, "ngIf"], [1, "page-header__title"], ["class", "page-header__subtitle", 4, "ngIf"], [1, "page-header__right"], [1, "page-header__breadcrumb"], ["class", "page-header__breadcrumb-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "page-header__breadcrumb-item", 3, "routerLink"], [3, "class", 4, "ngIf"], [1, "page-header__subtitle"]],
      template: function PageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageHeaderComponent_nav_3_Template, 2, 1, "nav", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageHeaderComponent_p_6_Template, 2, 1, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n\n.page-header__breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.page-header__breadcrumb-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.page-header__breadcrumb-item[_ngcontent-%COMP%]:hover {\n  color: #6366f1;\n}\n\n.page-header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n\n.page-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 4px 0 0 0;\n}\n\n.page-header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNOOztBQUNJO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxrQkFBQTtBQUtwRDs7QUFISTtFQUNFLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixxQkFBQTtFQUF1QixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtBQVdsRzs7QUFUSTtFQUFzQyxjQUFBO0FBYTFDOztBQVpJO0VBQXNCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUFnQixTQUFBO0FBbUI3RTs7QUFsQkk7RUFBeUIsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGlCQUFBO0FBd0I5RDs7QUF2Qkk7RUFBc0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxjQUFBO0FBOEJ4RSIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgIGdhcDogMTZweDtcclxuICAgIH1cclxuICAgIC5wYWdlLWhlYWRlcl9fYnJlYWRjcnVtYiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICAucGFnZS1oZWFkZXJfX2JyZWFkY3J1bWItaXRlbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7XHJcbiAgICB9XHJcbiAgICAucGFnZS1oZWFkZXJfX2JyZWFkY3J1bWItaXRlbTpob3ZlciB7IGNvbG9yOiAjNjM2NmYxOyB9XHJcbiAgICAucGFnZS1oZWFkZXJfX3RpdGxlIHsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFlMjkzYjsgbWFyZ2luOiAwOyB9XHJcbiAgICAucGFnZS1oZWFkZXJfX3N1YnRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiA0cHggMCAwIDA7IH1cclxuICAgIC5wYWdlLWhlYWRlcl9fcmlnaHQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgZmxleC1zaHJpbms6IDA7IH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5496:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageHeaderModule: () => (/* binding */ PageHeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component */ 3301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class PageHeaderModule {
  static {
    this.ɵfac = function PageHeaderModule_Factory(t) {
      return new (t || PageHeaderModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PageHeaderModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageHeaderModule, {
    declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent]
  });
})();

/***/ }),

/***/ 577:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInputComponent: () => (/* binding */ SearchInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);




function SearchInputComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r1.value = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onChange.emit(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SearchInputComponent {
  constructor() {
    this.placeholder = 'Search...';
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.value = '';
    this.focused = false;
  }
  static {
    this.ɵfac = function SearchInputComponent_Factory(t) {
      return new (t || SearchInputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchInputComponent,
      selectors: [["app-search-input"]],
      inputs: {
        placeholder: "placeholder"
      },
      outputs: {
        onChange: "onChange"
      },
      decls: 4,
      vars: 5,
      consts: [[1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 3, "placeholder", "ngModel", "ngModelChange", "focus", "blur"], ["class", "search-input__clear", 3, "click", 4, "ngIf"], [1, "search-input__clear", 3, "click"], [1, "fas", "fa-times"]],
      template: function SearchInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.value = $event;
          })("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.onChange.emit($event);
          })("focus", function SearchInputComponent_Template_input_focus_2_listener() {
            return ctx.focused = true;
          })("blur", function SearchInputComponent_Template_input_blur_2_listener() {
            return ctx.focused = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchInputComponent_button_3_Template, 2, 0, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("search-input--focused", ctx.focused);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("ngModel", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".search-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  transition: all 0.2s;\n}\n\n.search-input--focused[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 14px;\n  color: #1e293b;\n  width: 100%;\n}\n\n.search-input__clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 2px;\n}\n\n.search-input__clear[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFnQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLG9CQUFBO0FBU2xKOztBQVJJO0VBQXlCLHFCQUFBO0VBQXVCLDZDQUFBO0FBYXBEOztBQVpJO0VBQWtCLGNBQUE7RUFBZ0IsZUFBQTtBQWlCdEM7O0FBaEJJO0VBQXNCLFlBQUE7RUFBYyxnQkFBQTtFQUFrQixhQUFBO0VBQWUsZUFBQTtFQUFpQixjQUFBO0VBQWdCLFdBQUE7QUF5QjFHOztBQXhCSTtFQUF1QixnQkFBQTtFQUFrQixZQUFBO0VBQWMsY0FBQTtFQUFnQixlQUFBO0VBQWlCLFlBQUE7QUFnQzVGOztBQS9CSTtFQUE2QixjQUFBO0FBbUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaW5wdXQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiA4cHggMTJweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cclxuICAgIC5zZWFyY2gtaW5wdXQtLWZvY3VzZWQgeyBib3JkZXItY29sb3I6ICM2MzY2ZjE7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LDEwMiwyNDEsMC4xKTsgfVxyXG4gICAgLnNlYXJjaC1pbnB1dCBpIHsgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTRweDsgfVxyXG4gICAgLnNlYXJjaC1pbnB1dCBpbnB1dCB7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogbm9uZTsgb3V0bGluZTogbm9uZTsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzFlMjkzYjsgd2lkdGg6IDEwMCU7IH1cclxuICAgIC5zZWFyY2gtaW5wdXRfX2NsZWFyIHsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjb2xvcjogIzk0YTNiODsgY3Vyc29yOiBwb2ludGVyOyBwYWRkaW5nOiAycHg7IH1cclxuICAgIC5zZWFyY2gtaW5wdXRfX2NsZWFyOmhvdmVyIHsgY29sb3I6ICM2NDc0OGI7IH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 132:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/search-input/search-input.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInputModule: () => (/* binding */ SearchInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _search_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-input.component */ 577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class SearchInputModule {
  static {
    this.ɵfac = function SearchInputModule_Factory(t) {
      return new (t || SearchInputModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SearchInputModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchInputModule, {
    declarations: [_search_input_component__WEBPACK_IMPORTED_MODULE_0__.SearchInputComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    exports: [_search_input_component__WEBPACK_IMPORTED_MODULE_0__.SearchInputComponent]
  });
})();

/***/ }),

/***/ 8933:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/stat-card/stat-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatCardComponent: () => (/* binding */ StatCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function StatCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "vs last month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("positive", ctx_r0.change >= 0)("negative", ctx_r0.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.change >= 0 ? "fas fa-arrow-up" : "fas fa-arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.change >= 0 ? "+" : "", "", ctx_r0.change, "% ");
  }
}
class StatCardComponent {
  constructor() {
    this.label = '';
    this.value = 0;
    this.icon = 'fas fa-chart-line';
    this.color = 'primary';
    this.prefix = '';
    this.suffix = '';
  }
  static {
    this.ɵfac = function StatCardComponent_Factory(t) {
      return new (t || StatCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatCardComponent,
      selectors: [["app-stat-card"]],
      inputs: {
        label: "label",
        value: "value",
        icon: "icon",
        color: "color",
        change: "change",
        prefix: "prefix",
        suffix: "suffix"
      },
      decls: 10,
      vars: 11,
      consts: [[1, "stat-card"], [1, "stat-card__icon"], [1, "stat-card__content"], [1, "stat-card__value"], [1, "stat-card__label"], ["class", "stat-card__change", 3, "positive", "negative", 4, "ngIf"], [1, "stat-card__change"]],
      template: function StatCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StatCardComponent_div_9_Template, 5, 8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("stat-card--" + ctx.color);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.prefix, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.value), "", ctx.suffix, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.change !== undefined);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f0f0f0;\n  transition: all 0.2s ease;\n  min-width: 0;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);\n}\n\n.stat-card__icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n\n.stat-card--primary[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #6366f1;\n}\n\n.stat-card--success[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n\n.stat-card--warning[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n\n.stat-card--danger[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n\n.stat-card--info[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #22d3ee;\n}\n\n.stat-card--purple[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n\n.stat-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #1e293b;\n  line-height: 1.1;\n}\n\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.stat-card__change[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n}\n\n.stat-card__change[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.stat-card__change[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #94a3b8;\n  margin-left: 2px;\n}\n\n.stat-card__change.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n.stat-card__change.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdC1jYXJkL3N0YXQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQXVDLG1CQUFBO0FBRXZDOztBQURBO0VBQXVDLG1CQUFBO0FBS3ZDOztBQUpBO0VBQXVDLG1CQUFBO0FBUXZDOztBQVBBO0VBQXNDLG1CQUFBO0FBV3RDOztBQVZBO0VBQW9DLG1CQUFBO0FBY3BDOztBQWJBO0VBQXNDLG1CQUFBO0FBaUJ0Qzs7QUFmQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBa0JGOztBQWZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBa0JGOztBQWZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBa0JGOztBQWZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQWtCRjs7QUFoQkE7RUFBdUIsZUFBQTtBQW9CdkI7O0FBbkJBO0VBQTBCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsZ0JBQUE7QUF5QjVEOztBQXhCQTtFQUE4QixjQUFBO0FBNEI5Qjs7QUEzQkE7RUFBOEIsY0FBQTtBQStCOUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMThweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLnN0YXQtY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkX19pY29uIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkLS1wcmltYXJ5IC5zdGF0LWNhcmRfX2ljb24geyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyB9XHJcbi5zdGF0LWNhcmQtLXN1Y2Nlc3MgLnN0YXQtY2FyZF9faWNvbiB7IGJhY2tncm91bmQ6ICMxMGI5ODE7IH1cclxuLnN0YXQtY2FyZC0td2FybmluZyAuc3RhdC1jYXJkX19pY29uIHsgYmFja2dyb3VuZDogI2Y1OWUwYjsgfVxyXG4uc3RhdC1jYXJkLS1kYW5nZXIgLnN0YXQtY2FyZF9faWNvbiB7IGJhY2tncm91bmQ6ICNlZjQ0NDQ7IH1cclxuLnN0YXQtY2FyZC0taW5mbyAuc3RhdC1jYXJkX19pY29uIHsgYmFja2dyb3VuZDogIzIyZDNlZTsgfVxyXG4uc3RhdC1jYXJkLS1wdXJwbGUgLnN0YXQtY2FyZF9faWNvbiB7IGJhY2tncm91bmQ6ICM4YjVjZjY7IH1cclxuXHJcbi5zdGF0LWNhcmRfX2NvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkX192YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG5cclxuLnN0YXQtY2FyZF9fbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkX19jaGFuZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uc3RhdC1jYXJkX19jaGFuZ2UgaSB7IGZvbnQtc2l6ZTogMTBweDsgfVxyXG4uc3RhdC1jYXJkX19jaGFuZ2Ugc3BhbiB7IGZvbnQtd2VpZ2h0OiA0MDA7IGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tbGVmdDogMnB4OyB9XHJcbi5zdGF0LWNhcmRfX2NoYW5nZS5wb3NpdGl2ZSB7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbi5zdGF0LWNhcmRfX2NoYW5nZS5uZWdhdGl2ZSB7IGNvbG9yOiAjZWY0NDQ0OyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9784:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/stat-card/stat-card.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatCardModule: () => (/* binding */ StatCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _stat_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat-card.component */ 8933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class StatCardModule {
  static {
    this.ɵfac = function StatCardModule_Factory(t) {
      return new (t || StatCardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StatCardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StatCardModule, {
    declarations: [_stat_card_component__WEBPACK_IMPORTED_MODULE_0__.StatCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_stat_card_component__WEBPACK_IMPORTED_MODULE_0__.StatCardComponent]
  });
})();

/***/ }),

/***/ 3787:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/status-badge/status-badge.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadgeComponent: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/constants */ 5446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class StatusBadgeComponent {
  constructor() {
    this.status = '';
    this.label = '';
  }
  get bgColor() {
    const color = _core_constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_COLORS[this.status] || '#94a3b8';
    return color + '18';
  }
  get textColor() {
    return _core_constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_COLORS[this.status] || '#94a3b8';
  }
  static {
    this.ɵfac = function StatusBadgeComponent_Factory(t) {
      return new (t || StatusBadgeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StatusBadgeComponent,
      selectors: [["app-status-badge"]],
      inputs: {
        status: "status",
        label: "label"
      },
      decls: 3,
      vars: 7,
      consts: [[1, "badge"], [1, "badge__dot"]],
      template: function StatusBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.bgColor)("color", ctx.textColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.textColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.label || ctx.status, " ");
        }
      },
      styles: [".badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHVzLWJhZGdlL3N0YXR1cy1iYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxpQkFBQTtFQUNyRCxtQkFBQTtFQUFxQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLG1CQUFBO0FBTzlEOztBQUxJO0VBQWMsVUFBQTtFQUFZLFdBQUE7RUFBYSxrQkFBQTtBQVczQyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5iYWRnZV9fZG90IHsgd2lkdGg6IDZweDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8426:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/status-badge/status-badge.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadgeModule: () => (/* binding */ StatusBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status-badge.component */ 3787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class StatusBadgeModule {
  static {
    this.ɵfac = function StatusBadgeModule_Factory(t) {
      return new (t || StatusBadgeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StatusBadgeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StatusBadgeModule, {
    declarations: [_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent]
  });
})();

/***/ }),

/***/ 6029:
/*!************************************************************!*\
  !*** ./src/app/shared/components/toast/toast.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastComponent: () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const toast_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toastService.dismiss(toast_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("toast-item--" + toast_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getIcon(toast_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r1.message);
  }
}
class ToastComponent {
  constructor(toastService) {
    this.toastService = toastService;
  }
  getIcon(type) {
    const icons = {
      success: 'fas fa-check-circle',
      error: 'fas fa-exclamation-circle',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle'
    };
    return icons[type] || icons['info'];
  }
  static {
    this.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toast"]],
      decls: 3,
      vars: 3,
      consts: [[1, "toast-container"], ["class", "toast-item", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "toast-item", 3, "click"], [1, "toast-item__message"], [1, "fas", "fa-times", "toast-item__close"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastComponent_div_1_Template, 5, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.toastService.toasts$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: [".toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  right: 20px;\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 400px;\n}\n\n.toast-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 10px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.toast-item--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border-left: 4px solid #10b981;\n}\n\n.toast-item--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border-left: 4px solid #ef4444;\n}\n\n.toast-item--warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border-left: 4px solid #f59e0b;\n}\n\n.toast-item--info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n  border-left: 4px solid #3b82f6;\n}\n\n.toast-item__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  opacity: 0.5;\n  font-size: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsZUFBQTtFQUFpQixTQUFBO0VBQVcsV0FBQTtFQUFhLGFBQUE7RUFBZSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsUUFBQTtFQUFVLGdCQUFBO0FBUzVIOztBQVJJO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxrQkFBQTtFQUFvQixtQkFBQTtFQUNuRSwwQ0FBQTtFQUF5QyxlQUFBO0VBQWlCLDRCQUFBO0VBQzFELGVBQUE7RUFBaUIsZ0JBQUE7QUFrQnZCOztBQWhCSTtFQUF1QixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLDhCQUFBO0FBc0JoRTs7QUFyQkk7RUFBcUIsbUJBQUE7RUFBcUIsY0FBQTtFQUFnQiw4QkFBQTtBQTJCOUQ7O0FBMUJJO0VBQXVCLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IsOEJBQUE7QUFnQ2hFOztBQS9CSTtFQUFvQixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLDhCQUFBO0FBcUM3RDs7QUFwQ0k7RUFBcUIsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7QUEwQzFEOztBQXpDSTtFQUFxQjtJQUFPLDJCQUFBO0lBQTZCLFVBQUE7RUErQzNEO0VBL0N5RTtJQUFLLHdCQUFBO0lBQTBCLFVBQUE7RUFtRHhHO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3QtY29udGFpbmVyIHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDgwcHg7IHJpZ2h0OiAyMHB4OyB6LWluZGV4OiAyMDAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDhweDsgbWF4LXdpZHRoOiA0MDBweDsgfVxyXG4gICAgLnRvYXN0LWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IHBhZGRpbmc6IDE0cHggMTZweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsMCwwLDAuMTIpOyBjdXJzb3I6IHBvaW50ZXI7IGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC50b2FzdC1pdGVtLS1zdWNjZXNzIHsgYmFja2dyb3VuZDogI2VjZmRmNTsgY29sb3I6ICMwNjVmNDY7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEwYjk4MTsgfVxyXG4gICAgLnRvYXN0LWl0ZW0tLWVycm9yIHsgYmFja2dyb3VuZDogI2ZlZjJmMjsgY29sb3I6ICM5OTFiMWI7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2VmNDQ0NDsgfVxyXG4gICAgLnRvYXN0LWl0ZW0tLXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiAjZmZmYmViOyBjb2xvcjogIzkyNDAwZTsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZjU5ZTBiOyB9XHJcbiAgICAudG9hc3QtaXRlbS0taW5mbyB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGNvbG9yOiAjMWU0MGFmOyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzYjgyZjY7IH1cclxuICAgIC50b2FzdC1pdGVtX19jbG9zZSB7IG1hcmdpbi1sZWZ0OiBhdXRvOyBvcGFjaXR5OiAwLjU7IGZvbnQtc2l6ZTogMTJweDsgfVxyXG4gICAgQGtleWZyYW1lcyBzbGlkZUluIHsgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgb3BhY2l0eTogMDsgfSB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfSB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2368:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/toast/toast.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastModule: () => (/* binding */ ToastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.component */ 6029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ToastModule {
  static {
    this.ɵfac = function ToastModule_Factory(t) {
      return new (t || ToastModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ToastModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToastModule, {
    declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent]
  });
})();

/***/ }),

/***/ 3603:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/autofocus.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofocusDirective: () => (/* binding */ AutofocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AutofocusDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }
  static {
    this.ɵfac = function AutofocusDirective_Factory(t) {
      return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutofocusDirective,
      selectors: [["", "appAutofocus", ""]]
    });
  }
}

/***/ }),

/***/ 6240:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/click-outside.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickOutsideDirective: () => (/* binding */ ClickOutsideDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ClickOutsideDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.appClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(target) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.appClickOutside.emit();
    }
  }
  static {
    this.ɵfac = function ClickOutsideDirective_Factory(t) {
      return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "appClickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        appClickOutside: "appClickOutside"
      }
    });
  }
}

/***/ }),

/***/ 1445:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectivesModule: () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _has_permission_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-permission.directive */ 5046);
/* harmony import */ var _click_outside_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-outside.directive */ 6240);
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autofocus.directive */ 3603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class DirectivesModule {
  static {
    this.ɵfac = function DirectivesModule_Factory(t) {
      return new (t || DirectivesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DirectivesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_has_permission_directive__WEBPACK_IMPORTED_MODULE_0__.HasPermissionDirective, _click_outside_directive__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _autofocus_directive__WEBPACK_IMPORTED_MODULE_2__.AutofocusDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_has_permission_directive__WEBPACK_IMPORTED_MODULE_0__.HasPermissionDirective, _click_outside_directive__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _autofocus_directive__WEBPACK_IMPORTED_MODULE_2__.AutofocusDirective]
  });
})();

/***/ }),

/***/ 5046:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/has-permission.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasPermissionDirective: () => (/* binding */ HasPermissionDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_permission_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/permission.service */ 871);


class HasPermissionDirective {
  constructor(templateRef, viewContainer, permissionService) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.permissionService = permissionService;
    this.moduleName = '';
    this.actionName = '';
    this.isHidden = false;
  }
  set appHasPermission(permission) {
    const parts = permission.split(':');
    this.moduleName = parts[0] || '';
    this.actionName = parts[1] || 'VIEW';
  }
  ngOnInit() {
    this.updateView();
  }
  updateView() {
    const hasPermission = this.permissionService.can(this.moduleName, this.actionName);
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  static {
    this.ɵfac = function HasPermissionDirective_Factory(t) {
      return new (t || HasPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_permission_service__WEBPACK_IMPORTED_MODULE_0__.PermissionService));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: HasPermissionDirective,
      selectors: [["", "appHasPermission", ""]],
      inputs: {
        appHasPermission: "appHasPermission"
      }
    });
  }
}

/***/ }),

/***/ 2033:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/initials.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitialsPipe: () => (/* binding */ InitialsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class InitialsPipe {
  transform(value) {
    if (!value) return '?';
    const parts = value.trim().split(/\s+/);
    const first = parts[0]?.charAt(0) || '';
    const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
    return (first + last).toUpperCase();
  }
  static {
    this.ɵfac = function InitialsPipe_Factory(t) {
      return new (t || InitialsPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "initials",
      type: InitialsPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 3679:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipesModule: () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _initials_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initials.pipe */ 2033);
/* harmony import */ var _role_label_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-label.pipe */ 9407);
/* harmony import */ var _status_label_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-label.pipe */ 7569);
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./truncate.pipe */ 980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class PipesModule {
  static {
    this.ɵfac = function PipesModule_Factory(t) {
      return new (t || PipesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_initials_pipe__WEBPACK_IMPORTED_MODULE_0__.InitialsPipe, _role_label_pipe__WEBPACK_IMPORTED_MODULE_1__.RoleLabelPipe, _status_label_pipe__WEBPACK_IMPORTED_MODULE_2__.StatusLabelPipe, _truncate_pipe__WEBPACK_IMPORTED_MODULE_3__.TruncatePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
    exports: [_initials_pipe__WEBPACK_IMPORTED_MODULE_0__.InitialsPipe, _role_label_pipe__WEBPACK_IMPORTED_MODULE_1__.RoleLabelPipe, _status_label_pipe__WEBPACK_IMPORTED_MODULE_2__.StatusLabelPipe, _truncate_pipe__WEBPACK_IMPORTED_MODULE_3__.TruncatePipe]
  });
})();

/***/ }),

/***/ 9407:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/role-label.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleLabelPipe: () => (/* binding */ RoleLabelPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class RoleLabelPipe {
  constructor() {
    this.labels = {
      ADMIN: 'Administrator',
      HR: 'Human Resources',
      TL: 'Team Lead',
      EMPLOYEE: 'Employee'
    };
  }
  transform(value) {
    return this.labels[value] || value || 'Unknown';
  }
  static {
    this.ɵfac = function RoleLabelPipe_Factory(t) {
      return new (t || RoleLabelPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "roleLabel",
      type: RoleLabelPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 7569:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/status-label.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusLabelPipe: () => (/* binding */ StatusLabelPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class StatusLabelPipe {
  constructor() {
    this.labels = {
      ACTIVE: 'Active',
      INACTIVE: 'Inactive',
      PENDING: 'Pending',
      APPROVED: 'Approved',
      REJECTED: 'Rejected',
      PRESENT: 'Present',
      ABSENT: 'Absent',
      LATE: 'Late',
      HALF_DAY: 'Half Day',
      ON_LEAVE: 'On Leave',
      HOLIDAY: 'Holiday',
      WEEK_OFF: 'Week Off',
      PAID: 'Paid',
      DRAFT: 'Draft',
      PROCESSED: 'Processed',
      COMPLETED: 'Completed',
      IN_PROGRESS: 'In Progress',
      TODO: 'To Do',
      BLOCKED: 'Blocked',
      NYC: 'New',
      CANCELLED: 'Cancelled'
    };
  }
  transform(value) {
    return this.labels[value] || value || '';
  }
  static {
    this.ɵfac = function StatusLabelPipe_Factory(t) {
      return new (t || StatusLabelPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "statusLabel",
      type: StatusLabelPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 980:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncatePipe: () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TruncatePipe {
  transform(value, limit = 50, trail = '...') {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
  static {
    this.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncate",
      type: TruncatePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_stat_card_stat_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stat-card/stat-card.module */ 9784);
/* harmony import */ var _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-header/page-header.module */ 5496);
/* harmony import */ var _components_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/status-badge/status-badge.module */ 8426);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.module */ 8680);
/* harmony import */ var _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toast/toast.module */ 2368);
/* harmony import */ var _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.module */ 1680);
/* harmony import */ var _components_empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/empty-state/empty-state.module */ 6828);
/* harmony import */ var _components_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/data-table/data-table.module */ 9848);
/* harmony import */ var _components_search_input_search_input_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-input/search-input.module */ 132);
/* harmony import */ var _components_chart_bar_chart_bar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chart-bar/chart-bar.module */ 660);
/* harmony import */ var _components_chart_donut_chart_donut_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chart-donut/chart-donut.module */ 8136);
/* harmony import */ var _components_chart_line_chart_line_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chart-line/chart-line.module */ 1264);
/* harmony import */ var _components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/drawer/drawer.module */ 3208);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/directives.module */ 1445);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/pipes.module */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7580);



















const MODULES = [_components_stat_card_stat_card_module__WEBPACK_IMPORTED_MODULE_0__.StatCardModule, _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule, _components_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeModule, _components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogModule, _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_4__.ToastModule, _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerModule, _components_empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_6__.EmptyStateModule, _components_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__.DataTableModule, _components_search_input_search_input_module__WEBPACK_IMPORTED_MODULE_8__.SearchInputModule, _components_chart_bar_chart_bar_module__WEBPACK_IMPORTED_MODULE_9__.ChartBarModule, _components_chart_donut_chart_donut_module__WEBPACK_IMPORTED_MODULE_10__.ChartDonutModule, _components_chart_line_chart_line_module__WEBPACK_IMPORTED_MODULE_11__.ChartLineModule, _components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_12__.DrawerModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_13__.DirectivesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__.PipesModule];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, MODULES, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _components_stat_card_stat_card_module__WEBPACK_IMPORTED_MODULE_0__.StatCardModule, _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule, _components_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeModule, _components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogModule, _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_4__.ToastModule, _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerModule, _components_empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_6__.EmptyStateModule, _components_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__.DataTableModule, _components_search_input_search_input_module__WEBPACK_IMPORTED_MODULE_8__.SearchInputModule, _components_chart_bar_chart_bar_module__WEBPACK_IMPORTED_MODULE_9__.ChartBarModule, _components_chart_donut_chart_donut_module__WEBPACK_IMPORTED_MODULE_10__.ChartDonutModule, _components_chart_line_chart_line_module__WEBPACK_IMPORTED_MODULE_11__.ChartLineModule, _components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_12__.DrawerModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_13__.DirectivesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__.PipesModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _components_stat_card_stat_card_module__WEBPACK_IMPORTED_MODULE_0__.StatCardModule, _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule, _components_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeModule, _components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogModule, _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_4__.ToastModule, _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerModule, _components_empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_6__.EmptyStateModule, _components_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__.DataTableModule, _components_search_input_search_input_module__WEBPACK_IMPORTED_MODULE_8__.SearchInputModule, _components_chart_bar_chart_bar_module__WEBPACK_IMPORTED_MODULE_9__.ChartBarModule, _components_chart_donut_chart_donut_module__WEBPACK_IMPORTED_MODULE_10__.ChartDonutModule, _components_chart_line_chart_line_module__WEBPACK_IMPORTED_MODULE_11__.ChartLineModule, _components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_12__.DrawerModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_13__.DirectivesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__.PipesModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _components_stat_card_stat_card_module__WEBPACK_IMPORTED_MODULE_0__.StatCardModule, _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule, _components_status_badge_status_badge_module__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeModule, _components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogModule, _components_toast_toast_module__WEBPACK_IMPORTED_MODULE_4__.ToastModule, _components_loading_spinner_loading_spinner_module__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerModule, _components_empty_state_empty_state_module__WEBPACK_IMPORTED_MODULE_6__.EmptyStateModule, _components_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__.DataTableModule, _components_search_input_search_input_module__WEBPACK_IMPORTED_MODULE_8__.SearchInputModule, _components_chart_bar_chart_bar_module__WEBPACK_IMPORTED_MODULE_9__.ChartBarModule, _components_chart_donut_chart_donut_module__WEBPACK_IMPORTED_MODULE_10__.ChartDonutModule, _components_chart_line_chart_line_module__WEBPACK_IMPORTED_MODULE_11__.ChartLineModule, _components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_12__.DrawerModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_13__.DirectivesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__.PipesModule]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map