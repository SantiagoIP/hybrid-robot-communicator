import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { stageColor } from '@/lib/stageTokens';

type ProgressTrackerProps = {
  stages: string[];
  currentStage: string;
  onStageClick: (stage: string) => void;
};

const stageNames: Record<string, string> = {
  cell: 'Cell (Isolation)',
  coexistence: 'Coexistence',
  synchronised: 'Synchronised',
  cooperation: 'Cooperation',
  collaboration: 'Collaboration',
  coevolution: 'Co-evolution',
};

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  stages,
  currentStage,
  onStageClick,
}) => {
  const currentIndex = stages.indexOf(currentStage);
  const fillPct =
    stages.length > 1 ? (currentIndex / (stages.length - 1)) * 100 : 0;
  const activeColor = stageColor(currentIndex);

  return (
    <div
      className="w-full"
      role="tablist"
      aria-label="Stages of human-robot integration"
    >
      <ol className="flex flex-col gap-2 md:hidden">
        {stages.map((stage, index) => {
          const isActive = currentStage === stage;
          const isPast = currentIndex >= index;
          const color = stageColor(index);
          return (
            <li key={stage}>
              <button
                type="button"
                onClick={() => onStageClick(stage)}
                role="tab"
                aria-selected={isActive}
                aria-label={`Stage ${index + 1}: ${stageNames[stage]}`}
                className={cn(
                  'w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
                  isActive ? 'bg-white shadow-sm' : 'hover:bg-white/70'
                )}
                style={
                  isActive
                    ? { boxShadow: `inset 3px 0 0 0 ${color}` }
                    : undefined
                }
              >
                <span
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 transition-colors',
                    isPast ? 'text-white' : 'bg-white border border-gray-300 text-gray-400'
                  )}
                  style={isPast ? { background: color } : undefined}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    'text-sm font-medium',
                    isActive ? 'text-gray-900' : 'text-gray-700'
                  )}
                >
                  {stageNames[stage]}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative hidden md:block">
        <div
          className="absolute top-5 left-0 right-0 h-1 rounded-full bg-gray-200"
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-5 left-0 h-1 rounded-full"
          aria-hidden="true"
          initial={false}
          animate={{
            width: `${fillPct}%`,
            background: `linear-gradient(90deg, ${stageColor(0)}, ${activeColor})`,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <div className="flex justify-between relative">
          {stages.map((stage, index) => {
            const isActive = currentStage === stage;
            const isPast = currentIndex >= index;
            const color = stageColor(index);

            return (
              <motion.button
                key={stage}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Stage ${index + 1}: ${stageNames[stage]}`}
                className="relative z-10 flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 rounded-full"
                onClick={() => onStageClick(stage)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center mb-2 text-sm font-semibold transition-colors',
                    isPast
                      ? 'text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                  )}
                  animate={{ scale: isActive ? 1.18 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={
                    isPast
                      ? {
                          background: color,
                          boxShadow: isActive
                            ? `0 6px 14px -4px ${color}`
                            : 'none',
                        }
                      : undefined
                  }
                >
                  {index + 1}
                </motion.div>
                <motion.span
                  className={cn(
                    'text-xs font-medium whitespace-nowrap text-center',
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  )}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.75,
                  }}
                >
                  {stageNames[stage]}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
