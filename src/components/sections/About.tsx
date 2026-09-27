"use client";

import { motion } from "framer-motion";
import { Eye, Target, Gem } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{t.about.paragraph1}</p>
            <p className="mt-4 leading-relaxed text-muted">{t.about.paragraph2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-edge bg-surface p-8"
          >
            <p className="text-5xl font-bold text-ink">1995</p>
            <p className="mt-2 text-sm text-muted">{t.about.foundedLabel}</p>
            <div className="mt-8 border-t border-edge pt-8">
              <p className="text-sm font-semibold text-ink">{t.about.landmarkLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.about.landmarkText}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-edge bg-surface p-7"
          >
            <Eye className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-semibold text-ink">{t.about.vision.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t.about.vision.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-edge bg-surface p-7"
          >
            <Target className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-semibold text-ink">{t.about.mission.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t.about.mission.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-edge bg-surface p-7"
          >
            <Gem className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-semibold text-ink">{t.about.values.title}</h3>
            <ul className="mt-3 space-y-2">
              {t.about.values.items.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
