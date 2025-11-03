import { useState, useEffect, useRef } from 'react';
import type { FlowBState, Message, RiskQuestion, BusinessStep } from '../types/financial-prototype';
import './FlowB.css';

interface FlowBProps {
  onBack: () => void;
}

const RISK_QUESTIONS: RiskQuestion[] = [
  {
    id: 1,
    question: '您的年龄范围是?',
    options: [
      { label: 'A. 18-30岁', value: 'A', score: 4 },
      { label: 'B. 31-45岁', value: 'B', score: 3 },
      { label: 'C. 46-60岁', value: 'C', score: 2 },
      { label: 'D. 60岁以上', value: 'D', score: 1 },
    ],
  },
  {
    id: 2,
    question: '您的投资经验如何?',
    options: [
      { label: 'A. 无投资经验', value: 'A', score: 1 },
      { label: 'B. 1-3年经验', value: 'B', score: 2 },
      { label: 'C. 3-5年经验', value: 'C', score: 3 },
      { label: 'D. 5年以上经验', value: 'D', score: 4 },
    ],
  },
  {
    id: 3,
    question: '您的家庭年收入范围是?',
    options: [
      { label: 'A. 10万以下', value: 'A', score: 1 },
      { label: 'B. 10-30万', value: 'B', score: 2 },
      { label: 'C. 30-50万', value: 'C', score: 3 },
      { label: 'D. 50万以上', value: 'D', score: 4 },
    ],
  },
  {
    id: 4,
    question: '您可承受的最大投资损失是?',
    options: [
      { label: 'A. 不能承受任何损失', value: 'A', score: 1 },
      { label: 'B. 可承受10%以内损失', value: 'B', score: 2 },
      { label: 'C. 可承受20%以内损失', value: 'C', score: 3 },
      { label: 'D. 可承受30%以上损失', value: 'D', score: 4 },
    ],
  },
  {
    id: 5,
    question: '您对流动性的需求是?',
    options: [
      { label: 'A. 高流动性需求(1年内可能使用)', value: 'A', score: 1 },
      { label: 'B. 中流动性需求(3-5年内可能使用)', value: 'B', score: 2 },
      { label: 'C. 低流动性需求(5年以上不会使用)', value: 'C', score: 3 },
      { label: 'D. 无流动性需求(长期投资)', value: 'D', score: 4 },
    ],
  },
];

export const FlowB: React.FC<FlowBProps> = ({ onBack }) => {
  const [state, setState] = useState<FlowBState>({
    currentStage: 'identity',
    businessSteps: [
      { id: 1, name: '身份核验', status: 'processing' },
      { id: 2, name: '风险测评', status: 'pending' },
      { id: 3, name: '信息确认', status: 'pending' },
      { id: 4, name: '协议签署', status: 'pending' },
      { id: 5, name: '完成', status: 'pending' },
    ],
    currentQuestionIndex: 0,
    answers: {},
    messages: [],
    showHelp: false,
  });

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [hoverTime, setHoverTime] = useState<number>(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  // 初始化
  useEffect(() => {
    if (state.messages.length === 0) {
      addMessage({
        role: 'ai',
        content: '您好!我是AI小智,很高兴为您服务。😊\n\n我看到您要办理账户管理业务,我会全程陪伴您完成整个流程。这个流程一共有5个步骤,大约需要3-5分钟。\n\n现在让我们开始第一步:身份核验。请将您的身份证放在右侧的读卡器上,或者手动输入身份证号也可以。\n\n💡 小提示:如果您在任何步骤遇到疑问,随时可以问我,我会立即为您解答!',
      });

      // 模拟身份核验
      setTimeout(() => {
        completeIdentityVerification();
      }, 2000);
    }
  }, []);

  // 检测用户在某题停留时间
  useEffect(() => {
    if (state.currentStage === 'assessment' && state.currentQuestionIndex === 4) {
      hoverTimerRef.current = setTimeout(() => {
        if (!state.answers[5]) {
          showAIHelp();
        }
      }, 10000); // 10秒后主动介入

      return () => {
        if (hoverTimerRef.current) {
          clearTimeout(hoverTimerRef.current);
        }
      };
    }
  }, [state.currentStage, state.currentQuestionIndex, state.answers]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'> & Partial<Pick<Message, 'id' | 'timestamp'>>) => {
    const newMessage: Message = {
      id: message.id || `msg-${Date.now()}-${Math.random()}`,
      timestamp: message.timestamp || Date.now(),
      ...message,
    };
    setState(prev => ({ ...prev, messages: [...prev.messages, newMessage] }));
  };

  const updateBusinessStep = (stepId: number, status: BusinessStep['status']) => {
    setState(prev => ({
      ...prev,
      businessSteps: prev.businessSteps.map(step =>
        step.id === stepId ? { ...step, status } : step
      ),
    }));
  };

  const completeIdentityVerification = () => {
    updateBusinessStep(1, 'completed');
    updateBusinessStep(2, 'processing');

    addMessage({
      role: 'ai',
      content: '太好了!身份核验完成 ✓\n\n现在进入第2步:风险测评。这是监管部门的要求,目的是了解您的风险承受能力,从而为您推荐最合适的投资产品。\n\n一共有5道题,每道题都很简单,根据您的真实情况选择就好,没有对错之分。大约需要2分钟。\n\n准备好了吗?让我们开始吧! 💪',
    });

    setState(prev => ({ ...prev, currentStage: 'assessment' }));
  };

  const handleAnswerQuestion = (questionId: number, optionValue: string) => {
    const question = RISK_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const option = question.options.find(o => o.value === optionValue);
    if (!option) return;

    // 记录答案
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: optionValue },
    }));

    // 添加用户消息
    addMessage({
      role: 'user',
      content: option.label,
    });

    // AI确认
    setTimeout(() => {
      addMessage({
        role: 'ai',
        content: '好的,已记录。',
      });

      // 进入下一题或完成测评
      if (state.currentQuestionIndex < RISK_QUESTIONS.length - 1) {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        }));
        setSelectedOption(null);
      } else {
        completeAssessment();
      }
    }, 500);
  };

  const showAIHelp = () => {
    setState(prev => ({ ...prev, showHelp: true }));

    addMessage({
      role: 'ai',
      content: '👋 我注意到您在"流动性需求"这道题停留了一会儿,是不是对这个概念不太熟悉?没关系,让我用大白话给您解释一下!\n\n**什么是流动性需求?**\n简单来说,就是:您预计多久后可能需要用到这笔投资的钱。\n\n**💡 举几个实际例子:**\n\n🏠 **高流动性需求** (1年内可能使用)\n比如:您计划明年买房,需要准备首付款\n→ 建议选择随时可以取出的产品\n\n👨‍👩‍👧 **中流动性需求** (3-5年内可能使用)\n比如:孩子3年后要上大学,需要准备学费\n→ 可以选择定期理财或短期基金\n\n👴 **低流动性需求** (5年以上不会使用)\n比如:为退休养老做准备,至少10年后才用\n→ 可以选择长期投资产品,收益更高\n\n**您可以根据自己的实际情况选择哦!** 如果还有疑问,随时问我~ 😊',
    });
  };

  const completeAssessment = () => {
    updateBusinessStep(2, 'completed');
    updateBusinessStep(3, 'processing');

    // 计算得分
    const totalScore = Object.entries(state.answers).reduce((sum, [questionId, optionValue]) => {
      const question = RISK_QUESTIONS.find(q => q.id === parseInt(questionId));
      const option = question?.options.find(o => o.value === optionValue);
      return sum + (option?.score || 0);
    }, 0);

    const result = {
      score: totalScore,
      level: totalScore >= 16 ? 'R4' : totalScore >= 12 ? 'R3' : totalScore >= 8 ? 'R2' : 'R1',
      levelName: totalScore >= 16 ? '进取型' : totalScore >= 12 ? '稳健型' : totalScore >= 8 ? '谨慎型' : '保守型',
      description: totalScore >= 12 ? '您适合中等风险、中等收益的投资产品' : '您适合低风险、稳定收益的投资产品',
      suitableProducts: totalScore >= 12 ? ['混合基金', '债券基金', '结构性存款'] : ['货币基金', '国债', '银行理财'],
    } as const;

    setState(prev => ({
      ...prev,
      assessmentResult: result,
      currentStage: 'confirmation',
    }));

    addMessage({
      role: 'ai',
      content: `🎉 恭喜!风险测评完成! ✓\n\n**您的测评结果:**\n• 总分: ${result.score}分\n• 风险等级: ${result.level} (${result.levelName})\n• 评估结论: ${result.description}\n\n**适合您的产品类型:**\n${result.suitableProducts.map(p => `✓ ${p}`).join('\n')}\n\n💡 **这个结果有什么用?**\n根据监管要求,我们只能向您推荐与您风险等级匹配的产品,这是为了保护您的资金安全。\n\n测评结果将保存在您的账户中,有效期1年。接下来让我们继续完成后续步骤吧!`,
    });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage({
      role: 'user',
      content: inputValue,
    });
    
    setInputValue('');
    
    setTimeout(() => {
      addMessage({
        role: 'ai',
        content: '好的,我明白了。如果您有其他问题,随时可以问我。',
      });
    }, 800);
  };

  const currentQuestion = RISK_QUESTIONS[state.currentQuestionIndex];

  return (
    <div className="flow-b">
      {/* 顶部导航 */}
      <header className="flow-header">
        <button className="back-button" onClick={onBack}>
          ← 返回首页
        </button>
        <div className="flow-title">
          <h1>业务辅助模式: 账户管理</h1>
          <p>快速办理业务,AI全程陪伴指导</p>
        </div>
        <div className="flow-actions">
          <button className="action-btn">帮助</button>
          <button className="action-btn">设置</button>
        </div>
      </header>

      {/* 主内容区 - 双区域布局 */}
      <main className="flow-main">
        {/* 业务办理区 (60%) */}
        <section className="business-workspace">
          <div className="workspace-header">
            <h2>业务办理</h2>
            <span className="workspace-subtitle">快速完成流程</span>
          </div>

          <div className="workspace-content">
            {/* 5步进度条 */}
            <div className="steps-progress">
              <h3>办理进度</h3>
              <div className="steps-list">
                {state.businessSteps.map((step, index) => (
                  <div key={step.id} className={`step-item step-${step.status}`}>
                    <div className="step-number">
                      {step.status === 'completed' ? '✓' : step.id}
                    </div>
                    <div className="step-content">
                      <div className="step-name">{step.name}</div>
                      <div className="step-status">
                        {step.status === 'completed' ? '已完成' : 
                         step.status === 'processing' ? '进行中' : '待办理'}
                      </div>
                    </div>
                    {index < state.businessSteps.length - 1 && (
                      <div className="step-connector" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 身份核验界面 */}
            {state.currentStage === 'identity' && (
              <div className="identity-card">
                <h3>身份核验</h3>
                <p>请验证您的身份信息</p>
                <div className="identity-form">
                  <div className="form-group">
                    <label>身份证号</label>
                    <input type="text" placeholder="请刷身份证或手动输入" disabled />
                  </div>
                  <div className="form-group">
                    <label>手机号</label>
                    <input type="text" placeholder="请输入手机号" disabled />
                  </div>
                  <div className="card-reader-hint">
                    <div className="reader-icon">💳</div>
                    <p>请将身份证放在右侧读卡器上</p>
                  </div>
                </div>
              </div>
            )}

            {/* 风险测评界面 */}
            {state.currentStage === 'assessment' && currentQuestion && (
              <div className="assessment-card">
                <h3>投资者风险承受能力评估</h3>
                <p>请根据实际情况作答 (共{RISK_QUESTIONS.length}题)</p>
                
                <div className="question-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${((state.currentQuestionIndex + 1) / RISK_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                  <span className="progress-text">
                    {state.currentQuestionIndex + 1}/{RISK_QUESTIONS.length}
                  </span>
                </div>

                <div className="question-content">
                  <h4>📝 {currentQuestion.question}</h4>
                  <div className="options-list">
                    {currentQuestion.options.map(option => (
                      <button
                        key={option.value}
                        className={`option-button ${selectedOption === option.value ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedOption(option.value);
                          setTimeout(() => handleAnswerQuestion(currentQuestion.id, option.value), 300);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {state.showHelp && state.currentQuestionIndex === 4 && (
                  <div className="ai-help-box">
                    <div className="help-icon">💬</div>
                    <div className="help-content">
                      <strong>AI小智提示:</strong>
                      <p>这道题用于评估您的流动性需求。如果您近期需要用钱,建议选择"高流动性需求"。</p>
                      <div className="help-actions">
                        <button onClick={() => setState(prev => ({ ...prev, showHelp: false }))}>
                          我明白了
                        </button>
                        <button className="secondary">详细说明</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 测评结果界面 */}
            {state.assessmentResult && state.currentStage === 'confirmation' && (
              <div className="result-card">
                <h3>风险测评完成</h3>
                
                <div className="result-gauge">
                  <div className="gauge-display">
                    <div className="gauge-score">{state.assessmentResult.score}</div>
                    <div className="gauge-label">总分</div>
                  </div>
                  <div className="gauge-scale">
                    <span>保守型</span>
                    <span>←</span>
                    <span className="current-level">{state.assessmentResult.levelName}</span>
                    <span>→</span>
                    <span>进取型</span>
                  </div>
                </div>

                <div className="result-details">
                  <div className="detail-item">
                    <span className="detail-label">您的风险等级:</span>
                    <span className="detail-value">{state.assessmentResult.level} ({state.assessmentResult.levelName})</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">适合产品:</span>
                    <span className="detail-value">{state.assessmentResult.description}</span>
                  </div>
                </div>

                <div className="result-report">
                  <div className="report-preview">
                    <div className="report-icon">📄</div>
                    <div className="report-info">
                      <strong>风险测评报告</strong>
                      <p>点击查看完整报告</p>
                    </div>
                  </div>
                  <button className="download-btn">下载PDF</button>
                </div>

                <div className="result-notice">
                  💡 测评结果将用于为您推荐合适的产品
                </div>

                <button className="continue-btn">继续下一步</button>
              </div>
            )}
          </div>
        </section>

        {/* 聊天交互区 (40%) */}
        <section className="chat-interaction">
          <div className="chat-header">
            <div className="current-step-indicator">
              <span className="step-badge">
                第{state.businessSteps.findIndex(s => s.status === 'processing') + 1}/5步
              </span>
              <span className="step-name">
                {state.businessSteps.find(s => s.status === 'processing')?.name}
              </span>
            </div>
          </div>

          <div className="step-hints">
            <h4>💡 提示:</h4>
            <ul>
              {state.currentStage === 'identity' && (
                <>
                  <li>请将身份证放在右侧读卡器</li>
                  <li>如找不到读卡器,可点击下方求助</li>
                </>
              )}
              {state.currentStage === 'assessment' && (
                <>
                  <li>共{RISK_QUESTIONS.length}道题,约需2分钟</li>
                  <li>请根据真实情况作答</li>
                  <li>答案无对错之分</li>
                </>
              )}
            </ul>
          </div>

          <div className="chat-messages">
            {state.messages.map((message) => (
              <div key={message.id} className={`message message-${message.role}`}>
                <div className="message-avatar">
                  {message.role === 'ai' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  <div className="message-time">
                    {new Date(message.timestamp).toLocaleTimeString('zh-CN', { 
                      hour: '2-digit', 
                      minute: '2-digit', 
                      second: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-questions">
            <h4>💬 快捷问题:</h4>
            <div className="quick-buttons">
              <button className="quick-btn">读卡器在哪里?</button>
              <button className="quick-btn">可以跳过这一步吗?</button>
              <button className="quick-btn">刷身份证安全吗?</button>
            </div>
          </div>

          <div className="chat-input">
            <button className="voice-btn">🎤</button>
            <input
              type="text"
              placeholder="输入您的问题..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="send-btn" onClick={handleSendMessage}>发送</button>
          </div>
        </section>
      </main>
    </div>
  );
};

