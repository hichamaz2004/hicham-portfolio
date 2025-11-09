import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useLanguage();

  // 🧩 Experience data (with dates for sorting)
  const experiences = [
    {
      company: 'KC Media – Marketing & Branding Agency',
      role: t('experience.kc.role'),
      period: '2023 - Present',
      startDate: '2023-01',
      description: t('experience.kc.description'),
    },
    {
      company: 'Crops Afrens',
      role: t('experience.crops.role'),
      period: '2022 - 2023',
      startDate: '2022-01',
      description: t('experience.crops.description'),
    },
    {
      company: 'Dilma Marketing',
      role: t('experience.dilma.role'),
      period: '2021 - 2022',
      startDate: '2021-01',
      description: t('experience.dilma.description'),
    },
  ];

  // 🔄 Sort experiences: newest → oldest
  const sortedExperiences = experiences.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t('experience.title')}
        </h2>

        {/* 🔹 Timeline Wrapper */}
        <div className="relative border-l border-primary/30 pl-8 space-y-10">
          {sortedExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* 🟢 Timeline Dot */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-125 transition-transform duration-300" />

              {/* 🧩 Experience Card */}
              <div className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-1">
                    <Briefcase className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium mb-1">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
