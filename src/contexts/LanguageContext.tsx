import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Full-Stack Developer for Web & Mobile Solutions',
    'hero.subtitle': 'Building responsive, high-performing websites and apps with React, Flutter, and modern technologies.',
    'hero.download': 'Download CV',
    'hero.contact': 'Contact Me',
    
    // About
    'about.title': 'About Me',
    'about.description': 'a Full Stack Developer and UI/UX Designer passionate about building modern, responsive, and scalable web applications . I work with technologies like HTML, CSS, JavaScript, TypeScript, React (JS/TS), Next.js, Node.js, Express.js, MySQL, and MongoDB. With expertise in both front-end and back-end development, I create seamless digital experiences from intuitive user interfaces to powerful server-side solutions',
    'about.location': 'Based in Agadir, Morocco',
    'about.languages': 'Languages: English, French, German (basic), Arabic',
    
    // Skills
    'skills.title': 'Skills',
    'skills.programming': 'Programming',
    'skills.web': 'Web Development',
    'skills.mobile': 'Mobile Development',
    'skills.tools': 'Design Tools',
    'skills.soft': 'Soft Skills',
    
    // Experience
    'experience.title': 'Experience',
    'experience.dilma.role': 'Web Developer (Freelance)',
    'experience.dilma.period': 'Jan 2022 – Present',
    'experience.dilma.description': 'Developing responsive websites, landing pages, and e-commerce stores for clients.',
    'experience.kc.role': 'Full-Stack Developer',
    'experience.kc.period': 'Jul 2025 – Present',
    'experience.kc.description': 'Building modern landing pages and WordPress e-commerce sites, providing maintenance and performance optimization.',
    'experience.crops.role': 'Mobile App Developer (Internship)',
    'experience.crops.period': 'Mar 2025 – Jul 2025',
    'experience.crops.description': 'Developed a Flutter app for student career orientation, integrated Supabase, and optimized app performance.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.tawjeeh.title': 'Tawjeeh',
    'projects.tawjeeh.description': 'Flutter app for student career orientation with Supabase integration.',
    'projects.ecommerce.title': 'E-Commerce Landing Page',
    'projects.ecommerce.description': 'Modern Shopify/WordPress sales site with high conversion rates.',
    'projects.portfolio.title': 'Portfolio Website',
    'projects.portfolio.description': 'Personal portfolio with multilingual support and modern design.',
    
    // Education
    'education.title': 'Education',
    'education.bac.degree': 'Baccalauréat in Physical Sciences',
    'education.bac.school': 'Lycée Al Masira El Khadraa, Massa',
    'education.bac.period': '2021-2022',
    'education.mobile.degree': 'Mobile App Development',
    'education.mobile.school': 'CMC Agadir',
    'education.mobile.period': '2023-2025',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's build something amazing together.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Développeur Full-Stack Web & Mobile',
    'hero.subtitle': 'Création de sites web et applications réactifs et performants avec React, Flutter et technologies modernes.',
    'hero.download': 'Télécharger CV',
    'hero.contact': 'Me Contacter',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.description': 'a Full Stack Developer and UI/UX Designer passionate about building modern, responsive, and scalable web applications . I work with technologies like HTML, CSS, JavaScript, TypeScript, React (JS/TS), Next.js, Node.js, Express.js, MySQL, and MongoDB. With expertise in both front-end and back-end development, I create seamless digital experiences from intuitive user interfaces to powerful server-side solutions',
    'about.location': 'Basé à Agadir, Maroc',
    'about.languages': 'Langues : Anglais, Français, Allemand (basique), Arabe',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.programming': 'Programmation',
    'skills.web': 'Développement Web',
    'skills.mobile': 'Développement Mobile',
    'skills.tools': 'Outils de Design',
    'skills.soft': 'Compétences Interpersonnelles',
    
    // Experience
    'experience.title': 'Expérience',
    'experience.dilma.role': 'Développeur Web (Freelance)',
    'experience.dilma.period': 'Jan 2022 – Présent',
    'experience.dilma.description': 'Développement de sites web responsive, landing pages et boutiques e-commerce pour clients.',
    'experience.kc.role': 'Développeur Full-Stack',
    'experience.kc.period': 'Jul 2025 – Présent',
    'experience.kc.description': 'Création de landing pages modernes et sites e-commerce WordPress, maintenance et optimisation des performances.',
    'experience.crops.role': 'Développeur Mobile (Stage)',
    'experience.crops.period': 'Mar 2025 – Jul 2025',
    'experience.crops.description': 'Développement d\'une application Flutter pour l\'orientation de carrière des étudiants, intégration Supabase et optimisation.',
    
    // Projects
    'projects.title': 'Projets',
    'projects.tawjeeh.title': 'Tawjeeh',
    'projects.tawjeeh.description': 'Application Flutter pour l\'orientation de carrière avec intégration Supabase.',
    'projects.ecommerce.title': 'Landing Page E-Commerce',
    'projects.ecommerce.description': 'Site de vente Shopify/WordPress moderne avec taux de conversion élevé.',
    'projects.portfolio.title': 'Site Portfolio',
    'projects.portfolio.description': 'Portfolio personnel avec support multilingue et design moderne.',
    
    // Education
    'education.title': 'Formation',
    'education.bac.degree': 'Baccalauréat Sciences Physiques',
    'education.bac.school': 'Lycée Al Masira El Khadraa, Massa',
    'education.bac.period': '2021-2022',
    'education.mobile.degree': 'Développement Mobile',
    'education.mobile.school': 'CMC Agadir',
    'education.mobile.period': '2023-2025',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Construisons quelque chose d\'incroyable ensemble.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.phone': 'Téléphone',
    'contact.linkedin': 'LinkedIn',
  },
  de: {
    // Navigation
    'nav.about': 'Über',
    'nav.skills': 'Fähigkeiten',
    'nav.experience': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.education': 'Ausbildung',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Full-Stack Entwickler für Web & Mobile',
    'hero.subtitle': 'Erstellung responsiver, leistungsstarker Websites und Apps mit React, Flutter und modernen Technologien.',
    'hero.download': 'Lebenslauf',
    'hero.contact': 'Kontakt',
    
    // About
    'about.title': 'Über Mich',
    'about.description': 'Motivierter Full-Stack Entwickler, spezialisiert auf moderne Web- und Mobile-Anwendungen. Erfahren in Frontend- und Backend-Technologien. Leidenschaftlich in der Entwicklung effizienter und hochwertiger digitaler Lösungen.',
    'about.location': 'Ansässig in Agadir, Marokko',
    'about.languages': 'Sprachen: Englisch, Französisch, Deutsch (Grundkenntnisse), Arabisch',
    
    // Skills
    'skills.title': 'Fähigkeiten',
    'skills.programming': 'Programmierung',
    'skills.web': 'Webentwicklung',
    'skills.mobile': 'Mobile Entwicklung',
    'skills.tools': 'Design-Tools',
    'skills.soft': 'Sozialkompetenzen',
    
    // Experience
    'experience.title': 'Erfahrung',
    'experience.dilma.role': 'Webentwickler (Freelance)',
    'experience.dilma.period': 'Jan 2022 – Heute',
    'experience.dilma.description': 'Entwicklung responsiver Websites, Landing Pages und E-Commerce-Shops für Kunden.',
    'experience.kc.role': 'Full-Stack Entwickler',
    'experience.kc.period': 'Jul 2025 – Heute',
    'experience.kc.description': 'Erstellung moderner Landing Pages und WordPress E-Commerce-Websites, Wartung und Performance-Optimierung.',
    'experience.crops.role': 'Mobile App Entwickler (Praktikum)',
    'experience.crops.period': 'Mär 2025 – Jul 2025',
    'experience.crops.description': 'Entwicklung einer Flutter-App für Studenten-Karriereberatung, Supabase-Integration und App-Optimierung.',
    
    // Projects
    'projects.title': 'Projekte',
    'projects.tawjeeh.title': 'Tawjeeh',
    'projects.tawjeeh.description': 'Flutter-App für Studenten-Karriereberatung mit Supabase-Integration.',
    'projects.ecommerce.title': 'E-Commerce Landing Page',
    'projects.ecommerce.description': 'Moderne Shopify/WordPress Verkaufsseite mit hohen Conversion-Raten.',
    'projects.portfolio.title': 'Portfolio Website',
    'projects.portfolio.description': 'Persönliches Portfolio mit mehrsprachiger Unterstützung und modernem Design.',
    
    // Education
    'education.title': 'Ausbildung',
    'education.bac.degree': 'Abitur in Physik',
    'education.bac.school': 'Lycée Al Masira El Khadraa, Massa',
    'education.bac.period': '2021-2022',
    'education.mobile.degree': 'Mobile App Entwicklung',
    'education.mobile.school': 'CMC Agadir',
    'education.mobile.period': '2023-2025',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Lassen Sie uns gemeinsam etwas Großartiges schaffen.',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Senden',
    'contact.phone': 'Telefon',
    'contact.linkedin': 'LinkedIn',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
