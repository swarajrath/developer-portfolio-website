import { Card, CardContent } from './ui/card';
import { skillCategories } from '@/data/skills';
import { FadeIn, StaggerContainer } from './animations';
import { motion } from 'motion/react';
import { staggerItem } from './animations/StaggerContainer';

export function Skills() {

  return (
    <section id="skills" className="py-24 bg-gray-50/50 dark:bg-gray-800/30">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl text-foreground mb-2">Skills & Technologies</h2>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={staggerItem} className="h-full">
                <Card
                  className="border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full"
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
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
