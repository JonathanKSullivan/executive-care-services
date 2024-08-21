import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Executive Care Services | Premium Home Care and Concierge Services",
  description: "Transform your home and lifestyle with Executive Care Services. We offer premium home cleaning, gourmet meal preparation, and compassionate home healthcare, tailored to meet your unique needs.",
  keywords: ["home care", "cleaning services", "gourmet meals", "home healthcare", "luxury services", "concierge services"],
  openGraph: {
    url: "https://www.executivecareservices.com",
    title: "Executive Care Services | Premium Home Care and Concierge Services",
    description: "Discover how Executive Care Services can transform your home and lifestyle with premium services tailored to your needs.",
    images: [
      {
        url: "https://www.executivecareservices.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Executive Care Services - Premium Home Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@executivecare",
    title: "Executive Care Services | Premium Home Care and Concierge Services",
    description: "Transform your home with Executive Care Services' premium offerings, including home cleaning, gourmet meals, and healthcare services.",
    images: [
      {
        url: "https://www.executivecareservices.com/images/twitter-image.jpg",
        alt: "Executive Care Services - Premium Home Care",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords ?? ""} />
        <meta name="robots" content={typeof metadata.robots === 'string' ? metadata.robots : "index, follow"} />
        <link rel="canonical" href={metadata.openGraph?.url?.toString() ?? "https://www.executivecareservices.com"} />

        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph for Social Media */}
        {metadata.openGraph && (
          <>
            <meta property="og:url" content={metadata.openGraph.url?.toString()} />
            <meta property="og:title" content={typeof metadata.openGraph.title === 'string' ? metadata.openGraph.title : metadata.openGraph.title?.toString()} />
            <meta property="og:description" content={metadata.openGraph.description} />
            {Array.isArray(metadata.openGraph.images) && metadata.openGraph.images[0] && (
              <>
                {/* <meta property="og:image" content={metadata.openGraph.images[0]?.url?.toString()} /> */}
                {/* <meta property="og:image:width" content={metadata.openGraph.images[0]?.width?.toString()} /> */}
                <meta property="og:image:height" content={metadata.openGraph.images[0]?.height?.toString()} />
                <meta property="og:image:alt" content={metadata.openGraph.images[0]?.alt?.toString()} />
              </>
            )}
          </>
        )}

        {/* Twitter Card */}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:site" content={metadata.twitter.site?.toString()} />
            <meta name="twitter:title" content={typeof metadata.twitter.title === 'string' ? metadata.twitter.title : metadata.twitter.title?.toString()} />
            <meta name="twitter:description" content={metadata.twitter.description?.toString()} />
            {Array.isArray(metadata.twitter.images) && metadata.twitter.images[0] && (
              <>
                <meta name="twitter:image" content={metadata.twitter.images[0]?.url?.toString()} />
                <meta name="twitter:image:alt" content={metadata.twitter.images[0]?.alt?.toString()} />
              </>
            )}
          </>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
