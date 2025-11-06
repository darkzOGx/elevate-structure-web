import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

        {/* Google site verification - ADD YOUR CODE FROM SEARCH CONSOLE */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}

        {/* Bing site verification - ADD YOUR CODE FROM BING WEBMASTER */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
