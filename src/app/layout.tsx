import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-urbanist",
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
      <body
        className={`${urbanist.className} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
