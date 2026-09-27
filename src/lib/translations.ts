export type Locale = "en" | "ar";

interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
}

interface ProductItem {
  name: string;
  description: string;
  applications: string[];
  specs: string[];
}

export interface Translations {
  brand: { name: string; tagline: string };
  nav: {
    hero: string;
    services: string;
    about: string;
    "why-insulation": string;
    products: string;
    gallery: string;
    contact: string;
    cta: string;
  };
  common: {
    openMenu: string;
    closeMenu: string;
    close: string;
    previous: string;
    next: string;
    toggleTheme: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
    imageAlt: string;
  };
  trustBar: {
    experience: string;
    materials: string;
    team: string;
    warranty: string;
    pricing: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      waterproofing: ServiceItem;
      thermal: ServiceItem;
      acoustic: ServiceItem;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    foundedLabel: string;
    landmarkLabel: string;
    landmarkText: string;
    vision: { title: string; description: string };
    mission: { title: string; description: string };
    values: { title: string; items: string[] };
  };
  whyMatters: {
    eyebrow: string;
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    risks: string[];
    benefits: string[];
    closingLine: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    addToCart: string;
    specsLabel: string;
    items: {
      ultracolorPlus: ProductItem;
      kerapoxy: ProductItem;
      bitumenMembrane: ProductItem;
      rockWool: ProductItem;
    };
  };
  cart: {
    title: string;
    empty: string;
    emptyHint: string;
    quantity: string;
    remove: string;
    clear: string;
    continueBrowsing: string;
    itemsInCart: string;
    sendInquiry: string;
    note: string;
  };
  auth: {
    signIn: string;
    createAccount: string;
    email: string;
    password: string;
    name: string;
    continueWithGoogle: string;
    continueWithFacebook: string;
    orContinueWith: string;
    switchToSignUp: string;
    switchToSignIn: string;
    previewNotice: string;
    myAccount: string;
  };
  experience: {
    eyebrow: string;
    yearsLabel: string;
    description: string;
    highlights: {
      installation: string;
      materials: string;
      waterproofing: string;
      thermal: string;
      acoustic: string;
    };
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    whatsappCta: string;
    callCta: string;
    locationLabel: string;
    location: string;
    phoneLabel: string;
  };
  footer: {
    linksHeading: string;
    contactHeading: string;
    copyright: string;
  };
}

const en: Translations = {
  brand: {
    name: "Sheikh Wassouf Insulation Materials",
    tagline: "Integrated solutions for insulation that lasts and protects.",
  },
  nav: {
    hero: "Home",
    services: "Services",
    about: "About Us",
    "why-insulation": "Why Insulation",
    products: "Products",
    gallery: "Gallery",
    contact: "Contact",
    cta: "Get in Touch",
  },
  common: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    toggleTheme: "Toggle dark mode",
  },
  hero: {
    eyebrow: "Est. 1995 · Aleppo, Syria",
    headline: "Sheikh Wassouf Insulation Materials",
    subheadline:
      "30 Years of Waterproofing, Thermal & Acoustic Insulation Expertise",
    ctaPrimary: "Get a Consultation",
    ctaSecondary: "Chat on WhatsApp",
    scrollHint: "Scroll to explore",
    imageAlt: "Cross section of a home showing complete insulation",
  },
  trustBar: {
    experience: "30+ Years of Experience",
    materials: "Genuine Premium Materials",
    team: "Expert Engineering Team",
    warranty: "Real Execution Warranty",
    pricing: "Competitive, Fair Pricing",
  },
  services: {
    eyebrow: "What We Do",
    title: "Complete Insulation Solutions",
    description:
      "Three core services, built on three decades of hands on experience in the field.",
    items: {
      waterproofing: {
        title: "Waterproofing",
        description: "Prevent leaks and structural damage.",
        tags: ["Roofs", "Foundations", "Wet Areas"],
      },
      thermal: {
        title: "Thermal Insulation",
        description: "Increase comfort and reduce energy costs.",
        tags: ["Walls", "Roofs", "Facades"],
      },
      acoustic: {
        title: "Acoustic Insulation",
        description: "Reduce unwanted noise.",
        tags: ["Walls", "Ceilings", "Partitions"],
      },
    },
  },
  about: {
    eyebrow: "Our Story",
    title: "Built on Craft, Trust, and Time",
    paragraph1:
      "Sheikh Wassouf Insulation Materials was founded in 1995 by architect Ahmad Sheikh Wassouf in Aleppo, setting a high standard for quality and precision from day one.",
    paragraph2:
      "Since then, we've continued building our expertise and adopting the best materials and modern techniques, delivering insulation solutions that lower energy use, protect buildings, and raise comfort and sustainability. We don't just supply a product. We provide a complete solution that protects your investment.",
    foundedLabel: "Founded in Aleppo",
    landmarkLabel: "Our First Landmark Project",
    landmarkText:
      "Our first major project was insulating the roof of the Engineers Syndicate building in Aleppo, work that built lasting trust in what we do.",
    vision: {
      title: "Vision",
      description:
        "To be the first choice for insulation solutions in the region, through advanced technologies that raise energy efficiency and support a more sustainable built environment.",
    },
    mission: {
      title: "Mission",
      description:
        "We deliver innovative, reliable insulation solutions built on the best materials and engineering standards, to protect buildings, cut energy use, and lower operating costs for our clients.",
    },
    values: {
      title: "Core Values",
      items: [
        "Quality first, no shortcuts",
        "Reliability on every project",
        "Innovation in materials and technique",
        "Professional and engineering standards",
        "Client service as a partnership",
      ],
    },
  },
  whyMatters: {
    eyebrow: "The Difference",
    title: "Why Insulation Matters",
    description:
      "An uninsulated home is a slow, ongoing loss. Heat escapes, cool air is wasted, and the difference shows up quietly on your energy bill every month.",
    beforeLabel: "Without Insulation",
    afterLabel: "With Insulation",
    risks: [
      "Water leaks and rising damp",
      "Mold growth and health risks",
      "Structural damage over time",
      "High energy bills",
    ],
    benefits: [
      "Complete protection from water and moisture",
      "Long term structural protection",
      "Lower energy consumption",
      "A healthier, more comfortable home",
    ],
    closingLine: "Insulation isn't a cost. It's a decision that pays for itself.",
  },
  products: {
    eyebrow: "Materials",
    title: "Products We Trust",
    description:
      "A closer look at the materials behind every project we deliver.",
    addToCart: "Add to Cart",
    specsLabel: "Specifications",
    items: {
      ultracolorPlus: {
        name: "MAPEI Ultracolor Plus",
        description:
          "A high performance, anti mold colored grout with fast setting and water repellent technology.",
        applications: ["Bathrooms", "Swimming Pools", "Floors & Walls"],
        specs: [
          "Joint width: 2–20 mm",
          "Pot life: about 20–25 minutes",
          "Light foot traffic: about 3 hours",
          "Full cure: 24 hours (48 hours for pools)",
          "34 colors available",
          "BioBlock anti mold + DropEffect water repellent technology",
        ],
      },
      kerapoxy: {
        name: "MAPEI Kerapoxy",
        description:
          "A two component epoxy grout offering complete protection against water and chemicals.",
        applications: ["Pools", "Kitchens", "Chemical Resistant Floors"],
        specs: [
          "Joint width: from 3 mm",
          "Pot life: about 45 minutes",
          "Light foot traffic: about 24 hours",
          "Full chemical resistance: after 4 days",
          "20+ colors available",
          "Very low emission (EMICODE EC1 Plus)",
        ],
      },
      bitumenMembrane: {
        name: "Bitumen Waterproof Membranes",
        description:
          "Reinforced 4mm bituminous membranes engineered for flexibility and long term water protection.",
        applications: ["Roofs", "Foundations", "Water Tanks"],
        specs: [
          "Thickness: 4 mm, polyester reinforced",
          "Roll size: 1 x 10 m",
          "Tensile strength: approx. 700–850 N/5cm",
          "Elongation at break: approx. 35–45%",
          "Flexible down to about -10°C",
          "Torch applied installation",
        ],
      },
      rockWool: {
        name: "Rock Wool Insulation",
        description:
          "High density mineral wool panels and rolls for thermal and acoustic performance with fire resistance.",
        applications: ["Roofs & Walls", "Ceilings", "Partitions"],
        specs: [
          "Density: approx. 40–160 kg/m³ depending on product",
          "Thermal conductivity: approx. 0.035–0.040 W/mK",
          "Fire rating: Euroclass A1, non combustible",
          "Water absorption: under 1%",
          "Strong sound absorption performance",
          "Available as boards and rolls",
        ],
      },
    },
  },
  cart: {
    title: "Your Cart",
    empty: "Your cart is empty",
    emptyHint: "Browse our products and add what you need.",
    quantity: "Qty",
    remove: "Remove",
    clear: "Clear cart",
    continueBrowsing: "Continue Browsing",
    itemsInCart: "items in cart",
    sendInquiry: "Send Inquiry via WhatsApp",
    note: "No online payment. We'll follow up by phone or WhatsApp to confirm pricing and availability.",
  },
  auth: {
    signIn: "Sign In",
    createAccount: "Create Account",
    email: "Email",
    password: "Password",
    name: "Full Name",
    continueWithGoogle: "Continue with Google",
    continueWithFacebook: "Continue with Facebook",
    orContinueWith: "or continue with",
    switchToSignUp: "Don't have an account? Create one",
    switchToSignIn: "Already have an account? Sign in",
    previewNotice: "This is a preview of how accounts will work. Nothing is connected yet, no account was created.",
    myAccount: "My Account",
  },
  experience: {
    eyebrow: "Built on Experience",
    yearsLabel: "Years of Experience",
    description:
      "Three decades of professional installation, premium materials, and specialists across every type of insulation.",
    highlights: {
      installation: "Professional Installation",
      materials: "Premium Materials",
      waterproofing: "Waterproofing Specialists",
      thermal: "Thermal Insulation Specialists",
      acoustic: "Acoustic Insulation Specialists",
    },
  },
  gallery: {
    eyebrow: "Our Work",
    title: "Projects & Materials",
    description: "A closer look at our projects and materials in the field.",
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Let's Protect Your Building",
    description:
      "Reach out for a consultation. We're based in Aleppo and ready to help.",
    whatsappCta: "Chat on WhatsApp",
    callCta: "Call Now",
    locationLabel: "Location",
    location: "Aleppo, Syria",
    phoneLabel: "Phone",
  },
  footer: {
    linksHeading: "Navigate",
    contactHeading: "Contact",
    copyright: "Sheikh Wassouf Insulation Materials. All rights reserved.",
  },
};

const ar: Translations = {
  brand: {
    name: "شيخ وسوف للمواد العازلة",
    tagline: "حلول متكاملة لعزل يدوم ويحمي.",
  },
  nav: {
    hero: "الرئيسية",
    services: "خدماتنا",
    about: "من نحن",
    "why-insulation": "أهمية العزل",
    products: "منتجاتنا",
    gallery: "معرض الأعمال",
    contact: "تواصل معنا",
    cta: "تواصل معنا",
  },
  common: {
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    close: "إغلاق",
    previous: "الصورة السابقة",
    next: "الصورة التالية",
    toggleTheme: "تبديل الوضع الداكن",
  },
  hero: {
    eyebrow: "منذ 1995 · حلب، سوريا",
    headline: "شيخ وسوف للمواد العازلة",
    subheadline: "30 عاماً من الخبرة في العزل المائي والحراري والصوتي",
    ctaPrimary: "اطلب استشارة",
    ctaSecondary: "راسلنا عبر واتساب",
    scrollHint: "مرر للأسفل للاستكشاف",
    imageAlt: "مقطع لمنزل يوضح العزل الكامل",
  },
  trustBar: {
    experience: "أكثر من 30 عاماً من الخبرة",
    materials: "مواد أصلية عالية الجودة",
    team: "فريق هندسي متخصص",
    warranty: "ضمان حقيقي على التنفيذ",
    pricing: "أسعار تنافسية وعادلة",
  },
  services: {
    eyebrow: "خدماتنا",
    title: "حلول عزل متكاملة",
    description: "ثلاث خدمات أساسية، مبنية على ثلاثة عقود من الخبرة الميدانية.",
    items: {
      waterproofing: {
        title: "العزل المائي",
        description: "منع التسرب والأضرار الإنشائية.",
        tags: ["الأسطح", "الأساسات", "المناطق الرطبة"],
      },
      thermal: {
        title: "العزل الحراري",
        description: "رفع الراحة وخفض استهلاك الطاقة.",
        tags: ["الجدران", "الأسطح", "الواجهات"],
      },
      acoustic: {
        title: "العزل الصوتي",
        description: "تقليل الضجيج غير المرغوب فيه.",
        tags: ["الجدران", "الأسقف", "الفواصل"],
      },
    },
  },
  about: {
    eyebrow: "قصتنا",
    title: "بُنيت على الحرفية والثقة والزمن",
    paragraph1:
      "تأسست شركة شيخ وسوف للمواد العازلة عام 1995 على يد المهندس المعماري أحمد شيخ وسوف في مدينة حلب، واضعةً منذ البداية معايير عالية للجودة والدقة في التنفيذ.",
    paragraph2:
      "منذ ذلك الحين، واصلت الشركة تطوير خبراتها واعتماد أفضل المواد والتقنيات الحديثة، لتقديم حلول عزل فعالة تخفّض استهلاك الطاقة وتحمي المباني وترفع مستوى الراحة والاستدامة. نحن لا نقدّم منتجاً فقط، بل نوفّر حلاً متكاملاً يحمي استثمارك.",
    foundedLabel: "التأسيس في حلب",
    landmarkLabel: "أول مشروع نوعي لنا",
    landmarkText:
      "انطلقت مسيرتنا بعزل سطح مبنى نقابة المهندسين في حلب، وهو المشروع الذي رسّخ ثقة عملائنا بكفاءة حلولنا.",
    vision: {
      title: "رؤيتنا",
      description:
        "أن نكون الخيار الأول في حلول العزل في المنطقة، من خلال تقنيات متقدمة ترفع كفاءة الطاقة وتدعم بيئة عمرانية أكثر استدامة.",
    },
    mission: {
      title: "رسالتنا",
      description:
        "نقدّم حلول عزل مبتكرة وموثوقة، مبنية على أفضل المواد والمعايير الهندسية، لحماية المباني وخفض استهلاك الطاقة وتكاليف التشغيل لعملائنا.",
    },
    values: {
      title: "قيمنا",
      items: [
        "الجودة أولاً بلا حلول مؤقتة",
        "الموثوقية في كل مشروع",
        "الابتكار في المواد والتقنيات",
        "الالتزام بالمعايير المهنية والهندسية",
        "خدمة العميل كشريك لا كصفقة",
      ],
    },
  },
  whyMatters: {
    eyebrow: "الفرق الحقيقي",
    title: "أهمية العزل",
    description:
      "المنزل غير المعزول هو خسارة مستمرة وهادئة. الحرارة تتسرّب، والبرودة تضيع، والفرق يظهر بصمت في فاتورة الطاقة كل شهر.",
    beforeLabel: "بدون عزل",
    afterLabel: "مع العزل",
    risks: [
      "تسرب المياه والرطوبة الصاعدة",
      "نمو العفن ومخاطر صحية",
      "تلف الهيكل الإنشائي مع الوقت",
      "ارتفاع فواتير الطاقة",
    ],
    benefits: [
      "حماية كاملة من المياه والرطوبة",
      "حماية طويلة الأمد للهيكل الإنشائي",
      "استهلاك أقل للطاقة",
      "منزل أكثر صحة وراحة",
    ],
    closingLine: "العزل ليس تكلفة، بل قرار يعيد نفسه.",
  },
  products: {
    eyebrow: "المواد",
    title: "منتجات نثق بها",
    description: "لمحة عن المواد التي تقف خلف كل مشروع ننفذه.",
    addToCart: "أضف إلى السلة",
    specsLabel: "المواصفات",
    items: {
      ultracolorPlus: {
        name: "MAPEI Ultracolor Plus",
        description:
          "روبة ملونة عالية الأداء ومقاومة للعفن، سريعة التصلب وبتقنية طاردة للماء.",
        applications: ["الحمامات", "المسابح", "الأرضيات والجدران"],
        specs: [
          "عرض الفواصل: 2–20 ملم",
          "زمن الاستخدام: 20–25 دقيقة تقريباً",
          "المشي الخفيف: بعد نحو 3 ساعات",
          "التصلب الكامل: 24 ساعة (48 ساعة للمسابح)",
          "متوفرة بـ 34 لوناً",
          "تقنية BioBlock المضادة للعفن و DropEffect الطاردة للماء",
        ],
      },
      kerapoxy: {
        name: "MAPEI Kerapoxy",
        description:
          "روبة إيبوكسي ثنائية المكونات توفر حماية كاملة من الماء والمواد الكيميائية.",
        applications: ["المسابح", "المطابخ", "الأرضيات المعرضة للكيماويات"],
        specs: [
          "عرض الفواصل: من 3 ملم",
          "زمن الاستخدام: 45 دقيقة تقريباً",
          "المشي الخفيف: بعد نحو 24 ساعة",
          "مقاومة كيميائية كاملة: بعد 4 أيام",
          "متوفرة بأكثر من 20 لوناً",
          "انبعاثات منخفضة جداً (EMICODE EC1 Plus)",
        ],
      },
      bitumenMembrane: {
        name: "رقائق العزل البيتومينية",
        description:
          "رقائق بيتومينية معدلة بسماكة 4 ملم، مصممة للمرونة والحماية طويلة الأمد من تسرب المياه.",
        applications: ["الأسطح", "الأساسات", "خزانات المياه"],
        specs: [
          "السماكة: 4 ملم، مسلحة بألياف البوليستر",
          "مقاس الرول: 1 × 10 متر",
          "مقاومة الشد: نحو 700–850 نيوتن/5سم",
          "الاستطالة عند الكسر: نحو 35–45٪",
          "مرونة حتى نحو 10- درجات مئوية",
          "تركيب باللحام الحراري",
        ],
      },
      rockWool: {
        name: "عزل الصوف الصخري",
        description:
          "ألواح ورولات من الصوف الصخري عالي الكثافة، بأداء حراري وصوتي متميز ومقاومة للحريق.",
        applications: ["الأسطح والجدران", "الأسقف", "الفواصل"],
        specs: [
          "الكثافة: نحو 40–160 كغ/م³ حسب النوع",
          "الناقلية الحرارية: نحو 0.035–0.040 واط/م.كلفن",
          "تصنيف الحريق: A1 غير قابل للاشتعال",
          "امتصاص الماء: أقل من 1٪",
          "أداء ممتاز في امتصاص الصوت",
          "متوفر على شكل ألواح ورولات",
        ],
      },
    },
  },
  cart: {
    title: "سلتك",
    empty: "سلتك فارغة",
    emptyHint: "تصفح منتجاتنا وأضف ما تحتاجه.",
    quantity: "الكمية",
    remove: "إزالة",
    clear: "إفراغ السلة",
    continueBrowsing: "متابعة التصفح",
    itemsInCart: "عناصر في السلة",
    sendInquiry: "إرسال الطلب عبر واتساب",
    note: "لا يوجد دفع إلكتروني. سنتواصل معك هاتفياً أو عبر واتساب لتأكيد السعر والتوفر.",
  },
  auth: {
    signIn: "تسجيل الدخول",
    createAccount: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    name: "الاسم الكامل",
    continueWithGoogle: "المتابعة عبر Google",
    continueWithFacebook: "المتابعة عبر Facebook",
    orContinueWith: "أو تابع عبر",
    switchToSignUp: "ليس لديك حساب؟ أنشئ واحداً",
    switchToSignIn: "لديك حساب بالفعل؟ سجل الدخول",
    previewNotice: "هذه معاينة لشكل الحسابات مستقبلاً. لا شيء مفعّل بعد، ولم يتم إنشاء أي حساب.",
    myAccount: "حسابي",
  },
  experience: {
    eyebrow: "خبرة راسخة",
    yearsLabel: "سنوات من الخبرة",
    description:
      "ثلاثة عقود من التركيب الاحترافي والمواد عالية الجودة ومتخصصين في كل نوع من أنواع العزل.",
    highlights: {
      installation: "تركيب احترافي",
      materials: "مواد عالية الجودة",
      waterproofing: "متخصصون في العزل المائي",
      thermal: "متخصصون في العزل الحراري",
      acoustic: "متخصصون في العزل الصوتي",
    },
  },
  gallery: {
    eyebrow: "أعمالنا",
    title: "مشاريعنا وموادنا",
    description: "لمحة عن مشاريعنا وموادنا في الميدان.",
  },
  contact: {
    eyebrow: "تواصل معنا",
    title: "لنحمِ مبناك معًا",
    description: "تواصل معنا لطلب استشارة. نحن في حلب وجاهزون لمساعدتك.",
    whatsappCta: "راسلنا عبر واتساب",
    callCta: "اتصل الآن",
    locationLabel: "الموقع",
    location: "حلب، سوريا",
    phoneLabel: "الهاتف",
  },
  footer: {
    linksHeading: "تصفح",
    contactHeading: "تواصل معنا",
    copyright: "شيخ وسوف للمواد العازلة. جميع الحقوق محفوظة.",
  },
};

export const translations: Record<Locale, Translations> = { en, ar };
