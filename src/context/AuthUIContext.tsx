"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthUIContextValue {
  isOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
}

const AuthUIContext = createContext<AuthUIContextValue | null>(null);

export function AuthUIProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AuthUIContext.Provider
      value={{ isOpen, openAuth: () => setIsOpen(true), closeAuth: () => setIsOpen(false) }}
    >
      {children}
    </AuthUIContext.Provider>
  );
}

export function useAuthUI() {
  const ctx = useContext(AuthUIContext);
  if (!ctx) throw new Error("useAuthUI must be used within an AuthUIProvider");
  return ctx;
}
