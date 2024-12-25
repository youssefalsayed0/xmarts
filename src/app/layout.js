"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination } from "swiper"; // Import Swiper modules
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // For navigation arrows
import 'swiper/css/pagination'; // For pagination dots
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'animate.css'; // Import Animate.css styles
import "./globals.css";
import "./page.module.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import Footer from "./_Components/Footer/Footer";
import Navbar from "./_Components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
