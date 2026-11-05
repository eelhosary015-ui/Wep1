import React, { useMemo } from 'react';
import { getSectors } from '../data/erpData';
import { Check, ArrowLeft } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface SectorsSectionProps {
  onOpenDemo: (initialSector?: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenDemo }) => {
  const { t, lang } = useI18n();
  const copy = t.sectors;
  const sectors = useMemo(() => getSectors(lang), [lang]);

  return (
    <section id="sectors" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-blue-700 mb-2">{copy.eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            {copy.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {copy.desc}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Sector Image with Resilient Fallback */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={sector.imagePath}
                    alt={sector.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-white/90 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                      {sector.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {sector.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      {copy.featuresLabel}
                    </span>
                    {sector.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenDemo(sector.title)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>{copy.ctaPrefix} {sector.title}</span>
                  <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Realistic Note */}
        <div className="mt-12 text-center text-xs text-slate-600 max-w-2xl mx-auto">
          {copy.note}
        </div>

      </div>
    </section>
  );
};
