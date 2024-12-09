export type AssignmentType = 'PPT' | 'PDF' | 'Image' | 'Video' | 'YT';

export type FileType = 'pdf' | 'doc' | 'docx' | 'jpg' | 'png' | 'ppt' | 'pptx' | 'mp4';

export interface FileResource {
  id: string;
  fileName: string;
  fileType: FileType;
  fileSize: number;
  fileUrl: string;
  uploadDate: string;
  description?: string;
}

export interface Assignment {
  id: string;
  title: string;
  type: AssignmentType;
  driveLink: string;
  description: string;
  createdAt: string;
  resources: FileResource[];
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}

export interface TeamMember {
  id: string;
  name: string;
  rollNo: string;
  role: string;
  imageUrl?: string;
}