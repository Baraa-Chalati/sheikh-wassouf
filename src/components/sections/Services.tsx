"use client";

import { motion } from "framer-motion";
import { Droplets, Sun, Volume2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = { waterproofing: Droplets, thermal: Sun, acoustic: Volume2 };
const ids = ["waterproofing", "thermal", "acoustic"] as const;

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ids.map((id, index) => {
            const Icon = icons[id];
            const item = t.services.items[id];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-edge bg-card p-8 shadow-[0_1px_2px_rgba(14,42,71,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(14,42,71,0.25)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-chip text-ink transition-colors duration-500 group-hover:bg-gold group-hover:text-navy-dark">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-muted">{item.description}</p>

                <div className="mt-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
