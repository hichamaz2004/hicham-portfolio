import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.mobile.degree'),
      school: t('education.mobile.school'),
      period: t('education.mobile.period'),
    },
    {
      degree: t('education.bac.degree'),
      school: t('education.bac.school'),
      period: t('education.bac.period'),
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('education.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-1">
                  <GraduationCap className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
