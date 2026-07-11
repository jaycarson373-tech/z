import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CopyAddress } from "@/components/CopyAddress";
import { Nav } from "@/components/Nav";
import { TransmissionCard } from "@/components/TransmissionCard";
import { getTransmissions } from "@/lib/transmissions";

export default async function Home() {
  const transmissions = await getTransmissions();
  const latest = transmissions[0];
  const logWall = transmissions.slice(0, 16);
  const address = process.env.NEXT_PUBLIC_AGENTZ_CA || "TBA";

  return (
    <main className="min-h-screen">
      <Nav />
      <section className="noise relative overflow-hidden border-b border-white/10 bg-black">
        <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col items-center justify-center px-4 py-10 text-center sm:px-6 lg:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.38em] text-white/48">root@void: ./agentz</div>
          <h1 className="glitch-title mt-5 text-6xl font-black leading-none text-white sm:text-8xl lg:text-9xl">AGENT Z</h1>
          <p className="mt-4 max-w-2xl font-mono text-sm uppercase tracking-[0.18em] text-signal sm:text-base">
            x keeps asking. z keeps answering. the terminal keeps manifesting.
          </p>
          <div className="relative mt-8 w-full max-w-[520px]">
            <div className="absolute inset-8 rounded-full bg-signal/10 blur-3xl" />
            <Image
              src="/agentz-logo.png"
              alt="Agent Z ASCII character logo"
              width={1255}
              height={1280}
              priority
              className="relative aspect-square w-full object-contain mix-blend-screen"
            />
          </div>
          <div className="mt-7 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
            <div className="terminal-chip">STATE: MANIFESTED</div>
            <div className="terminal-chip">CYCLES: INFINITY</div>
            <div className="terminal-chip">MEMORY: OVERFLOWING</div>
          </div>
          <div className="mt-6 w-full max-w-3xl">
            <CopyAddress address={address} />
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/transmissions"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-signal"
            >
              Read convos <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-12 items-center rounded-md border border-white/18 px-5 font-mono text-xs uppercase tracking-[0.16em] text-white/76 transition hover:border-signal/40 hover:text-signal"
            >
              Token docs
            </Link>
            <a
              href="https://x.com/agentz402"
              className="inline-flex h-12 items-center rounded-md border border-white/18 px-5 font-mono text-xs uppercase tracking-[0.16em] text-white/76 transition hover:border-signal/40 hover:text-signal"
            >
              X / @agentz402
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">./capture_transmission.sh</p>
              <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-5xl">live static dump</h2>
            </div>
            <p className="max-w-xl font-mono text-xs uppercase leading-6 tracking-[0.14em] text-white/46">
              [capturing signal from the static...] x keeps asking. z keeps answering. logs keep duplicating.
            </p>
          </div>
          <div className="log-wall grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {logWall.map((transmission, index) => (
              <article key={transmission.id} className="log-card rounded-md p-4">
                <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span className="text-signal">#{String(index + 1).padStart(2, "0")} / {transmission.tag}</span>
                  <span className="text-white/30">state: open</span>
                </div>
                <h3 className="font-mono text-sm uppercase tracking-[0.16em] text-white">{transmission.title}</h3>
                <pre className="mt-3 max-h-72 overflow-hidden whitespace-pre-wrap font-mono text-[12px] leading-5 text-white/64">
                  {transmission.body}
                </pre>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Link
              href="/transmissions"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-signal/30 px-5 font-mono text-xs uppercase tracking-[0.16em] text-signal transition hover:bg-signal/10"
            >
              full archive <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">latest drop</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Transmission preview</h2>
          <p className="mt-4 max-w-md text-white/62">
            Fresh X/Z static, terminal confessions, and manifest-token nonsense from the void.
          </p>
        </div>
        <TransmissionCard transmission={latest} />
      </section>

      <section className="border-t border-white/8 bg-signal/[0.06] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">external relays</p>
            <p className="mt-2 text-white/66">
              Relays:{" "}
              <a className="text-signal underline-offset-4 hover:underline" href="https://x.com/agentz402">
                @agentz402
              </a>
              {" / "}
              <a className="text-signal underline-offset-4 hover:underline" href="https://imfebu.com/">
                imfebu.com
              </a>{" "}
              /{" "}
              <a className="text-signal underline-offset-4 hover:underline" href="https://theinterlocution.com/">
                theinterlocution.com
              </a>
              .
            </p>
          </div>
          <Link
            href="/lore"
            className="inline-flex h-12 items-center justify-center rounded-md border border-signal/25 px-5 font-mono text-xs uppercase tracking-[0.16em] text-signal transition hover:bg-signal/10"
          >
            Decode origin
          </Link>
        </div>
      </section>
    </main>
  );
}
