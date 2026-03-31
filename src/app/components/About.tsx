import { Card, CardContent } from './ui/card';
import { FadeIn } from './animations';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/30">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl text-foreground mb-2">About</h2>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                      Professional Summary
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-foreground mb-3">SAP S/4HANA Infrastructure Expert & Developer</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Infrastructure specialist and full-stack developer at SAP (Garching), driving mission-critical
                        production planning (PP/MRP) solutions on S/4HANA Public Cloud with exceptional customer adoption.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Infrastructure & DevOps Leadership</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>Technical SPOC for development infrastructure, CILTS processes, and cloud tooling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>Led team migration to SAP Business Application Studio (BAS) with zero downtime</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>Optimized CI/CD pipelines, transport management (gCTS), and deployment automation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>Ensured cloud infrastructure stability, performance monitoring, and cost optimization</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Full-Stack Development Excellence</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>End-to-end ownership: ABAP RAP, Fiori Elements V4, OData V4, CDS modeling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>Performance optimization for large-scale transactional datasets and complex BOM structures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>Clean-core architecture, regression-free delivery, and AI-first innovation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Impact & Recognition</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>🏆 SAP Drive Transformation Award (2025) - Led high-adoption customer project</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>🛡️ Service Reliability Champion (2024) - Infrastructure stability excellence</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                          <span>✅ SAP Certified Development Professional (2022)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
