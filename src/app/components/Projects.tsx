import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      name: 'SAP Cloud Integration Platform',
      problem: 'Multiple SAP systems needed seamless integration across 15 countries with real-time data synchronization.',
      solution: 'Architected cloud-based integration layer using SAP BTP and microservices',
      outcome: 'Reduced integration time by 60%, serving 10,000+ daily active users',
      tech: ['SAP BTP', 'Node.js', 'React', 'HANA'],
      tags: ['Enterprise', 'SAP'],
    },
    {
      name: 'Enterprise Analytics Dashboard',
      problem: 'Business leaders lacked real-time visibility into critical KPIs across departments.',
      solution: 'Built comprehensive Fiori-based dashboard with predictive analytics capabilities',
      outcome: 'Improved decision-making speed by 45%, adopted by 500+ users',
      tech: ['SAPUI5', 'Fiori', 'OData', 'HANA'],
      tags: ['SAP', 'UI5', 'Performance'],
    },
    {
      name: 'Automated Workflow Engine',
      problem: 'Manual approval processes caused bottlenecks and delayed business operations.',
      solution: 'Developed intelligent workflow automation with configurable business rules',
      outcome: 'Reduced processing time by 70%, handling 50,000+ transactions daily',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      tags: ['Backend', 'Enterprise'],
    },
    {
      name: 'Microservices Migration',
      problem: 'Monolithic architecture limited scalability and deployment flexibility.',
      solution: 'Led migration to containerized microservices with CI/CD pipelines',
      outcome: 'Achieved 99.9% uptime, reduced deployment time from hours to minutes',
      tech: ['Kubernetes', 'Docker', 'AWS', 'Jenkins'],
      tags: ['Performance', 'Enterprise'],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-blue-50/20 to-gray-50/50">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-foreground mb-2">Projects</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <Card 
                key={project.name} 
                className="border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg text-foreground">{project.name}</h3>
                    <ExternalLink size={18} className="text-muted-foreground flex-shrink-0 ml-2" />
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Problem: </span>
                      <span className="text-sm text-foreground">{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Solution: </span>
                      <span className="text-sm text-foreground">{project.solution}</span>
                    </div>
                    <div>
                      <span className="text-sm text-primary">Impact: </span>
                      <span className="text-sm text-foreground">{project.outcome}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="text-xs bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
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