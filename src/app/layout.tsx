import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata } from '@/lib/seo'
import { COMPANY_INFO, KEYWORDS } from '@/lib/constants'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata({
  title: `${KEYWORDS.primary.charAt(0).toUpperCase() + KEYWORDS.primary.slice(1)} in ${KEYWORDS.location[0]} | ${COMPANY_INFO.name}`,
  description: COMPANY_INFO.description,
  keywords: [KEYWORDS.primary, ...KEYWORDS.secondary, ...KEYWORDS.location],
  url: COMPANY_INFO.website,
  siteName: COMPANY_INFO.name,
});

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

        {/* Google site verification (replace with actual) */}
        <meta name="google-site-verification" content="your-google-verification-code" />

        {/* Bing site verification (replace with actual) */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Yandex site verification (replace with actual) */}
        <meta name="yandex-verification" content="your-yandex-verification-code" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        {children}

        {/* Analytics scripts - uncomment and add your GA ID when ready */}
        {/* {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )} */}
      </body>
    </html>
  );
}
