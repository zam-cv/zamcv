import { texts } from "../i18n/texts";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const { lang } = useLanguage();
  const t = texts[lang].projects;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20" id="projects">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
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
          className="grid gap-8 md:grid-cols-2"
        >
          {t.list.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="h-40 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors mx-2"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
                <h4 className="text-2xl font-bold px-6 py-3 gradient-text">{project.title}</h4>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-text-muted)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                    >
                      {tag}
                    </span>
                  )) || (
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {project.title.split(' ')[0].toLowerCase()}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
