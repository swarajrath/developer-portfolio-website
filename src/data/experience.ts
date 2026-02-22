import { Experience, Achievement } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'SAP',
    duration: 'Jan 2023 - Present',
    location: 'Garching, Germany',
    highlights: [
      'Developed and maintained enterprise cloud applications serving 10,000+ users across global markets',
      'Architected microservices infrastructure that improved system performance by 40%',
      'Led technical design discussions and code reviews for critical business applications'
    ],
    tags: ['SAP BTP', 'Java', 'React', 'Microservices']
  },
  {
    role: 'Associate Software Developer',
    company: 'SAP',
    duration: 'May 2021 - Dec 2022',
    location: 'Garching, Germany',
    highlights: [
      'Built RESTful APIs and UI components for core SAP business applications',
      'Implemented automated testing pipelines, reducing bug rates by 30%',
      'Collaborated with cross-functional teams across multiple time zones'
    ],
    tags: ['SAPUI5', 'Node.js', 'HANA', 'Fiori']
  },
  {
    role: 'Master\'s Thesis',
    company: 'SRH Heidelberg',
    duration: 'Mar 2020 - Jun 2020',
    location: 'Heidelberg, Germany',
    highlights: [
      'Research on scalable distributed systems architecture patterns',
      'Published findings in international computer science journal',
      'Developed proof-of-concept implementation using modern cloud technologies'
    ],
    tags: ['Research', 'Cloud Architecture', 'Distributed Systems']
  }
];

export const achievements: Achievement[] = [
  { title: 'SAP Drive Tranformation Award', year: '2025' },
  { title: 'Service Realiability Champion', year: '2024' },
  { title: 'SAP Certified Development Professional', year: '2022' }
];
