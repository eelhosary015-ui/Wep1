import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { COPY, type Copy } from './copy';
import type { Dir, Lang } from './types';

const STORAGE_KEY = 'remopro.lang';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ar';
  try {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'ar' || param === 'en') return param;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    /* storage can be unavailable in private mode */
  }
  return 'ar';
}

interface LanguageContextValue {
  lang: Lang;
  dir: Dir;
  isRtl: boolean;
  t: Copy;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const dir: Dir = lang === 'ar' ? 'rtl' : 'ltr';
  const t = COPY[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dir);

    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', t.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir, t]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((previous) => (previous === 'ar' ? 'en' : 'ar')),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, isRtl: lang === 'ar', t, setLang, toggleLang }),
    [lang, dir, t, setLang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useI18n must be used inside <LanguageProvider>');
  }
  return context;
}
