"use client";

import { TransmissionCard } from "@/components/TransmissionCard";
import type { Transmission } from "@/lib/transmissions";
import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

export function TransmissionFilter({ transmissions }: { transmissions: Transmission[] }) {
  const [activeTag, setActiveTag] = useState("all");
  const tags = useMemo(() => Array.from(new Set(transmissions.map((item) => item.tag))).sort(), [transmissions]);
  const visible = activeTag === "all" ? transmissions : transmissions.filter((item) => item.tag === activeTag);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">Archive filter</p>
          <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Transmissions</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <SlidersHorizontal size={16} className="text-white/42" aria-hidden="true" />
          {["all", ...tags].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-md px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] transition ${
                activeTag === tag ? "bg-signal text-black" : "text-white/58 hover:bg-white/8 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {visible.map((transmission) => (
          <TransmissionCard key={transmission.id} transmission={transmission} />
        ))}
      </div>
    </section>
  );
}
