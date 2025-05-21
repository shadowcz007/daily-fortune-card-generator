
import React from 'react';
import { cn } from '@/lib/utils';

interface FortuneCardProps {
  children: React.ReactNode;
  className?: string;
  type?: 'default' | 'zodiac' | 'animal';
}

const FortuneCard: React.FC<FortuneCardProps> = ({ 
  children, 
  className,
  type = 'default'
}) => {
  return (
    <div 
      className={cn(
        'relative rounded-2xl p-6 fortune-card fortune-card-border animate-scale-in',
        type === 'zodiac' && 'zodiac',
        type === 'animal' && 'animal',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FortuneCard;
