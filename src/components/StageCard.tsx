
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
        "rounded-xl p-[2px] cursor-pointer transition-all duration-300 ease-out",
        isActive 
          ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25" 
          : "bg-gradient-to-br from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200"
      )}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={cn(
        "bg-white rounded-[10px] p-4 h-full transition-colors duration-300",
        isActive && "bg-gradient-to-br from-white to-blue-50"
      )}>
        <div className="flex items-center mb-2">
          <div className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center mr-3 shrink-0 transition-colors duration-300",
            isActive 
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" 
              : "bg-blue-50 text-blue-600"
          )}>
            {icon}
          </div>
          <h3 className={cn(
            "font-semibold text-base leading-tight transition-colors duration-300",
            isActive ? "text-blue-700" : "text-gray-800"
          )}>
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 pl-12">{description}</p>
      </div>
    </motion.div>
  );
};

export default StageCard;
