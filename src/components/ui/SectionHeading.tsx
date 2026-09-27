"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-start"
      }
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}
