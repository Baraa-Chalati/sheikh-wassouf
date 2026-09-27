"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors hover:border-gold hover:text-gold",
        className
      )}
      aria-label="Switch language"
    >
      <span className={locale === "en" ? "text-gold" : ""}>EN</span>
      <span className="opacity-30">/</span>
      <span className={locale === "ar" ? "text-gold" : ""}>عربي</span>
    </button>
  );
}
