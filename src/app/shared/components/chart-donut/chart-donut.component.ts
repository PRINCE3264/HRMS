import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.scss']
})
export class ChartDonutComponent {
  @Input() title = '';
  @Input() data: { label: string; value: number; color: string }[] = [];

  get total(): number { return this.data.reduce((s, d) => s + d.value, 0); }
  get segments() {
    return this.data.map(d => ({
      ...d,
      percent: this.total > 0 ? (d.value / this.total) * 100 : 0
    }));
  }

  getOffset(index: number): string {
    let offset = 25;
    for (let i = 0; i < index; i++) {
      offset -= (this.segments[i].percent / 100) * 100 * 0.25;
    }
    return String(offset);
  }
}
