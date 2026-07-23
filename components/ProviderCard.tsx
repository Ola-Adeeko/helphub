"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, MapPin } from "lucide-react";
import { Provider } from "@/lib/types";
import ContactActions from "./ContactActions";

export default function ProviderCard({
  provider,
  index = 0,
}: {
  provider: Provider;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-colors hover:border-accent/40"
    >
      <Link href={`/directory/${provider.slug}`} className="flex flex-col">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={provider.photo}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {provider.verifiedByHelpHub && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-secondary shadow-sm backdrop-blur-sm">
              <ShieldCheck className="h-3 w-3" />
              Verified
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-ink-faint font-medium">
              {provider.kind} · {provider.city}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              {provider.name}
            </h3>
            <p className="mt-1 text-sm text-ink-muted leading-snug">
              {provider.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {provider.specialties.slice(0, 2).map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-surface2 px-2.5 py-1 text-[11px] text-ink-muted"
              >
                {s}
              </span>
            ))}
            {provider.specialties.length > 2 && (
              <span className="rounded-full border border-line bg-surface2 px-2.5 py-1 text-[11px] text-ink-faint">
                +{provider.specialties.length - 2} more
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs">
            {provider.licensed && (
              <span className="inline-flex items-center gap-1 text-secondary">
                <ShieldCheck className="h-3.5 w-3.5" /> Licensed
              </span>
            )}
            {provider.certified && (
              <span className="inline-flex items-center gap-1 text-accent">
                <BadgeCheck className="h-3.5 w-3.5" /> Certified
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-2 font-mono font-medium text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {provider.city}
            </span>
            <span>
              {provider.freeFirstSession
                ? "First session free"
                : provider.priceFrom
                  ? `From ₦${provider.priceFrom.toLocaleString()}`
                  : "Price varies"}
            </span>
          </div>
        </div>
      </Link>

      <div className="border-t border-line px-5 py-4">
        <ContactActions contacts={provider.contacts} size="sm" />
      </div>
    </motion.div>
  );
}
