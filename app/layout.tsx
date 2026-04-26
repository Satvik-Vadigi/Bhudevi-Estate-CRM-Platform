import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Bhudevi Estate | Premium Real Estate",
    template: "%s | Bhudevi Estate",
  },

  description:
    "Trusted real estate advisory for luxury homes, investment assets and premium property opportunities.",

  keywords: [
    "Bhudevi Estate",
    "real estate",
    "plots for sale",
    "land investment",
    "villas",
    "property dealer",
    "farmland",
    "premium properties",
  ],

  authors: [{ name: "Bhudevi Estate" }],

  openGraph: {
    title: "Bhudevi Estate",
    description:
      "Modern real estate rooted in trust.",
    url: "https://bhudeviestate.com",
    siteName: "Bhudevi Estate",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhudevi Estate",
    description:
      "Premium real estate opportunities.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}