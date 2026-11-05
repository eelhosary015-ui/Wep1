import { SITE_CONFIG } from '../config/siteConfig';
import type { Lang } from '../i18n/types';

export const SALES_WHATSAPP_NUMBER = SITE_CONFIG.contact.whatsappNumber;
export const DISPLAY_WHATSAPP_NUMBER = SITE_CONFIG.contact.whatsappDisplay;

export interface WhatsAppMessagePayload {
  fullName?: string;
  companyName?: string;
  phone?: string;
  sector?: string;
  branchCount?: string;
  notes?: string;
}

export function createWhatsAppDemoLink(
  data: WhatsAppMessagePayload = {},
  lang: Lang = 'ar',
): string {
  const isArabic = lang === 'ar';

  const parts: string[] = isArabic
    ? ['السلام عليكم ورحمة الله،', 'أود الاستفسار وطلب عرض توضيحي لنظام REMO PRO ERP:']
    : ['Hello,', 'I would like to request a REMO PRO ERP demo:'];

  const labels = isArabic
    ? {
        fullName: 'الاسم',
        companyName: 'الشركة / المنشأة',
        phone: 'رقم الهاتف',
        sector: 'نوع النشاط',
        branchCount: 'عدد الفروع',
        notes: 'متطلبات خاصة',
      }
    : {
        fullName: 'Name',
        companyName: 'Company',
        phone: 'Phone',
        sector: 'Industry',
        branchCount: 'Branches',
        notes: 'Special requirements',
      };

  if (data.fullName?.trim()) {
    parts.push(`- ${labels.fullName}: ${data.fullName.trim()}`);
  }
  if (data.companyName?.trim()) {
    parts.push(`- ${labels.companyName}: ${data.companyName.trim()}`);
  }
  if (data.phone?.trim()) {
    parts.push(`- ${labels.phone}: ${data.phone.trim()}`);
  }
  if (data.sector?.trim()) {
    parts.push(`- ${labels.sector}: ${data.sector.trim()}`);
  }
  if (data.branchCount?.trim()) {
    parts.push(`- ${labels.branchCount}: ${data.branchCount.trim()}`);
  }
  if (data.notes?.trim()) {
    parts.push(`- ${labels.notes}: ${data.notes.trim()}`);
  }

  parts.push(
    isArabic
      ? '\nيرجى تزويدي بالتفاصيل وتنسيق موعد مناسب للعرض.'
      : '\nPlease share the details and suggest a suitable time for the demo.',
  );

  const text = parts.join('\n');
  return `https://wa.me/${SALES_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function createQuickWhatsAppInquiryLink(topic: string, lang: Lang = 'ar'): string {
  const text =
    lang === 'ar'
      ? `السلام عليكم، أود الاستفسار بخصوص نظام REMO PRO ERP - موضوع الاستفسار: (${topic}).`
      : `Hello, I would like to ask about REMO PRO ERP - topic: (${topic}).`;

  return `https://wa.me/${SALES_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
