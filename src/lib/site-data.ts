export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sheikhwassoof.com";

export const CONTACT = {
  phoneDisplay: "+963 989 752 250",
  phoneHref: "tel:+963989752250",
  whatsappHref: "https://wa.me/963989752250",
};

export const products = [
  {
    id: "ultracolorPlus" as const,
    brand: "MAPEI",
    image: "/images/product-ultracolor-plus.jpg",
  },
  {
    id: "kerapoxy" as const,
    brand: "MAPEI",
    image: "/images/product-kerapoxy.jpg",
  },
  {
    id: "bitumenMembrane" as const,
    brand: null,
    image: "/images/product-bitumen-membrane.jpg",
  },
  {
    id: "rockWool" as const,
    brand: null,
    image: "/images/product-rockwool.jpg",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    width: 1500,
    height: 636,
    altEn: "Home protection and insulation campaign visual",
    altAr: "صورة حملة حماية المنزل والعزل",
  },
  {
    src: "/images/gallery-2.jpg",
    width: 896,
    height: 1195,
    altEn: "MAPEI Ultracolor Plus product information",
    altAr: "معلومات منتج ألتراكلر بلس من مابيي",
  },
  {
    src: "/images/gallery-3.jpg",
    width: 768,
    height: 1376,
    altEn: "Home insulation campaign visual",
    altAr: "صورة حملة عزل المنزل",
  },
  {
    src: "/images/gallery-4.jpg",
    width: 768,
    height: 1376,
    altEn: "The risks of poor insulation and our professional crew",
    altAr: "مخاطر غياب العزل وفريقنا الاحترافي",
  },
  {
    src: "/images/gallery-5.jpg",
    width: 720,
    height: 1456,
    altEn: "Comparing an unprotected building to an insulated one",
    altAr: "مقارنة بين مبنى غير محمي ومبنى معزول",
  },
  {
    src: "/images/gallery-6.jpg",
    width: 768,
    height: 1376,
    altEn: "The risks and benefits of insulation side by side",
    altAr: "مخاطر وفوائد العزل جنبًا إلى جنب",
  },
  {
    src: "/images/gallery-7.jpg",
    width: 720,
    height: 900,
    altEn: "MAPEI Kerapoxy waterproofing information",
    altAr: "معلومات عن كيرابوكسي من مابيي للعزل المائي",
  },
  {
    src: "/images/gallery-8.jpg",
    width: 720,
    height: 900,
    altEn: "Bitumen waterproofing membrane rolls",
    altAr: "رولات العزل المائي البيتومينية",
  },
  {
    src: "/images/gallery-9.jpg",
    width: 842,
    height: 750,
    altEn: "Rock wool thermal and acoustic insulation",
    altAr: "عزل الصوف الصخري الحراري والصوتي",
  },
];
