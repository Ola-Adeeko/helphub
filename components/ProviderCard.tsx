"use client";

import Image from "next/image";
import Link from "next/link";
import { Provider } from "@/lib/types";
import ContactActions from "./ContactActions";

export default function ProviderCard({
  provider,
}: {
  provider: Provider;
  index?: number;
}) {
  const price = provider.freeFirstSession
    ? "First session free"
    : provider.priceFrom
      ? `From ₦${provider.priceFrom.toLocaleString()}`
      : "Price varies";

  const marks = [
    provider.verifiedByHelpHub ? "Verified" : null,
    provider.licensed ? "Licensed" : null,
    provider.certified ? "Certified" : null,
  ].filter(Boolean);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-ink/25">
      <Link href={`/directory/${provider.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
          <Image
            src={provider.photo}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col px-5 py-5">
          <p className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">
            {provider.kind} · {provider.city}
          </p>
          <h3 className="mt-1.5 font-display text-[1.65rem] font-medium leading-tight text-ink group-hover:underline group-hover:underline-offset-4">
            {provider.name}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            {provider.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {provider.specialties.slice(0, 2).map((s) => (
              <span
                key={s}
                className="border border-line bg-bg px-2 py-0.5 text-[11px] text-ink-muted"
              >
                {s}
              </span>
            ))}
            {provider.specialties.length > 2 && (
              <span className="border border-line bg-bg px-2 py-0.5 text-[11px] text-ink-faint">
                +{provider.specialties.length - 2}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            <p className="text-[12px] text-ink-muted">
              {marks.length > 0 ? marks.join(" · ") : "Credentials as listed"}
            </p>
            <p className="text-[13px] font-medium text-ink">{price}</p>
          </div>
        </div>
      </Link>

      <div className="border-t border-line px-5 py-3.5">
        <ContactActions contacts={provider.contacts} size="sm" />
      </div>
    </article>
  );
}
