import React from 'react';
import { Lock, History, GitPullRequest, Database } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

export const ReportingSecuritySection: React.FC = () => {
  const { t } = useI18n();
  const copy = t.reporting;
  const securityIcons = [Lock, History, GitPullRequest, Database];

  return (
    <section id="governance" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Executive Reporting & Analytics */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold text-blue-700 mb-2">{copy.eyebrow}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              {copy.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {copy.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.reports.map((report, idx) => (
              <div
                key={report.title}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center mb-4 font-bold font-mono text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {report.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {report.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-blue-700 font-semibold flex items-center gap-1">
                  <span>{copy.exportLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Security, Governance & Authorizations */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold text-blue-700 mb-2">{copy.securityEyebrow}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              {copy.securityTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {copy.securityDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.security.map((item, idx) => {
              const IconComp = securityIcons[idx] ?? Lock;
              return (
                <div
                  key={item.title}
                  className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex items-start gap-5 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-700/60 text-blue-300 flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassurance text without unproven claims */}
          <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 text-center max-w-3xl mx-auto">
            {copy.reassurance}
          </div>
        </div>

      </div>
    </section>
  );
};
