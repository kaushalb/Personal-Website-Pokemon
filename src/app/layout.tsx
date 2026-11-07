import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_NAME } from "@/constants/site";
import { IntroOverlay } from "@/features/intro";
import { INTRO_SEEN_SCRIPT } from "@/lib/introScript";
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
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "A Pokémon-themed personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SEEN_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        <IntroOverlay />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
