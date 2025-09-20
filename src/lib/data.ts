export type GanttTask = {
  id: string;
  process: string;
  startDate: string;
  endDate: string;
  duration: number; // in days
  status: 'Completed' | 'In Progress' | 'Not Started';
};

export const ganttData: GanttTask[] = [
  { id: '1', process: 'Penentuan Topik', startDate: '2025-09-08', endDate: '2025-09-12', duration: 5, status: 'Completed' },
  { id: '2', process: 'Literature Review', startDate: '2025-09-16', endDate: '2025-09-20', duration: 5, status: 'Completed' },
  { id: '3', process: 'Pendahuluan', startDate: '2025-09-22', endDate: '2025-09-27', duration: 6, status: 'Not Started' },
  { id: '4', process: 'Revisi Pendahuluan', startDate: '2025-09-29', endDate: '2025-09-30', duration: 2, status: 'Not Started' },
  { id: '5', process: 'Tinjauan Pustaka', startDate: '2025-10-01', endDate: '2025-10-09', duration: 9, status: 'Not Started' },
  { id: '6', process: 'Revisi Tinjauan Pustaka', startDate: '2025-10-10', endDate: '2025-10-12', duration: 3, status: 'Not Started' },
  { id: '7', process: 'Metodologi', startDate: '2025-10-13', endDate: '2025-10-23', duration: 11, status: 'Not Started' },
  { id: '8', process: 'Revisi Metodologi', startDate: '2025-10-24', endDate: '2025-10-26', duration: 3, status: 'Not Started' },
  { id: '9', process: 'Pengumpulan Data', startDate: '2025-10-27', endDate: '2025-11-15', duration: 20, status: 'Not Started' },
  { id: '10', process: 'Pengolahan Data & Analisis Data', startDate: '2025-11-16', endDate: '2025-11-20', duration: 5, status: 'Not Started' },
  { id: '11', process: 'Analisis & Pembahasan', startDate: '2025-11-21', endDate: '2025-11-27', duration: 7, status: 'Not Started' },
  { id: '12', process: 'Revisi Analisis & Pembahasan', startDate: '2025-11-28', endDate: '2025-12-06', duration: 9, status: 'Not Started' },
  { id: '13', process: 'Kesimpulan & Saran', startDate: '2025-12-07', endDate: '2025-12-13', duration: 7, status: 'Not Started' },
  { id: '14', process: 'Revisi Kesimpulan & Saran', startDate: '2025-12-14', endDate: '2025-12-20', duration: 7, status: 'Not Started' },
  { id: '15', process: 'Finalisasi', startDate: '2025-12-21', endDate: '2025-12-23', duration: 3, status: 'Not Started' },
];

export type LinkItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: 'FileText' | 'Book' | 'Link' | 'Library';
};

export const links: LinkItem[] = [
  { id: '1', title: 'Draft TA', description: 'Link Draft TA', url: 'https://docs.google.com/document/d/1AC-DK4RQ3l0RucI08jYj3mc3RR24oeVTE-ODB_6b3f4/edit?tab=t.uqgn1fgxdsd5#heading=h.xahfglsliasq', icon: 'FileText' },
  { id: '2', title: 'Revisi DPTA 1', description: 'Feedback from DPTA 1', url: 'https://docs.google.com/document/d/14zNGvO1PYbCpa81lJ1-zS6PgaAKoNOhoRkSZLhKMJbc/edit?usp=sharing', icon: 'Link' },
  { id: '3', title: 'Research Journal', description: 'Key articles and papers.', url: 'https://drive.google.com/drive/folders/19wFtHRPi13T7AX6x0MBOpg_mN6YiESZO?usp=sharing', icon: 'Library' },
  { id: '4', title: 'Revisi DPTA 2', description: 'not available yet', url: '#', icon: 'Link' },
  { id: '5', title: 'Reviewed Journals', description: 'Journals that have been reviewed.', url: 'https://drive.google.com/drive/folders/12eDSICd0Aa-8SDLMS5HE4665PmkRWy5g?usp=sharing', icon: 'Book' },
];
