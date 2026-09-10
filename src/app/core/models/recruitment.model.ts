export interface JobOpening {
  id: string;
  title: string;
  departmentId: string;
  departmentName: string;
  designationId: string;
  designationName: string;
  branchId: string;
  branchName: string;
  employmentType: string;
  experience: string;
  salaryRange?: string;
  description: string;
  requirements: string;
  vacancies: number;
  status: string;
  postedDate: string;
  closingDate?: string;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobId: string;
  jobTitle: string;
  resumeUrl?: string;
  coverLetter?: string;
  source: string;
  status: CandidateStatus;
  rating?: number;
  notes?: string;
  createdAt: string;
}

export enum CandidateStatus {
  NEW = 'NEW',
  SCREENING = 'SCREENING',
  INTERVIEW_SCHEDULED = 'INTERVIEW_SCHEDULED',
  INTERVIEWED = 'INTERVIEWED',
  OFFERED = 'OFFERED',
  HIRED = 'HIRED',
  REJECTED = 'REJECTED'
}
