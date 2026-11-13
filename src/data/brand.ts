export type SupportedLocale = 'en' | 'ta' | 'si';

export interface BrandCopy {
  name: string;
  tagline: string;
  address: string;
  plusCodeAddress: string;
  phoneDisplay: string;
  phoneIntl: string;
  telHref: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  mapsSearchUrl: string;
  mapsEmbedUrl: string;
}

export const BRAND_INFO: BrandCopy = {
  name: 'Mubarak Textiles',
  tagline: 'Style for Every Story. Quality for Every Home.',
  address: 'Main Street, Sainthamaruthu 32280, Sri Lanka.',
  plusCodeAddress: 'Main Street, Sainthamaruthu 32280, Sri Lanka.',
  phoneDisplay: '0672 229 194',
  phoneIntl: '+94672229194',
  telHref: 'tel:+94672229194',
  whatsappNumber: '94672229194',
  defaultWhatsAppMessage:
    'Hello Mubarak Textiles, I would like to enquire about your collections.',
mapsSearchUrl:
  'https://www.google.com/maps/search/?api=1&query=7.3921368%2C81.8353578',

mapsEmbedUrl:
  'https://www.google.com/maps?q=7.3921368,81.8353578&z=17&output=embed',
};

export interface LocaleDictionary {
  locale: SupportedLocale;
  label: string;
  heroTitle: string;
  heroSubtitle: string;
  exploreCollections: string;
  discoverStory: string;
  enquireWhatsApp: string;
  callStore: string;
  getDirections: string;
}

export const LOCALE_STRINGS: Record<SupportedLocale, LocaleDictionary> = {
  en: {
    locale: 'en',
    label: 'English',
    heroTitle: 'Beyond Fashion. A World of Elegance.',
    heroSubtitle:
      'Explore thoughtfully selected fashion and lifestyle collections for every generation, every celebration, and every home.',
    exploreCollections: 'Explore Collections',
    discoverStory: 'Discover Our Story',
    enquireWhatsApp: 'Enquire on WhatsApp',
    callStore: 'Call Store',
    getDirections: 'Get Directions',
  },
  ta: {
    locale: 'ta',
    label: 'தமிழ் (Coming Soon)',
    heroTitle: 'Beyond Fashion. A World of Elegance.',
    heroSubtitle:
      'Explore thoughtfully selected fashion and lifestyle collections for every generation, every celebration, and every home.',
    exploreCollections: 'Explore Collections',
    discoverStory: 'Discover Our Story',
    enquireWhatsApp: 'Enquire on WhatsApp',
    callStore: 'Call Store',
    getDirections: 'Get Directions',
  },
  si: {
    locale: 'si',
    label: 'සිංහල (Coming Soon)',
    heroTitle: 'Beyond Fashion. A World of Elegance.',
    heroSubtitle:
      'Explore thoughtfully selected fashion and lifestyle collections for every generation, every celebration, and every home.',
    exploreCollections: 'Explore Collections',
    discoverStory: 'Discover Our Story',
    enquireWhatsApp: 'Enquire on WhatsApp',
    callStore: 'Call Store',
    getDirections: 'Get Directions',
  },
};

export const SOCIAL_CHANNELS = [
  {
    id: 'facebook',
    name: 'Facebook',
    statusLabel: 'Channel details available in-store',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    statusLabel: 'Channel details available in-store',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    statusLabel: 'Channel details available in-store',
  },
] as const;
