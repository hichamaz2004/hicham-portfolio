import { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';



const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sl90c3a',   // ⚙️ Example: 'service_p7a9abc'
        'template_choai8f',  // ⚙️ Example: 'template_2f8xyz'
        formData,
        'Dx6m8bgU0Zrzl9hCX'    // ⚙️ Example: 'aFJtRhz9Hg_ABC'
      )
.then(() => {
  Swal.fire({
    title: '✅ Message Sent!',
    text: 'Your message has been delivered successfully.',
    icon: 'success',
    background: '#1b1d23',
    color: '#fff',
    confirmButtonColor: '#00ff96',
    confirmButtonText: 'OK',
  });
  setFormData({ name: '', email: '', message: '' });
})
.catch((err) => {
  console.error('EmailJS Error:', err);
  Swal.fire({
    title: '❌ Failed to send message',
    text: 'Please try again later.',
    icon: 'error',
    background: '#1b1d23',
    color: '#fff',
    confirmButtonColor: '#00ff96',
  });
});

  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+212 620310353',
      href: 'tel:+212620310353',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'hichamazaanoune1960@gmail.com',
      href: 'mailto:hichamazaanoune1960@gmail.com',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/hicham-azaanoune',
      href: 'https://linkedin.com/in/hicham-azaanoune',
    },
  ];

  // 🎬 Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-background to-primary/5 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 🌟 Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center text-primary mb-12"
        >
          {t('contact.subtitle')}
        </motion.p>

        {/* 📱 Responsive Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* ✉️ Contact Form */}
          <motion.div
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-glass-border shadow-[0_0_25px_rgba(0,255,150,0.05)]"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-secondary/40 border-glass-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />

                <Input
                  type="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-secondary/40 border-glass-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />

                <Textarea
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full bg-secondary/40 border-glass-border focus:border-primary focus:ring-1 focus:ring-primary/50 resize-none transition-all"
                />

                <motion.div whileHover={{ scale: 1.03 }}>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg rounded-lg"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {t('contact.send')}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* 📞 Contact Info */}
          <motion.div
            variants={fadeUp}
            className="order-1 lg:order-2 space-y-5"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                variants={fadeUp}
                target={info.icon === Linkedin ? '_blank' : undefined}
                rel={
                  info.icon === Linkedin ? 'noopener noreferrer' : undefined
                }
                whileHover={{
                  scale: 1.03,
                  x: 5,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="glass-card flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-glass-border hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,150,0.1)] transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <info.icon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="text-base font-medium text-foreground break-all sm:truncate sm:whitespace-nowrap">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
