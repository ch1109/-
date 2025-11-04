export type CapabilityRealizationLevel =
  | 'complete'
  | 'baseline'
  | 'degraded'
  | 'unavailable';

export interface RoadmapPhase {
  id: string;
  label: string;
  theme: string;
  focus: string;
  nodes: JourneyNode[];
}

export interface JourneyNodeInsight {
  userActions?: string[];
  aiGoals?: string[];
  painPoints?: string[];
  itchPoints?: string[];
  delightPoints?: string[];
}

export interface JourneyNode {
  id: string;
  label: string;
  trigger?: string;
  userState: string;
  coreQuestions: string[];
  keyTasks: string[];
  notes?: string[];
  insights?: JourneyNodeInsight;
}

export interface AgentDefinition {
  id: string;
  name: string;
  positioning: string;
  coreResponsibility: string;
  keyCapabilities: string[];
  collaborators: string[];
}

export interface CapabilityRealizationDefinition {
  id: CapabilityRealizationLevel;
  label: string;
  dataConditions: string;
  performance: string;
  userPerception: string;
  examples: string[];
}

export interface FeaturePriorityDefinition {
  id: string;
  stage: string;
  title: string;
  mission: string;
  keyExperiences: string[];
  selectionReasons: string[];
  proofPoints: string[];
}

export interface DecisionStep {
  id: string;
  label: string;
  actions: string[];
}

export interface MvpLoopStage {
  stage: string;
  nodes: string;
  goal: string;
  metric: string;
}

export interface MvpFlowSummary {
  id: string;
  stage: string;
  title: string;
  promise: string;
  highlights: string[];
  metric: string;
}

export interface MatrixCategory {
  id: string;
  label: string;
  description: string;
  color: string;
}

export interface RoleDefinition {
  id: string;
  name: string;
  summary: string;
  icon?: string;
}

export interface RoleStageGroup {
  id: string;
  title: string;
  items: RoleStageItem[];
}

export interface RoleStageItem {
  id: string;
  label: string;
  categoryId: string;
  notes?: string;
}

export interface RoleStageCell {
  roleId: string;
  stageId: string;
  groups: RoleStageGroup[];
}

export interface TriggerBreakdown {
  system: string;
  user: string;
  data: string;
  time: string;
}

export interface CoreFeatureDetail {
  title: string;
  description: string;
}

export interface NodeInsight {
  nodeId: string;
  label: string;
  triggers: TriggerBreakdown;
  aiRoles: string[];
  coreFunctions: string[];
  requiredCapabilities: string[];
  requiredData: string[];
  dataSupportedFunctions: string[];
  coreFeaturesPreview?: string[];
  coreFeaturesFull?: CoreFeatureDetail[];
}

export interface DataNeedRow {
  category: string;
  items: string;
  scenarios: string;
  roles: string;
  priority: string;
}

export interface FlywheelUseCaseRow {
  category: string;
  challenge: string;
  aiOutput: string[];
  enablement: string[];
  impact: string[];
}

export interface DataFlywheelContent {
  title: string;
  description: string;
  summaryNarrative: string;
  valueTitle: string;
  valuePoints: string[];
  useCaseTable: FlywheelUseCaseRow[];
}

export interface DataNeedSection {
  id: 'bank' | 'securities';
  title: string;
  overview: string[];
  keyDimensions: string[];
  narrative: string;
  table: DataNeedRow[];
  flywheel?: DataFlywheelContent;
}

export interface DataSynergyRow {
  dimension: string;
  bankValue: string;
  securitiesValue: string;
  synergy: string;
}
