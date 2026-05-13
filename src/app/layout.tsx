import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danny Emmanuel Aboutou | Software Engineer",
  description:
    "Portfolio de Danny Emmanuel Aboutou — étudiant en génie logiciel à l'Université Laval. Projets, expériences et contact.",
  keywords: [
    "Danny Emmanuel Aboutou",
    "software engineer",
    "portfolio",
    "Université Laval",
    "génie logiciel",
    "LinkFolio",
  ],
  openGraph: {
    title: "Danny Emmanuel Aboutou | Software Engineer",
    description:
      "Portfolio de Danny Emmanuel Aboutou — étudiant en génie logiciel à l'Université Laval.",
    type: "website",
    locale: "fr_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny Emmanuel Aboutou | Software Engineer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
