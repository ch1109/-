import { useState } from 'react';
import { roleNodes, externalNodes, dataFlows, scenarios } from '../data/roleDataFlow';
import type { RoleNode, DataFlow } from '../data/roleDataFlow';
import './RoleDataFlow.css';

export const RoleDataFlow: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState('all');
  const [selectedNode, setSelectedNode] = useState<RoleNode | null>(null);
  const [hoveredFlow, setHoveredFlow] = useState<string | null>(null);

  const currentScenario = scenarios.find(s => s.id === selectedScenario);
  
  // 判断节点是否应该高亮
  const isNodeHighlighted = (nodeId: string) => {
    if (selectedScenario === 'all') return true;
    return currentScenario?.highlightNodes?.includes(nodeId) ?? false;
  };

  // 判断数据流是否应该高亮
  const isFlowHighlighted = (flowId: string) => {
    if (selectedScenario === 'all') return true;
    return currentScenario?.highlightFlows?.includes(flowId) ?? false;
  };

  // 获取数据流的颜色
  const getFlowColor = (flowType: DataFlow['flowType']) => {
    switch (flowType) {
      case 'bank': return '#3B82F6'; // 蓝色
      case 'securities': return '#10B981'; // 绿色
      case 'user': return '#F59E0B'; // 橙色
      case 'agent': return '#000000'; // 黑色
      default: return '#6B7280';
    }
  };

  // 获取节点颜色
  const getNodeColor = (layer: RoleNode['layer']) => {
    switch (layer) {
      case 'external': return '#9CA3AF';
      case 'interface': return '#3B82F6';
      case 'decision': return '#A855F7';
      case 'execution': return '#10B981';
      case 'support': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  // 绘制箭头标记
  const renderArrowMarkers = () => (
    <defs>
      <marker
        id="arrowhead-bank"
        markerWidth="10"
        markerHeight="10"
        refX="9"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 10 3, 0 6" fill="#3B82F6" />
      </marker>
      <marker
        id="arrowhead-securities"
        markerWidth="10"
        markerHeight="10"
        refX="9"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
      </marker>
      <marker
        id="arrowhead-user"
        markerWidth="10"
        markerHeight="10"
        refX="9"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 10 3, 0 6" fill="#F59E0B" />
      </marker>
      <marker
        id="arrowhead-agent"
        markerWidth="10"
        markerHeight="10"
        refX="9"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 10 3, 0 6" fill="#000000" />
      </marker>
    </defs>
  );

  // 绘制数据流连接线
  const renderDataFlows = () => {
    return dataFlows.map(flow => {
      const fromNode = [...roleNodes, ...externalNodes].find(n => n.id === flow.from);
      const toNode = [...roleNodes, ...externalNodes].find(n => n.id === flow.to);
      
      if (!fromNode || !toNode) return null;

      const isHighlighted = isFlowHighlighted(flow.id);
      const isHovered = hoveredFlow === flow.id;
      const opacity = selectedScenario === 'all' ? 1 : (isHighlighted ? 1 : 0.2);
      const strokeWidth = isHovered ? 3 : 2;
      const color = getFlowColor(flow.flowType);

      // 计算连接线的起点和终点
      const x1 = fromNode.position.x;
      const y1 = fromNode.position.y + 30; // 从节点底部出发
      const x2 = toNode.position.x;
      const y2 = toNode.position.y - 10; // 到节点顶部

      // 使用贝塞尔曲线
      const midY = (y1 + y2) / 2;
      const path = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;

      return (
        <g key={flow.id}>
          <path
            d={path}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            opacity={opacity}
            strokeDasharray={flow.flowType === 'bank' || flow.flowType === 'securities' ? '5,5' : '0'}
            markerEnd={`url(#arrowhead-${flow.flowType})`}
            onMouseEnter={() => setHoveredFlow(flow.id)}
            onMouseLeave={() => setHoveredFlow(null)}
            style={{ cursor: 'pointer' }}
          />
          {isHovered && (
            <text
              x={(x1 + x2) / 2}
              y={(y1 + y2) / 2}
              textAnchor="middle"
              fontSize="12"
              fill="#374151"
              style={{ pointerEvents: 'none' }}
            >
              {flow.dataType}
            </text>
          )}
        </g>
      );
    });
  };

  // 绘制节点
  const renderNodes = () => {
    const allNodes = [...externalNodes, ...roleNodes];

    return allNodes.map(node => {
      const isHighlighted = isNodeHighlighted(node.id);
      const isSelected = selectedNode?.id === node.id;
      const opacity = selectedScenario === 'all' ? 1 : (isHighlighted ? 1 : 0.3);
      const color = getNodeColor(node.layer);

      return (
        <g
          key={node.id}
          transform={`translate(${node.position.x}, ${node.position.y})`}
          onClick={() => {
            // 支持点击外部节点和角色节点
            setSelectedNode(node as RoleNode);
          }}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x="-100"
            y="-45"
            width="200"
            height="90"
            rx="12"
            fill="white"
            stroke={isSelected ? '#FBBF24' : color}
            strokeWidth={isSelected ? 4 : 2.5}
            opacity={opacity}
          />
          <text
            x="0"
            y="-10"
            textAnchor="middle"
            fontSize="36"
            style={{ pointerEvents: 'none' }}
          >
            {node.emoji}
          </text>
          <text
            x="0"
            y="22"
            textAnchor="middle"
            fontSize="16"
            fontWeight="600"
            fill="#1F2937"
            style={{ pointerEvents: 'none' }}
          >
            {node.name}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="role-data-flow">
      {/* 顶部工具栏 */}
      <div className="flow-toolbar">
        <div className="toolbar-section">
          <h2>角色数据流转关系图</h2>
          <p className="muted">展示9个AI角色之间的数据流转关系和协作机制</p>
        </div>
        
        <div className="toolbar-section">
          <label>场景选择：</label>
          <select 
            value={selectedScenario} 
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="scenario-select"
          >
            {scenarios.map(scenario => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.name}
              </option>
            ))}
          </select>
        </div>

        <div className="toolbar-section legend">
          <div className="legend-item">
            <div className="legend-line" style={{ borderColor: '#3B82F6', borderStyle: 'dashed' }}></div>
            <span>银行数据流</span>
          </div>
          <div className="legend-item">
            <div className="legend-line" style={{ borderColor: '#10B981', borderStyle: 'dashed' }}></div>
            <span>证券数据流</span>
          </div>
          <div className="legend-item">
            <div className="legend-line" style={{ borderColor: '#000000' }}></div>
            <span>Agent间数据流</span>
          </div>
          <div className="legend-item">
            <div className="legend-line" style={{ borderColor: '#F59E0B' }}></div>
            <span>用户交互</span>
          </div>
        </div>
      </div>

      {/* 主可视化区域 */}
      <div className="flow-main">
        <div className="flow-canvas">
          <svg width="900" height="850" viewBox="-50 -30 900 900">
            {renderArrowMarkers()}
            {renderDataFlows()}
            {renderNodes()}

            {/* 层级标签 */}
            <text x="-40" y="75" fontSize="18" fontWeight="700" fill="#6B7280">外部数据源层</text>
            <text x="-40" y="225" fontSize="18" fontWeight="700" fill="#3B82F6">接口层</text>
            <text x="-40" y="375" fontSize="18" fontWeight="700" fill="#A855F7">决策层</text>
            <text x="-40" y="545" fontSize="18" fontWeight="700" fill="#10B981">执行层</text>
            <text x="-40" y="715" fontSize="18" fontWeight="700" fill="#F59E0B">支持层</text>
          </svg>
        </div>

        {/* 详情面板 */}
        <div className="flow-detail-panel">
          {selectedNode ? (
            <div className="detail-content">
              <div className="detail-header">
                <span className="detail-emoji">{selectedNode.emoji}</span>
                <div>
                  <h3>{selectedNode.name}</h3>
                  <span className="detail-layer">{selectedNode.layer}</span>
                </div>
                <button 
                  className="close-button"
                  onClick={() => setSelectedNode(null)}
                >
                  ✕
                </button>
              </div>

              {selectedNode.inputs && selectedNode.inputs.length > 0 && (
                <div className="detail-section">
                  <h4>📥 输入来源</h4>
                  <ul>
                    {selectedNode.inputs.map((input, idx) => (
                      <li key={idx}>{input}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="detail-section">
                <h4>⚙️ {selectedNode.layer === 'external' ? '数据内容' : '核心处理'}</h4>
                <ol>
                  {selectedNode.coreProcessing.map((process, idx) => (
                    <li key={idx}>{process}</li>
                  ))}
                </ol>
              </div>

              {selectedNode.outputs && selectedNode.outputs.length > 0 && (
                <div className="detail-section">
                  <h4>📤 输出目标</h4>
                  <ul>
                    {selectedNode.outputs.map((output, idx) => (
                      <li key={idx}>{output}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="detail-placeholder">
              <p>点击任意角色节点查看详细信息</p>
              {currentScenario && currentScenario.id !== 'all' && (
                <div className="scenario-info">
                  <h4>{currentScenario.name}</h4>
                  <p>{currentScenario.description}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

