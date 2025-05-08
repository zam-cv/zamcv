import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex items-center"
    >
      <div className="flex gap-1 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5">
        <button
          onClick={() => setLang("es")}
          className={`px-2 py-0.5 rounded-full text-sm transition-colors ${
            lang === "es" 
              ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white" 
              : "text-[var(--color-text-muted)] hover:text-white"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-0.5 rounded-full text-sm transition-colors ${
            lang === "en" 
              ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white" 
              : "text-[var(--color-text-muted)] hover:text-white"
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}
