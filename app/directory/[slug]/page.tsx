import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Languages,
} from "lucide-react";
import { providers } from "@/data/providers";
import ContactActions from "@/components/ContactActions";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const provider = providers.find((p) => p.slug === params.slug);
  return {
    title: provider ? `${provider.name} — HelpHub Nigeria` : "Not found",
  };
}

export default function ProviderPage({ params }: { params: { slug: string } }) {
  const provider = providers.find((p) => p.slug === params.slug);
  if (!provider) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <Link
        href="/directory"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Back to directory
      </Link>

      <Reveal delay={0.05} className="mt-8">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-line sm:h-80">
          <Image
            src={provider.photo}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          {provider.verifiedByHelpHub && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-medium text-secondary shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified by HelpHub
            </div>
          )}
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs uppercase tracking-wider text-white/80">
              {provider.kind}
            </p>
            <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
              {provider.name}
            </h1>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink">
              {provider.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {provider.about}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-8">
            <p className="text-xs uppercase font-medium tracking-wider text-ink-muted">
              Areas of focus
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {provider.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-surface2 px-3 py-1.5 text-sm text-ink-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="text-xs uppercase font-medium tracking-wider text-ink-muted">
              Credentials
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck
                  className={`h-4 w-4 ${provider.licensed ? "text-secondary" : "text-ink-faint"}`}
                />
                <span
                  className={provider.licensed ? "text-ink" : "text-ink-faint"}
                >
                  {provider.licensed
                    ? "Licensed practitioner"
                    : "Not formally licensed"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BadgeCheck
                  className={`h-4 w-4 ${provider.certified ? "text-accent" : "text-ink-faint"}`}
                />
                <span
                  className={provider.certified ? "text-ink" : "text-ink-faint"}
                >
                  {provider.certified ? "Certified" : "Not formally certified"}
                </span>
              </div>
            </div>
            {provider.credentialNote && (
              <p className="mt-3 rounded-xl border border-line bg-surface2 px-4 py-3 text-sm text-ink-muted">
                {provider.credentialNote}
              </p>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="sticky top-24 rounded-2xl border border-line bg-surface p-6 shadow-sm">
            <p className="text-xs uppercase font-medium tracking-wider text-ink-faint">
              Session cost
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink">
              {provider.freeFirstSession
                ? "First session free"
                : provider.priceFrom
                  ? `From ₦${provider.priceFrom.toLocaleString()}`
                  : "Price varies"}
            </p>
            {provider.freeFirstSession && provider.priceFrom ? (
              <p className="mt-1 text-xs text-ink-muted">
                Then from ₦{provider.priceFrom.toLocaleString()} per session
              </p>
            ) : null}

            <div className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
              <MapPin className="h-4 w-4 shrink-0" /> {provider.city}, Nigeria
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-ink-muted">
              <Languages className="h-4 w-4 shrink-0" />{" "}
              {provider.languages.join(", ")}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <ContactActions contacts={provider.contacts} />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
