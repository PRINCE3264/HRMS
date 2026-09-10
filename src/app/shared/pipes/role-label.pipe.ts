import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roleLabel' })
export class RoleLabelPipe implements PipeTransform {
  private labels: Record<string, string> = {
    ADMIN: 'Administrator',
    HR: 'Human Resources',
    TL: 'Team Lead',
    EMPLOYEE: 'Employee'
  };

  transform(value: string): string {
    return this.labels[value] || value || 'Unknown';
  }
}
