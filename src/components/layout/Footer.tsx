"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/lib/site-data";

const sectionIds = [
  "hero",
  "services",
  "about",
  "why-insulation",
  "products",
  "gallery",
  "contact",
] as const;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-edge bg-surface">
      <div className="mx-auto max-w-8xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Sheikh Wassouf Insulation Materials"
                width={48}
                height={34}
                className="h-10 w-auto object-contain"
              />
              <span className="text-base font-semibold text-ink">{t.brand.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t.brand.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {t.footer.linksHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-sm text-muted hover:text-gold">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {t.footer.contactHeading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>{t.contact.location}</li>
              <li dir="ltr" className="text-start">
                {CONTACT.phoneDisplay}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-edge pt-8 text-center text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
