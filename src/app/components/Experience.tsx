import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'SAP',
      duration: 'Jan 2022 - Present',
      location: 'Walldorf, Germany',
      highlights: [
        'Developed and maintained enterprise cloud applications serving 10,000+ users across global markets',
        'Architected microservices infrastructure that improved system performance by 40%',
        'Led technical design discussions and code reviews for critical business applications',
      ],
      tags: ['SAP BTP', 'Java', 'React', 'Microservices'],
    },
    {
      role: 'Junior Software Developer',
      company: 'SAP',
      duration: 'Jul 2020 - Dec 2021',
      location: 'Walldorf, Germany',
      highlights: [
        'Built RESTful APIs and UI components for core SAP business applications',
        'Implemented automated testing pipelines, reducing bug rates by 30%',
        'Collaborated with cross-functional teams across multiple time zones',
      ],
      tags: ['SAPUI5', 'Node.js', 'HANA', 'Fiori'],
    },
    {
      role: 'Master\'s Thesis',
      company: 'SRH Heidelberg',
      duration: 'Mar 2020 - Jun 2020',
      location: 'Heidelberg, Germany',
      highlights: [
        'Research on scalable distributed systems architecture patterns',
        'Published findings in international computer science journal',
        'Developed proof-of-concept implementation using modern cloud technologies',
      ],
      tags: ['Research', 'Cloud Architecture', 'Distributed Systems'],
    },
  ];

  const achievements = [
    { title: 'SAP Innovation Award', year: '2024' },
    { title: 'AWS Certified Solutions Architect', year: '2023' },
    { title: 'SAP Certified Development Professional', year: '2022' },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-blue-50/20">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-foreground mb-2">Experience</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-foreground">{exp.role}</h3>
                      <p className="text-muted-foreground mt-1">{exp.company} · {exp.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.duration}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl text-foreground mb-6">Certifications & Awards</h3>
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-4"></div>
                        <span className="text-foreground">{achievement.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}