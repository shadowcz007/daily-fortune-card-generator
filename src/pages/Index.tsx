
import React, { useState, useEffect } from 'react';
import FortuneSelector from '@/components/FortuneSelector';
import FortuneResult from '@/components/FortuneResult';
import { generateFortune, getRandomSign, type Fortune } from '@/utils/fortuneGenerator';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<'zodiac' | 'animal'>('zodiac');
  const [selectedSign, setSelectedSign] = useState<string>('');
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  // Initialize with random sign
  useEffect(() => {
    setSelectedSign(getRandomSign(selectedType));
  }, [selectedType]);

  const handleSelectType = (type: 'zodiac' | 'animal') => {
    setSelectedType(type);
    setSelectedSign(getRandomSign(type));
  };

  const handleSelectSign = (sign: string) => {
    setSelectedSign(sign);
  };

  const handleGenerateFortune = () => {
    const newFortune = generateFortune(selectedSign, selectedType);
    setFortune(newFortune);
    setShowResult(true);
    
    toast({
      title: "运势已生成！",
      description: "长按结果图片可保存分享",
    });
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-b from-fortune-soft-purple/30 to-fortune-soft-blue/30">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">天天运势生成器</h1>
          <p className="text-gray-600">每日运势，手动分享</p>
        </div>

        {!showResult ? (
          <FortuneSelector
            onSelectType={handleSelectType}
            onSelectSign={handleSelectSign}
            onGenerate={handleGenerateFortune}
            selectedType={selectedType}
            selectedSign={selectedSign}
          />
        ) : (
          <div className="space-y-6">
            {fortune && (
              <FortuneResult
                fortune={fortune.fortune}
                luckyNumber={fortune.luckyNumber}
                luckyColor={fortune.luckyColor}
                sign={fortune.sign}
                type={fortune.type}
              />
            )}
            
            <button 
              className="block mx-auto mt-6 px-4 py-2 text-fortune-primary-purple hover:underline"
              onClick={handleReset}
            >
              重新生成
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
