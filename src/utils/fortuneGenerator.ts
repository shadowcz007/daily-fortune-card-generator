
export interface Fortune {
  fortune: string;
  luckyNumber: number;
  luckyColor: {
    name: string;
    hex: string;
  };
  sign: string;
  type: 'zodiac' | 'animal';
}

const goodActivities = [
  '喝奶茶', '购物', '运动', '学习', '旅行', '社交',
  '工作', '阅读', '投资', '美食', '发朋友圈', '户外活动',
  '拍照', '聚会', '早起', '运动', '冥想', '看电影'
];

const badActivities = [
  '熬夜', '剁手', '暴饮暴食', '八卦', '拖延', '抱怨',
  '打游戏', '过度刷手机', '赖床', '迟到', '加班', '冲动消费',
  '吃辛辣', '喝酒', '玩通宵', '生气', '看恐怖片'
];

const colors = [
  { name: '红色', hex: '#FF5252' },
  { name: '橙色', hex: '#FF9800' },
  { name: '黄色', hex: '#FFC107' },
  { name: '绿色', hex: '#4CAF50' },
  { name: '蓝色', hex: '#2196F3' },
  { name: '紫色', hex: '#9C27B0' },
  { name: '粉色', hex: '#FF4081' },
  { name: '青色', hex: '#00BCD4' },
  { name: '金色', hex: '#FFD700' },
  { name: '银色', hex: '#C0C0C0' }
];

// Random selection utilities
const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate fortune text
const generateFortuneText = (): string => {
  const good = getRandomElement(goodActivities);
  const bad = getRandomElement(badActivities);
  return `宜${good}，忌${bad}`;
};

// Random zodiac or animal sign
export const getRandomSign = (type: 'zodiac' | 'animal'): string => {
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

  return type === 'zodiac' 
    ? getRandomElement(zodiacSigns) 
    : getRandomElement(chineseZodiac);
};

// Generate complete fortune
export const generateFortune = (sign: string, type: 'zodiac' | 'animal'): Fortune => {
  return {
    fortune: generateFortuneText(),
    luckyNumber: getRandomNumber(1, 9),
    luckyColor: getRandomElement(colors),
    sign,
    type
  };
};
