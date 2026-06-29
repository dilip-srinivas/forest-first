import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forest First | Ecological Restoration, Western Ghats",
  description: "Forest First protects and restores shola forests, native grasslands, and wildlife corridors in the Nilgiris and Western Ghats. An initiative of The Heritage Foundation (12A/80G).",
  metadataBase: new URL("https://forestfirst.org"),
  openGraph: {
    title: "Forest First | Ecological Restoration, Western Ghats",
    description: "Forest First protects and restores shola forests, native grasslands, and wildlife corridors in the Nilgiris and Western Ghats. An initiative of The Heritage Foundation (12A/80G).",
    url: "https://forestfirst.org",
    siteName: "Forest First",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest First | Ecological Restoration, Western Ghats",
    description: "Forest First protects and restores shola forests, native grasslands, and wildlife corridors in the Nilgiris and Western Ghats. An initiative of The Heritage Foundation (12A/80G).",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f3ef] text-gray-900">{children}</body>
    </html>
  );
}
