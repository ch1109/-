import { useEffect, useState } from 'react';
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
type CarouselItem = { headline: string; caption: string };

const quickFilters = ['资产体检', '风险提醒', '目标进度', '策略工具'];

export const AIFinancialService: FC<AIFinancialServiceProps> = ({ onBack }) => {
  const { overview, reminders, blueprint, modules } = aiWealthServiceContent;
  const carouselItems: CarouselItem[] = [
    {
      headline: '你的财务健康分数是多少?',
      caption: '就像体检一样，钱也需要定期检查。',
    },
    {
      headline: '「理财人格测试」- 测测你是哪种财富性格',
      caption: '5 道题测出你的理财 DNA。',
    },
    {
      headline: '这10个信号,说明你的钱在"生病"',
      caption: '已有 8,000 人通过检测提前发现隐患。',
    },
    {
      headline: '测测你离梦想还有多远',
      caption: '输入目标，立刻知道资金缺口与达成路径。',
    },
    {
      headline: '穿越到10年后,你有多少钱?',
      caption: 'AI 以复利、通胀和现金流推演未来资产。',
    },
    {
      headline: '如果钱不是问题,你想要什么生活?',
      caption: '帮你把模糊愿望拆成可执行的理财脚本。',
    },
    {
      headline: '你有多少钱在"睡觉"?',
      caption: '识别沉睡现金并推荐三种提效方案。',
    },
    {
      headline: '你的理财产品费率超标了吗?',
      caption: '对比同类产品费率，找出可降成本的环节。',
    },
    {
      headline: '每天10块,30年能变成多少?',
      caption: '复利演算展示小额高频投入的长期威力。',
    },
    {
      headline: '「投资误区扫雷」- 你中了几个坑?',
      caption: '四大典型误区逐条纠正，附行动提示。',
    },
    {
      headline: '今天的10万,10年后值多少?',
      caption: '考虑通胀、收益与风险后的真实购买力。',
    },
    {
      headline: '「财商测试」- 你的理财IQ是多少',
      caption: '15 个场景题，定位你的财商盲区与优势。',
    },
  ];
  const carouselGradients = [
    'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
    'linear-gradient(135deg, #ecfeff 0%, #d9f99d 100%)',
    'linear-gradient(135deg, #fdf2f8 0%, #fae8ff 100%)',
    'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
    'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
  ];
  const [currentBanner, setCurrentBanner] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentBanner((index) => (index + 1) % carouselItems.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [carouselItems.length]);

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
        <section
          className="ai-wealth-carousel"
          style={{ background: carouselGradients[currentBanner % carouselGradients.length] }}
        >
          <div className="carousel-slide">
            <span className="carousel-icon" aria-hidden="true">
              🌟
            </span>
            <div className="carousel-copy">
              <p>{carouselItems[currentBanner].headline}</p>
              <span>{carouselItems[currentBanner].caption}</span>
            </div>
          </div>
          <div className="carousel-dots" role="tablist" aria-label="理财灵感轮播">
            {carouselItems.map((item, index) => (
              <button
                key={item.headline}
                type="button"
                className={index === currentBanner ? 'is-active' : ''}
                onClick={() => setCurrentBanner(index)}
                aria-label={`查看横幅：${item.headline}`}
                aria-pressed={index === currentBanner}
              />
            ))}
          </div>
        </section>

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
