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

  maxValue = 0;
  yTicks: number[] = [];

  ngOnChanges(): void {
    this.maxValue = Math.max(...this.chartData.map(d => d.value), 1);
    const step = Math.ceil(this.maxValue / 4);
    this.yTicks = [step * 4, step * 3, step * 2, step, 0];
  }

  getBarHeight(value: number): number {
    return this.maxValue > 0 ? (value / this.maxValue) * 100 : 0;
  }
}
