export interface Training {
  id: string;
  title: string;
  description: string;
  trainer: string;
  department: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  maxParticipants: number;
  enrolledCount: number;
  status: string;
  type: string;
}

export interface Onboarding {
  id: string;
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate?: string;
  mentorId?: string;
  mentorName?: string;
  status: string;
  checklist: OnboardingTask[];
  progress: number;
}

export interface OnboardingTask {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  completedAt?: string;
  assignedTo?: string;
}
