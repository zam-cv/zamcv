import { texts } from "../i18n/texts";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";

export default function Contact() {
  const { lang } = useLanguage();
  const t = texts[lang].contact;
  
  const socialLinks = [
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:zam.cvz@gmail.com",
      color: "var(--color-primary)"
    },
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/zam-cv",
      color: "var(--color-secondary)"
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/carlos-zamudio-v/",
      color: "var(--color-accent)"
    }
  ];

  return (
    <section className="py-20" id="contact">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h3 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-12"
        >
          {t.title}
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 max-w-xl mx-auto"
        >
          <p className="text-[var(--color-text-muted)] mb-8">
            {t.description || "¿Tienes un proyecto en mente? ¡Hablemos!"}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors w-24"
              >
                <link.icon size={24} style={{ color: link.color }} />
                <span className="text-sm">{link.name}</span>
                <FiExternalLink size={14} className="text-[var(--color-text-muted)]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
