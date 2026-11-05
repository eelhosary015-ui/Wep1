/**
 * ملف الإعدادات والمعلومات العامة لمنصة REMO PRO
 * يمكنك تعديل أي معلومة هنا (أرقام الهواتف، الواتساب، البريد، العناوين، والنصوص)
 * وستتحدث تلقائياً في كامل صفحة الويب.
 */

export const SITE_CONFIG = {
  // 1. هوية النظام والشركة
  brand: {
    name: 'REMO PRO',
    tagline: 'منظومة ERP لإدارة الأعمال',
    headline: 'كل عمليات شركتك… في نظام واحد',
    description: 'يساعد نظام REMO PRO على ربط المبيعات والمخزون والحسابات والموارد البشرية والتشغيل عبر منصة ERP سحابية واحدة، لمتابعة أوضح وتقارير تساعد الإدارة على اتخاذ قرارات دقيقة.',
  },

  // 2. قنوات التواصل وخدمة العملاء
  contact: {
    whatsappNumber: '201515462749', // الرقم بصيغة دولية بدون أصفار أو علامة + لرابط واتساب
    whatsappDisplay: '+20 151 546 2749', // الرقم كما يظهر للزوار في الصفحة
    phone: '+20 151 546 2749',
    email: 'remo.pro12@gmail.com',
    salesEmail: 'remo.pro12@gmail.com',
    address: 'القاهرة / الإسكندرية / الرياض - خدمة عملاء المنشآت والشركات',
    addressEn: 'Cairo / Alexandria / Riyadh — enterprise & corporate customer service',
    workingHours: 'يوميًا: 9:00 ص - 9:00 م (دعم فني واستشارات متواصلة)',
    workingHoursEn: 'Daily: 9:00 AM – 9:00 PM (technical support and ongoing consultation)',
  },

  // 3. روابط وإعدادات إضافية
  links: {
    demoRequestAnchor: '#contact',
    modulesAnchor: '#modules',
    sectorsAnchor: '#sectors',
    governanceAnchor: '#governance',
  }
};
