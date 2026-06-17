import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeyPaper — Donde aprender es divertido",
  description: "Papelería moderna para niños en Soacha, Colombia. Cuadernos, colores, mochilas y más. Diseñado a la altura y gusto de los niños.",
  keywords: "papelería niños Soacha, útiles escolares, cuadernos coloridos, regreso a clases Colombia",
  openGraph: {
    title: "HeyPaper — Donde aprender es divertido",
    description: "Papelería moderna para niños en Soacha. Una experiencia visual, no solo una tienda.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-crema text-foreground font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
