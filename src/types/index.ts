export type UserType = 'student' | 'company' | 'admin';

export type JobStatus = 'open' | 'closed' | 'filled';
export type ApplicationStatus = 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'accepted';
export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
export type InterviewType = 'technical' | 'hr' | 'managerial' | 'final';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Profile {
  id: string;
  user_type: UserType;
  full_name: string;
  email: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  profile_id: string;
  phone: string;
  branch: string;
  year: string;
  gpa: number;
  skills: string[];
  resume_url?: string;
  status: string;
  created_at: string;
}

export interface Company {
  id: string;
  profile_id: string;
  company_name: string;
  industry: string;
  website?: string;
  phone: string;
  location: string;
  description: string;
  hr_contact: string;
  hr_email: string;
  logo_url?: string;
  status: string;
  created_at: string;
}

export interface Job {
  id: string;
  company_id: string;
  position: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  description: string;
  requirements: string;
  deadline: string;
  status: JobStatus;
  created_at: string;
  updated_at: string;
  company?: Company;
}

export interface Application {
  id: string;
  job_id: string;
  student_id: string;
  status: ApplicationStatus;
  cover_letter?: string;
  applied_at: string;
  updated_at: string;
  job?: Job;
  student?: Student;
}

export interface Interview {
  id: string;
  application_id: string;
  company_id: string;
  student_id: string;
  scheduled_date: string;
  scheduled_time: string;
  duration: number;
  type: InterviewType;
  location: string;
  interviewer: string;
  status: InterviewStatus;
  notes?: string;
  created_at: string;
  company?: Company;
  student?: Student;
  application?: Application;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  created_at: string;
}

export interface SavedJob {
  id: string;
  student_id: string;
  job_id: string;
  saved_at: string;
}
