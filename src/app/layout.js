"use client";

import { useEffect } from 'react';

import '../assets/css/font-icons.css'; // Import Animate.css styles
import "swiper/css"; // Base Swiper styles
import "swiper/css/navigation"; // For navigation arrows
import "swiper/css/pagination"; // For pagination dots
import 'animate.css/animate.min.css'; // This points to version 3.x of animate.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../assets/css/bootstrap-select.min.css'; // Import Animate.css styles
import "./globals.css";
import "./page.module.css";
import Footer from "./_Components/Footer/Footer";
import Navbar from "./_Components/Navbar/Navbar";
import AddBootstrap from './AddBootstrap';
import ToolBar from './_Components/ToolBar/ToolBar';
import TopBar from './_Components/TopBar/TopBar';


export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
      script.onload = () => new WOW().init();
      document.body.appendChild(script);
    }
  }, []);

  return (
    <html lang="en" >
      <body >
        <AddBootstrap/>
       < TopBar/>
        <Navbar />
        <main>
          {children}
        </main>
        <ToolBar/>
        <Footer />
      </body>
    </html>
  );
}
