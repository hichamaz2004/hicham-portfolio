import { GraduationCap, Brain, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

import profImage from '@/assets/prof.jpeg';
import lyceeImage from '@/assets/lycee.jpeg';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.mobile.degree'),
      school: t('education.mobile.school'),
      period: '2022 - 2024',
      startDate: '2022-01',
      image: profImage,
      skills: ['Flutter', 'React', 'Supabase', 'JavaScript'],
    },
    {
      degree: t('education.bac.degree'),
      school: t('education.bac.school'),
      period: '2021 - 2022',
      startDate: '2021-01',
      image: lyceeImage,
      skills: ['Mathematics', 'Physics', 'Problem Solving'],
    },
  ];

  const sortedEducation = education.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const getIcon = (degree: string) => {
    if (degree.toLowerCase().includes('mobile'))
      return <Wrench className="h-8 w-8 text-primary" />;
    if (degree.toLowerCase().includes('baccalaureate'))
      return <GraduationCap className="h-8 w-8 text-primary" />;
    return <Brain className="h-8 w-8 text-primary" />;
  };

  // ✨ Animation Variants
  const slideFromRight = {
    hidden: { opacity: 0, x: 120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="education"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/5"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,150,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t('education.title')}
        </motion.h2>

        {/* 🎓 Timeline */}
        <div className="relative border-l border-primary/30 pl-8 space-y-12">
          {sortedEducation.map((edu, index) => (
            <motion.div
              key={index}
              variants={slideFromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              className="relative group hover:shadow-[0_0_30px_rgba(0,255,150,0.15)] transition-all duration-500"
            >
              {/* 🟢 Timeline Dot */}
              <div className="absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,150,0.3)] group-hover:scale-125 transition-transform duration-300" />

              {/* 📚 Education Card */}
              <div className="glass-card p-8 rounded-2xl border border-glass-border hover:border-primary/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* 🖼️ Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="flex-shrink-0 mx-auto md:mx-0"
                  >
                    {edu.image ? (
                      <img
                        src={edu.image}
                        alt={edu.school}
                        className="w-40 h-40 rounded-xl object-cover shadow-[0_0_20px_rgba(0,255,150,0.25)] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="p-6 bg-primary/10 rounded-xl flex items-center justify-center">
                        {getIcon(edu.degree)}
                      </div>
                    )}
                  </motion.div>

                  {/* 📘 Text Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className="flex-1 text-center md:text-left"
                  >
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-1">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {edu.period}
                    </p>

                    {/* 🧠 Skills */}
                    {edu.skills?.length > 0 && (
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                        {edu.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {/* ⏳ Progress Bar */}
                    {edu.period.includes('Present') && (
                      <div className="mt-4 w-full bg-muted/30 h-2 rounded-full overflow-hidden">
                        <motion.div
                          animate={{
                            width: ['0%', '75%', '60%', '90%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="bg-primary h-2"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
