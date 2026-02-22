import { Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import { socialLinks } from '@/data/contact';
import { motion } from 'motion/react';

export function Hero() {
  const iconMap = {
    GitHub: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    LinkedIn: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    Email: Mail,
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-800/50 pt-20">
      <div className="container mx-auto px-8 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl text-foreground">
                Software Developer at SAP
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Building scalable enterprise applications with clean architecture and performance in mind.
              </p>
              <p className="text-lg text-muted-foreground">
                Masters in Applied Computer Science, Heidelberg
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 flex-wrap pt-4"
            >
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download="Swaraj_Rath_Resume.pdf">
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-3 pt-4"
            >
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.platform as keyof typeof iconMap];
                const isLucideIcon = link.platform === 'Email';

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.platform !== 'Email' ? '_blank' : undefined}
                    rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.ariaLabel}
                  >
                    {isLucideIcon ? <IconComponent size={20} /> : <IconComponent />}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}