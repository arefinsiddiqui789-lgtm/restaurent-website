import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olivetta — Mediterranean Kitchen in San Francisco",
  description:
    "Olivetta is a Mediterranean kitchen in San Francisco serving wood-fired dishes, handmade pasta, and seasonal plates in a warm, intimate room.",
  keywords: [
    "Olivetta",
    "Mediterranean restaurant",
    "San Francisco restaurant",
    "wood-fired",
    "handmade pasta",
  ],
  authors: [{ name: "Olivetta" }],
  openGraph: {
    title: "Olivetta — Mediterranean Kitchen",
    description:
      "Wood-fired plates, handmade pasta, and seasonal produce from Bay Area farms.",
    siteName: "Olivetta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
