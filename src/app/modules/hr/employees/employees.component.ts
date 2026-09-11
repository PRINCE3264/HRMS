import { Component, ViewChild } from '@angular/core';
import {
  GridComponent,
  PageSettingsModel,
  FilterSettingsModel,
  ToolbarItems,
  ExcelExportProperties,
  PdfExportProperties
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class HrEmployeesComponent {
  @ViewChild('grid') public grid!: GridComponent;

  public toolbar: ToolbarItems[] = ['Search', 'ExcelExport', 'PdfExport', 'Print', 'ColumnChooser'];

  public pageSettings: PageSettingsModel = {
    pageSize: 10,
    pageSizes: [5, 10, 20, 50]
  };

  public filterSettings: FilterSettingsModel = {
    type: 'Excel'
  };

  public employees = [
    { employeeId: 'EMP001', name: 'John Smith',       avatar: 'JS', department: 'Engineering', designation: 'Senior Developer',    joiningDate: '2023-01-15', status: 'Active',   salary: 95000,  phone: '+1-555-0101', email: 'john.smith@hrm.com' },
    { employeeId: 'EMP002', name: 'Emily Davis',       avatar: 'ED', department: 'Marketing',   designation: 'Marketing Specialist', joiningDate: '2023-08-01', status: 'Active',   salary: 72000,  phone: '+1-555-0102', email: 'emily.davis@hrm.com' },
    { employeeId: 'EMP003', name: 'Robert Wilson',     avatar: 'RW', department: 'Finance',     designation: 'Financial Analyst',   joiningDate: '2022-11-15', status: 'Active',   salary: 85000,  phone: '+1-555-0103', email: 'robert.wilson@hrm.com' },
    { employeeId: 'EMP004', name: 'Lisa Anderson',     avatar: 'LA', department: 'Design',      designation: 'UI/UX Designer',      joiningDate: '2023-04-22', status: 'Active',   salary: 78000,  phone: '+1-555-0104', email: 'lisa.anderson@hrm.com' },
    { employeeId: 'EMP005', name: 'James Brown',       avatar: 'JB', department: 'Engineering', designation: 'DevOps Engineer',     joiningDate: '2023-06-10', status: 'Active',   salary: 92000,  phone: '+1-555-0105', email: 'james.brown@hrm.com' },
    { employeeId: 'EMP006', name: 'Sarah Johnson',     avatar: 'SJ', department: 'HR',          designation: 'HR Manager',          joiningDate: '2021-03-05', status: 'Active',   salary: 82000,  phone: '+1-555-0106', email: 'sarah.johnson@hrm.com' },
    { employeeId: 'EMP007', name: 'Michael Chen',      avatar: 'MC', department: 'Operations',  designation: 'Operations Lead',     joiningDate: '2022-07-18', status: 'On Leave', salary: 76000,  phone: '+1-555-0107', email: 'michael.chen@hrm.com' },
    { employeeId: 'EMP008', name: 'David Lee',         avatar: 'DL', department: 'Finance',     designation: 'Accountant',          joiningDate: '2023-09-12', status: 'Active',   salary: 68000,  phone: '+1-555-0108', email: 'david.lee@hrm.com' },
    { employeeId: 'EMP009', name: 'Jessica Martinez',  avatar: 'JM', department: 'Marketing',   designation: 'Content Strategist',  joiningDate: '2024-01-08', status: 'Active',   salary: 65000,  phone: '+1-555-0109', email: 'jessica.m@hrm.com' },
    { employeeId: 'EMP010', name: 'Daniel Kim',        avatar: 'DK', department: 'Engineering', designation: 'Frontend Developer',  joiningDate: '2023-11-20', status: 'Inactive', salary: 71000,  phone: '+1-555-0110', email: 'daniel.kim@hrm.com' },
    { employeeId: 'EMP011', name: 'Anna Williams',     avatar: 'AW', department: 'Design',      designation: 'Graphic Designer',    joiningDate: '2022-05-10', status: 'Active',   salary: 62000,  phone: '+1-555-0111', email: 'anna.w@hrm.com' },
    { employeeId: 'EMP012', name: 'Chris Evans',       avatar: 'CE', department: 'Engineering', designation: 'Backend Developer',   joiningDate: '2021-09-01', status: 'Active',   salary: 98000,  phone: '+1-555-0112', email: 'chris.evans@hrm.com' },
    { employeeId: 'EMP013', name: 'Nina Patel',        avatar: 'NP', department: 'HR',          designation: 'Recruiter',           joiningDate: '2023-03-14', status: 'Active',   salary: 60000,  phone: '+1-555-0113', email: 'nina.patel@hrm.com' },
    { employeeId: 'EMP014', name: 'Tom Harris',        avatar: 'TH', department: 'Operations',  designation: 'Logistics Manager',   joiningDate: '2022-01-22', status: 'Active',   salary: 74000,  phone: '+1-555-0114', email: 'tom.harris@hrm.com' },
    { employeeId: 'EMP015', name: 'Sophia Lee',        avatar: 'SL', department: 'Finance',     designation: 'Tax Specialist',      joiningDate: '2024-02-15', status: 'Active',   salary: 80000,  phone: '+1-555-0115', email: 'sophia.lee@hrm.com' },
  ];

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id?.includes('excelexport'))  this.grid.excelExport();
    if (args.item.id?.includes('pdfexport'))    this.grid.pdfExport();
    if (args.item.id?.includes('print'))        this.grid.print();
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

