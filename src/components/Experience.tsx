import { texts } from "../i18n/texts";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { FiCalendar, FiBriefcase, FiMapPin } from "react-icons/fi";

export default function Experience() {
  const { lang } = useLanguage();
  const t = texts[lang].experience;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20" id="experience">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h3 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-12"
        >
          {t.title}
        </motion.h3>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-[var(--color-primary)]/20 ml-4"
        >
          {t.list.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="mb-10 relative"
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full -left-[2.25rem] top-1.5 shadow-lg shadow-[var(--color-primary)]/30"></div>
              
              <div className="glass rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)] mb-3">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2 text-[var(--color-primary)]" />
                      <span>{exp.date}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FiBriefcase className="mr-2 text-[var(--color-secondary)]" />
                      <span>{exp.organization}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FiMapPin className="mr-2 text-[var(--color-accent)]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-3">{exp.title}</h4>
                  <p className="text-[var(--color-text-muted)]">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
