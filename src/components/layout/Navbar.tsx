"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useAuthUI } from "@/context/AuthUIContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";

const sectionIds = [
  "hero",
  "services",
  "about",
  "why-insulation",
  "products",
  "gallery",
  "contact",
] as const;

export default function Navbar() {
  const { t, dir } = useLanguage();
  const { totalCount, openCart } = useCart();
  const { openAuth } = useAuthUI();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = sectionIds.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Sheikh Wassouf Insulation Materials"
            width={44}
            height={31}
            className="h-10 w-auto object-contain"
            priority
          />
          <span
            className={`hidden text-sm font-semibold leading-tight sm:block ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            {t.brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-ink" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className={scrolled ? "text-ink" : "text-white"} />
          <LanguageSwitcher
            className={scrolled ? "border-edge text-ink" : "border-white/25 text-white"}
          />
          <button
            type="button"
            onClick={openAuth}
            aria-label={t.auth.myAccount}
            className={`flex h-10 w-10 items-center justify-center rounded-full hover:text-gold ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={`relative flex h-10 w-10 items-center justify-center rounded-full hover:text-gold ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="absolute -top-0.5 end-0 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-navy-dark">
                {totalCount}
              </span>
            )}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy-dark"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={`relative flex h-10 w-10 items-center justify-center rounded-full ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="absolute -top-0.5 end-0 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-navy-dark">
                {totalCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-label={t.common.openMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute inset-y-0 end-0 flex w-4/5 max-w-sm flex-col gap-2 bg-card p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={40}
                  height={28}
                  className="h-9 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.common.closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex items-center justify-between border-t border-edge pt-4">
                <LanguageSwitcher className="border-edge text-ink" />
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      openAuth();
                      setOpen(false);
                    }}
                    aria-label={t.auth.myAccount}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
                  >
                    <User className="h-5 w-5" />
                  </button>
                  <ThemeToggle className="text-ink" />
                </div>
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {t.nav.cta}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
