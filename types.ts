
export type Language = 'en' | 'ta';

export interface Service {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  price: number;
  originalPrice?: number;
  duration?: string;
  imageUrl: string;
  category: 'massage' | 'hair' | 'treatment' | 'other';
  addOns?: {
    name: { en: string; ta: string };
    price: number;
  }[];
}

export interface Translation {
  [key: string]: {
    en: string;
    ta: string;
  };
}
