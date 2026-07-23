"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-ink">
            H
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            HelpHub <span className="text-ink-muted font-normal">Nigeria</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/#story"
            className="text-sm text-ink transition-colors hover:text-ink"
          >
            Our story
          </Link>
          <Link
            href="/#categories"
            className="text-sm text-ink transition-colors hover:text-ink"
          >
            Areas of support
          </Link>
          <Link
            href="/directory"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03] hover:bg-accent-hover"
          >
            Find help
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
                Our story
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
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink"
              >
                Find help <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
