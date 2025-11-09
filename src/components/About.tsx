import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// ✅ If your image is inside src/assets/
import profileImg from '@/assets/hicham.jpeg'; // change to your real image name


const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-gradient-to-br from-secondary/20 via-background to-primary/5 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t('about.title')}
        </h2>

        {/* 🧑‍💻 About Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* 🖼️ Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src={profileImg}
              alt="Hicham Azaanoune"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-[0_0_20px_rgba(0,255,150,0.25)] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* 🧾 Text + Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>

            {/* 🌐 Social Links */}
            <div className="grid sm:grid-cols-2 gap-5 mt-6">
              {/* GitHub */}
              <a
                href="https://github.com/HichamAzaanoune"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Github className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  GitHub Profile
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hicham-azaanoune"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  LinkedIn Profile
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
