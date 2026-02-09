import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ProgressTrackerProps = {
  stages: string[];
  currentStage: string;
  onStageClick: (stage: string) => void;
};

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  stages,
  currentStage,
  onStageClick,
}) => {
  const stageNames: Record<string, string> = {
    cell: 'Cell',
    coexistence: 'Coexistence',
    synchronised: 'Synchronised',
    cooperation: 'Cooperation',
    collaboration: 'Collaboration',
    coevolution: 'Co-evolution',
  };

  const currentIndex = stages.indexOf(currentStage);

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="relative min-w-[480px]">
        {/* Background track */}
        <div className="absolute top-5 left-5 right-5 h-[3px] bg-gray-200 rounded-full" />
        {/* Active track */}
        <motion.div
          className="absolute top-5 left-5 h-[3px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
          initial={{ width: '0%' }}
          animate={{
            width: `${(currentIndex / (stages.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ maxWidth: 'calc(100% - 40px)' }}
        />

        <div className="flex justify-between relative">
          {stages.map((stage, index) => {
            const isActive = currentStage === stage;
            const isPast = currentIndex >= index;

            return (
              <motion.button
                key={stage}
                className="relative z-10 flex flex-col items-center group"
                onClick={() => onStageClick(stage)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-4 ring-blue-100"
                      : isPast
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-white border-2 border-gray-300 text-gray-400 group-hover:border-blue-300 group-hover:text-blue-400"
                  )}
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
                <motion.span
                  className={cn(
                    "mt-2 text-xs font-medium text-center leading-tight transition-colors duration-300",
                    isActive
                      ? "text-blue-700 font-semibold"
                      : isPast
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-600"
                  )}
                  animate={{
                    scale: isActive ? 1.05 : 1,
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
