"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/lib/site-data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end gap-3">
      <a
        href={CONTACT.phoneHref}
        aria-label={t.contact.callCta}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={t.contact.whatsappCta}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
