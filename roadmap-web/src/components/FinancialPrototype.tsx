import { useState } from 'react';
import { StandbyHome } from './StandbyHome';
import { AutoFlowA } from './AutoFlowA';
import { AutoFlowB } from './AutoFlowB';
import type { SystemState } from '../types/financial-prototype';

export const FinancialPrototype: React.FC = () => {
  const [currentState, setCurrentState] = useState<SystemState>('standby');

  const handleEnterFlowA = () => {
    setCurrentState('ai-working');
  };

  const handleEnterFlowB = () => {
    setCurrentState('business-assist');
  };

  const handleBackToStandby = () => {
    setCurrentState('standby');
  };

  return (
    <div className="financial-prototype">
      {currentState === 'standby' && (
        <StandbyHome
          onEnterFlowA={handleEnterFlowA}
          onEnterFlowB={handleEnterFlowB}
        />
      )}

      {currentState === 'ai-working' && (
        <AutoFlowA onBack={handleBackToStandby} />
      )}

      {currentState === 'business-assist' && (
        <AutoFlowB onBack={handleBackToStandby} />
      )}
    </div>
  );
};

