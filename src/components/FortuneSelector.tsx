
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FortuneSelectorProps {
  onSelectType: (type: 'zodiac' | 'animal') => void;
  onSelectSign: (sign: string) => void;
  onGenerate: () => void;
  selectedType: 'zodiac' | 'animal';
  selectedSign: string;
}

const FortuneSelector: React.FC<FortuneSelectorProps> = ({
  onSelectType,
  onSelectSign,
  onGenerate,
  selectedType,
  selectedSign,
}) => {
  const zodiacSigns = [
    '白羊座', '金牛座', '双子座', '巨蟹座',
    '狮子座', '处女座', '天秤座', '天蝎座',
    '射手座', '摩羯座', '水瓶座', '双鱼座'
  ];

  const chineseZodiac = [
    '鼠', '牛', '虎', '兔',
    '龙', '蛇', '马', '羊',
    '猴', '鸡', '狗', '猪'
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-xl bg-white shadow-md animate-fade-in">
      <Tabs value={selectedType} onValueChange={(value) => onSelectType(value as 'zodiac' | 'animal')}>
        <TabsList className="grid grid-cols-2 w-full mb-4">
          <TabsTrigger value="zodiac">星座</TabsTrigger>
          <TabsTrigger value="animal">生肖</TabsTrigger>
        </TabsList>

        <TabsContent value="zodiac" className="mt-0">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {zodiacSigns.map(sign => (
              <Button
                key={sign}
                variant={selectedSign === sign ? "default" : "outline"}
                size="sm"
                onClick={() => onSelectSign(sign)}
                className={selectedSign === sign ? "bg-fortune-primary-purple text-white" : ""}
              >
                {sign}
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="animal" className="mt-0">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {chineseZodiac.map(sign => (
              <Button
                key={sign}
                variant={selectedSign === sign ? "default" : "outline"}
                size="sm"
                onClick={() => onSelectSign(sign)}
                className={selectedSign === sign ? "bg-fortune-primary-purple text-white" : ""}
              >
                {sign}
              </Button>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Button 
        className="w-full bg-fortune-primary-purple hover:bg-opacity-90"
        onClick={onGenerate}
      >
        生成今日运势
      </Button>
    </div>
  );
};

export default FortuneSelector;
