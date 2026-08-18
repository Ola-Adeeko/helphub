import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy - HelpHub Nigeria",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 md:py-24">
      <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
        Trust
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
        Privacy
      </h1>
      <p className="mt-3 text-[15px] text-ink-muted">
        Last updated: August 2026
      </p>

      <div className="mt-10 space-y-10 text-[17px] leading-relaxed text-ink">
        <p>
          HelpHub Nigeria is a public directory of therapists, coaches, and
          support organisations. We are not a clinic. We do not diagnose, treat,
          or store patient records. This policy explains what we collect and how
          we handle it, in line with the Nigeria Data Protection Act (NDPA)
          2023.
        </p>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            What we collect
          </h2>
          <p className="mt-3 text-ink-muted">
            This website does not ask you to create an account. You can browse
            the directory without giving us your name or contact details.
          </p>
          <p className="mt-4 text-ink-muted">
            If you email us at{" "}
            <a
              href="mailto:helphubnig@gmail.com"
              className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              helphubnig@gmail.com
            </a>
            , we will have whatever you put in that message, usually your email
            address, and anything you choose to write. We use that only to
            reply, correct a listing, or handle a request to add or remove one.
          </p>
          <p className="mt-4 text-ink-muted">
            When we verify a listing, we call or email the person or
            organisation named there to confirm they are still active. That
            contact is with them, not with people searching the directory.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            What is already public
          </h2>
          <p className="mt-3 text-ink-muted">
            Listings show information meant to be found: names, cities,
            specialties, fees where given, and ways to reach that provider. That
            is published so someone looking for help can use it. We do not sell
            it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            What we do not do
          </h2>
          <p className="mt-3 text-ink-muted">
            We do not sell personal information. We do not build a database of
            people who use the directory. We do not share your email with a
            listing unless you ask us to.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            Cookies and analytics
          </h2>
          <p className="mt-3 text-ink-muted">
            The site does not currently run advertising cookies or a marketing
            tracker. If that changes, we will update this note.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            Your rights
          </h2>
          <p className="mt-3 text-ink-muted">
            Under the NDPA, you have the right to know what we hold about you,
            to have it corrected, and to have it deleted. To exercise any of
            these, or to correct or remove a listing, write to{" "}
            <a
              href="mailto:helphubnig@gmail.com"
              className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              helphubnig@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            Children
          </h2>
          <p className="mt-3 text-ink-muted">
            The directory is for adults looking for support, including support
            for young people. It is not a service that collects information from
            children.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium text-ink">
            Changes
          </h2>
          <p className="mt-3 text-ink-muted">
            If how we handle information changes, we will update this page and
            the date above.
          </p>
        </section>
      </div>
    </article>
  );
}
