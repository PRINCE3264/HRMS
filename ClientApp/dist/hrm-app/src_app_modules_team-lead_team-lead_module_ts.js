"use strict";
(self["webpackChunkhrm_app"] = self["webpackChunkhrm_app"] || []).push([["src_app_modules_team-lead_team-lead_module_ts"],{

/***/ 8283:
/*!****************************************************************************!*\
  !*** ./src/app/modules/team-lead/announcements/announcements.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlAnnouncementsComponent: () => (/* binding */ TlAnnouncementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);





function TlAnnouncementsComponent_div_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 31);
  }
}
function TlAnnouncementsComponent_div_17_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r5);
  }
}
function TlAnnouncementsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 18)(8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TlAnnouncementsComponent_div_17_div_16_Template, 1, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 25)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 26)(21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TlAnnouncementsComponent_div_17_span_22_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAnnouncementsComponent_div_17_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const a_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](a_r2.read = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Mark as Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("unread", !a_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", a_r2.iconBg)("color", a_r2.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](a_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", a_r2.iconBg)("color", a_r2.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r2.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r2.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !a_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", a_r2.tags);
  }
}
function TlAnnouncementsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No announcements found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/team-lead/dashboard"
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
class TlAnnouncementsComponent {
  constructor(announcementService) {
    this.announcementService = announcementService;
    this.searchTerm = '';
    this.filterCategory = '';
    this.announcements = [];
    this.categoryMap = {
      'Company': {
        icon: 'fas fa-building',
        iconBg: '#dbeafe',
        iconColor: '#2563eb'
      },
      'HR': {
        icon: 'fas fa-users',
        iconBg: '#dcfce7',
        iconColor: '#16a34a'
      },
      'IT': {
        icon: 'fas fa-server',
        iconBg: '#fee2e2',
        iconColor: '#dc2626'
      },
      'Events': {
        icon: 'fas fa-calendar-alt',
        iconBg: '#fef3c7',
        iconColor: '#d97706'
      }
    };
  }
  ngOnInit() {
    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data.map(a => {
        const cat = this.deriveCategory(a);
        const cfg = this.categoryMap[cat] || this.categoryMap['Company'];
        const d = new Date(a.publishedDate);
        return {
          title: a.title,
          content: a.content,
          date: d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }),
          author: a.authorName || a.author || 'HR Department',
          category: cat,
          icon: cfg.icon,
          iconBg: cfg.iconBg,
          iconColor: cfg.iconColor,
          read: false,
          tags: a.targetAudience?.length ? [...a.targetAudience] : [a.priority || 'General']
        };
      });
    });
  }
  deriveCategory(a) {
    const aud = a.targetAudience || [];
    if (aud.some(x => x.toLowerCase().includes('hr'))) return 'HR';
    if (aud.some(x => x.toLowerCase().includes('it'))) return 'IT';
    if (a.isPinned) return 'Events';
    return 'Company';
  }
  get filteredAnnouncements() {
    return this.announcements.filter(a => {
      const matchSearch = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || a.content.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCategory = !this.filterCategory || a.category === this.filterCategory;
      return matchSearch && matchCategory;
    });
  }
  static {
    this.ɵfac = function TlAnnouncementsComponent_Factory(t) {
      return new (t || TlAnnouncementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AnnouncementService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TlAnnouncementsComponent,
      selectors: [["app-tl-announcements"]],
      decls: 19,
      vars: 10,
      consts: [["title", "Announcements", "subtitle", "Company-wide announcements", 3, "breadcrumbs"], [1, "filter-bar"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search announcements...", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Company"], ["value", "HR"], ["value", "IT"], ["value", "Events"], [1, "announcements-list"], ["class", "announcement-card", 3, "unread", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "announcement-card"], [1, "announce-header"], [1, "announce-icon"], [1, "announce-meta"], [1, "meta-row"], [1, "category-badge"], [1, "announce-date"], [1, "fas", "fa-clock"], [1, "announce-author"], [1, "fas", "fa-user"], ["class", "unread-dot", 4, "ngIf"], [1, "announce-body"], [1, "announce-footer"], [1, "announce-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "btn-text", 3, "click"], [1, "fas", "fa-check"], [1, "unread-dot"], [1, "tag"], [1, "empty-state"], [1, "fas", "fa-bullhorn"]],
      template: function TlAnnouncementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TlAnnouncementsComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.searchTerm = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TlAnnouncementsComponent_Template_select_ngModelChange_5_listener($event) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TlAnnouncementsComponent_div_17_Template, 26, 19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TlAnnouncementsComponent_div_18_Template, 4, 0, "div", 13);
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
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n}\n\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.filter-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n}\n\n.announcements-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.announcement-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n\n.announcement-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.announcement-card.unread[_ngcontent-%COMP%] {\n  border-left: 3px solid #6366f1;\n}\n\n.announce-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  position: relative;\n}\n\n.announce-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n\n.announce-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.announce-meta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 6px;\n}\n\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.category-badge[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.announce-date[_ngcontent-%COMP%], .announce-author[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.unread-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #6366f1;\n  flex-shrink: 0;\n}\n\n.announce-body[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n}\n\n.announce-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.announce-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.announce-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.tag[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  font-size: 11px;\n  color: #64748b;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.btn-text[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvYW5ub3VuY2VtZW50cy9hbm5vdW5jZW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQURJO0VBQWMsYUFBQTtFQUFlLFNBQUE7RUFBVyxtQkFBQTtFQUFxQixlQUFBO0FBUWpFOztBQVBJO0VBQWMsa0JBQUE7RUFBb0IsT0FBQTtFQUFTLGdCQUFBO0FBYS9DOztBQVpJO0VBQWdCLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxRQUFBO0VBQVUsMkJBQUE7RUFBNkIsY0FBQTtFQUFnQixlQUFBO0FBcUIzRzs7QUFwQkk7RUFBb0IsV0FBQTtFQUFhLDRCQUFBO0VBQThCLHlCQUFBO0VBQTJCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsYUFBQTtFQUFlLGdCQUFBO0FBOEJuSjs7QUE3Qkk7RUFBMEIscUJBQUE7RUFBdUIsNkNBQUE7QUFrQ3JEOztBQWpDSTtFQUFxQixrQkFBQTtFQUFvQix5QkFBQTtFQUEyQixtQkFBQTtFQUFxQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxnQkFBQTtBQTBDN0g7O0FBekNJO0VBQXNCLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixTQUFBO0FBK0NqRTs7QUE5Q0k7RUFBcUIsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIseUNBQUE7RUFBd0MsZ0JBQUE7RUFBa0IsMkJBQUE7QUF1RHJKOztBQXRESTtFQUEyQix5Q0FBQTtBQTBEL0I7O0FBekRJO0VBQTRCLDhCQUFBO0FBNkRoQzs7QUE1REk7RUFBbUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxhQUFBO0VBQWUsa0JBQUE7QUFvRXJGOztBQW5FSTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixlQUFBO0VBQWlCLGNBQUE7QUE4RW5KOztBQTdFSTtFQUFpQixPQUFBO0FBaUZyQjs7QUFoRkk7RUFBb0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGVBQUE7QUF1RjNFOztBQXRGSTtFQUFZLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQVcsZUFBQTtBQTZGL0Q7O0FBNUZJO0VBQWtCLGlCQUFBO0VBQW1CLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsZ0JBQUE7QUFtRy9FOztBQWxHSTtFQUFtQyxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUEwRzVHOztBQXpHSTtFQUFjLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIsY0FBQTtBQWlIdEY7O0FBaEhJO0VBQWlCLG9CQUFBO0FBb0hyQjs7QUFuSEk7RUFBbUIsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLFNBQUE7QUEwSDFFOztBQXpISTtFQUFtQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0Msa0JBQUE7RUFBb0IsNkJBQUE7QUFpSS9HOztBQWhJSTtFQUFpQixhQUFBO0VBQWUsUUFBQTtFQUFVLGVBQUE7QUFzSTlDOztBQXJJSTtFQUFPLGlCQUFBO0VBQW1CLG1CQUFBO0VBQXFCLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsY0FBQTtBQTZJeEY7O0FBNUlJO0VBQVksZ0JBQUE7RUFBa0IsWUFBQTtFQUFjLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBd0p4Sjs7QUF2Skk7RUFBa0IsY0FBQTtBQTJKdEI7O0FBMUpJO0VBQWUsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsY0FBQTtBQWdLM0Q7O0FBL0pJO0VBQWlCLGVBQUE7RUFBaUIsbUJBQUE7QUFvS3RDOztBQW5LSTtFQUFpQixlQUFBO0FBdUtyQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgIC5maWx0ZXItYmFyIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC5zZWFyY2gtYm94IHsgcG9zaXRpb246IHJlbGF0aXZlOyBmbGV4OiAxOyBtaW4td2lkdGg6IDI1MHB4OyB9XHJcbiAgICAuc2VhcmNoLWJveCBpIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxNHB4OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyBjb2xvcjogIzk0YTNiODsgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgICAuc2VhcmNoLWJveCBpbnB1dCB7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMHB4IDE0cHggMTBweCA0MHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAxMHB4OyBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7IGJhY2tncm91bmQ6ICNmZmY7IH1cclxuICAgIC5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjNjM2NmYxOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwxMDIsMjQxLDAuMSk7IH1cclxuICAgIC5maWx0ZXItYmFyIHNlbGVjdCB7IHBhZGRpbmc6IDEwcHggMTRweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogMTBweDsgZm9udC1zaXplOiAxM3B4OyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XHJcbiAgICAuYW5ub3VuY2VtZW50cy1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNnB4OyB9XHJcbiAgICAuYW5ub3VuY2VtZW50LWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsgb3ZlcmZsb3c6IGhpZGRlbjsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzOyB9XHJcbiAgICAuYW5ub3VuY2VtZW50LWNhcmQ6aG92ZXIgeyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xKTsgfVxyXG4gICAgLmFubm91bmNlbWVudC1jYXJkLnVucmVhZCB7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzYzNjZmMTsgfVxyXG4gICAgLmFubm91bmNlLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTRweDsgcGFkZGluZzogMjBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgICAuYW5ub3VuY2UtaWNvbiB7IHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDE4cHg7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICAuYW5ub3VuY2UtbWV0YSB7IGZsZXg6IDE7IH1cclxuICAgIC5hbm5vdW5jZS1tZXRhIGgzIHsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzFlMjkzYjsgbWFyZ2luOiAwIDAgNnB4OyB9XHJcbiAgICAubWV0YS1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgLmNhdGVnb3J5LWJhZGdlIHsgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4gICAgLmFubm91bmNlLWRhdGUsIC5hbm5vdW5jZS1hdXRob3IgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOTRhM2I4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxyXG4gICAgLnVucmVhZC1kb3QgeyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICM2MzY2ZjE7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICAuYW5ub3VuY2UtYm9keSB7IHBhZGRpbmc6IDAgMjBweCAxNnB4OyB9XHJcbiAgICAuYW5ub3VuY2UtYm9keSBwIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzQ3NTU2OTsgbGluZS1oZWlnaHQ6IDEuNjsgbWFyZ2luOiAwOyB9XHJcbiAgICAuYW5ub3VuY2UtZm9vdGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAxMnB4IDIwcHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5OyB9XHJcbiAgICAuYW5ub3VuY2UtdGFncyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNnB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC50YWcgeyBwYWRkaW5nOiAzcHggMTBweDsgYmFja2dyb3VuZDogI2YxZjVmOTsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAuYnRuLXRleHQgeyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGNvbG9yOiAjNjM2NmYxOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cclxuICAgIC5idG4tdGV4dDpob3ZlciB7IGNvbG9yOiAjNGY0NmU1OyB9XHJcbiAgICAuZW1wdHktc3RhdGUgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDYwcHggMjBweDsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgIC5lbXB0eS1zdGF0ZSBpIHsgZm9udC1zaXplOiA0MHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XHJcbiAgICAuZW1wdHktc3RhdGUgcCB7IGZvbnQtc2l6ZTogMTRweDsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5323:
/*!********************************************************************!*\
  !*** ./src/app/modules/team-lead/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlDashboardComponent: () => (/* binding */ TlDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





function TlDashboardComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 81)(5, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 86)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" In: ", item_r2.inTime, " \u2022 Out: ", item_r2.outTime, " \u2022 Net: ", item_r2.netHours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pill-" + item_r2.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.statusBadge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.onTimeStatus);
  }
}
function TlDashboardComponent_div_146_div_5_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 100);
  }
  if (rf & 2) {
    const b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", b_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", b_r4.name);
  }
}
function TlDashboardComponent_div_146_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r4.name.charAt(0));
  }
}
function TlDashboardComponent_div_146_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TlDashboardComponent_div_146_div_5_img_1_Template, 1, 2, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TlDashboardComponent_div_146_div_5_div_2_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 95)(4, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", b_r4.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !b_r4.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r4.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", b_r4.birthdayDay, " ", b_r4.birthdayMonth, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tl-badge-today", b_r4.isToday)("tl-badge-tomorrow", b_r4.daysUntil === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", b_r4.isToday ? "Today" : b_r4.daysUntil === 1 ? "Tomorrow" : b_r4.daysUntil + " days", " ");
  }
}
function TlDashboardComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88)(1, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Upcoming Birthdays");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TlDashboardComponent_div_146_div_5_Template, 12, 11, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.birthdays);
  }
}
class TlDashboardComponent {
  constructor(authService, dashboardService, employeeService, attendanceService) {
    this.authService = authService;
    this.dashboardService = dashboardService;
    this.employeeService = employeeService;
    this.attendanceService = attendanceService;
    this.currentUser = null;
    this.currentTimeString = '';
    this.currentAmpm = 'PM';
    this.currentDateString = '';
    this.isClockedIn = false;
    this.attendanceScore = {
      streak: '5 Days',
      percentage: '92%',
      points: 480
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
    this.birthdays = [];
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
    this.loadData();
    this.loadBirthdays();
  }
  ngOnDestroy() {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
  }
  loadData() {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;
    const today = new Date().toISOString().split('T')[0];
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      employees: this.employeeService.getAllEmployees(),
      attendance: this.attendanceService.getByDate(today)
    }).subscribe(({
      employees,
      attendance
    }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.overviewStats.totalDays = team.length;
      const teamIds = new Set(team.map(e => e.id));
      const teamRecords = attendance.filter(a => teamIds.has(a.employeeId));
      const present = teamRecords.filter(r => r.status === 'PRESENT' || r.status === 'LATE');
      this.overviewStats.presentDays = present.length;
      this.overviewStats.lateClockIns = teamRecords.filter(r => r.status === 'LATE').length;
      this.overviewStats.absentLeaves = team.length - present.length;
      if (team.length > 0) {
        this.overviewStats.attendanceRate = Math.round(present.length / team.length * 100) + '%';
      }
      const totalHours = teamRecords.reduce((sum, r) => sum + (r.workHours || 0), 0);
      this.overviewStats.loggedHours = Math.round(totalHours) + 'h logged';
      this.activityLogs = teamRecords.filter(r => r.checkIn).map(r => {
        const ci = new Date(r.checkIn);
        const co = r.checkOut ? new Date(r.checkOut) : null;
        return {
          id: r.id,
          date: ci.toLocaleDateString('en-US', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          inTime: ci.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          }),
          outTime: co ? co.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          }) : 'Working',
          netHours: r.workHours ? `${Math.floor(r.workHours)}h ${Math.round(r.workHours % 1 * 60)}m` : '--',
          statusBadge: r.status === 'LATE' ? 'Late' : 'Approved',
          badgeType: r.status === 'LATE' ? 'warning' : 'success',
          onTimeStatus: r.status === 'LATE' ? 'Late' : 'On Time',
          avatar: 'assets/images/user-avatar.png'
        };
      });
    });
  }
  loadBirthdays() {
    this.dashboardService.getUpcomingBirthdays(7).subscribe({
      next: data => this.birthdays = data.slice(0, 5),
      error: () => {}
    });
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
    this.isClockedIn = !this.isClockedIn;
  }
  static {
    this.ɵfac = function TlDashboardComponent_Factory(t) {
      return new (t || TlDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AttendanceService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TlDashboardComponent,
      selectors: [["app-tl-dashboard"]],
      decls: 147,
      vars: 24,
      consts: [[1, "emp-dashboard-container"], [1, "profile-header-bar"], [1, "profile-avatar"], [1, "avatar-img-box"], [1, "fas", "fa-user-circle"], [1, "profile-info"], [1, "welcome-text"], [1, "user-full-name"], [1, "user-meta-line"], [1, "clock-banner-card"], [1, "clock-icon-badge"], [1, "fas", "fa-clock"], [1, "clock-details"], [1, "clock-time-row"], [1, "time-digits"], [1, "ampm-badge"], [1, "clock-date-row"], [1, "far", "fa-calendar-alt"], [1, "clock-bg-watermark"], [1, "far", "fa-clock"], [1, "shift-status-card"], [1, "shift-info-row"], [1, "shift-icon-box"], [1, "fas", "fa-hand-pointer"], [1, "shift-text"], [1, "shift-title"], [1, "shift-sub"], ["type", "button", 1, "btn-clock-in", 3, "click"], [1, "fas", "fa-camera"], [1, "attendance-score-card"], [1, "score-header"], [1, "fas", "fa-trophy", "trophy-icon"], [1, "score-metrics-grid"], [1, "metric-col"], [1, "metric-val"], [1, "emoji"], [1, "metric-lbl"], [1, "metric-divider"], [1, "quick-actions-row"], ["routerLink", "/team/attendance", 1, "btn-quick-outline"], [1, "fas", "fa-users"], ["routerLink", "/team/tasks", 1, "btn-quick-outline"], [1, "fas", "fa-tasks"], [1, "work-report-card"], [1, "report-header"], [1, "report-icon-box"], [1, "fas", "fa-clipboard-list"], [1, "report-text"], [1, "report-title-row"], [1, "report-title"], [1, "assigned-tag"], [1, "report-sub"], ["type", "button", 1, "btn-submit-report"], [1, "fas", "fa-file-signature"], [1, "overview-section"], [1, "overview-section-header"], ["routerLink", "/team/attendance", 1, "link-my-attendance"], [1, "overview-grid"], [1, "overview-card"], [1, "card-top-row"], [1, "badge-icon", "badge-green"], [1, "fas", "fa-check"], [1, "top-tag", "green-tag"], [1, "card-value"], [1, "card-label"], [1, "badge-icon", "badge-blue"], [1, "top-tag", "blue-tag"], [1, "badge-icon", "badge-red"], [1, "fas", "fa-calendar-times"], [1, "top-tag", "red-tag"], [1, "badge-icon", "badge-orange"], [1, "fas", "fa-stopwatch"], [1, "top-tag", "orange-tag"], [1, "activity-log-section"], [1, "log-section-title"], [1, "log-list"], ["class", "log-item-card", 4, "ngFor", "ngForOf"], ["class", "tl-birthdays-section", 4, "ngIf"], [1, "log-item-card"], [1, "log-user-avatar"], [1, "avatar-initials"], [1, "log-details"], [1, "log-date"], [1, "log-meta"], [1, "status-pill"], [1, "fas", "fa-check-circle"], [1, "log-ontime-status"], [1, "dot-green"], [1, "tl-birthdays-section"], [1, "fas", "fa-birthday-cake", 2, "color", "#ec4899"], [1, "tl-birthday-list"], ["class", "tl-birthday-row", 4, "ngFor", "ngForOf"], [1, "tl-birthday-row"], ["class", "tl-birthday-avatar", "style", "object-fit:cover", 3, "src", "alt", 4, "ngIf"], ["class", "tl-birthday-avatar", 4, "ngIf"], [1, "tl-birthday-info"], [1, "tl-birthday-name"], [1, "tl-birthday-dept"], [1, "tl-birthday-date"], [1, "tl-birthday-badge"], [1, "tl-birthday-avatar", 2, "object-fit", "cover", 3, "src", "alt"], [1, "tl-birthday-avatar"]],
      template: function TlDashboardComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TlDashboardComponent_Template_button_click_36_listener() {
            return ctx.toggleClockIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29)(41, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Team Lead Performance Score");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Team Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Team Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 43)(79, "div", 44)(80, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 47)(83, "div", 48)(84, "h3", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Daily Team Lead Work Report");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Assigned: AI Studio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Log your sprint progress, team reviews, and attach verification for management auditing.");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Team Attendance >");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, TlDashboardComponent_div_145_Template, 16, 8, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, TlDashboardComponent_div_146_Template, 6, 1, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (ctx.currentUser == null ? null : ctx.currentUser.firstName) || "SARAH", " ", (ctx.currentUser == null ? null : ctx.currentUser.lastName) || "MEHTA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", (ctx.currentUser == null ? null : ctx.currentUser.employeeId) || "TL-1002", " \u2022 ", (ctx.currentUser == null ? null : ctx.currentUser.department) || "Engineering & Technology", " \u2022 ", (ctx.currentUser == null ? null : ctx.currentUser.designation) || "Team Lead", " ");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.birthdays.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".emp-dashboard-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0 0 32px;\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-img-box[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #94a3b8;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 500;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-full-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 2px 0;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .profile-header-bar[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-meta-line[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1d64f2;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #1d64f2 0%, #1757db 100%);\n  border-radius: 20px;\n  padding: 24px 32px;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(29, 100, 242, 0.25);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-icon-badge[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-time-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-time-row[_ngcontent-%COMP%]   .time-digits[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  line-height: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-time-row[_ngcontent-%COMP%]   .ampm-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.25);\n  padding: 4px 10px;\n  border-radius: 8px;\n  margin-left: 12px;\n  text-transform: uppercase;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-details[_ngcontent-%COMP%]   .clock-date-row[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #e0f2fe;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .clock-banner-card[_ngcontent-%COMP%]   .clock-bg-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 140px;\n  color: rgba(255, 255, 255, 0.08);\n  pointer-events: none;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%]   .shift-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #eff6ff;\n  color: #1d64f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%]   .shift-text[_ngcontent-%COMP%]   .shift-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .shift-info-row[_ngcontent-%COMP%]   .shift-text[_ngcontent-%COMP%]   .shift-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 14px;\n  background: #1d64f2;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(29, 100, 242, 0.35);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in[_ngcontent-%COMP%]:hover {\n  background: #1757db;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(29, 100, 242, 0.45);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in.clocked-in[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .shift-status-card[_ngcontent-%COMP%]   .btn-clock-in.clocked-in[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1d64f2 0%, #1757db 100%);\n  border-radius: 20px;\n  padding: 24px 32px;\n  color: #ffffff;\n  box-shadow: 0 8px 24px rgba(29, 100, 242, 0.25);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-header[_ngcontent-%COMP%]   .trophy-icon[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-size: 18px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%]   .emoji[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-col[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #e0f2fe;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .attendance-score-card[_ngcontent-%COMP%]   .score-metrics-grid[_ngcontent-%COMP%]   .metric-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.25);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%]   .btn-quick-outline[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 2px solid #1d64f2;\n  border-radius: 14px;\n  background: #ffffff;\n  color: #1d64f2;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%]   .btn-quick-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(29, 100, 242, 0.15);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #e0f2fe;\n  color: #0284c7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-title-row[_ngcontent-%COMP%]   .report-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-title-row[_ngcontent-%COMP%]   .assigned-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #0284c7;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%]   .report-text[_ngcontent-%COMP%]   .report-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 6px 0 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .btn-submit-report[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 14px;\n  background: #1d64f2;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(29, 100, 242, 0.35);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .work-report-card[_ngcontent-%COMP%]   .btn-submit-report[_ngcontent-%COMP%]:hover {\n  background: #1757db;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(29, 100, 242, 0.45);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%]   .link-my-attendance[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1d64f2;\n  text-decoration: none;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-section-header[_ngcontent-%COMP%]   .link-my-attendance[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 120px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .badge-icon.badge-orange[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.green-tag[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.blue-tag[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.red-tag[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-top-row[_ngcontent-%COMP%]   .top-tag.orange-tag[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-top: 12px;\n  line-height: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .overview-section[_ngcontent-%COMP%]   .overview-grid[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 8px 0 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 18px 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: transform 0.2s ease;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-user-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: #334155;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .log-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .log-meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .status-pill.pill-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   .status-pill.pill-primary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-ontime-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .activity-log-section[_ngcontent-%COMP%]   .log-list[_ngcontent-%COMP%]   .log-item-card[_ngcontent-%COMP%]   .log-ontime-status[_ngcontent-%COMP%]   .dot-green[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #22c55e;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthdays-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  transition: background 0.15s;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-row[_ngcontent-%COMP%]:hover {\n  background: #fdf2f8;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #ec4899, #f9a8d4);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-dept[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  white-space: nowrap;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  color: #64748b;\n  white-space: nowrap;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-badge.tl-badge-today[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.emp-dashboard-container[_ngcontent-%COMP%]   .tl-birthday-badge.tl-badge-tomorrow[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n@media (max-width: 640px) {\n  .emp-dashboard-container[_ngcontent-%COMP%]   .quick-actions-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx1RkFBQTtFQUVBLGtDQUFBO0VBd0RBLHNDQUFBO0VBNEVBLGlDQUFBO0VBK0VBLHVDQUFBO0VBNERBLGlDQUFBO0VBOEJBLHNDQUFBO0VBbUZBLDBDQUFBO0VBdUdBLDJDQUFBO0VBeUdBLGtDQUFBO0FBeGtCRjtBQVBFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBU0o7QUFQSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBU047QUFQTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBU1I7QUFMSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQU9OO0FBTE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBT1I7QUFKTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQU1SO0FBSE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUtSO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSww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QUFBO0FBeERKO0FBMkRFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQXpESjtBQTRERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUExREo7QUE2REU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTNESjtBQThERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUE1REo7QUErREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUE3REo7QUErREk7RUFBbUIsbUJBQUE7RUFBcUIsY0FBQTtBQTNENUM7QUE0REk7RUFBc0IsbUJBQUE7RUFBcUIsY0FBQTtBQXhEL0M7QUEyREU7RUFDRTtJQUNFLDBCQUFBO0VBekRKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wLWRhc2hib2FyZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbiAgcGFkZGluZzogMCAwIDMycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG5cclxuICAvKiAtLS0gMS4gUFJPRklMRSBIRUFERVIgQkFSIC0tLSAqL1xyXG4gIC5wcm9maWxlLWhlYWRlci1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAgICAgLmF2YXRhci1pbWctYm94IHtcclxuICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAud2VsY29tZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXItZnVsbC1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXItbWV0YS1saW5lIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzFkNjRmMjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSAyLiBSRUFMLVRJTUUgQ0xPQ0sgQkFOTkVSIC0tLSAqL1xyXG4gIC5jbG9jay1iYW5uZXItY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWQ2NGYyIDAlLCAjMTc1N2RiIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDI5LCAxMDAsIDI0MiwgMC4yNSk7XHJcblxyXG4gICAgLmNsb2NrLWljb24tYmFkZ2Uge1xyXG4gICAgICB3aWR0aDogNTJweDtcclxuICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvY2stZGV0YWlscyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAuY2xvY2stdGltZS1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnRpbWUtZGlnaXRzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbXBtLWJhZGdlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvY2stZGF0ZS1yb3cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjZTBmMmZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2xvY2stYmctd2F0ZXJtYXJrIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC1zaXplOiAxNDBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDMuIFNISUZUIFNUQVRVUyBDQVJEIC0tLSAqL1xyXG4gIC5zaGlmdC1zdGF0dXMtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgLnNoaWZ0LWluZm8tcm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAgIC5zaGlmdC1pY29uLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgICAgICBjb2xvcjogIzFkNjRmMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2hpZnQtdGV4dCB7XHJcbiAgICAgICAgLnNoaWZ0LXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaGlmdC1zdWIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jbG9jay1pbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZDY0ZjI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDI5LCAxMDAsIDI0MiwgMC4zNSk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTc1N2RiO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjQ1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jbG9ja2VkLWluIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWY0NDQ0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyMzksIDY4LCA2OCwgMC4zNSk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2RjMjYyNjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSA0LiBBVFRFTkRBTkNFIFNDT1JFIEJBTk5FUiAtLS0gKi9cclxuICAuYXR0ZW5kYW5jZS1zY29yZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZDY0ZjIgMCUsICMxNzU3ZGIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjI1KTtcclxuXHJcbiAgICAuc2NvcmUtaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuXHJcbiAgICAgIC50cm9waHktaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmYWNjMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNjb3JlLW1ldHJpY3MtZ3JpZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgLm1ldHJpYy1jb2wge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAubWV0cmljLXZhbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogNnB4O1xyXG5cclxuICAgICAgICAgIC5lbW9qaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXRyaWMtbGJsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGNvbG9yOiAjZTBmMmZlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXRyaWMtZGl2aWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDUuIFFVSUNLIEFDVElPTlMgUk9XIC0tLSAqL1xyXG4gIC5xdWljay1hY3Rpb25zLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG5cclxuICAgIC5idG4tcXVpY2stb3V0bGluZSB7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZDY0ZjI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGNvbG9yOiAjMWQ2NGYyO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI5LCAxMDAsIDI0MiwgMC4xNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLSA2LiBEQUlMWSBXT1JLIFJFUE9SVCBDQVJEIC0tLSAqL1xyXG4gIC53b3JrLXJlcG9ydC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAucmVwb3J0LWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBnYXA6IDE2cHg7XHJcblxyXG4gICAgICAucmVwb3J0LWljb24tYm94IHtcclxuICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTBmMmZlO1xyXG4gICAgICAgIGNvbG9yOiAjMDI4NGM3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXBvcnQtdGV4dCB7XHJcbiAgICAgICAgLnJlcG9ydC10aXRsZS1yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgLnJlcG9ydC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXNzaWduZWQtdGFnIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAyODRjNztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXBvcnQtc3ViIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgbWFyZ2luOiA2cHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc3VibWl0LXJlcG9ydCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZDY0ZjI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDI5LCAxMDAsIDI0MiwgMC4zNSk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTc1N2RiO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMjksIDEwMCwgMjQyLCAwLjQ1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDcuIDMwLURBWSBBVFRFTkRBTkNFIE9WRVJWSUVXIC0tLSAqL1xyXG4gIC5vdmVydmlldy1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNHB4O1xyXG5cclxuICAgIC5vdmVydmlldy1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saW5rLW15LWF0dGVuZGFuY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMWQ2NGYyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3ZlcnZpZXctZ3JpZCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAub3ZlcnZpZXctY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuXHJcbiAgICAgICAgLmNhcmQtdG9wLXJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAuYmFkZ2UtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAmLmJhZGdlLWdyZWVuIHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAgICAgICAgICAgJi5iYWRnZS1ibHVlIHsgYmFja2dyb3VuZDogI2UwZjJmZTsgY29sb3I6ICMwMjg0Yzc7IH1cclxuICAgICAgICAgICAgJi5iYWRnZS1yZWQgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG4gICAgICAgICAgICAmLmJhZGdlLW9yYW5nZSB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRvcC10YWcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICAgICAmLmdyZWVuLXRhZyB7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgICAgICAgICAgICYuYmx1ZS10YWcgeyBjb2xvcjogIzAyODRjNzsgfVxyXG4gICAgICAgICAgICAmLnJlZC10YWcgeyBjb2xvcjogI2RjMjYyNjsgfVxyXG4gICAgICAgICAgICAmLm9yYW5nZS10YWcgeyBjb2xvcjogI2Q5NzcwNjsgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDguIFJFQ0VOVCBBQ1RJVklUWSBMT0cgU0VDVElPTiAtLS0gKi9cclxuICAuYWN0aXZpdHktbG9nLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE0cHg7XHJcblxyXG4gICAgLmxvZy1zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgbWFyZ2luOiA4cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2ctbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMTJweDtcclxuXHJcbiAgICAgIC5sb2ctaXRlbS1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMThweCAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDE2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2ctdXNlci1hdmF0YXIge1xyXG4gICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2JkNWUxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZy1kZXRhaWxzIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgLmxvZy1kYXRlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2ctbWV0YSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3RhdHVzLXBpbGwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICAgICAmLnBpbGwtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RjZmNlNztcclxuICAgICAgICAgICAgICBjb2xvcjogIzE1ODAzZDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnBpbGwtcHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzFkNGVkODtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nLW9udGltZS1zdGF0dXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDZweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcclxuXHJcbiAgICAgICAgICAuZG90LWdyZWVuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogLS0tIDkuIFVQQ09NSU5HIEJJUlRIREFZUyAtLS0gKi9cclxuICAudGwtYmlydGhkYXlzLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICB9XHJcblxyXG4gIC50bC1iaXJ0aGRheS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgfVxyXG5cclxuICAudGwtYmlydGhkYXktcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcblxyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZGYyZjg7IH1cclxuICB9XHJcblxyXG4gIC50bC1iaXJ0aGRheS1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWM0ODk5LCAjZjlhOGQ0KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcblxyXG4gIC50bC1iaXJ0aGRheS1pbmZvIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50bC1iaXJ0aGRheS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICB9XHJcblxyXG4gIC50bC1iaXJ0aGRheS1kZXB0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gIH1cclxuXHJcbiAgLnRsLWJpcnRoZGF5LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnRsLWJpcnRoZGF5LWJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICYudGwtYmFkZ2UtdG9kYXkgeyBiYWNrZ3JvdW5kOiAjZmNlN2YzOyBjb2xvcjogI2JlMTg1ZDsgfVxyXG4gICAgJi50bC1iYWRnZS10b21vcnJvdyB7IGJhY2tncm91bmQ6ICNlZGU5ZmU7IGNvbG9yOiAjN2MzYWVkOyB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5xdWljay1hY3Rpb25zLXJvdyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2887:
/*!********************************************************!*\
  !*** ./src/app/modules/team-lead/kpi/kpi.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlKpiComponent: () => (/* binding */ TlKpiComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function TlKpiComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 57)(8, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 59)(11, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 62)(16, "div", 63)(17, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Achievement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const kpi_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", kpi_r3.iconBg)("color", kpi_r3.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](kpi_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("up", kpi_r3.trend > 0)("down", kpi_r3.trend < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](kpi_r3.trend > 0 ? "fas fa-arrow-up" : "fas fa-arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", kpi_r3.trend > 0 ? "+" : "", "", kpi_r3.trend, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](kpi_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](kpi_r3.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("/ ", kpi_r3.target, "", kpi_r3.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r0.getProgressColor(ctx_r0.getProgressPercent(kpi_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getProgressPercent(kpi_r3), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.getProgressPercent(kpi_r3), "%")("background", ctx_r0.getProgressColor(ctx_r0.getProgressPercent(kpi_r3)));
  }
}
function TlKpiComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r4.kpi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r4.oct);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r4.nov);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r4.dec);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("trend-up", t_r4.trendUp)("trend-down", !t_r4.trendUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](t_r4.trendUp ? "fas fa-arrow-up" : "fas fa-arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r4.trendValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-exceeded", t_r4.status === "EXCEEDED")("status-ontrack", t_r4.status === "ON_TRACK")("status-atrisk", t_r4.status === "AT_RISK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r4.status === "EXCEEDED" ? "Exceeded" : t_r4.status === "ON_TRACK" ? "On Track" : "At Risk", " ");
  }
}
function TlKpiComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 75)(5, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 78)(10, "div", 79)(11, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Completion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 79)(16, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getInitial(member_r5.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", member_r5.completionRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", member_r5.qualityScore, "/100");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-excellent", member_r5.status === "EXCELLENT")("status-good", member_r5.status === "GOOD")("status-needs-imp", member_r5.status === "NEEDS_IMPROVEMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r5.status === "EXCELLENT" ? "Top Tier" : member_r5.status === "GOOD" ? "Good" : "Needs Review", " ");
  }
}
class TlKpiComponent {
  constructor(performanceService, employeeService, authService) {
    this.performanceService = performanceService;
    this.employeeService = employeeService;
    this.authService = authService;
    this.selectedPeriod = 'Q3 2026';
    this.selectedCategory = 'ALL';
    this.kpis = [];
    this.trends = [];
    this.memberKpis = [];
    this.iconPool = [{
      icon: 'fas fa-check-circle',
      iconBg: '#dcfce7',
      iconColor: '#16a34a'
    }, {
      icon: 'fas fa-bolt',
      iconBg: '#fef3c7',
      iconColor: '#d97706'
    }, {
      icon: 'fas fa-clock',
      iconBg: '#dbeafe',
      iconColor: '#2563eb'
    }, {
      icon: 'fas fa-code',
      iconBg: '#f3e8ff',
      iconColor: '#9333ea'
    }, {
      icon: 'fas fa-tachometer-alt',
      iconBg: '#fee2e2',
      iconColor: '#dc2626'
    }, {
      icon: 'fas fa-smile',
      iconBg: '#e0f2fe',
      iconColor: '#0284c7'
    }];
  }
  ngOnInit() {
    const user = this.authService.currentUser;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      kpis: this.performanceService.getKpis(),
      reviews: this.performanceService.getReviews(),
      employees: this.employeeService.getAllEmployees()
    }).subscribe(({
      kpis,
      reviews,
      employees
    }) => {
      const team = user?.employeeId ? employees.filter(e => e.reportingManagerId === user.employeeId) : employees;
      this.kpis = kpis.map((k, i) => {
        const cfg = this.iconPool[i % this.iconPool.length];
        const pct = k.targetValue ? Math.round(k.currentValue / k.targetValue * 100) : 0;
        return {
          label: k.title,
          current: k.currentValue,
          target: k.targetValue,
          unit: k.unit || '%',
          icon: cfg.icon,
          iconBg: cfg.iconBg,
          iconColor: cfg.iconColor,
          trend: pct - 80,
          category: (k.status || 'DELIVERY').toUpperCase()
        };
      });
      if (this.kpis.length === 0) {
        this.kpis = [{
          label: 'Task Completion Rate',
          current: 85,
          target: 95,
          unit: '%',
          icon: 'fas fa-check-circle',
          iconBg: '#dcfce7',
          iconColor: '#16a34a',
          trend: 5,
          category: 'DELIVERY'
        }, {
          label: 'Team Productivity Score',
          current: 82,
          target: 90,
          unit: '%',
          icon: 'fas fa-bolt',
          iconBg: '#fef3c7',
          iconColor: '#d97706',
          trend: 3,
          category: 'EFFICIENCY'
        }];
      }
      this.trends = this.kpis.map(k => {
        const v = k.current;
        const prev = v - k.trend;
        const prev2 = prev - Math.floor(Math.random() * 5);
        return {
          kpi: k.label,
          category: k.category,
          oct: prev2 + k.unit,
          nov: prev + k.unit,
          dec: v + k.unit,
          trendUp: k.trend > 0,
          trendValue: (k.trend > 0 ? '+' : '') + k.trend + '%',
          status: v >= k.target ? 'EXCEEDED' : v >= k.target * 0.8 ? 'ON_TRACK' : 'AT_RISK'
        };
      });
      const teamIds = new Set(team.map(e => e.id));
      const teamReviews = reviews.filter(r => teamIds.has(r.employeeId));
      this.memberKpis = team.map(e => {
        const rev = teamReviews.find(r => r.employeeId === e.id);
        const rating = rev?.overallRating || 0;
        const pctScore = Math.round(rating * 20);
        return {
          id: e.id,
          name: `${e.firstName} ${e.lastName}`,
          role: e.designation,
          completionRate: pctScore || 85,
          productivity: Math.round((rev?.goalsRating ?? 0) * 20) || 80,
          qualityScore: Math.round((rev?.competencyRating ?? 0) * 20) || 85,
          status: pctScore >= 90 ? 'EXCELLENT' : pctScore >= 70 ? 'GOOD' : 'NEEDS_IMPROVEMENT'
        };
      });
      if (this.memberKpis.length === 0) {
        this.memberKpis = [{
          id: '1',
          name: 'No team members',
          role: 'N/A',
          completionRate: 0,
          productivity: 0,
          qualityScore: 0,
          status: 'GOOD'
        }];
      }
    });
  }
  get overallHealthScore() {
    const total = this.kpis.reduce((acc, kpi) => acc + this.getProgressPercent(kpi), 0);
    return Math.round(total / this.kpis.length);
  }
  get exceededCount() {
    return this.kpis.filter(k => this.getProgressPercent(k) >= 100).length;
  }
  get atRiskCount() {
    return this.kpis.filter(k => this.getProgressPercent(k) < 80).length;
  }
  getProgressPercent(kpi) {
    if (!kpi.target) return 0;
    return Math.min(Math.round(kpi.current / kpi.target * 100), 100);
  }
  getProgressColor(pct) {
    if (pct >= 90) return '#16a34a';
    if (pct >= 75) return '#2563eb';
    if (pct >= 60) return '#d97706';
    return '#dc2626';
  }
  getInitial(name) {
    return name ? name.charAt(0).toUpperCase() : 'U';
  }
  static {
    this.ɵfac = function TlKpiComponent_Factory(t) {
      return new (t || TlKpiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TlKpiComponent,
      selectors: [["app-tl-kpi"]],
      decls: 102,
      vars: 8,
      consts: [[1, "kpi-container"], [1, "kpi-header-bar"], [1, "header-titles"], [1, "title-with-back"], [1, "page-title"], [1, "subtitle"], [1, "header-actions"], [1, "period-select-wrapper"], [1, "far", "fa-calendar-alt", "select-icon"], [1, "period-select", 3, "ngModel", "ngModelChange"], ["value", "Q3 2026"], ["value", "Q2 2026"], ["value", "Q1 2026"], [1, "action-icon-group"], ["title", "Export PDF", 1, "btn-action-icon", "btn-pdf"], [1, "fas", "fa-file-pdf"], ["title", "Export Excel", 1, "btn-action-icon", "btn-excel"], [1, "fas", "fa-file-excel"], ["title", "Print KPI Report", 1, "btn-action-icon", "btn-print"], [1, "fas", "fa-print"], [1, "health-summary-row"], [1, "summary-card", "card-health"], [1, "card-icon-box", "bg-blue-light"], [1, "fas", "fa-chart-line"], [1, "card-info"], [1, "card-lbl"], [1, "card-val-row"], [1, "card-val", "text-blue"], [1, "val-tag", "tag-success"], [1, "summary-card", "card-exceeded"], [1, "card-icon-box", "bg-green-light"], [1, "fas", "fa-award"], [1, "card-val", "text-green"], [1, "val-tag", "tag-green"], [1, "summary-card", "card-at-risk"], [1, "card-icon-box", "bg-amber-light"], [1, "fas", "fa-exclamation-triangle"], [1, "card-val", "text-amber"], [1, "val-tag", "tag-amber"], [1, "section-title-row"], [1, "section-heading"], [1, "kpi-grid"], ["class", "kpi-card", 4, "ngFor", "ngForOf"], [1, "kpi-detail-grid"], [1, "content-card"], [1, "card-header-bar"], [1, "card-title"], [1, "card-sub"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "members-kpi-list"], ["class", "member-kpi-item", 4, "ngFor", "ngForOf"], [1, "kpi-card"], [1, "card-top"], [1, "kpi-icon"], [1, "kpi-trend"], [1, "kpi-body"], [1, "kpi-label"], [1, "kpi-value-row"], [1, "current-val"], [1, "target-val"], [1, "kpi-footer"], [1, "progress-info"], [1, "progress-lbl"], [1, "progress-pct"], [1, "progress-bar-track"], [1, "progress-bar-fill"], [1, "category-pill"], [1, "font-bold"], [1, "trend-badge"], [1, "status-pill"], [1, "member-kpi-item"], [1, "member-info-col"], [1, "avatar-circle"], [1, "member-names"], [1, "m-name"], [1, "m-role"], [1, "member-stats-col"], [1, "m-stat"], [1, "stat-lbl"], [1, "stat-val"], [1, "stat-val", "text-blue"], [1, "status-badge"]],
      template: function TlKpiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Team KPIs & Performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Monitor team deliverables, productivity, and quarterly goal achievement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TlKpiComponent_Template_select_ngModelChange_12_listener($event) {
            return ctx.selectedPeriod = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Q3 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Q2 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Q1 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20)(27, "div", 21)(28, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24)(31, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Overall Team Health");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26)(34, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "+4.2% vs last month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 29)(39, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24)(42, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "KPIs Exceeded");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26)(45, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Target Met");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 34)(50, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24)(53, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "KPIs Needing Attention");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26)(56, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Review Needed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 39)(61, "h2", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Key Metric Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, TlKpiComponent_div_64_Template, 23, 25, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 43)(66, "div", 44)(67, "div", 45)(68, "div")(69, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Quarterly Trend Analysis");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Month-over-month performance progression");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 48)(74, "table", 49)(75, "thead")(76, "tr")(77, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "KPI Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Oct");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Nov");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Dec");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Trend");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, TlKpiComponent_tr_92_Template, 20, 19, "tr", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 44)(94, "div", 45)(95, "div")(96, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Individual KPI Scores");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Assigned member metric breakdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, TlKpiComponent_div_101_Template, 22, 12, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedPeriod);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.overallHealthScore, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.exceededCount, " / ", ctx.kpis.length, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.atRiskCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kpis);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trends);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.memberKpis);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, sans-serif;\n  background-color: transparent;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.kpi-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n\n\n.kpi-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.title-with-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  color: #1e293b;\n  cursor: pointer;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 2px 0;\n  letter-spacing: -0.3px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.period-select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.period-select-wrapper[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: #2563eb;\n  font-size: 14px;\n  pointer-events: none;\n}\n.period-select-wrapper[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%] {\n  padding: 8px 16px 8px 36px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #1e293b;\n  font-weight: 600;\n  font-size: 13px;\n  outline: none;\n  cursor: pointer;\n}\n\n.action-icon-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-action-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.btn-action-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.btn-action-icon.btn-pdf[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #fee2e2;\n  background: #fef2f2;\n}\n.btn-action-icon.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.btn-action-icon.btn-excel[_ngcontent-%COMP%] {\n  color: #16a34a;\n  border-color: #dcfce7;\n  background: #f0fdf4;\n}\n.btn-action-icon.btn-excel[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  color: #15803d;\n}\n.btn-action-icon.btn-print[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-color: #dbeafe;\n  background: #eff6ff;\n}\n.btn-action-icon.btn-print[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.btn-action-icon.btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn-action-icon.btn-add[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-action-icon.btn-edit[_ngcontent-%COMP%] {\n  color: #d97706;\n  border-color: #fef3c7;\n  background: #fffbeb;\n}\n.btn-action-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  color: #b45309;\n}\n.btn-action-icon.btn-delete[_ngcontent-%COMP%] {\n  color: #dc2626;\n  border-color: #fee2e2;\n  background: #fef2f2;\n}\n.btn-action-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n\n\n\n.health-summary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .health-summary-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n}\n\n.card-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.card-icon-box.bg-blue-light[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.card-icon-box.bg-green-light[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.card-icon-box.bg-amber-light[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.card-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 600;\n}\n\n.card-val-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.card-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.card-val.text-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.card-val.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.card-val.text-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n\n.val-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.val-tag.tag-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.val-tag.tag-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.val-tag.tag-amber[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n\n\n\n.section-title-row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n\n\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 16px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.kpi-trend.up[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.kpi-trend.down[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n\n.kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n\n.kpi-value-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n\n.current-val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n}\n\n.target-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n\n.kpi-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.progress-lbl[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n\n.progress-pct[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.progress-bar-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n\n\n\n.kpi-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 1024px) {\n  .kpi-detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.content-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n}\n\n.card-header-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 2px 0;\n}\n\n.card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n}\n\n\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.category-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.trend-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.trend-badge.trend-up[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.trend-badge.trend-down[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.status-pill.status-exceeded[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.status-pill.status-ontrack[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.status-pill.status-atrisk[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fef3c7;\n}\n\n\n\n.members-kpi-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.member-kpi-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.member-info-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #2563eb;\n  color: #fff;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n\n.member-names[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.member-names[_ngcontent-%COMP%]   .m-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.member-names[_ngcontent-%COMP%]   .m-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.member-stats-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.m-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.m-stat[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.m-stat[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.m-stat[_ngcontent-%COMP%]   .stat-val.text-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.status-badge.status-excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.status-badge.status-good[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.status-badge.status-needs-imp[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQva3BpL2twaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQSxlQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0o7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQUo7QUFHRTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFB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QUFrREY7O0FBL0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWtERjs7QUEvQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFrREY7O0FBL0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBa0RGO0FBaERFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFrREo7QUEvQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWlESjs7QUE3Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBZ0RGOztBQTdDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBZ0RGO0FBOUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWdESjtBQTdDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUErQ0o7QUE3Q0k7RUFBYyxjQUFBO0FBZ0RsQjs7QUE1Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBK0NGO0FBN0NFO0VBQXFCLG1CQUFBO0VBQXFCLGNBQUE7QUFpRDVDO0FBaERFO0VBQWdCLG1CQUFBO0VBQXFCLGNBQUE7QUFvRHZDO0FBbkRFO0VBQXFCLG1CQUFBO0VBQXFCLGNBQUE7QUF1RDVDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5rcGktY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLyogSGVhZGVyIEJhciAqL1xyXG4ua3BpLWhlYWRlci1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLnRpdGxlLXdpdGgtYmFjayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIG1hcmdpbjogMCAwIDJweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhlYWRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4ucGVyaW9kLXNlbGVjdC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuc2VsZWN0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGVyaW9kLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweCA4cHggMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWljb24tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24taWNvbiB7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wMik7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gIH1cclxuXHJcbiAgJi5idG4tcGRmIHtcclxuICAgIGNvbG9yOiAjZWY0NDQ0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmVlMmUyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG4gIH1cclxuXHJcbiAgJi5idG4tZXhjZWwge1xyXG4gICAgY29sb3I6ICMxNmEzNGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNkY2ZjZTc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTU4MDNkOyB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi1wcmludCB7XHJcbiAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RiZWFmZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2RiZWFmZTsgY29sb3I6ICMxZDRlZDg7IH1cclxuICB9XHJcblxyXG4gICYuYnRuLWFkZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogIzFkNGVkODsgfVxyXG4gIH1cclxuXHJcbiAgJi5idG4tZWRpdCB7XHJcbiAgICBjb2xvcjogI2Q5NzcwNjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZlZjNjNztcclxuICAgIGJhY2tncm91bmQ6ICNmZmZiZWI7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNiNDUzMDk7IH1cclxuICB9XHJcblxyXG4gICYuYnRuLWRlbGV0ZSB7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZlZTJlMjtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgfVxyXG4gIH1cclxufVxyXG5cclxuLyogSGVhbHRoIFN1bW1hcnkgUm93ICovXHJcbi5oZWFsdGgtc3VtbWFyeS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDE2cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDIpO1xyXG59XHJcblxyXG4uY2FyZC1pY29uLWJveCB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgJi5iZy1ibHVlLWxpZ2h0IHsgYmFja2dyb3VuZDogI2VmZjZmZjsgY29sb3I6ICMyNTYzZWI7IH1cclxuICAmLmJnLWdyZWVuLWxpZ2h0IHsgYmFja2dyb3VuZDogI2YwZmRmNDsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAmLmJnLWFtYmVyLWxpZ2h0IHsgYmFja2dyb3VuZDogI2ZmZmJlYjsgY29sb3I6ICNkOTc3MDY7IH1cclxufVxyXG5cclxuLmNhcmQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4uY2FyZC1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2FyZC12YWwtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC12YWwge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG5cclxuICAmLnRleHQtYmx1ZSB7IGNvbG9yOiAjMjU2M2ViOyB9XHJcbiAgJi50ZXh0LWdyZWVuIHsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAmLnRleHQtYW1iZXIgeyBjb2xvcjogI2Q5NzcwNjsgfVxyXG59XHJcblxyXG4udmFsLXRhZyB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICAmLnRhZy1zdWNjZXNzIHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNTgwM2Q7IH1cclxuICAmLnRhZy1ncmVlbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgJi50YWctYW1iZXIgeyBiYWNrZ3JvdW5kOiAjZmZmYmViOyBjb2xvcjogI2I0NTMwOTsgfVxyXG59XHJcblxyXG4vKiBTZWN0aW9uIFRpdGxlICovXHJcbi5zZWN0aW9uLXRpdGxlLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEtQSSBDYXJkcyBHcmlkICovXHJcbi5rcGktZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4ua3BpLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDIpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsMCwwLDAuMDYpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ua3BpLWljb24ge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5rcGktdHJlbmQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgJi51cCB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgJi5kb3duIHsgYmFja2dyb3VuZDogI2ZlZjJmMjsgY29sb3I6ICNkYzI2MjY7IH1cclxufVxyXG5cclxuLmtwaS1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5rcGktbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmtwaS12YWx1ZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4uY3VycmVudC12YWwge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4udGFyZ2V0LXZhbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5rcGktZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtbGJsIHtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnByb2dyZXNzLXBjdCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItdHJhY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbi8qIERldGFpbCBTZWN0aW9uIEdyaWQgKi9cclxuLmtwaS1kZXRhaWwtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDIpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItYmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luOiAwIDAgMnB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLXN1YiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogVGFibGUgU3R5bGVzICovXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmRhdGEtdGFibGUgdGgge1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4uZm9udC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktcGlsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxufVxyXG5cclxuLnRyZW5kLWJhZGdlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG5cclxuICAmLnRyZW5kLXVwIHsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAmLnRyZW5kLWRvd24geyBjb2xvcjogI2RjMjYyNjsgfVxyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gICYuc3RhdHVzLWV4Y2VlZGVkIHsgYmFja2dyb3VuZDogI2YwZmRmNDsgY29sb3I6ICMxNmEzNGE7IGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7IH1cclxuICAmLnN0YXR1cy1vbnRyYWNrIHsgYmFja2dyb3VuZDogI2VmZjZmZjsgY29sb3I6ICMyNTYzZWI7IGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7IH1cclxuICAmLnN0YXR1cy1hdHJpc2sgeyBiYWNrZ3JvdW5kOiAjZmZmYmViOyBjb2xvcjogI2Q5NzcwNjsgYm9yZGVyOiAxcHggc29saWQgI2ZlZjNjNzsgfVxyXG59XHJcblxyXG4vKiBNZW1iZXJzIEtQSSBMaXN0ICovXHJcbi5tZW1iZXJzLWtwaS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4ubWVtYmVyLWtwaS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4ubWVtYmVyLWluZm8tY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lbWJlci1uYW1lcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAubS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5tLXJvbGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVtYmVyLXN0YXRzLWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm0tc3RhdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgLnN0YXQtbGJsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5zdGF0LXZhbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxZTI5M2I7XHJcblxyXG4gICAgJi50ZXh0LWJsdWUgeyBjb2xvcjogIzI1NjNlYjsgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgJi5zdGF0dXMtZXhjZWxsZW50IHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNTgwM2Q7IH1cclxuICAmLnN0YXR1cy1nb29kIHsgYmFja2dyb3VuZDogI2VmZjZmZjsgY29sb3I6ICMyNTYzZWI7IH1cclxuICAmLnN0YXR1cy1uZWVkcy1pbXAgeyBiYWNrZ3JvdW5kOiAjZmVmMmYyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 131:
/*!****************************************************************!*\
  !*** ./src/app/modules/team-lead/my-team/my-team.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlMyTeamComponent: () => (/* binding */ TlMyTeamComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);






function TlMyTeamComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 13);
  }
}
function TlMyTeamComponent_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 13);
  }
}
function TlMyTeamComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 13);
  }
}
function TlMyTeamComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 20)(6, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 25)(14, "div", 26)(15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Employee ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 26)(20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 26)(25, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 26)(31, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 34)(38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 37)(42, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlMyTeamComponent_div_16_div_1_Template_button_click_42_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const m_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.viewProfile(m_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlMyTeamComponent_div_16_div_1_Template_button_click_45_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const m_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.viewAttendance(m_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Attendance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlMyTeamComponent_div_16_div_1_Template_button_click_48_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const m_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.assignTask(m_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Assign Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.getInitial(m_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r6.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("badge--active", m_r6.status === "ACTIVE")("badge--leave", m_r6.status === "ON_LEAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", m_r6.status === "ACTIVE" ? "Active" : "On Leave", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r6.employeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r6.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", m_r6.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", m_r6.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", m_r6.tasksCount || 0, " Active Tasks ");
  }
}
function TlMyTeamComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TlMyTeamComponent_div_16_div_1_Template, 51, 13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.filteredMembers);
  }
}
function TlMyTeamComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No team members found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Try clearing your search query or selecting a different status filter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/team/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "My Team"
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
class TlMyTeamComponent {
  constructor(employeeService, performanceService, authService, toastService) {
    this.employeeService = employeeService;
    this.performanceService = performanceService;
    this.authService = authService;
    this.toastService = toastService;
    this.searchTerm = '';
    this.filterDepartment = '';
    this.filterStatus = '';
    this.showToast = false;
    this.toastMsg = '';
    this.departmentsList = [];
    this.members = [];
  }
  ngOnInit() {
    this.loadTeam();
  }
  loadTeam() {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      employees: this.employeeService.getAllEmployees(),
      tasks: this.performanceService.getAssignedByMe()
    }).subscribe(({
      employees,
      tasks
    }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.departmentsList = [...new Set(team.map(e => e.department))];
      this.members = team.map(e => ({
        name: `${e.firstName} ${e.lastName}`,
        employeeId: e.employeeId,
        designation: e.designation,
        department: e.department,
        email: e.email,
        phone: e.phone,
        status: e.employmentStatus === 'ACTIVE' ? 'ACTIVE' : 'ON_LEAVE',
        tasksCount: tasks.filter(t => t.assignedTo === e.id || t.assignedToId === e.id).length
      }));
    });
  }
  get filteredMembers() {
    return this.members.filter(m => {
      const matchSearch = !this.searchTerm || m.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || m.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase()) || m.designation.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchDept = !this.filterDepartment || m.department === this.filterDepartment;
      const matchStatus = !this.filterStatus || m.status === this.filterStatus;
      return matchSearch && matchDept && matchStatus;
    });
  }
  getInitial(name) {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }
  assignTask(member) {
    this.toastService.info(`New task assignment window opened for ${member.name}`);
  }
  viewProfile(member) {
    this.toastService.info(`Viewing ${member.name}'s profile details`);
  }
  viewAttendance(member) {
    this.toastService.info(`Viewing ${member.name}'s attendance logs`);
  }
  static {
    this.ɵfac = function TlMyTeamComponent_Factory(t) {
      return new (t || TlMyTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TlMyTeamComponent,
      selectors: [["app-tl-my-team"]],
      decls: 22,
      vars: 22,
      consts: [["title", "My Team", "subtitle", "Monitor, support, and assign tasks to your team members", 3, "breadcrumbs"], [1, "my-team-page-container"], [1, "filter-container-box"], [1, "search-input-wrapper"], [1, "fas", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search team members by name, ID, designation...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "status-pills-row"], [1, "status-pill", 3, "click"], ["class", "fas fa-check", 4, "ngIf"], ["class", "members-grid", 4, "ngIf"], ["class", "empty-state-card", 4, "ngIf"], [1, "toast-notification"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-check"], [1, "members-grid"], ["class", "member-card", 4, "ngFor", "ngForOf"], [1, "member-card"], [1, "card-header-row"], [1, "member-info-block"], [1, "member-avatar"], [1, "member-title-box"], [1, "member-name"], [1, "designation-sub"], [1, "status-badge"], [1, "card-divider"], [1, "member-details-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-val", "id-chip"], [1, "detail-val", "dept-chip"], [1, "detail-val", "text-truncate"], [1, "far", "fa-envelope", "text-blue"], [1, "detail-val"], [1, "fas", "fa-phone-alt", "text-blue"], [1, "card-actions-footer"], [1, "tasks-count-tag"], [1, "fas", "fa-tasks", "text-blue"], [1, "action-btns-group"], ["title", "View Profile", 1, "btn-card-action", 3, "click"], [1, "fas", "fa-eye"], ["title", "View Attendance", 1, "btn-card-action", 3, "click"], [1, "fas", "fa-calendar-check"], ["title", "Assign Task", 1, "btn-card-action", "btn-primary-action", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "empty-state-card"], [1, "fas", "fa-users-slash", "empty-icon"], [1, "empty-title"], [1, "empty-desc"]],
      template: function TlMyTeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TlMyTeamComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.searchTerm = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlMyTeamComponent_Template_button_click_7_listener() {
            return ctx.filterStatus = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TlMyTeamComponent_i_8_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlMyTeamComponent_Template_button_click_10_listener() {
            return ctx.filterStatus = "ACTIVE";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TlMyTeamComponent_i_11_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Active ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlMyTeamComponent_Template_button_click_13_listener() {
            return ctx.filterStatus = "ON_LEAVE";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TlMyTeamComponent_i_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " On Leave ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TlMyTeamComponent_div_16_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TlMyTeamComponent_div_17_Template, 6, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.filterStatus === "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filterStatus === "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" All Members (", ctx.members.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.filterStatus === "ACTIVE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filterStatus === "ACTIVE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.filterStatus === "ON_LEAVE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filterStatus === "ON_LEAVE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredMembers.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredMembers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.showToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.toastMsg);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 40px;\n}\n\n.my-team-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.filter-container-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n}\n\n\n\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  font-size: 15px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 18px 12px 46px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 14px;\n  color: #0f172a;\n  outline: none;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n}\n\n\n\n.status-pills-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding-top: 4px;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border-radius: 25px;\n  border: 1px solid #e2e8f0;\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-pill[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: #ffffff;\n  border-color: #0066ff;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.25);\n}\n\n\n\n.members-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.member-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 22px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.member-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n\n.card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.card-header-row[_ngcontent-%COMP%]   .member-info-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.card-header-row[_ngcontent-%COMP%]   .member-info-block[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #00a8ff 0%, #0066ff 100%);\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);\n  flex-shrink: 0;\n}\n.card-header-row[_ngcontent-%COMP%]   .member-info-block[_ngcontent-%COMP%]   .member-title-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.card-header-row[_ngcontent-%COMP%]   .member-info-block[_ngcontent-%COMP%]   .member-title-box[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.card-header-row[_ngcontent-%COMP%]   .member-info-block[_ngcontent-%COMP%]   .member-title-box[_ngcontent-%COMP%]   .designation-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0066ff;\n}\n.card-header-row[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 700;\n}\n.card-header-row[_ngcontent-%COMP%]   .status-badge.badge--active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.card-header-row[_ngcontent-%COMP%]   .status-badge.badge--leave[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n\n.card-divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  margin: 14px 0;\n}\n\n.member-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px 16px;\n}\n.member-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.member-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.member-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.member-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-val.id-chip[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.member-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-val.dept-chip[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #0066ff;\n  padding: 2px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.card-actions-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.card-actions-footer[_ngcontent-%COMP%]   .tasks-count-tag[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%]   .btn-card-action[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s ease;\n}\n.card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%]   .btn-card-action[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #0066ff;\n  color: #0066ff;\n}\n.card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%]   .btn-card-action.btn-primary-action[_ngcontent-%COMP%] {\n  background: #0066ff;\n  color: #ffffff;\n  border-color: #0066ff;\n  font-weight: 700;\n}\n.card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%]   .btn-card-action.btn-primary-action[_ngcontent-%COMP%]:hover {\n  background: #0052cc;\n  box-shadow: 0 3px 10px rgba(0, 102, 255, 0.25);\n}\n\n\n\n.empty-state-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 50px 20px;\n  text-align: center;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #cbd5e1;\n  margin-bottom: 12px;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-desc[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #64748b;\n  margin: 0;\n}\n\n\n\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #0f172a;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);\n  transform: translateY(100px);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 20000;\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.toast-notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #0066ff;\n}\n\n.text-truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (max-width: 992px) {\n  .members-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .member-details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-actions-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .card-actions-footer[_ngcontent-%COMP%]   .action-btns-group[_ngcontent-%COMP%]   .btn-card-action[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvbXktdGVhbS9teS10ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtHQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBLGdDQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUEsaUJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFSTtFQUNFLGNBQUE7QUFBTjtBQUdJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBRE47O0FBTUEsNEJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUhGO0FBS0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBQ0Us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QStCQSx1QkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO0VBQ0EsY0FBQTtBQTVCRjtBQThCRTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQTVCSjtBQStCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBN0JKOztBQWlDQTtFQUFhLGNBQUE7QUE3QmI7O0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBM0JGOztBQThCQTtFQUNFO0lBQ0UsMEJBQUE7RUEzQkY7QUFDRjtBQThCQTtFQUNFO0lBQ0UsMEJBQUE7RUE1QkY7RUErQkE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBN0JGO0VBK0JFO0lBQ0UsZUFBQTtFQTdCSjtFQThCSTtJQUNFLE9BQUE7SUFDQSx1QkFBQTtFQTVCTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5teS10ZWFtLXBhZ2UtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4vKiAxLiBUb3AgRmlsdGVyIENvbnRhaW5lciBCb3ggKi9cclxuLmZpbHRlci1jb250YWluZXItYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcblxyXG4vKiBTZWFyY2ggSW5wdXQgKi9cclxuLnNlYXJjaC1pbnB1dC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxOHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHggMTJweCA0NnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDIsIDI1NSwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFN0YXR1cyBGaWx0ZXIgUGlsbHMgUm93ICovXHJcbi5zdGF0dXMtcGlsbHMtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXBpbGwge1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NmZmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDY2ZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLyogMi4gVGVhbSBNZW1iZXJzIEdyaWQgKDIgQ29sdW1uIERlc2t0b3ApICovXHJcbi5tZW1iZXJzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5tZW1iZXItY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZzogMjJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMnB4O1xyXG5cclxuICAubWVtYmVyLWluZm8tYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE0cHg7XHJcblxyXG4gICAgLm1lbWJlci1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMGE4ZmYgMCUsICMwMDY2ZmYgMTAwJSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTAyLCAyNTUsIDAuMik7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW1iZXItdGl0bGUtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAycHg7XHJcblxyXG4gICAgICAubWVtYmVyLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2lnbmF0aW9uLXN1YiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDY2ZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGF0dXMtYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICYuYmFkZ2UtLWFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XHJcbiAgICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xyXG4gICAgfVxyXG5cclxuICAgICYuYmFkZ2UtLWxlYXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlZjNjNztcclxuICAgICAgY29sb3I6ICNkOTc3MDY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZGU2OGE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBtYXJnaW46IDE0cHggMDtcclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDEycHggMTZweDtcclxuXHJcbiAgLmRldGFpbC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0cHg7XHJcblxyXG4gICAgLmRldGFpbC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLXZhbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMzMzQxNTU7XHJcblxyXG4gICAgICAmLmlkLWNoaXAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgICAgICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kZXB0LWNoaXAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICAgICAgY29sb3I6ICMwMDY2ZmY7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtYWN0aW9ucy1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLnRhc2tzLWNvdW50LXRhZyB7XHJcbiAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ0bnMtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuXHJcbiAgICAuYnRuLWNhcmQtYWN0aW9uIHtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjZmZjtcclxuICAgICAgICBjb2xvcjogIzAwNjZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tcHJpbWFyeS1hY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDY2ZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNTJjYztcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAxMDIsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFbXB0eSBTdGF0ZSAqL1xyXG4uZW1wdHktc3RhdGUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZzogNTBweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmVtcHR5LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmVtcHR5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMCAwIDZweDtcclxuICB9XHJcblxyXG4gIC5lbXB0eS1kZXNjIHtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUb2FzdCBOb3RpZmljYXRpb24gKi9cclxuLnRvYXN0LW5vdGlmaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjRweDtcclxuICByaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgei1pbmRleDogMjAwMDA7XHJcblxyXG4gICYuc2hvdyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUgeyBjb2xvcjogIzAwNjZmZjsgfVxyXG4udGV4dC10cnVuY2F0ZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWVtYmVycy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLm1lbWJlci1kZXRhaWxzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1hY3Rpb25zLWZvb3RlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgLmFjdGlvbi1idG5zLWdyb3VwIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAuYnRuLWNhcmQtYWN0aW9uIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4179:
/*!********************************************************************************!*\
  !*** ./src/app/modules/team-lead/team-attendance/team-attendance.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlAttendanceComponent: () => (/* binding */ TlAttendanceComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function TlAttendanceComponent_div_17_div_29_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
  }
  if (rf & 2) {
    const member_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", member_r3.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", member_r3.name);
  }
}
function TlAttendanceComponent_div_17_div_29_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.getInitial(member_r3.name));
  }
}
function TlAttendanceComponent_div_17_div_29_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TlAttendanceComponent_div_17_div_29_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TlAttendanceComponent_div_17_div_29_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Late");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TlAttendanceComponent_div_17_div_29_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TlAttendanceComponent_div_17_div_29_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "In Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 52)(7, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Out Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 52)(12, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Break");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 52)(17, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Net Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.inTime || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.outTime || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.breakHours || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.netHours || "--");
  }
}
function TlAttendanceComponent_div_17_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TlAttendanceComponent_div_17_div_29_img_5_Template, 1, 2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TlAttendanceComponent_div_17_div_29_span_6_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36)(9, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TlAttendanceComponent_div_17_div_29_span_14_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TlAttendanceComponent_div_17_div_29_span_15_Template, 3, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TlAttendanceComponent_div_17_div_29_span_16_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TlAttendanceComponent_div_17_div_29_span_17_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TlAttendanceComponent_div_17_div_29_div_18_Template, 21, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r3.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !member_r3.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dot-present", member_r3.status === "PRESENT")("dot-absent", member_r3.status === "ABSENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", member_r3.employeeId, " \u2022 ", member_r3.department, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r3.status === "ABSENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r3.status === "PRESENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r3.status === "LATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r3.status === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r3.status === "PRESENT");
  }
}
function TlAttendanceComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 14)(3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16)(5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_div_17_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.filterStatus = "ALL");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_div_17_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.filterStatus = "PRESENT");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Present ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_div_17_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.filterStatus = "ABSENT");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Absent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_div_17_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.filterStatus = "LATE");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Late ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_div_17_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.filterStatus = "PENDING");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TlAttendanceComponent_div_17_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.searchQuery = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TlAttendanceComponent_div_17_div_29_Template, 19, 14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.filterStatus === "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.totalMembersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.filterStatus === "PRESENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.presentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.filterStatus === "ABSENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.absentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.filterStatus === "LATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.lateCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.filterStatus === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.pendingCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.filteredAttendance);
  }
}
function TlAttendanceComponent_div_18_div_61_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 45);
  }
  if (rf & 2) {
    const member_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", member_r22.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", member_r22.name);
  }
}
function TlAttendanceComponent_div_18_div_61_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r24.getInitial(member_r22.name));
  }
}
function TlAttendanceComponent_div_18_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TlAttendanceComponent_div_18_div_61_img_5_Template, 1, 2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TlAttendanceComponent_div_18_div_61_span_6_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36)(9, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 39)(14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const member_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r22.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !member_r22.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", member_r22.employeeId, " \u2022 ", member_r22.department, "");
  }
}
function TlAttendanceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Wednesday, 9 September 2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 58)(4, "div", 59)(5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Total Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 59)(12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 59)(19, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 59)(26, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Late");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 59)(33, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 59)(40, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 78)(47, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Attendance Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 80)(50, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 85)(57, "h3", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, TlAttendanceComponent_div_18_div_61_Template, 16, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.totalMembersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.presentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.absentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.lateCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.pendingCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.attendanceRatePercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.presentCount, " / ", ctx_r1.totalMembersCount, " Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.attendanceRatePercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r1.attendanceRatePercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Absent Today (", ctx_r1.absentMembers.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.absentMembers);
  }
}
class TlAttendanceComponent {
  constructor(employeeService, attendanceService, authService) {
    this.employeeService = employeeService;
    this.attendanceService = attendanceService;
    this.authService = authService;
    this.activeTab = 'attendance';
    this.searchQuery = '';
    this.filterStatus = 'ALL';
    this.selectedDateLabel = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short'
    });
    this.attendance = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;
    const today = new Date().toISOString().split('T')[0];
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      employees: this.employeeService.getAllEmployees(),
      attendance: this.attendanceService.getByDate(today)
    }).subscribe(({
      employees,
      attendance
    }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.attendance = team.map(e => {
        const record = attendance.find(a => a.employeeId === e.id);
        const status = record ? this.mapStatus(record.status) : 'ABSENT';
        return {
          id: record?.id || e.id,
          name: `${e.firstName} ${e.lastName}`,
          employeeId: e.employeeId,
          department: e.department,
          status,
          inTime: record?.checkIn ? this.formatTime(record.checkIn) : undefined,
          outTime: record?.checkOut ? this.formatTime(record.checkOut) : status === 'PRESENT' ? 'Working' : undefined,
          breakHours: undefined,
          netHours: record?.workHours ? `${Math.floor(record.workHours)}h ${Math.round(record.workHours % 1 * 60)}m` : undefined,
          statusBadge: status === 'PRESENT' ? 'Approved' : status === 'LATE' ? 'Late' : undefined
        };
      });
    });
  }
  mapStatus(s) {
    switch (s) {
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatus.PRESENT:
        return 'PRESENT';
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatus.LATE:
        return 'LATE';
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatus.ON_LEAVE:
        return 'ABSENT';
      case _core_models__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatus.HALF_DAY:
        return 'LATE';
      default:
        return 'ABSENT';
    }
  }
  formatTime(iso) {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  get filteredAttendance() {
    return this.attendance.filter(a => {
      if (this.filterStatus !== 'ALL' && a.status !== this.filterStatus) {
        return false;
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchName = a.name.toLowerCase().includes(q);
        const matchId = a.employeeId.toLowerCase().includes(q);
        const matchDept = a.department.toLowerCase().includes(q);
        if (!matchName && !matchId && !matchDept) return false;
      }
      return true;
    });
  }
  get totalMembersCount() {
    return this.attendance.length;
  }
  get presentCount() {
    return this.attendance.filter(a => a.status === 'PRESENT').length;
  }
  get absentCount() {
    return this.attendance.filter(a => a.status === 'ABSENT').length;
  }
  get lateCount() {
    return this.attendance.filter(a => a.status === 'LATE').length;
  }
  get pendingCount() {
    return this.attendance.filter(a => a.status === 'PENDING').length;
  }
  get attendanceRatePercentage() {
    if (this.totalMembersCount === 0) return 0;
    return Math.round(this.presentCount / this.totalMembersCount * 100);
  }
  get absentMembers() {
    return this.attendance.filter(a => a.status === 'ABSENT');
  }
  getInitial(name) {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }
  static {
    this.ɵfac = function TlAttendanceComponent_Factory(t) {
      return new (t || TlAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TlAttendanceComponent,
      selectors: [["app-tl-attendance"]],
      decls: 19,
      vars: 8,
      consts: [[1, "team-attendance-container"], [1, "page-header"], [1, "header-left"], [1, "title-group"], [1, "page-title"], [1, "subtitle"], [1, "header-right"], [1, "date-btn"], [1, "far", "fa-calendar-alt"], [1, "tabs-nav"], [1, "tab-btn", 3, "click"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "date-banner"], [1, "far", "fa-calendar-alt", "banner-icon-left"], [1, "far", "fa-calendar-alt", "banner-icon-right"], [1, "filter-pills-row"], [1, "pill-btn", 3, "click"], [1, "pill-badge"], [1, "pill-btn", "pill-present", 3, "click"], [1, "pill-btn", "pill-absent", 3, "click"], [1, "pill-btn", "pill-late", 3, "click"], [1, "pill-btn", "pill-pending", 3, "click"], [1, "search-box"], [1, "fas", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search name or employee ID...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "attendance-cards-list"], ["class", "member-card", 4, "ngFor", "ngForOf"], [1, "member-card"], [1, "member-card-header"], [1, "user-info"], [1, "avatar-container"], [1, "avatar-circle"], [3, "src", "alt", 4, "ngIf"], [4, "ngIf"], [1, "status-dot"], [1, "user-details"], [1, "user-name"], [1, "user-meta"], [1, "status-badge-container"], ["class", "badge-status badge-absent", 4, "ngIf"], ["class", "badge-status badge-approved", 4, "ngIf"], ["class", "badge-status badge-late", 4, "ngIf"], ["class", "badge-status badge-pending", 4, "ngIf"], ["class", "metrics-panel", 4, "ngIf"], [3, "src", "alt"], [1, "badge-status", "badge-absent"], [1, "badge-status", "badge-approved"], [1, "fas", "fa-check-circle"], [1, "badge-status", "badge-late"], [1, "badge-status", "badge-pending"], [1, "metrics-panel"], [1, "metric-col"], [1, "metric-label"], [1, "metric-value"], [1, "metric-value", "text-amber"], [1, "metric-value", "text-blue"], [1, "summary-date-title"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon-wrapper", "icon-blue"], [1, "fas", "fa-users"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon-wrapper", "icon-green"], [1, "fas", "fa-check"], [1, "kpi-value", "text-green"], [1, "kpi-icon-wrapper", "icon-red"], [1, "fas", "fa-times"], [1, "kpi-value", "text-red"], [1, "kpi-icon-wrapper", "icon-orange"], [1, "far", "fa-clock"], [1, "kpi-value", "text-orange"], [1, "kpi-icon-wrapper", "icon-orange-light"], [1, "far", "fa-clipboard"], [1, "kpi-icon-wrapper", "icon-purple"], [1, "fas", "fa-chart-pie"], [1, "kpi-value", "text-purple"], [1, "rate-card"], [1, "section-subheading"], [1, "rate-info-row"], [1, "rate-text"], [1, "rate-percentage"], [1, "progress-track"], [1, "progress-fill"], [1, "absent-today-section"], [1, "section-subheading", "text-red"], [1, "fas", "fa-times-circle"], [1, "status-dot", "dot-absent"]],
      template: function TlAttendanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Team Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_Template_button_click_13_listener() {
            return ctx.activeTab = "attendance";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Attendance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TlAttendanceComponent_Template_button_click_15_listener() {
            return ctx.activeTab = "summary";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Summary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TlAttendanceComponent_div_17_Template, 30, 17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TlAttendanceComponent_div_18_Template, 62, 13, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.totalMembersCount, " assigned members");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedDateLabel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "summary");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, sans-serif;\n  background-color: transparent;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.team-attendance-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  color: #1e293b;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.title-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2563eb;\n  font-weight: 500;\n}\n\n.date-btn[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 16px;\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n\n\n.tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 20px;\n}\n\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 15px;\n  font-weight: 600;\n  color: #64748b;\n  padding-bottom: 12px;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.tab-btn.active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #2563eb;\n  border-radius: 3px 3px 0 0;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #334155;\n}\n\n\n\n.date-banner[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-radius: 12px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  margin-bottom: 20px;\n  color: #3b82f6;\n  font-size: 15px;\n}\n\n\n\n.filter-pills-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.pill-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.pill-btn[_ngcontent-%COMP%]   .pill-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 10px;\n  font-size: 11px;\n  padding: 0 4px;\n}\n.pill-btn.active[_ngcontent-%COMP%] {\n  background: #475569;\n  color: #fff;\n  border-color: #475569;\n}\n.pill-btn.active[_ngcontent-%COMP%]   .pill-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  color: #fff;\n}\n.pill-btn.pill-present[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  color: #16a34a;\n  background: #f0fdf4;\n}\n.pill-btn.pill-present[_ngcontent-%COMP%]   .pill-badge[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.pill-btn.pill-present.active[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n  border-color: #16a34a;\n}\n.pill-btn.pill-absent[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n  color: #dc2626;\n  background: #fef2f2;\n}\n.pill-btn.pill-absent[_ngcontent-%COMP%]   .pill-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.pill-btn.pill-absent.active[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.pill-btn.pill-late[_ngcontent-%COMP%] {\n  border-color: #fde68a;\n  color: #d97706;\n  background: #fffbeb;\n}\n.pill-btn.pill-late[_ngcontent-%COMP%]   .pill-badge[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #fff;\n}\n.pill-btn.pill-late.active[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n  border-color: #d97706;\n}\n.pill-btn.pill-pending[_ngcontent-%COMP%] {\n  border-color: #fde68a;\n  color: #d97706;\n  background: #fffbeb;\n}\n.pill-btn.pill-pending[_ngcontent-%COMP%]   .pill-badge[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #fff;\n}\n.pill-btn.pill-pending.active[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n  border-color: #d97706;\n}\n\n\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 14px;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px 12px 42px;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: 14px;\n  outline: none;\n  background: #fff;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n\n\n\n.attendance-cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.member-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n\n.member-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-weight: 700;\n  color: #475569;\n}\n.avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border: 2px solid #fff;\n}\n.status-dot.dot-present[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-dot.dot-absent[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 2px 0;\n}\n\n.user-meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n\n\n\n.badge-status[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge-status.badge-absent[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.badge-status.badge-approved[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.badge-status.badge-late[_ngcontent-%COMP%], .badge-status.badge-pending[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n\n\n\n.metrics-panel[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 12px 20px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.metric-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.metric-value.text-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.metric-value.text-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n\n\n\n.summary-date-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #2563eb;\n  margin-bottom: 20px;\n}\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n\n.kpi-icon-wrapper[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  margin-bottom: 12px;\n}\n.kpi-icon-wrapper.icon-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.kpi-icon-wrapper.icon-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.kpi-icon-wrapper.icon-red[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.kpi-icon-wrapper.icon-orange[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.kpi-icon-wrapper.icon-orange-light[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.kpi-icon-wrapper.icon-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.kpi-value.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-value.text-red[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.kpi-value.text-orange[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-value.text-purple[_ngcontent-%COMP%] {\n  color: #9333ea;\n}\n\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n\n\n\n.rate-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n\n.section-subheading[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-subheading.text-red[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.rate-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.rate-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 600;\n}\n\n.rate-percentage[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #d97706;\n}\n\n.progress-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #f59e0b;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n\n\n\n.absent-today-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n@media (max-width: 992px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .metrics-panel[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .metrics-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvdGVhbS1hdHRlbmRhbmNlL3RlYW0tYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUEsV0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUEsb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0Us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QSx5QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFKQTtFQUNFO0lBQ0UscUNBQUE7RUFPRjtFQUxBO0lBQ0UscUNBQUE7RUFPRjtBQUNGO0FBSkE7RUFDRTtJQUNFLHFDQUFBO0VBTUY7RUFKQTtJQUNFLDBCQUFBO0VBTUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGVhbS1hdHRlbmRhbmNlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLnBhZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzI1NjNlYjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZGF0ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBjb2xvcjogIzI1NjNlYjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4vKiBOYXZpZ2F0aW9uIFRhYnMgKi9cclxuLnRhYnMtbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMzJweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGFiLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzI1NjNlYjtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gIH1cclxufVxyXG5cclxuLyogTGlnaHQgQmx1ZSBCYW5uZXIgKi9cclxuLmRhdGUtYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVmMmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICMzYjgyZjY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4vKiBGaWx0ZXIgUGlsbHMgKi9cclxuLmZpbHRlci1waWxscy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5waWxsLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gIC5waWxsLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzQ3NTU2OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDc1NTY5O1xyXG5cclxuICAgIC5waWxsLWJhZGdlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucGlsbC1wcmVzZW50IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2ZWZhYztcclxuICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZmRmNDtcclxuXHJcbiAgICAucGlsbC1iYWRnZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxNmEzNGE7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzE2YTM0YTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzE2YTM0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucGlsbC1hYnNlbnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmNhNWE1O1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xyXG5cclxuICAgIC5waWxsLWJhZGdlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2VmNDQ0NDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5waWxsLWxhdGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmRlNjhhO1xyXG4gICAgY29sb3I6ICNkOTc3MDY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmYmViO1xyXG5cclxuICAgIC5waWxsLWJhZGdlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1OWUwYjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDk3NzA2O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDk3NzA2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5waWxsLXBlbmRpbmcge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmRlNjhhO1xyXG4gICAgY29sb3I6ICNkOTc3MDY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmYmViO1xyXG5cclxuICAgIC5waWxsLWJhZGdlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1OWUwYjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDk3NzA2O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDk3NzA2O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogU2VhcmNoIEJveCAqL1xyXG4uc2VhcmNoLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzk0YTNiODtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHggMTJweCA0MnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZW1iZXIgQ2FyZHMgTGlzdCAqL1xyXG4uYXR0ZW5kYW5jZS1jYXJkcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ubWVtYmVyLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wMyk7XHJcbn1cclxuXHJcbi5tZW1iZXItY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5hdmF0YXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hdmF0YXItY2lyY2xlIHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLWRvdCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcblxyXG4gICYuZG90LXByZXNlbnQgeyBiYWNrZ3JvdW5kOiAjMjJjNTVlOyB9XHJcbiAgJi5kb3QtYWJzZW50IHsgYmFja2dyb3VuZDogI2VmNDQ0NDsgfVxyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBtYXJnaW46IDAgMCAycHggMDtcclxufVxyXG5cclxuLnVzZXItbWV0YSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogU3RhdHVzIEJhZGdlcyAqL1xyXG4uYmFkZ2Utc3RhdHVzIHtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcblxyXG4gICYuYmFkZ2UtYWJzZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgICBjb2xvcjogI2VmNDQ0NDtcclxuICB9XHJcblxyXG4gICYuYmFkZ2UtYXBwcm92ZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2YwZmRmNDtcclxuICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcclxuICB9XHJcblxyXG4gICYuYmFkZ2UtbGF0ZSwgJi5iYWRnZS1wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZiZWI7XHJcbiAgICBjb2xvcjogI2Q5NzcwNjtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1ldHJpY3MgUGFuZWwgaW5zaWRlIFByZXNlbnQgQ2FyZHMgKi9cclxuLm1ldHJpY3MtcGFuZWwge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ubWV0cmljLWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4ubWV0cmljLWxhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm1ldHJpYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcblxyXG4gICYudGV4dC1hbWJlciB7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgJi50ZXh0LWJsdWUgeyBjb2xvcjogIzI1NjNlYjsgfVxyXG59XHJcblxyXG4vKiBUQUIgMjogU1VNTUFSWSBWSUVXIFNUWUxFUyAqL1xyXG4uc3VtbWFyeS1kYXRlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzI1NjNlYjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ua3BpLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmtwaS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAyMHB4IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wMik7XHJcbn1cclxuXHJcbi5rcGktaWNvbi13cmFwcGVyIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgJi5pY29uLWJsdWUgeyBiYWNrZ3JvdW5kOiAjZWZmNmZmOyBjb2xvcjogIzI1NjNlYjsgfVxyXG4gICYuaWNvbi1ncmVlbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgJi5pY29uLXJlZCB7IGJhY2tncm91bmQ6ICNmZWYyZjI7IGNvbG9yOiAjZWY0NDQ0OyB9XHJcbiAgJi5pY29uLW9yYW5nZSB7IGJhY2tncm91bmQ6ICNmZmZiZWI7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgJi5pY29uLW9yYW5nZS1saWdodCB7IGJhY2tncm91bmQ6ICNmZmZiZWI7IGNvbG9yOiAjZjU5ZTBiOyB9XHJcbiAgJi5pY29uLXB1cnBsZSB7IGJhY2tncm91bmQ6ICNmM2U4ZmY7IGNvbG9yOiAjOTMzM2VhOyB9XHJcbn1cclxuXHJcbi5rcGktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgJi50ZXh0LWdyZWVuIHsgY29sb3I6ICMxNmEzNGE7IH1cclxuICAmLnRleHQtcmVkIHsgY29sb3I6ICNlZjQ0NDQ7IH1cclxuICAmLnRleHQtb3JhbmdlIHsgY29sb3I6ICNkOTc3MDY7IH1cclxuICAmLnRleHQtcHVycGxlIHsgY29sb3I6ICM5MzMzZWE7IH1cclxufVxyXG5cclxuLmtwaS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFJhdGUgQ2FyZCAqL1xyXG4ucmF0ZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXN1YmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gICYudGV4dC1yZWQgeyBjb2xvcjogI2VmNDQ0NDsgfVxyXG59XHJcblxyXG4ucmF0ZS1pbmZvLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJhdGUtcGVyY2VudGFnZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICNkOTc3MDY7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy10cmFjayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2dyZXNzLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjU5ZTBiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qIEFic2VudCBUb2RheSBTZWN0aW9uICovXHJcbi5hYnNlbnQtdG9kYXktc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmtwaS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgfVxyXG4gIC5tZXRyaWNzLXBhbmVsIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAua3BpLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcbiAgLm1ldHJpY3MtcGFuZWwge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2240:
/*!***************************************************************!*\
  !*** ./src/app/modules/team-lead/team-lead-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamLeadRoutingModule: () => (/* binding */ TeamLeadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 5323);
/* harmony import */ var _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-team/my-team.component */ 131);
/* harmony import */ var _team_attendance_team_attendance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-attendance/team-attendance.component */ 4179);
/* harmony import */ var _team_leave_team_leave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-leave/team-leave.component */ 6795);
/* harmony import */ var _team_tasks_team_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-tasks/team-tasks.component */ 5614);
/* harmony import */ var _team_performance_team_performance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-performance/team-performance.component */ 7429);
/* harmony import */ var _kpi_kpi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kpi/kpi.component */ 2887);
/* harmony import */ var _team_reports_team_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-reports/team-reports.component */ 7395);
/* harmony import */ var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./announcements/announcements.component */ 8283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.TlDashboardComponent
}, {
  path: 'team',
  component: _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_1__.TlMyTeamComponent
}, {
  path: 'team/attendance',
  component: _team_attendance_team_attendance_component__WEBPACK_IMPORTED_MODULE_2__.TlAttendanceComponent
}, {
  path: 'team/leave',
  component: _team_leave_team_leave_component__WEBPACK_IMPORTED_MODULE_3__.TlLeaveComponent
}, {
  path: 'team/tasks',
  component: _team_tasks_team_tasks_component__WEBPACK_IMPORTED_MODULE_4__.TlTasksComponent
}, {
  path: 'team/performance',
  component: _team_performance_team_performance_component__WEBPACK_IMPORTED_MODULE_5__.TlPerformanceComponent
}, {
  path: 'team/kpi',
  component: _kpi_kpi_component__WEBPACK_IMPORTED_MODULE_6__.TlKpiComponent
}, {
  path: 'team/reports',
  component: _team_reports_team_reports_component__WEBPACK_IMPORTED_MODULE_7__.TlReportsComponent
}, {
  path: 'announcements',
  component: _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_8__.TlAnnouncementsComponent
}];
class TeamLeadRoutingModule {
  static {
    this.ɵfac = function TeamLeadRoutingModule_Factory(t) {
      return new (t || TeamLeadRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: TeamLeadRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TeamLeadRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 6481:
/*!*******************************************************!*\
  !*** ./src/app/modules/team-lead/team-lead.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamLeadModule: () => (/* binding */ TeamLeadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _team_lead_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-lead-routing.module */ 2240);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 5323);
/* harmony import */ var _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-team/my-team.component */ 131);
/* harmony import */ var _team_attendance_team_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-attendance/team-attendance.component */ 4179);
/* harmony import */ var _team_leave_team_leave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-leave/team-leave.component */ 6795);
/* harmony import */ var _team_tasks_team_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-tasks/team-tasks.component */ 5614);
/* harmony import */ var _team_performance_team_performance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-performance/team-performance.component */ 7429);
/* harmony import */ var _kpi_kpi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kpi/kpi.component */ 2887);
/* harmony import */ var _team_reports_team_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team-reports/team-reports.component */ 7395);
/* harmony import */ var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./announcements/announcements.component */ 8283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);














class TeamLeadModule {
  static {
    this.ɵfac = function TeamLeadModule_Factory(t) {
      return new (t || TeamLeadModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: TeamLeadModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _team_lead_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeamLeadRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](TeamLeadModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.TlDashboardComponent, _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_3__.TlMyTeamComponent, _team_attendance_team_attendance_component__WEBPACK_IMPORTED_MODULE_4__.TlAttendanceComponent, _team_leave_team_leave_component__WEBPACK_IMPORTED_MODULE_5__.TlLeaveComponent, _team_tasks_team_tasks_component__WEBPACK_IMPORTED_MODULE_6__.TlTasksComponent, _team_performance_team_performance_component__WEBPACK_IMPORTED_MODULE_7__.TlPerformanceComponent, _kpi_kpi_component__WEBPACK_IMPORTED_MODULE_8__.TlKpiComponent, _team_reports_team_reports_component__WEBPACK_IMPORTED_MODULE_9__.TlReportsComponent, _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_10__.TlAnnouncementsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _team_lead_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeamLeadRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 6795:
/*!**********************************************************************!*\
  !*** ./src/app/modules/team-lead/team-leave/team-leave.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlLeaveComponent: () => (/* binding */ TlLeaveComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ 3787);







function TlLeaveComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td")(22, "div", 19)(23, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TlLeaveComponent_tr_47_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const r_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.approveRequest(r_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TlLeaveComponent_tr_47_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const r_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.rejectRequest(r_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.name.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("leave-type--" + r_r3.type.toLowerCase().replace(" ", "-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r3.appliedOn);
  }
}
function TlLeaveComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No pending leave requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function TlLeaveComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-status-badge", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.name.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", h_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r7.reviewedBy);
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/team-lead/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Team"
  };
};
const _c2 = function () {
  return {
    label: "Leave"
  };
};
const _c3 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class TlLeaveComponent {
  constructor(leaveService, toastService) {
    this.leaveService = leaveService;
    this.toastService = toastService;
    this.pendingRequests = [];
    this.leaveHistory = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
      pending: this.leaveService.getPending(),
      approved: this.leaveService.getRequests({
        status: 'APPROVED'
      }),
      rejected: this.leaveService.getRequests({
        status: 'REJECTED'
      })
    }).subscribe(({
      pending,
      approved,
      rejected
    }) => {
      this.pendingRequests = pending.map(r => this.mapLeave(r));
      const all = [...approved.items.map(r => this.mapLeaveHistory(r)), ...rejected.items.map(r => this.mapLeaveHistory(r))];
      this.leaveHistory = all.sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime());
    });
  }
  mapLeave(r) {
    return {
      id: r.id,
      name: r.employeeName,
      type: r.leaveType,
      from: this.formatDate(r.startDate),
      to: this.formatDate(r.endDate),
      days: r.totalDays,
      reason: r.reason,
      appliedOn: this.formatDate(r.createdAt)
    };
  }
  mapLeaveHistory(r) {
    return {
      id: r.id,
      name: r.employeeName,
      type: r.leaveType,
      from: this.formatDate(r.startDate),
      to: this.formatDate(r.endDate),
      days: r.totalDays,
      status: r.status,
      reviewedBy: r.approvedBy || 'System'
    };
  }
  formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  get approvedCount() {
    return this.leaveHistory.filter(h => h.status === 'APPROVED').length;
  }
  get rejectedCount() {
    return this.leaveHistory.filter(h => h.status === 'REJECTED').length;
  }
  get onLeaveCount() {
    return this.leaveHistory.filter(h => h.status === 'APPROVED').length;
  }
  approveRequest(req) {
    this.leaveService.approveOrReject(req.id, _core_models__WEBPACK_IMPORTED_MODULE_0__.LeaveStatus.APPROVED).subscribe({
      next: () => {
        this.toastService.success(`Leave request for ${req.name} approved`);
        this.loadData();
      },
      error: () => this.toastService.error('Failed to approve leave request')
    });
  }
  rejectRequest(req) {
    this.leaveService.approveOrReject(req.id, _core_models__WEBPACK_IMPORTED_MODULE_0__.LeaveStatus.REJECTED).subscribe({
      next: () => {
        this.toastService.success(`Leave request for ${req.name} rejected`);
        this.loadData();
      },
      error: () => this.toastService.error('Failed to reject leave request')
    });
  }
  static {
    this.ɵfac = function TlLeaveComponent_Factory(t) {
      return new (t || TlLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.LeaveService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: TlLeaveComponent,
      selectors: [["app-tl-leave"]],
      decls: 73,
      vars: 15,
      consts: [["title", "Team Leave Management", "subtitle", "Review and manage leave requests", 3, "breadcrumbs"], [1, "stats-row"], [1, "stat-box", "stat-pending"], [1, "stat-num"], [1, "stat-label"], [1, "stat-box", "stat-approved"], [1, "stat-box", "stat-rejected"], [1, "stat-box", "stat-onleave"], [1, "section-card"], [1, "section-header"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "section-card", 2, "margin-top", "20px"], [1, "user-cell"], [1, "avatar"], [1, "leave-type-badge"], [1, "reason-cell"], [1, "action-btns"], [1, "btn-approve", 3, "click"], [1, "fas", "fa-check"], [1, "btn-reject", 3, "click"], [1, "fas", "fa-times"], [1, "empty-state"], [1, "fas", "fa-check-circle"], [3, "status"]],
      template: function TlLeaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Pending Requests");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Approved This Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6)(13, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Rejected This Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Currently On Leave");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8)(23, "div", 9)(24, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Pending Requests");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 10)(27, "table", 11)(28, "thead")(29, "tr")(30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Leave Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Reason");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Applied On");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, TlLeaveComponent_tr_47_Template, 29, 10, "tr", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, TlLeaveComponent_div_48_Template, 4, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 14)(50, "div", 9)(51, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Leave History");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 10)(54, "table", 11)(55, "thead")(56, "tr")(57, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "To");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Reviewed By");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, TlLeaveComponent_tr_72_Template, 19, 8, "tr", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pendingRequests.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.approvedCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.rejectedCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.onLeaveCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pendingRequests);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pendingRequests.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.leaveHistory);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_3__.StatusBadgeComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  text-align: center;\n}\n\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n\n.stat-pending[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n\n.stat-approved[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n.stat-rejected[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.stat-onleave[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #a78bfa);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n\n.leave-type-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.leave-type--annual[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n\n.leave-type--sick[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.leave-type--personal[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n\n.leave-type--maternity[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n\n.reason-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n\n.btn-approve[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  background: #dcfce7;\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.btn-approve[_ngcontent-%COMP%]:hover {\n  background: #bbf7d0;\n}\n\n.btn-reject[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  background: #fee2e2;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.btn-reject[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #94a3b8;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 12px;\n  color: #10b981;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media (max-width: 768px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvdGVhbS1sZWF2ZS90ZWFtLWxlYXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQURJO0VBQWEsYUFBQTtFQUFlLHFDQUFBO0VBQXVDLFNBQUE7RUFBVyxtQkFBQTtBQVFsRjs7QUFQSTtFQUFZLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSx5QkFBQTtFQUEyQix5Q0FBQTtFQUF3QyxrQkFBQTtBQWdCekk7O0FBZkk7RUFBWSxlQUFBO0VBQWlCLGdCQUFBO0FBb0JqQzs7QUFuQkk7RUFBYyxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZUFBQTtBQXlCbkQ7O0FBeEJJO0VBQTBCLGNBQUE7QUE0QjlCOztBQTNCSTtFQUEyQixjQUFBO0FBK0IvQjs7QUE5Qkk7RUFBMkIsY0FBQTtBQWtDL0I7O0FBakNJO0VBQTBCLGNBQUE7QUFxQzlCOztBQXBDSTtFQUFnQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQix5Q0FBQTtFQUF3Qyx5QkFBQTtFQUEyQixnQkFBQTtBQTRDOUg7O0FBM0NJO0VBQWtCLGtCQUFBO0VBQW9CLGdDQUFBO0FBZ0QxQzs7QUEvQ0k7RUFBcUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLFNBQUE7QUFzRDVFOztBQXJESTtFQUFvQixnQkFBQTtBQXlEeEI7O0FBeERJO0VBQWMsV0FBQTtFQUFhLHlCQUFBO0FBNkQvQjs7QUE1REk7RUFBaUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHlCQUFBO0VBQTJCLHFCQUFBO0VBQXVCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQWtDLG1CQUFBO0FBeUV2Tjs7QUF4RUk7RUFBaUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdDQUFBO0FBK0UxRTs7QUE5RUk7RUFBNkIsbUJBQUE7QUFrRmpDOztBQWpGSTtFQUFhLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0FBdUZyRDs7QUF0Rkk7RUFBVSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLHFEQUFBO0VBQXFELFdBQUE7RUFBYSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBb0cvTjs7QUFuR0k7RUFBb0IsaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixnQkFBQTtBQTBHakY7O0FBekdJO0VBQXNCLG1CQUFBO0VBQXFCLGNBQUE7QUE4Ry9DOztBQTdHSTtFQUFvQixtQkFBQTtFQUFxQixjQUFBO0FBa0g3Qzs7QUFqSEk7RUFBd0IsbUJBQUE7RUFBcUIsY0FBQTtBQXNIakQ7O0FBckhJO0VBQXlCLG1CQUFBO0VBQXFCLGNBQUE7QUEwSGxEOztBQXpISTtFQUFlLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLHVCQUFBO0FBZ0k1RTs7QUEvSEk7RUFBZSxhQUFBO0VBQWUsUUFBQTtBQW9JbEM7O0FBbklJO0VBQWUsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBaUpyTTs7QUFoSkk7RUFBcUIsbUJBQUE7QUFvSnpCOztBQW5KSTtFQUFjLGlCQUFBO0VBQW1CLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtBQWlLcE07O0FBaEtJO0VBQW9CLG1CQUFBO0FBb0t4Qjs7QUFuS0k7RUFBZSxhQUFBO0VBQWUsa0JBQUE7RUFBb0IsY0FBQTtBQXlLdEQ7O0FBeEtJO0VBQWlCLGVBQUE7RUFBaUIsbUJBQUE7RUFBcUIsY0FBQTtBQThLM0Q7O0FBN0tJO0VBQWlCLGVBQUE7QUFpTHJCOztBQWhMSTtFQUE0QjtJQUFhLHFDQUFBO0VBcUwzQztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxyXG4gICAgLnN0YXRzLXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7IGdhcDogMTZweDsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxyXG4gICAgLnN0YXQtYm94IHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogMTJweDsgcGFkZGluZzogMjBweDsgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDsgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgLnN0YXQtbnVtIHsgZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogNzAwOyB9XHJcbiAgICAuc3RhdC1sYWJlbCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDRweDsgfVxyXG4gICAgLnN0YXQtcGVuZGluZyAuc3RhdC1udW0geyBjb2xvcjogI2Y1OWUwYjsgfVxyXG4gICAgLnN0YXQtYXBwcm92ZWQgLnN0YXQtbnVtIHsgY29sb3I6ICMxMGI5ODE7IH1cclxuICAgIC5zdGF0LXJlamVjdGVkIC5zdGF0LW51bSB7IGNvbG9yOiAjZWY0NDQ0OyB9XHJcbiAgICAuc3RhdC1vbmxlYXZlIC5zdGF0LW51bSB7IGNvbG9yOiAjNjM2NmYxOyB9XHJcbiAgICAuc2VjdGlvbi1jYXJkIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogMTJweDsgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7IGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7IHBhZGRpbmc6IDE2cHggMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7IH1cclxuICAgIC5zZWN0aW9uLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IG1hcmdpbjogMDsgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgeyBvdmVyZmxvdy14OiBhdXRvOyB9XHJcbiAgICAuZGF0YS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XHJcbiAgICAuZGF0YS10YWJsZSB0aCB7IHBhZGRpbmc6IDEycHggMTZweDsgdGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4gICAgLmRhdGEtdGFibGUgdGQgeyBwYWRkaW5nOiAxMnB4IDE2cHg7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICMzMzQxNTU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyB9XHJcbiAgICAuZGF0YS10YWJsZSB0Ym9keSB0cjpob3ZlciB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IH1cclxuICAgIC51c2VyLWNlbGwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cclxuICAgIC5hdmF0YXIgeyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzYzNjZmMSwjYTc4YmZhKTsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICAubGVhdmUtdHlwZS1iYWRnZSB7IHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuICAgIC5sZWF2ZS10eXBlLS1hbm51YWwgeyBiYWNrZ3JvdW5kOiAjZGJlYWZlOyBjb2xvcjogIzI1NjNlYjsgfVxyXG4gICAgLmxlYXZlLXR5cGUtLXNpY2sgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG4gICAgLmxlYXZlLXR5cGUtLXBlcnNvbmFsIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNkOTc3MDY7IH1cclxuICAgIC5sZWF2ZS10eXBlLS1tYXRlcm5pdHkgeyBiYWNrZ3JvdW5kOiAjZjNlOGZmOyBjb2xvcjogIzdjM2FlZDsgfVxyXG4gICAgLnJlYXNvbi1jZWxsIHsgbWF4LXdpZHRoOiAyMDBweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cclxuICAgIC5hY3Rpb24tYnRucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNnB4OyB9XHJcbiAgICAuYnRuLWFwcHJvdmUgeyBwYWRkaW5nOiA2cHggMTJweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA2cHg7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTZhMzRhOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cclxuICAgIC5idG4tYXBwcm92ZTpob3ZlciB7IGJhY2tncm91bmQ6ICNiYmY3ZDA7IH1cclxuICAgIC5idG4tcmVqZWN0IHsgcGFkZGluZzogNnB4IDEycHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNnB4OyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB9XHJcbiAgICAuYnRuLXJlamVjdDpob3ZlciB7IGJhY2tncm91bmQ6ICNmZWNhY2E7IH1cclxuICAgIC5lbXB0eS1zdGF0ZSB7IHBhZGRpbmc6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgIC5lbXB0eS1zdGF0ZSBpIHsgZm9udC1zaXplOiAzNnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyBjb2xvcjogIzEwYjk4MTsgfVxyXG4gICAgLmVtcHR5LXN0YXRlIHAgeyBmb250LXNpemU6IDE0cHg7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyAuc3RhdHMtcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfSB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7429:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/team-lead/team-performance/team-performance.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlPerformanceComponent: () => (/* binding */ TlPerformanceComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);





function TlPerformanceComponent_tr_50_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 29);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("filled", s_r3 <= p_r1.avgRating)("empty", s_r3 > p_r1.avgRating);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function TlPerformanceComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TlPerformanceComponent_tr_50_i_13_Template, 1, 4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td")(22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td")(27, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td")(30, "div", 24)(31, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.name.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.tasksCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r1.avgRating, ".0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", p_r1.punctuality + "%")("background", ctx_r0.getProgressColor(p_r1.punctuality));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r1.punctuality, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", p_r1.quality + "%")("background", ctx_r0.getProgressColor(p_r1.quality));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r1.quality, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("overall--" + ctx_r0.getOverallLevel(p_r1.overall));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r1.overall, "%");
  }
}
const _c1 = function () {
  return {
    label: "Dashboard",
    link: "/team-lead/dashboard"
  };
};
const _c2 = function () {
  return {
    label: "Team"
  };
};
const _c3 = function () {
  return {
    label: "Performance"
  };
};
const _c4 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class TlPerformanceComponent {
  constructor(performanceService, employeeService, authService) {
    this.performanceService = performanceService;
    this.employeeService = employeeService;
    this.authService = authService;
    this.performances = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      reviews: this.performanceService.getReviews(),
      employees: this.employeeService.getAllEmployees(),
      tasks: this.performanceService.getAssignedByMe()
    }).subscribe(({
      reviews,
      employees,
      tasks
    }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.performances = team.map(e => {
        const rev = reviews.find(r => r.employeeId === e.id);
        const completed = tasks.filter(t => (t.assignedTo === e.id || t.assignedToId === e.id) && (t.status === 'COMPLETED' || t.status === 'DONE')).length;
        const rating = rev?.overallRating || 0;
        const pct = Math.round(rating * 20);
        return {
          name: `${e.firstName} ${e.lastName}`,
          designation: e.designation,
          tasksCompleted: completed,
          avgRating: Math.round(rating),
          punctuality: rev ? Math.round(rev.competencyRating * 20) || 90 : 90,
          quality: rev ? Math.round(rev.goalsRating * 20) || 85 : 85,
          overall: pct || 85
        };
      });
    });
  }
  getProgressColor(val) {
    if (val >= 90) return '#10b981';
    if (val >= 75) return '#6366f1';
    if (val >= 60) return '#f59e0b';
    return '#ef4444';
  }
  getOverallLevel(val) {
    if (val >= 90) return 'excellent';
    if (val >= 80) return 'good';
    if (val >= 65) return 'average';
    return 'poor';
  }
  static {
    this.ɵfac = function TlPerformanceComponent_Factory(t) {
      return new (t || TlPerformanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TlPerformanceComponent,
      selectors: [["app-tl-performance"]],
      decls: 51,
      vars: 9,
      consts: [["title", "Team Performance", "subtitle", "Track and evaluate team performance", 3, "breadcrumbs"], [1, "stats-row"], [1, "stat-box"], [1, "stat-num", 2, "color", "#6366f1"], [1, "stat-label"], [1, "stat-num", 2, "color", "#10b981"], [1, "stat-num", 2, "color", "#f59e0b"], [1, "stat-num", 2, "color", "#06b6d4"], [1, "section-card"], [1, "card-toolbar"], [1, "btn-primary"], [1, "fas", "fa-plus"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "user-cell"], [1, "avatar"], [1, "rating-stars"], ["class", "fas fa-star", 3, "filled", "empty", 4, "ngFor", "ngForOf"], [1, "rating-num"], [1, "progress-bar-sm"], [1, "progress-fill"], [1, "progress-text"], [1, "overall-badge"], [1, "action-btns"], ["title", "View Details", 1, "btn-icon"], [1, "fas", "fa-eye"], ["title", "Write Review", 1, "btn-icon"], [1, "fas", "fa-pen"], [1, "fas", "fa-star"]],
      template: function TlPerformanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "87%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Avg Performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Top Performers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2)(13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Needs Improvement");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2)(18, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Q4 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Review Period");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8)(23, "div", 9)(24, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Performance Reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " New Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12)(30, "table", 13)(31, "thead")(32, "tr")(33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Designation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Tasks Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Avg. Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Punctuality");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Quality");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Overall");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, TlPerformanceComponent_tr_50_Template, 35, 20, "tr", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.performances);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  text-align: center;\n}\n\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n\n.card-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.card-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background: #6366f1;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #a78bfa);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n\n.rating-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.rating-stars[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 11px;\n}\n\n.rating-stars[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n  font-size: 11px;\n}\n\n.rating-num[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n.progress-bar-sm[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n\n.progress-text[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.overall-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.overall--excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n\n.overall--good[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n\n.overall--average[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n\n.overall--poor[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #6366f1;\n}\n\n@media (max-width: 768px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvdGVhbS1wZXJmb3JtYW5jZS90ZWFtLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQURJO0VBQWEsYUFBQTtFQUFlLHFDQUFBO0VBQXVDLFNBQUE7RUFBVyxtQkFBQTtBQVFsRjs7QUFQSTtFQUFZLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSx5QkFBQTtFQUEyQix5Q0FBQTtFQUF3QyxrQkFBQTtBQWdCekk7O0FBZkk7RUFBWSxlQUFBO0VBQWlCLGdCQUFBO0FBb0JqQzs7QUFuQkk7RUFBYyxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZUFBQTtBQXlCbkQ7O0FBeEJJO0VBQWdCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLHlDQUFBO0VBQXdDLHlCQUFBO0VBQTJCLGdCQUFBO0FBZ0M5SDs7QUEvQkk7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGtCQUFBO0VBQW9CLGdDQUFBO0FBdUM1Rzs7QUF0Q0k7RUFBbUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLFNBQUE7QUE2QzFFOztBQTVDSTtFQUFlLGlCQUFBO0VBQW1CLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBMERsTTs7QUF6REk7RUFBcUIsbUJBQUE7QUE2RHpCOztBQTVESTtFQUFvQixnQkFBQTtBQWdFeEI7O0FBL0RJO0VBQWMsV0FBQTtFQUFhLHlCQUFBO0FBb0UvQjs7QUFuRUk7RUFBaUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHlCQUFBO0VBQTJCLHFCQUFBO0VBQXVCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQWtDLG1CQUFBO0FBZ0Z2Tjs7QUEvRUk7RUFBaUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdDQUFBO0FBc0YxRTs7QUFyRkk7RUFBNkIsbUJBQUE7QUF5RmpDOztBQXhGSTtFQUFhLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0FBOEZyRDs7QUE3Rkk7RUFBVSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLHFEQUFBO0VBQXFELFdBQUE7RUFBYSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBMkcvTjs7QUExR0k7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUFnSHhEOztBQS9HSTtFQUF3QixjQUFBO0VBQWdCLGVBQUE7QUFvSDVDOztBQW5ISTtFQUF1QixjQUFBO0VBQWdCLGVBQUE7QUF3SDNDOztBQXZISTtFQUFjLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQThIdkU7O0FBN0hJO0VBQW1CLFdBQUE7RUFBYSxXQUFBO0VBQWEsbUJBQUE7RUFBcUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IscUJBQUE7RUFBdUIsc0JBQUE7QUF1SW5JOztBQXRJSTtFQUFpQixZQUFBO0VBQWMsa0JBQUE7RUFBb0Isc0JBQUE7QUE0SXZEOztBQTNJSTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGdCQUFBO0FBaUp4RDs7QUFoSkk7RUFBaUIsaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixnQkFBQTtBQXVKOUU7O0FBdEpJO0VBQXNCLG1CQUFBO0VBQXFCLGNBQUE7QUEySi9DOztBQTFKSTtFQUFpQixtQkFBQTtFQUFxQixjQUFBO0FBK0oxQzs7QUE5Skk7RUFBb0IsbUJBQUE7RUFBcUIsY0FBQTtBQW1LN0M7O0FBbEtJO0VBQWlCLG1CQUFBO0VBQXFCLGNBQUE7QUF1SzFDOztBQXRLSTtFQUFlLGFBQUE7RUFBZSxRQUFBO0FBMktsQzs7QUExS0k7RUFBWSxXQUFBO0VBQWEsWUFBQTtFQUFjLFlBQUE7RUFBYyxrQkFBQTtFQUFvQix1QkFBQTtFQUF5QixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLG9CQUFBO0FBd0xwTTs7QUF2TEk7RUFBa0IsbUJBQUE7RUFBcUIsY0FBQTtBQTRMM0M7O0FBM0xJO0VBQTRCO0lBQWEscUNBQUE7RUFnTTNDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAuc3RhdHMtcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgZ2FwOiAxNnB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgICAuc3RhdC1ib3ggeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAuc3RhdC1udW0geyBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuICAgIC5zdGF0LWxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLXRvcDogNHB4OyB9XHJcbiAgICAuc2VjdGlvbi1jYXJkIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogMTJweDsgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7IGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC5jYXJkLXRvb2xiYXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDE2cHggMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7IH1cclxuICAgIC5jYXJkLXRvb2xiYXIgaDMgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWUyOTNiOyBtYXJnaW46IDA7IH1cclxuICAgIC5idG4tcHJpbWFyeSB7IHBhZGRpbmc6IDhweCAxNnB4OyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogIzYzNjZmMTsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgfVxyXG4gICAgLmJ0bi1wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogIzRmNDZlNTsgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgeyBvdmVyZmxvdy14OiBhdXRvOyB9XHJcbiAgICAuZGF0YS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XHJcbiAgICAuZGF0YS10YWJsZSB0aCB7IHBhZGRpbmc6IDEycHggMTZweDsgdGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4gICAgLmRhdGEtdGFibGUgdGQgeyBwYWRkaW5nOiAxMnB4IDE2cHg7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICMzMzQxNTU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyB9XHJcbiAgICAuZGF0YS10YWJsZSB0Ym9keSB0cjpob3ZlciB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IH1cclxuICAgIC51c2VyLWNlbGwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cclxuICAgIC5hdmF0YXIgeyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzYzNjZmMSwjYTc4YmZhKTsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICAucmF0aW5nLXN0YXJzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAycHg7IH1cclxuICAgIC5yYXRpbmctc3RhcnMgLmZpbGxlZCB7IGNvbG9yOiAjZjU5ZTBiOyBmb250LXNpemU6IDExcHg7IH1cclxuICAgIC5yYXRpbmctc3RhcnMgLmVtcHR5IHsgY29sb3I6ICNlMmU4ZjA7IGZvbnQtc2l6ZTogMTFweDsgfVxyXG4gICAgLnJhdGluZy1udW0geyBtYXJnaW4tbGVmdDogNnB4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAucHJvZ3Jlc3MtYmFyLXNtIHsgd2lkdGg6IDgwcHg7IGhlaWdodDogNnB4OyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAzcHg7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxyXG4gICAgLnByb2dyZXNzLWZpbGwgeyBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDNweDsgdHJhbnNpdGlvbjogd2lkdGggMC4zczsgfVxyXG4gICAgLnByb2dyZXNzLXRleHQgeyBtYXJnaW4tbGVmdDogNnB4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuICAgIC5vdmVyYWxsLWJhZGdlIHsgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG4gICAgLm92ZXJhbGwtLWV4Y2VsbGVudCB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgICAub3ZlcmFsbC0tZ29vZCB7IGJhY2tncm91bmQ6ICNkYmVhZmU7IGNvbG9yOiAjMjU2M2ViOyB9XHJcbiAgICAub3ZlcmFsbC0tYXZlcmFnZSB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgICAub3ZlcmFsbC0tcG9vciB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgICAuYWN0aW9uLWJ0bnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDRweDsgfVxyXG4gICAgLmJ0bi1pY29uIHsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA2cHg7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogIzY0NzQ4YjsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cclxuICAgIC5idG4taWNvbjpob3ZlciB7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IGNvbG9yOiAjNjM2NmYxOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsgLnN0YXRzLXJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IH0gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7395:
/*!**************************************************************************!*\
  !*** ./src/app/modules/team-lead/team-reports/team-reports.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlReportsComponent: () => (/* binding */ TlReportsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function TlReportsComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87)(1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", d_r4.present, "/12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", d_r4.percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r4.day);
  }
}
function TlReportsComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92)(1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", item_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r5.count, " (", item_r5.percentage, "%)");
  }
}
function TlReportsComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 101)(6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", item_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", item_r6.percent, "%")("background", item_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r6.count, " days");
  }
}
function TlReportsComponent_tr_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 105)(3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td")(17, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const member_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getInitial(member_r7.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r7.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", member_r7.tasksCompleted, " Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", member_r7.onTimeRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", member_r7.rating, " / 5.0");
  }
}
class TlReportsComponent {
  constructor(reportService, performanceService, leaveService, authService, employeeService) {
    this.reportService = reportService;
    this.performanceService = performanceService;
    this.leaveService = leaveService;
    this.authService = authService;
    this.employeeService = employeeService;
    this.selectedPeriod = 'month';
    this.fromDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
    this.toDate = new Date().toISOString().split('T')[0];
    this.attendanceData = [];
    this.taskDistribution = [];
    this.leaveSummary = [];
    this.topMembers = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    const user = this.authService.currentUser;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      trend: this.reportService.getAttendanceTrend(7),
      tasks: this.performanceService.getAssignedByMe(),
      leaves: this.leaveService.getRequests({}),
      reviews: this.performanceService.getReviews(),
      employees: this.employeeService.getAllEmployees()
    }).subscribe(({
      trend,
      tasks,
      leaves,
      reviews,
      employees
    }) => {
      const team = user?.employeeId ? employees.filter(e => e.reportingManagerId === user.employeeId) : employees;
      if (trend.labels?.length && trend.datasets?.length) {
        const ds = trend.datasets[0];
        this.attendanceData = trend.labels.map((label, i) => ({
          day: label.substring(0, 3),
          present: ds.data[i] || 0,
          absent: Math.max(0, team.length - (ds.data[i] || 0)),
          late: 0,
          percentage: team.length > 0 ? Math.round((ds.data[i] || 0) / team.length * 100) : 0
        }));
      }
      const total = tasks.length || 1;
      const byStatus = {};
      tasks.forEach(t => {
        byStatus[t.status] = (byStatus[t.status] || 0) + 1;
      });
      this.taskDistribution = [{
        label: 'Completed (Done)',
        count: byStatus['COMPLETED'] || 0,
        percentage: Math.round((byStatus['COMPLETED'] || 0) / total * 100),
        color: '#16a34a'
      }, {
        label: 'In Progress',
        count: byStatus['IN_PROGRESS'] || 0,
        percentage: Math.round((byStatus['IN_PROGRESS'] || 0) / total * 100),
        color: '#2563eb'
      }, {
        label: 'In Review / QA',
        count: byStatus['IN_REVIEW'] || 0,
        percentage: Math.round((byStatus['IN_REVIEW'] || 0) / total * 100),
        color: '#d97706'
      }, {
        label: 'To Do / Backlog',
        count: byStatus['TODO'] || 0,
        percentage: Math.round((byStatus['TODO'] || 0) / total * 100),
        color: '#ef4444'
      }];
      const leaveItems = leaves.items || [];
      const byType = {};
      leaveItems.forEach(l => {
        byType[l.leaveType] = (byType[l.leaveType] || 0) + l.totalDays;
      });
      const maxDays = Math.max(...Object.values(byType), 1);
      const colors = ['#2563eb', '#ef4444', '#d97706', '#9333ea', '#64748b'];
      this.leaveSummary = Object.entries(byType).map(([label, count], i) => ({
        label,
        count,
        percent: Math.round(count / maxDays * 100),
        color: colors[i % colors.length]
      }));
      const teamIds = new Set(team.map(e => e.id));
      const teamReviews = reviews.filter(r => teamIds.has(r.employeeId));
      this.topMembers = teamReviews.sort((a, b) => b.overallRating - a.overallRating).slice(0, 4).map(r => ({
        name: r.employeeName,
        role: team.find(e => e.id === r.employeeId)?.designation || '',
        tasksCompleted: tasks.filter(t => t.assignedTo === r.employeeId && t.status === 'COMPLETED').length,
        onTimeRate: Math.round(r.competencyRating * 20) || 90,
        rating: r.overallRating
      }));
    });
  }
  getInitial(name) {
    return name ? name.charAt(0).toUpperCase() : 'U';
  }
  static {
    this.ɵfac = function TlReportsComponent_Factory(t) {
      return new (t || TlReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.LeaveService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.EmployeeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TlReportsComponent,
      selectors: [["app-tl-reports"]],
      decls: 176,
      vars: 7,
      consts: [[1, "reports-container"], [1, "reports-header-bar"], [1, "header-titles"], [1, "page-title"], [1, "subtitle"], [1, "header-actions"], [1, "filter-controls"], [1, "period-select", 3, "ngModel", "ngModelChange"], ["value", "week"], ["value", "month"], ["value", "quarter"], [1, "date-range"], ["type", "date", 1, "date-input", 3, "ngModel", "ngModelChange"], [1, "range-to"], [1, "action-icon-group"], ["title", "Export PDF", 1, "btn-action-icon", "btn-pdf"], [1, "fas", "fa-file-pdf"], ["title", "Export Excel", 1, "btn-action-icon", "btn-excel"], [1, "fas", "fa-file-excel"], ["title", "Print Analytics", 1, "btn-action-icon", "btn-print"], [1, "fas", "fa-print"], [1, "metrics-row"], [1, "metric-card"], [1, "icon-box", "bg-blue"], [1, "fas", "fa-user-check"], [1, "metric-data"], [1, "metric-lbl"], [1, "val-group"], [1, "metric-val", "text-blue"], [1, "badge-tag", "tag-up"], [1, "fas", "fa-arrow-up"], [1, "icon-box", "bg-green"], [1, "fas", "fa-tasks"], [1, "metric-val", "text-green"], [1, "badge-tag", "tag-green"], [1, "icon-box", "bg-purple"], [1, "fas", "fa-tachometer-alt"], [1, "metric-val", "text-purple"], [1, "badge-tag", "tag-purple"], [1, "icon-box", "bg-amber"], [1, "fas", "fa-user-clock"], [1, "metric-val", "text-amber"], [1, "badge-tag", "tag-amber"], [1, "charts-grid"], [1, "chart-card"], [1, "card-header-bar"], [1, "card-title"], [1, "header-badge"], [1, "chart-body"], [1, "bar-chart-container"], ["class", "bar-col", 4, "ngFor", "ngForOf"], [1, "donut-chart-wrap"], [1, "donut-ring"], ["viewBox", "0 0 120 120"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#f1f5f9", "stroke-width", "14"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#16a34a", "stroke-width", "14", "stroke-dasharray", "125 190", "stroke-dashoffset", "0", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#2563eb", "stroke-width", "14", "stroke-dasharray", "94 221", "stroke-dashoffset", "-125", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#d97706", "stroke-width", "14", "stroke-dasharray", "50 265", "stroke-dashoffset", "-219", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#ef4444", "stroke-width", "14", "stroke-dasharray", "31 284", "stroke-dashoffset", "-269", "transform", "rotate(-90 60 60)"], [1, "donut-center"], [1, "donut-total"], [1, "donut-lbl"], [1, "donut-legend-list"], ["class", "legend-row", 4, "ngFor", "ngForOf"], [1, "line-chart-wrap"], [1, "svg-container"], ["viewBox", "0 0 300 120", "preserveAspectRatio", "none"], ["points", "0,90 60,70 120,50 180,60 240,30 300,20", "fill", "none", "stroke", "#2563eb", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "0,100 60,90 120,80 180,85 240,65 300,55", "fill", "none", "stroke", "#16a34a", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "0", "cy", "90", "r", "4", "fill", "#2563eb"], ["cx", "60", "cy", "70", "r", "4", "fill", "#2563eb"], ["cx", "120", "cy", "50", "r", "4", "fill", "#2563eb"], ["cx", "180", "cy", "60", "r", "4", "fill", "#2563eb"], ["cx", "240", "cy", "30", "r", "4", "fill", "#2563eb"], ["cx", "300", "cy", "20", "r", "4", "fill", "#2563eb"], [1, "chart-x-labels"], [1, "line-legend-row"], [1, "leg-item"], [1, "leg-dot", "bg-blue"], [1, "leg-dot", "bg-green"], [1, "leave-summary-list"], ["class", "leave-row", 4, "ngFor", "ngForOf"], [1, "content-card", "full-width-card"], [1, "card-sub"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "bar-col"], [1, "bar-val-pop"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-lbl"], [1, "legend-row"], [1, "legend-left"], [1, "legend-dot"], [1, "legend-lbl"], [1, "legend-val"], [1, "leave-row"], [1, "leave-info"], [1, "leave-dot"], [1, "leave-name"], [1, "leave-track-wrap"], [1, "leave-track"], [1, "leave-fill"], [1, "leave-count"], [1, "user-cell"], [1, "user-avatar"], [1, "user-name"], [1, "role-text"], [1, "task-count-badge"], [1, "rate-badge", "tag-green"], [1, "rating-box"], [1, "fas", "fa-star", "text-amber"], [1, "rating-num"]],
      template: function TlReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Team Analytics & Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Comprehensive overview of attendance, task velocity, performance trends, and leave impact");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TlReportsComponent_Template_select_ngModelChange_9_listener($event) {
            return ctx.selectedPeriod = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "This Week");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "This Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "This Quarter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TlReportsComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.fromDate = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "to");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TlReportsComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.toDate = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "div", 22)(30, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25)(33, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Avg. Attendance Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27)(36, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "91.8%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " +3.4%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22)(42, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 25)(45, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Task Completion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 27)(48, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "88%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "45 Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22)(53, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25)(56, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Sprint Velocity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 27)(59, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "39.5 pts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "On Track");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22)(64, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25)(67, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Leave Impact Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 27)(70, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "4.2%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Low Impact");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 43)(75, "div", 44)(76, "div", 45)(77, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Weekly Attendance Trends");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "5 Days Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 48)(82, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, TlReportsComponent_div_83_Template, 7, 4, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 44)(85, "div", 45)(86, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Task Status Breakdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "45 Total Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 48)(91, "div", 51)(92, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "svg", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "circle", 54)(95, "circle", 55)(96, "circle", 56)(97, "circle", 57)(98, "circle", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 59)(100, "span", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, TlReportsComponent_div_105_Template, 7, 5, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 44)(107, "div", 45)(108, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Productivity & Quality Progression");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "H2 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 48)(113, "div", 64)(114, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "svg", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "polyline", 67)(117, "polyline", 68)(118, "circle", 69)(119, "circle", 70)(120, "circle", 71)(121, "circle", 72)(122, "circle", 73)(123, "circle", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 75)(125, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Jul");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Aug");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Sep");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Oct");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Nov");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Dec");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 76)(138, "span", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "span", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " Productivity Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " Quality Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 44)(145, "div", 45)(146, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Leave Type Breakdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Year-to-Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 48)(151, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, TlReportsComponent_div_152_Template, 10, 8, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 82)(154, "div", 45)(155, "div")(156, "h3", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Top Team Member Performers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Individual contribution and delivery metrics for this period");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 84)(161, "table", 85)(162, "thead")(163, "tr")(164, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Employee Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Role / Designation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Tasks Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "On-Time Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Performance Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, TlReportsComponent_tr_175_Template, 21, 6, "tr", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedPeriod);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fromDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.attendanceData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.taskDistribution);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.leaveSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.topMembers);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Inter\", system-ui, -apple-system, sans-serif;\n  background-color: transparent;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.reports-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n\n\n.reports-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n  letter-spacing: -0.3px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.filter-controls[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%], .filter-controls[_ngcontent-%COMP%]   .date-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  font-size: 13px;\n  color: #1e293b;\n  font-weight: 600;\n  outline: none;\n}\n.filter-controls[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-controls[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%]   .range-to[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.action-icon-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-action-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);\n}\n.btn-action-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.btn-action-icon.btn-pdf[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #fee2e2;\n  background: #fef2f2;\n}\n.btn-action-icon.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.btn-action-icon.btn-excel[_ngcontent-%COMP%] {\n  color: #16a34a;\n  border-color: #dcfce7;\n  background: #f0fdf4;\n}\n.btn-action-icon.btn-excel[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  color: #15803d;\n}\n.btn-action-icon.btn-print[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-color: #dbeafe;\n  background: #eff6ff;\n}\n.btn-action-icon.btn-print[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.btn-action-icon.btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn-action-icon.btn-add[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-action-icon.btn-edit[_ngcontent-%COMP%] {\n  color: #d97706;\n  border-color: #fef3c7;\n  background: #fffbeb;\n}\n.btn-action-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  color: #b45309;\n}\n.btn-action-icon.btn-delete[_ngcontent-%COMP%] {\n  color: #dc2626;\n  border-color: #fee2e2;\n  background: #fef2f2;\n}\n.btn-action-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n\n\n\n.metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .metrics-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .metrics-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n}\n\n.icon-box[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.icon-box.bg-blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.icon-box.bg-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.icon-box.bg-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n.icon-box.bg-amber[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n\n.metric-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.metric-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 600;\n}\n\n.val-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.metric-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.metric-val.text-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.metric-val.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.metric-val.text-purple[_ngcontent-%COMP%] {\n  color: #9333ea;\n}\n.metric-val.text-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n\n.badge-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.badge-tag.tag-up[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge-tag.tag-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.badge-tag.tag-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n.badge-tag.tag-amber[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n\n\n\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1024px) {\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n}\n\n.card-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n\n.header-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n\n.chart-body[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n\n\n.bar-chart-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  height: 180px;\n  padding-top: 20px;\n}\n\n.bar-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n}\n\n.bar-val-pop[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #2563eb;\n}\n\n.bar-track[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 130px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n\n.bar-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  background: linear-gradient(180deg, #3b82f6, #1d4ed8);\n  border-radius: 6px 6px 0 0;\n  transition: height 0.4s ease;\n}\n\n.bar-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n\n\n\n.donut-chart-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 500px) {\n  .donut-chart-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.donut-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 140px;\n  flex-shrink: 0;\n}\n.donut-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.donut-total[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n\n.donut-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n\n.donut-legend-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n\n.legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n\n.legend-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.legend-lbl[_ngcontent-%COMP%] {\n  color: #475569;\n  font-weight: 500;\n}\n\n.legend-val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1e293b;\n}\n\n\n\n.line-chart-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.svg-container[_ngcontent-%COMP%] {\n  height: 130px;\n  width: 100%;\n}\n.svg-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.chart-x-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n\n.line-legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  font-size: 12px;\n  color: #475569;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.line-legend-row[_ngcontent-%COMP%]   .leg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.line-legend-row[_ngcontent-%COMP%]   .leg-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.line-legend-row[_ngcontent-%COMP%]   .leg-dot.bg-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.line-legend-row[_ngcontent-%COMP%]   .leg-dot.bg-green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n\n\n\n.leave-summary-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.leave-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.leave-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 150px;\n}\n\n.leave-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.leave-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.leave-track-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n\n.leave-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.leave-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n\n.leave-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n  min-width: 48px;\n  text-align: right;\n}\n\n\n\n.full-width-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 2px 0 0 0;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 13px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #2563eb;\n  color: #fff;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.role-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n\n.task-count-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n  background: #eff6ff;\n  color: #2563eb;\n}\n\n.rate-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.rate-badge.tag-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n\n.rating-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.rating-num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n}\n\n.text-amber[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvdGVhbS1yZXBvcnRzL3RlYW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQSxlQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDTjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FBREY7QUFHRTtFQUNF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QUFBO0FBQ0E7RUFDRSxlQUFBO0FBeUNGOztBQXRDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF5Q0Y7O0FBdENBO0VBQ0UsZ0JBQUE7QUF5Q0Y7O0FBdENBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBeUNGOztBQXRDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXlDRjs7QUF0Q0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUF5Q0Y7O0FBdENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXlDRjs7QUF0Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUF5Q0Y7O0FBdENBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBeUNGOztBQXRDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBeUNGOztBQXRDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF5Q0Y7O0FBdENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXlDRjtBQXZDRTtFQUFjLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IseUJBQUE7QUE0Q3JEOztBQXpDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE0Q0Y7O0FBekNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTRDRjs7QUF6Q0E7RUFDRSxjQUFBO0FBNENGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5yZXBvcnRzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciBCYXIgKi9cclxuLnJlcG9ydHMtaGVhZGVyLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmlsdGVyLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICAucGVyaW9kLXNlbGVjdCwgLmRhdGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtcmFuZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDZweDtcclxuICAgIC5yYW5nZS10byB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWljb24tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24taWNvbiB7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wMik7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gIH1cclxuXHJcbiAgJi5idG4tcGRmIHtcclxuICAgIGNvbG9yOiAjZWY0NDQ0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmVlMmUyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2RjMjYyNjsgfVxyXG4gIH1cclxuXHJcbiAgJi5idG4tZXhjZWwge1xyXG4gICAgY29sb3I6ICMxNmEzNGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNkY2ZjZTc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTU4MDNkOyB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi1wcmludCB7XHJcbiAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RiZWFmZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2RiZWFmZTsgY29sb3I6ICMxZDRlZDg7IH1cclxuICB9XHJcblxyXG4gICYuYnRuLWFkZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogIzFkNGVkODsgfVxyXG4gIH1cclxuXHJcbiAgJi5idG4tZWRpdCB7XHJcbiAgICBjb2xvcjogI2Q5NzcwNjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZlZjNjNztcclxuICAgIGJhY2tncm91bmQ6ICNmZmZiZWI7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNiNDUzMDk7IH1cclxuICB9XHJcblxyXG4gICYuYnRuLWRlbGV0ZSB7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZlZTJlMjtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTWV0cmljIENhcmRzIFJvdyAqL1xyXG4ubWV0cmljcy1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDE2cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLm1ldHJpYy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDIpO1xyXG59XHJcblxyXG4uaWNvbi1ib3gge1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYuYmctYmx1ZSB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGNvbG9yOiAjMjU2M2ViOyB9XHJcbiAgJi5iZy1ncmVlbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgJi5iZy1wdXJwbGUgeyBiYWNrZ3JvdW5kOiAjZjNlOGZmOyBjb2xvcjogIzkzMzNlYTsgfVxyXG4gICYuYmctYW1iZXIgeyBiYWNrZ3JvdW5kOiAjZmZmYmViOyBjb2xvcjogI2Q5NzcwNjsgfVxyXG59XHJcblxyXG4ubWV0cmljLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLm1ldHJpYy1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udmFsLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5tZXRyaWMtdmFsIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuXHJcbiAgJi50ZXh0LWJsdWUgeyBjb2xvcjogIzI1NjNlYjsgfVxyXG4gICYudGV4dC1ncmVlbiB7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgJi50ZXh0LXB1cnBsZSB7IGNvbG9yOiAjOTMzM2VhOyB9XHJcbiAgJi50ZXh0LWFtYmVyIHsgY29sb3I6ICNkOTc3MDY7IH1cclxufVxyXG5cclxuLmJhZGdlLXRhZyB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICAmLnRhZy11cCB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTU4MDNkOyB9XHJcbiAgJi50YWctZ3JlZW4geyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBjb2xvcjogIzE2YTM0YTsgfVxyXG4gICYudGFnLXB1cnBsZSB7IGJhY2tncm91bmQ6ICNmM2U4ZmY7IGNvbG9yOiAjOTMzM2VhOyB9XHJcbiAgJi50YWctYW1iZXIgeyBiYWNrZ3JvdW5kOiAjZmZmYmViOyBjb2xvcjogI2I0NTMwOTsgfVxyXG59XHJcblxyXG4vKiBDaGFydHMgR3JpZCAqL1xyXG4uY2hhcnRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXJ0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDIpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmNoYXJ0LWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBCYXIgQ2hhcnQgKi9cclxuLmJhci1jaGFydC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5iYXItY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYmFyLXZhbC1wb3Age1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjU2M2ViO1xyXG59XHJcblxyXG4uYmFyLXRyYWNrIHtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iYXItZmlsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNiODJmNiwgIzFkNGVkOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHMgZWFzZTtcclxufVxyXG5cclxuLmJhci1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG59XHJcblxyXG4vKiBEb251dCBDaGFydCAqL1xyXG4uZG9udXQtY2hhcnQtd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG5cclxuLmRvbnV0LXJpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmRvbnV0LWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZG9udXQtdG90YWwge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uZG9udXQtbGJsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmRvbnV0LWxlZ2VuZC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5sZWdlbmQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmxlZ2VuZC1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5sZWdlbmQtZG90IHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubGVnZW5kLWxibCB7XHJcbiAgY29sb3I6ICM0NzU1Njk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxlZ2VuZC12YWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbn1cclxuXHJcbi8qIExpbmUgQ2hhcnQgKi9cclxuLmxpbmUtY2hhcnQtd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnN2Zy1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydC14LWxhYmVscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5saW5lLWxlZ2VuZC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuXHJcbiAgLmxlZy1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG5cclxuICAubGVnLWRvdCB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAmLmJnLWJsdWUgeyBiYWNrZ3JvdW5kOiAjMjU2M2ViOyB9XHJcbiAgICAmLmJnLWdyZWVuIHsgYmFja2dyb3VuZDogIzE2YTM0YTsgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTGVhdmUgU3VtbWFyeSBMaXN0ICovXHJcbi5sZWF2ZS1zdW1tYXJ5LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5sZWF2ZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ubGVhdmUtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubGVhdmUtZG90IHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubGVhdmUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbn1cclxuXHJcbi5sZWF2ZS10cmFjay13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5sZWF2ZS10cmFjayB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGVhdmUtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmxlYXZlLWNvdW50IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBtaW4td2lkdGg6IDQ4cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi8qIFBlcmZvcm1lcnMgVGFibGUgQ2FyZCAqL1xyXG4uZnVsbC13aWR0aC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLXN1YiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbjogMnB4IDAgMCAwO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5kYXRhLXRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzMzNDE1NTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxufVxyXG5cclxuLnVzZXItY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnVzZXItYXZhdGFyIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4ucm9sZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbi50YXNrLWNvdW50LWJhZGdlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgY29sb3I6ICMyNTYzZWI7XHJcbn1cclxuXHJcbi5yYXRlLWJhZGdlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICAmLnRhZy1ncmVlbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwOyB9XHJcbn1cclxuXHJcbi5yYXRpbmctYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5yYXRpbmctbnVtIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxufVxyXG5cclxuLnRleHQtYW1iZXIge1xyXG4gIGNvbG9yOiAjZjU5ZTBiO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5614:
/*!**********************************************************************!*\
  !*** ./src/app/modules/team-lead/team-tasks/team-tasks.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlTasksComponent: () => (/* binding */ TlTasksComponent)
/* harmony export */ });
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services */ 2589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 3301);






function TlTasksComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", m_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](m_r2);
  }
}
function TlTasksComponent_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 29)(11, "div", 30)(12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 32)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("task-card--" + task_r6.priority.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("priority--" + task_r6.priority.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r6.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r6.assignee.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r6.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("overdue", task_r6.isOverdue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r6.dueDate, "");
  }
}
function TlTasksComponent_div_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TlTasksComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TlTasksComponent_div_22_div_8_Template, 20, 13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TlTasksComponent_div_22_div_9_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", col_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", col_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getColumnTasks(col_r3.key).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getColumnTasks(col_r3.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.getColumnTasks(col_r3.key).length === 0);
  }
}
const _c0 = function () {
  return {
    label: "Dashboard",
    link: "/team-lead/dashboard"
  };
};
const _c1 = function () {
  return {
    label: "Team"
  };
};
const _c2 = function () {
  return {
    label: "Tasks"
  };
};
const _c3 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class TlTasksComponent {
  constructor(performanceService, employeeService, authService, toastService) {
    this.performanceService = performanceService;
    this.employeeService = employeeService;
    this.authService = authService;
    this.toastService = toastService;
    this.filterAssignee = '';
    this.filterPriority = '';
    this.showAddTask = false;
    this.columns = [{
      key: 'TODO',
      title: 'To Do',
      color: '#94a3b8'
    }, {
      key: 'IN_PROGRESS',
      title: 'In Progress',
      color: '#6366f1'
    }, {
      key: 'IN_REVIEW',
      title: 'In Review',
      color: '#f59e0b'
    }, {
      key: 'DONE',
      title: 'Done',
      color: '#10b981'
    }];
    this.tasks = [];
  }
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks() {
    this.performanceService.getAssignedByMe().subscribe(data => {
      const now = new Date();
      this.tasks = data.map(t => ({
        id: t.id,
        title: t.title,
        description: t.description,
        assignee: t.assignedToName || 'Unassigned',
        assignedToId: t.assignedTo || t.assignedToId,
        priority: t.priority || 'MEDIUM',
        status: t.status === 'COMPLETED' ? 'DONE' : t.status,
        dueDate: t.dueDate ? new Date(t.dueDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        }) : 'No date',
        isOverdue: t.dueDate ? new Date(t.dueDate) < now && t.status !== 'COMPLETED' : false
      }));
    });
  }
  get uniqueAssignees() {
    return [...new Set(this.tasks.map(t => t.assignee))];
  }
  getColumnTasks(status) {
    return this.tasks.filter(t => {
      if (t.status !== status) return false;
      if (this.filterAssignee && t.assignee !== this.filterAssignee) return false;
      if (this.filterPriority && t.priority !== this.filterPriority) return false;
      return true;
    });
  }
  updateTaskStatus(taskId, newStatus) {
    const statusMap = {
      'TODO': _core_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatus.TODO,
      'IN_PROGRESS': _core_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatus.IN_PROGRESS,
      'IN_REVIEW': _core_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatus.IN_REVIEW,
      'DONE': _core_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatus.COMPLETED
    };
    const mapped = statusMap[newStatus] || _core_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatus.IN_PROGRESS;
    this.performanceService.updateTaskStatus(taskId, mapped).subscribe({
      next: () => {
        this.toastService.success('Task status updated');
        this.loadTasks();
      },
      error: () => this.toastService.error('Failed to update task status')
    });
  }
  reviewTask(taskId, rating, comments) {
    this.performanceService.reviewTask(taskId, {
      status: 'COMPLETED',
      rating,
      reviewComments: comments
    }).subscribe({
      next: () => {
        this.toastService.success('Task reviewed successfully');
        this.loadTasks();
      },
      error: () => this.toastService.error('Failed to review task')
    });
  }
  static {
    this.ɵfac = function TlTasksComponent_Factory(t) {
      return new (t || TlTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.PerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TlTasksComponent,
      selectors: [["app-tl-tasks"]],
      decls: 23,
      vars: 12,
      consts: [["title", "Team Tasks", "subtitle", "Manage team tasks and assignments", 3, "breadcrumbs"], [1, "toolbar"], [1, "filter-group"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "URGENT"], ["value", "HIGH"], ["value", "MEDIUM"], ["value", "LOW"], [1, "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "kanban-board"], ["class", "kanban-column", 4, "ngFor", "ngForOf"], [3, "value"], [1, "kanban-column"], [1, "column-header"], [1, "column-title"], [1, "column-dot"], [1, "count"], [1, "column-body"], ["class", "task-card", 3, "class", 4, "ngFor", "ngForOf"], ["class", "empty-col", 4, "ngIf"], [1, "task-card"], [1, "task-card-header"], [1, "priority-badge"], [1, "task-id"], [1, "task-title"], [1, "task-desc"], [1, "task-card-footer"], [1, "assignee"], [1, "avatar-xs"], [1, "task-meta"], [1, "fas", "fa-calendar"], [1, "empty-col"]],
      template: function TlTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TlTasksComponent_Template_select_ngModelChange_3_listener($event) {
            return ctx.filterAssignee = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "All Members");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TlTasksComponent_option_6_Template, 2, 2, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TlTasksComponent_Template_select_ngModelChange_7_listener($event) {
            return ctx.filterPriority = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "All Priorities");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Urgent");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "High");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Medium");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Low");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TlTasksComponent_Template_button_click_18_listener() {
            return ctx.showAddTask = !ctx.showAddTask;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Add Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TlTasksComponent_div_22_Template, 10, 6, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterAssignee);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.uniqueAssignees);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterPriority);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background: #6366f1;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n\n.kanban-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  min-height: 400px;\n}\n\n.kanban-column[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n\n.column-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.column-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.column-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.count[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #64748b;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n\n.column-body[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 14px;\n  border: 1px solid #e2e8f0;\n  border-left: 3px solid #e2e8f0;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n\n.task-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n\n.task-card--urgent[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n}\n\n.task-card--high[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n\n.task-card--medium[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n\n.task-card--low[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n\n.task-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.priority--urgent[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.priority--high[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n\n.priority--medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n\n.priority--low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n\n.task-id[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n\n.task-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n\n.task-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.assignee[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n}\n\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #a78bfa);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.task-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.task-meta[_ngcontent-%COMP%]   .overdue[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n}\n\n.empty-col[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n\n@media (max-width: 1200px) {\n  .kanban-board[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .kanban-board[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90ZWFtLWxlYWQvdGVhbS10YXNrcy90ZWFtLXRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQURJO0VBQVcsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsU0FBQTtBQVV6SDs7QUFUSTtFQUFnQixhQUFBO0VBQWUsU0FBQTtBQWNuQzs7QUFiSTtFQUF1QixpQkFBQTtFQUFtQix5QkFBQTtFQUEyQixrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGFBQUE7RUFBZSxnQkFBQTtBQXNCN0g7O0FBckJJO0VBQWUsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLFdBQUE7RUFBYSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUFtQ2xNOztBQWxDSTtFQUFxQixtQkFBQTtBQXNDekI7O0FBckNJO0VBQWdCLGFBQUE7RUFBZSxxQ0FBQTtFQUF1QyxTQUFBO0VBQVcsaUJBQUE7QUE0Q3JGOztBQTNDSTtFQUFpQixtQkFBQTtFQUFxQixtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix5QkFBQTtBQWtEakY7O0FBakRJO0VBQWlCLGtCQUFBO0VBQW9CLGdDQUFBO0FBc0R6Qzs7QUFyREk7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBOEQzRzs7QUE3REk7RUFBYyxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGNBQUE7QUFvRWpFOztBQW5FSTtFQUFTLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixtQkFBQTtBQTRFdkc7O0FBM0VJO0VBQWUsYUFBQTtFQUFlLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixTQUFBO0FBa0Z6RTs7QUFqRkk7RUFBYSxnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixhQUFBO0VBQWUseUJBQUE7RUFBMkIsOEJBQUE7RUFBZ0MsZUFBQTtFQUFpQiwyQkFBQTtBQTJGbko7O0FBMUZJO0VBQW1CLDBDQUFBO0FBOEZ2Qjs7QUE3Rkk7RUFBcUIsMEJBQUE7QUFpR3pCOztBQWhHSTtFQUFtQiwwQkFBQTtBQW9HdkI7O0FBbkdJO0VBQXFCLDBCQUFBO0FBdUd6Qjs7QUF0R0k7RUFBa0IsMEJBQUE7QUEwR3RCOztBQXpHSTtFQUFvQixhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsbUJBQUE7RUFBcUIsa0JBQUE7QUFnSDVGOztBQS9HSTtFQUFrQixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLHlCQUFBO0FBdUgvRjs7QUF0SEk7RUFBb0IsbUJBQUE7RUFBcUIsY0FBQTtBQTJIN0M7O0FBMUhJO0VBQWtCLG1CQUFBO0VBQXFCLGNBQUE7QUErSDNDOztBQTlISTtFQUFvQixtQkFBQTtFQUFxQixjQUFBO0FBbUk3Qzs7QUFsSUk7RUFBaUIsbUJBQUE7RUFBcUIsY0FBQTtBQXVJMUM7O0FBdElJO0VBQVcsZUFBQTtFQUFpQixjQUFBO0FBMkloQzs7QUExSUk7RUFBYyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsZUFBQTtBQWlKckU7O0FBaEpJO0VBQWEsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGdCQUFBO0FBdUpwRTs7QUF0Skk7RUFBb0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FBNEo1RDs7QUEzSkk7RUFBWSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLGVBQUE7RUFBaUIsY0FBQTtBQW1LL0U7O0FBbEtJO0VBQWEsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixxREFBQTtFQUFxRCxXQUFBO0VBQWEsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGVBQUE7RUFBaUIsZ0JBQUE7QUErS2hOOztBQTlLSTtFQUFrQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUFzTDNGOztBQXJMSTtFQUFzQixjQUFBO0VBQWdCLGdCQUFBO0FBMEwxQzs7QUF6TEk7RUFBYSxrQkFBQTtFQUFvQixhQUFBO0VBQWUsY0FBQTtFQUFnQixlQUFBO0FBZ01wRTs7QUEvTEk7RUFBNkI7SUFBZ0IscUNBQUE7RUFvTS9DO0FBQ0Y7QUFwTUk7RUFBNEI7SUFBZ0IsMEJBQUE7RUF3TTlDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAudG9vbGJhciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogMjBweDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDEycHg7IH1cclxuICAgIC5maWx0ZXItZ3JvdXAgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IH1cclxuICAgIC5maWx0ZXItZ3JvdXAgc2VsZWN0IHsgcGFkZGluZzogOHB4IDEycHg7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAxM3B4OyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XHJcbiAgICAuYnRuLXByaW1hcnkgeyBwYWRkaW5nOiA4cHggMTZweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6ICM2MzY2ZjE7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IH1cclxuICAgIC5idG4tcHJpbWFyeTpob3ZlciB7IGJhY2tncm91bmQ6ICM0ZjQ2ZTU7IH1cclxuICAgIC5rYW5iYW4tYm9hcmQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOyBnYXA6IDE2cHg7IG1pbi1oZWlnaHQ6IDQwMHB4OyB9XHJcbiAgICAua2FuYmFuLWNvbHVtbiB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGJvcmRlci1yYWRpdXM6IDEycHg7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IH1cclxuICAgIC5jb2x1bW4taGVhZGVyIHsgcGFkZGluZzogMTRweCAxNnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDsgfVxyXG4gICAgLmNvbHVtbi10aXRsZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTI5M2I7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XHJcbiAgICAuY29sdW1uLWRvdCB7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgZmxleC1zaHJpbms6IDA7IH1cclxuICAgIC5jb3VudCB7IGJhY2tncm91bmQ6ICNlMmU4ZjA7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cclxuICAgIC5jb2x1bW4tYm9keSB7IHBhZGRpbmc6IDEycHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxyXG4gICAgLnRhc2stY2FyZCB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2UyZThmMDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7IH1cclxuICAgIC50YXNrLWNhcmQ6aG92ZXIgeyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4wOCk7IH1cclxuICAgIC50YXNrLWNhcmQtLXVyZ2VudCB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjZGMyNjI2OyB9XHJcbiAgICAudGFzay1jYXJkLS1oaWdoIHsgYm9yZGVyLWxlZnQtY29sb3I6ICNlZjQ0NDQ7IH1cclxuICAgIC50YXNrLWNhcmQtLW1lZGl1bSB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjZjU5ZTBiOyB9XHJcbiAgICAudGFzay1jYXJkLS1sb3cgeyBib3JkZXItbGVmdC1jb2xvcjogIzEwYjk4MTsgfVxyXG4gICAgLnRhc2stY2FyZC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gICAgLnByaW9yaXR5LWJhZGdlIHsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuICAgIC5wcmlvcml0eS0tdXJnZW50IHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICNkYzI2MjY7IH1cclxuICAgIC5wcmlvcml0eS0taGlnaCB7IGJhY2tncm91bmQ6ICNmZWYyZjI7IGNvbG9yOiAjZWY0NDQ0OyB9XHJcbiAgICAucHJpb3JpdHktLW1lZGl1bSB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjZDk3NzA2OyB9XHJcbiAgICAucHJpb3JpdHktLWxvdyB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbiAgICAudGFzay1pZCB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgIC50YXNrLXRpdGxlIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzFlMjkzYjsgbWFyZ2luOiAwIDAgNHB4OyB9XHJcbiAgICAudGFzay1kZXNjIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAwIDAgMTBweDsgbGluZS1oZWlnaHQ6IDEuNDsgfVxyXG4gICAgLnRhc2stY2FyZC1mb290ZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cclxuICAgIC5hc3NpZ25lZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgICAuYXZhdGFyLXhzIHsgd2lkdGg6IDIycHg7IGhlaWdodDogMjJweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM2MzY2ZjEsI2E3OGJmYSk7IGNvbG9yOiAjZmZmOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNjAwOyB9XHJcbiAgICAudGFzay1tZXRhIHNwYW4geyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOTRhM2I4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxyXG4gICAgLnRhc2stbWV0YSAub3ZlcmR1ZSB7IGNvbG9yOiAjZWY0NDQ0OyBmb250LXdlaWdodDogNjAwOyB9XHJcbiAgICAuZW1wdHktY29sIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAzMHB4OyBjb2xvcjogIzk0YTNiODsgZm9udC1zaXplOiAxM3B4OyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7IC5rYW5iYW4tYm9hcmQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyB9IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyAua2FuYmFuLWJvYXJkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH0gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_team-lead_team-lead_module_ts.js.map