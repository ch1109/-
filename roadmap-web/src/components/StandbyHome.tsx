import { useState } from 'react';
import './StandbyHome.css';

interface StandbyHomeProps {
  onEnterFlowA: () => void;
  onEnterFlowB: () => void;
}

export const StandbyHome: React.FC<StandbyHomeProps> = ({ onEnterFlowA, onEnterFlowB }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const quickPrompts = [
    '我想给孩子存教育金',
    '帮我做个理财规划',
    '我想了解基金投资',
    '如何配置家庭资产',
  ];

  return (
    <div className="standby-home">
      {/* 顶部导航栏 */}
      <header className="standby-header">
        <div className="header-left">
          <div className="logo">🏦</div>
          <div className="header-title">
            <h1>AI理财顾问</h1>
            <p>智能财富管理服务平台</p>
          </div>
        </div>
        <div className="header-right">
          <button className="header-btn">帮助</button>
          <button className="header-btn">设置</button>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="standby-main">
        {/* 左侧: 虚拟人区域 */}
        <section className="persona-section">
          <div className="persona-avatar">
            <img src="/重庆银行虚拟人.png" alt="AI理财顾问" />
          </div>
          <div className="persona-info">
            <div className="persona-badge">在线</div>
            <h2>您好,我是AI理财顾问</h2>
            <p className="persona-intro">
              我可以帮您进行理财规划、风险测评、产品推荐等服务。
              <br />
              您可以直接告诉我您的需求,或选择下方的快捷入口。
            </p>
            
            <div className="persona-capabilities">
              <h3>我的能力</h3>
              <ul>
                <li>💡 个性化理财规划</li>
                <li>📊 智能资产配置</li>
                <li>🛡️ 风险评估与管理</li>
                <li>📈 投资组合优化</li>
                <li>🎓 财商教育陪伴</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 右侧: 功能入口区域 */}
        <section className="function-section">
          <div className="welcome-message">
            <h2>欢迎使用AI理财服务</h2>
            <p>请选择您需要的服务类型</p>
          </div>

          {/* 两个主要入口按钮 */}
          <div className="main-entries">
            <button
              className={`entry-button flow-a ${hoveredButton === 'flowA' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredButton('flowA')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={onEnterFlowA}
            >
              <div className="entry-icon">🤖</div>
              <div className="entry-content">
                <h3>待机态 → AI工作模式</h3>
                <p>深度理财咨询,获取个性化投资方案</p>
                <div className="entry-features">
                  <span>• 教育金规划</span>
                  <span>• 养老规划</span>
                  <span>• 资产配置</span>
                </div>
              </div>
              <div className="entry-arrow">→</div>
            </button>

            <button
              className={`entry-button flow-b ${hoveredButton === 'flowB' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredButton('flowB')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={onEnterFlowB}
            >
              <div className="entry-icon">🏦</div>
              <div className="entry-content">
                <h3>待机态 → 业务辅助模式</h3>
                <p>快速办理业务,AI全程陪伴指导</p>
                <div className="entry-features">
                  <span>• 账户管理</span>
                  <span>• 风险测评</span>
                  <span>• 业务签约</span>
                </div>
              </div>
              <div className="entry-arrow">→</div>
            </button>
          </div>

          {/* 快捷问题 */}
          <div className="quick-prompts">
            <h3>💡 试试这些问题</h3>
            <div className="prompt-list">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="prompt-button"
                  onClick={onEnterFlowA}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* 功能卡片网格 */}
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h4>理财学堂</h4>
              <p>学习理财知识</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>市场行情</h4>
              <p>实时市场数据</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>目标规划</h4>
              <p>设定理财目标</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h4>我的资产</h4>
              <p>查看资产概况</p>
            </div>
          </div>

          {/* 底部提示 */}
          <div className="privacy-notice">
            <div className="notice-icon">🔒</div>
            <div className="notice-content">
              <strong>隐私保护</strong>
              <p>您的所有对话和数据都经过加密处理,我们严格遵守隐私保护规定</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

