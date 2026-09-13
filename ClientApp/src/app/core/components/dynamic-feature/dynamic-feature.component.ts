import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-feature',
  template: `
    <div class="dynamic-feature">
      <div class="icon-circle">
        <i class="fas {{ icon || 'fa-link' }}"></i>
      </div>
      <h2>{{ name }}</h2>
      <p class="route">/{{ path }}</p>
      <p class="hint">
        Ye page DB me registered hai lekin abhi tak iska component nahi bana hai.
        <code>DynamicRouteService</code> me component register karne par yahan page render hoga.
      </p>
    </div>
  `,
  styles: [`
    .dynamic-feature {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      text-align: center;
      padding: 2rem;
    }
    .icon-circle {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      background: #eef2ff;
      color: #4f46e5;
      font-size: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }
    h2 { margin: 0 0 .35rem; }
    .route { color: #64748b; margin: 0 0 1rem; }
    .hint { color: #94a3b8; max-width: 520px; }
  `]
})
export class DynamicFeatureComponent implements OnInit {
  name = 'Module';
  path = '';
  icon = 'fa-link';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.name = data['featureName'] || 'Module';
      this.path = data['featurePath'] || '';
      this.icon = data['featureIcon'] || 'fa-link';
    });
  }
}