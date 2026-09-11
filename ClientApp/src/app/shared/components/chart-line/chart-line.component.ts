import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnChanges {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() chartData: { label: string; value: number }[] = [];
  @Input() lineColor = '#6366f1';
  @Input() fillColor = 'rgba(99, 102, 241, 0.1)';
  @Input() height = 200;

  points = '';
  maxValue = 0;
  pathD = '';

  ngOnChanges(): void {
    if (this.chartData.length < 2) return;
    this.maxValue = Math.max(...this.chartData.map(d => d.value), 1);
    const w = 800.0;
    const h = 200.0;
    const step = w / (this.chartData.length - 1);
    const pts = this.chartData.map((d, i) => {
      const x = i * step;
      const y = h - (d.value / this.maxValue) * (h - 20);
      return { x, y };
    });
    this.points = pts.map(p => `${p.x},${p.y}`).join(' ');
    this.pathD = pts.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : ` L${p.x},${p.y}`)).join('');
  }

  getPoints(): { x: number; y: number }[] {
    if (!this.chartData.length) return [];
    const w = 800.0;
    const h = 200.0;
    const step = w / (this.chartData.length - 1);
    return this.chartData.map((d, i) => {
      const x = i * step;
      const y = h - (d.value / this.maxValue) * (h - 20);
      return { x, y };
    });
  }
}
