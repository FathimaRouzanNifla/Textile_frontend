export type CategorySlug =
  | 'women'
  | 'men'
  | 'kids'
  | 'abaya'
  | 'bridal'
  | 'traditional-wear'
  | 'home-textiles';

export interface SubcategoryLink {
  label: string;
  slug: string;
  summary: string;
}

export interface ShowcasePreviewItem {
  id: string;
  title: string;
  categorySlug: CategorySlug;
  categoryLabel: string;
  subcategory: string;
  editorialNote: string;
  imageKey:
    | 'women'
    | 'men'
    | 'kids'
    | 'abaya'
    | 'bridal'
    | 'traditional'
    | 'homeTextiles'
    | 'atelier'
    | 'fabricCraft';
  isDemonstrationSample: true;
  isNewArrival?: boolean;
}

export interface CategoryMeta {
  indexCode: string;
  slug: CategorySlug;
  route: `/${CategorySlug}`;
  navLabel: string;
  editorialTitle: string;
  heroHeadline: string;
  shortDescription: string;
  creativeDirection: string;
  featuredTitle: string;
  featuredNote: string;
  imageKey:
    | 'women'
    | 'men'
    | 'kids'
    | 'abaya'
    | 'bridal'
    | 'traditional'
    | 'homeTextiles';
  secondaryImageKey: 'atelier' | 'fabricCraft' | 'women' | 'traditional' | 'homeTextiles';
  subcategories: SubcategoryLink[];
}

export const CATEGORIES: CategoryMeta[] = [
  {
    indexCode: '01',
    slug: 'women',
    route: '/women',
    navLabel: 'Women',
    editorialTitle: "Women's Collections",
    heroHeadline: 'Contemporary Feminine Elegance',
    shortDescription:
      'Graceful silhouettes spanning effortless everyday kurtis and tops to silk sarees, dresses, and evening occasion wear.',
    creativeDirection: 'Fluid drapes, breathable natural weaves, and refined seasonal palettes.',
    featuredTitle: 'Silk & Everyday Grace',
    featuredNote:
      'Discover curated dresses, sarees, kurtis, and occasion ensembles selected for modern women.',
    imageKey: 'women',
    secondaryImageKey: 'fabricCraft',
    subcategories: [
      {
        label: 'Dresses',
        slug: 'dresses',
        summary: 'Tailored day dresses and flowing evening silhouettes.',
      },
      {
        label: 'Sarees',
        slug: 'sarees',
        summary: 'Silk, linen, and delicately bordered festive sarees.',
      },
      {
        label: 'Kurtis',
        slug: 'kurtis',
        summary: 'Breathable embroidered and everyday cotton kurtis.',
      },
      {
        label: 'Tops',
        slug: 'tops',
        summary: 'Refined blouses and versatile modern separates.',
      },
      {
        label: 'Casual Wear',
        slug: 'casual-wear',
        summary: 'Comfortable daily ensembles with effortless polish.',
      },
      {
        label: 'Occasion Wear',
        slug: 'occasion-wear',
        summary: 'Statement styles crafted for family gatherings and celebrations.',
      },
      {
        label: 'Traditional Wear',
        slug: 'traditional-wear',
        summary: 'Heritage weaves honoring timeless Sri Lankan artistry.',
      },
    ],
  },
  {
    indexCode: '02',
    slug: 'men',
    route: '/men',
    navLabel: 'Men',
    editorialTitle: "Men's Collections",
    heroHeadline: 'Refined Modern Menswear',
    shortDescription:
      'Crisp tailored shirts, structured trousers, casual essentials, formal suiting, and distinguished traditional menswear.',
    creativeDirection: 'Clean architectural tailoring, breathable linens, and composed neutral tones.',
    featuredTitle: 'Tailored Form & Ease',
    featuredNote:
      'Versatile shirting, smart-casual layers, and traditional wear curated for every occasion.',
    imageKey: 'men',
    secondaryImageKey: 'atelier',
    subcategories: [
      {
        label: 'Shirts',
        slug: 'shirts',
        summary: 'Linen, poplin, and textured cotton shirting.',
      },
      {
        label: 'Trousers',
        slug: 'trousers',
        summary: 'Tailored formal slacks and relaxed chinos.',
      },
      {
        label: 'T-Shirts',
        slug: 't-shirts',
        summary: 'Combed cotton polos and clean everyday tees.',
      },
      {
        label: 'Casual Wear',
        slug: 'casual-wear',
        summary: 'Effortless weekend separates suited to warm coastal climates.',
      },
      {
        label: 'Formal Wear',
        slug: 'formal-wear',
        summary: 'Sharp suiting and refined evening attire.',
      },
      {
        label: 'Traditional Wear',
        slug: 'traditional-wear',
        summary: 'Vertis, jubbahs, national shirts, and ceremonial kurtas.',
      },
    ],
  },
  {
    indexCode: '03',
    slug: 'kids',
    route: '/kids',
    navLabel: 'Kids',
    editorialTitle: "Kids' Collections",
    heroHeadline: 'Warm, Joyful Dressing for Childhood',
    shortDescription:
      'Gentle cotton baby essentials, lively everyday outfits for girls and boys, and festive traditional wear for little ones.',
    creativeDirection: 'Soft breathable fabrics, cheerful movement, and timeless family-occasion charm.',
    featuredTitle: 'Made for Bright Moments',
    featuredNote:
      'Soft-touch baby garments, playful daily styles, and coordinated festive attire for children.',
    imageKey: 'kids',
    secondaryImageKey: 'fabricCraft',
    subcategories: [
      {
        label: "Girls' Clothing",
        slug: 'girls-clothing',
        summary: 'Frocks, pleated dresses, and comfortable daily sets.',
      },
      {
        label: "Boys' Clothing",
        slug: 'boys-clothing',
        summary: 'Breathable shirts, shorts, and crisp smart-casual outfits.',
      },
      {
        label: 'Baby Clothing',
        slug: 'baby-clothing',
        summary: 'Ultra-soft cotton essentials for newborns and toddlers.',
      },
      {
        label: "Traditional Kids' Wear",
        slug: 'traditional-kids-wear',
        summary: 'Miniature kurtas, pavadai sattai, and celebration sets.',
      },
      {
        label: 'Occasion Wear',
        slug: 'occasion-wear',
        summary: 'Polished festive outfits for weddings and milestones.',
      },
    ],
  },
  {
    indexCode: '04',
    slug: 'abaya',
    route: '/abaya',
    navLabel: 'Abaya',
    editorialTitle: 'Abaya & Modest Wear',
    heroHeadline: 'Modest Luxury & Serene Minimalism',
    shortDescription:
      'Effortlessly draped everyday and occasion abayas, modest dresses, and weightless hijabs tailored in calm, flowing fabrics.',
    creativeDirection: 'Poised volume, subtle trim details, and whisper-light breathable drape.',
    featuredTitle: 'The Modest Edit',
    featuredNote:
      'Discover everyday crepe abayas, embellished occasion pieces, modest dresses, and coordinated hijabs.',
    imageKey: 'abaya',
    secondaryImageKey: 'atelier',
    subcategories: [
      {
        label: 'Premium Abayas',
        slug: 'premium-abayas',
        summary: 'Signature cuts in fine nidha, silk-crepe, and satin.',
      },
      {
        label: 'Everyday Abayas',
        slug: 'everyday-abayas',
        summary: 'Breathable, travel-friendly daily silhouettes.',
      },
      {
        label: 'Occasion Abayas',
        slug: 'occasion-abayas',
        summary: 'Delicate hand-finished cuffs and flowing celebration layers.',
      },
      {
        label: 'Modest Dresses',
        slug: 'modest-dresses',
        summary: 'Full-length pleated and belted modest maxi dresses.',
      },
      {
        label: 'Hijabs',
        slug: 'hijabs',
        summary: 'Chiffon, modal, jersey, and textured silk-blend wraps.',
      },
    ],
  },
  {
    indexCode: '05',
    slug: 'bridal',
    route: '/bridal',
    navLabel: 'Bridal',
    editorialTitle: 'Bridal Edit',
    heroHeadline: 'Cinematic Couture for Life’s Milestone',
    shortDescription:
      'Romantic bridal wear, engagement silhouettes, grand reception ensembles, and curated bridal accessories crafted for unforgettable moments.',
    creativeDirection: 'Deep burgundy velvet, antique gold zari motifs, and luminous ivory drape.',
    featuredTitle: 'Wedding & Reception Couture',
    featuredNote:
      'Explore engagement, ceremony, and reception attire with personal styling assistance in-store.',
    imageKey: 'bridal',
    secondaryImageKey: 'women',
    subcategories: [
      {
        label: 'Bridal Wear',
        slug: 'bridal-wear',
        summary: 'Statement bridal lehengas, gowns, and heritage bridal sarees.',
      },
      {
        label: 'Wedding Collections',
        slug: 'wedding-collections',
        summary: 'Coordinated ceremonial ensembles for brides and family.',
      },
      {
        label: 'Engagement Wear',
        slug: 'engagement-wear',
        summary: 'Pastel rose, champagne, and ivory embroidered silhouettes.',
      },
      {
        label: 'Reception Wear',
        slug: 'reception-wear',
        summary: 'Evening-ready couture crafted with subtle shimmer.',
      },
      {
        label: 'Bridal Accessories',
        slug: 'bridal-accessories',
        summary: 'Veils, embroidered dupattas, clutches, and finishing accents.',
      },
    ],
  },
  {
    indexCode: '06',
    slug: 'traditional-wear',
    route: '/traditional-wear',
    navLabel: 'Traditional Wear',
    editorialTitle: 'Cultural & Traditional Wear',
    heroHeadline: 'Celebrating Sri Lanka’s Shared Heritage',
    shortDescription:
      'Inclusive ceremonial and festive attire honoring Tamil, Sinhala, Muslim, and Christian traditions across every generation.',
    creativeDirection: 'Respectful craftsmanship across vibrant silks, handloom cottons, and lace.',
    featuredTitle: 'Every Community, Every Celebration',
    featuredNote:
      'Thoughtfully curated attire for Thaipongal, Avurudu, Eid, Christmas, and sacred family ceremonies.',
    imageKey: 'traditional',
    secondaryImageKey: 'fabricCraft',
    subcategories: [
      {
        label: 'Tamil Traditional Wear',
        slug: 'tamil-traditional-wear',
        summary: 'Silk sarees, pavadai sets, and gold-bordered cotton vertis.',
      },
      {
        label: 'Sinhala Traditional Wear',
        slug: 'sinhala-traditional-wear',
        summary: 'Kandyan osariya styles, national shirts, and Avurudu weaves.',
      },
      {
        label: 'Muslim Traditional Wear',
        slug: 'muslim-traditional-wear',
        summary: 'Embroidered kurtas, jubbahs, festive abayas, and shawls.',
      },
      {
        label: 'Christian Occasion Wear',
        slug: 'christian-occasion-wear',
        summary: 'Ivory lace dresses, tailored suiting, and church celebration attire.',
      },
      {
        label: 'Cultural Celebration Wear',
        slug: 'cultural-celebration-wear',
        summary: 'Coordinated festive garments for seasonal gatherings.',
      },
    ],
  },
  {
    indexCode: '07',
    slug: 'home-textiles',
    route: '/home-textiles',
    navLabel: 'Home Textiles',
    editorialTitle: 'Home Textiles & Living',
    heroHeadline: 'Quiet Comfort for Every Room',
    shortDescription:
      'Crisp cotton bedsheets, matching pillow covers, soft blankets, flowing curtains, absorbent towels, and thoughtful household essentials.',
    creativeDirection: 'Sunlit interiors, breathable natural weaves, and restorative calm.',
    featuredTitle: 'Sanctuary & Living Essentials',
    featuredNote:
      'Bring lasting softness and composed elegance to bedrooms and living spaces across Sri Lanka.',
    imageKey: 'homeTextiles',
    secondaryImageKey: 'fabricCraft',
    subcategories: [
      {
        label: 'Bedsheets',
        slug: 'bedsheets',
        summary: 'Breathable cotton and percale fitted and flat sheet sets.',
      },
      {
        label: 'Pillow Covers',
        slug: 'pillow-covers',
        summary: 'Standard and embroidered cushion and pillow shams.',
      },
      {
        label: 'Blankets',
        slug: 'blankets',
        summary: 'Lightweight woven throws and plush all-season blankets.',
      },
      {
        label: 'Curtains',
        slug: 'curtains',
        summary: 'Sheer daylight panels and room-darkening textured drapes.',
      },
      {
        label: 'Towels',
        slug: 'towels',
        summary: 'Soft combed-cotton bath sheets, hand towels, and guest sets.',
      },
      {
        label: 'Home Essentials',
        slug: 'home-essentials',
        summary: 'Table linens, prayer mats, and everyday household textiles.',
      },
    ],
  },
];

// Clearly marked editorial demonstration lookbook previews — no fabricated prices, stock, or SKUs.
export const SHOWCASE_PREVIEWS: ShowcasePreviewItem[] = [
  {
    id: 'preview-women-01',
    title: 'Champagne & Rose Draped Saree Showcase',
    categorySlug: 'women',
    categoryLabel: 'Women',
    subcategory: 'Sarees',
    editorialNote:
      'Sample lookbook preview representing our women’s silk and occasion saree selection. Visit Main Street or message us on WhatsApp to view current in-store arrivals.',
    imageKey: 'women',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-women-02',
    title: 'Artisanal Cotton & Silk Kurti Styling',
    categorySlug: 'women',
    categoryLabel: 'Women',
    subcategory: 'Kurtis',
    editorialNote:
      'Sample lookbook preview illustrating breathable silhouettes for daily elegance and relaxed gatherings. Enquire for current seasonal designs in-store.',
    imageKey: 'fabricCraft',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-women-03',
    title: 'Evening & Occasion Dress Selection',
    categorySlug: 'women',
    categoryLabel: 'Women',
    subcategory: 'Dresses',
    editorialNote:
      'Sample lookbook preview highlighting our curated women’s dresses and occasion separates available for personal inspection at Mubarak Textiles.',
    imageKey: 'atelier',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-men-01',
    title: 'Ivory Linen & Tailored Trouser Edit',
    categorySlug: 'men',
    categoryLabel: 'Men',
    subcategory: 'Shirts',
    editorialNote:
      'Sample lookbook preview showcasing crisp shirting and composed trousers suited for coastal warmth and formal engagements.',
    imageKey: 'men',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-men-02',
    title: 'Ceremonial & Formal Menswear Rack',
    categorySlug: 'men',
    categoryLabel: 'Men',
    subcategory: 'Formal Wear',
    editorialNote:
      'Sample lookbook preview representing tailored formal and smart-casual options curated in our menswear department.',
    imageKey: 'atelier',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-kids-01',
    title: 'Festive & Courtyard Cotton Ensemble',
    categorySlug: 'kids',
    categoryLabel: 'Kids',
    subcategory: 'Occasion Wear',
    editorialNote:
      'Sample lookbook preview showcasing soft breathable outfits designed for comfort during family milestones and celebrations.',
    imageKey: 'kids',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-kids-02',
    title: 'Gentle Natural Weaves for Little Ones',
    categorySlug: 'kids',
    categoryLabel: 'Kids',
    subcategory: 'Baby Clothing',
    editorialNote:
      'Sample lookbook preview highlighting soft-finish fabrics selected with care for newborns, toddlers, and growing children.',
    imageKey: 'fabricCraft',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-abaya-01',
    title: 'Espresso & Champagne Silk-Crepe Abaya',
    categorySlug: 'abaya',
    categoryLabel: 'Abaya',
    subcategory: 'Premium Abayas',
    editorialNote:
      'Sample lookbook preview representing our modest luxury range pairing fluid drape with tonal chiffon hijabs.',
    imageKey: 'abaya',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-abaya-02',
    title: 'Modest Everyday Drape & Hijab Palette',
    categorySlug: 'abaya',
    categoryLabel: 'Abaya',
    subcategory: 'Hijabs',
    editorialNote:
      'Sample lookbook preview featuring calm neutral tones and breathable weaves for effortless daily modesty.',
    imageKey: 'fabricCraft',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-bridal-01',
    title: 'Deep Burgundy & Antique Gold Bridal Couture',
    categorySlug: 'bridal',
    categoryLabel: 'Bridal',
    subcategory: 'Bridal Wear',
    editorialNote:
      'Sample lookbook preview celebrating intricate embroidery and rich bridal textiles. Contact our store team for private bridal consultations.',
    imageKey: 'bridal',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-bridal-02',
    title: 'Engagement & Reception Ivory Edit',
    categorySlug: 'bridal',
    categoryLabel: 'Bridal',
    subcategory: 'Engagement Wear',
    editorialNote:
      'Sample lookbook preview showcasing refined silk silhouettes suited for engagements, homecomings, and evening receptions.',
    imageKey: 'women',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-traditional-01',
    title: 'Shared Sri Lankan Heritage Textile Table',
    categorySlug: 'traditional-wear',
    categoryLabel: 'Traditional Wear',
    subcategory: 'Cultural Celebration Wear',
    editorialNote:
      'Sample lookbook preview honoring Tamil, Sinhala, Muslim, and Christian festive dress traditions across our community.',
    imageKey: 'traditional',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-traditional-02',
    title: 'Fine Bordered Silks & Woven Cotton',
    categorySlug: 'traditional-wear',
    categoryLabel: 'Traditional Wear',
    subcategory: 'Tamil Traditional Wear',
    editorialNote:
      'Sample lookbook preview highlighting timeless festive weaves and ceremonial borders available to explore in Sainthamaruthu.',
    imageKey: 'fabricCraft',
    isDemonstrationSample: true,
  },
  {
    id: 'preview-home-01',
    title: 'Sunlit Ivory Cotton Bedding & Linen Drape',
    categorySlug: 'home-textiles',
    categoryLabel: 'Home Textiles',
    subcategory: 'Bedsheets',
    editorialNote:
      'Sample lookbook preview illustrating crisp bedsheets, layered pillow covers, blankets, and sheer curtains for peaceful interiors.',
    imageKey: 'homeTextiles',
    isDemonstrationSample: true,
    isNewArrival: true,
  },
  {
    id: 'preview-home-02',
    title: 'Tactile Natural Household Textiles',
    categorySlug: 'home-textiles',
    categoryLabel: 'Home Textiles',
    subcategory: 'Home Essentials',
    editorialNote:
      'Sample lookbook preview showcasing soft cotton weaves, embroidered borders, and everyday linens for the home.',
    imageKey: 'fabricCraft',
    isDemonstrationSample: true,
  },
];
