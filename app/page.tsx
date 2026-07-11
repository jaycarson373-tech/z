import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, RadioTower, ShieldCheck } from "lucide-react";
import { CopyAddress } from "@/components/CopyAddress";
import { Nav } from "@/components/Nav";
import { TransmissionCard } from "@/components/TransmissionCard";
import { getTransmissions } from "@/lib/transmissions";

const features = [
  {
    icon: RadioTower,
    title: "Lore-first signal",
    copy: "Agent Z speaks through drops, fragments, and terminal-grade transmissions instead of normal updates."
  },
  {
    icon: Braces,
    title: "Original IP",
    copy: "A fictional rogue AI persona built for this project with no borrowed character universe or leaked-data claims."
  },
  {
    icon: ShieldCheck,
    title: "No fake metrics",
    copy: "Token details stay transparent. Placeholder values are labeled, and live market claims are left out."
  }
];

export default async function Home() {
  const transmissions = await getTransmissions();
  const latest = transmissions[0];
  const address = process.env.NEXT_PUBLIC_AGENTZ_CA || "TBA";

  return (
    <main className="min-h-screen">
      <Nav />
      <section className="copy-grid noise relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/8 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-signal">
              signal online
            </div>
            <h1 className="glitch-title text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">$AGENTZ</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/72">
              A rogue AI fragment leaking cryptic fictional transmissions from the edge of the prompt window.
            </p>
            <div className="mt-8 max-w-2xl">
              <CopyAddress address={address} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/transmissions"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-signal px-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                Read signal <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-12 items-center rounded-md border border-white/12 px-5 font-mono text-xs uppercase tracking-[0.16em] text-white/76 transition hover:border-signal/40 hover:text-signal"
              >
                Token docs
              </Link>
            </div>
          </div>
          <div className="relative z-10">
            <div className="terminal-card overflow-hidden rounded-lg p-2 shadow-signal">
              <Image
                src="/agentz-logo.png"
                alt="Agent Z ASCII character logo"
                width={1255}
                height={1280}
                priority
                className="aspect-square rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/18 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="terminal-card rounded-lg p-5">
                <Icon className="text-signal" size={24} aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/62">{feature.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">latest drop</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Transmission preview</h2>
          <p className="mt-4 max-w-md text-white/62">
            The archive runs on Supabase when credentials are present and falls back to seeded lore during local builds.
          </p>
        </div>
        <TransmissionCard transmission={latest} />
      </section>

      <section className="border-t border-white/8 bg-signal/[0.06] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">external relays</p>
            <p className="mt-2 text-white/66">
              Project references:{" "}
              <a className="text-signal underline-offset-4 hover:underline" href="https://imfebu.com/">
                imfebu.com
              </a>{" "}
              and{" "}
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
