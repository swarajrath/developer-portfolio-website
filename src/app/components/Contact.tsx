import { Mail, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50/20">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-foreground mb-2">Contact</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          <Card className="border-border shadow-sm">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Open to meaningful technical discussions and impactful work. Feel free to reach out for collaboration opportunities, consulting, or general inquiries.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.label !== 'Email' ? '_blank' : undefined}
                      rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-4 border border-border rounded hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded bg-secondary text-muted-foreground group-hover:text-primary transition-colors mr-4">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="text-foreground">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}