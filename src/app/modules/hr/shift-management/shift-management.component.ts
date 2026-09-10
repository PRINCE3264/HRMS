import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-shift',
  templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.scss']
})
export class HrShiftComponent {
  shiftTypes = [
    { name: 'Morning Shift', time: '06:00 AM - 02:00 PM', duration: '8 hours', assignedCount: 85, color: '#f59e0b',
      days: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}] },
    { name: 'Afternoon Shift', time: '02:00 PM - 10:00 PM', duration: '8 hours', assignedCount: 62, color: '#6366f1',
      days: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}] },
    { name: 'Night Shift', time: '10:00 PM - 06:00 AM', duration: '8 hours', assignedCount: 30, color: '#ef4444',
      days: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:true},{label:'S',active:true}] },
  ];
  assignments = [
    { name: 'John Smith', department: 'Engineering', shift: 'Morning', shiftColor: '#f59e0b', time: '06:00 - 14:00', effectiveFrom: 'Jan 01, 2024', color: '#6366f1', schedule: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}] },
    { name: 'Emily Davis', department: 'Marketing', shift: 'Afternoon', shiftColor: '#6366f1', time: '14:00 - 22:00', effectiveFrom: 'Jan 01, 2024', color: '#10b981', schedule: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}] },
    { name: 'James Brown', department: 'Engineering', shift: 'Night', shiftColor: '#ef4444', time: '22:00 - 06:00', effectiveFrom: 'Jan 15, 2024', color: '#06b6d4', schedule: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:true},{label:'S',active:false}] },
    { name: 'Michael Chen', department: 'Operations', shift: 'Morning', shiftColor: '#f59e0b', time: '06:00 - 14:00', effectiveFrom: 'Jan 01, 2024', color: '#ec4899', schedule: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}] },
    { name: 'Lisa Anderson', department: 'Design', shift: 'Afternoon', shiftColor: '#6366f1', time: '14:00 - 22:00', effectiveFrom: 'Feb 01, 2024', color: '#ef4444', schedule: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}] },
  ];
}
