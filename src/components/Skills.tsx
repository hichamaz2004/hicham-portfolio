import { Code, Palette, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// ✅ Logos
import figmaLogo from '@/assets/tech/figma.svg';
import sassLogo from '@/assets/tech/sass.svg';
import bootstrapLogo from '@/assets/tech/bootstrap.svg';
import jsLogo from '@/assets/tech/javascript.svg';
import tsLogo from '@/assets/tech/typescript.svg';
import htmlLogo from '@/assets/tech/html5.svg';
import reactLogo from '@/assets/tech/react.svg';
import nextLogo from '@/assets/tech/nextdotjs.svg';
import tailwindLogo from '@/assets/tech/tailwindcss.svg';
import muiLogo from '@/assets/tech/mui.svg';
import nodeLogo from '@/assets/tech/nodedotjs.svg';
import mongoLogo from '@/assets/tech/mongodb.svg';
import prismaLogo from '@/assets/tech/prisma.svg';
import gitLogo from '@/assets/tech/git.svg';
import githubLogo from '@/assets/tech/github.svg';
import npmLogo from '@/assets/tech/npm.svg';
import vercelLogo from '@/assets/tech/vercel.svg';
import pythonLogo from '@/assets/tech/python.svg';
import cssLogo from '@/assets/tech/css3.svg';
import vscodeLogo from '@/assets/tech/visualstudiocode.svg';

const Skills = () => {
  const { t } = useLanguage();

  const hardSkills = [
    {
      icon: Code,
      title: 'Languages & Core',
      skills: [
        { name: 'JavaScript', img: jsLogo },
        { name: 'TypeScript', img: tsLogo },
        { name: 'HTML', img: htmlLogo },
        { name: 'CSS', img: cssLogo },
        { name: 'Python', img: pythonLogo },
      ],
    },
    {
      icon: Palette,
      title: 'Front-End',
      skills: [
        { name: 'React', img: reactLogo },
        { name: 'Next.js', img: nextLogo },
        { name: 'Tailwind CSS', img: tailwindLogo },
        { name: 'MUI', img: muiLogo },
      ],
    },
    {
      icon: Wrench,
      title: 'Back-End & Tools',
      skills: [
        { name: 'Node.js', img: nodeLogo },
        { name: 'MongoDB', img: mongoLogo },
        { name: 'Prisma', img: prismaLogo },
        { name: 'Git', img: gitLogo },
        { name: 'GitHub', img: githubLogo },
        { name: 'VS Code', img: vscodeLogo },
        { name: 'npm', img: npmLogo },
        { name: 'Vercel', img: vercelLogo },
      ],
    },
    {
      icon: Palette,
      title: 'Design & Workflow',
      skills: [
        { name: 'Figma', img: figmaLogo },
        { name: 'Sass', img: sassLogo },
        { name: 'Bootstrap', img: bootstrapLogo },
      ],
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const logo = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hardSkills.map((category, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </motion.div>
                <h4 className="text-xl font-semibold">{category.title}</h4>
              </div>

              <motion.div
                variants={container}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={logo}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-muted rounded-full px-3 py-1 text-sm text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                  >
                    {skill.img && (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
