"use client";

import { usePathname } from "next/navigation";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";  

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();

  const isHeroPage = pathname === "/";
  const isAdminRoute = pathname?.startsWith("/admin") || false;

  return (
    <>
      {!isHeroPage && !isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
