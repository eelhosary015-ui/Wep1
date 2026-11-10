import type { Lang } from './types';

/**
 * جميع نصوص الموقع في مكان واحد.
 * النسخة العربية هي المصدر المرجعي، والنسخة الإنجليزية ملزمة بنفس الشكل
 * (أي حقل ناقص في الإنجليزية يُظهر خطأ في TypeScript).
 */
export const ar = {
  meta: {
    title: 'REMO PRO | نظام ERP متكامل لإدارة الأعمال',
    description:
      'منصة REMO PRO السحابية المتكاملة لربط العمليات والمبيعات والمخزون والإدارة المالية والموارد البشرية في نظام واحد متماسك.',
  },

  common: {
    currency: 'ر.س',
    brandTagline: 'منظومة ERP لإدارة الأعمال',
    brandSub: 'ERP System',
    langLabel: 'عربية',
    switchTo: 'English',
    switchTitle: 'تحويل الموقع إلى الإنجليزية',
  },

  nav: {
    links: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'ميزات النظام', href: '#modules' },
      { label: 'المدونات', href: '#challenges' },
      { label: 'الأسعار', href: '#contact' },
      { label: 'من نحن', href: '#sectors' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
    homeLabel: 'REMO PRO ERP - الصفحة الرئيسية',
    whatsapp: 'واتساب المبيعات',
    whatsappTitle: 'محادثة مباشرة عبر واتساب',
    cta: 'ابدأ تجربة مجانية الآن',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    mobileWhatsapp: 'محادثة فورية عبر واتساب',
    mobileCta: 'اطلب عرضًا توضيحيًا للنظام',
    whatsappTopic: 'استفسار من القائمة العلوية',
    whatsappMobileTopic: 'استفسار من الهاتف',
  },

  hero: {
    brandName: 'REMO PRO',
    brandAccent: 'ERP',
    subtitle: 'النظام المحاسبي والإداري الشامل',
    description:
      'حل متكامل لإدارة أعمالك بكفاءة واحترافية .. يلبي جميع احتياجات الشركات والمؤسسات من محاسبة ومخازن ومبيعات ومشتريات وموارد بشرية وغيرها الكثير.',
    features: [
      { id: 'support', title: 'دعم فني ممتاز', subtitle: 'على مدار الساعة' },
      { id: 'cloud', title: 'متاح على السحابة', subtitle: 'ومن أي مكان' },
      { id: 'shield', title: 'أمان وموثوقية', subtitle: 'على أعلى مستوى' },
      { id: 'speed', title: 'أداء فائق', subtitle: 'وسرعة عالية' },
    ],
    ctaPrimary: 'ابدأ رحلتك مع REMO PRO الآن',
    handwriting: 'إدارة أذكى .. لنجاح أكبر',
    imageAlt:
      'مكتب حديث يعرض لوحات تحكم نظام REMO PRO ERP على الحاسب المحمول والتابلت والهاتف',
  },

  challenges: {
    eyebrow: 'التحديات والحلول التشغيلية',
    title: 'من الجزر المنعزلة… إلى الإدارة المتكاملة',
    desc: 'تواجه المنشآت النامية عقبات تشغيلية عند الاعتماد على حلول متفرقة. صُمم نظام REMO PRO ليجمع أعمالك في بيئة واحدة متناسقة ومنضبطة.',
    problemsTitle: 'واقع العمل بالأنظمة المنفصلة',
    problemsSubtitle: 'صعوبات شائعة تعيق سلاسة العمل اليومي',
    problems: [
      {
        title: 'تشتت البيانات بين برامج منفصلة',
        desc: 'استخدام برنامج للمبيعات وآخر للمستودعات وملفات إكسل للحسابات والرواتب، مما يصعّب الحصول على صورة متكاملة لحالة المنشأة.',
      },
      {
        title: 'تكرار الإدخال اليدوي واحتمالية الخطأ',
        desc: 'إعادة إدخال فواتير المبيعات أو استلامات البضائع يدوياً في دفاتر الحسابات يؤدي إلى تأخر القيود وزيادة احتمالات عدم المطابقة.',
      },
      {
        title: 'تأخر التقارير التنفيذية عن وقت اتخاذ القرار',
        desc: 'انتظار أيام أو أسابيع لتجميع بيانات الفروع والأقسام في تقرير مالي أو مخزني واحد، مما يفوّت فرصة التعامل السريع مع المعوقات.',
      },
      {
        title: 'صعوبة الرقابة على الفروع المتعددة',
        desc: 'غياب الربط اللحظي بين الفروع والمستودع الرئيسي يجعل تتبع حركات التحويل الداخلي وتوفر البضائع تحدياً تشغيلياً مستمراً.',
      },
    ],
    problemsFooter: 'النتيجة: استنزاف وقت الفريق في مطابقة الأرقام يدوياً بدلاً من تطوير الأعمال.',
    solutionsTitle: 'الحل الموحد مع REMO PRO',
    solutionsSubtitle: 'ربط العمليات والبيانات في منصة واحدة',
    solutions: [
      {
        title: 'منصة مركزية واحدة لكل الإدارات',
        desc: 'توحيد المبيعات والمخازن والمالية والموارد البشرية في قاعدة بيانات مشتركة تتصل بجميع الفروع دون جزر معلوماتية معزولة.',
      },
      {
        title: 'تدفق آلي للحركات والقيود المحاسبية',
        desc: 'كل عملية بيع، شراء، صرف مخزني، أو اعتماد مسير رواتب تنشئ قيدها المالي تلقائياً وتحدث الأرصدة المرتبطة بها فوراً.',
      },
      {
        title: 'تقارير فورية ولوحات متابعة إدارية',
        desc: 'إتاحة مؤشرات أداء محدثة باستمرار تتيح للإدارة المالية والتنفيذية متابعة الإيرادات والمصروفات والأرصدة دون انتظار تجميع يدوي.',
      },
      {
        title: 'إشراف موحد مع ضبط الصلاحيات',
        desc: 'إدارة مركزية لجميع الفروع مع تحديد صلاحيات دقيقة للمستخدمين وسلاسل موافقات تحفظ خصوصية العمليات وانضباطها.',
      },
    ],
    solutionsFooter: 'الهدف: رؤية أوضح للإدارة وسلاسة في تنفيذ العمليات اليومية وتدفق البيانات.',
  },

  modules: {
    eyebrow: 'منظومة متكاملة.. مصممة لتناسب كل الأعمال',
    title: 'نظام REMO PRO ERP - الحل الإداري والمحاسبي الشامل',
    desc: 'نظام REMO PRO ERP هو الحل الإداري والمحاسبي الشامل الذي يضع السيطرة الكاملة بين يديك. صُمم النظام بمرونة فائقة ليربط جميع الإدارات والأقسام في منصة واحدة، مما يجعله الخيار الأمثل لمختلف الأنشطة التجارية. سواء كنت تدير محلاً تجارياً، أو تبحث عن تنظيم دقيق للمطاعم والكافيهات، أو تحتاج إلى نظام احترافي لإدارة الاشتراكات في الجيم والنوادي الرياضية؛ فإن نظامنا يتكيف مع طبيعة عملك ليضمن لك إدارة سلسة، نمواً مستمراً، وأداءً فائقاً.',
    highlightNotice:
      'نظام REMO PRO ERP هو الحل الإداري والمحاسبي الشامل الذي يضع السيطرة الكاملة بين يديك. صُمم النظام بمرونة فائقة ليربط جميع الإدارات والأقسام في منصة واحدة، مما يجعله الخيار الأمثل لمختلف الأنشطة التجارية. سواء كنت تدير محلاً تجارياً، أو تبحث عن تنظيم دقيق للمطاعم والكافيهات، أو تحتاج إلى نظام احترافي لإدارة الاشتراكات في الجيم والنوادي الرياضية؛ فإن نظامنا يتكيف مع طبيعة عملك ليضمن لك إدارة سلسة، نمواً مستمراً، وأداءً فائقاً.',
    noticeTitle: 'مرونة فائقة لمختلف الأنشطة:',
    noticeBody:
      'سواء كنت تدير محلاً تجارياً، أو مطعماً وكافيه، أو نادياً رياضياً وجيم، أو مصنعاً وشركة متعددة الفروع؛ يتكيف النظام بالكامل ليلبي تفاصيل عملك بدقة واحترافية.',
    searchPlaceholder: 'ابحث عن موديول أو ميزة (مثل: نقاط البيع، الاشتراكات، الحسابات، المخازن)...',
    clear: 'مسح',
    coreBadge: 'REMO CORE',
    emptyPrefix: 'لم يتم العثور على موديولات تطابق بحثك: ',
    reset: 'إعادة تعيين البحث',
    showLess: 'عرض أقل',
    moreDetails: 'تفاصيل إضافية',
    askDiscussion: 'طلب مناقشة',
    tapHint: 'اضغط على أي موديول لعرض تفاصيله ومزاياه التشغيلية.',
    featuresLabel: 'أهم المزايا والوظائف',
    close: 'إغلاق',
    bottomQuestion: 'هل ترغب في تهيئة نظام REMO PRO لمجال نشاطك التجاري تحديداً؟',
    bottomCta: 'اطلب استشارة مجانية وعرضاً توضيحياً مخصصاً لنشاطك',
  },

  integration: {
    eyebrow: 'التكامل والتوافق البيني',
    title: 'كيف تترابط إداراتك عبر REMO PRO؟',
    desc: 'الهدف الأساسي من المنظومة هو منع الازدواجية وتمرير البيانات آلياً بين المبيعات، المخازن، المالية، والرواتب دون الحاجة لتدخل يدوي متكرر.',
    diagramLabel: 'المخطط الهندسي لتدفق البيانات الموحدة',
    diagramTitle: 'قاعدة بيانات مركزية واحدة تدير كل الإجراءات',
    coreTitle: 'REMO PRO ERP',
    coreDesc: 'محرك المعالجة المركزية وقاعدة البيانات الموحدة',
    nodes: [
      'المبيعات ونقاط البيع',
      'المشتريات والتوريد',
      'المستودعات والأرصدة',
      'الخزينة والمصارف',
      'الحسابات العامة والقيود',
      'الموارد البشرية والرواتب',
      'التقارير ولوحات الإدارة',
    ],
    strip: 'تحديث فوري للقيد المحاسبي · خصم فوري للأرصدة المخزنية · تقارير مركزية لحظية',
    simTitle: 'محاكي أثر العمليات اليومية عبر الإدارات',
    simDesc: 'اختر عملية يومية لتشاهد كيف تنعكس تلقائياً على باقي إدارات المنشأة دون عمل يدوي:',
    triggerPrefix: 'الإدارة البادئة بالعملية:',
    codePrefix: 'كود المحاكاة:',
  },

  sectors: {
    eyebrow: 'القطاعات والأنشطة الاقتصادية',
    title: 'مصمم ليتوافق مع طبيعة نشاطك التجاري',
    desc: 'توفر منصة REMO PRO مرونة في إعداد دورات العمل والمصطلحات والتقارير لتلائم متطلبات قطاعات التجارة، التصنيع، الضيافة، المطاعم، العقارات، والمجموعات متعددة الفروع.',
    featuresLabel: 'أبرز ما يقدمه النظام للقطاع:',
    ctaPrefix: 'استفسر عن حلول',
    note: 'يقوم فريق استشارات النظم بدراسة هيكل عملياتك واقتراح دورة العمل والتهيئة الملائمة دون فرض خصائص غير مستخدمة.',
  },

  reporting: {
    eyebrow: 'التقارير ولوحات المتابعة',
    title: 'بيانات واضحة تساعد الإدارة على اتخاذ القرار',
    desc: 'يتضمن REMO PRO حزمة واسعة من التقارير التفصيلية والإجمالية التي تحول الأرقام اليومية إلى معلومات واضحة أمام المديرين التنفيذيين والماليين.',
    reports: [
      {
        title: 'تقارير مالية وقوائم ختامية',
        desc: 'ميزان مراجعة محدث، قائمة الدخل والأرباح والخسائر، الميزانية العمومية، وكشوف التدفقات النقدية الدورية.',
      },
      {
        title: 'تحليلات المبيعات ونقاط البيع',
        desc: 'متابعة أداء الفروع، أكثر الأصناف مبيعاً وربحية، أداء مناديب المبيعات، ومعدلات نمو الإيراد.',
      },
      {
        title: 'مراقبة المخزون والتكلفة',
        desc: 'تقارير تقييم المخزون، أعمار الأصناف، البضائع بطيئة الحركة، ونسب الهدر وتكاليف التشغيل الفعلية.',
      },
      {
        title: 'مؤشرات الفروع الموحدة',
        desc: 'شاشة إدارية مجمعة تعرض إجمالي نشاط جميع الفروع مع إمكانية التصفية والمقارنة بين أداء كل موقع.',
      },
    ],
    exportLabel: 'تصدير إلى Excel و PDF',
    securityEyebrow: 'الأمان والحوكمة والرقابة الداخلية',
    securityTitle: 'تنظيم الوصول ومتابعة الإجراءات بصرامة',
    securityDesc: 'أدوات مدروسة لإدارة الصلاحيات وسجلات المراجعة وسلاسل الموافقات لضمان انضباط العمليات وحماية سرية بيانات المنشأة.',
    security: [
      {
        title: 'إدارة صلاحيات المستخدمين والأدوار (RBAC)',
        desc: 'تحديد دقيق لصلاحيات كل مستخدم بحسب وظيفته (إدخال، تعديل، حذف، طباعة، أو اعتماد فقط) مع تقييد الوصول لشاشات أو فروع محددة.',
      },
      {
        title: 'سجل تدقيق ومراجعة شامل (Audit Trail)',
        desc: 'توثيق آلي لكل حركة أو تعديل يتم على النظام متضمناً اسم المستخدم، وقت الإجراء، والقيم السابقة والجديدة لضمان الشفافية ومتابعة المسؤوليات.',
      },
      {
        title: 'سلاسل اعتماد وموافقات إلكترونية مرنة',
        desc: 'تصميم مسارات موافقة متسلسلة للعمليات الحساسة (مثل أوامر الشراء الكبيرة، الصرف النقدي، أو الخصومات الخاصة) قبل اعتمادها المالي.',
      },
      {
        title: 'عزل وحماية بيانات المنشأة',
        desc: 'حفظ منظم للبيانات في بيئة سحابية آمنة مع إجراء نسخ احتياطي دوري وإمكانية تصدير واسترجاع البيانات بصيغ قياسية.',
      },
    ],
    reassurance:
      'تخضع جميع العمليات والصلاحيات لإشراف مسؤول النظام المفوّض من قبل إدارة الشركة، مع إمكانية تعديل مستويات الوصول في أي وقت.',
  },

  contact: {
    eyebrow: 'طلب عرض توضيحي مباشر',
    title: 'تعرّف على REMO PRO بما يناسب طبيعة عملك',
    desc: 'اطلب عرضًا توضيحيًا لمناقشة الموديولات المناسبة لنشاطك، واستعراض شاشات النظام وتقاريره مع مختص الحلول.',
    quickTitle: 'تفضل التواصل السريع والمباشر عبر واتساب؟',
    quickDesc: 'يمكنك مراسلة فريق استشارات النظم مباشرة على الرقم:',
    quickCta: 'فتح محادثة واتساب',
    quickTopic: 'طلب استفسار سريع عن موديولات REMO PRO',
    labels: {
      fullName: 'الاسم الكامل',
      company: 'اسم الشركة أو المنشأة',
      phone: 'رقم الهاتف / الجوال',
      email: 'البريد الإلكتروني للعمل',
      sector: 'نوع النشاط التجاري / القطاع',
      branches: 'عدد الفروع أو مواقع التشغيل',
      notes: 'متطلبات خاصة أو استفسارات تود مناقشتها في العرض (اختياري)',
    },
    placeholders: {
      fullName: 'مثال: عبد الله السالم',
      company: 'مثال: شركة الأفق للتجارة والصناعة',
      phone: 'مثال: 0501234567',
      email: 'name@company.com',
      notes: 'مثال: نود التركيز على ربط 4 مستودعات، ودورة إهلاك الأصول الثابتة، والربط مع نقاط البيع...',
    },
    sectorOptions: [
      'تجارة وتوزيع',
      'تصنيع وإنتاج صناعي',
      'مطاعم وكافيهات وإعاشة',
      'فنادق وخدمات ضيافة',
      'عقارات وإدارة أملاك',
      'شركات ومجموعات متعددة الفروع',
      'نشاط تجاري أو خدمي آخر',
    ],
    branchOptions: [
      'فرع واحد (مركز رئيسي)',
      '2 إلى 5 فروع',
      '6 إلى 15 فرعاً',
      'أكثر من 15 فرعاً',
    ],
    replyNote: 'يتم الرد والتواصل خلال ساعات العمل الرسمية لتنسيق العرض.',
    whatsappSend: 'إرسال الطلب عبر واتساب',
    submit: 'إرسال عبر الموقع',
    submitting: 'جاري إرسال الطلب...',
    successTitle: 'تم استلام طلبك وإرساله لإدارة المبيعات بنجاح',
    successBody:
      'شكرًا لك أستاذ {name}. تم توجيه بيانات المنشأة ({company}) تلقائياً إلى بريد المبيعات الرسمي {email}، وسيقوم مستشار الحلول بالتواصل معك عبر الهاتف {phone} لتحديد موعد العرض.',
    successWhatsapp: 'متابعة تفاصيل الطلب مع المبيعات على واتساب',
    successReset: 'إرسال طلب استفسار لمنشأة أخرى',
    errors: {
      name: 'يرجى إدخال الاسم الكريم.',
      company: 'يرجى إدخال اسم الشركة أو المنشأة.',
      phone: 'يرجى إدخال رقم هاتف صالح للتواصل.',
      email: 'يرجى إدخال بريد إلكتروني صحيح.',
    },
  },

  footer: {
    about:
      'نظام متكامل لتخطيط وإدارة موارد المنشآت (ERP). يربط العمليات والمبيعات والمخزون والإدارة المالية والموارد البشرية في منصة موحدة، لتمكين الإدارة من متابعة أعمالها وتقاريرها بدقة.',
    slogan: 'شعارنا: «إدارتك كلها في مكان واحد»',
    cloudNote: 'نظام سحابي مرن يدعم المنشآت النامية والشركات متعددة الفروع.',
    modulesTitle: 'موديولات النظام',
    moduleLinks: [
      'الإدارة المالية والمحاسبة',
      'المبيعات ونقاط البيع POS',
      'المشتريات والمستودعات',
      'الموارد البشرية والرواتب',
      'التشغيل والتصنيع (BOM)',
      'المطاعم والفنادق والعقارات',
    ],
    sectorsTitle: 'القطاعات المدعومة',
    sectorLinks: [
      'التجارة والتوزيع وسلاسل الإمداد',
      'المصانع والمنشآت الصناعية',
      'المطاعم والكافيهات والإعاشة',
      'الفنادق ومرافق الضيافة',
      'العقارات وإدارة الأملاك',
      'المجموعات متعددة الفروع',
    ],
    contactTitle: 'بيانات التواصل الرسمية',
    whatsappSales: 'واتساب مبيعات',
    quickWhatsapp: 'محادثة واتساب سريعة',
    ctaDemo: 'طلب جلسة تجريبية',
    whatsappTopic: 'استفسار من تذييل الموقع',
    whatsappCtaTopic: 'طلب استفسار عبر واتساب من أسفل الصفحة',
    copyright: 'جميع الحقوق محفوظة © {year} نظام REMO PRO ERP.',
    privacy: 'سياسة الخصوصية وحوكمة البيانات',
    security: 'الأمان والصلاحيات',
    contactSales: 'التواصل مع المبيعات',
    replayIntro: 'إعادة تشغيل المقدمة',
  },

  demoModal: {
    close: 'إغلاق النافذة',
    closeBtn: 'إغلاق النافذة',
    eyebrow: 'جلسة استعراض حية مخصصة',
    title: 'طلب عرض توضيحي لنظام REMO PRO',
    desc: 'املأ النموذج وسيقوم فريق المبيعات بالتواصل لتنسيق موعد العرض وشرح الموديولات المناسبة لنشاطك.',
    labels: {
      fullName: 'الاسم الكريم',
      company: 'اسم الشركة أو المنشأة',
      phone: 'رقم الهاتف / الجوال',
      email: 'البريد الإلكتروني للعمل',
      sector: 'نوع النشاط التجاري',
      branches: 'عدد الفروع التقديري',
      notes: 'استفسار أو متطلبات محددة',
    },
    placeholders: {
      fullName: 'مثال: عبد الله السالم',
      company: 'مثال: مجموعة الرواد للتجارة',
      phone: '05xxxxxxxx',
      email: 'name@company.com',
      notes: 'اكتب أي ملاحظة عن هيكل حساباتكم أو متطلبات العمل...',
    },
    sectorOptions: [
      'تجارة وتوزيع',
      'تصنيع وإنتاج صناعي',
      'مطاعم وكافيهات وإعاشة',
      'فنادق وخدمات ضيافة',
      'عقارات وإدارة أملاك',
      'شركات متعددة الفروع',
      'نشاط آخر',
    ],
    branchOptions: [
      'فرع واحد (مركز رئيسي)',
      '2 إلى 5 فروع',
      '6 إلى 15 فرعاً',
      'أكثر من 15 فرعاً',
    ],
    privacyNote: 'بياناتك محمية وتُستخدم للتواصل المهني فقط.',
    whatsappSend: 'إرسال عبر واتساب',
    submit: 'إرسال بالنموذج',
    submitting: 'جاري الإرسال...',
    successTitle: 'تم استلام طلب العرض وإرساله لبريد المبيعات',
    successBody:
      'شكرًا لاهتمامك بنظام REMO PRO. تم إرسال تفاصيل منشأة ({company}) تلقائياً إلى بريدنا الرسمي {email}، وسيتواصل معك مستشار النظم لمناقشة موديولات ({sector}) وتحديد موعد الجلسة.',
    successWhatsapp: 'متابعة تفاصيل الطلب على واتساب',
    errors: {
      name: 'يرجى إدخال الاسم الكريم.',
      company: 'يرجى إدخال اسم المنشأة.',
      phone: 'يرجى إدخال رقم هاتف صحيح للتواصل.',
      email: 'يرجى إدخال بريد إلكتروني صحيح.',
    },
  },

  privacy: {
    close: 'إغلاق',
    title: 'سياسة الخصوصية وحوكمة البيانات',
    subtitle: 'نظام REMO PRO لإدارة الأعمال المؤسسية',
    sections: [
      {
        heading: '1. سرية بيانات المنشأة',
        body: 'تعتبر جميع البيانات المالية والمخزونية وسجلات الموظفين والعملاء التي يتم إدخالها في نظام REMO PRO ملكية حصرية وخاصة للمنشأة المشتركة، ولا يحق لأي طرف ثالث الاطلاع عليها أو استخدامها بأي شكل.',
      },
      {
        heading: '2. أمن الخوادم والنسخ الاحتياطي',
        body: 'تُحفظ البيانات في بيئات استضافة سحابية ذات معايير أمان عالية مع إجراء نسخ احتياطي دوري مشفر لحماية سجلات الشركة من الفقدان أو التلف الطارئ.',
      },
      {
        heading: '3. بيانات التواصل وطلب العروض',
        body: 'تُستخدم بيانات التواصل التي يقدمها الزائر في نماذج طلب العرض التوضيحي حصرًا للتواصل المهني ومتابعة استفساراته المتعلقة بالنظام، ولا يتم مشاركتها أو بيعها لأي جهات تسويقية خارجية.',
      },
      {
        heading: '4. سجلات التدقيق الداخلي (Audit Log)',
        body: 'يحتفظ النظام بسجل داخلي لعمليات تسجيل الدخول وتعديل القيود والبيانات لتمكين إدارة المنشأة من مراجعة وضبط الإجراءات الداخلية لمستخدميها.',
      },
    ],
  },

  dashboard: {
    version: 'REMO PRO ERP Enterprise v6.2',
    demoBadge: 'بيئة استعراضية تجريبية للواجهة',
    branches: [
      'الفرع الرئيسي - الرياض',
      'المستودع المركزي - جدة',
      'فرع التوزيع - الدمام',
      'مجمع التصنيع - المدينة الصناعية',
    ],
    tabs: ['نظرة عامة على المنشأة', 'المالية والقيود', 'حركات المستودعات', 'المبيعات والعملاء'],
    rangeLabel: 'نطاق العرض:',
    ranges: ['شهري', 'ربعي'],
    kpis: [
      { label: 'صافي مبيعات الفرع', value: '2,410,500', unit: 'ر.س', note: 'مطابق لدفتر المبيعات المعتمد' },
      { label: 'السيولة النقدية والمصارف', value: '1,840,200', unit: 'ر.س', note: 'عبر 4 حسابات وخزائن فرعية' },
      { label: 'قيمة المخزون المقيم', value: '3,190,000', unit: 'ر.س', note: 'متوسط مرجح لـ 8,420 صنف' },
      { label: 'سلاسل الموافقات المعلقة', value: '7', unit: 'طلبات اعتماد', note: 'أوامر شراء وصرف نقدية' },
    ],
    chartTitles: [
      'حركة الإيرادات والإنفاق التشغيلي',
      'معدلات التدفق النقدي والالتزامات',
      'حجم الوارد والمنصرف المخزني',
      'توزيع المبيعات الأسبوعية',
    ],
    chartSubtitleSuffix: 'مؤشرات استرشادية لمتابعة حركة العمليات',
    legendSales: 'المبيعات والإيراد',
    legendExpenses: 'المصروفات والتكلفة',
    weeks: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'],
    chartFooterLeft: 'جميع المؤشرات تتحدث تلقائياً مع تسجيل القيود اليومية',
    chartFooterRight: 'التحديث الأخير: لحظي',
    ledgerTitle: 'سجل التكامل المتبادل',
    ledgerBadge: 'ترابط تلقائي',
    ledgerDesc: 'يوضح كيف تؤثر كل حركة تشغيلية تلقائياً على المحاسبة والمستودعات والتقارير:',
    events: [
      {
        title: 'فاتورة مبيعات معتمدة #INV-2026-904',
        dept: 'المبيعات والحسابات',
        action: 'توليد قيد يومية آلي + خصم 14 صنف من مستودع جدة',
        time: 'منذ 8 دقائق',
        status: 'مكتمل ومرحل',
        amount: '+48,500 ر.س',
      },
      {
        title: 'إذن استلام بضائع فحص جودة #PO-4091',
        dept: 'المشتريات والمخزن',
        action: 'إضافة 120 كرتون خامات واعتماد سند إدخال مخزني',
        time: 'منذ 24 دقيقة',
        status: 'تم الفحص',
        amount: 'رصيد مخزني',
      },
      {
        title: 'أمر تحويل بضاعة بين الفروع #TR-104',
        dept: 'المستودعات',
        action: 'تحويل 45 كرتون من الرياض إلى الدمام (قيد بضاعة بالطريق)',
        time: 'منذ 45 دقيقة',
        status: 'قيد الشحن',
        amount: 'تحويل داخلي',
      },
      {
        title: 'سند قبض بنكي #RCP-7712',
        dept: 'الخزينة والعملاء',
        action: 'إثبات تحصيل دفعة عميل آجل وتحديث حد الائتمان',
        time: 'منذ ساعة',
        status: 'مسوّى بنكياً',
        amount: '+125,000 ر.س',
      },
    ],
    statusDb: 'قاعدة البيانات المركزية متزامنة',
    statusRole: 'صلاحيات المستخدم: مدير النظام العام (Admin)',
    statusBrand: 'REMO PRO ERP Solution · ترابط شامل للإدارات',
  },

  intro: {
    skip: 'تخطي المقدمة',
    play: 'تشغيل المقدمة',
    skipHint: 'اضغط للتخطي',
    welcome: 'مرحبًا بك في REMO PRO',
    tagline: 'منظومة ERP واحدة… لكل عمليات شركتك',
    entering: 'جارٍ الدخول إلى الموقع',
    loading: 'جارٍ تحضير التجربة',
    replay: 'إعادة تشغيل المقدمة',
    brandLine: 'ERP · Business Management Suite',
  },
};

export type Copy = typeof ar;

export const en: Copy = {
  meta: {
    title: 'REMO PRO | Integrated ERP for Business Management',
    description:
      'REMO PRO is a unified cloud ERP platform connecting operations, sales, inventory, finance and HR in one coherent system.',
  },

  common: {
    currency: 'SAR',
    brandTagline: 'Integrated Business ERP Suite',
    brandSub: 'ERP System',
    langLabel: 'English',
    switchTo: 'العربية',
    switchTitle: 'Switch the site to Arabic',
  },

  nav: {
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'System features', href: '#modules' },
      { label: 'Blog', href: '#challenges' },
      { label: 'Pricing', href: '#contact' },
      { label: 'About us', href: '#sectors' },
      { label: 'Contact us', href: '#contact' },
    ],
    homeLabel: 'REMO PRO ERP - Home',
    whatsapp: 'Sales WhatsApp',
    whatsappTitle: 'Chat with us on WhatsApp',
    cta: 'Start a free trial now',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mobileWhatsapp: 'Chat instantly on WhatsApp',
    mobileCta: 'Request a system demo',
    whatsappTopic: 'Enquiry from the top navigation',
    whatsappMobileTopic: 'Enquiry from mobile',
  },

  hero: {
    brandName: 'REMO PRO',
    brandAccent: 'ERP',
    subtitle: 'The complete accounting & management system',
    description:
      'A fully integrated solution to run your business efficiently and professionally — covering accounting, inventory, sales, purchasing, HR and much more for companies and institutions of every size.',
    features: [
      { id: 'support', title: 'Excellent technical support', subtitle: 'around the clock' },
      { id: 'cloud', title: 'Available on the cloud', subtitle: 'from anywhere' },
      { id: 'shield', title: 'Security & reliability', subtitle: 'at the highest level' },
      { id: 'speed', title: 'Outstanding performance', subtitle: 'and high speed' },
    ],
    ctaPrimary: 'Start your journey with REMO PRO now',
    handwriting: '',
    imageAlt:
      'A modern office desk showing REMO PRO ERP dashboards on a laptop, a tablet and a phone',
  },

  challenges: {
    eyebrow: 'Operational challenges & solutions',
    title: 'From isolated islands… to fully integrated management',
    desc: 'Growing businesses hit operational friction when they rely on disconnected tools. REMO PRO was designed to bring your work into one coherent, controlled environment.',
    problemsTitle: 'Running on disconnected systems',
    problemsSubtitle: 'Common pain points that slow daily work down',
    problems: [
      {
        title: 'Data scattered across separate applications',
        desc: 'One tool for sales, another for the warehouse, and spreadsheets for accounting and payroll — making a complete picture of the business almost impossible.',
      },
      {
        title: 'Repeated manual entry and avoidable errors',
        desc: 'Retyping sales invoices or goods receipts into the books delays journal entries and increases the chance of mismatches.',
      },
      {
        title: 'Executive reports arrive after the decision is due',
        desc: 'Waiting days or weeks to consolidate branch and department data into one financial or stock report costs you the chance to react quickly.',
      },
      {
        title: 'Hard to control multiple branches',
        desc: 'Without live links between branches and the main warehouse, tracking internal transfers and stock availability becomes a continuous operational challenge.',
      },
    ],
    problemsFooter: 'The result: the team spends its time reconciling numbers by hand instead of growing the business.',
    solutionsTitle: 'The unified answer with REMO PRO',
    solutionsSubtitle: 'Operations and data connected on one platform',
    solutions: [
      {
        title: 'One central platform for every department',
        desc: 'Sales, inventory, finance and HR share a single database connected to every branch — no isolated information silos.',
      },
      {
        title: 'Automated movement and accounting flow',
        desc: 'Every sale, purchase, stock issue or approved payroll run creates its financial entry automatically and updates the related balances instantly.',
      },
      {
        title: 'Real-time reports and management dashboards',
        desc: 'Continuously updated KPIs let finance and executive management follow revenue, expenses and balances without waiting for manual consolidation.',
      },
      {
        title: 'Unified oversight with precise permissions',
        desc: 'Central management of all branches with role-based permissions and approval chains that protect confidentiality and discipline.',
      },
    ],
    solutionsFooter: 'The goal: clearer management visibility, smoother daily execution and reliable data flow.',
  },

  modules: {
    eyebrow: 'An integrated system.. tailored for every business',
    title: 'REMO PRO ERP - Complete Management & Accounting Solution',
    desc: 'REMO PRO ERP is the comprehensive management and accounting solution that puts complete control in your hands. Designed with extreme flexibility to connect all departments on a single platform, making it the ideal choice for diverse businesses—whether retail stores, restaurants & cafes, or gym & sports club memberships.',
    highlightNotice:
      'REMO PRO ERP is the comprehensive management and accounting solution that puts complete control in your hands. Designed with extreme flexibility to connect all departments on a single platform, making it the ideal choice for diverse commercial activities.',
    noticeTitle: 'High flexibility across industries:',
    noticeBody:
      'Whether you run retail stores, restaurants & cafes, sports clubs & gyms, or multi-branch factories; the platform adapts to your operations with precision and ease.',
    searchPlaceholder: 'Search modules or features (POS, subscriptions, journals, payroll)...',
    clear: 'Clear',
    coreBadge: 'REMO CORE',
    emptyPrefix: 'No modules matched your search: ',
    reset: 'Reset search',
    showLess: 'Show less',
    moreDetails: 'More details',
    askDiscussion: 'Discuss this',
    tapHint: 'Tap any module to see its details and features.',
    featuresLabel: 'Key features',
    close: 'Close',
    bottomQuestion: 'Need a tailored setup matching your exact industry and business model?',
    bottomCta: 'Talk to our solutions team to scope the right modules',
  },

  integration: {
    eyebrow: 'Integration & interoperability',
    title: 'How do your departments connect through REMO PRO?',
    desc: 'The core purpose of the platform is to eliminate duplication and pass data automatically between sales, stores, finance and payroll — without repeated manual work.',
    diagramLabel: 'Architecture of the unified data flow',
    diagramTitle: 'One central database running every process',
    coreTitle: 'REMO PRO ERP',
    coreDesc: 'Central processing engine and unified database',
    nodes: [
      'Sales & POS',
      'Procurement & supply',
      'Warehouses & balances',
      'Treasury & banks',
      'General ledger & entries',
      'HR & payroll',
      'Reports & dashboards',
    ],
    strip: 'Instant journal entry · Instant stock deduction · Live consolidated reporting',
    simTitle: 'Daily transaction impact simulator',
    simDesc: 'Pick a daily transaction to see how it automatically affects the rest of the organisation:',
    triggerPrefix: 'Originating department:',
    codePrefix: 'Simulation code:',
  },

  sectors: {
    eyebrow: 'Sectors & industries',
    title: 'Built to match the nature of your business',
    desc: 'REMO PRO adapts workflows, terminology and reports to the requirements of trade, manufacturing, hospitality, restaurants, real estate and multi-branch groups.',
    featuresLabel: 'What the system delivers for this sector:',
    ctaPrefix: 'Ask about solutions for',
    note: 'Our systems consultants study your operating model and propose the right workflow and configuration — without forcing features you will never use.',
  },

  reporting: {
    eyebrow: 'Reporting & dashboards',
    title: 'Clear data that supports management decisions',
    desc: 'REMO PRO includes a broad set of detailed and consolidated reports that turn daily numbers into clear information for executive and financial managers.',
    reports: [
      {
        title: 'Financial reports & closing statements',
        desc: 'Up-to-date trial balance, income statement, balance sheet and periodic cash-flow statements.',
      },
      {
        title: 'Sales & point-of-sale analytics',
        desc: 'Branch performance, best-selling and most profitable items, sales rep performance and revenue growth rates.',
      },
      {
        title: 'Inventory & cost control',
        desc: 'Stock valuation, item ageing, slow-moving goods, waste ratios and actual operating costs.',
      },
      {
        title: 'Consolidated branch KPIs',
        desc: 'A single management screen showing total activity across all branches, with filtering and site-by-site comparison.',
      },
    ],
    exportLabel: 'Export to Excel and PDF',
    securityEyebrow: 'Security, governance & internal control',
    securityTitle: 'Strictly governed access and traceable actions',
    securityDesc: 'Purpose-built tools for permissions, audit logs and approval chains that keep operations disciplined and company data confidential.',
    security: [
      {
        title: 'User and role-based access control (RBAC)',
        desc: 'Precise permissions per user and role (create, edit, delete, print or approve only), with access restricted to specific screens or branches.',
      },
      {
        title: 'Comprehensive audit trail',
        desc: 'Every transaction or change is logged automatically with user name, timestamp and previous/new values for full transparency and accountability.',
      },
      {
        title: 'Flexible electronic approval chains',
        desc: 'Design sequential approval routes for sensitive transactions (large purchase orders, cash payments, special discounts) before they are posted.',
      },
      {
        title: 'Company data isolation & protection',
        desc: 'Organised storage in a secure cloud environment with scheduled encrypted backups and standard-format export and restore.',
      },
    ],
    reassurance:
      'All operations and permissions are supervised by the system administrator authorised by company management, and access levels can be adjusted at any time.',
  },

  contact: {
    eyebrow: 'Request a live demo',
    title: 'See REMO PRO shaped around your business',
    desc: 'Request a demo to discuss the modules that fit your activity and walk through the system screens and reports with a solutions specialist.',
    quickTitle: 'Prefer a quick, direct conversation on WhatsApp?',
    quickDesc: 'You can message our solutions team directly on:',
    quickCta: 'Open WhatsApp chat',
    quickTopic: 'Quick enquiry about REMO PRO modules',
    labels: {
      fullName: 'Full name',
      company: 'Company or organisation',
      phone: 'Phone / mobile number',
      email: 'Work email',
      sector: 'Industry / business sector',
      branches: 'Number of branches or operating sites',
      notes: 'Specific requirements or questions for the demo (optional)',
    },
    placeholders: {
      fullName: 'e.g. Abdullah Al Salem',
      company: 'e.g. Horizon Trading & Industry Co.',
      phone: 'e.g. 0501234567',
      email: 'name@company.com',
      notes: 'e.g. We would like to focus on linking 4 warehouses, the fixed-asset depreciation cycle and POS integration...',
    },
    sectorOptions: [
      'Trade & distribution',
      'Manufacturing & industrial production',
      'Restaurants, cafés & catering',
      'Hotels & hospitality',
      'Real estate & property management',
      'Companies & multi-branch groups',
      'Other commercial or service activity',
    ],
    branchOptions: [
      'One branch (head office)',
      '2 to 5 branches',
      '6 to 15 branches',
      'More than 15 branches',
    ],
    replyNote: 'We respond during official working hours to arrange the demo.',
    whatsappSend: 'Send request via WhatsApp',
    submit: 'Send via the website',
    submitting: 'Sending your request...',
    successTitle: 'Your request has been received by our sales team',
    successBody:
      'Thank you, {name}. The details for {company} were sent automatically to our official sales inbox {email}, and a solutions consultant will contact you on {phone} to arrange the demo.',
    successWhatsapp: 'Continue the request with sales on WhatsApp',
    successReset: 'Send a request for another company',
    errors: {
      name: 'Please enter your name.',
      company: 'Please enter the company or organisation name.',
      phone: 'Please enter a valid contact phone number.',
      email: 'Please enter a valid email address.',
    },
  },

  footer: {
    about:
      'An integrated enterprise resource planning (ERP) system that connects operations, sales, inventory, finance and HR on one platform, so management can follow the business and its reports with confidence.',
    slogan: 'Our promise: your entire business in one place.',
    cloudNote: 'A flexible cloud system built for growing businesses and multi-branch companies.',
    modulesTitle: 'System modules',
    moduleLinks: [
      'Finance & accounting',
      'Sales & point of sale (POS)',
      'Procurement & inventory',
      'HR & payroll',
      'Operations & manufacturing (BOM)',
      'Restaurants, hotels & real estate',
    ],
    sectorsTitle: 'Supported sectors',
    sectorLinks: [
      'Trade, distribution & supply chains',
      'Factories & industrial plants',
      'Restaurants, cafés & catering',
      'Hotels & hospitality facilities',
      'Real estate & property management',
      'Multi-branch groups',
    ],
    contactTitle: 'Official contact details',
    whatsappSales: 'Sales WhatsApp',
    quickWhatsapp: 'Quick WhatsApp chat',
    ctaDemo: 'Book a demo session',
    whatsappTopic: 'Enquiry from the site footer',
    whatsappCtaTopic: 'WhatsApp enquiry from the bottom of the page',
    copyright: 'All rights reserved © {year} REMO PRO ERP.',
    privacy: 'Privacy policy & data governance',
    security: 'Security & permissions',
    contactSales: 'Contact sales',
    replayIntro: 'Replay the intro',
  },

  demoModal: {
    close: 'Close dialog',
    closeBtn: 'Close',
    eyebrow: 'A tailored live walkthrough',
    title: 'Request a REMO PRO demo',
    desc: 'Fill in the form and our sales team will get in touch to schedule the demo and explain the modules that fit your business.',
    labels: {
      fullName: 'Your name',
      company: 'Company or organisation',
      phone: 'Phone / mobile',
      email: 'Work email',
      sector: 'Industry',
      branches: 'Estimated number of branches',
      notes: 'Questions or specific requirements',
    },
    placeholders: {
      fullName: 'e.g. Abdullah Al Salem',
      company: 'e.g. Al Rowad Trading Group',
      phone: '05xxxxxxxx',
      email: 'name@company.com',
      notes: 'Tell us about your chart of accounts or operating requirements...',
    },
    sectorOptions: [
      'Trade & distribution',
      'Manufacturing & industrial production',
      'Restaurants, cafés & catering',
      'Hotels & hospitality',
      'Real estate & property management',
      'Multi-branch companies',
      'Other activity',
    ],
    branchOptions: [
      'One branch (head office)',
      '2 to 5 branches',
      '6 to 15 branches',
      'More than 15 branches',
    ],
    privacyNote: 'Your data is protected and used for professional follow-up only.',
    whatsappSend: 'Send via WhatsApp',
    submit: 'Send the form',
    submitting: 'Sending...',
    successTitle: 'Your demo request has been sent to our sales inbox',
    successBody:
      'Thank you for your interest in REMO PRO. The details for {company} were sent automatically to our official inbox {email}, and a systems consultant will contact you to discuss your {sector} modules and schedule the session.',
    successWhatsapp: 'Continue the request on WhatsApp',
    errors: {
      name: 'Please enter your name.',
      company: 'Please enter the company name.',
      phone: 'Please enter a valid contact phone number.',
      email: 'Please enter a valid email address.',
    },
  },

  privacy: {
    close: 'Close',
    title: 'Privacy policy & data governance',
    subtitle: 'REMO PRO enterprise business management system',
    sections: [
      {
        heading: '1. Confidentiality of company data',
        body: 'All financial, inventory, employee and customer records entered into REMO PRO are the exclusive property of the subscribing organisation. No third party may access or use them in any form.',
      },
      {
        heading: '2. Server security & backups',
        body: 'Data is hosted in cloud environments with high security standards and protected by scheduled encrypted backups to guard company records against loss or accidental damage.',
      },
      {
        heading: '3. Contact details & demo requests',
        body: 'Contact details submitted through demo request forms are used strictly for professional follow-up on system enquiries and are never shared with or sold to external marketing parties.',
      },
      {
        heading: '4. Internal audit logs',
        body: 'The system keeps an internal log of sign-ins and changes to entries and data, enabling company management to review and control internal user activity.',
      },
    ],
  },

  dashboard: {
    version: 'REMO PRO ERP Enterprise v6.2',
    demoBadge: 'Illustrative demo environment',
    branches: [
      'Head office - Riyadh',
      'Central warehouse - Jeddah',
      'Distribution branch - Dammam',
      'Manufacturing complex - Industrial City',
    ],
    tabs: ['Company overview', 'Finance & entries', 'Warehouse movements', 'Sales & customers'],
    rangeLabel: 'View range:',
    ranges: ['Monthly', 'Quarterly'],
    kpis: [
      { label: 'Net branch sales', value: '2,410,500', unit: 'SAR', note: 'Reconciled with the approved sales ledger' },
      { label: 'Cash & bank liquidity', value: '1,840,200', unit: 'SAR', note: 'Across 4 accounts and sub-treasuries' },
      { label: 'Valued inventory', value: '3,190,000', unit: 'SAR', note: 'Weighted average across 8,420 items' },
      { label: 'Pending approval chains', value: '7', unit: 'approval requests', note: 'Purchase orders and cash payments' },
    ],
    chartTitles: [
      'Revenue and operating spend',
      'Cash-flow and liability trends',
      'Inbound and outbound stock volume',
      'Weekly sales distribution',
    ],
    chartSubtitleSuffix: 'indicative KPIs for following operational movement',
    legendSales: 'Sales & revenue',
    legendExpenses: 'Expenses & cost',
    weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    chartFooterLeft: 'All indicators update automatically as journal entries are posted',
    chartFooterRight: 'Last update: live',
    ledgerTitle: 'Cross-module integration log',
    ledgerBadge: 'Automatic sync',
    ledgerDesc: 'Shows how every operational transaction automatically affects accounting, inventory and reporting:',
    events: [
      {
        title: 'Sales invoice approved #INV-2026-904',
        dept: 'Sales & accounting',
        action: 'Automatic journal entry + 14 items deducted from the Jeddah warehouse',
        time: '8 minutes ago',
        status: 'Posted',
        amount: '+48,500 SAR',
      },
      {
        title: 'Goods receipt with QC #PO-4091',
        dept: 'Procurement & warehouse',
        action: '120 cartons of raw material added and stock-in document approved',
        time: '24 minutes ago',
        status: 'Inspected',
        amount: 'Stock balance',
      },
      {
        title: 'Inter-branch transfer order #TR-104',
        dept: 'Warehouses',
        action: '45 cartons moved from Riyadh to Dammam (goods in transit entry)',
        time: '45 minutes ago',
        status: 'In transit',
        amount: 'Internal transfer',
      },
      {
        title: 'Bank receipt voucher #RCP-7712',
        dept: 'Treasury & customers',
        action: 'Credit customer instalment collected and credit limit updated',
        time: '1 hour ago',
        status: 'Bank reconciled',
        amount: '+125,000 SAR',
      },
    ],
    statusDb: 'Central database in sync',
    statusRole: 'Signed in as: system administrator (Admin)',
    statusBrand: 'REMO PRO ERP Solution · Company-wide integration',
  },

  intro: {
    skip: 'Skip intro',
    play: 'Play the intro',
    skipHint: 'Tap to skip',
    welcome: 'Welcome to REMO PRO',
    tagline: 'One ERP suite… for every operation in your business',
    entering: 'Entering the site',
    loading: 'Preparing your experience',
    replay: 'Replay the intro',
    brandLine: 'ERP · Business Management Suite',
  },
};

export const COPY: Record<Lang, Copy> = { ar, en };
