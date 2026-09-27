"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

interface Product {
  id: "ultracolorPlus" | "kerapoxy" | "bitumenMembrane" | "rockWool";
  brand: string | null;
  image: string;
}

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const item = t.products.items[product.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-edge bg-surface shadow-[0_1px_2px_rgba(14,42,71,0.06)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-24px_rgba(14,42,71,0.3)] sm:w-[45%] lg:w-auto"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-chip p-8">
        <Image
          src={product.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 78vw"
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {product.brand && (
          <span className="absolute top-4 start-4 rounded-full bg-card/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink backdrop-blur">
            {product.brand}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.applications.map((app) => (
            <span
              key={app}
              className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-muted"
            >
              {app}
            </span>
          ))}
        </div>

        <details className="mt-4">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-gold">
            {t.products.specsLabel}
          </summary>
          <ul className="mt-3 space-y-1.5">
            {item.specs.map((spec) => (
              <li key={spec} className="text-xs leading-relaxed text-muted">
                {spec}
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-5 flex items-center gap-3 border-t border-edge pt-5">
          <div className="flex items-center gap-2 rounded-full border border-edge px-2 py-1.5">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-6 w-6 items-center justify-center text-ink"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-6 text-center text-sm text-ink">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="flex h-6 w-6 items-center justify-center text-ink"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              addItem(product.id, qty);
              setQty(1);
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy-dark"
          >
            <ShoppingBag className="h-4 w-4" />
            {t.products.addToCart}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
