export interface ModuleItem {
  id: string;
  title: string;
  category: 'finance' | 'sales' | 'inventory' | 'hr' | 'manufacturing' | 'industry';
  categoryLabel: string;
  shortDesc: string;
  features: string[];
  iconName: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  keyFeatures: string[];
  imagePath: string;
  badge: string;
}

export interface WorkflowImpact {
  module: string;
  description: string;
}

export interface WorkflowScenario {
  id: string;
  name: string;
  triggerModule: string;
  impacts: WorkflowImpact[];
}

export interface ModuleCategory {
  id: string;
  label: string;
}

export interface DemoFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  sector: string;
  branchCount: string;
  notes: string;
}
