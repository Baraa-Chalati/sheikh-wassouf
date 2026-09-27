"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { HardHat, ShieldCheck, Droplets, Sun, Volume2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = {
  installation: HardHat,
  materials: ShieldCheck,
  waterproofing: Droplets,
  thermal: Sun,
  acoustic: Volume2,
};

const highlightIds = [
  "installation",
  "materials",
  "waterproofing",
  "thermal",
  "acoustic",
] as const;

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="bg-navy-dark py-24 text-white sm:py-32">
      <div className="section-padding mx-auto max-w-8xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {t.experience.eyebrow}
            </span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-bold sm:text-8xl">
                <Counter value={30} />
              </span>
              <span className="text-2xl font-semibold text-white/70">+</span>
            </div>
            <p className="mt-3 text-xl text-white/70">{t.experience.yearsLabel}</p>
            <p className="mt-8 max-w-md text-white/60">{t.experience.description}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {highlightIds.map((id, index) => {
              const Icon = icons[id];
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <p className="mt-4 text-sm font-medium leading-snug text-white/85">
                    {t.experience.highlights[id]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
