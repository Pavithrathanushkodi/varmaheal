
import React, { useState } from 'react';
import { Service, Language } from '../types';
import { WHATSAPP_NUMBER, UI_STRINGS } from '../constants';

interface ServiceCardProps {
  service: Service;
  lang: Language;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleBooking = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${UI_STRINGS.whatsapp_message[lang]} ${service.name[lang]}`;
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const description = service.description[lang];
  const isLongDescription = description.length > 90;
  const isCombo = service.category === 'combo';

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 flex flex-col h-full hover:shadow-2xl ${isCombo ? 'border-amber-400 ring-2 ring-amber-100 ring-offset-2' : 'border-stone-100'}`}>
      {/* Fixed Image Height */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <img 
          src={service.imageUrl} 
          alt={service.name[lang]} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        
        {/* Special Badge for Combo */}
        {isCombo && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-lg border border-white/20">
            {lang === 'ta' ? 'மெகா காம்போ' : 'Value Pack'}
          </div>
        )}

        {service.duration && (
          <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
            {service.duration}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="min-h-[3.5rem] mb-2">
          <h3 className={`text-lg font-bold leading-tight ${isCombo ? 'text-amber-800' : 'text-stone-800'}`}>
            {service.name[lang]}
          </h3>
        </div>

        <div className="flex-1 mb-4">
          <p className={`text-stone-500 text-sm leading-relaxed ${!isExpanded && isLongDescription ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          {isLongDescription && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-emerald-700 text-xs font-bold mt-1 hover:underline underline-offset-2"
            >
              {isExpanded ? (lang === 'ta' ? 'சுருக்கமாக' : 'Read Less') : (lang === 'ta' ? 'மேலும் படிக்க' : 'Read More')}
            </button>
          )}
        </div>
        
        <div className="pt-4 border-t border-stone-100 mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className={`text-xl font-black ${isCombo ? 'text-amber-600' : 'text-emerald-800'}`}>
                ₹{service.price}
              </span>
            </div>
            <div className="text-[10px] text-stone-400 font-medium uppercase tracking-tighter">
              {UI_STRINGS.nav_contact[lang]}
            </div>
          </div>

          <button 
            onClick={handleBooking}
            className={`w-full text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-md active:scale-95 ${isCombo ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-700 hover:bg-emerald-800'}`}
          >
            <span className="text-sm">{UI_STRINGS.get_quote[lang]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
