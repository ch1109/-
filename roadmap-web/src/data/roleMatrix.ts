import type {
  MatrixCategory,
  RoleDefinition,
  RoleStageCell,
} from '../types/roadmap';

export const matrixCategories: MatrixCategory[] = [
  {
    id: 'profile-data',
    label: '基础画像数据',
    description: '身份、家庭结构、授权档位、目标概况',
    color: '#4f46e5',
  },
  {
    id: 'asset-data',
    label: '资产负债数据',
    description: '银行流水、证券持仓、负债与现金流信号',
    color: '#0ea5e9',
  },
  {
    id: 'product-market',
    label: '产品与市场',
    description: '产品库、费率明细、行情与宏观研究',
    color: '#14b8a6',
  },
  {
    id: 'behavior-emotion',
    label: '行为与情绪',
    description: '交互日志、学习进度、犹豫与情绪标注',
    color: '#f97316',
  },
  {
    id: 'service-knowledge',
    label: '服务知识库',
    description: '流程话术、案例模板、教育与应急脚本',
    color: '#a855f7',
  },
  {
    id: 'compliance',
    label: '合规风控',
    description: '授权记录、监管要求、风控名单与阈值',
    color: '#ef4444',
  },
];

export const matrixRoles: RoleDefinition[] = [
  {
    id: 'role-user-assistant',
    name: '角色1：迎宾体验教练',
    summary: '负责跨端迎宾、教育与动线引导，让用户无压力进入流程',
    icon: '🧭',
  },
  {
    id: 'role-planner',
    name: '角色2：全景财富规划师',
    summary: '收集核心画像与目标，构建可执行的财富蓝图',
    icon: '🗂️',
  },
  {
    id: 'role-strategist',
    name: '角色3：投资策略架构师',
    summary: '基于数据生成方案、执行情景仿真并管理再平衡策略',
    icon: '🧠',
  },
  {
    id: 'role-trust',
    name: '角色4：信任促进成交官',
    summary: '识别犹豫、安抚情绪并驱动执行与App迁移',
    icon: '🤝',
  },
  {
    id: 'role-guardian',
    name: '角色5：持仓健康管家',
    summary: '监控组合健康、输出体检报告并持续优化',
    icon: '🩺',
  },
  {
    id: 'role-risk',
    name: '角色6：风险监控卫士',
    summary: '守住合规底线，处理市场与个人财务危机',
    icon: '🛡️',
  },
];

export const roleStageMatrix: RoleStageCell[] = [
  {
    roleId: 'role-user-assistant',
    stageId: '0',
    groups: [
      {
        id: 'assistant-0-data',
        title: '关键数据与信号',
        items: [
          {
            id: 'assistant-channel-tag',
            label: '渠道来源与触达标签',
            categoryId: 'profile-data',
          },
          {
            id: 'assistant-vip-tier',
            label: '客户等级与历史来访记录',
            categoryId: 'profile-data',
          },
          {
            id: 'assistant-heatmap',
            label: '迎宾屏停留热图与交互轨迹',
            categoryId: 'behavior-emotion',
            notes: '识别吸引点与流失点',
          },
        ],
      },
      {
        id: 'assistant-0-knowledge',
        title: '服务知识资产',
        items: [
          {
            id: 'assistant-welcome-script',
            label: '分客群欢迎话术与流程脚本',
            categoryId: 'service-knowledge',
          },
          {
            id: 'assistant-privacy-faq',
            label: '隐私与安全疑问答复库',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-user-assistant',
    stageId: '1',
    groups: [
      {
        id: 'assistant-1-data',
        title: '注册引导数据',
        items: [
          {
            id: 'assistant-auth-matrix',
            label: '授权档位与功能映射表',
            categoryId: 'compliance',
          },
          {
            id: 'assistant-privacy-mode',
            label: '隐私模式偏好与切换记录',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'assistant-kyc-status',
            label: '实名核验状态与失败原因',
            categoryId: 'profile-data',
            notes: '便于触发备用流程',
          },
        ],
      },
      {
        id: 'assistant-1-knowledge',
        title: '流程引导素材',
        items: [
          {
            id: 'assistant-progress-playbook',
            label: '进度条提示语与动线指引',
            categoryId: 'service-knowledge',
          },
          {
            id: 'assistant-device-handbook',
            label: '硬件协同操作手册',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-user-assistant',
    stageId: '2',
    groups: [
      {
        id: 'assistant-2-signal',
        title: '教育行为信号',
        items: [
          {
            id: 'assistant-learning-progress',
            label: '学习任务完成度与错题率',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'assistant-funnel-exit',
            label: '方案页浏览深度与退出节点',
            categoryId: 'behavior-emotion',
          },
        ],
      },
      {
        id: 'assistant-2-knowledge',
        title: '案例与疑虑资产',
        items: [
          {
            id: 'assistant-faq-library',
            label: '高频疑虑热词与应答脚本',
            categoryId: 'service-knowledge',
          },
          {
            id: 'assistant-casebook',
            label: '同画像成功案例与演示素材',
            categoryId: 'service-knowledge',
            notes: '用于增强代入感与信任',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-user-assistant',
    stageId: '3',
    groups: [
      {
        id: 'assistant-3-behavior',
        title: '成交触发信号',
        items: [
          {
            id: 'assistant-hesitation-pattern',
            label: '犹豫原因标签与处理优先级',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'assistant-checklist-status',
            label: '决策清单完成状态',
            categoryId: 'behavior-emotion',
          },
        ],
      },
      {
        id: 'assistant-3-knowledge',
        title: '迁移与权益素材',
        items: [
          {
            id: 'assistant-app-benefits',
            label: 'App 独家权益清单与价值说明',
            categoryId: 'service-knowledge',
          },
          {
            id: 'assistant-sync-status',
            label: '账户迁移与数据同步状态',
            categoryId: 'profile-data',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-user-assistant',
    stageId: '4',
    groups: [
      {
        id: 'assistant-4-activity',
        title: '活跃与黏性数据',
        items: [
          {
            id: 'assistant-notification-preference',
            label: '通知偏好、触达频率与打开率',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'assistant-community-feedback',
            label: '社群互动与用户反馈标签',
            categoryId: 'behavior-emotion',
          },
        ],
      },
      {
        id: 'assistant-4-knowledge',
        title: '持续教育素材',
        items: [
          {
            id: 'assistant-journey-playbook',
            label: '阶段性教育脚本与复盘模板',
            categoryId: 'service-knowledge',
          },
          {
            id: 'assistant-campaign-calendar',
            label: '活动与权益运营日历',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-planner',
    stageId: '0',
    groups: [
      {
        id: 'planner-0-prep',
        title: '前置洞察',
        items: [
          {
            id: 'planner-channel-intent',
            label: '渠道意图预测与首问优先级',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'planner-portrait-gap',
            label: '历史画像缺口清单',
            categoryId: 'profile-data',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-planner',
    stageId: '1',
    groups: [
      {
        id: 'planner-1-input',
        title: '画像输入素材',
        items: [
          {
            id: 'planner-income-expense',
            label: '收入流水与支出结构',
            categoryId: 'asset-data',
          },
          {
            id: 'planner-family-profile',
            label: '家庭结构与赡养责任',
            categoryId: 'profile-data',
          },
          {
            id: 'planner-liability',
            label: '房贷、车贷、消费贷余额与月供',
            categoryId: 'asset-data',
          },
        ],
      },
      {
        id: 'planner-1-compliance',
        title: '风险与合规基线',
        items: [
          {
            id: 'planner-risk-survey',
            label: '风险测评问卷与行为校正标签',
            categoryId: 'compliance',
          },
          {
            id: 'planner-privacy-log',
            label: '授权记录与数据使用说明',
            categoryId: 'compliance',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-planner',
    stageId: '2',
    groups: [
      {
        id: 'planner-2-calculation',
        title: '目标测算数据',
        items: [
          {
            id: 'planner-goal-templates',
            label: '多目标模板与达成率基准',
            categoryId: 'service-knowledge',
          },
          {
            id: 'planner-cashflow-stress',
            label: '现金流压力测试结果',
            categoryId: 'asset-data',
          },
        ],
      },
      {
        id: 'planner-2-case',
        title: '案例与启发式库',
        items: [
          {
            id: 'planner-similar-success',
            label: '同画像成功路径与经验提炼',
            categoryId: 'service-knowledge',
          },
          {
            id: 'planner-gap-insight',
            label: '画像差异导致的风险提示',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-planner',
    stageId: '3',
    groups: [
      {
        id: 'planner-3-followup',
        title: '执行跟踪',
        items: [
          {
            id: 'planner-plan-adoption',
            label: '方案采纳状态与阻塞原因',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'planner-task-reminder',
            label: '必做任务与复盘日历',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-planner',
    stageId: '4',
    groups: [
      {
        id: 'planner-4-review',
        title: '复盘与下一目标',
        items: [
          {
            id: 'planner-success-metrics',
            label: '目标达成率与关键成功因素',
            categoryId: 'profile-data',
          },
          {
            id: 'planner-new-goal-suggestion',
            label: '延续/拓展/升级目标推荐库',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-strategist',
    stageId: '1',
    groups: [
      {
        id: 'strategist-1-dataset',
        title: '策略建模数据',
        items: [
          {
            id: 'strategist-product-universe',
            label: '可投产品库与风格标签',
            categoryId: 'product-market',
          },
          {
            id: 'strategist-macro-outlook',
            label: '宏观情景与资产收益预测',
            categoryId: 'product-market',
          },
          {
            id: 'strategist-constraint',
            label: '风险约束与适当性规则',
            categoryId: 'compliance',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-strategist',
    stageId: '2',
    groups: [
      {
        id: 'strategist-2-simulation',
        title: '方案仿真输入',
        items: [
          {
            id: 'strategist-portfolio-constraint',
            label: '现金流、目标期限与收益目标',
            categoryId: 'asset-data',
          },
          {
            id: 'strategist-stress-model',
            label: '回测与压力测试参数库',
            categoryId: 'product-market',
          },
          {
            id: 'strategist-fee-structure',
            label: '费率与成本拆解',
            categoryId: 'product-market',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-strategist',
    stageId: '3',
    groups: [
      {
        id: 'strategist-3-optimization',
        title: '动态优化指标',
        items: [
          {
            id: 'strategist-alpha-source',
            label: '策略超额收益与风格漂移监测',
            categoryId: 'product-market',
          },
          {
            id: 'strategist-user-feedback',
            label: '用户反馈与满意度标签',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-strategist',
    stageId: '4',
    groups: [
      {
        id: 'strategist-4-rebalancing',
        title: '再平衡触发条件',
        items: [
          {
            id: 'strategist-allocation-drift',
            label: '资产配置偏离阈值与调仓建议',
            categoryId: 'asset-data',
          },
          {
            id: 'strategist-market-alert',
            label: '市场波动与黑天鹅监控',
            categoryId: 'product-market',
          },
          {
            id: 'strategist-tax-impact',
            label: '税务影响与交易成本模型',
            categoryId: 'compliance',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-trust',
    stageId: '0',
    groups: [
      {
        id: 'trust-0-funnel',
        title: '信任基线',
        items: [
          {
            id: 'trust-brand-proof',
            label: '品牌背书与资质素材库',
            categoryId: 'service-knowledge',
          },
          {
            id: 'trust-sentiment-scan',
            label: '渠道舆情与信任风险信号',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-trust',
    stageId: '2',
    groups: [
      {
        id: 'trust-2-objection',
        title: '疑虑洞察',
        items: [
          {
            id: 'trust-objection-tags',
            label: '疑虑标签与置信度模型',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'trust-answer-playbook',
            label: '透明披露脚本与负面案例库',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-trust',
    stageId: '3',
    groups: [
      {
        id: 'trust-3-conversion',
        title: '成交所需资产',
        items: [
          {
            id: 'trust-hesitation-db',
            label: '犹豫原因→解决方案映射',
            categoryId: 'service-knowledge',
          },
          {
            id: 'trust-step-plan',
            label: '阶梯式入场与冷静期方案库',
            categoryId: 'service-knowledge',
          },
          {
            id: 'trust-signals',
            label: '交易实时状态与反悔窗口',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-trust',
    stageId: '4',
    groups: [
      {
        id: 'trust-4-relationship',
        title: '持续陪伴信号',
        items: [
          {
            id: 'trust-community-health',
            label: '社群活跃度与满意度',
            categoryId: 'behavior-emotion',
          },
          {
            id: 'trust-story-bank',
            label: '成功故事与口碑传播素材',
            categoryId: 'service-knowledge',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-guardian',
    stageId: '3',
    groups: [
      {
        id: 'guardian-3-transition',
        title: '迁移期监测',
        items: [
          {
            id: 'guardian-sync-progress',
            label: '账户同步与数据丢失预警',
            categoryId: 'asset-data',
          },
          {
            id: 'guardian-app-onboarding',
            label: 'App 设置完成度与待办清单',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-guardian',
    stageId: '4',
    groups: [
      {
        id: 'guardian-4-health',
        title: '持仓健康指标',
        items: [
          {
            id: 'guardian-health-score',
            label: '七维体检评分与问题清单',
            categoryId: 'asset-data',
          },
          {
            id: 'guardian-fee-tracker',
            label: '费率与成本拖累监控',
            categoryId: 'product-market',
          },
          {
            id: 'guardian-discipline',
            label: '定投执行率与纪律分数',
            categoryId: 'behavior-emotion',
          },
        ],
      },
      {
        id: 'guardian-4-reports',
        title: '报告与建议',
        items: [
          {
            id: 'guardian-report-kit',
            label: '月/季报模版与个性化建议库',
            categoryId: 'service-knowledge',
          },
          {
            id: 'guardian-optimization',
            label: '替换方案与节费试算',
            categoryId: 'product-market',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-risk',
    stageId: '1',
    groups: [
      {
        id: 'risk-1-compliance',
        title: '注册风险控制',
        items: [
          {
            id: 'risk-blacklist',
            label: '风控黑名单与异常行为规则',
            categoryId: 'compliance',
          },
          {
            id: 'risk-dual-record',
            label: '双录影像与留痕记录',
            categoryId: 'compliance',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-risk',
    stageId: '2',
    groups: [
      {
        id: 'risk-2-suitability',
        title: '方案适当性监控',
        items: [
          {
            id: 'risk-risk-match',
            label: '风险偏好与方案风险度匹配',
            categoryId: 'compliance',
          },
          {
            id: 'risk-exposure-limit',
            label: '资产集中度与杠杆警戒线',
            categoryId: 'asset-data',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-risk',
    stageId: '3',
    groups: [
      {
        id: 'risk-3-monitor',
        title: '交易风控',
        items: [
          {
            id: 'risk-transaction-alert',
            label: '异常交易与反洗钱检测',
            categoryId: 'compliance',
          },
          {
            id: 'risk-after-sale',
            label: '冷静期与撤单监控',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
  {
    roleId: 'role-risk',
    stageId: '4',
    groups: [
      {
        id: 'risk-4-crisis',
        title: '危机应对数据',
        items: [
          {
            id: 'risk-market-trigger',
            label: '市场预警指标与干预剧本',
            categoryId: 'product-market',
          },
          {
            id: 'risk-personal-trigger',
            label: '个人财务危机信号与分级阈值',
            categoryId: 'asset-data',
          },
          {
            id: 'risk-empathy-kit',
            label: '共情话术与资源推荐清单',
            categoryId: 'service-knowledge',
          },
        ],
      },
      {
        id: 'risk-4-escalation',
        title: '应急协同',
        items: [
          {
            id: 'risk-task-routing',
            label: '人工干预与跨团队派单记录',
            categoryId: 'compliance',
          },
          {
            id: 'risk-followup-log',
            label: '危机跟进节奏与状态看板',
            categoryId: 'behavior-emotion',
          },
        ],
      },
    ],
  },
];
