import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService, ToastService, ExcelExportService } from '../../../core/services';

export interface ShiftModel {
  id?: string;
  name: string;
  code: string;
  startTime: string;
  endTime: string;
  breakDurationMinutes?: number;
  lateGracePeriodMinutes?: number;
  workingDays?: string[];
  assignedEmployees?: number;
  status: 'ACTIVE' | 'INACTIVE';
  color?: string;
  themeClass?: string;
  icon?: string;
  description?: string;
}

@Component({
  selector: 'app-hr-shift',
  templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.scss']
})
export class HrShiftComponent implements OnInit {
  shiftTypes: ShiftModel[] = [];
  shiftAssignments: any[] = [];
  searchTerm = '';
  selectedDepartment = '';
  selectedShift = '';

  // Assign Modal state
  showAssignModal = false;
  daysList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  assignForm = {
    employeeId: 'EMP-24-0001',
    shiftName: 'General Shift (09:00 AM - 06:00 PM)',
    effectiveFrom: new Date().toISOString().slice(0, 10)
  };

  departmentsList = ['Engineering', 'Marketing', 'Human Resources', 'Sales', 'Finance', 'Design'];

  sampleAssignments = [
    { id: '1', employeeId: 'EMP-24-0001', name: 'Rahul Sharma', department: 'Engineering', shiftName: 'General Shift (09:00 AM - 06:00 PM)', shiftCode: 'SH-02', effectiveFrom: '2024-01-15', workHours: '9 hrs', status: 'ACTIVE', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120' },
    { id: '2', employeeId: 'EMP-24-0002', name: 'Priya Verma', department: 'Marketing', shiftName: 'General Shift (09:00 AM - 06:00 PM)', shiftCode: 'SH-02', effectiveFrom: '2024-02-01', workHours: '9 hrs', status: 'ACTIVE', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120' },
    { id: '3', employeeId: 'EMP-24-0003', name: 'Amit Kumar', department: 'Human Resources', shiftName: 'Morning Shift (07:00 AM - 04:00 PM)', shiftCode: 'SH-01', effectiveFrom: '2024-01-20', workHours: '9 hrs', status: 'ACTIVE', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120' },
    { id: '4', employeeId: 'EMP-24-0004', name: 'Sneha Patel', department: 'Sales', shiftName: 'General Shift (09:00 AM - 06:00 PM)', shiftCode: 'SH-02', effectiveFrom: '2024-03-10', workHours: '9 hrs', status: 'ACTIVE', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120' },
    { id: '5', employeeId: 'EMP-24-0005', name: 'Vikram Singh', department: 'Finance', shiftName: 'Morning Shift (07:00 AM - 04:00 PM)', shiftCode: 'SH-01', effectiveFrom: '2024-04-05', workHours: '9 hrs', status: 'ACTIVE', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120' },
    { id: '6', employeeId: 'EMP-24-0006', name: 'Ananya Roy', department: 'Design', shiftName: 'General Shift (09:00 AM - 06:00 PM)', shiftCode: 'SH-02', effectiveFrom: '2024-05-12', workHours: '9 hrs', status: 'ACTIVE', avatar: '' }
  ];

  constructor(
    private router: Router,
    private attendanceService: AttendanceService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadShifts();
    this.loadAssignments();
  }

  loadShifts(): void {
    const local = this.attendanceService.getLocalShifts();
    this.shiftTypes = [...local];
    this.attendanceService.getShifts().subscribe({
      next: (data: any[]) => {
        if (data && data.length > 0) {
          const remoteShifts = data.map((s: any, i: number) => ({
            id: s.id,
            name: s.name || 'Shift',
            code: s.code || `SH-${(i + 1).toString().padStart(2, '0')}`,
            startTime: this.formatTime(s.startTime),
            endTime: this.formatTime(s.endTime),
            breakDurationMinutes: s.breakDurationMinutes || 60,
            lateGracePeriodMinutes: s.lateGracePeriodMinutes || 15,
            workingDays: s.workingDays || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            assignedEmployees: s.assignedEmployees || 0,
            status: s.status || 'ACTIVE',
            themeClass: s.themeClass || (s.name?.toLowerCase().includes('morning') ? 'theme-morning' : 'theme-general'),
            icon: s.icon || (s.name?.toLowerCase().includes('morning') ? 'fas fa-sun' : 'fas fa-building'),
            description: s.description || ''
          }));
          this.shiftTypes = remoteShifts;
          this.attendanceService.saveLocalShifts(remoteShifts);
        }
      }
    });
  }

  loadAssignments(): void {
    this.attendanceService.getAssignments().subscribe({
      next: (data: any[]) => {
        if (data && data.length > 0) {
          this.shiftAssignments = data.map((a: any) => ({
            id: a.id,
            employeeId: a.employeeId,
            name: a.employeeName || 'Employee',
            department: a.department || 'Engineering',
            shiftName: a.shiftName || 'General Shift',
            shiftCode: a.shiftCode || 'SH-02',
            effectiveFrom: a.startDate ? String(a.startDate).slice(0, 10) : '2024-01-01',
            workHours: '9 hrs',
            status: 'ACTIVE',
            avatar: a.avatar || ''
          }));
        } else {
          this.shiftAssignments = [...this.sampleAssignments];
        }
      },
      error: () => {
        this.shiftAssignments = [...this.sampleAssignments];
      }
    });
  }

  get filteredAssignments(): any[] {
    return this.shiftAssignments.filter(a => {
      const matchesSearch = !this.searchTerm.trim() ||
        a.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        a.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesDept = !this.selectedDepartment || a.department === this.selectedDepartment;
      const matchesShift = !this.selectedShift || a.shiftName.includes(this.selectedShift);

      return matchesSearch && matchesDept && matchesShift;
    });
  }

  get activeShiftsCount(): number {
    return this.shiftTypes.filter(s => s.status === 'ACTIVE').length;
  }

  get totalAssignedEmployees(): number {
    return this.shiftTypes.reduce((sum, s) => sum + (s.assignedEmployees || 0), 0) || 253;
  }

  openAddShift(): void {
    this.router.navigate(['/hr/shifts/add']);
  }

  openEditShift(shift: ShiftModel): void {
    this.router.navigate(['/hr/shifts', shift.id || '1', 'edit']);
  }

  deleteShift(shift: ShiftModel): void {
    if (confirm(`Are you sure you want to delete ${shift.name}?`)) {
      const local = this.attendanceService.getLocalShifts();
      const updated = local.filter(s => s.id !== shift.id && s.code !== shift.code);
      this.attendanceService.saveLocalShifts(updated);
      this.shiftTypes = [...updated];
      this.toast.success('Shift deleted successfully');

      if (shift.id) {
        this.attendanceService.deleteShift(shift.id).subscribe();
      }
    }
  }

  isDaySelected(shift: ShiftModel, day: string): boolean {
    return shift.workingDays ? shift.workingDays.includes(day) : false;
  }

  openAssignModal(row?: any): void {
    if (row) {
      this.assignForm.employeeId = row.employeeId;
      this.assignForm.shiftName = row.shiftName || 'General Shift (09:00 AM - 06:00 PM)';
    }
    this.showAssignModal = true;
  }

  submitAssignShift(): void {
    this.toast.success('Shift assigned successfully');
    this.showAssignModal = false;
  }

  exportExcel(): void {
    const dataToExport = this.shiftTypes.map(s => ({
      ShiftName: s.name,
      ShiftCode: s.code,
      StartTime: s.startTime,
      EndTime: s.endTime,
      BreakDuration: `${s.breakDurationMinutes || 60} mins`,
      GracePeriod: `${s.lateGracePeriodMinutes || 15} mins`,
      AssignedEmployees: s.assignedEmployees || 0,
      Status: s.status
    }));
    this.excelExport.exportToExcel(dataToExport, 'Shift_Management_Report');
  }

  formatTime(value?: any): string {
    if (!value) return '09:00 AM';
    const str = String(value).trim();
    if (str.includes('AM') || str.includes('PM')) return str;
    if (str.includes(':')) {
      const parts = str.split(':');
      let hours = parseInt(parts[0], 10);
      const minutes = parts[1] ? parts[1].slice(0, 2) : '00';
      if (!isNaN(hours)) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const hStr = String(hours).padStart(2, '0');
        return `${hStr}:${minutes} ${ampm}`;
      }
    }
    return str;
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedDepartment = '';
    this.selectedShift = '';
  }
}
