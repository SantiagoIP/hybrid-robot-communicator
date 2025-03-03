
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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
    cell: 'Cell (Isolation)',
    coexistence: 'Coexistence',
    synchronised: 'Synchronised',
    cooperation: 'Cooperation',
    collaboration: 'Collaboration',
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-blue-200 to-primary -translate-y-1/2 rounded-full"></div>
        <div className="flex justify-between relative">
          {stages.map((stage, index) => {
            const isActive = currentStage === stage;
            const isPast = stages.indexOf(currentStage) >= stages.indexOf(stage);
            const integrationLevel = ((index + 1) / stages.length) * 100;

            return (
              <motion.button
                key={stage}
                className="relative z-10 flex flex-col items-center"
                onClick={() => onStageClick(stage)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors",
                    isPast
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  )}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    backgroundColor: isActive
                      ? "rgb(var(--primary) / 1)"
                      : isPast
                      ? "rgb(var(--primary) / 0.8)"
                      : "white",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
                <motion.span
                  className={cn(
                    "text-xs font-medium whitespace-nowrap",
                    isActive ? "text-primary" : "text-gray-500"
                  )}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  {stageNames[stage]}
                </motion.span>
                
                {index < stages.length - 1 && (
                  <motion.div 
                    className="absolute top-0 left-[calc(100%+0.5rem)] hidden md:block"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </motion.div>
                )}
                
                <motion.span
                  className="text-[10px] text-gray-400 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0.5 }}
                >
                  {integrationLevel.toFixed(0)}% integration
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
