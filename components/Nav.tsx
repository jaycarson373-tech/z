import Link from "next/link";
import Image from "next/image";
import { AGENTZ_CA, AGENTZ_DEXSCREENER_URL } from "@/lib/constants";

const links = [
  { href: "/", label: "Home" },
  { href: "/transmissions", label: "Transmissions" },
  { href: "/lore", label: "Lore" },
  { href: "/docs", label: "Docs" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-signal/10 bg-void/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm font-bold tracking-[0.2em] text-signal">
          <Image src="/agentz-logo.png" alt="" width={28} height={28} className="h-7 w-7 rounded-sm object-cover" />
          $AGENTZ
        </Link>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <div className="truncate rounded-full border border-signal/20 bg-signal/8 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-signal sm:max-w-[250px] lg:max-w-none">
            CA: <span className="lg:hidden">{AGENTZ_CA.slice(0, 6)}...{AGENTZ_CA.slice(-6)}</span>
            <span className="hidden lg:inline">{AGENTZ_CA}</span>
          </div>
          <div className="flex w-full items-center justify-between gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 font-mono text-[10px] uppercase text-white/62 sm:w-auto sm:justify-start sm:text-xs">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2 py-2 transition hover:bg-signal/10 hover:text-signal sm:px-3"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={AGENTZ_DEXSCREENER_URL}
              className="rounded-full px-2 py-2 transition hover:bg-signal/10 hover:text-signal sm:px-3"
            >
              Dexscreener
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
