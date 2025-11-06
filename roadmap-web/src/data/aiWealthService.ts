export type TrendDirection = 'up' | 'down' | 'neutral' | 'alert';
export type InsightStatus = 'positive' | 'warning' | 'neutral';
export type ReminderCategory = 'goal' | 'risk' | 'cashflow';
export type ReminderSeverity = 'high' | 'medium' | 'low';
export type GoalStatus = 'on-track' | 'attention' | 'at-risk' | 'completed';
export type ModuleTone = 'indigo' | 'violet' | 'emerald' | 'amber' | 'slate' | 'rose';

export interface WealthMetric {
  label: string;
  value: string;
  description?: string;
  change?: {
    value: string;
    label: string;
    trend: TrendDirection;
  };
}

export interface AllocationBreakdown {
  label: string;
  percentage: number;
  badge: string;
  change: string;
}

export interface HealthInsight {
  status: InsightStatus;
  title: string;
  description: string;
  suggestion: string;
}

export interface WealthOverviewContent {
  headline: string;
  subheading: string;
  summary: string;
  metrics: WealthMetric[];
  allocations: AllocationBreakdown[];
  checklist: string[];
  insights: HealthInsight[];
}

export interface ReminderItem {
  id: string;
  category: ReminderCategory;
  severity: ReminderSeverity;
  title: string;
  due: string;
  description: string;
  action: string;
}

export interface ReminderPanelContent {
  headline: string;
  summary: string;
  quickCreate: {
    placeholder: string;
    tips: string[];
  };
  items: ReminderItem[];
}

export interface GoalMilestone {
  id: string;
  label: string;
  target: string;
  progress: number;
  highlight: string;
  status: GoalStatus;
  actions: string[];
}

export interface GoalBlueprintContent {
  headline: string;
  summary: string;
  milestones: GoalMilestone[];
  nextSteps: Array<{
    id: string;
    label: string;
    description: string;
  }>;
}

export interface ModuleCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  tone: ModuleTone;
  tags: string[];
}

export const aiWealthOverview: WealthOverviewContent = {
  headline: '资产总览区',
  subheading: '持仓体检',
  summary: '登录后可一键查看客户合并资产、收益与风险阈值，快速生成体检报告。',
  metrics: [],
  allocations: [],
  checklist: [],
  insights: [],
};

export const aiWealthReminders: ReminderPanelContent = {
  headline: '智能提醒区',
  summary: '聚焦最紧急的风险信号，可立即转为办理动作。',
  quickCreate: {
    placeholder: '新增提醒…',
    tips: [],
  },
  items: [
    {
      id: 'rebalance',
      category: 'risk',
      severity: 'high',
      title: '权益仓位超出策略上限',
      due: '需在 2 天内处理',
      description: '一键生成调仓方案或邀请理财师接力。',
      action: '生成调仓方案',
    },
  ],
};

export const aiWealthBlueprint: GoalBlueprintContent = {
  headline: '目标蓝图',
  summary: '重点目标可视化进度，随时生成行动计划或分享客户。',
  milestones: [
    {
      id: 'goal-education',
      label: '子女教育基金',
      target: '目标 600,000 元 · 18 个月',
      progress: 64,
      highlight: '缺口 216,000 元，建议月定投调至 ¥9,800',
      status: 'on-track',
      actions: ['生成目标报告'],
    },
  ],
  nextSteps: [
    {
      id: 'coaching',
      label: '查看完整目标计划',
      description: '登录后可导出详细路线与行动建议。',
    },
  ],
};

export const aiWealthModules: ModuleCard[] = [
  {
    id: 'product-intel',
    title: '产品解读',
    description: '结构化理财、固收+、量化产品一目了然。',
    icon: '📊',
    tone: 'indigo',
    tags: ['收益模拟', '风险提示'],
  },
  {
    id: 'investment-signals',
    title: '投资线索',
    description: '策略引擎推送画像匹配的调仓机会。',
    icon: '💡',
    tone: 'emerald',
    tags: ['智能筛选'],
  },
  {
    id: 'personalized-news',
    title: '个性资讯',
    description: '政策、行业与持仓动态同步提醒。',
    icon: '📰',
    tone: 'violet',
    tags: ['实时推送'],
  },
  {
    id: 'toolbox',
    title: '理财工具',
    description: '税务测算、现金流预测、压力测试随取随用。',
    icon: '🧰',
    tone: 'amber',
    tags: ['税务测算', '压力测试'],
  },
  {
    id: 'profile-settings',
    title: '客户设置',
    description: '风险偏好、目标优先级与通知策略统一管理。',
    icon: '🛠️',
    tone: 'slate',
    tags: ['权限管理'],
  },
  {
    id: 'academy',
    title: '投资课堂',
    description: '分层课程、实战案例与测验提升客户黏性。',
    icon: '🎓',
    tone: 'rose',
    tags: ['分层课程'],
  },
];

export const aiWealthServiceContent = {
  overview: aiWealthOverview,
  reminders: aiWealthReminders,
  blueprint: aiWealthBlueprint,
  modules: aiWealthModules,
};

export type AiWealthServiceContent = typeof aiWealthServiceContent;
