// 金融原型机交互设计类型定义

// 系统状态
export type SystemState = 'standby' | 'ai-working' | 'business-assist';

// 消息类型
export type MessageRole = 'user' | 'ai' | 'system';

// 消息结构
export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
  thinking?: ThinkingProcess;
  agentLogs?: AgentLog[];
}

// AI思考过程
export interface ThinkingProcess {
  intentRecognition?: string;
  knowledgeRetrieval?: string[];
  strategySelection?: string;
  riskCheck?: string;
}

// Agent协同日志
export interface AgentLog {
  id: string;
  agentName: string;
  action: string;
  timestamp: number;
  status: 'pending' | 'processing' | 'completed';
}

// 用户画像数据
export interface UserProfile {
  childAge?: number;
  targetAmount?: number;
  yearsToGoal?: number;
  monthlyIncome?: number;
  monthlyExpense?: number;
  currentSavings?: number;
  riskTolerance?: 'conservative' | 'balanced' | 'aggressive';
}

// 雷达图数据
export interface RadarData {
  dimensions: string[];
  values: number[];
}

// 可行性评估结果
export interface FeasibilityResult {
  isFeasible: boolean;
  confidence: number;
  monthlySavingsNeeded: number;
  savingsRate: number;
  warnings: string[];
  suggestions: string[];
}

// 投资方案
export interface InvestmentPlan {
  id: string;
  name: string;
  description: string;
  allocation: {
    category: string;
    percentage: number;
    products: string[];
  }[];
  expectedReturn: {
    min: number;
    mid: number;
    max: number;
  };
  riskLevel: number;
  pros: string[];
  cons: string[];
}

// 风险测评问题
export interface RiskQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    score: number;
  }[];
}

// 风险测评结果
export interface RiskAssessmentResult {
  score: number;
  level: 'R1' | 'R2' | 'R3' | 'R4' | 'R5';
  levelName: string;
  description: string;
  suitableProducts: string[];
}

// 业务办理步骤
export interface BusinessStep {
  id: number;
  name: string;
  status: 'pending' | 'processing' | 'completed';
}

// 流程A状态 (AI工作态)
export interface FlowAState {
  currentStage: 'initial' | 'questioning' | 'feasibility' | 'solution' | 'completed';
  userProfile: UserProfile;
  radarData: RadarData;
  questionIndex: number;
  feasibilityResult?: FeasibilityResult;
  selectedPlan?: InvestmentPlan;
  plans: InvestmentPlan[];
  messages: Message[];
  isGenerating: boolean;
  progress: number;
}

// 流程B状态 (业务辅助态)
export interface FlowBState {
  currentStage: 'identity' | 'assessment' | 'confirmation' | 'agreement' | 'completed';
  businessSteps: BusinessStep[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  assessmentResult?: RiskAssessmentResult;
  messages: Message[];
  showHelp: boolean;
  helpMessage?: string;
}

// 快捷问题
export interface QuickQuestion {
  id: string;
  text: string;
  action: () => void;
}

// 进度信息
export interface ProgressInfo {
  current: number;
  total: number;
  percentage: number;
  label: string;
}
