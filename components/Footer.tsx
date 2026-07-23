import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface2/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-2xl border border-danger/25 bg-danger-soft p-6 mb-12">
          <p className="font-display text-lg font-semibold text-ink mb-1">
            If you're in immediate danger or thinking about suicide right now
          </p>
          <p className="text-sm text-ink-muted leading-relaxed">
            Please don't wait to browse the directory — call the nearest
            emergency service or a crisis line first. HelpHub is a directory,
            not an emergency responder, and every listing here is checked, but
            response time isn't instant.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display font-semibold text-ink mb-3">
              HelpHub Nigeria
            </p>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              A directory of therapists, coaches, and support organisations
              across Nigeria — so asking for help isn't the hardest part.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-3">
                Explore
              </p>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>
                  <Link href="/directory" className="hover:text-ink">
                    Full directory
                  </Link>
                </li>
                <li>
                  <Link href="/#story" className="hover:text-ink">
                    Our story
                  </Link>
                </li>
                <li>
                  <Link href="/#categories" className="hover:text-ink">
                    Areas of support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-3">
                For providers
              </p>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>
                  <a className="hover:text-ink">List your practice</a>
                </li>
                <li>
                  <a className="hover:text-ink">Verification process</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-3">
                Trust
              </p>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>
                  <a className="hover:text-ink">How we verify listings</a>
                </li>
                <li>
                  <a className="hover:text-ink">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-ink-faint">
          © {new Date().getFullYear()} HelpHub Nigeria. Not a substitute for
          emergency services.
        </p>
      </div>
    </footer>
  );
}
