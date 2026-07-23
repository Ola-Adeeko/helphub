"use client";

import { Search, ShieldCheck, Gift } from "lucide-react";
import { specialtyList } from "@/data/providers";

export interface Filters {
  query: string;
  specialty: string | null;
  verifiedOnly: boolean;
  freeOnly: boolean;
}

export default function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  return (
    <div className="sticky top-[65px] z-30 -mx-6 border-b border-line bg-bg/95 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              value={filters.query}
              onChange={(e) => onChange({ ...filters, query: e.target.value })}
              placeholder="Search by name, city, or what you need help with…"
              className="w-full rounded-full border border-line bg-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-accent/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onChange({ ...filters, verifiedOnly: !filters.verifiedOnly })
              }
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                filters.verifiedOnly
                  ? "border-secondary/40 bg-secondary-soft text-ink"
                  : "border-line bg-surface text-ink-muted hover:border-ink-faint"
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified only
            </button>
            <button
              onClick={() =>
                onChange({ ...filters, freeOnly: !filters.freeOnly })
              }
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                filters.freeOnly
                  ? "border-accent/40 bg-accent-soft text-ink"
                  : "border-line bg-surface text-ink-muted hover:border-ink-faint"
              }`}
            >
              <Gift className="h-3.5 w-3.5" />
              Free first session
            </button>
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-thin pb-1">
          <button
            onClick={() => onChange({ ...filters, specialty: null })}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition-colors ${
              filters.specialty === null
                ? "bg-ink text-bg font-medium"
                : "bg-surface2 text-ink-muted hover:text-ink"
            }`}
          >
            All areas
          </button>
          {specialtyList.map((s) => (
            <button
              key={s}
              onClick={() => onChange({ ...filters, specialty: s })}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition-colors ${
                filters.specialty === s
                  ? "bg-ink text-bg font-medium"
                  : "bg-accent-soft text-accent hover:text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
