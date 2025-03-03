
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
  index
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl p-1 cursor-pointer transition-all duration-300 ease-out",
        isActive 
          ? "bg-gradient-to-br from-primary/80 to-blue-500/80 shadow-lg shadow-primary/20" 
          : "bg-white/70 hover:bg-white/90 border border-white/40"
      )}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: isActive ? 'var(--gradient-active)' : 'var(--gradient-inactive)'
      }}
    >
      <div className={cn(
        "bg-white/95 backdrop-blur-sm rounded-lg p-4 h-full",
        isActive && "bg-gradient-to-br from-white/95 to-blue-50/95"
      )}>
        <div className="flex items-center mb-3">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mr-3",
            isActive ? "bg-primary text-white" : "bg-blue-100 text-primary"
          )}
          style={{
            backgroundColor: isActive ? 'rgb(var(--primary) / 1)' : 'rgb(219 234 254)'
          }}>
            {icon}
          </div>
          <h3 className={cn(
            "font-semibold text-lg",
            isActive ? "text-primary" : "text-gray-800"
          )}>
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default StageCard;
