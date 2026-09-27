"use client";

import { Award, ShieldCheck, HardHat, BadgeCheck, Wallet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const items = [
  { id: "experience", icon: Award },
  { id: "materials", icon: ShieldCheck },
  { id: "team", icon: HardHat },
  { id: "warranty", icon: BadgeCheck },
  { id: "pricing", icon: Wallet },
] as const;

export default function TrustBar() {
  const { t } = useLanguage();
  return (
    <div className="border-b border-white/10 bg-navy-dark">
      <div className="mx-auto grid max-w-8xl grid-cols-2 gap-x-6 gap-y-6 px-6 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:px-12">
        {items.map(({ id, icon: Icon }) => (
          <div key={id} className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="text-sm font-medium leading-snug text-white/85">
              {t.trustBar[id]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
