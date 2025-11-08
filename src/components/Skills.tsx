import { Code, Globe, Smartphone, Palette, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.programming'),
      skills: ['Java', 'JavaScript', 'PHP', 'React', 'Dart', 'Python'],
    },
    {
      icon: Globe,
      title: t('skills.web'),
      skills: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      icon: Smartphone,
      title: t('skills.mobile'),
      skills: ['Flutter', 'Android', 'React Native', 'Mobile UI/UX'],
    },
    {
      icon: Palette,
      title: t('skills.tools'),
      skills: ['Adobe Illustrator', 'Canva', 'Figma', 'Photoshop'],
    },
    {
      icon: Users,
      title: t('skills.soft'),
      skills: ['Teamwork', 'Communication', 'Problem Solving', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('skills.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
