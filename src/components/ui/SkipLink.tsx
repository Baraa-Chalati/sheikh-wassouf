"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SkipLink() {
  const { locale } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
    >
      {locale === "ar" ? "تخطي إلى المحتوى" : "Skip to content"}
    </a>
  );
}
