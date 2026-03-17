export interface App {
  id: string;
  name: string;
  developer: string;
  icon: string;
  rating: number;
  downloads: string;
  price: string;
  category: string;
  description: string;
  isFree: boolean;
  categorySlug: string;
}

export const apps: App[] = [
  {
    id: "1",
    name: "واتساب",
    developer: "Meta Platforms",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=whatsapp&backgroundColor=25D366",
    rating: 4.8,
    downloads: "5+ مليار",
    price: "مجاني",
    category: "تواصل",
    description: "تطبيق المراسلة الأكثر شعبية في العالم",
    isFree: true,
    categorySlug: "communication",
  },
  {
    id: "2",
    name: "تيك توك",
    developer: "ByteDance",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=tiktok&backgroundColor=000000",
    rating: 4.5,
    downloads: "1+ مليار",
    price: "مجاني",
    category: "ترفيه",
    description: "منصة الفيديوهات القصيرة الأكثر رواجاً",
    isFree: true,
    categorySlug: "entertainment",
  },
  {
    id: "3",
    name: "كلاش رويال",
    developer: "Supercell",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=clashroyale&backgroundColor=1E3A5F",
    rating: 4.6,
    downloads: "500+ مليون",
    price: "مجاني",
    category: "ألعاب",
    description: "لعبة استراتيجية متعددة اللاعبين عبر الإنترنت",
    isFree: true,
    categorySlug: "games",
  },
  {
    id: "4",
    name: "سبوتيفاي",
    developer: "Spotify AB",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=spotify&backgroundColor=1DB954",
    rating: 4.7,
    downloads: "1+ مليار",
    price: "مجاني",
    category: "موسيقى",
    description: "استمع إلى ملايين الأغاني والبودكاست",
    isFree: true,
    categorySlug: "music",
  },
  {
    id: "5",
    name: "دوولينجو",
    developer: "Duolingo Inc.",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=duolingo&backgroundColor=58CC02",
    rating: 4.8,
    downloads: "500+ مليون",
    price: "مجاني",
    category: "تعليم",
    description: "تعلم اللغات بطريقة ممتعة وتفاعلية",
    isFree: true,
    categorySlug: "education",
  },
  {
    id: "6",
    name: "نوتيباد",
    developer: "Digital Notes Co.",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=notepad&backgroundColor=FFD700",
    rating: 4.3,
    downloads: "10+ مليون",
    price: "$2.99",
    category: "إنتاجية",
    description: "تطبيق ملاحظات متقدم مع ميزات متعددة",
    isFree: false,
    categorySlug: "productivity",
  },
  {
    id: "7",
    name: "ببجي موبايل",
    developer: "KRAFTON Inc.",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=pubg&backgroundColor=F2A900",
    rating: 4.4,
    downloads: "1+ مليار",
    price: "مجاني",
    category: "ألعاب",
    description: "لعبة الباتل رويال الأكثر شهرة",
    isFree: true,
    categorySlug: "games",
  },
  {
    id: "8",
    name: "مايكروسوفت وورد",
    developer: "Microsoft Corporation",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=word&backgroundColor=2B579A",
    rating: 4.5,
    downloads: "500+ مليون",
    price: "مجاني",
    category: "أعمال",
    description: "معالج النصوص الأشهر في العالم",
    isFree: true,
    categorySlug: "business",
  },
  {
    id: "9",
    name: "خرائط جوجل",
    developer: "Google LLC",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=maps&backgroundColor=34A853",
    rating: 4.6,
    downloads: "5+ مليار",
    price: "مجاني",
    category: "تنقل",
    description: "الملاحظ والخرائط الأكثر دقة",
    isFree: true,
    categorySlug: "navigation",
  },
  {
    id: "10",
    name: "كود ماستر",
    developer: "Code Academy",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=codemaster&backgroundColor=6366F1",
    rating: 4.7,
    downloads: "5+ مليون",
    price: "$4.99",
    category: "تعليم",
    description: "تعلم البرمجة من الصفر للاحتراف",
    isFree: false,
    categorySlug: "education",
  },
  {
    id: "11",
    name: "إنستغرام",
    developer: "Meta Platforms",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=instagram&backgroundColor=E4405F",
    rating: 4.5,
    downloads: "5+ مليار",
    price: "مجاني",
    category: "تواصل اجتماعي",
    description: "شارك لحظاتك مع العالم",
    isFree: true,
    categorySlug: "social",
  },
  {
    id: "12",
    name: "ماين كرافت",
    developer: "Mojang Studios",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=minecraft&backgroundColor=62B47A",
    rating: 4.7,
    downloads: "100+ مليون",
    price: "$7.99",
    category: "ألعاب",
    description: "العالم المفتوح الأكثر إبداعاً",
    isFree: false,
    categorySlug: "games",
  },
  {
    id: "13",
    name: "كريم",
    developer: "Careem Networks",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=careem&backgroundColor=00C853",
    rating: 4.4,
    downloads: "50+ مليون",
    price: "مجاني",
    category: "تنقل",
    description: "تطبيق النقل والتوصيل الأول في المنطقة",
    isFree: true,
    categorySlug: "navigation",
  },
  {
    id: "14",
    name: "أنسي",
    developer: "Anki Mobile",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=anki&backgroundColor=2196F3",
    rating: 4.8,
    downloads: "10+ مليون",
    price: "مجاني",
    category: "تعليم",
    description: "البطاقات التعليمية الذكية للحفظ السريع",
    isFree: true,
    categorySlug: "education",
  },
  {
    id: "15",
    name: "فوتوشوب إكسبريس",
    developer: "Adobe Inc.",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=photoshop&backgroundColor=31A8FF",
    rating: 4.3,
    downloads: "100+ مليون",
    price: "مجاني",
    category: "تصميم",
    description: "عدة تحرير الصور الاحترافية",
    isFree: true,
    categorySlug: "design",
  },
];

export const featuredApp = apps[0];

export const categories = [
  { name: "الرئيسية", slug: "home", icon: "Home" },
  { name: "ألعاب", slug: "games", icon: "Gamepad2" },
  { name: "تطبيقات", slug: "apps", icon: "LayoutGrid" },
];

export const getAppByCategory = (categorySlug: string): App[] => {
  return apps.filter((app) => app.categorySlug === categorySlug);
};

export const getPopularApps = (): App[] => {
  return [...apps].sort((a, b) => b.rating - a.rating).slice(0, 6);
};

export const getRecentGames = (): App[] => {
  return apps.filter((app) => app.categorySlug === "games").slice(0, 4);
};

export const getEducationApps = (): App[] => {
  return apps.filter((app) => app.categorySlug === "education").slice(0, 4);
};
