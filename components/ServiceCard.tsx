
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
  // Determine if description is long enough to need a toggle
  const isLongDescription = description.length > 90;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
      {/* Fixed Image Height */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <img 
          src={service.imageUrl} 
          alt={service.name[lang]} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {service.duration && (
          <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
            {service.duration}
          </div>
        )}
        {service.originalPrice && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-[9px] uppercase font-black px-2 py-1 rounded-md shadow-sm">
            {lang === 'ta' ? 'சிறப்பு சலுகை' : 'Special Offer'}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        {/* Fixed height for title area to keep everything aligned */}
        <div className="min-h-[3.5rem] mb-2">
          <h3 className="text-lg font-bold text-stone-800 leading-tight">
            {service.name[lang]}
          </h3>
        </div>

        {/* Description area with conditional expansion */}
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
        
        {/* Pricing and Add-ons Section */}
        <div className="pt-4 border-t border-stone-100 mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              {service.originalPrice && (
                <span className="text-stone-400 text-xs line-through">
                   ₹{service.originalPrice}
                </span>
              )}
              <span className="text-lg font-black text-emerald-800">
                ₹{service.price}
              </span>
            </div>
            <div className="text-[10px] text-stone-400 font-medium uppercase tracking-tighter">
              {UI_STRINGS.nav_contact[lang]}
            </div>
          </div>

          {service.addOns && (
            <div className="mb-4 bg-stone-50 p-2 rounded-lg border border-stone-100">
              {service.addOns.map((addon, idx) => (
                <div key={idx} className="flex justify-between text-[11px] text-stone-600">
                  <span className="truncate pr-2">+ {addon.name[lang]}</span>
                  <span className="font-bold flex-shrink-0">₹{addon.price}</span>
                </div>
              ))}
            </div>
          )}

          <button 
            onClick={handleBooking}
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-md active:scale-95"
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
