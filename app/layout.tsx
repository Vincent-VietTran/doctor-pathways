import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // base URL used to resolve relative social images
  // TODO: replace url with actual domain URL
  metadataBase: new URL('https://doctor-pathways.com'),
  title: "Doctor Pathways - Medical Specialty Training in Australia",
  description:
    "Your guide to medical specialty training in Australia. Navigate your journey from medical school to specialty training with comprehensive information on pathways, requirements, and applications.",
  keywords: [
    "medical specialty training",
    "Australia medical pathways",
    "doctor training",
    "medical school",
    "specialty training",
    "AHPRA",
    "medical colleges",
    "residency training",
    "medical career",
    "Australian medicine",
  ],
  openGraph: {
    type: "website",
    siteName: "Doctor Pathways",
    locale: "en_AU",
    // TODO: replace url with actual domain URL
    url: "https://doctor-pathways.com",
    title: "Doctor Pathways - Medical Specialty Training in Australia",
    description:
      "Your guide to medical specialty training in Australia. Navigate your journey from medical school to specialty training with comprehensive information on pathways, requirements, and applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doctor Pathways - Medical Specialty Training Guide",
      },
    ],
  },
  authors: [
    {
      name: "Doctor Pathways",
    },
  ],
  creator: "Doctor Pathways",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
