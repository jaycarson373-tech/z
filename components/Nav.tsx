import Link from "next/link";

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
        <Link href="/" className="font-mono text-sm font-bold tracking-[0.2em] text-signal">
          $AGENTZ
        </Link>
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
        </div>
      </nav>
    </header>
  );
}
