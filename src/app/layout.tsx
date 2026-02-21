import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WebVitals } from "@/components/WebVitals";
import { Preloader } from "@/components/ui/Preloader";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import "./globals.css";

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const BING_MSVALIDATE = process.env.NEXT_PUBLIC_BING_MSVALIDATE;

const OTHER_VERIFICATION_META: Record<string, string> = {
  ...(GOOGLE_SITE_VERIFICATION ? { 'google-site-verification': GOOGLE_SITE_VERIFICATION } : {}),
  ...(BING_MSVALIDATE ? { 'msvalidate.01': BING_MSVALIDATE } : {}),
  // Bing crawler directives - allow full indexing with rich snippets
  'bingbot': 'index, follow, max-snippet:-1, max-image-preview:large',
  // Author meta (Bing weights social signals)
  'author': 'AAA Engineering Design',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aaaengineeringdesign.com'),
  alternates: {
    canonical: './',
  },
  title: 'Structural Engineer Orange County CA | Licensed PE | AAA Engineering Design',
  description: 'Licensed structural engineering services in Orange County & Southern California. Expert structural design, ADU engineering, seismic retrofitting. PE-stamped plans.',
  keywords: 'structural engineer Orange County, structural engineering California, ADU structural engineer, seismic retrofit engineer, foundation engineer, PE licensed engineer, residential structural engineer near me, commercial structural engineer, load bearing wall removal, structural inspection',
  icons: {
    icon: '/AAA-Logo.png',
    apple: '/AAA-Logo.png',
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    siteName: 'AAA Engineering Design',
    type: 'website',
    locale: 'en_US',
    url: 'https://aaaengineeringdesign.com',
    title: 'Structural Engineer Orange County CA | Licensed PE | AAA Engineering Design',
    description: 'Licensed structural engineering services in Orange County & Southern California. Expert structural design, ADU engineering, seismic retrofitting. PE-stamped plans.',
    images: [
      {
        url: 'https://aaaengineeringdesign.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AAA Engineering Design - Licensed Structural Engineers in Orange County',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://aaaengineeringdesign.com/og-image.jpg'],
  },
  ...(Object.keys(OTHER_VERIFICATION_META).length ? { other: OTHER_VERIFICATION_META } : {}),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Syndication */}
        <link rel="alternate" type="application/rss+xml" title="AAA Engineering Design Blog RSS" href="/feed.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary`}
      >
        <Preloader />
        <WebVitals />
        <NoiseOverlay />
        <ScrollProgress />
        {children}
        <FloatingCTA />
        <ExitIntentModal />
      </body>
    </html>
  );
}
