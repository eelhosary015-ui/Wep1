import React, { useState } from 'react';
import {
  TrendingUp,
  Package,
  FileCheck2,
  Building,
  ChevronDown,
  Layers,
  DollarSign,
  type LucideIcon,
} from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

const TAB_IDS = ['overview', 'finance', 'inventory', 'sales'] as const;

const KPI_ICONS: LucideIcon[] = [DollarSign, TrendingUp, Package, FileCheck2];
const KPI_ICON_COLORS = ['text-emerald-400', 'text-blue-400', 'text-amber-400', 'text-purple-400'];

export const DashboardMockup: React.FC = () => {
  const { t, lang } = useI18n();
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<(typeof TAB_IDS)[number]>('overview');
  const [timeRange, setTimeRange] = useState<'month' | 'quarter'>('month');

  const { dashboard } = t;
  const activeTabIndex = TAB_IDS.indexOf(activeTab);
  const selectedBranch = dashboard.branches[selectedBranchIndex] ?? dashboard.branches[0];

  // Sample illustrative data (clearly labelled as a demonstration environment)
  const monthlyData = [
    { label: dashboard.weeks[0], sales: 420, expenses: 290, inventory: 810 },
    { label: dashboard.weeks[1], sales: 480, expenses: 310, inventory: 790 },
    { label: dashboard.weeks[2], sales: 510, expenses: 280, inventory: 840 },
    { label: dashboard.weeks[3], sales: 590, expenses: 340, inventory: 860 },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden text-start">

      {/* Top Application Header Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Window Indicator Dots & Platform Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-700"></span>
            <span className="w-3 h-3 rounded-full bg-slate-700"></span>
            <span className="w-3 h-3 rounded-full bg-slate-700"></span>
          </div>
          <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>
          <span className="text-xs font-semibold text-slate-300 font-mono tracking-wide hidden sm:inline">
            {dashboard.version}
          </span>
        </div>

        {/* Center: Branch Selector */}
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="relative inline-block">
            <select
              value={selectedBranchIndex}
              onChange={(e) => setSelectedBranchIndex(Number(e.target.value))}
              aria-label={lang === 'ar' ? 'اختيار الفرع' : 'Select branch'}
              className="bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 rounded-lg py-1.5 ps-3 pe-8 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {dashboard.branches.map((branch, index) => (
                <option key={branch} value={index}>{branch}</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute end-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Demonstration Notice */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span>{dashboard.demoBadge}</span>
        </div>
      </div>

      {/* Internal Navigation Sub-header */}
      <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          {TAB_IDS.map((tabId, index) => (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === tabId
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {dashboard.tabs[index]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{dashboard.rangeLabel}</span>
          <div className="flex rounded-md bg-slate-950 p-0.5 border border-slate-800">
            <button
              onClick={() => setTimeRange('month')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                timeRange === 'month' ? 'bg-slate-800 text-white' : 'text-slate-400'
              }`}
            >
              {dashboard.ranges[0]}
            </button>
            <button
              onClick={() => setTimeRange('quarter')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                timeRange === 'quarter' ? 'bg-slate-800 text-white' : 'text-slate-400'
              }`}
            >
              {dashboard.ranges[1]}
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-4 sm:p-6 space-y-5 bg-gradient-to-b from-slate-900 to-slate-950">

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {dashboard.kpis.map((kpi, index) => {
            const Icon = KPI_ICONS[index] ?? Package;
            const isLast = index === dashboard.kpis.length - 1;
            return (
              <div key={kpi.label} className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                <div className="flex items-center justify-between gap-2 text-slate-400 text-xs mb-1.5">
                  <span className="leading-tight">{kpi.label}</span>
                  <Icon className={`w-4 h-4 shrink-0 ${KPI_ICON_COLORS[index] ?? 'text-blue-400'}`} />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">
                  {kpi.value}{' '}
                  <span className="text-xs font-normal text-slate-400">{kpi.unit}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-[11px] mt-1 ${isLast ? 'text-purple-300' : 'text-slate-400'}`}>
                  <span>{kpi.note}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Row: Illustrative Chart & Department Sync */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Chart View (2 Cols) */}
          <div className="lg:col-span-2 bg-slate-800/40 rounded-xl p-4 border border-slate-700/60">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {dashboard.chartTitles[activeTabIndex]}
                </h4>
                <p className="text-xs text-slate-400">
                  {selectedBranch} · {dashboard.chartSubtitleSuffix}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-xs shrink-0">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-500"></span>
                  {dashboard.legendSales}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-600"></span>
                  {dashboard.legendExpenses}
                </span>
              </div>
            </div>

            {/* Responsive bar chart */}
            <div className="h-48 w-full flex items-end justify-between gap-4 pt-6 pb-2 px-2 border-b border-slate-700/60">
              {monthlyData.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="w-full flex items-end justify-center gap-1.5 h-36">
                    {/* Primary Bar (Sales) */}
                    <div
                      style={{ height: `${(item.sales / 600) * 100}%` }}
                      className="w-1/2 max-w-[32px] bg-blue-500 rounded-t-sm group-hover:bg-blue-400 transition-all duration-300 relative"
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] px-1.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-10 font-mono">
                        {(item.sales * 1000).toLocaleString('en-US')} {t.common.currency}
                      </div>
                    </div>
                    {/* Secondary Bar (Expenses) */}
                    <div
                      style={{ height: `${(item.expenses / 600) * 100}%` }}
                      className="w-1/2 max-w-[32px] bg-slate-600 rounded-t-sm group-hover:bg-slate-500 transition-all duration-300"
                    ></div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-3">
              <span>{dashboard.chartFooterLeft}</span>
              <span className="font-mono text-slate-400">{dashboard.chartFooterRight}</span>
            </div>
          </div>

          {/* Department Interconnection Ledger (1 Col) */}
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/60 flex flex-col">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{dashboard.ledgerTitle}</span>
              </h4>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap">
                {dashboard.ledgerBadge}
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              {dashboard.ledgerDesc}
            </p>

            <div className="space-y-2.5 overflow-y-auto max-h-56 pe-1">
              {dashboard.events.map((evt, index) => (
                <div
                  key={index}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      {evt.title}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 shrink-0">
                      {evt.amount}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-1 leading-snug">
                    {evt.action}
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[10px] text-slate-400">
                    <span className="text-blue-300 font-medium">{evt.dept}</span>
                    <span>{evt.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Status Bar */}
      <div className="bg-slate-950 px-4 py-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {dashboard.statusDb}
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline">{dashboard.statusRole}</span>
        </div>
        <div>
          <span>{dashboard.statusBrand}</span>
        </div>
      </div>

    </div>
  );
};
