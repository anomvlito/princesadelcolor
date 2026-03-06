import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: ["400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Princesa del Color | Taller de Desabolladura y Pintura",
  description:
    "Taller especialista en desabolladura y pintura automotriz. Trabajos de calidad, resultados que se notan. Cotiza tu reparación hoy.",
  keywords: [
    "desabolladura",
    "pintura automotriz",
    "taller automotriz",
    "Princesa del Color",
    "reparación de autos",
  ],
  openGraph: {
    title: "Princesa del Color | Desabolladura y Pintura",
    description:
      "Especialistas en desabolladura y pintura automotriz. Calidad garantizada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${barlowCondensed.variable} ${barlow.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
