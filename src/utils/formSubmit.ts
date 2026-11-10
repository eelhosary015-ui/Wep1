import { DemoFormData } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

/**
 * دالة مساعدة لإرسال إشعار فوري منسق إلى بوت التليجرام
 */
async function sendToTelegramBot(formData: DemoFormData): Promise<void> {
  const { botToken, targetChatId } = SITE_CONFIG.telegram;
  if (!botToken) return;

  try {
    const chatIds: string[] = [];

    // إذا كان هناك Chat ID محدد يدوياً نستخدمه
    if (targetChatId && targetChatId.trim()) {
      chatIds.push(targetChatId.trim());
    }

    // جلب المحادثات النشطة مع البوت تلقائياً عبر getUpdates (لكل من ضغط /start أو أضاف البوت لجروب)
    try {
      const updatesRes = await fetch(`https://api.telegram.org/bot${botToken}/getUpdates?limit=15`, {
        signal: AbortSignal.timeout(5000),
      });
      if (updatesRes.ok) {
        const data = await updatesRes.json();
        if (data.ok && Array.isArray(data.result)) {
          for (const item of data.result) {
            const chat = item?.message?.chat || item?.my_chat_member?.chat;
            if (chat?.id) {
              const idStr = String(chat.id);
              if (!chatIds.includes(idStr)) {
                chatIds.push(idStr);
              }
            }
          }
        }
      }
    } catch {
      // تجاهل إذا تعذر جلب التحديثات
    }

    if (chatIds.length === 0) {
      console.info('Telegram: لا يوجد Chat ID مسجل بعد. يرجى إرسال /start للبوت @' + SITE_CONFIG.telegram.botUsername);
      return;
    }

    const now = new Date().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' });

    // نص الرسالة منسق بأعلى احترافية مع رموز تعبيرية واضحة
    const text =
      `🚀 *طلب عرض توضيحي جديد — REMO PRO ERP*\n\n` +
      `👤 *اسم العميل:* ${formData.fullName}\n` +
      `🏢 *الشركة / المنشأة:* ${formData.companyName}\n` +
      `📞 *رقم الهاتف:* \`${formData.phone}\`\n` +
      `✉️ *البريد الإلكتروني:* \`${formData.email}\`\n` +
      `🏷️ *نوع النشاط:* ${formData.sector}\n` +
      `🏬 *عدد الفروع:* ${formData.branchCount}\n` +
      `📝 *المتطلبات الخاصة:* ${formData.notes?.trim() ? formData.notes.trim() : 'لا توجد ملاحظات إضافية'}\n\n` +
      `⏰ *وقت الطلب:* ${now}\n` +
      `🌐 *المصدر:* موقع REMO PRO ERP الرسمي`;

    // إرسال الإشعار لجميع الـ chat IDs المسجلة
    await Promise.all(
      chatIds.map(async (cid) => {
        try {
          await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: cid,
              text,
              parse_mode: 'Markdown',
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: '💬 تواصل عبر واتساب فوراً',
                      url: `https://wa.me/${formData.phone.replace(/[^0-9]/g, '')}`,
                    },
                  ],
                ],
              },
            }),
            signal: AbortSignal.timeout(6000),
          });
        } catch (e) {
          console.warn('Failed sending to chat:', cid, e);
        }
      })
    );
  } catch (err) {
    console.error('Telegram notification error:', err);
  }
}

export async function submitDemoRequestToEmail(formData: DemoFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. إرسال إشعار التليجرام الفوري للبوت
    const telegramPromise = sendToTelegramBot(formData);

    // 2. إرسال نسخة عبر الإيميل كنسخة احتياطية
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

    const emailPromise = fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.contact.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    await Promise.allSettled([telegramPromise, emailPromise]);

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: true };
  }
}

