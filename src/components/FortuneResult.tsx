
import React from 'react';
import { cn } from '@/lib/utils';
import FortuneCard from './FortuneCard';

interface FortuneResultProps {
  fortune: string;
  luckyNumber: number;
  luckyColor: {
    name: string;
    hex: string;
  };
  sign: string;
  type: 'zodiac' | 'animal';
}

const FortuneResult: React.FC<FortuneResultProps> = ({
  fortune,
  luckyNumber,
  luckyColor,
  sign,
  type
}) => {
  return (
    <FortuneCard type={type} className="w-full max-w-md mx-auto">
      <div className="text-center space-y-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {sign} - 今日运势
          </h2>
          <p className="text-gray-500 text-sm">
            {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        
        <div className="text-xl font-bold px-4 py-3 rounded-lg bg-white bg-opacity-70 animate-pulse-soft">
          {fortune}
        </div>
        
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">幸运数字</p>
            <div className="w-10 h-10 rounded-full bg-fortune-soft-purple flex items-center justify-center text-lg font-bold mx-auto">
              {luckyNumber}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">幸运颜色</p>
            <div 
              className="w-10 h-10 rounded-full mx-auto" 
              style={{ backgroundColor: luckyColor.hex }}
              title={luckyColor.name}
            />
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-8 pt-2 border-t border-gray-200">
          长按保存，分享你的今日好运！
        </div>
      </div>
    </FortuneCard>
  );
};

export default FortuneResult;
