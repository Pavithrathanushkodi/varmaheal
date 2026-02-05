
import { Service, Translation } from './types';

/** 
 * VS CODE EDITING INSTRUCTIONS:
 * -------------------------------------------------------------------------
 * 1. PRICES: Change the number after 'price:'.
 * 2. LOCAL IMAGES: If you have an image file in your project folder, 
 *    change the imageUrl to: imageUrl: "./your-image-name.jpg"
 * 3. DESCRIPTIONS: Edit the text inside 'en' for English or 'ta' for Tamil.
 * -------------------------------------------------------------------------
 */

export const WHATSAPP_NUMBER = "8190942026";
export const INSTAGRAM_URL = "https://www.instagram.com/call____me____yaro?igsh=Zm9mbTk2dHFndDJz";
export const LOCATION_NAME_EN = "Tenkasi, Tamil Nadu";
export const LOCATION_NAME_TA = "தென்காசி, தமிழ்நாடு";
export const TIMING_EN = "Mon - Sun: 9:00 AM - 10:00 PM";
export const TIMING_TA = "திங்கள் - ஞாயிறு: காலை 9:00 - இரவு 10:00";

export const UI_STRINGS: Translation = {
  nav_services: { en: "Our Services", ta: "சேவைகள்" },
  nav_about: { en: "About Me", ta: "என்னை பற்றி" },
  nav_contact: { en: "Contact", ta: "தொடர்பு கொள்ள" },
  hero_title: { 
    en: "Healing Care: Traditional Wellness & Massage", 
    ta: "ஹீலிங் கேர்: பாரம்பரிய நலம் மற்றும் மசாஜ்" 
  },
  hero_subtitle: { 
    en: "Restore your health with our specialized Varma and traditional therapies.", 
    ta: "எமது சிறப்பு வர்ம மற்றும் பாரம்பரிய சிகிச்சைகள் மூலம் உங்கள் ஆரோக்கியத்தை மேம்படுத்துங்கள்." 
  },
  hero_cta: { en: "Book on WhatsApp", ta: "வாட்ஸ்அப்பில் பதிவு செய்க" },
  services_title: { en: "Service Menu", ta: "சிகிச்சை விவரங்கள்" },
  price_prefix: { en: "Price: ₹", ta: "கட்டணம்: ₹" },
  get_quote: { en: "Book Now", ta: "இப்போதே பதிவு செய்க" },
  footer_address: { en: "Healing Care Wellness, Tenkasi", ta: "ஹீலிங் கேர் வெல்னஸ், தென்காசி" },
  footer_rights: { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
  whatsapp_message: { en: "Hi! I want to book: ", ta: "வணக்கம்! நான் இந்த சேவையை பதிவு செய்ய விரும்புகிறேன்: " }
};

export const SERVICES: Service[] = [
  {
    id: "thai-massage",
    name: { en: "Basic Thai Massage Strokes", ta: "பேசிக் தாய் மசாஜ் ஸ்ட்ரோக்ஸ்" },
    description: { en: "Traditional Thai rhythmic stretching and pressure therapy.", ta: "உடல் அழுத்த புள்ளிகளை தூண்டும் பாரம்பரிய தாய் மசாஜ்." },
    price: 999,
   imageUrl: "/images/Thaai-massage.jpeg",
    category: "massage"
  },
  
  {
    id: "oil-massage-base",
    name: { en: "Oil Massage", ta: "எண்ணெய் மசாஜ்" },
   description: {
  en: "A relaxing full-body oil massage that helps reduce stress, improve blood circulation, and relieve body pain. Ideal for overall relaxation and wellness.",
  ta: "முழு உடலுக்கும் செய்யப்படும் எண்ணெய் மசாஜ். இது உடல் வலிகளை குறைத்து, இரத்த ஓட்டத்தை மேம்படுத்தி, மன அழுத்தத்தை தணிக்க உதவுகிறது."
},

    price: 1300,
    imageUrl: "/images/oil.jpg",
    category: "massage"
  },
  {
    id: "varma-thadaval-1",
    name: { en: "Vali Nivarana Varma Thadaval", ta: "வலி நிவாரண வர்ம தடவல்" },
    description: {
  en: "A focused Varma therapy using Murivu Oil to relieve joint pain, muscle stiffness, and chronic body aches. Suitable for long-term pain relief.",
  ta: "முரிவு எண்ணெய் பயன்படுத்தி செய்யப்படும் வர்ம தடவல் சிகிச்சை. மூட்டு வலி, தசை இறுக்கம் மற்றும் நீண்ட நாள் வலிகளை குறைக்க உதவுகிறது."
},

    price: 1600,
    duration: "1.30 Hours",
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
    category: "massage",
    addOns: [{ name: { en: "Head Massage (Mudiyor Koonthal Oil)", ta: "தலை மசாஜ் (முதியோர் கூந்தல் எண்ணெய்)" }, price: 200 }]
  },
  {
    id: "araku-massage",
    name: { en: "Araku Santhanathi Thailam", ta: "அரக்கு சந்தனாதி தைல மசாஜ்" },
    description: {
  en: "A cooling oil massage that reduces body heat, calms nerves, and refreshes the body. Best for people with excess heat and fatigue.",
  ta: "உடல் சூட்டை தணிக்கும் குளிர்ச்சியான எண்ணெய் மசாஜ். நரம்புகளை அமைதிப்படுத்தி உடலுக்கு புத்துணர்ச்சி அளிக்கிறது."
},

    price: 2000,
    duration: "2 Hours",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
    category: "massage",
    addOns: [{ name: { en: "Head Massage (Mudiyor Koonthal Oil)", ta: "தலை மசாஜ் (முதியோர் கூந்தல் எண்ணெய்)" }, price: 200 }]
  },
  {
    id: "normal-oil-thadaval",
    name: { en: "Normal Oil Mullu Udal Thadaval", ta: "சாதாரண எண்ணெய் உடல் மசாஜ்" },
    description: {
  en: "A gentle full-body oil massage for relaxation and daily body care. Helps reduce mild pain and improves flexibility.",
  ta: "சாதாரண எண்ணெய் கொண்டு செய்யப்படும் மென்மையான முழு உடல் மசாஜ். உடல் சோர்வை குறைத்து தளர்வை தருகிறது."
},

    price: 1400,
    duration: "1 Hour",
    imageUrl: "/images/normal oil massage.jpg",
    category: "massage",
    addOns: [{ name: { en: "Head Massage (Mudiyor Koonthal Oil)", ta: "தலை மசாஜ் (முதியோர் கூந்தல் எண்ணெய்)" }, price: 200 }]
  },
  {
    id: "cream-massage-basic",
    name: { en: "Cream Massage (Basic)", ta: "அடிப்படை கிரீம் மசாஜ்" },
    description: { en: "Relaxing cream massage for skin softening.", ta: "தோல் மென்மைக்காக கிரீம் கொண்டு செய்யப்படும் மசாஜ்." },
    price: 1800,
    imageUrl: "/images/cream massage.jpg",
    category: "massage"
  },
  {
    id: "cream-massage-premium",
    name: { en: "Cream Massage (Premium)", ta: "பிரீமியம் கிரீம் மசாஜ்" },
    description: {
  en: "A soothing cream massage that softens the skin, relaxes muscles, and improves skin texture.",
  ta: "தோலை மென்மையாக்கும் கிரீம் மசாஜ். தசைகளை தளர்த்தி தோல் ஆரோக்கியத்தை மேம்படுத்துகிறது."
},

    price: 2500,
    imageUrl: "/images/advance cream massge.jpg",
    category: "massage"
  },
  {
    id: "shirodhara",
    name: { en: "Head Massage Shirodhara", ta: "சிரோதாரா (தலை மசாஜ்)" },
    description: {
  en: "A calming therapy where warm oil is gently poured on the forehead to relax the mind and nervous system.",
  ta: "நெற்றியில் எண்ணெய் ஊற்றி செய்யப்படும் சிரோதாரா சிகிச்சை. மன அழுத்தம், தூக்கமின்மை மற்றும் தலைவலியை குறைக்க உதவுகிறது."
}
,
    price: 888,
    imageUrl: "/images/head-massage.jpg",
    category: "treatment"
  },
  {
    id: "kaal-pisangal",
    name: { en: "Foot Refloxology", ta: "பாத அழுத்த புள்ளி சிகிச்சை" },
    description: { en: "Traditional ligament setting and medicinal bandaging.", ta: "உடல் முழுவதுடன் தொடர்புடைய பாத அழுத்த புள்ளிகளை தூண்டும் சிகிச்சை மசாஜ்." },
    price: 500,
    imageUrl: "/images/foot refloxology.jpg",
    category: "treatment"
  },
  {
    id: "stream-bath",
    name: { en: "Stream Bath", ta: "ஸ்டீம் பாத்" },
    description: { en: "Herbal steam therapy for body detoxification.", ta: "மூலிகை நீராவி மூலம் உடலை சுத்திகரிக்கும் முறை." },
    price: 280,
    imageUrl: "/images/stream-path.jpeg",
    category: "other"
  },
  // {
  //   id: "henna",
  //   name: { en: "Henna Herbal Hair Pack", ta: "மூலிகை மருதாணி பேக்" },
  //   description: { en: "Natural henna pack for hair health.", ta: "கூந்தல் ஆரோக்கியத்திற்கான மருதாணி பேக்." },
  //   price: 250,
  //   imageUrl: "https://images.unsplash.com/photo-1598254183911-37d363e8009c?q=80&w=1000&auto=format&fit=crop",
  //   category: "hair"
  // },
  {
    id: "cupping",
    name: { en: "Cupping Therapy", ta: "கப்பிங் தெரபி" },
    description: { en: "Traditional suction therapy for blood flow.", ta: "இரத்த ஓட்டத்தை தூண்டும் கப்பிங் சிகிச்சை." },
    price: 999,
    imageUrl: "/images/cupping.jpg",
    category: "treatment"
  },
  {
    id: "varma-thokkanam-2500",
    name: { en: "Varma Thokkanam (3500)", ta: "வர்ம தொக்கணம் (3500)" },
    description: { en: "his treatment is done by applying specific pressure and massage techniques on selected Varma points and muscles. The therapist uses controlled movements to correct nerve and muscle alignment and to release blocked energy, helping the body heal naturally.", ta: "இந்த சிகிச்சையில் குறிப்பிட்ட வர்ம புள்ளிகள் மற்றும் தசைகளில் அழுத்தம் மற்றும் மசாஜ் முறைகள் பயன்படுத்தப்படுகின்றன. நரம்பு மற்றும் தசை சீரமைப்பை சரி செய்து, உடலில் தேங்கிய சக்தியை விடுவிக்க இந்த முறை உதவுகிறது." },
    price: 2500,
    imageUrl: "/images/varma thokkanam.png",
    category: "treatment"
  },
  {
    id: "varma-thokkanam-3500",
    name: { en: "Varma Thokkanam (2500)", ta: "வர்ம தொக்கணம் (2500)" },
    description: { en: "Advanced pressure techniques are applied on selected deep Varma points to correct nerve, muscle, and joint imbalances. This method is used for long-term pain relief and improved body function.", ta: "ஆழமான வர்ம புள்ளிகளில் மேம்பட்ட அழுத்த முறைகள் பயன்படுத்தி நரம்பு, தசை மற்றும் மூட்டு சீர்கேடுகளை சரி செய்யும் சிகிச்சை. நீண்டகால வலி நிவாரணம் மற்றும் உடல் செயல்திறன் மேம்பாட்டிற்கு பயன்படுகிறது." },
    price: 3500,
    imageUrl: "/images/varma thokkanam.png",
    category: "treatment"
  },
  {
  id: "kizhi-therapy",
  name: { en: "Kizhi Therapy", ta: "கிழி சிகிச்சை" },
  description: {
    en: "Kizhi therapy is a traditional othadam (herbal fomentation) treatment done using warm herbal bundles. It includes three types: Podi/Thool Kizhi for pain and stiffness, Navara Kizhi for strength and nourishment, and Herbal (Mooligai) Kizhi to reduce inflammation and body pain.",
    ta: "கிழி சிகிச்சை என்பது சூடான மூலிகை பொட்டலங்களால் செய்யப்படும் பாரம்பரிய ஒத்தடம் சிகிச்சையாகும். இதில் மூன்று வகைகள் உள்ளன: பொடி/தூள் கிழி – வலி மற்றும் இறுக்கம் குறைக்க, நவர கிழி – உடல் வலிமை மற்றும் ஊட்டம் அளிக்க, மூலிகை கிழி – அழற்சி மற்றும் உடல் வலியை குறைக்க."
  },
  price: 66,
  imageUrl: "/images/kizhli.jpg",
  category: "treatment"
},

 {
  id: "nethra-tharpanam",
  name: { 
    en: "Nethra Tharpanam", 
    ta: "நேத்ர தர்ப்பணம்" 
  },
  description: {
    en: `Netra Tharpanam is a traditional eye therapy where warm medicated oil or ghee is gently poured into the eyes using a soft othadam (dough ring) around the eyes. 
    This treatment nourishes the eyes, relieves strain, and helps reduce dryness, irritation, and tiredness caused by long screen usage. 
    It relaxes eye muscles and supports better eye comfort and clarity.`,
    ta: `நேத்ர தர்ப்பணம் என்பது கண்களைச் சுற்றி மென்மையான ஒத்தடம் அமைத்து, கண்களில் சூடான நெய் அல்லது மூலிகை எண்ணெய் ஊற்றி செய்யப்படும் பாரம்பரிய கண் சிகிச்சை.
    இது கண் சோர்வு, உலர்ச்சி, எரிச்சல் ஆகியவற்றை குறைத்து கண்களுக்கு ஆழமான ஊட்டம் அளிக்கிறது.
    கண் தசைகளை தளர்த்தி பார்வை நலனை மேம்படுத்த உதவுகிறது.`
  },
  price: 1000,
  imageUrl: "/images/nethra thappanam.png",
  category: "treatment"
},
{
  id: "janu-basti",
  name: { 
    en: "Janu Basti", 
    ta: "ஜாணு பஸ்தி" 
  },
  description: { 
    en: "Relieve knee pain naturally with Janu Basti, an Ayurvedic treatment for osteoarthritis. Discover benefits, procedure, and expert tips for healthy knees.", 
    ta: "ஜாணு பஸ்தியில் மூட்டு வலி இயற்கையாகக் குறைக்கலாம். ஒஸ்டியோ ஆர்த்ரைட்டிஸ் (Osteoarthritis) க்கு ஆயுர்வேத சிகிச்சை மூலம் ஆரோக்கியமான மூட்டுக்களுக்கான பயன்கள், சிகிச்சை முறை மற்றும் நிபுணர்களின் குறிப்புகளை கண்டறியுங்கள்."
  },
  price: 500,
  imageUrl: "public/images/janu-basti-treatment.png",
  category: "treatment"
},
{
  id: "kati-basti",
  name: { 
    en: "kati Basti", 
    ta: "கடி பஸ்தி" 
  },
  description: { 
    en: "Kati Basti is an Ayurvedic therapy for the lower back. Warm herbal oil is poured and retained on the lower back to relieve pain and stiffness.", 
    ta: "கடி பஸ்தி என்பது கீழ்புற முதுகுக்கான ஆயுர்வேத சிகிச்சை ஆகும். சூடான மூலிகை எண்ணெயை கீழ்புறத்தில் வைத்து விட்டு, வலி மற்றும் இறுக்கத்தை குறைக்கும்."
  },
  price: 500,
  imageUrl: "public/images/kati basti.jpg",
  category: "treatment"
},

  {
    id: "dandruff-treatment",
    name: { en: "Dandruff Treatment", ta: "பொடுகு சிகிச்சை" },
    description: { en: "Herbal powder–based scalp cleansing treatment to remove dandruff and refresh the hair.", ta: "மூலிகை பொடி பயன்படுத்தி தலைச்சருமத்தை சுத்தம் செய்யும் பொடுகு சிகிச்சை." },
    price: 250,
    imageUrl: "/images/dandruff.png",
    category: "hair"
  },
  {
  id: "hair-care",
  name: { 
    en: "Hair Care Treatment", 
    ta: "கூந்தல் பராமரிப்பு சிகிச்சை" 
  },
  description: {
    en: `This hair care treatment is done using natural herbal powders and oils to clean and nourish the scalp. 
    It helps control hair fall, strengthen hair roots, and support healthy hair growth naturally.`,
    ta: `இந்த கூந்தல் பராமரிப்பு சிகிச்சை இயற்கை மூலிகை பொடிகள் மற்றும் எண்ணெய்கள் பயன்படுத்தி செய்யப்படுகிறது.
    இது முடி உதிர்வை கட்டுப்படுத்தி, முடி வேர்களை வலுப்படுத்தி, இயற்கையாக முடி வளர்ச்சியை மேம்படுத்த உதவுகிறது.`
  },
  price: 400,
  imageUrl: "/images/haircare.png",
  category: "hair"
},
{
  id: "facial",
  name: { 
    en: "Facial", 
    ta: "முக பராமரிப்பு சிகிச்சை" 
  },
  description: {
    en: `This facial treatment is done using natural herbal powders and creams to deeply clean and nourish the skin. 
    It helps remove dirt, tan, and dead skin, improves skin glow, and keeps the face fresh, soft, and healthy.`,
    ta: `இந்த முக பராமரிப்பு சிகிச்சை இயற்கை மூலிகை பொடிகள் மற்றும் கிரீம்கள் பயன்படுத்தி செய்யப்படுகிறது.
    இது முகத்தில் உள்ள அழுக்கு, கருமை மற்றும் இறந்த தோல் செல்களை நீக்கி, முகத்திற்கு பளபளப்பு, மென்மை மற்றும் புத்துணர்ச்சி அளிக்கிறது.`
  },
  price: 500,
  imageUrl: "/images/facial.png",
  category: "treatment"
},

{
  id: "combo-2800",
  name: {
    en: "Relaxation Combo",
    ta: "ரிலாக்சேஷன் காம்போ"
  },
  description: {
    en: "Full Body Oil Massage + Shirodhara + Foot Reflexology.",
    ta: "முழு உடல் எண்ணெய் மசாஜ் + சிரோதாரா + பாத ரிஃப்ளெக்சாலஜி."
  },
  price: 2800,
  imageUrl: "/images/combo 1.png",
  category: "combo",
},
{
  id: "combo-3800",
  name: {
    en: "Advanced Healing Combo",
    ta: "மேம்பட்ட ஹீலிங் காம்போ"
  },
  description: {
    en: "Full Body Oil Massage, Shirodhara, Foot Reflexology, Thai Massage, Chiropractic & Nethra Tharpanam.",
    ta: "முழு உடல் மசாஜ், சிரோதாரா, பாத ரிஃப்ளெக்சாலஜி, தாய் மசாஜ், கைரோபிராக்டிக் & நேத்ர தர்ப்பணம்."
  },
  price: 3800,
  imageUrl: "/images/combo 2.png",
  category: "combo",
  
}


];
