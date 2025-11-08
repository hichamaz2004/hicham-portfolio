import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'KC Media – Marketing & Branding Agency',
      role: t('experience.kc.role'),
      period: t('experience.kc.period'),
      description: t('experience.kc.description'),
    },
    {
      company: 'Crops Afrens',
      role: t('experience.crops.role'),
      period: t('experience.crops.period'),
      description: t('experience.crops.description'),
    },
    {
      company: 'Dilma Marketing',
      role: t('experience.dilma.role'),
      period: t('experience.dilma.period'),
      description: t('experience.dilma.description'),
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('experience.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-1">
                  <Briefcase className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-medium mb-2">{exp.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
