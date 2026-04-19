import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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

  return (
    <div
      className="w-full"
      role="tablist"
      aria-label="Stages of human-robot integration"
    >
      {/* Mobile: vertical stepper */}
      <ol className="flex flex-col gap-2 md:hidden">
        {stages.map((stage, index) => {
          const isActive = currentStage === stage;
          const isPast = currentIndex >= index;
          return (
            <li key={stage}>
              <button
                type="button"
                onClick={() => onStageClick(stage)}
                role="tab"
                aria-selected={isActive}
                aria-label={`Stage ${index + 1}: ${stageNames[stage]}`}
                className={cn(
                  'w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors',
                  isActive
                    ? 'bg-primary/10 ring-1 ring-primary/40'
                    : 'hover:bg-white/70'
                )}
              >
                <span
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0',
                    isPast
                      ? 'bg-primary text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    'text-sm font-medium',
                    isActive ? 'text-primary' : 'text-gray-700'
                  )}
                >
                  {stageNames[stage]}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Desktop: horizontal stepper */}
      <div className="relative hidden md:block">
        <div className="absolute top-5 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-blue-200 to-primary rounded-full" aria-hidden="true" />
        <div className="flex justify-between relative">
          {stages.map((stage, index) => {
            const isActive = currentStage === stage;
            const isPast = currentIndex >= index;

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
                    'w-10 h-10 rounded-full flex items-center justify-center mb-2 text-lg transition-colors',
                    isPast
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                  )}
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
                <motion.span
                  className={cn(
                    'text-xs font-medium whitespace-nowrap',
                    isActive ? 'text-primary' : 'text-gray-500'
                  )}
                  animate={{ scale: isActive ? 1.1 : 1, opacity: isActive ? 1 : 0.7 }}
                >
                  {stageNames[stage]}
                </motion.span>

                {index < stages.length - 1 && (
                  <div
                    className="absolute top-3 left-[calc(100%+0.5rem)] hidden xl:block"
                    style={{ transform: 'translateX(-50%)' }}
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
