import type { Metadata } from "next";
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
  title: "Danny Emmanuel Aboutou | Software Engineer",
  description:
    "Portfolio de Danny Emmanuel Aboutou — étudiant en génie logiciel à l'Université Laval. Projets, compétences et expériences.",
  keywords: [
    "Danny Emmanuel Aboutou",
    "software engineer",
    "portfolio",
    "Université Laval",
    "génie logiciel",
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
    description:
      "Portfolio de Danny Emmanuel Aboutou — étudiant en génie logiciel à l'Université Laval.",
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
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
