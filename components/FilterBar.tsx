"use client";

import { Search } from "lucide-react";
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
    <div className="sticky top-[61px] z-30 border-y border-line bg-surface px-6 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              value={filters.query}
              onChange={(e) => onChange({ ...filters, query: e.target.value })}
              placeholder="Search by name, city, or what you need help with"
              className="w-full border border-line bg-bg py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-accent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onChange({ ...filters, verifiedOnly: !filters.verifiedOnly })
              }
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                filters.verifiedOnly
                  ? "bg-ink text-bg"
                  : "border border-line bg-bg text-ink-muted hover:text-ink"
              }`}
            >
              Verified
            </button>
            <button
              onClick={() =>
                onChange({ ...filters, freeOnly: !filters.freeOnly })
              }
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                filters.freeOnly
                  ? "bg-ink text-bg"
                  : "border border-line bg-bg text-ink-muted hover:text-ink"
              }`}
            >
              Free first session
            </button>
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-thin pb-1">
          <button
            onClick={() => onChange({ ...filters, specialty: null })}
            className={`shrink-0 px-3 py-1.5 text-xs transition-colors ${
              filters.specialty === null
                ? "bg-ink text-bg font-medium"
                : "border border-line bg-bg text-ink-muted hover:text-ink"
            }`}
          >
            All areas
          </button>
          {specialtyList.map((s) => (
            <button
              key={s}
              onClick={() => onChange({ ...filters, specialty: s })}
              className={`shrink-0 px-3 py-1.5 text-xs transition-colors ${
                filters.specialty === s
                  ? "bg-ink text-bg font-medium"
                  : "border border-line bg-bg text-ink-muted hover:text-ink"
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
