import React from 'react';
import { ArrowLeft, Cloud, Headphones, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';
import heroDesk from '../assets/images/hero_banner_desk.jpg';
import { useI18n } from '../i18n/LanguageContext';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

const FEATURE_ICONS: Record<string, LucideIcon> = {
  support: Headphones,
  cloud: Cloud,
  shield: ShieldCheck,
  speed: Zap,
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative isolate -mt-[var(--nav-h)] overflow-hidden bg-[#00133c] pt-[var(--nav-h)] text-white"
    >
      {/* ---------------------------------------------------------------- */}
      {/* طبقة الخلفية: صورة المكتب + الغلاف الأزرق المتدرّج + الإضاءة      */}
      {/* ---------------------------------------------------------------- */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={heroDesk}
          alt=""
          className="h-full w-full object-cover object-[36%_58%] ltr:-scale-x-100"
          loading="eager"
          decoding="async"
        />

        {/* الغلاف الأزرق الداكن الذي يحمل النصوص */}
        <div className="hero-wash absolute inset-0" />

        {/* أشعة قطرية ناعمة كما في البانر الأصلي */}
        <div className="hero-rays absolute inset-0" />

        {/* وهج أزرق في الزاوية السفلية */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_85%_at_100%_118%,rgba(0,124,255,0.42)_0%,rgba(0,90,220,0.12)_36%,transparent_62%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(0,12,40,0.55),transparent)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pb-12 pt-7 sm:px-6 sm:pb-16 md:pt-14 lg:min-h-[660px] lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="hero-copy relative text-center lg:text-start lg:col-span-7">
            {/* ملاحظة مكتوبة بخط اليد فوق العنوان */}
            {t.hero.handwriting ? (
              <div className="hero-note ms-auto mb-2 hidden w-max -rotate-2 xl:block">
                <p className="font-hand text-[26px] leading-none text-white drop-shadow-[0_4px_14px_rgba(0,20,60,0.65)]">
                  {t.hero.handwriting}
                </p>
                <svg className="mt-2 h-3 w-full" viewBox="0 0 240 12" fill="none" preserveAspectRatio="none">
                  <path
                    d="M2 8.5C46 3.5 96 2.4 148 4.2c30 1 60 2.6 90 4.2"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ) : null}

            {/* العنوان الرئيسي */}
            <h1 className="hero-rise text-[2.1rem] font-extrabold leading-[1.2] tracking-tight sm:text-[3.1rem] lg:text-[3.5rem] xl:text-[3.9rem]">
              <span
                dir="ltr"
                className="inline-flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2.5 sm:gap-x-3 gap-y-1"
              >
                <span className="text-white drop-shadow-[0_6px_24px_rgba(0,16,48,0.55)]">
                  {t.hero.brandName}
                </span>
                <span className="bg-gradient-to-b from-[#5FD3FF] via-[#2AA8FF] to-[#0A76FF] bg-clip-text font-black text-transparent">
                  {t.hero.brandAccent}
                </span>
              </span>
            </h1>

            {/* العنوان الفرعي */}
            <h2
              className="hero-rise mt-2.5 text-[1.35rem] font-extrabold leading-snug text-white sm:text-[1.85rem] lg:text-[2.05rem]"
              style={{ animationDelay: '90ms', textWrap: 'balance' }}
            >
              {t.hero.subtitle}
            </h2>

            {/* الوصف */}
            <p
              className="hero-rise mt-3 mx-auto lg:mx-0 max-w-[34rem] text-[0.88rem] leading-relaxed text-[#C9DCF7] sm:text-base"
              style={{ animationDelay: '160ms' }}
            >
              {t.hero.description}
            </p>

            {/* المزايا الأربع بتصميم أنيق وعصري ومريح للعين على الهواتف */}
            <ul
              className="hero-rise mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:flex lg:items-center lg:justify-between lg:gap-x-4 text-start"
              style={{ animationDelay: '230ms' }}
            >
              {t.hero.features.map((feature) => {
                const Icon = FEATURE_ICONS[feature.id] ?? Cloud;
                return (
                  <li
                    key={feature.id}
                    className="hero-feature flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-2 sm:p-0 sm:border-0 sm:bg-transparent backdrop-blur-[2px] transition-all hover:bg-white/[0.08]"
                  >
                    <span className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_32%_22%,#2F6FE4_0%,#123C9E_62%,#0A2A78_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_14px_-6px_rgba(0,20,70,0.9)] ring-1 ring-white/25">
                      <Icon className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem] text-[#63D6FF]" strokeWidth={1.9} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[0.75rem] sm:text-[0.8rem] font-bold text-white">
                        {feature.title}
                      </span>
                      <span className="block text-[0.7rem] sm:text-[0.75rem] font-medium text-[#AEC7EC]">
                        {feature.subtitle}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* زر البدء + السهم المرسوم */}
            <div
              className="hero-rise mt-7 sm:mt-9 flex items-center justify-center lg:justify-start gap-4"
              style={{ animationDelay: '300ms' }}
            >
              <button
                type="button"
                onClick={onOpenDemo}
                className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 rounded-full bg-[linear-gradient(100deg,#2478FF_0%,#0F55E6_58%,#0A3FC4_100%)] py-2 pe-2 ps-6 text-[0.88rem] sm:text-[0.95rem] font-extrabold text-white shadow-[0_16px_36px_-16px_rgba(30,110,255,0.95)] ring-1 ring-white/25 transition-all duration-200 hover:brightness-110 active:scale-[0.985]"
              >
                <span>{t.hero.ctaPrimary}</span>
                <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full bg-white text-[#0F55E6] shadow-sm transition-transform duration-200 group-hover:-translate-x-0.5 ltr:group-hover:translate-x-0.5">
                  <ArrowLeft className="h-4.5 w-4.5 sm:h-5 sm:w-5 ltr:rotate-180" strokeWidth={2.6} />
                </span>
              </button>

              <svg
                className="hidden h-14 w-24 text-[#7FDCFF] sm:block"
                viewBox="0 0 96 56"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M92 6C84 26 64 44 38 47"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M33 37.5 36 47.2 26.4 50.6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>

          {/* مساحة الصورة على الجانب الآخر */}
          <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* نص بديل مخفي للقارئ الصوتي */}
      <p className="sr-only">{t.hero.imageAlt}</p>
    </section>
  );
};
