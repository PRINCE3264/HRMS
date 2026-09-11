"use strict";
(self["webpackChunkhrm_app"] = self["webpackChunkhrm_app"] || []).push([["default-src_app_core_services_index_ts"],{

/***/ 7543:
/*!*******************************************************!*\
  !*** ./src/app/core/services/announcement.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnouncementService: () => (/* binding */ AnnouncementService),
/* harmony export */   DocumentService: () => (/* binding */ DocumentService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class AnnouncementService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getAnnouncements(role) {
    return this.http.get(`${this.apiBase}/announcements`, {
      params: this.buildParams({
        role
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getAnnouncement(id) {
    return this.http.get(`${this.apiBase}/announcements/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  create(data) {
    return this.http.post(`${this.apiBase}/announcements`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  update(id, data) {
    return this.http.put(`${this.apiBase}/announcements/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/announcements/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵAnnouncementService_BaseFactory;
      return function AnnouncementService_Factory(t) {
        return (ɵAnnouncementService_BaseFactory || (ɵAnnouncementService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](AnnouncementService)))(t || AnnouncementService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AnnouncementService,
      factory: AnnouncementService.ɵfac,
      providedIn: 'root'
    });
  }
}
class DocumentService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getDocuments(employeeId, category) {
    return this.http.get(`${this.apiBase}/documents`, {
      params: this.buildParams({
        employeeId,
        category
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMyDocuments() {
    return this.http.get(`${this.apiBase}/documents/mine`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  uploadDocument(file, employeeId, category) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    if (employeeId) formData.append('employeeId', employeeId);
    if (category) formData.append('category', category);
    return this.http.post(`${this.apiBase}/documents/upload`, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  downloadDocument(id) {
    return this.http.get(`${this.apiBase}/documents/download/${id}`, {
      responseType: 'blob'
    });
  }
  deleteDocument(id) {
    return this.http.delete(`${this.apiBase}/documents/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵDocumentService_BaseFactory;
      return function DocumentService_Factory(t) {
        return (ɵDocumentService_BaseFactory || (ɵDocumentService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DocumentService)))(t || DocumentService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DocumentService,
      factory: DocumentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1963:
/*!*****************************************************!*\
  !*** ./src/app/core/services/attendance.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceService: () => (/* binding */ AttendanceService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class AttendanceService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getRecords(query = {}) {
    return this.http.get(`${this.apiBase}/attendance`, {
      params: this.buildParams(query)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrapPaginated(res)));
  }
  getByDate(date) {
    return this.http.get(`${this.apiBase}/attendance/date/${date}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getByEmployee(employeeId, startDate, endDate) {
    return this.http.get(`${this.apiBase}/attendance/employee/${employeeId}`, {
      params: this.buildParams({
        startDate,
        endDate
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getToday() {
    return this.http.get(`${this.apiBase}/attendance/today`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  checkIn(data) {
    return this.http.post(`${this.apiBase}/attendance/check-in`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  checkOut(data) {
    return this.http.post(`${this.apiBase}/attendance/check-out`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  startBreak(data) {
    return this.http.post(`${this.apiBase}/attendance/break/start`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  endBreak() {
    return this.http.post(`${this.apiBase}/attendance/break/end`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getShifts() {
    return this.http.get(`${this.apiBase}/shifts`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createShift(data) {
    return this.http.post(`${this.apiBase}/shifts`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateShift(id, data) {
    return this.http.put(`${this.apiBase}/shifts/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteShift(id) {
    return this.http.delete(`${this.apiBase}/shifts/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getAssignments() {
    return this.http.get(`${this.apiBase}/shifts/assignments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createAssignment(data) {
    return this.http.post(`${this.apiBase}/shifts/assignments`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵAttendanceService_BaseFactory;
      return function AttendanceService_Factory(t) {
        return (ɵAttendanceService_BaseFactory || (ɵAttendanceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](AttendanceService)))(t || AttendanceService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AttendanceService,
      factory: AttendanceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7856:
/*!***************************************************!*\
  !*** ./src/app/core/services/base-api.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseApiService: () => (/* binding */ BaseApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class BaseApiService {
  constructor(http) {
    this.http = http;
  }
  get apiBase() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  buildParams(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key];
        if (value !== null && value !== undefined && value !== '') {
          httpParams = httpParams.set(key, String(value));
        }
      });
    }
    return httpParams;
  }
  unwrap(response) {
    return response.data;
  }
  unwrapPaginated(response) {
    return response.data;
  }
  static {
    this.ɵfac = function BaseApiService_Factory(t) {
      return new (t || BaseApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BaseApiService,
      factory: BaseApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1154:
/*!*****************************************************!*\
  !*** ./src/app/core/services/department.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentService: () => (/* binding */ DepartmentService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class DepartmentService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getDepartments() {
    return this.http.get(`${this.apiBase}/departments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getDepartment(id) {
    return this.http.get(`${this.apiBase}/departments/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createDepartment(data) {
    return this.http.post(`${this.apiBase}/departments`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateDepartment(id, data) {
    return this.http.put(`${this.apiBase}/departments/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteDepartment(id) {
    return this.http.delete(`${this.apiBase}/departments/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getDesignations() {
    return this.http.get(`${this.apiBase}/designations`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createDesignation(data) {
    return this.http.post(`${this.apiBase}/designations`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateDesignation(id, data) {
    return this.http.put(`${this.apiBase}/designations/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteDesignation(id) {
    return this.http.delete(`${this.apiBase}/designations/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getBranches() {
    return this.http.get(`${this.apiBase}/branches`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createBranch(data) {
    return this.http.post(`${this.apiBase}/branches`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateBranch(id, data) {
    return this.http.put(`${this.apiBase}/branches/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteBranch(id) {
    return this.http.delete(`${this.apiBase}/branches/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getTeams() {
    return this.http.get(`${this.apiBase}/teams`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createTeam(data) {
    return this.http.post(`${this.apiBase}/teams`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteTeam(id) {
    return this.http.delete(`${this.apiBase}/teams/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵDepartmentService_BaseFactory;
      return function DepartmentService_Factory(t) {
        return (ɵDepartmentService_BaseFactory || (ɵDepartmentService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DepartmentService)))(t || DepartmentService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DepartmentService,
      factory: DepartmentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6856:
/*!***************************************************!*\
  !*** ./src/app/core/services/employee.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeService: () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class EmployeeService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getEmployees(query = {}) {
    return this.http.get(`${this.apiBase}/employees`, {
      params: this.buildParams(query)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrapPaginated(res)));
  }
  getAllEmployees() {
    return this.http.get(`${this.apiBase}/employees/all`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getEmployee(id) {
    return this.http.get(`${this.apiBase}/employees/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getByDepartment(departmentId) {
    return this.http.get(`${this.apiBase}/employees/department/${departmentId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getByTeam(teamId) {
    return this.http.get(`${this.apiBase}/employees/team/${teamId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createEmployee(data) {
    return this.http.post(`${this.apiBase}/employees`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateEmployee(id, data) {
    return this.http.put(`${this.apiBase}/employees/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteEmployee(id) {
    return this.http.delete(`${this.apiBase}/employees/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵEmployeeService_BaseFactory;
      return function EmployeeService_Factory(t) {
        return (ɵEmployeeService_BaseFactory || (ɵEmployeeService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EmployeeService)))(t || EmployeeService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2589:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnouncementService: () => (/* reexport safe */ _announcement_service__WEBPACK_IMPORTED_MODULE_15__.AnnouncementService),
/* harmony export */   AttendanceService: () => (/* reexport safe */ _attendance_service__WEBPACK_IMPORTED_MODULE_9__.AttendanceService),
/* harmony export */   AuthService: () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService),
/* harmony export */   BaseApiService: () => (/* reexport safe */ _base_api_service__WEBPACK_IMPORTED_MODULE_6__.BaseApiService),
/* harmony export */   DashboardService: () => (/* reexport safe */ _report_service__WEBPACK_IMPORTED_MODULE_17__.DashboardService),
/* harmony export */   DepartmentService: () => (/* reexport safe */ _department_service__WEBPACK_IMPORTED_MODULE_8__.DepartmentService),
/* harmony export */   DocumentService: () => (/* reexport safe */ _announcement_service__WEBPACK_IMPORTED_MODULE_15__.DocumentService),
/* harmony export */   EmployeeService: () => (/* reexport safe */ _employee_service__WEBPACK_IMPORTED_MODULE_7__.EmployeeService),
/* harmony export */   LeaveService: () => (/* reexport safe */ _leave_service__WEBPACK_IMPORTED_MODULE_10__.LeaveService),
/* harmony export */   NavigationService: () => (/* reexport safe */ _navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavigationService),
/* harmony export */   NotificationService: () => (/* reexport safe */ _notification_service__WEBPACK_IMPORTED_MODULE_16__.NotificationService),
/* harmony export */   PayrollService: () => (/* reexport safe */ _payroll_service__WEBPACK_IMPORTED_MODULE_11__.PayrollService),
/* harmony export */   PerformanceService: () => (/* reexport safe */ _performance_service__WEBPACK_IMPORTED_MODULE_12__.PerformanceService),
/* harmony export */   PermissionService: () => (/* reexport safe */ _permission_service__WEBPACK_IMPORTED_MODULE_2__.PermissionService),
/* harmony export */   RecruitmentService: () => (/* reexport safe */ _recruitment_service__WEBPACK_IMPORTED_MODULE_14__.RecruitmentService),
/* harmony export */   ReportService: () => (/* reexport safe */ _report_service__WEBPACK_IMPORTED_MODULE_17__.ReportService),
/* harmony export */   RoleService: () => (/* reexport safe */ _role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService),
/* harmony export */   RolesService: () => (/* reexport safe */ _roles_service__WEBPACK_IMPORTED_MODULE_19__.RolesService),
/* harmony export */   SettingsService: () => (/* reexport safe */ _report_service__WEBPACK_IMPORTED_MODULE_17__.SettingsService),
/* harmony export */   SidebarService: () => (/* reexport safe */ _sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService),
/* harmony export */   ToastService: () => (/* reexport safe */ _toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService),
/* harmony export */   TrainingService: () => (/* reexport safe */ _training_service__WEBPACK_IMPORTED_MODULE_13__.TrainingService),
/* harmony export */   UserManagementService: () => (/* reexport safe */ _report_service__WEBPACK_IMPORTED_MODULE_17__.UserManagementService),
/* harmony export */   WorkUpdateService: () => (/* reexport safe */ _work_update_service__WEBPACK_IMPORTED_MODULE_18__.WorkUpdateService)
/* harmony export */ });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8010);
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.service */ 2872);
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.service */ 871);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ 5423);
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ 9964);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.service */ 1518);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee.service */ 6856);
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./department.service */ 1154);
/* harmony import */ var _attendance_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attendance.service */ 1963);
/* harmony import */ var _leave_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leave.service */ 7599);
/* harmony import */ var _payroll_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payroll.service */ 2061);
/* harmony import */ var _performance_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./performance.service */ 738);
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./training.service */ 8202);
/* harmony import */ var _recruitment_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recruitment.service */ 4970);
/* harmony import */ var _announcement_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./announcement.service */ 7543);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notification.service */ 5567);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./report.service */ 6134);
/* harmony import */ var _work_update_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./work-update.service */ 4125);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./roles.service */ 4821);





















/***/ }),

/***/ 7599:
/*!************************************************!*\
  !*** ./src/app/core/services/leave.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveService: () => (/* binding */ LeaveService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class LeaveService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getRequests(query = {}) {
    return this.http.get(`${this.apiBase}/leave`, {
      params: this.buildParams(query)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrapPaginated(res)));
  }
  getPending() {
    return this.http.get(`${this.apiBase}/leave/pending`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMyLeave() {
    return this.http.get(`${this.apiBase}/leave/my`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/leave/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  apply(data) {
    return this.http.post(`${this.apiBase}/leave/apply`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  approveOrReject(id, status, comments) {
    return this.http.post(`${this.apiBase}/leave/${id}/approve-or-reject`, {
      status,
      comments
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  cancel(id) {
    return this.http.post(`${this.apiBase}/leave/${id}/cancel`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getBalances() {
    return this.http.get(`${this.apiBase}/leave/balances`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getBalancesByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/leave/balances/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵLeaveService_BaseFactory;
      return function LeaveService_Factory(t) {
        return (ɵLeaveService_BaseFactory || (ɵLeaveService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LeaveService)))(t || LeaveService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LeaveService,
      factory: LeaveService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5567:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class NotificationService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getNotifications(isRead) {
    return this.http.get(`${this.apiBase}/notifications`, {
      params: this.buildParams({
        isRead
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getUnreadCount() {
    return this.http.get(`${this.apiBase}/notifications/unread-count`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  markRead(id) {
    return this.http.put(`${this.apiBase}/notifications/${id}/read`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  markAllRead() {
    return this.http.put(`${this.apiBase}/notifications/read-all`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/notifications/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵNotificationService_BaseFactory;
      return function NotificationService_Factory(t) {
        return (ɵNotificationService_BaseFactory || (ɵNotificationService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NotificationService)))(t || NotificationService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2061:
/*!**************************************************!*\
  !*** ./src/app/core/services/payroll.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayrollService: () => (/* binding */ PayrollService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PayrollService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getPayroll(query = {}) {
    return this.http.get(`${this.apiBase}/payroll`, {
      params: this.buildParams(query)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrapPaginated(res)));
  }
  getByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/payroll/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMyPayroll() {
    return this.http.get(`${this.apiBase}/payroll/my`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  create(data) {
    return this.http.post(`${this.apiBase}/payroll`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateStatus(id, status) {
    return this.http.put(`${this.apiBase}/payroll/${id}/status`, JSON.stringify(status), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMyPayslip(month, year) {
    return this.http.get(`${this.apiBase}/payroll/payslip/my`, {
      params: this.buildParams({
        month,
        year
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getPayslip(payrollId) {
    return this.http.get(`${this.apiBase}/payroll/payslip/${payrollId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/payroll/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵPayrollService_BaseFactory;
      return function PayrollService_Factory(t) {
        return (ɵPayrollService_BaseFactory || (ɵPayrollService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](PayrollService)))(t || PayrollService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PayrollService,
      factory: PayrollService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 738:
/*!******************************************************!*\
  !*** ./src/app/core/services/performance.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceService: () => (/* binding */ PerformanceService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PerformanceService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getReviews(employeeId) {
    return this.http.get(`${this.apiBase}/performance/reviews`, {
      params: this.buildParams({
        employeeId
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getReviewsByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/performance/reviews/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMyReviews() {
    return this.http.get(`${this.apiBase}/performance/reviews/my`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createReview(data) {
    return this.http.post(`${this.apiBase}/performance/reviews`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateReview(id, data) {
    return this.http.put(`${this.apiBase}/performance/reviews/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteReview(id) {
    return this.http.delete(`${this.apiBase}/performance/reviews/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getKpis(employeeId) {
    return this.http.get(`${this.apiBase}/performance/kpis`, {
      params: this.buildParams({
        employeeId
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getKpisByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/performance/kpis/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMyKpis() {
    return this.http.get(`${this.apiBase}/performance/kpis/my`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createKpi(data) {
    return this.http.post(`${this.apiBase}/performance/kpis`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateKpi(id, data) {
    return this.http.put(`${this.apiBase}/performance/kpis/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteKpi(id) {
    return this.http.delete(`${this.apiBase}/performance/kpis/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getMyTasks() {
    return this.http.get(`${this.apiBase}/tasks/my`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getTasksByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/tasks/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getAssignedByMe() {
    return this.http.get(`${this.apiBase}/tasks/assigned-by`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createTask(data) {
    return this.http.post(`${this.apiBase}/tasks`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateTaskStatus(id, status) {
    return this.http.put(`${this.apiBase}/tasks/${id}/status`, JSON.stringify(status), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  reviewTask(id, data) {
    return this.http.put(`${this.apiBase}/tasks/${id}/review`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteTask(id) {
    return this.http.delete(`${this.apiBase}/tasks/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getFeedbacks(employeeId) {
    return this.http.get(`${this.apiBase}/performance/feedback`, {
      params: this.buildParams({
        employeeId
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getFeedbacksAboutMe() {
    return this.http.get(`${this.apiBase}/performance/feedback/about-me`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getFeedbacksByMe() {
    return this.http.get(`${this.apiBase}/performance/feedback/by-me`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  submitFeedback(data) {
    return this.http.post(`${this.apiBase}/performance/feedback`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteFeedback(id) {
    return this.http.delete(`${this.apiBase}/performance/feedback/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵPerformanceService_BaseFactory;
      return function PerformanceService_Factory(t) {
        return (ɵPerformanceService_BaseFactory || (ɵPerformanceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](PerformanceService)))(t || PerformanceService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PerformanceService,
      factory: PerformanceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4970:
/*!******************************************************!*\
  !*** ./src/app/core/services/recruitment.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruitmentService: () => (/* binding */ RecruitmentService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class RecruitmentService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getJobs(status) {
    return this.http.get(`${this.apiBase}/recruitment/jobs`, {
      params: this.buildParams({
        status
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getJob(id) {
    return this.http.get(`${this.apiBase}/recruitment/jobs/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createJob(data) {
    return this.http.post(`${this.apiBase}/recruitment/jobs`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateJob(id, data) {
    return this.http.put(`${this.apiBase}/recruitment/jobs/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteJob(id) {
    return this.http.delete(`${this.apiBase}/recruitment/jobs/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getCandidates(jobId, status) {
    return this.http.get(`${this.apiBase}/recruitment/candidates`, {
      params: this.buildParams({
        jobId,
        status
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createCandidate(data) {
    return this.http.post(`${this.apiBase}/recruitment/candidates`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateCandidate(id, status, notes, rating) {
    return this.http.put(`${this.apiBase}/recruitment/candidates/${id}`, {
      status,
      notes,
      rating
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteCandidate(id) {
    return this.http.delete(`${this.apiBase}/recruitment/candidates/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  getInterviews(candidateId, jobId, interviewerId) {
    return this.http.get(`${this.apiBase}/recruitment/interviews`, {
      params: this.buildParams({
        candidateId,
        jobId,
        interviewerId
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getInterview(id) {
    return this.http.get(`${this.apiBase}/recruitment/interviews/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  scheduleInterview(data) {
    return this.http.post(`${this.apiBase}/recruitment/interviews`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateInterview(id, data) {
    return this.http.put(`${this.apiBase}/recruitment/interviews/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateInterviewStatus(id, data) {
    return this.http.put(`${this.apiBase}/recruitment/interviews/${id}/status`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteInterview(id) {
    return this.http.delete(`${this.apiBase}/recruitment/interviews/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵRecruitmentService_BaseFactory;
      return function RecruitmentService_Factory(t) {
        return (ɵRecruitmentService_BaseFactory || (ɵRecruitmentService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](RecruitmentService)))(t || RecruitmentService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RecruitmentService,
      factory: RecruitmentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6134:
/*!*************************************************!*\
  !*** ./src/app/core/services/report.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService),
/* harmony export */   ReportService: () => (/* binding */ ReportService),
/* harmony export */   SettingsService: () => (/* binding */ SettingsService),
/* harmony export */   UserManagementService: () => (/* binding */ UserManagementService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class ReportService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getDashboardStats() {
    return this.http.get(`${this.apiBase}/reports/dashboard-stats`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getAttendanceTrend(days = 7) {
    return this.http.get(`${this.apiBase}/reports/attendance-trend`, {
      params: this.buildParams({
        days
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getDepartmentDistribution() {
    return this.http.get(`${this.apiBase}/reports/department-distribution`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getPayrollTrend(months = 6) {
    return this.http.get(`${this.apiBase}/reports/payroll-trend`, {
      params: this.buildParams({
        months
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getAuditLogs(module) {
    return this.http.get(`${this.apiBase}/reports/audit-logs`, {
      params: this.buildParams({
        module
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getUpcomingBirthdays(days = 7) {
    return this.http.get(`${this.apiBase}/reports/upcoming-birthdays`, {
      params: this.buildParams({
        days
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵReportService_BaseFactory;
      return function ReportService_Factory(t) {
        return (ɵReportService_BaseFactory || (ɵReportService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ReportService)))(t || ReportService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ReportService,
      factory: ReportService.ɵfac,
      providedIn: 'root'
    });
  }
}
class DashboardService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getStats() {
    return this.http.get(`${this.apiBase}/dashboard/stats`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getAttendanceTrend(days = 7) {
    return this.http.get(`${this.apiBase}/dashboard/attendance-trend`, {
      params: this.buildParams({
        days
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getDepartmentDistribution() {
    return this.http.get(`${this.apiBase}/dashboard/department-distribution`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getUpcomingBirthdays(days = 7) {
    return this.http.get(`${this.apiBase}/dashboard/upcoming-birthdays`, {
      params: this.buildParams({
        days
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵDashboardService_BaseFactory;
      return function DashboardService_Factory(t) {
        return (ɵDashboardService_BaseFactory || (ɵDashboardService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DashboardService)))(t || DashboardService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
  }
}
class SettingsService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getSettings(category) {
    return this.http.get(`${this.apiBase}/settings`, {
      params: this.buildParams({
        category
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateSetting(id, value, description) {
    return this.http.put(`${this.apiBase}/settings/${id}`, {
      value,
      description
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵSettingsService_BaseFactory;
      return function SettingsService_Factory(t) {
        return (ɵSettingsService_BaseFactory || (ɵSettingsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SettingsService)))(t || SettingsService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SettingsService,
      factory: SettingsService.ɵfac,
      providedIn: 'root'
    });
  }
}
class UserManagementService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getUsers() {
    return this.http.get(`${this.apiBase}/users`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getUser(id) {
    return this.http.get(`${this.apiBase}/users/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMe() {
    return this.http.get(`${this.apiBase}/users/me`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateUser(id, data) {
    return this.http.put(`${this.apiBase}/users/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  toggleMfa(id, enabled) {
    return this.http.post(`${this.apiBase}/users/${id}/toggle-mfa`, enabled).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiBase}/users/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵUserManagementService_BaseFactory;
      return function UserManagementService_Factory(t) {
        return (ɵUserManagementService_BaseFactory || (ɵUserManagementService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](UserManagementService)))(t || UserManagementService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UserManagementService,
      factory: UserManagementService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2872:
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleService: () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 5446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 8010);



class RoleService {
  constructor(authService) {
    this.authService = authService;
  }
  get currentRole() {
    return this.authService.userRole;
  }
  get roleLabel() {
    const role = this.currentRole;
    return role ? _constants__WEBPACK_IMPORTED_MODULE_0__.ROLE_LABELS[role] : 'Unknown';
  }
  hasRole(role) {
    return this.currentRole === role;
  }
  hasAnyRole(roles) {
    const current = this.currentRole;
    return current ? roles.includes(current) : false;
  }
  hasPermission(module, action) {
    return this.authService.hasPermission(module, action);
  }
  hasModuleAccess(module) {
    return this.authService.hasModuleAccess(module);
  }
  getAccessibleModules() {
    const role = this.currentRole;
    if (!role) return [];
    const perms = _constants__WEBPACK_IMPORTED_MODULE_0__.ROLE_PERMISSIONS[role];
    return perms ? Object.keys(perms) : [];
  }
  static {
    this.ɵfac = function RoleService_Factory(t) {
      return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RoleService,
      factory: RoleService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4821:
/*!************************************************!*\
  !*** ./src/app/core/services/roles.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesService: () => (/* binding */ RolesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class RolesService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getRoles() {
    return this.http.get(`${this.apiBase}/roles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getRole(role) {
    return this.http.get(`${this.apiBase}/roles/${role}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getCatalog() {
    return this.http.get(`${this.apiBase}/roles/modules`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateRolePermissions(role, permissions) {
    return this.http.put(`${this.apiBase}/roles/${role}/permissions`, {
      permissions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  resetRolePermissions(role) {
    return this.http.delete(`${this.apiBase}/roles/${role}/permissions`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵRolesService_BaseFactory;
      return function RolesService_Factory(t) {
        return (ɵRolesService_BaseFactory || (ɵRolesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](RolesService)))(t || RolesService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RolesService,
      factory: RolesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8202:
/*!***************************************************!*\
  !*** ./src/app/core/services/training.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrainingService: () => (/* binding */ TrainingService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class TrainingService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getTrainings() {
    return this.http.get(`${this.apiBase}/trainings`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createTraining(data) {
    return this.http.post(`${this.apiBase}/trainings`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateTraining(id, data) {
    return this.http.put(`${this.apiBase}/trainings/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  deleteTraining(id) {
    return this.http.delete(`${this.apiBase}/trainings/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  enroll(trainingId) {
    return this.http.post(`${this.apiBase}/trainings/${trainingId}/enroll`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getOnboardings() {
    return this.http.get(`${this.apiBase}/onboarding`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getOnboarding(id) {
    return this.http.get(`${this.apiBase}/onboarding/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  createOnboarding(data) {
    return this.http.post(`${this.apiBase}/onboarding`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  updateTask(taskId, isCompleted) {
    return this.http.put(`${this.apiBase}/onboarding/tasks/${taskId}`, JSON.stringify(isCompleted), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵTrainingService_BaseFactory;
      return function TrainingService_Factory(t) {
        return (ɵTrainingService_BaseFactory || (ɵTrainingService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TrainingService)))(t || TrainingService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TrainingService,
      factory: TrainingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4125:
/*!******************************************************!*\
  !*** ./src/app/core/services/work-update.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkUpdateService: () => (/* binding */ WorkUpdateService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api.service */ 7856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class WorkUpdateService extends _base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseApiService {
  getByDate(date) {
    return this.http.get(`${this.apiBase}/work-updates`, {
      params: this.buildParams({
        date
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getMine() {
    return this.http.get(`${this.apiBase}/work-updates/my`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  getByEmployee(employeeId) {
    return this.http.get(`${this.apiBase}/work-updates/employee/${employeeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  submit(data) {
    return this.http.post(`${this.apiBase}/work-updates/submit`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  update(id, data) {
    return this.http.put(`${this.apiBase}/work-updates/${id}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => this.unwrap(res)));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/work-updates/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => true));
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵWorkUpdateService_BaseFactory;
      return function WorkUpdateService_Factory(t) {
        return (ɵWorkUpdateService_BaseFactory || (ɵWorkUpdateService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WorkUpdateService)))(t || WorkUpdateService);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: WorkUpdateService,
      factory: WorkUpdateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_index_ts.js.map