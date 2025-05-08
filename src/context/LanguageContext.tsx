import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Language } from "../i18n/texts";

interface LanguageContextType {
  lang: Language;
  setLang: Dispatch<SetStateAction<Language>>;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}
