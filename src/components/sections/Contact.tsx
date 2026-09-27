"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/lib/site-data";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-card py-24 sm:py-32">
      <div className="section-padding mx-auto max-w-8xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-navy-dark">
          <div className="grid gap-12 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-2 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {t.contact.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 max-w-md text-white/65">{t.contact.description}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-navy-dark transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.contact.whatsappCta}
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  {t.contact.callCta}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col justify-center gap-6"
            >
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t.contact.locationLabel}
                  </p>
                  <p className="mt-1 text-white/60">{t.contact.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t.contact.phoneLabel}
                  </p>
                  <p dir="ltr" className="mt-1 text-start text-white/60">
                    {CONTACT.phoneDisplay}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
