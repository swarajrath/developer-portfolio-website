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
          Professional Summary
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-foreground mb-3">Current Role</h4>
          <p className="text-muted-foreground leading-relaxed">
            Developer at SAP (Garching), Cloud ERP – SCM Engineering, working on mission-critical
            MRP and pMRP applications for S/4HANA Public Cloud.
          </p>
        </div>

        <div>
          <h4 className="text-foreground mb-3">Core Responsibilities</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Development and enhancement of MRP and pMRP applications</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Delivering high-quality, regression-free software to drive S/4 Public Cloud adoption</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Ensuring performance, scalability, reliability, and optimized TCO</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Contributing to SAP’s Suite-first & AI-first strategy</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground mb-3">Infrastructure Expertise</h4>
          <p className="text-muted-foreground leading-relaxed">
            Infrastructure expert within the scrum team, acting as technical SPOC for development
            infrastructure and CILTS processes, and supporting the transition to SAP Business
            Application Studio.
          </p>
        </div>

        <div>
          <h4 className="text-foreground mb-3">Key Contributions</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Enabled and improved end-to-end business processes</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Delivered Fiori UI enhancements, APIs, RAP BOs, and CDS views</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
              <span>Contributed to AI use cases, data products, PoCs, and discovery activities</span>
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