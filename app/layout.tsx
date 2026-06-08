import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "M7 Bike & Scooters",
  title: {
    default: "M7 Bike & Scooters | Sale, Repair, Accessories",
    template: "%s | M7 Bike & Scooters"
  },
  description:
    "M7 Bike & Scooters is a local bicycle and scooter shop for repairs, new bike sales, used bike buying and selling, rentals, spare parts, accessories, and service centre support.",
  keywords: [
    "M7 Bike & Scooters",
    "bike repair",
    "scooter repair",
    "used bikes",
    "bike rental",
    "bike accessories",
    "bicycle shop"
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "M7 Bike & Scooters",
    description:
      "Bike repairs, scooter repairs, new bikes, used bikes, rentals, spare parts, and accessories in Salford.",
    url: siteUrl,
    siteName: "M7 Bike & Scooters",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "M7 Bike & Scooters social share card"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "M7 Bike & Scooters",
    description: "Sale - Repair - Accessories. All Bikes Spare Parts & Service Center.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
