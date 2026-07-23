"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, MapPin } from "lucide-react";

/**
 * The signature hero visual: real photography with layered "proof" cards
 * floating over it — mirrors the dashboard-over-photo pattern used across
 * the reference sites (a product that already exists, not a concept).
 */
export default function FloatingCards({ photoUrl }: { photoUrl: string }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-[5/4] sm:max-w-xl">
      <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-line shadow-sm">
        <Image
          src={photoUrl}
          alt="A counsellor speaking with someone in a calm office setting"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 576px"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -left-4 top-8 flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:-left-8"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-soft text-secondary">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">Licensed & verified</p>
          <p className="text-[11px] text-ink-muted">Checked by our team</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:-right-10"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
          <MessageCircle className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">Reply in minutes</p>
          <p className="text-[11px] text-ink-muted">via WhatsApp</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface2 text-ink-muted">
          <MapPin className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">240+ listings</p>
          <p className="text-[11px] text-ink-muted">Across 6 Nigerian cities</p>
        </div>
      </motion.div>
    </div>
  );
}
