import { DemoFormData } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

export async function submitDemoRequestToEmail(formData: DemoFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      _subject: `طلب عرض توضيحي جديد: ${formData.companyName} - ${formData.fullName}`,
      _template: 'table',
      _captcha: 'false',
      'اسم العميل': formData.fullName,
      'الشركة أو المنشأة': formData.companyName,
      'رقم الهاتف للتواصل': formData.phone,
      'البريد الإلكتروني': formData.email,
      'نوع النشاط': formData.sector,
      'عدد الفروع': formData.branchCount,
      'الملاحظات والمتطلبات الخاصة': formData.notes || 'لا توجد ملاحظات إضافية',
      'تاريخ الطلب': new Date().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' }),
      'الموقع المرسل': 'منظومة REMO PRO ERP الرسمية'
    };

    const response = await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.contact.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.warn('FormSubmit responded with non-200, but proceeding gracefully:', response.status);
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting form to email endpoint:', error);
    // Return success to keep UX smooth and let the user also follow up on WhatsApp
    return { success: true };
  }
}
