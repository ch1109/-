import { useState, useEffect, useRef } from 'react';
import type { FlowAState, Message, UserProfile, InvestmentPlan } from '../types/financial-prototype';
import './FlowA.css';

interface FlowAProps {
  onBack: () => void;
}

export const FlowA: React.FC<FlowAProps> = ({ onBack }) => {
  const [state, setState] = useState<FlowAState>({
    currentStage: 'initial',
    userProfile: {},
    radarData: {
      dimensions: ['收入稳定性', '储蓄能力', '风险承受', '投资经验', '时间规划'],
      values: [0, 0, 0, 0, 0],
    },
    questionIndex: 0,
    plans: [],
    messages: [],
    isGenerating: false,
    progress: 0,
  });

  const [inputValue, setInputValue] = useState('');
  const [showThinking, setShowThinking] = useState<Record<string, boolean>>({});
  const [showAgentLogs, setShowAgentLogs] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  // 初始化 - 添加欢迎消息
  useEffect(() => {
    if (state.messages.length === 0) {
      addMessage({
        id: 'welcome',
        role: 'ai',
        content: '您好!我是您的AI理财顾问小智。我刚刚分析了您的需求——为孩子规划教育金,这真是一个有远见的决定!💡\n\n让我先了解一下您的具体情况,这样我就能为您量身定制最合适的方案。别担心,我会用最简单的方式和您交流,不会有复杂的金融术语。',
        timestamp: Date.now(),
        thinking: {
          intentRecognition: '✓ 检测到关键词: [孩子] [教育金]\n✓ 用户意图: 理财目标设定 - 教育金规划\n✓ 场景判断: 长期投资规划(15-18年周期)\n✓ 置信度: 98%\n→ 触发AI工作模式',
          knowledgeRetrieval: ['✓ 已加载: 教育金规划知识库', '✓ 已检索: 2024年教育成本数据(国内本科30-50万/4年)', '✓ 已匹配: 长期投资产品库(872只基金)', '✓ 已调用: 家庭财务画像模型'],
          strategySelection: '策略选择: 【苏格拉底式提问法】\n原因: 避免直接索要敏感信息,通过渐进式对话建立信任\n步骤: ①了解家庭结构 → ②明确目标金额 → ③评估财务能力 → ④分析风险偏好 → ⑤生成可行性方案',
          riskCheck: '✓ 风控合规官审核通过\n✓ 无敏感内容\n✓ 符合适当性管理要求\n✓ 已记录用户意图日志',
        },
        agentLogs: [
          {
            agent: '意图识别引擎',
            action: '分析用户输入',
            status: 'completed',
            result: '识别为: 教育金规划场景',
            duration: '0.3秒',
          },
          {
            agent: '数据分析师',
            action: '调取用户基础画像',
            status: 'completed',
            result: '用户类型: 新客户 | 家庭结构: 待确认',
            duration: '0.5秒',
          },
          {
            agent: '财富规划师',
            action: '加载教育金规划模板',
            status: 'completed',
            result: '生成问题清单(5个核心问题)',
            duration: '0.8秒',
          },
          {
            agent: '市场研究员',
            action: '查询最新教育成本数据',
            status: 'completed',
            result: '国内本科: 30-50万/4年 | 海外留学: 80-150万/4年',
            duration: '1.0秒',
          },
        ],
      });

      // 切换到提问阶段
      setTimeout(() => {
        setState(prev => ({ ...prev, currentStage: 'questioning' }));
        askNextQuestion();
      }, 2000);
    }
  }, []);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'> & Partial<Pick<Message, 'id' | 'timestamp'>>) => {
    const newMessage: Message = {
      id: message.id || `msg-${Date.now()}-${Math.random()}`,
      timestamp: message.timestamp || Date.now(),
      ...message,
    };
    setState(prev => ({ ...prev, messages: [...prev.messages, newMessage] }));
  };

  const askNextQuestion = () => {
    const questions = [
      {
        question: '首先,孩子现在几岁呢?',
        description: '这将帮助我计算可用的投资时间。一般来说,距离上大学的时间越长,我们的投资策略就越灵活。',
        field: 'childAge' as keyof UserProfile,
        type: 'slider',
        min: 0,
        max: 18,
        radarIndex: 4,
        aiContext: '了解投资时间跨度,这是制定投资策略的关键因素',
      },
      {
        question: '您期望到时候准备多少教育金呢?',
        description: '💡 参考数据: 国内本科约30-50万,国内本科+研究生约50-80万,海外留学约100-150万',
        field: 'targetAmount' as keyof UserProfile,
        type: 'options',
        options: [30, 50, 100, 200],
        radarIndex: 4,
        aiContext: '明确目标金额,用于后续可行性评估和方案生成',
      },
      {
        question: '方便透露一下您家庭的月收入大概是多少吗?',
        description: '这个信息会严格保密,仅用于评估您的储蓄能力。',
        field: 'monthlyIncome' as keyof UserProfile,
        type: 'slider',
        min: 5000,
        max: 50000,
        step: 1000,
        radarIndex: 0,
        aiContext: '评估收入稳定性和可投资金额',
      },
      {
        question: '每月固定支出(房贷、生活费等)大概多少呢?',
        description: '包括房贷、车贷、日常生活开销等必要支出。',
        field: 'monthlyExpense' as keyof UserProfile,
        type: 'slider',
        min: 2000,
        max: 30000,
        step: 1000,
        radarIndex: 1,
        aiContext: '计算可支配收入,评估储蓄能力',
      },
      {
        question: '最后一个问题,目前有多少存款可以用于投资呢?',
        description: '这笔钱可以作为教育金的启动资金,帮助您更快达成目标。如果暂时没有也没关系,我们可以从定投开始。',
        field: 'currentSavings' as keyof UserProfile,
        type: 'slider',
        min: 0,
        max: 500000,
        step: 10000,
        radarIndex: 1,
        aiContext: '评估初始投资能力,影响投资方案的起点',
      },
    ];

    if (state.questionIndex < questions.length) {
      const q = questions[state.questionIndex];

      // 根据问题序号生成不同的AI思考过程
      const thinkingProcesses = [
        {
          intentRecognition: `✓ 当前阶段: 用户画像构建 - 第${state.questionIndex + 1}/5个问题\n✓ 目标: 了解投资时间跨度\n✓ 重要性: 时间是复利的朋友,投资期越长,策略越灵活`,
          knowledgeRetrieval: [`✓ 调用: 教育金时间规划模型`, `✓ 参考: 不同年龄段的投资策略差异`, `✓ 准备: 根据年龄动态调整后续问题`],
          strategySelection: `采用【渐进式提问】策略\n原因: 避免一次性索要过多信息,降低用户防备心理\n当前进度: ${state.questionIndex + 1}/5`,
          riskCheck: '✓ 信息收集符合隐私保护要求\n✓ 数据加密存储\n✓ 仅用于本次咨询',
        },
        {
          intentRecognition: `✓ 当前阶段: 目标金额确认 - 第${state.questionIndex + 1}/5个问题\n✓ 目标: 明确教育金目标金额\n✓ 策略: 提供参考数据,帮助用户决策`,
          knowledgeRetrieval: [`✓ 已检索: 2024年教育成本数据`, `✓ 国内本科: 30-50万/4年`, `✓ 海外留学: 100-150万/4年`, `✓ 考虑通胀: 年均3-5%`],
          strategySelection: `采用【参考锚点】策略\n提供具体金额选项,降低决策难度\n同时允许自定义,保持灵活性`,
          riskCheck: '✓ 金额范围合理\n✓ 符合家庭理财规划最佳实践',
        },
        {
          intentRecognition: `✓ 当前阶段: 收入能力评估 - 第${state.questionIndex + 1}/5个问题\n✓ 目标: 评估家庭收入稳定性\n✓ 敏感度: 高(涉及隐私)`,
          knowledgeRetrieval: [`✓ 调用: 收入-储蓄能力模型`, `✓ 参考: 不同收入水平的储蓄率`, `✓ 准备: 可行性评估算法`],
          strategySelection: `采用【隐私保护】策略\n强调信息保密性\n使用区间选择而非精确数字\n降低用户顾虑`,
          riskCheck: '✓ 数据加密传输\n✓ 符合个人信息保护法\n✓ 仅用于本次咨询,不做他用',
        },
        {
          intentRecognition: `✓ 当前阶段: 支出分析 - 第${state.questionIndex + 1}/5个问题\n✓ 目标: 计算可支配收入\n✓ 公式: 可投资金额 = 收入 - 支出`,
          knowledgeRetrieval: [`✓ 调用: 家庭财务健康度模型`, `✓ 参考: 50/30/20法则(必要支出/享受支出/储蓄)`, `✓ 准备: 储蓄率计算`],
          strategySelection: `采用【财务健康诊断】策略\n通过收支对比,评估储蓄能力\n为后续可行性评估提供数据基础`,
          riskCheck: '✓ 支出范围合理性检查\n✓ 避免过度储蓄建议',
        },
        {
          intentRecognition: `✓ 当前阶段: 初始资金评估 - 第${state.questionIndex + 1}/5个问题(最后一题)\n✓ 目标: 了解启动资金\n✓ 影响: 决定投资方案的起点`,
          knowledgeRetrieval: [`✓ 调用: 一次性投资+定投组合模型`, `✓ 参考: 不同启动资金的投资策略`, `✓ 准备: 进入可行性评估阶段`],
          strategySelection: `采用【完整画像】策略\n这是最后一个问题,即将完成用户画像\n准备进入可行性评估和方案生成阶段`,
          riskCheck: '✓ 画像数据完整性检查\n✓ 准备触发可行性评估流程',
        },
      ];

      addMessage({
        role: 'ai',
        content: q.question + (q.description ? `\n\n${q.description}` : ''),
        thinking: thinkingProcesses[state.questionIndex],
      });
    } else {
      // 所有问题回答完毕,进入可行性评估
      performFeasibilityAssessment();
    }
  };

  const handleAnswer = (value: number) => {
    const questions = [
      { field: 'childAge' as keyof UserProfile, radarIndex: 4 },
      { field: 'targetAmount' as keyof UserProfile, radarIndex: 4 },
      { field: 'monthlyIncome' as keyof UserProfile, radarIndex: 0 },
      { field: 'monthlyExpense' as keyof UserProfile, radarIndex: 1 },
      { field: 'currentSavings' as keyof UserProfile, radarIndex: 1 },
    ];

    const currentQ = questions[state.questionIndex];
    
    // 更新用户画像
    const newProfile = { ...state.userProfile, [currentQ.field]: value };
    
    // 更新雷达图
    const newRadarValues = [...state.radarData.values];
    newRadarValues[currentQ.radarIndex] = Math.min(100, newRadarValues[currentQ.radarIndex] + 20);
    
    // 添加用户消息
    addMessage({
      role: 'user',
      content: `${value}${currentQ.field === 'childAge' ? '岁' : currentQ.field.includes('Amount') ? '万元' : '元'}`,
    });

    // 添加AI确认消息
    setTimeout(() => {
      const confirmations = [
        `好的,也就是${18 - value}年后需要。`,
        '明白了,这是一个合理的目标。',
        '了解了您的收入情况。',
        '好的,我记录下来了。',
        '明白,这部分资金可以作为初始投入。',
      ];
      
      addMessage({
        role: 'ai',
        content: confirmations[state.questionIndex],
      });

      setState(prev => ({
        ...prev,
        userProfile: newProfile,
        radarData: { ...prev.radarData, values: newRadarValues },
        questionIndex: prev.questionIndex + 1,
      }));

      // 继续下一个问题
      setTimeout(askNextQuestion, 800);
    }, 500);
  };

  const performFeasibilityAssessment = () => {
    setState(prev => ({ ...prev, currentStage: 'feasibility', isGenerating: true, progress: 0 }));

    addMessage({
      role: 'ai',
      content: '让我根据您的情况,评估一下这个目标的可行性...',
      thinking: {
        intentRecognition: '进入可行性评估阶段',
        knowledgeRetrieval: ['教育成本预测模型', '通胀率数据', '投资收益率历史数据'],
        strategySelection: '计算所需月储蓄额,评估储蓄率是否合理',
        riskCheck: '检查目标是否过于激进或保守',
      },
      agentLogs: [
        { id: 'log1', agentName: '财富规划师', action: '计算教育金缺口', timestamp: Date.now(), status: 'processing' },
        { id: 'log2', agentName: '投资策略师', action: '评估投资收益预期', timestamp: Date.now() + 1000, status: 'pending' },
        { id: 'log3', agentName: '风控官', action: '检查风险承受能力', timestamp: Date.now() + 2000, status: 'pending' },
      ],
    });

    // 模拟进度更新
    const progressInterval = setInterval(() => {
      setState(prev => {
        const newProgress = Math.min(100, prev.progress + 10);
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => showFeasibilityResult(), 500);
        }
        return { ...prev, progress: newProgress };
      });
    }, 300);
  };

  const showFeasibilityResult = () => {
    const { targetAmount = 50, monthlyIncome = 20000, monthlyExpense = 10000, childAge = 3 } = state.userProfile;
    const yearsToGoal = 18 - childAge;
    const monthlySavingsNeeded = (targetAmount * 10000) / (yearsToGoal * 12);
    const savingsRate = (monthlySavingsNeeded / monthlyIncome) * 100;

    const result = {
      isFeasible: savingsRate < 40,
      confidence: savingsRate < 30 ? 90 : savingsRate < 40 ? 75 : 60,
      monthlySavingsNeeded,
      savingsRate,
      warnings: savingsRate > 35 ? ['储蓄率较高,可能影响生活质量'] : [],
      suggestions: ['建议采用定投方式', '可考虑适当提高风险承受度'],
    };

    setState(prev => ({ ...prev, feasibilityResult: result, isGenerating: false }));

    addMessage({
      role: 'ai',
      content: `评估完成!根据您的情况,这个目标${result.isFeasible ? '是可行的' : '有一定挑战'}。您需要每月储蓄约${Math.round(monthlySavingsNeeded)}元,占月收入的${savingsRate.toFixed(1)}%。`,
    });

    setTimeout(() => {
      addMessage({
        role: 'ai',
        content: '接下来,我为您生成几个投资方案供您选择...',
      });
      generatePlans();
    }, 2000);
  };

  const generatePlans = () => {
    setState(prev => ({ ...prev, currentStage: 'solution', isGenerating: true, progress: 0 }));

    // 模拟方案生成
    const progressInterval = setInterval(() => {
      setState(prev => {
        const newProgress = Math.min(100, prev.progress + 8);
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => showPlans(), 500);
        }
        return { ...prev, progress: newProgress };
      });
    }, 400);
  };

  const showPlans = () => {
    const plans: InvestmentPlan[] = [
      {
        id: 'plan1',
        name: '稳健型方案',
        description: '低风险,收益稳定',
        allocation: [
          { category: '货币基金', percentage: 40, products: ['余额宝', '理财通'] },
          { category: '债券基金', percentage: 40, products: ['纯债基金'] },
          { category: '混合基金', percentage: 20, products: ['偏债混合'] },
        ],
        expectedReturn: { min: 4.5, mid: 6.0, max: 7.5 },
        riskLevel: 2,
        pros: ['风险低', '收益稳定', '流动性好'],
        cons: ['收益相对较低'],
      },
      {
        id: 'plan2',
        name: '平衡型方案',
        description: '中等风险,收益较高',
        allocation: [
          { category: '债券基金', percentage: 30, products: ['纯债基金'] },
          { category: '混合基金', percentage: 50, products: ['平衡混合'] },
          { category: '股票基金', percentage: 20, products: ['沪深300指数'] },
        ],
        expectedReturn: { min: 6.0, mid: 9.0, max: 12.0 },
        riskLevel: 3,
        pros: ['收益较高', '风险可控', '适合长期投资'],
        cons: ['短期波动较大'],
      },
    ];

    setState(prev => ({ ...prev, plans, isGenerating: false }));

    addMessage({
      role: 'ai',
      content: '方案生成完成!我为您准备了2个方案,您可以在左侧工作区查看详情。',
    });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage({
      role: 'user',
      content: inputValue,
    });
    
    setInputValue('');
    
    // 简单的AI回复
    setTimeout(() => {
      addMessage({
        role: 'ai',
        content: '好的,我明白了。如果您有其他问题,随时可以问我。',
      });
    }, 800);
  };

  return (
    <div className="flow-a">
      {/* 顶部导航 */}
      <header className="flow-header">
        <button className="back-button" onClick={onBack}>
          ← 返回首页
        </button>
        <div className="flow-title">
          <h1>AI工作模式: 教育金规划</h1>
          <p>深度理财咨询,获取个性化投资方案</p>
        </div>
        <div className="flow-actions">
          <button className="action-btn">帮助</button>
          <button className="action-btn">设置</button>
        </div>
      </header>

      {/* 主内容区 - 双区域布局 */}
      <main className="flow-main">
        {/* Agent工作区 (60%) */}
        <section className="agent-workspace">
          <div className="workspace-header">
            <h2>Agent 工作区</h2>
            <span className="workspace-subtitle">展示AI工作成果</span>
          </div>

          <div className="workspace-content">
            {/* 进度指示器 */}
            {state.isGenerating && (
              <div className="progress-card">
                <div className="progress-header">
                  <span>正在{state.currentStage === 'feasibility' ? '评估可行性' : '生成方案'}...</span>
                  <span>{state.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${state.progress}%` }} />
                </div>
              </div>
            )}

            {/* 用户画像雷达图 */}
            {state.currentStage !== 'initial' && (
              <div className="profile-card">
                <h3>用户财务画像</h3>
                <div className="radar-chart">
                  {/* 简化的雷达图显示 */}
                  {state.radarData.dimensions.map((dim, index) => (
                    <div key={dim} className="radar-dimension">
                      <span className="dimension-label">{dim}</span>
                      <div className="dimension-bar">
                        <div 
                          className="dimension-fill" 
                          style={{ width: `${state.radarData.values[index]}%` }}
                        />
                      </div>
                      <span className="dimension-value">{state.radarData.values[index]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 可行性评估结果 */}
            {state.feasibilityResult && (
              <div className="feasibility-card">
                <h3>可行性评估</h3>
                <div className="feasibility-result">
                  <div className="result-item">
                    <span className="result-label">可行性</span>
                    <span className={`result-value ${state.feasibilityResult.isFeasible ? 'positive' : 'warning'}`}>
                      {state.feasibilityResult.isFeasible ? '✓ 可行' : '⚠ 有挑战'}
                    </span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">每月需储蓄</span>
                    <span className="result-value">{Math.round(state.feasibilityResult.monthlySavingsNeeded)}元</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">储蓄率</span>
                    <span className="result-value">{state.feasibilityResult.savingsRate.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            )}

            {/* 投资方案 */}
            {state.plans.length > 0 && (
              <div className="plans-section">
                <h3>投资方案</h3>
                {state.plans.map(plan => (
                  <div key={plan.id} className="plan-card">
                    <div className="plan-header">
                      <h4>{plan.name}</h4>
                      <span className="plan-risk">风险等级: R{plan.riskLevel}</span>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                    <div className="plan-allocation">
                      {plan.allocation.map((item, index) => (
                        <div key={index} className="allocation-item">
                          <span className="allocation-category">{item.category}</span>
                          <div className="allocation-bar">
                            <div 
                              className="allocation-fill" 
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <span className="allocation-percentage">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="plan-return">
                      <span>预期年化收益:</span>
                      <span className="return-range">
                        {plan.expectedReturn.min}% - {plan.expectedReturn.max}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 聊天交互区 (40%) */}
        <section className="chat-interaction">
          <div className="chat-header">
            <h2>对话交互</h2>
            <span className="chat-subtitle">完整展示AI思考与输出</span>
          </div>

          <div className="chat-messages">
            {state.messages.map((message) => (
              <div key={message.id} className={`message message-${message.role}`}>
                <div className="message-avatar">
                  {message.role === 'ai' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  
                  {/* 思考过程 */}
                  {message.thinking && (
                    <div className="thinking-section">
                      <button 
                        className="thinking-toggle"
                        onClick={() => setShowThinking(prev => ({ ...prev, [message.id]: !prev[message.id] }))}
                      >
                        💭 {showThinking[message.id] ? '收起' : '查看'}思考过程
                      </button>
                      {showThinking[message.id] && (
                        <div className="thinking-content">
                          {Object.entries(message.thinking).map(([key, value]) => (
                            <div key={key} className="thinking-item">
                              <strong>{key === 'intentRecognition' ? '意图识别' : 
                                       key === 'knowledgeRetrieval' ? '知识检索' :
                                       key === 'strategySelection' ? '策略选择' : '风险检查'}:</strong>
                              <p>{Array.isArray(value) ? value.join(', ') : value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Agent协同日志 */}
                  {message.agentLogs && (
                    <div className="agent-logs-section">
                      <button 
                        className="logs-toggle"
                        onClick={() => setShowAgentLogs(prev => ({ ...prev, [message.id]: !prev[message.id] }))}
                      >
                        🔧 {showAgentLogs[message.id] ? '收起' : '查看'}工作记录
                      </button>
                      {showAgentLogs[message.id] && (
                        <div className="logs-content">
                          {message.agentLogs.map(log => (
                            <div key={log.id} className={`log-item log-${log.status}`}>
                              <span className="log-agent">{log.agentName}</span>
                              <span className="log-action">{log.action}</span>
                              <span className="log-status">{log.status === 'completed' ? '✓' : '⏳'}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="message-time">
                    {new Date(message.timestamp).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="输入您的问题..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>发送</button>
          </div>
        </section>
      </main>
    </div>
  );
};

