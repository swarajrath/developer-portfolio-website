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
      title: 'Leveraging Voice Assistive Technology to Enhance Health Monitoring of Older Adults',
      description: 'Designed and evaluated a context-aware mobile health application, CORE-Energy, that integrates voice user interface (VUI) assistive technology to support independent health monitoring for older adults. Conducted user-centered research to identify usability barriers in traditional mHealth systems for aging users, developed a prototype that tracks vital health metrics (e.g., blood pressure, glucose, body temperature, fitness), and performed usability testing to assess effectiveness and user satisfaction.',
      technologies: ['React Native', 'VUI / Voice Assistive Integration', 'Firebase', 'User-Centered Design', 'Usability Testing'],
      link: 'https://web.archive.org/web/20221024015351id_/http://www.iadisportal.org/components/com_booklibrary/ebooks/202105L013.pdf'
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
