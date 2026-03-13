import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RentalCar — Find your perfect rental car",
  description: "Reliable and budget-friendly rentals for any journey",
  keywords: "car rental, rent a car, Ukraine",
  authors: [{ name: "Svitwave" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
