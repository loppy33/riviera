import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import "../../styles/index.sass"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Riviera | Private Real Estate",
  description: "Exclusive access to the most prestigious off-market properties on the Côte d'Azur.",
  keywords: ["luxury real estate", "french riviera", "off-market properties", "cannes", "monaco"],
  authors: [{ name: "Luxury Riviera" }],
  openGraph: {
    title: "Luxury Riviera | Private Real Estate",
    description: "Exclusive access to the most prestigious off-market properties on the Côte d'Azur.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
import { notFound } from 'next/navigation';

const locales = ['en', 'fr', 'ru']; // твои языки
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const { locale } = await props.params; // <- await обязателен
  if (!['en', 'fr', 'ru'].includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          <main>{props.children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}