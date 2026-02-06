import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "../context/SearchContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Style Studio",
  description: "Premium Sarees For Every Occasion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* ✅ Razorpay Checkout Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
        <CartProvider>
          <SearchProvider>
            <Header />
            {children}
            <Footer />
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}
