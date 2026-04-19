import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { stageColor, stageColorSoft } from '@/lib/stageTokens';

type StageCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  index: number;
};

const StageCard: React.FC<StageCardProps> = ({
  title,
  description,
  icon,
  isActive,
  onClick,
  index,
}) => {
  const accent = stageColor(index);
  const accentSoft = stageColorSoft(index);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`Select stage: ${title}`}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm border transition-all duration-300 ease-out cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2',
        isActive
          ? 'border-transparent shadow-lg'
          : 'border-gray-200/70 shadow-sm hover:border-gray-300 hover:shadow-md'
      )}
      style={{
        boxShadow: isActive
          ? `0 12px 28px -12px ${accent}66, 0 0 0 1px ${accent}55`
          : undefined,
        background: isActive
          ? `linear-gradient(135deg, #ffffff 0%, ${accentSoft} 100%)`
          : undefined,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl"
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          scaleY: isActive ? 1 : 0.4,
        }}
        transition={{ duration: 0.3 }}
        style={{ background: accent, transformOrigin: 'center' }}
      />

      <div className="p-4 pl-5">
        <div className="flex items-center mb-2">
          <div
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors',
              isActive ? 'text-white' : 'text-gray-700'
            )}
            style={{
              background: isActive ? accent : `${accent}22`,
            }}
          >
            {icon}
          </div>
          <h3
            className={cn(
              'font-semibold text-base sm:text-lg leading-tight',
              isActive ? 'text-gray-900' : 'text-gray-800'
            )}
          >
            <span
              className="text-[10px] font-mono tracking-wider mr-1.5 align-middle"
              style={{ color: accent }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 pl-[52px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default StageCard;
