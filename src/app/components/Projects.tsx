import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '@/data/projects';
import { FadeIn, StaggerContainer } from './animations';
import { motion } from 'motion/react';
import { staggerItem } from './animations/StaggerContainer';

export function Projects() {

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-blue-50/20 to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/30">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl text-foreground mb-2">Projects</h2>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {projects.map((project) => (
              <motion.div key={project.name} variants={staggerItem}>
                <Card
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
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}