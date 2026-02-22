import { Experience, Achievement } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'SAP',
    duration: 'Jan 2023 - Present',
    location: 'Garching, Germany',
    highlights: [
      'Implement advanced business logic using ABAP RESTful Application Programming Model (RAP) with clean-core principles.',
      'Own end-to-end application lifecycle including architecture, development, performance optimization, and cloud infrastructure stability.',
      'Participate in design reviews and architecture boards to ensure long-term maintainability and scalability.'
    ],
    tags: ['SAP Fiori', 'RAP', 'CAP', 'ABAP']
  },
  {
    role: 'Associate Software Developer',
    company: 'SAP',
    duration: 'May 2021 - Dec 2022',
    location: 'Garching, Germany',
    highlights: [
      'Design and develop cloud-native SAP Fiori applications in SAP S/4HANA Public Cloud (PP/MRP) using ABAP RAP and Fiori Elements V4',
      'Improve application performance through optimized data access patterns, efficient CDS modeling, and backend processing enhancements.',
      'Develop and enhance CDS views with optimized associations, annotations, and performance tuning for large transactional datasets.'
    ],
    tags: ['SAPUI5', 'Node.js', 'HANA', 'Fiori']
  },
  {
    role: 'Working Student',
    company: 'SAP',
    duration: 'January 2020 - April 2021',
    location: 'Walldorf, Germany',
    highlights: [
      'Assisted in data modeling and analytic pipeline development for CEI analytics components to support KPI tracking and internal insights.',
      'Developed and maintained SAP Cloud Foundry-based applications/services leveraging modern cloud technologies and agile delivery practices.',
      'Collaborated closely with cross-functional teams to gather requirements, define technical specifications, and deliver high-quality solutions.'
    ],
    tags: ['Research', 'Cloud Architecture', 'Distributed Systems']
  }
];

export const achievements: Achievement[] = [
  { title: 'SAP Drive Tranformation Award', year: '2025' },
  { title: 'Service Realiability Champion', year: '2024' },
  { title: 'SAP Certified Development Professional', year: '2022' }
];
