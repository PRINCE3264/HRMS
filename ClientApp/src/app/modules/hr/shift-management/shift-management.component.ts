import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../core/services';
import { Shift, ShiftAssignment } from '../../../core/models';

@Component({
  selector: 'app-hr-shift',
  templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.scss']
})
export class HrShiftComponent implements OnInit {
  shiftTypes: any[] = [];
  assignments: any[] = [];

  private shiftColors: Record<string, string> = {
    'Morning': '#f59e0b',
    'Afternoon': '#6366f1',
    'Night': '#ef4444',
  };

  private empColors = ['#6366f1', '#10b981', '#06b6d4', '#ec4899', '#ef4444', '#f59e0b'];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadShifts();
    this.loadAssignments();
  }

  loadShifts(): void {
    this.attendanceService.getShifts().subscribe({
      next: (data) => {
        this.shiftTypes = data.map(s => ({
          name: s.name,
          time: this.formatTimeRange(s.startTime, s.endTime),
          duration: this.calcDuration(s.startTime, s.endTime, s.breakMinutes),
          assignedCount: 0,
          color: this.getShiftColor(s.name),
          days: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}],
          id: s.id,
        }));
      }
    });
  }

  loadAssignments(): void {
    this.attendanceService.getAssignments().subscribe({
      next: (data) => {
        this.assignments = data.map((a, i) => ({
          name: a.employeeName,
          department: '',
          shift: a.shiftName,
          shiftColor: this.getShiftColor(a.shiftName),
          time: '',
          effectiveFrom: new Date(a.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          color: this.empColors[i % this.empColors.length],
          schedule: [{label:'M',active:true},{label:'T',active:true},{label:'W',active:true},{label:'T',active:true},{label:'F',active:true},{label:'S',active:false},{label:'S',active:false}],
          id: a.id,
        }));
      }
    });
  }

  private formatTimeRange(start: string, end: string): string {
    const format = (t: string) => {
      const [h, m] = t.split(':').map(Number);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
    };
    return `${format(start)} - ${format(end)}`;
  }

  private calcDuration(start: string, end: string, breakMin: number): string {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    let mins = (eh * 60 + em) - (sh * 60 + sm);
    if (mins < 0) mins += 24 * 60;
    mins -= breakMin || 0;
    const h = Math.floor(mins / 60);
    return `${h} hours`;
  }

  private getShiftColor(name: string): string {
    for (const [key, color] of Object.entries(this.shiftColors)) {
      if (name?.toLowerCase().includes(key.toLowerCase())) return color;
    }
    return '#6366f1';
  }
}
