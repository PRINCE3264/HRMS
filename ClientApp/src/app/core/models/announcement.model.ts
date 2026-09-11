export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  authorRole: string;
  priority: string;
  targetAudience: string[];
  publishedDate: string;
  expiryDate?: string;
  isPinned: boolean;
  attachments?: string[];
}

export interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  employeeId?: string;
  employeeName?: string;
  uploadedBy: string;
  uploadedAt: string;
  fileSize: number;
  fileUrl: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  isRead: boolean;
  createdAt: string;
  link?: string;
}
