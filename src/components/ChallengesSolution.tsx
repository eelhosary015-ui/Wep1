import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

export const ChallengesSolution: React.FC = () => {
  const { t } = useI18n();
  const copy = t.challenges;

  return (
    <section id="challenges" className="py-20 bg-white border-b border-slate-200">
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

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Challenges Box */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {copy.problemsTitle}
                  </h3>
                  <p className="text-xs text-slate-600">{copy.problemsSubtitle}</p>
                </div>
              </div>

              <div className="space-y-5">
                {copy.problems.map((problem) => (
                  <div key={problem.title} className="flex items-start gap-3.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{problem.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
              {copy.problemsFooter}
            </div>
          </div>

          {/* Solution with REMO PRO */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-300 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {copy.solutionsTitle}
                  </h3>
                  <p className="text-xs text-slate-400">{copy.solutionsSubtitle}</p>
                </div>
              </div>

              <div className="space-y-5">
                {copy.solutions.map((solution) => (
                  <div key={solution.title} className="flex items-start gap-3.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 mb-1">{solution.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-300 font-medium">
              {copy.solutionsFooter}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
