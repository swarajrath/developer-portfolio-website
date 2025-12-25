import { Card, CardContent } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SAPUI5', 'Vue.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Java', 'Python', 'Spring Boot', 'Express.js', 'REST APIs'],
    },
    {
      title: 'SAP / Enterprise',
      skills: ['SAP BTP', 'SAP HANA', 'CAP', 'Fiori', 'OData', 'ABAP'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'SAP HANA', 'Redis', 'MySQL'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Jira', 'Confluence', 'VS Code', 'IntelliJ', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-foreground mb-2">Skills & Technologies</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <Card 
                key={category.title} 
                className="border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <h3 className="text-foreground mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}