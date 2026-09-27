import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { AuthUIProvider } from "@/context/AuthUIContext";
import { SITE_URL } from "@/lib/site-data";

const latin = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const arabic = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sheikh Wassouf Insulation Materials | شيخ وسوف للمواد العازلة",
    template: "%s | Sheikh Wassouf Insulation Materials",
  },
  description:
    "30 years of expertise in waterproofing, thermal, and acoustic insulation. Premium materials and professional installation in Aleppo, Syria.",
  keywords: [
    "insulation Aleppo",
    "waterproofing Syria",
    "thermal insulation",
    "acoustic insulation",
    "عزل مائي حلب",
    "عزل حراري",
    "عزل صوتي",
    "شيخ وسوف",
  ],
  authors: [{ name: "Sheikh Wassouf Insulation Materials" }],
  openGraph: {
    title: "Sheikh Wassouf Insulation Materials",
    description:
      "30 years of expertise in waterproofing, thermal, and acoustic insulation in Aleppo, Syria.",
    url: SITE_URL,
    siteName: "Sheikh Wassouf Insulation Materials",
    images: ["/images/og-image.jpg"],
    locale: "ar_SY",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheikh Wassouf Insulation Materials",
    description:
      "30 years of expertise in waterproofing, thermal, and acoustic insulation in Aleppo, Syria.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#060f1c" },
  ],
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('sw-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${latin.variable} ${arabic.variable}`}>
      <body className="font-arabic antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Sheikh Wassouf Insulation Materials",
              alternateName: "شيخ وسوف للمواد العازلة",
              image: `${SITE_URL}/images/og-image.jpg`,
              telephone: "+963989752250",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Aleppo",
                addressCountry: "SY",
              },
              areaServed: "Aleppo, Syria",
              description:
                "Waterproofing, thermal insulation, and acoustic insulation solutions with 30 years of experience.",
              url: SITE_URL,
            }),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <AuthUIProvider>{children}</AuthUIProvider>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
