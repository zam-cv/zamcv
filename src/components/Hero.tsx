import { texts } from "../i18n/texts";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { FiChevronDown, FiDownload } from "react-icons/fi";

export default function Hero() {
  const { lang } = useLanguage();
  const t = texts[lang].hero;

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] p-1"
        >
          <div className="w-full h-full rounded-full bg-[var(--color-bg)] flex items-center justify-center text-4xl font-bold">
            <span className="gradient-text">CZ</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold gradient-text"
        >
          Carlos Zamudio
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium"
        >
          {t.subtitle}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto text-[var(--color-text-muted)]"
        >
          {t.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-medium hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-shadow duration-300"
          >
            {t.cta}
          </a>
          
          <a
            href="/carlos_zamudio_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-8 px-8 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
          >
            <FiDownload className="mr-2" />
            {t.downloadCV || "Descargar CV"}
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiChevronDown className="text-3xl text-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
