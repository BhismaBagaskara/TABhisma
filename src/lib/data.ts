export type GanttTask = {
  id: string;
  process: string;
  startDate: string;
  endDate: string;
  duration: number; // in days
  status: 'Completed' | 'In Progress' | 'Not Started';
};

export const ganttData: GanttTask[] = [
  { id: '1', process: 'Chapter 1: Introduction', startDate: '2024-08-01', endDate: '2024-08-15', duration: 15, status: 'Completed' },
  { id: '2', process: 'Chapter 2: Literature Review', startDate: '2024-08-16', endDate: '2024-09-15', duration: 31, status: 'In Progress' },
  { id: '3', process: 'Chapter 3: Methodology', startDate: '2024-09-16', endDate: '2024-10-15', duration: 30, status: 'Not Started' },
  { id: '4', process: 'Chapter 4: Results', startDate: '2024-10-16', endDate: '2024-11-15', duration: 31, status: 'Not Started' },
  { id: '5', process: 'Chapter 5: Discussion', startDate: '2024-11-16', endDate: '2024-12-15', duration: 30, status: 'Not Started' },
  { id: '6', process: 'Final Review & Submission', startDate: '2024-12-16', endDate: '2024-12-31', duration: 16, status: 'Not Started' },
];

export type LinkItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: 'FileText' | 'Book' | 'Link' | 'Library';
};

export const links: LinkItem[] = [
  { id: '1', title: 'Thesis Draft', description: 'Main document for the thesis.', url: '#', icon: 'FileText' },
  { id: '2', title: 'Bibliography', description: 'Zotero library and references.', url: '#', icon: 'Book' },
  { id: '3', title: 'Research Journal', description: 'Key articles and papers.', url: '#', icon: 'Library' },
  { id: '4', title: 'Revision Notes', description: 'Feedback from supervisors.', url: '#', icon: 'Link' },
];
