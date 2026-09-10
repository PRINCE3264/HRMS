import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class AdminTrainingComponent {
  programs = [
    {
      title: 'Angular Advanced Workshop', description: 'Advanced Angular patterns, RxJS, and performance optimization techniques.',
      instructor: 'Michael Chen', duration: '4 weeks', enrolled: 18, capacity: 25,
      status: 'ACTIVE', color: 'linear-gradient(135deg, #6366f1, #818cf8)', icon: 'fas fa-code',
      tags: ['Angular', 'Frontend', 'TypeScript']
    },
    {
      title: 'Leadership Development', description: 'Building effective leadership skills for mid-level managers and team leads.',
      instructor: 'Sarah Johnson', duration: '6 weeks', enrolled: 12, capacity: 15,
      status: 'ACTIVE', color: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', icon: 'fas fa-users-cog',
      tags: ['Leadership', 'Management', 'Soft Skills']
    },
    {
      title: 'AWS Cloud Certification', description: 'Preparing for AWS Solutions Architect certification exam.',
      instructor: 'External Trainer', duration: '8 weeks', enrolled: 10, capacity: 20,
      status: 'ACTIVE', color: 'linear-gradient(135deg, #f59e0b, #fbbf24)', icon: 'fas fa-cloud',
      tags: ['AWS', 'Cloud', 'Certification']
    },
    {
      title: 'Cybersecurity Awareness', description: 'Essential cybersecurity practices and threat awareness for all employees.',
      instructor: 'IT Security Team', duration: '2 weeks', enrolled: 45, capacity: 50,
      status: 'ACTIVE', color: 'linear-gradient(135deg, #ef4444, #f87171)', icon: 'fas fa-shield-alt',
      tags: ['Security', 'Awareness', 'Compliance']
    },
    {
      title: 'Data Analytics with Python', description: 'Introduction to data analysis, pandas, and visualization with matplotlib.',
      instructor: 'Robert Wilson', duration: '5 weeks', enrolled: 15, capacity: 20,
      status: 'UPCOMING', color: 'linear-gradient(135deg, #06b6d4, #22d3ee)', icon: 'fas fa-chart-line',
      tags: ['Python', 'Data', 'Analytics']
    },
    {
      title: 'Design Thinking Workshop', description: 'User-centered design methodology for product and engineering teams.',
      instructor: 'Lisa Anderson', duration: '3 weeks', enrolled: 20, capacity: 20,
      status: 'COMPLETED', color: 'linear-gradient(135deg, #10b981, #34d399)', icon: 'fas fa-lightbulb',
      tags: ['Design', 'UX', 'Workshop']
    },
  ];
}
