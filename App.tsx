
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { SERVICES, UI_STRINGS, WHATSAPP_NUMBER, INSTAGRAM_URL, LOCATION_NAME_EN, LOCATION_NAME_TA, TIMING_EN, TIMING_TA } from './constants';
import { LanguageToggle } from './components/LanguageToggle';
import { ServiceCard } from './components/ServiceCard';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ta');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories = [
  { id: 'all', en: 'All Services', ta: 'அனைத்து சேவைகள்' },
  { id: 'massage', en: 'Massage', ta: 'மசாஜ்' },
  { id: 'hair', en: 'Hair Care', ta: 'கூந்தல் பராமரிப்பு' },
  { id: 'facial', en: 'Facial', ta: 'முகல் பராமரிப்பு' },
  { id: 'treatment', en: 'Treatments', ta: 'சிகிச்சைகள்' },
  { id: 'combo', en: 'Combo Services', ta: 'காம்போ சேவைகள்' } // ✅ NEW
];

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-700 p-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className={`text-xl font-black tracking-tighter text-stone-800`}>
              HEALING CARE
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">{UI_STRINGS.nav_services[lang]}</a>
            <a href="#about" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">{UI_STRINGS.nav_about[lang]}</a>
            <LanguageToggle currentLang={lang} setLang={setLang} />
          </div>

          <div className="md:hidden flex items-center gap-4">
             <LanguageToggle currentLang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden bg-stone-100">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight mb-6">
              {UI_STRINGS.hero_title[lang]}
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {UI_STRINGS.hero_subtitle[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                target="_blank"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
                {UI_STRINGS.hero_cta[lang]}
              </a>
              <a 
                href="#services"
                className="bg-white border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-emerald-700 hover:text-emerald-700 transition-all text-center"
              >
                {UI_STRINGS.nav_services[lang]}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover"
                alt="Natural Spa Setting"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">{UI_STRINGS.services_title[lang]}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">{lang === 'ta' ? 'உங்களுக்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட சிகிச்சை முறைகளை தேர்வு செய்யுங்கள்' : 'Simple and effective treatments for your health and comfort.'}</p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-emerald-700 text-white shadow-lg' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat[lang]}
              </button>
            ))}
          </div>

          {/* Service Grid - items-stretch ensures all cards in a row have equal height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-emerald-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">{UI_STRINGS.nav_about[lang]}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4 mb-6">
              {lang === 'ta' ? 'ஏன் ஹீலிங் கேர் தேர்வு செய்ய வேண்டும்?' : 'Personalized Healing for You'}
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl h-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{lang === 'ta' ? 'இயற்கை மூலிகை எண்ணெய்கள்' : 'Natural Herbal Oils'}</h4>
                  <p className="text-white/60 text-sm">{lang === 'ta' ? 'நான் உயர்தர பாரம்பரிய எண்ணெய்களை மட்டுமே பயன்படுத்துகிறேன்.' : 'I use only the best quality natural oils for every session.'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-8 rounded-3xl text-center border border-white/5">
              <span className="block text-4xl font-black text-emerald-400 mb-2">3+</span>
              <span className="text-xs uppercase tracking-widest text-white/50">{lang === 'ta' ? 'ஆண்டு அனுபவம்' : 'Years Experience'}</span>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl text-center border border-white/5">
              <span className="block text-4xl font-black text-emerald-400 mb-2">20+</span>
              <span className="text-xs uppercase tracking-widest text-white/50">{lang === 'ta' ? 'சிகிச்சை முறைகள்' : 'Healing Services'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 pt-16 pb-8 px-4 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-700 p-2 rounded-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-xl font-black tracking-tighter text-stone-800">
                  HEALING CARE
                </span>
              </div>
              <p className="text-stone-500 text-sm italic mb-6">
                {lang === 'ta' ? LOCATION_NAME_TA : LOCATION_NAME_EN}
              </p>
              <div className="flex gap-4">
                <a href={`https://wa.me/91${WHATSAPP_NUMBER}`} target="_blank" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-stone-800 font-bold mb-6">{UI_STRINGS.nav_services[lang]}</h4>
              <ul className="space-y-3 text-stone-500 text-sm">
                <li><a href="#services" className="hover:text-emerald-700 transition-colors">Varma Thokkanam</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition-colors">Thai Massage</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition-colors">Shirodhara</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-stone-800 font-bold mb-6">{UI_STRINGS.nav_contact[lang]}</h4>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z"/></svg>
                  <span>+91 {WHATSAPP_NUMBER}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700 mt-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span>{lang === 'ta' ? TIMING_TA : TIMING_EN}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-xs">
            <p>© {new Date().getFullYear()} {lang === 'ta' ? UI_STRINGS.footer_address.ta : UI_STRINGS.footer_address.en}. {UI_STRINGS.footer_rights[lang]}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <a 
        href={`https://wa.me/91${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-stone-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-stone-100">
          {lang === 'ta' ? 'பதிவு செய்ய இங்கே கிளிக் செய்க' : 'Book an Appointment'}
        </div>
      </a>
    </div>
  );
};

export default App;
