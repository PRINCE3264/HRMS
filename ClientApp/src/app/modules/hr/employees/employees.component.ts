import { Component, ViewChild, OnInit } from '@angular/core';
import {
  GridComponent,
  PageSettingsModel,
  FilterSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EmployeeService } from '../../../core/services';
import { Employee } from '../../../core/models';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class HrEmployeesComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;

  public toolbar: ToolbarItems[] = ['Search', 'ExcelExport', 'PdfExport', 'Print', 'ColumnChooser'];

  public pageSettings: PageSettingsModel = {
    pageSize: 10,
    pageSizes: [5, 10, 20, 50]
  };

  public filterSettings: FilterSettingsModel = {
    type: 'Excel'
  };

  private deptColors: Record<string, string> = {
    'Engineering': '#4461f6',
    'Marketing':   '#10b981',
    'Finance':     '#f59e0b',
    'Design':      '#ec4899',
    'HR':          '#8b5cf6',
    'Operations':  '#06b6d4',
  };

  public employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data.map(e => ({
          employeeId: e.employeeId,
          name: `${e.firstName} ${e.lastName}`,
          avatar: e.firstName?.charAt(0) + e.lastName?.charAt(0),
          department: e.department,
          designation: e.designation,
          joiningDate: e.joiningDate,
          status: e.employmentStatus,
          salary: e.salary || 0,
          phone: e.phone,
          email: e.email,
          id: e.id,
        }));
      }
    });
  }

  get activeCount()   { return this.employees.filter(e => e.status === 'Active').length; }
  get onLeaveCount()  { return this.employees.filter(e => e.status === 'On Leave').length; }
  get inactiveCount() { return this.employees.filter(e => e.status === 'Inactive').length; }

  getAvatarColor(department: string): string {
    return this.deptColors[department] || '#64748b';
  }

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id?.includes('excelexport')) this.grid.excelExport();
    if (args.item.id?.includes('pdfexport'))   this.grid.pdfExport();
    if (args.item.id?.includes('print'))       this.grid.print();
  }

  getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'active':   return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'on leave': return 'status-leave';
      default:         return '';
    }
  }
}
