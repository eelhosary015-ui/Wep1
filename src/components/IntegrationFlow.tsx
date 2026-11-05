import React, { useMemo, useState } from 'react';
import { getWorkflowScenarios } from '../data/erpData';
import {
  ArrowRightLeft,
  Database,
  ShoppingCart,
  Boxes,
  Landmark,
  BookOpen,
  BarChart3,
  Users,
  CheckCircle2,
  Workflow,
  type LucideIcon
} from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

export const IntegrationFlow: React.FC = () => {
  const { t, lang } = useI18n();
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);

  const copy = t.integration;
  const scenarios = useMemo(() => getWorkflowScenarios(lang), [lang]);
  const currentScenario = scenarios[selectedScenarioIndex] ?? scenarios[0];

  const nodeIcons: LucideIcon[] = [ShoppingCart, Boxes, Database, Landmark, BookOpen, Users, BarChart3];

  return (
    <section id="integration" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-blue-700 mb-2">{copy.eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            {copy.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {copy.desc}
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl mb-12 relative overflow-hidden">

          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-blue-400 block mb-1">
              {copy.diagramLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {copy.diagramTitle}
            </h3>
          </div>

          {/* Central Hub with Connected Satellites */}
          <div className="relative py-8">

            {/* Center REMO Core Block */}
            <div className="max-w-xs mx-auto bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-6 text-center shadow-xl border border-blue-500/30 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{copy.coreTitle}</h4>
              <p className="text-xs text-blue-100 font-medium leading-relaxed">
                {copy.coreDesc}
              </p>
            </div>

            {/* Orbiting Modules Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mt-8">
              {copy.nodes.map((nodeTitle, index) => {
                const IconComponent = nodeIcons[index] ?? Database;
                return (
                  <div
                    key={nodeTitle}
                    className="bg-slate-800/90 rounded-xl p-3.5 border border-slate-700 flex flex-col items-center text-center hover:border-blue-500/60 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center mb-2">
                      <IconComponent className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-bold text-slate-200 leading-tight">
                      {nodeTitle}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Clarification strip */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            {copy.strip}
          </div>
        </div>

        {/* Interactive Scenario Simulator */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-blue-700 shrink-0" />
                <span>{copy.simTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {copy.simDesc}
              </p>
            </div>

            {/* Scenario Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {scenarios.map((scenario, idx) => (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioIndex(idx)}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                    selectedScenarioIndex === idx
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {scenario.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Scenario Impact Flow */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-blue-700">
                {copy.triggerPrefix} {currentScenario.triggerModule}
              </span>
              <span className="text-xs text-slate-600 font-mono">
                {copy.codePrefix} {currentScenario.id}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentScenario.impacts.map((impact, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{impact.module}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
