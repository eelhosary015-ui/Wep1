import React, { useEffect, useMemo, useState } from 'react';
import { DemoFormData } from '../types';
import { CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { createWhatsAppDemoLink, createQuickWhatsAppInquiryLink, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { submitDemoRequestToEmail } from '../utils/formSubmit';
import { SITE_CONFIG } from '../config/siteConfig';
import { useI18n } from '../i18n/LanguageContext';
import { RichText } from '../i18n/RichText';

interface ContactSectionProps {
  initialSector?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSector }) => {
  const { t, lang } = useI18n();
  const copy = t.contact;

  const sectorOptions = useMemo(() => {
    const base = [...copy.sectorOptions];
    if (initialSector && !base.includes(initialSector)) {
      return [initialSector, ...base];
    }
    return base;
  }, [copy.sectorOptions, initialSector]);

  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    sector: initialSector || copy.sectorOptions[0],
    branchCount: copy.branchOptions[0],
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  /* When the visitor switches language, remap the select values to the new copy. */
  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      sector: sectorOptions.includes(previous.sector) ? previous.sector : sectorOptions[0],
      branchCount: copy.branchOptions.includes(previous.branchCount)
        ? previous.branchCount
        : copy.branchOptions[0],
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg(copy.errors.name);
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg(copy.errors.company);
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg(copy.errors.phone);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg(copy.errors.email);
      return;
    }

    setIsLoading(true);

    try {
      await submitDemoRequestToEmail(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-blue-700 mb-2">{copy.eyebrow}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              {copy.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {copy.desc}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg">

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">
                  {copy.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  <RichText
                    text={copy.successBody}
                    values={{
                      name: formData.fullName,
                      company: formData.companyName,
                      email: SITE_CONFIG.contact.email,
                      phone: formData.phone,
                    }}
                  />
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={createWhatsAppDemoLink(formData, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                    <span>{copy.successWhatsapp}</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        phone: '',
                        email: '',
                        sector: copy.sectorOptions[0],
                        branchCount: copy.branchOptions[0],
                        notes: ''
                      });
                    }}
                    className="text-xs text-blue-700 font-bold hover:underline py-2"
                  >
                    {copy.successReset}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Quick WhatsApp Bar */}
                <div className="mb-8 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-start">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-emerald-950">
                        {copy.quickTitle}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-emerald-800">
                        {copy.quickDesc}{' '}
                        <span className="font-mono font-bold dir-ltr">{DISPLAY_WHATSAPP_NUMBER}</span>
                      </p>
                    </div>
                  </div>
                  <a
                    href={createQuickWhatsAppInquiryLink(copy.quickTopic, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                  >
                    <span>{copy.quickCta}</span>
                    <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        {copy.labels.fullName} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={copy.placeholders.fullName}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        {copy.labels.company} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={copy.placeholders.company}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        {copy.labels.phone} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={copy.placeholders.phone}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        {copy.labels.email} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        dir="ltr"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={copy.placeholders.email}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>

                    {/* Business Sector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        {copy.labels.sector}
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors cursor-pointer"
                      >
                        {sectorOptions.map((sector) => (
                          <option key={sector} value={sector}>{sector}</option>
                        ))}
                      </select>
                    </div>

                    {/* Branch Count */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        {copy.labels.branches}
                      </label>
                      <select
                        value={formData.branchCount}
                        onChange={(e) => setFormData({ ...formData, branchCount: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors cursor-pointer"
                      >
                        {copy.branchOptions.map((branch) => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Specific Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      {copy.labels.notes}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={copy.placeholders.notes}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-600 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{copy.replyNote}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      <a
                        href={createWhatsAppDemoLink(formData, lang)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] whitespace-nowrap"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        <span>{copy.whatsappSend}</span>
                      </a>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-60 rounded-lg shadow-md transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] whitespace-nowrap"
                      >
                        {isLoading ? (
                          <span>{copy.submitting}</span>
                        ) : (
                          <>
                            <span>{copy.submit}</span>
                            <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
