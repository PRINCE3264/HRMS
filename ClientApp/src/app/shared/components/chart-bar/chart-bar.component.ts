import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnChanges {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() chartData: { label: string; value: number }[] = [];
  @Input() colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

  maxValue = 100;
  yTicks: number[] = [];

  ngOnChanges(): void {
    const rawMax = Math.max(...this.chartData.map(d => d.value), 10);
    this.maxValue = Math.ceil(rawMax / 50) * 50 || 200;
    const step = this.maxValue / 4;
    this.yTicks = [this.maxValue, Math.round(step * 3), Math.round(step * 2), Math.round(step), 0];
  }

  getBarHeight(value: number): number {
    return this.maxValue > 0 ? Math.min((value / this.maxValue) * 100, 100) : 0;
  }
}
