import { MapPin, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('about.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            {t('about.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground">{t('about.location')}</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground">{t('about.languages')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
