import './ThreeAreasIntro.css';

export const ThreeAreasIntro: React.FC = () => {
  return (
    <section className="three-areas-intro">
      <div className="intro-container">
        <div className="intro-header">
          <h2>🎯 三区域协同工作体系</h2>
          <p>虚拟人 × Agent工作区 × 聊天交互区，为您提供全方位智能理财服务</p>
        </div>

        <div className="areas-grid">
          {/* 1. 虚拟人区域 */}
          <div className="area-card persona-area">
            <div className="area-header">
              <div className="area-icon">👤</div>
              <h3>虚拟人区域</h3>
              <span className="area-badge">全流程陪伴</span>
            </div>
            <div className="area-content">
              <div className="area-description">
                <p>AI虚拟人在不同阶段扮演不同角色，为您提供专业的理财服务</p>
              </div>
              <div className="role-timeline">
                <div className="role-item">
                  <div className="role-number">1</div>
                  <div className="role-info">
                    <h4>使用前 · 大堂经理</h4>
                    <p>主动破冰，辅助用户使用机器</p>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-number">2</div>
                  <div className="role-info">
                    <h4>投资前 · 理财规划师</h4>
                    <p>财商教育、构建用户画像、需求挖掘目标澄清</p>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-number">3</div>
                  <div className="role-info">
                    <h4>投资中 · 基金经理</h4>
                    <p>分析投资组合、讲解产品、讲解潜在风险和历史表现</p>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-number">4</div>
                  <div className="role-info">
                    <h4>成交前 · 销售顾问</h4>
                    <p>促进用户排除顾虑，协助下单</p>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-number">5</div>
                  <div className="role-info">
                    <h4>投资后 · 理财管家</h4>
                    <p>情绪陪伴、分析持仓、优化持仓、培养使用粘性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Agent工作区 */}
          <div className="area-card agent-area">
            <div className="area-header">
              <div className="area-icon">⚙️</div>
              <h3>Agent工作区</h3>
              <span className="area-badge">三态智能切换</span>
            </div>
            <div className="area-content">
              <div className="area-description">
                <p>任务可视化的智能画布，根据服务阶段在三种形态间无缝切换</p>
              </div>
              <div className="agent-states">
                <div className="state-item">
                  <div className="state-badge state-1">状态 1</div>
                  <h4>待机状态 - 智能业务首页</h4>
                  <p>"功能超市" + "智能导购"</p>
                  <ul>
                    <li>展示全部功能模块</li>
                    <li>快速引导用户选择</li>
                    <li>智能推荐服务入口</li>
                  </ul>
                </div>
                <div className="state-item">
                  <div className="state-badge state-2">状态 2</div>
                  <h4>AI Agent工作模式</h4>
                  <p>"透明化AI工作室"</p>
                  <ul>
                    <li>实时展示AI工作进度</li>
                    <li>可视化任务执行过程</li>
                    <li>动态呈现分析结果</li>
                  </ul>
                </div>
                <div className="state-item">
                  <div className="state-badge state-3">状态 3</div>
                  <h4>业务辅助办理模式</h4>
                  <p>"AI作为副驾驶"</p>
                  <ul>
                    <li>传统业务界面主导</li>
                    <li>AI实时辅助答疑</li>
                    <li>智能操作引导</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 聊天交互区 */}
          <div className="area-card chat-area">
            <div className="area-header">
              <div className="area-icon">💬</div>
              <h3>聊天交互区</h3>
              <span className="area-badge">智能对话</span>
            </div>
            <div className="area-content">
              <div className="area-description">
                <p>双模式智能交互，让沟通更自然、过程更透明</p>
              </div>
              <div className="chat-modes">
                <div className="mode-item">
                  <div className="mode-header">
                    <div className="mode-icon">🎯</div>
                    <h4>待机状态展示</h4>
                  </div>
                  <div className="mode-features">
                    <div className="feature-tag">
                      <span className="tag-icon">📊</span>
                      <span>AI能力雷达图</span>
                    </div>
                    <div className="feature-tag">
                      <span className="tag-icon">💡</span>
                      <span>智能问题推荐</span>
                    </div>
                    <div className="feature-tag">
                      <span className="tag-icon">🎓</span>
                      <span>AI认知培养</span>
                    </div>
                  </div>
                  <p className="mode-desc">不知道问什么？试试这些推荐问题，快速了解AI金融原型机的能力</p>
                </div>
                <div className="mode-item">
                  <div className="mode-header">
                    <div className="mode-icon">⚡</div>
                    <h4>工作状态展示</h4>
                  </div>
                  <div className="mode-features">
                    <div className="feature-tag">
                      <span className="tag-icon">📝</span>
                      <span>用户请求记录</span>
                    </div>
                    <div className="feature-tag">
                      <span className="tag-icon">🤖</span>
                      <span>虚拟人播报内容</span>
                    </div>
                    <div className="feature-tag">
                      <span className="tag-icon">🔍</span>
                      <span>Agent思维链</span>
                    </div>
                    <div className="feature-tag">
                      <span className="tag-icon">📋</span>
                      <span>工作记录日志</span>
                    </div>
                  </div>
                  <p className="mode-desc">完整展示对话历史、AI输出内容、执行操作和思考过程</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部总结 */}
        <div className="intro-footer">
          <div className="footer-highlight">
            <div className="highlight-icon">✨</div>
            <div className="highlight-content">
              <h4>三区域协同优势</h4>
              <p>虚拟人提供情感陪伴 · Agent工作区展示智能成果 · 聊天区保持透明沟通</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

