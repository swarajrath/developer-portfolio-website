import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AvatarAssistant } from './components/AvatarAssistant';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  useEffect(() => {
    // 1. Initialize the dataLayer FIRST
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // 2. Configure GA (this queues the config)
    window.gtag('js', new Date());
    window.gtag('config', 'G-2YX6B20R0Y');

    // 3. Load the script (it will process the queued commands)
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-2YX6B20R0Y`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log('Google Analytics loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load Google Analytics');
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <AvatarAssistant />
      </div>
    </ThemeProvider>
  );
}