import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agentz.local";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "$AGENTZ | Signal Online",
  description: "A lore-driven AI-agent persona coin transmitting from the static.",
  openGraph: {
    title: "$AGENTZ | Signal Online",
    description: "Agent Z leaks fictional lore transmissions from a rogue AI fragment.",
    images: ["/agentz-og.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "$AGENTZ | Signal Online",
    description: "A lore-driven AI-agent persona coin transmitting from the static.",
    images: ["/agentz-og.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
