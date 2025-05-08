import { texts } from "../i18n/texts";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { FaRust, FaPython, FaReact, FaDocker, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiGo, SiDart } from "react-icons/si";

const techs = [
  { name: "Rust", icon: FaRust, color: "#DEA584" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
];

export default function About() {
  const { lang } = useLanguage();
  const t = texts[lang].about;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20" id="about">
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
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          {t.title}
        </motion.h3>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed"
        >
          {t.description}
        </motion.p>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
        >
          {techs.map((tech) => (
            <motion.div 
              key={tech.name} 
              variants={item}
              className="glass rounded-xl p-4 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <tech.icon 
                size={40} 
                className="mb-3 group-hover:scale-110 transition-transform duration-300"
                color={tech.color}
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
