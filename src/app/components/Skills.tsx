import { Card, CardContent } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['ABAP Objects (OO ABAP)', 'ABAP RESTful Application Programming Model (RAP)', 'CDS Views (Basic, Composite, Consumption)', 'Spring Boot', 'CDS Annotations', 'REST APIs', 'OData V2 / OData V4', 'Unit Testing (ABAP Unit)'],
    },
    {
      title: 'Core SAP & ERP',
      skills: ['SAP S/4HANA (Public & Private Cloud)', 'SAP Business Technology Platform (BTP)', 'Extensibility (In-App & Side-by-Side)'],
    },
    {
      title: 'Frontend',
      skills: ['SAP UI5', 'Fiori Elements (List Report, Object Page)', 'TypeScript', 'UX Guidelines (SAP Fiori Design)', 'i18n & Accessibility'],
    },
    {
      title: 'DevOps & Quality',
      skills: ['Azure', 'Git / GitHub / GitLab', 'Transport Management (gCTS)', 'Feature Toggles', 'Logging & Monitoring'],
    },
    {
      title: 'Business & Domain',
      skills: ['Production Planning (PP)', 'Material Requirements Planning (MRP)', 'Predictive MRP (pMRP)', 'Material Coverage & Shortage Analysis', 'Production Planner Workbench', 'MRP Change Requests', 'Demand–Supply Alignment'],
    },
    {
      title: 'Soft Skills',
      skills: ['End-to-End Ownership', 'Cross-Functional Collaboration', 'Agile / Scrum', 'Confident Presenter', 'Mentoring & Knowledge Sharing', 'Positive Team Influence & Motivation'],
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