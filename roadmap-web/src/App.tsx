import { Fragment, useEffect, useMemo, useState } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import {
  phases,
  agents,
  featurePriorities,
  mvpFlowSummaries,
  mvpLoopStages,
  matrixCategories,
  matrixRoles,
  roleStageMatrix,
  nodeInsights,
  financialDataSections,
  financialSynergyRows,
} from './data/index'
import {
  prototypeModeSummaries,
  prototypeModeNotes,
  prototypeWorkspaceLegend,
  prototypeReminders,
  prototypeQuickTags,
  prototypeTiles,
  prototypeInsights,
  prototypeQuickPrompts,
  prototypeDialogue,
  prototypePersonaControls,
  prototypeScenarios,
} from './data/prototype'
import type {
  JourneyNodeInsight,
  MatrixCategory,
  RoleStageCell,
  NodeInsight,
} from './types/roadmap'
import avatarImage from './assets/agent-avatar.png'
import { FinancialPrototype } from './components/FinancialPrototype'
import { ThreeAreasIntro } from './components/ThreeAreasIntro'
import { PersonaIntro } from './components/PersonaIntro'
import './App.css'

type ViewMode =
  | 'financial-prototype'
  | 'prototype'
  | 'journey'
  | 'agents'
  | 'data'
  | 'priorities'
  | 'matrix'
  | 'insight'
  | 'decision'

type PrototypeMode = 'standby' | 'active'

type PrototypeTile = (typeof prototypeTiles)[number]
type PrototypePersonaControl = (typeof prototypePersonaControls)[number]

type ScenarioMessageRole = 'assistant' | 'user' | 'system'
type ScenarioMessageMode = 'thinking' | 'insight'
type ScenarioLogStatus = 'done' | 'doing' | 'pending'
type ScenarioCardTone = 'primary' | 'neutral' | 'info' | 'success' | 'warning'

type ScenarioContextMap = Record<string, unknown>

const viewModes: Array<{
  id: ViewMode
  label: string
  description: string
}> = [
  {
    id: 'prototype',
    label: '金融原型机首页',
    description: '待机态与工作态的双屏展示。',
  },
  {
    id: 'financial-prototype',
    label: '🚀 金融原型机交互演示',
    description: '双区域协同交互 - 流程A & 流程B',
  },
  {
    id: 'journey',
    label: '旅程视图',
    description: '横向阶段 × 节点，纵向映射能力与数据。',
  },
  {
    id: 'agents',
    label: 'AI角色',
    description: '八大专业Agent与调度官的职责与协作。',
  },
  {
    id: 'data',
    label: '数据需求',
    description: '银行与证券关键数据、用途与协同价值。',
  },
  {
    id: 'priorities',
    label: '功能优先级',
    description: 'P0-P3功能分级与样例。',
  },
  {
    id: 'matrix',
    label: '角色矩阵',
    description: '角色 × 阶段的能力与数据需求。',
  },
  {
    id: 'insight',
    label: '节点雷达',
    description: '18节点 × 九大要素的全景洞察。',
  },
  {
    id: 'decision',
    label: 'MVP决策',
    description: '数据驱动的筛选步骤与检验问题。',
  },
]

type ScenarioQuickReplyOption = {
  label: string
  setContext?: ScenarioContextMap
  nextStepId?: string
  autoAdvance?: boolean
}

type ScenarioQuickReply = string | ScenarioQuickReplyOption

interface ScenarioWorkspaceCard {
  badge?: string
  title: string
  value: string
  description?: string
  tone?: ScenarioCardTone
}

interface ScenarioWorkspaceKeyFact {
  label: string
  value: string
  status?: ScenarioLogStatus
}

interface ScenarioWorkspaceLogEntry {
  agent: string
  details: string[]
  status?: ScenarioLogStatus
  time?: string
}

interface ScenarioWorkspace {
  badge: string
  headline: string
  description?: string
  tags?: string[]
  cards?: ScenarioWorkspaceCard[]
  keyFacts?: ScenarioWorkspaceKeyFact[]
  bulletPoints?: string[]
  log?: ScenarioWorkspaceLogEntry[]
  progress?: string
}

interface ScenarioChat {
  badge: string
  headline?: string
  pinned?: { title: string; tips: string[] }
  messages: Array<{
    role: ScenarioMessageRole
    content: string
    mode?: ScenarioMessageMode
  }>
  quickReplies?: ScenarioQuickReply[]
}

interface ScenarioStep {
  id: string
  time: string
  title: string
  mode: PrototypeMode
  duration?: number
  persona?: {
    badge?: string
    speech?: string
    notes?: string[]
  }
  workspace: ScenarioWorkspace
  chat: ScenarioChat
}

interface ScenarioDefinition {
  id: string
  buttonLabel: string
  context?: ScenarioContextMap
  steps: ScenarioStep[]
}

type ScenarioId = ScenarioDefinition['id']

const MODE_SUMMARIES: Record<PrototypeMode, string> = {
  standby: prototypeModeSummaries.standby,
  active: prototypeModeSummaries.active,
}

const MODE_NOTES: Record<PrototypeMode, readonly string[]> = {
  standby: prototypeModeNotes.standby,
  active: prototypeModeNotes.active,
}

const WORKSPACE_LEGEND: Record<PrototypeMode, { title: string; description: string }> = {
  standby: prototypeWorkspaceLegend.standby,
  active: prototypeWorkspaceLegend.active,
}

const WORKSPACE_REMINDERS: Record<PrototypeMode, string> = {
  standby: prototypeReminders.standby,
  active: prototypeReminders.active,
}

const PERSONA_CONTROLS: PrototypePersonaControl[] = [...prototypePersonaControls]
const WORKSPACE_TAGS: string[] = [...prototypeQuickTags]
const WORKSPACE_TILES: PrototypeTile[] = [...prototypeTiles]
const WORKSPACE_INSIGHTS = [...prototypeInsights]
const CHAT_PROMPTS = [...prototypeQuickPrompts]
const CHAT_DIALOGUE = [...prototypeDialogue]
const SCENARIOS: ScenarioDefinition[] = prototypeScenarios as unknown as ScenarioDefinition[]

const QUICK_REPLY_LABEL = {
  assistant: 'AI 理财顾问',
  user: '用户',
  system: '系统',
} as const

const formatWithContext = (value: string | undefined, context: ScenarioContextMap): string => {
  if (!value) return ''
  return value.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, rawKey: string) => {
    const parts = rawKey.split('.')
    let current: unknown = context
    for (const part of parts) {
      if (current == null || typeof current !== 'object') return ''
      current = (current as Record<string, unknown>)[part]
    }
    return current == null ? '' : String(current)
  })
}

const statusClass = (status?: ScenarioLogStatus) => (status ? `status-${status}` : '')

const JOURNEY_INSIGHT_SECTIONS: Array<{ key: keyof JourneyNodeInsight; label: string }> = [
  { key: 'userActions', label: '用户操作' },
  { key: 'aiGoals', label: 'AI目标' },
  { key: 'painPoints', label: '痛点' },
  { key: 'itchPoints', label: '痒点' },
  { key: 'delightPoints', label: '爽点' },
]

type JourneyInsightSection = {
  label: string
  items: string[]
}

const getNodeInsightSections = (insights?: JourneyNodeInsight): JourneyInsightSection[] => {
  if (!insights) return []
  const sections: JourneyInsightSection[] = []
  for (const { key, label } of JOURNEY_INSIGHT_SECTIONS) {
    const rawItems = insights[key]
    if (!rawItems) continue
    const items = rawItems.map((item) => item.trim()).filter((item) => item.length > 0)
    if (items.length === 0) continue
    sections.push({ label, items })
  }
  return sections
}

const stripParenthetical = (value: string): string => {
  return value
    .replace(/\s*（[^）]*）/g, '')
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/[ 　]{2,}/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .trim()
}

const formatListPill = (values?: string[], transform?: (value: string) => string) => {
  if (!values || values.length === 0) {
    return <span className="insight-missing">待补充</span>
  }
  const processed = (transform ? values.map(transform) : values)
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
  if (processed.length === 0) {
    return <span className="insight-missing">待补充</span>
  }
  return (
    <div className="insight-list">
      {processed.map((item, index) => (
        <span key={`${item}-${index}`} className="list-pill">
          {item}
        </span>
      ))}
    </div>
  )
}

const renderCoreFeatures = (insight?: NodeInsight) => {
  if (!insight) {
    return <span className="insight-missing">待补充</span>
  }

  const preview = insight.coreFeaturesPreview?.length
    ? insight.coreFeaturesPreview
    : insight.coreFunctions
  const details = insight.coreFeaturesFull
  const processedDetails =
    details?.map((item) => ({
      label: stripParenthetical(item.title),
      description: stripParenthetical(item.description ?? ''),
    })) ?? []

  const items =
    preview?.length && preview.some((item) => item.trim().length > 0)
      ? preview
          .map((item, index) => ({
            label: stripParenthetical(item),
            description: processedDetails[index]?.description ?? '',
          }))
          .filter((entry) => entry.label.length > 0)
      : processedDetails.filter((entry) => entry.label.length > 0)

  if (items.length === 0) {
    return <span className="insight-missing">待补充</span>
  }

  return (
    <div className="insight-list">
      {items.map((item, index) => {
        const hasDescription = Boolean(item.description && item.description.length > 0)
        return (
          <span
            key={`${item.label}-${index}`}
            className={`list-pill${hasDescription ? ' tooltip' : ''}`}
            data-tooltip={
              hasDescription ? `• ${item.label}\n  ${item.description}` : undefined
            }
          >
            {item.label}
          </span>
        )
      })}
    </div>
  )
}

const renderTriggerBadges = (insight?: NodeInsight) => {
  if (!insight) {
    return <span className="insight-missing">待补充</span>
  }

  const entries = [
    insight.triggers.system,
    insight.triggers.user,
    insight.triggers.data,
    insight.triggers.time,
  ]
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item && item.length > 0))

  if (entries.length === 0) {
    return <span className="insight-missing">暂无触发条件</span>
  }

  return (
    <div className="trigger-badges">
      {entries.map((entry, index) => (
        <span key={index} className="trigger-text">
          {entry}
        </span>
      ))}
    </div>
  )
}

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('prototype')
  const [prototypeMode, setPrototypeMode] = useState<PrototypeMode>('standby')
  const [activeScenarioId, setActiveScenarioId] = useState<ScenarioId | null>(null)
  const [scenarioStepIndex, setScenarioStepIndex] = useState(0)
  const [scenarioAutoPlay, setScenarioAutoPlay] = useState(false)
  const [scenarioContextStore, setScenarioContextStore] = useState<
    Partial<Record<ScenarioId, ScenarioContextMap>>
  >({})

  const allNodes = useMemo(() => phases.flatMap((phase) => phase.nodes), [])
  const [selectedNodeId, setSelectedNodeId] = useState<string>(() => allNodes[0]?.id ?? '')

  const activeScenario = useMemo(
    () => SCENARIOS.find((scenario) => scenario.id === activeScenarioId),
    [activeScenarioId],
  )

  const activeStep = activeScenario?.steps[scenarioStepIndex]
  const isScenarioActive = Boolean(activeScenario)
  const scenarioContext = useMemo(() => {
    if (!activeScenario) return {}
    return {
      ...(activeScenario.context ?? {}),
      ...(activeScenarioId ? scenarioContextStore[activeScenarioId] ?? {} : {}),
    }
  }, [activeScenario, activeScenarioId, scenarioContextStore])

  useEffect(() => {
    if (!activeScenario || !scenarioAutoPlay) return
    const steps = activeScenario.steps
    const duration = steps[scenarioStepIndex]?.duration ?? 2600
    if (scenarioStepIndex >= steps.length - 1) {
      setScenarioAutoPlay(false)
      return
    }
    const timer = window.setTimeout(() => {
      setScenarioStepIndex((index) => Math.min(index + 1, steps.length - 1))
    }, duration)
    return () => window.clearTimeout(timer)
  }, [activeScenario, scenarioAutoPlay, scenarioStepIndex])

  useEffect(() => {
    if (allNodes.length === 0) return
    setSelectedNodeId((current) => (current ? current : allNodes[0].id))
  }, [allNodes])

  const selectedNode = useMemo(
    () => allNodes.find((node) => node.id === selectedNodeId),
    [allNodes, selectedNodeId],
  )

  const selectedNodeInsightSections = useMemo(
    () => getNodeInsightSections(selectedNode?.insights),
    [selectedNode],
  )

  const goToScenarioStep = (index: number) => {
    if (!activeScenario) return
    const safeIndex = Math.max(0, Math.min(index, activeScenario.steps.length - 1))
    setScenarioStepIndex(safeIndex)
  }

  const goToNextStep = () => {
    if (!activeScenario) return
    goToScenarioStep(scenarioStepIndex + 1)
  }

  const goToPreviousStep = () => {
    if (!activeScenario) return
    goToScenarioStep(scenarioStepIndex - 1)
  }

  const startScenario = (scenarioId: ScenarioId) => {
    const scenario = SCENARIOS.find((item) => item.id === scenarioId)
    setActiveScenarioId(scenarioId)
    setScenarioStepIndex(0)
    setScenarioAutoPlay(false)
    setPrototypeMode('standby')
    setScenarioContextStore((prev) => ({
      ...prev,
      [scenarioId]: {
        ...(scenario?.context ?? {}),
      },
    }))
  }

  const exitScenario = () => {
    setScenarioAutoPlay(false)
    setScenarioStepIndex(0)
    setActiveScenarioId(null)
    setPrototypeMode('standby')
    setScenarioContextStore((prev) => {
      if (!activeScenarioId) return prev
      const next = { ...prev }
      delete next[activeScenarioId]
      return next
    })
  }

  const handleQuickReply = (reply: ScenarioQuickReply) => {
    if (typeof reply === 'string' || !activeScenario) return
    setScenarioAutoPlay(false)
    if (reply.setContext) {
      setScenarioContextStore((prev) => {
        const base = prev[activeScenario.id] ?? activeScenario.context ?? {}
        return {
          ...prev,
          [activeScenario.id]: {
            ...(base as ScenarioContextMap),
            ...reply.setContext,
          },
        }
      })
    }
    if (reply.nextStepId) {
      const index = activeScenario.steps.findIndex((step) => step.id === reply.nextStepId)
      if (index >= 0) {
        goToScenarioStep(index)
        return
      }
    }
    if (reply.autoAdvance !== false) {
      goToNextStep()
    }
  }

  const toggleAutoPlay = () => {
    if (!activeScenario) return
    if (scenarioAutoPlay) {
      setScenarioAutoPlay(false)
      return
    }
    if (scenarioStepIndex >= activeScenario.steps.length - 1) {
      setScenarioStepIndex(0)
    }
    setScenarioAutoPlay(true)
  }

  const currentMode: PrototypeMode = activeStep?.mode ?? prototypeMode
  const isStandby = currentMode === 'standby'
  const personaBadge = activeStep?.persona?.badge
    ? formatWithContext(activeStep.persona.badge, scenarioContext)
    : isStandby
      ? '欢迎模式'
      : '工作态'
  const personaSummary = activeStep?.persona?.speech
    ? formatWithContext(activeStep.persona.speech, scenarioContext)
    : MODE_SUMMARIES[currentMode]
  const personaNotes = activeStep?.persona?.notes?.length
    ? activeStep.persona.notes.map((note) => formatWithContext(note, scenarioContext))
    : [...MODE_NOTES[currentMode]]
  const scenarioProgress = activeScenario
    ? `第 ${scenarioStepIndex + 1} / ${activeScenario.steps.length} 幕`
    : ''

  const renderScenarioWorkspace = (step: ScenarioStep, context: ScenarioContextMap) => {
    const { workspace } = step

    return (
      <div className="scenario-step">
        {/* 移除了时间标记、badge和步骤标题 */}
        {workspace.progress && (
          <div className="scenario-progress-indicator">
            <span className="scenario-progress">{formatWithContext(workspace.progress, context)}</span>
          </div>
        )}
        {workspace.tags && workspace.tags.length > 0 && (
          <div className="scenario-tags">
            {workspace.tags.map((tag) => (
              <span key={`${step.id}-${tag}`}>{formatWithContext(tag, context)}</span>
            ))}
          </div>
        )}
        {workspace.cards && workspace.cards.length > 0 && (
          <div className="scenario-card-grid">
            {workspace.cards.map((card) => (
              <article
                key={`${step.id}-${card.title}-${card.value}`}
                className={`scenario-card ${card.tone ?? ''}`}
              >
                {card.badge && <span>{formatWithContext(card.badge, context)}</span>}
                <h6>{formatWithContext(card.title, context)}</h6>
                <strong>{formatWithContext(card.value, context)}</strong>
                {card.description && <p>{formatWithContext(card.description, context)}</p>}
              </article>
            ))}
          </div>
        )}
        {workspace.keyFacts && workspace.keyFacts.length > 0 && (
          <div className="scenario-keyfacts">
            {workspace.keyFacts.map((fact) => (
              <div key={`${step.id}-${fact.label}`} className={`scenario-keyfact ${statusClass(fact.status)}`}>
                <span>{formatWithContext(fact.label, context)}</span>
                <strong>{formatWithContext(fact.value, context)}</strong>
              </div>
            ))}
          </div>
        )}
        {workspace.bulletPoints && workspace.bulletPoints.length > 0 && (
          <ul className="scenario-list">
            {workspace.bulletPoints.map((item) => (
              <li key={`${step.id}-${item}`}>{formatWithContext(item, context)}</li>
            ))}
          </ul>
        )}
        {workspace.log && workspace.log.length > 0 && (
          <div className="scenario-log">
            {workspace.log.map((entry) => (
              <div key={`${step.id}-${entry.agent}`} className={`scenario-log-item ${statusClass(entry.status)}`}>
                <div className="scenario-log-header">
                  <strong>{formatWithContext(entry.agent, context)}</strong>
                  {entry.time && <span>{formatWithContext(entry.time, context)}</span>}
                </div>
                <ul>
                  {entry.details.map((detail) => (
                    <li key={detail}>{formatWithContext(detail, context)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderScenarioChat = (step: ScenarioStep, context: ScenarioContextMap) => {
    const { chat } = step

    return (
      <div className="scenario-step scenario-chat">
        {/* 移除了时间标记、badge和步骤标题 */}
        {chat.pinned && (
          <div className="scenario-pinned">
            <strong>{formatWithContext(chat.pinned.title, context)}</strong>
            <ul>
              {chat.pinned.tips.map((tip) => (
                <li key={tip}>{formatWithContext(tip, context)}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="scenario-chat-window chat-window">
          {chat.messages.map((message, index) => (
            <div
              key={`${step.id}-message-${index}`}
              className={`chat-bubble ${message.role}${message.mode ? ` ${message.mode}` : ''}`}
            >
              <strong>{QUICK_REPLY_LABEL[message.role]}</strong>
              <p>{formatWithContext(message.content, context)}</p>
            </div>
          ))}
        </div>
        {chat.quickReplies && chat.quickReplies.length > 0 && (
          <div className="scenario-quick-replies chat-prompts">
            {chat.quickReplies.map((quickReply, index) => (
              typeof quickReply === 'string' ? (
                <span key={`${step.id}-quick-${index}`}>{formatWithContext(quickReply, context)}</span>
              ) : isScenarioActive ? (
                <button
                  key={`${step.id}-quick-${index}`}
                  type="button"
                  onClick={() => handleQuickReply(quickReply)}
                >
                  {formatWithContext(quickReply.label, context)}
                </button>
              ) : (
                <span key={`${step.id}-quick-${index}`}>
                  {formatWithContext(quickReply.label, context)}
                </span>
              )
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderPrototypeView = () => (
    <div className="prototype-shell">
      <div className="prototype-toolbar">
        <div>
          <h2>AI 金融原型机 · {isStandby ? '待机态' : '工作态'}</h2>
          <p className="muted">
            {/* 移除了步骤标题显示,只显示场景名称 */}
            {isScenarioActive && activeScenario
              ? activeScenario.buttonLabel
              : isStandby
                ? '待机态通过虚拟人大堂经理介绍银行 AI 自助业务，突出热门办理入口与隐私提示。'
                : '工作态围绕实时办理请求展开，Agent 工作区与聊天区协同，可随时邀请人工客服接力。'}
          </p>
        </div>
        <div className="prototype-toolbar-actions">
          <div className="prototype-demo-buttons">
            {SCENARIOS.map((scenario) => {
              const isActive = activeScenarioId === scenario.id
              return (
                <button
                  key={scenario.id}
                  type="button"
                  className={`demo-button ${isActive ? 'is-active' : ''}`}
                  onClick={() => startScenario(scenario.id)}
                >
                  <span>{scenario.buttonLabel}</span>
                  {isActive && scenarioProgress && <small>{scenarioProgress}</small>}
                </button>
              )
            })}
            {isScenarioActive && (
              <button type="button" className="demo-button ghost" onClick={exitScenario}>
                结束演示
              </button>
            )}
          </div>
          <button
            type="button"
            className="prototype-toggle"
            disabled={isScenarioActive}
            onClick={() => setPrototypeMode((mode) => (mode === 'standby' ? 'active' : 'standby'))}
          >
            {isStandby ? '切换到工作态' : '返回待机态'}
          </button>
        </div>
      </div>

      {isScenarioActive && activeScenario && activeStep ? (
        <div className="scenario-status-bar">
          <div className="scenario-controls">
            <div className="scenario-meta">
              <strong>{activeScenario.buttonLabel}</strong>
              <span>
                {scenarioProgress}
                {scenarioProgress && ' ｜ '}
                {formatWithContext(activeStep.title, scenarioContext)}
              </span>
            </div>
            <div className="scenario-control-buttons">
              <button type="button" onClick={goToPreviousStep} disabled={scenarioStepIndex === 0}>
                上一幕
              </button>
              <button
                type="button"
                className={scenarioAutoPlay ? 'is-playing' : ''}
                onClick={toggleAutoPlay}
              >
                {scenarioAutoPlay ? '暂停' : '自动播放'}
              </button>
              <button
                type="button"
                onClick={goToNextStep}
                disabled={scenarioStepIndex >= activeScenario.steps.length - 1}
              >
                下一幕
              </button>
              <button type="button" className="ghost" onClick={exitScenario}>
                退出演示
              </button>
            </div>
          </div>
          <div className="scenario-timeline">
            {activeScenario.steps.map((step, index) => {
              const status = index < scenarioStepIndex ? 'done' : index === scenarioStepIndex ? 'current' : 'upcoming'
              return (
                <button
                  key={step.id}
                  type="button"
                  className={`timeline-node ${status}`}
                  onClick={() => {
                    setScenarioAutoPlay(false)
                    goToScenarioStep(index)
                  }}
                >
                  <span className="timeline-index">{index + 1}</span>
                  <span className="timeline-label">{formatWithContext(step.title, scenarioContext)}</span>
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      <div className={`prototype-layout ${isStandby ? 'standby' : 'active'}`}>
        <div className="prototype-panel persona-panel">
          {isScenarioActive ? (
            // 演示场景时显示原有的虚拟人信息
            <section className="persona-info-section">
              <div className="persona-frame">
                <figure>
                  <img src={avatarImage} alt="重庆银行AI理财经理" />
                </figure>
              </div>
              <div className="persona-info">
                <span className="persona-chip">{personaBadge}</span>
                <h3>大堂 / 理财规划经理</h3>
                <p className="muted">{personaSummary}</p>
                {activeStep?.persona?.speech && (
                  <div className="persona-speech">
                    <p>{formatWithContext(activeStep.persona.speech, scenarioContext)}</p>
                  </div>
                )}
                <ul>
                  {personaNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : (
            // 非演示场景时显示虚拟人介绍
            <PersonaIntro avatarImage={avatarImage} />
          )}
        </div>

        <section className="prototype-panel workspace-panel">
          <header className="workspace-header">
            <div>
              <h3>Agent 工作区</h3>
              {/* 移除了时间和步骤标题显示 */}
            </div>
            {!activeStep && (
              <div className="workspace-toolbar">
                {PERSONA_CONTROLS.map((control) => (
                  <button key={control.id} type="button">
                    {control.label}
                  </button>
                ))}
              </div>
            )}
          </header>

          {activeStep
            ? renderScenarioWorkspace(activeStep, scenarioContext)
            : (
                <Fragment>
                  <div className="workspace-search">
                    <div className="workspace-searchbar">
                      <input
                        type="text"
                        placeholder="搜索业务或输入关键字，如“限额设置”"
                        readOnly
                      />
                      <button type="button" className="primary">
                        搜索
                      </button>
                    </div>
                    <div className="workspace-tags">
                      {WORKSPACE_TAGS.map((tag, index) => (
                        <button key={tag} type="button" className={index === 0 ? 'is-active' : ''}>
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="workspace-cta">
                    <button type="button" className="primary">
                      请登录
                    </button>
                    <button type="button" className="outline">
                      AI 理财专家服务
                    </button>
                  </div>

                  <div className="workspace-brief">
                    <div>
                      <strong>{WORKSPACE_LEGEND[currentMode].title}</strong>
                      <p>{WORKSPACE_LEGEND[currentMode].description}</p>
                    </div>
                    <button type="button" className="ghost">
                      查看全部业务
                    </button>
                  </div>

                  <div className="workspace-grid service-grid">
                    {WORKSPACE_TILES.map((tile) => {
                      const cardStyle: CSSProperties = {
                        background: tile.cardBg,
                        borderColor: tile.borderColor,
                      }
                      const iconStyle: CSSProperties = {
                        color: tile.iconColor,
                      }
                      return (
                        <article key={tile.id} className="workspace-tile" style={cardStyle}>
                          <div className="tile-icon" style={iconStyle}>
                            <span>{tile.icon}</span>
                          </div>
                          <div className="tile-text">
                            <h4>{tile.title}</h4>
                            <p>{tile.description}</p>
                          </div>
                        </article>
                      )
                    })}
                  </div>

                  <div className="workspace-footnote">
                    <span>提醒</span>
                    <p>{WORKSPACE_REMINDERS[currentMode]}</p>
                  </div>
                </Fragment>
              )}
        </section>

        <section className="prototype-panel chat-panel">
          <div className="panel-header">
            <h3>聊天交互区</h3>
            {/* 移除了时间和步骤标题显示 */}
          </div>

          {activeStep
            ? renderScenarioChat(activeStep, scenarioContext)
            : (
                <Fragment>
                  <div className="chat-insights">
                    <h4>AI 洞察</h4>
                    <ul>
                      {WORKSPACE_INSIGHTS.map((insight) => (
                        <li key={insight.id}>
                          <strong>{insight.title}</strong>
                          <p>{insight.content}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isStandby ? (
                    <div className="chat-preview">
                      <p>AI 主动提供常用提问，帮助客户快速定位业务入口，语音或触控均可继续对话。</p>
                      <div className="chat-prompts">
                        {CHAT_PROMPTS.map((prompt) => (
                          <span key={prompt}>{prompt}</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Fragment>
                      <div className="chat-window">
                        {CHAT_DIALOGUE.map((item) => (
                          <div key={`${item.speaker}-${item.content}`} className={`chat-bubble ${item.speaker}`}>
                            <strong>{item.speaker === 'agent' ? 'AI 理财顾问' : '用户'}</strong>
                            <p>{item.content}</p>
                          </div>
                        ))}
                      </div>
                      <div className="chat-actions">
                        <button type="button" className="primary">
                          生成办理步骤
                        </button>
                        <button type="button" className="outline">
                          转接人工客服
                        </button>
                      </div>
                    </Fragment>
                  )}

                  <div className="chat-input-bar">
                    <input type="text" placeholder="输入想问的问题..." readOnly />
                    <div className="chat-input-actions">
                      <button type="button" className="ghost">
                        语音
                      </button>
                      <button type="button" className="primary">
                        发送
                      </button>
                    </div>
                  </div>
                </Fragment>
              )}
        </section>
      </div>

      {/* 三区域介绍模块 */}
      <ThreeAreasIntro />
    </div>
  )

  const nodeInsightMap = useMemo(() => {
    const map = new Map<string, NodeInsight>()
    nodeInsights.forEach((insight) => {
      map.set(insight.nodeId, insight)
    })
    return map
  }, [])

  const roleStageMap = useMemo(() => {
    const map = new Map<string, RoleStageCell>()
    roleStageMatrix.forEach((cell) => {
      map.set(`${cell.roleId}-${cell.stageId}`, cell)
    })
    return map
  }, [])

  const categoryById = useMemo(() => {
    return matrixCategories.reduce<Record<string, MatrixCategory>>((acc, category) => {
      acc[category.id] = category
      return acc
    }, {})
  }, [])

  const insightSections: Array<{
    id: string
    label: string
    render: (insight?: NodeInsight) => ReactElement
  }> = [
    { id: 'triggers', label: '触发条件', render: (insight) => renderTriggerBadges(insight) },
    {
      id: 'roles',
      label: '服务AI角色',
      render: (insight) => formatListPill(insight?.aiRoles, stripParenthetical),
    },
    { id: 'functions', label: '核心功能', render: (insight) => renderCoreFeatures(insight) },
    {
      id: 'capabilities',
      label: '需要的能力',
      render: (insight) => formatListPill(insight?.requiredCapabilities, stripParenthetical),
    },
    { id: 'data', label: '需要的数据', render: (insight) => formatListPill(insight?.requiredData) },
    {
      id: 'data-support',
      label: '数据支持的功能',
      render: (insight) => formatListPill(insight?.dataSupportedFunctions),
    },
  ]

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>AI智能理财投顾路线图演示板</h1>
          <p className="subtitle">围绕“数据 → 能力 → 功能 → 价值”的决策逻辑，面向领导演示与跨团队协作。</p>
        </div>
        <nav className="view-switcher">
          {viewModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              className={viewMode === mode.id ? 'is-active' : ''}
              onClick={() => setViewMode(mode.id)}
            >
              <span>{mode.label}</span>
              <small>{mode.description}</small>
            </button>
          ))}
        </nav>
      </header>

      <main className="app-main">
        {viewMode === 'financial-prototype' && <FinancialPrototype />}

        {viewMode === 'prototype' && renderPrototypeView()}

        {viewMode === 'journey' && (
          <div className="journey-view">
            <section className="journey-grid">
              {phases.map((phase) => (
                <article key={phase.id} className="phase-column">
                  <header>
                    <span className="phase-label">{phase.label}</span>
                    <h2>{phase.theme}</h2>
                    <p>{phase.focus}</p>
                  </header>
                  <div className="node-stack">
                    {phase.nodes.map((node) => {
                      const isActive = node.id === selectedNodeId
                      return (
                        <button
                          key={node.id}
                          type="button"
                          className={`node-card ${isActive ? 'is-active' : ''}`}
                          onClick={() => setSelectedNodeId(node.id)}
                        >
                          <div className="node-title">
                            <span>{node.id}</span>
                            <h3>{node.label}</h3>
                          </div>
                          <p>{node.userState}</p>
                        </button>
                      )
                    })}
                  </div>
                </article>
              ))}
            </section>
            <aside className="node-detail">
              {selectedNode ? (
                <div>
                  <header>
                    <span className="phase-label">节点 {selectedNode.id}</span>
                    <h2>{selectedNode.label}</h2>
                    {selectedNode.trigger && (
                      <p className="detail-trigger">触发条件：{selectedNode.trigger}</p>
                    )}
                    <p className="detail-state">用户状态：{selectedNode.userState}</p>
                  </header>
                  <section>
                    <h3>核心问题</h3>
                    <ul>
                      {selectedNode.coreQuestions.map((question) => (
                        <li key={question}>{question}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3>关键任务</h3>
                    <ul>
                      {selectedNode.keyTasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </section>
                  {selectedNodeInsightSections.length > 0 && (
                    <section className="node-insights">
                      <h3>节点洞察</h3>
                      {selectedNodeInsightSections.map((section) => (
                        <div key={section.label} className="insight-group">
                          <h4>{section.label}</h4>
                          <ul>
                            {section.items.map((item, index) => (
                              <li key={`${section.label}-${index}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  )}
                  {selectedNode.notes && (
                    <section>
                      <h3>补充说明</h3>
                      <ul>
                        {selectedNode.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              ) : (
                <p>请选择一个节点查看详情。</p>
              )}
            </aside>
          </div>
        )}

        {viewMode === 'agents' && (
          <section className="panel-grid">
            {agents.map((agent) => (
              <article key={agent.id} className="panel-card">
                <header>
                  <h2>{stripParenthetical(agent.name)}</h2>
                  <p className="muted">{stripParenthetical(agent.positioning)}</p>
                </header>
                <p className="muted">{stripParenthetical(agent.coreResponsibility)}</p>
                <h3>关键能力</h3>
                <ul>
                  {agent.keyCapabilities.map((capability) => (
                    <li key={capability}>{stripParenthetical(capability)}</li>
                  ))}
                </ul>
                <h3>协同角色</h3>
                <p>
                  {agent.collaborators
                    .map((collaborator) => stripParenthetical(collaborator))
                    .filter((item) => item.length > 0)
                    .join('、')}
                </p>
              </article>
            ))}
          </section>
        )}

        {viewMode === 'data' && (
          <section className="data-view">
            {financialDataSections.map((section) => (
              <article key={section.id} className="data-section">
                <header>
                  <span className="section-tag">{section.id === 'bank' ? 'Bank' : 'Securities'}</span>
                  <h2>{section.title}</h2>
                </header>
                <div className="data-section-body">
                  {section.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="data-highlights">
                    <h3>核心维度</h3>
                    <ul>
                      {section.keyDimensions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="data-narrative">{section.narrative}</p>
                  <div className="data-table-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>数据类别</th>
                          <th>具体数据项</th>
                          <th>应用场景</th>
                          <th>涉及角色</th>
                          <th>优先级</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.map((row, index) => (
                          <tr key={`${row.category}-${index}`}>
                            <td>{row.category}</td>
                            <td>{row.items}</td>
                            <td>{row.scenarios}</td>
                            <td>{row.roles}</td>
                            <td>{row.priority}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            ))}
            <article className="data-synergy">
              <h3>数据协同价值</h3>
              <table className="data-table synergy-table">
                <thead>
                  <tr>
                    <th>维度</th>
                    <th>银行价值</th>
                    <th>证券价值</th>
                    <th>协同洞察</th>
                  </tr>
                </thead>
                <tbody>
                  {financialSynergyRows.map((row) => (
                    <tr key={row.dimension}>
                      <td>{row.dimension}</td>
                      <td>{row.bankValue}</td>
                      <td>{row.securitiesValue}</td>
                      <td>{row.synergy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          </section>
        )}

        {viewMode === 'priorities' && (
          <section className="panel-grid">
            {featurePriorities.map((feature) => (
              <article key={feature.id} className="panel-card">
                <header>
                  <span className="stage-chip">{feature.stage}</span>
                  <h2>{feature.title}</h2>
                </header>
                <p className="muted">{feature.mission}</p>
                <h3>关键体验</h3>
                <ul>
                  {feature.keyExperiences.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>入选理由</h3>
                <ul>
                  {feature.selectionReasons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>价值证明</h3>
                <ul>
                  {feature.proofPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        {viewMode === 'matrix' && (
          <div className="matrix-view">
            <div className="matrix-legend">
              {matrixCategories.map((category) => (
                <span
                  key={category.id}
                  className="matrix-legend-item"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <span className="matrix-legend-dot" style={{ backgroundColor: category.color }} />
                  <strong>{category.label}</strong>
                  <small>{category.description}</small>
                </span>
              ))}
            </div>
            <div
              className="matrix-grid"
              style={{ gridTemplateColumns: `240px repeat(${phases.length}, 1fr)` }}
            >
              <div className="matrix-grid-corner">
                <h2>5大核心角色</h2>
                <p className="muted">贯穿用户旅程的角色职责与所需数据</p>
              </div>
              {phases.map((phase) => (
                <div key={phase.id} className="matrix-grid-column">
                  <span className="phase-label">{phase.label}</span>
                  <h2>{phase.theme}</h2>
                </div>
              ))}
              {matrixRoles.map((role) => (
                <Fragment key={role.id}>
                  <div className="matrix-row-header">
                    <div className="role-avatar">{role.icon ?? '🤖'}</div>
                    <div>
                      <h3>{role.name}</h3>
                      <p className="muted">{role.summary}</p>
                    </div>
                  </div>
                  {phases.map((phase) => {
                    const cell = roleStageMap.get(`${role.id}-${phase.id}`)
                    if (!cell) {
                      return <div key={`${role.id}-${phase.id}`} className="matrix-cell empty" />
                    }
                    return (
                      <div key={`${role.id}-${phase.id}`} className="matrix-cell">
                        {cell.groups.map((group) => {
                          const category = categoryById[group.id]
                          return (
                            <div
                              key={group.id}
                              className="matrix-chip"
                              style={{ backgroundColor: `${category?.color ?? '#e2e8f0'}20` }}
                            >
                              <span className="chip-label" style={{ color: category?.color }}>
                                {group.title}
                              </span>
                              <ul>
                                {group.items.map((item) => (
                                  <li key={item.id}>{item.label}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </Fragment>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'insight' && (
          <section className="insight-view">
            <div
              className="insight-grid"
              style={{ gridTemplateColumns: `200px repeat(${allNodes.length}, minmax(220px, 1fr))` }}
            >
              <div className="insight-headline">
                <h2>21个用户旅程节点</h2>
                <p className="muted">纵向九大要素，横向覆盖完整链路。</p>
              </div>
              {allNodes.map((node) => (
                <div key={node.id} className="insight-column-header">
                  <span className="phase-label">{node.id}</span>
                  <h2>{node.label}</h2>
                  <small>{node.userState}</small>
                </div>
              ))}

              {insightSections.map((section) => (
                <Fragment key={section.id}>
                  <div className="insight-row-header">
                    <span>{section.label}</span>
                  </div>
                  {allNodes.map((node) => (
                    <div key={`${section.id}-${node.id}`} className="insight-cell">
                      {section.render(nodeInsightMap.get(node.id))}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
            <p className="insight-tip muted">提示：悬停在每个色块或条目上，可查看完整描述内容。</p>
          </section>
        )}

        {viewMode === 'decision' && (
          <div className="decision-view">
            <article className="panel-card wide">
              <header>
                <h2>MVP商业闭环</h2>
                <p className="muted">
                  这个 MVP 设计遵循“吸引 → 理解 → 说服 → 转化 → 留存”的完整商业闭环， 既验证首单转化，也为持有期运营预留空间。
                </p>
              </header>
              <table className="loop-table">
                <thead>
                  <tr>
                    <th>阶段</th>
                    <th>节点</th>
                    <th>核心目标</th>
                    <th>关键指标</th>
                  </tr>
                </thead>
                <tbody>
                  {mvpLoopStages.map((stage) => (
                    <tr key={stage.stage}>
                      <td>{stage.stage}</td>
                      <td>{stage.nodes}</td>
                      <td>{stage.goal}</td>
                      <td>{stage.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <section className="panel-grid">
              {mvpFlowSummaries.map((flow) => (
                <article key={flow.id} className="panel-card flow-card">
                  <header>
                    <span className="stage-chip">{flow.stage}</span>
                    <h2>{flow.title}</h2>
                  </header>
                  <p className="muted">{flow.promise}</p>
                  <ul>
                    {flow.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="flow-metric">
                    <span>关键指标</span>
                    <strong>{flow.metric}</strong>
                  </div>
                </article>
              ))}
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
