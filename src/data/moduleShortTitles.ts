import type { Lang } from '../i18n/types';

/**
 * Short, tile-friendly labels used in the modules grid.
 * The full module titles stay in erpData for the details dialog.
 */
export const MODULE_SHORT_TITLES: Record<Lang, Record<string, string>> = {
  ar: {
    'general-accounts': 'المحاسبة العامة',
    'treasury-banking': 'الخزائن والبنوك',
    'taxes-assets-costing': 'الضرائب والتكاليف',
    'ar-ap-management': 'العملاء والموردون',
    'sales-invoicing': 'المبيعات والفواتير',
    'pos-terminals': 'نقاط البيع',
    'crm-reps-pricing': 'العملاء والمناديب',
    'procurement-vendors': 'المشتريات',
    'inventory-stock': 'المخازن',
    'qc-stocktaking-reports': 'الجودة والجرد',
    'hr-employees-shifts': 'الموظفون والورديات',
    'hr-leaves-appraisals': 'الإجازات والتقييم',
    'hr-payroll-advances': 'الرواتب',
    'manufacturing-bom-mrp': 'الإنتاج والـ BOM',
    'manufacturing-shopfloor-qc': 'أرض المصنع والجودة',
    'manufacturing-costing': 'التكاليف الصناعية',
    'industry-restaurants': 'المطاعم والكافيهات',
    'industry-hotels': 'الفنادق',
    'industry-real-estate': 'العقارات',
    'industry-multibranch': 'الفروع المتعددة',
  },
  en: {
    'general-accounts': 'General ledger',
    'treasury-banking': 'Treasury & banks',
    'taxes-assets-costing': 'Tax & costing',
    'ar-ap-management': 'Customers & suppliers',
    'sales-invoicing': 'Sales & invoicing',
    'pos-terminals': 'Point of sale',
    'crm-reps-pricing': 'Customers & reps',
    'procurement-vendors': 'Procurement',
    'inventory-stock': 'Warehouses',
    'qc-stocktaking-reports': 'Quality & stocktaking',
    'hr-employees-shifts': 'Employees & shifts',
    'hr-leaves-appraisals': 'Leave & appraisals',
    'hr-payroll-advances': 'Payroll',
    'manufacturing-bom-mrp': 'Production & BOM',
    'manufacturing-shopfloor-qc': 'Shop floor & quality',
    'manufacturing-costing': 'Industrial costing',
    'industry-restaurants': 'Restaurants',
    'industry-hotels': 'Hotels',
    'industry-real-estate': 'Real estate',
    'industry-multibranch': 'Multi-branch',
  },
};
