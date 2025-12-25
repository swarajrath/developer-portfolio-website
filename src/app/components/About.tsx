import { Card, CardContent } from './ui/card';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-foreground mb-2">About</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          <Card className="border-border shadow-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                    General Information
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-foreground mb-3">Current Role</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Software Developer at SAP, working on enterprise-grade solutions that serve thousands of users globally.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-3">Academic Background</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Master of Science in Applied Computer Science from SRH Heidelberg, specializing in software architecture and distributed systems.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-3">Technical Focus</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                        <span>Enterprise software development with focus on scalability and performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                        <span>Cloud-native architectures and microservices design patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                        <span>Full-stack development with modern frameworks and technologies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                        <span>SAP technologies and business process integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}