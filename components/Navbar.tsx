"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-[1.45rem] leading-none tracking-tight text-ink">
            HelpHub
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Nigeria
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#story"
            className="text-[15px] text-ink-muted transition-colors hover:text-ink"
          >
            Why we exist
          </Link>
          <Link
            href="/#categories"
            className="text-[15px] text-ink-muted transition-colors hover:text-ink"
          >
            Areas of support
          </Link>
          <Link
            href="/directory"
            className="bg-accent px-4 py-2 text-[15px] font-medium text-accent-ink transition-colors hover:bg-accent-hover"
          >
            Find help
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              <Link
                href="/#story"
                onClick={() => setOpen(false)}
                className="text-ink-muted"
              >
                Why we exist
              </Link>
              <Link
                href="/#categories"
                onClick={() => setOpen(false)}
                className="text-ink-muted"
              >
                Areas of support
              </Link>
              <Link
                href="/directory"
                onClick={() => setOpen(false)}
                className="inline-flex w-fit bg-accent px-4 py-2 text-sm font-medium text-accent-ink"
              >
                Find help
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
