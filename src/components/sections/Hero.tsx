"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/lib/site-data";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  const { t, dir, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const layerReveal = useTransform(scrollYProgress, [0.05, 0.55], [0, 1]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-navy-dark"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <HeroIllustration progress={layerReveal} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/65 to-navy-dark/20" />
        <div
          className={`absolute inset-0 from-navy-dark/85 via-navy-dark/30 to-transparent ${
            dir === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r"
          }`}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pt-28 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-gold"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 flex max-w-3xl flex-wrap items-center gap-5"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={140}
            height={91}
            className="h-14 w-auto object-contain sm:h-16 lg:h-20"
            priority
          />
          <h1
            className={
              locale === "ar"
                ? "text-3xl font-semibold leading-snug text-white sm:text-4xl lg:text-6xl"
                : "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
            }
          >
            {t.hero.headline}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-dark"
          >
            {t.hero.ctaPrimary}
            <ArrowRight
              className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                dir === "rtl" ? "-scale-x-100" : ""
              }`}
            />
          </MagneticButton>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            <MessageCircle className="h-4 w-4" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 flex items-center gap-3 text-white/50"
        >
          <span className="h-px w-10 bg-white/30" />
          <span className="text-xs uppercase tracking-[0.2em]">{t.hero.scrollHint}</span>
        </motion.div>
      </div>
    </section>
  );
}
