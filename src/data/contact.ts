import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactMethod, SocialLink } from '@/types';

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'swarajrath007@gmail.com',
    href: 'mailto:swarajrath007@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/swaraj-rath',
    href: 'https://www.linkedin.com/in/swaraj-rath-9001b0140/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/swarajrath',
    href: 'https://github.com/swarajrath'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/swarajrath',
    ariaLabel: 'GitHub'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/swaraj-rath-9001b0140/',
    ariaLabel: 'LinkedIn'
  },
  {
    platform: 'Email',
    url: 'mailto:swarajrath007@gmail.com',
    ariaLabel: 'Email'
  }
];
