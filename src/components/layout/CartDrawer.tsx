"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { products, CONTACT } from "@/lib/site-data";

export default function CartDrawer() {
  const { t, dir, locale } = useLanguage();
  const { items, updateQuantity, removeItem, clearCart, isOpen, closeCart } = useCart();

  const lineItems = items
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      if (!product) return null;
      const info = t.products.items[cartItem.productId as keyof typeof t.products.items];
      return { ...cartItem, product, info };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const whatsappHref = () => {
    const lines = lineItems.map((li) => `${li.info.name} x${li.quantity}`);
    const message =
      (locale === "ar" ? "مرحباً، أرغب بطلب:\n" : "Hi, I'd like to order:\n") + lines.join("\n");
    return `${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70]"
          style={{ background: "rgba(7,23,38,.6)", backdropFilter: "blur(4px)" }}
          onClick={closeCart}
        >
          <motion.div
            initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute inset-y-0 end-0 flex w-full max-w-md flex-col bg-card shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-edge p-6">
              <h2 className="text-lg font-semibold text-ink">{t.cart.title}</h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label={t.common.close}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {lineItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-muted" strokeWidth={1.5} />
                  <p className="mt-4 font-semibold text-ink">{t.cart.empty}</p>
                  <p className="mt-1 text-sm text-muted">{t.cart.emptyHint}</p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-6 rounded-full border border-edge px-5 py-2.5 text-sm font-semibold text-ink hover:border-gold hover:text-gold"
                  >
                    {t.cart.continueBrowsing}
                  </button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {lineItems.map((li) => (
                    <li key={li.productId} className="flex gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-chip">
                        <Image
                          src={li.product.image}
                          alt=""
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-ink">{li.info.name}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex items-center gap-2 rounded-full border border-edge px-2 py-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(li.productId, li.quantity - 1)}
                              className="flex h-6 w-6 items-center justify-center text-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm text-ink">{li.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(li.productId, li.quantity + 1)}
                              className="flex h-6 w-6 items-center justify-center text-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(li.productId)}
                            className="flex items-center gap-1 text-xs text-muted hover:text-gold"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            {t.cart.remove}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lineItems.length > 0 && (
              <div className="border-t border-edge p-6">
                <p className="text-xs leading-relaxed text-muted">{t.cart.note}</p>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-navy-dark"
                  style={{ background: "#25D366" }}
                >
                  {t.cart.sendInquiry}
                </a>
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-3 w-full text-center text-xs text-muted hover:text-gold"
                >
                  {t.cart.clear}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
