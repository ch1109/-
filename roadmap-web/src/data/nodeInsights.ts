import type { NodeInsight } from '../types/roadmap';

export const nodeInsights: NodeInsight[] = [
  {
    nodeId: '1',
    label: '智能接待与场景识别',
    triggers: {
      system: '系统启动 / 用户进入 VTM 机。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '理财 Agent 调度协调管家（Orchestrator）',
      '客户理财顾问（Client Financial Coach）',
    ],
    coreFunctions: [
      '根据身份与渠道标签动态生成欢迎脚本',
      '展示 AI 理财的三大核心价值与体验路径',
      '捕捉口述或点选意图并分流后续流程',
    ],
    requiredCapabilities: [
      '场景识别与路由：识别到店客群并匹配迎宾策略（Orchestrator）。',
      '体验连贯保障：保持人格一致与跨触点记忆传递（Orchestrator）。',
      '高情商沟通：快速共情并化解初次疑虑（Client Financial Coach）。',
    ],
    requiredData: [
      '个人基础信息与客户等级（L1：银行核心系统）。',
      '渠道来源与历史来访记录（L1：银行客户标签）。',
      '停留热图与交互轨迹（L3：全渠道行为日志）。',
    ],
    dataSupportedFunctions: [
      '基于客户等级选择不同迎宾策略',
      '通过行为热度推荐最匹配的 Demo 与问答',
      '识别老客户后直接调出资产概览入口',
    ],
    productFeatures: [
      '智能迎宾屏与语音欢迎',
      '点选+对话双入口操作区',
      '即时意图捕捉面板',
    ],
  },
  {
    nodeId: '2',
    label: '首次接触与认知建立',
    triggers: {
      system: '节点1识别探索意图后分流至内容区。',
      user: '',
      data: '客户标签=新客户。',
      time: '',
    },
    aiRoles: [
      '理财 Agent 调度协调管家（Orchestrator）',
      '客户理财顾问（Client Financial Coach）',
      '市场研究员（Market Researcher）',
    ],
    coreFunctions: [
      '推送与用户画像匹配的真实案例与数据证据',
      '智能问答墙预判并回答常见顾虑',
      '引导用户进入体验路径或预约后续服务',
    ],
    requiredCapabilities: [
      '资讯智能推送：依据用户画像匹配案例与问答内容（Market Researcher）。',
      '冲突消解与内容编排：在教育与转化之间平衡节奏（Orchestrator）。',
      '认知偏差识别：针对“怕被推销”等偏差给出安抚话术（Client Financial Coach）。',
    ],
    requiredData: [
      '客群画像与疑虑标签（L1：银行客户基础信息 + L3 行为日志）。',
      '历史问答语料与高频顾虑统计（L2：客服/社区数据）。',
      '成功案例库：画像×方案×结果沉淀（L2：行业知识库）。',
    ],
    dataSupportedFunctions: [
      '匹配相似客群案例增强代入感',
      '根据疑虑标签排序问答墙内容',
      '记录观看行为为后续画像补充兴趣标签',
    ],
    productFeatures: [
      '沉浸式演示视频播放器',
      '动态问答墙与案例滑动组件',
      '体验路径选择器（继续/预约/了解更多）',
    ],
  },
  {
    nodeId: '2.1',
    label: '老客户识别与快速服务',
    triggers: {
      system: '节点1刷卡 / 人脸识别成功。',
      user: '',
      data: '客户标签=老客户。',
      time: '',
    },
    aiRoles: ['财富管家（Wealth Steward）', '财富规划师（Wealth Planner）'],
    coreFunctions: [
      '呈现资产概览、收益与目标进度',
      '推送智能提醒（定投、调仓、待办）',
      '提供一键执行的快捷操作入口',
    ],
    requiredCapabilities: [
      '七维持仓体检：快速呈现收益、风险与目标匹配度（Wealth Steward）。',
      '闲置资金识别与快捷执行：联动交易管道完成追加/赎回（Wealth Steward）。',
      '现金流工程与目标校准：结合资产概览更新目标进度（Wealth Planner）。',
    ],
    requiredData: [
      '本行账户资产、收益与交易记录（L1：活期/定期/理财/基金持仓）。',
      '定投任务、提醒清单与目标档案（L1：内部任务/目标数据）。',
      '风险测评结果与适当性记录（L1：合规系统）。',
    ],
    dataSupportedFunctions: [
      '识别闲置资金与追加机会',
      '基于历史持仓推送优化建议',
      '在提醒触发阈值时及时提示处理',
    ],
    productFeatures: [
      '资产概览与收益趋势仪表盘',
      '智能提醒与快捷操作面板',
      'VIP 体验动画与语音欢迎',
    ],
  },
  {
    nodeId: '3',
    label: '激活注册与授权',
    triggers: {
      system: '节点2客户点击继续办理进入注册流程。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '理财 Agent 调度协调管家（Orchestrator）',
      '风控合规官（Risk & Compliance Officer）',
    ],
    coreFunctions: [
      '协同硬件完成身份核验与银行卡绑定',
      '解释不同授权级别对应的功能范围',
      '监控异常行为（多次失败、风险名单）并给出替代方案',
    ],
    requiredCapabilities: [
      '意图理解与流程编排：引导用户按顺序完成实名、绑卡与授权（Orchestrator）。',
      '合规审核与实时干预：对接 KYC、名单匹配与授权合法性校验（Risk & Compliance Officer）。',
      '冲突消解与兜底：在失败或超时场景触发备用流程与人工协助（Orchestrator）。',
    ],
    requiredData: [
      '实名身份、银行卡与人脸比对记录（L1：银行 KYC 数据）。',
      '风控黑名单、设备指纹、操作日志（L1：风险管理系统）。',
      '授权档位-功能映射、条款版本与合规指引（L1：合规知识库）。',
    ],
    dataSupportedFunctions: [
      '根据风险等级调整核验策略',
      '展示不同授权档位可使用的功能范围',
      '记录授权日志供合规审计',
    ],
    productFeatures: [
      '分步注册向导与进度条',
      '授权矩阵提示面板',
      '游客模式与模拟数据体验按钮',
    ],
  },
  {
    nodeId: '4',
    label: '隐私模式选择',
    triggers: {
      system: '节点3注册成功且授权档位已确认。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '理财 Agent 调度协调管家（Orchestrator）',
      '风控合规官（Risk & Compliance Officer）',
    ],
    coreFunctions: [
      '提供标准屏、手机输入、资料上传等多种模式',
      '同步展示隐私保护措施与数据安全说明',
      '记录模式切换与填写进度避免数据丢失',
    ],
    requiredCapabilities: [
      '体验连贯保障：在模式切换时保持流程连续与记忆同步（Orchestrator）。',
      '敏感字段识别与提醒策略：提前感知隐私风险并提供替代方案（Risk & Compliance Officer）。',
      '跨端同步与安全传输：保障手机输入、资料上传的数据安全（Orchestrator）。',
    ],
    requiredData: [
      '敏感字段清单与分级策略（L1：合规知识库）。',
      '设备状态、隐私屏控制与摄像头监测（L1：设备监控数据）。',
      '用户隐私偏好、模式选择与操作日志（L3：行为埋点 + L1 系统日志）。',
    ],
    dataSupportedFunctions: [
      '根据问题敏感度自动弹出隐私提示',
      '跨端同步未完成的填写项',
      '向合规系统同步隐私操作轨迹',
    ],
    productFeatures: [
      '隐私模式选择器',
      '手机扫码快速切换界面',
      '隐私保护说明与状态指示',
    ],
  },
  {
    nodeId: '5',
    label: '新手引导与财商教育',
    triggers: {
      system: '节点4隐私模式已选定。',
      user: '',
      data: '用户标签=理财新手。',
      time: '',
    },
    aiRoles: [
      '财富规划师（Wealth Planner）',
      '客户理财顾问（Client Financial Coach）',
      '理财 Agent 调度协调管家（Orchestrator）',
    ],
    coreFunctions: [
      '判断理财认知等级并推荐学习路径',
      '通过互动任务完成目标设定与基础诊断',
      '记录学习行为补齐画像标签',
    ],
    requiredCapabilities: [
      '财商教育：用通俗语言讲解核心概念并纠正误区（Wealth Planner）。',
      '认知偏差识别：观察学习过程中的犹豫与抗拒（Client Financial Coach）。',
      '任务编排与激励：编排学习路径与即时奖励（Orchestrator）。',
    ],
    requiredData: [
      '理财教育素材库与案例模板（L2：行业知识库）。',
      '风险测评、收入与基础画像字段（L1：银行客户数据）。',
      '学习行为日志与偏好标签（L3：教育任务埋点）。',
    ],
    dataSupportedFunctions: [
      '根据画像选择适合的小白/进阶路径',
      '捕捉卡点并推送人工或额外内容',
      '将学习完成情况写入画像供后续策略使用',
    ],
    productFeatures: [
      '任务清单与进度条',
      '互动测验与即时反馈组件',
      '成就徽章与积分激励',
    ],
  },
  {
    nodeId: '6',
    label: '核心画像构建',
    triggers: {
      system: '节点5快速诊断完成；或识别为有经验用户直接进入画像。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '财富规划师（Wealth Planner）',
      '风控合规官（Risk & Compliance Officer）',
      '理财 Agent 调度协调管家（Orchestrator）',
    ],
    coreFunctions: [
      '多轮对话/表单采集基础、财务、心理、行为信息',
      '自动填充系统已有数据并请用户确认',
      '生成实时画像概要供用户校对与后续规划使用',
    ],
    requiredCapabilities: [
      '多轮对话理解与缺口追问：识别画像空白并引导补充（Wealth Planner）。',
      '数据可信度校验与异常识别：结合风控阈值判断异常回答（Risk & Compliance Officer）。',
      '上下文编排与自动填充：利用已有数据预填并让用户确认（Orchestrator）。',
    ],
    requiredData: [
      '基础身份、交易流水、风险测评（L1：银行核心数据）。',
      '资产负债、家庭结构、授权档位等补充信息（L2：用户输入/外部授权）。',
      '行为标签、学习记录与任务完成度（L3：行为埋点数据）。',
    ],
    dataSupportedFunctions: [
      '自动填充已知字段减少重复输入',
      '结合家庭与负债信息输出更精准建议',
      '监控画像变化触发再评估任务',
    ],
    productFeatures: [
      '渐进式问卷与对话结合界面',
      '实时画像预览与编辑卡片',
      '画像完整度进度与提醒',
    ],
  },
  {
    nodeId: '7',
    label: '需求挖掘与目标澄清',
    triggers: {
      system: '节点6核心画像完成。',
      user: '节点2.1老客户选择“设定新目标”。',
      data: '',
      time: '',
    },
    aiRoles: [
      '财富规划师（Wealth Planner）',
      '投资策略师（Investment Strategist）',
    ],
    coreFunctions: [
      '将模糊愿望转化为 SMART 目标并校验可行性',
      '评估现金流与定投能力，给出多档方案',
      '识别多目标冲突并提供排序或组合策略',
    ],
    requiredCapabilities: [
      '现金流工程：评估收支、算出可投入金额与应急金（Wealth Planner）。',
      '目标架构设计：识别多目标冲突并给出排序与折衷方案（Wealth Planner）。',
      '情景模拟与达成率计算：基于市场假设评估方案可行性（Investment Strategist）。',
    ],
    requiredData: [
      '收入与支出流水（L1：工资卡流水、信用卡还款、消费记录）。',
      '资产负债明细（L1：存款、理财、基金、房贷、车贷数据）。',
      '风险测评结果与家庭结构标签（L1：风险问卷 + 客户基础信息）。',
    ],
    dataSupportedFunctions: [
      '根据现金流计算可承受的定投金额',
      '利用负债与目标信息判断可行性与时间轴',
      '将家庭结构与风险偏好用于排序建议',
    ],
    productFeatures: [
      '目标问答向导与 SMART 转换器',
      '可行性热力条与达成率仪表盘',
      '多目标甘特图与资源分配模拟',
    ],
  },
  {
    nodeId: '8',
    label: '方案设计与策略制定',
    triggers: {
      system: '节点7目标具体化完成且定投金额已确定。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '投资策略师（Investment Strategist）',
      '投资顾问（Investment Advisor）',
    ],
    coreFunctions: [
      '结合资产目标生成保守/稳健/进取三档策略',
      '展示蒙特卡洛模拟、历史回测与压力测试结果',
      '实时响应金额、期限调整给出新预期与风险提示',
    ],
    requiredCapabilities: [
      '资产配置方法论：构建保守/稳健/进取多档策略并设置再平衡（Investment Strategist）。',
      '情景模拟与压力测试：运行蒙特卡洛、历史回测与最坏情况演练（Investment Strategist）。',
      '产品筛选与持仓穿透：比较费率、风险与底层资产以生成推荐理由（Investment Advisor）。',
    ],
    requiredData: [
      '客户资产结构、目标约束与风险等级（L1：画像与目标数据）。',
      '产品库、费率、风险评级与底层资产明细（L1：产品系统 + L2：公开披露）。',
      '历史净值、收益率、波动率与行情指标（L2：基金公司/第三方数据）。',
    ],
    dataSupportedFunctions: [
      '根据产品库与风险约束选择适配资产组合',
      '利用净值历史完成回测与压力测试',
      '根据费率与流动性数据提示成本影响',
    ],
    productFeatures: [
      '方案卡片滑动展示',
      '配置逻辑与历史回测可视化',
      '参数调节面板与实时计算',
    ],
  },
  {
    nodeId: '9',
    label: '方案对比与疑虑解答',
    triggers: {
      system: '节点8客户选定方案进入确认环节。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '客户理财顾问（Client Financial Coach）',
      '投资顾问（Investment Advisor）',
    ],
    coreFunctions: [
      '预判最常见疑虑并给出结构化解答',
      '透明披露费用、风险与不适用情况',
      '随时转接人工并同步上下文记录',
    ],
    requiredCapabilities: [
      '疑虑预测与知识检索：提前准备高频问题的结构化回答（Investment Advisor）。',
      '高情商沟通与认知偏差拆解：化解“怕亏”“怕被推销”等顾虑（Client Financial Coach）。',
      '费用拆解与最坏情况演示：透明披露成本与风险（Investment Advisor）。',
    ],
    requiredData: [
      '产品费用、佣金与返费明细（L1/L2：产品与销售系统）。',
      '历史疑虑、投诉与问答语料（L2：客服/运营系统）。',
      '客户画像、风险等级与适当性规则（L1：画像 + 合规系统）。',
    ],
    dataSupportedFunctions: [
      '根据画像推送最相关的疑虑列表',
      '用真实费用数据演示成本差异',
      '记录疑虑标签反馈给产品与合规团队',
    ],
    productFeatures: [
      '智能问答墙与费用披露卡片',
      '风险提示与“负面信息”专区',
      '人工咨询入口与对话记录同步',
    ],
  },
  {
    nodeId: '10',
    label: '智能转接与协同',
    triggers: {
      system: '节点9检测到复杂情形（金额 >100 万 / 特殊需求 / 置信度低）。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '理财 Agent 调度协调管家（Orchestrator）',
      '客户理财顾问（Client Financial Coach）',
    ],
    coreFunctions: [
      '判断是否需要转人工并选择合适的顾问类型',
      '传递完整上下文让顾问无需重复问答',
      '在人工结束后继续承接 AI 流程与记录',
    ],
    requiredCapabilities: [
      '场景识别与路由：根据金额、情绪与复杂度选择合适顾问（Orchestrator）。',
      '上下文共享与 SLA 监控：保障转接前后台信息同步并监控响应时效（Orchestrator）。',
      '高情商沟通：在转接前后安抚情绪并设定预期（Client Financial Coach）。',
    ],
    requiredData: [
      '客户画像、方案详情与最新疑虑记录（L1：画像 + 交互日志）。',
      '顾问技能标签、排班与可用性（L2：客服/CRM 系统）。',
      '通话/聊天记录、质检与满意度指标（L2：客服语音平台）。',
    ],
    dataSupportedFunctions: [
      '根据问题类型匹配最合适的顾问',
      '向顾问推送关键背景与提醒',
      '在人工回传建议后同步更新画像与任务',
    ],
    productFeatures: [
      '智能转接提示与原因说明',
      '顾问信息卡与排队进度条',
      '对话纪要与流程回到 AI 路径',
    ],
  },
  {
    nodeId: '11',
    label: '临门决策犹豫期',
    triggers: {
      system: '节点9所有疑虑已解答。',
      user: '节点10人工咨询完成并回传结果。',
      data: '',
      time: '',
    },
    aiRoles: [
      '客户理财顾问（Client Financial Coach）',
      '财富规划师（Wealth Planner）',
    ],
    coreFunctions: [
      '识别犹豫类型并提供针对性缓释方案',
      '提供阶梯式入场、金额拆分等可执行建议',
      '用决策清单确认用户已了解风险与关键事项',
    ],
    requiredCapabilities: [
      '犹豫信号检测与原因分类：结合行为和对话判定犹豫类型（Client Financial Coach）。',
      '心理账户干预与苏格拉底式提问：帮助用户自证决策合理性（Client Financial Coach）。',
      '现金流工程与风险再确认：用数据说明调整方案的影响（Wealth Planner）。',
    ],
    requiredData: [
      '行为埋点：停留时间、鼠标轨迹与反复操作记录（L3：交互埋点）。',
      '方案指标：达成率、回撤、收益曲线与最坏情景（L1/L2：策略与行情数据）。',
      '历史犹豫原因、成功案例与缓释话术库（L2：客服与知识库）。',
    ],
    dataSupportedFunctions: [
      '根据行为特征自动识别犹豫类型',
      '引用真实案例与数据缓释担忧',
      '记录犹豫原因用于后续跟进与产品优化',
    ],
    productFeatures: [
      '犹豫原因选择器与建议弹窗',
      '阶梯建仓/金额拆分模拟器',
      '七项决策清单勾选确认',
    ],
  },
  {
    nodeId: '12',
    label: '首次成交与确认',
    triggers: {
      system: '节点11客户克服犹豫并点击确认提交。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '客户理财顾问（Client Financial Coach）',
      '财富管家（Wealth Steward）',
    ],
    coreFunctions: [
      '实时同步交易状态与到账进度',
      '营造成就仪式并设定合理预期',
      '引导用户开启后续提醒与陪伴服务',
    ],
    requiredCapabilities: [
      '交易状态订阅与推送：实时同步到账、失败与异常（Wealth Steward）。',
      '成就激励与高情商话术：营造成就仪式并设定预期（Client Financial Coach）。',
      '提醒与任务编排：引导开启后续陪伴与再平衡任务（Wealth Steward）。',
    ],
    requiredData: [
      '交易流水、状态与费用明细（L1：交易核心系统）。',
      '方案关键指标、目标信息与风险提示（L1：画像/方案库）。',
      '通知模板、激励策略与权益说明（L2：运营/知识库）。',
    ],
    dataSupportedFunctions: [
      '同步不同渠道的到账状态并提醒异常',
      '根据方案结果提醒预计收益与风险',
      '记录提醒偏好用于后续触达',
    ],
    productFeatures: [
      '交易状态页与到账进度条',
      '成就动画与感谢信',
      '一键开启智能提醒设置',
    ],
  },
  {
    nodeId: '13',
    label: '移动端过渡引导',
    triggers: {
      system: '节点12交易成功回执确认。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '理财 Agent 调度协调管家（Orchestrator）',
      '客户理财顾问（Client Financial Coach）',
    ],
    coreFunctions: [
      '说明 App 独家功能与随身价值',
      '实现扫码后一键识别并同步数据',
      '在用户拒绝时记录原因并提供替代方案',
    ],
    requiredCapabilities: [
      '跨端账号绑定与数据同步：让 VTM → App 的迁移无缝衔接（Orchestrator）。',
      '功能差异说明与权益计算：用用户语言解释迁移价值（Client Financial Coach）。',
      '下载状态跟踪与提醒编排：根据行为触发二次提醒（Orchestrator）。',
    ],
    requiredData: [
      '账号关联信息、授权记录与设备绑定（L1：用户账号系统）。',
      'App 功能清单、权益规则与任务激励（L2：产品/运营知识库）。',
      '下载行为日志、失败原因与提醒历史（L3：分发与行为埋点数据）。',
    ],
    dataSupportedFunctions: [
      '根据功能差异生成个性化价值陈述',
      '同步 VTM 成交数据到 App 初始状态',
      '记录拒绝原因用作后续产品优化',
    ],
    productFeatures: [
      'App 价值对比面板',
      '扫码下载与短信链接双选项',
      '设置向导与数据同步进度提示',
    ],
  },
  {
    nodeId: '14',
    label: '深度画像构建（完整版）',
    triggers: {
      system: '节点13 App 首次登录成功（可选节点）。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '财富规划师（Wealth Planner）',
      '理财 Agent 调度协调管家（Orchestrator）',
    ],
    coreFunctions: [
      '通过 20-30 轮对话完成五维画像标签',
      '实时呈现画像仪表与矛盾提醒',
      '允许用户编辑、删除标签并补充证据',
    ],
    requiredCapabilities: [
      '多轮对话理解与缺口追问：保持深度画像对话连续（Wealth Planner）。',
      '画像标签生成与矛盾检测：识别冲突并提示核实（Wealth Planner）。',
      '上下文管理与自动话题切换：穿插已有数据预填和补问（Orchestrator）。',
    ],
    requiredData: [
      '历史对话语料、标签与满意度标注（L3：对话日志）。',
      '标签体系、画像模板与策略依赖（L1/L2：知识库与产品配置）。',
      '用户基础、交易与持仓数据（L1：银行/证券数据）。',
    ],
    dataSupportedFunctions: [
      '基于过往回答与行为提供更精准追问',
      '矛盾检测提醒用户核实信息',
      '将新增标签同步给策略与营销系统',
    ],
    productFeatures: [
      '多轮对话界面与画像实时面板',
      '标签编辑与证据上传功能',
      '画像完整度进度条与提醒列表',
    ],
  },
  {
    nodeId: '15',
    label: '首次持仓关键陪伴期（72小时）',
    triggers: {
      system: '节点14深度画像完成。',
      user: '节点13客户选择不下载 App。',
      data: '',
      time: '',
    },
    aiRoles: [
      '客户理财顾问（Client Financial Coach）',
      '风控合规官（Risk & Compliance Officer）',
      '财富管家（Wealth Steward）',
    ],
    coreFunctions: [
      '分阶段推送认知强化与情绪安抚内容',
      '监控高危行为并提供干预方案',
      '引导加入社群与持续陪伴渠道',
    ],
    requiredCapabilities: [
      '情绪与行为预警模型：识别高频查看、恐慌言辞等信号（Risk & Compliance Officer）。',
      '情景化教育与心理干预话术：针对浮亏浮盈提供安心路径（Client Financial Coach）。',
      '七维体检与提醒编排：根据收益、风险及时推送任务（Wealth Steward）。',
    ],
    requiredData: [
      '持仓、收益变动与费用数据（L1：账户持仓 + 费率信息）。',
      '市场波动、指数与行业事件（L2：行情接口）。',
      '查看频次、通知触达、互动行为日志（L3：行为埋点）。',
    ],
    dataSupportedFunctions: [
      '根据波动和行为自动匹配安抚话术',
      '推送浮盈/浮亏不同情景策略',
      '识别高风险行为触发人工跟进',
    ],
    productFeatures: [
      '72 小时陪伴任务编排',
      '情绪监测与安抚推送',
      '社群邀请与市场简报订阅',
    ],
  },
  {
    nodeId: '16',
    label: '持有期日常管理',
    triggers: {
      system: '节点15陪伴流程已切换至常态管理。',
      user: '',
      data: '',
      time: '72 小时陪伴任务平稳结束。',
    },
    aiRoles: [
      '财富管家（Wealth Steward）',
      '投资策略师（Investment Strategist）',
    ],
    coreFunctions: [
      '提供分层提醒与定期健康报告',
      '识别再平衡、闲置资金等优化机会',
      '根据偏好推送合适的市场与策略信息',
    ],
    requiredCapabilities: [
      '资产监控与偏离识别：跟踪收益、风险、配置是否偏离（Wealth Steward）。',
      '提醒编排与频控：分层推送日/周/月提醒并控制频率（Wealth Steward）。',
      '行业与市场信息匹配：将研究洞察转换为个性化简报（Investment Strategist）。',
    ],
    requiredData: [
      '账户持仓、交易与定投执行数据（L1：银行/券商系统）。',
      '市场与行业研究数据（L2：行情、研究报告、政策信息）。',
      '偏好标签与互动行为（L3：查看、点击、订阅记录）。',
    ],
    dataSupportedFunctions: [
      '根据资产偏离度自动生成再平衡任务',
      '结合市场信息撰写个性化简报',
      '跟踪提醒完成情况优化触达策略',
    ],
    productFeatures: [
      '智能提醒中心',
      '月度财富健康报告',
      '分层市场简报订阅与一键执行入口',
    ],
  },
  {
    nodeId: '17',
    label: '策略动态调整与再平衡',
    triggers: {
      system: '节点16检测到策略调整信号（目标/风险/市场/人生阶段/表现偏离）。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '投资策略师（Investment Strategist）',
      '风控合规官（Risk & Compliance Officer）',
    ],
    coreFunctions: [
      '解释触发信号与数据依据',
      '提供调整与不调整的对比结果',
      '执行后持续追踪效果并复盘',
    ],
    requiredCapabilities: [
      '多信号融合预警：结合市场、画像与行为触发阈值（Risk & Compliance Officer）。',
      '策略仿真与情景比较：展示调整 vs 不调整的收益/风险差异（Investment Strategist）。',
      '执行监控与效果回溯：追踪采纳后的表现并沉淀案例（Investment Strategist）。',
    ],
    requiredData: [
      '目标、风险承受力、现金流等画像数据（L1/L2：画像+授权信息）。',
      '当前持仓、历史表现与成本（L1：交易/持仓数据）。',
      '市场指数、波动率、利率等宏观数据（L2：行情与研究）。',
    ],
    dataSupportedFunctions: [
      '合成触发信号并打标签',
      '生成五维调整方案与图表解释',
      '记录采纳/拒绝结果用于模型优化与复盘',
    ],
    productFeatures: [
      '触发信号解释面板',
      '调整 vs 不调整对比卡片',
      '执行按钮与效果追踪看板',
    ],
  },
  {
    nodeId: '18',
    label: '持仓体检与优化建议',
    triggers: {
      system: '节点16的定期体检周期到达。',
      user: '',
      data: '',
      time: '季度 / 半年度体检日程。',
    },
    aiRoles: [
      '财富管家（Wealth Steward）',
      '投资顾问（Investment Advisor）',
    ],
    coreFunctions: [
      '基于七维指标输出量化健康评分',
      '列出问题清单与具体优化建议',
      '提供产品替换与费率降低方案对比',
    ],
    requiredCapabilities: [
      '七维体检模型：诊断收益、风险、配置、质量、成本、流动性与目标匹配度（Wealth Steward）。',
      '产品替换评估与费率对比：给出替代方案与节费测算（Investment Advisor）。',
      '执行后影响模拟：展现替换后收益/风险/费率变化（Investment Advisor）。',
    ],
    requiredData: [
      '持仓明细、收益、成本与分红记录（L1：账户持仓数据）。',
      '基金/理财底层资产、经理变动、净值历史（L2：基金公司/第三方数据）。',
      '费率、托管费、销售费等费用明细（L1/L2：产品与销售系统）。',
    ],
    dataSupportedFunctions: [
      '根据健康评分自动排序问题严重程度',
      '对比替换前后收益、风险与费用差异',
      '估算费率优化可节省金额与回本周期',
    ],
    productFeatures: [
      '七维健康雷达图与评分卡',
      '问题清单与建议执行按钮',
      '费率优化节省计算器',
    ],
  },
  {
    nodeId: '19',
    label: '目标达成与成就庆祝',
    triggers: {
      system: '节点16监测到目标达成（完成率 100%）。',
      user: '',
      data: '',
      time: '',
    },
    aiRoles: [
      '客户理财顾问（Client Financial Coach）',
      '财富规划师（Wealth Planner）',
    ],
    coreFunctions: [
      '营造仪式感并展示关键成果与数据',
      '总结成功经验与关键决策复盘',
      '引导选择新的目标或升级服务',
    ],
    requiredCapabilities: [
      '旅程回溯与故事化呈现：用用户语言回顾关键决策（Client Financial Coach）。',
      '成就激励与感谢体系：设计仪式感与分享机制（Client Financial Coach）。',
      '新目标推荐与快速启动：结合画像规划下一阶段路线图（Wealth Planner）。',
    ],
    requiredData: [
      '目标时间线、投入与收益记录（L1：目标与交易数据）。',
      '行为里程碑、学习记录与任务完成度（L3：任务/教育埋点）。',
      '成功案例、社群模板与权益清单（L2：知识库/运营素材）。',
    ],
    dataSupportedFunctions: [
      '生成成就卡片与时间轴故事线',
      '总结关键决策与对应数据证据',
      '根据兴趣与画像推荐下一目标',
    ],
    productFeatures: [
      '庆祝动画与成就徽章',
      '投资旅程时间轴与总结报告',
      '新目标推荐与一键启动',
    ],
  },
  {
    nodeId: '20',
    label: '市场危机应对机制（系统触发）',
    triggers: {
      system: '节点16检测市场暴跌 >3% 或波动异常。',
      user: '',
      data: '节点15情绪雷达 = 极度恐慌。',
      time: '',
    },
    aiRoles: [
      '风控合规官（Risk & Compliance Officer）',
      '客户理财顾问（Client Financial Coach）',
    ],
    coreFunctions: [
      '快速通报事件背景与历史对比稳定情绪',
      '给出坚持/调整/观望三档策略与后果',
      '提供情绪安抚与坚持激励机制',
    ],
    requiredCapabilities: [
      '实时行情监控与敞口识别：量化冲击并分级预警（Risk & Compliance Officer）。',
      '情绪识别与安抚话术：在危机中共情并稳定情绪（Client Financial Coach）。',
      '策略模拟与风险提示：给出坚持/调整/观望三档方案（Risk & Compliance Officer）。',
    ],
    requiredData: [
      '实时指数、行业与宏观数据（L2：行情数据接口）。',
      '用户持仓、成本、止盈止损设置与杠杆（L1：账户数据）。',
      '历史危机应对案例、教育素材与激励规则（L2：知识库/运营素材）。',
    ],
    dataSupportedFunctions: [
      '根据持仓敞口评估影响程度与个性化策略',
      '引用历史数据与对比图减轻恐慌',
      '统计坚持奖励条件并自动发放激励',
    ],
    productFeatures: [
      '三色预警系统与时间线',
      '危机解读与策略选择器',
      '情绪安抚对话与坚持激励面板',
    ],
  },
  {
    nodeId: '21',
    label: '个人财务危机预警与应对（数据触发）',
    triggers: {
      system: '节点16常态监控触发个人财务危机警报。',
      user: '',
      data: '收入骤降 / 支出激增 / 债务压力 / 家庭变故 / 心理压力信号。',
      time: '',
    },
    aiRoles: [
      '风控合规官（Risk & Compliance Officer）',
      '理财 Agent 调度协调管家（Orchestrator）',
      '客户理财顾问（Client Financial Coach）',
    ],
    coreFunctions: [
      '识别财务危机类型与严重程度',
      '输出收入、支出、债务、家庭等情景预案',
      '提供共情话术、资源推荐与人工接力通道',
    ],
    requiredCapabilities: [
      '危机评分与分级：融合收入、支出、负债、行为信号判断严重度（Risk & Compliance Officer）。',
      '人文关怀与资源编排：输出共情话术、心理支持与资源指引（Client Financial Coach）。',
      '跨团队调度与任务派发：协调贷款、客服、心理热线等协同跟进（Orchestrator）。',
    ],
    requiredData: [
      '收入、支出、负债数据（L1：银行流水、贷款信息）',
      '家庭事件、保险理赔等外部数据（L2：用户主动输入/授权）',
      '心理压力、客服对话记录与投诉标签（L3：行为+服务数据）',
    ],
    dataSupportedFunctions: [
      '根据危机类型生成个性化应急方案',
      '推荐政府/银行/保险资源与绿色通道',
      '同步任务给人工顾问与后续追踪',
    ],
    productFeatures: [
      '危机信号雷达与等级说明',
      '四大应急方案清单与执行按钮',
      '共情话术、资源推荐与人工求助入口',
    ],
  },
];
