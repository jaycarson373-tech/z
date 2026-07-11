import { formatTransmissionDate, type Transmission } from "@/lib/transmissions";

export function TransmissionCard({ transmission }: { transmission: Transmission }) {
  return (
    <article className="terminal-card rounded-lg p-5">
      <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
        <span className="rounded-full border border-signal/20 bg-signal/10 px-3 py-1 text-signal">
          {transmission.tag}
        </span>
        <time className="text-white/38">{formatTransmissionDate(transmission.created_at)}</time>
      </div>
      <h2 className="text-xl font-semibold text-white">{transmission.title}</h2>
      <pre className="mt-4 whitespace-pre-wrap font-mono text-sm leading-7 text-white/68">{transmission.body}</pre>
    </article>
  );
}
