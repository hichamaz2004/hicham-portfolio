import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpg';
import bgImage from '@/assets/hero.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();

  // 🔹 Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* 🔹 Background image with blur */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center blur-md scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* 🔹 Dark overlay with fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
      />

      {/* 🔹 Foreground content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center gap-20 py-20"
      >
        {/* 🖼️ Profile Image */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              src={profilePhoto}
              alt="Hicham Azaanoune"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-[0_0_40px_rgba(0,255,150,0.3)]"
            />
          </div>
        </motion.div>

        {/* 🧾 Text Content */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 text-center md:text-left text-white space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            Hicham Azaanoune
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-primary glow-text font-medium"
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto md:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* 🎯 Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border group"
              >
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  {t('hero.download')}
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('hero.contact')}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
