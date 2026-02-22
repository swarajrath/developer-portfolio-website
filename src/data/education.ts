import { EducationEntry } from '@/types';

export const educationData: EducationEntry[] = [
  {
    id: 'msc',
    degree: 'Masters in Applied Computer Science',
    degreeType: 'Master of Science',
    field: 'Applied Computer Science',
    institution: 'SRH Heidelberg',
    location: 'Heidelberg, Germany',
    duration: '2019 – 2021 (120 ECTS, 4 semesters)',
    focusAreas: [
      'Advanced Software Engineering',
      'Distributed Systems & Cloud Computing',
      'Enterprise Application Architecture',
      'Database Systems & Data Management',
      'IT Security & Information Systems',
      'Agile Project Management'
    ],
    thesis: {
      title: 'Scalable Architecture Patterns for Distributed Enterprise Systems',
      description: 'Design and implementation of cloud-native microservices architectures for scalable enterprise applications, including evaluation of performance, resilience, and maintainability using modern DevOps practices.',
      technologies: ['Kubernetes', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Docker']
    },
    keyLearnings: [
      'Application of SRH CORE principle with intensive block-based, project-driven modules',
      'Design of scalable and maintainable distributed architectures',
      'Hands-on experience with enterprise-grade software systems',
      'Agile development methodologies and collaborative team projects',
      'Bridging academic research with industry-oriented implementation'
    ],
    grade: '1.6 (German grading scale)'
  },
  {
    id: 'bsc',
    degree: 'Bachelors in Computer Science & Engineering',
    degreeType: 'Bachelor of Science',
    field: 'Computer Science & Engineering',
    institution: 'Government College of Engineering, Kalahandi',
    location: 'Bhawanipatna, India',
    duration: '2014 – 2018 (4 years / 8 semesters, B.Tech)',
    focusAreas: [
      'Fundamentals of Computer Science & Programming',
      'Algorithms & Data Structures',
      'Database Systems & Management',
      'Operating Systems & Networks',
      'Software Engineering Principles',
      'Computer Architecture & Systems Design'
    ],
    keyLearnings: [
      'Strong foundation in computing fundamentals and engineering principles',
      'Extensive hands-on experience through lab work and project assignments',
      'Exposure to real-world problem solving and design of algorithms',
      'Team collaboration, communication skills, and professional development',
      'Understanding of system design, software lifecycle, and modern computing practices'
    ],
    grade: '1.8 (German grading scale)'
  }
];
