

export const slides = [
  { src: "/assets/images/hero-1.jpg", alt: "Customer trying on premium eyeglasses in the Optic boutique" },
  { src: "/assets/images/hero-2.jpg", alt: "Luxury optical frames displayed on burgundy velvet" },
  { src: "/assets/images/hero-3.jpg", alt: "Optometrist performing a professional eye examination" },
];

export const NAV = [
  {
    key: "home",
    href: "#home",
  },
  {
    key: "about",
    href: "#about",
  },
  {
    key: "services",
    href: "#services",
  },
  {
    key: "featuredProducts",
    href: "#featuredProducts",
  },
  {
    key: "whyUs",
    href: "#whyUs",
  },
  {
    key: "reviews",
    href: "#reviews",
  },
  {
    key: "contact",
    href: "#contact",
  },
] as const;

export const CONTACT = {
  phone: "+20 100 123 4567",
  address:"15 may city",
  email:"multi@yahoo.com",
  hours: [
    { day: "Saturday – Thursday", time: "09:00 – 21:00" },
    { day: "Friday", time: "14:00 – 21:00" },
  ],
};


export const SERVICES = [
  {
    icon: "Glasses",
    key: "prescriptionGlasses",
  },
  {
    icon: "Sun",
    key: "sunglasses",
  },
  {
    icon: "Wrench",
    key: "lensInstallation",
  },
  {
    icon: "Ruler",
    key: "frameAdjustment",
  },
  {
    icon: "Hammer",
    key: "glassesRepair",
  },
  {
    icon: "CircleDot",
    key: "lensReplacement",
  },
  {
    icon: "MessageCircle",
    key: "eyewearAssistance",
  },
  {
    icon: "Sparkles",
    key: "cleaningCare",
  },
] as const;


export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  short: string;
  description: string;
  colours: string[];
  sizes: string[];
  lenses: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "aurea-optical",
    name: "Aurea Optical",
    category: "Prescription Glasses",
    image: "/assets/images/p-prescription.jpg",
    short: "Hand-polished acetate with a refined keyhole bridge.",
    description:
      "A timeless everyday frame in Italian acetate, balanced for long wear and paired with high-index digital lenses.",
    colours: ["Tortoise", "Wine", "Onyx"],
    sizes: ["50-19", "52-20", "54-21"],
    lenses: ["Single Vision", "Progressive", "Anti-Reflective", "Photochromic"],
  },
  {
    slug: "solano-sun",
    name: "Solano Sun",
    category: "Sunglasses",
    image: "/assets/images/p-accessories.jpg",
    short: "Polarised UV400 lenses in a sculpted metal browline.",
    description:
      "Polarised mineral lenses cut glare on the road and water, set in a lightweight browline with adjustable pads.",
    colours: ["Rose Mirror", "Smoke", "Bronze"],
    sizes: ["53-21", "55-22"],
    lenses: ["Polarised", "Gradient Tint", "Prescription Sun"],
  },
  
];


export const WHY = [
  {
    key: "qualityFrames",
  },
  {
    key: "lensOptions",
  },
  {
    key: "professionalFitting",
  },
  {
    key: "repairsAdjustments",
  },
  {
    key: "personalizedAssistance",
  },
  {
    key: "fairPrices",
  },
  {
    key: "fastService",
  },
  {
    key: "aftercare",
  },
] as const;


export const TESTIMONIALS = [
  {
    key: "rana",
    rating: 5,
    image: "/assets/images/hero-1.jpg",
  },
  {
    key: "omar",
    rating: 5,
    image: "/assets/images/hero-2.jpg",
  },
  {
    key: "leila",
    rating: 5,
    image: "/assets/images/hero-3.jpg",
  },
] as const;