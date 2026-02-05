
import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, setLang }) => {
  return (
    <div className="flex items-center bg-stone-200 rounded-full p-1 shadow-inner">
      <button
        onClick={() => setLang('en')}
        className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
          currentLang === 'en' ? 'bg-emerald-600 text-white shadow' : 'text-stone-600 hover:text-emerald-700'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLang('ta')}
        className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
          currentLang === 'ta' ? 'bg-emerald-600 text-white shadow' : 'text-stone-600 hover:text-emerald-700'
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
};
