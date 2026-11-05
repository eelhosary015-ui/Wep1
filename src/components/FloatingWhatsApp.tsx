import React from 'react';
import { MessageSquare } from 'lucide-react';
import { createQuickWhatsAppInquiryLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useI18n } from '../i18n/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { t, lang } = useI18n();

  const whatsappUrl = createQuickWhatsAppInquiryLink(
    lang === 'ar' ? 'استفسار مباشر من الموقع عن REMO PRO' : 'Direct website enquiry about REMO PRO',
  );

  return (
    <div className="fixed bottom-5 end-5 z-40 flex items-center gap-2 group">
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>{lang === 'ar' ? 'محادثة واتساب مباشرة مع المبيعات' : 'Chat directly with sales on WhatsApp'}</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label={lang === 'ar' ? 'تواصل مع فريق مبيعات REMO PRO عبر واتساب' : 'Contact REMO PRO sales on WhatsApp'}
        title={t.nav.whatsappTitle}
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
};
