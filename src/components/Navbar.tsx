import React, { useEffect, useState } from 'react';
import { Menu, X, Rocket, ArrowLeft } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { LanguageToggle } from './LanguageToggle';
import { useI18n } from '../i18n/LanguageContext';

interface NavbarProps {
  onOpenDemo: (initialSector?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#hero');
  const { t } = useI18n();

  /* تتبّع القسم الظاهر حالياً لتلوين رابط القائمة النشط */
  useEffect(() => {
    const updateActive = () => {
      let current = t.nav.links[0]?.href ?? '#hero';
      for (const link of t.nav.links) {
        const target = document.querySelector(link.href);
        if (target instanceof HTMLElement && target.getBoundingClientRect().top <= 160) {
          current = link.href;
        }
      }
      setActiveHref(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [t.nav.links]);

  return (
    <header className="sticky top-0 z-50 h-[var(--nav-h)] px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4">
      {/* القائمة العائمة البيضاء */}
      <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between gap-2 rounded-full border border-white/70 bg-[linear-gradient(to_left,#ffffff_0%,#fbfbff_46%,#e9edfd_100%)] px-2 shadow-[0_16px_38px_-22px_rgba(3,20,60,0.65)] sm:px-4">
        {/* الشعار */}
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap ps-1 sm:gap-2.5"
          aria-label={t.nav.homeLabel}
        >
          <BrandMark className="h-7 w-7 sm:h-[34px] sm:w-[34px]" />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-[#0B1B45] sm:text-[18px]">
              REMO PRO
            </span>
            <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B96AE] sm:text-[9px]">
              {t.common.brandSub}
            </span>
          </span>
        </a>

        {/* روابط التنقل */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {t.nav.links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                className={`relative shrink-0 whitespace-nowrap py-1 text-[13px] font-bold transition-colors xl:text-[13.5px] ${
                  isActive ? 'text-[#1466E8]' : 'text-[#2B3650] hover:text-[#1466E8]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 start-0 h-[2.5px] w-full rounded-full bg-[#1466E8] transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* اللغة + زر البدء */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <LanguageToggle className="inline-flex py-1.5 px-2.5 text-xs sm:text-[12.5px]" compact />

          <button
            type="button"
            onClick={() => onOpenDemo()}
            className="hidden items-center gap-2 rounded-full bg-[#0E2350] px-4 py-2 text-[12.5px] font-bold text-white shadow-[0_10px_22px_-12px_rgba(9,26,66,0.9)] transition-colors hover:bg-[#17316B] md:inline-flex lg:px-5 lg:text-[13px]"
          >
            <span>{t.nav.cta}</span>
            <Rocket className="h-3.5 w-3.5 -rotate-45 text-white/90" strokeWidth={2.2} />
          </button>

          {/* زر القائمة على الهاتف */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full text-[#22304c] transition-colors hover:bg-[#eef1fb] lg:hidden"
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة على الهاتف */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-2 top-[calc(var(--nav-h)-2px)] z-50 animate-fadeIn rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl sm:inset-x-3 lg:hidden">
          <nav className="flex flex-col">
            {t.nav.links.map((link) => (
              <a
                key={`m-${link.href}-${link.label}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-[15px] font-bold transition-colors ${
                  activeHref === link.href
                    ? 'bg-[#eef4ff] text-[#1466E8]'
                    : 'text-[#22304c] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <LanguageToggle className="w-full justify-center py-2.5" compact={false} />

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0E2350] py-3 text-sm font-bold text-white"
            >
              <span>{t.nav.cta}</span>
              <ArrowLeft className="h-4 w-4 ltr:rotate-180" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
