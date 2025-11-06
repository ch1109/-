import type { FC } from 'react';
import './AIFinancialService.css';
import {
  aiWealthServiceContent,
  type GoalBlueprintContent,
  type GoalMilestone,
  type ModuleCard,
  type ReminderItem,
} from '../data/aiWealthService';

interface AIFinancialServiceProps {
  onBack: () => void;
}

type GoalNextStep = GoalBlueprintContent['nextSteps'][number];

const quickFilters = ['资产体检', '风险提醒', '目标进度', '策略工具'];

export const AIFinancialService: FC<AIFinancialServiceProps> = ({ onBack }) => {
  const { overview, reminders, blueprint, modules } = aiWealthServiceContent;
  const mainReminder: ReminderItem | undefined = reminders.items[0];
  const mainMilestone: GoalMilestone | undefined = blueprint.milestones[0];
  const nextStep: GoalNextStep | undefined = blueprint.nextSteps[0];

  return (
    <section className="ai-wealth-service">
      <header className="ai-wealth-header">
        <div className="ai-wealth-title">
          <span className="ai-wealth-subtitle">AI 理财专家服务</span>
          <h4>专属客户的资产体检、提醒与目标管理一体工作台</h4>
          <p>
            聚合银行与券商数据，快速定位客户需求，让理财经理与 AI 协同答复。{overview.summary}
          </p>
        </div>
        <div className="ai-wealth-actions">
          <button type="button" className="ghost" onClick={onBack}>
            返回工作区
          </button>
          <button type="button" className="primary">
            请登录
          </button>
        </div>
      </header>

      <div className="ai-wealth-toolbar">
        <div className="ai-wealth-searchbar">
          <input type="text" placeholder="输入客户或任务，如“资产体检”" readOnly />
          <button type="button" className="outline compact">
            登录后搜索
          </button>
        </div>
        <div className="ai-wealth-tags">
          {quickFilters.map((filter, index) => (
            <button key={filter} type="button" className={index === 0 ? 'is-active' : ''}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="ai-wealth-highlight-row">
        <article className="highlight-card lock">
          <div className="highlight-header">
            <span className="highlight-title">资产体检</span>
            <span className="highlight-badge">登录后查看</span>
          </div>
          <p>登录后解锁合并资产、收益曲线与风险阈值，支持一键导出报告。</p>
          <button type="button" className="ghost compact">
            功能介绍
          </button>
        </article>

        {mainReminder && (
          <article className="highlight-card reminder">
            <div className="highlight-header">
              <span className="highlight-title">智能提醒</span>
              <span className="highlight-badge severity-high">高优先级</span>
            </div>
            <p className="highlight-main">{mainReminder.title}</p>
            <p className="highlight-extra">{mainReminder.due || reminders.summary}</p>
            <button type="button" className="primary compact">
              {mainReminder.action}
            </button>
          </article>
        )}

        {mainMilestone && (
          <article className="highlight-card blueprint">
            <div className="highlight-header">
              <span className="highlight-title">目标蓝图</span>
              <span className="highlight-badge progress">{mainMilestone.progress}%</span>
            </div>
            <p className="highlight-main">{mainMilestone.label}</p>
            <p className="highlight-extra">{mainMilestone.highlight || blueprint.summary}</p>
            {nextStep && (
              <button type="button" className="ghost compact">
                {nextStep.label}
              </button>
            )}
          </article>
        )}
      </div>

      <section className="ai-wealth-modules">
        <header>
          <div>
            <h5>精选智能服务入口</h5>
            <p>常用策略、产品解读与运营工具可在此快速开启。</p>
          </div>
          <button type="button" className="ghost compact">
            查看全部服务
          </button>
        </header>
        <div className="modules-grid">
          {modules.map((module: ModuleCard) => (
            <article key={module.id} className={`module-card tone-${module.tone}`}>
              <div className="module-icon">{module.icon}</div>
              <div className="module-body">
                <h6>{module.title}</h6>
                <p>{module.description}</p>
                <div className="module-tags">
                  {module.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};
