export type ProductFormCategoryId =
  | 'enablement'
  | 'client'
  | 'decision'
  | 'operations'
  | 'ecosystem'

export interface ProductFormCategory {
  id: ProductFormCategoryId
  title: string
  description: string
  color: string
  icon: string
}

export interface ProductFormDetailSection {
  title: string
  items: readonly string[]
}

export interface ProductForm {
  id: string
  title: string
  categoryId: ProductFormCategoryId
  group: string
  icon: string
  summary: string
  detailSections: readonly ProductFormDetailSection[]
  tags?: readonly string[]
}

export const productFormCategories: readonly ProductFormCategory[] = [
  {
    id: 'enablement',
    title: '赋能型产品',
    description: '让金融从业人员效能倍增',
    color: '#4c6fff',
    icon: 'Handshake',
  },
  {
    id: 'client',
    title: '客户端产品',
    description: '直接服务最终投资者',
    color: '#f472b6',
    icon: 'Users',
  },
  {
    id: 'decision',
    title: '决策支持工具',
    description: '辅助专业人士做投研与风控决策',
    color: '#0ea5e9',
    icon: 'BarChart3',
  },
  {
    id: 'operations',
    title: '管理运营平台',
    description: '帮助管理层提升经营效率与战略判断力',
    color: '#f4b740',
    icon: 'LayoutDashboard',
  },
  {
    id: 'ecosystem',
    title: '生态协作平台',
    description: '连接外部合作伙伴，构建开放生态',
    color: '#34d399',
    icon: 'Globe2',
  },
]

export const productForms: readonly ProductForm[] = [
  {
    id: 'enablement-lobby-triage',
    title: '大堂经理智能分诊系统',
    categoryId: 'enablement',
    group: '1.1 一线服务人员赋能',
    icon: '🛎️',
    summary: '高峰客流下自动分流客户，缩短等待并提升体验。',
    detailSections: [
      {
        title: '目标用户',
        items: ['银行/证券营业厅大堂经理、引导员'],
      },
      {
        title: '痛点',
        items: ['客流高峰时手忙脚乱，难以判断客户应去VTM、排队或转VIP'],
      },
      {
        title: '核心功能',
        items: [
          '扫码或人脸识别即刻调取客户画像',
          '智能推荐服务路径（VTM/柜台/专属区/外呼预约）',
          '排队优化算法：简单业务引导自助，复杂业务转人工',
          '实时客流热力图与提前预警',
        ],
      },
      {
        title: '产品形态',
        items: ['平板App + 智能手环（震动提醒）'],
      },
      {
        title: 'ROI/效果',
        items: ['客户等待时间-30%', 'VTM使用率+50%', '投诉率-40%'],
      },
    ],
  },
  {
    id: 'enablement-advisor-copilot',
    title: '理财顾问AI副驾驶',
    categoryId: 'enablement',
    group: '1.1 一线服务人员赋能',
    icon: '🧑‍✈️',
    summary: '覆盖会前会中会后全流程，成为理财顾问的智能助手。',
    detailSections: [
      {
        title: '目标用户',
        items: ['客户经理、理财顾问、私人银行家'],
      },
      {
        title: '痛点',
        items: [
          '新手顾问专业度不足，资深顾问时间不够用',
          '客户信息分散在多个系统，会前准备耗时约2小时',
          '沟通中存在合规风险，话术难以统一',
        ],
      },
      {
        title: '核心功能',
        items: [
          '会前：自动生成客户研究报告（资产分析、需求预判、历史交互）',
          '会中：实时语音识别+意图理解、推送话术卡片与风险提示、违规话术预警、情绪识别调节节奏',
          '会后：自动记录CRM、生成跟进任务、推荐下次沟通话术',
        ],
      },
      {
        title: '产品形态',
        items: [
          '桌面版双屏展示（顾问端+客户端）',
          'iPad陪访移动版',
          '蓝牙耳机静默提示（高级版）',
        ],
      },
      {
        title: 'ROI/效果',
        items: [
          '新手顾问3个月达到3年水平',
          '人均服务客户数提升200%',
          '合规事故降低90%',
        ],
      },
    ],
  },
  {
    id: 'enablement-contact-center',
    title: '电话客服增强系统',
    categoryId: 'enablement',
    group: '1.1 一线服务人员赋能',
    icon: '📞',
    summary: '实时语音理解与知识推送，提升客服接待效率与满意度。',
    detailSections: [
      {
        title: '目标用户',
        items: ['400客服中心坐席人员、远程理财顾问'],
      },
      {
        title: '核心功能',
        items: [
          '实时语音转文字与意图识别',
          '自动推送答案卡片到客服屏幕',
          '情绪安抚话术提示',
          '复杂问题一键转接专家并同步背景信息',
        ],
      },
      {
        title: '产品形态',
        items: ['客服工作台插件'],
      },
      {
        title: 'ROI/效果',
        items: ['人均接待量+100%', '客户满意度+35%'],
      },
    ],
  },
  {
    id: 'enablement-teller-assistant',
    title: '柜员业务助手',
    categoryId: 'enablement',
    group: '1.1 一线服务人员赋能',
    icon: '🏦',
    summary: '在柜面办理过程中识别销售机会并守住合规底线。',
    detailSections: [
      {
        title: '目标用户',
        items: ['银行柜台柜员'],
      },
      {
        title: '典型场景',
        items: ['开户、大额转账、存款到期等人工柜面服务'],
      },
      {
        title: '核心功能',
        items: [
          '办理中自动识别销售机会并给出推荐',
          '合规自动校验（反洗钱、大额交易审查）',
          '可一键调起VTM进行深度咨询',
          '提供实时话术提示',
        ],
      },
      {
        title: '产品形态',
        items: ['嵌入柜面系统的插件'],
      },
      {
        title: 'ROI/效果',
        items: ['柜台理财销售转化率+60%'],
      },
    ],
  },
  {
    id: 'enablement-coach-simulator',
    title: '员工智能陪练系统',
    categoryId: 'enablement',
    group: '1.2 培训与能力提升',
    icon: '🎯',
    summary: 'AI扮演不同客户进行实战陪练，打造个性化学习路径。',
    detailSections: [
      {
        title: '目标用户',
        items: ['新入职员工、需要技能提升的在职人员'],
      },
      {
        title: '使用场景',
        items: ['培训部门集中教学', '员工自主练习与复盘'],
      },
      {
        title: '核心功能',
        items: [
          'AI模拟多类型客户并实时对话评分',
          '多维度评估（专业度、话术、共情、合规）',
          '个性化学习路径推荐',
          '闯关式游戏化激励机制',
        ],
      },
      {
        title: '产品形态',
        items: ['Web端与移动端，支持语音互动'],
      },
      {
        title: 'ROI/效果',
        items: ['培训周期从3个月缩短到1个月', '培训成本降低70%'],
      },
    ],
  },
  {
    id: 'enablement-certification-platform',
    title: '行业协会从业人员认证平台',
    categoryId: 'enablement',
    group: '1.2 培训与能力提升',
    icon: '📚',
    summary: '集考试、执业记录与继续教育于一体的认证平台。',
    detailSections: [
      {
        title: '目标用户',
        items: ['银行业协会', '基金业协会', 'CFP考试机构等'],
      },
      {
        title: '核心功能',
        items: [
          '统一考试系统，覆盖题库、考务、阅卷流程',
          '执业行为记录系统（行业执业征信）',
          '继续教育学习平台与学时管理',
        ],
      },
      {
        title: '商业模式',
        items: ['B2G政府/协会采购'],
      },
    ],
  },
  {
    id: 'client-vtm-kiosk',
    title: 'VTM机版（当前产品）',
    categoryId: 'client',
    group: '2.1 线下触点产品',
    icon: '🏧',
    summary: '网点等候区的被动触达触点，5-15分钟传递核心价值。',
    detailSections: [
      {
        title: '目标用户',
        items: ['来银行或证券营业厅办理业务的客户'],
      },
      {
        title: '触达特征',
        items: ['被动触达，需要人工引导', '可用时间仅5-15分钟'],
      },
      {
        title: '典型场景',
        items: ['大厅等候时的体验', '办完业务后由工作人员引导'],
      },
    ],
  },
  {
    id: 'client-vip-lounge-screen',
    title: '网点VIP室智能大屏',
    categoryId: 'client',
    group: '2.1 线下触点产品',
    icon: '🖥️',
    summary: '提供私密沉浸式体验的大屏方案，联动人工顾问服务高净值客户。',
    detailSections: [
      {
        title: '目标用户',
        items: ['不愿在大厅使用VTM的高净值客户'],
      },
      {
        title: '场景特征',
        items: ['私密空间、配备咖啡和休闲设施', '65寸大屏支持多人协同观看'],
      },
      {
        title: '核心功能扩展',
        items: ['全球资产配置', '家族信托方案模拟', '另类投资分析（私募股权、艺术品）'],
      },
      {
        title: '协作模式',
        items: ['可无缝接入人工顾问，支持视频通话与屏幕协同'],
      },
    ],
  },
  {
    id: 'client-young-investor',
    title: '年轻/新手投资者版',
    categoryId: 'client',
    group: '2.2 移动端产品',
    icon: '🎮',
    summary: '游戏化理财教练，陪伴18-35岁新手建立投资信心。',
    detailSections: [
      {
        title: '目标人群',
        items: ['18-35岁年轻或新手投资者'],
      },
      {
        title: '核心差异',
        items: [
          '游戏化设计（理财修炼之路）',
          '财商教育优先（每日3分钟财经解读）',
          '小额起投（100元起定投基金）',
          '社交元素（组队与策略PK）',
        ],
      },
      {
        title: '关键功能',
        items: [
          '首次买基金全程陪伴式指引',
          '模拟投资账户提供零风险练习',
          '工资理财自动化（发薪日自动转入）',
        ],
      },
      {
        title: '盈利模式',
        items: ['交易佣金分成', '基金申购费返佣'],
      },
    ],
  },
  {
    id: 'client-senior-care',
    title: '中老年客户版',
    categoryId: 'client',
    group: '2.2 移动端产品',
    icon: '🧓',
    summary: '语音优先与亲情协同设计，守护50岁以上用户的理财安全。',
    detailSections: [
      {
        title: '目标人群',
        items: ['50岁以上中老年客户'],
      },
      {
        title: '核心差异',
        items: ['大字体与高对比界面', '语音优先交互', '极简三步操作流程'],
      },
      {
        title: '关键功能',
        items: [
          '防诈骗预警与弹窗拦截',
          '养老金与医疗储备规划',
          '亲情账户支持子女远程协助',
          '定期电话回访提供人工关怀',
        ],
      },
      {
        title: '盈利模式',
        items: ['B2C订阅（子女为父母购买）', '金融产品销售分成'],
      },
    ],
  },
  {
    id: 'client-private-banking',
    title: '高净值客户专属版',
    categoryId: 'client',
    group: '2.2 移动端产品',
    icon: '👑',
    summary: '私人银行级别的全资产视图与家族传承方案。',
    detailSections: [
      {
        title: '准入门槛',
        items: ['金融资产600万元以上'],
      },
      {
        title: '核心差异',
        items: [
          '全球资产一张图覆盖银行、证券、保险与海外资产',
          '顾问双屏协同，客户端与顾问端联动',
          '24/7紧急响应机制（市场暴跌5分钟内主动联系）',
        ],
      },
      {
        title: '关键功能',
        items: [
          '家族信托方案设计',
          '税务筹划模拟',
          '代际传承规划（教育信托等）',
          '慈善捐赠优化与品牌管理',
        ],
      },
      {
        title: '盈利模式',
        items: ['AUM管理费0.5%-1%', '超额收益分成'],
      },
    ],
  },
  {
    id: 'client-sme-owner',
    title: '小微企业主版',
    categoryId: 'client',
    group: '2.2 移动端产品',
    icon: '🏢',
    summary: '融合对公与对私视角，守护企业主经营资金与家庭资产。',
    detailSections: [
      {
        title: '核心差异',
        items: [
          '企业经营资金与个人财富分离管理',
          '对公账户与对私账户联动分析',
        ],
      },
      {
        title: '关键功能',
        items: [
          '企业现金流预测与缺口预警',
          '融资匹配（经营贷、供应链金融）',
          '股权激励设计与合规建议',
          '个人资产风险隔离方案',
        ],
      },
      {
        title: '盈利模式',
        items: ['B2B订阅费用', '贷款推荐佣金'],
      },
    ],
  },
  {
    id: 'client-freelancer',
    title: '自由职业者/零工经济版',
    categoryId: 'client',
    group: '2.2 移动端产品',
    icon: '🧑\u200d💻',
    summary: '帮助收入波动人群构建保障、理财与税务一体化方案。',
    detailSections: [
      {
        title: '目标用户',
        items: ['网约车司机', '自媒体创作者', '设计师等自由职业者'],
      },
      {
        title: '核心差异',
        items: [
          '针对不规则收入的现金流管理',
          '缺乏五险一金的保障规划',
        ],
      },
      {
        title: '关键功能',
        items: [
          '应急储备金智能规划（6-12个月生活费）',
          '商业保险配置建议（重疾、意外、医疗）',
          '税务优化方案（灵活用工个税筹划）',
          '收入平滑算法帮助稳定现金流',
        ],
      },
      {
        title: '盈利模式',
        items: ['保险佣金', '账户管理费'],
      },
    ],
  },
  {
    id: 'client-retirement',
    title: '退休养老规划专版',
    categoryId: 'client',
    group: '2.3 垂直场景深化版',
    icon: '🏖️',
    summary: '为临近退休人群算清缺口，规划养老收入与风险保障。',
    detailSections: [
      {
        title: '目标人群',
        items: ['45-65岁临近退休用户'],
      },
      {
        title: '核心功能',
        items: [
          '退休金缺口计算',
          '医疗费用储备规划（长期护理、重大疾病）',
          '退休后收入规划（养老金、年金险、投资收益）',
          '遗产分配预演',
        ],
      },
    ],
  },
  {
    id: 'client-education',
    title: '教育金规划专版',
    categoryId: 'client',
    group: '2.3 垂直场景深化版',
    icon: '🎓',
    summary: '18年倒计时的教育资金规划工具，帮助家庭统筹教育支出。',
    detailSections: [
      {
        title: '目标用户',
        items: ['0-12岁孩子的父母'],
      },
      {
        title: '核心功能',
        items: [
          '全周期教育支出测算（幼儿园至大学及留学）',
          '学区房与教育金投资收益对比',
          '艺术培养与兴趣班预算管理',
        ],
      },
      {
        title: '特色体验',
        items: ['18年倒计时，目标可视化呈现'],
      },
    ],
  },
  {
    id: 'client-founder',
    title: '创业者财富管理版',
    categoryId: 'client',
    group: '2.3 垂直场景深化版',
    icon: '🚀',
    summary: '兼顾企业成长与家庭安全的创业者专属财富方案。',
    detailSections: [
      {
        title: '目标用户',
        items: ['初创公司创始人与核心联合创始人'],
      },
      {
        title: '核心功能',
        items: [
          '企业股权与个人资产统筹规划',
          '融资节奏规划与股权稀释建议',
          '创业失败预案保障家庭底线',
          '股权激励设计与激励池管理',
        ],
      },
    ],
  },
  {
    id: 'client-app-flagship',
    title: '移动App旗舰版',
    categoryId: 'client',
    group: '2.4 跨平台生态产品',
    icon: '📱',
    summary: 'VTM体验的线上延伸，提供完整9-Agent随身陪伴。',
    detailSections: [
      {
        title: '定位',
        items: ['VTM线下体验的线上延伸，全功能旗舰版'],
      },
      {
        title: '核心差异',
        items: [
          '随时随地获得完整9-Agent服务',
          '与VTM数据无缝同步，实现线下启动线上陪伴',
        ],
      },
      {
        title: '挑战',
        items: ['保持线下体验的仪式感与强引导特性'],
      },
    ],
  },
  {
    id: 'client-mini-program',
    title: '微信/支付宝小程序轻量版',
    categoryId: 'client',
    group: '2.4 跨平台生态产品',
    icon: '🧩',
    summary: '轻量化触点快速引流，为旗舰App导流并维系活跃。',
    detailSections: [
      {
        title: '定位',
        items: ['作为引流工具，降低体验门槛'],
      },
      {
        title: '核心功能',
        items: [
          '快速画像测评（5个问题）',
          '简版方案生成以吸引下载App',
          '每日财经资讯推送',
        ],
      },
    ],
  },
  {
    id: 'client-voice-car',
    title: '智能音箱/车载版',
    categoryId: 'client',
    group: '2.4 跨平台生态产品',
    icon: '🔊',
    summary: '在碎片化场景以语音陪伴用户，提供实时资产洞察。',
    detailSections: [
      {
        title: '使用场景',
        items: ['通勤途中', '家务时间等碎片化场景'],
      },
      {
        title: '核心功能',
        items: [
          '语音播报持仓与收益情况',
          '语音查询当日基金表现',
          'AI生成10分钟市场分析播客',
        ],
      },
    ],
  },
  {
    id: 'decision-fund-manager-assistant',
    title: '基金经理投研助手',
    categoryId: 'decision',
    group: '3.1 投资研究工具',
    icon: '📈',
    summary: '聚合信息、挑战投资逻辑并监控风险的专业投研终端。',
    detailSections: [
      {
        title: '目标用户',
        items: ['公募与私募基金经理', '投资总监'],
      },
      {
        title: '痛点',
        items: [
          '海量信息过载，难以及时消化研报与公告',
          '需要对抗锚定效应、确认偏差等认知偏差',
          '组合风险监控缺乏实时性',
        ],
      },
      {
        title: '核心功能',
        items: [
          '信息聚合：自动抓取财报、研报、新闻并结构化解读',
          '投资逻辑挑战与逆向思维训练',
          '组合风险实时监控（回撤、集中度、行业暴露）',
          '历史案例学习，参考相似宏观环境表现',
          '黑天鹅压力测试与策略脆弱点定位',
        ],
      },
      {
        title: '产品形态',
        items: ['Bloomberg终端式桌面工作站'],
      },
      {
        title: '竞争与商业模式',
        items: ['深度集成9-Agent风控与心理模型', '年费30-50万/席位'],
      },
    ],
  },
  {
    id: 'decision-sell-side-writing',
    title: '卖方研究员智能写作平台',
    categoryId: 'decision',
    group: '3.1 投资研究工具',
    icon: '📝',
    summary: '提升研报产能与质量的一体化写作与合规平台。',
    detailSections: [
      {
        title: '目标用户',
        items: ['券商研究所分析师'],
      },
      {
        title: '痛点',
        items: ['研报同质化严重', '定期报告产出压力大'],
      },
      {
        title: '核心功能',
        items: [
          '基于公告与行业数据自动生成研报初稿',
          '观点一致性校验避免前后矛盾',
          '财务与行业数据自动更新',
          '合规审查提醒敏感词与披露风险',
          '差异化建议提示市场已有观点与新角度',
        ],
      },
      {
        title: '价值与盈利模式',
        items: ['研报效率提升300%，质量更稳定', '按研究员数量订阅，年费2-5万/人'],
      },
    ],
  },
  {
    id: 'decision-quant-platform',
    title: '量化交易策略平台',
    categoryId: 'decision',
    group: '3.1 投资研究工具',
    icon: '♟️',
    summary: '行为因子驱动的量化平台，贯穿因子挖掘、回测与监控。',
    detailSections: [
      {
        title: '目标用户',
        items: ['量化基金团队', '自营交易团队'],
      },
      {
        title: '核心功能',
        items: [
          '行为金融因子的挖掘与验证',
          '策略回测并集成全市场历史数据',
          '实时监控策略衰减并发出预警',
          '组合优化支持（马科维茨、Black-Litterman等）',
        ],
      },
      {
        title: '差异点',
        items: ['相比通用量化平台，引入行为金融学因子体系'],
      },
      {
        title: '盈利模式',
        items: ['按交易量分成或年度订阅费'],
      },
    ],
  },
  {
    id: 'decision-credit-analyst',
    title: '信用分析师工具（债券投资）',
    categoryId: 'decision',
    group: '3.1 投资研究工具',
    icon: '🏛️',
    summary: '聚焦信用风险识别与评级预测的债券分析助手。',
    detailSections: [
      {
        title: '目标用户',
        items: ['债券基金经理', '信用分析师'],
      },
      {
        title: '核心功能',
        items: [
          '企业财务报表自动解读并识别财务造假风险',
          '舆情监控（负面新闻、诉讼、股权冻结）',
          '行业对标分析（违约率与收益率曲线）',
          '信用评级预测，提前预警评级下调',
        ],
      },
      {
        title: '盈利模式',
        items: ['订阅制服务'],
      },
    ],
  },
  {
    id: 'decision-portfolio-stress',
    title: '投资组合压力测试系统',
    categoryId: 'decision',
    group: '3.2 风险管理工具',
    icon: '⚠️',
    summary: '为风控团队提供多情景压力测试和风险揭示。',
    detailSections: [
      {
        title: '目标用户',
        items: ['风控部门', '首席风险官（CRO）'],
      },
      {
        title: '核心功能',
        items: [
          '多情景模拟（市场暴跌30%、利率骤升、地缘冲突等）',
          'VaR与CVaR计算',
          '流动性风险分析（极端情况下的赎回能力）',
          '相关性分析揭示潜在集中风险',
        ],
      },
      {
        title: '产品形态',
        items: ['桌面端专业工具'],
      },
      {
        title: '盈利模式',
        items: ['企业级许可证，年费50-100万'],
      },
    ],
  },
  {
    id: 'decision-market-surveillance',
    title: '市场异常监测预警系统',
    categoryId: 'decision',
    group: '3.2 风险管理工具',
    icon: '📡',
    summary: '7×24小时监测多源信息，为交易团队提供快速预警。',
    detailSections: [
      {
        title: '目标用户',
        items: ['投资部门', '交易室'],
      },
      {
        title: '核心功能',
        items: [
          '全天候监控新闻、社交媒体、公告等13大信息源',
          '自动识别突发事件（地缘冲突、政策变化、企业爆雷）',
          '5分钟内推送预警与应对建议',
          '关联影响分析量化对组合的影响',
        ],
      },
      {
        title: '产品形态',
        items: ['移动端、PC端、短信/电话预警'],
      },
      {
        title: '盈利模式',
        items: ['订阅制，年费10-20万'],
      },
    ],
  },
  {
    id: 'decision-product-designer',
    title: '理财产品设计智能顾问',
    categoryId: 'decision',
    group: '3.3 产品设计工具',
    icon: '🧮',
    summary: '为金融产品经理提供需求洞察、定价建议与合规预审。',
    detailSections: [
      {
        title: '目标用户',
        items: ['金融机构产品经理'],
      },
      {
        title: '使用场景',
        items: ['新产品设计', '既有产品优化'],
      },
      {
        title: '核心功能',
        items: [
          '客群需求分析，定位目标客户',
          '竞品对标与差异化建议',
          '定价建议平衡销售与收益',
          '销售话术生成支持顾问沟通',
          '监管合规预审提示潜在风险',
        ],
      },
      {
        title: '产品形态',
        items: ['Web端工作台'],
      },
      {
        title: 'ROI与盈利模式',
        items: ['上市周期从6个月缩短至2个月', '按产品数量收费或年费订阅'],
      },
    ],
  },
  {
    id: 'operations-branch-cockpit',
    title: '网点经营驾驶舱',
    categoryId: 'operations',
    group: '4.1 网点/分支机构管理',
    icon: '📊',
    summary: '实时掌握网点KPI、客流预测与排班的经营驾驶舱。',
    detailSections: [
      {
        title: '目标用户',
        items: ['网点负责人', '分支行长'],
      },
      {
        title: '核心功能',
        items: [
          '实时监控AUM、开户数、产品销售等关键KPI',
          '人效分析定位低转化原因（话术 vs 客群）',
          '客流预测提醒高峰时段',
          'VTM数据分析定位高流失环节',
          '智能排班结合历史数据、节假日与天气',
        ],
      },
      {
        title: '产品形态',
        items: ['Web端 + 移动端（行长随时查看）'],
      },
      {
        title: '盈利模式',
        items: ['按网点数量收费，年费5-10万/网点'],
      },
    ],
  },
  {
    id: 'operations-region-benchmark',
    title: '区域绩效对标系统',
    categoryId: 'operations',
    group: '4.1 网点/分支机构管理',
    icon: '🏅',
    summary: '帮助总行比较各分支表现并复制最佳实践。',
    detailSections: [
      {
        title: '目标用户',
        items: ['总行管理层'],
      },
      {
        title: '核心功能',
        items: [
          '分支机构排名与对标分析',
          '最佳实践识别并输出改进建议',
          '资源调配建议以提升潜力网点表现',
        ],
      },
    ],
  },
  {
    id: 'operations-marketing-orchestrator',
    title: '精准营销活动策划系统',
    categoryId: 'operations',
    group: '4.2 营销与客户运营',
    icon: '🎯',
    summary: 'AI驱动的营销策划平台，实现千人千面的活动编排。',
    detailSections: [
      {
        title: '目标用户',
        items: ['总行营销部门', '数字营销团队'],
      },
      {
        title: '核心功能',
        items: [
          '基于9-Agent画像的客群分层',
          '活动效果预测与ROI预估',
          '渠道优化建议（短信/电话/App推送等）',
          'A/B测试自动化与策略组合建议',
          '活动中ROI实时监控与动态调整',
        ],
      },
      {
        title: '产品形态',
        items: ['营销自动化平台（金融行业专用）'],
      },
      {
        title: '盈利模式',
        items: ['SaaS订阅，年费30-50万'],
      },
    ],
  },
  {
    id: 'operations-customer-lifecycle',
    title: '客户生命周期管理系统',
    categoryId: 'operations',
    group: '4.2 营销与客户运营',
    icon: '♻️',
    summary: '面向全生命周期的运营平台，聚焦流失预警与交叉销售。',
    detailSections: [
      {
        title: '核心功能',
        items: [
          '客户流失预警（预测流失概率）',
          '唤醒策略推荐提升触达效果',
          '交叉销售机会挖掘（基金客户的保险需求）',
        ],
      },
    ],
  },
  {
    id: 'operations-compliance-monitor',
    title: '智能合规监控系统',
    categoryId: 'operations',
    group: '4.3 合规与风控管理',
    icon: '🛡️',
    summary: '覆盖事前、事中、事后的全链路合规监控平台。',
    detailSections: [
      {
        title: '目标用户',
        items: ['风控合规部门', '首席合规官（CCO）'],
      },
      {
        title: '使用场景',
        items: ['新产品合规审查', '销售行为实时监控', '案件事后复盘'],
      },
      {
        title: '核心功能',
        items: [
          'VTM交互录像与文本分析识别违规话术',
          '异常交易识别（客户风险等级与产品不匹配）',
          '投诉预警与情绪识别',
          '合规培训需求诊断',
          '监管报送自动化（符合格式要求）',
        ],
      },
      {
        title: '产品形态',
        items: ['Web端监控平台 + 移动端预警App'],
      },
      {
        title: 'ROI与盈利模式',
        items: [
          '合规事故-80%，监管处罚-90%，人工审核成本-60%',
          '企业级许可证，年费100-300万',
        ],
      },
    ],
  },
  {
    id: 'operations-suitability',
    title: '投资者适当性管理系统',
    categoryId: 'operations',
    group: '4.3 合规与风控管理',
    icon: '⚖️',
    summary: '动态评估风险承受力并保障产品适配性的合规工具。',
    detailSections: [
      {
        title: '核心功能',
        items: [
          '持续更新的风险承受能力评估',
          '产品适配度智能匹配',
          '适当性穿透检查（底层资产风险 vs 客户承受力）',
        ],
      },
    ],
  },
  {
    id: 'operations-executive-dashboard',
    title: '高管战略决策系统',
    categoryId: 'operations',
    group: '4.4 战略决策支持',
    icon: '🏢',
    summary: '为高管层提供宏观洞察、战略模拟与ESG监控的驾驶舱。',
    detailSections: [
      {
        title: '目标用户',
        items: ['CEO', 'CFO', 'CRO', '董事会成员'],
      },
      {
        title: '核心功能',
        items: [
          '宏观趋势分析，评估利率与监管政策影响',
          '业务健康度诊断与早期风险预警',
          '战略模拟（例如裁撤网点的影响测算）',
          '竞争对手分析',
          'ESG指标监控（普惠金融、投资者教育、绿色金融）',
        ],
      },
      {
        title: '产品形态',
        items: ['高管驾驶舱大屏 + 移动端'],
      },
      {
        title: '盈利模式',
        items: ['高价定制化项目，年费500-1000万'],
      },
    ],
  },
  {
    id: 'ecosystem-ifa-platform',
    title: '独立理财师工作平台',
    categoryId: 'ecosystem',
    group: '5.1 专业服务机构赋能',
    icon: '🤝',
    summary: '帮助IFA拥有机构级能力的SaaS平台，覆盖管理与获客全流程。',
    detailSections: [
      {
        title: '目标用户',
        items: ['独立理财师（IFA）', '个人财富管理工作室'],
      },
      {
        title: '痛点',
        items: ['缺乏技术支持、品牌背书与产品资源'],
      },
      {
        title: '核心功能',
        items: [
          '提供完整9-Agent能力',
          '客户管理CRM',
          '产品货架对接百余基金与保险公司',
          '品牌白标能力',
          '业绩归因分析（客户与产品贡献）',
        ],
      },
      {
        title: '商业模式',
        items: [
          'SaaS订阅：¥3000-8000/月/顾问',
          '交易分成模式',
          '市场规模：国内10万+IFA，美国30万+',
        ],
      },
    ],
  },
  {
    id: 'ecosystem-wealth-white-label',
    title: '三方财富公司白标平台',
    categoryId: 'ecosystem',
    group: '5.1 专业服务机构赋能',
    icon: '🏷️',
    summary: '为三方财富机构提供后台引擎与白标方案，实现品牌自有化。',
    detailSections: [
      {
        title: '目标用户',
        items: ['三方财富公司（如诺亚财富、恒天财富）'],
      },
      {
        title: '合作模式',
        items: [
          '机构使用自有品牌对客服务',
          '后台采用9-Agent引擎提供能力',
        ],
      },
      {
        title: '收费模式',
        items: ['按员工数订阅', '按交易量分成'],
      },
    ],
  },
  {
    id: 'ecosystem-insurance-collaboration',
    title: '保险经纪人协同工具',
    categoryId: 'ecosystem',
    group: '5.1 专业服务机构赋能',
    icon: '🛡️',
    summary: '让保险经纪人与理财方案协同，挖掘交叉销售机会。',
    detailSections: [
      {
        title: '目标用户',
        items: ['保险经纪人', '保险代理人'],
      },
      {
        title: '应用场景',
        items: ['客户购买保险后需要综合财富规划'],
      },
      {
        title: '核心功能',
        items: [
          '保险缺口分析',
          '保险+理财一体化方案设计',
          '交叉销售线索挖掘（如年金险机会）',
        ],
      },
      {
        title: '盈利模式',
        items: ['交易分成'],
      },
    ],
  },
  {
    id: 'ecosystem-enterprise-benefits',
    title: '企业员工福利理财平台',
    categoryId: 'ecosystem',
    group: '5.2 企业端服务',
    icon: '💼',
    summary: '企业采购的员工财务健康计划，提供集体开户与个性化服务。',
    detailSections: [
      {
        title: '目标用户',
        items: ['企业HR', '福利部门'],
      },
      {
        title: '使用场景',
        items: [
          '企业为员工提供财务健康服务（类似EAP）',
          '股权激励行权后的财富管理',
          '年终奖理财规划',
        ],
      },
      {
        title: '核心功能',
        items: [
          '员工集体开户（企业统一采购）',
          '员工个性化服务（每位员工拥有独立9-Agent）',
          '企业端统计分析（财务健康度报告）',
        ],
      },
      {
        title: '盈利模式',
        items: [
          '按员工数收费：¥200-500/人/年',
          '大型企业定制化项目',
        ],
      },
    ],
  },
  {
    id: 'ecosystem-tax-collaboration',
    title: '会计师/税务师协同工具',
    categoryId: 'ecosystem',
    group: '5.2 企业端服务',
    icon: '🧾',
    summary: '连接税务专家与财富规划的协同平台，兼顾节税与投资。',
    detailSections: [
      {
        title: '目标用户',
        items: ['会计师事务所', '税务师'],
      },
      {
        title: '应用场景',
        items: ['为高净值客户进行税务筹划时的投资配置需求'],
      },
      {
        title: '核心功能',
        items: [
          '税收优惠账户规划（个人养老金、年金险等）',
          '节税投资品筛选（国债、地方债）',
          '捐赠抵税方案设计',
          '跨境财富税务合规建议',
        ],
      },
      {
        title: '盈利模式',
        items: ['按使用次数计费或年费订阅'],
      },
    ],
  },
  {
    id: 'ecosystem-regtech',
    title: '金融监管科技平台',
    categoryId: 'ecosystem',
    group: '5.3 监管与政府服务',
    icon: '🏛️',
    summary: '支持监管机构进行行业风险监测与创新产品评估的平台。',
    detailSections: [
      {
        title: '目标用户',
        items: ['银保监会', '证监会', '地方金融办'],
      },
      {
        title: '核心功能',
        items: [
          '行业风险监测，识别错配销售等问题',
          '市场操纵行为识别',
          '金融创新产品风险评估',
          '投资者保护效果评价',
        ],
      },
      {
        title: '数据来源',
        items: ['接入各机构脱敏数据（监管要求）'],
      },
      {
        title: '商业模式',
        items: ['B2G政府采购'],
      },
    ],
  },
  {
    id: 'ecosystem-investor-education',
    title: '投资者教育公益平台',
    categoryId: 'ecosystem',
    group: '5.3 监管与政府服务',
    icon: '📚',
    summary: '面向政府与社区的投资者教育平台，聚焦防诈与财商普及。',
    detailSections: [
      {
        title: '目标用户',
        items: ['政府机构', '社区组织', '老年大学'],
      },
      {
        title: '核心功能',
        items: [
          '金融诈骗防范教育（识别杀猪盘等）',
          '财商基础教育',
          '投资者权益保护知识普及',
        ],
      },
      {
        title: '商业模式',
        items: ['政府采购', '企业社会责任（CSR）项目'],
      },
    ],
  },
  {
    id: 'ecosystem-dispute-resolution',
    title: '投诉处理与纠纷调解系统',
    categoryId: 'ecosystem',
    group: '5.3 监管与政府服务',
    icon: '🧑\u200d⚖️',
    summary: '帮助投资者保护机构高效分析投诉并生成调解方案。',
    detailSections: [
      {
        title: '目标用户',
        items: ['投资者保护机构', '消费者协会'],
      },
      {
        title: '核心功能',
        items: [
          '自动分析投诉案件类型',
          '证据链还原（调取VTM交互记录与录音）',
          '调解方案生成（基于历史判例）',
          '黑名单管理（劣迹机构与顾问）',
        ],
      },
      {
        title: '商业模式',
        items: ['政府购买服务'],
      },
    ],
  },
]
