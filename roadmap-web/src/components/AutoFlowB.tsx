import { useState, useEffect, useRef } from 'react';
import { enhancedScenarios } from '../data/prototype-enhanced';
import './AutoFlowA.css'; // 复用相同的样式

interface AutoFlowBProps {
  onBack: () => void;
}

type ScenarioStep = typeof enhancedScenarios[1]['steps'][0];
type ScenarioContext = typeof enhancedScenarios[1]['context'];

// 格式化上下文变量
const formatWithContext = (text: string, context: ScenarioContext): string => {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return context[key as keyof ScenarioContext] || `{{${key}}}`;
  });
};

export const AutoFlowB: React.FC<AutoFlowBProps> = ({ onBack }) => {
  const scenario = enhancedScenarios[1]; // 风险测评场景
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const currentStep = scenario.steps[currentStepIndex];
  const context = scenario.context;

  // 自动滚动到最新消息
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentStepIndex]);

  // 自动播放逻辑
  useEffect(() => {
    if (isPlaying && currentStepIndex < scenario.steps.length - 1) {
      const duration = currentStep.duration || 3000;
      timeoutRef.current = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
      }, duration);
    } else if (currentStepIndex >= scenario.steps.length - 1) {
      setIsPlaying(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPlaying, currentStepIndex, currentStep.duration, scenario.steps.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNextStep = () => {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setIsPlaying(false);
    }
  };

  const goToPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setIsPlaying(false);
    }
  };

  const renderWorkspace = (step: ScenarioStep) => {
    const { workspace } = step;
    if (!workspace) return null;

    return (
      <div className="auto-workspace-content">
        {/* 进度条 */}
        {workspace.progress && (
          <div className="auto-progress-bar">
            <div className="auto-progress-fill" style={{ width: workspace.progress }}></div>
            <span className="auto-progress-text">{workspace.progress}</span>
          </div>
        )}

        {/* 卡片展示 */}
        {workspace.cards && workspace.cards.length > 0 && (
          <div className="auto-cards-grid">
            {workspace.cards.map((card, index) => (
              <div key={index} className={`auto-card auto-card-${card.tone || 'neutral'}`}>
                {card.badge && <span className="auto-card-badge">{formatWithContext(card.badge, context)}</span>}
                <h4>{formatWithContext(card.title, context)}</h4>
                {card.value && <div className="auto-card-value">{formatWithContext(card.value, context)}</div>}
                {card.description && <p>{formatWithContext(card.description, context)}</p>}
              </div>
            ))}
          </div>
        )}

        {/* 关键数据 */}
        {workspace.keyFacts && workspace.keyFacts.length > 0 && (
          <div className="auto-key-facts">
            {workspace.keyFacts.map((fact, index) => (
              <div key={index} className={`auto-fact auto-fact-${fact.status}`}>
                <span className="auto-fact-label">{formatWithContext(fact.label, context)}</span>
                <span className="auto-fact-value">{formatWithContext(fact.value, context)}</span>
              </div>
            ))}
          </div>
        )}

        {/* 要点列表 */}
        {workspace.bulletPoints && workspace.bulletPoints.length > 0 && (
          <div className="auto-bullet-points">
            {workspace.bulletPoints.map((point, index) => (
              <div key={index} className="auto-bullet-point">
                {formatWithContext(point, context)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderChat = (step: ScenarioStep) => {
    const { chat } = step;
    if (!chat) return null;

    return (
      <div className="auto-chat-content">
        {/* 消息列表 */}
        {chat.messages && chat.messages.map((message, index) => (
          <div key={index} className={`auto-message auto-message-${message.role}`}>
            {message.role === 'user' && (
              <div className="auto-message-bubble auto-user-bubble">
                {formatWithContext(message.content, context)}
              </div>
            )}
            {message.role === 'assistant' && (
              <div className="auto-message-bubble auto-ai-bubble">
                {message.mode === 'thinking' ? (
                  <details className="auto-thinking">
                    <summary>💭 AI思考过程</summary>
                    <pre>{formatWithContext(message.content, context)}</pre>
                  </details>
                ) : (
                  <div className="auto-ai-content">
                    {formatWithContext(message.content, context)}
                  </div>
                )}
              </div>
            )}
            {message.role === 'system' && (
              <div className="auto-system-message">
                {formatWithContext(message.content, context)}
              </div>
            )}
          </div>
        ))}

        {/* 快捷回复 */}
        {chat.quickReplies && chat.quickReplies.length > 0 && (
          <div className="auto-quick-replies">
            {chat.quickReplies.map((reply, index) => (
              <button key={index} className="auto-quick-reply">
                {formatWithContext(reply, context)}
              </button>
            ))}
          </div>
        )}

        <div ref={chatEndRef} />
      </div>
    );
  };

  return (
    <div className="auto-flow-container">
      {/* 控制栏 */}
      <div className="auto-controls">
        <button onClick={onBack} className="auto-back-btn">← 返回首页</button>
        <div className="auto-playback-controls">
          <button onClick={goToPrevStep} disabled={currentStepIndex === 0}>
            ← 上一步
          </button>
          <button onClick={togglePlay} className="auto-play-btn">
            {isPlaying ? '⏸ 暂停' : '▶ 播放'}
          </button>
          <button onClick={goToNextStep} disabled={currentStepIndex >= scenario.steps.length - 1}>
            下一步 →
          </button>
          <span className="auto-step-indicator">
            第 {currentStepIndex + 1} / {scenario.steps.length} 步
          </span>
        </div>
      </div>

      {/* 双区域布局 */}
      <div className="auto-layout">
        {/* Agent工作区 (60%) */}
        <section className="auto-workspace">
          <header className="auto-section-header">
            <h3>Agent 工作区</h3>
          </header>
          {renderWorkspace(currentStep)}
        </section>

        {/* 聊天交互区 (40%) */}
        <section className="auto-chat">
          <header className="auto-section-header">
            <h3>聊天交互区</h3>
          </header>
          {renderChat(currentStep)}
        </section>
      </div>
    </div>
  );
};

