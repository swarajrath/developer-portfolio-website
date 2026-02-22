import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { contactMethods } from '@/data/contact';
import { FadeIn } from './animations';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:swarajrath007@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Contact from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open email client
      window.location.href = mailtoLink;

      // Reset form and show success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('success');

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to open email client. Please contact directly via email.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50/20 dark:from-gray-900 dark:to-gray-800/30">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl text-foreground mb-2">Contact</h2>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <FadeIn delay={0.2}>
              <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
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
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.4}>
              <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl text-foreground mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded text-green-800 text-sm">
                      Message prepared! Your email client should open shortly.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Preparing...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    This will open your email client with the message pre-filled.
                  </p>
                </form>
              </CardContent>
            </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
