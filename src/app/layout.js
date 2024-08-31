import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EleKars",
  description:
    "Book Your Electric Vehicle Online - Fast & Easy EV Car Rentals | Affordable EV Car Hire Services for a Greener Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
