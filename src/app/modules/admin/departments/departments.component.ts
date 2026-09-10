import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class AdminDepartmentsComponent {
  showAdd = false;
  departments = [
    { name: 'Engineering', description: 'Software development, infrastructure, and technical operations', employeeCount: 68, head: 'Michael Chen', status: 'ACTIVE' },
    { name: 'Human Resources', description: 'Employee relations, recruitment, and organizational development', employeeCount: 18, head: 'Sarah Johnson', status: 'ACTIVE' },
    { name: 'Marketing', description: 'Brand management, digital marketing, and communications', employeeCount: 32, head: 'Emily Davis', status: 'ACTIVE' },
    { name: 'Finance', description: 'Financial planning, accounting, and budget management', employeeCount: 28, head: 'Robert Wilson', status: 'ACTIVE' },
    { name: 'Sales', description: 'Business development, client relations, and revenue growth', employeeCount: 45, head: 'David Park', status: 'ACTIVE' },
    { name: 'Design', description: 'UI/UX design, product design, and creative services', employeeCount: 22, head: 'Lisa Anderson', status: 'ACTIVE' },
  ];
}
