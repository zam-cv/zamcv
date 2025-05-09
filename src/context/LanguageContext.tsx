import { createContext, useContext, useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Language } from "../i18n/texts";

interface LanguageContextType {
  lang: Language;
  setLang: Dispatch<SetStateAction<Language>>;
}

const LANG_COOKIE_NAME = "zam_cv_language";

const getLanguageFromCookie = (): Language => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === LANG_COOKIE_NAME) {
      return value as Language;
    }
  }
  return "en";
};

const saveLanguageToCookie = (language: Language) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  document.cookie = `${LANG_COOKIE_NAME}=${language};expires=${expirationDate.toUTCString()};path=/`;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => getLanguageFromCookie());

  useEffect(() => {
    saveLanguageToCookie(lang);
  }, [lang]);

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
