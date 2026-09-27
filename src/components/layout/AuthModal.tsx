"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";
import { useAuthUI } from "@/context/AuthUIContext";
import { useLanguage } from "@/context/LanguageContext";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.66z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.46 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.93H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.31 14.31A7.2 7.2 0 0 1 4.93 12c0-.8.14-1.58.38-2.31v-3.1H1.3A12 12 0 0 0 0 12c0 1.94.46 3.77 1.3 5.41z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0A12 12 0 0 0 1.3 6.59l4.01 3.1C6.25 6.86 8.89 4.77 12 4.77z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2" aria-hidden="true">
      <path d="M24 12.07C24 5.7 18.63.55 12 .55S0 5.7 0 12.07c0 5.75 4.39 10.52 10.13 11.38v-8.05H7.08v-3.33h3.05V9.41c0-2.98 1.83-4.62 4.6-4.62 1.32 0 2.7.23 2.7.23v2.9h-1.52c-1.5 0-1.97.91-1.97 1.85v2.23h3.35l-.54 3.33h-2.81v8.05C19.61 22.6 24 17.82 24 12.07z" />
    </svg>
  );
}

export default function AuthModal() {
  const { isOpen, closeAuth } = useAuthUI();
  const { t } = useLanguage();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showNotice, setShowNotice] = useState(false);

  const handlePreviewAction = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    setShowNotice(true);
  };

  const close = () => {
    closeAuth();
    setShowNotice(false);
    setMode("signin");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{ background: "rgba(7,23,38,.6)", backdropFilter: "blur(4px)" }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-sm rounded-3xl bg-card p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 end-5 flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-surface"
            >
              <X className="h-4 w-4" />
            </button>

            <h2 className="text-xl font-semibold text-ink">
              {mode === "signin" ? t.auth.signIn : t.auth.createAccount}
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={handlePreviewAction}
                className="flex items-center justify-center gap-3 rounded-full border border-edge px-4 py-2.5 text-sm font-medium text-ink hover:border-gold"
              >
                <GoogleIcon />
                {t.auth.continueWithGoogle}
              </button>
              <button
                type="button"
                onClick={handlePreviewAction}
                className="flex items-center justify-center gap-3 rounded-full border border-edge px-4 py-2.5 text-sm font-medium text-ink hover:border-gold"
              >
                <FacebookIcon />
                {t.auth.continueWithFacebook}
              </button>
            </div>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-[var(--edge)]" />
              <span className="text-xs uppercase tracking-wide text-muted">
                {t.auth.orContinueWith}
              </span>
              <span className="h-px flex-1 bg-[var(--edge)]" />
            </div>

            <form onSubmit={handlePreviewAction} className="flex flex-col gap-4">
              {mode === "signup" && (
                <div>
                  <label className="text-xs font-medium text-muted">{t.auth.name}</label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-edge bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-gold"
                  />
                </div>
              )}
              <div>
                <label className="text-xs font-medium text-muted">{t.auth.email}</label>
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-edge bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted">{t.auth.password}</label>
                <input
                  type="password"
                  className="mt-1.5 w-full rounded-xl border border-edge bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="mt-1 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy-dark"
              >
                {mode === "signin" ? t.auth.signIn : t.auth.createAccount}
              </button>
            </form>

            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="mt-5 w-full text-center text-xs text-muted hover:text-gold"
            >
              {mode === "signin" ? t.auth.switchToSignUp : t.auth.switchToSignIn}
            </button>

            {showNotice && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-start gap-2 rounded-xl bg-chip p-3 text-xs leading-relaxed text-muted"
              >
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t.auth.previewNotice}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
