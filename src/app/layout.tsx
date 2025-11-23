import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WebVitals } from "@/components/WebVitals";
import { Preloader } from "@/components/ui/Preloader";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import "./globals.css";

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
  title: 'Structural Engineer Orange County CA | Licensed PE | AAA Engineering Design',
  description: 'Licensed structural engineering services in Orange County & Southern California. Expert structural design, ADU engineering, seismic retrofitting. PE-stamped plans.',
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

        {/* Favicon */}
        <link rel="icon" href="/AAA-Logo.png" />
        <link rel="apple-touch-icon" href="/AAA-Logo.png" />
        <link rel="icon" type="image/png" href="/AAA-Logo.png" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Format detection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />

        {/* Search Engine Verification - REPLACE WITH YOUR ACTUAL CODES */}
        <meta name="google-site-verification" content="REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="REPLACE_WITH_YOUR_BING_VERIFICATION_CODE" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:site_name" content="AAA Engineering Design" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://aaaengineeringdesign.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="AAA Engineering Design - Licensed Structural Engineers in Orange County" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://aaaengineeringdesign.com/og-image.jpg" />
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
      </body>
    </html>
  );
}
