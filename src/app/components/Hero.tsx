import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 pt-20">
      <div className="container mx-auto px-8 py-24">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl text-foreground">
                Software Developer at SAP
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Building scalable enterprise applications with clean architecture and performance in mind.
              </p>
              <p className="text-lg text-muted-foreground">
                Masters in Applied Computer Science, Heidelberg
              </p>
            </div>

            <div className="flex gap-4 flex-wrap pt-4">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}