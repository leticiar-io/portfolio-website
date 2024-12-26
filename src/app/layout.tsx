import type { Metadata } from "next";
import { Anton, Playball, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const title = Anton({
  subsets: ["latin"],
  weight: "400",
});

const subtitle = Playball({
  subsets: ["latin"],
  weight: "400",
});

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lefolio",
  description: "Portfólio de Desenvolvimento Web & UI/UX Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${title.className} ${subtitle.className} ${font.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
