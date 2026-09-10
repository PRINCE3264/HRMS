import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class HrTrainingComponent {
  courses = [
    { title: 'Angular Advanced Patterns', description: 'Deep dive into Angular architecture, RxJS, and performance optimization.', instructor: 'Alex Thompson', duration: '8 hours', enrolled: 32, capacity: 40, rating: 4, status: 'Active', icon: 'fas fa-laptop-code', bgColor: 'linear-gradient(135deg,#6366f1,#818cf8)', type: 'Technical' },
    { title: 'Leadership Essentials', description: 'Build core leadership skills including communication and team management.', instructor: 'Sarah Johnson', duration: '12 hours', enrolled: 18, capacity: 25, rating: 5, status: 'Active', icon: 'fas fa-crown', bgColor: 'linear-gradient(135deg,#f59e0b,#fbbf24)', type: 'Soft Skills' },
    { title: 'Cybersecurity Awareness', description: 'Essential cybersecurity practices for all employees in the modern workplace.', instructor: 'James Brown', duration: '4 hours', enrolled: 150, capacity: 200, rating: 4, status: 'Active', icon: 'fas fa-shield-alt', bgColor: 'linear-gradient(135deg,#ef4444,#f87171)', type: 'Compliance' },
    { title: 'Data Analytics with Python', description: 'Learn data analysis, visualization, and basic ML using Python and Pandas.', instructor: 'David Kim', duration: '16 hours', enrolled: 24, capacity: 30, rating: 4, status: 'Active', icon: 'fas fa-chart-bar', bgColor: 'linear-gradient(135deg,#10b981,#34d399)', type: 'Technical' },
    { title: 'Project Management PMP', description: 'Prepare for PMP certification with Agile and Waterfall methodologies.', instructor: 'Rachel Green', duration: '20 hours', enrolled: 12, capacity: 20, rating: 5, status: 'Upcoming', icon: 'fas fa-tasks', bgColor: 'linear-gradient(135deg,#8b5cf6,#a78bfa)', type: 'Certification' },
    { title: 'UX Design Thinking', description: 'User-centered design process from research to prototyping and testing.', instructor: 'Sophia Lee', duration: '10 hours', enrolled: 28, capacity: 30, rating: 4, status: 'Active', icon: 'fas fa-paint-brush', bgColor: 'linear-gradient(135deg,#ec4899,#f472b6)', type: 'Design' },
  ];
  getEnrollmentPct(course: any): number {
    return Math.round(course.enrolled / course.capacity * 100);
  }
}
