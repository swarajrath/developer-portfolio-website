import { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Review Order Progress',
    problem: 'Manufacturing planners lacked a unified, real-time overview of multi-level production and procurement status. Tracking a single order required navigating multiple fragmented applications, slowing decision-making and increasing the risk of supply disruptions.',
    solution: 'Led end-to-end development and infrastructure ownership of a cloud-native application in SAP S/4HANA Public Cloud (PP module). Architected and implemented a hierarchical tree-view UI using Fiori Elements V4 and ABAP RAP, consolidating multi-level BOM, production, and procurement data into a single performant interface. Optimized data access patterns and backend processing logic to ensure low-latency rendering of deep BOM structures and high-volume transactional datasets.',
    outcome: 'Drove exceptional customer adoption with 25 productive customers within 2 weeks and 154 within 6 months. Significantly reduced cross-application navigation, accelerated disruption resolution, improved planner productivity, and strengthened manufacturing customer confidence — directly contributing to revenue protection and cloud adoption growth.',
    tech: ['SAP S/4HANA Public Cloud', 'ABAP RAP', 'Fiori Elements V4', 'OData V4', 'SAP BTP', 'HANA'],
    tags: ['Enterprise', 'Manufacturing', 'Supply Chain', 'Cloud Architecture', 'Performance Optimization']
  },
  {
    name: 'Manage Material Coverage v2 (F0251A)',
    problem: 'Production planners and MRP controllers need a comprehensive way to detect, analyze, and act on material coverage issues—shortages or supply/demand gaps—that can disrupt production or order fulfillment.',
    solution: 'Delivered an SAP Fiori Elements–based MRP app that displays detailed stock/requirements lists and shortage information for selected materials. Users can filter materials, view multi-segment coverage data, and take corrective actions (such as MRP runs or editing MRP elements) directly from the interface. It offers enhanced navigation, quick views, and usability improvements over its predecessor. Supports extensibility with custom columns and saved views for deeper analysis.',
    outcome: 'Enables planners to rapidly identify material coverage issues and take corrective steps without relying on multiple traditional tools or transactions, improving responsiveness to shortages and supporting smoother production execution.',
    tech: ['SAP S/4HANA (PP-MRP)', 'Fiori Elements', 'OData', 'Stock/Requirements Lists', 'Extensibility (BAdI)'],
    tags: ['Enterprise', 'MRP', 'Manufacturing', 'Supply Chain', 'Fiori']
  },
  {
    name: 'Monitor Material Coverage – Net & Individual Segments (F2101A)',
    problem: 'In complex MRP scenarios, materials may have both net and individual segment coverage issues (e.g., make-to-order, project, or multi-segment requirements) that planners need visibility into, beyond just net segments.',
    solution: 'Extends coverage monitoring by showing both net and individual segment requirements for selected materials. Users can apply configurable filters, review projected stock/requirements across multiple segments, and navigate to detailed coverage resolution apps (e.g., Manage Material Coverage).',
    outcome: 'Gives a broader, more granular view of coverage situations across all relevant segments, enabling planners to detect and react to shortages affecting specific segments or customer commitments. Improves planning accuracy and highlights segment-specific issues earlier in the process.',
    tech: ['SAP S/4HANA (PP-MRP)', 'Fiori Elements', 'OData Services', 'Fiori Launchpad'],
    tags: ['Enterprise', 'Manufacturing', 'Supply Chain', 'MRP Cockpit', 'Segment Analysis']
  },
  {
    name: 'Microservices Migration',
    problem: 'Monolithic architecture limited scalability and deployment flexibility.',
    solution: 'Led migration to containerized microservices with CI/CD pipelines',
    outcome: 'Achieved 99.9% uptime, reduced deployment time from hours to minutes',
    tech: ['Kubernetes', 'Docker', 'AWS', 'Jenkins'],
    tags: ['Performance', 'Enterprise']
  }
];
