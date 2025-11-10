import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

import kcwebsite from '@/assets/herowebsitekc.png';
import kclp from '@/assets/kclp.png';
import memorabrand from '@/assets/memora.png';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'KC Media Agency – Official Website',
      description:
        'A modern agency website built with React, TailwindCSS, and animations — designed to showcase marketing and branding services with a professional aesthetic.',
      image: kcwebsite,
      link: 'https://kcmediaagency.com/',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'KC Media Offers – Landing Page',
      description:
        'A high-converting landing page promoting KC Media services, optimized for lead generation with sleek UI and strong visuals.',
      image: kclp,
      link: 'https://kcmediaoffers.com/',
      tech: ['Next.js', 'ShadCN UI', 'Responsive Design'],
    },
   {
      title: 'Website for Memora Brand',
      description:
        'An elegant WordPress e-commerce website built for Memora Brand, presenting premium natural supplements that enhance memory, energy, and overall well-being. Designed with a clean aesthetic, smooth navigation, and strong brand identity to deliver a refined shopping experience.',
      image: memorabrand,
      link: 'https://memorabrand.com/',
      tech: ['WordPress', 'Elementor', 'WooCommerce', 'CSS'],
    },
  ];

  // 🔹 Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-secondary/20 via-background to-primary/5 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* ✨ Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t('projects.title')}
        </motion.h2>

        {/* 🧩 Project Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="glass-card rounded-2xl border border-glass-border overflow-hidden hover:border-primary hover:shadow-[0_0_25px_rgba(0,255,150,0.15)] transition-all duration-500 group flex flex-col"
            >
              {/* 🖼️ Project Image */}
              <div className="relative overflow-hidden h-52 sm:h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70" />
              </div>

              {/* 🧾 Project Info */}
              <div className="flex flex-col flex-grow p-6 space-y-3">
                <motion.h3
                  variants={card}
                  className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  variants={card}
                  className="text-muted-foreground text-sm leading-relaxed flex-grow"
                >
                  {project.description}
                </motion.p>

                {/* 🧠 Tech badges */}
                <motion.div
                  variants={container}
                  className="flex flex-wrap gap-2 mt-2"
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* 🔗 Button */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary mt-4 font-medium hover:gap-3 transition-all duration-300"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
