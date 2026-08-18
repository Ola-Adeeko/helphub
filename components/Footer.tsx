import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-[#e8e4db]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="border border-[#2c4a43] bg-[#16332c] px-6 py-6 md:px-8">
          <p className="font-display text-xl text-[#f6f4ef]">
            If you are in immediate danger or thinking about suicide
          </p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#c5c0b4]">
            Do not wait to browse this directory. Call emergency services or a
            crisis line first. HelpHub is a directory, not an emergency
            responder, and listings are checked by phone or email to confirm
            they are active, but nobody here can reach you instantly.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl text-[#f6f4ef]">HelpHub</p>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[#c5c0b4]">
              A directory of therapists, coaches, and support organisations
              across Nigeria, so asking for help is not the hardest part.
            </p>
            <a
              href="mailto:helphubnig@gmail.com"
              className="mt-5 inline-block text-[15px] text-[#c5c0b4] hover:text-[#f6f4ef]"
            >
              helphubnig@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a9e97]">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-[15px] text-[#c5c0b4]">
                <li>
                  <Link href="/directory" className="hover:text-[#f6f4ef]">
                    Full directory
                  </Link>
                </li>
                <li>
                  <Link href="/#story" className="hover:text-[#f6f4ef]">
                    Why we exist
                  </Link>
                </li>
                <li>
                  <Link href="/#categories" className="hover:text-[#f6f4ef]">
                    Areas of support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a9e97]">
                Trust
              </p>
              <ul className="mt-4 space-y-2 text-[15px] text-[#c5c0b4]">
                <li>
                  <Link href="/#verify" className="hover:text-[#f6f4ef]">
                    How we verify
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#f6f4ef]">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-[#2c4a43] pt-6 text-xs text-[#8a9e97]">
          © {new Date().getFullYear()} HelpHub Nigeria. Not a substitute for
          emergency services.
        </p>
      </div>
    </footer>
  );
}
