import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationEntry {
  id: string;
  degree: string;
  degreeType: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  focusAreas: string[];
  thesis?: {
    title: string;
    description: string;
    technologies?: string[];
  };
  keyLearnings: string[];
  grade?: string;
}

const educationData: EducationEntry[] = [
  {
    id: 'msc',
    degree: 'M.Sc. Applied Computer Science',
    degreeType: 'Master of Science',
    field: 'Applied Computer Science',
    institution: 'SRH Heidelberg',
    location: 'Heidelberg, Germany',
    duration: '2021 – 2023',
    focusAreas: [
      'Software Engineering',
      'Distributed Systems',
      'Enterprise Applications',
      'Databases & Architecture'
    ],
    thesis: {
      title: 'Scalable Architecture Patterns for Distributed Enterprise Systems',
      description: 'Research and implementation of microservices patterns for large-scale enterprise applications using cloud-native technologies.',
      technologies: ['Kubernetes', 'Spring Boot', 'Apache Kafka', 'PostgreSQL']
    },
    keyLearnings: [
      'Practical, industry-oriented curriculum',
      'Strong emphasis on applied problem-solving',
      'Collaboration and project-based learning',
      'Real-world enterprise software development practices'
    ],
    grade: '1.3 (German grading scale)'
  },
  {
    id: 'bsc',
    degree: 'B.Sc. Computer Science',
    degreeType: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'University Name',
    location: 'City, Germany',
    duration: '2018 – 2021',
    focusAreas: [
      'Software Engineering',
      'Database Systems',
      'Web Technologies',
      'Algorithms & Data Structures'
    ],
    keyLearnings: [
      'Strong foundation in computer science fundamentals',
      'Hands-on experience with modern development tools',
      'Team collaboration and agile methodologies'
    ],
    grade: '1.8 (German grading scale)'
  }
];

export function Education() {
  const [selectedId, setSelectedId] = useState<string>(educationData[0].id);
  const selectedEducation = educationData.find(e => e.id === selectedId) || educationData[0];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-foreground mb-2">Education</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-[320px_1fr] gap-6">
            {/* Master List (Left Panel) */}
            <Card className="border-border shadow-sm bg-card h-fit">
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {educationData.map((edu) => (
                    <button
                      key={edu.id}
                      onClick={() => setSelectedId(edu.id)}
                      className={`w-full text-left p-4 transition-colors ${
                        selectedId === edu.id
                          ? 'bg-primary/5 border-l-4 border-primary'
                          : 'hover:bg-muted/50 border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground mb-1">
                            {edu.degree}
                          </div>
                          <div className="text-sm text-muted-foreground mb-0.5">
                            {edu.institution}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {edu.duration}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detail Page (Right Panel) */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-8 border-b border-border bg-muted/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-foreground mb-1">
                        {selectedEducation.degree}
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedEducation.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* General Information */}
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                      General Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground mb-1">Degree</span>
                        <span className="text-foreground">{selectedEducation.degreeType}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground mb-1">Field</span>
                        <span className="text-foreground">{selectedEducation.field}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground mb-1">University</span>
                        <span className="text-foreground">{selectedEducation.institution}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground mb-1">Location</span>
                        <span className="text-foreground">{selectedEducation.location}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground mb-1">Duration</span>
                        <span className="text-foreground">{selectedEducation.duration}</span>
                      </div>
                      {selectedEducation.grade && (
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground mb-1">Grade</span>
                          <span className="text-foreground">{selectedEducation.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEducation.focusAreas.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thesis */}
                  {selectedEducation.thesis && (
                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                        Thesis
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-foreground mb-1">
                            {selectedEducation.thesis.title}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {selectedEducation.thesis.description}
                          </p>
                        </div>
                        {selectedEducation.thesis.technologies && (
                          <div>
                            <span className="text-xs text-muted-foreground">Technologies: </span>
                            <span className="text-sm text-foreground">
                              {selectedEducation.thesis.technologies.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Key Learnings */}
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                      Key Learnings
                    </h4>
                    <ul className="space-y-2">
                      {selectedEducation.keyLearnings.map((learning, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-foreground">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
