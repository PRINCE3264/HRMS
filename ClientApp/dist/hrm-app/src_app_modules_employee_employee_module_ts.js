"use strict";
(self["webpackChunkhrm_app"] = self["webpackChunkhrm_app"] || []).push([["src_app_modules_employee_employee_module_ts"],{

/***/ 3039:
/*!***************************************************************************!*\
  !*** ./src/app/modules/employee/announcements/announcements.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpAnnouncementsComponent: () => (/* binding */ EmpAnnouncementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);





function EmpAnnouncementsComponent_div_17_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmpAnnouncementsComponent_div_17_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r7);
  }
}
function EmpAnnouncementsComponent_div_17_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpAnnouncementsComponent_div_17_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const a_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](a_r2.read = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Mark as Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmpAnnouncementsComponent_div_17_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmpAnnouncementsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17)(5, "div", 18)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EmpAnnouncementsComponent_div_17_span_8_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20)(10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 24)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 25)(22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EmpAnnouncementsComponent_div_17_span_23_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EmpAnnouncementsComponent_div_17_button_24_Template, 3, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EmpAnnouncementsComponent_div_17_span_25_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("unread", !a_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", a_r2.iconBg)("color", a_r2.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](a_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !a_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", a_r2.iconBg)("color", a_r2.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r2.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r2.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", a_r2.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !a_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", a_r2.read);
  }
}
function EmpAnnouncementsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No announcements found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Announcements"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpAnnouncementsComponent {
  constructor(announcementService) {
    this.announcementService = announcementService;
    this.searchTerm = '';
    this.filterCategory = '';
    this.announcements = [];
    this.icons = ['fas fa-snowflake', 'fas fa-home', 'fas fa-server', 'fas fa-glass-cheers', 'fas fa-chart-line', 'fas fa-fire-extinguisher', 'fas fa-heart', 'fas fa-bullhorn'];
    this.iconBgs = ['#dbeafe', '#dcfce7', '#fee2e2', '#fef3c7', '#f3e8ff', '#cffafe', '#fce7f3', '#f1f5f9'];
    this.iconColors = ['#2563eb', '#16a34a', '#dc2626', '#d97706', '#7c3aed', '#0891b2', '#db2777', '#64748b'];
  }
  ngOnInit() {
    this.loadAnnouncements();
  }
  loadAnnouncements() {
    this.announcementService.getAnnouncements().subscribe({
      next: list => {
        this.announcements = (list || []).map((ann, i) => ({
          title: ann.title || '',
          content: ann.content || '',
          date: this.formatDate(ann.publishedDate),
          author: ann.authorName || ann.author || '',
          category: ann.category || ann.authorRole || 'Company',
          icon: this.icons[i % this.icons.length],
          iconBg: this.iconBgs[i % this.iconBgs.length],
          iconColor: this.iconColors[i % this.iconColors.length],
          read: !!ann.isPinned,
          tags: [ann.priority, ...(ann.targetAudience || [])].filter(Boolean).slice(0, 3)
        }));
      },
      error: () => {
        this.announcements = [];
      }
    });
  }
  formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  get filteredAnnouncements() {
    return this.announcements.filter(a => {
      const matchSearch = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.filterCategory || a.category === this.filterCategory;
      return matchSearch && matchCat;
    });
  }
  static {
    this.ɵfac = function EmpAnnouncementsComponent_Factory(t) {
      return new (t || EmpAnnouncementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AnnouncementService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpAnnouncementsComponent,
      selectors: [["app-emp-announcements"]],
      decls: 19,
      vars: 10,
      consts: [["title", "Announcements", "subtitle", "Stay updated with company news", 3, "breadcrumbs"], [1, "filter-bar"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search announcements...", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Company"], ["value", "HR"], ["value", "IT"], ["value", "Events"], [1, "announce-list"], ["class", "announce-card", 3, "unread", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "announce-card"], [1, "announce-top"], [1, "announce-icon"], [1, "announce-content"], [1, "announce-header"], ["class", "unread-badge", 4, "ngIf"], [1, "announce-meta"], [1, "cat-badge"], [1, "fas", "fa-clock"], [1, "fas", "fa-user"], [1, "announce-body"], [1, "announce-footer"], [1, "announce-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], ["class", "btn-text", 3, "click", 4, "ngIf"], ["class", "read-label", 4, "ngIf"], [1, "unread-badge"], [1, "tag"], [1, "btn-text", 3, "click"], [1, "fas", "fa-check"], [1, "read-label"], [1, "fas", "fa-check-circle"], [1, "empty-state"], [1, "fas", "fa-bullhorn"]],
      template: function EmpAnnouncementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpAnnouncementsComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.searchTerm = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpAnnouncementsComponent_Template_select_ngModelChange_5_listener($event) {
            return ctx.filterCategory = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "HR");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "IT");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Events");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EmpAnnouncementsComponent_div_17_Template, 26, 21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EmpAnnouncementsComponent_div_18_Template, 4, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filterCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredAnnouncements);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredAnnouncements.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n}\n\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.filter-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n}\n\n.announce-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.announce-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n\n.announce-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.announce-card.unread[_ngcontent-%COMP%] {\n  border-left: 3px solid #6366f1;\n}\n\n.announce-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 20px 20px 0;\n}\n\n.announce-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n\n.announce-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.announce-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n\n.announce-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n.unread-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #6366f1;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.announce-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.announce-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.cat-badge[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.announce-body[_ngcontent-%COMP%] {\n  padding: 12px 20px 16px;\n}\n\n.announce-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.announce-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.announce-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.tag[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  font-size: 11px;\n  color: #64748b;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.btn-text[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n\n.read-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBREk7RUFBYyxhQUFBO0VBQWUsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLGVBQUE7QUFRakU7O0FBUEk7RUFBYyxrQkFBQTtFQUFvQixPQUFBO0VBQVMsZ0JBQUE7QUFhL0M7O0FBWkk7RUFBZ0Isa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFFBQUE7RUFBVSwyQkFBQTtFQUE2QixjQUFBO0VBQWdCLGVBQUE7QUFxQjNHOztBQXBCSTtFQUFvQixXQUFBO0VBQWEsNEJBQUE7RUFBOEIseUJBQUE7RUFBMkIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixhQUFBO0VBQWUsZ0JBQUE7QUE4Qm5KOztBQTdCSTtFQUEwQixxQkFBQTtFQUF1Qiw2Q0FBQTtBQWtDckQ7O0FBakNJO0VBQXFCLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsYUFBQTtFQUFlLGdCQUFBO0FBMEM3SDs7QUF6Q0k7RUFBaUIsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFNBQUE7QUErQzVEOztBQTlDSTtFQUFpQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQix5Q0FBQTtFQUF3QyxnQkFBQTtFQUFrQiwyQkFBQTtBQXVEako7O0FBdERJO0VBQXVCLHlDQUFBO0FBMEQzQjs7QUF6REk7RUFBd0IsOEJBQUE7QUE2RDVCOztBQTVESTtFQUFnQixhQUFBO0VBQWUsU0FBQTtFQUFXLG9CQUFBO0FBa0U5Qzs7QUFqRUk7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxtQkFBQTtFQUFxQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZUFBQTtFQUFpQixjQUFBO0FBNEVuSjs7QUEzRUk7RUFBb0IsT0FBQTtBQStFeEI7O0FBOUVJO0VBQW1CLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQVcsa0JBQUE7QUFxRnRFOztBQXBGSTtFQUFzQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsU0FBQTtBQTJGN0U7O0FBMUZJO0VBQWdCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLFdBQUE7RUFBYSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLHlCQUFBO0FBb0cvSDs7QUFuR0k7RUFBaUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGVBQUE7RUFBaUIsY0FBQTtBQTRHdEc7O0FBM0dJO0VBQXNCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBaUg5RDs7QUFoSEk7RUFBYSxpQkFBQTtFQUFtQixtQkFBQTtFQUFxQixlQUFBO0VBQWlCLGdCQUFBO0FBdUgxRTs7QUF0SEk7RUFBaUIsdUJBQUE7QUEwSHJCOztBQXpISTtFQUFtQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZ0JBQUE7RUFBa0IsU0FBQTtBQWdJMUU7O0FBL0hJO0VBQW1CLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxrQkFBQTtFQUFvQiw2QkFBQTtBQXVJL0c7O0FBdElJO0VBQWlCLGFBQUE7RUFBZSxRQUFBO0VBQVUsZUFBQTtBQTRJOUM7O0FBM0lJO0VBQU8saUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixjQUFBO0FBbUp4Rjs7QUFsSkk7RUFBWSxnQkFBQTtFQUFrQixZQUFBO0VBQWMsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUE4SnhKOztBQTdKSTtFQUFrQixjQUFBO0FBaUt0Qjs7QUFoS0k7RUFBYyxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUF3S3ZGOztBQXZLSTtFQUFlLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLGNBQUE7QUE2SzNEOztBQTVLSTtFQUFpQixlQUFBO0VBQWlCLG1CQUFBO0FBaUx0QyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgIC5maWx0ZXItYmFyIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC5zZWFyY2gtYm94IHsgcG9zaXRpb246IHJlbGF0aXZlOyBmbGV4OiAxOyBtaW4td2lkdGg6IDI1MHB4OyB9XHJcbiAgICAuc2VhcmNoLWJveCBpIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxNHB4OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyBjb2xvcjogIzk0YTNiODsgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgICAuc2VhcmNoLWJveCBpbnB1dCB7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMHB4IDE0cHggMTBweCA0MHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAxMHB4OyBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7IGJhY2tncm91bmQ6ICNmZmY7IH1cclxuICAgIC5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjNjM2NmYxOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwxMDIsMjQxLDAuMSk7IH1cclxuICAgIC5maWx0ZXItYmFyIHNlbGVjdCB7IHBhZGRpbmc6IDEwcHggMTRweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogMTBweDsgZm9udC1zaXplOiAxM3B4OyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XHJcbiAgICAuYW5ub3VuY2UtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTZweDsgfVxyXG4gICAgLmFubm91bmNlLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsgb3ZlcmZsb3c6IGhpZGRlbjsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzOyB9XHJcbiAgICAuYW5ub3VuY2UtY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEpOyB9XHJcbiAgICAuYW5ub3VuY2UtY2FyZC51bnJlYWQgeyBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2MzY2ZjE7IH1cclxuICAgIC5hbm5vdW5jZS10b3AgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDE0cHg7IHBhZGRpbmc6IDIwcHggMjBweCAwOyB9XHJcbiAgICAuYW5ub3VuY2UtaWNvbiB7IHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDE4cHg7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICAuYW5ub3VuY2UtY29udGVudCB7IGZsZXg6IDE7IH1cclxuICAgIC5hbm5vdW5jZS1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IG1hcmdpbi1ib3R0b206IDZweDsgfVxyXG4gICAgLmFubm91bmNlLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMDsgfVxyXG4gICAgLnVucmVhZC1iYWRnZSB7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgYmFja2dyb3VuZDogIzYzNjZmMTsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDYwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4gICAgLmFubm91bmNlLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzk0YTNiODsgfVxyXG4gICAgLmFubm91bmNlLW1ldGEgc3BhbiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB9XHJcbiAgICAuY2F0LWJhZGdlIHsgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4gICAgLmFubm91bmNlLWJvZHkgeyBwYWRkaW5nOiAxMnB4IDIwcHggMTZweDsgfVxyXG4gICAgLmFubm91bmNlLWJvZHkgcCB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0NzU1Njk7IGxpbmUtaGVpZ2h0OiAxLjY7IG1hcmdpbjogMDsgfVxyXG4gICAgLmFubm91bmNlLWZvb3RlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMTJweCAyMHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTsgfVxyXG4gICAgLmFubm91bmNlLXRhZ3MgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAudGFnIHsgcGFkZGluZzogM3B4IDEwcHg7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgLmJ0bi10ZXh0IHsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjb2xvcjogIzYzNjZmMTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB9XHJcbiAgICAuYnRuLXRleHQ6aG92ZXIgeyBjb2xvcjogIzRmNDZlNTsgfVxyXG4gICAgLnJlYWQtbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOTRhM2I4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxyXG4gICAgLmVtcHR5LXN0YXRlIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2MHB4IDIwcHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAuZW1wdHktc3RhdGUgaSB7IGZvbnQtc2l6ZTogNDBweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2559:
/*!***********************************************************************!*\
  !*** ./src/app/modules/employee/apply-leave/apply-leave.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpApplyLeaveComponent: () => (/* binding */ EmpApplyLeaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);






function EmpApplyLeaveComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " days remaining ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", b_r2.type, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r2.remaining);
  }
}
function EmpApplyLeaveComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Leave request submitted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Your request has been sent to your team lead for approval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "My Leave",
    link: "/employee/my-leave"
  };
};
const _c2 = function () {
  return {
    label: "Apply Leave"
  };
};
const _c3 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class EmpApplyLeaveComponent {
  constructor(leaveService, toast) {
    this.leaveService = leaveService;
    this.toast = toast;
    this.submitted = false;
    this.submitting = false;
    this.leaveForm = {
      type: '',
      duration: 'full',
      startDate: '',
      endDate: '',
      contact: '',
      reason: ''
    };
    this.balances = [];
  }
  ngOnInit() {
    this.loadBalances();
  }
  loadBalances() {
    this.leaveService.getBalances().subscribe({
      next: data => {
        this.balances = (data || []).map(b => ({
          type: b.leaveType,
          remaining: b.remaining
        }));
      },
      error: () => this.toast.error('Failed to load leave balances.')
    });
  }
  get calculatedDays() {
    if (!this.leaveForm.startDate || !this.leaveForm.endDate) return 0;
    const start = new Date(this.leaveForm.startDate);
    const end = new Date(this.leaveForm.endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return diff > 0 ? diff : 0;
  }
  submitLeave() {
    if (!this.leaveForm.type || !this.leaveForm.startDate || !this.leaveForm.endDate || !this.leaveForm.reason) {
      return;
    }
    this.submitting = true;
    this.leaveService.apply({
      leaveType: this.leaveForm.type,
      startDate: this.leaveForm.startDate,
      endDate: this.leaveForm.endDate,
      reason: this.leaveForm.reason
    }).subscribe({
      next: () => {
        this.submitted = true;
        this.toast.success('Leave request submitted successfully!');
        this.loadBalances();
        this.submitting = false;
      },
      error: () => {
        this.toast.error('Failed to submit leave request.');
        this.submitting = false;
      }
    });
  }
  static {
    this.ɵfac = function EmpApplyLeaveComponent_Factory(t) {
      return new (t || EmpApplyLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.LeaveService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpApplyLeaveComponent,
      selectors: [["app-emp-apply-leave"]],
      decls: 60,
      vars: 17,
      consts: [["title", "Apply for Leave", "subtitle", "Submit a new leave request", 3, "breadcrumbs"], [1, "section-card"], [1, "card-body"], [1, "leave-balance-bar"], ["class", "lb-item", 4, "ngFor", "ngForOf"], [1, "leave-form"], [1, "form-grid"], [1, "form-group"], ["name", "type", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Annual Leave"], ["value", "Sick Leave"], ["value", "Personal Leave"], ["value", "Unpaid Leave"], ["value", "Maternity Leave"], ["name", "duration", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", "full"], ["value", "half-am"], ["value", "half-pm"], ["type", "date", "name", "startDate", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "endDate", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["type", "text", "readonly", "", 1, "form-input", 3, "value"], ["type", "text", "name", "contact", "placeholder", "Phone number", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-group", "full-width"], ["rows", "4", "name", "reason", "required", "", "placeholder", "Please provide a reason for your leave request...", 1, "form-input", "form-textarea", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "button", "routerLink", "/employee/my-leave", 1, "btn-secondary"], ["type", "submit", 1, "btn-primary", 3, "click"], [1, "fas", "fa-paper-plane"], ["class", "section-card", "style", "margin-top:20px", 4, "ngIf"], [1, "lb-item"], [1, "lb-type"], [1, "section-card", 2, "margin-top", "20px"], [1, "success-msg"], [1, "fas", "fa-check-circle"]],
      template: function EmpApplyLeaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EmpApplyLeaveComponent_div_4_Template, 6, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Leave Type *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpApplyLeaveComponent_Template_select_ngModelChange_10_listener($event) {
            return ctx.leaveForm.type = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Select leave type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Annual Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sick Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Personal Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Unpaid Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Maternity Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7)(24, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Duration *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpApplyLeaveComponent_Template_select_ngModelChange_26_listener($event) {
            return ctx.leaveForm.duration = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Full Day(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Half Day (Morning)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Half Day (Afternoon)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7)(34, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Start Date *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpApplyLeaveComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.leaveForm.startDate = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 7)(38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "End Date *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpApplyLeaveComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.leaveForm.endDate = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 7)(42, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Total Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 7)(46, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Contact During Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpApplyLeaveComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.leaveForm.contact = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 23)(50, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Reason for Leave *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "textarea", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpApplyLeaveComponent_Template_textarea_ngModelChange_52_listener($event) {
            return ctx.leaveForm.reason = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 25)(54, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpApplyLeaveComponent_Template_button_click_56_listener() {
            return ctx.submitLeave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Submit Request");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, EmpApplyLeaveComponent_div_59_Template, 8, 0, "div", 29);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](13, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.balances);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.leaveForm.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.leaveForm.duration);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.leaveForm.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.leaveForm.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.calculatedDays + " day(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.leaveForm.contact);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.leaveForm.reason);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.leave-balance-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding: 14px 18px;\n  background: #f8fafc;\n  border-radius: 10px;\n  margin-bottom: 24px;\n  font-size: 13px;\n  color: #64748b;\n  flex-wrap: wrap;\n}\n\n.lb-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.lb-type[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n\n.lb-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #334155;\n  outline: none;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.form-input[readonly][_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #6366f1;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748b;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.success-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  background: #f0fdf4;\n  border-left: 3px solid #10b981;\n}\n\n.success-msg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #10b981;\n}\n\n.success-msg[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1e293b;\n  display: block;\n}\n\n.success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9hcHBseS1sZWF2ZS9hcHBseS1sZWF2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUjs7QUFESTtFQUFnQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQix5Q0FBQTtFQUF3Qyx5QkFBQTtFQUEyQixnQkFBQTtBQVM5SDs7QUFSSTtFQUFhLGFBQUE7QUFZakI7O0FBWEk7RUFBcUIsYUFBQTtFQUFlLFNBQUE7RUFBVyxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixtQkFBQTtFQUFxQixtQkFBQTtFQUFxQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZUFBQTtBQXVCdks7O0FBdEJJO0VBQVcsYUFBQTtFQUFlLFFBQUE7QUEyQjlCOztBQTFCSTtFQUFXLGNBQUE7QUE4QmY7O0FBN0JJO0VBQWtCLGNBQUE7QUFpQ3RCOztBQWhDSTtFQUFhLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyxTQUFBO0FBc0NoRTs7QUFyQ0k7RUFBYyxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsUUFBQTtBQTJDekQ7O0FBMUNJO0VBQXlCLG1CQUFBO0FBOEM3Qjs7QUE3Q0k7RUFBb0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHlCQUFBO0VBQTJCLHFCQUFBO0FBcUR0Rzs7QUFwREk7RUFBYyxrQkFBQTtFQUFvQix5QkFBQTtFQUEyQixrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsYUFBQTtBQTZEdEg7O0FBNURJO0VBQW9CLHFCQUFBO0VBQXVCLDZDQUFBO0FBaUUvQzs7QUFoRUk7RUFBd0IsbUJBQUE7QUFvRTVCOztBQW5FSTtFQUFpQixnQkFBQTtFQUFrQixvQkFBQTtBQXdFdkM7O0FBdkVJO0VBQWdCLGFBQUE7RUFBZSx5QkFBQTtFQUEyQixTQUFBO0VBQVcsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsNkJBQUE7QUFnRjlHOztBQS9FSTtFQUFlLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBNkZuTTs7QUE1Rkk7RUFBcUIsbUJBQUE7QUFnR3pCOztBQS9GSTtFQUFpQixrQkFBQTtFQUFvQix5QkFBQTtFQUEyQixrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZUFBQTtBQXlHM0k7O0FBeEdJO0VBQXVCLG1CQUFBO0FBNEczQjs7QUEzR0k7RUFBZSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLDhCQUFBO0FBb0gzRzs7QUFuSEk7RUFBaUIsZUFBQTtFQUFpQixjQUFBO0FBd0h0Qzs7QUF2SEk7RUFBc0IsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGNBQUE7QUE2SDNEOztBQTVISTtFQUFpQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZUFBQTtBQWtJdEQ7O0FBaklJO0VBQTRCO0lBQWEsMEJBQUE7RUFzSTNDO0VBdEl5RTtJQUF5QixtQkFBQTtFQXlJbEc7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgIC5zZWN0aW9uLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLmNhcmQtYm9keSB7IHBhZGRpbmc6IDI0cHg7IH1cclxuICAgIC5sZWF2ZS1iYWxhbmNlLWJhciB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMjRweDsgcGFkZGluZzogMTRweCAxOHB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXItcmFkaXVzOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAyNHB4OyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNjQ3NDhiOyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC5sYi1pdGVtIHsgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7IH1cclxuICAgIC5sYi10eXBlIHsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgIC5sYi1pdGVtIHN0cm9uZyB7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbiAgICAuZm9ybS1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDIwcHg7IH1cclxuICAgIC5mb3JtLWdyb3VwIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IH1cclxuICAgIC5mb3JtLWdyb3VwLmZ1bGwtd2lkdGggeyBncmlkLWNvbHVtbjogc3BhbiAyOyB9XHJcbiAgICAuZm9ybS1ncm91cCBsYWJlbCB7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxyXG4gICAgLmZvcm0taW5wdXQgeyBwYWRkaW5nOiAxMHB4IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzMzNDE1NTsgb3V0bGluZTogbm9uZTsgfVxyXG4gICAgLmZvcm0taW5wdXQ6Zm9jdXMgeyBib3JkZXItY29sb3I6ICM2MzY2ZjE7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LDEwMiwyNDEsMC4xKTsgfVxyXG4gICAgLmZvcm0taW5wdXRbcmVhZG9ubHldIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxyXG4gICAgLmZvcm0tdGV4dGFyZWEgeyByZXNpemU6IHZlcnRpY2FsOyBmb250LWZhbWlseTogaW5oZXJpdDsgfVxyXG4gICAgLmZvcm0tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogMjRweDsgcGFkZGluZy10b3A6IDIwcHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5OyB9XHJcbiAgICAuYnRuLXByaW1hcnkgeyBwYWRkaW5nOiAxMHB4IDIwcHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XHJcbiAgICAuYnRuLXByaW1hcnk6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjNGY0NmU1OyB9XHJcbiAgICAuYnRuLXNlY29uZGFyeSB7IHBhZGRpbmc6IDEwcHggMjBweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAxM3B4OyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAgIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxyXG4gICAgLnN1Y2Nlc3MtbXNnIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4OyBwYWRkaW5nOiAxNnB4IDIwcHg7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzEwYjk4MTsgfVxyXG4gICAgLnN1Y2Nlc3MtbXNnIGkgeyBmb250LXNpemU6IDI4cHg7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbiAgICAuc3VjY2Vzcy1tc2cgc3Ryb25nIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzFlMjkzYjsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgIC5zdWNjZXNzLW1zZyBwIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAycHggMCAwOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsgLmZvcm0tZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IC5mb3JtLWdyb3VwLmZ1bGwtd2lkdGggeyBncmlkLWNvbHVtbjogc3BhbiAxOyB9IH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1007:
/*!***************************************************************************!*\
  !*** ./src/app/modules/employee/break-tracker/break-tracker.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpBreakTrackerComponent: () => (/* binding */ EmpBreakTrackerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);




function EmpBreakTrackerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 18)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpBreakTrackerComponent_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.stopBreak());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Resume Work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ongoing: ", ctx_r0.activeBreak.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Started at ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 3, ctx_r0.activeBreak.startTime, "shortTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.formatTimer(ctx_r0.elapsedSeconds), " ");
  }
}
function EmpBreakTrackerComponent_ng_template_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpBreakTrackerComponent_ng_template_3_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const b_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.startBreak(b_r8.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const b_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", b_r8.color + "20")("color", b_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](b_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Max ", b_r8.maxMinutes, " mins");
  }
}
function EmpBreakTrackerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select Break Type to Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EmpBreakTrackerComponent_ng_template_3_div_4_Template, 8, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.breakTypes);
  }
}
function EmpBreakTrackerComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.status);
  }
}
function EmpBreakTrackerComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No breaks recorded yet today.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Break Tracker"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpBreakTrackerComponent {
  constructor(attendanceService, toast) {
    this.attendanceService = attendanceService;
    this.toast = toast;
    this.activeBreak = null;
    this.elapsedSeconds = 0;
    this.timerInterval = null;
    this.todayBreaks = [];
    this.breakTypes = [{
      name: 'Tea Break',
      maxMinutes: 15,
      icon: 'fas fa-mug-hot',
      color: '#f59e0b'
    }, {
      name: 'Lunch Break',
      maxMinutes: 45,
      icon: 'fas fa-utensils',
      color: '#10b981'
    }, {
      name: 'Personal Break',
      maxMinutes: 20,
      icon: 'fas fa-user-clock',
      color: '#6366f1'
    }, {
      name: 'Short Rest',
      maxMinutes: 10,
      icon: 'fas fa-pause-circle',
      color: '#00a8ff'
    }];
    this.totalBreakMins = 0;
    this.allowedBreakMins = 60;
  }
  ngOnInit() {
    this.loadToday();
  }
  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  loadToday() {
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.applyTodayRecord(record);
      },
      error: () => {
        this.todayBreaks = [];
        this.totalBreakMins = 0;
      }
    });
  }
  applyTodayRecord(record) {
    if (!record) {
      this.todayBreaks = [];
      this.totalBreakMins = 0;
      return;
    }
    this.todayBreaks = (record.breaks || []).map(b => ({
      type: b.breakType || 'Break',
      startTime: this.formatServerTime(b.startTime),
      endTime: b.endTime ? this.formatServerTime(b.endTime) : '--',
      duration: `${b.durationMinutes || 0} mins`,
      status: b.endTime ? 'Completed' : 'Ongoing'
    }));
    this.totalBreakMins = (record.breaks || []).reduce((sum, b) => sum + (Number(b.durationMinutes) || 0), 0);
  }
  startBreak(type) {
    this.activeBreak = {
      type,
      startTime: new Date()
    };
    this.elapsedSeconds = 0;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.attendanceService.startBreak({
      breakType: type
    }).subscribe({
      next: () => {
        this.toast.success('Break started. Enjoy your rest!');
      },
      error: () => this.toast.error('Failed to start break.')
    });
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
    }, 1000);
  }
  stopBreak() {
    if (!this.activeBreak) return;
    clearInterval(this.timerInterval);
    this.attendanceService.endBreak().subscribe({
      next: () => {
        this.toast.success('Welcome back! Break ended.');
      },
      error: () => this.toast.error('Failed to end break.')
    });
    this.activeBreak = null;
    this.elapsedSeconds = 0;
    setTimeout(() => this.loadToday(), 300);
  }
  formatTimer(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  formatServerTime(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  static {
    this.ɵfac = function EmpBreakTrackerComponent_Factory(t) {
      return new (t || EmpBreakTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpBreakTrackerComponent,
      selectors: [["app-emp-break-tracker"]],
      decls: 49,
      vars: 13,
      consts: [["title", "Break Tracker", "subtitle", "Monitor and manage your daily work break logs", 3, "breadcrumbs"], [1, "break-container"], ["class", "active-break-card", 4, "ngIf", "ngIfElse"], ["noActiveBreak", ""], [1, "stats-row"], [1, "stat-box"], [1, "fas", "fa-clock", "text-blue"], [1, "fas", "fa-hourglass-half", "text-green"], [1, "fas", "fa-check-circle", "text-purple"], [1, "history-card"], [1, "card-header"], [1, "fas", "fa-history", "text-blue"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "active-break-card"], [1, "active-pulse"], [1, "active-info"], [1, "timer-display"], [1, "btn-stop-break", 3, "click"], [1, "fas", "fa-play"], [1, "break-start-card"], [1, "break-options-grid"], ["class", "break-option-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "break-option-btn", 3, "click"], [1, "icon-circle"], [1, "break-option-text"], [1, "pill-duration"], [1, "status-badge-completed"], ["colspan", "5", 1, "text-center", "py-4", "text-gray"]],
      template: function EmpBreakTrackerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EmpBreakTrackerComponent_div_2_Template, 13, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EmpBreakTrackerComponent_ng_template_3_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Total Break Time Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Daily Allowed Limit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Breaks Taken Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9)(28, "div", 10)(29, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Today's Break Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12)(33, "table", 13)(34, "thead")(35, "tr")(36, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Break Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Start Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "End Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Duration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, EmpBreakTrackerComponent_tr_47_Template, 14, 5, "tr", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, EmpBreakTrackerComponent_tr_48_Template, 3, 0, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeBreak)("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.totalBreakMins, " Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.allowedBreakMins, " Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.todayBreaks.length, " Breaks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.todayBreaks);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.todayBreaks.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, sans-serif;\n  background: #f8fafc;\n}\n\n.break-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.active-break-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  border-radius: 20px;\n  padding: 28px;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px rgba(0, 102, 255, 0.25);\n  position: relative;\n  overflow: hidden;\n}\n\n.active-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0 0 4px;\n}\n\n.active-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.9;\n  margin: 0;\n}\n\n.timer-display[_ngcontent-%COMP%] {\n  font-size: 38px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  font-family: monospace;\n}\n\n.btn-stop-break[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 50px;\n  border: none;\n  background: #ffffff;\n  color: #0066ff;\n  font-weight: 800;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n}\n.btn-stop-break[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n}\n\n.break-start-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n}\n.break-start-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 18px;\n}\n\n.break-options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.break-option-btn[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.break-option-btn[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n  background: #eff6ff;\n  transform: translateY(-2px);\n}\n\n.icon-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.break-option-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.break-option-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.break-option-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.stat-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 2px;\n}\n.stat-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n.text-purple[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  padding: 24px;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n  text-transform: uppercase;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.pill-duration[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n\n.status-badge-completed[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n@media (max-width: 640px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .active-break-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9icmVhay10cmFja2VyL2JyZWFrLXRyYWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFERjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMSjtBQVFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBTko7O0FBVUE7RUFBYSxjQUFBO0FBTmI7O0FBT0E7RUFBYyxjQUFBO0FBSGQ7O0FBSUE7RUFBZSxjQUFBO0FBQWY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsMEJBQUE7RUFERjtFQUdBO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxufVxyXG5cclxuLmJyZWFrLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1icmVhay1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjhweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMjUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWN0aXZlLWluZm8gaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbjogMCAwIDRweDtcclxufVxyXG5cclxuLmFjdGl2ZS1pbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGltZXItZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uYnRuLXN0b3AtYnJlYWsge1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMDA2NmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICB9XHJcbn1cclxuXHJcbi5icmVhay1zdGFydC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDAgMCAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJyZWFrLW9wdGlvbnMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5icmVhay1vcHRpb24tYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJyZWFrLW9wdGlvbi10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXRzLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLnN0YXQtYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUgeyBjb2xvcjogIzAwNjZmZjsgfVxyXG4udGV4dC1ncmVlbiB7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbi50ZXh0LXB1cnBsZSB7IGNvbG9yOiAjOGI1Y2Y2OyB9XHJcblxyXG4uaGlzdG9yeS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgdGgge1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICB9XHJcbn1cclxuXHJcbi5waWxsLWR1cmF0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gIGNvbG9yOiAjMDA2NmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2UtY29tcGxldGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xyXG4gIGNvbG9yOiAjMTZhMzRhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5zdGF0cy1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIC5hY3RpdmUtYnJlYWstY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6143:
/*!*************************************************************************!*\
  !*** ./src/app/modules/employee/check-in-out/check-in-out.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpCheckInOutComponent: () => (/* binding */ EmpCheckInOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);




function EmpCheckInOutComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ready to check in for today's shift");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmpCheckInOutComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Currently Working \u2022 Timer Active (", ctx_r1.workedTime, ")");
  }
}
function EmpCheckInOutComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Currently On Break (Timer Paused)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmpCheckInOutComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpCheckInOutComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.toggleBreak());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r3.isOnBreak ? "fas fa-play" : "fas fa-coffee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.isOnBreak ? "RESUME WORK" : "TAKE BREAK");
  }
}
function EmpCheckInOutComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 47)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const act_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", act_r9.color + "20")("color", act_r9.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](act_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](act_r9.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](act_r9.time);
  }
}
function EmpCheckInOutComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No activity recorded today yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function EmpCheckInOutComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const w_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r10.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", w_r10.percentage + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-day", w_r10.hours > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", w_r10.hours, "h");
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Check In/Out"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpCheckInOutComponent {
  constructor(attendanceService, authService, toast) {
    this.attendanceService = attendanceService;
    this.authService = authService;
    this.toast = toast;
    this.currentTime = '';
    this.currentDate = '';
    this.isCheckedIn = false;
    this.isOnBreak = false;
    this.checkInTime = '';
    this.checkOutTime = '';
    this.workedSeconds = 0;
    this.workedTime = '00:00:00';
    this.remainingTime = '08:00:00';
    this.todayActivity = [];
    this.weekData = [];
    this.location = 'Envision Beyond India Pvt Ltd - Main HQ (Verified GPS Geofence)';
    this.shiftDetails = 'General Shift (09:30 AM - 06:30 PM)';
    this.showToast = false;
    this.toastMsg = '';
    this.todayRecord = null;
    this.submittingAction = false;
  }
  ngOnInit() {
    this.updateClock();
    this.clockInterval = setInterval(() => this.updateClock(), 1000);
    this.loadToday();
    this.loadWeek();
  }
  ngOnDestroy() {
    if (this.clockInterval) clearInterval(this.clockInterval);
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
  updateClock() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.currentDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  loadToday() {
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.applyTodayRecord(record);
      },
      error: () => {
        this.applyTodayRecord(null);
      }
    });
  }
  applyTodayRecord(record) {
    this.todayRecord = record || null;
    if (!record) {
      this.isCheckedIn = false;
      this.isOnBreak = false;
      this.checkInTime = '';
      this.checkOutTime = '';
      this.workedSeconds = 0;
      this.workedTime = '00:00:00';
      this.remainingTime = '08:00:00';
      this.todayActivity = [];
      return;
    }
    this.checkInTime = this.formatTime(record.checkIn);
    this.checkOutTime = record.checkOut ? this.formatTime(record.checkOut) : '';
    this.isCheckedIn = !!record.checkIn && !record.checkOut;
    const openBreak = (record.breaks || []).find(b => !b.endTime);
    this.isOnBreak = !!openBreak;
    this.workedSeconds = Math.round((Number(record.workHours) || 0) * 3600);
    this.workedTime = this.formatSeconds(this.workedSeconds);
    const totalShiftSecs = 8 * 3600;
    const remSecs = Math.max(0, totalShiftSecs - this.workedSeconds);
    this.remainingTime = this.formatSeconds(remSecs);
    this.todayActivity = this.buildActivity(record);
    if (this.isCheckedIn) {
      this.startWorkedTimer();
    } else {
      this.stopWorkedTimer();
    }
  }
  buildActivity(record) {
    const activity = [];
    if (record.checkIn) {
      activity.push({
        action: 'Checked In',
        time: this.formatTime(record.checkIn),
        type: 'in',
        icon: 'fas fa-sign-in-alt',
        color: '#10b981'
      });
    }
    (record.breaks || []).forEach(b => {
      activity.push({
        action: 'Started Break',
        time: this.formatTime(b.startTime),
        type: 'break',
        icon: 'fas fa-coffee',
        color: '#f59e0b'
      });
      if (b.endTime) {
        activity.push({
          action: 'Resumed Work',
          time: this.formatTime(b.endTime),
          type: 'in',
          icon: 'fas fa-play',
          color: '#00a8ff'
        });
      }
    });
    if (record.checkOut) {
      activity.push({
        action: 'Checked Out',
        time: this.formatTime(record.checkOut),
        type: 'out',
        icon: 'fas fa-sign-out-alt',
        color: '#ef4444'
      });
    }
    return activity.reverse();
  }
  loadWeek() {
    const employeeId = this.authService.currentUser?.employeeId;
    if (!employeeId) {
      this.weekData = [];
      return;
    }
    const monday = this.getMonday();
    this.attendanceService.getByEmployee(employeeId, this.dateKey(monday), this.dateKey(new Date())).subscribe({
      next: records => this.buildWeekData(records || []),
      error: () => this.weekData = []
    });
  }
  buildWeekData(records) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const start = this.getMonday();
    const byDate = {};
    records.forEach(r => {
      byDate[String(r.date || '').slice(0, 10)] = r;
    });
    this.weekData = days.map((day, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const rec = byDate[this.dateKey(d)];
      const hours = rec ? Number(rec.workHours || 0) : 0;
      return {
        day,
        hours,
        percentage: Math.min(100, Math.round(hours / 9 * 100))
      };
    });
  }
  getMonday() {
    const now = new Date();
    const day = now.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  }
  toggleCheckIn() {
    if (this.submittingAction) return;
    if (!this.isCheckedIn) {
      this.submitCheckIn();
    } else {
      this.submitCheckOut();
    }
  }
  submitCheckIn() {
    this.submittingAction = true;
    this.attendanceService.checkIn({
      location: this.location
    }).subscribe({
      next: () => {
        this.toast.success('Checked in successfully! Have a productive day.');
        this.loadToday();
        this.submittingAction = false;
      },
      error: () => {
        this.toast.error('Check-in failed. Please try again.');
        this.submittingAction = false;
      }
    });
  }
  submitCheckOut() {
    this.submittingAction = true;
    this.attendanceService.checkOut({
      location: this.location
    }).subscribe({
      next: () => {
        this.toast.success('Checked out successfully! Great work today.');
        this.stopWorkedTimer();
        this.isCheckedIn = false;
        this.loadToday();
        this.submittingAction = false;
      },
      error: () => {
        this.toast.error('Check-out failed. Please try again.');
        this.submittingAction = false;
      }
    });
  }
  toggleBreak() {
    if (!this.isCheckedIn) return;
    const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    if (!this.isOnBreak) {
      this.isOnBreak = true;
      this.todayActivity.unshift({
        action: 'Started Break',
        time,
        type: 'break',
        icon: 'fas fa-coffee',
        color: '#f59e0b'
      });
      this.attendanceService.startBreak({
        breakType: 'Regular Break'
      }).subscribe({
        next: () => this.toast.success('Break started. Enjoy your rest!'),
        error: () => this.toast.error('Failed to start break.')
      });
    } else {
      this.isOnBreak = false;
      this.todayActivity.unshift({
        action: 'Resumed Work',
        time,
        type: 'in',
        icon: 'fas fa-play',
        color: '#00a8ff'
      });
      this.attendanceService.endBreak().subscribe({
        next: () => this.toast.success('Welcome back! Resumed work timer.'),
        error: () => this.toast.error('Failed to end break.')
      });
    }
  }
  startWorkedTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (!this.isOnBreak) {
        this.workedSeconds++;
        this.workedTime = this.formatSeconds(this.workedSeconds);
        const totalShiftSecs = 8 * 3600;
        const remSecs = Math.max(0, totalShiftSecs - this.workedSeconds);
        this.remainingTime = this.formatSeconds(remSecs);
      }
    }, 1000);
  }
  stopWorkedTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  formatSeconds(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs % 3600 / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  formatTime(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  dateKey(d) {
    return d.toISOString().slice(0, 10);
  }
  triggerToast(msg) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
  static {
    this.ɵfac = function EmpCheckInOutComponent_Factory(t) {
      return new (t || EmpCheckInOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpCheckInOutComponent,
      selectors: [["app-emp-check-in-out"]],
      decls: 83,
      vars: 37,
      consts: [["title", "Check In / Out", "subtitle", "Track your daily work hours, attendance shifts, and break logs", 3, "breadcrumbs"], [1, "cio-page-container"], [1, "cio-layout-grid"], [1, "cio-main-col"], [1, "clock-hero-card"], [1, "shift-badge"], [1, "fas", "fa-business-time"], [1, "digital-clock"], [1, "clock-time"], [1, "clock-date"], [1, "status-indicator"], [1, "status-icon-badge"], ["class", "status-text", 4, "ngIf"], [1, "action-buttons-group"], [1, "btn-primary-action", 3, "click"], ["class", "btn-secondary-action", 3, "click", 4, "ngIf"], [1, "location-footer"], [1, "fas", "fa-map-marker-alt"], [1, "summary-cards-grid"], [1, "summary-card"], [1, "summary-icon", "icon-green"], [1, "fas", "fa-sign-in-alt"], [1, "summary-info"], [1, "summary-lbl"], [1, "summary-val"], [1, "summary-icon", "icon-red"], [1, "fas", "fa-sign-out-alt"], [1, "summary-icon", "icon-blue"], [1, "fas", "fa-clock"], [1, "summary-icon", "icon-yellow"], [1, "fas", "fa-hourglass-half"], [1, "cio-side-col"], [1, "side-card"], [1, "side-card-header"], [1, "fas", "fa-history", "text-blue"], [1, "activity-timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["class", "timeline-item-empty", 4, "ngIf"], [1, "fas", "fa-chart-bar", "text-blue"], [1, "week-summary-list"], ["class", "week-row", 4, "ngFor", "ngForOf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], [1, "status-text"], [1, "btn-secondary-action", 3, "click"], [1, "timeline-item"], [1, "timeline-dot-circle"], [1, "timeline-details"], [1, "timeline-time"], [1, "timeline-item-empty"], [1, "week-row"], [1, "week-day-name"], [1, "progress-bar-track"], [1, "progress-bar-fill"], [1, "week-hours-lbl"]],
      template: function EmpCheckInOutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EmpCheckInOutComponent_p_17_Template, 2, 0, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EmpCheckInOutComponent_p_18_Template, 2, 1, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, EmpCheckInOutComponent_p_19_Template, 2, 0, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpCheckInOutComponent_Template_button_click_21_listener() {
            return ctx.toggleCheckIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EmpCheckInOutComponent_button_25_Template, 4, 3, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Check In");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19)(40, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 22)(43, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Check Out");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 19)(48, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 22)(51, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Worked Hours");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 19)(56, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 22)(59, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Remaining");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 31)(64, "div", 32)(65, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Today's Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, EmpCheckInOutComponent_div_70_Template, 8, 8, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, EmpCheckInOutComponent_div_71_Template, 3, 0, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 32)(73, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "This Week's Log");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, EmpCheckInOutComponent_div_78_Template, 7, 6, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("checked-in", ctx.isCheckedIn)("on-break", ctx.isOnBreak);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.shiftDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("pulse", ctx.isCheckedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.isCheckedIn ? ctx.isOnBreak ? "fas fa-mug-hot" : "fas fa-laptop-code" : "fas fa-door-open");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCheckedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCheckedIn && !ctx.isOnBreak);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCheckedIn && ctx.isOnBreak);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("btn-checkout", ctx.isCheckedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.isCheckedIn ? "fas fa-sign-out-alt" : "fas fa-sign-in-alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isCheckedIn ? "CHECK OUT" : "CHECK IN");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCheckedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.location);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.checkInTime || "--:--");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.checkOutTime || "--:--");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.workedTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.remainingTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.todayActivity);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.todayActivity.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.weekData);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.cio-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cio-layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  align-items: start;\n}\n\n.cio-main-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.clock-hero-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  border-radius: 20px;\n  padding: 36px 28px;\n  text-align: center;\n  color: #ffffff;\n  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.25);\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.clock-hero-card.checked-in[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #059669 0%, #10b981 100%);\n  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.25);\n}\n.clock-hero-card.on-break[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);\n  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.25);\n}\n\n.shift-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(8px);\n  padding: 6px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.digital-clock[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.digital-clock[_ngcontent-%COMP%]   .clock-time[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  font-family: monospace;\n  line-height: 1.1;\n}\n.digital-clock[_ngcontent-%COMP%]   .clock-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  opacity: 0.9;\n  margin-top: 6px;\n  font-weight: 500;\n}\n\n.status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n\n.status-icon-badge[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.status-icon-badge.pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_statusPulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_statusPulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  opacity: 0.95;\n  margin: 0;\n}\n\n.action-buttons-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.btn-primary-action[_ngcontent-%COMP%] {\n  padding: 14px 36px;\n  border-radius: 50px;\n  border: none;\n  background: #ffffff;\n  color: #0066ff;\n  font-weight: 800;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.btn-primary-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n.btn-primary-action.btn-checkout[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n\n.btn-secondary-action[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  border-radius: 50px;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  backdrop-filter: blur(4px);\n  transition: all 0.2s ease;\n}\n.btn-secondary-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n}\n\n.location-footer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.85;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n\n\n\n.summary-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 18px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.summary-icon.icon-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.summary-icon.icon-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.summary-icon.icon-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.summary-icon.icon-yellow[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n\n.summary-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: block;\n}\n\n.summary-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  display: block;\n  margin-top: 2px;\n}\n\n\n\n.cio-side-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.side-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 22px;\n}\n\n.side-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  border-bottom: 1px solid #f8fafc;\n  padding-bottom: 10px;\n}\n.side-card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.side-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n\n\n.activity-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.timeline-dot-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n\n.timeline-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n}\n.timeline-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #0f172a;\n  font-weight: 600;\n}\n\n.timeline-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.timeline-item-empty[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  text-align: center;\n  padding: 12px 0;\n}\n\n\n\n.week-summary-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.week-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.week-day-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  width: 32px;\n}\n\n.progress-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #00a8ff 0%, #0066ff 100%);\n  border-radius: 10px;\n  transition: width 0.4s ease;\n}\n.progress-bar-fill.active-day[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #10b981 0%, #059669 100%);\n}\n\n.week-hours-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #0f172a;\n  width: 36px;\n  text-align: right;\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 2000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n@media (max-width: 1024px) {\n  .cio-layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .summary-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .digital-clock[_ngcontent-%COMP%]   .clock-time[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9jaGVjay1pbi1vdXQvY2hlY2staW4tb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtHQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQSwrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsNkRBQUE7RUFDQSxnREFBQTtBQUNKO0FBRUU7RUFDRSw2REFBQTtFQUNBLGdEQUFBO0FBQUo7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFB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RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVFGOztBQUxBLDRCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUUY7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBUUY7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVFGOztBQUxBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSw0REFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFRRjtBQU5FO0VBQ0UsNERBQUE7QUFRSjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFKQSx1QkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtBQU9GO0FBTEU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFPSjtBQUpFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFGQTtFQUNFO0lBQ0UsMEJBQUE7RUFLRjtFQUZBO0lBQ0UscUNBQUE7RUFJRjtBQUNGO0FBREE7RUFDRTtJQUNFLDBCQUFBO0VBR0Y7RUFBQTtJQUNFLGVBQUE7RUFFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jaW8tcGFnZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2lvLWxheW91dC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM4MHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5jaW8tbWFpbi1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi8qIDEuIEhlcm8gRGlnaXRhbCBDbG9jayBDYXJkICovXHJcbi5jbG9jay1oZXJvLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMzZweCAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYuY2hlY2tlZC1pbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDU5NjY5IDAlLCAjMTBiOTgxIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMjUpO1xyXG4gIH1cclxuXHJcbiAgJi5vbi1icmVhayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDk3NzA2IDAlLCAjZjU5ZTBiIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLnNoaWZ0LWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICBwYWRkaW5nOiA2cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kaWdpdGFsLWNsb2NrIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAuY2xvY2stdGltZSB7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIH1cclxuXHJcbiAgLmNsb2NrLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0dXMtaW5kaWNhdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLnN0YXR1cy1pY29uLWJhZGdlIHtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAmLnB1bHNlIHtcclxuICAgIGFuaW1hdGlvbjogc3RhdHVzUHVsc2UgMnMgaW5maW5pdGU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0YXR1c1B1bHNlIHtcclxuICAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XHJcbiAgNzAlIHsgYm94LXNoYWRvdzogMCAwIDAgMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyB9XHJcbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgfVxyXG59XHJcblxyXG4uc3RhdHVzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeS1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDE0cHggMzZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMDA2NmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuXHJcbiAgJi5idG4tY2hlY2tvdXQge1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeS1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDE0cHggMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9jYXRpb24tZm9vdGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgb3BhY2l0eTogMC44NTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi8qIDIuIFN1bW1hcnkgNCBDYXJkcyBHcmlkICovXHJcbi5zdW1tYXJ5LWNhcmRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBwYWRkaW5nOiAxOHB4IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnN1bW1hcnktaWNvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgJi5pY29uLWdyZWVuIHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAmLmljb24tcmVkIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICNkYzI2MjY7IH1cclxuICAmLmljb24tYmx1ZSB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGNvbG9yOiAjMjU2M2ViOyB9XHJcbiAgJi5pY29uLXllbGxvdyB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWxibCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXZhbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4vKiBSaWdodCBDb2x1bW4gU2lkZSBDYXJkcyAqL1xyXG4uY2lvLXNpZGUtY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgcGFkZGluZzogMjJweDtcclxufVxyXG5cclxuLnNpZGUtY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZmFmYztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1ibHVlIHsgY29sb3I6ICMwMDY2ZmY7IH1cclxuXHJcbi8qIFRpbWVsaW5lIExpc3QgKi9cclxuLmFjdGl2aXR5LXRpbWVsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWRvdC1jaXJjbGUge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleDogMTtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lLXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW0tZW1wdHkge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG59XHJcblxyXG4vKiBXZWVrbHkgU3VtbWFyeSBCYXIgTGlzdCAqL1xyXG4ud2Vlay1zdW1tYXJ5LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi53ZWVrLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLndlZWstZGF5LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLXRyYWNrIHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGE4ZmYgMCUsICMwMDY2ZmYgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XHJcblxyXG4gICYuYWN0aXZlLWRheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxMGI5ODEgMCUsICMwNTk2NjkgMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ud2Vlay1ob3Vycy1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vKiBUb2FzdCBOb3RpZmljYXRpb24gKi9cclxuLnRvYXN0LW5vdGlmaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjRweDtcclxuICByaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgei1pbmRleDogMjAwMDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5jaW8tbGF5b3V0LWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuc3VtbWFyeS1jYXJkcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuc3VtbWFyeS1jYXJkcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmRpZ2l0YWwtY2xvY2sgLmNsb2NrLXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6095:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/employee/daily-work-update/daily-work-update.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpDailyWorkUpdateComponent: () => (/* binding */ EmpDailyWorkUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);





function EmpDailyWorkUpdateComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r9);
  }
}
function EmpDailyWorkUpdateComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EmpDailyWorkUpdateComponent_div_71_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onScreenshotSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_div_71_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r10.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 50)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Upload Work Screenshot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "PNG, JPG up to 10MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function EmpDailyWorkUpdateComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 53)(3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Image Attached");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_ng_template_72_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.removeScreenshot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.screenshotFile == null ? null : ctx_r3.screenshotFile.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.screenshotFile == null ? null : ctx_r3.screenshotFile.name);
  }
}
function EmpDailyWorkUpdateComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EmpDailyWorkUpdateComponent_div_74_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onVideoSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_div_74_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r16.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 50)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Upload Video Demo / Screen Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "MP4, WEBM video recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function EmpDailyWorkUpdateComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 53)(4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_ng_template_75_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.removeVideo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.videoFile == null ? null : ctx_r6.videoFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r6.videoFile == null ? null : ctx_r6.videoFile.size, " Video Demo");
  }
}
function EmpDailyWorkUpdateComponent_div_87_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "In Progress:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.inProgress);
  }
}
function EmpDailyWorkUpdateComponent_div_87_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Blockers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.blockers);
  }
}
function EmpDailyWorkUpdateComponent_div_87_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_div_87_div_24_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.openMediaPreview("image", item_r22.screenshot.url, item_r22.screenshot.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "View Screenshot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.screenshot.name);
  }
}
function EmpDailyWorkUpdateComponent_div_87_div_24_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_div_87_div_24_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.openMediaPreview("video", item_r22.video.url, item_r22.video.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Watch Video Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.video.name);
  }
}
function EmpDailyWorkUpdateComponent_div_87_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81)(1, "strong", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Attached Work Proof & Demo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EmpDailyWorkUpdateComponent_div_87_div_24_div_5_Template, 6, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EmpDailyWorkUpdateComponent_div_87_div_24_div_6_Template, 6, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r22.screenshot);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r22.video);
  }
}
function EmpDailyWorkUpdateComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 70)(9, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_div_87_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);
      const item_r22 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.deleteUpdate(item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 76)(17, "div", 77)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Accomplishments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, EmpDailyWorkUpdateComponent_div_87_div_22_Template, 5, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EmpDailyWorkUpdateComponent_div_87_div_23_Template, 5, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EmpDailyWorkUpdateComponent_div_87_div_24_Template, 7, 2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.project);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r22.hours, " Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("approved", item_r22.status === "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.accomplishments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r22.inProgress && item_r22.inProgress !== "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r22.blockers && item_r22.blockers !== "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r22.screenshot || item_r22.video);
  }
}
function EmpDailyWorkUpdateComponent_div_88_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 100);
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r41.previewMedia.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function EmpDailyWorkUpdateComponent_div_88_video_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 101);
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r42.previewMedia.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function EmpDailyWorkUpdateComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 93)(1, "div", 94)(2, "div", 95)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_div_88_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.closeMediaPreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EmpDailyWorkUpdateComponent_div_88_img_9_Template, 1, 1, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EmpDailyWorkUpdateComponent_div_88_video_10_Template, 1, 1, "video", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.previewMedia.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.previewMedia.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.previewMedia.type === "video");
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Daily Work Update"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpDailyWorkUpdateComponent {
  constructor(workUpdateService, toast) {
    this.workUpdateService = workUpdateService;
    this.toast = toast;
    this.workForm = {
      date: new Date().toISOString().split('T')[0],
      project: 'HRM Portal - Fullstack Development',
      accomplishments: '',
      inProgress: '',
      blockers: '',
      tomorrowPlan: '',
      hoursSpent: 8
    };
    this.projects = ['HRM Portal - Fullstack Development', 'Mobile Application Development', 'Backend Cloud Infrastructure & API', 'UI/UX Redesign & Optimization', 'Database Maintenance & Auditing'];
    this.screenshotFile = null;
    this.videoFile = null;
    this.previewMedia = null;
    this.pastUpdates = [];
    this.showToast = false;
    this.toastMsg = '';
  }
  ngOnInit() {
    this.loadHistory();
  }
  loadHistory() {
    this.workUpdateService.getMine().subscribe({
      next: updates => {
        this.pastUpdates = (updates || []).map(u => this.mapToItem(u));
      },
      error: () => {
        this.pastUpdates = [];
      }
    });
  }
  mapToItem(u) {
    const formattedDate = new Date(u.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    return {
      id: u.id,
      date: formattedDate,
      project: u.tasksCompleted?.length ? u.tasksCompleted[0] : 'Daily Work Update',
      accomplishments: (u.tasksCompleted || []).join(', '),
      inProgress: u.workSummary || '',
      blockers: u.issuesBlockers || 'None',
      tomorrowPlan: '—',
      hours: u.hoursWorked || 0,
      status: u.status.charAt(0) + u.status.slice(1).toLowerCase(),
      screenshot: null,
      video: null
    };
  }
  onScreenshotSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.screenshotFile = {
          name: file.name,
          url: e.target.result
        };
        this.triggerToast('Work screenshot attached!');
      };
      reader.readAsDataURL(file);
    }
  }
  onVideoSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      const url = URL.createObjectURL(file);
      this.videoFile = {
        name: file.name,
        size: `${sizeMb} MB`,
        url: url
      };
      this.triggerToast('Video demo recording attached!');
    }
  }
  removeScreenshot() {
    this.screenshotFile = null;
  }
  removeVideo() {
    this.videoFile = null;
  }
  openMediaPreview(type, url, title) {
    this.previewMedia = {
      type,
      url,
      title
    };
  }
  closeMediaPreview() {
    this.previewMedia = null;
  }
  submitUpdate() {
    if (!this.workForm.accomplishments.trim()) {
      this.triggerToast('Please enter today\'s accomplishments.');
      return;
    }
    const payload = {
      tasksCompleted: this.workForm.accomplishments.split('\n').filter(t => t.trim()),
      workSummary: this.workForm.inProgress,
      issuesBlockers: this.workForm.blockers,
      hoursWorked: this.workForm.hoursSpent
    };
    this.workUpdateService.submit(payload).subscribe({
      next: created => {
        this.pastUpdates.unshift(this.mapToItem(created));
        this.workForm.accomplishments = '';
        this.workForm.inProgress = '';
        this.workForm.blockers = '';
        this.workForm.tomorrowPlan = '';
        this.screenshotFile = null;
        this.videoFile = null;
        this.toast.success('Daily work update submitted successfully!');
      },
      error: err => {
        const msg = err?.error?.message || err?.message || 'Failed to submit work update.';
        this.toast.error(msg);
      }
    });
  }
  deleteUpdate(item) {
    this.workUpdateService.delete(item.id).subscribe({
      next: () => {
        this.pastUpdates = this.pastUpdates.filter(u => u.id !== item.id);
        this.toast.success('Work update deleted.');
      },
      error: err => {
        const msg = err?.error?.message || err?.message || 'Failed to delete work update.';
        this.toast.error(msg);
      }
    });
  }
  triggerToast(msg) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
  static {
    this.ɵfac = function EmpDailyWorkUpdateComponent_Factory(t) {
      return new (t || EmpDailyWorkUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.WorkUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpDailyWorkUpdateComponent,
      selectors: [["app-emp-daily-work-update"]],
      decls: 93,
      vars: 23,
      consts: [["title", "Daily Work Update", "subtitle", "Submit your daily tasks, progress report, screenshot proof, and video demo", 3, "breadcrumbs"], [1, "work-update-container"], [1, "stats-overview-row"], [1, "stat-card-item"], [1, "stat-icon-box", "box-blue"], [1, "fas", "fa-file-invoice"], [1, "stat-details"], [1, "stat-icon-box", "box-green"], [1, "fas", "fa-check-circle"], [1, "stat-icon-box", "box-purple"], [1, "fas", "fa-video"], [1, "form-card"], [1, "card-header"], [1, "fas", "fa-edit", "text-blue"], [1, "form-body"], [1, "form-row-3"], [1, "form-group"], ["type", "date", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-input", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "1", "max", "16", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "required"], ["rows", "3", "placeholder", "Describe key deliverables and code completed today...", 1, "form-textarea", 3, "ngModel", "ngModelChange"], ["rows", "2", "placeholder", "List tasks currently in development or code review...", 1, "form-textarea", 3, "ngModel", "ngModelChange"], [1, "form-row-2"], ["rows", "2", "placeholder", "Any dependencies or bugs blocking progress...", 1, "form-textarea", 3, "ngModel", "ngModelChange"], ["rows", "2", "placeholder", "Key goals planned for tomorrow...", 1, "form-textarea", 3, "ngModel", "ngModelChange"], [1, "attachments-section"], [1, "attachments-label"], [1, "fas", "fa-paperclip", "text-blue"], [1, "upload-dropzones-grid"], ["class", "upload-box", 4, "ngIf", "ngIfElse"], ["screenshotPreviewBox", ""], ["videoPreviewBox", ""], [1, "form-actions"], [1, "btn-submit", 3, "click"], [1, "fas", "fa-paper-plane"], [1, "history-card"], [1, "fas", "fa-history", "text-blue"], [1, "logs-list"], ["class", "log-item", 4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "toast-notification"], [3, "value"], [1, "upload-box"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["imgInput", ""], [1, "upload-content", 3, "click"], [1, "upload-icon-circle", "icon-blue"], [1, "fas", "fa-camera"], [1, "upload-text"], [1, "preview-box"], ["alt", "Work Screenshot", 1, "preview-img", 3, "src"], [1, "preview-info"], [1, "file-name"], [1, "file-tag"], ["title", "Remove file", 1, "remove-file-btn", 3, "click"], [1, "fas", "fa-times"], ["type", "file", "accept", "video/*,.mp4,.webm", 2, "display", "none", 3, "change"], ["videoInput", ""], [1, "upload-icon-circle", "icon-purple"], [1, "preview-box", "video-preview-box"], [1, "video-icon-badge"], [1, "fas", "fa-film"], [1, "file-tag", "tag-purple"], [1, "log-item"], [1, "log-top"], [1, "log-date"], [1, "far", "fa-calendar-alt", "text-blue"], [1, "project-pill"], [1, "log-badges"], [1, "hours-tag"], [1, "far", "fa-clock"], [1, "status-tag"], ["title", "Delete Update", 1, "btn-delete-update", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "log-content"], [1, "content-block"], ["class", "content-block", 4, "ngIf"], ["class", "media-proof-row", 4, "ngIf"], [1, "text-danger"], [1, "media-proof-row"], [1, "proof-title"], [1, "fas", "fa-paperclip"], [1, "proof-attachments"], ["class", "media-chip chip-img", 3, "click", 4, "ngIf"], ["class", "media-chip chip-video", 3, "click", 4, "ngIf"], [1, "media-chip", "chip-img", 3, "click"], [1, "fas", "fa-image", "text-blue"], [1, "badge-tag-view"], [1, "media-chip", "chip-video", 3, "click"], [1, "fas", "fa-play-circle", "text-purple"], [1, "badge-tag-play"], [1, "modal-backdrop"], [1, "media-modal-card"], [1, "media-modal-header"], [1, "close-btn", 3, "click"], [1, "media-modal-body"], ["alt", "Work Screenshot Preview", "class", "lightbox-img", 3, "src", 4, "ngIf"], ["controls", "", "autoplay", "", "class", "lightbox-video", 3, "src", 4, "ngIf"], ["alt", "Work Screenshot Preview", 1, "lightbox-img", 3, "src"], ["controls", "", "autoplay", "", 1, "lightbox-video", 3, "src"]],
      template: function EmpDailyWorkUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "24");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Reports Submitted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3)(12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "98%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Approval Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3)(20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6)(23, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "18 Media");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Screenshots & Demos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Submit Today's Work Report");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14)(33, "div", 15)(34, "div", 16)(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.workForm.date = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16)(39, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Project / Module");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_select_ngModelChange_41_listener($event) {
            return ctx.workForm.project = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, EmpDailyWorkUpdateComponent_option_42_Template, 2, 2, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 16)(44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Working Hours Spent");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.workForm.hoursSpent = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16)(48, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Today's Accomplishments ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "textarea", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_textarea_ngModelChange_52_listener($event) {
            return ctx.workForm.accomplishments = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 16)(54, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Tasks In-Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "textarea", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_textarea_ngModelChange_56_listener($event) {
            return ctx.workForm.inProgress = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 24)(58, "div", 16)(59, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Blockers / Challenges (if any)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "textarea", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_textarea_ngModelChange_61_listener($event) {
            return ctx.workForm.blockers = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 16)(63, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Tomorrow's Planned Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "textarea", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpDailyWorkUpdateComponent_Template_textarea_ngModelChange_65_listener($event) {
            return ctx.workForm.tomorrowPlan = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 27)(67, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Attach Work Proof (Screenshot & Video Demo) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, EmpDailyWorkUpdateComponent_div_71_Template, 11, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, EmpDailyWorkUpdateComponent_ng_template_72_Template, 9, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, EmpDailyWorkUpdateComponent_div_74_Template, 11, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, EmpDailyWorkUpdateComponent_ng_template_75_Template, 10, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 34)(78, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpDailyWorkUpdateComponent_Template_button_click_78_listener() {
            return ctx.submitUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Submit Work Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 37)(82, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Submitted Daily Work Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, EmpDailyWorkUpdateComponent_div_87_Template, 25, 10, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, EmpDailyWorkUpdateComponent_div_88_Template, 11, 3, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](73);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.project);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.hoursSpent);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.accomplishments);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.inProgress);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.blockers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.workForm.tomorrowPlan);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.screenshotFile)("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.videoFile)("ngIfElse", _r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pastUpdates);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previewMedia);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.work-update-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.stats-overview-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.stat-card-item[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.stat-icon-box[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.stat-icon-box.box-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n}\n.stat-icon-box.box-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-icon-box.box-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n\n.stat-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 2px;\n}\n.stat-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin: 0;\n}\n\n.form-card[_ngcontent-%COMP%], .history-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 24px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #f8fafc;\n  padding-bottom: 12px;\n}\n.card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n.text-purple[_ngcontent-%COMP%] {\n  color: #9333ea;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.form-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-row-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 1fr;\n  gap: 16px;\n}\n\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n}\n\n.form-input[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  font-size: 14px;\n  color: #0f172a;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n\n\n\n.attachments-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.attachments-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.upload-dropzones-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n\n.upload-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px dashed #cbd5e1;\n  border-radius: 14px;\n  padding: 18px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n  background: #eff6ff;\n  transform: translateY(-2px);\n}\n\n.upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.upload-icon-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.upload-icon-circle.icon-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n}\n.upload-icon-circle.icon-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n\n.upload-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.upload-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.upload-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n}\n\n.preview-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n}\n.preview-box[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #e2e8f0;\n}\n.preview-box[_ngcontent-%COMP%]   .video-icon-badge[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  background: #f3e8ff;\n  color: #9333ea;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.preview-box[_ngcontent-%COMP%]   .preview-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.preview-box[_ngcontent-%COMP%]   .preview-info[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.preview-box[_ngcontent-%COMP%]   .preview-info[_ngcontent-%COMP%]   .file-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #0066ff;\n}\n.preview-box[_ngcontent-%COMP%]   .preview-info[_ngcontent-%COMP%]   .file-tag.tag-purple[_ngcontent-%COMP%] {\n  color: #9333ea;\n}\n.preview-box[_ngcontent-%COMP%]   .remove-file-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  font-size: 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.preview-box[_ngcontent-%COMP%]   .remove-file-btn[_ngcontent-%COMP%]:hover {\n  background: #fca5a5;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 13px 28px;\n  border-radius: 50px;\n  border: none;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 14.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 4px 14px rgba(0, 102, 255, 0.3);\n  transition: all 0.2s ease;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 102, 255, 0.4);\n}\n\n\n\n.logs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.log-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n}\n\n.log-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.log-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 14px;\n}\n.log-date[_ngcontent-%COMP%]   .project-pill[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  font-size: 11.5px;\n  font-weight: 600;\n  padding: 3px 12px;\n  border-radius: 20px;\n}\n\n.log-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn-delete-update[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #fecaca;\n  background: #fef2f2;\n  color: #dc2626;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.btn-delete-update[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n\n.hours-tag[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n.status-tag[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.status-tag.approved[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n\n.log-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.content-block[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  display: block;\n  margin-bottom: 2px;\n}\n.content-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #1e293b;\n  margin: 0;\n  line-height: 1.5;\n}\n\n\n\n.media-proof-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 12px;\n  border-top: 1px dashed #cbd5e1;\n}\n\n.proof-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #0f172a;\n  display: block;\n  margin-bottom: 8px;\n}\n\n.proof-attachments[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.media-chip[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.media-chip[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.media-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.media-chip[_ngcontent-%COMP%]   .badge-tag-view[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-left: 4px;\n}\n.media-chip[_ngcontent-%COMP%]   .badge-tag-play[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-left: 4px;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.65);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 20px;\n}\n\n.media-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 800px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_modalPop 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalPop {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.media-modal-header[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.media-modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.media-modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 18px;\n  color: #64748b;\n  cursor: pointer;\n}\n.media-modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.media-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0f172a;\n  max-height: 75vh;\n  overflow: hidden;\n}\n\n.lightbox-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 65vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n\n.lightbox-video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 65vh;\n  border-radius: 8px;\n  outline: none;\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 20000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n@media (max-width: 768px) {\n  .stats-overview-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row-3[_ngcontent-%COMP%], .form-row-2[_ngcontent-%COMP%], .upload-dropzones-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9kYWlseS13b3JrLXVwZGF0ZS9kYWlseS13b3JrLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrR0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQWEsbUJBQUE7RUFBcUIsY0FBQTtBQUdwQztBQUZFO0VBQWMsbUJBQUE7RUFBcUIsY0FBQTtBQU1yQztBQUxFO0VBQWUsbUJBQUE7RUFBcUIsY0FBQTtBQVN0Qzs7QUFMRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUUo7QUFORTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBUUo7O0FBSkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUFPRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFPRjtBQUxFO0VBQ0UsZUFBQTtBQU9KO0FBSkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Es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RW5CO0VBREE7SUFBSyxVQUFBO0lBQVksbUJBQUE7RUFLakI7QUFDRjtBQUhBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBS0Y7QUFIRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBS0o7QUFGRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlKO0FBRkk7RUFBVSxjQUFBO0FBS2Q7O0FBREE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUlGOztBQURBLHVCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7RUFDQSxjQUFBO0FBSUY7QUFGRTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQUlKO0FBREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUNBO0VBQ0U7SUFDRSwwQkFBQTtFQUVGO0VBQ0E7SUFDRSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLndvcmstdXBkYXRlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLyogU3RhdHMgT3ZlcnZpZXcgUm93ICovXHJcbi5zdGF0cy1vdmVydmlldy1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLnN0YXQtaWNvbi1ib3gge1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYuYm94LWJsdWUgeyBiYWNrZ3JvdW5kOiAjZWZmNmZmOyBjb2xvcjogIzAwNjZmZjsgfVxyXG4gICYuYm94LWdyZWVuIHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAmLmJveC1wdXJwbGUgeyBiYWNrZ3JvdW5kOiAjZjNlOGZmOyBjb2xvcjogIzkzMzNlYTsgfVxyXG59XHJcblxyXG4uc3RhdC1kZXRhaWxzIHtcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDAgMCAycHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY2FyZCwgLmhpc3RvcnktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmYWZjO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUgeyBjb2xvcjogIzAwNjZmZjsgfVxyXG4udGV4dC1wdXJwbGUgeyBjb2xvcjogIzkzMzNlYTsgfVxyXG4udGV4dC1kYW5nZXIgeyBjb2xvcjogI2VmNDQ0NDsgfVxyXG4ucmVxdWlyZWQgeyBjb2xvcjogI2VmNDQ0NDsgfVxyXG5cclxuLmZvcm0tYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmZvcm0tcm93LTMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMWZyO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmZvcm0tcm93LTIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0taW5wdXQsIC5mb3JtLXRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAxMXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNjZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjEpO1xyXG4gIH1cclxufVxyXG5cclxuLyogQXR0YWNobWVudHMgRHJvcHpvbmUgU2VjdGlvbiAqL1xyXG4uYXR0YWNobWVudHMtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uYXR0YWNobWVudHMtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4udXBsb2FkLWRyb3B6b25lcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi51cGxvYWQtYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDY2ZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIH1cclxufVxyXG5cclxuLnVwbG9hZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4udXBsb2FkLWljb24tY2lyY2xlIHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAmLmljb24tYmx1ZSB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGNvbG9yOiAjMDA2NmZmOyB9XHJcbiAgJi5pY29uLXB1cnBsZSB7IGJhY2tncm91bmQ6ICNmM2U4ZmY7IGNvbG9yOiAjOTMzM2VhOyB9XHJcbn1cclxuXHJcbi51cGxvYWQtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJldmlldy1ib3gge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnByZXZpZXctaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvLWljb24tYmFkZ2Uge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZThmZjtcclxuICAgIGNvbG9yOiAjOTMzM2VhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWluZm8ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5maWxlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS10YWcge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjMDA2NmZmO1xyXG5cclxuICAgICAgJi50YWctcHVycGxlIHsgY29sb3I6ICM5MzMzZWE7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZW1vdmUtZmlsZS1idG4ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmNhNWE1O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXQge1xyXG4gIHBhZGRpbmc6IDEzcHggMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxNC41cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjQpO1xyXG4gIH1cclxufVxyXG5cclxuLyogSGlzdG9yeSBMb2dzIFN0eWxpbmcgKi9cclxuLmxvZ3MtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmxvZy1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubG9nLXRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2ctZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgLnByb2plY3QtcGlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvZy1iYWRnZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlLXVwZGF0ZSB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xyXG4gIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgY29sb3I6ICNkYzI2MjY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y4NzE3MTtcclxuICB9XHJcbn1cclxuXHJcbi5ob3Vycy10YWcge1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgY29sb3I6ICMwMDY2ZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnN0YXR1cy10YWcge1xyXG4gIGJhY2tncm91bmQ6ICNmZWYzYzc7XHJcbiAgY29sb3I6ICNkOTc3MDY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgJi5hcHByb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xyXG4gICAgY29sb3I6ICMxNmEzNGE7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2NrIHtcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhIFByb29mIFJvdyAmIENoaXBzICovXHJcbi5tZWRpYS1wcm9vZi1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjY2JkNWUxO1xyXG59XHJcblxyXG4ucHJvb2YtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ucHJvb2YtYXR0YWNobWVudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubWVkaWEtY2hpcCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNjZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlLXRhZy12aWV3IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICBjb2xvcjogIzAwNjZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC5iYWRnZS10YWctcGxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNlOGZmO1xyXG4gICAgY29sb3I6ICM5MzMzZWE7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMaWdodGJveCBNb2RhbCAqL1xyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjY1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1lZGlhLW1vZGFsLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBhbmltYXRpb246IG1vZGFsUG9wIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxQb3Age1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbn1cclxuXHJcbi5tZWRpYS1tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7IGNvbG9yOiAjMGYxNzJhOyB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVkaWEtbW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saWdodGJveC1pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGlnaHRib3gtdmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDY1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFRvYXN0IE5vdGlmaWNhdGlvbiAqL1xyXG4udG9hc3Qtbm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyNHB4O1xyXG4gIHJpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB6LWluZGV4OiAyMDAwMDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnN0YXRzLW92ZXJ2aWV3LXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLXJvdy0zLCAuZm9ybS1yb3ctMiwgLnVwbG9hZC1kcm9wem9uZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4735:
/*!*******************************************************************!*\
  !*** ./src/app/modules/employee/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpDashboardComponent: () => (/* binding */ EmpDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




function EmpDashboardComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 80)(5, "h4", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 85)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" In: ", item_r1.inTime, " \u2022 Out: ", item_r1.outTime, " \u2022 Net: ", item_r1.netHours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pill-" + item_r1.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.statusBadge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.onTimeStatus);
  }
}
class EmpDashboardComponent {
  constructor(authService, attendanceService, toast) {
    this.authService = authService;
    this.attendanceService = attendanceService;
    this.toast = toast;
    this.currentUser = null;
    this.currentTimeString = '';
    this.currentAmpm = 'PM';
    this.currentDateString = '';
    this.isClockedIn = false;
    this.attendanceScore = {
      streak: '0 Day',
      percentage: '0%',
      points: 0
    };
    this.overviewStats = {
      presentDays: 0,
      totalDays: 0,
      attendanceRate: '0%',
      loggedHours: '0h logged',
      absentLeaves: 0,
      lateClockIns: 0
    };
    this.activityLogs = [];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
    this.loadData();
  }
  ngOnDestroy() {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
  }
  loadData() {
    const employeeId = this.authService.currentUser?.employeeId;
    this.attendanceService.getToday().subscribe({
      next: record => {
        this.isClockedIn = !!record && !!record.checkIn && !record.checkOut;
      },
      error: () => {
        this.isClockedIn = false;
      }
    });
    if (employeeId) {
      const now = new Date();
      const startDate = this.monthStartKey(now);
      const endDate = this.dateKey(now);
      this.attendanceService.getByEmployee(employeeId, startDate, endDate).subscribe({
        next: records => this.applyRecords(records || []),
        error: () => this.applyRecords([])
      });
    }
  }
  applyRecords(records) {
    let present = 0,
      absent = 0,
      late = 0,
      leave = 0,
      hours = 0;
    records.forEach(r => {
      hours += Number(r.workHours) || 0;
      const s = String(r.status || '').toUpperCase();
      if (s === 'LATE') {
        late++;
        present++;
      } else if (s === 'PRESENT' || s === 'HALF_DAY') {
        present++;
      } else if (s === 'ABSENT') {
        absent++;
      } else if (s === 'ON_LEAVE') {
        leave++;
      }
    });
    const total = present + absent + leave;
    const rate = total ? Math.round(present / Math.max(1, total) * 100) : 0;
    this.overviewStats = {
      presentDays: present,
      totalDays: total,
      attendanceRate: rate + '%',
      loggedHours: `${hours.toFixed(1)}h logged`,
      absentLeaves: absent + leave,
      lateClockIns: late
    };
    this.attendanceScore = {
      streak: `${Math.min(2, Math.max(1, present))} Day`,
      percentage: rate + '%',
      points: present * 50
    };
    this.activityLogs = [...records].sort((a, b) => String(b.date || '').localeCompare(String(a.date || ''))).map(r => {
      const s = String(r.status || '').toUpperCase();
      return {
        id: r.id,
        date: this.formatFullDate(r.date),
        inTime: this.formatTime(r.checkIn),
        outTime: r.checkOut ? this.formatTime(r.checkOut) : '--',
        netHours: this.formatHours(r.workHours),
        statusBadge: s === 'PRESENT' ? 'Approved' : s === 'LATE' ? 'Late' : s.charAt(0) + s.slice(1).toLowerCase(),
        badgeType: s === 'LATE' ? 'warning' : 'success',
        onTimeStatus: s === 'LATE' ? 'Late' : 'On Time',
        avatar: 'assets/images/user-avatar.png'
      };
    });
  }
  formatFullDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  formatTime(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  formatHours(value) {
    const total = Math.round((Number(value) || 0) * 60);
    const h = Math.floor(total / 60);
    const m = total % 60;
    return `${h}h ${m}m`;
  }
  monthStartKey(d) {
    return this.dateKey(new Date(d.getFullYear(), d.getMonth(), 1));
  }
  dateKey(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.currentAmpm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, '0');
    this.currentTimeString = `${formattedHours}:${minutes}:${seconds}`;
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    this.currentDateString = now.toLocaleDateString('en-US', options);
  }
  toggleClockIn() {
    if (this.isClockedIn) {
      this.attendanceService.checkOut({}).subscribe({
        next: () => {
          this.isClockedIn = false;
          this.toast.success('Checked out successfully!');
          this.loadData();
        },
        error: () => this.toast.error('Check-out failed.')
      });
    } else {
      this.attendanceService.checkIn({}).subscribe({
        next: () => {
          this.isClockedIn = true;
          this.toast.success('Checked in successfully!');
          this.loadData();
        },
        error: () => this.toast.error('Check-in failed.')
      });
    }
  }
  static {
    this.ɵfac = function EmpDashboardComponent_Factory(t) {
      return new (t || EmpDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmpDashboardComponent,
      selectors: [["app-emp-dashboard"]],
      decls: 146,
      vars: 23,
      consts: [[1, "emp-dashboard-container"], [1, "profile-header-bar"], [1, "profile-avatar"], [1, "avatar-img-box"], [1, "fas", "fa-user-circle"], [1, "profile-info"], [1, "welcome-text"], [1, "user-full-name"], [1, "user-meta-line"], [1, "clock-banner-card"], [1, "clock-icon-badge"], [1, "fas", "fa-clock"], [1, "clock-details"], [1, "clock-time-row"], [1, "time-digits"], [1, "ampm-badge"], [1, "clock-date-row"], [1, "far", "fa-calendar-alt"], [1, "clock-bg-watermark"], [1, "far", "fa-clock"], [1, "shift-status-card"], [1, "shift-info-row"], [1, "shift-icon-box"], [1, "fas", "fa-hand-pointer"], [1, "shift-text"], [1, "shift-title"], [1, "shift-sub"], ["type", "button", 1, "btn-clock-in", 3, "click"], [1, "fas", "fa-camera"], [1, "attendance-score-card"], [1, "score-header"], [1, "fas", "fa-trophy", "trophy-icon"], [1, "score-metrics-grid"], [1, "metric-col"], [1, "metric-val"], [1, "emoji"], [1, "metric-lbl"], [1, "metric-divider"], [1, "quick-actions-row"], ["routerLink", "/apply-leave", 1, "btn-quick-outline"], [1, "fas", "fa-umbrella"], ["type", "button", 1, "btn-quick-outline"], [1, "far", "fa-calendar-check"], [1, "work-report-card"], [1, "report-header"], [1, "report-icon-box"], [1, "fas", "fa-clipboard-list"], [1, "report-text"], [1, "report-title-row"], [1, "report-title"], [1, "assigned-tag"], [1, "report-sub"], ["type", "button", 1, "btn-submit-report"], [1, "fas", "fa-file-signature"], [1, "overview-section"], [1, "overview-section-header"], ["routerLink", "/my-attendance", 1, "link-my-attendance"], [1, "overview-grid"], [1, "overview-card"], [1, "card-top-row"], [1, "badge-icon", "badge-green"], [1, "fas", "fa-check"], [1, "top-tag", "green-tag"], [1, "card-value"], [1, "card-label"], [1, "badge-icon", "badge-blue"], [1, "top-tag", "blue-tag"], [1, "badge-icon", "badge-red"], [1, "fas", "fa-calendar-times"], [1, "top-tag", "red-tag"], [1, "badge-icon", "badge-orange"], [1, "fas", "fa-stopwatch"], [1, "top-tag", "orange-tag"], [1, "activity-log-section"], [1, "log-section-title"], [1, "log-list"], ["class", "log-item-card", 4, "ngFor", "ngForOf"], [1, "log-item-card"], [1, "log-user-avatar"], [1, "avatar-initials"], [1, "log-details"], [1, "log-date"], [1, "log-meta"], [1, "status-pill"], [1, "fas", "fa-check-circle"], [1, "log-ontime-status"], [1, "dot-green"]],
      template: function EmpDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Welcome back,");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "div", 21)(29, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24)(32, "h3", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpDashboardComponent_Template_button_click_36_listener() {
            return ctx.toggleClockIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29)(41, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Attendance Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 32)(46, "div", 33)(47, "div", 34)(48, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\uD83D\uDD25");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Streak");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 33)(55, "div", 34)(56, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\uD83D\uDCC5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 33)(63, "div", 34)(64, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u2B50");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Points");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 38)(70, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Apply Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Regularize");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 43)(79, "div", 44)(80, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 47)(83, "div", 48)(84, "h3", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Daily Project Work Report");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Assigned: Etaprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Log your completed tasks, hours spent, and attach screenshot or video verification for manager review.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "SUBMIT TODAY'S WORK REPORT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 54)(95, "div", 55)(96, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "30-Day Attendance Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "My Attendance >");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 57)(101, "div", 58)(102, "div", 59)(103, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Present Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 58)(112, "div", 59)(113, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Attendance Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 58)(122, "div", 59)(123, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "days off");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Absent / Leaves");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 58)(132, "div", 59)(133, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "after grace period");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Late Clock-Ins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 73)(142, "h3", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Recent Activity Log");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, EmpDashboardComponent_div_145_Template, 16, 8, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (ctx.currentUser == null ? null : ctx.currentUser.firstName) || "PRINCE", " ", (ctx.currentUser == null ? null : ctx.currentUser.lastName) || "VIDYARTHI", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", (ctx.currentUser == null ? null : ctx.currentUser.employeeId) || "EMP-1059", " \u2022 ", (ctx.currentUser == null ? null : ctx.currentUser.department) || "Engineering & Technology", " \u2022 ", (ctx.currentUser == null ? null : ctx.currentUser.designation) || "Backend & Cloud Infrastructure", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentTimeString || "10:39:44");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentAmpm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentDateString || "Thursday, 10 September 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isClockedIn ? "Shift In Progress" : "Shift Not Started");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isClockedIn ? "Your shift is currently active. Don't forget to clock out when finished." : "Ready to start your workday? Capture selfie inside office perimeter.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("clocked-in", ctx.isClockedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isClockedIn ? "CLOCK OUT (SELFIE VERIFICATION)" : "CLOCK IN (CAMERA SELFIE)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.attendanceScore.streak, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.attendanceScore.percentage, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.attendanceScore.points, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("of ", ctx.overviewStats.totalDays, " days");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.overviewStats.presentDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.overviewStats.loggedHours);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.overviewStats.attendanceRate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.overviewStats.absentLeaves);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.overviewStats.lateClockIns);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityLogs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".emp-dashboard-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0 0 32px;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-img-box[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #94a3b8;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 500;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-full-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 2px 0;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-meta-line[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1d64f2;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #1d64f2 0%, #1757db 100%);\n  border-radius: 20px;\n  padding: 24px 32px;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(29, 100, 242, 0.25);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-icon-badge[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-time-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-time-row[_ngcontent-%COMP%]   .time-digits[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  line-height: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-time-row[_ngcontent-%COMP%]   .ampm-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.25);\n  padding: 4px 10px;\n  border-radius: 8px;\n  margin-left: 12px;\n  text-transform: uppercase;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-date-row[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #e0f2fe;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-bg-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 140px;\n  color: rgba(255, 255, 255, 0.08);\n  pointer-events: none;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%]   .shift-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #eff6ff;\n  color: #1d64f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%]   .shift-text[_ngcontent-%COMP%]   .shift-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%]   .shift-text[_ngcontent-%COMP%]   .shift-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 14px;\n  background: #1d64f2;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(29, 100, 242, 0.35);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in[_ngcontent-%COMP%]:hover {\n  background: #1757db;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(29, 100, 242, 0.45);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in.clocked-in[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in.clocked-in[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1d64f2 0%, #1757db 100%);\n  border-radius: 20px;\n  padding: 24px 32px;\n  color: #ffffff;\n  box-shadow: 0 8px 24px rgba(29, 100, 242, 0.25);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-header[_ngcontent-%COMP%]   .trophy-icon[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-size: 18px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%]   .emoji[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #e0f2fe;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.25);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%]   .btn-quick-outline[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 2px solid #1d64f2;\n  border-radius: 14px;\n  background: #ffffff;\n  color: #1d64f2;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%]   .btn-quick-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(29, 100, 242, 0.15);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #e0f2fe;\n  color: #0284c7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-title-row[_ngcontent-%COMP%]   .report-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-title-row[_ngcontent-%COMP%]   .assigned-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #0284c7;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 6px 0 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .btn-submit-report[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 14px;\n  background: #1d64f2;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(29, 100, 242, 0.35);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .btn-submit-report[_ngcontent-%COMP%]:hover {\n  background: #1757db;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(29, 100, 242, 0.45);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%]   .link-my-attendance[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1d64f2;\n  text-decoration: none;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%]   .link-my-attendance[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 120px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-orange[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.green-tag[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.blue-tag[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.red-tag[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.orange-tag[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-top: 12px;\n  line-height: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 8px 0 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 18px 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: transform 0.2s ease;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-user-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: #334155;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .log-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .log-meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .status-pill.pill-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .status-pill.pill-primary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-ontime-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-ontime-status[_ngcontent-%COMP%]   .dot-green[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #22c55e;\n}\n@media (max-width: 640px) {\n  .emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHVGQUFBO0VBRUEsa0NBQUE7RUF3REEsc0NBQUE7RUE0RUEsaUNBQUE7RUErRUEsdUNBQUE7RUE0REEsaUNBQUE7RUE4QkEsc0NBQUE7RUFtRkEsMENBQUE7RUF1R0EsMkNBQUE7QUFoZUY7QUFORTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVFKO0FBTkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBQVFOO0FBTk07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVFSO0FBSkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFNTjtBQUpNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1SO0FBSE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFLUjtBQUZNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFJUjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFB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QUNFLDBCQUFBO0FBekNWO0FBNENRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTFDVjtBQTZDUTtFQUNFLE9BQUE7QUEzQ1Y7QUE2Q1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTNDWjtBQThDVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTVDWjtBQStDVTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTdDWjtBQStDWTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBN0NkO0FBZ0RZO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUE5Q2Q7QUFtRFE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWpEVjtBQW1EVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWpEWjtBQXdERTtFQUNFO0lBQ0UsMEJBQUE7RUF0REo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lbXAtZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxuICBwYWRkaW5nOiAwIDAgMzJweDtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcblxyXG4gIC8qIC0tLSAxLiBQUk9GSUxFIEhFQURFUiBCQVIgLS0tICovXHJcbiAgLnByb2ZpbGUtaGVhZGVyLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNTJweDtcclxuICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4gICAgICAuYXZhdGFyLWltZy1ib3gge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbmZvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC53ZWxjb21lLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci1mdWxsLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci1tZXRhLWxpbmUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMWQ2NGYyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDIuIFJFQUwtVElNRSBDTE9DSyBCQU5ORVIgLS0tICovXHJcbiAgLmNsb2NrLWJhbm5lci1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZDY0ZjIgMCUsICMxNzU3ZGIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjI1KTtcclxuXHJcbiAgICAuY2xvY2staWNvbi1iYWRnZSB7XHJcbiAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9jay1kZXRhaWxzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIC5jbG9jay10aW1lLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAudGltZS1kaWdpdHMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFtcG0tYmFkZ2Uge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbG9jay1kYXRlLXJvdyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICNlMGYyZmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jbG9jay1iZy13YXRlcm1hcmsge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gMy4gU0hJRlQgU1RBVFVTIENBUkQgLS0tICovXHJcbiAgLnNoaWZ0LXN0YXR1cy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAuc2hpZnQtaW5mby1yb3cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAxNnB4O1xyXG5cclxuICAgICAgLnNoaWZ0LWljb24tYm94IHtcclxuICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMWQ2NGYyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaGlmdC10ZXh0IHtcclxuICAgICAgICAuc2hpZnQtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNoaWZ0LXN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNsb2NrLWluIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgYmFja2dyb3VuZDogIzFkNjRmMjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjM1KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNzU3ZGI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgyOSwgMTAwLCAyNDIsIDAuNDUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNsb2NrZWQtaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjM1KTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDQuIEFUVEVOREFOQ0UgU0NPUkUgQkFOTkVSIC0tLSAqL1xyXG4gIC5hdHRlbmRhbmNlLXNjb3JlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFkNjRmMiAwJSwgIzE3NTdkYiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgyOSwgMTAwLCAyNDIsIDAuMjUpO1xyXG5cclxuICAgIC5zY29yZS1oZWFkZXIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG5cclxuICAgICAgLnRyb3BoeS1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2ZhY2MxNTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2NvcmUtbWV0cmljcy1ncmlkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAubWV0cmljLWNvbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5tZXRyaWMtdmFsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZ2FwOiA2cHg7XHJcblxyXG4gICAgICAgICAgLmVtb2ppIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1ldHJpYy1sYmwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICNlMGYyZmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1ldHJpYy1kaXZpZGVyIHtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gNS4gUVVJQ0sgQUNUSU9OUyBST1cgLS0tICovXHJcbiAgLnF1aWNrLWFjdGlvbnMtcm93IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDE2cHg7XHJcblxyXG4gICAgLmJ0bi1xdWljay1vdXRsaW5lIHtcclxuICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzFkNjRmMjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY29sb3I6ICMxZDY0ZjI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjE1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDYuIERBSUxZIFdPUksgUkVQT1JUIENBUkQgLS0tICovXHJcbiAgLndvcmstcmVwb3J0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgIC5yZXBvcnQtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAgIC5yZXBvcnQtaWNvbi1ib3gge1xyXG4gICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGYyZmU7XHJcbiAgICAgICAgY29sb3I6ICMwMjg0Yzc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlcG9ydC10ZXh0IHtcclxuICAgICAgICAucmVwb3J0LXRpdGxlLXJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAucmVwb3J0LXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hc3NpZ25lZC10YWcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDI4NGM3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlcG9ydC1zdWIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICBtYXJnaW46IDZweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1zdWJtaXQtcmVwb3J0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgYmFja2dyb3VuZDogIzFkNjRmMjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjM1KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNzU3ZGI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgyOSwgMTAwLCAyNDIsIDAuNDUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gNy4gMzAtREFZIEFUVEVOREFOQ0UgT1ZFUlZJRVcgLS0tICovXHJcbiAgLm92ZXJ2aWV3LXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE0cHg7XHJcblxyXG4gICAgLm92ZXJ2aWV3LXNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmstbXktYXR0ZW5kYW5jZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICMxZDY0ZjI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vdmVydmlldy1ncmlkIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgZ2FwOiAxNnB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vdmVydmlldy1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG5cclxuICAgICAgICAuY2FyZC10b3Atcm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgIC5iYWRnZS1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICAgICYuYmFkZ2UtZ3JlZW4geyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE2YTM0YTsgfVxyXG4gICAgICAgICAgICAmLmJhZGdlLWJsdWUgeyBiYWNrZ3JvdW5kOiAjZTBmMmZlOyBjb2xvcjogIzAyODRjNzsgfVxyXG4gICAgICAgICAgICAmLmJhZGdlLXJlZCB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgICAgICAgICAgICYuYmFkZ2Utb3JhbmdlIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNkOTc3MDY7IH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudG9wLXRhZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgICAgICYuZ3JlZW4tdGFnIHsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAgICAgICAgICAgJi5ibHVlLXRhZyB7IGNvbG9yOiAjMDI4NGM3OyB9XHJcbiAgICAgICAgICAgICYucmVkLXRhZyB7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgICAgICAgICAgICYub3JhbmdlLXRhZyB7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gOC4gUkVDRU5UIEFDVElWSVRZIExPRyBTRUNUSU9OIC0tLSAqL1xyXG4gIC5hY3Rpdml0eS1sb2ctc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTRweDtcclxuXHJcbiAgICAubG9nLXNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZy1saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgICAgLmxvZy1pdGVtLWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTZweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZy11c2VyLWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNjYmQ1ZTE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nLWRldGFpbHMge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgICAubG9nLWRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZy1tZXRhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdGF0dXMtcGlsbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgICAgICYucGlsbC1zdWNjZXNzIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMTU4MDNkO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucGlsbC1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMWQ0ZWQ4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2ctb250aW1lLXN0YXR1cyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG5cclxuICAgICAgICAgIC5kb3QtZ3JlZW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmM1NWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5xdWljay1hY3Rpb25zLXJvdyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1270:
/*!*************************************************************!*\
  !*** ./src/app/modules/employee/employee-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeRoutingModule: () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4735);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 7537);
/* harmony import */ var _my_attendance_my_attendance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-attendance/my-attendance.component */ 1435);
/* harmony import */ var _check_in_out_check_in_out_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-in-out/check-in-out.component */ 6143);
/* harmony import */ var _my_leave_my_leave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-leave/my-leave.component */ 9361);
/* harmony import */ var _apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-leave/apply-leave.component */ 2559);
/* harmony import */ var _my_payslips_my_payslips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-payslips/my-payslips.component */ 2679);
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ 2471);
/* harmony import */ var _my_performance_my_performance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-performance/my-performance.component */ 9267);
/* harmony import */ var _my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-documents/my-documents.component */ 2667);
/* harmony import */ var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./announcements/announcements.component */ 3039);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications/notifications.component */ 8931);
/* harmony import */ var _break_tracker_break_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./break-tracker/break-tracker.component */ 1007);
/* harmony import */ var _daily_work_update_daily_work_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./daily-work-update/daily-work-update.component */ 6095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7580);

















const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EmpDashboardComponent
}, {
  path: 'my-profile',
  component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__.EmpProfileComponent
}, {
  path: 'my-attendance',
  component: _my_attendance_my_attendance_component__WEBPACK_IMPORTED_MODULE_2__.EmpAttendanceComponent
}, {
  path: 'check-in-out',
  component: _check_in_out_check_in_out_component__WEBPACK_IMPORTED_MODULE_3__.EmpCheckInOutComponent
}, {
  path: 'break-tracker',
  component: _break_tracker_break_tracker_component__WEBPACK_IMPORTED_MODULE_12__.EmpBreakTrackerComponent
}, {
  path: 'daily-work-update',
  component: _daily_work_update_daily_work_update_component__WEBPACK_IMPORTED_MODULE_13__.EmpDailyWorkUpdateComponent
}, {
  path: 'my-leave',
  component: _my_leave_my_leave_component__WEBPACK_IMPORTED_MODULE_4__.EmpLeaveComponent
}, {
  path: 'apply-leave',
  component: _apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_5__.EmpApplyLeaveComponent
}, {
  path: 'my-payslips',
  component: _my_payslips_my_payslips_component__WEBPACK_IMPORTED_MODULE_6__.EmpPayslipsComponent
}, {
  path: 'my-tasks',
  component: _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_7__.EmpTasksComponent
}, {
  path: 'my-performance',
  component: _my_performance_my_performance_component__WEBPACK_IMPORTED_MODULE_8__.EmpPerformanceComponent
}, {
  path: 'my-documents',
  component: _my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_9__.EmpDocumentsComponent
}, {
  path: 'announcements',
  component: _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_10__.EmpAnnouncementsComponent
}, {
  path: 'notifications',
  component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.EmpNotificationsComponent
}];
class EmployeeRoutingModule {
  static {
    this.ɵfac = function EmployeeRoutingModule_Factory(t) {
      return new (t || EmployeeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: EmployeeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 1631:
/*!*****************************************************!*\
  !*** ./src/app/modules/employee/employee.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeModule: () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 1270);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4735);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 7537);
/* harmony import */ var _my_attendance_my_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-attendance/my-attendance.component */ 1435);
/* harmony import */ var _check_in_out_check_in_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-in-out/check-in-out.component */ 6143);
/* harmony import */ var _my_leave_my_leave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-leave/my-leave.component */ 9361);
/* harmony import */ var _apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apply-leave/apply-leave.component */ 2559);
/* harmony import */ var _my_payslips_my_payslips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-payslips/my-payslips.component */ 2679);
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ 2471);
/* harmony import */ var _my_performance_my_performance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-performance/my-performance.component */ 9267);
/* harmony import */ var _my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-documents/my-documents.component */ 2667);
/* harmony import */ var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./announcements/announcements.component */ 3039);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notifications/notifications.component */ 8931);
/* harmony import */ var _break_tracker_break_tracker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./break-tracker/break-tracker.component */ 1007);
/* harmony import */ var _daily_work_update_daily_work_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./daily-work-update/daily-work-update.component */ 6095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7580);



















class EmployeeModule {
  static {
    this.ɵfac = function EmployeeModule_Factory(t) {
      return new (t || EmployeeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](EmployeeModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.EmpDashboardComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__.EmpProfileComponent, _my_attendance_my_attendance_component__WEBPACK_IMPORTED_MODULE_4__.EmpAttendanceComponent, _check_in_out_check_in_out_component__WEBPACK_IMPORTED_MODULE_5__.EmpCheckInOutComponent, _my_leave_my_leave_component__WEBPACK_IMPORTED_MODULE_6__.EmpLeaveComponent, _apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_7__.EmpApplyLeaveComponent, _my_payslips_my_payslips_component__WEBPACK_IMPORTED_MODULE_8__.EmpPayslipsComponent, _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_9__.EmpTasksComponent, _my_performance_my_performance_component__WEBPACK_IMPORTED_MODULE_10__.EmpPerformanceComponent, _my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_11__.EmpDocumentsComponent, _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_12__.EmpAnnouncementsComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__.EmpNotificationsComponent, _break_tracker_break_tracker_component__WEBPACK_IMPORTED_MODULE_14__.EmpBreakTrackerComponent, _daily_work_update_daily_work_update_component__WEBPACK_IMPORTED_MODULE_15__.EmpDailyWorkUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 1435:
/*!***************************************************************************!*\
  !*** ./src/app/modules/employee/my-attendance/my-attendance.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpAttendanceComponent: () => (/* binding */ EmpAttendanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function EmpAttendanceComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](day_r3);
  }
}
function EmpAttendanceComponent_div_87_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cell_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("badge-" + cell_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cell_r4.badge, " ");
  }
}
function EmpAttendanceComponent_div_87_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmpAttendanceComponent_div_87_ng_container_1_div_3_Template, 2, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cell_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("today-ring", cell_r4.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cell_r4.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cell_r4.badge);
  }
}
function EmpAttendanceComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmpAttendanceComponent_div_87_ng_container_1_Template, 4, 4, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("empty-cell", !cell_r4.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cell_r4.day);
  }
}
function EmpAttendanceComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 69)(8, "div", 70)(9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "PV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 72)(12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Worked: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const log_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r9.dateFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("badge-" + log_r9.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r9.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Clock In: ", log_r9.clockIn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Clock Out: ", log_r9.clockOut, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r9.workedHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (Gross: ", log_r9.grossHours, ")");
  }
}
class EmpAttendanceComponent {
  constructor(authService, attendanceService, leaveService, toast) {
    this.authService = authService;
    this.attendanceService = attendanceService;
    this.leaveService = leaveService;
    this.toast = toast;
    this.currentUser = null;
    this.currentMonth = '';
    this.activeFilter = 'All';
    this.summaryStats = {
      attendanceRate: '0%',
      present: 0,
      absent: 0,
      late: 0,
      leave: 0,
      pending: 0,
      rejected: 0,
      totalWorkingDays: 0
    };
    this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.calendarGrid = [];
    this.historyLogs = [];
    this.attendanceRecords = [];
    this.leaveRequests = [];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.setCurrentMonth(new Date());
    this.loadData();
  }
  setCurrentMonth(d) {
    this.currentMonth = d.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
    this.summaryStats.totalWorkingDays = this.workingDaysInMonth(d);
  }
  loadData() {
    this.attendanceRecords = [];
    this.leaveRequests = [];
    const employeeId = this.authService.currentUser?.employeeId;
    if (!employeeId) {
      this.buildView();
      return;
    }
    const now = new Date();
    const startDate = this.monthStartKey(now);
    const endDate = this.dateKey(now);
    this.attendanceService.getByEmployee(employeeId, startDate, endDate).subscribe({
      next: records => {
        this.attendanceRecords = records || [];
        this.leaveService.getMyLeave().subscribe({
          next: leaves => {
            this.leaveRequests = leaves || [];
            this.buildView();
          },
          error: () => {
            this.leaveRequests = [];
            this.buildView();
          }
        });
      },
      error: () => {
        this.attendanceRecords = [];
        this.buildView();
      }
    });
  }
  buildView() {
    let present = 0,
      absent = 0,
      late = 0,
      leave = 0,
      hoursWorked = 0;
    this.attendanceRecords.forEach(r => {
      hoursWorked += Number(r.workHours) || 0;
      const s = String(r.status || '').toUpperCase();
      if (s === 'LATE') {
        late++;
        present++;
      } else if (s === 'PRESENT' || s === 'HALF_DAY' || r.checkIn && s === 'PRESENT') {
        present++;
      } else if (s === 'ABSENT') {
        absent++;
      } else if (s === 'ON_LEAVE') {
        leave++;
      }
    });
    let pendingLeave = 0,
      rejectedLeave = 0;
    this.leaveRequests.forEach(l => {
      const s = String(l.status || '').toUpperCase();
      if (s === 'PENDING') {
        pendingLeave++;
        leave += Number(l.totalDays) || 1;
      } else if (s === 'REJECTED') {
        rejectedLeave++;
      } else if (s === 'APPROVED') {
        leave += Number(l.totalDays) || 1;
      }
    });
    const totalWorkingDays = Math.max(1, this.summaryStats.totalWorkingDays);
    const rate = Math.round(present / totalWorkingDays * 1000) / 10;
    this.summaryStats = {
      attendanceRate: rate + '%',
      present,
      absent,
      late,
      leave,
      pending: pendingLeave,
      rejected: rejectedLeave,
      totalWorkingDays: this.summaryStats.totalWorkingDays
    };
    this.buildCalendar();
    this.buildHistory();
  }
  buildCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const grid = [];
    const first = new Date(year, month, 1);
    const offset = (first.getDay() + 6) % 7;
    for (let i = 0; i < offset; i++) {
      grid.push({
        day: null,
        badge: null,
        status: 'empty'
      });
    }
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = now.getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const key = this.dateKey(date);
      const rec = this.attendanceRecords.find(r => String(r.date || '').slice(0, 10) === key);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      let badge = null;
      let status = 'regular';
      if (isWeekend) {
        badge = 'WO';
        status = 'weekend';
      } else if (rec) {
        const s = String(rec.status || '').toUpperCase();
        if (s === 'PRESENT' || s === 'HALF_DAY') {
          badge = 'P';
          status = 'present';
        } else if (s === 'LATE') {
          badge = 'L';
          status = 'late';
        } else if (s === 'ABSENT') {
          badge = 'A';
          status = 'absent';
        } else if (s === 'ON_LEAVE') {
          badge = 'LV';
          status = 'leave';
        } else {
          badge = 'P';
          status = 'present';
        }
      }
      grid.push({
        day: d,
        badge,
        status,
        isToday: d === today
      });
    }
    while (grid.length % 7 !== 0) {
      grid.push({
        day: null,
        badge: null,
        status: 'empty'
      });
    }
    this.calendarGrid = grid;
  }
  buildHistory() {
    this.historyLogs = [...this.attendanceRecords].sort((a, b) => String(b.date || '').localeCompare(String(a.date || ''))).map(r => {
      const s = String(r.status || '').toUpperCase();
      return {
        dateFormatted: this.formatFullDate(r.date),
        clockIn: this.formatTime(r.checkIn),
        clockOut: r.checkOut ? this.formatTime(r.checkOut) : '--',
        workedHours: this.formatHours(r.workHours),
        grossHours: this.formatHours((Number(r.workHours) || 0) + (Number(r.overtime) || 0)),
        status: this.statusLabel(s),
        badgeClass: this.statusBadge(s),
        type: 'present'
      };
    });
  }
  statusLabel(s) {
    if (s === 'PRESENT') return 'Present';
    if (s === 'LATE') return 'Late';
    if (s === 'ABSENT') return 'Absent';
    if (s === 'ON_LEAVE') return 'Leave';
    return s.charAt(0) + s.slice(1).toLowerCase();
  }
  statusBadge(s) {
    if (s === 'LATE') return 'warning';
    if (s === 'ABSENT') return 'danger';
    if (s === 'ON_LEAVE') return 'info';
    if (s === 'PRESENT') return 'success';
    return 'primary';
  }
  workingDaysInMonth(d) {
    const year = d.getFullYear();
    const month = d.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let count = 0;
    for (let day = 1; day <= daysInMonth; day++) {
      const dow = new Date(year, month, day).getDay();
      if (dow !== 0 && dow !== 6) count++;
    }
    return count;
  }
  monthStartKey(d) {
    return this.dateKey(new Date(d.getFullYear(), d.getMonth(), 1));
  }
  dateKey(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  formatFullDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  formatTime(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  formatHours(value) {
    const total = Math.round((Number(value) || 0) * 60);
    const h = Math.floor(total / 60);
    const m = total % 60;
    return `${h}h ${m}m`;
  }
  setFilter(filterName) {
    this.activeFilter = filterName;
  }
  static {
    this.ɵfac = function EmpAttendanceComponent_Factory(t) {
      return new (t || EmpAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.LeaveService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmpAttendanceComponent,
      selectors: [["app-emp-attendance"]],
      decls: 118,
      vars: 24,
      consts: [[1, "my-attendance-container"], [1, "attendance-top-header"], [1, "header-titles"], [1, "user-pill-badge"], [1, "fas", "fa-user"], [1, "month-selector-bar"], ["type", "button", 1, "month-nav-btn"], [1, "fas", "fa-chevron-left"], [1, "month-label"], [1, "far", "fa-calendar-alt"], [1, "fas", "fa-caret-down", "caret-icon"], [1, "fas", "fa-chevron-right"], [1, "today-status-card"], [1, "status-left"], [1, "status-icon-badge"], [1, "far", "fa-clock"], [1, "status-text-content"], [1, "status-top-lbl"], [1, "status-title"], [1, "status-sub"], [1, "status-right-date"], [1, "monthly-summary-card"], [1, "summary-card-header"], [1, "attendance-rate-badge"], [1, "summary-grid"], [1, "summary-box", "box-green"], [1, "box-value"], [1, "box-label"], [1, "summary-box", "box-red"], [1, "summary-box", "box-yellow"], [1, "summary-box", "box-blue"], [1, "summary-box", "box-gold"], [1, "summary-box", "box-pink"], [1, "summary-card-footer"], [1, "footer-left"], [1, "fas", "fa-briefcase"], [1, "footer-right-val"], [1, "calendar-card"], [1, "card-title"], [1, "calendar-table"], [1, "calendar-week-header"], ["class", "day-head", 4, "ngFor", "ngForOf"], [1, "calendar-days-grid"], ["class", "cal-cell", 3, "empty-cell", 4, "ngFor", "ngForOf"], [1, "calendar-legend-bar"], [1, "legend-pill", "pill-present"], [1, "legend-pill", "pill-absent"], [1, "legend-pill", "pill-late"], [1, "legend-pill", "pill-leave"], [1, "legend-pill", "pill-pending"], [1, "legend-pill", "pill-rejected"], [1, "history-section"], [1, "history-title"], [1, "filter-pills-row"], ["type", "button", 1, "filter-pill", 3, "click"], [1, "fas", "fa-check"], [1, "history-cards-list"], ["class", "history-card-item", 4, "ngFor", "ngForOf"], [1, "day-head"], [1, "cal-cell"], [4, "ngIf"], [1, "day-number"], ["class", "badge-tag", 3, "class", 4, "ngIf"], [1, "badge-tag"], [1, "history-card-item"], [1, "history-card-header"], [1, "log-date-title"], [1, "log-approved-badge"], [1, "far", "fa-check-circle"], [1, "history-card-body"], [1, "user-avatar-circle"], [1, "avatar-initials"], [1, "log-time-details"], [1, "time-line", "line-in"], [1, "fas", "fa-sign-in-alt", "icon-in"], [1, "time-line", "line-out"], [1, "fas", "fa-sign-out-alt", "icon-out"], [1, "time-line", "line-worked"], [1, "far", "fa-clock", "icon-worked"]],
      template: function EmpAttendanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Personal Monthly Attendance & Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16)(26, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Today's Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Not Clocked In Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Office starts at 09:30 AM (15m grace period). Tap Clock-In to start shift.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20)(33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Thursday, 10 September 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21)(36, "div", 22)(37, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Present");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28)(48, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Absent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29)(53, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Late");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30)(58, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 31)(63, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 32)(68, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Rejected");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 33)(73, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Total Working Days (Mon-Fri):");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 36)(78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 37)(81, "h3", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Attendance Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 39)(84, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, EmpAttendanceComponent_div_85_Template, 2, 1, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, EmpAttendanceComponent_div_87_Template, 2, 3, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 44)(89, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "P = Present");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "A = Absent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "L = Late");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "LV = Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Pnd = Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Rjk = Rejected");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 51)(102, "h3", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Date-wise Attendance History");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 53)(105, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpAttendanceComponent_Template_button_click_105_listener() {
            return ctx.setFilter("All");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpAttendanceComponent_Template_button_click_108_listener() {
            return ctx.setFilter("Present");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Present ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpAttendanceComponent_Template_button_click_110_listener() {
            return ctx.setFilter("Late");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Late ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpAttendanceComponent_Template_button_click_112_listener() {
            return ctx.setFilter("Pending");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " Pending ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpAttendanceComponent_Template_button_click_114_listener() {
            return ctx.setFilter("Rejected");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Rejected ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, EmpAttendanceComponent_div_117_Template, 27, 8, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.firstName) + " " + (ctx.currentUser == null ? null : ctx.currentUser.lastName) || "PRINCE VIDYARTHI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentMonth);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.currentMonth, " Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.summaryStats.attendanceRate, " Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryStats.present);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryStats.absent);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryStats.late);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryStats.leave);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryStats.pending);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryStats.rejected);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.summaryStats.totalWorkingDays, " Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.calendarGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "Present");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "Late");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "Rejected");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.historyLogs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".my-attendance-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0 0 32px;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.my-attendance-container[_ngcontent-%COMP%]   .attendance-top-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .attendance-top-header[_ngcontent-%COMP%]   .header-titles[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .attendance-top-header[_ngcontent-%COMP%]   .header-titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 2px 0 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .attendance-top-header[_ngcontent-%COMP%]   .user-pill-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  color: #2563eb;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  border: 1px solid #dbeafe;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.my-attendance-container[_ngcontent-%COMP%]   .month-selector-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 14px 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .month-selector-bar[_ngcontent-%COMP%]   .month-nav-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .month-selector-bar[_ngcontent-%COMP%]   .month-nav-btn[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  background: #f1f5f9;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .month-selector-bar[_ngcontent-%COMP%]   .month-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  cursor: pointer;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .month-selector-bar[_ngcontent-%COMP%]   .month-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .month-selector-bar[_ngcontent-%COMP%]   .month-label[_ngcontent-%COMP%]   .caret-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 2px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 20px 24px;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%]   .status-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%]   .status-left[_ngcontent-%COMP%]   .status-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%]   .status-left[_ngcontent-%COMP%]   .status-text-content[_ngcontent-%COMP%]   .status-top-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%]   .status-left[_ngcontent-%COMP%]   .status-text-content[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #334155;\n  margin: 2px 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%]   .status-left[_ngcontent-%COMP%]   .status-text-content[_ngcontent-%COMP%]   .status-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .today-status-card[_ngcontent-%COMP%]   .status-right-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-card-header[_ngcontent-%COMP%]   .attendance-rate-badge[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n  border: 1px solid #fecaca;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 72px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-green[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%], .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-green[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-red[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-red[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%], .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-red[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-yellow[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fef3c7;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-yellow[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%], .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-yellow[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-blue[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-blue[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%], .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-blue[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-gold[_ngcontent-%COMP%] {\n  background: #fefce8;\n  border: 1px solid #fef08a;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-gold[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%], .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-gold[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  color: #ca8a04;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-pink[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-pink[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%], .my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box.box-pink[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box[_ngcontent-%COMP%]   .box-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  line-height: 1;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-box[_ngcontent-%COMP%]   .box-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 16px;\n  font-size: 13px;\n  color: #64748b;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-card-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #2563eb;\n  font-weight: 500;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .monthly-summary-card[_ngcontent-%COMP%]   .summary-card-footer[_ngcontent-%COMP%]   .footer-right-val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-week-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-week-header[_ngcontent-%COMP%]   .day-head[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 10px;\n  row-gap: 16px;\n  text-align: center;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 52px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell.empty-cell[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 4px;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .day-number.today-ring[_ngcontent-%COMP%] {\n  border: 2px solid #2563eb;\n  color: #2563eb;\n  font-weight: 800;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .badge-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .badge-tag.badge-present[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .badge-tag.badge-absent[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .badge-tag.badge-late[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-days-grid[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .badge-tag.badge-weekend[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 9px;\n  width: 24px;\n  border-radius: 4px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: #f8fafc;\n  padding: 10px 16px;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill.pill-present[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill.pill-absent[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill.pill-late[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill.pill-leave[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill.pill-pending[_ngcontent-%COMP%] {\n  background: #fefce8;\n  color: #ca8a04;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .calendar-legend-bar[_ngcontent-%COMP%]   .legend-pill.pill-rejected[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 8px 0 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .filter-pills-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .filter-pills-row[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .filter-pills-row[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .filter-pills-row[_ngcontent-%COMP%]   .filter-pill.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: transform 0.2s ease;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f8fafc;\n  padding-bottom: 12px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-header[_ngcontent-%COMP%]   .log-date-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-header[_ngcontent-%COMP%]   .log-approved-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-header[_ngcontent-%COMP%]   .log-approved-badge.badge-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-header[_ngcontent-%COMP%]   .log-approved-badge.badge-primary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .user-avatar-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: #334155;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .log-time-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .log-time-details[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .log-time-details[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .icon-in[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .log-time-details[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .icon-out[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .log-time-details[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .icon-worked[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.my-attendance-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]   .history-card-item[_ngcontent-%COMP%]   .history-card-body[_ngcontent-%COMP%]   .log-time-details[_ngcontent-%COMP%]   .time-line.line-worked[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 13.5px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS1hdHRlbmRhbmNlL215LWF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUZBQUE7RUFFQSw4QkFBQTtFQXFDQSw2Q0FBQTtFQStDQSwwQ0FBQTtFQTZEQSxvQ0FBQTtFQW1HQSx3Q0FBQTtFQXdIQSw0Q0FBQTtBQXZXRjtBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBS1I7QUFITTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUtSO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7QUFHTjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFOO0FBRU07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRk47QUFJTTtFQUNFLGNBQUE7QUFGUjtBQUtNO0VBQ0UsZUFBQTtFQUNB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QTtFQUNBLFNBQUE7QUFhVjtBQVhVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWFaO0FBVlU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBWVo7QUFWWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQVlkO0FBVmM7RUFBVyxjQUFBO0FBYXpCO0FBWmM7RUFBWSxjQUFBO0FBZTFCO0FBZGM7RUFBZSxjQUFBO0FBaUI3QjtBQWZjO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBaUJoQiIsInNvdXJjZXNDb250ZW50IjpbIi5teS1hdHRlbmRhbmNlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxuICBwYWRkaW5nOiAwIDAgMzJweDtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcblxyXG4gIC8qIC0tLSAxLiBUT1AgSEVBREVSIEJBUiAtLS0gKi9cclxuICAuYXR0ZW5kYW5jZS10b3AtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICAgIC5oZWFkZXItdGl0bGVzIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgICBtYXJnaW46IDJweCAwIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1waWxsLWJhZGdlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJlYWZlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSAyLiBNT05USCBTRUxFQ1RPUiBOQVZJR0FUSU9OIEJBUiAtLS0gKi9cclxuICAubW9udGgtc2VsZWN0b3ItYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAyNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5tb250aC1uYXYtYnRuIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbnRoLWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmV0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gMy4gVE9EQVknUyBTVEFUVVMgQkFOTkVSIENBUkQgLS0tICovXHJcbiAgLnRvZGF5LXN0YXR1cy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5zdGF0dXMtbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAgIC5zdGF0dXMtaWNvbi1iYWRnZSB7XHJcbiAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMtdGV4dC1jb250ZW50IHtcclxuICAgICAgICAuc3RhdHVzLXRvcC1sYmwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMtc3ViIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0dXMtcmlnaHQtZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gNC4gTU9OVEhMWSBTVU1NQVJZIENBUkQgLS0tICovXHJcbiAgLm1vbnRobHktc3VtbWFyeS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAuc3VtbWFyeS1jYXJkLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdHRlbmRhbmNlLXJhdGUtYmFkZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgICAgICAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1bW1hcnktZ3JpZCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgIGdhcDogMTRweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdW1tYXJ5LWJveCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3MnB4O1xyXG5cclxuICAgICAgICAmLmJveC1ncmVlbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7IC5ib3gtdmFsdWUsIC5ib3gtbGFiZWwgeyBjb2xvcjogIzE2YTM0YTsgfSB9XHJcbiAgICAgICAgJi5ib3gtcmVkIHsgYmFja2dyb3VuZDogI2ZlZjJmMjsgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTsgLmJveC12YWx1ZSwgLmJveC1sYWJlbCB7IGNvbG9yOiAjZGMyNjI2OyB9IH1cclxuICAgICAgICAmLmJveC15ZWxsb3cgeyBiYWNrZ3JvdW5kOiAjZmZmYmViOyBib3JkZXI6IDFweCBzb2xpZCAjZmVmM2M3OyAuYm94LXZhbHVlLCAuYm94LWxhYmVsIHsgY29sb3I6ICNkOTc3MDY7IH0gfVxyXG4gICAgICAgICYuYm94LWJsdWUgeyBiYWNrZ3JvdW5kOiAjZjBmOWZmOyBib3JkZXI6IDFweCBzb2xpZCAjYmFlNmZkOyAuYm94LXZhbHVlLCAuYm94LWxhYmVsIHsgY29sb3I6ICMwMjg0Yzc7IH0gfVxyXG4gICAgICAgICYuYm94LWdvbGQgeyBiYWNrZ3JvdW5kOiAjZmVmY2U4OyBib3JkZXI6IDFweCBzb2xpZCAjZmVmMDhhOyAuYm94LXZhbHVlLCAuYm94LWxhYmVsIHsgY29sb3I6ICNjYThhMDQ7IH0gfVxyXG4gICAgICAgICYuYm94LXBpbmsgeyBiYWNrZ3JvdW5kOiAjZmVmMmYyOyBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhOyAuYm94LXZhbHVlLCAuYm94LWxhYmVsIHsgY29sb3I6ICNkYzI2MjY7IH0gfVxyXG5cclxuICAgICAgICAuYm94LXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3gtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeS1jYXJkLWZvb3RlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG5cclxuICAgICAgLmZvb3Rlci1sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvb3Rlci1yaWdodC12YWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiAtLS0gNS4gQVRURU5EQU5DRSBDQUxFTkRBUiBDQVJEIC0tLSAqL1xyXG4gIC5jYWxlbmRhci1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItdGFibGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyLXdlZWstaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgICAuZGF5LWhlYWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyLWRheXMtZ3JpZCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgcm93LWdhcDogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLmNhbC1jZWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTJweDtcclxuXHJcbiAgICAgICAgJi5lbXB0eS1jZWxsIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXktbnVtYmVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAmLnRvZGF5LXJpbmcge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjU2M2ViO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWRnZS10YWcge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAmLmJhZGdlLXByZXNlbnQgeyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE2YTM0YTsgfVxyXG4gICAgICAgICAgJi5iYWRnZS1hYnNlbnQgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG4gICAgICAgICAgJi5iYWRnZS1sYXRlIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNkOTc3MDY7IH1cclxuICAgICAgICAgICYuYmFkZ2Utd2Vla2VuZCB7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDlweDsgd2lkdGg6IDI0cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci1sZWdlbmQtYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgICAgLmxlZ2VuZC1waWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgICAgICYucGlsbC1wcmVzZW50IHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAgICAgICAmLnBpbGwtYWJzZW50IHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICNkYzI2MjY7IH1cclxuICAgICAgICAmLnBpbGwtbGF0ZSB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgICAgICAgJi5waWxsLWxlYXZlIHsgYmFja2dyb3VuZDogI2UwZjJmZTsgY29sb3I6ICMwMjg0Yzc7IH1cclxuICAgICAgICAmLnBpbGwtcGVuZGluZyB7IGJhY2tncm91bmQ6ICNmZWZjZTg7IGNvbG9yOiAjY2E4YTA0OyB9XHJcbiAgICAgICAgJi5waWxsLXJlamVjdGVkIHsgYmFja2dyb3VuZDogI2ZlZjJmMjsgY29sb3I6ICNkYzI2MjY7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDYuIERBVEUtV0lTRSBBVFRFTkRBTkNFIEhJU1RPUlkgLS0tICovXHJcbiAgLmhpc3Rvcnktc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAuaGlzdG9yeS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLXBpbGxzLXJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAuZmlsdGVyLXBpbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpc3RvcnktY2FyZHMtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMTRweDtcclxuXHJcbiAgICAgIC5oaXN0b3J5LWNhcmQtaXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlzdG9yeS1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmYWZjO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcblxyXG4gICAgICAgICAgLmxvZy1kYXRlLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2ctYXBwcm92ZWQtYmFkZ2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgICAgICAmLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMxNmEzNGE7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5iYWRnZS1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaXN0b3J5LWNhcmQtYm9keSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAgICAgICAudXNlci1hdmF0YXItY2lyY2xlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2JkNWUxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZy10aW1lLWRldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDRweDtcclxuXHJcbiAgICAgICAgICAgIC50aW1lLWxpbmUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgIC5pY29uLWluIHsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAgICAgICAgICAgICAuaWNvbi1vdXQgeyBjb2xvcjogI2VmNDQ0NDsgfVxyXG4gICAgICAgICAgICAgIC5pY29uLXdvcmtlZCB7IGNvbG9yOiAjMjU2M2ViOyB9XHJcblxyXG4gICAgICAgICAgICAgICYubGluZS13b3JrZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2667:
/*!*************************************************************************!*\
  !*** ./src/app/modules/employee/my-documents/my-documents.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpDocumentsComponent: () => (/* binding */ EmpDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ 3787);






function EmpDocumentsComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 38)(3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 41)(6, "strong", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td")(14, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "app-status-badge", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td")(26, "div", 47)(27, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_tr_76_Template_button_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const d_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.downloadDocument(d_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_tr_76_Template_button_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const d_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.deleteDocument(d_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r0.getFileColor(d_r3.type))("color", ctx_r0.getFileColor(d_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-file-pdf", d_r3.type === "PDF")("fa-file-image", d_r3.type === "Image")("fa-file-word", d_r3.type === "Word")("fa-file-excel", d_r3.type === "Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r0.getCatBg(d_r3.category))("color", ctx_r0.getCatColor(d_r3.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", d_r3.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3.uploadedOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("expiring-warning", ctx_r0.isExpiringSoon(d_r3.expiry));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", d_r3.expiry || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", d_r3.status);
  }
}
function EmpDocumentsComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No documents match your filter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EmpDocumentsComponent_div_81_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Click or Drag File Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Supports PDF, DOC, DOCX, PNG, JPG up to 15MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EmpDocumentsComponent_div_81_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 81)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Change File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.selectedFile == null ? null : ctx_r10.selectedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r10.selectedFile == null ? null : ctx_r10.selectedFile.size, " \u2022 ", ctx_r10.selectedFile == null ? null : ctx_r10.selectedFile.type, "");
  }
}
function EmpDocumentsComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Upload New Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_div_81_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.closeUploadModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 59)(9, "div", 60)(10, "div", 61)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Select File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_div_81_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EmpDocumentsComponent_div_81_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EmpDocumentsComponent_div_81_div_18_Template, 6, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EmpDocumentsComponent_div_81_ng_template_19_Template, 9, 3, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 61)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Document Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpDocumentsComponent_div_81_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.newDoc.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 69)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpDocumentsComponent_div_81_Template_select_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.newDoc.category = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Employment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 69)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Expiry Date (if applicable)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpDocumentsComponent_div_81_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.newDoc.expiryDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 61)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpDocumentsComponent_div_81_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.newDoc.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 73)(46, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_div_81_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.closeUploadModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_div_81_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.saveDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Upload Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.selectedFile)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.newDoc.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.newDoc.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.newDoc.expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.newDoc.description);
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "My Documents"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpDocumentsComponent {
  constructor(documentService, toast) {
    this.documentService = documentService;
    this.toast = toast;
    this.searchTerm = '';
    this.filterCategory = '';
    this.showUploadModal = false;
    this.selectedFile = null;
    this.pickedFile = null;
    this.newDoc = {
      title: '',
      description: '',
      category: 'Employment',
      expiryDate: ''
    };
    this.documents = [];
    this.showToast = false;
    this.toastMsg = '';
  }
  ngOnInit() {
    this.loadDocuments();
  }
  loadDocuments() {
    this.documentService.getMyDocuments().subscribe({
      next: docs => {
        this.documents = (docs || []).map(doc => ({
          id: doc.id,
          name: doc.name,
          description: doc.uploadedByName ? `Uploaded by ${doc.uploadedByName}` : 'Official document',
          category: doc.category || 'Other',
          type: this.mapDocType(doc.type),
          size: this.formatFileSize(doc.fileSize),
          uploadedOn: this.formatDate(doc.uploadedAt),
          expiry: '',
          status: 'VERIFIED',
          url: doc.fileUrl
        }));
      },
      error: () => {
        this.documents = [];
        this.toast.error('Failed to load documents.');
      }
    });
  }
  mapDocType(type) {
    const t = (type || '').toUpperCase();
    if (!t) return 'PDF';
    if (t === 'PDF' || t.includes('PDF')) return 'PDF';
    if (t === 'IMAGE' || t.includes('JPG') || t.includes('JPEG') || t.includes('PNG')) return 'Image';
    if (t.includes('DOC')) return 'Word';
    if (t.includes('XLS')) return 'Excel';
    return t;
  }
  formatFileSize(bytes) {
    if (!bytes) return '--';
    if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
    if (bytes >= 1024) return Math.round(bytes / 1024) + ' KB';
    return bytes + ' B';
  }
  formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  get totalCount() {
    return this.documents.length;
  }
  get verifiedCount() {
    return this.documents.filter(d => d.status === 'VERIFIED').length;
  }
  get pendingCount() {
    return this.documents.filter(d => d.status === 'PENDING').length;
  }
  get expiringCount() {
    return this.documents.filter(d => this.isExpiringSoon(d.expiry)).length;
  }
  get filteredDocuments() {
    return this.documents.filter(d => {
      const matchSearch = !this.searchTerm || d.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || d.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.filterCategory || d.category === this.filterCategory;
      return matchSearch && matchCat;
    });
  }
  getFileColor(type) {
    const colors = {
      PDF: '#fee2e2',
      Image: '#dbeafe',
      Word: '#dcfce7',
      Excel: '#f3e8ff'
    };
    return colors[type] || '#f1f5f9';
  }
  getCatBg(cat) {
    const bgs = {
      Identity: '#dbeafe',
      Employment: '#dcfce7',
      Education: '#fef3c7',
      Other: '#f3e8ff'
    };
    return bgs[cat] || '#f1f5f9';
  }
  getCatColor(cat) {
    const cols = {
      Identity: '#2563eb',
      Employment: '#16a34a',
      Education: '#d97706',
      Other: '#7c3aed'
    };
    return cols[cat] || '#64748b';
  }
  isExpiringSoon(expiry) {
    if (!expiry) return false;
    const exp = new Date(expiry);
    const now = new Date();
    const diff = exp.getTime() - now.getTime();
    return diff > 0 && diff < 90 * 24 * 60 * 60 * 1000;
  }
  openUploadModal() {
    this.newDoc = {
      title: '',
      description: '',
      category: 'Employment',
      expiryDate: ''
    };
    this.selectedFile = null;
    this.pickedFile = null;
    this.showUploadModal = true;
  }
  closeUploadModal() {
    this.showUploadModal = false;
    this.pickedFile = null;
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.pickedFile = file;
      const ext = file.name.split('.').pop()?.toUpperCase() || 'PDF';
      const fileType = ext === 'PNG' || ext === 'JPG' || ext === 'JPEG' ? 'Image' : ext === 'DOC' || ext === 'DOCX' ? 'Word' : 'PDF';
      const sizeMb = (file.size / 1024).toFixed(0);
      this.selectedFile = {
        name: file.name,
        size: `${sizeMb} KB`,
        type: fileType,
        url: URL.createObjectURL(file)
      };
      if (!this.newDoc.title) {
        this.newDoc.title = file.name;
      }
    }
  }
  saveDocument() {
    if (!this.pickedFile) {
      this.toast.error('Please select a file to upload.');
      return;
    }
    this.documentService.uploadDocument(this.pickedFile, undefined, this.newDoc.category).subscribe({
      next: () => {
        this.showUploadModal = false;
        this.pickedFile = null;
        this.selectedFile = null;
        this.loadDocuments();
        this.toast.success('Document uploaded successfully!');
      },
      error: err => {
        const msg = err?.error?.message || err?.message || 'Failed to upload document.';
        this.toast.error(msg);
      }
    });
  }
  deleteDocument(doc) {
    if (!confirm(`Are you sure you want to delete "${doc.name}"?`)) return;
    this.documentService.deleteDocument(doc.id).subscribe({
      next: () => {
        this.documents = this.documents.filter(d => d.id !== doc.id);
        this.toast.success('Document deleted.');
      },
      error: err => {
        const msg = err?.error?.message || err?.message || 'Failed to delete document.';
        this.toast.error(msg);
      }
    });
  }
  downloadDocument(doc) {
    this.documentService.downloadDocument(doc.id).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.name;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: err => {
        const msg = err?.error?.message || err?.message || 'Failed to download document.';
        this.toast.error(msg);
      }
    });
  }
  triggerToast(msg) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
  static {
    this.ɵfac = function EmpDocumentsComponent_Factory(t) {
      return new (t || EmpDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmpDocumentsComponent,
      selectors: [["app-emp-documents"]],
      decls: 86,
      vars: 20,
      consts: [["title", "My Documents", "subtitle", "Upload, view, and manage your official employment and identity documents", 3, "breadcrumbs"], [1, "my-documents-container"], [1, "doc-stats-grid"], [1, "doc-stat-card"], [1, "stat-icon-box", "box-blue"], [1, "fas", "fa-folder-open"], [1, "stat-info"], [1, "stat-count"], [1, "stat-lbl"], [1, "stat-icon-box", "box-green"], [1, "fas", "fa-shield-check"], [1, "stat-icon-box", "box-yellow"], [1, "fas", "fa-hourglass-half"], [1, "stat-icon-box", "box-red"], [1, "fas", "fa-exclamation-triangle"], [1, "section-card"], [1, "card-toolbar"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search documents by name or description...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "toolbar-right"], [1, "select-category", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Identity"], ["value", "Employment"], ["value", "Education"], ["value", "Other"], [1, "btn-primary", 3, "click"], [1, "fas", "fa-upload"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card-footer"], [1, "showing-text"], ["class", "modal-backdrop", 4, "ngIf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], [1, "doc-name-cell"], [1, "doc-icon-box"], [1, "fas"], [1, "doc-title-details"], [1, "doc-name-txt"], [1, "doc-desc-txt"], [1, "cat-badge-pill"], [1, "type-pill"], [3, "status"], [1, "action-btns"], ["title", "Download Document", 1, "btn-icon", "btn-download", 3, "click"], [1, "fas", "fa-download"], ["title", "Delete Document", 1, "btn-icon", "btn-delete", 3, "click"], [1, "fas", "fa-trash-alt"], ["colspan", "8", 1, "text-center", "py-4", "text-gray"], [1, "modal-backdrop"], [1, "modal-card"], [1, "modal-header"], [1, "fas", "fa-upload", "text-blue"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], [1, "upload-dropzone", 3, "click"], ["type", "file", "accept", ".pdf,.doc,.docx,.jpg,.png", 2, "display", "none", 3, "change"], ["docFileInput", ""], ["class", "dropzone-content", 4, "ngIf", "ngIfElse"], ["fileSelectedView", ""], ["type", "text", "placeholder", "Document name (e.g. Health Insurance Certificate)", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Short description or notes...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click"], [1, "fas", "fa-check"], [1, "dropzone-content"], [1, "fas", "fa-cloud-upload-alt", "text-blue", "drop-icon"], [1, "selected-file-card"], [1, "fas", "fa-file-alt", "text-blue"], [1, "file-info"], [1, "change-lbl"]],
      template: function EmpDocumentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Verified");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3)(20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6)(23, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Pending Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 3)(28, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 6)(31, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Expiring Soon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15)(36, "div", 16)(37, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpDocumentsComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.searchTerm = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20)(41, "select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpDocumentsComponent_Template_select_ngModelChange_41_listener($event) {
            return ctx.filterCategory = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Identity");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Employment");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Other");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpDocumentsComponent_Template_button_click_52_listener() {
            return ctx.openUploadModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Upload Document ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 29)(56, "table", 30)(57, "thead")(58, "tr")(59, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Document Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Uploaded On");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Expiry Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, EmpDocumentsComponent_tr_76_Template, 31, 26, "tr", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, EmpDocumentsComponent_tr_77_Template, 3, 0, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 33)(79, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, EmpDocumentsComponent_div_81_Template, 51, 6, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](17, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.verifiedCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pendingCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.expiringCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredDocuments);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredDocuments.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Showing ", ctx.filteredDocuments.length, " of ", ctx.documents.length, " total documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showUploadModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.my-documents-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.doc-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.doc-stat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.stat-icon-box[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.stat-icon-box.box-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n}\n.stat-icon-box.box-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-icon-box.box-yellow[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.stat-icon-box.box-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-info[_ngcontent-%COMP%]   .stat-count[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.stat-info[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 2px;\n}\n\n\n\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\n\n.card-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 280px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 14px;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9.5px 14px 9.5px 38px;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  font-size: 13.5px;\n  color: #0f172a;\n  outline: none;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.select-category[_ngcontent-%COMP%] {\n  padding: 9.5px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  font-size: 13px;\n  color: #0f172a;\n  outline: none;\n  font-weight: 500;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 9.5px 22px;\n  border-radius: 50px;\n  border: none;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 13.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);\n  transition: transform 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 13.5px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.doc-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.doc-icon-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n\n.doc-title-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.doc-title-details[_ngcontent-%COMP%]   .doc-name-txt[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.doc-title-details[_ngcontent-%COMP%]   .doc-desc-txt[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n}\n\n.cat-badge-pill[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 700;\n}\n\n.type-pill[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 11.5px;\n  font-weight: 600;\n}\n\n.expiring-warning[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.btn-icon.btn-download[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #0066ff;\n  border-color: #bfdbfe;\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.showing-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 16px;\n}\n\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 620px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalFadeIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 18px;\n  color: #64748b;\n  cursor: pointer;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.upload-dropzone[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px dashed #cbd5e1;\n  border-radius: 14px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.upload-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n  background: #eff6ff;\n}\n\n.dropzone-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.dropzone-content[_ngcontent-%COMP%]   .drop-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 4px;\n}\n.dropzone-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.dropzone-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.selected-file-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.selected-file-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.selected-file-card[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n}\n.selected-file-card[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.selected-file-card[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.selected-file-card[_ngcontent-%COMP%]   .change-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #0066ff;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 14px;\n  color: #0f172a;\n  outline: none;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n  background: #0066ff;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 20000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n@media (max-width: 1024px) {\n  .doc-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .doc-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .card-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS1kb2N1bWVudHMvbXktZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtHQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBLDBCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFBYSxtQkFBQTtFQUFxQixjQUFBO0FBR3BDO0FBRkU7RUFBYyxtQkFBQTtFQUFxQixjQUFBO0FBTXJDO0FBTEU7RUFBZSxtQkFBQTtFQUFxQixjQUFBO0FBU3RDO0FBUkU7RUFBWSxtQkFBQTtFQUFxQixjQUFBO0FBWW5DOztBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWUY7QUFWRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlKO0FBVEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVBBLHlCQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFB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ICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ubXktZG9jdW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLyogMS4gU3VtbWFyeSBDYXJkcyBHcmlkICovXHJcbi5kb2Mtc3RhdHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmRvYy1zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGF0LWljb24tYm94IHtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAmLmJveC1ibHVlIHsgYmFja2dyb3VuZDogI2VmZjZmZjsgY29sb3I6ICMwMDY2ZmY7IH1cclxuICAmLmJveC1ncmVlbiB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgJi5ib3gteWVsbG93IHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNkOTc3MDY7IH1cclxuICAmLmJveC1yZWQgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG59XHJcblxyXG4uc3RhdC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5zdGF0LWNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgfVxyXG5cclxuICAuc3RhdC1sYmwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogMi4gTWFpbiBTZWN0aW9uIENhcmQgKi9cclxuLnNlY3Rpb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLXRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGdhcDogMTZweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzk0YTNiODtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA5LjVweCAxNHB4IDkuNXB4IDM4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDY2ZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvb2xiYXItcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5zZWxlY3QtY2F0ZWdvcnkge1xyXG4gIHBhZGRpbmc6IDkuNXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgcGFkZGluZzogOS41cHggMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICB0aCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgfVxyXG5cclxuICB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIH1cclxufVxyXG5cclxuLmRvYy1uYW1lLWNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5kb2MtaWNvbi1ib3gge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5kb2MtdGl0bGUtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuZG9jLW5hbWUtdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gIH1cclxuXHJcbiAgLmRvYy1kZXNjLXR4dCB7XHJcbiAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhdC1iYWRnZS1waWxsIHtcclxuICBwYWRkaW5nOiA0cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50eXBlLXBpbGwge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgY29sb3I6ICM0NzU1Njk7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5leHBpcmluZy13YXJuaW5nIHtcclxuICBjb2xvcjogI2RjMjYyNjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICYuYnRuLWRvd25sb2FkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICBjb2xvcjogIzAwNjZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2JmZGJmZTtcclxuICB9XHJcblxyXG4gICYuYnRuLWRlbGV0ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZWNhY2E7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcclxufVxyXG5cclxuLnNob3dpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nICovXHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MjBweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb2RhbEZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfVxyXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIgeyBjb2xvcjogIzBmMTcyYTsgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWF4LWhlaWdodDogNzB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4udXBsb2FkLWRyb3B6b25lIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wem9uZS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuXHJcbiAgLmRyb3AtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgfVxyXG5cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1maWxlLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbGUtaW5mbyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIHN0cm9uZyB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMwZjE3MmE7IH1cclxuICAgIHNtYWxsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS1sYmwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDA2NmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNnB4O1xyXG5cclxuICAmLmZ1bGwtd2lkdGgge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDIsIDI1NSwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUgeyBjb2xvcjogIzAwNjZmZjsgfVxyXG4ucmVxdWlyZWQgeyBjb2xvcjogI2VmNDQ0NDsgfVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDEycHg7XHJcblxyXG4gIC5idG4tY2FuY2VsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tc2F2ZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjZmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMwMDUyY2M7IH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFRvYXN0IE5vdGlmaWNhdGlvbiAqL1xyXG4udG9hc3Qtbm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyNHB4O1xyXG4gIHJpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB6LWluZGV4OiAyMDAwMDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5kb2Mtc3RhdHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmRvYy1zdGF0cy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC5mb3JtLWdyb3VwLmZ1bGwtd2lkdGggeyBncmlkLWNvbHVtbjogc3BhbiAxOyB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC10b29sYmFyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9361:
/*!*****************************************************************!*\
  !*** ./src/app/modules/employee/my-leave/my-leave.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpLeaveComponent: () => (/* binding */ EmpLeaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ 3787);






function EmpLeaveComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 13)(4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "used");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 22)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " days remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", b_r2.bg)("color", b_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r2.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r2.used);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", b_r2.used / b_r2.total * 100 + "%")("background", b_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r2.total - b_r2.used);
  }
}
function EmpLeaveComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-status-badge", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("leave-type--" + h_r3.type.toLowerCase().replace(" ", "-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", h_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.approvedBy);
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "My Leave"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpLeaveComponent {
  constructor(leaveService, toast) {
    this.leaveService = leaveService;
    this.toast = toast;
    this.balances = [];
    this.history = [];
    this.balanceColors = {
      'Annual Leave': {
        bg: '#dbeafe',
        color: '#2563eb'
      },
      'Sick Leave': {
        bg: '#fee2e2',
        color: '#dc2626'
      },
      'Personal Leave': {
        bg: '#fef3c7',
        color: '#d97706'
      },
      'Unpaid Leave': {
        bg: '#f3e8ff',
        color: '#7c3aed'
      },
      'Maternity Leave': {
        bg: '#fce7f3',
        color: '#db2777'
      },
      'Paternity Leave': {
        bg: '#cffafe',
        color: '#0891b2'
      },
      'Compensatory Off': {
        bg: '#dcfce7',
        color: '#16a34a'
      },
      'Bereavement Leave': {
        bg: '#f1f5f9',
        color: '#64748b'
      }
    };
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.leaveService.getBalances().subscribe({
      next: data => {
        this.balances = (data || []).map(b => {
          const style = this.balanceColors[b.leaveType] || {
            bg: '#dbeafe',
            color: '#2563eb'
          };
          return {
            type: b.leaveType,
            total: b.entitled || 0,
            used: b.taken || 0,
            bg: style.bg,
            color: style.color
          };
        });
      },
      error: () => this.toast.error('Failed to load leave balances.')
    });
    this.leaveService.getMyLeave().subscribe({
      next: data => {
        this.history = (data || []).map(l => ({
          type: l.leaveType,
          from: this.formatDate(l.startDate),
          to: this.formatDate(l.endDate),
          days: l.totalDays || 0,
          reason: l.reason,
          status: l.status,
          approvedBy: l.approvedBy || '--'
        }));
      },
      error: () => this.toast.error('Failed to load leave history.')
    });
  }
  formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  static {
    this.ɵfac = function EmpLeaveComponent_Factory(t) {
      return new (t || EmpLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.LeaveService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmpLeaveComponent,
      selectors: [["app-emp-leave"]],
      decls: 30,
      vars: 8,
      consts: [["title", "My Leave", "subtitle", "View leave balance and history", 3, "breadcrumbs"], [1, "balance-grid"], ["class", "balance-card", 4, "ngFor", "ngForOf"], [1, "section-card"], [1, "card-toolbar"], ["routerLink", "/employee/apply-leave", 1, "btn-primary"], [1, "fas", "fa-plus"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "balance-card"], [1, "balance-icon"], [1, "fas", "fa-calendar-alt"], [1, "balance-info"], [1, "balance-type"], [1, "balance-numbers"], [1, "balance-total"], [1, "balance-sep"], [1, "balance-used"], [1, "balance-label"], [1, "balance-bar"], [1, "balance-fill"], [1, "balance-remaining"], [1, "leave-type-badge"], [1, "reason-cell"], [3, "status"]],
      template: function EmpLeaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EmpLeaveComponent_div_2_Template, 21, 12, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Leave History");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Apply Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "table", 8)(12, "thead")(13, "tr")(14, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Reason");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Approved By");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EmpLeaveComponent_tr_29_Template, 17, 9, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.balances);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.history);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.balance-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.balance-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  display: flex;\n  gap: 16px;\n}\n\n.balance-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.balance-type[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n\n.balance-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  margin-bottom: 8px;\n}\n\n.balance-total[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1e293b;\n}\n\n.balance-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  margin: 0 2px;\n}\n\n.balance-used[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #94a3b8;\n}\n\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-left: 4px;\n}\n\n.balance-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n\n.balance-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n}\n\n.balance-remaining[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.balance-remaining[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n\n.card-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.card-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background: #6366f1;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.leave-type-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.leave-type--annual[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n\n.leave-type--sick[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.leave-type--personal[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n\n.reason-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS1sZWF2ZS9teS1sZWF2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUjs7QUFESTtFQUFnQixhQUFBO0VBQWUsNERBQUE7RUFBOEQsU0FBQTtFQUFXLG1CQUFBO0FBUTVHOztBQVBJO0VBQWdCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSx5QkFBQTtFQUEyQix5Q0FBQTtFQUF3QyxhQUFBO0VBQWUsU0FBQTtBQWlCNUo7O0FBaEJJO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0VBQWMsbUJBQUE7RUFBcUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGVBQUE7RUFBaUIsY0FBQTtBQTJCbEo7O0FBMUJJO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUFnQixrQkFBQTtBQWlDdkU7O0FBaENJO0VBQW1CLGFBQUE7RUFBZSxxQkFBQTtFQUF1QixRQUFBO0VBQVUsa0JBQUE7QUF1Q3ZFOztBQXRDSTtFQUFpQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7QUE0Q3hEOztBQTNDSTtFQUFlLGNBQUE7RUFBZ0IsYUFBQTtBQWdEbkM7O0FBL0NJO0VBQWdCLGVBQUE7RUFBaUIsY0FBQTtBQW9EckM7O0FBbkRJO0VBQWlCLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixnQkFBQTtBQXlEdEQ7O0FBeERJO0VBQWUsV0FBQTtFQUFhLG1CQUFBO0VBQXFCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGtCQUFBO0FBZ0UzRjs7QUEvREk7RUFBZ0IsWUFBQTtFQUFjLGtCQUFBO0FBb0VsQzs7QUFuRUk7RUFBcUIsZUFBQTtFQUFpQixjQUFBO0FBd0UxQzs7QUF2RUk7RUFBNEIsY0FBQTtBQTJFaEM7O0FBMUVJO0VBQWdCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLHlDQUFBO0VBQXdDLHlCQUFBO0VBQTJCLGdCQUFBO0FBa0Y5SDs7QUFqRkk7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGtCQUFBO0VBQW9CLGdDQUFBO0FBeUY1Rzs7QUF4Rkk7RUFBbUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLFNBQUE7QUErRjFFOztBQTlGSTtFQUFlLGlCQUFBO0VBQW1CLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBNEdsTTs7QUEzR0k7RUFBcUIsbUJBQUE7QUErR3pCOztBQTlHSTtFQUFvQixnQkFBQTtBQWtIeEI7O0FBakhJO0VBQWMsV0FBQTtFQUFhLHlCQUFBO0FBc0gvQjs7QUFySEk7RUFBaUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHlCQUFBO0VBQTJCLHFCQUFBO0VBQXVCLG1CQUFBO0VBQXFCLGdDQUFBO0FBaUlyTDs7QUFoSUk7RUFBaUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdDQUFBO0FBdUkxRTs7QUF0SUk7RUFBNkIsbUJBQUE7QUEwSWpDOztBQXpJSTtFQUFvQixpQkFBQTtFQUFtQixtQkFBQTtFQUFxQixlQUFBO0VBQWlCLGdCQUFBO0FBZ0pqRjs7QUEvSUk7RUFBc0IsbUJBQUE7RUFBcUIsY0FBQTtBQW9KL0M7O0FBbkpJO0VBQW9CLG1CQUFBO0VBQXFCLGNBQUE7QUF3SjdDOztBQXZKSTtFQUF3QixtQkFBQTtFQUFxQixjQUFBO0FBNEpqRDs7QUEzSkk7RUFBZSxnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtBQWtLNUUiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAuYmFsYW5jZS1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpOyBnYXA6IDE2cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxuICAgIC5iYWxhbmNlLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsgZGlzcGxheTogZmxleDsgZ2FwOiAxNnB4OyB9XHJcbiAgICAuYmFsYW5jZS1pY29uIHsgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDsgYm9yZGVyLXJhZGl1czogMTJweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMjBweDsgZmxleC1zaHJpbms6IDA7IH1cclxuICAgIC5iYWxhbmNlLXR5cGUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWUyOTNiOyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cclxuICAgIC5iYWxhbmNlLW51bWJlcnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogYmFzZWxpbmU7IGdhcDogMnB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cclxuICAgIC5iYWxhbmNlLXRvdGFsIHsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFlMjkzYjsgfVxyXG4gICAgLmJhbGFuY2Utc2VwIHsgY29sb3I6ICNjYmQ1ZTE7IG1hcmdpbjogMCAycHg7IH1cclxuICAgIC5iYWxhbmNlLXVzZWQgeyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAuYmFsYW5jZS1sYWJlbCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5NGEzYjg7IG1hcmdpbi1sZWZ0OiA0cHg7IH1cclxuICAgIC5iYWxhbmNlLWJhciB7IGhlaWdodDogNnB4OyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAzcHg7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbi1ib3R0b206IDZweDsgfVxyXG4gICAgLmJhbGFuY2UtZmlsbCB7IGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogM3B4OyB9XHJcbiAgICAuYmFsYW5jZS1yZW1haW5pbmcgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAuYmFsYW5jZS1yZW1haW5pbmcgc3Ryb25nIHsgY29sb3I6ICMxMGI5ODE7IH1cclxuICAgIC5zZWN0aW9uLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLmNhcmQtdG9vbGJhciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMTZweCAyMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTsgfVxyXG4gICAgLmNhcmQtdG9vbGJhciBoMyB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMDsgfVxyXG4gICAgLmJ0bi1wcmltYXJ5IHsgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XHJcbiAgICAuYnRuLXByaW1hcnk6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjNGY0NmU1OyB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7IG92ZXJmbG93LXg6IGF1dG87IH1cclxuICAgIC5kYXRhLXRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cclxuICAgIC5kYXRhLXRhYmxlIHRoIHsgcGFkZGluZzogMTJweCAxNnB4OyB0ZXh0LWFsaWduOiBsZWZ0OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC41cHg7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwOyB9XHJcbiAgICAuZGF0YS10YWJsZSB0ZCB7IHBhZGRpbmc6IDEycHggMTZweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzMzNDE1NTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7IH1cclxuICAgIC5kYXRhLXRhYmxlIHRib2R5IHRyOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxyXG4gICAgLmxlYXZlLXR5cGUtYmFkZ2UgeyBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyB9XHJcbiAgICAubGVhdmUtdHlwZS0tYW5udWFsIHsgYmFja2dyb3VuZDogI2RiZWFmZTsgY29sb3I6ICMyNTYzZWI7IH1cclxuICAgIC5sZWF2ZS10eXBlLS1zaWNrIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICNkYzI2MjY7IH1cclxuICAgIC5sZWF2ZS10eXBlLS1wZXJzb25hbCB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgICAucmVhc29uLWNlbGwgeyBtYXgtd2lkdGg6IDIwMHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2679:
/*!***********************************************************************!*\
  !*** ./src/app/modules/employee/my-payslips/my-payslips.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpPayslipsComponent: () => (/* binding */ EmpPayslipsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ 3787);






function EmpPayslipsComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "strong", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-status-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "div", 38)(19, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_tr_80_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const p_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.viewPayslipDetail(p_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_tr_80_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const p_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.downloadPayslip(p_r3.period));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.basic);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", p_r3.allowances, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("-", p_r3.deductions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.netPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.payDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", p_r3.status);
  }
}
function EmpPayslipsComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No payslips found for ", ctx_r1.selectedYear, ".");
  }
}
function EmpPayslipsComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_div_82_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.closePayslipDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_div_82_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 46)(3, "div", 47)(4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 50)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Envision Beyond India Pvt Ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Official Salary Statement & Tax Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 52)(12, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " SLIP #PAY-2026-09");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_div_82_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.closePayslipDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 57)(18, "div", 58)(19, "div", 59)(20, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "PRINCE VIDYARTHI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 59)(26, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Employee ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "EMP-1059");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 59)(32, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Software Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 59)(38, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Engineering & Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 59)(44, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Pay Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 59)(50, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Pay Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 59)(56, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Bank Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "HDFC Bank (****4892)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 59)(62, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " PAN / Tax ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "ABCDE1234F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 70)(68, "div", 71)(69, "div", 72)(70, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Gross Earnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 75)(76, "div", 76)(77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Basic Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 76)(82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "House Rent Allowance (HRA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "$1,200.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 76)(87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Special Allowance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "$800.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 76)(92, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Performance Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 77)(97, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Total Gross Earnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "$7,500.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 78)(102, "div", 79)(103, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " Deductions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 75)(109, "div", 76)(110, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Provident Fund (PF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "$675.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 76)(115, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Income Tax (TDS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "$700.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 76)(120, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Health Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "$200.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 76)(125, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Professional Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 81)(130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Total Deductions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 82)(135, "div", 83)(136, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "NET TAKE-HOME PAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "h2", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div")(143, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Payment Processed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Direct Bank Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "This is a system-generated electronic payslip statement verified by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Envision Beyond India Pvt Ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, ". No physical signature required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 89)(155, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_div_82_Template_button_click_155_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.closePayslipDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_div_82_Template_button_click_158_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.printPayslip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " Print ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpPayslipsComponent_div_82_Template_button_click_161_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.downloadPayslip(ctx_r13.activePayslipModal.period));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, " Download PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activePayslipModal.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activePayslipModal.payDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activePayslipModal.basic);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("-$", ctx_r2.activePayslipModal.deductions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activePayslipModal.netPay);
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "My Payslips"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpPayslipsComponent {
  constructor(payrollService, toast) {
    this.payrollService = payrollService;
    this.toast = toast;
    this.selectedYear = String(new Date().getFullYear());
    this.payslips = [];
    this.activePayslipModal = null;
    this.showToast = false;
    this.toastMsg = '';
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }
  ngOnInit() {
    this.loadPayslips();
  }
  loadPayslips() {
    this.payrollService.getMyPayroll().subscribe({
      next: records => {
        this.payslips = (records || []).map(r => ({
          period: `${this.monthName(r.month)} ${r.year}`,
          basic: this.formatMoney(r.basicSalary),
          allowances: this.formatMoney(r.allowances),
          deductions: (Number(r.deductions) || 0).toFixed(2),
          netPay: this.formatMoney(r.netPay),
          status: r.status,
          payDate: this.formatDate(r.paidDate)
        }));
      },
      error: () => {
        this.payslips = [];
        this.toast.error('Failed to load payslips.');
      }
    });
  }
  monthName(value) {
    if (value === null || value === undefined || value === '') return '';
    if (typeof value === 'number') {
      return this.monthNames[(value - 1) % 12] || String(value);
    }
    const n = parseInt(String(value), 10);
    if (!isNaN(n)) {
      return this.monthNames[(n - 1) % 12] || String(value);
    }
    return String(value);
  }
  formatMoney(value) {
    return '$' + (Number(value) || 0).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  formatDate(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  get filteredPayslips() {
    return this.payslips.filter(p => p.period.includes(this.selectedYear));
  }
  viewPayslipDetail(payslip) {
    this.activePayslipModal = payslip;
    const parts = payslip.period.split(' ');
    if (parts.length >= 2) {
      const month = this.monthName(parts[0]);
      const year = Number(parts[parts.length - 1]);
      if (month && !isNaN(year)) {
        this.payrollService.getMyPayslip(month, year).subscribe({
          next: slip => {
            if (this.activePayslipModal) {
              this.activePayslipModal.slip = slip;
              this.activePayslipModal.netPay = this.formatMoney(slip.netPay);
              this.activePayslipModal.basic = this.formatMoney(slip.basicSalary);
              this.activePayslipModal.allowances = this.formatMoney(slip.totalEarnings - slip.basicSalary);
              this.activePayslipModal.deductions = (slip.totalDeductions || 0).toFixed(2);
            }
          },
          error: () => undefined
        });
      }
    }
  }
  closePayslipDetail() {
    this.activePayslipModal = null;
  }
  downloadPayslip(period) {
    this.toast.success(`Downloading official payslip PDF for ${period}...`);
  }
  printPayslip() {
    window.print();
  }
  triggerToast(msg) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
  static {
    this.ɵfac = function EmpPayslipsComponent_Factory(t) {
      return new (t || EmpPayslipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmpPayslipsComponent,
      selectors: [["app-emp-payslips"]],
      decls: 87,
      vars: 13,
      consts: [["title", "My Payslips", "subtitle", "View and download your monthly salary slips and tax statements", 3, "breadcrumbs"], [1, "my-payslips-container"], [1, "salary-summary-grid"], [1, "salary-card"], [1, "salary-icon-box", "box-blue"], [1, "fas", "fa-wallet"], [1, "salary-details"], [1, "salary-label"], [1, "salary-amount"], [1, "salary-sub"], [1, "salary-icon-box", "box-red"], [1, "fas", "fa-minus-circle"], [1, "salary-amount", "text-danger"], [1, "salary-icon-box", "box-green"], [1, "fas", "fa-check-double"], [1, "salary-amount", "text-success"], [1, "salary-icon-box", "box-purple"], [1, "fas", "fa-chart-line"], [1, "section-card"], [1, "card-toolbar"], [1, "toolbar-title"], [1, "fas", "fa-file-invoice-dollar", "text-blue"], [1, "year-filter-wrap"], [1, "select-year", 3, "ngModel", "ngModelChange"], ["value", "2026"], ["value", "2025"], ["value", "2024"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], [1, "text-success"], [1, "text-danger"], [1, "net-pay-val"], [3, "status"], [1, "action-btns"], ["title", "View Detailed Payslip Statement", 1, "btn-icon", 3, "click"], [1, "fas", "fa-eye"], ["title", "Download Payslip PDF", 1, "btn-icon", "btn-download", 3, "click"], [1, "fas", "fa-download"], ["colspan", "8", 1, "text-center", "py-4", "text-gray"], [1, "modal-backdrop", 3, "click"], [1, "payslip-modal-card", 3, "click"], [1, "payslip-modal-header"], [1, "company-brand"], [1, "logo-wrapper"], ["src", "assets/images/hrm.png", "alt", "Company Logo", 1, "modal-logo"], [1, "brand-titles"], [1, "sub-heading"], [1, "header-actions"], [1, "slip-id-tag"], [1, "fas", "fa-file-alt"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "payslip-modal-body"], [1, "employee-meta-grid"], [1, "meta-item"], [1, "meta-label"], [1, "fas", "fa-user", "text-blue"], [1, "meta-value"], [1, "fas", "fa-id-card", "text-purple"], [1, "fas", "fa-briefcase", "text-teal"], [1, "fas", "fa-building", "text-orange"], [1, "fas", "fa-calendar-alt", "text-indigo"], [1, "fas", "fa-clock", "text-green"], [1, "fas", "fa-university", "text-blue"], [1, "fas", "fa-fingerprint", "text-purple"], [1, "breakdown-tables-grid"], [1, "breakdown-box", "earnings-box"], [1, "box-header", "green-header"], [1, "fas", "fa-plus-circle"], [1, "badge-pill", "green-pill"], [1, "line-items"], [1, "row-line"], [1, "box-total-footer", "green-total"], [1, "breakdown-box", "deductions-box"], [1, "box-header", "red-header"], [1, "badge-pill", "red-pill"], [1, "box-total-footer", "red-total"], [1, "net-salary-banner"], [1, "net-salary-info"], [1, "net-label"], [1, "net-amount"], [1, "payment-status-badge"], [1, "statement-notice"], [1, "fas", "fa-shield-alt", "text-blue"], [1, "payslip-modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-outline-primary", 3, "click"], [1, "fas", "fa-print"], [1, "btn-primary", 3, "click"]],
      template: function EmpPayslipsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Monthly Gross");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "$7,500.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Base + Allowances");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3)(14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6)(17, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Total Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "-$1,575.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Taxes & PF (21%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3)(24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 6)(27, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Net Take-Home Pay");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "$5,925.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Transferred to account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 3)(34, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 6)(37, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "YTD Total Earnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "$71,100.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Cumulative (2026)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 18)(44, "div", 19)(45, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Salary Slips History");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 22)(50, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Filter Year:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpPayslipsComponent_Template_select_ngModelChange_52_listener($event) {
            return ctx.selectedYear = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 27)(60, "table", 28)(61, "thead")(62, "tr")(63, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Pay Period");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Basic Salary");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Allowances");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Net Pay");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Payment Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, EmpPayslipsComponent_tr_80_Template, 23, 7, "tr", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, EmpPayslipsComponent_tr_81_Template, 3, 1, "tr", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, EmpPayslipsComponent_div_82_Template, 164, 5, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedYear);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredPayslips);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredPayslips.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activePayslipModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.my-payslips-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.salary-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.salary-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.salary-icon-box[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.salary-icon-box.box-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n}\n.salary-icon-box.box-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.salary-icon-box.box-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.salary-icon-box.box-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n\n.salary-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.salary-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.salary-amount[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 2px 0;\n}\n.salary-amount.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.salary-amount.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n\n.salary-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n\n\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\n\n.card-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.toolbar-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.toolbar-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n.year-filter-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.year-filter-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n.select-year[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 13px;\n  color: #0f172a;\n  outline: none;\n  font-weight: 600;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 13.5px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.net-pay-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 800;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a !important;\n  font-weight: 600;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n  font-weight: 600;\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #0066ff;\n  border-color: #bfdbfe;\n}\n.btn-icon.btn-download[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 16px;\n}\n\n.payslip-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 820px;\n  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n\n@keyframes _ngcontent-%COMP%_modalSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.payslip-modal-header[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .company-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .company-brand[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .company-brand[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .modal-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .company-brand[_ngcontent-%COMP%]   .brand-titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.2px;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .company-brand[_ngcontent-%COMP%]   .brand-titles[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n  margin: 1px 0 0 0;\n  font-weight: 500;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .slip-id-tag[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .slip-id-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  font-size: 14px;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.payslip-modal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  transform: scale(1.05);\n}\n\n.payslip-modal-body[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.employee-meta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 12px 16px;\n}\n.employee-meta-grid[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.employee-meta-grid[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.employee-meta-grid[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.employee-meta-grid[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.breakdown-tables-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.breakdown-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f1f5f9;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header.green-header[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.06);\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header.green-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header.red-header[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.06);\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header.red-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .badge-pill[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .badge-pill.green-pill[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .badge-pill.red-pill[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.breakdown-box[_ngcontent-%COMP%]   .line-items[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.breakdown-box[_ngcontent-%COMP%]   .line-items[_ngcontent-%COMP%]   .row-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #475569;\n  padding: 5px 0;\n  border-bottom: 1px dashed #f1f5f9;\n}\n.breakdown-box[_ngcontent-%COMP%]   .line-items[_ngcontent-%COMP%]   .row-line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.breakdown-box[_ngcontent-%COMP%]   .line-items[_ngcontent-%COMP%]   .row-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-total-footer[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  font-weight: 800;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-total-footer.green-total[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-top: 1px solid #bbf7d0;\n  color: #15803d;\n}\n.breakdown-box[_ngcontent-%COMP%]   .box-total-footer.red-total[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-top: 1px solid #fecaca;\n  color: #b91c1c;\n}\n\n.net-salary-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #059669 0%, #10b981 100%);\n  color: #ffffff;\n  border-radius: 14px;\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.2);\n}\n.net-salary-banner[_ngcontent-%COMP%]   .net-salary-info[_ngcontent-%COMP%]   .net-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.8px;\n  opacity: 0.9;\n}\n.net-salary-banner[_ngcontent-%COMP%]   .net-salary-info[_ngcontent-%COMP%]   .net-amount[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 900;\n  margin: 2px 0 0;\n  letter-spacing: -0.5px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.net-salary-banner[_ngcontent-%COMP%]   .payment-status-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 6px 14px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.net-salary-banner[_ngcontent-%COMP%]   .payment-status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ffffff;\n}\n.net-salary-banner[_ngcontent-%COMP%]   .payment-status-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.net-salary-banner[_ngcontent-%COMP%]   .payment-status-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: #ffffff;\n}\n.net-salary-banner[_ngcontent-%COMP%]   .payment-status-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.85;\n}\n\n.statement-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 11px;\n  color: #64748b;\n}\n.statement-notice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.payslip-modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 22px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.payslip-modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.payslip-modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.payslip-modal-footer[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #0066ff;\n  background: #ffffff;\n  color: #0066ff;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.payslip-modal-footer[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.payslip-modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.25);\n  transition: all 0.2s;\n}\n.payslip-modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 102, 255, 0.35);\n  transform: translateY(-1px);\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 20000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n@media (max-width: 1024px) {\n  .salary-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .salary-summary-grid[_ngcontent-%COMP%], .breakdown-tables-grid[_ngcontent-%COMP%], .employee-meta-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS1wYXlzbGlwcy9teS1wYXlzbGlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrR0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQSwwQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQWEsbUJBQUE7RUFBcUIsY0FBQTtBQUdwQztBQUZFO0VBQVksbUJBQUE7RUFBcUIsY0FBQTtBQU1uQztBQUxFO0VBQWMsbUJBQUE7RUFBcUIsY0FBQTtBQVNyQztBQVJFO0VBQWUsbUJBQUE7RUFBcUIsY0FBQTtBQVl0Qzs7QUFUQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVlGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBWUY7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVlGO0FBVkU7RUFBZ0IsY0FBQTtBQWFsQjtBQVpFO0VBQWlCLGNBQUE7QUFlbkI7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWVGOztBQVpBLHlCQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FB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O0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7QUFLRjtBQUhFO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBS0o7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBQUE7RUFDRTtJQUNFLHFDQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0U7SUFDRSwwQkFBQTtFQUVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLm15LXBheXNsaXBzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLyogMS4gU3VtbWFyeSBDYXJkcyBHcmlkICovXHJcbi5zYWxhcnktc3VtbWFyeS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uc2FsYXJ5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5zYWxhcnktaWNvbi1ib3gge1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYuYm94LWJsdWUgeyBiYWNrZ3JvdW5kOiAjZWZmNmZmOyBjb2xvcjogIzAwNjZmZjsgfVxyXG4gICYuYm94LXJlZCB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgJi5ib3gtZ3JlZW4geyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE2YTM0YTsgfVxyXG4gICYuYm94LXB1cnBsZSB7IGJhY2tncm91bmQ6ICNmM2U4ZmY7IGNvbG9yOiAjOTMzM2VhOyB9XHJcbn1cclxuXHJcbi5zYWxhcnktZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2FsYXJ5LWxhYmVsIHtcclxuICBmb250LXNpemU6IDExLjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uc2FsYXJ5LWFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luOiAycHggMDtcclxuXHJcbiAgJi50ZXh0LWRhbmdlciB7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgJi50ZXh0LXN1Y2Nlc3MgeyBjb2xvcjogIzE2YTM0YTsgfVxyXG59XHJcblxyXG4uc2FsYXJ5LXN1YiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG59XHJcblxyXG4vKiAyLiBNYWluIFNlY3Rpb24gQ2FyZCAqL1xyXG4uc2VjdGlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICBpIHsgZm9udC1zaXplOiAxOHB4OyB9XHJcbiAgaDMgeyBmb250LXNpemU6IDE3cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMGYxNzJhOyBtYXJnaW46IDA7IH1cclxufVxyXG5cclxuLnRleHQtYmx1ZSB7IGNvbG9yOiAjMDA2NmZmOyB9XHJcblxyXG4ueWVhci1maWx0ZXItd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdC15ZWFyIHtcclxuICBwYWRkaW5nOiA4cHggMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICB0aCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICB9XHJcblxyXG4gIHRib2R5IHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgfVxyXG59XHJcblxyXG4ubmV0LXBheS12YWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4udGV4dC1zdWNjZXNzIHsgY29sb3I6ICMxNmEzNGEgIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4udGV4dC1kYW5nZXIgeyBjb2xvcjogI2RjMjYyNiAhaW1wb3J0YW50OyBmb250LXdlaWdodDogNjAwOyB9XHJcblxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgIGNvbG9yOiAjMDA2NmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmZkYmZlO1xyXG4gIH1cclxuXHJcbiAgJi5idG4tZG93bmxvYWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcclxuICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmJmN2QwO1xyXG4gIH1cclxufVxyXG5cclxuLyogTW9kYWwgU3R5bGluZyAqL1xyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjYpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ucGF5c2xpcC1tb2RhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MjBweDtcclxuICBib3gtc2hhZG93OiAwIDI1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IG1vZGFsU2xpZGVVcCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxTbGlkZVVwIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpIHNjYWxlKDAuOTgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cclxufVxyXG5cclxuLnBheXNsaXAtbW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxNHB4IDIycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2Y4ZmFmYyAxMDAlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuY29tcGFueS1icmFuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuXHJcbiAgICAubG9nby13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAubW9kYWwtbG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnJhbmQtdGl0bGVzIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3ViLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDAgMCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuXHJcbiAgICAuc2xpcC1pZC10YWcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgICBjb2xvcjogIzFkNGVkODtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG5cclxuICAgICAgaSB7IGZvbnQtc2l6ZTogMTBweDsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGF5c2xpcC1tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNnB4IDIycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmVtcGxveWVlLW1ldGEtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogMTBweCAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuXHJcbiAgLm1ldGEtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnB4O1xyXG5cclxuICAgIC5tZXRhLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxMC41cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgaSB7IGZvbnQtc2l6ZTogMTFweDsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXRhLXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJyZWFrZG93bi10YWJsZXMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uYnJlYWtkb3duLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5ib3gtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuXHJcbiAgICAmLmdyZWVuLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjA2KTtcclxuICAgICAgaDQgeyBjb2xvcjogIzA1OTY2OTsgfVxyXG4gICAgfVxyXG5cclxuICAgICYucmVkLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDYpO1xyXG4gICAgICBoNCB7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhZGdlLXBpbGwge1xyXG4gICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAmLmdyZWVuLXBpbGwgeyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE1ODAzZDsgfVxyXG4gICAgICAmLnJlZC1waWxsIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICNiOTFjMWM7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lLWl0ZW1zIHtcclxuICAgIHBhZGRpbmc6IDRweCAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5yb3ctbGluZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2YxZjVmOTtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm94LXRvdGFsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgICAmLmdyZWVuLXRvdGFsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YwZmRmNDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xyXG4gICAgfVxyXG5cclxuICAgICYucmVkLXRvdGFsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZWNhY2E7XHJcbiAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5ldC1zYWxhcnktYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDU5NjY5IDAlLCAjMTBiOTgxIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yKTtcclxuXHJcbiAgLm5ldC1zYWxhcnktaW5mbyB7XHJcbiAgICAubmV0LWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuXHJcbiAgICAubmV0LWFtb3VudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgbWFyZ2luOiAycHggMCAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYXltZW50LXN0YXR1cy1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQtbm90aWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG5cclxuICBpIHsgZm9udC1zaXplOiAxMnB4OyB9XHJcbn1cclxuXHJcbi5wYXlzbGlwLW1vZGFsLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMTJweCAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICMwZjE3MmE7IH1cclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzAwNjZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzAwNjZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IH1cclxuICB9XHJcblxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAxMDIsIDI1NSwgMC4yNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjM1KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogVG9hc3QgTm90aWZpY2F0aW9uICovXHJcbi50b2FzdC1ub3RpZmljYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDI0cHg7XHJcbiAgcmlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIHotaW5kZXg6IDIwMDAwO1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICMxMGI5ODE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnNhbGFyeS1zdW1tYXJ5LWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5zYWxhcnktc3VtbWFyeS1ncmlkLCAuYnJlYWtkb3duLXRhYmxlcy1ncmlkLCAuZW1wbG95ZWUtbWV0YS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9267:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/employee/my-performance/my-performance.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpPerformanceComponent: () => (/* binding */ EmpPerformanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);





function EmpPerformanceComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", m_r5.color)("background", m_r5.color + "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](m_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", m_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", m_r5.score, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", m_r5.score + "%")("background", m_r5.color);
  }
}
function EmpPerformanceComponent_div_75_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("filled", s_r8 <= r_r6.stars);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function EmpPerformanceComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67)(1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 70)(4, "div", 71)(5, "strong", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 74)(10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmpPerformanceComponent_div_75_i_11_Template, 1, 2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r6.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.getScoreColor(r_r6.score))("background", ctx_r1.getScoreColor(r_r6.score) + "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", r_r6.score, "% Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r6.date);
  }
}
function EmpPerformanceComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "div", 81)(19, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "SJ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 83)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td", 84)(27, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td")(30, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_tr_111_Template_button_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const h_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.openFeedback(h_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](h_r10.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", h_r10.tasksCompleted, " Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r10.onTimeRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r10.qualityScore, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("overall--" + ctx_r2.getOverallLevel(h_r10.overall).toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", h_r10.overall, "% (", ctx_r2.getOverallLevel(h_r10.overall), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](h_r10.reviewer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](h_r10.reviewerRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", h_r10.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](h_r10.feedback);
  }
}
function EmpPerformanceComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No performance reviews found for ", ctx_r3.selectedYear, ".");
  }
}
function EmpPerformanceComponent_div_113_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", s_r15, " ");
  }
}
function EmpPerformanceComponent_div_113_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", g_r16, " ");
  }
}
function EmpPerformanceComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_div_113_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.closeFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_div_113_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 91)(3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Performance Review Statement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_div_113_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.closeFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 96)(13, "div", 97)(14, "div", 98)(15, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "SJ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 100)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "OVERALL SCORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 104)(32, "div", 105)(33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Key Strengths");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, EmpPerformanceComponent_div_113_span_37_Template, 3, 1, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 109)(39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Focus & Growth Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, EmpPerformanceComponent_div_113_span_43_Template, 3, 1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 112)(45, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_div_113_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.closeFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_div_113_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.downloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Download Review PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.activeFeedbackModal.period, " Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.activeFeedbackModal.reviewer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.activeFeedbackModal.reviewerRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.activeFeedbackModal.overall, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.activeFeedbackModal.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.activeFeedbackModal.strengths);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.activeFeedbackModal.areasForGrowth);
  }
}
const _c1 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c2 = function () {
  return {
    label: "My Performance"
  };
};
const _c3 = function (a0, a1) {
  return [a0, a1];
};
class EmpPerformanceComponent {
  constructor(performanceService, toast) {
    this.performanceService = performanceService;
    this.toast = toast;
    this.selectedYear = '2025';
    this.activeFeedbackModal = null;
    this.showToast = false;
    this.toastMsg = '';
    this.metrics = [];
    this.recentRatings = [];
    this.history = [];
    this.kpiIcons = ['fa-tasks', 'fa-clock', 'fa-code', 'fa-user-check', 'fa-users', 'fa-comments'];
    this.kpiColors = ['#00a8ff', '#6366f1', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b'];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.performanceService.getMyReviews().subscribe({
      next: reviews => {
        this.buildHistory(reviews || []);
        this.buildRecentRatings(reviews || []);
      },
      error: () => this.toast.error('Failed to load performance reviews.')
    });
    this.performanceService.getMyKpis().subscribe({
      next: kpis => {
        this.metrics = (kpis || []).map((k, i) => {
          const pct = k.targetValue ? Math.round(k.currentValue / k.targetValue * 100) : 0;
          return {
            name: k.title || k.description,
            score: Math.min(100, Math.max(0, pct)),
            icon: this.kpiIcons[i % this.kpiIcons.length],
            color: this.kpiColors[i % this.kpiColors.length]
          };
        });
      },
      error: () => this.metrics = []
    });
  }
  buildHistory(reviews) {
    this.history = reviews.map(r => ({
      period: r.period || '',
      tasksCompleted: 0,
      onTimeRate: Math.round(Number(r.goalsRating) || 0),
      qualityScore: Math.round(Number(r.competencyRating) || 0),
      overall: Math.round(Number(r.overallRating) || 0),
      reviewer: r.reviewerName || '',
      reviewerRole: '',
      feedback: r.comments || '',
      strengths: [],
      areasForGrowth: []
    }));
    const years = this.history.map(h => (h.period.match(/\d{4}/) || [''])[0]);
    const cleanYears = years.filter(Boolean);
    if (cleanYears.length) {
      const latest = cleanYears.sort().pop();
      this.selectedYear = latest;
    }
  }
  buildRecentRatings(reviews) {
    this.recentRatings = reviews.sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || ''))).map(r => ({
      period: r.period || '',
      stars: Math.max(1, Math.min(5, Math.round((Number(r.overallRating) || 0) / 20))),
      score: Math.round(Number(r.overallRating) || 0),
      date: this.formatDate(r.createdAt)
    }));
  }
  formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  get filteredHistory() {
    return this.history.filter(h => h.period.includes(this.selectedYear));
  }
  getScoreColor(score) {
    if (score >= 90) return '#10b981';
    if (score >= 80) return '#0066ff';
    if (score >= 65) return '#f59e0b';
    return '#ef4444';
  }
  getOverallLevel(val) {
    if (val >= 90) return 'EXCELLENT';
    if (val >= 80) return 'GOOD';
    return 'AVERAGE';
  }
  openFeedback(item) {
    this.activeFeedbackModal = item;
  }
  closeFeedback() {
    this.activeFeedbackModal = null;
  }
  downloadReport() {
    this.toast.success('Generating and downloading Performance Review PDF report...');
  }
  triggerToast(msg) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
  static {
    this.ɵfac = function EmpPerformanceComponent_Factory(t) {
      return new (t || EmpPerformanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpPerformanceComponent,
      selectors: [["app-emp-performance"]],
      decls: 118,
      vars: 15,
      consts: [["title", "My Performance", "subtitle", "Track your quarterly performance ratings, skills, and manager feedback", 3, "breadcrumbs"], [1, "btn-header-action", 3, "click"], [1, "fas", "fa-file-download"], [1, "my-performance-container"], [1, "perf-hero-banner"], [1, "hero-score-box"], [1, "score-circle-wrap"], ["viewBox", "0 0 120 120", 1, "gauge-svg"], ["cx", "60", "cy", "60", "r", "52", "fill", "none", "stroke", "rgba(255,255,255,0.18)", "stroke-width", "8"], ["cx", "60", "cy", "60", "r", "52", "fill", "none", "stroke", "#ffffff", "stroke-width", "8", "stroke-dasharray", "326.7", "stroke-dashoffset", "39.2", "stroke-linecap", "round", "transform", "rotate(-90 60 60)"], [1, "score-center-text"], [1, "score-number"], [1, "score-label-sub"], [1, "hero-score-meta"], [1, "meta-rank-badge"], [1, "fas", "fa-crown"], [1, "meta-title"], [1, "meta-status-pill"], [1, "hero-kpi-grid"], [1, "kpi-card"], [1, "kpi-icon-box", "box-blue"], [1, "fas", "fa-bullseye"], [1, "kpi-info"], [1, "kpi-val"], [1, "kpi-lbl"], [1, "kpi-icon-box", "box-green"], [1, "fas", "fa-rocket"], [1, "kpi-icon-box", "box-yellow"], [1, "fas", "fa-star"], [1, "kpi-icon-box", "box-purple"], [1, "fas", "fa-trophy"], [1, "perf-middle-grid"], [1, "section-card", "metrics-card"], [1, "card-header"], [1, "fas", "fa-chart-bar", "text-blue"], [1, "sub-txt"], [1, "metrics-list"], ["class", "metric-item", 4, "ngFor", "ngForOf"], [1, "section-card", "ratings-card"], [1, "fas", "fa-history", "text-purple"], [1, "timeline-list"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "section-card"], [1, "card-toolbar"], [1, "toolbar-title"], [1, "fas", "fa-list-check", "text-blue"], [1, "toolbar-actions"], [1, "filter-lbl"], [1, "select-year", 3, "ngModel", "ngModelChange"], ["value", "2025"], ["value", "2024"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], [1, "metric-item"], [1, "metric-header"], [1, "metric-title"], [1, "metric-icon-mini"], [1, "fas"], [1, "m-name"], [1, "m-score"], [1, "metric-progress-track"], [1, "metric-progress-fill"], [1, "timeline-item"], [1, "timeline-badge-icon"], [1, "fas", "fa-award"], [1, "timeline-content"], [1, "t-top-line"], [1, "t-period"], [1, "t-score-chip"], [1, "t-bottom-line"], [1, "star-rating"], ["class", "fas fa-star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "t-date"], [1, "task-count-pill"], [1, "fas", "fa-check-circle", "text-green"], [1, "overall-badge"], [1, "reviewer-cell"], [1, "reviewer-avatar"], [1, "reviewer-info"], [1, "feedback-cell"], [1, "feedback-preview-text", 3, "title"], [1, "btn-view-feedback", 3, "click"], [1, "fas", "fa-eye"], ["colspan", "8", 1, "text-center", "py-4", "text-gray"], [1, "modal-backdrop", 3, "click"], [1, "feedback-modal-card", 3, "click"], [1, "modal-header"], [1, "header-left"], [1, "fas", "fa-clipboard-check", "text-blue"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "modal-review-summary"], [1, "reviewer-profile"], [1, "big-avatar"], [1, "modal-score-badge"], [1, "feedback-quote-box"], [1, "fas", "fa-quote-left", "quote-icon"], [1, "quote-text"], [1, "strengths-growth-grid"], [1, "box-strengths"], [1, "fas", "fa-thumbs-up", "text-green"], [1, "tags-wrap"], ["class", "strength-tag", 4, "ngFor", "ngForOf"], [1, "box-growth"], [1, "fas", "fa-chart-line", "text-blue"], ["class", "growth-tag", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "fas", "fa-download"], [1, "strength-tag"], [1, "fas", "fa-check", "text-green"], [1, "growth-tag"], [1, "fas", "fa-arrow-up", "text-blue"]],
      template: function EmpPerformanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-page-header", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpPerformanceComponent_Template_button_click_1_listener() {
            return ctx.downloadReport();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Download Review PDF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "circle", 8)(10, "circle", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "88");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "/ 100");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13)(17, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Top 5% Performer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Overall Performance Index");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "EXCELLENT PERFORMANCE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22)(29, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "18 / 20");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Goals Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19)(34, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22)(37, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "88%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "On-Time Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19)(42, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 22)(45, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "4.8 / 5.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Manager Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19)(50, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 22)(53, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "#1 Dev");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Team Rank");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 31)(58, "div", 32)(59, "div", 33)(60, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Key Competencies & Skill Breakdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Evaluated Q4 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, EmpPerformanceComponent_div_66_Template, 11, 14, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 38)(68, "div", 33)(69, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Quarterly Rating History");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Last 4 Quarters");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, EmpPerformanceComponent_div_75_Template, 14, 9, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 42)(77, "div", 43)(78, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Performance Review History");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 46)(83, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Year:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "select", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpPerformanceComponent_Template_select_ngModelChange_85_listener($event) {
            return ctx.selectedYear = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 51)(91, "table", 52)(92, "thead")(93, "tr")(94, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Review Period");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Tasks Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "On-Time Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Quality Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Overall Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Reviewer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Manager Feedback");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, EmpPerformanceComponent_tr_111_Template, 33, 12, "tr", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, EmpPerformanceComponent_tr_112_Template, 3, 1, "tr", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](113, EmpPerformanceComponent_div_113_Template, 50, 7, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metrics);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recentRatings);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedYear);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredHistory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredHistory.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeFeedbackModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.btn-header-action[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 14px rgba(0, 102, 255, 0.25);\n  transition: all 0.2s;\n}\n.btn-header-action[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(0, 102, 255, 0.35);\n  transform: translateY(-1px);\n}\n\n.my-performance-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.perf-hero-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  border-radius: 24px;\n  padding: 28px 32px;\n  color: #ffffff;\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 32px;\n  align-items: center;\n  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.25);\n  position: relative;\n  overflow: hidden;\n}\n.perf-hero-banner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 400px;\n  height: 400px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.hero-score-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding-right: 28px;\n  border-right: 1px solid rgba(255, 255, 255, 0.25);\n}\n.hero-score-box[_ngcontent-%COMP%]   .score-circle-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 110px;\n  height: 110px;\n  flex-shrink: 0;\n}\n.hero-score-box[_ngcontent-%COMP%]   .score-circle-wrap[_ngcontent-%COMP%]   .gauge-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));\n}\n.hero-score-box[_ngcontent-%COMP%]   .score-circle-wrap[_ngcontent-%COMP%]   .score-center-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.hero-score-box[_ngcontent-%COMP%]   .score-circle-wrap[_ngcontent-%COMP%]   .score-center-text[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  letter-spacing: -1px;\n}\n.hero-score-box[_ngcontent-%COMP%]   .score-circle-wrap[_ngcontent-%COMP%]   .score-center-text[_ngcontent-%COMP%]   .score-label-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.85;\n  font-weight: 600;\n  margin-top: 2px;\n}\n.hero-score-box[_ngcontent-%COMP%]   .hero-score-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.hero-score-box[_ngcontent-%COMP%]   .hero-score-meta[_ngcontent-%COMP%]   .meta-rank-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(4px);\n  padding: 4px 10px;\n  border-radius: 14px;\n  font-size: 11px;\n  font-weight: 700;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.hero-score-box[_ngcontent-%COMP%]   .hero-score-meta[_ngcontent-%COMP%]   .meta-rank-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.hero-score-box[_ngcontent-%COMP%]   .hero-score-meta[_ngcontent-%COMP%]   .meta-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -0.2px;\n}\n.hero-score-box[_ngcontent-%COMP%]   .hero-score-meta[_ngcontent-%COMP%]   .meta-status-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.8px;\n  color: #dcfce7;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.hero-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 18px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: all 0.2s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  transform: translateY(-2px);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon-box.box-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon-box.box-green[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon-box.box-yellow[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon-box.box-purple[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%]   .kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  opacity: 0.85;\n  font-weight: 500;\n}\n\n\n\n.perf-middle-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.section-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.section-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .sub-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n\n\n\n.metrics-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.metric-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%]   .metric-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%]   .metric-title[_ngcontent-%COMP%]   .metric-icon-mini[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%]   .metric-title[_ngcontent-%COMP%]   .m-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%]   .m-score[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.metric-item[_ngcontent-%COMP%]   .metric-progress-track[_ngcontent-%COMP%]   .metric-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n\n\n.timeline-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px;\n  border: 1px solid #f1f5f9;\n  border-radius: 14px;\n  background: #f8fafc;\n  transition: all 0.2s ease;\n}\n.timeline-item[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-badge-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  color: #0066ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n  flex-shrink: 0;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-top-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-top-line[_ngcontent-%COMP%]   .t-period[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-top-line[_ngcontent-%COMP%]   .t-score-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 800;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-bottom-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-bottom-line[_ngcontent-%COMP%]   .star-rating[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  color: #cbd5e1;\n  font-size: 12px;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-bottom-line[_ngcontent-%COMP%]   .star-rating[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .t-bottom-line[_ngcontent-%COMP%]   .t-date[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n}\n\n\n\n.card-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.card-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .filter-lbl[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #64748b;\n}\n.card-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .select-year[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: #ffffff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n  outline: none;\n  cursor: pointer;\n}\n.card-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .select-year[_ngcontent-%COMP%]:focus {\n  border-color: #0066ff;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  text-align: left;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 13.5px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.task-count-pill[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n\n.overall-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 800;\n  white-space: nowrap;\n  letter-spacing: 0.2px;\n}\n.overall-badge.overall--excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.overall-badge.overall--good[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.overall-badge.overall--average[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n  border: 1px solid #fde68a;\n}\n\n.reviewer-cell[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  white-space: nowrap;\n}\n.reviewer-cell[_ngcontent-%COMP%]   .reviewer-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 800;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 102, 255, 0.2);\n}\n.reviewer-cell[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  line-height: 1.3;\n}\n.reviewer-cell[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.reviewer-cell[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 500;\n}\n\n.feedback-cell[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n.feedback-cell[_ngcontent-%COMP%]   .feedback-preview-text[_ngcontent-%COMP%] {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #64748b;\n  font-size: 13px;\n}\n\n.btn-view-feedback[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #0066ff;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 12.5px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.btn-view-feedback[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  border-color: #93c5fd;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 16px;\n}\n\n.feedback-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 620px;\n  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  cursor: pointer;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.modal-review-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px 18px;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .reviewer-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .reviewer-profile[_ngcontent-%COMP%]   .big-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 14px;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .reviewer-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .reviewer-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .modal-score-badge[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .modal-score-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #64748b;\n}\n.modal-review-summary[_ngcontent-%COMP%]   .modal-score-badge[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: #0066ff;\n  margin: 0;\n}\n\n.feedback-quote-box[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-left: 4px solid #0066ff;\n  border-radius: 12px;\n  padding: 16px;\n  position: relative;\n}\n.feedback-quote-box[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #93c5fd;\n  margin-bottom: 6px;\n  display: block;\n}\n.feedback-quote-box[_ngcontent-%COMP%]   .quote-text[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #1e3a8a;\n  line-height: 1.6;\n  margin: 0;\n  font-style: italic;\n}\n\n.strengths-growth-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.strengths-growth-grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.strengths-growth-grid[_ngcontent-%COMP%]   .tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.strengths-growth-grid[_ngcontent-%COMP%]   .strength-tag[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.strengths-growth-grid[_ngcontent-%COMP%]   .growth-tag[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.25);\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 102, 255, 0.35);\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 20000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n@media (max-width: 1024px) {\n  .perf-hero-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .perf-hero-banner[_ngcontent-%COMP%]   .hero-score-box[_ngcontent-%COMP%] {\n    border-right: none;\n    padding-right: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    padding-bottom: 20px;\n  }\n  .hero-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .perf-middle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS1wZXJmb3JtYW5jZS9teS1wZXJmb3JtYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrR0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw4Q0FBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0EseUNBQUE7QUFDQTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZGQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtBQUROO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFD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K0NBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7QUEvREY7QUFpRUU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUEvREo7QUFrRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWhFSjs7QUFvRUE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtFQWpFRjtFQW1FRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpREFBQTtJQUNBLG9CQUFBO0VBakVKO0VBcUVBO0lBQ0UscUNBQUE7RUFuRUY7RUFzRUE7SUFDRSwwQkFBQTtFQXBFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5idG4taGVhZGVyLWFjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwYThmZiAwJSwgIzAwNjZmZiAxMDAlKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAxMDIsIDI1NSwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjM1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5teS1wZXJmb3JtYW5jZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi8qIDEuIEV4ZWN1dGl2ZSBQZXJmb3JtYW5jZSBIZXJvIEJhbm5lciAqL1xyXG4ucGVyZi1oZXJvLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwYThmZiAwJSwgIzAwNjZmZiAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDI4cHggMzJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzYwcHggMWZyO1xyXG4gIGdhcDogMzJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMjUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwJTtcclxuICAgIHJpZ2h0OiAtMjAlO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tc2NvcmUtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuXHJcbiAgLnNjb3JlLWNpcmNsZS13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAuZ2F1Z2Utc3ZnIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjb3JlLWNlbnRlci10ZXh0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgICAgIC5zY29yZS1udW1iZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2NvcmUtbGFiZWwtc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlcm8tc2NvcmUtbWV0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNnB4O1xyXG5cclxuICAgIC5tZXRhLXJhbmstYmFkZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG5cclxuICAgICAgaSB7IGNvbG9yOiAjZmFjYzE1OyB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1ldGEtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgIH1cclxuXHJcbiAgICAubWV0YS1zdGF0dXMtcGlsbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgICBjb2xvcjogI2RjZmNlNztcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBRdWljayBLUEkgQ2FyZHMgR3JpZCAqL1xyXG4uaGVyby1rcGktZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmtwaS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIH1cclxuXHJcbiAgLmtwaS1pY29uLWJveCB7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgJi5ib3gtYmx1ZSB7IGNvbG9yOiAjMDA2NmZmOyB9XHJcbiAgICAmLmJveC1ncmVlbiB7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbiAgICAmLmJveC15ZWxsb3cgeyBjb2xvcjogI2Y1OWUwYjsgfVxyXG4gICAgJi5ib3gtcHVycGxlIHsgY29sb3I6ICM4YjVjZjY7IH1cclxuICB9XHJcblxyXG4gIC5rcGktaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAua3BpLXZhbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgIH1cclxuXHJcbiAgICAua3BpLWxibCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogMi4gTWlkZGxlIEdyaWQgU2VjdGlvbiAqL1xyXG4ucGVyZi1taWRkbGUtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzODBweDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWItdHh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFNraWxscyBCcmVha2Rvd24gKi9cclxuLm1ldHJpY3MtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm1ldHJpYy1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIC5tZXRyaWMtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5tZXRyaWMtdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAubWV0cmljLWljb24tbWluaSB7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubS1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm0tc2NvcmUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWV0cmljLXByb2dyZXNzLXRyYWNrIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5tZXRyaWMtcHJvZ3Jlc3MtZmlsbCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogUXVhcnRlcmx5IFJhdGluZ3MgVGltZWxpbmUgKi9cclxuLnRpbWVsaW5lLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTJlOGYwO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lLWJhZGdlLWljb24ge1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICBjb2xvcjogIzAwNjZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0cHg7XHJcblxyXG4gICAgLnQtdG9wLWxpbmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAudC1wZXJpb2Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudC1zY29yZS1jaGlwIHtcclxuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudC1ib3R0b20tbGluZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIC5zdGFyLXJhdGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDNweDtcclxuICAgICAgICBjb2xvcjogI2NiZDVlMTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAgIC5maWxsZWQge1xyXG4gICAgICAgICAgY29sb3I6ICNmNTllMGI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudC1kYXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogMy4gUGVyZm9ybWFuY2UgSGlzdG9yeSBTZWN0aW9uICYgVGFibGUgKi9cclxuLmNhcmQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLnRvb2xiYXItdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9vbGJhci1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgLmZpbHRlci1sYmwge1xyXG4gICAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdC15ZWFyIHtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIHRoIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDExLjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGJvZHkgdHIge1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFzay1jb3VudC1waWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG4gIGNvbG9yOiAjMTU4MDNkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbiAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5vdmVyYWxsLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcblxyXG4gICYub3ZlcmFsbC0tZXhjZWxsZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XHJcbiAgICBjb2xvcjogIzE1ODAzZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbiAgfVxyXG5cclxuICAmLm92ZXJhbGwtLWdvb2Qge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgIGNvbG9yOiAjMWQ0ZWQ4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTtcclxuICB9XHJcblxyXG4gICYub3ZlcmFsbC0tYXZlcmFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xyXG4gICAgY29sb3I6ICNiNDUzMDk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRlNjhhO1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlld2VyLWNlbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIC5yZXZpZXdlci1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBhOGZmIDAlLCAjMDA2NmZmIDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMik7XHJcbiAgfVxyXG5cclxuICAucmV2aWV3ZXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICB9XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZlZWRiYWNrLWNlbGwge1xyXG4gIG1heC13aWR0aDogMjYwcHg7XHJcblxyXG4gIC5mZWVkYmFjay1wcmV2aWV3LXRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXZpZXctZmVlZGJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBjb2xvcjogIzAwNjZmZjtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICM5M2M1ZmQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBEZXRhaWxlZCBGZWVkYmFjayBNb2RhbCAqL1xyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjYpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZmVlZGJhY2stbW9kYWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyNXB4IDYwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlVXAgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxOHB4IDI0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2Y4ZmFmYyAxMDAlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuaGVhZGVyLWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgaSB7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICBtYXJnaW46IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICMwZjE3MmE7IH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm1vZGFsLXJldmlldy1zdW1tYXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMThweDtcclxuXHJcbiAgLnJldmlld2VyLXByb2ZpbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgLmJpZy1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMGE4ZmYgMCUsICMwMDY2ZmYgMTAwJSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RhbC1zY29yZS1iYWRnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogIzAwNjZmZjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZlZWRiYWNrLXF1b3RlLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDY2ZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnF1b3RlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5xdW90ZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICMxZTNhOGE7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxufVxyXG5cclxuLnN0cmVuZ3Rocy1ncm93dGgtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxNHB4O1xyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG5cclxuICAudGFncy13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDZweDtcclxuICB9XHJcblxyXG4gIC5zdHJlbmd0aC10YWcge1xyXG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcclxuICAgIGNvbG9yOiAjMTU4MDNkO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVweDtcclxuICB9XHJcblxyXG4gIC5ncm93dGgtdGFnIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICBjb2xvcjogIzFkNGVkODtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxNHB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDEwcHg7XHJcblxyXG4gIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyB9XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwYThmZiAwJSwgIzAwNjZmZiAxMDAlKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMjUpO1xyXG5cclxuICAgICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMzUpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUb2FzdCBOb3RpZmljYXRpb24gKi9cclxuLnRvYXN0LW5vdGlmaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjRweDtcclxuICByaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgei1pbmRleDogMjAwMDA7XHJcblxyXG4gICYuc2hvdyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAucGVyZi1oZXJvLWJhbm5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAuaGVyby1zY29yZS1ib3gge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlcm8ta3BpLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcblxyXG4gIC5wZXJmLW1pZGRsZS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7537:
/*!*********************************************************************!*\
  !*** ./src/app/modules/employee/my-profile/my-profile.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpProfileComponent: () => (/* binding */ EmpProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function EmpProfileComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 61);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.profileData.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function EmpProfileComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmpProfileComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpProfileComponent_div_138_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.closeEditModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 68)(8, "div", 69)(9, "div", 70)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.editForm.firstName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 70)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.editForm.lastName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 70)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.editForm.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 70)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.editForm.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 70)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.editForm.organization = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 70)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.editForm.department = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 70)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.editForm.team = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 70)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Work Shift");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmpProfileComponent_div_138_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.editForm.workShift = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 73)(42, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpProfileComponent_div_138_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.closeEditModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpProfileComponent_div_138_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.saveProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.editForm.workShift);
  }
}
class EmpProfileComponent {
  constructor(authService, employeeService, attendanceService, leaveService, toast, router) {
    this.authService = authService;
    this.employeeService = employeeService;
    this.attendanceService = attendanceService;
    this.leaveService = leaveService;
    this.toast = toast;
    this.router = router;
    this.profileData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'Employee',
      organization: 'Envision Beyond India Pvt Ltd',
      employeeId: '',
      department: '',
      team: '',
      workShift: 'General Shift (09:30 AM - 06:30 PM)',
      reportingManager: '',
      joinedDate: '',
      avatarUrl: ''
    };
    this.stats = {
      presentDays: 0,
      leaveBalance: 0,
      attendanceRate: '0%'
    };
    this.preferences = {
      pushNotifications: true,
      gpsGeofence: 'Active'
    };
    this.showEditModal = false;
    this.editForm = {
      ...this.profileData
    };
    this.toastMessage = '';
    this.showToast = false;
  }
  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      if (user.firstName) this.profileData.firstName = user.firstName.toUpperCase();
      if (user.lastName) this.profileData.lastName = user.lastName.toUpperCase();
      if (user.email) this.profileData.email = user.email;
      if (user.employeeId) this.profileData.employeeId = user.employeeId;
      if (user.department) this.profileData.department = user.department;
      if (user.designation) this.profileData.role = user.designation;
      if (user.avatar) this.profileData.avatarUrl = user.avatar;
    }
    this.loadProfile();
    this.loadStats();
  }
  loadProfile() {
    const id = this.authService.currentUser?.employeeId;
    if (!id) return;
    this.employeeService.getEmployee(id).subscribe({
      next: emp => {
        if (emp.firstName) this.profileData.firstName = emp.firstName.toUpperCase();
        if (emp.lastName) this.profileData.lastName = emp.lastName.toUpperCase();
        if (emp.email) this.profileData.email = emp.email;
        if (emp.phone) this.profileData.phone = emp.phone;
        if (emp.employeeId) this.profileData.employeeId = emp.employeeId;
        if (emp.department) this.profileData.department = emp.department;
        if (emp.teamName) this.profileData.team = emp.teamName;
        if (emp.designation) this.profileData.role = emp.designation;
        if (emp.reportingManagerName) this.profileData.reportingManager = emp.reportingManagerName;
        if (emp.joiningDate) this.profileData.joinedDate = this.formatDate(emp.joiningDate);
        if (emp.avatar) this.profileData.avatarUrl = emp.avatar;
      },
      error: () => this.toast.error('Failed to load profile details.')
    });
  }
  loadStats() {
    const id = this.authService.currentUser?.employeeId;
    if (!id) return;
    this.attendanceService.getByEmployee(id).subscribe({
      next: records => {
        const list = records || [];
        const present = list.filter(r => {
          const s = String(r.status || '').toUpperCase();
          return s === 'PRESENT' || s === 'LATE';
        }).length;
        const total = list.length || 1;
        this.stats.presentDays = present;
        this.stats.attendanceRate = Math.round(present / total * 100) + '%';
      },
      error: () => undefined
    });
    this.leaveService.getBalances().subscribe({
      next: balances => {
        this.stats.leaveBalance = (balances || []).reduce((sum, b) => sum + (Number(b.remaining) || 0), 0);
      },
      error: () => undefined
    });
  }
  formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  get fullName() {
    return `${this.profileData.firstName} ${this.profileData.lastName}`.trim();
  }
  openEditModal() {
    this.editForm = {
      ...this.profileData
    };
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
  }
  saveProfile() {
    this.profileData = {
      ...this.editForm
    };
    this.showEditModal = false;
    this.toast.success('Profile updated successfully!');
  }
  triggerFileInput(fileInput) {
    fileInput.click();
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.profileData.avatarUrl = e.target.result;
        this.toast.success('Profile picture updated successfully!');
      };
      reader.readAsDataURL(file);
    }
  }
  togglePushNotifications() {
    this.preferences.pushNotifications = !this.preferences.pushNotifications;
    this.toast.success(`Push notifications ${this.preferences.pushNotifications ? 'enabled' : 'disabled'}`);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  displayToast(msg) {
    this.toastMessage = msg;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  static {
    this.ɵfac = function EmpProfileComponent_Factory(t) {
      return new (t || EmpProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.LeaveService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmpProfileComponent,
      selectors: [["app-emp-profile"]],
      decls: 143,
      vars: 23,
      consts: [[1, "profile-container"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "profile-banner-card"], ["title", "Edit Profile", 1, "edit-banner-btn", 3, "click"], [1, "fas", "fa-pen"], [1, "profile-avatar-wrapper"], [1, "avatar-circle"], ["alt", "Profile Photo", "class", "avatar-img", 3, "src", 4, "ngIf", "ngIfElse"], ["avatarInitials", ""], ["title", "Change Profile Picture", 1, "camera-btn", 3, "click"], [1, "fas", "fa-camera"], [1, "profile-name"], [1, "profile-email"], [1, "badges-container"], [1, "badge-pill", "badge-primary"], [1, "fas", "fa-user"], [1, "badge-pill", "badge-secondary"], [1, "fas", "fa-clock"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-icon-box", "icon-success"], [1, "fas", "fa-check"], [1, "metric-val"], [1, "metric-lbl"], [1, "metric-icon-box", "icon-blue"], [1, "fas", "fa-umbrella"], [1, "fas", "fa-chart-bar"], [1, "two-col-grid"], [1, "section-card"], [1, "section-header"], [1, "fas", "fa-id-badge", "section-header-icon"], [1, "details-list"], [1, "detail-item"], [1, "detail-label"], [1, "fas", "fa-city", "icon-gray"], [1, "detail-value"], [1, "fas", "fa-fingerprint", "icon-gray"], [1, "fas", "fa-building", "icon-gray"], [1, "fas", "fa-users", "icon-gray"], [1, "far", "fa-clock", "icon-gray"], [1, "far", "fa-user", "icon-gray"], [1, "far", "fa-calendar-alt", "icon-gray"], [1, "fas", "fa-shield-alt", "section-header-icon"], [1, "preference-item"], [1, "pref-left"], [1, "pref-icon-box", "box-blue"], [1, "fas", "fa-bell"], [1, "pref-text"], [1, "pref-right"], [1, "toggle-switch"], ["type", "checkbox", 3, "checked", "change"], [1, "slider"], [1, "pref-icon-box", "box-green"], [1, "fas", "fa-map-marker-alt"], [1, "active-tag"], [1, "logout-btn-outline", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["class", "modal-backdrop", 4, "ngIf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], ["alt", "Profile Photo", 1, "avatar-img", 3, "src"], [1, "avatar-placeholder"], [1, "modal-backdrop"], [1, "modal-card"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click"]],
      template: function EmpProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmpProfileComponent_Template_input_change_1_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpProfileComponent_Template_button_click_4_listener() {
            return ctx.openEditModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EmpProfileComponent_img_8_Template, 1, 1, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmpProfileComponent_ng_template_9_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpProfileComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.triggerFileInput(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19)(27, "div", 20)(28, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Present Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20)(35, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Leave Balance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20)(42, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Attendance Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 28)(49, "div", 29)(50, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Employment Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 32)(55, "div", 33)(56, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Organization");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 33)(63, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Employee ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 33)(70, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 33)(77, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 33)(84, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Work Shift");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 33)(91, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Reporting Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 33)(98, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Joined Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 29)(105, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Preferences & Security");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 44)(110, "div", 45)(111, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 48)(114, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Push Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "FCM alerts for shift & approvals");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 49)(119, "label", 50)(120, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmpProfileComponent_Template_input_change_120_listener() {
            return ctx.togglePushNotifications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 44)(123, "div", 45)(124, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 48)(127, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "GPS Geofence Validation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Verified within 500m radius");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 49)(132, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmpProfileComponent_Template_button_click_134_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "LOG OUT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, EmpProfileComponent_div_138_Template, 47, 8, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileData.avatarUrl)("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.profileData.role, " \u2022 ", ctx.profileData.department, " \u2022 ", ctx.profileData.team, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.workShift);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.presentDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.leaveBalance);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.attendanceRate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.organization);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.employeeId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.department);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.team);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.workShift);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.reportingManager);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profileData.joinedDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.preferences.pushNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showEditModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.toastMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.two-col-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  align-items: start;\n}\n\n\n\n.profile-banner-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 32px 24px 28px;\n  text-align: center;\n}\n\n.edit-banner-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #eff6ff;\n  color: #2563eb;\n  border: none;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.edit-banner-btn[_ngcontent-%COMP%]:hover {\n  background: #dbeabe;\n  color: #1d4ed8;\n  transform: translateY(-1px);\n}\n\n.profile-avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 16px;\n}\n\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #e2e8f0;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.avatar-circle[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-circle[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #94a3b8;\n}\n\n.camera-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #2563eb;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n  transition: all 0.2s ease;\n}\n.camera-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background: #1d4ed8;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.profile-email[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 16px;\n}\n\n.badges-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n}\n\n.badge-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.badge-primary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #dbeabe;\n}\n\n.badge-secondary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #dbeabe;\n}\n\n\n\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 22px 16px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.metric-icon-box[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  margin-bottom: 12px;\n}\n\n.icon-success[_ngcontent-%COMP%] {\n  color: #10b981;\n  border: 2px solid #10b981;\n  background: transparent;\n}\n\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 18px;\n}\n\n.metric-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n\n.metric-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n}\n\n\n\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  padding: 24px;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 18px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n\n.details-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f8fafc;\n}\n.detail-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n\n.icon-gray[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n  width: 18px;\n  text-align: center;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #1e293b;\n  text-align: right;\n}\n\n\n\n.preference-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  border-bottom: 1px solid #f8fafc;\n}\n.preference-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.pref-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.pref-icon-box[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n\n.box-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n\n.box-green[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n\n.pref-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 2px;\n}\n.pref-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n}\n\n\n\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 46px;\n  height: 26px;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #cbd5e1;\n  transition: 0.3s;\n  border-radius: 26px;\n}\n.toggle-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2563eb;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n\n.active-tag[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 20px;\n}\n\n\n\n.logout-btn-outline[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border: 2px solid #ef4444;\n  border-radius: 50px;\n  background: transparent;\n  color: #ef4444;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n  margin-top: 8px;\n}\n.logout-btn-outline[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n  color: #dc2626;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 16px;\n}\n\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 600px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalFadeIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 18px;\n  color: #64748b;\n  cursor: pointer;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 14px;\n  color: #0f172a;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n  background: #2563eb;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 2000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n@media (max-width: 900px) {\n  .two-col-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0dBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQSwwQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtBQUZGO0FBSUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BLG9CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFIRjtBQUtFO0VBQ0UsMkJBQUE7QUFISjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQSxxQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQU5GO0FBUUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBTko7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUEsOEJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBUEY7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFQSjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVlFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFUSjtBQVdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBVEo7O0FBYUEsa0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVZGO0FBWUU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFWSjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFYTjtBQWVFO0VBQ0UseUJBQUE7QUFiSjtBQWdCRTtFQUNFLDJCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWtCQSxxQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBZkY7QUFpQkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQWZKOztBQW1CQSxrQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBaEJGOztBQW1CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBaEJGO0FBQ0Y7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFqQkY7QUFtQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQWpCSjtBQW9CRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBQUE7QUFsQk47O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBcEJGO0FBc0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXBCSjtBQXVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBckJKO0FBdUJJO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtBQXJCTjs7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQXZCRjtBQXlCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF2Qko7QUF5Qkk7RUFDRSxtQkFBQTtBQXZCTjtBQTJCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF6Qko7QUEyQkk7RUFDRSxtQkFBQTtBQXpCTjs7QUE4QkEsdUJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7QUEzQkY7QUE2QkU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUEzQko7QUE4QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQTVCSjs7QUFnQ0E7RUFDRTtJQUNFLDBCQUFBO0VBN0JGO0FBQ0Y7QUFnQ0E7RUFDRTtJQUNFLDBCQUFBO0VBOUJGO0VBaUNBO0lBQ0UsMEJBQUE7RUEvQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE4cHg7XHJcbn1cclxuXHJcbi50d28tY29sLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMThweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi8qIDEuIEhlYWRlciBCYW5uZXIgQ2FyZCAqL1xyXG4ucHJvZmlsZS1iYW5uZXItY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBwYWRkaW5nOiAzMnB4IDI0cHggMjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWJhbm5lci1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICBjb2xvcjogIzI1NjNlYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJlYWJlO1xyXG4gICAgY29sb3I6ICMxZDRlZDg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1hdmF0YXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDkycHg7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiAgLmF2YXRhci1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5hdmF0YXItcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FtZXJhLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNywgOTksIDIzNSwgMC4zNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1lbWFpbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbn1cclxuXHJcbi5iYWRnZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhZGdlLXBpbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJhZGdlLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgY29sb3I6ICMyNTYzZWI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZWFiZTtcclxufVxyXG5cclxuLmJhZGdlLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICBjb2xvcjogIzI1NjNlYjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJlYWJlO1xyXG59XHJcblxyXG4vKiAyLiBNZXRyaWNzIEdyaWQgKi9cclxuLm1ldHJpY3MtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm1ldHJpYy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgcGFkZGluZzogMjJweCAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWV0cmljLWljb24tYm94IHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmljb24tc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMxMGI5ODE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzEwYjk4MTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmljb24tYmx1ZSB7XHJcbiAgY29sb3I6ICMyNTYzZWI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubWV0cmljLXZhbCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4ubWV0cmljLWxibCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbi8qIDMuIFNlY3Rpb24gQ2FyZHMgKi9cclxuLnNlY3Rpb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAuc2VjdGlvbi1oZWFkZXItaWNvbiB7XHJcbiAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWxzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZmFmYztcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWwtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzk0YTNiODtcclxufVxyXG5cclxuLmljb24tZ3JheSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRldGFpbC12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLyogNC4gUHJlZmVyZW5jZXMgJiBTZWN1cml0eSAqL1xyXG4ucHJlZmVyZW5jZS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZmFmYztcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wcmVmLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5wcmVmLWljb24tYm94IHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uYm94LWJsdWUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgY29sb3I6ICMyNTYzZWI7XHJcbn1cclxuXHJcbi5ib3gtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6ICNlY2ZkZjU7XHJcbiAgY29sb3I6ICMxMGI5ODE7XHJcbn1cclxuXHJcbi5wcmVmLXRleHQge1xyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMCAwIDJweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFRvZ2dsZSBTd2l0Y2ggKi9cclxuLnRvZ2dsZS1zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgbGVmdDogM3B4O1xyXG4gICAgICBib3R0b206IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtdGFnIHtcclxuICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xyXG4gIGNvbG9yOiAjMTZhMzRhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDRweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qIDUuIExvZ291dCBCdXR0b24gKi9cclxuLmxvZ291dC1idG4tb3V0bGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWY0NDQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYzI2MjY7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxpbmcgKi9cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ubW9kYWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IG1vZGFsRmFkZUluIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxGYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWF4LWhlaWdodDogNzB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA2cHg7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzNywgOTksIDIzNSwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG5cclxuICAuYnRuLWNhbmNlbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLXNhdmUge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogVG9hc3QgTm90aWZpY2F0aW9uICovXHJcbi50b2FzdC1ub3RpZmljYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDI0cHg7XHJcbiAgcmlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcblxyXG4gICYuc2hvdyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC50d28tY29sLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAubWV0cmljcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2471:
/*!*****************************************************************!*\
  !*** ./src/app/modules/employee/my-tasks/my-tasks.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpTasksComponent: () => (/* binding */ EmpTasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);





function EmpTasksComponent_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
  }
}
function EmpTasksComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
  }
}
function EmpTasksComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
  }
}
function EmpTasksComponent_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
  }
}
function EmpTasksComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
  }
}
function EmpTasksComponent_div_25_div_1_div_11_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\"", t_r10.reviewComment, "\"");
  }
}
function EmpTasksComponent_div_25_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EmpTasksComponent_div_25_div_1_div_11_p_7_Template, 2, 1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", t_r10.reviewRating, "/5 Stars (", t_r10.reviewQuality, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r10.reviewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", t_r10.reviewComment);
  }
}
function EmpTasksComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmpTasksComponent_div_25_div_1_div_11_Template, 8, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 28)(14, "div", 29)(15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 34)(24, "div", 35)(25, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_25_div_1_Template_button_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const t_r10 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.openReviewModal(t_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("badge--" + t_r10.status.toLowerCase().replace(" ", "-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r10.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r10.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", t_r10.reviewRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.getInitial(t_r10.leadName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r10.leadName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", t_r10.startDate, " - ", t_r10.endDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r10.reportsCount, " Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r10.membersCount, " Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r10.reviewRating ? "Edit Review" : "Review Task", " ");
  }
}
function EmpTasksComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EmpTasksComponent_div_25_div_1_Template, 34, 14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.filteredTasks);
  }
}
function EmpTasksComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No tasks found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Try clearing your search filters or selecting a different status.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function EmpTasksComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Create New Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_27_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.closeAddTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 59)(9, "div", 60)(10, "div", 61)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Task Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.newTask.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 64)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.newTask.department = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 64)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_select_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.newTask.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "On Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Planning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 61)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_textarea_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.newTask.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 64)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Lead / Manager Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.newTask.leadName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 64)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Team Members Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.newTask.membersCount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 64)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.newTask.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 64)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_27_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.newTask.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 76)(53, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_27_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.closeAddTaskModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_27_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.saveNewTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.leadName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.membersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newTask.endDate);
  }
}
function EmpTasksComponent_div_28_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_28_i_14_Template_i_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const s_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.setStarRating(s_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("filled", s_r30 <= ctx_r29.reviewForm.rating);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function EmpTasksComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53)(1, "div", 79)(2, "div", 55)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_28_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.closeReviewModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 59)(9, "div", 80)(10, "div", 61)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Task Rating (1 to 5 Stars)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EmpTasksComponent_div_28_i_14_Template, 1, 2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 61)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Performance Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_28_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.reviewForm.quality = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Excellent (Outstanding Work)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Good (Meets All Requirements)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Satisfactory (Acceptable Output)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Needs Improvement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 61)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Review Notes & Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "textarea", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_div_28_Template_textarea_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.reviewForm.comment = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 76)(34, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_28_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.closeReviewModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_div_28_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.saveTaskReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Submit Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Review Task: ", ctx_r8.selectedTaskForReview.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r8.reviewForm.rating, " / 5 Stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.reviewForm.quality);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.reviewForm.comment);
  }
}
const _c1 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c2 = function () {
  return {
    label: "My Tasks"
  };
};
const _c3 = function (a0, a1) {
  return [a0, a1];
};
class EmpTasksComponent {
  constructor(performanceService, authService, toast) {
    this.performanceService = performanceService;
    this.authService = authService;
    this.toast = toast;
    this.searchQuery = '';
    this.selectedStatus = 'All Status';
    this.statusList = ['All Status', 'Active', 'Completed', 'On Hold', 'Planning'];
    this.showAddTaskModal = false;
    this.newTask = {
      title: '',
      department: 'AI & Research',
      description: '',
      leadName: 'Vikram Mehta (TL)',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 86400000 * 90).toISOString().split('T')[0],
      reportsCount: 0,
      membersCount: 1,
      status: 'Active'
    };
    this.showReviewModal = false;
    this.selectedTaskForReview = null;
    this.reviewForm = {
      rating: 5,
      quality: 'Excellent',
      comment: ''
    };
    this.tasks = [];
    this.showToast = false;
    this.toastMsg = '';
  }
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks() {
    this.performanceService.getMyTasks().subscribe({
      next: list => {
        this.tasks = (list || []).map(t => ({
          id: t.id,
          title: t.title,
          department: t.projectName || t.assignedByName || 'General',
          description: t.description || '',
          leadName: t.assignedByName || t.assignedToName || 'Team Lead',
          startDate: this.formatDate(t.dueDate),
          endDate: this.formatDate(t.dueDate),
          reportsCount: 0,
          membersCount: 1,
          status: this.mapStatus(t.status),
          priority: t.priority,
          reviewRating: t.rating,
          reviewComment: t.reviewComments,
          reviewDate: t.completedDate ? this.formatDate(t.completedDate) : undefined,
          reviewQuality: this.mapQuality(Number(t.rating) || 0)
        }));
      },
      error: () => {
        this.tasks = [];
        this.toast.error('Failed to load tasks.');
      }
    });
  }
  mapStatus(status) {
    const s = String(status || '').toUpperCase();
    if (s === 'COMPLETED') return 'Completed';
    if (s === 'BLOCKED') return 'On Hold';
    if (s === 'IN_REVIEW' || s === 'IN_PROGRESS' || s === 'TODO') return 'Active';
    return 'Planning';
  }
  mapQuality(rating) {
    if (rating >= 5) return 'Excellent';
    if (rating >= 4) return 'Good';
    if (rating >= 3) return 'Satisfactory';
    if (rating >= 2) return 'Needs Improvement';
    return 'Excellent';
  }
  statusToApi(status) {
    if (status === 'Completed') return 'COMPLETED';
    if (status === 'On Hold') return 'BLOCKED';
    return 'IN_PROGRESS';
  }
  formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });
  }
  get filteredTasks() {
    return this.tasks.filter(t => {
      if (this.selectedStatus !== 'All Status' && t.status !== this.selectedStatus) {
        return false;
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchTitle = t.title.toLowerCase().includes(q);
        const matchDesc = t.description.toLowerCase().includes(q);
        const matchDept = t.department.toLowerCase().includes(q);
        const matchLead = t.leadName.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchDept && !matchLead) {
          return false;
        }
      }
      return true;
    });
  }
  getInitial(name) {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }
  openAddTaskModal() {
    this.newTask = {
      title: '',
      department: 'AI & Research',
      description: '',
      leadName: 'Vikram Mehta (TL)',
      startDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      endDate: new Date(Date.now() + 86400000 * 90).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      reportsCount: 0,
      membersCount: 1,
      status: 'Active'
    };
    this.showAddTaskModal = true;
  }
  closeAddTaskModal() {
    this.showAddTaskModal = false;
  }
  saveNewTask() {
    if (!this.newTask.title?.trim()) {
      this.toast.error('Please enter a task title.');
      return;
    }
    const employeeId = this.authService.currentUser?.employeeId;
    if (!employeeId) {
      this.tasks.unshift({
        id: Date.now().toString(),
        title: this.newTask.title,
        department: this.newTask.department || 'General',
        description: this.newTask.description || '',
        leadName: this.newTask.leadName || 'Current User',
        startDate: this.newTask.startDate || this.formatDate(new Date().toISOString()),
        endDate: this.newTask.endDate || this.formatDate(new Date(Date.now() + 86400000 * 90).toISOString()),
        reportsCount: Number(this.newTask.reportsCount || 0),
        membersCount: Number(this.newTask.membersCount || 1),
        status: this.newTask.status || 'Active'
      });
      this.showAddTaskModal = false;
      this.toast.success('New task added successfully!');
      return;
    }
    this.performanceService.createTask({
      title: this.newTask.title,
      description: this.newTask.description || '',
      assignedToId: employeeId,
      priority: 'MEDIUM',
      dueDate: this.newTask.endDate || new Date().toISOString(),
      estimatedHours: undefined
    }).subscribe({
      next: () => {
        this.showAddTaskModal = false;
        this.toast.success('New task created successfully!');
        this.loadTasks();
      },
      error: () => this.toast.error('Failed to create task.')
    });
  }
  openReviewModal(task) {
    this.selectedTaskForReview = task;
    this.reviewForm = {
      rating: task.reviewRating || 5,
      quality: task.reviewQuality || 'Excellent',
      comment: task.reviewComment || ''
    };
    this.showReviewModal = true;
  }
  closeReviewModal() {
    this.showReviewModal = false;
    this.selectedTaskForReview = null;
  }
  setStarRating(rating) {
    this.reviewForm.rating = rating;
  }
  saveTaskReview() {
    if (!this.selectedTaskForReview) return;
    const task = this.selectedTaskForReview;
    this.performanceService.reviewTask(task.id, {
      rating: this.reviewForm.rating,
      reviewComments: this.reviewForm.comment,
      status: this.statusToApi(task.status)
    }).subscribe({
      next: () => {
        this.showReviewModal = false;
        this.selectedTaskForReview = null;
        this.toast.success(`Review submitted for task "${task.title}"!`);
        this.loadTasks();
      },
      error: () => this.toast.error('Failed to submit review.')
    });
  }
  triggerToast(msg) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
  static {
    this.ɵfac = function EmpTasksComponent_Factory(t) {
      return new (t || EmpTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpTasksComponent,
      selectors: [["app-emp-tasks"]],
      decls: 33,
      vars: 29,
      consts: [["title", "My Tasks", "subtitle", "Track, manage, and collaborate on your active projects and deliverables", 3, "breadcrumbs"], [1, "btn-add-task-header", 3, "click"], [1, "fas", "fa-plus"], [1, "my-tasks-page-container"], [1, "filter-container-box"], [1, "search-input-wrapper"], [1, "fas", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search by title, description, lead, department...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "status-pills-row"], [1, "status-pill", 3, "click"], ["class", "fas fa-check", 4, "ngIf"], ["class", "tasks-grid", 4, "ngIf"], ["class", "empty-state-card", 4, "ngIf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-check"], [1, "tasks-grid"], ["class", "task-card", 4, "ngFor", "ngForOf"], [1, "task-card"], [1, "card-header-block"], [1, "title-row"], [1, "task-title"], [1, "status-badge"], [1, "department-sub"], [1, "task-desc"], ["class", "existing-review-box", 4, "ngIf"], [1, "card-divider"], [1, "footer-meta-row1"], [1, "lead-info"], [1, "avatar-circle"], [1, "lead-name"], [1, "date-range"], [1, "far", "fa-calendar-alt", "calendar-icon"], [1, "footer-meta-row2"], [1, "tags-group"], [1, "tag-chip", "reports-chip"], [1, "far", "fa-check-square", "chip-icon"], [1, "tag-chip", "members-chip"], [1, "fas", "fa-users", "chip-icon"], [1, "btn-review-task", 3, "click"], [1, "fas", "fa-star"], [1, "existing-review-box"], [1, "erb-header"], [1, "erb-rating"], [1, "fas", "fa-star", "text-amber"], [1, "erb-date"], ["class", "erb-comment", 4, "ngIf"], [1, "erb-comment"], [1, "empty-state-card"], [1, "fas", "fa-folder-open", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "modal-backdrop"], [1, "modal-card"], [1, "modal-header"], [1, "fas", "fa-plus-circle", "text-blue"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "placeholder", "Enter task title (e.g. AI Studio)...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "text", "placeholder", "e.g. AI & Research", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Active"], ["value", "Completed"], ["value", "On Hold"], ["value", "Planning"], ["rows", "3", "placeholder", "Task details and expected outcome...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vikram Mehta (TL)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Mar 10, 2026", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Oct 20, 2026", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click"], [1, "modal-card", "review-modal-card"], [1, "review-modal-body"], [1, "star-rating-picker"], ["class", "fas fa-star star-icon", 3, "filled", "click", 4, "ngFor", "ngForOf"], [1, "rating-val-badge"], ["value", "Excellent"], ["value", "Good"], ["value", "Satisfactory"], ["value", "Needs Improvement"], ["rows", "4", "placeholder", "Enter detailed review comments, performance feedback, or milestone updates...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn-save", "btn-save-review", 3, "click"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-star", "star-icon", 3, "click"]],
      template: function EmpTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-page-header", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_Template_button_click_1_listener() {
            return ctx.openAddTaskModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Add New Task ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmpTasksComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.searchQuery = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_Template_button_click_10_listener() {
            return ctx.selectedStatus = "All Status";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmpTasksComponent_i_11_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " All Status ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_Template_button_click_13_listener() {
            return ctx.selectedStatus = "Active";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EmpTasksComponent_i_14_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Active ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_Template_button_click_16_listener() {
            return ctx.selectedStatus = "Completed";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EmpTasksComponent_i_17_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Completed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_Template_button_click_19_listener() {
            return ctx.selectedStatus = "On Hold";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EmpTasksComponent_i_20_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " On Hold ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpTasksComponent_Template_button_click_22_listener() {
            return ctx.selectedStatus = "Planning";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EmpTasksComponent_i_23_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Planning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EmpTasksComponent_div_25_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EmpTasksComponent_div_26_Template, 6, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EmpTasksComponent_div_27_Template, 58, 8, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EmpTasksComponent_div_28_Template, 39, 6, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](26, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedStatus === "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedStatus === "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedStatus === "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "On Hold");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedStatus === "On Hold");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "Planning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedStatus === "Planning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredTasks.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredTasks.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddTaskModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showReviewModal && ctx.selectedTaskForReview);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.btn-add-task-header[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 50px;\n  border: none;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 13.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.btn-add-task-header[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 102, 255, 0.4);\n}\n\n.my-tasks-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.filter-container-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n}\n\n\n\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  font-size: 15px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 18px 12px 46px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 14px;\n  color: #0f172a;\n  outline: none;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n\n\n\n.status-pills-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding-top: 4px;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border-radius: 25px;\n  border: 1px solid #e2e8f0;\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-pill[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: #ffffff;\n  border-color: #0066ff;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.25);\n}\n\n\n\n.tasks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.task-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 22px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n\n.card-header-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n}\n.status-badge.badge--active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.status-badge.badge--on-hold[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #ea580c;\n  border: 1px solid #fed7aa;\n}\n.status-badge.badge--completed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.status-badge.badge--planning[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n  border: 1px solid #e9d5ff;\n}\n\n.department-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0066ff;\n  margin-top: 2px;\n}\n\n.task-desc[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 12px 0 14px 0;\n  line-height: 1.5;\n  font-weight: 400;\n  flex: 1;\n}\n\n\n\n.existing-review-box[_ngcontent-%COMP%] {\n  background: rgba(255, 251, 235, 0.9607843137);\n  border: 1px solid #fef08a;\n  border-radius: 12px;\n  padding: 10px 14px;\n  margin-bottom: 14px;\n}\n.existing-review-box[_ngcontent-%COMP%]   .erb-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 700;\n  color: #b45309;\n  margin-bottom: 4px;\n}\n.existing-review-box[_ngcontent-%COMP%]   .erb-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #92400e;\n  font-size: 11.5px;\n}\n.existing-review-box[_ngcontent-%COMP%]   .erb-comment[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #78350f;\n  margin: 0;\n  font-style: italic;\n  line-height: 1.4;\n}\n\n.card-divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 14px;\n}\n\n.footer-meta-row1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  color: #475569;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.lead-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #dbeafe;\n  color: #2563eb;\n  font-weight: 700;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.lead-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #334155;\n}\n\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #64748b;\n  font-size: 12.5px;\n}\n.date-range[_ngcontent-%COMP%]   .calendar-icon[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n\n.footer-meta-row2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.tags-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.tag-chip[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.reports-chip[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.members-chip[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n}\n\n\n\n.btn-review-task[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #f59e0b;\n  background: #fffbe6;\n  color: #d97706;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s ease;\n}\n.btn-review-task[_ngcontent-%COMP%]:hover {\n  background: #f59e0b;\n  color: #ffffff;\n  box-shadow: 0 3px 10px rgba(245, 158, 11, 0.3);\n}\n\n\n\n.empty-state-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 50px 20px;\n  text-align: center;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #cbd5e1;\n  margin-bottom: 12px;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-desc[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #64748b;\n  margin: 0;\n}\n\n\n\n.star-rating-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.star-rating-picker[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #cbd5e1;\n  cursor: pointer;\n  transition: transform 0.15s ease, color 0.15s ease;\n}\n.star-rating-picker[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%]:hover, .star-rating-picker[_ngcontent-%COMP%]   .star-icon.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  transform: scale(1.15);\n}\n.star-rating-picker[_ngcontent-%COMP%]   .rating-val-badge[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #d97706;\n  background: #fef3c7;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 16px;\n}\n\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 600px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalFadeIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 18px;\n  color: #64748b;\n  cursor: pointer;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.review-modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 14px;\n  color: #0f172a;\n  outline: none;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n  background: #0066ff;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save.btn-save-review[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-save.btn-save-review[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 20000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n.text-amber[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n@media (max-width: 992px) {\n  .tasks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .footer-meta-row2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .footer-meta-row2[_ngcontent-%COMP%]   .btn-review-task[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9teS10YXNrcy9teS10YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrR0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw2Q0FBQTtFQUNBLDJDQUFBO0FBQ0Y7QUFDRTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0EsZ0NBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQSxpQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtBQUROO0FBSUk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFGTjs7QUFPQSw0QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FB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RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBdkJKO0FBeUJJO0VBQVUsbUJBQUE7QUF0QmQ7QUF3Qkk7RUFDRSw2REFBQTtBQXRCTjtBQXVCTTtFQUFVLG1CQUFBO0FBcEJoQjs7QUF5QkEsdUJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7QUF0QkY7QUF3QkU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUF0Qko7QUF5QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXZCSjs7QUEyQkE7RUFBYSxjQUFBO0FBdkJiOztBQXdCQTtFQUFjLGNBQUE7QUFwQmQ7O0FBcUJBO0VBQVksY0FBQTtBQWpCWjs7QUFtQkE7RUFDRTtJQUNFLDBCQUFBO0VBaEJGO0FBQ0Y7QUFtQkE7RUFDRTtJQUNFLDBCQUFBO0VBakJGO0VBa0JFO0lBQXlCLG1CQUFBO0VBZjNCO0VBa0JBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFQWhCRjtFQWtCRTtJQUNFLHVCQUFBO0VBaEJKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmJ0bi1hZGQtdGFzay1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMGE4ZmYgMCUsICMwMDY2ZmYgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAxMDIsIDI1NSwgMC4zKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgwLCAxMDIsIDI1NSwgMC40KTtcclxuICB9XHJcbn1cclxuXHJcbi5teS10YXNrcy1wYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLyogMS4gVG9wIEZpbHRlciBDb250YWluZXIgQm94ICovXHJcbi5maWx0ZXItY29udGFpbmVyLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxufVxyXG5cclxuLyogU2VhcmNoIElucHV0ICovXHJcbi5zZWFyY2gtaW5wdXQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMThweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxOHB4IDEycHggNDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTdGF0dXMgRmlsdGVyIFBpbGxzIFJvdyAqL1xyXG4uc3RhdHVzLXBpbGxzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsIHtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2UyZThmMDtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjZmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEwMiwgMjU1LCAwLjI1KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIDIuIFRhc2sgQ2FyZHMgR3JpZCAoMiBDb2x1bW4gRGVza3RvcCkgKi9cclxuLnRhc2tzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIHBhZGRpbmc6IDIycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLnRpdGxlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YXNrLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDNweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLmJhZGdlLS1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcclxuICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcclxuICB9XHJcblxyXG4gICYuYmFkZ2UtLW9uLWhvbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZWRkNTtcclxuICAgIGNvbG9yOiAjZWE1ODBjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlZDdhYTtcclxuICB9XHJcblxyXG4gICYuYmFkZ2UtLWNvbXBsZXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xyXG4gICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xyXG4gIH1cclxuXHJcbiAgJi5iYWRnZS0tcGxhbm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZThmZjtcclxuICAgIGNvbG9yOiAjOTMzM2VhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZDVmZjtcclxuICB9XHJcbn1cclxuXHJcbi5kZXBhcnRtZW50LXN1YiB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDY2ZmY7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4udGFzay1kZXNjIHtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBtYXJnaW46IDEycHggMCAxNHB4IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8qIEV4aXN0aW5nIFJldmlldyBQcmV2aWV3IEJveCAqL1xyXG4uZXhpc3RpbmctcmV2aWV3LWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYmY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWYwOGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuXHJcbiAgLmVyYi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNiNDUzMDk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuZXJiLWRhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjOTI0MDBlO1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgfVxyXG5cclxuICAuZXJiLWNvbW1lbnQge1xyXG4gICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICBjb2xvcjogIzc4MzUwZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLW1ldGEtcm93MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM0NzU1Njk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubGVhZC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5hdmF0YXItY2lyY2xlIHtcclxuICB3aWR0aDogMjZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNkYmVhZmU7XHJcbiAgY29sb3I6ICMyNTYzZWI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGVhZC1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG59XHJcblxyXG4uZGF0ZS1yYW5nZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG5cclxuICAuY2FsZW5kYXItaWNvbiB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXItbWV0YS1yb3cyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YWdzLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udGFnLWNoaXAge1xyXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4ucmVwb3J0cy1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG59XHJcblxyXG4ubWVtYmVycy1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gIGNvbG9yOiAjMDA2NmZmO1xyXG59XHJcblxyXG4vKiBCdXR0b24gdG8gUmV2aWV3IFRhc2sgKi9cclxuLmJ0bi1yZXZpZXctdGFzayB7XHJcbiAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjU5ZTBiO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZiZTY7XHJcbiAgY29sb3I6ICNkOTc3MDY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNTllMGI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFbXB0eSBTdGF0ZSAqL1xyXG4uZW1wdHktc3RhdGUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZzogNTBweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmVtcHR5LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmVtcHR5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMCAwIDZweDtcclxuICB9XHJcblxyXG4gIC5lbXB0eS1kZXNjIHtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTdGFyIFJhdGluZyBQaWNrZXIgKi9cclxuLnN0YXItcmF0aW5nLXBpY2tlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuXHJcbiAgLnN0YXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2NiZDVlMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLCBjb2xvciAwLjE1cyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIsICYuZmlsbGVkIHtcclxuICAgICAgY29sb3I6ICNmNTllMGI7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmF0aW5nLXZhbC1iYWRnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2Q5NzcwNjtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nICovXHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb2RhbEZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfVxyXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIgeyBjb2xvcjogIzBmMTcyYTsgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWF4LWhlaWdodDogNzB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXZpZXctbW9kYWwtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxuXHJcbiAgJi5mdWxsLXdpZHRoIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxuXHJcbiAgLmJ0bi1jYW5jZWwge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zYXZlIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NmZmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuXHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogIzAwNTJjYzsgfVxyXG5cclxuICAgICYuYnRuLXNhdmUtcmV2aWV3IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiAwJSwgI2Q5NzcwNiAxMDAlKTtcclxuICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNkOTc3MDY7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFRvYXN0IE5vdGlmaWNhdGlvbiAqL1xyXG4udG9hc3Qtbm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyNHB4O1xyXG4gIHJpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB6LWluZGV4OiAyMDAwMDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtYmx1ZSB7IGNvbG9yOiAjMDA2NmZmOyB9XHJcbi50ZXh0LWFtYmVyIHsgY29sb3I6ICNmNTllMGI7IH1cclxuLnJlcXVpcmVkIHsgY29sb3I6ICNlZjQ0NDQ7IH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC50YXNrcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmZvcm0tZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC5mb3JtLWdyb3VwLmZ1bGwtd2lkdGggeyBncmlkLWNvbHVtbjogc3BhbiAxOyB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLW1ldGEtcm93MiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgLmJ0bi1yZXZpZXctdGFzayB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8931:
/*!***************************************************************************!*\
  !*** ./src/app/modules/employee/notifications/notifications.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpNotificationsComponent: () => (/* binding */ EmpNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);




function EmpNotificationsComponent_div_10_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpNotificationsComponent_div_10_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const n_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      n_r2.read = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EmpNotificationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpNotificationsComponent_div_10_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const n_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](n_r2.read = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12)(4, "p", 13)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EmpNotificationsComponent_div_10_button_12_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpNotificationsComponent_div_10_Template_button_click_13_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const n_r2 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r9.dismiss(n_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("unread", !n_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", n_r2.iconBg)("color", n_r2.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](n_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](n_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", n_r2.message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", n_r2.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !n_r2.read);
  }
}
function EmpNotificationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/employee/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Notifications"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class EmpNotificationsComponent {
  constructor(notificationService, toast) {
    this.notificationService = notificationService;
    this.toast = toast;
    this.notifications = [];
    this.iconMap = {
      LEAVE: {
        icon: 'fas fa-check-circle',
        bg: '#dcfce7',
        color: '#16a34a'
      },
      TASK: {
        icon: 'fas fa-tasks',
        bg: '#dbeafe',
        color: '#2563eb'
      },
      PERFORMANCE: {
        icon: 'fas fa-chart-line',
        bg: '#f3e8ff',
        color: '#7c3aed'
      },
      PAYSLIP: {
        icon: 'fas fa-file-invoice-dollar',
        bg: '#fef3c7',
        color: '#d97706'
      },
      SYSTEM: {
        icon: 'fas fa-server',
        bg: '#fee2e2',
        color: '#dc2626'
      },
      MEETING: {
        icon: 'fas fa-users',
        bg: '#dbeafe',
        color: '#2563eb'
      },
      DOCUMENT: {
        icon: 'fas fa-shield-alt',
        bg: '#dcfce7',
        color: '#16a34a'
      },
      WELCOME: {
        icon: 'fas fa-hand-sparkles',
        bg: '#dcfce7',
        color: '#16a34a'
      }
    };
    this.defaultStyle = {
      icon: 'fas fa-bell',
      bg: '#f1f5f9',
      color: '#64748b'
    };
  }
  ngOnInit() {
    this.loadNotifications();
  }
  loadNotifications() {
    this.notificationService.getNotifications().subscribe({
      next: list => {
        this.notifications = (list || []).map(n => {
          const style = this.iconMap[String(n.type || '').toUpperCase()] || this.defaultStyle;
          return {
            id: n.id,
            title: n.title,
            message: n.message,
            time: this.timeAgo(n.createdAt),
            icon: style.icon,
            iconBg: style.bg,
            iconColor: style.color,
            read: n.isRead
          };
        });
      },
      error: () => {
        this.notifications = [];
        this.toast.error('Failed to load notifications.');
      }
    });
  }
  timeAgo(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    const diff = Date.now() - d.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins} minute${mins > 1 ? 's' : ''} ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hour${hrs > 1 ? 's' : ''} ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 5) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  get unreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }
  markAllRead() {
    this.notificationService.markAllRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.toast.success('All notifications marked as read.');
      },
      error: () => this.toast.error('Failed to mark notifications as read.')
    });
  }
  dismiss(n) {
    this.notificationService.delete(n.id).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(item => item !== n);
      },
      error: () => this.toast.error('Failed to dismiss notification.')
    });
  }
  static {
    this.ɵfac = function EmpNotificationsComponent_Factory(t) {
      return new (t || EmpNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmpNotificationsComponent,
      selectors: [["app-emp-notifications"]],
      decls: 12,
      vars: 9,
      consts: [["title", "Notifications", "subtitle", "Your notification center", 3, "breadcrumbs"], [1, "section-card"], [1, "card-toolbar"], [1, "toolbar-left"], [1, "unread-count"], [1, "btn-text", 3, "click"], [1, "fas", "fa-check-double"], [1, "notification-list"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "notif-item", 3, "click"], [1, "notif-icon"], [1, "notif-content"], [1, "notif-text"], [1, "notif-time"], [1, "fas", "fa-clock"], [1, "notif-actions"], ["class", "btn-icon", "title", "Mark as read", 3, "click", 4, "ngIf"], ["title", "Dismiss", 1, "btn-icon", 3, "click"], [1, "fas", "fa-times"], ["title", "Mark as read", 1, "btn-icon", 3, "click"], [1, "fas", "fa-check"], [1, "empty-state"], [1, "fas", "fa-bell-slash"]],
      template: function EmpNotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpNotificationsComponent_Template_button_click_6_listener() {
            return ctx.markAllRead();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Mark All as Read");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EmpNotificationsComponent_div_10_Template, 15, 12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmpNotificationsComponent_div_11_Template, 4, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.unreadCount, " unread notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.notifications.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n\n.card-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.unread-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.btn-text[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n\n.notification-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n}\n\n.notif-item.unread[_ngcontent-%COMP%]:hover {\n  background: #ede9fe;\n}\n\n.notif-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.notif-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #334155;\n  line-height: 1.5;\n  margin: 0;\n}\n\n.notif-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 4px;\n}\n\n.notif-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding-top: 4px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: #94a3b8;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  font-size: 12px;\n}\n\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #6366f1;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBREk7RUFBZ0IsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIseUNBQUE7RUFBd0MseUJBQUE7RUFBMkIsZ0JBQUE7QUFTOUg7O0FBUkk7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGtCQUFBO0VBQW9CLGdDQUFBO0FBZ0I1Rzs7QUFmSTtFQUFnQixlQUFBO0VBQWlCLGNBQUE7QUFvQnJDOztBQW5CSTtFQUFZLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtBQStCeEo7O0FBOUJJO0VBQWtCLGNBQUE7QUFrQ3RCOztBQWpDSTtFQUFxQixhQUFBO0VBQWUsc0JBQUE7QUFzQ3hDOztBQXJDSTtFQUFjLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixTQUFBO0VBQVcsa0JBQUE7RUFBb0IsZ0NBQUE7RUFBa0MsZUFBQTtFQUFpQiwyQkFBQTtBQStDNUk7O0FBOUNJO0VBQW9CLG1CQUFBO0FBa0R4Qjs7QUFqREk7RUFBcUIsbUJBQUE7QUFxRHpCOztBQXBESTtFQUEyQixtQkFBQTtBQXdEL0I7O0FBdkRJO0VBQWMsV0FBQTtFQUFhLFlBQUE7RUFBYyxtQkFBQTtFQUFxQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZUFBQTtFQUFpQixjQUFBO0FBa0VoSjs7QUFqRUk7RUFBaUIsT0FBQTtBQXFFckI7O0FBcEVJO0VBQWMsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLFNBQUE7QUEyRXJFOztBQTFFSTtFQUFxQixjQUFBO0FBOEV6Qjs7QUE3RUk7RUFBYyxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxlQUFBO0FBc0ZqRzs7QUFyRkk7RUFBaUIsYUFBQTtFQUFlLFFBQUE7RUFBVSxnQkFBQTtBQTJGOUM7O0FBMUZJO0VBQVksV0FBQTtFQUFhLFlBQUE7RUFBYyxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsdUJBQUE7RUFBeUIsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixvQkFBQTtFQUFzQixlQUFBO0FBeUcxTjs7QUF4R0k7RUFBa0IsbUJBQUE7RUFBcUIsY0FBQTtBQTZHM0M7O0FBNUdJO0VBQWUsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsY0FBQTtBQWtIM0Q7O0FBakhJO0VBQWlCLGVBQUE7RUFBaUIsbUJBQUE7QUFzSHRDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxyXG4gICAgLnNlY3Rpb24tY2FyZCB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDgpOyBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgICAuY2FyZC10b29sYmFyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAxNnB4IDIwcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyB9XHJcbiAgICAudW5yZWFkLWNvdW50IHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4gICAgLmJ0bi10ZXh0IHsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjb2xvcjogIzYzNjZmMTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XHJcbiAgICAuYnRuLXRleHQ6aG92ZXIgeyBjb2xvcjogIzRmNDZlNTsgfVxyXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgLm5vdGlmLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxNHB4OyBwYWRkaW5nOiAxNnB4IDIwcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yczsgfVxyXG4gICAgLm5vdGlmLWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyB9XHJcbiAgICAubm90aWYtaXRlbS51bnJlYWQgeyBiYWNrZ3JvdW5kOiAjZjVmM2ZmOyB9XHJcbiAgICAubm90aWYtaXRlbS51bnJlYWQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZWRlOWZlOyB9XHJcbiAgICAubm90aWYtaWNvbiB7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDE2cHg7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICAubm90aWYtY29udGVudCB7IGZsZXg6IDE7IH1cclxuICAgIC5ub3RpZi10ZXh0IHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzMzNDE1NTsgbGluZS1oZWlnaHQ6IDEuNTsgbWFyZ2luOiAwOyB9XHJcbiAgICAubm90aWYtdGV4dCBzdHJvbmcgeyBjb2xvcjogIzFlMjkzYjsgfVxyXG4gICAgLm5vdGlmLXRpbWUgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOTRhM2I4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgbWFyZ2luLXRvcDogNHB4OyB9XHJcbiAgICAubm90aWYtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNHB4OyBwYWRkaW5nLXRvcDogNHB4OyB9XHJcbiAgICAuYnRuLWljb24geyB3aWR0aDogMjhweDsgaGVpZ2h0OiAyOHB4OyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDZweDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiAjOTRhM2I4OyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgZm9udC1zaXplOiAxMnB4OyB9XHJcbiAgICAuYnRuLWljb246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBjb2xvcjogIzYzNjZmMTsgfVxyXG4gICAgLmVtcHR5LXN0YXRlIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2MHB4IDIwcHg7IGNvbG9yOiAjOTRhM2I4OyB9XHJcbiAgICAuZW1wdHktc3RhdGUgaSB7IGZvbnQtc2l6ZTogMzZweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_employee_employee_module_ts.js.map