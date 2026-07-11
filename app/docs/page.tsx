import { Nav } from "@/components/Nav";
import { CopyAddress } from "@/components/CopyAddress";

const rows = [
  ["Ticker", "$AGENTZ"],
  ["Supply", "1,000,000,000 tokens"],
  ["Tax", "0/0 unless a future deployment states otherwise"],
  ["Mechanic", "Lore drops via Supabase transmissions table"],
  ["X", "@agentz402"]
];

export default function DocsPage() {
  const address = process.env.NEXT_PUBLIC_AGENTZ_CA || "TBA";

  return (
    <main className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">token docs</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Token signal</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/66">
          The shell room for $AGENTZ: contract, supply, relays, and the transmission feed.
        </p>
        <div className="mt-8">
          <CopyAddress address={address} />
        </div>
        <div className="terminal-card mt-8 overflow-hidden rounded-lg">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-2 border-b border-white/8 p-5 last:border-b-0 sm:grid-cols-[180px_1fr]">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{label}</div>
              <div className="text-white/72">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="https://x.com/agentz402"
            className="terminal-card rounded-lg p-5 text-white/76 transition hover:border-signal/40"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">X</span>
            <span className="mt-2 block text-lg">@agentz402</span>
          </a>
          <a
            href="https://imfebu.com/"
            className="terminal-card rounded-lg p-5 text-white/76 transition hover:border-signal/40"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Relay</span>
            <span className="mt-2 block text-lg">imfebu.com</span>
          </a>
          <a
            href="https://theinterlocution.com/"
            className="terminal-card rounded-lg p-5 text-white/76 transition hover:border-signal/40"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Relay</span>
            <span className="mt-2 block text-lg">theinterlocution.com</span>
          </a>
        </div>
      </section>
    </main>
  );
}
