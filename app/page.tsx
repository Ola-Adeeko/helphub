import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroHeadline from "@/components/HeroHeadline";
import FloatingCards from "@/components/FloatingCards";
import { specialtyList } from "@/data/providers";

const specialtyBlurb: Record<string, string> = {
  "Abuse & Domestic Violence":
    "Support to leave, recover, or simply talk it through.",
  "Sexual Assault & Rape": "Trauma-informed care, at your pace.",
  "Suicide & Crisis Support": "Someone to call when it feels unbearable.",
  "Depression & Anxiety": "Clinical and community options, side by side.",
  "Couples & Marriage": "Before, during, or after the hardest conversations.",
  "Family Therapy": "For the households carrying more than one story.",
  "Workplace & Stress": "Burnout, pressure, and the job that won't let up.",
  "Addiction & Substance Abuse":
    "Recovery paths — clinical, peer-led, or both.",
  "Grief & Loss": "For the ones still learning how to carry it.",
  "Teen & Adolescent Support": "Counselling that speaks a teenager's language.",
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />A directory
              of real people who can help, across Nigeria
            </div>
            <HeroHeadline />
            <p className="mt-6 max-w-lg text-balance text-lg text-ink-muted">
              Not every problem needs a hospital. Not every conversation needs
              to start with a stranger. HelpHub simply shows you who's out there
              — licensed or not, certified or not, free or not — so you can
              choose who to trust.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/directory"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition-transform hover:scale-[1.03] hover:bg-accent-hover"
              >
                Find help near you
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#story"
                className="text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
              >
                Read why we built this
              </Link>
            </div>
          </div>

          <FloatingCards photoUrl="/hero.webp" />
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <p className="font-mono font-medium text-sm uppercase tracking-wider text-accent">
            Why HelpHub exists
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 font-display text-2xl font-semibold leading-relaxed text-ink md:text-3xl text-balance">
            Someone we know spent four months looking for a therapist. Not
            because none existed — but because nobody could tell her which ones
            did the kind of work she needed, what they'd cost, or how to
            actually reach them.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            That gap is common in Nigeria. Good people are doing this work —
            licensed psychologists, certified coaches, community-run support
            groups, crisis lines run by volunteers — but they're scattered
            across referrals, WhatsApp statuses, and word of mouth. There's no
            single place to see them side by side.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            We're not a clinic, and we don't diagnose anything. We do the
            research — checking who's licensed, who's certified, who's neither
            but still doing meaningful work — and lay it out honestly, so the
            choice is yours to make with real information.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Some listings are free. Some cost money. Some are individuals, some
            are organisations. What they share is that they're real, reachable,
            and reviewed by us before they ever appear here.
          </p>
        </Reveal>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-14 max-w-xl">
          <p className="font-mono text-sm font-medium uppercase tracking-wider text-secondary">
            What you'll find in the directory
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
            Ten areas. Hundreds of ways to start.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialtyList.map((s, i) => (
            <Reveal key={s} delay={Math.min(i * 0.04, 0.3)}>
              <Link
                href={`/directory?specialty=${encodeURIComponent(s)}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink">
                    {s}
                  </h3>
                  <p className="mt-2 text-base text-ink-muted">
                    {specialtyBlurb[s]}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Browse listings
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative mx-auto max-w-5xl px-6 pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface2 px-8 py-16 text-center md:py-20">
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl text-balance">
                You don't have to know exactly what you need.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-ink-muted">
                Just start looking. The right person to talk to is closer than
                it feels right now.
              </p>
              <Link
                href="/directory"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition-transform hover:scale-[1.03] hover:bg-accent-hover"
              >
                Browse the directory
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
