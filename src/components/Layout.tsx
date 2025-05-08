import type { ReactNode } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function Layout({ children }: { children: ReactNode }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-[var(--color-bg)]/80">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-tight gradient-text"
          >
            Carlos Zamudio
          </motion.span>
          <LanguageSwitcher />
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 pt-24">
        {children}
      </main>
      
      <footer className="mt-24 border-t border-white/10 py-8 text-center text-sm text-[var(--color-text-muted)]">
        <div className="max-w-5xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Carlos Zamudio</p>
        </div>
      </footer>

      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          <FiArrowUp className="text-white text-xl" />
        </motion.button>
      )}
    </div>
  );
}
