import React from 'react';
import { Globe2, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  tone?: 'light' | 'dark';
  className?: string;
  compact?: boolean;
}

/**
 * مبدّل اللغة بين العربية والإنجليزية.
 * يعرض اسم اللغة الحالية بجانب أيقونة الكرة الأرضية، ويبدّل اللغة عند الضغط،
 * ويُحفظ الاختيار ليعود تلقائياً في الزيارة القادمة.
 */
export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  tone = 'light',
  className = '',
  compact = false,
}) => {
  const { t, toggleLang } = useI18n();

  const toneClasses =
    tone === 'dark'
      ? 'border-white/15 bg-white/10 text-white hover:bg-white/15'
      : 'border-[#e4e8f4] bg-white text-[#22304c] hover:border-[#c9d4ee] hover:bg-[#f7f9ff]';

  const globeColor = tone === 'dark' ? 'text-sky-300' : 'text-[#1C6BEA]';

  return (
    <button
      type="button"
      onClick={toggleLang}
      title={t.common.switchTitle}
      aria-label={t.common.switchTitle}
      lang={t.common.switchTo === 'English' ? 'ar' : 'en'}
      className={`group inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-2 text-[12.5px] font-bold transition-colors ${
        compact ? '' : 'sm:px-3'
      } ${toneClasses} ${className}`}
    >
      <Globe2 className={`h-4 w-4 ${globeColor}`} strokeWidth={2.1} />
      <span className={t.common.switchTo === 'English' ? 'font-sans' : ''}>{t.common.langLabel}</span>
      <ChevronDown className="h-3.5 w-3.5 opacity-45 transition-transform group-hover:translate-y-0.5" />
    </button>
  );
};
