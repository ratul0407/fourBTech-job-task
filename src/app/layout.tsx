import type { Metadata } from "next";
import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-urbanist",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "Easy pay | Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
