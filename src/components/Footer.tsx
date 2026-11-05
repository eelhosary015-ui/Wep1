import React from 'react';
import { Mail, Phone, MapPin, ArrowLeft, PlayCircle } from 'lucide-react';
import { createQuickWhatsAppInquiryLink, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG } from '../config/siteConfig';
import { useI18n } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenDemo: (initialSector?: string) => void;
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenDemo, onReplayIntro }) => {
  const { t, lang } = useI18n();
  const copy = t.footer;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Brand & Overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white font-black text-lg shadow-sm">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                REMO <span className="text-blue-500 font-extrabold">PRO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {copy.about}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>{copy.slogan}</p>
              <p>{copy.cloudNote}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <LanguageToggle tone="dark" />
              <button
                type="button"
                onClick={onReplayIntro}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs font-bold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <PlayCircle className="h-4 w-4 opacity-70" />
                <span>{copy.replayIntro}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Modules Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">
              {copy.modulesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {copy.moduleLinks.map((label) => (
                <li key={label}>
                  <a href="#modules" className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">
              {copy.sectorsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {copy.sectorLinks.map((label) => (
                <li key={label}>
                  <a href="#sectors" className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Corporate Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">
              {copy.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={createQuickWhatsAppInquiryLink(copy.whatsappTopic, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 hover:text-emerald-300 transition-colors"
                >
                  <span className="font-mono dir-ltr">{DISPLAY_WHATSAPP_NUMBER}</span>
                  <span className="text-[11px] text-slate-500">{copy.whatsappSales}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="font-mono dir-ltr text-start">{SITE_CONFIG.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="font-mono dir-ltr text-start">{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{lang === 'ar' ? SITE_CONFIG.contact.address : SITE_CONFIG.contact.addressEn}</span>
              </li>
            </ul>

            <div className="mt-5 space-y-2">
              <a
                href={createQuickWhatsAppInquiryLink(copy.whatsappCtaTopic, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>{copy.quickWhatsapp}</span>
              </a>

              <button
                onClick={() => onOpenDemo()}
                className="w-full py-2 px-3 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{copy.ctaDemo}</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {copy.copyright.replace('{year}', String(new Date().getFullYear()))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              {copy.privacy}
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="#governance"
              className="hover:text-slate-300 transition-colors"
            >
              {copy.security}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#contact"
              className="hover:text-slate-300 transition-colors"
            >
              {copy.contactSales}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
