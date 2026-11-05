import { ModuleItem, SectorItem, WorkflowScenario } from '../types';
import { SECTOR_IMAGES } from './sectorImages';

export const MODULE_CATEGORIES_EN = [
  { id: 'all', label: 'All modules' },
  { id: 'finance', label: 'Finance & accounting' },
  { id: 'sales', label: 'Sales & POS' },
  { id: 'inventory', label: 'Procurement & inventory' },
  { id: 'hr', label: 'HR & payroll' },
  { id: 'manufacturing', label: 'Operations & manufacturing' },
  { id: 'industry', label: 'Industry-specific solutions' },
] as const;

export const ERP_MODULES_EN: ModuleItem[] = [
  // 1. Finance
  {
    id: 'general-accounts',
    title: 'General ledger & chart of accounts',
    category: 'finance',
    categoryLabel: 'Finance & accounting',
    shortDesc:
      'A flexible multi-level chart of accounts, automatic and manual journal entries, an up-to-the-minute trial balance and the general ledger.',
    features: [
      'Multi-level, tree-structured chart of accounts that adapts to different activity classifications',
      'Automatic accounting entries generated the moment sales, purchase and inventory transactions are completed',
      'General ledger, general journal and trial balance with multiple levels of detail',
      'Monthly and annual period closing with complete closing statements',
    ],
    iconName: 'BookOpen',
  },
  {
    id: 'treasury-banking',
    title: 'Treasury, banks & transfers',
    category: 'finance',
    categoryLabel: 'Finance & accounting',
    shortDesc:
      'End-to-end management of cash treasuries and bank accounts, with reconciliations, transfers and liquidity tracking.',
    features: [
      'Cash treasury balances per branch with withdrawal and deposit limits',
      'Multiple bank accounts and transfers between accounts and treasuries',
      'Bank reconciliations that match statements against recorded entries',
      'Receipt, payment, cheque and payment-order vouchers',
    ],
    iconName: 'Landmark',
  },
  {
    id: 'taxes-assets-costing',
    title: 'Tax, fixed assets & cost centres',
    category: 'finance',
    categoryLabel: 'Finance & accounting',
    shortDesc:
      'Automatic asset depreciation, analytical cost centres and tax return and VAT reporting.',
    features: [
      'A complete fixed-asset register that tracks location and calculates depreciation automatically',
      'Allocate expenses and revenue across cost centres, projects and branches',
      'Tax calculation plus taxable sales and purchase invoice reports',
      'Budget preparation and actual-versus-planned performance comparison',
    ],
    iconName: 'PieChart',
  },
  {
    id: 'ar-ap-management',
    title: 'Customers, suppliers & collections',
    category: 'finance',
    categoryLabel: 'Finance & accounting',
    shortDesc:
      'Track receivable and payable balances, credit limits, debt ageing, receipts and payment vouchers.',
    features: [
      'Detailed and summary statements for customers and suppliers in local and foreign currency',
      'Debt-ageing analysis and scheduled payment and collection due dates',
      'Customer credit limits with an automatic sales hold when the approved limit is exceeded',
      'Debit and credit notes and re-settlement of outstanding invoices',
    ],
    iconName: 'Receipt',
  },

  // 2. Sales & customers
  {
    id: 'sales-invoicing',
    title: 'Quotations, invoices & sales orders',
    category: 'sales',
    categoryLabel: 'Sales & customers',
    shortDesc:
      'A disciplined sales cycle from quotation through sales order, invoice, delivery and returns management.',
    features: [
      'Issue and track quotations with accepted, rejected and revised statuses',
      'Convert approved quotations into sales orders, then invoices, in one click',
      'Electronic sales invoices with barcodes, line-item detail and taxes',
      'Sales returns and credit notes linked back to the original invoice',
      'Send approved quotations and e-invoices to customers on WhatsApp automatically',
    ],
    iconName: 'FileText',
  },
  {
    id: 'pos-terminals',
    title: 'Fast point of sale (POS)',
    category: 'sales',
    categoryLabel: 'Sales & customers',
    shortDesc:
      'Fast selling screens for showrooms and stores, compatible with barcode scanners, touchscreens and receipt printers.',
    features: [
      'A streamlined POS interface that works on touchscreens and with barcode readers',
      'Multiple payment methods (cash, bank cards, credit, e-wallet)',
      'Cashier shift management with drawer open/close and cash handover',
      'Instant stock and sales-account updates on every sale',
    ],
    iconName: 'CreditCard',
  },
  {
    id: 'crm-reps-pricing',
    title: 'Customers, sales reps & commissions',
    category: 'sales',
    categoryLabel: 'Sales & customers',
    shortDesc:
      'Organised customer data, rep route planning, commission calculation and multiple price lists.',
    features: [
      'A full customer profile with contact details, transaction history and credit history',
      'Multiple price lists (wholesale, retail, distributors, consumer) and discount policies',
      'Sales rep performance and commissions based on sales or collections',
      'Profitability reports by customer, product and geographic region',
    ],
    iconName: 'Users',
  },

  // 3. Procurement & inventory
  {
    id: 'procurement-vendors',
    title: 'Procurement & supplier management',
    category: 'inventory',
    categoryLabel: 'Procurement & inventory',
    shortDesc:
      'Purchase orders, requests for quotation, purchase invoice tracking and matching against supply orders.',
    features: [
      'The full purchasing cycle from internal request to external purchase order',
      'Compare supplier quotations and select the right terms and prices',
      'Record purchase invoices and three-way match them with orders and goods receipts',
      'An approved supplier register with payment terms, transaction history and ratings',
    ],
    iconName: 'ShoppingBag',
  },
  {
    id: 'inventory-stock',
    title: 'Items & multi-warehouse inventory',
    category: 'inventory',
    categoryLabel: 'Procurement & inventory',
    shortDesc:
      'Track items and storage locations, transfers between branches and stores, and balances in multiple units.',
    features: [
      'Define items with multiple units of measure (piece, carton, ton, metre) and expiry dates',
      'Structured storage locations inside warehouses (aisles, racks, bins)',
      'Stock transfers between branches and warehouses with dispatch and receipt confirmation',
      'Reorder levels and safety stock to prevent key materials running out',
    ],
    iconName: 'Boxes',
  },
  {
    id: 'qc-stocktaking-reports',
    title: 'Quality inspection, stocktaking & valuation',
    category: 'inventory',
    categoryLabel: 'Procurement & inventory',
    shortDesc:
      'Goods receipt and conformity inspection, physical count records, and stock-ageing and dead-stock reporting.',
    features: [
      'Quality inspection on supplier receipt with accepted and rejected lines documented',
      'Periodic and annual stock counts with automatic variance and adjustment posting',
      'Valuation using approved accounting methods (FIFO, weighted average)',
      'Advanced reports for item movement, slow-moving items and dead stock',
    ],
    iconName: 'ClipboardCheck',
  },

  // 4. HR & payroll
  {
    id: 'hr-employees-shifts',
    title: 'Employee records, structure & shifts',
    category: 'hr',
    categoryLabel: 'HR & payroll',
    shortDesc:
      'A central employee database, organisation structure, branches and shift and working-time scheduling.',
    features: [
      'Digital employee records including documents, contracts, qualifications and contact details',
      'Organisation structure linking positions to departments, branches and divisions',
      'Morning, evening and rotating shift schedules to suit each branch',
      'Expiry tracking for IDs, residencies, work permits and health certificates',
    ],
    iconName: 'UserCheck',
  },
  {
    id: 'hr-leaves-appraisals',
    title: 'Leave, appraisals, assets & penalties',
    category: 'hr',
    categoryLabel: 'HR & payroll',
    shortDesc:
      'Leave balances, periodic performance appraisals, employee cash and in-kind assets, and administrative actions.',
    features: [
      'A portal to submit and review leave requests with automatic balance calculation',
      'Annual and periodic performance appraisal forms with team and individual goals',
      'Register of company assets, devices and vehicles with recovery on clearance',
      'Penalty and reward policy applied within the approved payroll run',
    ],
    iconName: 'Award',
  },
  {
    id: 'hr-payroll-advances',
    title: 'Payroll, advances, allowances & deductions',
    category: 'hr',
    categoryLabel: 'HR & payroll',
    shortDesc:
      'Prepare monthly payroll runs, calculate allowances, deductions and advances, and generate accounting entries automatically.',
    features: [
      'Payroll runs calculated automatically from attendance, leave and penalty data',
      'Personal loans with instalment schedules recovered from monthly salary',
      'End-of-service benefits and leave provisions calculated per applicable regulations',
      'Generate the payroll journal entry and bank transfer files',
    ],
    iconName: 'Wallet',
  },

  // 5. Operations & manufacturing
  {
    id: 'manufacturing-bom-mrp',
    title: 'Production orders, BOM & MRP',
    category: 'manufacturing',
    categoryLabel: 'Operations & manufacturing',
    shortDesc:
      'Define product recipes, plan material requirements, issue production orders and monitor completion rates.',
    features: [
      'Define bills of materials (BOM) with raw material and direct labour components',
      'Material requirements planning (MRP) so raw materials are ready before production starts',
      'Issue production orders and follow execution from assembly line to finished product',
      'Issue raw materials from the warehouse and track allowed and observed waste',
    ],
    iconName: 'Factory',
  },
  {
    id: 'manufacturing-shopfloor-qc',
    title: 'Work centres, shop floor, quality & maintenance',
    category: 'manufacturing',
    categoryLabel: 'Operations & manufacturing',
    shortDesc:
      'Distribute work across machines and lines, run in-process quality checks and schedule preventive maintenance.',
    features: [
      'Define work centres and capacity rates for each machine or production line',
      'In-process quality checks and final-product conformity verification',
      'Machine and equipment maintenance log with preventive and breakdown scheduling',
      'Record line downtime and analyse causes to improve operating efficiency',
    ],
    iconName: 'Wrench',
  },
  {
    id: 'manufacturing-costing',
    title: 'Costing & industrial cost-centre reports',
    category: 'manufacturing',
    categoryLabel: 'Operations & manufacturing',
    shortDesc:
      'Calculate direct and indirect production costs and link them to cost centres to determine the true unit cost.',
    features: [
      'Load raw material, direct labour and overhead costs onto each production order',
      'Compare planned standard cost with actual cost to expose variances',
      'Transfer finished goods to the finished-goods store at approved cost',
      'Profitability analysis for production lines and manufactured products',
    ],
    iconName: 'Calculator',
  },

  // 6. Industry-specific solutions
  {
    id: 'industry-restaurants',
    title: 'Restaurants, cafés & kitchens',
    category: 'industry',
    categoryLabel: 'Specialised solutions',
    shortDesc:
      'Kitchen display (KDS), meal recipes, dish costing and fast POS for tables and delivery orders.',
    features: [
      'Kitchen display system (KDS) routing orders to stations automatically',
      'Recipe management with automatic raw-material deduction on every sale',
      'Table management, reservations, takeaway and delivery apps',
      'Food-waste reports and dish cost versus selling price',
    ],
    iconName: 'Utensils',
  },
  {
    id: 'industry-hotels',
    title: 'Hotels, reservations & rooms',
    category: 'industry',
    categoryLabel: 'Specialised solutions',
    shortDesc:
      'Room and suite reservations, guest check-in, consolidated billing, and housekeeping and hospitality services.',
    features: [
      'Live board of vacant, reserved and occupied rooms with arrival and departure lists',
      'Guest profiles and a single account for accommodation and services',
      'Housekeeping coordination and room readiness for cleaning',
      'Charge extra services (restaurant, laundry) directly to the room account',
    ],
    iconName: 'Hotel',
  },
  {
    id: 'industry-real-estate',
    title: 'Real estate, leases & properties',
    category: 'industry',
    categoryLabel: 'Specialised solutions',
    shortDesc:
      'Archive property units, lease contracts, payment and collection schedules, and building maintenance orders.',
    features: [
      'Detailed register of residential and commercial units, buildings and occupancy status',
      'Lease management and renewal with recurring invoices and payment schedules',
      'Track rent arrears and send reminders ahead of due dates',
      'Maintenance requests and repair costs per property and unit',
    ],
    iconName: 'Building',
  },
  {
    id: 'industry-multibranch',
    title: 'Multi-branch operations, approvals & complaints',
    category: 'industry',
    categoryLabel: 'Specialised solutions',
    shortDesc:
      'Central control for multi-branch groups, flexible approval workflows and a complaint follow-up system.',
    features: [
      'Separate users and permissions per branch, with consolidated head-office reporting',
      'Design approval chains by authority level (purchase orders, cash payments, special discounts)',
      'Complaint and feedback tracking from receipt to closure with service-quality measures',
      'Move and allocate items between branches to balance stock levels',
    ],
    iconName: 'GitBranch',
  },
];

export const SECTORS_EN: SectorItem[] = [
  {
    id: 'distribution',
    title: 'Trade, distribution & supply chains',
    description:
      'Purpose-built for wholesale, retail and distribution companies managing supplier networks, broad item ranges, sales reps and fleets.',
    keyFeatures: [
      'Manage many items with multiple units of measure and barcodes',
      'Track central warehouse and distribution store balances',
      'Link rep routes, price lists and collections',
      'Detailed debt-ageing and customer credit-limit reports',
    ],
    imagePath: SECTOR_IMAGES.distribution,
    badge: 'Trade & distribution',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & industrial plants',
    description:
      'Organise production lines from raw-material planning through to finished goods, with precise direct and indirect costing.',
    keyFeatures: [
      'Standard bills of materials (BOM) and material requirements planning (MRP)',
      'Track production stages and work centres on the shop floor',
      'Monitor waste, quality and technical specification conformity',
      'Calculate actual product cost and link it to cost centres',
    ],
    imagePath: SECTOR_IMAGES.manufacturing,
    badge: 'Manufacturing & operations',
  },
  {
    id: 'hospitality',
    title: 'Hotels & hospitality',
    description:
      'A practical system for reservations, guest check-in, consolidated service billing and housekeeping coordination.',
    keyFeatures: [
      'Live room-status board with occupancy and arrival/departure times',
      'Charge accommodation, laundry and dining to the guest master account',
      'Coordinate and schedule housekeeping and preventive room maintenance',
      'Occupancy revenue reports and hotel financial KPIs',
    ],
    imagePath: SECTOR_IMAGES.hospitality,
    badge: 'Hotels & hospitality',
  },
  {
    id: 'multibranch',
    title: 'Companies & multi-branch groups',
    description:
      'Connect distant branches into one database for unified central reporting, while each site keeps the flexibility to operate independently.',
    keyFeatures: [
      'User permissions at branch and warehouse level',
      'Flexible inter-branch transfers to balance demand and supply',
      'Consolidated or separate financial statements as finance requires',
      'Electronic approval chains that control transactions before posting',
    ],
    imagePath: SECTOR_IMAGES.multibranch,
    badge: 'Multi-branch',
  },
  {
    id: 'restaurants',
    title: 'Restaurants, cafés & catering chains',
    description:
      'Connect POS terminals and kitchen displays to inventory, with precise recipe, dish-cost and waste tracking.',
    keyFeatures: [
      'Fast POS compatible with touchscreens and receipt printers',
      'Kitchen display (KDS) for accurate order sequencing',
      'Automatic recipe ingredient deduction with every sale',
      'Table management, takeaway orders and delivery apps',
    ],
    imagePath: SECTOR_IMAGES.hospitality,
    badge: 'Restaurants & cafés',
  },
  {
    id: 'realestate',
    title: 'Real estate & property management',
    description:
      'Archive property units, manage lease contracts, collection schedules and periodic maintenance for investment properties.',
    keyFeatures: [
      'Detailed register of residential and commercial units with occupancy rates',
      'Lease management and renewal with payment scheduling and receipts',
      'Rent due notices and precise arrears tracking',
      'Document maintenance costs against each property cost centre',
    ],
    imagePath: SECTOR_IMAGES.multibranch,
    badge: 'Real estate',
  },
];

export const WORKFLOW_SCENARIOS_EN: WorkflowScenario[] = [
  {
    id: 'sale-pos',
    name: 'A sale at a POS terminal',
    triggerModule: 'Sales & point of sale',
    impacts: [
      {
        module: 'Warehouses',
        description:
          'Deduct sold quantities from the relevant store balance immediately and refresh the reorder level.',
      },
      {
        module: 'Treasury & banks',
        description:
          'Post collected amounts (cash or card) to the branch cash box or bank account.',
      },
      {
        module: 'General ledger',
        description:
          'Generate an automatic journal entry: debit (cash/bank) and credit (sales revenue and VAT).',
      },
      {
        module: 'Central reporting',
        description:
          'Refresh the daily sales report and product profitability report on the executive dashboard.',
      },
    ],
  },
  {
    id: 'goods-receipt',
    name: 'Receiving goods from an external supplier',
    triggerModule: 'Procurement & warehouses',
    impacts: [
      {
        module: 'Warehouses',
        description:
          'Add received quantities to the store balance after quality inspection and matching.',
      },
      {
        module: 'Supplier accounts',
        description:
          'Recognise the invoice liability in the supplier account and schedule payment per the agreed terms.',
      },
      {
        module: 'General ledger',
        description:
          'Create an accounting entry: debit (goods inventory and input tax) and credit (supplier).',
      },
      {
        module: 'Inventory valuation',
        description:
          'Recalculate the weighted average cost of received items and refresh purchasing records.',
      },
    ],
  },
  {
    id: 'inter-branch-transfer',
    name: 'Transferring items between two warehouses',
    triggerModule: 'Warehouse management',
    impacts: [
      {
        module: 'Source warehouse',
        description:
          'Record the issue note, reduce stock and reserve the quantity in transit.',
      },
      {
        module: 'Destination warehouse',
        description:
          'Record the receipt note and match actual quantities against the transfer document.',
      },
      {
        module: 'General ledger',
        description:
          'Post an intermediate entry (goods in transit) so financial control stays accurate until receipt is confirmed.',
      },
      {
        module: 'Central management',
        description:
          'Notify the operations manager immediately so stock stays balanced across branches.',
      },
    ],
  },
  {
    id: 'payroll-run',
    name: 'Approving the monthly payroll run',
    triggerModule: 'HR & payroll',
    impacts: [
      {
        module: 'Human resources',
        description:
          'Lock the month entitlements and deduct loan instalments and unpaid leave.',
      },
      {
        module: 'Treasury & banks',
        description:
          'Prepare the employee bank-transfer file and payment orders from the main account.',
      },
      {
        module: 'General ledger',
        description:
          'Automatic payroll entry distributing salaries and allowances across cost centres and departments.',
      },
      {
        module: 'Management reporting',
        description:
          'Refresh monthly labour-cost indicators and compare them with the approved budget.',
      },
    ],
  },
];
