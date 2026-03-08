import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/index.sass"; // Твой главный файл стилей
import Header from "./components/Header";
import Footer from "./components/Footer";

// Оптимизированное подключение шрифта Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-main", // Эта переменная пойдет в твой globals.sass
  display: "swap",
});

// Профессиональная настройка метаданных (SEO)
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

// Настройка вьюпорта (опционально, но хороший тон)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Подключение иконок Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
          rel="stylesheet"
        />
      </head>
      {/* Передаем переменную шрифта в body. 
        antialiased сглаживает шрифты на macOS 
      */}
      <body className={`${inter.variable} antialiased`}>
        {/* Сюда позже можно будет добавить Header */}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {/* Сюда позже добавим Footer */}
      </body>
    </html>
  );
}