"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="terminal-card flex min-w-0 flex-col gap-3 rounded-lg p-3 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/42">Contract address</p>
        <p className="truncate font-mono text-sm text-white/88 sm:text-base">{address}</p>
      </div>
      <button
        type="button"
        onClick={copyAddress}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-4 font-mono text-xs uppercase tracking-[0.16em] text-signal transition hover:bg-signal/18"
        aria-label="Copy contract address"
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
