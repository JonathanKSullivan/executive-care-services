import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Executive Care Services | Premium Home Care and Concierge Services",
  description: "Transform your home and lifestyle with Executive Care Services. We offer premium home cleaning, gourmet meal preparation, and compassionate home healthcare, tailored to meet your unique needs.",
  keywords: "home care, cleaning services, gourmet meals, home healthcare, luxury services, concierge services",
  openGraph: {
    type: "website",
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
    image: "https://www.executivecareservices.com/images/twitter-image.jpg",
  },
  robots: "index, follow",
  canonical: "https://www.executivecareservices.com",
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
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph for Social Media */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
