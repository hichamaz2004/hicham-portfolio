import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        
        <footer className="py-8 px-4 border-t border-glass-border">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 Hicham Azaanoune. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
