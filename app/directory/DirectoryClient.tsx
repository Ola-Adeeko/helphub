"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";
import { providers } from "@/data/providers";
import ProviderCard from "@/components/ProviderCard";
import FilterBar, { Filters } from "@/components/FilterBar";

export default function DirectoryClient() {
  const params = useSearchParams();
  const initialSpecialty = params.get("specialty");

  const [filters, setFilters] = useState<Filters>({
    query: "",
    specialty: initialSpecialty,
    verifiedOnly: false,
    freeOnly: false,
  });

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return providers.filter((p) => {
      if (
        filters.specialty &&
        !p.specialties.includes(filters.specialty as any)
      )
        return false;
      if (filters.verifiedOnly && !p.verifiedByHelpHub) return false;
      if (filters.freeOnly && !p.freeFirstSession) return false;
      if (q) {
        const haystack =
          `${p.name} ${p.city} ${p.tagline} ${p.specialties.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          The directory
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">
          {results.length} {results.length === 1 ? "listing" : "listings"} ready
          to talk
        </h1>
        <p className="mt-2 max-w-xl text-ink-muted">
          We call or email before a listing goes live, to confirm they are still
          active. Licensed, certified, both, or neither, we show what they have
          told us, so you decide who is right for you.{" "}
          <Link
            href="/#verify"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            How we verify
          </Link>
        </p>
      </div>

      <FilterBar filters={filters} onChange={setFilters} />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <AnimatePresence mode="wait">
          {results.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {results.map((p) => (
                <ProviderCard key={p.slug} provider={p} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center border border-line py-24 text-center"
            >
              <SearchX className="h-8 w-8 text-ink-faint" />
              <p className="mt-4 font-display text-xl text-ink">
                Nothing matches that yet
              </p>
              <p className="mt-1 max-w-sm text-sm text-ink-muted">
                Try clearing a filter, or search a broader term, we're adding
                new listings regularly.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    query: "",
                    specialty: null,
                    verifiedOnly: false,
                    freeOnly: false,
                  })
                }
                className="mt-6 border border-line px-4 py-2 text-sm text-ink-muted hover:text-ink"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
