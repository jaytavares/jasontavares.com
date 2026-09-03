import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasontavares.com"),
  title: "Jay Tavares — Senior Backend & Cloud Engineer",
  description:
    "Backend and cloud engineer building reliable APIs, SaaS platforms, integrations, and data systems with TypeScript, Node.js, Firebase, GCP, and Temporal.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jay Tavares — Senior Backend & Cloud Engineer",
    description:
      "Developer of web applications and longtime hacker of electronic things in Providence, Rhode Island.",
    siteName: "Jay Tavares",
  },
  twitter: {
    card: "summary",
    title: "Jay Tavares — Senior Backend & Cloud Engineer",
    description:
      "Developer of web applications and longtime hacker of electronic things.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#071522",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
