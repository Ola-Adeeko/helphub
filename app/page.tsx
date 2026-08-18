import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { providers, specialtyList } from "@/data/providers";

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
    "Recovery paths - clinical, peer-led, or both.",
  "Grief & Loss": "For the ones still learning how to carry it.",
  "Teen & Adolescent Support": "Counselling that speaks a teenager's language.",
};

const steps = [
  {
    n: "01",
    title: "We look for them",
    body: "Licensed psychologists, certified coaches, volunteer crisis lines, community groups. If they are doing this work in Nigeria, we want them on the same page.",
  },
  {
    n: "02",
    title: "We check they are reachable",
    body: "Before a listing goes live, we call or email to confirm they are still active. That is the check - not a license audit, and not an endorsement of their care.",
  },
  {
    n: "03",
    title: "You choose",
    body: "Free or paid. Individual or organisation. WhatsApp or a booking link. The directory lays the facts out. The decision stays yours.",
  },
];

export default function Home() {
  const cities = new Set(providers.map((p) => p.city)).size;
  const freeCount = providers.filter(
    (p) => p.freeFirstSession || p.priceFrom === 0,
  ).length;
  const featured = providers.filter((p) => p.verifiedByHelpHub).slice(0, 3);

  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-16 sm:py-20 lg:col-span-6 lg:py-28 lg:pr-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
              A directory of real people who can help across Nigeria
            </p>
            <h1 className="mt-5 font-display text-[2.75rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
              You don&apos;t have to
              <br />
              <span className="italic">carry this alone.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
              Not every problem needs a hospital. Not every conversation needs
              to start with a stranger. HelpHub shows you who is out there -
              licensed or not, free or not, so you can choose who to trust.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/directory"
                className="bg-accent px-6 py-3 text-[15px] font-medium text-accent-ink transition-colors hover:bg-accent-hover"
              >
                Find help near you
              </Link>
              <Link
                href="#story"
                className="text-[15px] text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                Why we built this
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:col-span-6 lg:min-h-[640px]">
            <Image
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1600&auto=format&fit=crop"
              alt="Two people in conversation in a quiet room"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4">
          {[
            { value: String(providers.length), label: "Listings so far" },
            { value: String(cities), label: "Cities so far" },
            { value: String(specialtyList.length), label: "Areas of support" },
            { value: String(freeCount), label: "Free first sessions" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8">
              <p className="font-display text-4xl font-medium tracking-tight text-ink">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="bg-forest text-[#e8e4db]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#8a9e97]">
              Why HelpHub exists
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 max-w-4xl font-display text-3xl font-medium leading-snug text-[#f6f4ef] md:text-[2.75rem] md:leading-[1.2]">
              You've probably known the feeling: needing to talk to someone, and
              not knowing where to even start. Not because help doesn't exist in
              Nigeria. It does. It's just scattered across referrals, expired
              numbers, and word of mouth, with no way to tell who's actually
              reachable.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-[#c5c0b4]">
                That gap is common in Nigeria. Good people are doing this work -
                licensed psychologists, certified coaches, community-run support
                groups, crisis lines run by volunteers, but they are scattered
                across referrals, WhatsApp statuses, and word of mouth.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-[#c5c0b4]">
                We are not a clinic, and we do not diagnose anything. We do the
                research and lay it out honestly. Some listings are free. Some
                cost money. What they share is that they are real, reachable,
                and confirmed active before they appear here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
              How the directory works
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              Find them. Check them. Leave the choice with you.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <p className="text-[13px] font-medium tracking-[0.14em] text-ink-faint">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="verify" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
              How we verify
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              We confirm they pick up. That is all.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Before a listing goes live, we call or email to check that the
              person or organisation is still active and reachable. We may do
              that again from time to time. HelpHub is a directory, not a
              clinic, and we do not diagnose, treat, or recommend anyone.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal delay={0.06}>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                What verified means
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink">
                We reached them. They confirmed the listing is current. A
                verified mark is not a quality rating, a clinical endorsement,
                or proof that they are the right person for you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                What it does not mean
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink">
                We are not a licensing board. We do not independently audit
                credentials with a regulator. Licensed or certified labels are
                what that listing has told us, and we show them so you can
                decide, not so we can guarantee them.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="categories" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:sticky lg:top-24 lg:col-span-4">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                What you will find
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                Ten areas of support.
              </h2>
              <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-muted">
                Start with what you are carrying. Each area opens the listings
                that actually work on it.
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <ol className="divide-y divide-line border-y border-line">
                {specialtyList.map((s, i) => (
                  <li key={s}>
                    <Link
                      href={`/directory?specialty=${encodeURIComponent(s)}`}
                      className="group flex items-baseline gap-5 py-5 transition-colors hover:bg-bg md:gap-8 md:px-4"
                    >
                      <span className="w-8 shrink-0 text-[13px] tabular-nums text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-xl text-ink group-hover:underline group-hover:underline-offset-4">
                          {s}
                        </span>
                        <span className="mt-1 block text-[15px] text-ink-muted">
                          {specialtyBlurb[s]}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                In the directory
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                A few people you can reach today.
              </h2>
            </div>
            <Link
              href="/directory"
              className="text-[15px] text-ink underline decoration-line underline-offset-[6px] hover:decoration-ink"
            >
              See every listing
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/directory/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface2">
                    <Image
                      src={p.photo}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                    {p.city}
                    {p.licensed
                      ? " · Licensed"
                      : p.certified
                        ? " · Certified"
                        : ""}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-ink group-hover:underline group-hover:underline-offset-4">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                    {p.tagline}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-tight text-accent-ink md:text-5xl">
              You don&apos;t have to know
              <br />
              <span className="italic">exactly what you need.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#c5c0b4]">
              Just start looking. The right person to talk to is closer than it
              feels right now.
            </p>
            <Link
              href="/directory"
              className="mt-10 inline-block bg-bg px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-surface2"
            >
              Browse the directory
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
