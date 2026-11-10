import React, { useEffect, useMemo, useState } from 'react';
import { getModuleCategories, getModules } from '../data/erpData';
import { MODULE_SHORT_TITLES } from '../data/moduleShortTitles';
import {
  BookOpen,
  Landmark,
  PieChart,
  Receipt,
  FileText,
  CreditCard,
  Users,
  ShoppingBag,
  Boxes,
  ClipboardCheck,
  UserCheck,
  Award,
  Wallet,
  Factory,
  Wrench,
  Calculator,
  Utensils,
  Hotel,
  Building,
  GitBranch,
  Search,
  CheckCircle2,
  Info,
  X,
  ArrowLeft
} from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface ModulesSectionProps {
  onOpenDemo: (initialSector?: string) => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onOpenDemo }) => {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const copy = t.modules;
  const modules = useMemo(() => getModules(lang), [lang]);
  const categories = useMemo(() => getModuleCategories(lang), [lang]);
  const shortTitles = MODULE_SHORT_TITLES[lang];

  const selectedModule = useMemo(
    () => modules.find((module) => module.id === selectedModuleId) ?? null,
    [modules, selectedModuleId],
  );

  /* Lock scrolling and support Escape while the details dialog is open. */
  useEffect(() => {
    if (!selectedModuleId) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedModuleId(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedModuleId]);

  // Map icon string names to components (thin line icons, as in the reference grid)
  const renderIcon = (iconName: string, className = 'w-7 h-7') => {
    const props = { className, strokeWidth: 1.6 } as const;
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'PieChart': return <PieChart {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'Users': return <Users {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'ClipboardCheck': return <ClipboardCheck {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Wallet': return <Wallet {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Hotel': return <Hotel {...props} />;
      case 'Building': return <Building {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      default: return <Boxes {...props} />;
    }
  };

  const filteredModules = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return modules.filter((mod) => {
      const matchesCategory = activeCategory === 'all' || mod.category === activeCategory;
      const matchesSearch = !query ||
        mod.title.toLowerCase().includes(query) ||
        mod.shortDesc.toLowerCase().includes(query) ||
        mod.features.some(f => f.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, modules]);

  return (
    <section id="modules" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold mb-3 border border-blue-200/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>{copy.eyebrow}</span>
          </div>

          <div className="flex items-center justify-center gap-4 lg:gap-6 mb-4">
            <span className="hidden sm:block h-px w-12 lg:w-24 bg-gradient-to-r from-transparent to-blue-500/50" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
              {copy.title}
            </h2>
            <span className="hidden sm:block h-px w-12 lg:w-24 bg-gradient-to-l from-transparent to-blue-500/50" aria-hidden="true" />
          </div>

          {/* Featured Highlight Card - Styled professionally matching site's high-grade palette */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 p-6 sm:p-8 border border-blue-200/80 shadow-[0_12px_32px_-16px_rgba(20,102,232,0.18)] text-start relative overflow-hidden">
            <div className="absolute top-0 end-0 -mt-8 -me-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-700 leading-relaxed font-medium">
              {copy.desc}
            </p>

            {/* Quick Badges for highlighted activities in user request */}
            <div className="mt-5 pt-4 border-t border-blue-100/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              <span className="font-bold text-blue-900 shrink-0">
                {lang === 'ar' ? 'مهيأ ومثالي لأنشطة:' : 'Optimized for:'}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-blue-200 font-bold text-blue-800 shadow-xs">
                {lang === 'ar' ? '🏪 المحلات التجارية ونقاط البيع' : '🏪 Retail Stores & POS'}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-blue-200 font-bold text-blue-800 shadow-xs">
                {lang === 'ar' ? '☕ المطاعم والكافيهات والإعاشة' : '☕ Restaurants & Cafés'}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-blue-200 font-bold text-blue-800 shadow-xs">
                {lang === 'ar' ? '🏋️‍♂️ الجيم والنوادي الرياضية والاشتراكات' : '🏋️‍♂️ Gyms & Fitness Clubs'}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-blue-200 font-bold text-blue-800 shadow-xs">
                {lang === 'ar' ? '🏢 الشركات والمجموعات والمخازن' : '🏢 Multi-Branch & Warehouses'}
              </span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 space-y-4">

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={copy.searchPlaceholder}
              aria-label={copy.searchPlaceholder}
              className="w-full bg-white border border-slate-300 rounded-lg py-2.5 ps-10 pe-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                {copy.clear}
              </button>
            )}
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Modules Tile Grid */}
        {filteredModules.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-600 text-base mb-3">
              {copy.emptyPrefix}&quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              {copy.reset}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredModules.map((module) => (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setSelectedModuleId(module.id)}
                  title={module.title}
                  className="group flex min-h-[118px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 sm:min-h-[124px]"
                >
                  <span className="text-blue-700 transition-transform duration-200 group-hover:scale-110">
                    {renderIcon(module.iconName)}
                  </span>
                  <span className="text-[13px] font-bold leading-snug text-slate-800 sm:text-sm">
                    {shortTitles[module.id] ?? module.title}
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-slate-500">
              {copy.tapHint}
            </p>
          </>
        )}

        {/* Bottom CTA within Modules */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-4">
            {copy.bottomQuestion}
          </p>
          <button
            onClick={() => onOpenDemo()}
            className="px-6 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <span>{copy.bottomCta}</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
          </button>
        </div>

      </div>

      {/* Module details dialog */}
      {selectedModule && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedModule.title}
          onClick={() => setSelectedModuleId(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-fadeIn text-start sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedModuleId(null)}
              className="absolute end-4 top-4 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label={copy.close}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-5 flex items-start gap-4 pe-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
                {renderIcon(selectedModule.iconName, 'w-7 h-7')}
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-blue-700">{selectedModule.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[10px]">{copy.coreBadge}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-900">
                  {selectedModule.title}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">
              {selectedModule.shortDesc}
            </p>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <h4 className="mb-2.5 text-xs font-bold text-slate-900">
                {copy.featuresLabel}
              </h4>
              <div className="max-h-64 space-y-2 overflow-y-auto pe-1">
                {selectedModule.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => setSelectedModuleId(null)}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {copy.close}
              </button>
              <button
                type="button"
                onClick={() => {
                  const category = selectedModule.categoryLabel;
                  setSelectedModuleId(null);
                  onOpenDemo(category);
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-700 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-800"
              >
                <span>{copy.askDiscussion}</span>
                <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-0 ltr:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
