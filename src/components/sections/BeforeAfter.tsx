"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  const { t } = useLanguage();
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section id="why-insulation" className="section-padding bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        <SectionHeading
          eyebrow={t.whyMatters.eyebrow}
          title={t.whyMatters.title}
          description={t.whyMatters.description}
        />

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="relative mx-auto mt-16 aspect-[4/5] w-full max-w-md select-none overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(14,42,71,0.35)] sm:max-w-lg"
        >
          <Image
            src="/images/after-insulation.jpg"
            alt={t.whyMatters.afterLabel}
            fill
            sizes="(min-width: 640px) 512px, 100vw"
            className="pointer-events-none object-cover"
            draggable={false}
          />
          <Image
            src="/images/before-insulation.jpg"
            alt={t.whyMatters.beforeLabel}
            fill
            sizes="(min-width: 640px) 512px, 100vw"
            className="pointer-events-none object-cover"
            draggable={false}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          <div
            className="pointer-events-none absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center bg-white/80"
            style={{ left: `${position}%` }}
          >
            <div className="flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 7L3 12L8 17M16 7L21 12L16 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <span className="absolute top-4 start-4 rounded-full bg-navy-dark/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            {t.whyMatters.beforeLabel}
          </span>
          <span className="absolute top-4 end-4 rounded-full bg-gold/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-dark backdrop-blur">
            {t.whyMatters.afterLabel}
          </span>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {t.whyMatters.beforeLabel}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.whyMatters.risks.map((risk) => (
                <li key={risk} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
              {t.whyMatters.afterLabel}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.whyMatters.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold text-ink">
          {t.whyMatters.closingLine}
        </p>
      </div>
    </section>
  );
}
